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
  FontCreditsBlock,
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

function Section({ title, body }: { title: string; body: string }) {
  if (!body) return null;
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <MixedText style={styles.paragraph} text={body} />
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
                <MixedText text={entry.meaning} />
              </View>
            </View>
          ))}
          <Section title="Why this name" body={candidate.sections.whyThisName} />
        </View>
        <View style={styles.column}>
          <Section
            title="Connection to your original name"
            body={candidate.sections.soundConnection}
          />
          <Section title="How to pronounce it" body={candidate.sections.pronunciationTips} />
          <Section title="How Koreans will hear it" body={candidate.sections.culturalNotes} />
          <Section title="Using this name" body={candidate.sections.usageGuide} />
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

      {/* 마지막 장: 종합 개요 + 사주·오행 (가로 2단) */}
      <Page size="A4" orientation="landscape" style={styles.page}>
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
            <FontCreditsBlock fonts={data.fonts} />
          </View>
        </View>
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
