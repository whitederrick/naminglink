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

import type { GlobalNameReportData } from "@/lib/global-name-premium";

// 글로벌 프리미엄 3장 PDF.
// 1장: 한국적 배경 위 붓글씨풍 한글 이름 + 로마자 발음 (기념장 성격의 표지)
// 2장: 이름의 의미(음절별)·선정 이유·소리 연결·발음 안내
// 3장: 사주·오행 참고와 이름의 상징적 연결 + 문화·사용 안내
// 폰트는 TTF만 사용한다(woff 임베딩은 렌더당 20초+로 타임아웃의 실제 원인이었음).
Font.register({
  family: "NotoSansKR",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-400.ttf"), fontWeight: 400 },
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-700.ttf"), fontWeight: 700 },
  ],
});
Font.register({
  family: "NanumBrush",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NanumBrushScript-Regular.ttf"), fontWeight: 400 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

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

const styles = StyleSheet.create({
  coverPage: {
    backgroundColor: colors.hanji,
    padding: 34,
    fontFamily: "NotoSansKR",
    color: colors.ink,
  },
  coverFrameOuter: {
    flex: 1,
    borderWidth: 1.4,
    borderColor: colors.frame,
    padding: 6,
  },
  coverFrameInner: {
    flex: 1,
    borderWidth: 0.6,
    borderColor: colors.frameSoft,
    paddingHorizontal: 40,
    paddingVertical: 36,
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
  coverNameBlock: { alignItems: "center", justifyContent: "center" },
  coverName: { fontFamily: "NanumBrush", color: colors.ink },
  coverRomanized: {
    marginTop: 18,
    fontSize: 17,
    letterSpacing: 3,
    color: colors.ink,
  },
  coverDivider: {
    marginTop: 14,
    width: 64,
    borderBottomWidth: 1,
    borderBottomColor: colors.frame,
  },
  sealBlock: { alignItems: "center" },
  seal: {
    backgroundColor: colors.seal,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 9,
    alignItems: "center",
  },
  sealChar: {
    color: colors.white,
    fontFamily: "NanumBrush",
    fontSize: 20,
    lineHeight: 1.05,
  },
  coverFooter: { alignItems: "center" },
  coverFooterBrand: { fontSize: 9, letterSpacing: 2.5, color: colors.muted },
  coverFooterMeta: { marginTop: 4, fontSize: 8, color: colors.muted },
  page: {
    backgroundColor: colors.paper,
    paddingTop: 42,
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
    marginBottom: 18,
  },
  pageHeaderName: { fontSize: 15, fontWeight: 700 },
  pageHeaderMeta: { fontSize: 8.5, color: colors.muted, textAlign: "right" },
  logo: { width: 64, objectFit: "contain" },
  sectionTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    color: colors.teal,
    marginBottom: 6,
    marginTop: 14,
  },
  paragraph: { color: colors.ink },
  syllableRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 4,
    marginBottom: 6,
    backgroundColor: colors.white,
  },
  syllableCell: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: colors.line,
    paddingVertical: 10,
  },
  syllableChar: { fontSize: 24, fontWeight: 700 },
  syllableMeaning: { flex: 1, padding: 10, justifyContent: "center" },
  elementRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  elementLabel: { width: 96, fontSize: 9.5, color: colors.muted },
  elementBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: colors.hanjiDeep,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  elementBarFill: {
    height: 8,
    backgroundColor: colors.teal,
    borderRadius: 4,
  },
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

function coverNameSize(hangul: string) {
  const length = Math.max(1, [...hangul].length);
  if (length <= 2) return 130;
  if (length === 3) return 112;
  if (length === 4) return 88;
  return 68;
}

function Section({ title, body }: { title: string; body: string }) {
  if (!body) return null;
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.paragraph}>{body}</Text>
    </View>
  );
}

function PageFooter({ data, page }: { data: GlobalNameReportData; page: number }) {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>NAMING-LINK · Korean Name Premium Report</Text>
      <Text style={styles.footerText}>
        {data.reportId} · {page}/3
      </Text>
    </View>
  );
}

function PageHeader({ data }: { data: GlobalNameReportData }) {
  return (
    <View style={styles.pageHeader}>
      <View>
        <Text style={styles.pageHeaderName}>
          {data.name.hangul} · {data.name.romanized}
        </Text>
        <Text style={{ fontSize: 8.5, color: colors.muted, marginTop: 2 }}>
          Korean name report for {data.original.name}
        </Text>
      </View>
      {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
    </View>
  );
}

export function GlobalNameReportDocument({ data }: { data: GlobalNameReportData }) {
  const generatedDate = data.generatedAt.slice(0, 10);
  const maxElementCount = Math.max(1, ...(data.saju?.counts.map((entry) => entry.count) ?? [1]));
  return (
    <Document title={`Naming-Link Korean Name Report ${data.name.hangul}`}>
      {/* 1장: 붓글씨 표지 */}
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverFrameOuter}>
          <View style={styles.coverFrameInner}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.coverEyebrow}>Korean Name Certificate</Text>
              <Text style={styles.coverOriginal}>for {data.original.name}</Text>
            </View>
            <View style={styles.coverNameBlock}>
              <Text style={[styles.coverName, { fontSize: coverNameSize(data.name.hangul) }]}>
                {data.name.hangul}
              </Text>
              <View style={styles.coverDivider} />
              <Text style={styles.coverRomanized}>{data.name.romanized}</Text>
            </View>
            <View style={styles.sealBlock}>
              <View style={styles.seal}>
                {[...data.name.hangul].slice(0, 3).map((char, index) => (
                  <Text key={index} style={styles.sealChar}>
                    {char}
                  </Text>
                ))}
              </View>
              <View style={[styles.coverFooter, { marginTop: 14 }]}>
                <Text style={styles.coverFooterBrand}>NAMING-LINK</Text>
                <Text style={styles.coverFooterMeta}>
                  {data.reportId} · {generatedDate}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* 2장: 의미·이유·발음 */}
      <Page size="A4" style={styles.page}>
        <PageHeader data={data} />
        <Section title="Overview" body={data.sections.analysisSummary} />
        <Text style={styles.sectionTitle}>Meaning, syllable by syllable</Text>
        {data.sections.meaningBreakdown.map((entry, index) => (
          <View key={index} style={styles.syllableRow} wrap={false}>
            <View style={styles.syllableCell}>
              <Text style={styles.syllableChar}>{entry.syllable}</Text>
            </View>
            <View style={styles.syllableMeaning}>
              <Text>{entry.meaning}</Text>
            </View>
          </View>
        ))}
        <Section title="Why this name" body={data.sections.whyThisName} />
        <Section title="Connection to your original name" body={data.sections.soundConnection} />
        <Section title="How to pronounce it" body={data.sections.pronunciationTips} />
        <PageFooter data={data} page={2} />
      </Page>

      {/* 3장: 사주·오행 + 문화·사용 안내 */}
      <Page size="A4" style={styles.page}>
        <PageHeader data={data} />
        {data.saju ? (
          <View>
            <Text style={styles.sectionTitle}>Five elements reference (사주·오행)</Text>
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
            <Section title="How the name aligns" body={data.saju.nameAlignment} />
          </View>
        ) : (
          <Text style={{ fontSize: 9, color: colors.muted }}>
            Birth details were not provided, so the five-element reference is not included in this
            report.
          </Text>
        )}
        <Section title="How Koreans will hear this name" body={data.sections.culturalNotes} />
        <Section title="Using your Korean name" body={data.sections.usageGuide} />
        <PageFooter data={data} page={3} />
      </Page>
    </Document>
  );
}

export async function renderGlobalNameReportPdf(data: GlobalNameReportData) {
  return renderToBuffer(<GlobalNameReportDocument data={data} />);
}
