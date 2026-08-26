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

import { FIVE_ELEMENTS, STEM_ELEMENT } from "@naminglink/core/saju/elements";
import { tenGod } from "@naminglink/core/saju/ten-gods";

import type { PersonReading } from "@/lib/engines";
import type { NatalOutlook } from "@/lib/engines/natal-outlook";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { MixedText, SCRIPT_FAMILY } from "@/lib/pdf/fonts";
import { ELEMENT_COLOR, pillarReading } from "@/lib/pillar-display";
import { warmUpLayoutEngine } from "@/lib/pdf/warm-up";
import type { SajuInterpretation } from "@/lib/saju-interpretation";

// 사주 리포트 PDF — **한 상품, 한 장수다.**
//
// 예전에는 티어가 둘이었다(총운 5장 / 프리미엄 7장). 둘의 차이가 근거 숫자 두 장뿐이라 위
// 티어를 살 이유가 약했고, 아래 티어의 40%가 **하루짜리 오늘의 운세**였다 — 평생 보관하는
// 문서에 그것이 「삶의 네 영역」이라는 이름으로 들어가 있었다. 상품을 하나로 합치고 내용을
// 평생 것 + 올해 총운으로 다시 짰다(2026-08-05).
//
// **오늘의 운세는 이 문서에 없다.** 무료 화면(`/today/result`)이 맡는다. 여기 「삶의 네 영역」은
// `natal-outlook.ts`가 원국에서 뽑은 값이라 하루가 지나도 달라지지 않는다.
//
// **화면보다 더 주는 것이 있어야 판다.** 무료 화면은 원국·일간·오행까지만 보여 주고
// (`publicReading`), 걸러진 값 — 강약 판정·용신·십신·왕상휴수사·근거 숫자·진태양시 보정 —
// 이 여기 담긴다. 두 곳이 같은 것을 보여 주면 살 이유가 없다.
//
// **대운·세운은 넣지 않는다.** 상품 설명이 한때 그렇게 적고 있었으나 엔진(`PersonReading`)이
// 운 기둥을 내지 않는다. 없는 것을 목차에 적는 대신 실제로 주는 것으로 적었다.
//
// 입력값은 여기서도 저장하지 않는다. 요청 본문으로 받아 이 함수가 버퍼를 만들어 돌려주면
// 끝이고 파일로 남기지 않는다.
//
// 지면 규칙은 인연링크 리포트가 실측으로 배운 것을 그대로 따른다(2026-08-01 전수 검사):
// 꼬리글은 매 장 `fixed`이고 본문은 `paddingBottom`만큼만 비켜 준다. 큰 글자와 한자에는
// `lineHeight`를 반드시 명시한다 — 생략하면 줄 상자가 글리프보다 작아 다음 요소가 겹친다.
// 긴 표는 카드째 `wrap={false}`로 묶지 않고 **행 단위**로 묶어 장을 넘을 수 있게 둔다.

// 화면(`globals.css`)과 같은 값이어야 한다 — 문서와 화면의 색이 갈리면 같은 서비스로 안 읽힌다.
// 로고에서 뽑은 남색·금색이고, 예전에는 인연링크의 자두·구리를 그대로 물려받고 있었다.
const PALETTE = {
  navy: "#16273f",
  gold: "#976d26",
  celadon: "#456b74",
  ink: "#171b22",
  muted: "#6b7280",
  line: "#dde1e8",
  surface: "#eef1f6",
  paper: "#fbfaf8",
} as const;

/**
 * 머리줄에 넣을 로고. **화면·OG와 같은 파일(256px 사본)을 쓴다** — 한 곳만 바꾸면 표식이 갈린다.
 *
 * 파일을 못 읽으면 `null`이고, 그때는 글자만 나간다. 로고가 없다고 결제한 문서를 못 주면 안 된다.
 */
let logoSrc: string | null = null;
try {
  logoSrc = `data:image/png;base64,${readFileSync(
    path.join(process.cwd(), "public/images/sajulink-circle-logo-256.png"),
  ).toString("base64")}`;
} catch {
  logoSrc = null;
}

// pillarReading은 lib/pillar-display.ts에서 가져온다 — 화면과 값을 공유해야 해서
// (2026-08-26 코드 리뷰에서 복붙 중복을 발견).

const styles = StyleSheet.create({
  page: {
    backgroundColor: PALETTE.paper,
    color: PALETTE.ink,
    paddingHorizontal: 48,
    paddingTop: 44,
    // 꼬리글이 두 줄이 되는 언어를 견뎌야 한다. 꼬리글은 절대 위치라 자리를 차지하지 않고,
    // 이 여백만큼만 본문이 비켜 준다(인연링크가 56에서 이탈리아어 겹침을 겪고 78로 올렸다).
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
  brand: { fontSize: 13, color: PALETTE.navy },
  brandMeta: { fontSize: 8, color: PALETTE.muted },
  brandLeft: { flexDirection: "row", alignItems: "center" },
  brandLogo: { width: 18, height: 18, marginRight: 7, borderRadius: 9 },

  coverBlock: {
    marginTop: 34,
    alignItems: "center",
    borderWidth: 1,
    borderColor: PALETTE.line,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 26,
    paddingHorizontal: 20,
  },
  coverLabel: { fontSize: 9, color: PALETTE.muted },
  // 큰 글자에는 lineHeight를 반드시 명시한다.
  coverDayMaster: { fontSize: 32, lineHeight: 1.3, color: PALETTE.navy, marginTop: 4 },
  coverTrait: {
    fontSize: 10,
    lineHeight: 1.6,
    color: PALETTE.ink,
    marginTop: 8,
    textAlign: "center",
  },

  sectionTitle: { fontSize: 12, color: PALETTE.navy, marginTop: 22, marginBottom: 8 },
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
  bullet: { fontSize: 9.5, color: PALETTE.ink, marginBottom: 3 },

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
  elementLegend: { flexDirection: "row", flexWrap: "wrap", marginTop: 5 },
  elementLegendItem: { flexDirection: "row", alignItems: "center", marginRight: 12 },
  elementDot: { width: 5, height: 5, borderRadius: 2.5, marginRight: 3 },
  elementName: { fontSize: 8.5 },
  elementValue: { fontSize: 8, color: PALETTE.muted, marginLeft: 3 },

  scoreRow: { flexDirection: "row", alignItems: "baseline" },
  todayScore: { fontSize: 42, lineHeight: 1.25, color: PALETTE.navy },
  todayGrade: { fontSize: 14, lineHeight: 1.4, marginLeft: 10, color: PALETTE.gold },

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
  splitValue: { fontSize: 18, lineHeight: 1.35, color: PALETTE.navy, marginTop: 2 },

  tableHead: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.navy,
    paddingBottom: 4,
    marginTop: 2,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.line,
    // 5에서 내렸다. 심화 장(표 둘 + 각주 넷)이 필리핀어에서 한 줄 모자라 왕상휴수사 범례를
    // 다음 장으로 넘겼고, 그 장은 **범례 두 줄만 있는 장**이었다 — 프리미엄이 8장으로 나갔다.
    // 여덟 행이 걸려 있어 이 1pt가 16pt를 돌려준다.
    paddingVertical: 4,
  },
  th: { fontSize: 8, color: PALETTE.navy },
  td: { fontSize: 9 },
  tdMuted: { fontSize: 8.5, color: PALETTE.muted },
  tableNote: { fontSize: 7.5, color: PALETTE.muted, marginTop: 5 },

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

export type SajuReportData = {
  reading: PersonReading;
  /**
   * 원국 기준 삶의 네 영역. 부르는 쪽이 `natalOutlook(reading, gender)`로 뽑아 넘긴다.
   *
   * **서술과 같은 값을 써야 한다.** 문단(`interpretation.domains`)과 근거표가 따로 계산하면
   * 성별을 한쪽에만 넘기는 실수가 조용히 생기고, 그러면 표와 문장이 다른 점수를 말한다.
   */
  outlook: NatalOutlook;
  /**
   * 해설. **언제나 있다.**
   *
   * 예전에는 모델이 흔들리면 `null`이 와서 이 자리를 통째로 비웠는데, 그러면 **고시에 적은
   * 장수보다 적게 나갔다.** 지금은 모델이 실패하면
   * `interpretSaju`가 엔진 값으로 쓴 서술(`saju-narrative.ts`)을 대신 넣으므로, 이 타입이
   * 비지 않는 것 자체가 장수가 흔들리지 않는다는 보장이다.
   */
  interpretation: SajuInterpretation;
  locale: Locale;
  dictionary: Dictionary;
  /** 발급 시각(ISO). 꼬리글에 찍는다. */
  generatedAt: string;
  /** 계산 기준. 결과 화면이 보여 주는 값과 같아야 한다. */
  engineVersion: string;
};

/**
 * 제목과 내용을 한 덩어리로 묶는다. `wrap={false}`라 제목만 남고 내용이 다음 장으로 넘어가는
 * 일이 없다. **긴 표에는 쓰지 않는다** — 카드째 묶으면 표가 장을 넘지 못한다.
 */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
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

function BrandRow({ dictionary, title }: { dictionary: Dictionary; title: string }) {
  return (
    <View style={styles.brandRow}>
      <View style={styles.brandLeft}>
        {/* 로고를 못 읽었으면 글자만 나간다. 표식이 없다고 문서를 못 주면 안 된다. */}
        {logoSrc ? <Image src={logoSrc} style={styles.brandLogo} /> : null}
        <MixedText style={styles.brand} text={dictionary.brand} />
      </View>
      <MixedText style={styles.brandMeta} text={title} />
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
              backgroundColor: ELEMENT_COLOR[element] ?? PALETTE.celadon,
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
                { backgroundColor: ELEMENT_COLOR[element] ?? PALETTE.celadon },
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

/**
 * 왕상휴수사와 월령 전후 세력. **화면에 없는 값만 모은 표다.**
 *
 * 카드를 통째로 `wrap={false}`로 묶지 않는다 — 행 단위로 묶어 장을 넘을 수 있게 둔다.
 */
function DepthTable({
  reading,
  dictionary,
}: {
  reading: PersonReading;
  dictionary: Dictionary;
}) {
  const d = dictionary.reportDetail;
  const round = (value: number) => Math.round(value * 10) / 10;

  return (
    <View style={styles.card}>
      <MixedText
        style={styles.cardLabel}
        text={`${dictionary.reading.bodyStrengthTitle} · ${dictionary.bodyStrength[reading.bodyStrength].name} · ${d.allyRatioLabel} ${Math.round(reading.allyRatio * 100)}%`}
      />
      <View style={[styles.tableHead, { marginTop: 8 }]} wrap={false}>
        <MixedText style={[styles.th, { flex: 1.6 }]} text={dictionary.reading.elementsTitle} />
        <MixedText style={[styles.th, { flex: 1, textAlign: "right" }]} text={d.rawLabel} />
        <MixedText style={[styles.th, { flex: 1, textAlign: "right" }]} text={d.strengthLabel} />
        <MixedText style={[styles.th, { flex: 1.2, textAlign: "right" }]} text={d.vitalityTitle} />
      </View>
      {FIVE_ELEMENTS.map((element) => (
        <View key={element} style={styles.tableRow} wrap={false} minPresenceAhead={20}>
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
            text={d.vitalities[reading.vitality[element]].name}
          />
        </View>
      ))}
      {reading.earthSeason ? (
        <MixedText style={styles.tableNote} text={d.earthSeasonNote} />
      ) : null}
      <MixedText style={styles.tableNote} text={d.allyRatioHint} />
    </View>
  );
}

/** 왕상휴수사 범례. 한 장에 한 번만 나온다. */
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
 * 원국 네 기둥의 천간이 일간에게 무엇인가.
 *
 * **일주는 뺀다** — 일간 자신이라 언제나 비견이고, 자리만 차지하고 알려 주는 것이 없다.
 * 시각을 모르면 시주도 빠지므로 행은 둘이 될 수 있다.
 */
function StemGodTable({
  reading,
  dictionary,
}: {
  reading: PersonReading;
  dictionary: Dictionary;
}) {
  const d = dictionary.reportDetail;
  const self = {
    stem: reading.dayMaster.character,
    element: reading.dayMaster.element,
  };
  const rows = (
    [
      ["year", dictionary.reading.pillarYear, reading.pillars.year],
      ["month", dictionary.reading.pillarMonth, reading.pillars.month],
      ["hour", dictionary.reading.pillarHour, reading.pillars.hour],
    ] as const
  )
    .map(([key, label, pillar]) => {
      if (!pillar?.hanja) return null;
      const stem = Array.from(pillar.hanja)[0];
      const element = STEM_ELEMENT[stem];
      if (!element) return null;
      return { key, label, stem, god: tenGod(self, { stem, element }) };
    })
    .filter((row): row is NonNullable<typeof row> => row !== null);

  return (
    <View style={styles.card}>
      <View style={styles.tableHead} wrap={false}>
        <MixedText style={[styles.th, { flex: 1.2 }]} text={d.pillarColumn} />
        <MixedText style={[styles.th, { flex: 1.2 }]} text={d.tenGodColumn} />
        <MixedText style={[styles.th, { flex: 3.6 }]} text={d.meaningColumn} />
      </View>
      {rows.map((row) => (
        <View key={row.key} style={styles.tableRow} wrap={false} minPresenceAhead={28}>
          <MixedText style={[styles.td, { flex: 1.2 }]} text={`${row.label} ${row.stem}`} />
          <MixedText
            style={[styles.td, { flex: 1.2 }]}
            text={dictionary.tenGods[row.god]?.name ?? row.god}
          />
          <MixedText
            style={[styles.tdMuted, { flex: 3.6 }]}
            text={dictionary.tenGods[row.god]?.body ?? ""}
          />
        </View>
      ))}
      <MixedText style={styles.tableNote} text={d.stemGodsHint} />
    </View>
  );
}

/**
 * 원국 기준 네 영역 점수의 근거 항목과 가감.
 *
 * **예전에는 오늘 점수의 근거표였다.** 오늘의 운세가 문서에서 빠지면서(2026-08-05) 이 자리도
 * 원국 쪽으로 옮겼다 — 평생 보관하는 문서에 하루짜리 근거가 남아 있을 이유가 없다.
 *
 * 엔진은 항목 키와 증감만 낸다(`natal-outlook.ts`). 문장은 사전이 갖고, 사전 쪽이 열거로
 * 닫혀 있어 엔진에 항목이 늘면 컴파일에서 걸린다.
 */
function NatalFactorTable({
  outlook,
  dictionary,
}: {
  outlook: NatalOutlook;
  dictionary: Dictionary;
}) {
  const d = dictionary.reportDetail;
  const names = dictionary.fallbackReport.natalFactors;
  const categories = dictionary.today.categories;

  return (
    <View style={styles.card}>
      <View style={styles.tableHead} wrap={false}>
        <MixedText style={[styles.th, { flex: 5 }]} text={d.factorsTitle} />
        <MixedText style={[styles.th, { flex: 1, textAlign: "right" }]} text={d.deltaColumn} />
      </View>
      {(["wealth", "love", "career", "health"] as const).map((category) =>
        outlook.factors[category].map((factor, index) => (
          <View
            key={`${category}-${factor.key}-${index}`}
            style={styles.tableRow}
            wrap={false}
            minPresenceAhead={20}
          >
            <MixedText
              style={[styles.tdMuted, { flex: 1.1 }]}
              text={categories[category]}
            />
            <MixedText style={[styles.td, { flex: 3.9 }]} text={names[factor.key]} />
            <Text style={[styles.td, { flex: 1, textAlign: "right" }]}>
              {factor.delta > 0 ? `+${factor.delta}` : factor.delta}
            </Text>
          </View>
        )),
      )}
      <MixedText style={styles.tableNote} text={d.factorsHint} />
    </View>
  );
}

/** 진태양시 보정과 양·음력. 사람마다 다른 값이라 문서에만 싣는다. */
function CalculationCard({
  reading,
  dictionary,
}: {
  reading: PersonReading;
  dictionary: Dictionary;
}) {
  const d = dictionary.reportDetail;
  const { timeCorrection, convertedDate } = reading;
  const pad = (value: number) => String(value).padStart(2, "0");
  const ymd = (value: { year: number; month: number; day: number }) =>
    `${value.year}-${pad(value.month)}-${pad(value.day)}`;

  const timeLine = !timeCorrection.applied
    ? d.timeCorrectionNone
    : fillTemplate(d.timeCorrectionApplied, {
        time: timeCorrection.correctedTime
          ? `${pad(timeCorrection.correctedTime.hour)}:${pad(timeCorrection.correctedTime.minute)}`
          : "—",
      });

  return (
    <View style={styles.card} wrap={false}>
      <MixedText style={styles.cardLabel} text={d.timeCorrectionLabel} />
      <MixedText style={styles.body} text={timeLine} />
      {timeCorrection.correctedDate ? (
        <MixedText
          style={[styles.note, { marginTop: 4 }]}
          text={fillTemplate(d.timeCorrectionDateShift, {
            date: ymd(timeCorrection.correctedDate),
          })}
        />
      ) : null}

      <MixedText style={[styles.cardLabel, { marginTop: 10 }]} text={d.calendarLabel} />
      <MixedText style={styles.body} text={`${d.solarLabel} ${ymd(convertedDate.solar)}`} />
      {convertedDate.lunar ? (
        <MixedText
          style={styles.body}
          text={`${d.lunarLabel} ${ymd(convertedDate.lunar)}`}
        />
      ) : (
        <MixedText style={styles.note} text={d.lunarUnavailable} />
      )}
    </View>
  );
}

function SajuReport({
  reading,
  outlook,
  interpretation,
  dictionary,
  // 간지 독음이 한글이냐 로마자냐를 가른다(`pillarReading`). 예전에는 받고도 안 썼다.
  locale,
  generatedAt,
  engineVersion,
}: SajuReportData) {
  const copy = dictionary.report;
  const r = dictionary.reading;
  const d = dictionary.reportDetail;
  const dayMaster = dictionary.dayMasters[reading.dayMaster.character];
  const footer = (
    <Footer
      dictionary={dictionary}
      generatedAt={generatedAt}
      engineVersion={engineVersion}
    />
  );
  const pageStyle = { ...styles.page, fontFamily: SCRIPT_FAMILY.base };

  return (
    <Document>
      {/* 1장 표지·요약 */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={copy.title} />

        <View style={styles.coverBlock}>
          <MixedText style={styles.coverLabel} text={r.dayMasterLabel} />
          <MixedText
            style={styles.coverDayMaster}
            text={dayMaster?.name ?? reading.dayMaster.character}
          />
          {dayMaster ? (
            <MixedText style={styles.coverTrait} text={dayMaster.trait} />
          ) : null}
        </View>

        {/* 표지 아래 첫 문단이라 제목을 붙이지 않는다 — 원국 표는 3장에 있고,
            여기에 "나의 사주 원국"을 달면 표가 있어야 할 자리처럼 읽힌다. */}
        <View style={[styles.card, { marginTop: 22 }]}>
          <MixedText style={styles.body} text={interpretation.summary} />
        </View>

        {/* 개인정보 안내는 표지 장에 둔다. 이 장은 표지와 요약뿐이라 가장 긴 해설이 와도
            자리가 남는다 — 반대로 마지막 장에 두면 그 장이 길어질 때 함께 밀린다. */}
        <Section title={dictionary.landing.privacyTitle}>
          <MixedText style={styles.note} text={dictionary.landing.privacyBody} />
        </Section>

        {footer}
      </Page>

      {/* 2장 성향 */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={r.strengthTitle} />

        <Section title={r.strengthTitle}>
          <View style={styles.card}>
            <MixedText style={styles.body} text={interpretation.personality} />
            {interpretation.strengths.map((line, index) => (
              <MixedText
                key={index}
                style={[styles.bullet, { marginTop: index === 0 ? 8 : 0 }]}
                text={`· ${line}`}
              />
            ))}
          </View>
        </Section>

        <Section title={r.cautionTitle}>
          <View style={styles.card}>
            {interpretation.cautions.map((line, index) => (
              <MixedText key={index} style={styles.bullet} text={`· ${line}`} />
            ))}
          </View>
        </Section>

        {footer}
      </Page>

      {/* 3장 원국·오행 */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={r.chartTitle} />

        <Section title={r.chartTitle}>
          <PillarGrid reading={reading} dictionary={dictionary} locale={locale} />
          <MixedText style={[styles.tableNote, { marginTop: 8 }]} text={r.chartHint} />
        </Section>

        {/* 세력 막대와 그 서술은 **한 절 안에 둔다.** 예전에는 서술에 같은 제목을 한 번 더
            달아 「오행의 세력」이 한 장에 두 번 나왔다. */}
        <Section title={r.elementsTitle}>
          <ElementBars reading={reading} dictionary={dictionary} />

          <View style={styles.splitRow}>
            <View style={styles.splitCell}>
              <MixedText style={styles.cardLabel} text={r.strongest} />
              <MixedText
                style={styles.splitValue}
                text={dictionary.elements[reading.strongestElement] ?? reading.strongestElement}
              />
            </View>
            <View style={styles.splitCell}>
              <MixedText style={styles.cardLabel} text={r.scarcest} />
              <MixedText
                style={styles.splitValue}
                text={dictionary.elements[reading.scarcestElement] ?? reading.scarcestElement}
              />
            </View>
          </View>

          <View style={[styles.card, { marginTop: 12 }]}>
            <MixedText style={styles.body} text={interpretation.element_balance} />
          </View>
        </Section>

        {footer}
      </Page>

      {/* 4장 일간의 힘과 지금 필요한 기운.
          **무료 화면에 없는 것이 여기서 시작된다** — 화면은 원국·일간·오행까지만 보여 주고
          강약 판정과 용신은 응답에서부터 빠져 있다(`publicReading`). */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={r.bodyStrengthTitle} />

        <Section title={r.bodyStrengthTitle}>
          <View style={styles.card}>
            <MixedText
              style={styles.cardTitle}
              text={dictionary.bodyStrength[reading.bodyStrength].name}
            />
            <MixedText
              style={styles.body}
              text={dictionary.bodyStrength[reading.bodyStrength].body}
            />
            <MixedText style={[styles.cardLabel, { marginTop: 10 }]} text={r.favorableLabel} />
            <MixedText
              style={styles.body}
              text={reading.favorableElements
                .map((element) => dictionary.elements[element] ?? element)
                .join(" · ")}
            />
          </View>
        </Section>

        {/* 위 카드가 판정과 뜻을 찍고, 이 문단이 그 판정에서 이어지는 처방을 말한다.
            **이 장을 더 채우지 않는다.** 강약과 용신은 이 상품의 핵심이라 한 장을 줄 만하고,
            여기에 왕상휴수사 표까지 얹었더니 라틴 문자 로케일에서 범례 한 줄이 넘쳤다
            (그 장은 범례만 있는 장이 된다). */}
        <Section title={d.yongsinTitle}>
          <View style={styles.card}>
            <MixedText style={styles.body} text={interpretation.yongsin} />
          </View>
        </Section>

        {footer}
      </Page>

      {/* 5장 계절이 밀어 주는 자리와 네 기둥의 십신.
          둘 다 표라 한 장에 앉는다. 십신을 **풀어 쓰는 것**은 다음 장이다. */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={d.depthTitle} />

        <MixedText style={[styles.sectionTitle, { marginTop: 18 }]} text={d.vitalityTitle} />
        <MixedText style={[styles.note, { marginBottom: 8 }]} text={d.vitalityHint} />
        <DepthTable reading={reading} dictionary={dictionary} />
        <VitalityLegend dictionary={dictionary} />

        <MixedText style={styles.sectionTitle} text={d.stemGodsTitle} />
        <StemGodTable reading={reading} dictionary={dictionary} />

        {footer}
      </Page>

      {/* 6장 십신 심화.
          **이 사람 원국에서 두터운 둘과 아예 없는 둘**만 풀어 쓴다(최대 넷). 열 개를 다 풀면
          누구에게나 같은 백과사전이 나간다. 넷이 한 장을 거의 채우므로 표와 같은 장에 두지
          않는다 — 그렇게 두었더니 마지막 문단이 다음 장으로 밀렸다. */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={d.tenGodDepthTitle} />

        <MixedText style={[styles.sectionTitle, { marginTop: 18 }]} text={d.tenGodDepthTitle} />
        {interpretation.ten_gods.map((line, index) => (
          <View key={index} style={styles.card} wrap={false} minPresenceAhead={30}>
            <MixedText style={styles.body} text={line} />
          </View>
        ))}

        {footer}
      </Page>

      {/* 7장 삶의 네 영역 — **원국 기준이다.** 하루짜리 값이 아니다. */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={d.domainsTitle} />

        {/* 카드마다 제목을 붙이되 통째로 묶지 않는다 — 해설 길이가 로케일마다 다르다.
            점수를 숫자로 함께 찍는다: 문단이 같은 값을 말로도 적지만, 넷을 견주려면 숫자가
            나란히 보여야 한다. */}
        <View style={{ marginTop: 14 }}>
          {(
            [
              ["wealth", dictionary.today.categories.wealth, interpretation.domains.wealth],
              ["love", dictionary.today.categories.love, interpretation.domains.love],
              ["career", dictionary.today.categories.career, interpretation.domains.career],
              ["health", dictionary.today.categories.health, interpretation.domains.health],
            ] as const
          ).map(([key, label, text]) => (
            <View key={key} wrap={false} minPresenceAhead={40}>
              <View style={styles.scoreRow}>
                <MixedText style={styles.sectionTitle} text={label} />
                <Text style={[styles.sectionTitle, { marginLeft: 8, color: PALETTE.gold }]}>
                  {outlook.scores[key]}
                </Text>
              </View>
              <View style={styles.card}>
                <MixedText style={styles.body} text={text} />
              </View>
            </View>
          ))}
        </View>

        {footer}
      </Page>

      {/* 8장 근거와 부록.
          네 영역 점수가 **어디에서 나왔는지** 항목과 가감으로 보여 준다. 앞 장의 문단은 가장
          크게 움직인 둘만 말하므로, 전부 보고 싶은 사람을 위한 자리가 따로 있어야 한다. */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={d.appendixTitle} />

        <MixedText style={[styles.sectionTitle, { marginTop: 18 }]} text={d.factorsTitle} />
        <NatalFactorTable outlook={outlook} dictionary={dictionary} />

        <MixedText style={styles.sectionTitle} text={d.appendixTitle} />
        <CalculationCard reading={reading} dictionary={dictionary} />

        {footer}
      </Page>

      {/* 9장 올해 총운.
          상품 이름이 「평생 사주와 **올해의 운세**」다. 앞 여덟 장이 평생 것이고 이 장이 올해다.
          간지를 못 읽는 경우에만 문단이 비는데 그때도 장은 남는다 — 장수는 구조가 정한다. */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={d.yearOutlookTitle} />

        <Section title={d.yearOutlookTitle}>
          <View style={styles.card}>
            <MixedText
              style={styles.body}
              text={interpretation.year_outlook ?? d.yearOutlookUnavailable}
            />
          </View>
        </Section>

        <Section title={d.disclaimerTitle}>
          <MixedText style={styles.note} text={interpretation.disclaimer} />
        </Section>

        {footer}
      </Page>
    </Document>
  );
}

export async function renderSajuReport(data: SajuReportData) {
  // 첫 렌더에서 레이아웃 엔진을 깨워 둔다. 안 그러면 첫 결제 건만 눈에 띄게 느리다.
  await warmUpLayoutEngine();
  return renderToBuffer(<SajuReport {...data} />);
}
