import { buildHanjaMeaningResult } from "../src/lib/hanja";

function options(reading: string, characters: string) {
  return [...characters].map((character, index) => ({
    character,
    reading,
    meaning: `검증용 뜻 ${index + 1}`,
    note: "공식 후보 다양성 검증",
    tags: [],
  }));
}

const result = buildHanjaMeaningResult({
  familyName: "안",
  givenNameHangul: "남규",
  birthMonth: "unknown",
  officialHanjaCandidates: {
    남: options("남", "㛦南男湳楠枏柟喃娚").map((option) =>
      option.character === "娚"
        ? {
            ...option,
            meaning: "말소리 오라비(한국한자)",
            originLabel: "한국 고유 한자(국자)",
          }
        : option,
    ),
    규: options("규", "奎圭珪葵槻硅閨規赳"),
  },
});

const candidates = result.candidates as Array<{ hanja: string }>;
const firstCharacters = new Set(candidates.map((candidate) => [...candidate.hanja][0]));
const resultText = JSON.stringify(result);

if (
  candidates.length !== 10 ||
  firstCharacters.size < 5 ||
  resultText.includes("(한국한자)") ||
  !resultText.includes("한국 고유 한자(국자)")
) {
  throw new Error(
    `남규 후보 다양성 검증 실패: ${candidates.map((candidate) => candidate.hanja).join(", ")}`,
  );
}

console.log(
  `남규 후보 다양성 검증 통과: ${candidates.map((candidate) => candidate.hanja).join(", ")}`,
);

const qualityResult = buildHanjaMeaningResult({
  familyName: "안",
  givenNameHangul: "정민",
  birthMonth: "unknown",
  officialHanjaCandidates: {
    정: [
      { character: "󱃣", reading: "정", meaning: "정", note: "사설영역 문자", tags: [] },
      { character: "仃", reading: "정", meaning: "고독할", note: "부정 의미", tags: [] },
      { character: "佂", reading: "정", meaning: "두려워할", note: "부정 의미", tags: [] },
      ...options("정", "正貞晶靖廷定政井亭丁"),
    ],
    민: [
      { character: "怋", reading: "민", meaning: "민망할 어지러울", note: "부정 의미", tags: [] },
      { character: "悶", reading: "민", meaning: "번민", note: "부정 의미", tags: [] },
      { character: "泯", reading: "민", meaning: "멸할", note: "부정 의미", tags: [] },
      ...options("민", "旼珉敏民玟閔忞旻旼珉"),
    ],
  },
});

const qualityCandidates = qualityResult.candidates as Array<{
  hanja: string;
  story: string;
  practical_analysis: string;
}>;
const rejectedCharacters = new Set(
  (qualityResult.rejected_hanja as Array<{ character: string }>).map(
    (item) => item.character,
  ),
);
const qualityText = JSON.stringify(qualityCandidates);

if (
  qualityText.includes("󱃣") ||
  qualityText.includes("고독할") ||
  qualityText.includes("민망할") ||
  qualityText.includes("번민") ||
  qualityText.includes("두려워할") ||
  qualityText.includes("멸할") ||
  qualityText.includes(" 를 중심") ||
  qualityText.includes("라는 해석 방향") ||
  qualityText.includes("하면서  이미지를") ||
  qualityText.includes("가족이 원하는 이름의 방향") ||
  qualityText.includes("의미가 함께 드러난다는 점") ||
  qualityText.includes("학교나 공식 문서에서는") ||
  !["仃", "佂", "怋", "悶", "泯"].every((character) =>
    rejectedCharacters.has(character),
  )
) {
  throw new Error(`정민 후보 품질 필터 검증 실패: ${qualityText}`);
}

console.log(
  `정민 후보 품질 필터 검증 통과: ${qualityCandidates.map((candidate) => candidate.hanja).join(", ")}`,
);

const generationNameResult = buildHanjaMeaningResult({
  familyName: "안",
  givenNameHangul: "영환",
  gender: "male",
  birthMonth: "1",
  generationNameUsage: "used",
  generationSyllable: "환",
  generationHanja: "煥",
  officialHanjaCandidates: {
    영: [
      { character: "瑩", reading: "영", meaning: "옥돌 맑을(형)", note: "", tags: [] },
      { character: "寗", reading: "영", meaning: "寧(평안할(령/영))과 同字", note: "", tags: [] },
      { character: "囹", reading: "영", meaning: "옥(영/령)", note: "", tags: [] },
      { character: "姈", reading: "영", meaning: "계집슬기로울(영/령) 여자이름(영/령)", note: "", tags: [] },
      ...options("영", "瑛玲瓔暎昤泠"),
    ],
    환: [
      { character: "煥", reading: "환", meaning: "빛날", note: "", tags: [] },
      ...options("환", "桓丸晥奐幻喚換歡"),
    ],
  },
});

const generationCandidates = generationNameResult.candidates as Array<{
  hanja: string;
  character_breakdown: Array<{ meaning: string }>;
}>;
const generationRejected = new Set(
  (generationNameResult.rejected_hanja as Array<{ character: string }>).map(
    (item) => item.character,
  ),
);
const generationText = JSON.stringify(generationCandidates);

if (
  generationCandidates.length !== 8 ||
  generationCandidates.some((candidate) => !candidate.hanja.endsWith("煥")) ||
  generationText.includes("囹") ||
  generationText.includes("姈") ||
  generationText.includes("영/령") ||
  generationText.includes("同字") ||
  generationText.includes("(형)") ||
  !generationRejected.has("囹") ||
  !generationRejected.has("姈")
) {
  throw new Error(`영환 돌림자·뜻 정리 검증 실패: ${generationText}`);
}

console.log(
  `영환 돌림자·뜻 정리 검증 통과: ${generationCandidates.map((candidate) => candidate.hanja).join(", ")}`,
);
