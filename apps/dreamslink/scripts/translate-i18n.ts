// 화면 사전 한 벌을 다른 언어로 옮겨 `src/lib/i18n-locales/<locale>.ts`를 만든다.
//
// **왜 스크립트인가.** 인연링크의 21개 사전은 에이전트가 손으로 채웠는데, 그 방식은 키를
// 빠뜨리거나 배열 길이를 바꾸는 일이 잦았다(`verify-i18n`이 그래서 생겼다). 여기서는 en의
// **구조를 그대로 복사하고 잎(문자열)만 갈아 끼운다** — 키 집합·중첩·배열 길이가 어긋날 수
// 있는 자리가 아예 없다. 검사기가 볼 것은 자리표시자·강조 표기뿐이다.
//
// **en과 ko를 함께 넘긴다.** 구조와 어투는 en을 따르되 해몽 용어의 뜻은 원문인 ko가 정확하다
// (태몽·길몽 같은 말은 en을 다시 옮기면 두 번 번역한 것이 된다).
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/translate-i18n.ts ja
//   ... scripts/translate-i18n.ts ja --only dream   (절만 다시 만들 때)
//   ... scripts/translate-i18n.ts ja --paths dream.moods   (그 잎만 다시 만들 때)
//
// `--paths`는 **원문 몇 줄만 고쳤을 때** 쓴다. `--only`는 절을 통째로 다시 번역하므로, 문장
// 넷을 고치자고 그 절의 예순 줄을 새로 받게 된다 — 값도 값이지만 **검수가 끝난 나머지 문장이
// 함께 바뀌어** 무엇이 달라졌는지 diff로 볼 수 없게 된다. 접두사로 걸러 자식 잎까지 잡는다.
//
// ⚠️ **둘 다 이 스크립트가 만든 파일 위에서만 쓴다.** 사람이 손으로 쓴 파일은 `JSON.parse`로
// 읽히지 않아 나머지 절을 이어받지 못하고, 그러면 지정하지 않은 절이 전부 en으로 덮인다.
// 그 경우 `seedFromExistingFile`이 진행을 막는다(예전에는 경고만 찍고 덮었다 — 실측).
//
// 만든 뒤에는 반드시 `verify-i18n`과 `verify-product-consistency`를 돌린다. 뒤엣것은 인연링크
// 잔재(궁합·인연)가 번역에 섞여 들어오지 않았는지 본다.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

import { getDictionary, type Dictionary, type Locale } from "../src/lib/i18n";
import { localeLanguageName } from "../src/lib/locale-codes";

const DIR = path.join(process.cwd(), "src", "lib", "i18n-locales");

// OpenAI 키는 naminglink 쪽 `.env.local`에만 있다(같은 계정을 쓴다). 드림링크 파일이 있으면
// 그 값으로 덮는다 — `translate-legal.mjs`와 같은 방식이다.
function readEnv(file: string): Record<string, string> {
  if (!existsSync(file)) return {};
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split(/\r?\n/)
      .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
}

const env = {
  ...readEnv(path.join(process.cwd(), "..", "naminglink", ".env.local")),
  ...Object.fromEntries(
    Object.entries(readEnv(path.join(process.cwd(), ".env.local"))).filter(([, value]) => value),
  ),
};

const [localeArg, ...rest] = process.argv.slice(2);
if (!localeArg) {
  console.error(
    "usage: tsx scripts/translate-i18n.ts <locale> [--only section,section] [--paths a.b,c.d]",
  );
  process.exit(1);
}
const locale = localeArg as Locale;
function listArg(name: string): string[] | null {
  const found = rest.find((arg) => arg.startsWith(name));
  if (!found) return null;
  const value = found.split("=")[1] ?? rest[rest.indexOf(found) + 1] ?? "";
  return value.split(",").filter(Boolean);
}
const pathArg = listArg("--paths");
const only = (() => {
  const sections = listArg("--only");
  if (sections) return new Set(sections);
  // `--paths`도 절 단위 골격은 그대로 둔다 — 그래야 `seedFromExistingFile`이 나머지를 이어받는다.
  if (pathArg) return new Set(pathArg.map((path) => path.split(".")[0]!));
  return null;
})();
/** `--paths`로 좁혔을 때, 이 잎을 다시 번역할 것인가. 접두사라 자식까지 함께 잡힌다. */
function selectedPath(path: string) {
  if (!pathArg) return true;
  return pathArg.some((prefix) => path === prefix || path.startsWith(`${prefix}.`));
}

if (locale === "ko" || locale === "en") {
  // 원문과 그 짝은 `i18n.ts` 안에 있고 사람이 쓴다. 기계가 덮을 자리가 아니다.
  console.error("ko·en은 이 스크립트의 대상이 아니다(원문은 i18n.ts에 있다).");
  process.exit(1);
}

const en = getDictionary("en");
const ko = getDictionary("ko");

type Leaf = { path: string; en: string; ko: string };

/** en을 걸으며 잎을 모은다. ko는 같은 경로에서 꺼낸다 — 구조가 같다는 것은 타입이 보장한다. */
function collect(node: unknown, mirror: unknown, trail: string[], out: Leaf[]) {
  if (typeof node === "string") {
    out.push({ path: trail.join("."), en: node, ko: typeof mirror === "string" ? mirror : node });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) =>
      collect(item, Array.isArray(mirror) ? mirror[index] : undefined, [...trail, String(index)], out),
    );
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      const next = mirror && typeof mirror === "object" ? (mirror as Record<string, unknown>)[key] : undefined;
      collect(value, next, [...trail, key], out);
    }
  }
}

const leaves: Leaf[] = [];
collect(en, ko, [], leaves);

/**
 * **이미 번역된 자리는 가져다 쓴다.**
 *
 * 이 앱의 로케일 파일은 인연링크 복제라, 궁합 문구를 걷어내고도 **서비스가 달라져도 그대로
 * 맞는 문구**가 남아 있다 — footer 16개, 언어 선택기 3개, 광고 라벨, 광고 관문의 두 줄.
 * 23개 언어로 번역돼 검수까지 끝난 것들이다.
 *
 * 그걸 다시 번역시키면 호출이 늘어 한도에 부딪히고(사주링크에서 `id` 로케일이 그렇게 통째로
 * 영어로 남았다), 맞는 문구를 모델이 다시 지어내며, 짧은 문구는 응답이 비어 손으로 베끼게
 * 된다. 실제로 세 번 반복했다.
 *
 * **en이 글자까지 같을 때만 가져온다.** 해몽용으로 문구가 바뀐 자리(landing·analyzing)와 새로
 * 생긴 자리(dream·dreamCard·conceptionReport)는 그쪽 번역이 다른 말을 하므로 가져오면 안 된다.
 * 이 한 줄이 그 경계를 전부 지킨다.
 *
 * 원본은 `scripts/export-inherited.ts`가 만든다(번역을 새로 돌리기 **전에** 실행할 것 —
 * 파일을 덮고 나면 건질 것이 없다). 없으면 그냥 전부 번역한다.
 */
function loadInherited(): Map<string, string> {
  const inherited = new Map<string, string>();
  const file = path.join(process.cwd(), "tmp", "inherited-dictionaries.json");
  if (!existsSync(file)) {
    console.log("  (물려받을 덤프가 없어 전부 번역합니다 — export-inherited.ts 참고)");
    return inherited;
  }
  const dumped = JSON.parse(readFileSync(file, "utf8")) as Record<string, Record<string, string>>;
  const theirEn = dumped.en ?? {};
  const theirs = dumped[locale];
  if (!theirs) {
    console.log(`  (덤프에 ${locale} 사전이 없어 전부 번역합니다)`);
    return inherited;
  }
  for (const leaf of leaves) {
    if (theirEn[leaf.path] === leaf.en && theirs[leaf.path]) {
      inherited.set(leaf.path, theirs[leaf.path]);
    }
  }
  return inherited;
}

const inherited = loadInherited();

/**
 * **번역해서는 안 되는 잎.** 그 언어에서만 다른 말을 해야 하는 자리다.
 *
 * `pdfLanguageNotice`는 화면과 파일의 언어가 갈릴 때만 뜨는 고지인데, 그렇게 갈리는 로케일이
 * 아랍어·크메르어 둘뿐이다(`lib/pdf/fonts.tsx`의 `PDF_FALLBACK_TO_EN`). ko·en 원문은 "화면과
 * 같은 언어로 나갑니다"이고 그것은 **이 두 언어에서만 거짓**이다 — 원문을 옮기면 결제 전에
 * 보여야 할 조건이 정반대로 나간다. 문장은 인연링크에서 사람이 쓴 것을 그대로 옮겨 왔다.
 *
 * 화면에 뜨지 않는 나머지 19개 로케일은 원문을 옮겨도 무해하므로 손대지 않는다.
 */
const OVERRIDES: Partial<Record<Locale, Record<string, string>>> = {
  ar: {
    "conceptionReport.pdfLanguageNotice":
      "يصدر ملف PDF باللغة الإنجليزية. فالخط العربي لا يُرسم في هذا الملف حاليًا، ولو أصدرناه بالعربية لتعذّر إنشاؤه أصلًا. أما هذه الشاشة فتبقى بالعربية.",
    "dreamCard.pdfLanguageNotice":
      "تصدر البطاقة باللغة الإنجليزية. فالخط العربي لا يُرسم في هذا الملف حاليًا، ولو أصدرناه بالعربية لتعذّر إنشاؤه أصلًا. أما هذه الشاشة فتبقى بالعربية.",
  },
  km: {
    "conceptionReport.pdfLanguageNotice":
      "ឯកសារ PDF ចេញជាភាសាអង់គ្លេស។ អក្សរខ្មែរមិនទាន់អាចបង្ហាញក្នុងឯកសារនេះបានទេ ហើយបើចេញជាខ្មែរ ឯកសារនឹងមិនអាចបង្កើតបានឡើយ។ រីឯអេក្រង់នេះនៅតែជាភាសាខ្មែរដដែល។",
    "dreamCard.pdfLanguageNotice":
      "កាតចេញជាភាសាអង់គ្លេស។ អក្សរខ្មែរមិនទាន់អាចបង្ហាញក្នុងឯកសារនេះបានទេ ហើយបើចេញជាខ្មែរ ឯកសារនឹងមិនអាចបង្កើតបានឡើយ។ រីឯអេក្រង់នេះនៅតែជាភាសាខ្មែរដដែល។",
  },
};

/** 물려받은 것과 같은 취급이다 — 모델에게 보내지 않고 그대로 쓴다. */
for (const [key, value] of Object.entries(OVERRIDES[locale] ?? {})) {
  inherited.set(key, value);
}

const topLevel = [...new Set(leaves.map((leaf) => leaf.path.split(".")[0]!))].filter(
  (section) => !only || only.has(section),
);

/**
 * **잎이 하나뿐인 절은 한 배치로 묶는다.**
 *
 * 최상위 문자열(`brand`·`tagline`·`currentLanguage` 같은 것)은 절마다 항목이 하나라, 그것만
 * 담아 부르면 모델이 키를 통째로 빠뜨리고 빈 응답을 주는 일이 잦다 — ja·vi·es에서 매번
 * 언어 선택기 문구가 en으로 떨어져 손으로 채웠다. 여러 개를 함께 주면 그 일이 없다.
 */
const SHORT_BATCH = "(짧은 문구)";
const shortSections = topLevel.filter(
  (section) => leaves.filter((leaf) => leaf.path.split(".")[0] === section).length === 1,
);
const sections = [
  ...(shortSections.length ? [SHORT_BATCH] : []),
  ...topLevel.filter((section) => !shortSections.includes(section)),
];

function itemsOf(section: string) {
  const all =
    section === SHORT_BATCH
      ? leaves.filter((leaf) => shortSections.includes(leaf.path.split(".")[0]!))
      : leaves.filter((leaf) => leaf.path.split(".")[0] === section);
  // 물려받은 자리와 `--paths` 밖은 모델에게 보내지 않는다.
  return all.filter((leaf) => !inherited.has(leaf.path) && selectedPath(leaf.path));
}

const placeholders = (value: string) => (value.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join(",");
const boldCount = (value: string) => value.split("**").length - 1;

async function translateSection(section: string, items: Leaf[]) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You localize the UI of Dreams-Link, a Korean dream-reading (해몽) service: someone writes down a dream they had, and the service looks up the symbols in it in a dictionary of traditional Korean dream lore.`,
            `Translate each entry into ${localeLanguageName(locale)} (locale ${locale}).`,
            "You are given both the English string and the Korean original. Follow English for tone and length; follow Korean for the meaning of dream-reading terms (해몽 a traditional dream reading, 태몽 a conception dream, 길몽 an auspicious dream) — re-translating the English would translate them twice.",
            // 아래 셋은 `verify-i18n`이 기계적으로 대조하는 항목이다. 어기면 그 자리에서 걸린다.
            "CRITICAL: keep every {placeholder} token exactly as-is — same tokens, same spelling. They are substituted at runtime.",
            // **모자란 쪽보다 넘치는 쪽이 잦다.** 영어에 강조가 하나 있으면 모델이 앞 구절에도
            // 하나를 더 붙여 4개가 되고, 검사기가 그 잎을 en으로 되돌린다(21개 중 4개 언어에서
            // 같은 자리가 걸렸다). "같은 개수"만으로는 이 습관이 안 잡혀 세어서 못 박는다.
            "CRITICAL: keep **bold** markers on the same phrase, and keep exactly the same number of ** markers — count them. If the English bolds one phrase, your translation must bold exactly one phrase and it must be that same phrase. Do not bold anything else, however important it looks. If the English has no ** at all, your translation must have none either.",
            "CRITICAL: keep newline characters (\\n) where they appear — the layout depends on them.",
            // 크메르어에서 "A4 7장"을 "A4 ៧ទំព័រ"로 바꿔 써, 고시 장수를 세는 검사기가 숫자를
            // 못 찾았다. 장수·가격은 기계가 대조하는 값이라 아라비아 숫자로 두어야 한다.
            "CRITICAL: keep every digit in Arabic numerals (0-9) exactly as in the English. Never convert numbers to another numeral system.",
            // 이 앱은 인연링크(궁합) 복제라 옛 문구가 사방에 남아 있었다. 모델이 그 어휘로
            // 흘러가면 화면이 다시 궁합을 말한다 — `verify-product-consistency`가 그 낱말을 센다.
            "This service reads DREAMS. It is NOT about compatibility between two people, NOT a matchmaking service, and NOT a saju (four pillars) reading — never introduce words meaning 'compatibility', 'match rate', 'the two of you', 'birth date', or 'fortune telling'.",
            // 엔진이 하지 않는 일을 문구가 하겠다고 말하면 그 자체가 결함이 된다. 태몽 문구가
            // 특히 위험하다 — 임신·성별을 판정한다고 읽히면 의학적 단정이다.
            "Never make the copy promise more than the service does: it does not predict the future, and it never determines pregnancy or the sex of a child. Where the English hedges ('traditionally read as', 'does not determine'), keep the hedge exactly as strong.",
            // 입력이 `{path: {en, ko}}`라 그 모양을 되비추기 쉽다. 값은 문자열이어야 한다고
            // 못 박는다(그래도 객체로 오면 `lookup`이 안쪽에서 꺼낸다).
            // 출력 키를 입력과 다르게 둔다 — 입력을 복사해 보내면 `translations`가 없어 곧바로 걸린다.
            // `response_format: json_object`를 쓰려면 프롬프트에 "json"이라는 낱말이 있어야
            // 한다(없으면 API가 400을 낸다). 문장을 고칠 때 이 낱말을 지우지 말 것.
            'Reply with JSON shaped {"translations": { "<key>": "<translated string>" }} — the same keys as `source`, and every value a plain translated string. Never copy `source` or `koreanReference` back.',
          ].join(" "),
        },
        {
          role: "user",
          // **입력을 객체로 주지 않는다.** `{path: {en, ko}}`로 주었더니 모델이 그 모양을
          // 그대로 되돌려주는 일이 잦았고, 긴 절에서는 **번역을 아예 하지 않고 입력만 복사**해
          // 보냈다(id의 fallbackReport 30개가 그랬다). 값을 문자열로 주고 원문은 따로 붙인다.
          content: JSON.stringify({
            source: Object.fromEntries(items.map((leaf) => [leaf.path, leaf.en])),
            koreanReference: Object.fromEntries(items.map((leaf) => [leaf.path, leaf.ko])),
          }),
        },
      ],
    }),
  });
  if (!response.ok) {
    // 본문을 읽어 붙인다. 상태 코드만으로는 무엇이 잘못됐는지 알 수 없다.
    const detail = await response.text().catch(() => "");
    throw new Error(`${section}: HTTP ${response.status} ${detail.slice(0, 300)}`);
  }
  const raw = (await response.json()).choices[0].message.content as string;
  // 잎이 통째로 en으로 떨어질 때 원인은 대개 **응답의 모양**이다. 추측하지 않고 볼 수 있게
  // 해 둔다: `DEBUG_TRANSLATE=1`을 주면 받은 그대로를 찍는다.
  if (process.env.DEBUG_TRANSLATE) {
    console.log(`\n--- ${section} 원본 응답 ---\n${raw.slice(0, 1200)}\n---`);
  }
  const parsed = JSON.parse(raw) as Record<string, unknown>;
  // 지시대로면 `translations` 안에 있다. 예전 모양으로 와도 받아 준다.
  const inner = parsed.translations;
  return (inner && typeof inner === "object" ? inner : parsed) as Record<string, unknown>;
}

/**
 * 한 번에 보내는 항목 수.
 *
 * 절 하나가 서른 개를 넘어가면 모델이 번역을 포기하고 입력을 복사해 보내거나 응답이 잘린다.
 * 나눠 보내면 그 일이 없고, 실패해도 잃는 범위가 작다.
 */
// 문자 체계에 따라 같은 항목 수라도 응답 길이가 크게 다르다 — 크메르어에서 12개를 보냈다가
// 응답이 잘려 JSON이 깨졌다(`km`의 `form`). 그럴 때 `CHUNK=4`로 낮춰 다시 돌린다.
const CHUNK = Number(process.env.CHUNK) || 12;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * **막히면 기다렸다 다시 부른다.**
 *
 * 로케일을 줄줄이 돌리면 한 번에 수백 번을 부르게 되고, 그러다 429가 나면 그 절은 통째로
 * en으로 떨어진다 — 실제로 `id`에서 141개가 영어로 남았다. 파일은 멀쩡히 쓰이므로 **눈으로는
 * 성공처럼 보인다**(검사기의 "en과 완전히 동일" 경고가 아니었으면 못 봤다).
 *
 * 세 번까지, 기다리는 시간을 늘려 가며 다시 부른다.
 */
async function translateWithBackoff(section: string, items: Leaf[]) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await translateSection(section, items);
    } catch (error) {
      lastError = error;
      const message = (error as Error).message;
      // 형식 오류는 기다린다고 나아지지 않는다. 통신·한도 문제일 때만 다시 부른다.
      if (!/HTTP (429|5\d\d)/.test(message) && !/fetch|network|ECONN/i.test(message)) throw error;
      const wait = attempt * 5000;
      console.log(`      (${section} ${message} — ${wait / 1000}초 뒤 다시)`);
      await sleep(wait);
    }
  }
  throw lastError;
}

/**
 * 응답에서 한 잎의 값을 꺼낸다.
 *
 * **모델이 두 가지 꼴로 돌려준다.** 경로를 키로 그대로 쓴 평면 객체
 * (`{"today.title": "..."}`)일 때도 있고, 점을 중첩으로 풀어 놓을 때도 있다
 * (`{"today": {"title": "..."}}`). 한 쪽만 읽으면 멀쩡한 번역이 통째로 버려지고 en이 남는다
 * (실제로 388개 중 대부분이 그렇게 떨어졌다). 둘 다 받는다.
 */
function lookup(got: Record<string, unknown>, leaf: Leaf): unknown {
  const path = leaf.path;
  let node: unknown;
  if (path in got) {
    node = got[path];
  } else {
    node = got;
    for (const key of path.split(".")) {
      if (!node || typeof node !== "object") return undefined;
      node = (node as Record<string, unknown>)[key];
    }
  }

  // **값 자리에 객체가 오는 일이 흔하다.** 입력을 `{path: {en, ko}}`로 주면 모델이 그 모양을
  // 그대로 되비춰 `{path: {en: "Wood", ja: "木"}}`로 돌려준다. 문자열만 받으면 388개 중
  // 대부분이 버려지고 en이 남는다(실제로 그랬다). 안쪽에서 번역을 꺼낸다.
  if (node && typeof node === "object" && !Array.isArray(node)) {
    const inner = node as Record<string, unknown>;
    const candidate = inner[locale] ?? inner.translation ?? inner.value ?? inner.text;
    return typeof candidate === "string" ? candidate : undefined;
  }
  return node;
}

/**
 * **en에 없는 강조는 걷어낸다.**
 *
 * 모델이 제 판단으로 `**`를 붙이는 일이 잦다 — "붙이지 말라"고 못 박아도 반복된다(vi에서
 * 두 번 다시 불러도 같았다). 붙일 자리가 en에 애초에 없으면 그 표기는 번역이 아니라 장식이니
 * 기계적으로 지운다. 되묻는 것보다 확실하고, 한 번 더 부르는 값도 아끼게 된다.
 *
 * **en에 강조가 있는데 개수가 다른 경우는 손대지 않는다.** 그건 어느 구절을 강조할지가
 * 어긋난 것이라 지우면 뜻이 바뀐다 — 그 잎은 en으로 되돌리는 편이 낫다.
 */
function normalize(value: string, base: string): string {
  return boldCount(base) === 0 ? value.replace(/\*\*/g, "") : value;
}

/** 자리표시자·강조가 어긋난 잎만 골라 낸다. 통째로 다시 부르지 않고 그것만 고친다. */
function badLeaves(items: Leaf[], got: Record<string, unknown>) {
  return items.filter((leaf) => {
    const raw = lookup(got, leaf);
    if (typeof raw !== "string" || !raw.trim()) return true;
    const value = normalize(raw, leaf.en);
    if (placeholders(value) !== placeholders(leaf.en)) return true;
    if (boldCount(value) !== boldCount(leaf.en)) return true;
    // **en을 그대로 돌려준 것은 번역이 아니다.** 짧은 낱말은 우연히 같을 수 있으니 긴 문장만
    // 본다(`verify-i18n`이 경고로 잡는 것과 같은 기준). 걸리면 한 번 더 부른다.
    if (value === leaf.en && leaf.en.length > 20) return true;
    return false;
  });
}

const translated: Record<string, string> = {};

/**
 * `--only`로 일부 절만 다시 만들 때, **이미 번역된 나머지를 먼저 실어 둔다.**
 *
 * 이걸 하지 않으면 `rebuild`가 `translated`에 없는 잎을 전부 en으로 되돌린다 — 한 절을
 * 고치려다 나머지 스물세 절을 영어로 날리는 셈이다.
 */
function seedFromExistingFile() {
  const file = path.join(DIR, `${locale}.ts`);
  if (!only || !existsSync(file)) return;
  const source = readFileSync(file, "utf8");
  const start = source.indexOf("= {");
  if (start < 0) return;
  const body = source.slice(start + 2).trimEnd().replace(/;$/, "");
  let previous: unknown;
  try {
    previous = JSON.parse(body);
  } catch {
    // **경고로 두면 안 되는 자리다.** 예전에는 여기서 경고만 찍고 계속 진행했는데, 그러면
    // `--only dream`이 지정하지 않은 스물몇 절을 통째로 en으로 되돌린다. 로그 한 줄은 묻히고
    // 파일은 멀쩡히 컴파일되므로 **겉으로는 성공처럼 보인다**(실측). 손으로 쓴 파일은 JSON이
    // 아니라 이 경로에 반드시 걸린다 — 그때는 `--only` 없이 통째로 다시 만들 것.
    console.error(
      `기존 ${locale}.ts를 JSON으로 읽지 못했습니다. --only로 진행하면 지정하지 않은 절이\n` +
        "전부 en으로 덮입니다. --only를 빼고 통째로 다시 만드십시오.",
    );
    process.exit(1);
  }
  const seeded: Leaf[] = [];
  collect(previous, previous, [], seeded);
  for (const leaf of seeded) translated[leaf.path] = leaf.en;
  console.log(`  기존 파일에서 ${seeded.length}개를 이어받았습니다.`);
}

// tsx가 이 스크립트를 CJS로 돌려 최상위 await를 쓸 수 없다(verify-i18n과 같은 이유).
async function main() {
  seedFromExistingFile();
  // 물려받은 값을 먼저 깐다. `rebuild`가 여기 없는 잎만 en으로 되돌리므로 순서가 중요하다.
  for (const [key, value] of inherited) translated[key] = value;
  const toTranslate = sections.reduce((sum, section) => sum + itemsOf(section).length, 0);
  console.log(
    `  인연링크에서 물려받음 ${inherited.size}개 · 새로 번역 ${toTranslate}개 (전체 ${leaves.length}개)`,
  );
for (const section of sections) {
  const items = itemsOf(section);
  // 절이 통째로 물려받은 것이면 부를 이유가 없다.
  if (items.length === 0) {
    console.log(`    ${section} — 전부 물려받음`);
    continue;
  }
  let got: Record<string, unknown> = {};
  try {
    // 나눠 보낸다. 한 덩이가 실패해도 나머지는 살아남는다.
    for (let at = 0; at < items.length; at += CHUNK) {
      const chunk = items.slice(at, at + CHUNK);
      got = { ...got, ...(await translateWithBackoff(section, chunk)) };
    }
  } catch (error) {
    console.error(`FAIL ${section} — ${(error as Error).message}`);
    process.exitCode = 1;
    continue;
  }

  let bad = badLeaves(items, got);
  if (bad.length) {
    // 한 번만 다시 부른다. 그래도 어긋나면 en을 그대로 두고 표시한다 — 자리표시자가 깨진
    // 문자열을 넣느니 영어가 낫다(화면은 뜨고, 검사기가 "en과 동일"로 경고해 준다).
    const retry = await translateWithBackoff(section, bad);
    got = { ...got, ...retry };
    bad = badLeaves(items, got);
  }

  // **끝까지 어긋난 잎은 en으로 되돌린다.** 예전에는 이 자리에서 "값이 문자열이면 쓴다"만
  // 보아, 재시도 뒤에도 자리표시자·강조가 깨진 문자열이 그대로 파일에 들어갔다(vi에서 16건).
  // 로그에는 "en 유지"라고 찍으면서 실제로는 유지하지 않았다 — 로그와 동작이 갈린 자리다.
  const stillBad = new Set(bad.map((leaf) => leaf.path));
  for (const leaf of items) {
    const raw = lookup(got, leaf);
    const usable = typeof raw === "string" && raw.trim() && !stillBad.has(leaf.path);
    translated[leaf.path] = usable ? normalize(raw as string, leaf.en) : leaf.en;
  }
  console.log(
    `  ${bad.length ? "!" : " "} ${section} — ${items.length}개${bad.length ? `, ${bad.length}개는 en 유지` : ""}`,
  );
  // **어느 잎이 남았는지 찍는다.** 개수만 알면 어디를 손봐야 할지 모른다.
  for (const leaf of bad) {
    const value = lookup(got, leaf);
    console.log(
      `      · ${leaf.path} — ${
        typeof value !== "string"
          ? `값이 ${value === undefined ? "없음" : typeof value}`
          : placeholders(value) !== placeholders(leaf.en)
            ? `자리표시자 [${placeholders(value) || "없음"}] ≠ en [${placeholders(leaf.en) || "없음"}]`
            : `** ${boldCount(value)}개 ≠ en ${boldCount(leaf.en)}개`
      }`,
    );
  }
}
  write();
}

/** en의 구조를 복사하며 잎만 갈아 끼운다. 구조는 손대지 않는다. */
function rebuild(node: unknown, trail: string[]): unknown {
  if (typeof node === "string") {
    const key = trail.join(".");
    return key in translated ? translated[key] : node;
  }
  if (Array.isArray(node)) return node.map((item, index) => rebuild(item, [...trail, String(index)]));
  if (node && typeof node === "object") {
    return Object.fromEntries(
      Object.entries(node).map(([key, value]) => [key, rebuild(value, [...trail, key])]),
    );
  }
  return node;
}

function write() {
const built = rebuild(en, []) as Dictionary;

if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true });
const file = path.join(DIR, `${locale}.ts`);

const header = [
  `// 드림링크 화면 사전의 ${localeLanguageName(locale)}(${locale}) 번역이다.`,
  "//",
  "// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로",
  "// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나",
  "// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.",
  "//",
  "// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어",
  "// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.",
  "",
  'import type { Dictionary } from "@/lib/i18n";',
  "",
  `export const ${locale}: Dictionary = ${JSON.stringify(built, null, 2)};`,
  "",
].join("\n");

writeFileSync(file, header);
console.log(`\nwritten: ${file}`);
}

void main();
