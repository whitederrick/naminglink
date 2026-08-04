import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";

import { FIVE_ELEMENTS, STEM_ELEMENT } from "@naminglink/core/saju/elements";
import { tenGod } from "@naminglink/core/saju/ten-gods";

import type { PersonReading } from "@/lib/engines";
import type { TodayFortune } from "@/lib/engines/today-fortune";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { MixedText, SCRIPT_FAMILY } from "@/lib/pdf/fonts";
import { warmUpLayoutEngine } from "@/lib/pdf/warm-up";
import type { ReportKind } from "@/lib/report-product";
import type { SajuInterpretation } from "@/lib/saju-interpretation";

// 사주 리포트 PDF. 티어가 둘이라 **한 렌더러가 분량을 가른다.**
//
//   총운(chongun)     3장 — 표지·요약 / 원국·오행 / 오늘의 운세·삶의 영역
//   프리미엄(premium)  위에 심화 — 십신·왕상휴수사 / 올해와 부록
//
// **화면보다 더 주는 것이 있어야 판다.** 무료 화면은 `publicReading`이 걸러 낸 몫만 보여 주고,
// 걸러진 값(`PAID_ONLY_READING_FIELDS` — allyRatio·vitality·rawElements·earthSeason·
// timeCorrection·convertedDate)이 여기 담긴다. 두 곳이 같은 것을 보여 주면 살 이유가 없다.
//
// **대운·세운은 넣지 않는다.** 상품 설명이 한때 그렇게 적고 있었으나 엔진(`PersonReading`)이
// 운 기둥을 내지 않는다. 없는 것을 목차에 적는 대신 실제로 주는 것(십신·왕상휴수사·근거
// 숫자·올해 총운)으로 적었다. 엔진이 대운을 내게 되면 그때 장을 더한다.
//
// 입력값은 여기서도 저장하지 않는다. 요청 본문으로 받아 이 함수가 버퍼를 만들어 돌려주면
// 끝이고 파일로 남기지 않는다.
//
// 지면 규칙은 인연링크 리포트가 실측으로 배운 것을 그대로 따른다(2026-08-01 전수 검사):
// 꼬리글은 매 장 `fixed`이고 본문은 `paddingBottom`만큼만 비켜 준다. 큰 글자와 한자에는
// `lineHeight`를 반드시 명시한다 — 생략하면 줄 상자가 글리프보다 작아 다음 요소가 겹친다.
// 긴 표는 카드째 `wrap={false}`로 묶지 않고 **행 단위**로 묶어 장을 넘을 수 있게 둔다.

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
  brand: { fontSize: 13, color: PALETTE.plum },
  brandMeta: { fontSize: 8, color: PALETTE.muted },

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
  coverDayMaster: { fontSize: 32, lineHeight: 1.3, color: PALETTE.plum, marginTop: 4 },
  coverTrait: {
    fontSize: 10,
    lineHeight: 1.6,
    color: PALETTE.ink,
    marginTop: 8,
    textAlign: "center",
  },

  sectionTitle: { fontSize: 12, color: PALETTE.plum, marginTop: 22, marginBottom: 8 },
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
  todayScore: { fontSize: 42, lineHeight: 1.25, color: PALETTE.plum },
  todayGrade: { fontSize: 14, lineHeight: 1.4, marginLeft: 10, color: PALETTE.copper },

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
  splitValue: { fontSize: 18, lineHeight: 1.35, color: PALETTE.plum, marginTop: 2 },

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
  kind: ReportKind;
  reading: PersonReading;
  today: TodayFortune;
  /**
   * AI 해설. **없을 수 있다** — 모델이 흔들리거나 키가 없으면 null이 온다. 그때도 문서는
   * 나가야 하므로 이 자리만 비운다(엔진 값은 그대로 담긴다).
   */
  interpretation: SajuInterpretation | null;
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
      <MixedText style={styles.brand} text={dictionary.brand} />
      <MixedText style={styles.brandMeta} text={title} />
    </View>
  );
}

function PillarGrid({
  reading,
  dictionary,
}: {
  reading: PersonReading;
  dictionary: Dictionary;
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
              <MixedText style={styles.pillarHangul} text={cell.pillar.hangul} />
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

/** 오행의 관습적인 색. 결과 화면과 같은 값을 쓴다. */
const ELEMENT_COLOR: Record<string, string> = {
  WOOD: "#4f6f5e",
  FIRE: "#b4535a",
  EARTH: "#b4832f",
  METAL: "#9aa0a6",
  WATER: "#3f4a63",
};

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

/** 오늘 점수의 근거 항목과 가감. 프리미엄에만 싣는다(화면은 이름만 보여 준다). */
function FactorTable({
  today,
  dictionary,
}: {
  today: TodayFortune;
  dictionary: Dictionary;
}) {
  const d = dictionary.reportDetail;
  const names = dictionary.today.factors;
  return (
    <View style={styles.card}>
      <View style={styles.tableHead} wrap={false}>
        <MixedText style={[styles.th, { flex: 5 }]} text={dictionary.today.basisTitle} />
        <MixedText style={[styles.th, { flex: 1, textAlign: "right" }]} text={d.deltaColumn} />
      </View>
      {today.factors.map((factor, index) => (
        <View
          key={`${factor.key}-${index}`}
          style={styles.tableRow}
          wrap={false}
          minPresenceAhead={20}
        >
          <MixedText
            style={[styles.td, { flex: 5 }]}
            text={names[factor.key as keyof typeof names] ?? factor.key}
          />
          <Text style={[styles.td, { flex: 1, textAlign: "right" }]}>
            {factor.delta > 0 ? `+${factor.delta}` : factor.delta}
          </Text>
        </View>
      ))}
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
  kind,
  reading,
  today,
  interpretation,
  dictionary,
  generatedAt,
  engineVersion,
}: SajuReportData) {
  const isPremium = kind === "premium";
  const copy = isPremium ? dictionary.premiumReport : dictionary.report;
  const r = dictionary.reading;
  const t = dictionary.today;
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
      {/* ── 1장 표지·요약 ── */}
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

        {interpretation ? (
          <>
            {/* 표지 아래 첫 문단이라 제목을 붙이지 않는다 — 원국 표는 2장에 있고,
                여기에 "나의 사주 원국"을 달면 표가 있어야 할 자리처럼 읽힌다. */}
            <View style={[styles.card, { marginTop: 22 }]}>
              <MixedText style={styles.body} text={interpretation.summary} />
            </View>

            <View>
              <MixedText style={styles.sectionTitle} text={r.strengthTitle} />
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

              <MixedText style={styles.sectionTitle} text={r.cautionTitle} />
              <View style={styles.card}>
                {interpretation.cautions.map((line, index) => (
                  <MixedText key={index} style={styles.bullet} text={`· ${line}`} />
                ))}
              </View>
            </View>
          </>
        ) : (
          // 해설이 없어도 문서는 나간다. 엔진 값만으로 채우고 원국 안내를 그 자리에 둔다.
          <Section title={r.chartTitle}>
            <View style={styles.card}>
              <MixedText style={styles.body} text={r.chartHint} />
            </View>
          </Section>
        )}

        <Section title={dictionary.landing.privacyTitle}>
          <MixedText style={styles.note} text={dictionary.landing.privacyBody} />
        </Section>

        {footer}
      </Page>

      {/* ── 2장 원국·오행 ── */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={r.chartTitle} />

        <Section title={r.chartTitle}>
          <PillarGrid reading={reading} dictionary={dictionary} />
          <MixedText style={[styles.tableNote, { marginTop: 8 }]} text={r.chartHint} />
        </Section>

        <Section title={r.elementsTitle}>
          <ElementBars reading={reading} dictionary={dictionary} />
        </Section>

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

        {interpretation ? (
          <Section title={r.elementsTitle}>
            <View style={styles.card}>
              <MixedText style={styles.body} text={interpretation.element_balance} />
            </View>
          </Section>
        ) : null}

        {footer}
      </Page>

      {/* ── 3장 오늘의 운세·삶의 영역 ── */}
      <Page size="A4" style={pageStyle}>
        <BrandRow dictionary={dictionary} title={t.title} />

        <Section title={t.title}>
          <View style={styles.card}>
            <MixedText
              style={styles.cardLabel}
              text={`${today.date} · ${t.pillarLabel} ${today.todayPillar.stem}${today.todayPillar.branch}`}
            />
            <View style={styles.scoreRow}>
              <Text style={styles.todayScore}>{today.score}</Text>
              <MixedText style={styles.todayGrade} text={t.grades[today.grade].name} />
            </View>
            <MixedText
              style={[styles.body, { marginTop: 6 }]}
              text={t.grades[today.grade].body}
            />
          </View>
        </Section>

        <View style={styles.splitRow}>
          {(Object.keys(today.categories) as Array<keyof typeof today.categories>).map(
            (key) => (
              <View key={key} style={styles.splitCell}>
                <MixedText style={styles.cardLabel} text={t.categories[key]} />
                <Text style={styles.splitValue}>{today.categories[key]}</Text>
              </View>
            ),
          )}
        </View>

        <Section title={t.luckyTitle}>
          <View style={styles.card}>
            <MixedText
              style={styles.body}
              text={[
                `${t.luckyElement} ${dictionary.elements[today.lucky.element] ?? today.lucky.element}`,
                `${t.luckyColor} ${today.lucky.colorsKo.join(", ")}`,
                `${t.luckyDirection} ${today.lucky.directionKo}`,
                `${t.luckyTime} ${today.lucky.timeRange}`,
                `${t.luckyNumber} ${today.lucky.numbers.join(", ")}`,
              ].join("   ")}
            />
          </View>
        </Section>

        {interpretation ? (
          <>
            <Section title={interpretation.today.headline}>
              <View style={styles.card}>
                <MixedText style={styles.body} text={interpretation.today.message} />
                <MixedText
                  style={[styles.note, { marginTop: 6 }]}
                  text={interpretation.today.advice}
                />
              </View>
            </Section>

            {/* 삶의 영역 넷. 카드마다 제목을 붙이되 통째로 묶지 않는다 — 해설 길이가
                로케일마다 달라 한 장에 다 들어가지 않을 수 있다. */}
            <View>
              {(
                [
                  [t.categories.wealth, interpretation.domains.wealth],
                  [t.categories.love, interpretation.domains.love],
                  [t.categories.career, interpretation.domains.career],
                  [t.categories.health, interpretation.domains.health],
                ] as const
              ).map(([label, text]) => (
                <View key={label} wrap={false} minPresenceAhead={40}>
                  <MixedText style={styles.sectionTitle} text={label} />
                  <View style={styles.card}>
                    <MixedText style={styles.body} text={text} />
                  </View>
                </View>
              ))}
            </View>
          </>
        ) : null}

        {footer}
      </Page>

      {/* ── 프리미엄 심화 ── */}
      {isPremium ? (
        <>
          {/* 4장 십신 + 왕상휴수사.
              십신 표는 행이 많아야 셋(일주는 자신이라 빼고, 시각을 모르면 시주도 빠진다)이라
              한 장을 다 쓰지 못한다. 빈 장을 만드는 대신 심화 표 둘을 한 장에 둔다. */}
          <Page size="A4" style={pageStyle}>
            <BrandRow dictionary={dictionary} title={d.depthTitle} />

            <MixedText style={[styles.sectionTitle, { marginTop: 18 }]} text={d.stemGodsTitle} />
            <StemGodTable reading={reading} dictionary={dictionary} />

            <MixedText style={styles.sectionTitle} text={d.vitalityTitle} />
            <MixedText style={[styles.note, { marginBottom: 8 }]} text={d.vitalityHint} />
            <DepthTable reading={reading} dictionary={dictionary} />
            <VitalityLegend dictionary={dictionary} />

            {footer}
          </Page>

          {/* 6장 올해 총운·근거·부록 */}
          <Page size="A4" style={pageStyle}>
            <BrandRow dictionary={dictionary} title={d.appendixTitle} />

            {interpretation?.year_outlook ? (
              <Section title={t.title}>
                <View style={styles.card}>
                  <MixedText style={styles.body} text={interpretation.year_outlook} />
                </View>
              </Section>
            ) : null}

            <MixedText style={styles.sectionTitle} text={d.factorsTitle} />
            <FactorTable today={today} dictionary={dictionary} />

            <MixedText style={styles.sectionTitle} text={d.appendixTitle} />
            <CalculationCard reading={reading} dictionary={dictionary} />

            {footer}
          </Page>
        </>
      ) : null}
    </Document>
  );
}

export async function renderSajuReport(data: SajuReportData) {
  // 첫 렌더에서 레이아웃 엔진을 깨워 둔다. 안 그러면 첫 결제 건만 눈에 띄게 느리다.
  await warmUpLayoutEngine();
  return renderToBuffer(<SajuReport {...data} />);
}
