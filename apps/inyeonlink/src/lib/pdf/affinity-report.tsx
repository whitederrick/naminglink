import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";

import type {
  AffinityOutcome,
  BranchCandidate,
  StemCandidate,
} from "@/lib/engines";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { MixedText, SCRIPT_FAMILY } from "@/lib/pdf/fonts";
import { warmUpLayoutEngine } from "@/lib/pdf/warm-up";

// 인연의 결 리포트 PDF. 네 장이다.
//
//   1장  표지 + 당신의 자리(일간·신강신약·필요한 기운)
//   2장  잘 맞는 결 셋 — 성향·행동 단서·항목 점수
//   3장  겪어 봐야 하는 결 + 천간 열 종 전체 순위표
//   4장  띠 열둘 전체 순위표(출생 연도와 나이 차)
//
// 처음에는 셋으로 잡았는데 넷으로 늘렸다. 유형 카드 넷을 한 장에 밀어 넣으니 "겪어 봐야 하는
// 결" 제목만 앞 장 끝에 남고 카드가 다음 장으로 넘어갔다(PNG로 렌더해 보고 알았다).
//
// **화면보다 더 주는 것이 있어야 판다.** 화면은 상위 셋만 보여 주지만 PDF는 열 유형과 열두 띠를
// 전부 싣는다. 궁합 리포트가 화면에 없는 오행 세력 수치를 담는 것과 같은 규칙이다.
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
    paddingHorizontal: 48,
    paddingTop: 44,
    paddingBottom: 72,
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

  hero: {
    marginTop: 34,
    alignItems: "center",
    borderWidth: 1,
    borderColor: PALETTE.line,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 26,
    paddingHorizontal: 22,
  },
  heroLabel: { fontSize: 9, color: PALETTE.muted },
  // 큰 글자에는 lineHeight를 반드시 명시한다. 생략하면 react-pdf가 잡는 줄 상자가 글리프보다
  // 작아 다음 요소가 글자 위로 겹쳐 그려진다.
  heroTitle: { fontSize: 26, lineHeight: 1.35, color: PALETTE.plum, marginTop: 6 },
  heroBody: { fontSize: 9.5, color: PALETTE.muted, marginTop: 10, textAlign: "center" },

  sectionTitle: { fontSize: 12, color: PALETTE.plum, marginTop: 24, marginBottom: 8 },
  sectionHint: { fontSize: 8.5, color: PALETTE.muted, marginBottom: 8 },

  card: {
    borderWidth: 1,
    borderColor: PALETTE.line,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  cardHead: { flexDirection: "row", alignItems: "baseline" },
  rank: { fontSize: 9, color: PALETTE.plum, marginRight: 6 },
  cardTitle: { fontSize: 12 },
  cardMeta: { fontSize: 8, color: PALETTE.muted, marginLeft: 6 },
  body: { fontSize: 9.5, color: PALETTE.ink, marginTop: 6 },
  sign: { fontSize: 8.5, color: PALETTE.muted, marginTop: 3 },
  note: { fontSize: 8.5, color: PALETTE.muted },

  scoreRow: {
    flexDirection: "row",
    marginTop: 9,
    borderTopWidth: 1,
    borderTopColor: PALETTE.line,
    paddingTop: 7,
  },
  scoreCell: { flexDirection: "row", alignItems: "baseline", marginRight: 18 },
  scoreLabel: { fontSize: 8, color: PALETTE.muted, marginRight: 4 },
  scoreValue: { fontSize: 11, color: PALETTE.ink },

  // 전체 순위표
  tableHead: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.line,
    paddingBottom: 4,
    marginTop: 4,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.surface,
    paddingVertical: 4,
  },
  th: { fontSize: 7.5, color: PALETTE.muted },
  td: { fontSize: 9 },
  tdMuted: { fontSize: 8.5, color: PALETTE.muted },

  needBox: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: PALETTE.line,
    backgroundColor: PALETTE.surface,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },

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

export type AffinityReportData = {
  outcome: AffinityOutcome;
  /** 표시용 이름. 없으면 사전의 "나"로 떨어진다. */
  name: string;
  locale: Locale;
  dictionary: Dictionary;
  /** 생성 시각(ISO). 서버가 넘긴다 — 렌더 함수가 시계를 읽지 않아야 결과가 재현된다. */
  generatedAt: string;
};

/** 사전 문구의 `**강조**` 표기는 PDF에서 의미가 없으므로 별표만 걷어낸다. */
function plain(text: string) {
  return text.replace(/\*\*/g, "");
}

function Footer({
  dictionary,
  generatedAt,
  outcome,
}: {
  dictionary: Dictionary;
  generatedAt: string;
  outcome: AffinityOutcome;
}) {
  return (
    <View style={styles.footer} fixed>
      <MixedText
        style={styles.footerText}
        text={dictionary.affinity.disclaimer}
      />
      <MixedText
        style={[styles.footerText, { marginTop: 2 }]}
        text={`${dictionary.brand} · ${dictionary.result.engineVersion}: ${outcome.version} / ${outcome.engineVersion} · ${generatedAt.slice(0, 10)}`}
      />
    </View>
  );
}

/** 유형 카드 하나. 순위가 없으면(겪어 봐야 하는 결) 번호를 붙이지 않는다. */
function StemCard({
  candidate,
  rank,
  dictionary,
}: {
  candidate: StemCandidate;
  rank: number | null;
  dictionary: Dictionary;
}) {
  const t = dictionary.affinity;
  const stem = dictionary.dayMasters[candidate.stem];
  const god = dictionary.tenGods[candidate.iSeeThem];
  const signs = dictionary.dayMasterSigns[candidate.stem] ?? [];

  return (
    <View style={styles.card} wrap={false}>
      <View style={styles.cardHead}>
        {rank ? <MixedText style={styles.rank} text={`${rank}`} /> : null}
        <MixedText
          style={styles.cardTitle}
          text={fillTemplate(t.typeHeading, {
            name: stem?.name ?? candidate.stem,
          })}
        />
        <MixedText
          style={styles.cardMeta}
          text={dictionary.elements[candidate.element] ?? candidate.element}
        />
      </View>

      <MixedText style={styles.body} text={stem?.trait ?? ""} />

      {signs.map((sign) => (
        <MixedText key={sign} style={styles.sign} text={`· ${sign}`} />
      ))}

      {god ? (
        <MixedText
          style={[styles.note, { marginTop: 6 }]}
          text={`${god.name} — ${god.body}`}
        />
      ) : null}

      <View style={styles.scoreRow}>
        <View style={styles.scoreCell}>
          <MixedText style={styles.scoreLabel} text={t.bondLabel} />
          <MixedText style={styles.scoreValue} text={`${candidate.bondScore}`} />
        </View>
        {candidate.spouse ? (
          <View style={styles.scoreCell}>
            <MixedText style={styles.scoreLabel} text={t.spouseLabel} />
            <MixedText
              style={styles.scoreValue}
              text={`${candidate.spouse.score}`}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}

/** 천간 열 종 전체 순위표. 화면에는 없는 것이라 PDF의 값어치가 여기서 생긴다. */
function StemTable({
  stems,
  dictionary,
}: {
  stems: StemCandidate[];
  dictionary: Dictionary;
}) {
  const t = dictionary.affinity;

  return (
    <View>
      <View style={styles.tableHead}>
        <MixedText style={[styles.th, { width: 26 }]} text="#" />
        <MixedText style={[styles.th, { flex: 1 }]} text={t.tableType} />
        <MixedText style={[styles.th, { width: 62 }]} text={t.bondLabel} />
        <MixedText style={[styles.th, { width: 62 }]} text={t.spouseLabel} />
      </View>
      {stems.map((candidate, index) => {
        const stem = dictionary.dayMasters[candidate.stem];
        return (
          <View key={candidate.stem} style={styles.tableRow} wrap={false}>
            <MixedText style={[styles.tdMuted, { width: 26 }]} text={`${index + 1}`} />
            <MixedText
              style={[styles.td, { flex: 1 }]}
              text={stem?.name ?? candidate.stem}
            />
            <MixedText style={[styles.td, { width: 62 }]} text={`${candidate.bondScore}`} />
            <MixedText
              style={[styles.tdMuted, { width: 62 }]}
              text={candidate.spouse ? `${candidate.spouse.score}` : "—"}
            />
          </View>
        );
      })}
    </View>
  );
}

/** 띠 열둘 전체 순위표. 연도와 나이 차까지 실어 바로 써먹을 수 있게 한다. */
function ZodiacTable({
  zodiac,
  myYear,
  dictionary,
}: {
  zodiac: BranchCandidate[];
  myYear: number;
  dictionary: Dictionary;
}) {
  const t = dictionary.affinity;

  return (
    <View>
      <View style={styles.tableHead}>
        <MixedText style={[styles.th, { width: 26 }]} text="#" />
        <MixedText style={[styles.th, { width: 58 }]} text={t.tableSign} />
        <MixedText style={[styles.th, { flex: 1 }]} text={t.tableYears} />
        <MixedText
          style={[styles.th, { width: 40 }]}
          text={dictionary.factors.branchRelation}
        />
      </View>
      {zodiac.map((candidate, index) => (
        <View key={candidate.branch} style={styles.tableRow} wrap={false}>
          <MixedText style={[styles.tdMuted, { width: 26 }]} text={`${index + 1}`} />
          <MixedText
            style={[styles.td, { width: 58 }]}
            text={dictionary.animals[candidate.animal] ?? candidate.animal}
          />
          <MixedText
            style={[styles.tdMuted, { flex: 1 }]}
            text={candidate.years
              .map((year) => `${year} (${ageGap(year - myYear, t)})`)
              .join("   ")}
          />
          <MixedText style={[styles.td, { width: 40 }]} text={`${candidate.score}`} />
        </View>
      ))}
    </View>
  );
}

/** 연도 차를 "3살 아래" 같은 말로. 양수면 나보다 늦게 태어난 것이다. */
function ageGap(gap: number, t: Dictionary["affinity"]) {
  if (gap === 0) return t.sameAge;
  return fillTemplate(gap > 0 ? t.younger : t.older, {
    n: String(Math.abs(gap)),
  });
}

function AffinityReport({
  outcome,
  name,
  dictionary,
  generatedAt,
}: AffinityReportData) {
  const t = dictionary.affinity;
  const best = outcome.stems.slice(0, 3);
  const hardest = outcome.stems[outcome.stems.length - 1];
  const stem = dictionary.dayMasters[outcome.me.dayMaster.character];
  const bodyStrength = dictionary.bodyStrength[outcome.me.bodyStrength];

  return (
    <Document>
      {/* 1장 — 표지 겸 "당신의 자리". 무엇을 근거로 유형을 골랐는지 먼저 밝힌다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={t.resultTitle} />
          <MixedText style={styles.brandMeta} text={name} />
        </View>

        <View style={styles.hero}>
          <MixedText style={styles.heroLabel} text={t.meTitle} />
          <MixedText
            style={styles.heroTitle}
            text={fillTemplate(t.meBody, {
              dayMaster: stem?.name ?? outcome.me.dayMaster.character,
              strength: bodyStrength?.name ?? outcome.me.bodyStrength,
            })}
          />
          <MixedText style={styles.heroBody} text={stem?.trait ?? ""} />
        </View>

        <MixedText style={[styles.body, { marginTop: 18 }]} text={plain(t.intro)} />
        <MixedText style={[styles.note, { marginTop: 8 }]} text={plain(t.meHint)} />
        <MixedText
          style={[styles.body, { marginTop: 10 }]}
          text={bodyStrength?.body ?? ""}
        />

        <View style={styles.needBox}>
          <MixedText style={styles.brandMeta} text={t.needTitle} />
          <MixedText
            style={[styles.body, { marginTop: 4 }]}
            text={fillTemplate(t.needBody, {
              elements: outcome.needElements
                .map((element) => dictionary.elements[element] ?? element)
                .join(" · "),
            })}
          />
          <MixedText style={[styles.note, { marginTop: 4 }]} text={t.needHint} />
        </View>

        {outcome.precision === "PARTIAL_NO_TIME" ? (
          <MixedText style={[styles.note, { marginTop: 10 }]} text={t.partialTime} />
        ) : null}

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          outcome={outcome}
        />
      </Page>

      {/* 2장 — 유형 넷. 화면과 같은 내용이지만 한 장에 모여 비교하기 쉽다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={t.bestTitle} />
          <MixedText style={styles.brandMeta} text={name} />
        </View>

        <MixedText
          style={[styles.sectionHint, { marginTop: 10 }]}
          text={plain(t.bestHint)}
        />

        {best.map((candidate, index) => (
          <StemCard
            key={candidate.stem}
            candidate={candidate}
            rank={index + 1}
            dictionary={dictionary}
          />
        ))}

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          outcome={outcome}
        />
      </Page>

      {/* 3장 — 겪어 봐야 하는 결 + 천간 전체 순위표.
          제목과 카드를 한 덩어리로 묶는다. 따로 두면 제목만 앞 장 끝에 남는다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={t.avoidTitle} />
          <MixedText style={styles.brandMeta} text={name} />
        </View>

        <View wrap={false}>
          <MixedText
            style={[styles.sectionHint, { marginTop: 10 }]}
            text={t.avoidHint}
          />
          <StemCard candidate={hardest} rank={null} dictionary={dictionary} />
        </View>

        <MixedText style={styles.sectionTitle} text={dictionary.result.breakdown} />
        <MixedText style={styles.sectionHint} text={plain(t.scoreCaption)} />
        <StemTable stems={outcome.stems} dictionary={dictionary} />

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          outcome={outcome}
        />
      </Page>

      {/* 4장 — 띠 전체 순위표. 열둘에 연도까지 붙어 한 장을 온전히 쓴다.
          **화면에 없는 것**이라 PDF를 살 이유가 여기서 생긴다. */}
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={t.zodiacTitle} />
          <MixedText style={styles.brandMeta} text={name} />
        </View>

        <MixedText
          style={[styles.sectionHint, { marginTop: 10 }]}
          text={t.zodiacHint}
        />
        <ZodiacTable
          zodiac={outcome.zodiac}
          myYear={outcome.myZodiacYear}
          dictionary={dictionary}
        />
        <MixedText
          style={[styles.note, { marginTop: 10 }]}
          text={plain(t.zodiacYearsCaution)}
        />

        <Footer
          dictionary={dictionary}
          generatedAt={generatedAt}
          outcome={outcome}
        />
      </Page>
    </Document>
  );
}

/** 인연의 결 리포트 PDF를 버퍼로 만든다. 파일로 남기지 않는다. */
export async function renderAffinityReport(data: AffinityReportData) {
  await warmUpLayoutEngine();
  return renderToBuffer(<AffinityReport {...data} />);
}
