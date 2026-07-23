import path from "node:path";
import React from "react";
import { Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import type { ReportFontSnapshot } from "@/lib/report-fonts-registry";
import { HanjiBackdrop } from "@/lib/pdf/report-decor";
import { MixedText } from "@/lib/pdf/report-fonts";

// 이름 아트 페이지 공용 컴포넌트(세 상품 공통).
// 사용자가 고른 저장소 서체(family)를 받아 렌더하고, 페이지 하단에 서체명·저작권·출처를
// 표기한다(모든 문서에 폰트명과 출처를 밝히라는 운영 방침 + 공공누리 출처표시 의무 충족).
Font.register({
  family: "NotoSansKR",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-400.ttf"), fontWeight: 400 },
    { src: path.join(process.cwd(), "assets/fonts/NotoSansKR-700.ttf"), fontWeight: 700 },
  ],
});
// 서체 미지정 구주문 폴백.
Font.register({
  family: "EastSeaDokdo",
  fonts: [
    { src: path.join(process.cwd(), "assets/fonts/EastSeaDokdo-Regular.ttf"), fontWeight: 400 },
  ],
});

export const FALLBACK_ART_FAMILY = "EastSeaDokdo";
export const BRAND = "Naming-Link (Global Naming Studio)";

const colors = {
  ink: "#221c14",
  muted: "#6d6457",
  hanji: "#f6efdf",
  hanjiDeep: "#efe4cb",
  frame: "#9d7f4e",
  frameSoft: "#c9b184",
  seal: "#a8372b",
  white: "#ffffff",
  teal: "#007f78",
  line: "#dedbd2",
};

const styles = StyleSheet.create({
  coverPage: {
    backgroundColor: colors.hanji,
    padding: 34,
    fontFamily: "NotoSansKR",
    color: colors.ink,
  },
  frameOuter: { flex: 1, borderWidth: 1.4, borderColor: colors.frame, padding: 6 },
  frameInner: {
    flex: 1,
    borderWidth: 0.6,
    borderColor: colors.frameSoft,
    paddingHorizontal: 40,
    paddingVertical: 28,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.hanjiDeep,
  },
  eyebrow: { fontSize: 10, letterSpacing: 4, color: colors.muted, textTransform: "uppercase" },
  original: { marginTop: 8, fontSize: 12, color: colors.muted },
  name: { color: colors.ink, textAlign: "center" },
  divider: { marginTop: 12, width: 64, borderBottomWidth: 1, borderBottomColor: colors.frame },
  romanized: { marginTop: 14, fontSize: 16, letterSpacing: 2, color: colors.ink },
  seal: {
    backgroundColor: colors.seal,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 9,
    alignItems: "center",
  },
  sealChar: { color: colors.white, fontSize: 20, lineHeight: 1.05 },
  brand: { fontSize: 9, letterSpacing: 1.2, color: colors.muted },
  meta: { marginTop: 4, fontSize: 8, color: colors.muted },
  credit: { marginTop: 4, fontSize: 6.5, color: colors.muted },
  creditsTitle: { fontSize: 8, fontWeight: 700, color: colors.muted, marginBottom: 3 },
  creditsLine: { fontSize: 7, color: colors.muted, lineHeight: 1.5 },
  creditsBlock: {
    marginTop: 16,
    borderTopWidth: 0.6,
    borderTopColor: colors.line,
    paddingTop: 6,
  },
});

// 배경 레이어: 관리자 등록 이미지가 있으면 그 이미지를 전면에 깔고,
// 없으면 내장 벡터 배경(생성 월 기준 계절 자동)을 그린다.
export function ArtBackdrop({ image }: { image?: string | null }) {
  if (!image) return <HanjiBackdrop />;
  return (
    <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} fixed>
      {/* react-pdf Image에는 alt 개념이 없다(a11y 규칙은 웹 img 대상). */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </View>
  );
}

export function artNameSize(hangul: string) {
  const length = Math.max(1, [...hangul.replace(/\s/g, "")].length);
  if (length <= 2) return 172;
  if (length === 3) return 150;
  if (length === 4) return 122;
  if (length <= 6) return 94;
  return 62;
}

export function fontCreditLine(font: ReportFontSnapshot) {
  return `${font.name_en} (${font.name_ko}) © ${font.copyright_holder} · ${font.license_type} · ${font.source_url}`;
}

// 문서 마지막 내용 페이지 하단에 붙이는 서체 표기 블록.
export function FontCreditsBlock({ fonts }: { fonts: ReportFontSnapshot[] }) {
  if (fonts.length === 0) return null;
  return (
    <View style={styles.creditsBlock} wrap={false}>
      <Text style={styles.creditsTitle}>Typefaces in this document</Text>
      {fonts.map((font) => (
        <Text key={font.code} style={styles.creditsLine}>
          {fontCreditLine(font)}
        </Text>
      ))}
    </View>
  );
}

export function ArtPage({
  eyebrow,
  forName,
  hangul,
  romanized,
  fontFamily,
  reportId,
  generatedDate,
  font,
  backdropImage,
}: {
  eyebrow: string;
  forName: string;
  hangul: string;
  romanized: string;
  fontFamily: string;
  reportId: string;
  generatedDate: string;
  font: ReportFontSnapshot | null;
  backdropImage?: string | null;
}) {
  return (
    <Page size="A4" orientation="landscape" style={styles.coverPage}>
      <View style={styles.frameOuter}>
        <View style={styles.frameInner}>
          <ArtBackdrop image={backdropImage} />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.eyebrow}>{eyebrow}</Text>
            <MixedText style={styles.original} text={`for ${forName}`} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.name, { fontFamily, fontSize: artNameSize(hangul) }]}>
              {hangul}
            </Text>
            <View style={styles.divider} />
            <Text style={styles.romanized}>{romanized}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.seal}>
              {[...hangul.replace(/\s/g, "")].slice(0, 3).map((char, index) => (
                <Text key={index} style={[styles.sealChar, { fontFamily }]}>
                  {char}
                </Text>
              ))}
            </View>
            <View style={{ alignItems: "center", marginTop: 12 }}>
              <Text style={styles.brand}>{BRAND}</Text>
              <Text style={styles.meta}>
                {reportId} · {generatedDate}
                {font ? ` · ${font.name_en}` : ""}
              </Text>
              {font ? <Text style={styles.credit}>{fontCreditLine(font)}</Text> : null}
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}
