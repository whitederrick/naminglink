/**
 * 공지사항.
 *
 * **개발 일지가 아니다.** 내부 작업 기록은 `docs/WORKLOG_*.md`에 있고 그건 우리 사정이다.
 * 여기에는 **이용자에게 영향이 있는 것만** 적는다 — 이용 조건, 값, 받는 물건의 내용, 연락 방법.
 *
 * 무엇을 적지 않는가(사용자 지침, 2026-08-02):
 *
 *   - 고쳤다는 사실 자체가 자랑이 되는 내부 개선. 화면이 빨라졌다거나 코드를 정리했다거나.
 *   - **판 적 없는 것의 "변경".** 아직 결제를 열지 않았으므로 값이나 구성이 "바뀌었다"고 적으면
 *     팔린 적 있다는 뜻이 되어 사실과 다르다. 지금은 **정해진 내용을 알리는 것**까지다.
 *   - 지키지 못할 약속. 약관에 변경 고지 기간이 정해져 있지 않으므로 "며칠 전"을 새로
 *     만들지 않는다. 여기서 늘리면 그때부터 지켜야 하는 조건이 된다.
 *   - 결함·장애의 경위. 이용자가 할 일이 없는 이야기이고, 문장 하나가 분쟁의 근거가 된다.
 *     이용자가 무언가를 다시 해야 하는 경우에만, 무엇을 하면 되는지를 적는다.
 *
 * 쓸 것이 없는 달에는 비워 둔다. 채우려고 쓰기 시작하면 이 자리의 뜻이 없어진다.
 */

export type NoticeKind = "service" | "product" | "policy" | "support";

export type Notice = {
  id: string;
  /** 올린 날(YYYY-MM-DD). */
  publishedAt: string;
  /** 이 내용이 적용되는 날. 값·조건이 달라지는 공지에만 쓴다. */
  effectiveFrom?: string;
  kind: NoticeKind;
  title: { ko: string; en: string };
  /** 문단 목록. 한 문단이 한 뜻이 되게 짧게 끊는다. */
  body: { ko: string[]; en: string[] };
};

export const NOTICE_KIND_LABEL: Record<NoticeKind, { ko: string; en: string }> = {
  service: { ko: "서비스", en: "Service" },
  product: { ko: "상품", en: "Products" },
  policy: { ko: "약관·정책", en: "Policy" },
  support: { ko: "문의", en: "Support" },
};

/** 최신이 위로 오게 둔다. 날짜순 정렬은 화면이 하지 않는다 — 이 순서가 곧 표시 순서다. */
export const notices: Notice[] = [
  {
    id: "2026-08-02-contact",
    publishedAt: "2026-08-02",
    kind: "support",
    title: {
      ko: "문의 창구와 서비스 소개 페이지를 열었습니다",
      en: "Contact and About pages are now open",
    },
    body: {
      ko: [
        "문의·환불·개인정보 요청·오류 신고를 받는 창구를 한곳에 모았습니다. 화면 아래 문의하기에서 이메일과 사업자 정보를 확인하실 수 있습니다.",
        "무엇을 근거로 이름을 고르고 무엇을 하지 않는지는 소개 페이지에 적었습니다.",
      ],
      en: [
        "Questions, refunds, privacy requests and error reports now have one place to go. The contact page in the footer lists our email and company details.",
        "What our answers are based on, and what we deliberately do not do, is written on the about page.",
      ],
    },
  },
  {
    id: "2026-08-01-pdf-language",
    publishedAt: "2026-08-01",
    kind: "product",
    title: {
      ko: "아랍어·크메르어 화면에서는 PDF가 영어로 나갑니다",
      en: "PDF reports are issued in English for Arabic and Khmer",
    },
    body: {
      ko: [
        "화면을 아랍어나 크메르어로 보고 계신 경우, 구매하시는 PDF 문서는 영어로 만들어집니다. 문서를 만드는 도구가 아직 이 두 문자를 문단으로 조판하지 못하기 때문입니다.",
        "화면은 그대로 아랍어·크메르어로 보실 수 있고, 문서에 적히는 이름은 입력하신 문자 그대로 들어갑니다.",
        "결제 화면에서도 같은 내용을 미리 알려 드립니다. 도구가 이 문자를 지원하게 되면 그때 이 자리에 알리겠습니다.",
      ],
      en: [
        "If you are using the service in Arabic or Khmer, the PDF you buy is produced in English. The tool that lays out our documents cannot yet set paragraphs in those two scripts.",
        "The screen stays in your language, and your name is printed in your own script inside the document.",
        "The same note appears before payment. When the tool supports these scripts, we will say so here.",
      ],
    },
  },
  {
    id: "2026-08-01-payments-preparing",
    publishedAt: "2026-08-01",
    kind: "service",
    title: {
      ko: "현재 결제는 준비 중입니다",
      en: "Payments are not open yet",
    },
    body: {
      ko: [
        "이름을 짓고 결과를 보시는 것은 지금도 무료로 이용하실 수 있습니다. 회원가입도 필요하지 않습니다.",
        "유료 상품은 아직 판매를 시작하지 않았습니다. 요금안내에 적힌 금액은 판매를 시작할 때 적용될 값입니다.",
      ],
      en: [
        "Creating a name and reading the result is free today, and no account is needed.",
        "Paid items are not on sale yet. The amounts shown on the pricing page are what will apply once sales open.",
      ],
    },
  },
];
