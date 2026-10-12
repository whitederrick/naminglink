// 육합 문장(각 띠 문서의 section 2 첫 문단)에서 「가장 높은 점수」의 주어가 그 문서의 띠인지 대조한다.
// 문서의 띠 이름(라벨)은 최소 2번, 파트너 이름은 최소 1번 나와야 한다(활용형 때문에 못 찾는 경우는 수동 확인 대상으로 낸다).
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const SP = path.dirname(here);
const LOCALES = "ar ja zh de es fr it pt vi th id ru fil uz mn hi tr km ms kk pl".split(" ");
const A = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
const YUK = { rat: "ox", ox: "rat", tiger: "pig", rabbit: "dog", dragon: "rooster", snake: "monkey", horse: "goat", goat: "horse", monkey: "snake", rooster: "dragon", dog: "rabbit", pig: "tiger" };
const total = { ok: 0, manual: 0 };
const manual = [];
for (const loc of LOCALES) {
  const paths = JSON.parse(readFileSync(path.join(here, "paths", `${loc}.json`), "utf8"));
  const lab = JSON.parse(readFileSync(path.join(SP, "out", `${loc}.json`), "utf8"));
  const label = (a) => String(lab[`docs.guide/branches.sections.0.blocks.1.labels.${a}`]);
  let ok = 0;
  for (const a of A) {
    const text = paths[`docs.guide/zodiac-${a}.sections.2.blocks.0.p`];
    if (typeof text !== "string") { manual.push(`${loc}/${a}: 문단 없음`); continue; }
    const count = (s) => text.split(s).length - 1;
    const own = count(label(a)), partner = count(label(YUK[a]));
    if (own >= 2 && partner >= 1) ok++;
    else manual.push(`${loc}/${a}: 자기 띠 「${label(a)}」 ${own}회 · 파트너 「${label(YUK[a])}」 ${partner}회`);
  }
  total.ok += ok;
  total.manual += 12 - ok;
}
console.log(`자동 통과 ${total.ok}/252 · 수동 확인 ${total.manual}건`);
console.log(manual.slice(0, 60).join("\n"));
