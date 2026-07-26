import React from "react";
import { Circle, Ellipse, G, Line, Path, Svg, View } from "@react-pdf/renderer";

// 표지 배경의 한국적 장식(전부 벡터 — 외부 이미지 없이 가볍게 임베드).
// 공통 구도: 하단 산 능선 2겹 + 좌상단 구름 + 우상단 가지/모티프. 색은 한지 톤 계열로
// 본문 텍스트(중앙)와 겹치지 않게 가장자리에만 배치한다.
// 계절 4종: 생성 시점의 월로 자동 선택된다(3~5 봄, 6~8 여름, 9~11 가을, 12~2 겨울).

export type Season = "spring" | "summer" | "autumn" | "winter";

export function seasonForDate(date: Date = new Date()): Season {
  const month = date.getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

// 계절 팔레트. autumn은 기존(홍매·따뜻한 한지 톤) 디자인 그대로 유지한다.
const palettes = {
  spring: {
    branch: "#5a4632",
    petal: "#e59aae",
    petalSoft: "#f0bfcb",
    stamen: "#e9c46a",
    ridgeFar: "#e6e9cd",
    ridgeNear: "#d8dfb6",
    cloud: "#cfd6b0",
  },
  summer: {
    branch: "#4f6d3f",
    petal: "#6f9a5a",
    petalSoft: "#8fb478",
    stamen: "#e9c46a",
    ridgeFar: "#e0e8cf",
    ridgeNear: "#cdddb4",
    cloud: "#c2d3ab",
  },
  autumn: {
    branch: "#5a4632",
    petal: "#b23a2f",
    petalSoft: "#c9635a",
    stamen: "#e9c46a",
    ridgeFar: "#eadfc4",
    ridgeNear: "#e0d2b0",
    cloud: "#d8c9a5",
  },
  winter: {
    branch: "#6b6f7a",
    petal: "#f4f6f8",
    petalSoft: "#e2e7ee",
    stamen: "#cfd6e0",
    ridgeFar: "#e7eaef",
    ridgeNear: "#d9dee6",
    cloud: "#c8cfda",
  },
} as const;

type Palette = (typeof palettes)[Season];

function Blossom({
  cx,
  cy,
  r,
  soft,
  palette,
}: {
  cx: number;
  cy: number;
  r: number;
  soft?: boolean;
  palette: Palette;
}) {
  const fill = soft ? palette.petalSoft : palette.petal;
  const petals = [
    [0, -r],
    [r * 0.95, -r * 0.31],
    [r * 0.59, r * 0.81],
    [-r * 0.59, r * 0.81],
    [-r * 0.95, -r * 0.31],
  ];
  return (
    <G>
      {petals.map(([dx, dy], index) => (
        <Circle key={index} cx={cx + dx} cy={cy + dy} r={r * 0.62} fill={fill} />
      ))}
      <Circle cx={cx} cy={cy} r={r * 0.34} fill={palette.stamen} />
    </G>
  );
}

// 우상단 매화 가지(봄=분홍 벚·매화 / 가을=홍매). 겨울은 꽃 없이 가지+눈송이로 쓴다.
function BranchMotif({ palette, bare }: { palette: Palette; bare?: boolean }) {
  return (
    <G>
      <Path
        d="M812,26 C726,44 668,66 612,124 C588,150 570,182 562,214"
        stroke={palette.branch}
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M700,52 C678,84 668,112 666,146"
        stroke={palette.branch}
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M626,112 C648,120 668,134 680,152"
        stroke={palette.branch}
        strokeWidth={2.4}
        strokeLinecap="round"
        fill="none"
      />
      {bare ? null : (
        <G>
          <Blossom cx={666} cy={150} r={13} palette={palette} />
          <Blossom cx={604} cy={132} r={10} soft palette={palette} />
          <Blossom cx={562} cy={214} r={11} palette={palette} />
          <Blossom cx={686} cy={158} r={7} soft palette={palette} />
          <Circle cx={636} cy={102} r={4.5} fill={palette.petal} />
          <Circle cx={702} cy={48} r={4} fill={palette.petalSoft} />
          <Circle cx={584} cy={176} r={3.6} fill={palette.petal} />
        </G>
      )}
    </G>
  );
}

// 여름: 우상단 대나무 줄기 2대 + 잎.
function BambooMotif({ palette }: { palette: Palette }) {
  const leaf = (x: number, y: number, dx: number, dy: number, key: string) => (
    <Path
      key={key}
      d={`M${x},${y} C${x + dx * 0.45},${y + dy * 0.2} ${x + dx * 0.8},${y + dy * 0.6} ${x + dx},${y + dy} C${x + dx * 0.55},${y + dy * 0.85} ${x + dx * 0.2},${y + dy * 0.5} ${x},${y} Z`}
      fill={palette.petalSoft}
    />
  );
  return (
    <G>
      {[672, 726].map((x, index) => (
        <G key={x}>
          <Line
            x1={x}
            y1={16}
            x2={x - 14}
            y2={index === 0 ? 236 : 190}
            stroke={palette.branch}
            strokeWidth={index === 0 ? 7 : 5}
            strokeLinecap="round"
          />
          {/* 마디 */}
          {[64, 120, 176].map((y) => (
            <Line
              key={y}
              x1={x - (y / 240) * 14 - 6}
              y1={y}
              x2={x - (y / 240) * 14 + 6}
              y2={y - 2}
              stroke={palettes.summer.ridgeFar}
              strokeWidth={2.4}
            />
          ))}
        </G>
      ))}
      {leaf(650, 92, -52, 26, "a")}
      {leaf(646, 150, -58, 12, "b")}
      {leaf(658, 196, -44, 34, "c")}
      {leaf(716, 74, 46, 30, "d")}
      {leaf(712, 132, 52, 18, "e")}
      <Path
        d="M650,92 C630,100 614,106 600,116 M646,150 C624,154 606,156 590,162 M716,74 C736,86 750,94 762,104"
        stroke={palette.petal}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
    </G>
  );
}

// 겨울: 눈송이(육각 별) + 흩날리는 눈, 옅은 달.
function SnowMotif({ palette }: { palette: Palette }) {
  const flake = (cx: number, cy: number, r: number, key: string) => (
    <G key={key}>
      {[0, 60, 120].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const dx = Math.cos(rad) * r;
        const dy = Math.sin(rad) * r;
        return (
          <Line
            key={angle}
            x1={cx - dx}
            y1={cy - dy}
            x2={cx + dx}
            y2={cy + dy}
            stroke={palette.cloud}
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        );
      })}
      <Circle cx={cx} cy={cy} r={r * 0.18} fill={palette.cloud} />
    </G>
  );
  return (
    <G>
      <Circle cx={524} cy={64} r={27} fill={palette.petalSoft} />
      {flake(586, 160, 11, "f1")}
      {flake(700, 142, 8, "f2")}
      {flake(548, 96, 7, "f3")}
      {[
        [618, 200, 2.6],
        [664, 182, 2.2],
        [700, 210, 2.0],
        [560, 210, 1.8],
        [736, 96, 2.4],
        [530, 140, 1.6],
      ].map(([cx, cy, r], index) => (
        <Circle key={index} cx={cx} cy={cy} r={r} fill={palette.petal} />
      ))}
    </G>
  );
}

export function HanjiBackdrop({ season }: { season?: Season } = {}) {
  const active: Season = season ?? seasonForDate();
  const palette = palettes[active];
  return (
    <View
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      fixed
    >
      <Svg width="100%" height="100%" viewBox="0 0 800 540" preserveAspectRatio="xMidYMid slice">
        {/* 하단 산 능선 */}
        <Path
          d="M-10,466 C110,428 220,452 330,434 C450,414 540,448 660,428 C730,417 775,430 810,424 L810,550 L-10,550 Z"
          fill={palette.ridgeFar}
        />
        <Path
          d="M-10,492 C130,462 250,486 380,468 C510,450 610,482 720,464 C760,458 790,466 810,462 L810,550 L-10,550 Z"
          fill={palette.ridgeNear}
        />
        {/* 좌상단 구름 문양 */}
        <G>
          <Ellipse cx={86} cy={64} rx={46} ry={13} stroke={palette.cloud} strokeWidth={2} fill="none" />
          <Ellipse cx={128} cy={52} rx={34} ry={10} stroke={palette.cloud} strokeWidth={2} fill="none" />
          <Ellipse cx={60} cy={48} rx={26} ry={8} stroke={palette.cloud} strokeWidth={2} fill="none" />
        </G>
        {/* 우상단 계절 모티프 */}
        {active === "summer" ? (
          <BambooMotif palette={palette} />
        ) : active === "winter" ? (
          <G>
            <BranchMotif palette={palette} bare />
            <SnowMotif palette={palette} />
          </G>
        ) : (
          <BranchMotif palette={palette} />
        )}
        {/* 봄: 흩날리는 꽃잎 */}
        {active === "spring" ? (
          <G>
            {[
              [520, 120, 3.4],
              [560, 70, 2.8],
              [480, 180, 2.6],
              [610, 250, 3.0],
              [660, 230, 2.2],
            ].map(([cx, cy, r], index) => (
              <Circle key={index} cx={cx} cy={cy} r={r} fill={palette.petalSoft} />
            ))}
          </G>
        ) : null}
      </Svg>
    </View>
  );
}
