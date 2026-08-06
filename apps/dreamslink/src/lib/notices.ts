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
    id: "2026-08-06-no-storage",
    publishedAt: "2026-08-06",
    kind: "service",
    title: {
      ko: "적어 주신 꿈은 저장하지 않습니다",
      en: "We do not store the dream you write",
    },
    body: {
      ko: [
        "꿈 이야기는 이 서비스가 받는 값 중 가장 사적인 것입니다. 그래서 어떤 표에도 기록하지 않습니다. 입력은 결과 주소에만 실려 계산에 쓰이고, 창을 닫으면 함께 사라집니다.",
        "꿈을 모아 두고 흐름을 보여 드리는 기능(꿈일기)은 만들지 않기로 했습니다. 쓸모 있는 기능이지만, 그러려면 가장 사적인 글을 계속 보관해야 하기 때문입니다.",
        "결과 링크를 남에게 보내면 그 안에 꿈 내용이 담겨 있습니다. 공유하실 때 유의해 주십시오.",
      ],
      en: [
        "What you dreamt is the most personal thing this service receives, so it is written to no table of ours. The text travels only in the result address, is used for the reading, and is gone when you close the tab.",
        "We decided not to build a dream journal. It would be useful, but it would mean keeping that most personal text indefinitely.",
        "A result link carries the dream inside it. Please keep that in mind before sharing one.",
      ],
    },
  },
  {
    id: "2026-08-06-engine-version",
    publishedAt: "2026-08-06",
    kind: "engine",
    title: {
      ko: "결과에 상징 사전과 계산 기준을 함께 적습니다",
      en: "Every reading carries the dictionary and rule versions used",
    },
    body: {
      ko: [
        "해석의 근거는 전통 해몽 상징 사전입니다. 결과와 문서에는 그 사전의 판(예: 1.2.0)과 찾는 규칙의 기준(예: dream-1.0.0)이 함께 적힙니다. 같은 꿈이면 같은 기준에서 언제나 같은 상징이 나옵니다.",
        "사전에 상징을 더하거나 의미를 고쳐 결과가 달라질 수 있게 되면, 그 사실을 이 자리에 올립니다. 예전에 받으신 결과가 달라지는 일이기 때문입니다.",
        "사전에 없는 전통 의미는 만들지 않습니다. 상징을 하나도 찾지 못하면 찾지 못했다고 적고 끝냅니다.",
      ],
      en: [
        "Every reading is grounded in a dictionary of traditional Korean dream symbols. The result and the documents carry both the dictionary edition (for example 1.2.0) and the matching rule set (for example dream-1.0.0). The same dream on the same versions always yields the same symbols.",
        "If we add symbols or revise meanings in a way that can change a reading, we post that here — because a result you already hold would then read differently.",
        "We do not invent traditional meanings. If no symbol is found, we say so and stop.",
      ],
    },
  },
  {
    id: "2026-08-06-conception",
    publishedAt: "2026-08-06",
    kind: "service",
    title: {
      ko: "태몽은 알려 드릴 뿐 판정하지 않습니다",
      en: "Conception omens are shown, not decided",
    },
    body: {
      ko: [
        "전통적으로 태몽으로 보아 온 상징이 꿈에 나오면 그 사실을 알려 드립니다. 다만 임신 여부나 아이의 성별을 판정하지는 않습니다 — 그런 주장에는 근거가 없고, 의학적 판단은 의료기관의 몫입니다.",
        "전통 서술에 아들·딸 이야기가 나오는 것은 그렇게 보아 온 관습을 옮긴 것이며, 저희가 그것을 맞힌다는 뜻이 아닙니다.",
      ],
      en: [
        "When symbols traditionally read as conception omens appear in a dream, we tell you so. We do not determine whether you are pregnant or the sex of a child — there is no basis for such a claim, and medical judgement belongs to a clinician.",
        "Where the tradition speaks of a son or a daughter, we are recording a custom, not claiming to predict it.",
      ],
    },
  },
];
