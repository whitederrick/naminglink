// 주공해몽 원문 「哀樂病死歌唱」·「被害鬥傷打罵」 분류를 전체(30+36항목) 직접 읽고 뽑은
// "죽음" 상징 확장. apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json이 원본이다.
//
// 자살 관련 문구는 방법(칼)을 빼고, 안전 안내를 덧붙인다(2026-08-26 사용자 결정).
//
// 실행: node scripts/add-dream-death-batch3.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

const death = data.symbols.find((s) => s.id === "death");
if (!death) throw new Error("death 상징 없음");

// **더 정확하게 다시 쓴다.** 예전 문구("죽음꿈은 재생·장수의 길몽으로 봄")는 원문 30개를
// 다 읽어 보니 지나친 일반화였다 — 死人立者主大凶(죽은 사람이 서 있으면 매우 흉함)처럼
// 반대로 가는 경우도 있다. "상황에 따라 갈린다"는 것 자체가 이 상징의 특징이다.
death.culture_note =
  "죽음꿈은 상황에 따라 갈린다 — 자신이 죽거나 죽은 사람이 되살아나면 길하게, 죽은 사람이 서 있으면 흉하게 보는 식이다. 중국 고전 《주공해몽》 「見人死自死者吉」·「死人立者主大凶」·「死人復活主有信」을 근거로 삼았다.";

function addMeaning(meaning) {
  if (death.meanings.some((m) => m.context === meaning.context)) {
    console.log(`이미 있음, 건너뜀: ${meaning.context}`);
    return;
  }
  death.meanings.push(meaning);
  console.log(`추가: ${meaning.context}`);
}

// 被害鬥傷打罵 분류 — 被人殺害者大吉·殺死他人大富貴·持刀自殺者大吉
addMeaning({
  context: "타인에게 살해당함",
  interpretation_ko: "오히려 매우 길한 조짐",
  interpretation_en: "traditionally seen as a very auspicious sign",
  polarity: "positive",
  source: "tradition",
});
addMeaning({
  context: "타인을 죽임",
  interpretation_ko: "큰 재물이나 부귀를 얻음",
  interpretation_en: "a sign of great wealth or fortune",
  polarity: "positive",
  source: "tradition",
});
// **방법(칼)은 뺐다.** 구체적 방법과 좋은 결과를 짝짓는 문구는 자살 안전 보도 지침이
// 특히 피하라는 조합이다. 결과만 전통 상징으로 담고 안내를 붙인다.
addMeaning({
  context: "스스로 목숨을 끊음",
  interpretation_ko:
    "전통 해몽에서는 길한 조짐으로 보았다. 이 풀이는 전통 상징 해석이며 실제 위기 상황과는 무관합니다. 힘든 상황이라면 자살예방상담전화 1393으로 연락해 주세요.",
  interpretation_en:
    "traditionally seen as an auspicious sign. This is a traditional symbolic reading and is unrelated to real-life crises. If you're struggling, please reach out to a crisis line in your area.",
  polarity: "positive",
  source: "tradition",
});

// 哀樂病死歌唱 분류 — 死人立者主大凶(중요한 반례)·死人復活主有信
addMeaning({
  context: "죽은 사람이 서 있음",
  interpretation_ko: "매우 흉한 조짐",
  interpretation_en: "traditionally seen as a very inauspicious sign",
  polarity: "negative",
  source: "tradition",
});
addMeaning({
  context: "죽은 사람이 되살아남",
  interpretation_ko: "믿을 만한 좋은 소식이 옴",
  interpretation_en: "trustworthy good news is coming",
  polarity: "positive",
  source: "tradition",
});

const previousVersion = data.dictVer;
data.dictVer = "1.8.0";

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
