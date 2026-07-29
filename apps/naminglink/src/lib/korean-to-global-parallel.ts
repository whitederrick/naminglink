import "server-only";

import type OpenAI from "openai";

/**
 * 글로벌 이름 변환(KOREAN_TO_GLOBAL)을 2단계로 만든다.
 *
 *   1단계 (단일 호출)  후보 5개 선정 + 총평 + 배제 후보. 이름·전략·짧은 근거만 받는다.
 *   2단계 (5개 병렬)   후보별 긴 서술만 각각 받는다.
 *
 * **왜 이 모양인가.**
 *
 * 처음에는 전략별로 5개 호출을 각각 독립으로 돌렸다. 빨랐지만(34초→8초) 결과가 매번 달라졌다.
 * 호출들이 서로를 모른 채 각자 후보를 고르니 집합이 흔들리고, 한 호출이 실패하면 그 후보가
 * 통째로 사라져 화면에 2개나 3개만 나왔다. OpenAI 분당 한도에 걸려 즉시 거절되는 일이
 * 잦았는데(동시 6요청), 그때마다 이용자가 보는 후보 수가 달라진 것이다.
 *
 * 그래서 **선정과 서술을 나눈다.** 후보 집합·전략 배분·총평은 한 모델이 한 번에 정하므로
 * 서로 어긋날 수 없고 개수도 고정된다. 시간이 드는 것은 긴 서술이므로 그것만 병렬로 돌린다.
 * 서술 호출이 실패해도 **후보는 사라지지 않는다** — 1단계에서 받은 짧은 정보로 남는다.
 *
 * 프리미엄 리포트(`premium-hanja-analysis.ts`)가 쓰는 구조와 같다. 거기서는 후보를 규칙
 * 엔진이 정하고 서술만 병렬로 돈다.
 */

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

function addUsage(base: ParallelUsage, completion: OpenAI.Chat.ChatCompletion): ParallelUsage {
  return {
    promptTokens: base.promptTokens + (completion.usage?.prompt_tokens ?? 0),
    completionTokens: base.completionTokens + (completion.usage?.completion_tokens ?? 0),
    totalTokens: base.totalTokens + (completion.usage?.total_tokens ?? 0),
    // 호출이 여럿이라 대표 하나만 남긴다. 장애 추적에는 첫 호출이면 충분하다.
    providerRequestId: base.providerRequestId ?? completion.id ?? null,
  };
}

const inputMessage = (inputFactors: Json) => ({
  role: "user" as const,
  content: `Input factors:\n${JSON.stringify(inputFactors, null, 2)}`,
});

/** 2단계에서 채우는 긴 서술 필드. 1단계는 이것들을 만들지 않는다. */
const DETAIL_FIELDS = [
  "recommendation_reason",
  "region_fit",
  "name_meaning",
  "meaning_connection",
  "local_perception",
  "professional_impression",
  "local_cautions",
] as const;

/**
 * 1단계 — 후보 5개와 총평을 한 번에.
 *
 * 출력이 짧아 빠르다. **개수와 전략 배분이 여기서 확정된다.**
 */
async function selectCandidates(
  client: OpenAI,
  model: string,
  systemPrompt: string,
  inputFactors: Json,
): Promise<{ selection: Json | null; completion: OpenAI.Chat.ChatCompletion | null }> {
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
            "이번 호출에서는 **후보를 고르기만 합니다.** 긴 설명은 다음 단계에서 씁니다.",
            `각 후보에서 ${DETAIL_FIELDS.join("·")}는 만들지 마십시오.`,
            "후보는 반드시 5개이며, 다섯 전략(소리 보존안·의미 번역안·소리·의미 절충안·현지 정통안·개성·브랜드안)을 각각 하나씩 씁니다.",
            'JSON shape: { analysis_summary, candidates: [{ name, local_script, full_name_local, conversion_strategy, pronunciation, matching_rate, suitability_score, selection_note }], rejected_options: [{ name, reason }], add_on_recommendations: [] }',
            "selection_note(한국어 1~2문장): 이 후보를 고른 핵심 근거. 다음 단계가 이것을 이어받아 긴 설명을 씁니다.",
            "analysis_summary는 위 5개 후보를 근거로 씁니다 — 목록에 없는 이름을 언급하거나 후보 수를 다르게 말하지 마십시오.",
          ].join(" "),
        },
        inputMessage(inputFactors),
      ],
    });
    const content = completion.choices[0]?.message?.content;
    if (!content) return { selection: null, completion };
    return { selection: JSON.parse(content) as Json, completion };
  } catch (error) {
    console.error(
      "[korean-to-global] 1단계 후보 선정 실패",
      error instanceof Error ? error.message : error,
    );
    return { selection: null, completion: null };
  }
}

/**
 * 2단계 — 후보 하나의 긴 서술.
 *
 * 실패해도 후보를 버리지 않는다. 1단계에서 받은 값만으로도 화면에 이름은 나온다.
 * 다른 후보 목록을 함께 넘겨 서술이 서로 겹치거나 모순되지 않게 한다.
 */
async function describeCandidate(
  client: OpenAI,
  model: string,
  systemPrompt: string,
  inputFactors: Json,
  candidate: Json,
  siblings: Json[],
): Promise<{ detail: Json | null; completion: OpenAI.Chat.ChatCompletion | null }> {
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
            "이번 호출에서는 **아래 후보 하나에 대해서만** 설명 필드를 씁니다.",
            "name·local_script·full_name_local·conversion_strategy·pronunciation은 이미 확정된 값입니다. 절대 바꾸지 마십시오.",
            `JSON shape: { ${DETAIL_FIELDS.join(", ")} }`,
            "함께 제시된 다른 후보와 같은 문장을 반복하지 말고, 이 후보만의 근거를 쓰십시오.",
          ].join(" "),
        },
        inputMessage(inputFactors),
        {
          role: "user" as const,
          content: [
            `설명할 후보:\n${JSON.stringify(candidate, null, 2)}`,
            `같은 결과의 다른 후보(참고용, 설명하지 말 것):\n${JSON.stringify(
              siblings.map((sibling) => ({
                name: sibling.name,
                conversion_strategy: sibling.conversion_strategy,
              })),
              null,
              2,
            )}`,
          ].join("\n\n"),
        },
      ],
    });
    const content = completion.choices[0]?.message?.content;
    if (!content) return { detail: null, completion };
    return { detail: JSON.parse(content) as Json, completion };
  } catch (error) {
    console.error(
      `[korean-to-global] 2단계 서술 실패 — ${String(candidate.name ?? "이름 미상")}`,
      error instanceof Error ? error.message : error,
    );
    return { detail: null, completion: null };
  }
}

/**
 * 선정 → 서술 두 단계를 실행해 하나의 결과로 합친다.
 *
 * 1단계가 실패하면 `null`을 돌려준다 — 호출한 쪽이 기존 단일 호출로 되돌아간다.
 */
export async function generateKoreanToGlobalParallel(
  client: OpenAI,
  model: string,
  systemPrompt: string,
  inputFactors: Json,
): Promise<{ result: Json; usage: ParallelUsage } | null> {
  let usage = EMPTY_USAGE;

  const { selection, completion: selectionCompletion } = await selectCandidates(
    client,
    model,
    systemPrompt,
    inputFactors,
  );
  if (selectionCompletion) usage = addUsage(usage, selectionCompletion);

  const selected = Array.isArray(selection?.candidates)
    ? (selection.candidates as Json[]).filter(
        (candidate) => candidate && typeof candidate === "object" && candidate.name,
      )
    : [];
  // 후보를 못 받으면 기존 단일 호출로 되돌아간다. 품질 경로가 그대로 남는다.
  if (selected.length === 0) return null;

  const details = await Promise.all(
    selected.map((candidate, index) =>
      describeCandidate(
        client,
        model,
        systemPrompt,
        inputFactors,
        candidate,
        selected.filter((_, other) => other !== index),
      ),
    ),
  );

  let failed = 0;
  const candidates = selected.map((candidate, index) => {
    const { detail, completion } = details[index]!;
    if (completion) usage = addUsage(usage, completion);
    if (!detail) {
      failed += 1;
      // 서술이 없어도 후보는 남긴다 — 개수가 흔들리는 것이 더 나쁘다.
      return candidate;
    }
    const merged: Json = { ...candidate };
    for (const field of DETAIL_FIELDS) {
      if (detail[field] !== undefined) merged[field] = detail[field];
    }
    return merged;
  });

  if (failed > 0) {
    console.warn(
      `[korean-to-global] 후보 ${candidates.length}개 중 ${failed}개는 짧은 설명으로 나갑니다`,
    );
  }

  return {
    result: {
      analysis_summary: selection?.analysis_summary ?? "",
      candidates,
      rejected_options: Array.isArray(selection?.rejected_options)
        ? selection.rejected_options
        : [],
      add_on_recommendations: Array.isArray(selection?.add_on_recommendations)
        ? selection.add_on_recommendations
        : [],
    },
    usage,
  };
}
