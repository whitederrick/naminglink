import type { ReactNode } from "react";

import {
  BRANCH_ANIMALS,
  EARTHLY_BRANCHES,
  branchRelation,
  type Branch,
} from "@/lib/engines/branches";

/**
 * 안내 문서에 들어가는 그림.
 *
 * **글만으로는 설명이 안 되는 것이 있다.** 열두 글자가 원을 이루고 마주 보는 짝이 충이라는
 * 말은, 원을 한 번 보면 끝날 이야기다. 애드센스가 "여러 형식의 콘텐츠"를 보는 것과도 맞지만,
 * 그보다 읽는 사람이 덜 헤맨다.
 *
 * **SVG로 그린다.** 이미지 파일이 아니라 그림 코드다.
 *
 *   - 자바스크립트가 늘지 않는다(서버 컴포넌트에서 그대로 HTML에 실린다).
 *   - 확대해도 깨지지 않고, 다크 모드에서 색이 따라온다(`currentColor`).
 *   - **값을 엔진에서 가져올 수 있다** — 아래 십이지 그림의 선은 `branchRelation()`이 정한다.
 *     규칙을 고치면 그림도 따라 바뀐다. 글에 손으로 적지 않는 이 저장소의 규칙과 같다.
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
    <figure className="my-2 rounded-lg border border-line bg-surface px-3 py-4">
      <div className="mx-auto w-full max-w-[24rem]">{children}</div>
      <figcaption className="mt-3 text-center text-xs leading-6 text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

/** 그림에서 보여 줄 관계와 선 모양. 점수 순으로 둔다. */
const WHEEL_RELATIONS = [
  { key: "YUKHAP", label: "육합", className: "stroke-brand-navy", dash: undefined },
  { key: "CHUNG", label: "충", className: "stroke-brand-gold", dash: "6 4" },
  { key: "WONJIN", label: "원진", className: "stroke-brand-celadon", dash: "2 4" },
] as const;

const SIZE = 360;
const CENTER = SIZE / 2;
const LABEL_RADIUS = 148;
const CHORD_RADIUS = 118;

/** 子를 맨 위에 두고 시계 방향. 십이지를 그리는 관례다. */
function pointAt(index: number, radius: number) {
  const angle = (index / EARTHLY_BRANCHES.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + Math.cos(angle) * radius,
    y: CENTER + Math.sin(angle) * radius,
  };
}

/**
 * 십이지 관계 바퀴.
 *
 * **선을 손으로 그리지 않는다.** 짝을 전부 `branchRelation()`에 물어 보고 그 답으로 긋는다.
 * 표에 적힌 짝과 그림의 선이 어긋날 수 없고, 규칙을 고치면 그림이 따라온다.
 */
export function BranchWheel() {
  const chords: Array<{ from: Branch; to: Branch; key: string }> = [];
  for (let i = 0; i < EARTHLY_BRANCHES.length; i += 1) {
    for (let j = i + 1; j < EARTHLY_BRANCHES.length; j += 1) {
      const relation = branchRelation(EARTHLY_BRANCHES[i], EARTHLY_BRANCHES[j]);
      if (WHEEL_RELATIONS.some((item) => item.key === relation)) {
        chords.push({ from: EARTHLY_BRANCHES[i], to: EARTHLY_BRANCHES[j], key: relation });
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="h-auto w-full"
      role="img"
      aria-labelledby="branch-wheel-title"
    >
      <title id="branch-wheel-title">
        십이지 열두 글자를 원으로 놓고 육합·충·원진을 선으로 이은 그림
      </title>

      <circle
        cx={CENTER}
        cy={CENTER}
        r={CHORD_RADIUS}
        className="fill-none stroke-line"
        strokeWidth={1}
      />

      {WHEEL_RELATIONS.map((relation) =>
        chords
          .filter((chord) => chord.key === relation.key)
          .map((chord) => {
            const from = pointAt(EARTHLY_BRANCHES.indexOf(chord.from), CHORD_RADIUS);
            const to = pointAt(EARTHLY_BRANCHES.indexOf(chord.to), CHORD_RADIUS);
            return (
              <line
                key={`${relation.key}-${chord.from}${chord.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                className={relation.className}
                strokeWidth={1.6}
                strokeDasharray={relation.dash}
                strokeOpacity={0.75}
              />
            );
          }),
      )}

      {EARTHLY_BRANCHES.map((branch, index) => {
        const node = pointAt(index, CHORD_RADIUS);
        const label = pointAt(index, LABEL_RADIUS);
        return (
          <g key={branch}>
            <circle cx={node.x} cy={node.y} r={13} className="fill-background stroke-line" />
            <text
              x={node.x}
              y={node.y + 4.5}
              textAnchor="middle"
              className="fill-foreground text-[13px] font-semibold"
            >
              {branch}
            </text>
            <text
              x={label.x}
              y={label.y + 4}
              textAnchor="middle"
              className="fill-muted text-[11px]"
            >
              {BRANCH_ANIMALS[branch]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** 바퀴 아래에 붙는 범례. 선 모양이 무엇인지 글로도 알려 준다. */
export function BranchWheelLegend() {
  return (
    <ul className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted">
      {WHEEL_RELATIONS.map((relation) => (
        <li key={relation.key} className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 8" className="h-2 w-6" aria-hidden="true">
            <line
              x1="0"
              y1="4"
              x2="24"
              y2="4"
              className={relation.className}
              strokeWidth={2}
              strokeDasharray={relation.dash}
            />
          </svg>
          {relation.label}
        </li>
      ))}
    </ul>
  );
}

const PILLARS_KO = [
  { key: "year", label: "연주", note: "뿌리 · 띠" },
  { key: "month", label: "월주", note: "계절 · 세력" },
  { key: "day", label: "일주", note: "나 · 배우자궁" },
  { key: "hour", label: "시주", note: "말년 · 쓰임" },
] as const;

const PILLARS_EN = [
  { key: "year", label: "Year", note: "roots · zodiac animal" },
  { key: "month", label: "Month", note: "season · strength" },
  { key: "day", label: "Day", note: "you · your partner seat" },
  { key: "hour", label: "Hour", note: "later years · how it is used" },
] as const;

const PILLAR_ROWS_KO = { stem: "천간", branch: "지지", stemNote: "일간 = 나", branchNote: "일지 = 배우자궁" };
const PILLAR_ROWS_EN = {
  stem: "Stem",
  branch: "Branch",
  stemNote: "day stem = you",
  branchNote: "day branch = partner seat",
};

/**
 * 사주 네 기둥 구조도.
 *
 * 이 서비스의 글은 "일간", "일지", "연지" 같은 말을 계속 쓴다. 그 자리가 어디인지 한 번
 * 보여 주지 않으면 문장을 읽을 때마다 머릿속에서 표를 다시 세워야 한다.
 *
 * **영어 안내 문서에도 같은 그림이 필요하다.** 라벨만 갈라 준다 — 구조는 언어와 무관하다.
 */
export function FourPillarsDiagram({ language = "ko" }: { language?: "ko" | "en" }) {
  const korean = language === "ko";
  const PILLARS = korean ? PILLARS_KO : PILLARS_EN;
  const rows = korean ? PILLAR_ROWS_KO : PILLAR_ROWS_EN;
  return renderPillars(PILLARS, rows);
}

function renderPillars(
  PILLARS: typeof PILLARS_KO | typeof PILLARS_EN,
  rows: typeof PILLAR_ROWS_KO,
) {
  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      {PILLARS.map((pillar) => {
        const isDay = pillar.key === "day";
        return (
          <div key={pillar.key} className="grid gap-1">
            <p className="text-xs font-semibold text-muted">{pillar.label}</p>
            <p
              className={`rounded-md border px-1 py-2 text-sm ${
                isDay
                  ? "border-brand-navy bg-brand-navy/10 font-semibold text-brand-navy"
                  : "border-line bg-background"
              }`}
            >
              {rows.stem}
              {isDay ? <span className="mt-0.5 block text-[10px]">{rows.stemNote}</span> : null}
            </p>
            <p
              className={`rounded-md border px-1 py-2 text-sm ${
                isDay
                  ? "border-brand-navy bg-brand-navy/10 font-semibold text-brand-navy"
                  : "border-line bg-background"
              }`}
            >
              {rows.branch}
              {isDay ? <span className="mt-0.5 block text-[10px]">{rows.branchNote}</span> : null}
            </p>
            <p className="text-[11px] leading-5 text-muted">{pillar.note}</p>
          </div>
        );
      })}
    </div>
  );
}
