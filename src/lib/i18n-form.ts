import type { Locale } from "@/lib/services";

// NamingForm의 사용자 노출 문자열(입력 폼 chrome). 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서만
// 로케일에 따라 사용하고, 한국어 대상 서비스는 항상 ko를 사용해 기존 문구를 그대로 유지한다.
export type FormCopy = {
  errorCheckInput: string;
  errorConsent: string;
  errorLoginToSave: string;
  errorRequestFailed: string;
  errorGeneric: string;
  consentTitle: string;
  consentIntro: string;
  consentIntroSaved: string;
  termsLink: string;
  privacyLink: string;
  agreeToTermsSuffix: string;
  agreeToPrivacySuffix: string;
  saveResultLabel: string;
  saveResultHint: string;
  guestNoSavePrefix: string;
  loginLink: string;
  guestNoSaveSuffix: string;
  adConsentLabel: string;
  submitTransliteration: string;
  submitDefault: string;
  adRevealNote: (seconds: number) => string;
  analysisDone: string;
  editInput: string;
  previewNote: string;
  adDialogLabel: string;
  loadingEyebrow: string;
  loadingTitle: string;
  loadingCountdown: (seconds: number) => string;
  loadingDone: string;
  countryHint: (params: {
    languageName: string;
    localNameHint: string;
    motivationNote?: string | null;
  }) => string;
  transliterationStepsTitle: string;
  transliterationSteps: Array<[string, string]>;
};

const ko: FormCopy = {
  errorCheckInput: "정확한 분석을 위해 입력 형식을 확인해 주세요.",
  errorConsent: "이용약관과 개인정보처리방침에 동의해야 분석을 시작할 수 있습니다.",
  errorLoginToSave: "분석 결과를 저장하려면 다시 로그인해 주세요.",
  errorRequestFailed: "작명 요청을 처리하지 못했습니다.",
  errorGeneric: "오류가 발생했습니다.",
  consentTitle: "필수 동의",
  consentIntro: "이름, 생년월일, 국가 등의 입력 내용은 분석 결과 생성에 사용되며,",
  consentIntroSaved: " 저장을 선택한 회원의 입력 내용과 결과만 저장됩니다.",
  termsLink: "이용약관",
  privacyLink: "개인정보처리방침",
  agreeToTermsSuffix: "에 동의합니다.",
  agreeToPrivacySuffix: "에 동의합니다.",
  saveResultLabel: "분석 결과를 내 계정에 저장(선택)",
  saveResultHint: "선택한 경우에만 입력 내용과 분석 결과를 저장합니다.",
  guestNoSavePrefix: "비회원 분석 결과는 저장하지 않습니다. 결과 보관이 필요하면 ",
  loginLink: "로그인",
  guestNoSaveSuffix: "한 뒤 저장을 선택해 주세요.",
  adConsentLabel: "필수 동의 영역 광고",
  submitTransliteration: "한글 발음 분석 시작",
  submitDefault: "광고 확인 후 분석 시작",
  adRevealNote: (seconds) => `광고 확인 후 결과를 공개합니다. ${seconds}초`,
  analysisDone: "분석 완료",
  editInput: "입력 수정",
  previewNote:
    "가장 적합한 후보 1개를 먼저 공개했습니다. 추가 후보는 광고 확인 또는 향후 결제로 한 개씩 열 수 있습니다.",
  adDialogLabel: "보상 광고 확인 및 이름 분석 진행",
  loadingEyebrow: "이름 분석 중",
  loadingTitle: "사용 환경에 어울리는 이름을 비교하고 있습니다",
  loadingCountdown: (seconds) => `광고 확인 및 분석 진행 중 · ${seconds}초`,
  loadingDone: "광고 확인 완료 · 분석 결과를 준비하고 있습니다",
  countryHint: ({ languageName, localNameHint, motivationNote }) =>
    `기본 언어: ${languageName} · 현지 이름 예시: ${localNameHint}${
      motivationNote ? ` · 추천 옵션: ${motivationNote}` : ""
    }`,
  transliterationStepsTitle: "본인 이름이 한글로 바뀌는 단계",
  transliterationSteps: [
    ["본명 확인", "입력한 원래 철자와 음절을 확인합니다."],
    ["언어·지역 발음 분석", "표기 언어를 우선하고, 국가별 발음 차이를 반영합니다."],
    ["발음 힌트 우선 반영", "입력된 발음 힌트는 일반적인 발음 규칙보다 우선합니다."],
    ["발음 구조화", "실제 발음을 음절과 발음 기호로 분석합니다."],
    ["한글 표기 제안", "원래 발음을 유지하며, 자연스러운 한글로 제안합니다."],
  ],
};

const en: FormCopy = {
  errorCheckInput: "Please check the input format for an accurate analysis.",
  errorConsent: "You must agree to the Terms of Service and Privacy Policy to start.",
  errorLoginToSave: "Please sign in again to save your analysis result.",
  errorRequestFailed: "We couldn't process your naming request.",
  errorGeneric: "Something went wrong.",
  consentTitle: "Required consent",
  consentIntro:
    "Your inputs such as name, birth date, and country are used to generate the result,",
  consentIntroSaved: " and only members who opt in have their inputs and results stored.",
  termsLink: "Terms of Service",
  privacyLink: "Privacy Policy",
  agreeToTermsSuffix: ".",
  agreeToPrivacySuffix: ".",
  saveResultLabel: "Save the result to my account (optional)",
  saveResultHint: "We store your inputs and results only when you opt in.",
  guestNoSavePrefix: "Guest results are not stored. If you want to keep your result, ",
  loginLink: "sign in",
  guestNoSaveSuffix: " and then choose to save.",
  adConsentLabel: "Required consent area ad",
  submitTransliteration: "Start Hangul pronunciation analysis",
  submitDefault: "Watch ad and start analysis",
  adRevealNote: (seconds) => `Your result will be revealed after the ad. ${seconds}s`,
  analysisDone: "Analysis complete",
  editInput: "Edit input",
  previewNote:
    "We revealed the single best candidate first. You can open more candidates one at a time by watching an ad or via payment.",
  adDialogLabel: "Watch reward ad and run name analysis",
  loadingEyebrow: "Analyzing your name",
  loadingTitle: "Comparing names that fit your context",
  loadingCountdown: (seconds) => `Watching ad and analyzing · ${seconds}s`,
  loadingDone: "Ad complete · preparing your result",
  countryHint: ({ languageName, localNameHint, motivationNote }) =>
    `Default language: ${languageName} · Local name example: ${localNameHint}${
      motivationNote ? ` · Suggested option: ${motivationNote}` : ""
    }`,
  transliterationStepsTitle: "How your name becomes Hangul",
  transliterationSteps: [
    ["Confirm your name", "We confirm the original spelling and syllables you entered."],
    ["Analyze language & region", "Your source language comes first, with country-level pronunciation differences applied."],
    ["Apply your pronunciation hint", "Any hint you entered overrides general pronunciation rules."],
    ["Structure the pronunciation", "We break the actual pronunciation into syllables and phonetic notation."],
    ["Suggest Hangul spellings", "We keep your original pronunciation and suggest natural Hangul."],
  ],
};

// ko/en만 작성했고, 나머지 로케일은 영어로 폴백한다(번역가가 언어별로 채워 넣을 수 있는 구조).
const formCopies: Partial<Record<Locale, FormCopy>> = { ko, en };

export function getFormCopy(locale: Locale): FormCopy {
  return formCopies[locale] ?? en;
}
