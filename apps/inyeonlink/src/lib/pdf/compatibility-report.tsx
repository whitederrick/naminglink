import { readFileSync } from "node:fs";
import path from "node:path";

import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";

import type {
  Factor,
  MatchOutcome,
  MutualRelation,
  PersonReading,
} from "@/lib/engines";
import { scoreBand } from "@/lib/engines";
// 오행 다섯의 **정규 순서**. `Object.keys`로 훑으면 순서가 객체 리터럴에 딸려
// 다니고 타입도 string이 된다 — 표의 행 순서는 사람마다 같아야 한다.
import { FIVE_ELEMENTS } from "@naminglink/core/saju/elements";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { MixedText, SCRIPT_FAMILY } from "@/lib/pdf/fonts";
import { warmUpLayoutEngine } from "@/lib/pdf/warm-up";
import { romanizePillar } from "@naminglink/core/saju";

// 궁합 리포트 PDF. 두 장이다 — 표지 겸 요약, 그리고 근거.
//
// 화면과 같은 내용을 그대로 옮기지 않는다. 화면은 스크롤로 읽는 곳이고 이건 보관·공유하는
// 것이라, **한눈에 들어오는 요약**을 앞에 두고 근거(사주 원국·오행 세력·항목별 점수)를
// 뒤에 모았다. 화면에 없는 것도 담는다: 두 사람의 사주 여덟 글자 전체와 오행 세력 수치.
//
// 입력값은 여기서도 저장하지 않는다. 요청 본문으로 받아 이 함수가 버퍼를 만들어 돌려주면
// 끝이고 파일로 남기지 않는다.

const PALETTE = {
  plum: "#86335a",
  copper: "#b4632f",
  sage: "#4f6f5e",
  ink: "#1d1518",
  muted: "#77696d",
  line: "#e6d9da",
  surface: "#f5e9ea",
  paper: "#fbf7f6",
} as const;

/**
 * 머리줄에 넣을 로고. **화면·OG와 같은 파일(256px 사본)을 쓴다** — 한 곳만 바꾸면 표식이 갈린다.
 *
 * 파일을 못 읽으면 `null`이고, 그때는 글자만 나간다. 로고가 없다고 결제한 문서를 못 주면 안 된다.
 */
let logoSrc: string | null = null;
try {
  logoSrc = `data:image/png;base64,${readFileSync(
    path.join(process.cwd(), "public/images/inyeonlink-circle-logo-256.png"),
  ).toString("base64")}`;
} catch {
  logoSrc = null;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: PALETTE.paper,
    color: PALETTE.ink,
    paddingHorizontal: 48,
    paddingTop: 44,
    // **꼬리글이 두 줄이 되는 언어를 견뎌야 한다.** 꼬리글은 절대 위치라 자리를 차지하지 않고,
    // 이 여백만큼만 본문이 비켜 준다. 56이었을 때 이탈리아어(고지 163자)에서 고지가 두 줄이
    // 되면서 표 마지막 행 위로 겹쳐 찍혔다(2026-08-01 지면 전수 검사). 두 줄 꼬리글 높이는
    // bottom 28 + 여백 8 + 본문 세 줄 ≈ 71이라 그보다 넉넉히 둔다.
    paddingBottom: 78,
    fontFamily: SCRIPT_FAMILY.base,
    fontSize: 10,
    lineHeight: 1.6,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.line,
    paddingBottom: 10,
  },
  brand: { fontSize: 13, color: PALETTE.plum },
  brandMeta: { fontSize: 8, color: PALETTE.muted },
  brandLeft: { flexDirection: "row", alignItems: "center" },
  brandLogo: { width: 18, height: 18, marginRight: 7, borderRadius: 9 },

  scoreBlock: {
    marginTop: 34,
    alignItems: "center",
    borderWidth: 1,
    borderColor: PALETTE.line,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 26,
  },
  names: { fontSize: 11, color: PALETTE.muted },
  scoreLabel: { fontSize: 9, color: PALETTE.muted, marginTop: 12 },
  // 큰 글자에는 lineHeight를 반드시 명시한다. 생략하면 react-pdf가 잡는 줄 상자가 글리프보다
  // 작아 다음 요소가 숫자 위로 겹쳐 그려진다(밴드 문구가 점수 위에 찍혔다).
  score: { fontSize: 52, lineHeight: 1.25, color: PALETTE.plum, marginTop: 2 },
  band: { fontSize: 14, lineHeight: 1.4, marginTop: 8 },

  sectionTitle: {
    fontSize: 12,
    color: PALETTE.plum,
    marginTop: 26,
    marginBottom: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: PALETTE.line,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  cardLabel: { fontSize: 8, color: PALETTE.muted, marginBottom: 4 },
  cardTitle: { fontSize: 11, marginBottom: 5 },
  body: { fontSize: 9.5, color: PALETTE.ink },
  note: { fontSize: 8.5, color: PALETTE.muted },

  pillarRow: { flexDirection: "row", marginTop: 8 },
  pillar: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: PALETTE.line,
    borderRadius: 6,
    paddingVertical: 8,
    marginRight: 6,
    backgroundColor: PALETTE.surface,
  },
  pillarLabel: { fontSize: 7.5, color: PALETTE.muted },
  // 한자도 같은 이유로 lineHeight를 명시한다 — 없으면 아래 독음이 한자에 겹친다.
  pillarHanja: { fontSize: 16, lineHeight: 1.3, marginTop: 3 },
  pillarHangul: { fontSize: 8, lineHeight: 1.4, color: PALETTE.muted },

  elementTrack: {
    flexDirection: "row",
    height: 7,
    backgroundColor: PALETTE.surface,
    borderRadius: 3.5,
    overflow: "hidden",
  },
  elementLegend: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  elementLegendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  elementDot: { width: 5, height: 5, borderRadius: 2.5, marginRight: 3 },
  elementName: { fontSize: 8.5 },
  elementValue: { fontSize: 8, color: PALETTE.muted, marginLeft: 3 },

  factorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.line,
    paddingVertical: 5,
  },

  // 심화 장(4~6장·부록)이 쓰는 표. 항목표(factorRow)와 달리 열이 여럿이라 머리행이 필요하다.
  tableHead: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.plum,
    paddingBottom: 4,
    marginTop: 2,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.line,
    paddingVertical: 5,
  },
  th: { fontSize: 8, color: PALETTE.plum },
  td: { fontSize: 9 },
  tdMuted: { fontSize: 8.5, color: PALETTE.muted },
  /** 표 아래에 붙는 고지(점수 미반영 등). 표와 붙여 두어야 무엇에 대한 말인지 분명하다. */
  tableNote: { fontSize: 7.5, color: PALETTE.muted, marginTop: 5 },

  /** 방향 두 개를 좌우로 놓는 자리. 비대칭을 눈으로 보이게 하는 것이 목적이다. */
  splitRow: { flexDirection: "row", marginTop: 8 },
  splitCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: PALETTE.line,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    padding: 12,
    marginRight: 8,
  },
  splitValue: { fontSize: 26, lineHeight: 1.3, color: PALETTE.plum, marginTop: 2 },

  footer: {
    position: "absolute",
    left: 48,
    right: 48,
    bottom: 28,
    borderTopWidth: 1,
    borderTopColor: PALETTE.line,
    paddingTop: 8,
  },
  footerText: { fontSize: 7.5, color: PALETTE.muted },
});

/**
 * 간지 아래에 적을 독음. **한국어면 한글, 그 밖에는 로마자다.**
 *
 * 한자(壬申)는 어느 언어에서도 그대로 둔다 — 그것이 간지의 원문이다. 바꾸는 것은 독음뿐인데,
 * 예전에는 로케일과 무관하게 언제나 한글이라 **독일어 이용자에게 「임신」이 나갔다**(2026-08-07).
 * 읽을 수 없는 글자는 정보가 아니다.
 */
function pillarReading(hangul: string, locale: Locale) {
  return locale === "ko" ? hangul : romanizePillar(hangul);
}

export type CompatibilityReportData = {
  outcome: MatchOutcome;
  nameA: string;
  nameB: string;
  locale: Locale;
  dictionary: Dictionary;
  /** 생성 시각(ISO). 서버가 넘긴다 — 렌더 함수가 시계를 읽지 않아야 결과가 재현된다. */
  generatedAt: string;
};

/** 사전의 `notes` 키와 파라미터로 문장을 만든다. 화면의 renderNote와 같은 규칙이다. */
function noteText(
  dictionary: Dictionary,
  entry: { note: string; params?: Record<string, string> },
) {
  const params = Object.fromEntries(
    Object.entries(entry.params ?? {}).map(([key, value]) => [
      key,
      dictionary.animals[value] ?? dictionary.elements[value] ?? value,
    ]),
  );
  return fillTemplate(dictionary.notes[entry.note] ?? entry.note, params);
}

/** 사전 문구의 **강조** 표기는 PDF에서 의미가 없으므로 별표만 걷어낸다. */
function plain(text: string) {
  return text.replace(/\*\*/g, "");
}

/**
 * 제목과 내용을 한 덩어리로 묶는다.
 *
 * 따로 두면 제목만 앞 장 끝에 남고 카드가 다음 장으로 넘어간다(실제로 그렇게 났다).
 * `wrap={false}`를 제목이 아니라 이 묶음에 걸어야 둘이 함께 움직인다.
 */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View wrap={false}>
      <MixedText style={styles.sectionTitle} text={title} />
      {children}
    </View>
  );
}

function Footer({
  dictionary,
  generatedAt,
  engineVersion,
}: {
  dictionary: Dictionary;
  generatedAt: string;
  engineVersion: string;
}) {
  return (
    <View style={styles.footer} fixed>
      <MixedText style={styles.footerText} text={dictionary.result.disclaimer} />
      <MixedText
        style={[styles.footerText, { marginTop: 2 }]}
        text={`${dictionary.brand} · ${dictionary.result.engineVersion}: ${engineVersion} · ${generatedAt.slice(0, 10)}`}
      />
    </View>
  );
}

function PillarGrid({
  reading,
  dictionary,
  locale,
}: {
  reading: PersonReading;
  dictionary: Dictionary;
  /** 간지 독음을 한글로 낼지 로마자로 낼지 가른다(`pillarReading`). */
  locale: Locale;
}) {
  const cells = [
    { label: dictionary.reading.pillarYear, pillar: reading.pillars.year },
    { label: dictionary.reading.pillarMonth, pillar: reading.pillars.month },
    { label: dictionary.reading.pillarDay, pillar: reading.pillars.day },
    { label: dictionary.reading.pillarHour, pillar: reading.pillars.hour },
  ];
  return (
    <View style={styles.pillarRow}>
      {cells.map((cell) => (
        <View key={cell.label} style={styles.pillar}>
          <MixedText style={styles.pillarLabel} text={cell.label} />
          {cell.pillar ? (
            <>
              <MixedText style={styles.pillarHanja} text={cell.pillar.hanja} />
              <MixedText style={styles.pillarHangul} text={pillarReading(cell.pillar.hangul, locale)} />
            </>
          ) : (
            <MixedText
              style={[styles.pillarHangul, { marginTop: 8 }]}
              text={dictionary.reading.pillarHourUnknown}
            />
          )}
        </View>
      ))}
    </View>
  );
}

/** 오행의 관습적인 색. 화면(MatchResultView)과 같은 값을 쓴다. */
const ELEMENT_COLOR: Record<string, string> = {
  WOOD: "#4f6f5e",
  FIRE: "#b4535a",
  EARTH: "#b4832f",
  METAL: "#9aa0a6",
  WATER: "#3f4a63",
};

/**
 * 다섯 기운의 비율.
 *
 * 예전에는 기운마다 한 줄씩 다섯 줄을 썼는데, 사람 카드 두 개가 한 장에 들어가야 하는 이 문서에서
 * 그만한 자리를 쓸 값어치가 없었다(신강·신약을 넣자 장수가 늘어났다). 화면과 같은 누적 막대로
 * 바꿔 두 줄로 줄인다 — 자리도 벌고 화면과 표현도 같아진다.
 */
function ElementBars({
  reading,
  dictionary,
}: {
  reading: PersonReading;
  dictionary: Dictionary;
}) {
  const entries = Object.entries(reading.elements) as Array<[string, number]>;
  const total = entries.reduce((sum, [, value]) => sum + value, 0) || 1;

  return (
    <View style={{ marginTop: 6 }}>
      <View style={styles.elementTrack}>
        {entries.map(([element, value]) => (
          <View
            key={element}
            style={{
              width: `${(value / total) * 100}%`,
              backgroundColor: ELEMENT_COLOR[element] ?? PALETTE.sage,
            }}
          />
        ))}
      </View>
      <View style={styles.elementLegend}>
        {entries.map(([element, value]) => (
          <View key={element} style={styles.elementLegendItem}>
            <View
              style={[
                styles.elementDot,
                { backgroundColor: ELEMENT_COLOR[element] ?? PALETTE.sage },
              ]}
            />
            <MixedText
              style={styles.elementName}
              text={dictionary.elements[element] ?? element}
            />
            <Text style={styles.elementValue}>
              {Math.round((value / total) * 100)}%
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function PersonSection({
  reading,
  fallbackName,
  dictionary,
  locale,
}: {
  reading: PersonReading;
  fallbackName: string;
  dictionary: Dictionary;
  /** 간지 독음을 한글로 낼지 로마자로 낼지 가른다(`pillarReading`). */
  locale: Locale;
}) {
  const name = reading.label?.trim() || fallbackName;
  const dayMaster = dictionary.dayMasters[reading.dayMaster.character];
  return (
    <View style={styles.card} wrap={false}>
      <MixedText style={styles.cardTitle} text={name} />
      <MixedText
        style={styles.note}
        text={`${dictionary.reading.dayMasterLabel} ${dayMaster?.name ?? reading.dayMaster.character} · ${dictionary.reading.animalLabel} ${dictionary.animals[reading.animal] ?? reading.animal} · ${dictionary.reading.seasonLabel} ${dictionary.elements[reading.seasonElement] ?? reading.seasonElement}`}
      />
      <PillarGrid reading={reading} dictionary={dictionary} locale={locale} />
      {dayMaster ? (
        <MixedText
          style={[styles.body, { marginTop: 8 }]}
          text={dayMaster.trait}
        />
      ) : null}
      <MixedText
        style={[styles.cardLabel, { marginTop: 10 }]}
        text={dictionary.reading.elementsTitle}
      />
      <ElementBars reading={reading} dictionary={dictionary} />

      {/* 신강·신약과 필요한 기운. 화면과 같은 내용을 유료 문서에도 싣는다.
          라벨을 따로 두지 않고 한 줄로 합친 것은 **카드 두 개가 한 장에 들어가야 하기
          때문이다.** 상품을 3장으로 팔고 있어서(약관 3항) 카드가 넘치면 장수가 늘어난다. */}
      <MixedText
        style={[styles.note, { marginTop: 10 }]}
        text={`${dictionary.reading.bodyStrengthTitle} · ${dictionary.bodyStrength[reading.bodyStrength].name} — ${dictionary.reading.favorableLabel} ${reading.favorableElements
          .map((element) => dictionary.elements[element] ?? element)
          .join(" · ")}`}
      />
      <MixedText
        style={[styles.body, { marginTop: 3 }]}
        text={dictionary.bodyStrength[reading.bodyStrength].body}
      />
    </View>
  );
}

function RelationSection({
  relation,
  names,
  dictionary,
}: {
  relation: MutualRelation;
  names: [string, string];
  dictionary: Dictionary;
}) {
  const shape = dictionary.relation.shapes[relation.shape];
  const leadTemplate =
    relation.shape === "ALIKE" || relation.leadIndex === null
      ? null
      : dictionary.relation.leadNote[relation.shape];

  const directions = [
    { from: names[0], to: names[1], god: relation.aSeesB },
    { from: names[1], to: names[0], god: relation.bSeesA },
  ];

  return (
    <View style={styles.card} wrap={false}>
      <MixedText style={styles.cardTitle} text={shape.name} />
      <MixedText style={styles.body} text={shape.body} />
      {leadTemplate ? (
        <MixedText
          style={[styles.note, { marginTop: 6 }]}
          text={plain(
            fillTemplate(leadTemplate, { lead: names[relation.leadIndex!] }),
          )}
        />
      ) : null}
      {directions.map((direction, index) => {
        const god = dictionary.tenGods[direction.god];
        if (!god) return null;
        return (
          <View key={index} style={{ marginTop: 10 }}>
            <MixedText
              style={styles.cardLabel}
              text={`${fillTemplate(dictionary.relation.directionLabel, {
                from: direction.from,
                to: direction.to,
              })} — ${god.name}`}
            />
            <MixedText style={styles.body} text={god.body} />
          </View>
        );
      })}
    </View>
  );
}

function FactorTable({
  factors,
  dictionary,
}: {
  factors: Factor[];
  dictionary: Dictionary;
}) {
  return (
    <View style={{ marginTop: 4 }}>
      {factors.map((factor) => (
        <View key={factor.key} style={styles.factorRow}>
          <MixedText
            style={[styles.body, { flex: 1 }]}
            text={dictionary.factors[factor.key]}
          />
          <Text style={[styles.body, { width: 70, textAlign: "right" }]}>
            {factor.score} / 100
          </Text>
          <Text style={[styles.note, { width: 54, textAlign: "right" }]}>
            {Math.round(factor.weight * 100)}%
          </Text>
        </View>
      ))}
    </View>
  );
}

// ---------------------------------------------------------------------------
// 심화 장(4~6장·부록).
//
// **화면에 없는 것만 담는다.** 무료 화면을 얇게 만들지 않고 리포트에만 더한다는 결정이라
// (2026-07-31 사용자), 여기 있는 것은 전부 `MatchOutcome.detail`과 `PersonReading`의 새 필드다
// — 엔진이 계산해 놓고 버리던 값과, 규칙은 있는데 적용하지 않던 자리다.
//
// 점수는 앞 장의 항목표가 전부 보여 준다. 이 장들의 숫자는 **매칭률에 들어가지 않는다** —
// 표마다 그 사실을 적는다. 적지 않으면 읽는 사람이 점수가 두 벌이라고 오해한다.
// ---------------------------------------------------------------------------

const PILLAR_LABEL_KEY = {
  year: "pillarYear",
  month: "pillarMonth",
  day: "pillarDay",
  hour: "pillarHour",
} as const;

function pillarLabel(dictionary: Dictionary, pillar: keyof typeof PILLAR_LABEL_KEY) {
  return dictionary.reading[PILLAR_LABEL_KEY[pillar]];
}

/** 한쪽 방향의 보완 정도. 두 개를 나란히 놓아 비대칭이 보이게 한다. */
function SupplyCell({
  name,
  score,
  needs,
  dictionary,
}: {
  name: string;
  score: number;
  needs: string[];
  dictionary: Dictionary;
}) {
  return (
    <View style={styles.splitCell}>
      <MixedText
        style={styles.cardLabel}
        text={fillTemplate(dictionary.reportDetail.supplyReceiveLabel, { name })}
      />
      <Text style={styles.splitValue}>{score}</Text>
      <MixedText
        style={[styles.cardLabel, { marginTop: 8, marginBottom: 0 }]}
        text={dictionary.reportDetail.needsLabel}
      />
      <MixedText
        style={styles.body}
        text={needs.map((element) => dictionary.elements[element] ?? element).join(" · ")}
      />
    </View>
  );
}

/**
 * 한 사람의 심화 카드 — 오행마다 월령 전후 세력과 계절 자리를 **한 표에** 담는다.
 *
 * 처음에는 왕상휴수사와 월령 전후를 표 두 개로 나눴는데, 사람 카드 둘이 한 장에 안 들어가
 * 두 번째 사람이 다음 장으로 밀렸다(영어판은 `wrap={false}` 블록이 페이지보다 커져 잘릴
 * 위험까지 있었다 — 실측으로 확인). 두 표의 **행 키가 똑같이 오행**이라 합치는 것이 자리도
 * 아끼고 읽기도 낫다.
 */
function DepthCard({
  name,
  reading,
  dictionary,
}: {
  name: string;
  reading: PersonReading;
  dictionary: Dictionary;
}) {
  const round = (value: number) => Math.round(value * 10) / 10;

  return (
    <View style={styles.card} wrap={false}>
      <MixedText style={styles.cardTitle} text={name} />
      <MixedText
        style={[styles.cardLabel, { marginTop: 4 }]}
        text={`${dictionary.reading.bodyStrengthTitle} · ${dictionary.bodyStrength[reading.bodyStrength].name} · ${dictionary.reportDetail.allyRatioLabel} ${Math.round(reading.allyRatio * 100)}%`}
      />

      <View style={[styles.tableHead, { marginTop: 8 }]}>
        <MixedText style={[styles.th, { flex: 1.6 }]} text={dictionary.reading.elementsTitle} />
        <MixedText
          style={[styles.th, { flex: 1, textAlign: "right" }]}
          text={dictionary.reportDetail.rawLabel}
        />
        <MixedText
          style={[styles.th, { flex: 1, textAlign: "right" }]}
          text={dictionary.reportDetail.strengthLabel}
        />
        <MixedText
          style={[styles.th, { flex: 1.2, textAlign: "right" }]}
          text={dictionary.reportDetail.vitalityTitle}
        />
      </View>
      {FIVE_ELEMENTS.map((element) => (
        <View key={element} style={styles.tableRow}>
          <MixedText
            style={[styles.td, { flex: 1.6 }]}
            text={dictionary.elements[element] ?? element}
          />
          <Text style={[styles.tdMuted, { flex: 1, textAlign: "right" }]}>
            {round(reading.rawElements[element])}
          </Text>
          <Text style={[styles.td, { flex: 1, textAlign: "right" }]}>
            {round(reading.elements[element])}
          </Text>
          <MixedText
            style={[styles.td, { flex: 1.2, textAlign: "right" }]}
            text={dictionary.reportDetail.vitalities[reading.vitality[element]].name}
          />
        </View>
      ))}
      {reading.earthSeason ? (
        <MixedText style={styles.tableNote} text={dictionary.reportDetail.earthSeasonNote} />
      ) : null}
    </View>
  );
}

/** 왕상휴수사 범례. 한 장에 **한 번만** 나온다 — 사람마다 되풀이하면 같은 설명이 두 번 찍힌다. */
function VitalityLegend({ dictionary }: { dictionary: Dictionary }) {
  const entries = Object.values(dictionary.reportDetail.vitalities);
  return (
    <MixedText
      style={styles.tableNote}
      text={entries.map((entry) => `${entry.name} ${entry.body}`).join("   ")}
    />
  );
}

/**
 * 표 머리행에 넣을 이름. **좁은 칸에는 잘라서 넣는다.**
 *
 * 이름은 24자까지 받는데(`match-input.ts`), 그 길이가 그대로 들어가면 옆 칸을 덮는다. 줄바꿈에
 * 기대를 걸 수도 없다 — `registerHyphenationCallback`이 단어를 쪼개지 않게 해 두어서, 공백 없는
 * 한글 이름은 한 단어로 취급되어 칸을 넘어간다(2026-08-01 24자 케이스에서 23로케일 전부 겹쳤다).
 *
 * 이름 전체는 페이지 머리글에 그대로 나오므로 여기서 줄여도 정보가 사라지지 않는다.
 */
function columnName(name: string) {
  const characters = [...name];
  return characters.length <= 10 ? name : `${characters.slice(0, 10).join("")}…`;
}

/** 네 기둥의 지지 관계. 매칭률에 들어간 것은 일지 하나뿐이라는 사실을 함께 적는다. */
function PillarBranchTable({
  outcome,
  names,
  dictionary,
}: {
  outcome: MatchOutcome;
  names: [string, string];
  dictionary: Dictionary;
}) {
  return (
    <View>
      <View style={styles.tableHead}>
        <MixedText style={[styles.th, { flex: 1.2 }]} text={dictionary.reportDetail.pillarColumn} />
        <MixedText style={[styles.th, { flex: 1 }]} text={columnName(names[0])} />
        <MixedText style={[styles.th, { flex: 1 }]} text={columnName(names[1])} />
        <MixedText
          style={[styles.th, { flex: 1.4 }]}
          text={dictionary.reportDetail.relationColumn}
        />
        <MixedText
          style={[styles.th, { flex: 0.7, textAlign: "right" }]}
          text={dictionary.reportDetail.relationScoreColumn}
        />
      </View>
      {outcome.detail.pillarBranches.map((row) => (
        // 위 표와 같은 이유로 여유를 둔다 — 마지막 행이 끝에 붙으면 여백만 다음 장으로 넘어간다.
        <View key={row.pillar} style={styles.tableRow} minPresenceAhead={40}>
          <MixedText
            style={[styles.tdMuted, { flex: 1.2 }]}
            text={pillarLabel(dictionary, row.pillar)}
          />
          <MixedText style={[styles.td, { flex: 1 }]} text={row.a} />
          <MixedText style={[styles.td, { flex: 1 }]} text={row.b} />
          <MixedText
            style={[styles.td, { flex: 1.4 }]}
            text={dictionary.reportDetail.branchRelations[row.relation]}
          />
          <Text style={[styles.tdMuted, { flex: 0.7, textAlign: "right" }]}>{row.score}</Text>
        </View>
      ))}
      <MixedText style={styles.tableNote} text={dictionary.reportDetail.notScoredNote} />
    </View>
  );
}

/** 상대 네 기둥 천간의 십신. 방향이 있으므로 한쪽씩 표를 만든다. */
function StemGodTable({
  from,
  rows,
  dictionary,
}: {
  from: string;
  rows: MatchOutcome["detail"]["stemGods"]["aSeesB"];
  dictionary: Dictionary;
}) {
  // **카드 전체에 `wrap={false}`를 걸지 않는다.** 십신 풀이가 긴 언어에서는 표 하나가 한 장을
  // 넘어서, 통째로 묶으면 다음 장으로 밀리거나 잘린다(영어판에서 실제로 경고가 났다).
  // 행 단위로 묶으면 표가 장을 걸쳐도 한 행이 반으로 잘리지 않는다.
  return (
    <View style={styles.card}>
      <MixedText
        style={styles.cardTitle}
        text={fillTemplate(dictionary.reportDetail.seesLabel, { from })}
      />
      <View style={styles.tableHead}>
        <MixedText style={[styles.th, { flex: 1.2 }]} text={dictionary.reportDetail.pillarColumn} />
        <MixedText style={[styles.th, { flex: 0.8 }]} text={dictionary.reading.dayMasterLabel} />
        <MixedText style={[styles.th, { flex: 3 }]} text={dictionary.reportDetail.tenGodColumn} />
      </View>
      {/* `minPresenceAhead`가 없으면 마지막 행이 지면 끝에 딱 붙고, **카드의 아래 여백과
          테두리만 다음 장으로 넘어가** 글자 없는 지면이 한 장 생긴다(2026-08-01 실측).
          뒤에 이만큼 자리가 없으면 행째로 다음 장에서 시작한다. */}
      {rows.map((row) => (
        <View key={row.pillar} style={styles.tableRow} wrap={false} minPresenceAhead={46}>
          <MixedText
            style={[styles.tdMuted, { flex: 1.2 }]}
            text={pillarLabel(dictionary, row.pillar)}
          />
          <MixedText style={[styles.td, { flex: 0.8 }]} text={row.stem} />
          <View style={{ flex: 3 }}>
            <MixedText style={styles.td} text={dictionary.tenGods[row.god]?.name ?? row.god} />
            <MixedText
              style={styles.tdMuted}
              text={dictionary.tenGods[row.god]?.body ?? ""}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

/** 부록 — 이 사주를 어떤 값으로 뽑았나. 사람마다 다른 값이라 리포트에 실을 값어치가 있다. */
function CalculationCard({
  name,
  reading,
  dictionary,
}: {
  name: string;
  reading: PersonReading;
  dictionary: Dictionary;
}) {
  const { timeCorrection, convertedDate } = reading;
  const date = (value: { year: number; month: number; day: number }) =>
    `${value.year}-${String(value.month).padStart(2, "0")}-${String(value.day).padStart(2, "0")}`;
  const time = timeCorrection.correctedTime
    ? `${String(timeCorrection.correctedTime.hour).padStart(2, "0")}:${String(timeCorrection.correctedTime.minute).padStart(2, "0")}`
    : null;

  return (
    <View style={styles.card} wrap={false}>
      <MixedText style={styles.cardTitle} text={name} />

      <MixedText
        style={[styles.cardLabel, { marginTop: 6 }]}
        text={dictionary.reportDetail.timeCorrectionLabel}
      />
      <MixedText
        style={styles.body}
        text={
          timeCorrection.applied && time
            ? fillTemplate(dictionary.reportDetail.timeCorrectionApplied, { time })
            : dictionary.reportDetail.timeCorrectionNone
        }
      />
      {timeCorrection.correctedDate ? (
        <MixedText
          style={styles.note}
          text={fillTemplate(dictionary.reportDetail.timeCorrectionDateShift, {
            date: date(timeCorrection.correctedDate),
          })}
        />
      ) : null}

      <MixedText
        style={[styles.cardLabel, { marginTop: 10 }]}
        text={dictionary.reportDetail.calendarLabel}
      />
      <MixedText
        style={styles.body}
        text={`${dictionary.reportDetail.solarLabel} ${date(convertedDate.solar)}`}
      />
      {convertedDate.lunar ? (
        <MixedText
          style={styles.body}
          text={`${dictionary.reportDetail.lunarLabel} ${date(convertedDate.lunar)}`}
        />
      ) : (
        <MixedText style={styles.note} text={dictionary.reportDetail.lunarUnavailable} />
      )}
    </View>
  );
}

function CompatibilityReport(data: CompatibilityReportData) {
  // `locale`은 간지 독음을 한글로 낼지 로마자로 낼지 가른다(`pillarReading`).
  const { outcome, dictionary, nameA, nameB, generatedAt, locale } = data;
  const band = scoreBand(outcome.totalScore);

  return (
    <Document
      title={`${dictionary.result.title} — ${nameA} · ${nameB}`}
      author={dictionary.brand}
      language={data.locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <View style={styles.brandLeft}>
            {/* 로고를 못 읽었으면 글자만 나간다. 표식이 없다고 문서를 못 주면 안 된다. */}
            {logoSrc ? <Image src={logoSrc} style={styles.brandLogo} /> : null}
            <MixedText style={styles.brand} text={dictionary.brand} />
          </View>
          <MixedText style={styles.brandMeta} text={dictionary.tagline} />
        </View>

        <View style={styles.scoreBlock}>
          <MixedText style={styles.names} text={`${nameA} · ${nameB}`} />
          <MixedText style={styles.scoreLabel} text={dictionary.result.totalLabel} />
          <Text style={styles.score}>{outcome.totalScore}%</Text>
          <MixedText style={styles.band} text={dictionary.bands[band]} />
        </View>

        {outcome.precision === "PARTIAL_NO_TIME" ? (
          <MixedText
            style={[styles.note, { marginTop: 12 }]}
            text={dictionary.result.partialTime}
          />
        ) : null}

        <Section title={dictionary.reading.strengthTitle}>
          <View style={styles.card}>
            <MixedText
              style={styles.cardLabel}
              text={dictionary.factors[outcome.highlights.strength.factor]}
            />
            <MixedText
              style={styles.body}
              text={plain(noteText(dictionary, outcome.highlights.strength))}
            />
          </View>
        </Section>

        <Section title={dictionary.reading.cautionTitle}>
          <View style={styles.card}>
            <MixedText
              style={styles.cardLabel}
              text={dictionary.factors[outcome.highlights.caution.factor]}
            />
            <MixedText
              style={styles.body}
              text={plain(noteText(dictionary, outcome.highlights.caution))}
            />
          </View>
        </Section>

        {/* 미저장 안내는 이 서비스의 성격 자체라 리포트에도 싣는다. 첫 장에 두는 것은 여백이
            여기에 남기 때문이기도 하다 — 뒷장에 붙이면 한 장이 더 생기고 그 장이 거의 빈다.
            반면 랜딩의 "이렇게 계산합니다"는 뺐다. 항목별 점수가 비중까지 보여 주므로
            같은 말을 두 번 하는 셈이고, 그것 때문에 장이 늘어날 이유가 없다. */}
        <Section title={dictionary.landing.privacyTitle}>
          <View style={styles.card}>
            <MixedText style={styles.body} text={dictionary.landing.privacyBody} />
          </View>
        </Section>

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>

      {/* 둘째 장은 "어떤 사이인가". 십신 해설이 이 리포트의 본론이라 요약 바로 다음에 두고,
          그 근거인 항목별 점수와 계산 방식을 같은 장에 붙였다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.relation.title} />
          <MixedText style={styles.brandMeta} text={`${nameA} · ${nameB}`} />
        </View>

        <MixedText
          style={[styles.note, { marginTop: 10, marginBottom: 8 }]}
          text={dictionary.relation.hint}
        />

        <RelationSection
          relation={outcome.relation}
          names={[nameA, nameB]}
          dictionary={dictionary}
        />

        <Section title={dictionary.result.breakdown}>
          {outcome.engines.map((engine) => (
            <View key={engine.key} style={styles.card} wrap={false}>
              <MixedText
                style={styles.cardTitle}
                text={`${dictionary.engines[engine.key].name} — ${engine.score} / 100`}
              />
              <MixedText
                style={styles.note}
                text={dictionary.engines[engine.key].description}
              />
              <FactorTable factors={engine.factors} dictionary={dictionary} />
            </View>
          ))}
        </Section>

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>

      {/* 셋째 장은 근거가 되는 사주 원국. 화면에는 없는 오행 세력 수치까지 싣는다.
          계산 방식·미저장 안내를 같은 장에 두어 점수표만 덩그러니 놓이지 않게 했다 —
          둘 다 이미 사전에 있는 문구라 번역이 늘지 않는다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.reading.chartTitle} />
          <MixedText style={styles.brandMeta} text={`${nameA} · ${nameB}`} />
        </View>

        <MixedText
          style={[styles.note, { marginTop: 10, marginBottom: 8 }]}
          text={dictionary.reading.chartHint}
        />

        <PersonSection
          reading={outcome.people[0]}
          fallbackName={nameA}
          dictionary={dictionary}
          locale={locale}
        />
        <PersonSection
          reading={outcome.people[1]}
          fallbackName={nameB}
          dictionary={dictionary}
          locale={locale}
        />

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>

      {/* 넷째 장 — 기운이 오가는 방향. 앞 장의 항목표는 오행 보완을 한 줄로만 보여 주는데,
          그 한 줄이 두 방향의 평균이라 **누가 누구를 채워 주는지가 사라진다.** 비대칭이
          이 서비스 설계의 핵심이므로 갈라서 보인다. 일간 짝은 이름과 뜻이 사전에 이미
          있으므로(notes["dayMaster.*"]) 그대로 가져다 쓴다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.reportDetail.supplyTitle} />
          <MixedText style={styles.brandMeta} text={`${nameA} · ${nameB}`} />
        </View>

        <MixedText
          style={[styles.note, { marginTop: 10 }]}
          text={dictionary.reportDetail.supplyHint}
        />

        <View style={styles.splitRow}>
          <SupplyCell
            name={nameA}
            score={outcome.detail.supply.toA}
            needs={outcome.people[0].favorableElements}
            dictionary={dictionary}
          />
          <SupplyCell
            name={nameB}
            score={outcome.detail.supply.toB}
            needs={outcome.people[1].favorableElements}
            dictionary={dictionary}
          />
        </View>

        <Section title={dictionary.reportDetail.bondTitle}>
          <View style={styles.card}>
            <MixedText
              style={styles.body}
              text={plain(
                dictionary.notes[`dayMaster.${outcome.detail.bond}`] ??
                  outcome.detail.bond,
              )}
            />
          </View>
        </Section>

        {/* 네 기둥 지지 관계도 "두 사람 사이"의 이야기라 같은 장에 둔다. 따로 떼면 이 장의
            아래 절반이 비고(실측), 유료 문서에서 빈 지면은 그 자체로 값이 깎인다. */}
        <Section title={dictionary.reportDetail.pillarsTitle}>
          <MixedText
            style={[styles.note, { marginBottom: 8 }]}
            text={dictionary.reportDetail.pillarsHint}
          />
          <View style={styles.card}>
            <PillarBranchTable
              outcome={outcome}
              names={[nameA, nameB]}
              dictionary={dictionary}
            />
          </View>
        </Section>

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>

      {/* 다섯째 장 — 각자의 사주를 더 들여다본다. 셋째 장이 원국과 세력 막대를 보여 준다면
          여기는 그 세력이 **계절 안에서 어떤 자리에 있는가**를 본다(왕상휴수사). 신강·신약을
          가른 근거 숫자(아군 비율)도 함께 적어, 판정이 어디쯤에서 갈렸는지 보이게 한다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.reportDetail.depthTitle} />
          <MixedText style={styles.brandMeta} text={`${nameA} · ${nameB}`} />
        </View>

        <MixedText
          style={[styles.note, { marginTop: 10, marginBottom: 8 }]}
          text={dictionary.reportDetail.vitalityHint}
        />

        <DepthCard
          name={outcome.people[0].label || nameA}
          reading={outcome.people[0]}
          dictionary={dictionary}
        />
        <DepthCard
          name={outcome.people[1].label || nameB}
          reading={outcome.people[1]}
          dictionary={dictionary}
        />

        <VitalityLegend dictionary={dictionary} />
        <MixedText
          style={[styles.tableNote, { marginTop: 6 }]}
          text={dictionary.reportDetail.allyRatioHint}
        />

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>

      {/* 여섯째 장 — 상대의 어느 자리가 나에게 무엇인가. 매칭률은 일간끼리만 보는데,
          나머지 세 기둥도 같은 규칙(`tenGod`)으로 정해진다. **점수에는 넣지 않았다** —
          넣으면 총점이 달라져 이미 나간 결과 링크와 어긋난다.

          **`Section`으로 묶지 않는다.** 그쪽은 제목과 내용을 `wrap={false}`로 붙이는데,
          여기 내용은 표 둘이라 한 장을 넘는다 — 묶으면 통째로 밀리거나 잘린다(영어판에서
          실제로 경고가 났다). 표는 행 단위로 쪼개 두어 장을 걸쳐도 한 행이 잘리지 않는다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.reportDetail.stemGodsTitle} />
          <MixedText style={styles.brandMeta} text={`${nameA} · ${nameB}`} />
        </View>

        <MixedText
          style={[styles.note, { marginTop: 10, marginBottom: 8 }]}
          text={dictionary.reportDetail.stemGodsHint}
        />

        <StemGodTable
          from={nameA}
          rows={outcome.detail.stemGods.aSeesB}
          dictionary={dictionary}
        />
        <StemGodTable
          from={nameB}
          rows={outcome.detail.stemGods.bSeesA}
          dictionary={dictionary}
        />

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>

      {/* 부록 — 이 사주를 어떤 값으로 뽑았나. 안내 문서가 진태양시 개념을 설명하지만
          "당신의 경우 몇 분이 옮겨졌는지"는 지금까지 어디에도 없었다. 사람마다 다른 값이라
          규칙으로 계산한 문서라는 인상을 남기는 자리이기도 하다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.reportDetail.appendixTitle} />
          <MixedText style={styles.brandMeta} text={`${nameA} · ${nameB}`} />
        </View>

        <View style={{ marginTop: 12 }}>
          <CalculationCard
            name={outcome.people[0].label || nameA}
            reading={outcome.people[0]}
            dictionary={dictionary}
          />
          <CalculationCard
            name={outcome.people[1].label || nameB}
            reading={outcome.people[1]}
            dictionary={dictionary}
          />
        </View>

        {/* 미저장 안내를 여기서 한 번 더 하지 않는다 — 첫 장에 이미 있다. */}
        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          engineVersion={outcome.engineVersion}
        />
      </Page>
    </Document>
  );
}

/** 궁합 리포트 PDF를 버퍼로 만든다. 파일로 남기지 않는다. */
export async function renderCompatibilityReport(data: CompatibilityReportData) {
  await warmUpLayoutEngine();
  return renderToBuffer(<CompatibilityReport {...data} />);
}
