// 신고 모달의 UI 문구 형태. 거래 문구(약관·요금)와 달리 짧은 마이크로카피라
// `@/lib/checkout-consent`와 같은 방식으로 로케일별 파일에 나눠 담는다.

export type ReportCopy = {
  /** 푸터 트리거 버튼 문구. */
  triggerLabel: string;
  title: string;
  urlLabel: string;
  urlPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  cancel: string;
  success: string;
  error: string;
};
