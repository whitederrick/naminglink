// **배치 55(밀러 Hurricane·Husband)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 하나는 `kmm55.json` 에 있다 — `hurricane`(태풍).
//
//   km7  husband(남편)  ← `Husband` 열둘. **판별어 표가 비어 있었다**(의미가 하나뿐이었다)
//   km1  wind(바람)     ← 별칭 「태풍」을 새 `hurricane` 에게 넘긴다
//
// **별칭 임자를 옮기는 이유**(§25 곁가지 — 「대문」 door→gate 와 같다): 밀러가 `Wind` 와
// `Hurricane` 을 따로 두고, 「태풍」은 태풍의 것이 더 정확하다. **「회오리」·「강풍」·「돌풍」은
// `wind` 가 그대로 갖는다.** 다른 상징의 판별어에 있는 「태풍」은 안 건드린다(한국어 판별어는
// 별칭 임자와 무관하게 산다).
//
// **`husband` 는 의미가 하나뿐이라 판별어 표가 비어 있었다**(배치 35에서 배운 자리) —
// 열둘을 붙이면서 **기존 「남편을 품에 안음」도 함께 채운다.** 안 채우면 그 의미가 0점으로
// 남아 어떤 문장으로도 안 뽑힌다. 그리고 그것이 **이 상징의 기본값**이므로 판별어를 좁게
// 적었다(「품에 안았」) — 얼린 자리는 동점을 전부 가져간다(§30 곁가지).
//
// **안 넣은 문장 셋 — 커버리지가 비는 것이 옳다**(§24). 셋 다 **앞 항목 풀이의 뒷말**이지
// 새 꿈 그림이 아니다. 각 항목의 `interpretation_ko` 에 녹였다.
//
//   "You will move and remove to distant places…"        ← 무너지는 집에서 끌어냄의 뒷말
//   "If disagreeable conclusions are avoided…"           ← 멀어지며 커 보임의 뒷말
//   "Unfavorable conditions follow this dream…"          ← 추문이 남의 뒷말
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-55.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const PATCHES = {
  km7: {
    husband: {
      // 조사가 붙은 꼴(「남편이」·「남편을」)은 안 올린다 — `PARTICLES` 가 이미 처리한다.
      // 「바깥양반」은 `noble-person` 의 별칭 「양반」을 품지만 앞 글자가 한글이라 막힌다(안전).
      aliasesAdd: ["바깥양반"],
      contextsAdd: {
        "남편을 품에 안음": "품에 안았",
        "남편이 까닭 없이 떠남": "떠나갔 떠나는 까닭도",
        "남편이 딴마음을 품었다고 꾸짖음": "꾸짖 나무라 몰아세",
        "남편이 죽은 것을 봄": "죽은 주검 숨진",
        "남편이 창백하고 지쳐 보임": "창백 핼쑥 지쳐",
        "남편이 밝고 훤해 보임": "밝고 훤해 잘생",
        "남편이 앓고 있음": "앓고 아파 병든",
        "남편이 다른 여자를 마음에 둠": "여자를 사랑하",
        "남의 남편을 마음에 둠": "남의 유부남",
        "혼인하지 않은 여자가 남편이 있는 꿈을 꿈": "혼인하지 미혼 처녀인데",
        "남편이 멀어지면서 되레 커 보임": "멀어지 커졌 커지",
        "남편이 낯선 이와 수상하게 있는 것을 봄": "낯선 수상하 함께 있는",
        "남편이 다른 여자와 있다 죽고 추문이 남": "추문 소문이 죽임을",
      },
      contextsEnAdd: {
        "남편을 품에 안음": "embracing bosom",
        "남편이 까닭 없이 떠남": "leaving bitterness reconciliation",
        "남편이 딴마음을 품었다고 꾸짖음": "upbraids unfaithfulness discreet",
        "남편이 죽은 것을 봄": "dead sorrow envelop",
        "남편이 창백하고 지쳐 보임": "pale careworn linger",
        "남편이 밝고 훤해 보임": "handsome bright filled",
        // 「unfaithful」은 위 「꾸짖음」의 「unfaithfulness」에 물린다 — 뜻이 아니라 글자다.
        "남편이 앓고 있음": "mistreated ails",
        "남편이 다른 여자를 마음에 둠": "tire surroundings elsewhere",
        "남의 남편을 마음에 둠": "unhappily chances chance",
        "혼인하지 않은 여자가 남편이 있는 꿈을 꿈": "unmarried wanting graces admire",
        "남편이 멀어지면서 되레 커 보임": "recedes larger inharmonious",
        "남편이 낯선 이와 수상하게 있는 것을 봄": "compromising unsuspected indiscretion",
        "남편이 다른 여자와 있다 죽고 추문이 남": "killed scandal separating property",
      },
    },
  },
  km1: {
    wind: {
      aliasesRemove: ["태풍"],
    },
  },
};

let changed = 0;
const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

for (const [file, byId] of Object.entries(PATCHES)) {
  const p = path.join(DIR, `${file}.json`);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    if (!row) stop(`${file}.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);

    for (const w of patch.aliasesAdd ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다.`);
      row.aliases.push(w);
      changed++;
    }
    for (const w of patch.aliasesRemove ?? []) {
      const at = (row.aliases ?? []).indexOf(w);
      if (at < 0) stop(`${id}: 뺄 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
      row.aliases.splice(at, 1);
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
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file}.json 고침`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    for (const k of Object.keys(patch.contextsAdd ?? {})) {
      if (!(k in row.contexts)) stop(`확인 실패: ${id} 에 「${k}」가 안 들어갔다.`);
    }
    for (const w of patch.aliasesRemove ?? []) {
      if ((row.aliases ?? []).includes(w)) stop(`확인 실패: ${id} 에서 「${w}」가 안 빠졌다.`);
    }
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
