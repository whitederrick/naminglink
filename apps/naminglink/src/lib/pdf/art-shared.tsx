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
    // 두 열일 때 오른쪽 열이 먼저 오도록 뒤집는다(낙관은 오른쪽에서 왼쪽으로 읽는다).
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sealColumn: { alignItems: "center", marginHorizontal: 1 },
  sealChar: { color: colors.white, lineHeight: 1.05 },
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

/**
 * 낙관에 새길 글자와 배치.
 *
 * 예전에는 `.slice(0, 3)`으로 앞 세 글자만 찍었다. 한국 이름이 대개 세 글자라 그때는 이름 전체가
 * 들어갔지만, 음차는 사정이 다르다 — "다니엘 브룩스"는 "다니엘"이 되고, 순서만 바뀌었어도
 * "브룩스"가 됐다. **이름이 아니라 조각이 찍히는 것이고, 우연히 맞을 때만 맞았다.**
 *
 * 그래서 자르지 않고 전부 넣는다. 대신 길어지면 전통 낙관처럼 **세로 두 열**로 나누고(오른쪽
 * 열이 먼저다) 글자 크기를 줄여 상자 안에 들어오게 한다.
 */
export function sealLayout(hangul: string) {
  const characters = [...hangul.replace(/\s/g, "")];
  const count = characters.length;
  if (count === 0) return { columns: [] as string[][], fontSize: 20 };

  // 네 글자까지는 한 열로 세운다(한국 이름 낙관의 기본 모양). 그 이상은 열을 늘리되 **한 열에
  // 다섯 글자까지만** 담는다. 열을 둘로 고정하면 이름이 길어질수록 낙관이 세로로 길쭉한 막대가
  // 되어 도장으로 보이지 않는다 — 스무 글자면 한 열에 열 자가 쌓인다.
  const MAX_PER_COLUMN = 5;
  const columnCount =
    count <= 4 ? 1 : Math.max(2, Math.ceil(count / MAX_PER_COLUMN));
  const perColumn = Math.ceil(count / columnCount);

  const columns: string[][] = [];
  for (let index = 0; index < count; index += perColumn) {
    columns.push(characters.slice(index, index + perColumn));
  }

  // 크기는 가장 긴 열을 기준으로 정한다. 열이 늘어도 높이는 그 열이 정하기 때문이다.
  const tallest = Math.max(...columns.map((column) => column.length));
  const fontSize =
    columnCount === 1 && tallest <= 3
      ? 20
      : tallest <= 3
        ? 17
        : tallest === 4
          ? 14
          : 11;
  return { columns, fontSize };
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

/**
 * 서체 표기를 **흐름 밖으로** 빼서 지면 아래에 붙인다.
 *
 * 흐름 안에 두면(`FontCreditsBlock`) 본문이 지면을 거의 채웠을 때 이 블록만 다음 장으로
 * 밀려, **표기 두 줄만 있는 빈 지면 한 장**이 생긴다. 문장이 긴 언어 열한 개에서 실제로
 * 그랬다(2026-08-01 지면 전수 검사). 유료 문서에서 빈 지면은 그 자체로 값이 깎인다.
 *
 * 절대 위치라 자리를 차지하지 않으므로 **부르는 쪽이 그만큼 `paddingBottom`을 늘려야 한다** —
 * `fontCreditsReserve()`가 그 값을 준다. 둘은 한 세트다.
 *
 * **`fixed`가 반드시 있어야 한다.** 절대 위치만으로는 부족하다 — @react-pdf는 `fixed`가 아닌
 * 요소를 흐름 기준으로 장에 배정하므로, 남은 자리가 없으면 절대 위치라도 다음 장으로 넘어간다
 * (실제로 그렇게 빈 지면이 남았다). 꼬리글이 같은 방식으로 붙는다.
 */
export function FontCreditsFooter({
  fonts,
  bottom,
}: {
  fonts: ReportFontSnapshot[];
  /** 꼬리글 위에 놓이도록 페이지 아래에서 띄울 거리. */
  bottom: number;
}) {
  if (fonts.length === 0) return null;
  return (
    <View
      style={[styles.creditsBlock, { position: "absolute", left: 46, right: 46, bottom }]}
      fixed
    >
      <Text style={styles.creditsTitle}>Typefaces in this document</Text>
      {fonts.map((font) => (
        <Text key={font.code} style={styles.creditsLine}>
          {fontCreditLine(font)}
        </Text>
      ))}
    </View>
  );
}

/** `FontCreditsFooter`가 차지할 높이. 제목 한 줄 + 서체당 한 줄 + 여백. */
export function fontCreditsReserve(fonts: ReportFontSnapshot[]) {
  if (fonts.length === 0) return 0;
  return 18 + fonts.length * 11;
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
  const seal = sealLayout(hangul);
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
            {/* 로마자 발음에 성조·발음부호(라틴 확장)가 있어도 두부가 되지 않도록 폰트를 라우팅한다. */}
            <MixedText style={styles.romanized} text={romanized} />
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.seal}>
              {seal.columns.map((column, columnIndex) => (
                <View key={columnIndex} style={styles.sealColumn}>
                  {column.map((char, index) => (
                    <Text
                      key={index}
                      style={[
                        styles.sealChar,
                        { fontFamily, fontSize: seal.fontSize },
                      ]}
                    >
                      {char}
                    </Text>
                  ))}
                </View>
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
