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

import type { HangulArtReportData } from "@/lib/hangul-art-premium";
import { MixedText } from "@/lib/pdf/report-fonts";

// 발음 표기 붓글씨 3장 PDF (2026-07-23 사용자 확정: 서체 2종).
// 1장: 붓글씨(나눔붓) 표기 아트, 2장: 손글씨 펜(나눔펜) 표기 아트,
// 3장: 발음 안내 — 발음 근거·음절·IPA·한국에서의 인상·사용 안내 (무료 결과에 담긴
//      사용자 언어 텍스트를 그대로 사용, AI 재호출 없음)
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
// 표지 서체 2종: 거친 붓(동해독도체) + 부드러운 붓(나눔붓글씨). 2026-07-23 사용자 피드백으로
// 볼펜 느낌의 나눔펜 대신 더 붓글씨다운 동해독도체를 1번 서체로 채택.
Font.register({
  family: "EastSeaDokdo",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/EastSeaDokdo-Regular.ttf"), fontWeight: 400 },
  ],
});
// 원 이름·발음 근거에 한자(예: 王小明)가 섞일 수 있어 CJK 글리프가 있는 폰트를 본문에 쓴다.
// (NotoSansKR에는 한자 글리프가 없어 깨진다. IPA 확장 기호는 두 폰트 모두 없어 PDF에서는 뺀다.)
Font.register({
  family: "NotoSansCJKkr",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansCJKkr-Naming.otf"), fontWeight: 400 },
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
  coverFrameOuter: { flex: 1, borderWidth: 1.4, borderColor: colors.frame, padding: 6 },
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
  coverEyebrow: { fontSize: 10, letterSpacing: 4, color: colors.muted, textTransform: "uppercase" },
  coverOriginal: { marginTop: 8, fontSize: 12, color: colors.muted, fontFamily: "NotoSansCJKkr" },
  coverName: { fontFamily: "NanumBrush", color: colors.ink, textAlign: "center" },
  coverDivider: { marginTop: 14, width: 64, borderBottomWidth: 1, borderBottomColor: colors.frame },
  coverRomanized: { marginTop: 18, fontSize: 16, letterSpacing: 2, color: colors.ink },
  seal: {
    backgroundColor: colors.seal,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 9,
    alignItems: "center",
  },
  sealChar: { color: colors.white, fontFamily: "NanumBrush", fontSize: 20, lineHeight: 1.05 },
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
  logo: { width: 64, objectFit: "contain" },
  sectionTitle: { fontSize: 11.5, fontWeight: 700, color: colors.teal, marginBottom: 6, marginTop: 14 },
  columns: { flexDirection: "row", gap: 22 },
  column: { flex: 1, minWidth: 0 },
  metaRow: { flexDirection: "row", gap: 10, marginBottom: 4 },
  metaBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 4,
    padding: 8,
    backgroundColor: colors.white,
  },
  metaLabel: { fontSize: 8, color: colors.muted, marginBottom: 2 },
  metaValue: { fontSize: 11, fontWeight: 700 },
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
  const length = Math.max(1, [...hangul.replace(/\s/g, "")].length);
  if (length <= 2) return 130;
  if (length === 3) return 112;
  if (length === 4) return 92;
  if (length <= 6) return 72;
  return 52;
}

function Section({ title, body }: { title: string; body: string }) {
  if (!body) return null;
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <MixedText text={body} />
    </View>
  );
}

// 서체 2종 공용 표지. fontFamily만 바꿔 같은 구도의 아트 페이지를 만든다.
function ArtCoverPage({
  data,
  fontFamily,
  styleLabel,
}: {
  data: HangulArtReportData;
  fontFamily: "EastSeaDokdo" | "NanumBrush";
  styleLabel: string;
}) {
  const generatedDate = data.generatedAt.slice(0, 10);
  return (
    <Page size="A4" orientation="landscape" style={styles.coverPage}>
      <View style={styles.coverFrameOuter}>
        <View style={styles.coverFrameInner}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.coverEyebrow}>Hangul Name Art</Text>
            <MixedText style={styles.coverOriginal} text={`for ${data.original.name}`} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={[
                styles.coverName,
                { fontFamily, fontSize: coverNameSize(data.name.hangul) },
              ]}
            >
              {data.name.hangul}
            </Text>
            <View style={styles.coverDivider} />
            <Text style={styles.coverRomanized}>{data.name.romanized}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.seal}>
              {[...data.name.hangul.replace(/\s/g, "")].slice(0, 3).map((char, index) => (
                <Text key={index} style={[styles.sealChar, { fontFamily }]}>
                  {char}
                </Text>
              ))}
            </View>
            <View style={{ alignItems: "center", marginTop: 14 }}>
              <Text style={styles.coverFooterBrand}>NAMING-LINK</Text>
              <Text style={styles.coverFooterMeta}>
                {data.reportId} · {generatedDate} · {styleLabel}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}

export function HangulArtReportDocument({ data }: { data: HangulArtReportData }) {
  return (
    <Document title={`Naming-Link Hangul Name Art ${data.name.hangul}`}>
      <ArtCoverPage data={data} fontFamily="EastSeaDokdo" styleLabel="Brush" />
      <ArtCoverPage data={data} fontFamily="NanumBrush" styleLabel="Soft Brush" />

      {/* 3장: 발음 안내 */}
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.pageHeaderName}>
              {data.name.hangul} · {data.name.romanized}
            </Text>
            <MixedText
              style={{ fontSize: 8.5, color: colors.muted, marginTop: 2 }}
              text={`Hangul spelling of ${data.original.name}`}
            />
          </View>
          {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
        </View>

        {/* IPA는 폰트에 확장 기호 글리프가 없어 PDF에는 싣지 않는다(웹 결과 화면에서 제공). */}
        <View style={styles.columns}>
          <View style={styles.column}>
            <View style={styles.metaRow}>
              <View style={styles.metaBox}>
                <Text style={styles.metaLabel}>Syllables</Text>
                <Text style={styles.metaValue}>
                  {data.pronunciation.syllables || data.name.romanized}
                </Text>
              </View>
              <View style={styles.metaBox}>
                <Text style={styles.metaLabel}>Read as</Text>
                <Text style={styles.metaValue}>{data.name.romanized}</Text>
              </View>
            </View>
            <Section title="Where this spelling comes from" body={data.pronunciation.basis} />
            <Section title="Why this spelling" body={data.pronunciation.reason} />
          </View>
          <View style={styles.column}>
            <Section title="How it sounds in Korea" body={data.pronunciation.culturalFit} />
            <Section title="Using your Hangul name" body={data.pronunciation.usageNote} />
            <Section title="Good to know" body={data.pronunciation.cautionNotes} />
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>NAMING-LINK · Hangul Name Art</Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `${data.reportId} · ${pageNumber}/${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  );
}

export async function renderHangulArtPdf(data: HangulArtReportData) {
  return renderToBuffer(<HangulArtReportDocument data={data} />);
}
