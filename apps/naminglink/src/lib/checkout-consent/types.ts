// 결제 전 고지 문구의 형태. 문구 자체는 로케일별 파일에 있다.
//
// 항목 구성은 「전자상거래 등에서의 상품 등의 정보제공에 관한 고시」가 요구하는 것이고,
// 디지털콘텐츠와 실물(도장)은 요구 항목이 달라 종류를 나눈다. **항목을 빼거나 합치지 말 것** —
// 로케일마다 항목 수가 달라지면 어느 언어에서 고시가 미달인지 알 수 없게 된다.

export type ConsentKind = "DIGITAL" | "MADE_TO_ORDER";

export type ConsentCopy = {
  infoTitle: string;
  /** [항목명, 내용] 쌍. DIGITAL 6줄, MADE_TO_ORDER 7줄로 고정이다. */
  info: Array<[string, string]>;
  consent: string;
  required: string;
  refund: string;
};

export type ConsentCopySet = Record<ConsentKind, ConsentCopy>;
