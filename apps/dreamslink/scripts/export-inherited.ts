// 지금 `src/lib/i18n-locales/*.ts`에 들어 있는 **이미 번역된 잎**을 건져 낸다.
//
// ## 왜 필요한가
//
// 이 앱의 21개 로케일 파일은 인연링크에서 복제해 온 것이다. 궁합 문구가 대부분이라 통째로
// 다시 만들어야 하지만, 그 안에는 **서비스가 달라져도 그대로 맞는 문구**가 섞여 있다 —
// 푸터 16개(개인정보처리방침·상호·대표자…), 언어 선택기 3개, 광고 라벨. 전부 23개 언어로
// 번역돼 검수까지 끝난 것들이다.
//
// 그것까지 다시 번역시키면 사주링크에서 겪은 일이 되풀이된다: 호출이 두 배가 되어 한도에
// 걸리고, `id` 로케일이 141개나 영어로 남은 채 "성공"으로 끝났다. 이미 맞는 문구를 모델이
// 다시 지어내기도 한다.
//
// ## 무엇을 건지는가 — 목록으로 못 박는다
//
// **"en이 같으면 물려받는다"에 기댈 수 없다.** 그 관문은 덤프의 en이 *옛* 원문일 때만 뜻이
// 있는데(사주링크는 인연링크 en과 대조했다), 여기서는 같은 앱의 파일을 읽으므로 en이 이미
// 새 문구다 — 관문이 언제나 통과한다. 실제로 그렇게 돌렸다가 **해몽으로 다시 쓴 `landing`과
// `analyzing`이 "전부 물려받음"으로 나왔다.** 옛 일본어 궁합 문구가 랜딩에 실릴 뻔했다.
//
// 그래서 자동 판정을 버리고 **가져올 자리를 손으로 적는다.** 목록에 없으면 번역한다 —
// 틀리는 쪽이 "영어로 남는 것"이지 "다른 서비스 문구가 실리는 것"이 아니게 된다.
//
// 목록에 올릴 조건은 하나다: **en 원문이 궁합 시절과 글자까지 같을 것.** 아래 넷이 그렇다.
//
//   footer.*                        정책 링크와 사업자 정보 라벨 16개
//   currentLanguage/more/close      언어 선택기 3개
//   ads.label                       광고 라벨(애드센스가 문구를 제한한다)
//   analyzing.watching/remaining    광고 관문의 두 줄. title·quotes는 새로 썼으므로 제외한다
//
// `brand`도 넣는다. 상표라 모든 언어에서 en과 같은 것이 정상이고, 번역시키면 모델이 제
// 나름대로 옮긴다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/export-inherited.ts
// 산출: tmp/inherited-dictionaries.json  (tmp/는 git이 무시한다)

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { getDictionary, translatedLocales, type Locale } from "../src/lib/i18n";

/**
 * 물려받을 자리. 접두사로 적고 자식 잎까지 잡는다.
 *
 * **더할 때는 옛 en과 새 en을 실제로 대 볼 것**(`git diff` 한 번이면 된다). 한 글자라도
 * 다르면 그 번역은 다른 말을 하고 있고, 그것이 화면에 실리면 아무도 눈치채지 못한다.
 */
const INHERIT = [
  "brand",
  "currentLanguage",
  "moreLanguages",
  "closeLanguages",
  "ads.",
  "analyzing.watching",
  "analyzing.remaining",
  "footer.",
];

function inheritable(key: string) {
  return INHERIT.some((prefix) => key === prefix || key.startsWith(prefix));
}

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

function flatten(locale: Locale): Record<string, string> {
  const out: Leaf[] = [];
  collect(getDictionary(locale), [], out);
  return Object.fromEntries(out.map((leaf) => [leaf.path, leaf.text]));
}

const en = flatten("en");

const dictionaries: Record<string, Record<string, string>> = { en };
const counts: string[] = [];

for (const locale of translatedLocales) {
  if (locale === "en" || locale === "ko") continue;
  const all = flatten(locale);
  const translated: Record<string, string> = {};
  for (const [key, value] of Object.entries(all)) {
    if (!value.trim()) continue;
    if (!inheritable(key)) continue;
    // 목록에 있어도 **아직 그 언어로 안 옮겨진 자리**는 버린다. 영어를 물려받으면 번역기가
    // "이미 된 것"으로 보고 건너뛰어 영어가 그대로 굳는다(`brand`만 같아도 정상이다).
    if (value === en[key] && key !== "brand") continue;
    translated[key] = value;
  }
  dictionaries[locale] = translated;
  counts.push(`${locale} ${Object.keys(translated).length}`);
}

const dir = path.join(process.cwd(), "tmp");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "inherited-dictionaries.json");
writeFileSync(file, JSON.stringify(dictionaries, null, 1));

console.log(`written: ${file}`);
console.log(`  en 잎 ${Object.keys(en).length}개 · 번역된 잎: ${counts.join(" · ")}`);
