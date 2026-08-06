// 상징 사전을 넓힌다.
//
// ## 왜 넓히는가
//
// 215개는 동물 44·물건 46으로 기울어 있고, 사람들이 실제로 꾸는 축이 통째로 비어 있었다 —
// 성·관계, 직장·학교, 가족, 교통, 몸의 감각, 감정·상황. 실측하면 "회사 동료와 섹스하는 꿈"에
// 0건이 나온다. 상징 페이지가 곧 검색 유입이므로(`lib/symbol-pages.ts`) 사전을 넓히는 것이
// 그대로 색인과 광고 수익으로 이어진다.
//
// ## 지어내지 않게 하는 세 가지
//
// 이 서비스의 규칙은 "전통에 있는 것만 말한다"이다. 사전이 커질수록 그 규칙이 위태로워지므로
// 절차로 막는다.
//
//   1. **널리 통용되는 것만.** 프롬프트가 "한국 민속에서 정착된 해석"으로 못 박고, 근거가
//      흔들리면 내놓지 말라고 지시한다.
//   2. **독립으로 두 번 받아 일치하는 것만 채택.** 같은 상징의 뜻을 두 번 따로 묻고, 길흉
//      (polarity)이 갈리거나 주제(tags)가 하나도 안 겹치면 **버린다.** 모델이 지어낸 것은 두
//      번 같게 나오기 어렵다.
//   3. **사람이 마지막에 본다.** `tmp/dictionary-review.tsv`로 뽑아 눈으로 검수한다.
//
// ## 성 관련 상징
//
// 전통 해몽에 분명히 있고 검색량도 큰 축이라 넣는다(사용자 승인, 2026-08-06). 다만 애드센스가
// 붙은 사이트이므로 **서술 수위를 보수적으로** 잡는다 — "전통적으로 …로 보았다" 꼴의 해석만
// 적고 묘사는 하지 않는다. 프롬프트가 그것을 지시한다.
//
// 실행: apps/dreamslink 에서  node scripts/expand-dictionary.mjs [--axis 성]
// 산출: src/lib/dream-symbols.data.json (병합) + tmp/dictionary-review.tsv (검수용)

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DATA = path.join(process.cwd(), "src", "lib", "dream-symbols.data.json");

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
  ...readEnv(path.join(process.cwd(), "..", "naminglink", ".env.local")),
  ...Object.fromEntries(
    Object.entries(readEnv(path.join(process.cwd(), ".env.local"))).filter(([, v]) => v),
  ),
};
if (!env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY를 찾지 못했습니다.");
  process.exit(1);
}

/**
 * 채울 축과 몇 개씩 받을지.
 *
 * `category`는 사전이 이미 쓰는 값이라 새로 만들지 않는다 — 목록 화면(`/dream/symbols`)이
 * 그 값으로 묶고, 없는 갈래가 들어오면 이름 없이 뜬다.
 */
/**
 * ⚠️ **축을 구체적 형상으로만 잡는다.** 처음에는 「성·관계」·「감정·상황」처럼 추상으로 잡았다가
 * 못 쓸 것을 받았다 — 「애정의 상실 → 이별의 예감」, 「사랑의 상징 → 좋은 인연」. 관문을 조여도
 * 채우는 말만 바뀌었지 나아지지 않았다.
 *
 * 같은 절차로 「먹을거리」를 돌리면 밥→재물·풍요, 떡→경사, 술상→손님처럼 **제대로 나온다.**
 * 차이는 관문이 아니라 **축이 꿈에 실제로 나오는 형상인가**였다. 전통 해몽은 사물과 행위를
 * 말하지 감정을 말하지 않는다.
 *
 * 축을 더할 때는 그 축의 예시를 눈으로 읽어 볼 것 — 「~의 ~」 꼴이 섞이면 추상이다.
 */
const AXES = [
  { name: "먹을거리", category: "object", count: 20, hint: "밥·국·떡·생선·과일·술상·잔치상처럼 **꿈에 보이는 음식과 상차림**." },
  { name: "교통·이동", category: "object", count: 20, hint: "기차·버스·비행기·배·엘리베이터·다리·터널·자전거처럼 **타거나 건너는 것**." },
  { name: "집·생활", category: "object", count: 22, hint: "문·계단·창문·거울·열쇠·이불·솥·마당·우물처럼 **집 안팎의 사물**." },
  { name: "자연·날씨", category: "nature", count: 18, hint: "폭풍·가뭄·해일·일출·안개·서리·낙엽·우박처럼 **눈에 보이는 자연 현상**." },
  { name: "몸", category: "body", count: 20, hint: "머리·눈썹·배꼽·손톱·상처·흰머리처럼 **몸의 부위와 눈에 보이는 변화**. 병명은 넣지 말 것." },
  { name: "사람", category: "person", count: 20, hint: "신랑·신부·아이·임신부·스승·장수·거지·환자처럼 **꿈에 나타나는 사람의 모습**." },
  { name: "장소", category: "place", count: 20, hint: "절·교회·시장·다리 위·학교·감옥·무덤가처럼 **꿈에서 가 있는 곳**." },
  { name: "행위", category: "action", count: 22, hint: "쫓김·숨음·떨어짐·갇힘·헤엄·불 끄기·짐 싸기처럼 **몸으로 하는 일**. 감정은 넣지 말 것." },
  { name: "의례", category: "action", count: 14, hint: "혼례·장례·제사·굿·성묘처럼 **치르는 의식**. 불안을 키우지 않는 서술로." },
  { name: "혼인·잠자리", category: "action", count: 14, hint: "혼례상·신방·합방·벌거벗음·목욕처럼 **혼인과 잠자리의 형상**. 행위 묘사 없이 전통 해석만." },
];

const raw = JSON.parse(readFileSync(DATA, "utf8"));
const existingTerms = new Set(
  raw.symbols.flatMap((s) => [s.term_ko, s.term_en, ...(s.aliases ?? [])].filter(Boolean)),
);
const existingIds = new Set(raw.symbols.map((s) => s.id));

async function ask(messages, temperature) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: env.OPENAI_MODEL ?? "gpt-4o-mini",
        temperature,
        response_format: { type: "json_object" },
        messages,
      }),
    });
    if (response.ok) return JSON.parse((await response.json()).choices[0].message.content);
    if (response.status === 429 || response.status >= 500) {
      await new Promise((r) => setTimeout(r, attempt * 5000));
      continue;
    }
    throw new Error(`HTTP ${response.status} ${(await response.text()).slice(0, 200)}`);
  }
  throw new Error("재시도 실패");
}

/**
 * **첫 시도가 못 쓸 물건을 냈다**(2026-08-06). 「연애 → 좋은 인연」, 「포옹 → 정서적 안정」처럼
 * 동어반복이거나 현대 심리 설명이었고, `culture_note`는 표제어를 되풀이할 뿐이었다. 두 번 물어
 * 일치를 보는 관문은 **흔들림은 걸러도 공허함은 못 거른다** — 두 번 다 같은 뻔한 말을 하기
 * 때문이다.
 *
 * 그래서 기존 사전이 왜 좋은지를 그대로 규칙으로 옮겼다:
 *
 *   표제어   구체적 형상        이빨 빠짐 · 똥 · 불   (× 애정의 상실 · 연애운)
 *   풀이     전통적 길흉 결과   재물·횡재수 · 구설    (× 좋은 인연 · 감정의 고통)
 *   배경     전승 근거          윗니=윗사람           (× "연애는 행복한 관계를 상징함")
 */
const RULES = [
  "You are compiling a dictionary of TRADITIONAL KOREAN dream symbolism (해몽), in the style of 해몽 books.",
  "A symbol must be something CONCRETE that literally appears in a dream — an object, animal, place, body part, or a physical event ('이가 빠진다', '물에 빠진다', '똥을 밟는다'). NEVER abstract states or feelings ('애정의 상실', '연애운', '감정의 고통'): those are not dream imagery.",
  "The reading must be the TRADITIONAL CONSEQUENCE the dream was believed to foretell — money, a quarrel, a guest, illness in the family, a conception omen, a journey. It must NOT restate what the symbol literally means. '연애 → 좋은 인연' and '포옹 → 정서적 안정' are both WRONG: the first is circular, the second is modern psychology.",
  "culture_note must carry the actual transmitted reasoning ('윗니는 윗사람, 아랫니는 아랫사람'). If you cannot state a real transmitted basis, leave it EMPTY — never restate the symbol.",
  "If a symbol has no settled traditional reading in Korean folk belief, LEAVE IT OUT. An incomplete dictionary is fine; an invented one destroys the service.",
  "Keep interpretations SHORT — a noun phrase, like the existing entries: '재물·횡재수', '가족의 우환', '구설·건강 주의'.",
  "For symbols about sex or romance, give only the traditional reading in restrained language. Never describe acts. This site carries advertising.",
  "Never predict medical outcomes, pregnancy, or a child's sex as fact.",
  "Reply in JSON only.",
];

/**
 * 이미 쓰고 있는 주제 낱말. **새 상징의 주제는 여기에서만 고르게 한다.**
 *
 * 전통 해몽이 말하는 결과는 종류가 정해져 있다(재물·구설·손님·우환·태몽…). 새 태그를 자유롭게
 * 짓게 두었더니 「사랑」·「감정」처럼 결과가 아닌 낱말이 들어왔고, 그런 태그가 붙은 항목은 예외
 * 없이 동어반복이었다. **전통 어휘로 말할 수 없는 상징은 대개 전통 상징이 아니다.**
 */
const KNOWN_TAGS = [...new Set(raw.symbols.flatMap((s) => s.tags ?? []))];

/** 풀이가 표제어를 되풀이하는가. 「연애 → 좋은 인연」 같은 것을 걸러 낸다. */
function isCircular(termKo, interpretation) {
  const term = termKo.replace(/\s/g, "");
  const text = interpretation.replace(/\s/g, "");
  if (!term || !text) return true;
  // 표제어가 풀이 안에 통째로 들어 있으면 되풀이다(「이빨 빠짐 → 이가 빠지는 근심」).
  if (text.includes(term)) return true;
  // 두 글자 이상 겹치는 조각이 있으면 같은 말을 다르게 적은 것으로 본다.
  for (let at = 0; at + 2 <= term.length; at += 1) {
    if (text.includes(term.slice(at, at + 2))) return true;
  }
  return false;
}

/** 1단계 — 축마다 후보 낱말을 받는다. 뜻은 아직 묻지 않는다. */
async function candidatesFor(axis) {
  const got = await ask(
    [
      { role: "system", content: RULES.join(" ") },
      {
        role: "user",
        content: JSON.stringify({
          task: `List up to ${axis.count} Korean dream symbols for the theme: ${axis.name}. ${axis.hint}`,
          alreadyHave: [...existingTerms].slice(0, 400),
          shape: {
            symbols: [
              {
                id: "lowercase_english_id",
                term_ko: "한국어 표제어",
                term_en: "english term",
                aliases: ["사람들이 실제로 쓰는 다른 표기나 활용형 어간"],
              },
            ],
          },
          note: "Do not repeat anything in alreadyHave. Every entry must be concrete dream imagery, not an abstract state. Aliases matter: users type inflected verbs ('쫓겨서'), so give stems like '쫓기'.",
        }),
      },
    ],
    0.4,
  );
  // **모델이 돌려주는 모양이 흔들린다.** 배열을 `symbols`가 아니라 다른 키에 담거나 최상위
  // 배열로 주는 일이 있어, 어느 쪽이든 배열 하나를 찾아 쓴다. 못 찾으면 무엇을 받았는지 찍는다.
  const list = Array.isArray(got)
    ? got
    : Array.isArray(got.symbols)
      ? got.symbols
      : Object.values(got).find(Array.isArray);
  if (!list?.length) {
    console.log(`  (응답에서 목록을 못 찾음: ${JSON.stringify(got).slice(0, 200)})`);
    return [];
  }
  const kept = [];
  const dropped = [];
  for (const s of list) {
    if (!s?.term_ko?.trim() || !s?.term_en?.trim()) {
      dropped.push(`${s?.term_ko ?? "?"}(이름이 모자람)`);
      continue;
    }
    // **식별자는 우리가 만든다.** 모델에게 맡겼더니 `1`·`sexual_relations_1`처럼 제각각이거나
    // 아예 빼먹었다. 주소의 일부가 되는 값이라(`/dream/symbol/<id>`) 흔들리면 안 된다.
    const id = slugId(s.term_en, s.term_ko);
    if (existingIds.has(id)) {
      dropped.push(`${s.term_ko}(id 중복 ${id})`);
      continue;
    }
    if (existingTerms.has(s.term_ko.trim())) {
      dropped.push(`${s.term_ko}(이미 있음)`);
      continue;
    }
    kept.push({
      id,
      term_ko: s.term_ko.trim(),
      term_en: s.term_en.trim().toLowerCase(),
      aliases: (s.aliases ?? []).map((a) => String(a).trim()).filter(Boolean),
    });
    existingIds.add(id);
  }
  if (dropped.length) console.log(`  후보에서 뺌 ${dropped.length}: ${dropped.slice(0, 6).join(", ")}`);
  return kept;
}

/**
 * 2단계 — 뜻을 묻는다. **같은 물음을 두 번 따로 던진다.**
 *
 * ⚠️ **식별자로 맞추지 않는다.** 처음에는 우리 `id`를 함께 보내고 그대로 돌려 달라고 했는데,
 * 모델이 제 나름의 값(`1`·`sexual_relations_1`)을 붙이거나 아예 빼먹어 **스무 개가 전부
 * 「한쪽이 답하지 않음」으로 버려졌다.** 표제어는 내용이라 그럴 일이 적고, 그마저 어긋나면
 * 순서로 맞춘다(개수가 같을 때만).
 */
async function meaningsFor(batch, temperature) {
  const got = await ask(
    [
      { role: "system", content: RULES.join(" ") },
      {
        role: "user",
        content: JSON.stringify({
          task: "For each Korean dream symbol below, give its traditional reading. Keep the same order.",
          terms: batch.map((s) => s.term_ko),
          shape: {
            readings: [
              {
                term_ko: "그 표제어를 그대로",
                polarity: "positive | negative | neutral | ambivalent",
                tags: ["재물", "경계"],
                interpretation_ko: "짧은 명사구",
                interpretation_en: "short noun phrase",
                context: "이 뜻이 되는 상황(없으면 빈 문자열)",
                culture_note: "전해 오는 배경 한 줄(확실하지 않으면 빈 문자열)",
              },
            ],
          },
          allowedTags: KNOWN_TAGS,
          note: "One reading per term, same order, same count. tags MUST be chosen from allowedTags only — if none of them fits, this is probably not a traditional symbol, so give an empty tags array and we will drop it.",
        }),
      },
    ],
    temperature,
  );

  const list = Array.isArray(got) ? got : (Object.values(got).find(Array.isArray) ?? []);
  const byTerm = new Map();
  list.forEach((reading, index) => {
    const term =
      typeof reading?.term_ko === "string" && batch.some((s) => s.term_ko === reading.term_ko)
        ? reading.term_ko
        : list.length === batch.length
          ? batch[index].term_ko // 표제어가 어긋나면 순서로 맞춘다
          : null;
    if (term) byTerm.set(term, reading);
  });
  return byTerm;
}

/** 영문 표제어에서 주소에 쓸 식별자를 만든다. 겹치면 뒤에 숫자를 붙인다. */
function slugId(termEn, termKo) {
  const base = termEn
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
  const seed = base || `symbol_${[...termKo].map((c) => c.charCodeAt(0).toString(36)).join("")}`;
  let id = seed;
  let n = 2;
  while (existingIds.has(id)) id = `${seed}_${n++}`;
  return id;
}

/** 전통 해몽에 있을 수 없는 것. 첫 실행에서 실제로 여덟 개가 들어왔다. */
const MODERN = [
  "지하철", "고속도로", "횡단보도", "주차장", "자전거", "버스", "비행기", "엘리베이터",
  "휴대폰", "컴퓨터", "텔레비전", "냉장고", "아이스크림", "샐러드", "주스", "카페",
];

const CHUNK = 12;
const accepted = [];
const rejected = [];
const only = process.argv.includes("--axis")
  ? process.argv[process.argv.indexOf("--axis") + 1]
  : null;

for (const axis of AXES) {
  if (only && axis.name !== only) continue;
  const candidates = await candidatesFor(axis);
  console.log(`${axis.name}: 후보 ${candidates.length}개`);

  for (let at = 0; at < candidates.length; at += CHUNK) {
    const batch = candidates.slice(at, at + CHUNK);
    // **두 번을 따로 묻는다.** 온도를 달리해 같은 답이 우연히 반복되지 않게 한다.
    const [first, second] = await Promise.all([
      meaningsFor(batch, 0.2),
      meaningsFor(batch, 0.7),
    ]);

    for (const candidate of batch) {
      const a = first.get(candidate.term_ko);
      const b = second.get(candidate.term_ko);
      if (!a || !b) {
        rejected.push([candidate.term_ko, "한쪽이 답하지 않음"]);
        continue;
      }
      // 길흉이 갈리면 버린다 — 이용자에게 정반대로 나갈 수 있는 값이다.
      if (a.polarity !== b.polarity) {
        rejected.push([candidate.term_ko, `길흉 불일치 ${a.polarity}/${b.polarity}`]);
        continue;
      }
      // 주제가 하나도 안 겹치면 두 번이 서로 다른 이야기를 한 것이다.
      const shared = (a.tags ?? []).filter((tag) => (b.tags ?? []).includes(tag));
      if (!shared.length) {
        rejected.push([candidate.term_ko, `주제 불일치 ${(a.tags ?? []).join("·")} / ${(b.tags ?? []).join("·")}`]);
        continue;
      }
      if (!a.interpretation_ko?.trim() || !a.interpretation_en?.trim()) {
        rejected.push([candidate.term_ko, "풀이가 비었음"]);
        continue;
      }
      // **전통 어휘로 말할 수 없으면 전통 상징이 아니다.**
      const traditional = shared.filter((tag) => KNOWN_TAGS.includes(tag));
      if (!traditional.length) {
        rejected.push([candidate.term_ko, `주제가 전통 어휘 밖 ${shared.join("·")}`]);
        continue;
      }
      // 풀이가 표제어를 되풀이하면 아무것도 말하지 않은 것이다.
      if (isCircular(candidate.term_ko, a.interpretation_ko)) {
        rejected.push([candidate.term_ko, `되풀이 «${a.interpretation_ko}»`]);
        continue;
      }
      // **전승 근거를 못 대면 넣지 않는다.**
      //
      // 이 값이 품질을 가장 잘 가른다(2026-08-06 실측). 채택 66개 중 55개가 배경을 못 댔고,
      // 그 55개는 예외 없이 동어반복이거나 현대 심리 설명이었다. 「윗니는 윗사람」처럼 전해 오는
      // 이유를 댈 수 있어야 전통이 실재하는 것이고, 못 대면 모델이 지어낸 것이다.
      const note = a.culture_note?.trim();
      const usableNote = note && !isCircular(candidate.term_ko, note) ? note : "";
      if (!usableNote) {
        rejected.push([candidate.term_ko, "전승 근거를 못 댐"]);
        continue;
      }
      // 전통 해몽에 있을 수 없는 근대 사물은 뺀다. 지하철·고속도로·주차장이 실제로 들어왔다.
      if (MODERN.some((word) => candidate.term_ko.includes(word))) {
        rejected.push([candidate.term_ko, "근대 사물"]);
        continue;
      }

      accepted.push({
        id: candidate.id,
        term_ko: candidate.term_ko,
        term_en: candidate.term_en,
        ...(candidate.aliases?.length ? { aliases: candidate.aliases } : {}),
        category: axis.category,
        polarity: a.polarity,
        tags: traditional,
        weight: 1,
        ...(usableNote ? { culture_note: usableNote } : {}),
        meanings: [
          {
            ...(a.context?.trim() ? { context: a.context.trim() } : {}),
            interpretation_ko: a.interpretation_ko.trim(),
            interpretation_en: a.interpretation_en.trim(),
            polarity: a.polarity,
          },
        ],
      });
      existingIds.add(candidate.id);
      existingTerms.add(candidate.term_ko);
    }
    console.log(`  ${Math.min(at + CHUNK, candidates.length)}/${candidates.length} · 채택 ${accepted.length} · 버림 ${rejected.length}`);
  }
}

// **채택이 없으면 파일을 건드리지 않는다.** 판만 올라가면 캐시 키가 바뀌어 옛 결과가 전부
// 새로 계산되는데, 정작 사전은 그대로다.
if (accepted.length) {
  raw.symbols = [...raw.symbols, ...accepted];
  const [major, minor] = raw.dictVer.split(".").map(Number);
  raw.dictVer = `${major}.${minor + 1}.0`;
  writeFileSync(DATA, `${JSON.stringify(raw, null, 1)}\n`);
}

const tmp = path.join(process.cwd(), "tmp");
mkdirSync(tmp, { recursive: true });
writeFileSync(
  path.join(tmp, "dictionary-review.tsv"),
  ["표제어\t영문\t갈래\t길흉\t주제\t풀이\t배경", ...accepted.map((s) =>
    [s.term_ko, s.term_en, s.category, s.polarity, (s.tags ?? []).join("·"), s.meanings[0].interpretation_ko, s.culture_note ?? ""].join("\t"),
  )].join("\n"),
);

console.log(`\n채택 ${accepted.length}개 · 버림 ${rejected.length}개 · dictVer ${raw.dictVer} · 상징 ${raw.symbols.length}개`);
console.log("검수표: tmp/dictionary-review.tsv");
for (const [term, why] of rejected.slice(0, 15)) console.log(`  버림 ${term} — ${why}`);
