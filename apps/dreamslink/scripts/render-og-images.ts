// 공유 썸네일(og:image)을 **23개 로케일마다 한 장씩** 만든다.
// 실행: apps/dreamslink 에서
//   ../../node_modules/.bin/tsx scripts/render-og-images.ts        (전부)
//   ../../node_modules/.bin/tsx scripts/render-og-images.ts ko en  (일부만)
//
// 카카오톡·페이스북·슬랙은 `og:image`로 미리보기를 만든다. 그림이 없으면 글자만 있는 작은
// 카드가 되고, `twitter:card`를 `summary_large_image`로 두고도 이미지를 주지 않으면 큰 카드로
// 뜨지 않는다(naminglink에서 2026-07-30 카카오톡으로 확인했다).
//
// 홍보 링크가 각 나라 사람에게 그 나라 말로 보이려면 이미지 자체가 로케일마다 달라야 한다 —
// 메타 태그의 title·description은 이미 로케일별로 나가지만, 그림에 박힌 글자는 하나뿐이 된다.
//
// **왜 헤드리스 Chrome인가.** 이 저장소의 Pillow는 raqm(복합 문자 정형) 없이 빌드돼 있어
// 아랍어 낱글자가 이어지지 않고 크메르·데바나가리 모음 기호가 제자리를 못 찾는다. 브라우저는
// 그 정형을 원래 하는 일로 하므로 23개 문자 체계를 한 번에 해결하고, 아랍어의 우→좌 배치도
// `dir="rtl"` 하나로 끝난다. naminglink `scripts/render-og-images.ts`와 같은 방식이다.
//
// **문구를 여기서 새로 짓지 않는다.** 랜딩 사전의 `brand`·`landing.title`·`landing.privacyTitle`을
// 그대로 가져온다. 썸네일을 보고 들어온 사람이 첫 화면에서 같은 문장을 만나야 하고, 사전이
// 고쳐지면 이미지도 함께 고쳐지는 편이 옳다.
import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { getDictionary, supportedLocales, type Locale } from "../src/lib/i18n";

const APP_ROOT = path.resolve(__dirname, "..");
const IMAGES = path.join(APP_ROOT, "public", "images");
const FONTS = path.join(APP_ROOT, "assets", "fonts");
const WORK = path.join(APP_ROOT, ".og-build");

const WIDTH = 1200;
const HEIGHT = 630;

// 크롬은 어디에 깔렸는지 환경마다 다르다. 없으면 실행을 멈추고 어디를 봤는지 알려 준다.
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean) as string[];

function findChrome() {
  const found = CHROME_CANDIDATES.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error(
      `크롬을 찾지 못했습니다. CHROME_PATH로 지정하세요.\n찾아본 곳:\n  ${CHROME_CANDIDATES.join("\n  ")}`,
    );
  }
  return found;
}

/**
 * 로케일별 글자꼴. **저장소에 이미 있는 OFL 폰트만 쓴다**(`assets/fonts/LICENSES.md`).
 * 시스템 폰트를 구우면 산출물에 라이선스가 불분명한 글자꼴이 섞인다.
 *
 * 여기에 없는 로케일은 라틴·키릴을 덮는 NotoSans를 쓴다 — 유럽어·베트남어·터키어·폴란드어와
 * 러시아어·카자흐어·몽골어·우즈베크어(키릴)가 여기에 해당한다.
 */
const SCRIPT_FONTS: Partial<Record<Locale, string>> = {
  ko: "NotoSansKR-700.ttf",
  ja: "NotoSansKR-700.ttf",
  zh: "NotoSansKR-700.ttf",
  ar: "NotoSansArabic-Regular.ttf",
  th: "NotoSansThai-Regular.ttf",
  km: "NotoSansKhmer-Regular.ttf",
  hi: "NotoSansDevanagari-Regular.ttf",
};

function fontUrl(file: string) {
  return `file:///${path.join(FONTS, file).replace(/\\/g, "/")}`;
}

function dataUri(file: string, mime: string) {
  return `data:${mime};base64,${readFileSync(file).toString("base64")}`;
}

const heroBackground = dataUri(path.join(IMAGES, "landing-hero.png"), "image/png");

/**
 * 브랜드 로고. **헤드리스 Chrome이 읽어야 하므로 파일을 base64로 심는다** — `file://` 경로는
 * 렌더 시점의 작업 디렉터리에 따라 어긋난다.
 *
 * 예전에는 맞물린 두 고리를 인라인 SVG로 그렸다. `components/BrandMark.tsx`가 실제 로고
 * 이미지로 바뀌었으므로 여기도 같은 파일을 쓴다 — **썸네일과 첫 화면의 표식이 달라선 안 된다.**
 */
// ⚠️ 복제 원본의 파일명이 그대로 남아 있었다(2026-08-06). 그 파일은 이 앱의 `public/`에
// 없어서, 이 스크립트를 돌리면 `dataUri`가 읽다가 죽는다. `BrandMark.tsx`도 같은 이름을
// 가리키고 있었고 그쪽은 조용히 404였다 — **이미지 경로는 tsc도 검사기도 보지 못한다.**
const brandLogo = dataUri(path.join(IMAGES, "dreamslink-circle-logo-256.png"), "image/png");
const brandSvg = `<img src="${brandLogo}" alt="" />`;

function buildHtml(locale: Locale) {
  const dictionary = getDictionary(locale);
  const { landing } = dictionary;
  const rtl = locale === "ar";
  const scriptFont = SCRIPT_FONTS[locale];

  // 라틴 폰트를 먼저 두고 문자 체계 폰트를 뒤에 둔다. 브랜드명이 라틴인 로케일이 대부분이라,
  // 순서가 반대면 CJK 폰트의 라틴 자형으로 그려져 어색해진다.
  const families = ["NotoSansLatin", scriptFont ? "NotoSansSelected" : null]
    .filter(Boolean)
    .map((name) => `"${name}"`)
    .join(", ");

  // 사전의 `\n`을 그대로 줄로 삼는다. 랜딩 화면도 같은 자리에서 줄을 바꾼다.
  const heroLines = landing.title
    .split("\n")
    .map((line) => `<span>${escapeHtml(line)}</span>`)
    .join("");

  return `<!doctype html>
<html lang="${locale}" dir="${rtl ? "rtl" : "ltr"}">
<meta charset="utf-8">
<style>
  @font-face {
    font-family: "NotoSansLatin";
    src: url("${fontUrl("NotoSans-Regular.ttf")}") format("truetype");
  }
  ${
    scriptFont
      ? `@font-face {
    font-family: "NotoSansSelected";
    src: url("${fontUrl(scriptFont)}") format("truetype");
  }`
      : ""
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden;
    font-family: ${families}, sans-serif;
    /* 배경 위에 왼쪽(RTL이면 오른쪽)만 어둡게 깐다. 랜딩 히어로의 그라데이션과 같은 방향이다. */
    background:
      linear-gradient(${rtl ? "270deg" : "90deg"},
        rgba(18,12,15,0.92) 0%, rgba(18,12,15,0.88) 42%, rgba(18,12,15,0.22) 74%, rgba(18,12,15,0.05) 100%),
      url("${heroBackground}") center / cover no-repeat;
    color: #fffdfa;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 76px;
    /* flex-end를 쓰면 안 된다. flex 정렬은 이미 dir를 따라 뒤집히므로 RTL에서 flex-end는
       왼쪽을 뜻한다. 아랍어판에서 글자 덩어리가 어두운 막의 반대편(밝은 쪽)으로 가서 대비가
       무너진다. flex-start와 start는 LTR에서 왼쪽, RTL에서 오른쪽이 되어 두 경우 모두 막이
       깔린 쪽에 글자가 앉는다.
       (이 주석에 백틱을 쓰지 말 것 — 이 CSS는 JS 템플릿 리터럴 안에 있어 문자열이 끊긴다.) */
    align-items: flex-start;
    text-align: start;
  }
  /* 로고가 그 자체로 완결된 원형 배지라 뒤에 상자를 두지 않는다 — 예전 인라인 SVG는
     테두리와 배경이 있어야 형태가 잡혔지만, 지금은 사각 틀이 이중으로 겹쳐 보인다. */
  .seal { width: 116px; height: 116px; margin-bottom: 26px;
          display: flex; align-items: center; justify-content: center;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.45)); }
  .seal svg, .seal img { width: 116px; height: 116px; border-radius: 50%; }
  .wordmark { font-size: 74px; font-weight: 700; letter-spacing: -0.015em; line-height: 1; }
  .rule { width: 92px; height: 3px; background: #a99bd6; margin: 22px 0 20px; }
  .hero { display: flex; flex-direction: column; gap: 6px;
          font-size: 30px; line-height: 1.32; color: #ece4d8; max-width: 660px; }
  .badge { margin-top: 22px; font-size: 21px; letter-spacing: 0.04em; color: #b0a698;
           max-width: 660px; }
</style>
<div class="seal">${brandSvg}</div>
<div class="wordmark">${escapeHtml(dictionary.brand)}</div>
<div class="rule"></div>
<div class="hero">${heroLines}</div>
<div class="badge">${escapeHtml(landing.privacyTitle)}</div>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function main() {
  const chrome = findChrome();
  mkdirSync(WORK, { recursive: true });

  // 인자로 로케일을 주면 그것만 다시 만든다(문구 한 줄 고쳤을 때 23장을 다 굽지 않기 위해).
  const requested = process.argv.slice(2).filter((value) => !value.startsWith("-"));
  const targets = requested.length
    ? (requested.filter((value) =>
        (supportedLocales as readonly string[]).includes(value),
      ) as Locale[])
    : [...supportedLocales];

  if (requested.length && targets.length !== requested.length) {
    const unknown = requested.filter((value) => !(targets as string[]).includes(value));
    throw new Error(`알 수 없는 로케일: ${unknown.join(", ")}`);
  }

  let total = 0;
  for (const locale of targets) {
    const htmlPath = path.join(WORK, `og-${locale}.html`);
    const outPath = path.join(IMAGES, "og", `og-cover-${locale}.png`);
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(htmlPath, buildHtml(locale), "utf8");

    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        `--window-size=${WIDTH},${HEIGHT}`,
        `--screenshot=${outPath}`,
        // 폰트·배경을 file:// 로 읽는다. 이 플래그가 없으면 @font-face가 조용히 실패해
        // 글자가 시스템 기본 글꼴로 그려진다(문자 체계에 따라 두부 문자가 된다).
        "--allow-file-access-from-files",
        `file:///${htmlPath.replace(/\\/g, "/")}`,
      ],
      { stdio: "pipe" },
    );

    // **PNG로 두지 않는다.** 배경이 사진이라 PNG는 장당 800KB가 넘고 23장이면 19MB가
    // 저장소에 들어온다. 같은 그림이 JPEG로는 100KB대다. 카카오톡·페이스북 모두 JPEG를 읽고,
    // 큰 파일은 미리보기를 아예 건너뛰기도 한다.
    //
    // 크롬은 PNG로만 찍으므로 변환이 한 단계 더 필요하다. 조판은 이미 끝난 뒤라 여기서
    // Pillow를 써도 문자 정형 문제가 생기지 않는다(그 때문에 크롬을 쓴 것이다).
    const jpegPath = outPath.replace(/\.png$/, ".jpg");
    execFileSync(
      "python",
      [
        "-c",
        [
          "import sys",
          "from PIL import Image",
          "im = Image.open(sys.argv[1]).convert('RGB')",
          "im.save(sys.argv[2], 'JPEG', quality=86, optimize=True, progressive=True)",
        ].join("\n"),
        outPath,
        jpegPath,
      ],
      { stdio: "pipe" },
    );
    rmSync(outPath);

    const size = statSync(jpegPath).size;
    total += size;
    console.log(
      `  ${locale.padEnd(4)} ${path.relative(APP_ROOT, jpegPath)}  ${size.toLocaleString()} bytes`,
    );
  }

  rmSync(WORK, { recursive: true, force: true });
  console.log(`\n${targets.length}장 · 합계 ${(total / 1024 / 1024).toFixed(2)} MB`);
}

main();
