import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";

import type { PersonReading } from "@/lib/engines";
import type { TodayFortune } from "@/lib/engines/today-fortune";
import type { Dictionary, Locale } from "@/lib/i18n";
import { MixedText, SCRIPT_FAMILY } from "@/lib/pdf/fonts";
import { warmUpLayoutEngine } from "@/lib/pdf/warm-up";
import type { ReportKind } from "@/lib/report-product";
import type { SajuInterpretation } from "@/lib/saju-interpretation";

// 사주 리포트 PDF. 티어가 둘이라 **한 렌더러가 분량을 가른다.**
//
//   총운(chongun)     원국 · 오행 세력 · 강약과 필요한 기운 · 오늘의 운세
//   프리미엄(premium)  위에 더해 근거 숫자(아군 비율·왕상휴수사)와 진태양시 보정 내역
//
// **화면보다 더 주는 것이 있어야 판다.** 무료 화면은 `publicReading`이 걸러 낸 몫만 보여 주고,
// 걸러진 값(`PAID_ONLY_READING_FIELDS`)이 여기 담긴다. 두 곳이 같은 것을 보여 주면 살 이유가
// 없다 — 인연링크에서 실제로 그랬던 자리라 같은 규칙을 그대로 가져왔다.
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

const styles = StyleSheet.create({
  page: {
    backgroundColor: PALETTE.paper,
    color: PALETTE.ink,
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 44,
    fontSize: 10,
    lineHeight: 1.6,
  },
  eyebrow: { fontSize: 9, color: PALETTE.plum, marginBottom: 6 },
  title: { fontSize: 20, marginBottom: 10 },
  sectionTitle: { fontSize: 12, color: PALETTE.plum, marginTop: 22, marginBottom: 8 },
  card: {
    borderWidth: 1,
    borderColor: PALETTE.line,
    borderRadius: 8,
    backgroundColor: PALETTE.surface,
    padding: 12,
  },
  row: { flexDirection: "row", gap: 8 },
  cell: {
    flexGrow: 1,
    flexBasis: 0,
    borderWidth: 1,
    borderColor: PALETTE.line,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: "center",
  },
  pillar: { fontSize: 18 },
  label: { fontSize: 8, color: PALETTE.muted, marginTop: 3 },
  muted: { color: PALETTE.muted },
  footnote: { fontSize: 8, color: PALETTE.muted, marginTop: 18 },
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
};

function Pillars({ reading }: { reading: PersonReading }) {
  const pillars = [
    reading.pillars.year,
    reading.pillars.month,
    reading.pillars.day,
    reading.pillars.hour,
  ];
  return (
    <View style={styles.row}>
      {pillars.map((pillar, index) => (
        <View key={index} style={styles.cell}>
          {/* 간지는 한자라 `MixedText`로 낸다 — 라틴·한글 서체에는 글리프가 없다. */}
          <MixedText style={styles.pillar} text={pillar?.hanja ?? "—"} />
          <MixedText style={styles.label} text={pillar?.hangul ?? ""} />
        </View>
      ))}
    </View>
  );
}

function Elements({ reading }: { reading: PersonReading }) {
  const keys = Object.keys(reading.elements) as Array<keyof PersonReading["elements"]>;
  return (
    <View style={styles.row}>
      {keys.map((element) => (
        <View key={element} style={styles.cell}>
          <MixedText text={reading.elements[element].toFixed(1)} />
          <MixedText style={styles.label} text={String(element)} />
        </View>
      ))}
    </View>
  );
}

function SajuReport({ kind, reading, today, interpretation, dictionary }: SajuReportData) {
  const r = dictionary.reading;
  const isPremium = kind === "premium";

  return (
    <Document>
      <Page size="A4" style={{ ...styles.page, fontFamily: SCRIPT_FAMILY.base }}>
        <MixedText style={styles.eyebrow} text={dictionary.report.title} />
        <MixedText style={styles.title} text={r.chartTitle} />

        <Pillars reading={reading} />
        <MixedText style={styles.footnote} text={r.chartHint} />

        <MixedText style={styles.sectionTitle} text={r.elementsTitle} />
        <Elements reading={reading} />

        <MixedText style={styles.sectionTitle} text={r.bodyStrengthTitle} />
        <View style={styles.card}>
          <MixedText
            text={`${reading.bodyStrength} · ${r.favorableLabel} ${reading.favorableElements.join(", ")}`}
          />
          {/* **근거 숫자는 프리미엄에만.** 무료 화면은 판정만 보여 주고 이 값은 감춘다. */}
          {isPremium ? (
            <MixedText style={styles.label} text={`allyRatio ${(reading.allyRatio * 100).toFixed(1)}%`} />
          ) : null}
        </View>

        <MixedText
          style={styles.sectionTitle}
          text={`${today.date} · ${today.todayPillar.stem}${today.todayPillar.branch}`}
        />
        <View style={styles.card}>
          <MixedText text={`${today.score} · ${today.grade}`} />
          <MixedText style={styles.label} text={Object.entries(today.categories)
              .map(([key, value]) => `${key} ${value}`)
              .join("  ")} />
          <MixedText
            style={styles.label}
            text={`${today.lucky.element} · ${today.lucky.directionEn} · ${today.lucky.timeRange}`}
          />
        </View>

        {/* 프리미엄에만 담기는 값들. 무료 응답에서 걸러 내는 것과 같은 목록이다. */}
        {isPremium ? (
          <>
            <MixedText style={styles.sectionTitle} text="vitality" />
            <View style={styles.card}>
              <MixedText style={styles.label} text={Object.entries(reading.vitality)
                  .map(([element, value]) => `${element} ${value}`)
                  .join("  ")} />
            </View>
          </>
        ) : null}

        {/* 해설. 모델이 준 글이고 숫자는 위 엔진 값이 정본이다. */}
        {interpretation ? (
          <>
            <MixedText style={styles.sectionTitle} text={interpretation.summary} />
            <View style={styles.card}>
              <MixedText text={interpretation.personality} />
              <MixedText style={styles.label} text={interpretation.element_balance} />
            </View>
            <View style={styles.card}>
              <MixedText text={interpretation.today.headline} />
              <MixedText style={styles.label} text={interpretation.today.message} />
              <MixedText style={styles.label} text={interpretation.today.advice} />
            </View>
            {interpretation.year_outlook ? (
              <View style={styles.card}>
                <MixedText text={interpretation.year_outlook} />
              </View>
            ) : null}
          </>
        ) : null}

        {/* **면책은 반드시 담는다.** 전통 명리 참고이지 예언이 아니라는 것을 문서에도 남긴다.
            모델이 준 문장이 있으면 그것을, 없으면 사전의 고정 문구를 쓴다 — 어느 쪽이든
            이 줄이 빠지는 경우는 없다. */}
        <MixedText
          style={styles.footnote}
          text={interpretation?.disclaimer ?? dictionary.result.disclaimer}
        />
      </Page>
    </Document>
  );
}

export async function renderSajuReport(data: SajuReportData) {
  // 첫 렌더에서 레이아웃 엔진을 깨워 둔다. 안 그러면 첫 결제 건만 눈에 띄게 느리다.
  await warmUpLayoutEngine();
  return renderToBuffer(<SajuReport {...data} />);
}
