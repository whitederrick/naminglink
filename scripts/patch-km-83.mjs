// **배치 83(밀러 `Lamb` 열다섯)은 새 상징을 하나도 안 세운다.**
//
//   sheep(양)  ← 밀러 `Lamb` 열다섯. 주공해몽 일곱과 합쳐 스물둘이 된다
//
// ## 왜 「어린 양」을 새 상징으로 안 세웠나
//
// 「어린 양」은 기존 이름 「양」을 **부분 문자열로 품는다.** 그리고 「어린 양」의 「양」은
// 앞이 공백이고 뒤가 조사라 `isStandalone` 을 지난다 — 새 상징을 세우면 「어린 양을
// 보았다」에 **상징이 둘 뜬다**(§25 곁가지 — `findTerm` 은 상징마다 따로 돈다).
// 밀러 자신도 `[108] See Sheep.` 으로 제 임자를 가리킨다.
//
// ## 기존 판별어에서 **「어린」을 뺀다**(§30 곁가지)
//
// 「어미 양과 새끼 양을 봄」이 「어린」을 쥐고 있었다. 새로 넣는 열다섯이 **전부 「어린 양」**
// 이라, 그대로 두면 모든 새 문장이 그 옛 의미에 1점을 준다. 「어미 새끼 젖먹이」만 남긴다.
//
// ## 「도살」·「잡아」를 새 쪽에서 피한다
//
// 기존 「양을 잡거나 때림」이 「잡아 때리 때렸 죽였 도살」을 쥐고 있다. 새 「집에서 쓰려고
// 어린 양을 잡음」은 **「쓰려고 잡았다」**로 적어 겹침을 피했다(배치 43 — 새로 넣는 쪽만 간다).
//
// ## 영어는 `lamb` 을 못 쓴다
//
// `sheep` 의 `aliases_en` 에 「lamb」이 있어 **제 이름**이다 — 점수에서 빠진다.
// 「slaughter」는 기존 「slaughtered」의 부분 문자열, 「own」은 기존 「town」의 부분 문자열,
// 「skin」은 새 「skins」의 부분 문자열이라 셋 다 피했다. **「mothers」는 관문이 잡았다** —
// 기존 「어미 양과 새끼 양을 봄」이 「mother」를 쥐고 있다. 새 쪽에서 뺐다(배치 43).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-83.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

function fileOf(id) {
  for (const f of readdirSync(DIR)) {
    if (!/^km/.test(f)) continue;
    let rows;
    try {
      rows = JSON.parse(readFileSync(path.join(DIR, f), "utf8"));
    } catch {
      continue;
    }
    if (Array.isArray(rows) && rows.some((r) => r.id === id)) return f;
  }
  stop(`${id} 가 어느 km 파일에도 없다 — 파일이 바뀌었다.`);
}

const PATCHES = {
  sheep: {
    // **「양들」이 없으면 「어린 양들이 뛰놀았다」가 하나도 안 걸린다** — 「들」은 조사가
    // 아니라 접미사라 `isStandalone` 이 「양」도 「어린 양」도 버린다(§25 곁가지 4).
    // 프로브가 잡았다. 「양떼」는 있었지만 「양들」은 없었다.
    aliasesAdd: ["어린 양", "새끼 양", "양들", "양가죽", "양털", "양고기"],
    // 기존 판별어를 **좁힌다** — 「어린」을 뺀다.
    contextsReplace: {
      "어미 양과 새끼 양을 봄": ["어미 새끼 어린 젖먹이", "어미 새끼 젖먹이"],
    },
    contextsAdd: {
      "어린 양들이 푸른 들에서 뛰놂": "뛰놀 뛰노는 푸른",
      "죽은 어린 양을 봄": "죽은 주검",
      "흰 양털에 피가 묻어 있음": "피가 핏자국",
      "길 잃은 어린 양을 봄": "잃은 잃어버린 사라진",
      "양가죽을 봄": "가죽",
      "집에서 쓰려고 어린 양을 잡음": "쓰려고 잡았다",
      "양고기를 먹음": "고기를 갈비",
      "어린 양이 어미젖을 빪": "젖을 빨고",
      "개나 늑대가 어린 양을 물어뜯음": "늑대 물어뜯 개가",
      "어린 양이 우는 소리를 들음": "우는 울음 소리를",
      "눈보라나 비를 맞는 어린 양을 봄": "눈보라 비를 폭풍",
      "어린 양을 기름": "기르 키우",
      "어린 양을 품에 안음": "품에 안았 안고",
      "어린 양의 털을 깎음": "깎았 깎는",
      "여자가 양가죽을 벗기다 제 아이임을 앎": "여자가 벗기",
    },
    contextsEnAdd: {
      "어린 양들이 푸른 들에서 뛰놂": "frolicing pastures chaste bounteous",
      "죽은 어린 양을 봄": "dead sadness desolation",
      "흰 양털에 피가 묻어 있음": "blood fleece innocent betrayal",
      "길 잃은 어린 양을 봄": "lost wayward influence conduct",
      "양가죽을 봄": "skins comfort usurped",
      "집에서 쓰려고 어린 양을 잡음": "domestic uses sacrifice contentment",
      "양고기를 먹음": "chops illness anxiety welfare",
      "어린 양이 어미젖을 빪": "nourishment intelligent lovable beautiful",
      "개나 늑대가 어린 양을 물어뜯음": "dogs wolves devour insinuating villains",
      "어린 양이 우는 소리를 들음": "bleating generosity appealed",
      "눈보라나 비를 맞는 어린 양을 봄": "winter storm rain betterment",
      "어린 양을 기름": "environments pleasant profitable",
      "어린 양을 품에 안음": "carry arms encumbered lavish devotion",
      "어린 양의 털을 깎음": "shear cold mercenary inhumane",
      "여자가 양가죽을 벗기다 제 아이임을 앎": "peeling child sorrow rebound grief",
    },
  },
};

let changed = 0;

for (const [id, patch] of Object.entries(PATCHES)) {
  const file = fileOf(id);
  const p = path.join(DIR, file);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (row.aliases.includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.aliases.push(w);
    changed++;
  }
  for (const [k, [before, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
    row.contexts[k] = after;
    changed++;
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (k in row.contexts) stop(`${id}: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.contexts[k] = v;
    changed++;
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (k in row.contexts_en) stop(`${id}: 영어 판별어 「${k}」가 이미 있다.`);
    row.contexts_en[k] = v;
    changed++;
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file} 고침 — ${id}`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [id, patch] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, fileOf(id)), "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 별칭 「${w}」가 안 들어갔다.`);
  }
  for (const [k, [, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== after) stop(`확인 실패: ${id} 의 「${k}」가 안 바뀌었다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
