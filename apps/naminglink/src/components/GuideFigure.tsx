import type { ReactNode } from "react";

/**
 * 안내 문서에 들어가는 그림.
 *
 * **글만으로는 설명이 안 되는 것이 있다.** "소리를 고정하고 그 소리로 등록 가능한 한자만
 * 모은다"는 문장은 그림 한 장이면 끝난다. 애드센스가 "여러 형식의 콘텐츠"를 보는 것과도
 * 맞지만, 그보다 읽는 사람이 덜 헤맨다.
 *
 * **SVG·HTML로 그린다. 이미지 파일이 아니다.**
 *
 *   - 자바스크립트가 늘지 않는다(서버 컴포넌트라 그대로 HTML에 실린다).
 *   - 확대해도 깨지지 않고 다크 모드에서 색이 따라온다.
 *   - **값을 코드에서 가져올 수 있다** — 아래 흐름도의 글자 수는 부르는 쪽이 대법원 표에서
 *     읽어 넘긴다. 글에 손으로 적지 않는 이 저장소의 규칙과 같다.
 */
export function GuideFigure({
  caption,
  children,
}: {
  /** 그림 아래에 붙는 설명. 그림을 못 보는 사람에게도 뜻이 전해져야 한다. */
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-2 rounded-lg border border-line bg-background/60 px-3 py-4">
      <div className="mx-auto w-full max-w-[30rem]">{children}</div>
      <figcaption className="mt-3 text-center text-xs leading-6 text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * 한자 후보가 좁혀지는 순서.
 *
 * 이 서비스에서 가장 자주 오해받는 자리다 — "한자를 고르면 이름이 정해지는 것"으로 알고
 * 오시는데, 실제로는 **소리가 먼저 정해지고 그 소리로 읽도록 지정된 글자만** 후보가 된다.
 *
 * `total`은 부르는 쪽이 대법원 표에서 읽어 넘긴다. 값이 없으면 그 칸만 비운다.
 */
export function HanjaMatchFlow({ total }: { total?: string }) {
  const steps = [
    {
      key: "sound",
      caption: "① 소리를 고정",
      body: <span className="text-lg font-semibold">지 · 은</span>,
      note: "한자를 맞추느라 바꾸지 않습니다",
    },
    {
      key: "table",
      caption: "② 대법원 표로 거르기",
      body: (
        <span className="text-sm">
          <b>지</b>로 읽는 글자 · <b>은</b>으로 읽는 글자
        </span>
      ),
      note: total ? `표 전체 ${total}자에서` : "표에 있는 글자에서만",
    },
    {
      key: "combine",
      caption: "③ 두 글자의 결합으로",
      body: <span className="text-lg font-semibold">智恩 · 志銀 …</span>,
      note: "글자 하나가 아니라 이어 읽은 뜻으로 봅니다",
    },
  ];

  return (
    <ol className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
      {steps.map((step, index) => (
        <li key={step.key} className="contents">
          <div className="grid content-start gap-1 rounded-lg border border-line bg-surface px-3 py-3 text-center">
            <p className="text-[11px] font-semibold text-brand-teal">{step.caption}</p>
            <p className="min-h-[1.75rem]">{step.body}</p>
            <p className="text-[11px] leading-5 text-muted">{step.note}</p>
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="hidden select-none items-center justify-center text-muted sm:flex"
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** 오행 다섯과 좌표(정오각형, 木을 맨 위에 두고 시계 방향 — 상생 차례다). */
const ELEMENTS = [
  { key: "wood", label: "木", name: "목" },
  { key: "fire", label: "火", name: "화" },
  { key: "earth", label: "土", name: "토" },
  { key: "metal", label: "金", name: "금" },
  { key: "water", label: "水", name: "수" },
] as const;

const SIZE = 300;
const CENTER = SIZE / 2;
const RING = 104;
const LABEL_RING = 134;

function pointAt(index: number, radius: number) {
  const angle = (index / ELEMENTS.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + Math.cos(angle) * radius,
    y: CENTER + Math.sin(angle) * radius,
  };
}

/**
 * 오행 상생·상극 도표.
 *
 * 상생(相生)은 원을 따라 도는 이웃 관계이고, 상극(相剋)은 하나 건너뛴 별 모양이다. **말로는
 * 외워야 하지만 그림으로는 외울 것이 없다** — 그것이 이 그림을 넣는 이유다.
 *
 * 순서는 명리에서 고정된 것이라(木生火 火生土 土生金 金生水 水生木) 설정으로 두지 않는다.
 */
export function FiveElementsCycle() {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="h-auto w-full"
      role="img"
      aria-labelledby="five-elements-title"
    >
      <title id="five-elements-title">
        오행 다섯을 원으로 놓고 상생은 이웃끼리, 상극은 하나 건너뛰어 이은 그림
      </title>

      {/* 상극 — 하나 건너뛴 별. 먼저 그려 뒤로 보낸다. */}
      {ELEMENTS.map((element, index) => {
        const from = pointAt(index, RING);
        const to = pointAt((index + 2) % ELEMENTS.length, RING);
        return (
          <line
            key={`overcome-${element.key}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            className="stroke-brand-amber"
            strokeWidth={1.4}
            strokeDasharray="5 4"
            strokeOpacity={0.7}
          />
        );
      })}

      {/* 상생 — 원을 따라 도는 이웃. */}
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RING}
        className="fill-none stroke-brand-teal"
        strokeWidth={1.6}
        strokeOpacity={0.55}
      />

      {ELEMENTS.map((element, index) => {
        const node = pointAt(index, RING);
        const label = pointAt(index, LABEL_RING);
        return (
          <g key={element.key}>
            <circle cx={node.x} cy={node.y} r={19} className="fill-background stroke-line" />
            <text
              x={node.x}
              y={node.y + 6}
              textAnchor="middle"
              className="fill-foreground text-[17px] font-semibold"
            >
              {element.label}
            </text>
            <text
              x={label.x}
              y={label.y + 4}
              textAnchor="middle"
              className="fill-muted text-[11px]"
            >
              {element.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** 오행 그림의 범례. 선 모양이 무엇인지 글로도 알려 준다. */
export function FiveElementsLegend() {
  return (
    <ul className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted">
      <li className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 8" className="h-2 w-6" aria-hidden="true">
          <line x1="0" y1="4" x2="24" y2="4" className="stroke-brand-teal" strokeWidth={2} />
        </svg>
        상생 — 이웃을 낳는다
      </li>
      <li className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 8" className="h-2 w-6" aria-hidden="true">
          <line
            x1="0"
            y1="4"
            x2="24"
            y2="4"
            className="stroke-brand-amber"
            strokeWidth={2}
            strokeDasharray="5 4"
          />
        </svg>
        상극 — 하나 건너뛰어 누른다
      </li>
    </ul>
  );
}
