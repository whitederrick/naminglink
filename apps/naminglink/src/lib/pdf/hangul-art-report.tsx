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

import type { HangulArtCandidate, HangulArtReportData } from "@/lib/hangul-art-premium";
import {
  ArtPage,
  BRAND,
  FALLBACK_ART_FAMILY,
  FontCreditsBlock,
} from "@/lib/pdf/art-shared";
import { MixedText } from "@/lib/pdf/report-fonts";

// 발음 표기 아트 PDF (2026-07-23 확정 구성):
//   선택 서체 N개 × 표기 후보(최대 3) 아트 페이지 → 후보별 발음 안내 페이지.
// 가로(landscape), 안내는 2단. 서체는 저장소에서 동적 로드(families)한다.
Font.register({
  family: "NotoSansKR",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-400.ttf"), fontWeight: 400 },
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-700.ttf"), fontWeight: 700 },
  ],
});
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
  paper: "#fbfaf6",
  line: "#dedbd2",
  teal: "#007f78",
  white: "#ffffff",
};

const styles = StyleSheet.create({
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

function Section({ title, body }: { title: string; body: string }) {
  if (!body) return null;
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <MixedText text={body} />
    </View>
  );
}

function GuidePage({
  data,
  candidate,
  index,
  isLast,
}: {
  data: HangulArtReportData;
  candidate: HangulArtCandidate;
  index: number;
  isLast: boolean;
}) {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.pageHeaderName}>
            {candidate.name.hangul} · {candidate.name.romanized}
            {data.candidates.length > 1 ? `  (${index + 1}/${data.candidates.length})` : ""}
          </Text>
          <MixedText
            style={{ fontSize: 8.5, color: colors.muted, marginTop: 2 }}
            text={`Hangul spelling of ${data.original.name}`}
          />
        </View>
        {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
      </View>

      <View style={styles.columns}>
        <View style={styles.column}>
          <View style={styles.metaRow}>
            <View style={styles.metaBox}>
              <Text style={styles.metaLabel}>Syllables</Text>
              {/* 발음 표기라 로마자에 성조·발음부호가 들어온다. 두부 방지로 폰트를 라우팅한다. */}
              <MixedText
                style={styles.metaValue}
                text={candidate.pronunciation.syllables || candidate.name.romanized}
              />
            </View>
            <View style={styles.metaBox}>
              <Text style={styles.metaLabel}>Read as</Text>
              <MixedText style={styles.metaValue} text={candidate.name.romanized} />
            </View>
          </View>
          <Section title="Where this spelling comes from" body={candidate.pronunciation.basis} />
          <Section title="Why this spelling" body={candidate.pronunciation.reason} />
        </View>
        <View style={styles.column}>
          <Section title="How it sounds in Korea" body={candidate.pronunciation.culturalFit} />
          <Section title="Using your Hangul name" body={candidate.pronunciation.usageNote} />
          <Section title="Good to know" body={candidate.pronunciation.cautionNotes} />
          {isLast ? <FontCreditsBlock fonts={data.fonts} /> : null}
        </View>
      </View>

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{BRAND} · Hangul Name Art</Text>
        <Text
          style={styles.footerText}
          render={({ pageNumber, totalPages }) => `${data.reportId} · ${pageNumber}/${totalPages}`}
        />
      </View>
    </Page>
  );
}

export function HangulArtReportDocument({
  data,
  families,
  backdropImage,
}: {
  data: HangulArtReportData;
  families: Record<string, string>;
  backdropImage?: string | null;
}) {
  const generatedDate = data.generatedAt.slice(0, 10);
  const fonts = data.fonts.length > 0 ? data.fonts : [null];
  return (
    <Document title={`Naming-Link Hangul Name Art ${data.candidates[0]?.name.hangul ?? ""}`}>
      {fonts.map((font, fontIndex) =>
        data.candidates.map((candidate, candidateIndex) => (
          <ArtPage
            key={`${fontIndex}-${candidateIndex}`}
            eyebrow="Hangul Name Art"
            forName={data.original.name}
            hangul={candidate.name.hangul}
            romanized={candidate.name.romanized}
            fontFamily={font ? families[font.code] ?? FALLBACK_ART_FAMILY : FALLBACK_ART_FAMILY}
            reportId={data.reportId}
            generatedDate={generatedDate}
            font={font}
            backdropImage={backdropImage}
          />
        )),
      )}
      {data.candidates.map((candidate, index) => (
        <GuidePage
          key={index}
          data={data}
          candidate={candidate}
          index={index}
          isLast={index === data.candidates.length - 1}
        />
      ))}
    </Document>
  );
}

export async function renderHangulArtPdf(
  data: HangulArtReportData,
  families: Record<string, string> = {},
  backdropImage?: string | null,
) {
  return renderToBuffer(
    <HangulArtReportDocument data={data} families={families} backdropImage={backdropImage} />,
  );
}
