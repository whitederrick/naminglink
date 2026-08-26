import "server-only";

import { createHash } from "node:crypto";
import OpenAI from "openai";

import { AiUsageRecorder } from "@/lib/ai-usage";
import type { PersonReading } from "@/lib/engines";
import type { NatalOutlook } from "@/lib/engines/natal-outlook";
import {
  TODAY_FORTUNE_VERSION,
  yearPillarOf,
  type TodayFortune,
} from "@/lib/engines/today-fortune";
import { getDictionary, type Locale } from "@/lib/i18n";
import { localeLanguageName } from "@/lib/locale-codes";
import { notifyOps } from "@/lib/ops-alert";
import {
  buildSajuFactors,
  PROMPT_VERSION,
  sajuOutputInstruction,
  sajuSystemPrompt,
} from "@/lib/prompts";
import { buildNarrative } from "@/lib/saju-narrative";

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
  /** 삶의 네 영역. **원국 기준**이다(`natal-outlook.ts`) — 오늘 일진 점수가 아니다. */
  domains: { wealth: string; love: string; career: string; health: string };
  /**
   * 십신 심화 문단. 이 사람 원국에서 **두터운 둘과 아예 없는 둘**만 골라 최대 넷이다
   * (`saju-narrative.ts`). 열 개를 다 싣지 않는 것은 그러면 누구에게나 같은 백과사전이
   * 나가기 때문이고, 넷으로 못 박아 둔 것은 문단 수가 사람마다 달라지면 장수도 달라지기
   * 때문이다.
   */
  ten_gods: string[];
  /** 강약 판정에서 이어지는 "그래서 무엇이 필요한가" 한 문단. */
  yongsin: string;
  year_outlook?: string;
  disclaimer: string;
};

/**
 * **모델이 쓰는 자리 — 여기 적힌 것만 재발급 때 달라질 수 있다.**
 *
 * 이 목록이 이 서비스의 약속이다. 상품 정보와 약관이 같은 말을 하고 있고, `verify-report-
 * determinism`이 **목록 밖의 한 글자라도 달라지면 실패**시킨다. 즉 세 자리가 함께 움직인다 —
 * 여기를 늘리면 검사기가 먼저 빨개지고, 고지를 함께 고치게 된다.
 *
 * **왜 요약 한 자리뿐인가.** 사주 해설은 창작이 아니라 규칙의 서술이다. 십신·왕상휴수사·용신은
 * 답이 정해져 있어 템플릿이 더 잘 맞고, 무엇보다 **한 번 검토하면 끝난다.** 매번 새로 쓰는 글은
 * 매번 새로 과장·단정을 저지를 수 있고(운명·건강·재산 단정은 정책 위반이다) 23로케일을 사람이
 * 다 읽어 볼 수도 없다.
 *
 * 그래서 모델에게는 **개인화된 첫인상 한 문단**만 맡긴다. 나머지는 엔진이 쓴다.
 */
export const MUTABLE_FIELDS = ["summary"] as const;

/**
 * 캐시 키 — `입력해시 + 엔진버전 + 프롬프트버전 + locale`.
 *
 * **날짜를 넣지 않는다.** `sajuOutputInstruction()`이 모델에게 요구하는 `summary`는 일간·강약·
 * 오행 후박 등 **원국 사실뿐**이다 — 오늘의 운세는 프롬프트가 요구하지 않는다. 그런데 날짜가
 * 키에 있으면 자정만 넘어도 캐시가 비어 모델을 다시 부르고, 결과가 문장 수준에서 달라질 수
 * 있었다. 약관은 "이 문서는 평생 바뀌지 않는 원국 풀이와 올해의 운세로 이루어집니다"라고
 * 약속하는데, 재발급(`REISSUE_LIMIT`)이 날짜를 넘기면 그 약속이 깨지고 있었다
 * (2026-08-26 코드 리뷰에서 발견 — 날짜를 넣던 이유였던 옛 프롬프트는 이미 자리가 없다).
 *
 * **엔진·프롬프트 버전이 들어가는 이유**: 규칙이나 지시를 고치면 옛 글이 그대로 나오면 안 된다.
 */
function cacheKey(
  factors: ReturnType<typeof buildSajuFactors>,
  locale: Locale,
) {
  const inputHash = createHash("sha256")
    .update(JSON.stringify(factors.natal))
    .digest("hex")
    .slice(0, 32);
  return [inputHash, TODAY_FORTUNE_VERSION, PROMPT_VERSION, locale].join(":");
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

/** 비어 있지 않은 문자열만 받는다. 모델이 `""`나 `null`을 준 자리는 없는 것으로 본다. */
function text(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

/**
 * 필드별 글자 수 상한.
 *
 * **장수가 고시에 적히는 값이기 때문에 있다.** 문서는 장마다 들어갈 것이 정해져 있고
 * (`saju-report.tsx`), 어느 한 장의 글이 지면을 넘으면 그 장이 둘로 갈라져 고시한 장수보다
 * 한 장이 늘어난다. 프롬프트로 "짧게 쓰라"고 이르는 것은 부탁이지 보장이 아니다 — 보장은 여기서 만든다.
 *
 * 값은 넉넉하게 잡았다. 모델이 평소 내는 길이의 두 배쯤이라 정상 응답은 잘리지 않고, 비정상적
 * 으로 긴 응답만 걸린다.
 *
 * **두 가지 일을 한다.** `summary`는 모델이 쓰므로 여기 값이 실제로 **자른다**(`clamp`).
 * 나머지는 ②-1 뒤로 엔진이 쓰고, 그쪽은 자를 수 없다 — 문장 중간이 잘린 문서를 팔 수는 없다.
 * 그러니 엔진 쪽 값은 **사전이 소리 없이 자라지 않게 하는 신호**다. `verify-report-
 * determinism`이 로케일마다 이 선을 넘었는지 세고, 넘으면 문안을 줄이거나 상한을 올리고
 * `render-saju-sample`로 장수를 다시 잰다.
 *
 * **글자 수는 지면이 아니다.** 라틴 문자 451자와 한글 451자는 지면에서 두 배 넘게 차이가 나서,
 * 상한 하나가 스물세 언어에서 같은 넓이를 뜻하지 않는다. 지면을 정하는 것은 이 숫자가 아니라
 * **로케일마다 실제 문안을 렌더해 장을 세는 것**이고, 그것이 `render-saju-sample`의 일이다.
 */
export const LIMITS = {
  summary: 400,
  personality: 500,
  element_balance: 500,
  todayHeadline: 60,
  todayMessage: 500,
  todayAdvice: 300,
  luckyNote: 200,
  /** 줄 단위 목록은 개수와 길이를 함께 묶는다. */
  lineCount: 4,
  line: 140,
  /**
   * 삶의 네 영역.
   *
   * 넷이 한 장에 들어가고 카드 하나하나가 `wrap={false}`라, 이 장은 "넷을 합한 길이"가 아니라
   * **"넷 중 가장 긴 것 × 4"**가 들어갈 자리를 요구한다. 그래서 이 필드가 가장 예민하다.
   *
   * 사전이 실제로 내는 가장 긴 문단이 451자(fil)이고, 여기에 두 할쯤을 얹었다.
   */
  domain: 560,
  /**
   * 십신 심화 문단. **개수와 길이를 함께 묶는다** — 문단 수가 사람마다 달라지면 지면도
   * 달라지므로, 넷(두터운 둘 + 없는 둘)이 천장이다(`saju-narrative.ts`의 `DEPTH_PICKS`).
   */
  tenGodCount: 4,
  tenGodLine: 620,
  yongsin: 620,
  yearOutlook: 500,
  disclaimer: 200,
} as const;

/**
 * 상한을 넘으면 자른다. **문장 끝에서 자른다** — 글자 수로 뚝 자르면 문서에 반 토막 문장이
 * 남고, 그것은 잘린 티가 나는 것보다 나쁘다. 문장 끝을 못 찾으면 그때만 말줄임표를 붙인다.
 */
function clamp(value: string, max: number): string {
  const trimmed = value.trim();
  if (trimmed.length <= max) return trimmed;

  const head = trimmed.slice(0, max);
  // 한국어 마침표·물음표·느낌표와 CJK 문장부호를 함께 본다.
  const lastStop = Math.max(
    head.lastIndexOf("."),
    head.lastIndexOf("!"),
    head.lastIndexOf("?"),
    head.lastIndexOf("。"),
    head.lastIndexOf("！"),
    head.lastIndexOf("？"),
  );
  // 너무 앞에서 끊기면 문서가 한 문장만 남는다. 절반은 넘겨야 문장 끝으로 인정한다.
  if (lastStop > max * 0.5) return head.slice(0, lastStop + 1);
  return `${head.trimEnd()}…`;
}

/**
 * 엔진이 쓴 뼈대 위에 **허용목록에 적힌 자리만** 모델의 글로 덮는다.
 *
 * 예전에는 열 자리를 전부 모델에게 맡기고 실패한 곳만 엔진 서술로 채웠다. 그러면 이용자가
 * 읽는 글이 사실상 전부 가변이라, 재발급받을 때마다 다른 문서가 나온다 — **한 번 사서 평생
 * 보관하는 상품**에서 그건 결함이다.
 *
 * 지금은 반대다. 뼈대가 본편이고 모델은 `MUTABLE_FIELDS`에 적힌 자리만 손댄다. 목록 밖은
 * 모델이 무엇을 보내오든 **버린다** — 지키는 자리를 프롬프트가 아니라 여기 코드가 정한다.
 */
function applyMutableFields(
  parsed: Partial<SajuInterpretation>,
  narrative: SajuInterpretation,
): SajuInterpretation {
  const merged: SajuInterpretation = { ...narrative };
  for (const field of MUTABLE_FIELDS) {
    const given = text(parsed[field]);
    if (given) merged[field] = clamp(given, LIMITS[field]);
  }
  return merged;
}

/** 모델을 한 번 부른다. 실패·파싱 오류는 `null`로 돌려 부르는 쪽이 재시도를 정하게 한다. */
async function requestInterpretation(
  openai: OpenAI,
  input: { locale: Locale },
  factors: ReturnType<typeof buildSajuFactors>,
  usage: AiUsageRecorder,
): Promise<Partial<SajuInterpretation> | null> {
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
  try {
    const completion = await openai.chat.completions.create({
      model,
      // **온도를 0으로 둔다.** 예전에는 0.7이었는데, 그러면 같은 사람이 재발급받을 때마다 다른
      // 글이 나온다. 이 자리는 한 번 사서 보관하는 문서라 표현이 흔들릴 이유가 없다.
      //
      // 0이라고 해서 영원히 같다고 보장되지는 않는다 — 모델이 갱신되면 글도 바뀐다. 그래서
      // "이 문단은 달라질 수 있다"를 고지에 적어 두고, 나머지는 엔진이 써서 실제로 고정한다.
      temperature: 0,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `${sajuSystemPrompt(input.locale, localeLanguageName(input.locale))} ${sajuOutputInstruction()}`,
        },
        { role: "user", content: JSON.stringify(factors) },
      ],
    });

    // **응답을 쓰기 전에 센다.** 파싱에 실패해도 토큰은 이미 나갔다 — 그 호출을 안 센 채
    // 넘어가면 실패가 잦은 날일수록 원가가 실제보다 싸 보인다.
    usage.record(completion);

    const raw = completion.choices[0]?.message?.content;
    if (!raw) return null;
    return JSON.parse(raw) as Partial<SajuInterpretation>;
  } catch {
    return null;
  }
}

/**
 * 해설을 만든다. **어떤 경우에도 값을 돌려준다.**
 *
 * 예전에는 실패하면 `null`을 주었고 PDF가 해설 자리를 통째로 비웠다. 그러면 **고시에 적은
 * 장수보다 적게 나간다.** 고시는 실제와 달라선 안 되므로, 실패한 자리는 엔진 값으로 쓴
 * 서술(`saju-narrative.ts`)이 대신 채운다.
 *
 * 실패는 대개 일시적이라 **한 번 더 부른다.** SDK가 이미 전송 오류·5xx·429는 재시도하지만
 * (`maxRetries: 1`), JSON이 깨졌거나 필수 필드가 빠진 응답은 그 대상이 아니다 — 그 경우가
 * 여기서 걸린다. 타임아웃이 30초라 재시도는 **한 번까지만** 둔다. 두 번이면 발급 경로가 최악
 * 90초가 되고, 그때는 이용자가 기다리다 창을 닫는다.
 */
export async function interpretSaju(input: {
  reading: PersonReading;
  today: TodayFortune;
  /** 원국 기준 네 영역. 부르는 쪽이 `natalOutlook(reading, gender)`로 뽑아 넘긴다. */
  outlook: NatalOutlook;
  locale: Locale;
}): Promise<SajuInterpretation> {
  const narrative = buildNarrative({
    reading: input.reading,
    today: input.today,
    outlook: input.outlook,
    // 세운은 오늘 날짜에서 뽑는다. 일진과 같은 만세력 호출이고 계산 규칙은 그대로다.
    yearPillar: yearPillarOf(input.today.date),
    locale: input.locale,
    dictionary: getDictionary(input.locale),
  });

  const openai = getOpenAIClient();
  // 키가 없는 것은 사고가 아니라 설정이다(다크 런치). 알리지 않고 엔진 서술로 낸다.
  if (!openai) return narrative;

  const factors = buildSajuFactors(input.reading, input.today, input.locale);
  const key = cacheKey(factors, input.locale);
  const cached = memo.get(key);
  if (cached) return cached;

  // **문서 하나에 한 줄만 남긴다.** 재시도까지 합산한다 — 호출마다 남기면 표가 재시도 행으로
  // 부풀어 "얼마나 팔렸나"와 "얼마나 불렀나"가 어긋나 보인다.
  const usage = new AiUsageRecorder("SAJU_REPORT");
  let received: Partial<SajuInterpretation> | null = null;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const parsed = await requestInterpretation(openai, input, factors, usage);
    if (parsed) {
      received = parsed;
      // 첫 문단이 왔으면 나머지가 조금 비어도 쓸 만한 응답이다. 더 부르지 않는다.
      if (text(parsed.summary)) break;
    }
  }

  if (!received) {
    notifyOps(
      "saju-interpretation-fallback",
      "해설 생성이 두 번 모두 실패해 엔진 서술로 발급했습니다.",
      { locale: input.locale, date: input.today.date },
    );
    void usage.flush("ERROR", "NO_RESPONSE");
    // **캐시하지 않는다.** 같은 주문으로 다시 받을 때 모델을 부를 기회가 다시 있어야 한다.
    return narrative;
  }

  // 요약이 안 왔으면 모델을 부른 보람이 없다. 뼈대만으로 내고 캐시하지 않는다.
  if (!text(received.summary)) {
    notifyOps(
      "saju-interpretation-partial",
      "해설 응답에 요약 문단이 없어 엔진 서술로 발급했습니다.",
      { locale: input.locale, date: input.today.date },
    );
    void usage.flush("ERROR", "NO_SUMMARY");
    return narrative;
  }

  void usage.flush("SUCCESS");
  const merged = applyMutableFields(received, narrative);

  if (memo.size >= MEMO_LIMIT) {
    const oldest = memo.keys().next().value;
    if (oldest) memo.delete(oldest);
  }
  memo.set(key, merged);
  return merged;
}
