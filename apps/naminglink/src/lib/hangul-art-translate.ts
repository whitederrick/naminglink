import { isLocaleCode } from "@/lib/locale-codes";
import "server-only";

import OpenAI from "openai";

import { AiUsageRecorder } from "@/lib/ai-usage";
import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";

// 발음 표기 아트 PDF(HANGUL_ART_PDF)의 해설을 **영어로 옮긴다.**
//
// 이 상품은 원래 AI를 다시 부르지 않는다 — 화면 결과에 이미 이용자 언어로 담긴 필드를 그대로
// 재구성한다(`hangul-art-premium.ts`). 그 원칙에 여기 하나만 예외를 둔다.
//
// **아랍어·크메르어 이용자 때문이다.** 그 두 언어는 PDF를 영어로 내는데(`pdf-language.ts`),
// 해설을 복사해 오는 구조라 문서만 영어이고 본문은 아랍어인 파일이 나간다. 그러면 애초에
// 영어로 내는 이유(읽을 수 없는 지면·렌더 실패)를 그대로 다시 맞는다.
//
// **번역이지 창작이 아니다.** 모델에는 옮길 문장만 주고, 없는 사실을 더하지 말라고 못 박는다.
// 새 근거가 생기지 않으므로 "입력값·조회 데이터만 근거로" 원칙과 어긋나지 않는다.
//
// 결제가 끝난 주문에서만 부른다(`premium-reports/[sessionId]/generate`). 미결제 주문에
// 모델 비용이 붙지 않도록 주문 시점이 아니라 생성 시점에 둔 것이다.

/** 옮길 자유서술 필드. 표기·음가(hangul·pronunciation·ipa·syllables)는 언어와 무관하므로 건드리지 않는다. */
const TRANSLATED_FIELDS = [
  "source_pronunciation_basis",
  "recommendation_reason",
  "cultural_fit",
  "usage_note",
  "caution_notes",
] as const;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseJson(content: string | null | undefined) {
  try {
    return JSON.parse(content ?? "{}") as Record<string, unknown>;
  } catch {
    return {};
  }
}

// mini는 지시한 snake_case 키를 camelCase로 돌려주는 실수를 종종 한다. 읽는 쪽에서 둘 다 흡수한다.
function camelOf(key: string) {
  return key.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

/**
 * 후보들의 해설을 영어로 옮긴 새 후보 배열을 돌려준다.
 *
 * 한 필드라도 비어 돌아오면 **원문을 그대로 둔다.** 유료 문서에서 빈 칸은 번역이 어색한 것보다
 * 나쁘고, 원문이 남으면 적어도 무엇이 빠졌는지 이용자가 안다.
 */
export async function translateHangulArtCandidates(
  candidates: Array<Record<string, unknown>>,
  sourceLanguage: string,
): Promise<Array<Record<string, unknown>>> {
  if (candidates.length === 0) return candidates;
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("AI 기능이 준비되지 않았습니다.");
  }
  const sourceName = isLocaleCode(sourceLanguage) ? OUTPUT_LANGUAGE_NAMES[sourceLanguage] : sourceLanguage;
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 40_000, maxRetries: 1 });
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
  const usage = new AiUsageRecorder("HANGUL_ART_PDF");

  // 후보 단위로 나눠 부른다(최대 3개). 한 번에 묶으면 한 후보의 실패가 전부를 무너뜨린다.
  const translateOne = async (candidate: Record<string, unknown>) => {
    const source: Record<string, string> = {};
    for (const field of TRANSLATED_FIELDS) {
      const value = text(candidate[field]);
      if (value) source[field] = value;
    }
    if (Object.keys(source).length === 0) return candidate;

    const completion = await openai.chat.completions.create({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You translate a paid keepsake document from ${sourceName} into English.`,
            "Translate faithfully and naturally. Do NOT add, remove, summarise or embellish anything: every claim in the output must already be in the input.",
            "Keep Hangul name strings, romanisations and IPA exactly as they appear.",
            "Return valid JSON with exactly the same keys you were given, each a non-empty English string.",
          ].join(" "),
        },
        { role: "user", content: JSON.stringify(source, null, 2) },
      ],
    });
    usage.record(completion);
    const parsed = parseJson(completion.choices[0]?.message?.content);
    const translated: Record<string, unknown> = { ...candidate };
    for (const field of TRANSLATED_FIELDS) {
      if (!source[field]) continue;
      const value = text(parsed[field]) || text(parsed[camelOf(field)]);
      // 비어 오면 원문을 남긴다.
      if (value) translated[field] = value;
    }
    return translated;
  };

  try {
    const translated = await Promise.all(candidates.map(translateOne));
    await usage.flush("SUCCESS");
    return translated;
  } catch (error) {
    await usage.flush("ERROR", error instanceof Error ? error.message.slice(0, 100) : "unknown");
    throw error;
  }
}
