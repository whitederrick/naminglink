// 드림링크 약관 4종을 ko 원본에서 나머지 21개 로케일로 번역해 파일로 쓴다.
//
// 왜 필요한가: `getLegalDocument`가 `locale === "ko" ? ko : en`이었다. 화면 사전은 23로케일인데
// **약관 본문만 21개 언어에서 영어로 나갔다.** PDF를 파는 이상 naminglink 결제 고지와 같은
// 문제가 된다 — 구매자가 읽지 못하는 언어의 고지는 법이 요구하는 조치로 보기 어렵다.
//
// 실행 전: ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/extract-ko-legal.ts
// 실행:    node scripts/translate-legal.mjs [로케일 ...]   (생략하면 21개 전부)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "src", "lib", "legal-locales");

// OpenAI 키는 naminglink 쪽 .env.local에만 있다(같은 계정을 쓴다). 인연링크 .env.local이
// **있더라도** 키가 없을 수 있으므로, 파일 존재가 아니라 **키 존재**로 판단해 둘을 합친다.
function readEnv(file) {
  if (!existsSync(file)) return {};
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split(/\r?\n/)
      .filter((line) => line.includes("=") && !line.trimStart().startsWith("#"))
      .map((line) => {
        const at = line.indexOf("=");
        return [line.slice(0, at).trim(), line.slice(at + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
}
const env = {
  ...readEnv(path.join(ROOT, "..", "naminglink", ".env.local")),
  // 인연링크 쪽 값이 있으면 그것이 우선이다.
  ...Object.fromEntries(
    Object.entries(readEnv(path.join(ROOT, ".env.local"))).filter(([, value]) => value),
  ),
};
if (!env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY를 두 앱의 .env.local 어디에서도 찾지 못했습니다.");
  process.exit(1);
}

const LANG_NAMES = {
  ja: "Japanese", zh: "Simplified Chinese", de: "German", es: "Spanish", fr: "French",
  it: "Italian", pt: "Portuguese", vi: "Vietnamese", th: "Thai", id: "Indonesian",
  ru: "Russian", ar: "Arabic", fil: "Filipino", uz: "Uzbek", mn: "Mongolian",
  hi: "Hindi", tr: "Turkish", km: "Khmer", ms: "Malay", kk: "Kazakh", pl: "Polish",
};

const COMBOS = ["a0p0", "a1p0", "a0p1", "a1p1"];
const KEYS = ["privacy", "terms", "refund", "pricing"];
// ⚠️ **이 목록이 `legal-content.ts`의 `fillPlaceholders`와 같아야 한다.** 여기 빠진 표시는
// 번역기가 "지켜야 할 것"으로 보지 않으므로 모델이 번역해 버리고, 그러면 그 자리가 렌더 시점에
// 치환되지 않아 화면에 `{...}`가 그대로 나가거나 가격이 통째로 빠진다. 실제로 둘째 상품의 가격
// 표시 두 개가 이 목록에 없는 채로 있었다(2026-08-06에 이름을 바로잡으며 함께 고침).
const PLACEHOLDER =
  /\{(customerCenter|email|hostingProvider|privacyOfficer|priceCardDomestic|priceCardGlobal|priceConceptionDomestic|priceConceptionGlobal)\}/g;

const koDocs = JSON.parse(readFileSync(path.join(DIR, "_ko-docs.json"), "utf8"));

/** 같은 내용이 조합마다 반복되므로 한 번만 번역한다. */
function uniqueDocuments() {
  const byHash = new Map();
  for (const combo of COMBOS) {
    for (const key of KEYS) {
      const doc = koDocs[combo][key];
      const hash = JSON.stringify(doc);
      if (!byHash.has(hash)) byHash.set(hash, { doc, key, id: byHash.size });
    }
  }
  return byHash;
}

function placeholdersOf(value) {
  return [...JSON.stringify(value).matchAll(PLACEHOLDER)].map((m) => m[0]).sort().join(",");
}

/** 번역이 구조를 그대로 지켰는지 본다. 어긋나면 그 로케일은 쓰지 않는다. */
function assertSameShape(source, translated, label) {
  if (translated.sections?.length !== source.sections.length) {
    throw new Error(`${label}: 섹션 수 ${translated.sections?.length} ≠ ${source.sections.length}`);
  }
  source.sections.forEach((section, index) => {
    const other = translated.sections[index];
    if (other.paragraphs?.length !== section.paragraphs.length) {
      throw new Error(`${label} 섹션 ${index + 1}: 문단 수 ${other.paragraphs?.length} ≠ ${section.paragraphs.length}`);
    }
    const sourceBullets = section.bullets?.length ?? 0;
    const otherBullets = other.bullets?.length ?? 0;
    if (sourceBullets !== otherBullets) {
      throw new Error(`${label} 섹션 ${index + 1}: 항목 수 ${otherBullets} ≠ ${sourceBullets}`);
    }
  });
  if (placeholdersOf(source) !== placeholdersOf(translated)) {
    throw new Error(
      `${label}: 플레이스홀더가 달라졌다 — 원본 [${placeholdersOf(source)}] / 번역 [${placeholdersOf(translated)}]`,
    );
  }
}

async function ask(langName, payload, shapeHint) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.15,
      // **출력 한도를 명시한다.** 기본값에 기대면 힌디어·카자흐어처럼 문자당 토큰이 많이 드는
      // 언어에서 JSON이 중간에 잘린다("Unterminated string in JSON"). 재시도로는 안 고쳐진다 —
      // 같은 자리에서 다시 잘리기 때문이다.
      max_tokens: 16384,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            `You are a legal localizer for Dreams-Link, a Korean dream-reading (해몽) web service: a visitor writes down a dream and the service looks up its symbols in a dictionary of traditional Korean dream lore. Translate the given Korean legal document into ${langName}.`,
            "Translate faithfully and formally, as legal/policy text — not marketing copy.",
            "CRITICAL: keep every placeholder token EXACTLY as-is, unchanged and untranslated: {customerCenter} {email} {hostingProvider} {privacyOfficer} {priceCardDomestic} {priceCardGlobal} {priceConceptionDomestic} {priceConceptionGlobal}. They are substituted with real values at runtime.",
            "Keep unchanged ONLY these proper names: Dreams-Link, Google AdSense, Supabase Inc., Vercel Inc., PortOne, Toss Payments; plus URLs and domains (google.com/settings/ads, aboutads.info/choices) and all numbers.",
            "CRITICAL: product names are NOT brands — translate them. '꿈 카드' must become the target-language phrase for \"dream card\" (a single image, not a PDF), '태몽 리포트' the phrase for \"conception-dream report\". Leaving them in Korean is a mistranslation.",
            "CRITICAL: never let the translation promise more than the Korean does. The service does not predict the future, and it never determines pregnancy or the sex of a child — where the Korean hedges, keep the hedge exactly as strong.",
            "CRITICAL: the output must contain NO Korean (Hangul) characters, with one exception — you may put a Korean term in parentheses right after its translation as a gloss, e.g. \"conception dream (태몽)\". Never leave a Korean word or sentence standing on its own.",
            "CRITICAL: this service reads dreams through KOREAN tradition, and it is operated under KOREAN law. Never substitute the reader's own country or legal system for Korea, and never turn it into a compatibility or fortune-telling service.",
            "Markdown emphasis written as **text** must stay **text** with the emphasis on the same phrase.",
            shapeHint,
          ].join(" "),
        },
        { role: "user", content: JSON.stringify(payload) },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error(`번역 실패: ${response.status} ${await response.text()}`);
  }
  const data = await response.json();
  const content = data.choices?.[0]?.message?.content ?? "{}";
  if (data.choices?.[0]?.finish_reason === "length") {
    throw new Error("응답이 출력 한도에서 잘렸다(length)");
  }
  return JSON.parse(content);
}

const DOC_SHAPE =
  'Return JSON with EXACTLY this shape and the SAME counts as the input: {"title":"...","intro":"...","effectiveLabel":"...","sections":[{"heading":"...","paragraphs":["..."],"bullets":["..."]}]}. Include "bullets" only where the input has it. Do not add, drop, split, or merge any item.';

const SECTION_SHAPE =
  'Return JSON with EXACTLY this shape and the SAME counts as the input: {"heading":"...","paragraphs":["..."],"bullets":["..."]}. Include "bullets" only if the input has it. Do not add, drop, split, or merge any item.';

/** 문서 전체를 한 번에 옮긴다. 빠르지만 긴 문서·토큰이 많이 드는 언어에서는 잘릴 수 있다. */
async function translateDocument(langName, docKey, source) {
  return ask(langName, { document: docKey, ...source }, DOC_SHAPE);
}

/**
 * 섹션을 하나씩 옮긴다.
 *
 * 한 번에 받는 양이 작아 **출력 한도에 걸리지 않고**, 모델이 지켜야 할 구조도 그만큼 단순해져
 * 섹션 수를 틀릴 여지가 없다(섹션 수는 우리가 정한다). 느린 대신 확실해서, 전체 번역이 두 번
 * 실패한 문서에만 쓴다.
 */
async function translateBySection(langName, docKey, source) {
  const head = await ask(
    langName,
    { document: docKey, title: source.title, intro: source.intro, effectiveLabel: source.effectiveLabel },
    'Return JSON: {"title":"...","intro":"...","effectiveLabel":"..."}.',
  );
  const sections = [];
  for (const section of source.sections) {
    sections.push(await ask(langName, { document: docKey, ...section }, SECTION_SHAPE));
  }
  return { ...head, sections };
}

/**
 * 문장 하나씩 옮긴다. **구조를 모델에게 맡기지 않는다** — 문단·항목의 개수와 순서는 우리가
 * 정하고, 모델은 문자열 하나를 번역할 뿐이다.
 *
 * 섹션 단위로도 문단을 합쳐 버리는 언어가 있어서 넣었다(mn이 그랬다: 4문단 → 3문단).
 * 호출 수가 많아 느리지만, 이 방식으로도 실패하면 그건 번역기 문제가 아니라 우리 입력 문제다.
 */
async function translateByItem(langName, docKey, source, stringCache) {
  const one = async (text) => {
    // **문자열 단위로 캐시한다.** 문단 하나를 옮길 때마다 저장해 두면 중간에 멈춰도 다음
    // 실행이 이어서 한다(문서 단위 캐시만으로는 이 안에서의 진행이 통째로 날아갔다).
    // 덤으로 8개 문서가 상당 부분 같은 문장을 공유해서 호출 수 자체가 크게 줄어든다.
    if (stringCache?.get(text)) return stringCache.get(text);
    const result = await ask(
      langName,
      { document: docKey, text },
      'Return JSON: {"text":"..."} — a single translated string. Never split or merge sentences.',
    );
    if (typeof result.text !== "string" || !result.text.trim()) {
      throw new Error("빈 번역이 돌아왔다");
    }
    stringCache?.set(text, result.text);
    return result.text;
  };

  const sections = [];
  for (const section of source.sections) {
    const paragraphs = [];
    for (const paragraph of section.paragraphs) paragraphs.push(await one(paragraph));
    const translated = { heading: await one(section.heading), paragraphs };
    if (section.bullets) {
      const bullets = [];
      for (const bullet of section.bullets) bullets.push(await one(bullet));
      translated.bullets = bullets;
    }
    sections.push(translated);
  }
  return {
    title: await one(source.title),
    intro: await one(source.intro),
    effectiveLabel: await one(source.effectiveLabel),
    sections,
  };
}

function fileSource(locale, translations, layout) {
  const consts = translations
    .map((doc, index) => `const d${index} = ${JSON.stringify(doc, null, 2)};`)
    .join("\n\n");
  const combos = COMBOS.map((combo) => {
    const entries = KEYS.map((key) => `    ${key}: d${layout[combo][key]},`).join("\n");
    return `  ${combo}: {\n${entries}\n  },`;
  }).join("\n");
  return `import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

${consts}

export const ${locale}: LegalLocaleDocuments = {
${combos}
};
`;
}

async function main() {
  const args = process.argv.slice(2);
  // `--item`: 처음부터 문장 단위로 간다. 통째 번역이 반드시 실패하는 언어(hi처럼 출력이
  // 잘리는 쪽)에서 앞의 세 번을 매번 버리지 않도록 둔 스위치다.
  const forceItem = args.includes("--item");
  const requested = args.filter((arg) => LANG_NAMES[arg]);
  const targets = requested.length ? requested : Object.keys(LANG_NAMES);

  const unique = uniqueDocuments();
  const uniqueList = [...unique.values()];
  // 조합·문서 → 번역 배열 인덱스
  const layout = {};
  for (const combo of COMBOS) {
    layout[combo] = {};
    for (const key of KEYS) {
      layout[combo][key] = unique.get(JSON.stringify(koDocs[combo][key])).id;
    }
  }
  console.log(`번역 대상 문서 ${uniqueList.length}개 × 로케일 ${targets.length}개\n`);

  // **문서 하나가 끝날 때마다 캐시에 적는다.** 로케일 하나가 8개 문서고, 문장 단위까지
  // 내려가면 호출이 수백 번이라 한 번에 못 끝내는 경우가 있다(hi가 그랬다). 캐시가 없으면
  // 중간에 멈출 때마다 처음부터 다시 하게 된다. `tmp/`는 .gitignore에 있다.
  const cacheDir = path.join(ROOT, "tmp", "legal-translation-cache");
  mkdirSync(cacheDir, { recursive: true });
  const cachePath = (locale) => path.join(cacheDir, `${locale}.json`);
  const readCache = (locale) =>
    existsSync(cachePath(locale)) ? JSON.parse(readFileSync(cachePath(locale), "utf8")) : {};

  const stringCachePath = (locale) => path.join(cacheDir, `${locale}.strings.json`);

  for (const locale of targets) {
    const langName = LANG_NAMES[locale];
    const cache = readCache(locale);
    // 문자열 캐시는 디스크에 즉시 반영한다 — 중단이 잦아 메모리에만 두면 소용이 없다.
    const stringStore = existsSync(stringCachePath(locale))
      ? new Map(Object.entries(JSON.parse(readFileSync(stringCachePath(locale), "utf8"))))
      : new Map();
    const stringCache = {
      get: (key) => stringStore.get(key),
      set: (key, value) => {
        stringStore.set(key, value);
        writeFileSync(
          stringCachePath(locale),
          JSON.stringify(Object.fromEntries(stringStore)),
          "utf8",
        );
      },
    };
    try {
      const translations = [];
      for (const item of uniqueList) {
        if (cache[item.id]) {
          translations.push(cache[item.id]);
          continue;
        }
        // **구조가 어긋나면 다시 시킨다.** 실패는 결정적이지 않다 — 같은 입력이 한 번은 섹션
        // 수를 틀리고 다음 번엔 맞는다(de가 실제로 그랬다). 모델 출력 변동이라 재시도로 해결되고,
        // 그래도 안 되면 그 로케일만 건너뛴다(깨진 약관을 저장하는 것보다 낫다).
        let translated;
        let lastError;
        // 한 번 잘린 문서는 다시 시켜도 같은 자리에서 잘린다. 그때는 재시도를 건너뛰고
        // 곧바로 섹션 단위로 간다.
        let sectionMode = false;
        // 1~2회차 문서 통째 → 3회차 섹션 단위 → 4회차 문장 단위로 좁혀 간다.
        // 뒤로 갈수록 모델에게 남는 구조 재량이 줄어 실패할 여지가 없어진다.
        for (let attempt = forceItem ? 4 : 1; attempt <= 4; attempt += 1) {
          try {
            const candidate =
              attempt === 4
                ? await translateByItem(langName, item.key, item.doc, stringCache)
                : attempt < 3 && !sectionMode
                  ? await translateDocument(langName, item.key, item.doc)
                  : await translateBySection(langName, item.key, item.doc);
            assertSameShape(item.doc, candidate, `${locale}/${item.key}#${item.id}`);
            translated = candidate;
            break;
          } catch (error) {
            lastError = error;
            // 잘림·JSON 파손은 분량 문제라 같은 방식으로는 반복된다. 바로 전환한다.
            if (/출력 한도|JSON/.test(error.message)) sectionMode = true;
            if (attempt < 4) {
              const next =
                attempt === 3
                  ? " → 문장 단위로 전환"
                  : sectionMode || attempt === 2
                    ? " → 섹션 단위로 전환"
                    : "";
              console.log(
                `        retry ${locale}/${item.key}#${item.id} (${attempt}회차 실패: ${error.message})${next}`,
              );
            }
          }
        }
        if (!translated) throw lastError;
        cache[item.id] = translated;
        writeFileSync(cachePath(locale), JSON.stringify(cache), "utf8");
        translations.push(translated);
      }
      writeFileSync(
        path.join(DIR, `${locale}.ts`),
        fileSource(locale, translations, layout),
        "utf8",
      );
      console.log(`  ok    ${locale}`);
    } catch (error) {
      console.log(`  FAIL  ${locale} — ${error.message}`);
    }
  }
}

void main();
