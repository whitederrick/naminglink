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
    officialReadingConfirmed: boolean;
  }>;
  story: string;
  practicalUse: string;
  officialSourceLabel: string;
};

export type PremiumHanjaReportData = {
  reportId: string;
  generatedAt: string;
  expiresAt: string;
  childNameHangul: string;
  saju: PremiumSajuResult;
  primaryCandidate: PremiumHanjaReportCandidate;
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

Font.register({
  family: "NotoSansKR",
  fonts: [
    {
      src: path.join(
        process.cwd(),
        "node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-400-normal.woff",
      ),
      fontWeight: 400,
    },
    {
      src: path.join(
        process.cwd(),
        "node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-700-normal.woff",
      ),
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "NotoSansCJKkr",
  fonts: [
    {
      src: path.join(process.cwd(), "assets/fonts/NotoSansCJKkr-Naming.otf"),
      fontWeight: 400,
    },
    {
      src: path.join(process.cwd(), "assets/fonts/NotoSansCJKkr-Naming.otf"),
      fontWeight: 700,
    },
  ],
});

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
  return (
    <Text style={style}>
      {Array.from(value).map((character, index) => (
        <Text
          key={`${character}-${index}`}
          style={{
            fontFamily: isCjk(character) ? "NotoSansCJKkr" : "NotoSansKR",
            fontWeight,
          }}
        >
          {character}
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
  sectionTitle: { marginTop: 7, marginBottom: 9, fontSize: 20, fontWeight: 700 },
  sectionLead: { marginTop: 5, color: colors.muted, fontSize: 9 },
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
  characterTitle: { fontSize: 15, fontWeight: 700 },
  characterMeaning: { marginTop: 5, color: colors.muted, fontSize: 8.5 },
  verified: { marginTop: 8, color: colors.teal, fontSize: 7.5, fontWeight: 700 },
  storyBox: { marginTop: 16, borderTopWidth: 1, borderTopColor: colors.line, paddingTop: 14 },
  storyLabel: { fontSize: 9, fontWeight: 700 },
  storyText: { marginTop: 6, color: colors.muted, fontSize: 8.7 },
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
  const pillars = [
    ["년주", data.saju.pillars.year],
    ["월주", data.saju.pillars.month],
    ["일주", data.saju.pillars.day],
    ["시주", data.saju.pillars.hour],
  ] as const;
  const elementOrder = ["WOOD", "FIRE", "EARTH", "METAL", "WATER"] as const;
  const totalVisible = Object.values(data.saju.visibleFiveElements.counts).reduce(
    (sum, count) => sum + count,
    0,
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
          <Text style={styles.certificateSummary}>{data.primaryCandidate.summary}</Text>
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

      <Page size="A4" style={styles.page}>
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
              value={`${data.saju.dayMaster.character} · ${data.saju.dayMaster.elementLabel}`}
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
              const count = data.saju.visibleFiveElements.counts[element];
              const width = totalVisible ? Math.max(3, (count / totalVisible) * 100) : 3;
              return (
                <View key={element} style={styles.elementRow}>
                  <View style={styles.elementTop}>
                    <Text style={styles.elementLabel}>
                      {data.saju.visibleFiveElements.labels[element]}
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
          <Text style={styles.cautionText}>{data.saju.interpretationPolicy.namingUse}</Text>
          {data.saju.interpretationPolicy.incompleteTime ? (
            <Text style={styles.cautionText}>{data.saju.interpretationPolicy.incompleteTime}</Text>
          ) : null}
        </View>
        <ReportFooter reportId={data.reportId} />
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.sectionHeader}>
          <Text style={styles.eyebrow}>02 · NAME RECOMMENDATION</Text>
          <Text style={styles.sectionTitle}>추천 한자 이름 분석</Text>
          <Text style={styles.sectionLead}>
            한글 이름의 지정 음가를 지키면서 각 글자의 자의와 결합 의미, 실사용 설명력을 함께 살폈습니다.
          </Text>
        </View>

        <View style={styles.nameCard}>
          <Text style={styles.badge}>{data.primaryCandidate.focusLabel}</Text>
          <HanjaText
            value={`${data.primaryCandidate.displayName} · ${data.primaryCandidate.hanjaName}`}
            style={styles.recommendationName}
            fontWeight={700}
          />
          <Text style={styles.recommendationSummary}>{data.primaryCandidate.summary}</Text>
          <View style={styles.characterRow}>
            {data.primaryCandidate.characters.map((character) => (
              <View key={`${character.hanja}-${character.hangul}`} style={styles.characterCard}>
                <HanjaText
                  value={`${character.hangul} · ${character.hanja}`}
                  style={styles.characterTitle}
                  fontWeight={700}
                />
                <Text style={styles.characterMeaning}>
                  {character.meaning}
                  {character.elementLabel ? ` · 오행 분류 ${character.elementLabel}` : ""}
                </Text>
                <Text style={styles.verified}>
                  {character.officialReadingConfirmed
                    ? "공식 자료 지정 음가 확인"
                    : "최종 공식 조회 필요"}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.storyBox}>
            <Text style={styles.storyLabel}>이름에 담긴 이야기</Text>
            <Text style={styles.storyText}>{data.primaryCandidate.story}</Text>
          </View>
          <View style={styles.storyBox}>
            <Text style={styles.storyLabel}>실사용 해석</Text>
            <Text style={styles.storyText}>{data.primaryCandidate.practicalUse}</Text>
          </View>
        </View>

        {data.parentWishes ? (
          <View style={styles.caution}>
            <Text style={styles.cautionTitle}>부모가 담고 싶은 가치</Text>
            <Text style={styles.cautionText}>{data.parentWishes}</Text>
          </View>
        ) : null}
        {data.excludedMeanings ? (
          <Text style={styles.notice}>
            입력한 제외 조건: {data.excludedMeanings}. 이 조건은 후보 필터와 비교에만 사용했습니다.
          </Text>
        ) : null}
        <ReportFooter reportId={data.reportId} />
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.sectionHeader}>
          <Text style={styles.eyebrow}>03 · METHOD & NOTICE</Text>
          <Text style={styles.sectionTitle}>분석 기준과 꼭 확인할 사항</Text>
          <Text style={styles.sectionLead}>
            유료 리포트의 계산 근거와 한계를 함께 기록해, 결과가 과장되거나 단정적으로 전달되지 않도록 합니다.
          </Text>
        </View>

        {[
          ["1", "만세력 계산", `${data.saju.engine.name} ${data.saju.engine.version}을 사용해 사주 원국을 계산했습니다. 운영 전 KASI 음양력·24절기 자료와 경계일 표본을 교차검증합니다.`],
          ["2", "전통 명리 참고", "오행 분포는 전통적인 해석의 참고 자료입니다. 특정 오행이 적게 보인다는 이유만으로 반드시 보완해야 한다고 단정하지 않습니다."],
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
          <Text style={styles.sourceText}>{data.saju.interpretationPolicy.wording}</Text>
          <Text style={styles.sourceText}>{data.saju.interpretationPolicy.officialHanja}</Text>
        </View>
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
