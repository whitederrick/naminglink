// 인연링크의 23개 화면 사전을 JSON으로 내보낸다.
//
// **왜 필요한가.** 사주링크는 인연링크 복제라 사전 구조가 같고, en 원문이 **글자까지 같은
// 잎이 절반(403개 중 204개)**이다 — 오행·띠·일간·십신 이름, footer 16개, 언어 선택기, 폼 라벨
// 따위다. 그것들은 이미 23개 언어로 번역돼 검수까지 끝나 있는데, 사주링크에서 다시 번역시키면
//
//   1. 호출이 두 배가 되어 한도에 부딪히고(실제로 `id` 로케일이 그렇게 통째로 영어로 남았다),
//   2. 이미 맞는 문구를 모델이 다시 지어내 흔들리고,
//   3. 짧은 문구는 응답이 비어 손으로 베껴 넣게 된다(세 번 반복했다).
//
// 그래서 **같은 en을 쓰는 자리는 그대로 가져다 쓴다.** 이 스크립트가 그 원본을 넘겨준다.
//
// 앱이 달라 `@/` 별칭이 서로 어긋나므로 한 프로세스에서 두 사전을 읽을 수 없다. 그래서
// 인연링크 쪽에서 내보내고 사주링크 쪽에서 읽는 두 단계로 나눈다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/export-dictionaries.ts
// 산출: apps/sajulink/tmp/inyeon-dictionaries.json  (tmp/는 git이 무시한다)

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { getDictionary, translatedLocales } from "../src/lib/i18n";

type Leaf = { path: string; text: string };

function collect(node: unknown, trail: string[], out: Leaf[]) {
  if (typeof node === "string") {
    out.push({ path: trail.join("."), text: node });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) => collect(item, [...trail, String(index)], out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) collect(value, [...trail, key], out);
  }
}

const flatten = (locale: Parameters<typeof getDictionary>[0]) => {
  const out: Leaf[] = [];
  collect(getDictionary(locale), [], out);
  return Object.fromEntries(out.map((leaf) => [leaf.path, leaf.text]));
};

const dictionaries = Object.fromEntries(
  translatedLocales.map((locale) => [locale, flatten(locale)]),
);

const target = path.join(process.cwd(), "..", "sajulink", "tmp");
mkdirSync(target, { recursive: true });
const file = path.join(target, "inyeon-dictionaries.json");
writeFileSync(file, JSON.stringify(dictionaries, null, 1));

console.log(`written: ${file}`);
console.log(`  로케일 ${translatedLocales.length}개 × 잎 ${Object.keys(dictionaries.en ?? {}).length}개`);
