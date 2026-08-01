import { readFileSync } from "node:fs";
import path from "node:path";
import React from "react";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";

import type {
  GlobalNameCandidateReport,
  GlobalNameReportData,
} from "@/lib/global-name-premium";
import {
  ArtBackdrop,
  ArtPage,
  FALLBACK_ART_FAMILY,
  FontCreditsFooter,
  fontCreditsReserve,
} from "@/lib/pdf/art-shared";
import { MixedText } from "@/lib/pdf/report-fonts";

// 글로벌 프리미엄 PDF (2026-07-23 사용자 확정 구성 — 한자 의미 매칭 프리미엄과 동일한 형태):
//   1장 표지 → 후보별 [붓글씨 아트 1장 + 상세 해설 1장] × 최대 5 → 마지막 종합(개요+사주·오행) 1장.
// 전부 가로(landscape), 해설은 2단. 아트 서체는 발음 PDF 1번과 동일(ART_FONT).
// 폰트는 TTF만 사용한다(woff 임베딩은 렌더당 20초+로 타임아웃의 실제 원인이었음).
Font.register({
  family: "NotoSansKR",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-400.ttf"), fontWeight: 400 },
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-700.ttf"), fontWeight: 700 },
  ],
});
Font.register({
  family: "EastSeaDokdo",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/EastSeaDokdo-Regular.ttf"), fontWeight: 400 },
  ],
});
Font.register({
  family: "NotoSansCJKkr",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansCJKkr-Naming.otf"), fontWeight: 400 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

// 표지·아트 서체는 사용자가 고른 저장소 서체(families)를 쓰고, 미지정 구주문은 폴백을 쓴다.

let logoSrc: string | null = null;
try {
  const data = readFileSync(path.join(process.cwd(), "public/images/logo-current.png"));
  logoSrc = `data:image/png;base64,${data.toString("base64")}`;
} catch {
  logoSrc = null;
}

const colors = {
  ink: "#221c14",
  muted: "#6d6457",
  hanji: "#f6efdf",
  hanjiDeep: "#efe4cb",
  frame: "#9d7f4e",
  frameSoft: "#c9b184",
  seal: "#a8372b",
  paper: "#fbfaf6",
  line: "#dedbd2",
  teal: "#007f78",
  white: "#ffffff",
};

const BRAND = "Naming-Link (Global Naming Studio)";

const styles = StyleSheet.create({
  coverPage: {
    backgroundColor: colors.hanji,
    padding: 34,
    fontFamily: "NotoSansKR",
    color: colors.ink,
  },
  coverFrameOuter: { flex: 1, borderWidth: 1.4, borderColor: colors.frame, padding: 6 },
  coverFrameInner: {
    flex: 1,
    borderWidth: 0.6,
    borderColor: colors.frameSoft,
    paddingHorizontal: 40,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.hanjiDeep,
  },
  coverEyebrow: {
    fontSize: 10,
    letterSpacing: 4,
    color: colors.muted,
    textTransform: "uppercase",
  },
  coverOriginal: { marginTop: 8, fontSize: 12, color: colors.muted },
  coverName: { color: colors.ink, textAlign: "center" },
  coverDivider: { marginTop: 12, width: 64, borderBottomWidth: 1, borderBottomColor: colors.frame },
  coverRomanized: { marginTop: 14, fontSize: 16, letterSpacing: 2, color: colors.ink },
  seal: {
    backgroundColor: colors.seal,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 9,
    alignItems: "center",
  },
  sealChar: { color: colors.white, fontSize: 20, lineHeight: 1.05 },
  coverFooterBrand: { fontSize: 9, letterSpacing: 1.2, color: colors.muted },
  coverFooterMeta: { marginTop: 4, fontSize: 8, color: colors.muted },
  page: {
    backgroundColor: colors.paper,
    paddingTop: 40,
    paddingBottom: 52,
    paddingHorizontal: 46,
    fontFamily: "NotoSansKR",
    color: colors.ink,
    fontSize: 10.5,
    lineHeight: 1.65,
  },
  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 10,
    marginBottom: 16,
  },
  pageHeaderName: { fontSize: 15, fontWeight: 700 },
  logo: { width: 64, objectFit: "contain" },
  sectionTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    color: colors.teal,
    marginBottom: 6,
    marginTop: 14,
  },
  paragraph: { color: colors.ink },
  columns: { flexDirection: "row", gap: 22 },
  column: { flex: 1, minWidth: 0 },
  syllableRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 4,
    marginBottom: 6,
    backgroundColor: colors.white,
  },
  syllableCell: {
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: colors.line,
    paddingVertical: 9,
  },
  syllableChar: { fontSize: 22, fontWeight: 700 },
  syllableMeaning: { flex: 1, padding: 9, justifyContent: "center" },
  elementRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  elementLabel: { width: 96, fontSize: 9.5, color: colors.muted },
  elementBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: colors.hanjiDeep,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  elementBarFill: { height: 8, backgroundColor: colors.teal, borderRadius: 4 },
  elementCount: { width: 18, fontSize: 9.5, textAlign: "right" },
  sajuMetaRow: { flexDirection: "row", gap: 10, marginBottom: 10 },
  sajuMetaBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 4,
    padding: 8,
    backgroundColor: colors.white,
  },
  sajuMetaLabel: { fontSize: 8, color: colors.muted, marginBottom: 2 },
  sajuMetaValue: { fontSize: 10.5, fontWeight: 700 },
  footer: {
    position: "absolute",
    left: 46,
    right: 46,
    bottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.line,
    paddingTop: 8,
  },
  footerText: { fontSize: 8, color: colors.muted },
});

function coverListSize(count: number) {
  if (count <= 2) return 88;
  if (count === 3) return 66;
  if (count === 4) return 52;
  return 44;
}

/**
 * 해설이 길면 **본문을 조인다.**
 *
 * 지면은 고정인데 모델이 쓰는 분량은 주문마다 다르다. 그대로 흘려보내면 한 장을 조금 넘길 때
 * 두 줄짜리 지면이 한 장 더 붙는다 — 유료 문서에서 가장 볼품없는 모습이다(2026-08-01 실측).
 * 잘라내면 산 것을 덜 주는 셈이니 글자를 줄여 담는다. 발음 아트 PDF와 같은 규칙이다.
 *
 * 글자 수에 **문자 체계 가중치**를 준다 — 한자·가나·한글은 라틴의 두 배 가까운 폭을 먹어서,
 * 같은 글자 수인데도 CJK 로케일만 넘쳤다.
 *
 * **본문에만 건다.** 페이지에 걸면 머리글 줄 간격까지 좁아져 제목이 겹친다(실측으로 겪었다).
 */
function bodyDensity(bodies: string[]) {
  let weight = 0;
  for (const body of bodies) {
    for (const character of body) {
      weight += /[가-힣㐀-䶿一-鿿ぁ-ゟ゠-ヿ]/.test(character) ? 1.8 : 1;
    }
  }
  if (weight <= 1000) return undefined;
  if (weight <= 1500) return { fontSize: 9.6, lineHeight: 1.5 };
  if (weight <= 2000) return { fontSize: 8.8, lineHeight: 1.42 };
  if (weight <= 2800) return { fontSize: 8.0, lineHeight: 1.34 };
  return { fontSize: 7.4, lineHeight: 1.28 };
}

type Density = ReturnType<typeof bodyDensity>;

/** 글자가 차지하는 폭. 한글·한자·가나는 라틴의 두 배 남짓이다. */
function textWeight(value: string) {
  let weight = 0;
  for (const character of value) {
    weight += /[가-힣㐀-䶿一-鿿ぁ-ゟ゠-ヿ]/.test(character) ? 2.1 : 1;
  }
  return weight;
}

/**
 * 절을 두 단에 **길이로 나눈다.**
 *
 * 예전에는 왼쪽 한 절·오른쪽 네 절로 고정이었다. 그러면 해설이 길어질 때 오른쪽만 넘쳐서,
 * 왼쪽이 비어 있는데도 두 줄짜리 지면이 한 장 더 생겼다(2026-08-01 CJK 로케일에서 실측).
 *
 * `head`는 왼쪽 단이 먼저 이고 시작하는 무게다(음절 뜻 표). 자를 자리를 하나씩 넣어 보고
 * **양쪽 차이가 가장 작은** 곳을 고른다.
 */
function splitColumns(sections: Array<{ title: string; body: string }>, head: number) {
  const filled = sections.filter((section) => section.body);
  if (filled.length <= 1) return [filled, []] as const;
  const weights = filled.map((section) => textWeight(section.body));
  let best = 1;
  let bestGap = Infinity;
  for (let cut = 0; cut < filled.length; cut += 1) {
    const left = head + weights.slice(0, cut).reduce((sum, weight) => sum + weight, 0);
    const right = weights.slice(cut).reduce((sum, weight) => sum + weight, 0);
    const gap = Math.abs(left - right);
    if (gap < bestGap) {
      bestGap = gap;
      best = cut;
    }
  }
  return [filled.slice(0, best), filled.slice(best)] as const;
}

/**
 * 제목과 본문 한 덩어리.
 *
 * **`wrap={false}`를 걸지 않는다.** 해설이 길면(모델은 필드당 2,000자까지 쓸 수 있다) 덩어리가
 * 한 장보다 커지는데, 그러면 @react-pdf는 쪼개는 대신 **지면 밖으로 흘려보내고** 빈 장까지
 * 만든다 — 오류는 나지 않는다(2026-08-01 상한값 케이스에서 실측). `minPresenceAhead`가
 * 제목만 앞 장에 남는 것을 막아 준다.
 */
function Section({
  title,
  body,
  density,
}: {
  title: string;
  body: string;
  density?: Density;
}) {
  if (!body) return null;
  return (
    <View minPresenceAhead={40}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <MixedText style={[styles.paragraph, ...(density ? [density] : [])]} text={body} />
    </View>
  );
}

function PageFooter({ data }: { data: GlobalNameReportData }) {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>{BRAND} · Korean Name Premium Report</Text>
      <Text
        style={styles.footerText}
        render={({ pageNumber, totalPages }) => `${data.reportId} · ${pageNumber}/${totalPages}`}
      />
    </View>
  );
}

function PageHeader({ data, subtitle }: { data: GlobalNameReportData; subtitle: string }) {
  return (
    <View style={styles.pageHeader}>
      <View>
        {/* 한글 이름 + 로마자 발음이 한 줄에 섞인다. raw Text면 상속된 NotoSansKR가 로마자 성조·
            발음부호(라틴 확장)를 두부로 만든다. MixedText가 한글·라틴을 각 폰트로 나눠 렌더한다. */}
        <MixedText style={styles.pageHeaderName} text={subtitle} />
        <MixedText
          style={{ fontSize: 8.5, color: colors.muted, marginTop: 2 }}
          text={`Korean name report for ${data.original.name}`}
        />
      </View>
      {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
    </View>
  );
}

// 1장: 표지 — 전체 후보 이름을 선택 서체로 나열한다.
function CoverPage({
  data,
  artFamily,
  backdropImage,
}: {
  data: GlobalNameReportData;
  artFamily: string;
  backdropImage?: string | null;
}) {
  const generatedDate = data.generatedAt.slice(0, 10);
  const names = data.candidates.map((candidate) => candidate.name.hangul);
  return (
    <Page size="A4" orientation="landscape" style={styles.coverPage}>
      <View style={styles.coverFrameOuter}>
        <View style={styles.coverFrameInner}>
          <ArtBackdrop image={backdropImage} />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.coverEyebrow}>Korean Name Premium Report</Text>
            <MixedText style={styles.coverOriginal} text={`for ${data.original.name}`} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={[
                styles.coverName,
                { fontFamily: artFamily, fontSize: coverListSize(names.length), lineHeight: 1.12 },
              ]}
            >
              {names.join("  ·  ")}
            </Text>
            <View style={styles.coverDivider} />
            <Text style={styles.coverRomanized}>
              {data.candidates.map((candidate) => candidate.name.romanized).join(" · ")}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.seal}>
              {[...(names[0] ?? "이름")].slice(0, 3).map((char, index) => (
                <Text key={index} style={[styles.sealChar, { fontFamily: artFamily }]}>
                  {char}
                </Text>
              ))}
            </View>
            <View style={{ alignItems: "center", marginTop: 12 }}>
              <Text style={styles.coverFooterBrand}>{BRAND}</Text>
              <Text style={styles.coverFooterMeta}>
                {data.reportId} · {generatedDate}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}

// 후보 상세 해설 페이지(2단).
function CandidateDetailPage({
  data,
  candidate,
  index,
}: {
  data: GlobalNameReportData;
  candidate: GlobalNameCandidateReport;
  index: number;
}) {
  const density = bodyDensity([
    ...candidate.sections.meaningBreakdown.map((entry) => entry.meaning),
    candidate.sections.whyThisName,
    candidate.sections.soundConnection,
    candidate.sections.pronunciationTips,
    candidate.sections.culturalNotes,
    candidate.sections.usageGuide,
  ]);
  // 음절 뜻 표는 늘 왼쪽 위에 둔다(이름을 먼저 보여 주는 자리다). 나머지 절만 나눈다.
  const headWeight = candidate.sections.meaningBreakdown.reduce(
    (sum, entry) => sum + textWeight(entry.meaning) + 40,
    0,
  );
  const [left, right] = splitColumns(
    [
      { title: "Why this name", body: candidate.sections.whyThisName },
      { title: "Connection to your original name", body: candidate.sections.soundConnection },
      { title: "How to pronounce it", body: candidate.sections.pronunciationTips },
      { title: "How Koreans will hear it", body: candidate.sections.culturalNotes },
      { title: "Using this name", body: candidate.sections.usageGuide },
    ],
    headWeight,
  );
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <PageHeader
        data={data}
        subtitle={`${candidate.name.hangul} · ${candidate.name.romanized}  (${index + 1}/${data.candidates.length})`}
      />
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={[styles.sectionTitle, { marginTop: 0 }]}>Meaning, syllable by syllable</Text>
          {candidate.sections.meaningBreakdown.map((entry, entryIndex) => (
            <View key={entryIndex} style={styles.syllableRow} wrap={false}>
              <View style={styles.syllableCell}>
                <Text style={styles.syllableChar}>{entry.syllable}</Text>
              </View>
              <View style={styles.syllableMeaning}>
                <MixedText style={density} text={entry.meaning} />
              </View>
            </View>
          ))}
          {left.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              body={section.body}
              density={density}
            />
          ))}
        </View>
        <View style={styles.column}>
          {right.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              body={section.body}
              density={density}
            />
          ))}
        </View>
      </View>
      <PageFooter data={data} />
    </Page>
  );
}

export function GlobalNameReportDocument({
  data,
  families,
  backdropImage,
}: {
  data: GlobalNameReportData;
  families: Record<string, string>;
  backdropImage?: string | null;
}) {
  const maxElementCount = Math.max(1, ...(data.saju?.counts.map((entry) => entry.count) ?? [1]));
  const generatedDate = data.generatedAt.slice(0, 10);
  const fonts = data.fonts.length > 0 ? data.fonts : [null];
  const primaryFamily = fonts[0]
    ? families[fonts[0].code] ?? FALLBACK_ART_FAMILY
    : FALLBACK_ART_FAMILY;
  return (
    <Document title={`Naming-Link Korean Name Report ${data.original.name}`}>
      <CoverPage data={data} artFamily={primaryFamily} backdropImage={backdropImage} />
      {data.candidates.map((candidate, index) => (
        <React.Fragment key={index}>
          {fonts.map((font, fontIndex) => (
            <ArtPage
              key={fontIndex}
              eyebrow={`Candidate ${index + 1} of ${data.candidates.length}`}
              forName={data.original.name}
              hangul={candidate.name.hangul}
              romanized={candidate.name.romanized}
              fontFamily={font ? families[font.code] ?? FALLBACK_ART_FAMILY : FALLBACK_ART_FAMILY}
              reportId={data.reportId}
              generatedDate={generatedDate}
              font={font}
              backdropImage={backdropImage}
            />
          ))}
          <CandidateDetailPage data={data} candidate={candidate} index={index} />
        </React.Fragment>
      ))}

      {/* 마지막 장: 종합 개요 + 사주·오행 (가로 2단).
          서체 표기는 흐름 밖에 둔다 — 안에 두면 본문이 길 때 표기만 다음 장으로 밀려
          빈 지면이 한 장 생긴다(한글 아트에서 실제로 그랬다, 2026-08-01). */}
      <Page
        size="A4"
        orientation="landscape"
        style={[styles.page, { paddingBottom: 52 + fontCreditsReserve(data.fonts) }]}
      >
        <PageHeader data={data} subtitle="Overview & Five Elements" />
        <View style={styles.columns}>
          <View style={styles.column}>
            {data.saju ? (
              <View>
                <Text style={[styles.sectionTitle, { marginTop: 0 }]}>
                  Five elements reference (사주·오행)
                </Text>
                <View style={styles.sajuMetaRow}>
                  <View style={styles.sajuMetaBox}>
                    <Text style={styles.sajuMetaLabel}>Birth (solar)</Text>
                    <Text style={styles.sajuMetaValue}>{data.saju.birthLabel}</Text>
                  </View>
                  <View style={styles.sajuMetaBox}>
                    <Text style={styles.sajuMetaLabel}>Day master (일간)</Text>
                    <Text style={styles.sajuMetaValue}>{data.saju.dayMaster}</Text>
                  </View>
                </View>
                {data.saju.counts.map((entry) => (
                  <View key={entry.element} style={styles.elementRow}>
                    <Text style={styles.elementLabel}>{entry.label}</Text>
                    <View style={styles.elementBarTrack}>
                      <View
                        style={[
                          styles.elementBarFill,
                          { width: `${Math.round((entry.count / maxElementCount) * 100)}%` },
                        ]}
                      />
                    </View>
                    <Text style={styles.elementCount}>{entry.count}</Text>
                  </View>
                ))}
                <View style={[styles.sajuMetaRow, { marginTop: 8 }]}>
                  <View style={styles.sajuMetaBox}>
                    <Text style={styles.sajuMetaLabel}>Strongest</Text>
                    <Text style={styles.sajuMetaValue}>{data.saju.dominant}</Text>
                  </View>
                  <View style={styles.sajuMetaBox}>
                    <Text style={styles.sajuMetaLabel}>Least present</Text>
                    <Text style={styles.sajuMetaValue}>{data.saju.weakest}</Text>
                  </View>
                </View>
                <Section title="Reading the balance" body={data.saju.overview} />
              </View>
            ) : (
              <Text style={{ fontSize: 9, color: colors.muted }}>
                Birth details were not provided, so the five-element reference is not included in
                this report.
              </Text>
            )}
          </View>
          <View style={styles.column}>
            <View style={{ marginTop: -14 }}>
              <Section title="Overview" body={data.analysisSummary} />
            </View>
            {data.saju ? (
              <Section title="How your names align" body={data.saju.nameAlignment} />
            ) : null}
          </View>
        </View>
        <FontCreditsFooter fonts={data.fonts} bottom={50} />
        <PageFooter data={data} />
      </Page>
    </Document>
  );
}

export async function renderGlobalNameReportPdf(
  data: GlobalNameReportData,
  families: Record<string, string> = {},
  backdropImage?: string | null,
) {
  return renderToBuffer(
    <GlobalNameReportDocument data={data} families={families} backdropImage={backdropImage} />,
  );
}
