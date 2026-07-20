import type { Locale } from "@/lib/services";

// 발음 표기 결과 페이지(HangulPronunciationResultPage)의 사용자 노출 문자열.
// 이 페이지는 외국인 대상(GLOBAL_TO_KOREAN) 전용이라 locale을 직접 사용한다.
export type ResultCopy = {
  reanalysisError: string;
  reanalysisErrorGeneric: string;
  reanalysisEyebrow: string;
  reanalysisTitle: string;
  reanalysisDescription: string;
  hintLabel: string;
  hintPlaceholder: string;
  reanalysisCountdown: (seconds: number) => string;
  reanalyzing: string;
  goodsEyebrow: string;
  goodsSectionTitle: string;
  goodsItemTitle: string;
  goodsItemSub: string;
  goodsItemDescription: string;
  goodsButton: string;
  editInput: string;
  home: string;
  headerAdLabel: string;
  headerCaption: string;
  loading: string;
  analysisDone: string;
  resultHeading: string;
  emptyTitle: string;
  emptyDescription: string;
  backToInput: string;
};

const ko: ResultCopy = {
  reanalysisError: "발음 재분석을 완료하지 못했습니다.",
  reanalysisErrorGeneric: "발음 재분석 중 오류가 발생했습니다.",
  reanalysisEyebrow: "실제 발음과 다른가요?",
  reanalysisTitle: "발음 힌트로 다시 분석",
  reanalysisDescription:
    "실제 발음 방법을 더 구체적으로 입력하면 같은 이름과 언어·국가 조건으로 다시 분석합니다.",
  hintLabel: "실제 발음 힌트",
  hintPlaceholder: "예: Dan-yell과 비슷함",
  reanalysisCountdown: (seconds) => `광고 확인 후 다시 분석합니다. ${seconds}초`,
  reanalyzing: "다시 분석 중",
  goodsEyebrow: "결과를 더 활용해 보세요",
  goodsSectionTitle: "이름 굿즈",
  goodsItemTitle: "한글 이름 굿즈",
  goodsItemSub: "(모자 · 키링 · 티셔츠 등)",
  goodsItemDescription:
    "선택한 한글 이름을 모자, 키링, 티셔츠 등에 새겨 나만의 굿즈를 만들어보세요.",
  goodsButton: "굿즈 신청 준비 중",
  editInput: "입력 수정",
  home: "홈",
  headerAdLabel: "한글 발음 결과 상단 배너 광고",
  headerCaption: "한글 발음 분석 결과",
  loading: "결과를 불러오고 있습니다.",
  analysisDone: "분석 완료",
  resultHeading: "본인 이름의 한글 발음 표기",
  emptyTitle: "결과를 불러올 수 없습니다.",
  emptyDescription: "이 결과는 분석을 진행한 브라우저 탭에서만 확인할 수 있습니다.",
  backToInput: "입력 화면으로 돌아가기",
};

const en: ResultCopy = {
  reanalysisError: "We couldn't finish re-analyzing the pronunciation.",
  reanalysisErrorGeneric: "Something went wrong while re-analyzing.",
  reanalysisEyebrow: "Does it sound different?",
  reanalysisTitle: "Re-analyze with a pronunciation hint",
  reanalysisDescription:
    "Enter a more specific pronunciation and we'll re-analyze with the same name, language, and country.",
  hintLabel: "Pronunciation hint",
  hintPlaceholder: "e.g., sounds like Dan-yell",
  reanalysisCountdown: (seconds) => `We'll re-analyze after the ad. ${seconds}s`,
  reanalyzing: "Re-analyzing",
  goodsEyebrow: "Do more with your result",
  goodsSectionTitle: "Name goods",
  goodsItemTitle: "Hangul name goods",
  goodsItemSub: "(caps, keyrings, tees, and more)",
  goodsItemDescription:
    "Put your chosen Hangul name on caps, keyrings, tees, and more to make your own goods.",
  goodsButton: "Goods ordering coming soon",
  editInput: "Edit input",
  home: "Home",
  headerAdLabel: "Hangul result top banner ad",
  headerCaption: "Hangul pronunciation result",
  loading: "Loading your result.",
  analysisDone: "Analysis complete",
  resultHeading: "Your name in Hangul pronunciation",
  emptyTitle: "We couldn't load your result.",
  emptyDescription:
    "This result is only available in the browser tab where you ran the analysis.",
  backToInput: "Back to the input screen",
};

// ko/en만 작성했고, 나머지 로케일은 영어로 폴백한다.
const resultCopies: Partial<Record<Locale, ResultCopy>> = { ko, en };

export function getResultCopy(locale: Locale): ResultCopy {
  return resultCopies[locale] ?? en;
}
