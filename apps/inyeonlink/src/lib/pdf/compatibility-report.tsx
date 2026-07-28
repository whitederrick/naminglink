import React from "react";
import {
  Document,
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
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { MixedText, SCRIPT_FAMILY } from "@/lib/pdf/fonts";

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

const styles = StyleSheet.create({
  page: {
    backgroundColor: PALETTE.paper,
    color: PALETTE.ink,
    paddingHorizontal: 48,
    paddingTop: 44,
    paddingBottom: 56,
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
}: {
  reading: PersonReading;
  fallbackName: string;
  dictionary: Dictionary;
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
      <PillarGrid reading={reading} dictionary={dictionary} />
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

function CompatibilityReport(data: CompatibilityReportData) {
  const { outcome, dictionary, nameA, nameB, generatedAt } = data;
  const band = scoreBand(outcome.totalScore);

  return (
    <Document
      title={`${dictionary.result.title} — ${nameA} · ${nameB}`}
      author={dictionary.brand}
      language={data.locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <MixedText style={styles.brand} text={dictionary.brand} />
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
        />
        <PersonSection
          reading={outcome.people[1]}
          fallbackName={nameB}
          dictionary={dictionary}
        />

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
/**
 * @react-pdf 4.5.1 회피책 — **한 프로세스에서 처음 렌더한 문서가 이후 모든 문서의 줄바꿈을
 * 정한다.**
 *
 * 첫 렌더가 한글이 대부분인 문서면 그다음부터 영어 문단이 단어 한가운데서 끊긴다("characters"가
 * "c / haracters"). 하이픈 콜백(`fonts.tsx`)을 등록해도, 렌더 직전에 다시 등록해도 소용이 없다.
 * 첫 렌더가 라틴 문서였으면 그 뒤로 한글 문서를 아무리 렌더해도 영어는 멀쩡하다.
 *
 * 이 서비스에서는 그냥 두면 실제 사고가 난다. `/api/report/pdf`는 국내·해외 주문을 같은 함수가
 * 처리하므로, 한국어 주문을 먼저 받은 컨테이너는 살아 있는 동안 **US$1.99를 받고 깨진 영문
 * 문서를 내보낸다.** 어느 주문이 먼저 오느냐에 달린 문제라 재현이 들쭉날쭉하다.
 *
 * 그래서 첫 실제 렌더 앞에 라틴 문서를 한 번 흘려보내 상태를 라틴 쪽으로 고정한다. 프로세스당
 * 한 번이고 빈 A4 한 장이라 비용이 거의 없다. 라이브러리가 고쳐지면 지우면 된다.
 */
let layoutWarmUp: Promise<unknown> | null = null;

function warmUpLayoutEngine() {
  if (!layoutWarmUp) {
    layoutWarmUp = renderToBuffer(
      <Document>
        <Page size="A4" style={{ fontFamily: SCRIPT_FAMILY.base, fontSize: 10 }}>
          <Text>
            The quick brown fox jumps over the lazy dog while these characters
            settle the layout engine into its Latin line breaking behaviour.
          </Text>
        </Page>
      </Document>,
    ).catch(() => null); // 예열이 실패해도 본 렌더를 막지는 않는다.
  }
  return layoutWarmUp;
}

export async function renderCompatibilityReport(data: CompatibilityReportData) {
  await warmUpLayoutEngine();
  return renderToBuffer(<CompatibilityReport {...data} />);
}
