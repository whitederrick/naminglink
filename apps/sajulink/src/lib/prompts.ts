import "server-only";

import type { PersonReading } from "@/lib/engines";
import type { TodayFortune } from "@/lib/engines/today-fortune";
import type { Locale } from "@/lib/i18n";
import type { ReportKind } from "@/lib/report-product";

/**
 * 사주 해설 프롬프트. 설계는 `docs/sajulink_domain_logic.md` §4에 있고 이 파일이 그것을 옮긴 것이다.
 *
 * **계산은 이미 끝났다. GPT는 말로 푸는 일만 한다.** 간지도 점수도 오행 분포도 전부 엔진이
 * 정한 값을 넘겨주고, 모델이 그것을 바꾸거나 새로 지어내는 것을 금지한다. 재현성(같은 입력 →
 * 같은 숫자)이 이 서비스가 파는 것이라 여기서 흔들리면 상품이 무너진다.
 *
 * **유료 리포트에서만 부른다.** 무료 원국·오늘의 운세는 엔진 값을 화면이 그대로 그린다 —
 * 그쪽이 트래픽을 받는 자리라 조회마다 모델을 때리면 비용·지연·페이지 속도가 함께 나빠진다.
 */

/** 프롬프트를 고치면 올린다. 캐시 키에 들어가므로 옛 해설이 그대로 나오지 않는다. */
export const PROMPT_VERSION = "v1";

/**
 * 시스템 프롬프트.
 *
 * 영어로 쓴다 — 모델이 지시를 가장 정확히 따르는 언어이고, **출력 언어는 따로 못 박는다**.
 * naminglink에서 입력 JSON에만 언어명을 넣었더니 모델이 무시하고 한국어로 쓴 사례가 있었다.
 */
export function sajuSystemPrompt(locale: Locale, languageName: string) {
  return [
    "You are a Korean Saju (Four Pillars of Destiny) writer for a global audience.",
    "You are given a PRE-COMPUTED chart and factor list.",
    "NEVER compute, alter, or invent pillars, elements, ten-gods, scores, or dates — use only the provided values.",
    `Write every field in ${languageName} (locale ${locale}). Do not use Korean or English unless that IS the requested language.`,
    "Tone: insightful, warm, culturally grounded, concise.",
    "This is TRADITIONAL MYEONGRI REFERENCE / ENTERTAINMENT — never present it as scientific prediction, guaranteed fate, or medical, financial, or legal advice.",
    "Never claim certainty about lifespan, illness, specific investments, or legal outcomes, and never write words meaning 'certainly' or 'without fail' about the future.",
    "Do not contradict the provided factors: if the grade is auspicious, do not write a discouraging reading, and vice versa.",
    "Output MUST be valid JSON only, with no prose outside the JSON.",
  ].join(" ");
}

/**
 * 모델에 넘길 구조화 입력. **엔진이 계산한 값만 담는다.**
 *
 * 자유 서술을 넣지 않는 것이 핵심이다 — 모델이 근거로 삼을 것이 숫자와 간지뿐이면 지어낼
 * 자리가 없다(naminglink의 "데이터를 주입해 그것만 근거로" 규칙과 같다).
 */
export function buildSajuFactors(
  reading: PersonReading,
  today: TodayFortune,
  kind: ReportKind,
  locale: Locale,
) {
  return {
    locale,
    tier: kind,
    natal: {
      pillars: {
        year: reading.pillars.year.hanja,
        month: reading.pillars.month.hanja,
        day: reading.pillars.day.hanja,
        hour: reading.pillars.hour?.hanja ?? null,
      },
      dayMaster: { stem: reading.dayMaster.character, element: reading.dayMaster.element },
      strength: reading.bodyStrength,
      elementDist: reading.elements,
      strongestElement: reading.strongestElement,
      scarcestElement: reading.scarcestElement,
      seasonElement: reading.seasonElement,
      yongsin: reading.favorableElements,
      // 신강·신약을 가른 근거 숫자. **프리미엄 리포트에만 담기는 값**이라 총운에서는 빼고 넘긴다
      // — 모델이 받은 것을 문장에 흘리면 무료·하위 티어와의 차이가 없어진다.
      allyRatio: kind === "premium" ? reading.allyRatio : undefined,
      vitality: kind === "premium" ? reading.vitality : undefined,
    },
    today: {
      date: today.date,
      stem: today.todayPillar.stem,
      branch: today.todayPillar.branch,
      score: today.score,
      grade: today.grade,
      categories: today.categories,
      lucky: today.lucky,
      // 점수가 왜 그렇게 나왔는지. 항목 이름과 증감만 넘긴다.
      factors: today.factors.map((factor) => `${factor.key}${factor.delta >= 0 ? "+" : ""}${factor.delta}`),
    },
  };
}

/**
 * 티어별로 어떤 필드를 요구할지. 분량 차이가 곧 상품 차이다.
 *
 * **무료는 여기 없다.** 무료 화면은 모델을 부르지 않는다.
 */
export function sajuOutputInstruction(kind: ReportKind) {
  const shared = [
    '"summary": a one to two sentence opening',
    '"personality": character read from the day master and strength',
    '"element_balance": what the element distribution means, citing the given numbers',
    '"today": { "headline", "message", "advice", "lucky_note" }',
    '"strengths": array of 2-4 short lines',
    '"cautions": array of 2-4 short lines',
    '"domains": { "wealth", "love", "career", "health" }',
    '"disclaimer": one line stating this is traditional reference, not fate',
  ];
  if (kind === "premium") {
    shared.splice(shared.length - 1, 0, '"year_outlook": this year\'s overall reading');
  }
  return `Return a JSON object with exactly these keys: ${shared.join(", ")}.`;
}
