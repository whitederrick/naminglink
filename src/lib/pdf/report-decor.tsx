import React from "react";
import { Circle, Ellipse, G, Path, Svg, View } from "@react-pdf/renderer";

// 표지 배경의 한국적 장식(전부 벡터 — 외부 이미지 없이 가볍게 임베드).
// 우상단 매화 가지, 하단 산 능선 2겹, 좌상단 구름 문양. 색은 한지 톤과 낙관 홍색 계열로
// 본문 텍스트(중앙)와 겹치지 않게 가장자리에만 배치한다.

const decor = {
  branch: "#5a4632",
  petal: "#b23a2f",
  petalSoft: "#c9635a",
  stamen: "#e9c46a",
  ridgeFar: "#eadfc4",
  ridgeNear: "#e0d2b0",
  cloud: "#d8c9a5",
};

function Blossom({ cx, cy, r, soft }: { cx: number; cy: number; r: number; soft?: boolean }) {
  const fill = soft ? decor.petalSoft : decor.petal;
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
      <Circle cx={cx} cy={cy} r={r * 0.34} fill={decor.stamen} />
    </G>
  );
}

export function HanjiBackdrop() {
  return (
    <View
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      fixed
    >
      <Svg width="100%" height="100%" viewBox="0 0 800 540" preserveAspectRatio="xMidYMid slice">
        {/* 하단 산 능선 */}
        <Path
          d="M-10,466 C110,428 220,452 330,434 C450,414 540,448 660,428 C730,417 775,430 810,424 L810,550 L-10,550 Z"
          fill={decor.ridgeFar}
        />
        <Path
          d="M-10,492 C130,462 250,486 380,468 C510,450 610,482 720,464 C760,458 790,466 810,462 L810,550 L-10,550 Z"
          fill={decor.ridgeNear}
        />
        {/* 좌상단 구름 문양 */}
        <G>
          <Ellipse cx={86} cy={64} rx={46} ry={13} stroke={decor.cloud} strokeWidth={2} fill="none" />
          <Ellipse cx={128} cy={52} rx={34} ry={10} stroke={decor.cloud} strokeWidth={2} fill="none" />
          <Ellipse cx={60} cy={48} rx={26} ry={8} stroke={decor.cloud} strokeWidth={2} fill="none" />
        </G>
        {/* 우상단 매화 가지 */}
        <Path
          d="M812,26 C726,44 668,66 612,124 C588,150 570,182 562,214"
          stroke={decor.branch}
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M700,52 C678,84 668,112 666,146"
          stroke={decor.branch}
          strokeWidth={3}
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M626,112 C648,120 668,134 680,152"
          stroke={decor.branch}
          strokeWidth={2.4}
          strokeLinecap="round"
          fill="none"
        />
        <Blossom cx={666} cy={150} r={13} />
        <Blossom cx={604} cy={132} r={10} soft />
        <Blossom cx={562} cy={214} r={11} />
        <Blossom cx={686} cy={158} r={7} soft />
        <Circle cx={636} cy={102} r={4.5} fill={decor.petal} />
        <Circle cx={702} cy={48} r={4} fill={decor.petalSoft} />
        <Circle cx={584} cy={176} r={3.6} fill={decor.petal} />
      </Svg>
    </View>
  );
}
