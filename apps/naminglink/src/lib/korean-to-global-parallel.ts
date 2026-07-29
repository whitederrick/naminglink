import "server-only";

import type OpenAI from "openai";

/**
 * 글로벌 이름 변환(KOREAN_TO_GLOBAL)을 전략별 병렬 호출로 만든다.
 *
 * **왜 나누는가.** 한 번의 호출로 후보 5개를 모두 받으면 출력이 1,500토큰을 넘고, 실측 평균이
 * 36초(최악 54초)였다. 출력 토큰은 순차 생성되므로 모델을 바꿔도 길이에 비례한 시간이 그대로
 * 든다. 프리미엄 리포트가 같은 이유로 이미 병렬화돼 있고(`premium-hanja-analysis.ts`),
 * 출력이 4배 많은데도 벽시계 시간은 1/3이다.
 *
 * **전략을 호출마다 지정한다.** 프롬프트는 "5개 후보가 5가지 전략을 각각 하나씩 써야 한다"고
 * 요구하는데, 후보별로 그냥 쪼개면 각 호출이 다른 호출의 선택을 몰라 전략이 겹친다. 전략을
 * 인자로 넘기면 겹침이 구조적으로 불가능해진다 — 속도뿐 아니라 규칙 준수도 나아진다.
 *
 * **한 전략이 실패해도 그 전략만 빠진다.** 전부 실패했을 때만 호출한 쪽이 단일 호출로
 * 되돌아간다(`openai.ts`).
 */

/** `prompts.ts`의 KOREAN_TO_GLOBAL 규칙에 적힌 다섯 전략. 라벨을 그대로 쓴다. */
export const CONVERSION_STRATEGIES = [
  {
    label: "소리 보존안",
    instruction:
      "원 이름을 대상 언어 문자로 음차한 표기 그대로 씁니다. 다른 이름으로 대체하지 말고, 새 이름이 아니라 원 이름 유지임을 설명에 명시하십시오. 이 전략만은 실존 이름이 아니어도 됩니다.",
  },
  {
    label: "의미 번역안",
    instruction:
      "원 이름의 한자 자의·nameMeaning과 같은 뜻을 가진 **실존하는** 현지 이름을 고릅니다.",
  },
  {
    label: "소리·의미 절충안",
    instruction:
      "원 이름과 비슷하게 들리면서 현지에서 **실제로 쓰이는** 이름을 고릅니다.",
  },
  {
    label: "현지 정통안",
    instruction:
      "현지에서 가장 자연스럽고 널리 쓰이는 **실존** 이름을 고릅니다. 원 이름과의 직접 연결이 약해도 좋으며, 그 경우 meaning_connection에 정직하게 밝히십시오.",
  },
  {
    label: "개성·브랜드안",
    instruction:
      "기억에 남고 개성 있는 이름을 고릅니다. usageContext가 creator/브랜드일 때만 신조어를 허용하되 그 사실을 명시하십시오.",
  },
] as const;

type Json = Record<string, unknown>;

export type ParallelUsage = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  providerRequestId: string | null;
};

const EMPTY_USAGE: ParallelUsage = {
  promptTokens: 0,
  completionTokens: 0,
  totalTokens: 0,
  providerRequestId: null,
};

function addUsage(a: ParallelUsage, completion: OpenAI.Chat.ChatCompletion): ParallelUsage {
  return {
    promptTokens: a.promptTokens + (completion.usage?.prompt_tokens ?? 0),
    completionTokens: a.completionTokens + (completion.usage?.completion_tokens ?? 0),
    totalTokens: a.totalTokens + (completion.usage?.total_tokens ?? 0),
    // 호출이 여럿이라 대표 하나만 남긴다. 장애 추적에는 첫 성공 호출이면 충분하다.
    providerRequestId: a.providerRequestId ?? completion.id ?? null,
  };
}

const inputMessage = (inputFactors: Json) => ({
  role: "user" as const,
  content: `Input factors:\n${JSON.stringify(inputFactors, null, 2)}`,
});

/** 후보 하나를 만드는 호출. 전략이 고정돼 있어 출력이 짧다(전체의 1/5 수준). */
async function generateOneCandidate(
  client: OpenAI,
  model: string,
  systemPrompt: string,
  inputFactors: Json,
  strategy: (typeof CONVERSION_STRATEGIES)[number],
): Promise<{ candidate: Json | null; completion: OpenAI.Chat.ChatCompletion | null }> {
  try {
    const completion = await client.chat.completions.create({
      model,
      temperature: 0.6,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            systemPrompt,
            `이번 호출에서는 **후보를 정확히 하나만** 만듭니다. conversion_strategy는 반드시 "${strategy.label}"입니다.`,
            strategy.instruction,
            'JSON shape: { candidate: { name, local_script, full_name_local, conversion_strategy, recommendation_reason, matching_rate, region_fit, pronunciation, name_meaning, meaning_connection, local_perception, professional_impression, local_cautions, suitability_score } }',
            "analysis_summary·rejected_options는 이 호출에서 만들지 마십시오.",
          ].join(" "),
        },
        inputMessage(inputFactors),
      ],
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) return { candidate: null, completion };

    const parsed = JSON.parse(content) as Json;
    const candidate = (parsed.candidate ?? parsed) as Json;
    if (!candidate || typeof candidate !== "object" || !candidate.name) {
      return { candidate: null, completion };
    }
    // 모델이 라벨을 바꿔 적는 경우가 있어 우리가 정한 값으로 되돌린다.
    candidate.conversion_strategy = strategy.label;
    return { candidate, completion };
  } catch {
    // 한 전략의 실패는 그 전략만 빠뜨린다. 나머지 넷으로도 결과가 성립한다.
    return { candidate: null, completion: null };
  }
}

/** 총평과 배제 후보. 후보 호출들과 함께 병렬로 돈다. */
async function generateSummary(
  client: OpenAI,
  model: string,
  systemPrompt: string,
  inputFactors: Json,
): Promise<{ summary: Json | null; completion: OpenAI.Chat.ChatCompletion | null }> {
  try {
    const completion = await client.chat.completions.create({
      model,
      temperature: 0.6,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            systemPrompt,
            "이번 호출에서는 **후보 목록을 만들지 마십시오.** 총평과 배제 후보만 씁니다.",
            'JSON shape: { analysis_summary, rejected_options: [{ name, reason }], add_on_recommendations: [] }',
            "analysis_summary(한국어): 원 이름의 소리·의미 분석, 대상 국가·언어 맥락, 후보 구성 방향을 3~4문장으로.",
          ].join(" "),
        },
        inputMessage(inputFactors),
      ],
    });
    const content = completion.choices[0]?.message?.content;
    if (!content) return { summary: null, completion };
    return { summary: JSON.parse(content) as Json, completion };
  } catch {
    return { summary: null, completion: null };
  }
}

const rate = (candidate: Json) => {
  const value = Number(candidate.matching_rate);
  return Number.isFinite(value) ? value : 0;
};

/**
 * 전략 5개 + 총평 1개를 모두 병렬로 돌려 하나의 결과로 합친다.
 *
 * 후보를 하나도 못 받으면 `null`을 돌려준다 — 호출한 쪽이 단일 호출로 되돌아간다.
 */
export async function generateKoreanToGlobalParallel(
  client: OpenAI,
  model: string,
  systemPrompt: string,
  inputFactors: Json,
): Promise<{ result: Json; usage: ParallelUsage } | null> {
  const [summaryPart, ...candidateParts] = await Promise.all([
    generateSummary(client, model, systemPrompt, inputFactors),
    ...CONVERSION_STRATEGIES.map((strategy) =>
      generateOneCandidate(client, model, systemPrompt, inputFactors, strategy),
    ),
  ]);

  let usage = EMPTY_USAGE;
  for (const part of [summaryPart, ...candidateParts]) {
    if (part.completion) usage = addUsage(usage, part.completion);
  }

  const seen = new Set<string>();
  const candidates = candidateParts
    .map((part) => ("candidate" in part ? part.candidate : null))
    .filter((candidate): candidate is Json => Boolean(candidate))
    // 전략이 달라도 같은 이름에 도달할 수 있다. 먼저 온 것을 남긴다.
    .filter((candidate) => {
      const key = String(candidate.name ?? "").trim().toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => rate(b) - rate(a));

  if (candidates.length === 0) return null;

  const summary = summaryPart.summary ?? {};
  return {
    result: {
      analysis_summary: summary.analysis_summary ?? "",
      candidates,
      rejected_options: Array.isArray(summary.rejected_options) ? summary.rejected_options : [],
      add_on_recommendations: Array.isArray(summary.add_on_recommendations)
        ? summary.add_on_recommendations
        : [],
    },
    usage,
  };
}
