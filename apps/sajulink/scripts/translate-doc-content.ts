// 편집 문서(안내·소개·공지·문의)를 다른 언어로 옮겨 `src/lib/doc-content/<locale>.ts`를 만든다.
//
// **왜 스크립트인가.** 손으로 채우면 절이 빠지거나 배열 길이가 달라진다. 여기서는 en의
// **구조를 그대로 복사하고 잎(문자열)만 갈아 끼운다** — 키·중첩·배열 길이가 어긋날 자리가
// 아예 없다. 사주링크 `translate-i18n.ts`와 같은 방식이고, 검증 규칙도 그대로 가져왔다.
//
// **en 한 벌만 넘긴다.** 처음에는 뜻의 정확성을 위해 ko를 함께 보냈는데, 모델이 그 한국어에서
// 글자를 그대로 베꼈다(링크 라벨이 「한글 발음 표기」로 나오는 식으로 17개 잎이 걸렸다).
// 용어의 정확성은 프롬프트의 GLOSSARY가 맡는다 — 무엇을 어떻게 옮길지 데이터로 준다.
//
// 실행: apps/sajulink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/translate-doc-content.ts ja
//   ... scripts/translate-doc-content.ts ja zh de           (여러 개)
//   ... scripts/translate-doc-content.ts --all               (남은 로케일 전부, 하나씩)
//
// 만든 뒤에는 `node ../../scripts/verify-doc-locales.mjs`를 돌린다.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { KO_DOCS, KO_NOTICES } from "../src/lib/doc-content/ko";

/**
 * 영어판을 **없을 수도 있는 것으로** 읽는다.
 *
 * 정적 `import` 로 두었더니 **새 앱에서 이 스크립트가 아예 뜨지 않았다** — `--fill-en` 은 en 을
 * 만들라고 있는 명령인데, 그것을 돌리려면 en 이 이미 있어야 하는 꼴이었다(2026-08-09 사주·드림
 * 이관에서 걸렸다. 인연링크는 전날 만들어 둔 파일이 있어 드러나지 않았다).
 *
 * 없으면 빈 벌로 시작한다. `--fill-en` 이 한국어 원문에서 채우고, 그다음부터 en 이 본이 된다.
 */
function loadEnglish(): { EN_DOCS: Record<string, unknown>; EN_NOTICES: NoticeBundle } {
  const file = path.join(process.cwd(), "src", "lib", "doc-content", "en.ts");
  if (!existsSync(file)) {
    // 공지 껍데기는 한국어 원문의 꼴을 그대로 쓰되 값은 비운다. `--fill-en` 이 채운다.
    return { EN_DOCS: {}, EN_NOTICES: emptyNoticeBundle() };
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const loaded = require("../src/lib/doc-content/en") as {
    EN_DOCS: Record<string, unknown>;
    EN_NOTICES: NoticeBundle;
  };
  return loaded;
}

type NoticeBundle = {
  kindLabels: Record<string, string>;
  intro: string;
  empty: { title: string; body: string };
  effective: string;
  pager: { label: string; newer: string; older: string };
  items: Record<string, { title: string; body: string[] }>;
};

/** 한국어 공지 껍데기와 **같은 열쇠**를 갖되 값은 빈 벌. 열쇠가 빠지면 채울 자리도 없어진다. */
function emptyNoticeBundle(): NoticeBundle {
  const blank = (value: unknown): unknown => {
    if (typeof value === "string") return "";
    if (Array.isArray(value)) return [];
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, blank(v)]));
    }
    return value;
  };
  return { ...(blank(KO_NOTICES) as NoticeBundle), items: {} };
}

const { EN_DOCS, EN_NOTICES } = loadEnglish();
import { localeCodes } from "../src/lib/locale-codes";
import { localeLabels } from "../src/lib/i18n";

const DIR = path.join(process.cwd(), "src", "lib", "doc-content");

/**
 * `.env.local`을 함수 밖에서 읽지 않는다 — 키 없는 컴퓨터에서 `--help`조차 못 돌게 된다.
 *
 * **형제 앱의 파일도 본다.** 이 열쇠는 계정 하나짜리라 앱마다 둘 이유가 없는데, 지금은
 * naminglink 에만 있다. 비밀을 네 벌로 복사해 흩뿌리기보다 **한 곳을 찾아보는 편**이 낫다 —
 * 열쇠를 바꿀 때 고칠 자리가 하나로 남는다.
 */
function loadKey() {
  const candidates = [
    path.join(process.cwd(), ".env.local"),
    path.join(process.cwd(), "..", "naminglink", ".env.local"),
  ];
  for (const file of candidates) {
    try {
      const found = readFileSync(file, "utf8").match(/^OPENAI_API_KEY\s*=\s*(.+)$/m);
      if (found) return found[1]!.trim().replace(/^["']|["']$/g, "");
    } catch {
      /* 다음 자리를 본다 */
    }
  }
  return process.env.OPENAI_API_KEY ?? "";
}

type Leaf = { path: string; en: string; ko: string | null };

/**
 * en을 걸으며 문자열 잎을 모은다. **ko의 같은 자리를 함께 집는다** — 구조가 같아야 하므로
 * 어긋나면 그 자리에서 멈춘다(조용히 넘어가면 뜻의 기준을 잃은 채 번역된다).
 */
/**
 * 번역하면 안 되는 자리. **`kind`·`figure`는 글이 아니라 자료형 판별자다**(`"section" | "note"`, 그림 이름).
 *
 * 처음에 걸러 두지 않았더니 모델이 성실하게 옮겼다 — 독일어 `"Hinweis"`, 아랍어 `"ملاحظة"`.
 * 타입이 잡아 주긴 했지만(그래서 `DocSection.kind`를 유니온으로 좁혀 둔 값이 있다), 잎을
 * 모을 때 빼는 편이 맞다. 번역할 필요가 없는 것에 돈과 시간을 쓸 이유도 없다.
 */
const STRUCTURAL_KEYS = new Set(["kind", "figure", "slot"]);

function collect(en: unknown, ko: unknown, trail: string[], out: Leaf[]) {
  if (STRUCTURAL_KEYS.has(trail[trail.length - 1] ?? "")) return;
  if (typeof en === "string") {
    out.push({
      path: trail.join("."),
      en,
      ko: typeof ko === "string" ? ko : null,
    });
    return;
  }
  if (Array.isArray(en)) {
    const koArray = Array.isArray(ko) ? ko : [];
    if (Array.isArray(ko) && ko.length !== en.length) {
      throw new Error(`구조가 다르다(배열 길이): ${trail.join(".")} — en ${en.length} / ko ${ko.length}`);
    }
    en.forEach((item, index) => collect(item, koArray[index], [...trail, String(index)], out));
    return;
  }
  if (en && typeof en === "object") {
    const koObject = (ko ?? {}) as Record<string, unknown>;
    for (const [key, value] of Object.entries(en)) {
      collect(value, koObject[key], [...trail, key], out);
    }
  }
}

/** 자리표시자 집합. 번역 전후가 같아야 한다 — 하나라도 사라지면 값이 안 채워진다. */
const placeholders = (value: string) => (value.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join(",");
/** 강조 표기 수. 짝이 어긋나면 화면에 별표가 그대로 보인다. */
const bolds = (value: string) => (value.match(/\*\*/g) ?? []).length;
/** 내부 링크 경로. 번역기가 경로를 옮기면 없는 화면으로 보낸다. */
const links = (value: string) =>
  (value.match(/\]\((\/[^)\s]*)\)/g) ?? []).sort().join(",");

/**
 * 번역하면 안 되는 고유명사.
 *
 * **상표는 문구가 아니라 고정값이다.** 사전에 두었더니 중국어에서 `Naming-Link`가 `命名链接`가
 * 됐고, 시험 삼아 돌린 일본어에서는 `ネーミングリンク`가 나왔다. 그 서비스가 쓰지 않는 이름을
 * 지어낸 것이고 화면의 주소(`naming-link.com`)와도 어긋난다. 부탁으로는 안 지켜져서 센다.
 */
const KEEP_VERBATIM = [
  "Saju-Link",
  "saju-link.com",
  // 저장하지 않는 방식 안내가 보여 주는 **실제 주소 모양**이다. 경로 조각이나 프래그먼트를
  // 번역하면 그 글이 설명하는 것과 화면의 주소가 달라져 설명이 거짓말이 된다.
  "/ko/saju/result",
];

/**
 * 한글 덩어리 목록. **원문에 있는 한글은 남아 있어야 한다.**
 *
 * 처음에는 「출력에 한글이 하나라도 있으면 실패」로 두었는데, 그것이 오탐을 냈다. 이 서비스의
 * 영어 안내에는 **한글 예시가 일부러 들어 있다** — "Michael becomes 마이클", "Wang with 왕".
 * 그 예시가 없으면 무슨 말인지 알 수 없는 문장이라, 지우라고 요구하면 옳은 번역을 막는다.
 *
 * 그래서 **원문에 없던 한글이 새로 생겼는지**만 본다(= 옮기지 않고 남긴 자리).
 */
const hangulTokens = (value: string) => new Set(value.match(/[가-힣]+/g) ?? []);

/**
 * 용어집이 정한 표기. **남은 한글이 이 낱말들뿐이면 표기로 바꿔 넣는다.**
 *
 * 몽골어가 `한자`를 세 번 돌려도 그대로 남겼다. 그 잎을 영어로 되돌리면 **몽골어 문단 하나가
 * 통째로 영어**가 되는데, 그것보다는 이미 정해 둔 로마자 표기를 쓰는 편이 낫다. 지어내는 것이
 * 아니라 프롬프트의 GLOSSARY가 같은 값을 이미 지시하고 있다.
 *
 * **낱말이 정확히 일치할 때만 바꾼다.** 「한자를」처럼 조사가 붙은 것은 바꾸면 몽골어 문장에
 * 한국어 조사가 남으므로 손대지 않고 결함으로 센다.
 */
const GLOSSARY_ROMAN: Record<string, string> = {
  한자: "hanja",
  한글: "Hangul",
  사주: "saju",
  오행: "the five elements",
  행: "elements",
  // 아래는 로마자 표기가 아니라 **영어 낱말**이다. 그래도 넣는 이유는 같다 — 이 말들이
  // 남으면 그 문단이 통째로 영어로 되돌아가는데, 낱말 하나가 영어인 편이 문단 전체보다 낫다.
  // 프롬프트의 GLOSSARY가 이미 같은 뜻을 지시하므로 지어내는 것이 아니다.
  천간: "heavenly stem",
  지지: "earthly branch",
  일간: "day stem",
  일지: "day branch",
  연지: "year branch",
  십신: "the Ten Gods",
  용신: "the supporting element",
  신강: "a strong day master",
  신약: "a weak day master",
  중화: "balanced",
  삼합: "a full triad",
  반합: "a half triad",
  육합: "a six-harmony pair",
  원진: "quiet discord",
  진태양시: "true solar time",
  만세력: "the Korean lunisolar almanac",
  /**
   * 2026-08-10에 실측으로 드러난 자리다. 위 명리 낱말은 촘촘한데 **가장 흔한 「운세」와
   * 「일주」가 빠져** 있었고, 그 낱말이 남은 잎이 통째로 영어로 되돌아갔다.
   *
   * 값은 지어낸 것이 아니라 이 파일의 프롬프트가 이미 지시하는 뜻 그대로다.
   */
  운세: "the reading",
  일주: "the day pillar",
  오늘의: "today's",
  궁합: "compatibility",
};

/** 남은 한글이 용어집 낱말뿐이면 표기로 바꾼 문자열을, 아니면 `null`을 준다. */
function applyGlossary(value: string, leaf: Leaf): string | null {
  const allowed = hangulTokens(leaf.en);
  const extra = [...hangulTokens(value)].filter((word) => !allowed.has(word));
  if (!extra.length || extra.some((word) => !(word in GLOSSARY_ROMAN))) return null;
  return extra.reduce(
    (text, word) => text.split(word).join(GLOSSARY_ROMAN[word]!),
    value,
  );
}

function mismatch(value: unknown, leaf: Leaf, sourceIsKo = false): string | null {
  // 모델이 문자열이 아닌 것을 돌려주는 일이 있다(객체·배열). 그대로 두면 뒤에서 터진다.
  if (typeof value !== "string") return `문자열이 아니다(${typeof value})`;
  /**
   * **빈 응답이 모든 검사를 통과했다.**
   *
   * 모델이 답에서 열쇠를 통째로 빠뜨리면 이 자리에 `""`가 들어온다. 그런데 빈 문자열은
   * 자리표시자 0개·강조 0개·한글 0개라 **아래 검사가 전부 초록**이고, 그대로 파일에 실린다.
   * 화면은 빈 제목과 빈 문단을 그리므로 **문서가 있는데 아무 말도 하지 않는 상태**가 된다.
   *
   * 2026-08-09에 실제로 그랬다 — 인연링크 유료 상품 안내가 15개 언어에서 부분적으로 비었고,
   * 드림링크는 「하지 않기로 한 것들」 한 편이 통째로 비었다. 둘 다 검사기가 통과시켰다.
   *
   * 원문이 빈 자리는 그대로 둔다(자료가 그렇게 정한 것이다).
   */
  if (leaf.en.trim() && !value.trim()) return "빈 응답 — 모델이 이 열쇠를 빠뜨렸다";
  // **한국어를 본으로 삼을 때는 이 검사를 걸지 않는다.** 한국어 원문은 상표를 「네이밍링크」로
  // 적으므로 라틴 표기가 0회인데, 그 자리의 영어 번역에는 `Naming-Link`가 있어야 한다.
  // 개수를 맞추라고 하면 옳은 번역을 결함으로 잡는다.
  if (!sourceIsKo) {
    for (const term of KEEP_VERBATIM) {
      const expected = leaf.en.split(term).length - 1;
      const actual = value.split(term).length - 1;
      if (expected !== actual) return `고유명사 ${term} ${actual}회 ≠ en ${expected}회`;
    }
  }
  if (placeholders(value) !== placeholders(leaf.en)) {
    return `자리표시자 [${placeholders(value) || "없음"}] ≠ en [${placeholders(leaf.en) || "없음"}]`;
  }
  /**
   * 강조 표기는 **짝이 맞는지**만 본다.
   *
   * 처음에는 개수가 en과 같아야 한다고 두었는데, 그 때문에 러시아어·아랍어 문단이 통째로
   * 영어로 되돌아갔다. 이 검사가 막으려던 것은 **별표가 화면에 그대로 보이는 것**이고, 그것은
   * 짝이 안 맞을 때 일어난다. 강조한 구절이 원문과 다른 것은 언어마다 힘주는 자리가 다른
   * 문제이지 결함이 아니다 — **언어가 틀린 것보다 낫다.**
   */
  if (bolds(value) % 2 !== 0) return `강조 표기의 짝이 안 맞는다 (${bolds(value)}개)`;
  if (links(value) !== links(leaf.en)) return `링크 [${links(value)}] ≠ en [${links(leaf.en)}]`;
  if (!sourceIsKo) {
    const allowed = hangulTokens(leaf.en);
    const extra = [...hangulTokens(value)].filter((word) => !allowed.has(word));
    if (extra.length) return `옮기지 않은 한글: ${extra.slice(0, 3).join(", ")}`;
  } else if (/[가-힣]/.test(value)) {
    // 한국어를 본으로 삼을 때(= 영어를 만들 때)는 한글이 남으면 안 옮긴 것이다. 다만 예시로
    // 남겨야 하는 낱말이 있으므로, 원문 대비 **절반 이상이 그대로면** 옮기지 않은 것으로 본다.
    const source = hangulTokens(leaf.en);
    const kept = [...hangulTokens(value)].filter((word) => source.has(word));
    if (source.size > 0 && kept.length * 2 >= source.size) return "한국어가 그대로 남았다";
  }
  return null;
}

/**
 * 한 요청에 담는 잎의 수.
 *
 * **한 번에 다 보내면 응답이 잘린다.** 문서가 늘어 잎이 202개가 되자 모델 응답이 출력 한도에서
 * 끊겨 `Unterminated string in JSON` 으로 죽었다. 문서는 앞으로도 늘어나므로 개수를 고정하지
 * 않고 나눠 보낸다 — 잘린 응답은 「번역이 조금 부족한 것」이 아니라 **그 로케일 전체가 실패**다.
 */
const CHUNK = 50;

/** 잎을 나눠 보내고 결과를 합친다. 나누는 자리는 뜻과 무관하므로 순서대로 자른다. */
async function translate(leaves: Leaf[], locale: string, key: string) {
  const merged: Record<string, string> = {};
  for (let index = 0; index < leaves.length; index += CHUNK) {
    Object.assign(merged, await chunkWithRetry(leaves.slice(index, index + CHUNK), locale, key));
  }
  return merged;
}

/**
 * 덩어리 하나를 보내되, **깨진 응답에 로케일 전체를 잃지 않는다.**
 *
 * 2026-08-09 말레이어에서 모델이 한 글자(`重`)를 수천 번 반복해 응답이 한도에서 끊겼다
 * (`Unterminated string in JSON`). 크기 때문이 아니다 — 잎 50개짜리 덩어리였고, 같은 입력이
 * 다른 로케일에서는 멀쩡했다. **모델이 한 번 빠지는 구덩이**다.
 *
 * 그때 죽은 것은 그 덩어리가 아니라 **그 명령 전체**였다. 뒤에 줄 서 있던 두 로케일이 시작도
 * 못 했고, 20분이 그대로 날아갔다. 그래서 다시 보내 보고, 그래도 안 되면 반으로 잘라 본다 —
 * 덩어리가 작아지면 반복에 빠질 자리도 줄어든다.
 *
 * **그래도 안 되면 던진다.** 조용히 건너뛰면 그 잎들이 영어로 남고, 영어로 남은 자리는
 * 화면에서 정상처럼 보인다.
 */
async function chunkWithRetry(
  leaves: Leaf[],
  locale: string,
  key: string,
  depth = 0,
): Promise<Record<string, string>> {
  try {
    return await translateChunk(leaves, locale, key);
  } catch (error) {
    // 깨진 JSON에만 다시 시도한다. 열쇠가 틀렸거나 한도에 걸린 것이라면 다시 보내도 같다.
    if (!(error instanceof SyntaxError) || depth >= 3) throw error;

    // 잎이 하나면 더 쪼갤 수 없으니 그대로 다시 보낸다 — 표본이 달라지면 대개 빠져나온다.
    if (leaves.length === 1) {
      console.log(`  ${locale} — 응답이 깨졌다(잎 1개). 다시 보낸다 [${depth + 1}]`);
      return chunkWithRetry(leaves, locale, key, depth + 1);
    }

    const half = Math.ceil(leaves.length / 2);
    console.log(`  ${locale} — 응답이 깨졌다(잎 ${leaves.length}개). ${half}개씩 나눠 보낸다`);
    return {
      ...(await chunkWithRetry(leaves.slice(0, half), locale, key, depth + 1)),
      ...(await chunkWithRetry(leaves.slice(half), locale, key, depth + 1)),
    };
  }
}

async function translateChunk(leaves: Leaf[], locale: string, key: string) {
  const language = localeLabels[locale as keyof typeof localeLabels] ?? locale;
  /**
   * **한국어 원문을 함께 보내지 않는다.**
   *
   * 처음에는 뜻의 정확성을 위해 en과 ko를 나란히 보냈다. 그런데 모델이 그 한국어에서 **글자를
   * 그대로 베꼈다** — 링크 라벨이 「한글 발음 표기」로, 본문에 「한자」가 그대로 남는 식으로
   * 17개 잎이 걸렸다. 참고로 준 것이 베낄 것이 된 셈이다.
   *
   * 용어의 정확성은 이제 프롬프트의 GLOSSARY가 맡는다 — 무엇을 어떻게 옮길지 데이터로 준다.
   * 영어를 만드는 `--fill-en`에서는 한국어가 **원문**이므로 그때만 보낸다.
   */
  const payload = Object.fromEntries(
    leaves.map((leaf) => [leaf.path, { source: leaf.en }]),
  );

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You translate a Korean saju (four-pillars) reading service's help pages into ${language}.`,
            "Each entry has one field, `source`, holding the text to translate. Keep its structure and tone.",
            "Return a JSON object with exactly the same keys, each mapped to the translated string. No extra keys, no commentary.",
            "CRITICAL: translate every Korean term into the target language — describe it if there is no single word for it. Never leave a Korean word untranslated: the reader cannot read that script.",
            "EXCEPTION: Hangul that appears in the source as an EXAMPLE must be kept exactly (e.g. 'Michael becomes 마이클', 'Wang with 왕', the name 지은). Those are specimens of Korean writing, not words to translate.",
            "CRITICAL: never introduce Hangul that is not in the source. If the source romanises a Korean name (Namgung, Seonwoo), keep the romanisation — do not write it back in Hangul.",
            // **용어를 데이터로 준다.** 「한국어를 남기지 말라」는 부탁만으로는 안 지켜졌다 —
            // 한자·한글 같은 말이 17개 잎에 그대로 남았다. 무엇으로 바꿔야 하는지 알려 준다.
            "GLOSSARY — render these Korean terms with the target language's established word, or the romanisation plus a short gloss. Never leave them in Hangul:",
            "  사주 = saju (the Korean four-pillars reading)",
            "  오행 = the five elements",
            "  한자 = hanja (Chinese characters)",
            "  천간 = heavenly stem · 지지 = earthly branch · 일간 = day stem · 일지 = day branch · 연지 = year branch",
            "  십신 = the Ten Gods (how one stem reads another)",
            "  용신 / 억부용신 = the supporting element a chart currently needs",
            "  신강 = a strong day master · 신약 = a weak day master · 중화 = balanced, neither strong nor weak",
            "  삼합 = a full triad · 반합 = a half triad · 육합 = a six-harmony pair",
            "  충 = a clash · 원진 = a quiet, lasting discord",
            "  국(局) = a complete elemental formation, not a country",
            "  진태양시 = true solar time · 만세력 = the Korean lunisolar almanac",
            "  오늘의 운세 = the reading for today · 대운·세운 = luck cycles (this service does not compute them)",
            // **한자 예시는 옮길 것이 아니라 보여 줄 것이다.** 처음 돌렸을 때 육합의 짝
            // `子丑 · 寅亥 …` 이 통째로 「Rat Ox · Tiger Pig …」가 됐다. 같은 표의 다른 행은
            // 한자로 남아 **한 표 안에서 두 가지 표기**가 되었고, 그림(십이지 바퀴)이 보여
            // 주는 글자와도 어긋났다.
            "CRITICAL: Chinese characters that appear as specimens — earthly branches (子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥), heavenly stems (甲 乙 …), the five elements (木 火 土 金 水) — must be copied EXACTLY as they appear. Never replace them with animal names, element names, or transliterations. They are what the reader is being shown.",
            "When a term is written as 'word (漢字)', keep the parenthesised characters and translate only the word before them.",
            "CRITICAL: every value in the returned object must be a plain string. Never return an object, an array, or a nested structure for a key.",
            "CRITICAL: keep every {placeholder} token exactly as-is — same tokens, same spelling. They are substituted at runtime with company details.",
            "CRITICAL: keep **bold** markers on the same phrase and the same number of ** markers. If the English has none, yours must have none.",
            "CRITICAL: keep [label](/path) links. Translate the label, never the path.",
            "CRITICAL: keep every digit in Arabic numerals (0-9) exactly as in the English.",
            "CRITICAL: write 'Saju-Link' exactly in Latin letters, never transliterated or translated. It is a trademark and matches the domain saju-link.com. The same holds for any domain name.",
          ].join("\n"),
        },
        { role: "user", content: JSON.stringify(payload) },
      ],
    }),
  });

  if (!response.ok) throw new Error(`OpenAI ${response.status}: ${await response.text()}`);
  const body = (await response.json()) as { choices: Array<{ message: { content: string } }> };
  const parsed = JSON.parse(body.choices[0]!.message.content) as Record<string, unknown>;

  // **문자열이 아닌 값을 한 번 구해 본다.** 모델이 이따금 `{ "text": "..." }`처럼 감싸서
  // 돌려준다(아랍어에서 반복됐다). 안에 문자열이 하나뿐이면 그것이 번역이므로 꺼내 쓴다.
  // 그래도 아니면 그대로 두고 `mismatch`가 결함으로 센다 — 조용히 버리지 않는다.
  const unwrapped: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value === "string") { unwrapped[key] = value; continue; }
    const inner = value && typeof value === "object" ? Object.values(value) : [];
    const strings = inner.filter((item): item is string => typeof item === "string");
    unwrapped[key] = strings.length === 1 ? strings[0] : value;
  }
  return unwrapped as Record<string, string>;
}

/** 잎 값을 en 구조 위에 얹어 그 로케일의 자료를 만든다. */
function graft(en: unknown, trail: string[], values: Map<string, string>): unknown {
  if (typeof en === "string") return values.get(trail.join(".")) ?? en;
  if (Array.isArray(en)) return en.map((item, i) => graft(item, [...trail, String(i)], values));
  if (en && typeof en === "object") {
    return Object.fromEntries(
      Object.entries(en).map(([key, value]) => [key, graft(value, [...trail, key], values)]),
    );
  }
  return en;
}

/**
 * 한 로케일 파일이 담는 것 전부 — 문서와 공지.
 *
 * **한 파일에 함께 둔다.** 로케일당 파일이 둘이면 하나만 만들어진 상태가 생기고, 그때 화면은
 * 절반만 번역된 채 뜬다. 검사기도 두 벌을 세야 한다.
 */
function bundleOf(docs: unknown, notices: unknown) {
  return { docs, notices };
}

/**
 * **en에 없는 문서가 있으면 멈춘다.**
 *
 * 로케일 파일은 en의 구조를 복사해 만든다. 그래서 한국어에만 있는 문서는 **조용히 빠진다** —
 * 23개 로케일을 다 돌리고 나서야 그 문서가 어디에도 없다는 것을 알게 된다(실제로 그렇게
 * 한 번 헛돌았다). 먼저 `--fill-en`을 돌리라고 여기서 말한다.
 */
function requireEnglish() {
  const missing = Object.keys(KO_DOCS).filter((key) => !(key in EN_DOCS));
  if (!missing.length) return;
  console.error(
    `en에 없는 문서 ${missing.length}편: ${missing.join(", ")}\n` +
      "  먼저 `--fill-en`을 돌릴 것 — 지금 로케일을 만들면 이 문서들이 통째로 빠진다.",
  );
  process.exit(1);
}

async function run(locale: string, key: string) {
  /**
   * **구조의 본은 보통 en이다.** 검수를 거친 영어가 어투와 절 구성의 기준이기 때문이다.
   *
   * 다만 영어판이 아직 없는 문서가 있다 — 한국어로 먼저 쓰고 영어를 그 위에 얹는 것이
   * 순서이기 때문이다(사용자 지시). 그때는 `--from ko`로 **한국어를 본으로 삼아 영어를
   * 만든다.** 그 뒤부터는 다시 en이 본이 된다.
   */
  const sourceIsKo = fromKo;
  const enBundle = sourceIsKo
    ? bundleOf(KO_DOCS, KO_NOTICES)
    : bundleOf(EN_DOCS, EN_NOTICES);
  const koBundle = bundleOf(KO_DOCS, KO_NOTICES);

  const leaves: Leaf[] = [];
  collect(enBundle, koBundle, [], leaves);
  console.log(`  ${locale} — 잎 ${leaves.length}개 번역 중…`);

  let translated = await translate(leaves, locale, key);

  // 어긋난 잎만 한 번 더 부른다. 통째로 다시 받으면 검수가 끝난 문장까지 바뀐다.
  const broken = leaves.filter((leaf) => mismatch(translated[leaf.path] ?? "", leaf, sourceIsKo));
  if (broken.length) {
    console.log(`  ${locale} — 어긋난 잎 ${broken.length}개 재시도`);
    const retry = await translate(broken, locale, key);
    translated = { ...translated, ...retry };
  }

  // 재시도 뒤에도 어긋나면 **en을 그대로 두고 알린다.** 깨진 자리표시자를 파일에 넣으면
  // 화면에 `{email}`이 그대로 나가거나 값이 통째로 빈다.
  const values = new Map<string, string>();
  const failed: string[] = [];
  for (const leaf of leaves) {
    const value = translated[leaf.path] ?? "";
    let problem = mismatch(value, leaf, sourceIsKo);

    // 남은 한글이 용어집 낱말뿐이면 표기로 바꿔 살린다(위 `applyGlossary` 주석 참고).
    if (problem && !sourceIsKo && typeof value === "string") {
      const patched = applyGlossary(value, leaf);
      if (patched && !mismatch(patched, leaf, sourceIsKo)) {
        values.set(leaf.path, patched);
        console.log(`    ${leaf.path} — 용어집 표기로 바꿈`);
        continue;
      }
    }

    if (problem) {
      failed.push(`    ${leaf.path} — ${problem}`);
      values.set(leaf.path, leaf.en);
    } else {
      values.set(leaf.path, value as string);
    }
  }

  const grafted = graft(enBundle, [], values) as { docs: unknown; notices: unknown };
  const upper = locale.toUpperCase().replace(/-/g, "_");
  const header = [
    `import type { DocPage, NoticeCopy } from "./types";`,
    `import type { DocKey } from "./ko";`,
    "",
    `/** ${language(locale)} — \`scripts/translate-doc-content.ts\`가 만든다. 손으로 고치지 말 것. */`,
    `export const ${upper}_DOCS = ${JSON.stringify(grafted.docs, null, 2)} satisfies Record<DocKey, DocPage>;`,
    "",
    `export const ${upper}_NOTICES = ${JSON.stringify(grafted.notices, null, 2)} satisfies NoticeCopy;`,
    "",
  ].join("\n");

  writeFileSync(path.join(DIR, `${locale}.ts`), header, "utf8");
  console.log(`  ${locale} — 썼다${failed.length ? ` · ⚠ en으로 남긴 잎 ${failed.length}개` : ""}`);
  if (failed.length) console.log(failed.join("\n"));
  return failed.length;
}

function language(locale: string) {
  return localeLabels[locale as keyof typeof localeLabels] ?? locale;
}

const args = process.argv.slice(2);
/** 영어판이 아직 없을 때. 한국어를 본으로 삼는다(보통은 en이 본이다). */
const fromKo = args.includes("--from-ko");
/** 한국어에만 있는 문서의 영어를 채운다. `en.ts`의 기존 항목은 건드리지 않는다. */
const fillEn = args.includes("--fill-en");
/**
 * **공지만 다시 만든다.**
 *
 * 공지 하나를 올릴 때마다 안내 열세 편을 통째로 다시 번역하면 값도 시간도 크게 들고, 무엇보다
 * **검수가 끝난 문장이 매번 다시 바뀐다.** 공지는 자주 올라오는 자리라 이 길이 필요하다.
 *
 * 이미 만들어져 있는 로케일 파일에서 문서 부분은 그대로 두고 공지만 갈아 끼운다.
 */
const noticesOnly = args.includes("--notices");
const all = args.includes("--all");
const targets = all
  ? localeCodes.filter((code) => code !== "ko" && code !== "en")
  : args.filter((a) => !a.startsWith("--"));

if (!targets.length && !fillEn) {
  console.log("쓰는 법: translate-doc-content.ts <locale…> | --all | --fill-en");
  process.exit(1);
}

const key = loadKey();
if (!key) {
  console.error("OPENAI_API_KEY가 없다 — .env.local 또는 환경변수에 넣을 것");
  process.exit(1);
}

/**
 * **한국어에만 있는 문서의 영어를 채운다.**
 *
 * 순서가 「한국어로 다 쓰고 → 영어로 옮기고 → 나머지 언어」이므로(사용자 지시), 새 문서는
 * 한국어만 있는 상태로 들어온다. 그렇다고 `en.ts`를 통째로 다시 만들면 **검수를 거친 영어가
 * 기계 번역으로 덮인다** — 소개·문의처럼 영어가 원문인 문서가 있다.
 *
 * 그래서 **없는 키만** 옮겨 기존 `EN_DOCS`에 얹는다. 이미 있는 문서는 손대지 않는다.
 */
/**
 * 공지 글만 다시 만들어 기존 로케일 파일에 갈아 끼운다(`--notices`).
 *
 * 문서 부분은 **이미 있는 파일에서 그대로 읽어 온다** — 다시 번역하지 않으므로 검수가 끝난
 * 문장이 바뀌지 않는다. 파일이 아직 없으면 공지만 든 파일을 만들 수는 없으므로 알리고 건너뛴다.
 */
async function runNotices(locale: string, key: string) {
  const file = path.join(DIR, `${locale}.ts`);
  if (!existsSync(file)) {
    console.log(`  ${locale} — 파일이 없다. 먼저 전체를 한 번 돌릴 것`);
    return 1;
  }

  const upper = locale.toUpperCase().replace(/-/g, "_");
  const module_ = (await import(pathToFileURL(file).href)) as Record<string, unknown>;
  const existingDocs = module_[`${upper}_DOCS`];
  if (!existingDocs) {
    console.log(`  ${locale} — ${upper}_DOCS를 읽지 못했다`);
    return 1;
  }

  const source = { notices: EN_NOTICES };
  const koSource = { notices: KO_NOTICES };
  const leaves: Leaf[] = [];
  collect(source, koSource, [], leaves);
  console.log(`  ${locale} — 공지 잎 ${leaves.length}개 번역 중…`);

  const translated = await translate(leaves, locale, key);
  const values = new Map<string, string>();
  const failed: string[] = [];
  for (const leaf of leaves) {
    const value = translated[leaf.path] ?? "";
    const problem = mismatch(value, leaf, false);
    if (problem) {
      failed.push(`    ${leaf.path} — ${problem}`);
      values.set(leaf.path, leaf.en);
    } else {
      values.set(leaf.path, value as string);
    }
  }

  const grafted = graft(source, [], values) as { notices: unknown };
  writeFileSync(
    file,
    [
      `import type { DocPage, NoticeCopy } from "./types";`,
      `import type { DocKey } from "./ko";`,
      "",
      `/** ${language(locale)} — \`scripts/translate-doc-content.ts\`가 만든다. 손으로 고치지 말 것. */`,
      `export const ${upper}_DOCS = ${JSON.stringify(existingDocs, null, 2)} satisfies Record<DocKey, DocPage>;`,
      "",
      `export const ${upper}_NOTICES = ${JSON.stringify(grafted.notices, null, 2)} satisfies NoticeCopy;`,
      "",
    ].join("\n"),
    "utf8",
  );
  console.log(`  ${locale} — 공지를 갈아 끼웠다${failed.length ? ` · ⚠ en으로 남긴 잎 ${failed.length}개` : ""}`);
  if (failed.length) console.log(failed.join("\n"));
  return failed.length;
}

async function fillEnglish(key: string) {
  const missing = Object.keys(KO_DOCS).filter((k) => !(k in EN_DOCS));

  /**
   * **공지 글도 함께 채운다.**
   *
   * 예전에는 문서(`KO_DOCS` vs `EN_DOCS`)만 비교하고 `EN_NOTICES`는 읽은 그대로 다시 썼다.
   * 그래서 한국어로 공지를 올려도 en의 `items`가 비어 있었고, **21개 언어가 그 빈 표를 본으로
   * 삼아** 공지 없이 만들어졌다(2026-08-09 인연링크). 화면은 글이 없는 공지를 그리지 않으므로
   * 그 언어에서는 **공지가 조용히 사라진다** — `verify-doc-locales`가 세는 바로 그 실패인데,
   * 정작 도구가 그 상태를 만들 수 있었다.
   */
  const missingNotices = Object.keys(KO_NOTICES.items).filter(
    (id) => !(id in EN_NOTICES.items),
  );

  const { items: _probeItems, ...probeShell } = EN_NOTICES;
  if (!missing.length && !missingNotices.length && !JSON.stringify(probeShell).includes('""')) {
    console.log("  en — 채울 문서가 없다");
    return 0;
  }
  if (missing.length) {
    console.log(`  en — 한국어에만 있는 문서 ${missing.length}편: ${missing.join(", ")}`);
  }
  if (missingNotices.length) {
    console.log(`  en — 한국어에만 있는 공지 ${missingNotices.length}건: ${missingNotices.join(", ")}`);
  }

  const koSubset: Record<string, unknown> = Object.fromEntries(
    missing.map((k) => [k, KO_DOCS[k as keyof typeof KO_DOCS]]),
  );
  const koNoticeSubset = Object.fromEntries(
    missingNotices.map((id) => [id, KO_NOTICES.items[id as keyof typeof KO_NOTICES.items]]),
  );

  /**
   * 공지 화면의 **껍데기**(종류 꼬리표·머리글·빈 화면 문구·페이저)도 비어 있으면 채운다.
   *
   * 새 앱은 en 이 아예 없는 상태로 시작하므로 이 자리가 빈 문자열로 만들어진다. 그대로 두면
   * **21개 언어가 빈 꼬리표를 본으로 삼아** 만들어지고, 화면에는 종류 칸이 빈 알약으로 남는다.
   */
  const { items: _koItems, ...koShell } = KO_NOTICES;
  const { items: _enItems, ...enShell } = EN_NOTICES;
  const shellIsEmpty = JSON.stringify(enShell).includes('""');
  const source = {
    docs: koSubset,
    noticeItems: koNoticeSubset,
    ...(shellIsEmpty ? { noticeShell: koShell } : {}),
  };
  const leaves: Leaf[] = [];
  collect(source, source, [], leaves);

  let translated = await translate(leaves, "en", key);
  const broken = leaves.filter((leaf) => mismatch(translated[leaf.path] ?? "", leaf, true));
  if (broken.length) {
    console.log(`  en — 어긋난 잎 ${broken.length}개 재시도`);
    translated = { ...translated, ...(await translate(broken, "en", key)) };
  }

  const values = new Map<string, string>();
  const failed: string[] = [];
  for (const leaf of leaves) {
    const value = translated[leaf.path] ?? "";
    const problem = mismatch(value, leaf, true);
    if (problem) {
      failed.push(`    ${leaf.path} — ${problem}`);
      values.set(leaf.path, leaf.en);
    } else {
      values.set(leaf.path, value as string);
    }
  }

  const grafted = graft(source, [], values) as {
    docs: Record<string, unknown>;
    noticeItems: Record<string, unknown>;
    noticeShell?: Record<string, unknown>;
  };
  const merged = { ...EN_DOCS, ...grafted.docs };
  const mergedNotices = {
    ...EN_NOTICES,
    ...(grafted.noticeShell ?? {}),
    items: { ...EN_NOTICES.items, ...grafted.noticeItems },
  };
  const header = [
    `import type { DocPage, NoticeCopy } from "./types";`,
    `import type { DocKey } from "./ko";`,
    "",
    `/**`,
    ` * 영어판. **번역기가 21개 로케일을 만들 때 구조와 어투의 본이 되는 벌이다.**`,
    ` *`,
    ` * 저장소에 직접 적어 둔 글과, \`--fill-en\`이 한국어에서 만든 글이 함께 있다. 뒤엣것은`,
    ` * \`translate-doc-content.ts --fill-en\`이 **없는 키만** 채운 것이라 앞엣것을 덮지 않는다.`,
    ` */`,
    `export const EN_DOCS = ${JSON.stringify(merged, null, 2)} satisfies Record<DocKey, DocPage>;`,
    "",
    `export const EN_NOTICES = ${JSON.stringify(mergedNotices, null, 2)} satisfies NoticeCopy;`,
    "",
  ].join("\n");

  writeFileSync(path.join(DIR, "en.ts"), header, "utf8");
  console.log(`  en — 썼다${failed.length ? ` · ⚠ 한국어로 남긴 잎 ${failed.length}개` : ""}`);
  if (failed.length) console.log(failed.join("\n"));
  return failed.length;
}

// tsx가 cjs로 옮기므로 최상위 await를 쓸 수 없다. 감싼다.
async function main() {
  let problems = 0;
  if (fillEn) {
    process.exit((await fillEnglish(key)) === 0 ? 0 : 1);
  }
  requireEnglish();
  for (const locale of targets) {
    problems += noticesOnly ? await runNotices(locale, key) : await run(locale, key);
  }
  console.log(
    problems === 0
      ? `\n끝났다 — 로케일 ${targets.length}개`
      : `\n끝났다 — 로케일 ${targets.length}개 · ⚠ en으로 남긴 잎 ${problems}개(위 목록을 볼 것)`,
  );
  process.exit(problems === 0 ? 0 : 1);
}

void main();
