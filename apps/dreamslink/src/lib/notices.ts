/**
 * 공지사항.
 *
 * **개발 일지가 아니다.** 내부 작업 기록은 `docs/WORKLOG_*.md`에 있고 그건 우리 사정이다.
 * 여기에는 **이용자에게 영향이 있는 것만** 적는다 — 이용 조건, 값, 받는 물건의 내용, 계산이
 * 달라져 결과의 숫자가 움직이는 경우.
 *
 * 무엇을 적지 않는가(사용자 지침, 2026-08-02):
 *
 *   - 내부 개선. 화면이 빨라졌다거나 코드를 정리했다거나.
 *   - **판 적 없는 것의 "변경".** 아직 결제를 열지 않았으므로 값이나 구성이 "바뀌었다"고 적으면
 *     팔린 적 있다는 뜻이 되어 사실과 다르다.
 *   - 지키지 못할 약속. 약관에 변경 고지 기간이 없으므로 "며칠 전"을 새로 만들지 않는다.
 *   - 결함의 경위. 이용자가 다시 해야 할 일이 있을 때만, 무엇을 하면 되는지를 적는다.
 *
 * **이 서비스에서 가장 중요한 공지는 엔진 버전이다.** 규칙을 고치면 이미 결과 링크를 가진
 * 사람이 같은 입력으로 다른 숫자를 본다. 그때는 반드시 여기에 적는다 — 무엇이 달라졌고
 * 점수가 움직이는지 아닌지를.
 */

export type NoticeKind = "service" | "product" | "engine" | "support";

export type Notice = {
  id: string;
  publishedAt: string;
  effectiveFrom?: string;
  kind: NoticeKind;
  title: { ko: string; en: string };
  body: { ko: string[]; en: string[] };
};

export const NOTICE_KIND_LABEL: Record<NoticeKind, { ko: string; en: string }> = {
  service: { ko: "서비스", en: "Service" },
  product: { ko: "리포트", en: "Reports" },
  engine: { ko: "계산 기준", en: "Calculation" },
  support: { ko: "문의", en: "Support" },
};

/** 최신이 위로. 이 순서가 곧 표시 순서다. */
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
        "문의·환불·개인정보 요청·계산 오류 신고를 받는 창구를 한곳에 모았습니다. 화면 아래 문의하기에서 확인하실 수 있습니다.",
        "계산 오류로 보이는 것을 알려 주실 때는 어떤 생년월일시를 넣으셨는지 함께 적어 주십시오. 저희는 입력을 저장하지 않아 그 값이 없으면 다시 계산해 볼 수 없습니다.",
      ],
      en: [
        "Questions, refunds, privacy requests and reports of calculation errors now have one place to go — see the contact page in the footer.",
        "If something looks miscalculated, please include the birth details that produced it. We do not store what you enter, so without them we cannot reproduce the reading.",
      ],
    },
  },
  {
    id: "2026-08-01-pdf-language",
    publishedAt: "2026-08-01",
    kind: "product",
    title: {
      ko: "아랍어·크메르어 화면에서는 리포트가 영어로 나갑니다",
      en: "Reports are issued in English for Arabic and Khmer",
    },
    body: {
      ko: [
        "화면을 아랍어나 크메르어로 보고 계신 경우, 구매하시는 PDF 리포트는 영어로 만들어집니다. 문서를 만드는 도구가 아직 이 두 문자를 문단으로 조판하지 못하기 때문입니다.",
        "화면은 그대로 보실 수 있고, 리포트에 적히는 이름은 입력하신 문자 그대로 들어갑니다.",
        "결제 화면에서도 같은 내용을 미리 알려 드립니다. 도구가 이 문자를 지원하게 되면 그때 이 자리에 알리겠습니다.",
      ],
      en: [
        "If you are reading in Arabic or Khmer, the PDF report you buy is produced in English. The tool that lays out our documents cannot yet set paragraphs in those scripts.",
        "The screen stays in your language, and your name is printed in your own script inside the report.",
        "The same note appears before payment. When the tool supports these scripts, we will say so here.",
      ],
    },
  },
  {
    id: "2026-08-01-engine-version",
    publishedAt: "2026-08-01",
    kind: "engine",
    title: {
      ko: "결과에 계산 기준을 함께 적습니다",
      en: "Every reading carries the version of the rules used",
    },
    body: {
      ko: [
        "결과 화면과 리포트 아래에는 계산 기준(예: inyeonlink-match-v10)이 적혀 있습니다. 같은 입력이면 같은 기준에서 언제나 같은 값이 나옵니다.",
        "명리 해석 규칙을 고쳐 점수가 달라질 수 있게 되면, 그 사실과 시행일을 이 자리에 먼저 올립니다. 예전에 받으신 결과 링크의 숫자가 달라지는 일이기 때문입니다.",
        "현재 기준은 v10이며, 결제는 아직 준비 중입니다.",
      ],
      en: [
        "Each reading and report carries the rule set used to produce it (for example inyeonlink-match-v10). The same input on the same rule set always gives the same numbers.",
        "If we change the interpretation rules in a way that can move a score, we post that here first, with the date it takes effect — because a result link you already hold would then read differently.",
        "The current rule set is v10. Payments are not open yet.",
      ],
    },
  },
];
