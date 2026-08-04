import "server-only";

import { createHash } from "node:crypto";
import OpenAI from "openai";

import type { PersonReading } from "@/lib/engines";
import {
  TODAY_FORTUNE_VERSION,
  type TodayFortune,
} from "@/lib/engines/today-fortune";
import type { Locale } from "@/lib/i18n";
import { localeLanguageName } from "@/lib/locale-codes";
import {
  buildSajuFactors,
  PROMPT_VERSION,
  sajuOutputInstruction,
  sajuSystemPrompt,
} from "@/lib/prompts";
import type { ReportKind } from "@/lib/report-product";

/**
 * 사주 해설 생성. **결제한 리포트에서만 부른다.**
 *
 * 무료 원국·오늘의 운세는 엔진 값을 화면이 그대로 그린다. 그쪽이 트래픽을 받는 자리라
 * 조회마다 모델을 때리면 **API 비용·응답 지연·페이지 속도**가 함께 나빠지고, 광고 수익으로
 * 사는 화면에서 그건 그대로 손해다(사용자 지시, 2026-08-04).
 *
 * naminglink의 `lib/openai.ts` 패턴을 그대로 가져왔다 — 같은 키(`OPENAI_API_KEY`), 같은 모델
 * 기본값(gpt-4o-mini), 같은 JSON 강제. 새로 설계한 것이 아니다.
 */

let client: OpenAI | null = null;

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) return null;
  client ??= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 30_000,
    maxRetries: 1,
  });
  return client;
}

export type SajuInterpretation = {
  summary: string;
  personality: string;
  element_balance: string;
  today: { headline: string; message: string; advice: string; lucky_note: string };
  strengths: string[];
  cautions: string[];
  domains: { wealth: string; love: string; career: string; health: string };
  year_outlook?: string;
  disclaimer: string;
};

/**
 * 캐시 키 — `입력해시 + 엔진버전 + 프롬프트버전 + locale + tier + 날짜`.
 *
 * **날짜가 들어가는 이유**: 해설이 오늘의 운세를 언급하므로 자정을 넘기면 다른 글이어야 한다.
 * **엔진·프롬프트 버전이 들어가는 이유**: 규칙이나 지시를 고치면 옛 글이 그대로 나오면 안 된다.
 */
function cacheKey(
  factors: ReturnType<typeof buildSajuFactors>,
  kind: ReportKind,
  locale: Locale,
) {
  const inputHash = createHash("sha256")
    .update(JSON.stringify(factors.natal))
    .digest("hex")
    .slice(0, 32);
  return [inputHash, TODAY_FORTUNE_VERSION, PROMPT_VERSION, locale, kind, factors.today.date].join(":");
}

/**
 * 한 프로세스 안의 캐시.
 *
 * **재발급이 이 캐시의 존재 이유다.** 같은 주문으로 다섯 번까지 다시 받을 수 있는데
 * (`REISSUE_LIMIT`), 그때마다 모델을 부르면 한 번 판 값으로 다섯 번 비용을 낸다.
 *
 * 서버리스라 인스턴스가 바뀌면 사라진다. **그 이상이 필요해지면 DB 표로 옮긴다** — 지금
 * 표를 새로 만들지 않는 것은 운영 DB를 건드리는 일이라 따로 정할 문제이기 때문이다.
 */
const memo = new Map<string, SajuInterpretation>();
const MEMO_LIMIT = 200;

export class InterpretationUnavailableError extends Error {
  constructor() {
    super("해설을 만들지 못했습니다.");
    this.name = "InterpretationUnavailableError";
  }
}

export async function interpretSaju(input: {
  reading: PersonReading;
  today: TodayFortune;
  kind: ReportKind;
  locale: Locale;
}): Promise<SajuInterpretation | null> {
  const openai = getOpenAIClient();
  // **키가 없으면 null을 준다.** 던지지 않는 것이 중요하다 — 해설이 없다고 결제한 리포트를
  // 통째로 못 받으면 안 된다. PDF는 엔진 값만으로도 성립한다.
  if (!openai) return null;

  const factors = buildSajuFactors(input.reading, input.today, input.kind, input.locale);
  const key = cacheKey(factors, input.kind, input.locale);
  const cached = memo.get(key);
  if (cached) return cached;

  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  try {
    const completion = await openai.chat.completions.create({
      model,
      // 해설은 창작이되 사실(숫자·간지)은 고정이다. 온도를 중간에 둔다 — 너무 높이면 주어진
      // factors를 벗어나고, 너무 낮추면 로케일마다 같은 문장이 나온다.
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `${sajuSystemPrompt(input.locale, localeLanguageName(input.locale))} ${sajuOutputInstruction(input.kind)}`,
        },
        { role: "user", content: JSON.stringify(factors) },
      ],
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SajuInterpretation;

    // 모델이 필수 필드를 빠뜨리면 화면·PDF가 빈칸을 그린다. 최소한만 확인하고, 모자라면
    // 해설 없이 간다 — 결제한 문서를 못 주는 것보다 낫다.
    if (!parsed.summary || !parsed.disclaimer) return null;

    if (memo.size >= MEMO_LIMIT) {
      const oldest = memo.keys().next().value;
      if (oldest) memo.delete(oldest);
    }
    memo.set(key, parsed);
    return parsed;
  } catch {
    // 모델 오류로 결제한 문서를 못 받는 일이 없어야 한다. 해설만 빠진 채로 낸다.
    return null;
  }
}
