import path from "node:path";
import React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
  type TextProps,
} from "@react-pdf/renderer";

import type { calculatePremiumSaju } from "@/lib/saju/engine";

type PremiumSajuResult = ReturnType<typeof calculatePremiumSaju>;

export type PremiumHanjaReportCandidate = {
  displayName: string;
  hanjaName: string;
  focusLabel: string;
  summary: string;
  characters: Array<{
    hangul: string;
    hanja: string;
    meaning: string;
    elementLabel?: string | null;
    originLabel?: string | null;
    officialReadingConfirmed: boolean;
  }>;
  story: string;
  practicalUse: string;
  selectionGuide?: string;
  meaningCaution?: string;
  sajuConnection?: string | null;
  officialSourceLabel: string;
};

export type PremiumHanjaReportData = {
  reportId: string;
  generatedAt: string;
  expiresAt: string;
  childNameHangul: string;
  saju?: PremiumSajuResult | null;
  primaryCandidate: PremiumHanjaReportCandidate;
  candidates?: PremiumHanjaReportCandidate[];
  sajuInterpretation?: {
    overview: string;
    fiveElements: string;
    namingBalance: string;
    candidateComparison: string;
  } | null;
  rejectedCandidates?: Array<{
    character: string;
    reason: string;
    severity?: string;
  }>;
  parentWishes?: string | null;
  excludedMeanings?: string | null;
};

const colors = {
  ink: "#17231d",
  muted: "#667069",
  teal: "#007f78",
  tealSoft: "#e7f3f0",
  sand: "#f3ecdc",
  sandDark: "#dacaa9",
  paper: "#fbfaf6",
  white: "#ffffff",
  line: "#dedbd2",
  rose: "#b15c51",
};

// 한글 폰트는 반드시 TTF를 쓴다. @react-pdf가 woff를 임베딩할 때 유독 느려(한 렌더에 20초+)
// PDF 생성이 60초 타임아웃 나던 실제 원인이었다. TTF는 같은 폰트를 28ms에 임베딩한다.
// (assets/fonts/NotoSansKR-*.ttf는 @fontsource woff의 압축만 해제한 동일 폰트)
Font.register({
  family: "NotoSansKR",
  fonts: [
    {
      src: path.join(process.cwd(), "assets/fonts/NotoSansKR-400.ttf"),
      fontWeight: 400,
    },
    {
      src: path.join(process.cwd(), "assets/fonts/NotoSansKR-700.ttf"),
      fontWeight: 700,
    },
  ],
});

// 한자용 CJK 폰트는 400·700 굵기가 같은 파일이라 굵기 차이가 없다.
// 두 번 등록하면 5.4MB 폰트를 서버리스 콜드스타트에서 두 번 파싱해 PDF 생성이 60초를 넘길 수 있어,
// 하나만 등록한다(HanjaText도 CJK는 항상 400으로 렌더).
Font.register({
  family: "NotoSansCJKkr",
  fonts: [
    {
      src: path.join(process.cwd(), "assets/fonts/NotoSansCJKkr-Naming.otf"),
      fontWeight: 400,
    },
  ],
});

// @react-pdf 기본 하이프네이션은 단어마다 분할 지점을 계산해 한글·한자 문단에서 렌더가 매우 느려진다.
// 분할을 비활성화(단어를 그대로 반환)하면 레이아웃이 크게 빨라진다. 한글은 원래 단어 중간에서
// 끊지 않으므로 표시 품질에 문제가 없다.
Font.registerHyphenationCallback((word) => [word]);

function HanjaText({
  value,
  style,
  fontWeight = 400,
}: {
  value: string;
  style?: TextProps["style"];
  fontWeight?: 400 | 700;
}) {
  const isCjk = (character: string) => {
    const codePoint = character.codePointAt(0) ?? 0;
    return (
      (codePoint >= 0x3400 && codePoint <= 0x4dbf) ||
      (codePoint >= 0x4e00 && codePoint <= 0x9fff) ||
      (codePoint >= 0xf900 && codePoint <= 0xfaff) ||
      (codePoint >= 0x20000 && codePoint <= 0x2fa1f)
    );
  };
  // 글자마다 Text 노드를 만들면 긴 문단에서 노드가 수천 개로 폭증해 PDF 렌더가 수십 초 걸린다.
  // 연속된 같은 스크립트(한자/그 외) 글자를 하나의 런으로 묶어 노드 수를 스크립트 전환 횟수로 줄인다.
  const runs: { text: string; cjk: boolean }[] = [];
  for (const character of Array.from(value)) {
    const cjk = isCjk(character);
    const last = runs[runs.length - 1];
    if (last && last.cjk === cjk) last.text += character;
    else runs.push({ text: character, cjk });
  }
  return (
    <Text style={style}>
      {runs.map((run, index) => (
        <Text
          key={`run-${index}`}
          style={{
            fontFamily: run.cjk ? "NotoSansCJKkr" : "NotoSansKR",
            // CJK는 400만 등록돼 있으므로 bold 요청이 와도 400으로 렌더한다(같은 파일이라 시각 차이 없음).
            fontWeight: run.cjk ? 400 : fontWeight,
          }}
        >
          {run.text}
        </Text>
      ))}
    </Text>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.paper,
    color: colors.ink,
    fontFamily: "NotoSansKR",
    fontSize: 9.5,
    lineHeight: 1.62,
    paddingTop: 42,
    paddingRight: 44,
    paddingBottom: 42,
    paddingLeft: 44,
  },
  candidatePage: {
    paddingTop: 32,
    paddingRight: 40,
    paddingBottom: 34,
    paddingLeft: 40,
    fontSize: 8.7,
    lineHeight: 1.5,
  },
  brandRule: { width: 42, height: 4, backgroundColor: colors.teal, marginBottom: 13 },
  eyebrow: { color: colors.teal, fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5 },
  title: { marginTop: 8, fontSize: 25, fontWeight: 700, lineHeight: 1.28 },
  subtitle: { marginTop: 8, color: colors.muted, fontSize: 10, lineHeight: 1.65 },
  certificate: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: colors.sandDark,
    backgroundColor: colors.white,
    paddingTop: 34,
    paddingRight: 28,
    paddingBottom: 34,
    paddingLeft: 28,
    alignItems: "center",
  },
  certificateLabel: { color: colors.muted, fontSize: 9, letterSpacing: 2 },
  nameHangul: {
    marginTop: 15,
    marginBottom: 17,
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 6,
  },
  nameHanja: {
    color: colors.teal,
    fontSize: 23,
    letterSpacing: 6,
    marginBottom: 13,
  },
  certificateSummary: {
    marginTop: 18,
    maxWidth: 390,
    color: colors.muted,
    textAlign: "center",
    fontSize: 9.5,
  },
  metaRow: { marginTop: 22, flexDirection: "row", gap: 10 },
  metaCard: { flexGrow: 1, flexBasis: 0, backgroundColor: colors.sand, padding: 13 },
  metaLabel: { color: colors.muted, fontSize: 7.5 },
  metaValue: { marginTop: 5, fontSize: 9.5, fontWeight: 700 },
  notice: {
    marginTop: 18,
    borderLeftWidth: 3,
    borderLeftColor: colors.rose,
    backgroundColor: "#f8efeb",
    padding: 13,
    color: "#74423c",
    fontSize: 8.5,
  },
  sectionHeader: { marginBottom: 20 },
  candidateHeader: { marginBottom: 15 },
  titleBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: 6,
    minHeight: 30,
  },
  titleBadge: {
    borderRadius: 8,
    backgroundColor: colors.tealSoft,
    color: colors.teal,
    fontSize: 6.7,
    fontWeight: 700,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  sectionTitle: { marginTop: 7, marginBottom: 9, fontSize: 20, fontWeight: 700 },
  sectionLead: { marginTop: 9, color: colors.muted, fontSize: 9, lineHeight: 1.55 },
  gridFour: { flexDirection: "row", gap: 8 },
  pillarCard: {
    flexGrow: 1,
    flexBasis: 0,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
    padding: 13,
    alignItems: "center",
  },
  pillarLabel: { color: colors.muted, fontSize: 8 },
  pillarHanja: {
    marginTop: 8,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 2,
  },
  pillarHangul: { marginTop: 4, color: colors.teal, fontSize: 9 },
  splitRow: { marginTop: 18, flexDirection: "row", gap: 14 },
  splitMain: { flexGrow: 1, flexBasis: 0 },
  splitSide: { width: 160 },
  card: { borderWidth: 1, borderColor: colors.line, backgroundColor: colors.white, padding: 16 },
  cardTitle: { fontSize: 11, fontWeight: 700 },
  cardText: { marginTop: 7, color: colors.muted, fontSize: 8.5 },
  dayMaster: {
    marginTop: 11,
    marginBottom: 15,
    color: colors.teal,
    fontSize: 24,
    fontWeight: 700,
  },
  elementRow: { marginTop: 10 },
  elementTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  elementLabel: { fontSize: 8.5, fontWeight: 700 },
  elementCount: { color: colors.muted, fontSize: 8 },
  barTrack: { height: 6, backgroundColor: colors.sand },
  barFill: { height: 6, backgroundColor: colors.teal },
  caution: { marginTop: 18, backgroundColor: colors.tealSoft, padding: 15 },
  cautionTitle: { color: colors.teal, fontSize: 9, fontWeight: 700 },
  cautionText: { marginTop: 6, color: colors.ink, fontSize: 8.5 },
  nameCard: { borderWidth: 1, borderColor: colors.sandDark, backgroundColor: colors.white, padding: 20 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.tealSoft,
    color: colors.teal,
    fontSize: 8,
    fontWeight: 700,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  recommendationName: {
    marginTop: 12,
    marginBottom: 13,
    fontSize: 23,
    fontWeight: 700,
  },
  recommendationSummary: { marginTop: 7, color: colors.muted, fontSize: 9 },
  characterRow: { marginTop: 15, flexDirection: "row", gap: 10 },
  characterCard: { flexGrow: 1, flexBasis: 0, backgroundColor: colors.sand, padding: 13 },
  candidateNameCard: { padding: 17 },
  candidateCharacterRow: { marginTop: 12 },
  candidateCharacterCard: { padding: 11 },
  characterCardTop: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 6 },
  verifiedBadge: {
    borderRadius: 7,
    backgroundColor: colors.white,
    color: colors.teal,
    fontSize: 5.6,
    fontWeight: 700,
    paddingVertical: 2.5,
    paddingHorizontal: 5,
  },
  characterTitle: { fontSize: 15, fontWeight: 700 },
  characterMeaning: { marginTop: 5, color: colors.muted, fontSize: 8.5 },
  verified: { marginTop: 8, color: colors.teal, fontSize: 7.5, fontWeight: 700 },
  storyBox: { marginTop: 16, borderTopWidth: 1, borderTopColor: colors.line, paddingTop: 14 },
  candidateStoryBox: { marginTop: 11, paddingTop: 9 },
  storyLabel: { fontSize: 9, fontWeight: 700 },
  storyText: { marginTop: 6, color: colors.muted, fontSize: 8.7 },
  candidateStoryText: { marginTop: 5, fontSize: 8, lineHeight: 1.55 },
  analysisSection: {
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
    padding: 15,
  },
  analysisTitle: { color: colors.teal, fontSize: 10, fontWeight: 700 },
  analysisText: { marginTop: 7, color: colors.muted, fontSize: 8.8 },
  candidateNumber: { color: colors.muted, fontSize: 8, marginBottom: 4 },
  sajuConnection: { marginTop: 16, backgroundColor: colors.tealSoft, padding: 14 },
  candidateSajuConnection: { marginTop: 11, padding: 11 },
  rejectedRow: {
    marginBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 9,
  },
  rejectedTitle: { fontSize: 11, fontWeight: 700 },
  rejectedReason: { marginTop: 4, color: colors.muted, fontSize: 8.5 },
  methodRow: { marginBottom: 12, flexDirection: "row", gap: 12 },
  methodNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.teal,
    color: colors.white,
    fontSize: 9,
    fontWeight: 700,
    textAlign: "center",
    paddingTop: 5,
  },
  methodBody: { flexGrow: 1, flexBasis: 0 },
  methodTitle: { fontSize: 10, fontWeight: 700 },
  methodText: { marginTop: 4, color: colors.muted, fontSize: 8.5 },
  sourceBox: { marginTop: 14, backgroundColor: colors.sand, padding: 15 },
  sourceTitle: { fontSize: 9, fontWeight: 700 },
  sourceText: { marginTop: 5, color: colors.muted, fontSize: 8 },
  footer: {
    position: "absolute",
    right: 44,
    bottom: 20,
    left: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    color: colors.muted,
    fontSize: 7,
  },
});

const dateTimeFormatter = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Asia/Seoul",
});

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : dateTimeFormatter.format(date);
}

function ReportFooter({ reportId }: { reportId: string }) {
  return (
    <View style={styles.footer} fixed>
      <Text>NAMING-LINK · PREMIUM NAMING REPORT</Text>
      <Text>{reportId}</Text>
    </View>
  );
}

export function PremiumHanjaReportDocument({ data }: { data: PremiumHanjaReportData }) {
  const saju = data.saju ?? null;
  // 후보 수는 상위(buildPremiumHanjaTestResult)에서 상품별 상한으로 이미 제한된다.
  // 여기서 다시 자르면 조용히 축소될 수 있으므로 받은 후보를 그대로 렌더링한다.
  const candidates = data.candidates?.length
    ? data.candidates
    : [data.primaryCandidate];
  const pillars = saju
    ? ([
        ["년주", saju.pillars.year],
        ["월주", saju.pillars.month],
        ["일주", saju.pillars.day],
        ["시주", saju.pillars.hour],
      ] as const)
    : [];
  const elementOrder = ["WOOD", "FIRE", "EARTH", "METAL", "WATER"] as const;
  const totalVisible = saju
    ? Object.values(saju.visibleFiveElements.counts).reduce(
        (sum, count) => sum + count,
        0,
      )
    : 0;
  const rejected = data.rejectedCandidates ?? [];
  const rejectedPages = Array.from(
    { length: Math.ceil(rejected.length / 8) },
    (_, index) => rejected.slice(index * 8, index * 8 + 8),
  );

  return (
    <Document
      title={`${data.childNameHangul} 프리미엄 작명 리포트`}
      author="Naming-Link"
      subject="전통 명리 참고와 공식 인명용 한자 기준을 결합한 이름 분석 리포트"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRule} />
        <Text style={styles.eyebrow}>NAMING-LINK PREMIUM REPORT</Text>
        <Text style={styles.title}>아이의 이름에 담긴 뜻을{`\n`}오래 간직하는 기록</Text>
        <Text style={styles.subtitle}>
          전통 명리 참고 분석과 공식 인명용 한자 자료를 바탕으로, 이름의 소리와 뜻을 한 권의 리포트로 정리했습니다.
        </Text>

        <View style={styles.certificate}>
          <Text style={styles.certificateLabel}>작명 분석 기록</Text>
          <Text style={styles.nameHangul}>{data.childNameHangul}</Text>
          <HanjaText
            value={data.primaryCandidate.hanjaName}
            style={styles.nameHanja}
            fontWeight={700}
          />
          <HanjaText value={data.primaryCandidate.summary} style={styles.certificateSummary} />
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaCard}>
            <Text style={styles.metaLabel}>리포트 생성</Text>
            <Text style={styles.metaValue}>{formatDate(data.generatedAt)}</Text>
          </View>
          <View style={styles.metaCard}>
            <Text style={styles.metaLabel}>재다운로드 만료</Text>
            <Text style={styles.metaValue}>{formatDate(data.expiresAt)}</Text>
          </View>
        </View>
        <Text style={styles.notice}>
          이 리포트와 분석 결과는 결제 후 24시간 동안만 다시 다운로드할 수 있으며, 이후 자동 삭제됩니다. 필요한 기기에 지금 저장해 주세요.
        </Text>
        <ReportFooter reportId={data.reportId} />
      </Page>

      {saju ? <Page size="A4" style={styles.page}>
        <View style={styles.sectionHeader}>
          <Text style={styles.eyebrow}>01 · FOUR PILLARS REFERENCE</Text>
          <Text style={styles.sectionTitle}>사주 원국과 오행 참고</Text>
          <Text style={styles.sectionLead}>
            입력한 출생 정보를 만세력 계산 엔진으로 변환한 결과입니다. 출생 시각을 모르면 시주는 분석에서 제외됩니다.
          </Text>
        </View>

        <View style={styles.gridFour}>
          {pillars.map(([label, pillar]) => (
            <View key={label} style={styles.pillarCard}>
              <Text style={styles.pillarLabel}>{label}</Text>
              <HanjaText
                value={pillar?.hanja ?? "미정"}
                style={styles.pillarHanja}
                fontWeight={700}
              />
              <Text style={styles.pillarHangul}>{pillar?.hangul ?? "시각 정보 없음"}</Text>
            </View>
          ))}
        </View>

        <View style={styles.splitRow}>
          <View style={[styles.card, styles.splitSide]}>
            <Text style={styles.cardTitle}>일간 참고</Text>
            <HanjaText
              value={`${saju.dayMaster.character} · ${saju.dayMaster.elementLabel}`}
              style={styles.dayMaster}
              fontWeight={700}
            />
            <Text style={styles.cardText}>
              일간은 전통 명리에서 자기 자신을 상징하는 기준점으로 봅니다. 단독으로 성격이나 운명을 확정하지 않습니다.
            </Text>
          </View>
          <View style={[styles.card, styles.splitMain]}>
            <Text style={styles.cardTitle}>천간·지지 표면 오행 분포</Text>
            {elementOrder.map((element) => {
              const count = saju.visibleFiveElements.counts[element];
              const width = totalVisible ? Math.max(3, (count / totalVisible) * 100) : 3;
              return (
                <View key={element} style={styles.elementRow}>
                  <View style={styles.elementTop}>
                    <Text style={styles.elementLabel}>
                      {saju.visibleFiveElements.labels[element]}
                    </Text>
                    <Text style={styles.elementCount}>{count}개</Text>
                  </View>
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { width: `${width}%` }]} />
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.caution}>
          <Text style={styles.cautionTitle}>해석 원칙</Text>
          <Text style={styles.cautionText}>{saju.interpretationPolicy.namingUse}</Text>
          {saju.interpretationPolicy.incompleteTime ? (
            <Text style={styles.cautionText}>{saju.interpretationPolicy.incompleteTime}</Text>
          ) : null}
        </View>
        <ReportFooter reportId={data.reportId} />
      </Page> : null}

      {saju && data.sajuInterpretation ? (
        <Page size="A4" style={styles.page}>
          <View style={styles.sectionHeader}>
            <Text style={styles.eyebrow}>02 · FOUR PILLARS INTERPRETATION</Text>
            <Text style={styles.sectionTitle}>사주 원국과 오행 상세 해설</Text>
            <Text style={styles.sectionLead}>
              계산 결과를 이름 후보와 연결하기 전에 원국, 오행 분포와 적용 원칙을 각각 나누어 설명합니다.
            </Text>
          </View>
          <View style={styles.analysisSection}>
            <Text style={styles.analysisTitle}>사주 원국 해설</Text>
            <HanjaText value={data.sajuInterpretation.overview} style={styles.analysisText} />
          </View>
          <View style={styles.analysisSection}>
            <Text style={styles.analysisTitle}>오행 분포 해설</Text>
            <HanjaText value={data.sajuInterpretation.fiveElements} style={styles.analysisText} />
          </View>
          <View style={styles.analysisSection}>
            <Text style={styles.analysisTitle}>이름 후보에 적용하는 기준</Text>
            <HanjaText value={data.sajuInterpretation.namingBalance} style={styles.analysisText} />
          </View>
          <ReportFooter reportId={data.reportId} />
        </Page>
      ) : null}

      {candidates.map((candidate, candidateIndex) => (
      <Page key={`${candidate.hanjaName}-${candidateIndex}`} size="A4" style={[styles.page, styles.candidatePage]}>
        <View style={[styles.sectionHeader, styles.candidateHeader]}>
          <Text style={styles.eyebrow}>NAME CANDIDATE · {String(candidateIndex + 1).padStart(2, "0")} / {candidates.length}</Text>
          <View style={styles.titleBadgeRow}>
            <Text style={[styles.sectionTitle, { marginTop: 0, marginBottom: 0 }]}>추천 한자 이름 상세 분석</Text>
            <Text style={styles.titleBadge}>후보 {candidateIndex + 1}</Text>
            <Text style={styles.titleBadge}>{candidate.focusLabel}</Text>
          </View>
          <Text style={styles.sectionLead}>
            각 글자의 사전 뜻, 두 글자의 결합 의미와 실제 설명 방식을 후보별로 정리했습니다.
          </Text>
        </View>

        <View style={[styles.nameCard, styles.candidateNameCard]}>
          <HanjaText
            value={`${candidate.displayName} · ${candidate.hanjaName}`}
            style={styles.recommendationName}
            fontWeight={700}
          />
          <HanjaText value={candidate.summary} style={styles.recommendationSummary} />
          <View style={[styles.characterRow, styles.candidateCharacterRow]}>
            {candidate.characters.map((character) => (
              <View key={`${character.hanja}-${character.hangul}`} style={[styles.characterCard, styles.candidateCharacterCard]}>
                <View style={styles.characterCardTop}>
                  <HanjaText
                    value={`${character.hangul} · ${character.hanja}`}
                    style={styles.characterTitle}
                    fontWeight={700}
                  />
                  <Text style={styles.verifiedBadge}>
                    {character.officialReadingConfirmed
                      ? "공식 자료 지정 음가 확인"
                      : "최종 공식 조회 필요"}
                  </Text>
                </View>
                <HanjaText
                  value={`${character.meaning}${character.elementLabel ? ` · 오행 분류 ${character.elementLabel}` : ""}`}
                  style={styles.characterMeaning}
                />
                {character.originLabel ? (
                  <Text style={styles.verified}>{character.originLabel}</Text>
                ) : null}
              </View>
            ))}
          </View>
          <View style={[styles.storyBox, styles.candidateStoryBox]}>
            <Text style={styles.storyLabel}>글자별 뜻과 결합 의미</Text>
            <HanjaText value={candidate.story} style={[styles.storyText, styles.candidateStoryText]} />
          </View>
          <View style={[styles.storyBox, styles.candidateStoryBox]}>
            <Text style={styles.storyLabel}>실사용 설명</Text>
            <HanjaText value={candidate.practicalUse} style={[styles.storyText, styles.candidateStoryText]} />
          </View>
          {candidate.selectionGuide ? (
            <View style={[styles.storyBox, styles.candidateStoryBox]}>
              <Text style={styles.storyLabel}>이 후보를 선택할 때의 판단 기준</Text>
              <HanjaText value={candidate.selectionGuide} style={[styles.storyText, styles.candidateStoryText]} />
            </View>
          ) : null}
          {candidate.meaningCaution ? (
            <View style={[styles.storyBox, styles.candidateStoryBox]}>
              <Text style={styles.storyLabel}>의미 해석에서 살필 점</Text>
              <HanjaText value={candidate.meaningCaution} style={[styles.storyText, styles.candidateStoryText]} />
            </View>
          ) : null}
          {saju && candidate.sajuConnection ? (
            <View style={[styles.sajuConnection, styles.candidateSajuConnection]}>
              <Text style={styles.cautionTitle}>사주·오행과 이 후보의 연결 해석</Text>
              <HanjaText value={candidate.sajuConnection} style={[styles.cautionText, styles.candidateStoryText]} />
            </View>
          ) : null}
        </View>

        <ReportFooter reportId={data.reportId} />
      </Page>
      ))}

      {saju && data.sajuInterpretation?.candidateComparison ? (
        <Page size="A4" style={styles.page}>
          <View style={styles.sectionHeader}>
            <Text style={styles.eyebrow}>FINAL · SAJU & NAME COMPARISON</Text>
            <Text style={styles.sectionTitle}>{candidates.length}개 후보 종합 비교와 선택 가이드</Text>
            <Text style={styles.sectionLead}>
              사주 원국과 오행 참고, 각 후보의 자의와 실사용 설명력을 함께 놓고 최종 비교합니다.
            </Text>
          </View>
          <View style={styles.analysisSection}>
            <Text style={styles.analysisTitle}>종합 비교 해설</Text>
            <HanjaText
              value={data.sajuInterpretation.candidateComparison}
              style={styles.analysisText}
            />
          </View>
          <View style={styles.caution}>
            <Text style={styles.cautionTitle}>최종 선택 원칙</Text>
            <Text style={styles.cautionText}>
              전통 명리 참고는 선택을 돕는 하나의 비교축입니다. 최종 결정에서는 부모가 담고 싶은 가치, 글자별 사전 뜻, 부르기 쉬운 음감과 공식 등록 가능 여부를 함께 확인해 주세요.
            </Text>
          </View>
          <ReportFooter reportId={data.reportId} />
        </Page>
      ) : null}

      {rejectedPages.map((items, pageIndex) => (
        <Page key={`rejected-${pageIndex}`} size="A4" style={styles.page}>
          <View style={styles.sectionHeader}>
            <Text style={styles.eyebrow}>APPENDIX · EXCLUDED HANJA</Text>
            <Text style={styles.sectionTitle}>배제 후보 상세 근거</Text>
            <Text style={styles.sectionLead}>
              추천에서 제외한 글자와 전체 배제 사유를 기록했습니다. 등록 가능 여부와 추천 적합성은 서로 다른 기준입니다.
            </Text>
          </View>
          {items.map((item, index) => (
            <View key={`${item.character}-${index}`} style={styles.rejectedRow}>
              <HanjaText value={item.character} style={styles.rejectedTitle} fontWeight={700} />
              <HanjaText value={item.reason} style={styles.rejectedReason} />
              {item.severity ? (
                <Text style={styles.verified}>배제 기준 등급 · {item.severity}</Text>
              ) : null}
            </View>
          ))}
          <ReportFooter reportId={data.reportId} />
        </Page>
      ))}

      <Page size="A4" style={styles.page}>
        <View style={styles.sectionHeader}>
          <Text style={styles.eyebrow}>03 · METHOD & NOTICE</Text>
          <Text style={styles.sectionTitle}>분석 기준과 꼭 확인할 사항</Text>
          <Text style={styles.sectionLead}>
            유료 리포트의 계산 근거와 한계를 함께 기록해, 결과가 과장되거나 단정적으로 전달되지 않도록 합니다.
          </Text>
        </View>

        {[
          ...(saju ? [["1", "만세력 계산", `${saju.engine.name} ${saju.engine.version}을 사용해 사주 원국을 계산했습니다. 운영 전 KASI 음양력·24절기 자료와 경계일 표본을 교차검증합니다.`]] : []),
          ...(saju ? [["2", "전통 명리 참고", "오행 분포는 전통적인 해석의 참고 자료입니다. 특정 오행이 적게 보인다는 이유만으로 반드시 보완해야 한다고 단정하지 않습니다."]] : []),
          ["3", "인명용 한자 검토", data.primaryCandidate.officialSourceLabel],
          ["4", "최종 등록 재확인", "법령과 공식 한자표는 변경될 수 있으므로 출생신고 직전에 대법원 인명용 한자 조회에서 글자와 지정 음가를 다시 확인해 주세요."],
        ].map(([number, title, description]) => (
          <View key={number} style={styles.methodRow}>
            <Text style={styles.methodNumber}>{number}</Text>
            <View style={styles.methodBody}>
              <Text style={styles.methodTitle}>{title}</Text>
              <Text style={styles.methodText}>{description}</Text>
            </View>
          </View>
        ))}

        <View style={styles.sourceBox}>
          <Text style={styles.sourceTitle}>리포트의 성격</Text>
          <Text style={styles.sourceText}>
            {saju
              ? saju.interpretationPolicy.wording
              : "이 리포트는 공식 음가와 한자의 사전 뜻을 바탕으로 후보를 비교하며 사주·오행 해석을 포함하지 않습니다."}
          </Text>
          <Text style={styles.sourceText}>
            {saju
              ? saju.interpretationPolicy.officialHanja
              : "후보 한자는 서비스의 공식 자료 기준으로 필터링하되 최종 등록 가능 여부는 신고 시점의 공식 조회에서 다시 확인해야 합니다."}
          </Text>
        </View>
        {data.parentWishes ? (
          <View style={styles.caution}>
            <Text style={styles.cautionTitle}>입력한 이름 가치</Text>
            <Text style={styles.cautionText}>{data.parentWishes}</Text>
          </View>
        ) : null}
        {data.excludedMeanings ? (
          <Text style={styles.notice}>
            입력한 제외 조건: {data.excludedMeanings}. 후보 전체의 의미 안전 필터에 적용했습니다.
          </Text>
        ) : null}
        <Text style={styles.notice}>
          개인정보와 분석 결과, PDF 파일은 결제 완료 후 24시간이 지나면 자동 삭제됩니다. 결제·환불 처리를 위한 최소 거래 기록은 관련 법령과 내부 보존 정책에 따라 별도로 보관될 수 있습니다.
        </Text>
        <ReportFooter reportId={data.reportId} />
      </Page>
    </Document>
  );
}

export async function renderPremiumHanjaReport(data: PremiumHanjaReportData) {
  return renderToBuffer(<PremiumHanjaReportDocument data={data} />);
}
