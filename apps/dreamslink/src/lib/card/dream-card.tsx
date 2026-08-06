import { readFileSync } from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";

import {
  meaningText,
  readingLanguage,
  symbolTerm,
  themeLabels,
  type ReadingLanguage,
} from "@/lib/dream-language";
import type { DreamOutcome } from "@/lib/engines/dream-match";
import type { Locale } from "@/lib/i18n";

/**
 * 꿈 카드 — 파는 것 중 하나이고, **PDF가 아니라 이미지 한 장**이다.
 *
 * ## 왜 이미지인가
 *
 * 꿈은 매일 꾸는 것이라 아침마다 문서를 사는 형태가 성립하지 않는다(사주는 1인 1회라 성립한다).
 * 싸고 빠르고 그대로 보낼 수 있는 것이 이 빈도에 맞는 형태다. 약관·상품정보고시가 "PDF 문서가
 * 아닙니다"를 명시하고 `verify-product-consistency`가 그 고시를 센다.
 *
 * ## 왜 `next/og`인가
 *
 * 이 저장소에는 그림을 만드는 길이 이미 둘 있는데 **둘 다 이 자리에는 못 쓴다.**
 *
 *   @react-pdf   PDF만 낸다. 태몽 리포트가 쓴다
 *   헤드리스 크롬 `scripts/render-og-images.ts`가 쓴다. **빌드 때 한 번** 도는 스크립트라
 *                가능한 것이고, 요청마다 크롬을 띄우는 것은 서버리스에서 성립하지 않는다
 *
 * `next/og`는 Next에 들어 있어 **의존성이 늘지 않고**, 라우트 안에서 바로 돈다.
 *
 * ## 글자
 *
 * 해몽 내용은 ko·en 두 벌뿐이라(`lib/dream-language.ts`) 서체도 둘이면 된다. 두 파일을 모두
 * 넘겨 두면 Satori가 글리프가 있는 쪽을 고른다 — 한글 서체가 라틴도 덮지만, 영어 카드까지
 * 한글 서체로 그리면 자간이 어색해서 갈라 둔다.
 *
 * ⚠️ 아랍어·크메르어는 이 자리에 오지 않는다. 발급 라우트가 `pdfLocale`로 en으로 돌리고,
 * 그 사실을 구매 패널이 결제 **전에** 고지한다(`dreamCard.pdfLanguageNotice`). Satori는
 * 아랍 문자의 연결·우좌 배치를 제대로 못 한다.
 */

const WIDTH = 1080;
const HEIGHT = 1350;

/** 카드에 싣는 상징 수. 넘치면 잘리는 것이 아니라 **레이아웃이 무너진다**(Satori는 넘침을 안 잘라 준다). */
const MAX_SYMBOLS = 4;
/** 적어 주신 꿈을 그대로 싣되, 이 길이를 넘으면 줄인다. */
const MAX_DREAM_CHARS = 180;

const fontPath = (file: string) => path.join(process.cwd(), "assets/fonts", file);

function loadFonts(language: ReadingLanguage) {
  const file = language === "ko" ? "NotoSansKR-400.ttf" : "NotoSans-Regular.ttf";
  return [
    {
      name: "card",
      data: readFileSync(fontPath(file)),
      weight: 400 as const,
      style: "normal" as const,
    },
  ];
}

const COPY = {
  ko: {
    heading: "꿈에서 찾은 상징",
    themes: "함께 가리키는 것",
    empty: "이 꿈에서는 사전에 있는 전통 상징을 찾지 못했습니다.",
    basis: (version: string) => `전통 해몽 상징 사전 ${version}`,
  },
  en: {
    heading: "Symbols found in your dream",
    themes: "What they point to together",
    empty: "No symbol from the traditional dictionary was found in this dream.",
    basis: (version: string) => `Traditional dream-symbol dictionary ${version}`,
  },
} as const;

function clamp(text: string, limit: number) {
  const trimmed = text.trim().replace(/\s+/g, " ");
  return trimmed.length <= limit ? trimmed : `${trimmed.slice(0, limit - 1)}…`;
}

export type DreamCardInput = {
  outcome: DreamOutcome;
  /** 이용자가 적은 꿈. 카드에 싣되 서버에는 남기지 않는다. */
  dreamText: string;
  locale: Locale;
  generatedAt: string;
  dictVersion: string;
};

export async function renderDreamCard({
  outcome,
  dreamText,
  locale,
  generatedAt,
  dictVersion,
}: DreamCardInput): Promise<Buffer> {
  const language = readingLanguage(locale);
  const t = COPY[language];
  const symbols = outcome.matched.slice(0, MAX_SYMBOLS);
  const themes = themeLabels(outcome.themes, language).slice(0, 4);

  const response = new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          padding: 72,
          // 랜딩 히어로와 같은 계열의 어두운 자두색. 카드가 화면에서 이어져 온 물건으로 보여야 한다.
          backgroundColor: "#1d0f18",
          backgroundImage:
            "linear-gradient(160deg, #3d1327 0%, #1d0f18 55%, #120a10 100%)",
          color: "#ffffff",
          fontFamily: "card",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 2, opacity: 0.7 }}>
          Dreams-Link
        </div>

        {/* 적어 주신 꿈. 카드의 주인공이라 가장 크게 둔다. */}
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 42,
            lineHeight: 1.5,
            opacity: 0.95,
          }}
        >
          {clamp(dreamText, MAX_DREAM_CHARS)}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            marginBottom: 20,
            fontSize: 26,
            letterSpacing: 1,
            opacity: 0.6,
          }}
        >
          {t.heading}
        </div>

        {symbols.length ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {symbols.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 26px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ display: "flex", fontSize: 32 }}>
                  {symbolTerm(item, language)}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 8,
                    fontSize: 25,
                    lineHeight: 1.4,
                    opacity: 0.78,
                  }}
                >
                  {clamp(meaningText(item.meaning, language), 70)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // 매칭 0건도 정상 결과다. 여기서 무언가를 채우면 그때부터 날조가 시작된다.
          <div style={{ display: "flex", fontSize: 26, lineHeight: 1.5, opacity: 0.7 }}>
            {t.empty}
          </div>
        )}

        {/* 아래를 밀어 붙인다. 상징 수가 하나든 넷이든 꼬리글이 같은 자리에 있어야 한다. */}
        <div style={{ display: "flex", flexGrow: 1 }} />

        {themes.length ? (
          <div style={{ display: "flex", fontSize: 24, opacity: 0.65 }}>
            {t.themes} · {themes.join(" · ")}
          </div>
        ) : null}
        <div style={{ display: "flex", marginTop: 14, fontSize: 20, opacity: 0.45 }}>
          {generatedAt.slice(0, 10)} · {t.basis(dictVersion)} · {outcome.engineVersion}
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT, fonts: loadFonts(language) },
  );

  return Buffer.from(await response.arrayBuffer());
}
