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
  FontCreditsFooter,
  fontCreditsReserve,
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

/**
 * 해설이 길면 **본문을 조인다.**
 *
 * 지면은 고정인데 모델이 쓰는 분량은 주문마다 다르다. 그대로 흘려보내면 한 장을 조금 넘길 때
 * 두 줄짜리 지면이 한 장 더 붙는다 — 유료 문서에서 가장 볼품없는 모습이다(2026-08-01 실측).
 * 잘라내면 산 것을 덜 주는 셈이니, **글자를 줄여 담는다**. 보고서 조판에서 흔한 방식이다.
 *
 * 기준은 글자 수인데 **문자 체계로 가중치를 준다.** 한자·가나·한글은 한 글자가 라틴의 두 배
 * 가까운 폭을 차지해서, 같은 글자 수라도 지면을 훨씬 많이 먹는다. 실제로 같은 케이스에서
 * 라틴 로케일은 한 장에 들어가고 CJK 로케일만 넘쳤다.
 *
 * 단계는 실측으로 잡았다 — 로케일 23개 × 케이스 5개를 돌려 꼬리 지면이 사라질 때까지 좁혔다.
 * 서식을 바꾸면(단 수·여백·서체) 이 숫자도 다시 잡아야 한다. `render-pdf-scripts.tsx`와
 * `audit-pdf-layout.py`가 그 확인을 대신해 준다.
 */
/** 글자가 차지하는 폭. 한글·한자·가나는 라틴의 두 배 남짓이다. */
function textWeight(value: string) {
  let weight = 0;
  for (const character of value) {
    weight += /[가-힣㐀-䶿一-鿿ぁ-ゟ゠-ヿ]/.test(character) ? 2.1 : 1;
  }
  return weight;
}

function bodyDensity(sections: Array<{ body: string }>) {
  let weight = 0;
  for (const section of sections) {
    weight += textWeight(section.body);
  }
  if (weight <= 1000) return { fontSize: 10.5, lineHeight: 1.65 };
  if (weight <= 1500) return { fontSize: 9.6, lineHeight: 1.5 };
  if (weight <= 2000) return { fontSize: 8.8, lineHeight: 1.42 };
  if (weight <= 2800) return { fontSize: 8.0, lineHeight: 1.34 };
  return { fontSize: 7.4, lineHeight: 1.28 };
}

/**
 * 다섯 절을 두 단에 **길이로 나눈다.**
 *
 * 예전에는 두 절·세 절로 고정해 두었다. 그러면 해설이 길어질 때 오른쪽 단만 넘쳐서, 왼쪽이
 * 절반 비어 있는데도 두 줄짜리 지면이 한 장 더 생겼다(2026-08-01 실측). 모델이 쓰는 분량은
 * 절마다 다르므로 **자리를 미리 정할 수 없다** — 글자 수로 반씩 갈라야 한다.
 *
 * 왼쪽 단에는 음절 상자가 먼저 들어가므로 그만큼(대략 두 줄) 왼쪽을 덜 채운다.
 */
function splitColumns(sections: Array<{ title: string; body: string }>) {
  const filled = sections.filter((section) => section.body);
  if (filled.length <= 1) return [filled, []] as const;

  // 폭이 아니라 **차지하는 높이**로 견줘야 하므로 문자 체계 가중치를 쓴다(`textWeight`).
  // 왼쪽 단은 음절·발음 상자를 먼저 이고 시작하니 그만큼 미리 채워진 것으로 놓는다.
  const META_BOX = 240;
  const weights = filled.map((section) => textWeight(section.body));

  // 자를 자리를 하나씩 넣어 보고 **양쪽 차이가 가장 작은** 곳을 고른다. 앞에서부터 채우다
  // 기준을 넘으면 멈추는 방식은 마지막 한 절이 통째로 한쪽에 얹혀 그 단만 넘치게 만든다
  // (실제로 왼쪽이 세 절을 받아 넘치고 오른쪽은 비어 있었다).
  let best = 1;
  let bestGap = Infinity;
  for (let cut = 1; cut < filled.length; cut += 1) {
    const leftWeight =
      META_BOX + weights.slice(0, cut).reduce((sum, weight) => sum + weight, 0);
    const rightWeight = weights.slice(cut).reduce((sum, weight) => sum + weight, 0);
    const gap = Math.abs(leftWeight - rightWeight);
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
 * **`wrap={false}`를 걸지 않는다.** 제목만 앞 장에 남는 것을 막으려고 그렇게 해 두었는데,
 * 해설이 길면(모델은 필드당 2,000자까지 쓸 수 있다) 덩어리가 한 장보다 커진다. 그러면
 * @react-pdf는 쪼개는 대신 **지면 밖으로 흘려보내고** 빈 장까지 만든다 — 오류는 나지 않는다
 * (2026-08-01 상한값 케이스에서 실측).
 *
 * 대신 `minPresenceAhead`로 "뒤에 이만큼 자리가 없으면 아예 다음 장에서 시작하라"고 한다.
 * 제목만 남는 일도 막고, 길어지면 쪼개진다.
 */
function Section({
  title,
  body,
  density,
}: {
  title: string;
  body: string;
  /** 본문에만 건다. **페이지에 걸면 머리글 줄 간격까지 좁아져 제목이 겹친다**(실측). */
  density?: { fontSize: number; lineHeight: number };
}) {
  if (!body) return null;
  return (
    <View minPresenceAhead={40}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <MixedText style={density} text={body} />
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
  // 서체 표기는 흐름 밖에 둔다. 안에 두면 본문이 길 때 표기만 다음 장으로 밀려 빈 지면이
  // 한 장 생긴다(2026-08-01 실측). 대신 그만큼 아래 여백을 늘려 본문과 겹치지 않게 한다.
  const creditsReserve = isLast ? fontCreditsReserve(data.fonts) : 0;
  const sections = [
    { title: "Where this spelling comes from", body: candidate.pronunciation.basis },
    { title: "Why this spelling", body: candidate.pronunciation.reason },
    { title: "How it sounds in Korea", body: candidate.pronunciation.culturalFit },
    { title: "Using your Hangul name", body: candidate.pronunciation.usageNote },
    { title: "Good to know", body: candidate.pronunciation.cautionNotes },
  ];
  const [left, right] = splitColumns(sections);
  const density = bodyDensity(sections);
  return (
    <Page
      size="A4"
      orientation="landscape"
      style={[styles.page, { paddingBottom: 52 + creditsReserve }]}
    >
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

      {isLast ? <FontCreditsFooter fonts={data.fonts} bottom={50} /> : null}

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
