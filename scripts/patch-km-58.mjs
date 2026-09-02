// **배치 58(밀러 Absalom~Illness)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 여섯은 `kmm58.json` 에 있다 — absalom·humidity·ideal·idiot·idleness·idol.
//
//   km1  illness(병)  ← 밀러 `Illness` 한 문장(「여자가 제 병을 앓는 꿈을 꿈」)
//
// ## 왜 판별어를 더해야 하나
//
// `illness` 는 주공해몽 의미 일곱을 갖고 있고 판별어 표가 이미 차 있다. 새 의미만 넣고
// 판별어를 안 주면 **그 의미가 0점으로 남아 어떤 문장으로도 안 뽑힌다**(배치 35에서 배운 자리).
//
// **가르는 것이 「누가 꾸는가」뿐인 자리다.** 밀러의 그림은 「제가 병듦」과 같고 꾸는 사람이
// 여자라는 것만 다르다 — 배치 50~52에서 이런 갈래를 뺐지만, **그때는 그 갈래가 둘이었다**
// (「여자가·여성이·처녀가」를 형제끼리 나눠 가질 수 없었다). 여기는 갈래가 **하나**이고
// 짝이 되는 것이 일반 문장(「자기가 병듦」)이라 낱말이 안 겹친다(2026-09-03 배치 55에서
// 좁힌 규칙 · 같은 판 배치 57의 「처녀가 얼음 위를 걸음」과 같은 자리).
//
//   자기가 병듦                「내가 나는 스스로 자신이」   ← 그대로 둔다
//   여자가 제 병을 앓는 꿈을 꿈  「여자가 여성이 처녀가」     ← 새로 준다
//
// **기존 판별어는 안 건드린다** — 겹치지 않으므로 좁힐 이유가 없다(§30 곁가지의 반대 자리).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-58.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const CTX = "여자가 제 병을 앓는 꿈을 꿈";
const KO = "여자가 여성이 처녀가";
const EN = "unforeseen frenzy despair anticipated entertainment";

const p = path.join(DIR, "km1.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const illness = rows.find((r) => r.id === "illness");
if (!illness) stop("km1.json 에 illness 가 없다 — 파일이 바뀌었다.");
if (CTX in illness.contexts) stop(`illness: 판별어 「${CTX}」가 이미 있다 — 이미 돌린 것 같다.`);

illness.contexts[CTX] = KO;
illness.contexts_en[CTX] = EN;
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("km1.json 고침 — illness 에 판별어 하나");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "illness");
if (again.contexts[CTX] !== KO) stop("확인 실패: 한국어 판별어가 안 들어갔다.");
if (again.contexts_en[CTX] !== EN) stop("확인 실패: 영어 판별어가 안 들어갔다.");
console.log("되읽어 확인함.");
