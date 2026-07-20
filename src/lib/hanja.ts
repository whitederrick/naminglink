type HanjaElement = "wood" | "fire" | "earth" | "metal" | "water" | "neutral";

type HanjaOption = {
  character: string;
  reading: string;
  meaning: string;
  note: string;
  element: HanjaElement;
  tags: string[];
  sourceStatus: "sample" | "production";
  originLabel?: string;
};

type RejectedHanja = {
  character: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

export const OFFICIAL_HANJA_SOURCE = {
  sourceKey: "scourt-hanja-2024-06-11",
  title: "인명용 한자표",
  ruleReference: "가족관계의 등록 등에 관한 규칙 제37조",
  versionLabel: "2024. 5. 23. 일부개정, 2024. 6. 11. 시행",
  effectiveDate: "2024-06-11",
};

export const OFFICIAL_HANJA_RULES = [
  {
    code: "DESIGNATED_READING_ONLY",
    title: "지정 발음 사용",
    description: "한자는 지정된 발음으로만 사용할 수 있습니다.",
  },
  {
    code: "INITIAL_N_R_EXCEPTION",
    title: "첫소리 ㄴ/ㄹ 예외",
    description:
      "첫소리(初聲)가 ㄴ 또는 ㄹ인 한자는 각각 소리나는 바에 따라 ㅇ 또는 ㄴ으로 사용할 수 있습니다.",
  },
  {
    code: "REGISTERED_VARIANTS_ONLY",
    title: "조회되는 변형만 허용",
    description:
      "동자(同字), 속자(俗字), 약자(略字)는 조회되는 한자에 한하여 사용할 수 있습니다.",
  },
  {
    code: "RADICAL_INTERCHANGE",
    title: "허용 부수 변형",
    description: "示변과 礻변, ++변과 艹변은 서로 바꾸어 쓸 수 있습니다.",
  },
] as const;

const hanjaBank: Record<string, HanjaOption[]> = {
  가: [
    {
      character: "佳",
      reading: "가",
      meaning: "아름다울 가",
      note: "단정한 아름다움과 좋은 사람됨을 담습니다.",
      element: "wood",
      tags: ["아름다움", "품격", "조화"],
      sourceStatus: "sample",
    },
    {
      character: "嘉",
      reading: "가",
      meaning: "아름다울/기릴 가",
      note: "축복과 칭찬, 기쁜 시작의 이미지를 줍니다.",
      element: "fire",
      tags: ["축복", "기쁨", "칭찬"],
      sourceStatus: "sample",
    },
    {
      character: "可",
      reading: "가",
      meaning: "옳을/가능할 가",
      note: "가능성과 허락, 바르게 받아들여지는 이미지를 줍니다.",
      element: "earth",
      tags: ["가능성", "긍정", "바름"],
      sourceStatus: "sample",
    },
  ],
  규: [
    {
      character: "圭",
      reading: "규",
      meaning: "홀 규",
      note: "반듯하게 다듬은 옥 홀에서 바른 기준과 품격의 이미지를 읽을 수 있습니다.",
      element: "earth",
      tags: ["바름", "품격", "기준"],
      sourceStatus: "production",
    },
    {
      character: "奎",
      reading: "규",
      meaning: "별 규",
      note: "별자리의 빛과 문채를 연결해 학문적 밝음과 재능의 이미지를 더합니다.",
      element: "fire",
      tags: ["학문", "재능", "밝음"],
      sourceStatus: "production",
    },
    {
      character: "珪",
      reading: "규",
      meaning: "서옥 규",
      note: "귀하게 다듬은 옥처럼 맑은 품성과 단정한 품격을 나타냅니다.",
      element: "metal",
      tags: ["맑음", "귀함", "품격"],
      sourceStatus: "production",
    },
    {
      character: "規",
      reading: "규",
      meaning: "법 규",
      note: "스스로 세운 바른 기준과 원칙을 지키는 안정적인 인상을 줍니다.",
      element: "metal",
      tags: ["원칙", "바름", "안정"],
      sourceStatus: "production",
    },
  ],
  나: [
    {
      character: "娜",
      reading: "나",
      meaning: "아리따울 나",
      note: "부드럽고 우아한 인상을 만듭니다.",
      element: "wood",
      tags: ["우아함", "부드러움"],
      sourceStatus: "sample",
    },
    {
      character: "那",
      reading: "나",
      meaning: "어찌/많을 나",
      note: "넓은 가능성과 여유를 상징적으로 연결합니다.",
      element: "earth",
      tags: ["가능성", "여유"],
      sourceStatus: "sample",
    },
    {
      character: "拏",
      reading: "나",
      meaning: "잡을 나",
      note: "기회를 붙잡고 자기 방향을 놓치지 않는 이미지를 더합니다.",
      element: "metal",
      tags: ["기회", "집중", "의지"],
      sourceStatus: "sample",
    },
  ],
  남: [
    {
      character: "南",
      reading: "남",
      meaning: "남녘 남",
      note: "따뜻한 방향성과 밝게 펼쳐지는 기상을 상징적으로 담습니다.",
      element: "fire",
      tags: ["따뜻함", "밝음", "방향성"],
      sourceStatus: "production",
    },
    {
      character: "楠",
      reading: "남",
      meaning: "녹나무 남",
      note: "푸른 녹나무처럼 단단한 생명력과 꾸준한 성장을 나타냅니다.",
      element: "wood",
      tags: ["성장", "생명력", "굳셈"],
      sourceStatus: "production",
    },
  ],
  도: [
    {
      character: "道",
      reading: "도",
      meaning: "길 도",
      note: "자기 길을 바르게 찾는 힘을 강조합니다.",
      element: "earth",
      tags: ["길", "정직", "철학"],
      sourceStatus: "sample",
    },
    {
      character: "度",
      reading: "도",
      meaning: "법도 도",
      note: "균형감과 절제, 기준을 세우는 이미지를 줍니다.",
      element: "metal",
      tags: ["균형", "기준", "절제"],
      sourceStatus: "sample",
    },
    {
      character: "都",
      reading: "도",
      meaning: "도읍 도",
      note: "사람이 모이는 중심성과 넓은 활동 무대를 담습니다.",
      element: "earth",
      tags: ["중심", "무대", "사회성"],
      sourceStatus: "sample",
    },
  ],
  린: [
    {
      character: "璘",
      reading: "린",
      meaning: "옥빛 린",
      note: "맑게 빛나는 재능과 품격을 담습니다.",
      element: "metal",
      tags: ["맑음", "빛", "재능"],
      sourceStatus: "sample",
    },
    {
      character: "潾",
      reading: "린",
      meaning: "맑을 린",
      note: "맑게 흐르는 물처럼 깨끗하고 유연한 인상을 줍니다.",
      element: "water",
      tags: ["맑음", "흐름", "유연함"],
      sourceStatus: "sample",
    },
    {
      character: "麟",
      reading: "린",
      meaning: "기린 린",
      note: "귀하고 상서로운 존재감을 상징적으로 더합니다.",
      element: "fire",
      tags: ["귀함", "상서로움", "존재감"],
      sourceStatus: "sample",
    },
  ],
  민: [
    {
      character: "珉",
      reading: "민",
      meaning: "옥돌 민",
      note: "소박하지만 단단한 가치와 성품을 표현합니다.",
      element: "earth",
      tags: ["성품", "단단함"],
      sourceStatus: "sample",
    },
    {
      character: "敏",
      reading: "민",
      meaning: "민첩할 민",
      note: "빠른 이해력과 기민한 판단력을 강조합니다.",
      element: "metal",
      tags: ["지혜", "민첩", "학습"],
      sourceStatus: "sample",
    },
    {
      character: "旻",
      reading: "민",
      meaning: "하늘 민",
      note: "넓은 시야와 따뜻한 하늘의 이미지를 줍니다.",
      element: "fire",
      tags: ["하늘", "시야", "따뜻함"],
      sourceStatus: "sample",
    },
  ],
  서: [
    {
      character: "瑞",
      reading: "서",
      meaning: "상서로울 서",
      note: "좋은 징조와 축복의 의미가 강합니다.",
      element: "earth",
      tags: ["축복", "길상", "평안"],
      sourceStatus: "sample",
    },
    {
      character: "曙",
      reading: "서",
      meaning: "새벽 서",
      note: "새로운 시작과 밝아오는 가능성을 담습니다.",
      element: "fire",
      tags: ["시작", "빛", "희망"],
      sourceStatus: "sample",
    },
    {
      character: "敍",
      reading: "서",
      meaning: "펼 서",
      note: "생각과 이야기를 차분히 펼치는 이미지를 줍니다.",
      element: "wood",
      tags: ["표현", "질서", "이야기"],
      sourceStatus: "sample",
    },
  ],
  수: [
    {
      character: "秀",
      reading: "수",
      meaning: "빼어날 수",
      note: "재능과 성취를 자연스럽게 드러냅니다.",
      element: "wood",
      tags: ["재능", "성취"],
      sourceStatus: "sample",
    },
    {
      character: "修",
      reading: "수",
      meaning: "닦을 수",
      note: "꾸준히 자신을 갈고닦는 이미지를 줍니다.",
      element: "metal",
      tags: ["성실", "수양"],
      sourceStatus: "sample",
    },
    {
      character: "守",
      reading: "수",
      meaning: "지킬 수",
      note: "소중한 가치를 지키는 책임감과 안정감을 더합니다.",
      element: "earth",
      tags: ["책임", "안정", "보호"],
      sourceStatus: "sample",
    },
  ],
  시: [
    {
      character: "詩",
      reading: "시",
      meaning: "시 시",
      note: "언어 감각과 예술적 이미지를 살립니다.",
      element: "wood",
      tags: ["예술", "감성", "언어"],
      sourceStatus: "sample",
    },
    {
      character: "始",
      reading: "시",
      meaning: "비로소 시",
      note: "좋은 시작과 개척의 뜻을 담습니다.",
      element: "fire",
      tags: ["시작", "개척"],
      sourceStatus: "sample",
    },
    {
      character: "是",
      reading: "시",
      meaning: "옳을 시",
      note: "바른 판단과 분명한 기준을 가진 이미지를 줍니다.",
      element: "metal",
      tags: ["바름", "판단", "기준"],
      sourceStatus: "sample",
    },
  ],
  아: [
    {
      character: "雅",
      reading: "아",
      meaning: "맑고 바를 아",
      note: "품위 있고 단정한 인상을 줍니다.",
      element: "earth",
      tags: ["품위", "단정", "맑음"],
      sourceStatus: "sample",
    },
    {
      character: "娥",
      reading: "아",
      meaning: "아름다울 아",
      note: "고운 아름다움과 부드러운 이미지를 담습니다.",
      element: "wood",
      tags: ["아름다움", "부드러움"],
      sourceStatus: "sample",
    },
    {
      character: "兒",
      reading: "아",
      meaning: "아이 아",
      note: "맑고 순수한 시작의 이미지를 더합니다.",
      element: "water",
      tags: ["순수", "아이", "시작"],
      sourceStatus: "sample",
    },
  ],
  연: [
    {
      character: "妍",
      reading: "연",
      meaning: "고울 연",
      note: "고운 성품과 세련된 느낌을 줍니다.",
      element: "earth",
      tags: ["고움", "세련"],
      sourceStatus: "sample",
    },
    {
      character: "然",
      reading: "연",
      meaning: "그러할 연",
      note: "자연스러움과 진정성을 강조합니다.",
      element: "fire",
      tags: ["자연", "진정성"],
      sourceStatus: "sample",
    },
    {
      character: "延",
      reading: "연",
      meaning: "늘일 연",
      note: "좋은 흐름이 오래 이어지는 성장의 이미지를 줍니다.",
      element: "wood",
      tags: ["성장", "지속", "흐름"],
      sourceStatus: "sample",
    },
  ],
  우: [
    {
      character: "祐",
      reading: "우",
      meaning: "도울 우",
      note: "보호와 도움, 좋은 인연의 의미를 담습니다.",
      element: "wood",
      tags: ["도움", "보호", "인연"],
      sourceStatus: "sample",
    },
    {
      character: "宇",
      reading: "우",
      meaning: "집/우주 우",
      note: "넓은 세계와 안정된 기반을 함께 표현합니다.",
      element: "earth",
      tags: ["넓음", "안정", "세계"],
      sourceStatus: "sample",
    },
    {
      character: "優",
      reading: "우",
      meaning: "뛰어날 우",
      note: "실력과 배려가 함께 느껴지는 우수함을 담습니다.",
      element: "metal",
      tags: ["우수함", "배려", "실력"],
      sourceStatus: "sample",
    },
  ],
  유: [
    {
      character: "裕",
      reading: "유",
      meaning: "넉넉할 유",
      note: "풍요롭고 너그러운 성품을 담습니다.",
      element: "earth",
      tags: ["풍요", "너그러움"],
      sourceStatus: "sample",
    },
    {
      character: "柔",
      reading: "유",
      meaning: "부드러울 유",
      note: "강함보다 유연함으로 오래가는 힘을 줍니다.",
      element: "wood",
      tags: ["유연함", "온화함"],
      sourceStatus: "sample",
    },
    {
      character: "有",
      reading: "유",
      meaning: "있을 유",
      note: "충분한 가능성과 갖추어진 내면을 표현합니다.",
      element: "earth",
      tags: ["가능성", "충분함", "내면"],
      sourceStatus: "sample",
    },
  ],
  윤: [
    {
      character: "允",
      reading: "윤",
      meaning: "진실로 윤",
      note: "믿음직함과 바른 약속의 이미지를 줍니다.",
      element: "metal",
      tags: ["진실", "신뢰"],
      sourceStatus: "sample",
    },
    {
      character: "潤",
      reading: "윤",
      meaning: "윤택할 윤",
      note: "삶을 풍요롭게 적시는 부드러운 기운을 담습니다.",
      element: "water",
      tags: ["풍요", "부드러움", "물"],
      sourceStatus: "sample",
    },
    {
      character: "尹",
      reading: "윤",
      meaning: "다스릴 윤",
      note: "질서를 세우고 조화롭게 이끄는 이미지를 더합니다.",
      element: "earth",
      tags: ["질서", "조화", "리더십"],
      sourceStatus: "sample",
    },
  ],
  은: [
    {
      character: "恩",
      reading: "은",
      meaning: "은혜 은",
      note: "감사와 따뜻한 관계성을 담습니다.",
      element: "earth",
      tags: ["감사", "관계", "따뜻함"],
      sourceStatus: "sample",
    },
    {
      character: "銀",
      reading: "은",
      meaning: "은 은",
      note: "맑고 귀한 금속의 이미지를 줍니다.",
      element: "metal",
      tags: ["맑음", "귀함"],
      sourceStatus: "sample",
    },
    {
      character: "殷",
      reading: "은",
      meaning: "성할 은",
      note: "넉넉하고 성대한 기운을 이름에 더합니다.",
      element: "fire",
      tags: ["풍성함", "성장", "활기"],
      sourceStatus: "sample",
    },
  ],
  이: [
    {
      character: "理",
      reading: "이",
      meaning: "다스릴/이치 이",
      note: "질서와 합리적인 판단력을 강조합니다.",
      element: "metal",
      tags: ["이치", "질서", "판단"],
      sourceStatus: "sample",
    },
    {
      character: "利",
      reading: "이",
      meaning: "이로울 이",
      note: "사람에게 도움이 되는 실용적 가치를 담습니다.",
      element: "earth",
      tags: ["이로움", "실용"],
      sourceStatus: "sample",
    },
    {
      character: "怡",
      reading: "이",
      meaning: "기쁠 이",
      note: "편안한 기쁨과 밝은 마음을 표현합니다.",
      element: "fire",
      tags: ["기쁨", "편안함", "밝음"],
      sourceStatus: "sample",
    },
  ],
  준: [
    {
      character: "俊",
      reading: "준",
      meaning: "준걸 준",
      note: "뛰어난 재능과 반듯한 인상을 줍니다.",
      element: "wood",
      tags: ["재능", "뛰어남"],
      sourceStatus: "sample",
    },
    {
      character: "準",
      reading: "준",
      meaning: "법도/기준 준",
      note: "흔들리지 않는 기준과 신뢰감을 담습니다.",
      element: "metal",
      tags: ["기준", "신뢰"],
      sourceStatus: "sample",
    },
    {
      character: "峻",
      reading: "준",
      meaning: "높을 준",
      note: "높은 목표와 당당한 성취의 이미지를 줍니다.",
      element: "earth",
      tags: ["목표", "성취", "당당함"],
      sourceStatus: "sample",
    },
  ],
  지: [
    {
      character: "智",
      reading: "지",
      meaning: "지혜 지",
      note: "깊이 생각하고 밝게 판단하는 힘을 줍니다.",
      element: "fire",
      tags: ["지혜", "판단", "학습"],
      sourceStatus: "sample",
    },
    {
      character: "志",
      reading: "지",
      meaning: "뜻 지",
      note: "스스로 세운 뜻과 의지를 강조합니다.",
      element: "fire",
      tags: ["뜻", "의지"],
      sourceStatus: "sample",
    },
    {
      character: "知",
      reading: "지",
      meaning: "알 지",
      note: "배움과 이해력의 이미지를 줍니다.",
      element: "metal",
      tags: ["배움", "이해"],
      sourceStatus: "sample",
    },
  ],
  하: [
    {
      character: "河",
      reading: "하",
      meaning: "강 하",
      note: "넓게 흐르는 힘과 포용성을 담습니다.",
      element: "water",
      tags: ["흐름", "포용", "넓음"],
      sourceStatus: "sample",
    },
    {
      character: "夏",
      reading: "하",
      meaning: "여름 하",
      note: "밝고 생동감 있는 계절 이미지를 줍니다.",
      element: "fire",
      tags: ["밝음", "생동감"],
      sourceStatus: "sample",
    },
    {
      character: "賀",
      reading: "하",
      meaning: "하례할 하",
      note: "축하와 기쁨이 깃든 이름 이야기를 만들 수 있습니다.",
      element: "fire",
      tags: ["축하", "기쁨", "복"],
      sourceStatus: "sample",
    },
  ],
  현: [
    {
      character: "賢",
      reading: "현",
      meaning: "어질 현",
      note: "지혜와 덕을 함께 갖춘 이미지를 줍니다.",
      element: "earth",
      tags: ["지혜", "덕", "어짐"],
      sourceStatus: "sample",
    },
    {
      character: "炫",
      reading: "현",
      meaning: "빛날 현",
      note: "분명하게 드러나는 재능과 존재감을 담습니다.",
      element: "fire",
      tags: ["빛", "재능", "존재감"],
      sourceStatus: "sample",
    },
    {
      character: "玄",
      reading: "현",
      meaning: "깊을 현",
      note: "깊이 있는 생각과 차분한 분위기를 더합니다.",
      element: "water",
      tags: ["깊이", "차분함", "사유"],
      sourceStatus: "sample",
    },
  ],
};

const negativeHanja: Record<string, RejectedHanja[]> = {
  망: [
    {
      character: "亡",
      reason: "죽음이나 망함의 뜻이 직접적이어서 이름 후보에서 배제합니다.",
      severity: "high",
    },
  ],
  사: [
    {
      character: "死",
      reason: "죽음의 뜻이 직접적이어서 인명 의미 설계에 부적합합니다.",
      severity: "high",
    },
  ],
  병: [
    {
      character: "病",
      reason: "질병의 뜻이 강하므로 이름의 축복성과 충돌합니다.",
      severity: "high",
    },
  ],
  귀: [
    {
      character: "鬼",
      reason: "귀신의 뜻이 직접적이어서 사회적 인상과 충돌할 수 있습니다.",
      severity: "medium",
    },
  ],
  악: [
    {
      character: "惡",
      reason: "악함의 뜻이 직접적이므로 이름 후보에서 제외합니다.",
      severity: "high",
    },
  ],
  원: [
    {
      character: "怨",
      reason: "원망의 뜻이 강해 부모의 바람과 반대되는 인상을 줄 수 있습니다.",
      severity: "high",
    },
  ],
};

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function displayMeaning(value: unknown) {
  const rawMeaning = stringValue(value)
    .replace(/\(\s*한\s*국\s*한\s*자\s*\)/g, "")
    .replace(/\(\s*일\s*본\s*한\s*자\s*\)/g, "")
    .replace(/^\p{Script=Han}+\((.+)\)과\s*同字$/u, "$1")
    .replace(/\((?:[가-힣]{1,3})(?:\/[가-힣]{1,3})*\)/g, "")
    .replace(/계집슬기로울/g, "슬기로울")
    .replace(/여자이름/g, "여자 이름")
    .replace(/맑은소리/g, "맑은 소리")
    .replace(/금옥소리/g, "금옥 소리")
    .replace(/날빛영롱할/g, "날빛 영롱할")
    .replace(/\s{2,}/g, " ")
    .trim();

  return rawMeaning;
}

const unsuitableMeaningTerms = [
  "고독할",
  "외로울",
  "민망할",
  "어지러울",
  "번민",
  "근심할",
  "병들",
  "질병",
  "죽을",
  "흉할",
  "악할",
  "원망",
  "재앙",
  "가난할",
  "미워할",
  "어리석을",
  "괴로울",
  "두려워할",
  "황겁할",
  "멸할",
  "슬플",
  "우환",
  "염탐할",
  "함정",
  "술취할",
  "숙취",
  "없어질",
  "탐할",
  "감옥",
  "갇힐",
  "죄수",
];

// "옥(영/령)" 같은 괄호 음가 표기는 displayMeaning이 먼저 제거해 의미 문자열로는
// 감옥 뜻을 감지할 수 없다. 감옥 계열 글자는 문자 단위로 직접 제외한다.
const unsuitableNameCharacters = new Set(["囹", "圄", "圉", "獄"]);

const preferredMeaningWeights = [
  { terms: ["상서", "길할", "복", "평안", "맑", "밝", "슬기", "지혜", "어진"], weight: 10 },
  { terms: ["옥", "보배", "아름", "바르", "정직", "성실", "화목", "사랑", "귀할"], weight: 8 },
  { terms: ["기쁨", "믿", "번성", "돕", "건강", "푸를", "빛"], weight: 6 },
  { terms: ["힘쓸", "클", "넓", "높"], weight: 3 },
] as const;

const lessDistinctiveNameMeaningTerms = [
  "넓은집",
  "높은산",
  "네째천간",
  "넷째천간",
  "우물",
  "정자",
  "조정",
  "정사",
];

function meaningPreferenceScore(meaning: string) {
  const positiveScore = preferredMeaningWeights.reduce(
    (score, group) =>
      score +
      group.terms.filter((term) => meaning.includes(term)).length * group.weight,
    0,
  );
  const lessDistinctivePenalty = lessDistinctiveNameMeaningTerms.some((term) =>
    meaning.includes(term),
  )
    ? 5
    : 0;

  return positiveScore - lessDistinctivePenalty;
}

function isPrivateUseCharacter(value: string) {
  const codePoint = value.codePointAt(0) ?? 0;
  return (
    (codePoint >= 0xe000 && codePoint <= 0xf8ff) ||
    (codePoint >= 0xf0000 && codePoint <= 0xffffd) ||
    (codePoint >= 0x100000 && codePoint <= 0x10fffd)
  );
}

function hasUsableMeaning(meaning: string, reading: string) {
  const normalizedMeaning = meaning.replace(/[\s()·,.'"-]/g, "");
  const normalizedReading = reading.replace(/\s/g, "");
  return Boolean(
    normalizedMeaning &&
      normalizedMeaning !== normalizedReading &&
      !/^(AI의미해석대상|뜻확인필요|의미확인필요)$/.test(normalizedMeaning),
  );
}

function hasUnsuitableMeaning(meaning: string) {
  return unsuitableMeaningTerms.some((term) => meaning.includes(term));
}

function isVariantOnlyMeaning(meaning: string) {
  // 略(U+7565)·畧(U+7567)·호환 한자 略(U+F976)과 한글 표기, 俗字·同字 안내까지 포함한다.
  // 괄호형 "X(뜻)과 同字"는 displayMeaning이 뜻 문자열로 바꿔 주므로 여기 도달하지 않는다.
  return (
    /^\p{Script=Han}+의?\s*(?:[略略畧]字|俗字|약자|략자|속자)$/u.test(meaning) ||
    /^\p{Script=Han}+[과와]\s*同字$/u.test(meaning) ||
    /^(?:약자|략자|속자)$/.test(meaning)
  );
}

function isReadingListOnlyMeaning(meaning: string) {
  // 공백 구분("클 태")은 뜻+음 표기 형식과 구분할 수 없어 구두점 구분 목록만 걸러낸다.
  return /^[가-힣](?:\s*[,/·、，;；]\s*[가-힣])+$/u.test(meaning);
}

function meaningIdentity(meaning: string) {
  return meaning.replace(/[\s,./·()'"-]/g, "");
}

function dedupeOptionsByMeaning(options: HanjaOption[]) {
  const keptIndexByIdentity = new Map<string, number>();
  const result: HanjaOption[] = [];
  for (const option of options) {
    const identity = meaningIdentity(option.meaning);
    const keptIndex = keptIndexByIdentity.get(identity);
    if (keptIndex === undefined) {
      keptIndexByIdentity.set(identity, result.length);
      result.push(option);
      continue;
    }
    // 같은 뜻이면 상용 한자 영역 글자를 우선해, 목록 순서 때문에 희귀 글자가
    // 상용 글자를 밀어내는 것을 막는다. 점수가 같으면 먼저 나온 글자를 유지한다.
    if (
      characterUsabilityScore(option.character) >
      characterUsabilityScore(result[keptIndex].character)
    ) {
      result[keptIndex] = option;
    }
  }
  return result;
}

function matchesUserExcludedMeaning(
  option: Pick<HanjaOption, "meaning" | "note" | "tags">,
  inputFactors: Record<string, unknown>,
) {
  const excludedTerms = stringValue(inputFactors.excludedMeanings)
    .split(/[\s,;/·]+/)
    .map((term) => term.trim())
    .filter(Boolean);
  if (!excludedTerms.length) return false;
  const target = `${option.meaning} ${option.note} ${option.tags.join(" ")}`;
  return excludedTerms.some((term) => target.includes(term));
}

function conflictsWithGenderContext(
  option: Pick<HanjaOption, "meaning">,
  inputFactors: Record<string, unknown>,
) {
  const gender = stringValue(inputFactors.gender);
  if (gender === "male") return /여자\s*이름|여성|계집|며느리/.test(option.meaning);
  if (gender === "female") return /남자\s*이름|남성|사내|사나이/.test(option.meaning);
  return false;
}

function isCandidateOptionAllowed(
  option: HanjaOption,
  inputFactors: Record<string, unknown>,
) {
  return (
    !isPrivateUseCharacter(option.character) &&
    !unsuitableNameCharacters.has(option.character) &&
    hasUsableMeaning(option.meaning, option.reading) &&
    !hasUnsuitableMeaning(option.meaning) &&
    !isVariantOnlyMeaning(option.meaning) &&
    !isReadingListOnlyMeaning(option.meaning) &&
    !conflictsWithGenderContext(option, inputFactors) &&
    !matchesUserExcludedMeaning(option, inputFactors)
  );
}

function characterUsabilityScore(character: string) {
  const codePoint = character.codePointAt(0) ?? 0;
  if (codePoint >= 0x4e00 && codePoint <= 0x9fff) return 4;
  if (codePoint >= 0xf900 && codePoint <= 0xfaff) return 2;
  if (codePoint >= 0x3400 && codePoint <= 0x4dbf) return -3;
  if (codePoint >= 0x20000) return -5;
  return 0;
}

const elementLabels: Record<HanjaElement, string> = {
  wood: "목(木)",
  fire: "화(火)",
  earth: "토(土)",
  metal: "금(金)",
  water: "수(水)",
  neutral: "중립",
};

const birthHourLabels: Record<string, string> = {
  "23-01": "자시(23:00-01:00)",
  "01-03": "축시(01:00-03:00)",
  "03-05": "인시(03:00-05:00)",
  "05-07": "묘시(05:00-07:00)",
  "07-09": "진시(07:00-09:00)",
  "09-11": "사시(09:00-11:00)",
  "11-13": "오시(11:00-13:00)",
  "13-15": "미시(13:00-15:00)",
  "15-17": "신시(15:00-17:00)",
  "17-19": "유시(17:00-19:00)",
  "19-21": "술시(19:00-21:00)",
  "21-23": "해시(21:00-23:00)",
};

function hasFinalConsonant(value: string) {
  const last = Array.from(value).at(-1) ?? "";
  const code = last.charCodeAt(0);

  return code >= 0xac00 && code <= 0xd7a3 && (code - 0xac00) % 28 !== 0;
}

function andParticle(value: string) {
  return hasFinalConsonant(value) ? "과" : "와";
}

function descriptorParticle(value: string) {
  return hasFinalConsonant(value) ? "이라는" : "라는";
}

function objectParticle(value: string) {
  return hasFinalConsonant(value) ? "을" : "를";
}

function topicParticle(value: string) {
  return hasFinalConsonant(value) ? "은" : "는";
}

function characterMeaningFlow(options: HanjaOption[]) {
  return options
    .map(
      (option, index) =>
        `${option.character}의 '${option.meaning}'${
          index < options.length - 1 ? andParticle(option.meaning) : ""
        }`,
    )
    .join(" ");
}

function hangulSyllables(value: string) {
  return Array.from(value.replace(/\s/g, "")).filter((char) =>
    /^[가-힣]$/.test(char),
  );
}

function officialOptionsFromInput(
  inputFactors: Record<string, unknown>,
  syllable: string,
) {
  const rawGroups = inputFactors.officialHanjaCandidates;
  if (!rawGroups || typeof rawGroups !== "object" || Array.isArray(rawGroups)) {
    return null;
  }

  const rawOptions = (rawGroups as Record<string, unknown>)[syllable];
  if (!Array.isArray(rawOptions) || !rawOptions.length) return null;

  const options = rawOptions.flatMap((rawOption) => {
    if (!rawOption || typeof rawOption !== "object" || Array.isArray(rawOption)) {
      return [];
    }

    const option = rawOption as Record<string, unknown>;
    const character = stringValue(option.character);
    const reading = stringValue(option.reading);
    const meaning = displayMeaning(option.meaning);
    if (
      !character ||
      reading !== syllable ||
      isPrivateUseCharacter(character) ||
      !hasUsableMeaning(meaning, reading) ||
      hasUnsuitableMeaning(meaning)
    ) return [];

    const candidate = {
      character,
      reading,
      meaning,
      note:
        stringValue(option.note) ||
        "공식 인명용 한자표에서 지정 발음을 확인한 후보입니다.",
      element: "neutral" as HanjaElement,
      tags: Array.isArray(option.tags)
        ? option.tags.filter((tag): tag is string => typeof tag === "string")
        : [],
      sourceStatus: "production" as const,
      originLabel: stringValue(option.originLabel) || undefined,
    };
    return isCandidateOptionAllowed(candidate, inputFactors) ? [candidate] : [];
  });

  return options;
}

function rejectedOfficialMeaningOptions(
  inputFactors: Record<string, unknown>,
  syllables: string[],
) {
  const rawGroups = inputFactors.officialHanjaCandidates;
  if (!rawGroups || typeof rawGroups !== "object" || Array.isArray(rawGroups)) {
    return [] as RejectedHanja[];
  }

  const rejected = syllables.flatMap((syllable) => {
    const rawOptions = (rawGroups as Record<string, unknown>)[syllable];
    if (!Array.isArray(rawOptions)) return [];

    return rawOptions.flatMap((rawOption) => {
      if (!rawOption || typeof rawOption !== "object" || Array.isArray(rawOption)) {
        return [];
      }
      const option = rawOption as Record<string, unknown>;
      const character = stringValue(option.character);
      const meaning = displayMeaning(option.meaning);
      const genderConflict = conflictsWithGenderContext({ meaning }, inputFactors);
      const variantOnly = isVariantOnlyMeaning(meaning);
      const readingListOnly = isReadingListOnlyMeaning(meaning);
      if (
        !character ||
        (!unsuitableNameCharacters.has(character) &&
          !hasUnsuitableMeaning(meaning) &&
          !variantOnly &&
          !readingListOnly &&
          !genderConflict)
      ) return [];

      return [{
        character,
        reason: unsuitableNameCharacters.has(character)
          ? `${character}은 감옥을 뜻하는 글자로 이름에 담기 부적절해 추천에서 제외했습니다.`
          : variantOnly
            ? `${character}은 본자의 약자 표기만 제시되어 독립된 의미 후보로 중복 추천하지 않습니다.`
          : readingListOnly
            ? `${character}은 뜻풀이 대신 음가 목록만 확인되어 의미 추천 후보에서 제외했습니다.`
          : genderConflict
            ? `${character}의 '${meaning}'은 입력한 성별 조건과 맞지 않아 추천에서 제외했습니다.`
          : `'${meaning}'에 이름 추천에 부적합한 부정적 의미가 포함되어 의미 안전 기준에서 제외했습니다.`,
        severity:
          genderConflict || variantOnly || readingListOnly
            ? "medium" as const
            : "high" as const,
      }];
    });
  });

  return rejected.filter(
    (item, index) =>
      rejected.findIndex((candidate) => candidate.character === item.character) === index,
  );
}

function birthLabel(inputFactors: Record<string, unknown>) {
  const birthStatus = stringValue(inputFactors.birthStatus);
  const calendarType = stringValue(inputFactors.calendarType);
  const year = stringValue(inputFactors.birthYear);
  const month = stringValue(inputFactors.birthMonth);
  const day = stringValue(inputFactors.birthDay);
  const hour = stringValue(inputFactors.birthHour);
  const date = [year, month, day]
    .filter((value) => value && value !== "unknown")
    .join(".");
  const type = calendarType === "lunar" ? "음력" : calendarType === "solar" ? "양력" : "";

  return [
    birthStatus === "expected" ? "출생 예정" : "",
    type,
    date,
    hour && hour !== "unknown" ? birthHourLabels[hour] ?? hour : "",
  ]
    .filter(Boolean)
    .join(" / ");
}

function getSajuElementHint(inputFactors: Record<string, unknown>): HanjaElement {
  const birthMonth = stringValue(inputFactors.birthMonth);

  if (!birthMonth || birthMonth === "unknown") {
    return "neutral";
  }

  const month = Number(birthMonth);
  // 1~12 범위를 벗어난 값(0, 13, 소수, NaN)은 계절 참고 대상이 아니므로 중립으로 둔다.
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    return "neutral";
  }

  if ([3, 4, 5].includes(month)) {
    return "wood";
  }

  if ([6, 7, 8].includes(month)) {
    return "fire";
  }

  if ([9, 10].includes(month)) {
    return "metal";
  }

  if ([11, 12, 1].includes(month)) {
    return "water";
  }

  return "earth";
}

function scoreOption(
  option: HanjaOption,
  inputFactors: Record<string, unknown>,
  preferredElement: HanjaElement,
) {
  const parentWishes = stringValue(inputFactors.parentWishes);
  let score = 72;

  score += characterUsabilityScore(option.character);
  score += meaningPreferenceScore(option.meaning);

  if (preferredElement !== "neutral" && option.element === preferredElement) {
    score += 8;
  }

  for (const tag of option.tags) {
    if (parentWishes.includes(tag)) {
      score += 5;
    }
  }

  // 제외어 감점은 필터(matchesUserExcludedMeaning)와 동일한 토큰 분해 로직을 써야
  // "죽음, 병"처럼 여러 단어를 입력했을 때도 각 단어로 매칭된다(전체 문자열 includes는 매칭 안 됨).
  if (matchesUserExcludedMeaning(option, inputFactors)) {
    score -= 50;
  }

  return score;
}
function hasComparisonSignal(
  option: HanjaOption,
  inputFactors: Record<string, unknown>,
  preferredElement: HanjaElement,
) {
  const parentWishes = stringValue(inputFactors.parentWishes);
  const excludedMeanings = stringValue(inputFactors.excludedMeanings);
  const targetText = `${option.meaning} ${option.note} ${option.tags.join(" ")}`;

  return (
    (preferredElement !== "neutral" && option.element === preferredElement) ||
    option.tags.some((tag) => parentWishes.includes(tag)) ||
    Boolean(excludedMeanings && targetText.includes(excludedMeanings))
  );
}


function buildCombination(
  inputFactors: Record<string, unknown>,
  optionsBySyllable: HanjaOption[][],
) {
  const preferredElement = getSajuElementHint(inputFactors);

  return optionsBySyllable.map((options) => {
    const ranked = [...options].sort(
      (a, b) =>
        scoreOption(b, inputFactors, preferredElement) -
        scoreOption(a, inputFactors, preferredElement),
    );

    return ranked;
  });
}

function combineOptions(optionGroups: HanjaOption[][], limit = 80) {
  const combinations: HanjaOption[][] = [];
  const maximumIndexSum = optionGroups.reduce(
    (sum, options) => sum + Math.max(0, options.length - 1),
    0,
  );

  function visit(
    groupIndex: number,
    remainingIndexSum: number,
    current: HanjaOption[],
  ) {
    if (combinations.length >= limit) {
      return;
    }

    if (groupIndex === optionGroups.length) {
      if (remainingIndexSum === 0) combinations.push(current);
      return;
    }

    const options = optionGroups[groupIndex];
    const maximumIndex = Math.min(options.length - 1, remainingIndexSum);
    for (let optionIndex = maximumIndex; optionIndex >= 0; optionIndex -= 1) {
      visit(
        groupIndex + 1,
        remainingIndexSum - optionIndex,
        [...current, options[optionIndex]],
      );
    }
  }

  for (
    let indexSum = 0;
    indexSum <= maximumIndexSum && combinations.length < limit;
    indexSum += 1
  ) {
    visit(0, indexSum, []);
  }

  return combinations;
}

function candidateMeaning(options: HanjaOption[]) {
  return options
    .map((option) => `${option.character}(${option.meaning}) — ${option.note}`)
    .join(" ");
}

function recommendationReason(
  options: HanjaOption[],
  inputFactors: Record<string, unknown>,
) {
  const parentWishes = stringValue(inputFactors.parentWishes);
  const matchedTags = [
    ...new Set(
      options
        .flatMap((option) => option.tags)
        .filter((tag) => parentWishes.includes(tag)),
    ),
  ];
  const characterFlow = characterMeaningFlow(options);
  const factualDifference = options
    .map(
      (option) =>
        `${option.reading} 음절에 ${option.character}의 '${option.meaning}'`,
    )
    .join(", ");

  return matchedTags.length
    ? `${characterFlow} 뜻이 부모가 담고 싶은 '${parentWishes}' 가운데 ${matchedTags.join("·")}의 가치와 연결됩니다.`
    : `${factualDifference}을 사용해 ${options.map((option) => `'${option.meaning}'`).join("과 ")}의 뜻을 한 이름 안에 담았습니다.`;
}

function candidateStory(
  displayName: string,
  options: HanjaOption[],
  parentWishes: string,
) {
  const characterStories = options
    .map(
      (option) =>
        `${option.reading} 음절의 ${option.character}는 '${option.meaning}'의 뜻을 담습니다.`,
    )
    .join(" ");
  const tagImage = [
    ...new Set(options.flatMap((option) => option.tags.slice(0, 2))),
  ].join("·");
  const meaningImage = [...new Set(options.map((option) => option.meaning))].join("·");
  const combinedImage = tagImage || meaningImage;
  const wishSentence = parentWishes
    ? `두 뜻은 부모가 담고 싶은 '${parentWishes}'의 가치 중 실제로 맞닿는 부분을 구체적으로 살펴볼 수 있게 합니다.`
    : `${combinedImage}${descriptorParticle(combinedImage)} 의미 흐름으로 이름을 설명할 수 있습니다.`;

  return `${characterStories} ${displayName}의 자의(字義)는 ${combinedImage}${objectParticle(combinedImage)} 중심으로 이어집니다. ${wishSentence}`;
}

function practicalNameAnalysis(
  displayName: string,
  options: HanjaOption[],
) {
  const characterMeanings = options
    .map((option) => `${option.character}(${option.meaning})`)
    .join("·");
  const explanation = options
    .map(
      (option) =>
        `${option.reading}에는 ${option.character}의 '${option.meaning}'을 썼다고 설명할 수 있습니다`,
    )
    .join(". ");

  return `'${displayName}'은 ${characterMeanings}로 표기하며, ${explanation}. 두 글자의 뜻을 연결하면 ${options.map((option) => option.meaning).join("에서 ")}로 이어지는 의미 구조가 됩니다.`;
}

function sajuReferenceNote(
  inputFactors: Record<string, unknown>,
  preferredElement: HanjaElement,
) {
  const label = birthLabel(inputFactors) || "출생 시간 미상";

  if (preferredElement === "neutral") {
    return `입력한 출생 정보(${label})에서 출생월이 미정이므로 전통 오행 참고는 이번 분석에서 제외했습니다. 알 수 없는 출생 정보를 임의로 추정하지 않고, 음가, 자의 결합, 가족의 선호 가치와 실제 등록 가능성을 중심으로 후보를 비교했습니다.`;
  }

  return `입력한 출생 정보(${label}) 가운데 출생월을 중심으로 한 간이 전통 오행 참고에서는 ${elementLabels[preferredElement]}을 보완 관점으로 살폈습니다. 이는 정밀한 사주 원국 분석이 아니라 후보 간 의미 균형을 비교하기 위한 보조 기준이며, 이름의 운명이나 성격을 단정하지 않습니다. 최종 선택에서는 음가, 자의 결합, 가족의 선호 가치와 실제 등록 가능 여부를 우선해야 합니다.`;
}

function singleHanjaReason(
  option: HanjaOption,
  inputFactors: Record<string, unknown>,
  preferredElement: HanjaElement,
) {
  const parentWishes = stringValue(inputFactors.parentWishes);
  const matchedTags = option.tags.filter((tag) => parentWishes.includes(tag));

  if (matchedTags.length) {
    return `${option.character}는 ${matchedTags.join(", ")} 키워드가 부모의 바람과 직접 맞아 추천합니다.`;
  }

  if (preferredElement !== "neutral" && option.element === preferredElement) {
    return `${option.character}는 출생 정보에서 참고한 ${elementLabels[preferredElement]}의 보완 관점과 연결되며, '${option.meaning}'의 뜻도 이름의 긍정적인 인상을 더합니다.`;
  }

  const tagSummary = option.tags.slice(0, 2).join(", ");
  return tagSummary
    ? `${option.character}는 '${option.reading}' 지정 발음을 유지하면서 ${tagSummary} 이미지를 더합니다.`
    : `${option.character}는 '${option.reading}' 지정 발음이 확인된 한자로, '${option.meaning}'의 뜻을 담습니다.`;
}

function buildHanjaOptionDetails(
  syllables: string[],
  optionGroups: HanjaOption[][],
  selectedOptions: HanjaOption[],
  inputFactors: Record<string, unknown>,
  preferredElement: HanjaElement,
) {
  return syllables.map((syllable, index) => {
    const selectedCharacter = selectedOptions[index]?.character ?? "";
    // 상위 3개를 보여주되, 다양성 선택으로 4순위 이하가 채택되면 그 글자가 목록에서 빠져
    // selected 표시가 사라진다. 선택된 글자가 상위 3개에 없으면 목록에 함께 넣는다.
    const topOptions = optionGroups[index].slice(0, 3);
    const selectedOption = optionGroups[index].find(
      (option) => option.character === selectedCharacter,
    );
    const shownOptions =
      selectedOption && !topOptions.some((option) => option.character === selectedCharacter)
        ? [selectedOption, ...topOptions].slice(0, 4)
        : topOptions;
    return {
    syllable,
    selected_character: selectedCharacter,
    options: shownOptions.map((option) => {
      const matchingRate = hasComparisonSignal(option, inputFactors, preferredElement)
        ? Math.max(
            45,
            Math.min(98, Math.round(scoreOption(option, inputFactors, preferredElement))),
          )
        : null;

      return {
        character: option.character,
        designated_reading: option.reading,
        meaning: option.meaning,
        interpretation: option.note,
        recommendation_reason: singleHanjaReason(
          option,
          inputFactors,
          preferredElement,
        ),
        matching_rate: matchingRate,
        selected: option.character === selectedCharacter,
        source_status: option.sourceStatus,
      };
    }),
    };
  });
}

function officialRulesText() {
  return OFFICIAL_HANJA_RULES.map((rule) => rule.description).join(" ");
}

function excludedCondition(inputFactors: Record<string, unknown>) {
  const excludedMeanings = stringValue(inputFactors.excludedMeanings);

  if (!excludedMeanings) {
    return [];
  }

  return [
    {
      character: "사용자 제외 조건",
      reason: `입력한 제외 조건 "${excludedMeanings}"과 충돌하는 의미는 추천 후보에서 배제해야 합니다.`,
      severity: "medium" as const,
    },
  ];
}

export function normalizeInitialSoundForDisplay(sound: string) {
  if (!sound) {
    return sound;
  }

  const first = sound[0];

  if (first === "녀" || first === "뇨" || first === "뉴" || first === "니") {
    return `첫소리 ㄴ 예외 검토 가능: ${sound}`;
  }

  if (first === "랴" || first === "려" || first === "례" || first === "료" || first === "류" || first === "리") {
    return `첫소리 ㄹ 예외 검토 가능: ${sound}`;
  }

  return sound;
}

export function buildHanjaMeaningResult(inputFactors: Record<string, unknown>) {
  const familyName = stringValue(inputFactors.familyName);
  const rawGivenName = stringValue(inputFactors.givenNameHangul);
  const parentWishes = stringValue(inputFactors.parentWishes);
  const givenSyllables = hangulSyllables(rawGivenName);
  const displayName = `${familyName}${rawGivenName}` || rawGivenName;
  const generationIsUsed =
    stringValue(inputFactors.generationNameUsage) === "used";
  const generationSyllable = stringValue(inputFactors.generationSyllable);
  const generationHanja = stringValue(inputFactors.generationHanja);
  const generationIndex = generationIsUsed
    ? givenSyllables.indexOf(generationSyllable)
    : -1;

  if (!givenSyllables.length) {
    return {
      analysis_summary:
        "한글 이름을 인식하지 못했습니다. 먼저 한글 이름을 입력하면 음절별로 지정 발음에 맞는 인명용 한자 후보를 검토합니다.",
      candidates: [],
      rejected_hanja: [],
      official_verification_note:
        `기준 원본은 ${OFFICIAL_HANJA_SOURCE.title}(${OFFICIAL_HANJA_SOURCE.versionLabel})입니다. ${officialRulesText()}`,
      add_on_recommendations: ["premiumPdf"],
    };
  }

  const optionsForPosition = (syllable: string, index: number) => {
    const rawOptions =
      officialOptionsFromInput(inputFactors, syllable) ?? hanjaBank[syllable] ?? [];
    // 돌림자는 가족이 확정한 글자이므로 의미 품질 필터(isCandidateOptionAllowed)와 중복 제거보다
    // 먼저 고정한다. 약자 설명 글자(예: 徳)나 의미 중복 글자도 돌림자로 지정되면 그대로 쓴다.
    // 단, 공식 DB 경로(officialOptionsFromInput)는 PUA·무의미·부정 의미를 이미 걸러내므로,
    // 그런 글자가 돌림자면 여기서도 후보가 비어 정상적으로 "확인 어려움"으로 처리된다.
    if (index === generationIndex) {
      return rawOptions.filter((option) => option.character === generationHanja);
    }
    return dedupeOptionsByMeaning(
      rawOptions.filter((option) => isCandidateOptionAllowed(option, inputFactors)),
    );
  };
  const missingSyllables = givenSyllables.filter(
    (syllable, index) => !optionsForPosition(syllable, index)?.length,
  );
  const optionGroups = missingSyllables.length
    ? []
    : buildCombination(
        inputFactors,
        givenSyllables.map((syllable, index) =>
          optionsForPosition(syllable, index)!,
        ),
      );
  const combinations = missingSyllables.length ? [] : combineOptions(optionGroups);
  const preferredElement = getSajuElementHint(inputFactors);
  const hasClassifiedElement = optionGroups.some((options) =>
    options.some((option) => option.element !== "neutral"),
  );
  const hasBirthElementReference =
    preferredElement !== "neutral" && hasClassifiedElement;
  const hasParentWishes = Boolean(parentWishes);
  const hasExcludedMeanings = Boolean(stringValue(inputFactors.excludedMeanings));
  const recommendationFocuses = [
    ["종합 의미 우선안", "음가, 자의 결합과 실사용 설명력을 종합적으로 살핀 우선안입니다."],
    hasParentWishes
      ? ["선호 가치 우선안", "입력한 선호 가치와 한자 결합 의미의 연결성을 우선한 대안입니다."]
      : ["자의 명확성 우선안", "선택 조건을 가정하지 않고 각 한자의 뜻이 분명한 조합을 우선한 대안입니다."],
    hasBirthElementReference
      ? ["전통 오행 참고안", "입력한 출생월을 기반으로 한 간이 전통 오행 참고를 적용한 대안입니다."]
      : ["의미 균형 대안", "선택 조건을 가정하지 않고 한자 간 의미의 균형과 조화를 비교한 대안입니다."],
    ["실사용 안정안", "자의의 명확성, 설명 용이성과 일상적인 사용성을 중시한 대안입니다."],
    ["개성·희소성 대안", "지정 음가는 유지하면서 상대적으로 차별화된 자의와 인상을 검토한 대안입니다."],
  ] as const;
  const analysisPerspectives = [
    "자의와 결합 의미",
    hasParentWishes ? "입력한 선호 가치" : null,
    hasExcludedMeanings ? "입력한 제외 의미" : null,
    hasBirthElementReference ? "출생월 기반 간이 전통 참고" : null,
    "실사용 안정성",
  ].filter((value): value is string => Boolean(value));

  const rankedCandidates = combinations
    .map((options) => {
    const hanja = options.map((option) => option.character).join("");
    const baseScore =
      options.reduce(
        (sum, option) => sum + scoreOption(option, inputFactors, preferredElement),
        0,
      ) / options.length;
    const hasMatchingSignal = options.some((option) =>
      hasComparisonSignal(option, inputFactors, preferredElement),
    );
    const matchingRate = hasMatchingSignal
      ? Math.max(45, Math.min(98, Math.round(baseScore))) : null;

    return {
      ranking_score: baseScore,
      hangul: rawGivenName,
      hanja,
      meaning: candidateMeaning(options),
      recommendation_reason: recommendationReason(
        options,
        inputFactors,
      ),
      matching_rate: matchingRate,
      hanja_options: buildHanjaOptionDetails(
        givenSyllables,
        optionGroups,
        options,
        inputFactors,
        preferredElement,
      ),
      official_status:
        "현재 결과는 서비스가 검토 중인 인명용 한자 자료를 바탕으로 제안했습니다. 출생신고나 개명에 사용하기 전에는 대법원 전자가족관계등록시스템의 인명용 한자 조회에서 해당 글자와 지정 발음을 다시 확인해 주세요.",
      character_breakdown: options.map((option, optionIndex) => ({
        syllable: givenSyllables[optionIndex],
        character: option.character,
        designated_reading: option.reading,
        meaning: option.meaning,
        note: option.note,
        source_status: option.sourceStatus,
        origin_label: option.originLabel ?? null,
      })),
      story: candidateStory(
        displayName,
        options,
        parentWishes,
      ),
      practical_analysis: practicalNameAnalysis(displayName, options),
      saju_note: sajuReferenceNote(inputFactors, preferredElement),
      suitability_score: matchingRate,
      caution_notes:
        "같은 모양처럼 보이는 한자라도 지정 발음이나 공식 등록 여부가 다를 수 있습니다. 특히 동자·속자·약자와 示/礻, 艹 등의 부수 변형은 임의로 바꾸지 말고 공식 조회 결과에 표시된 글자 형태와 발음을 기준으로 확인해 주세요.",
    };
  })
    .sort((a, b) => b.ranking_score - a.ranking_score);
  const candidates = [] as typeof rankedCandidates;
  const remainingCandidates = [...rankedCandidates];
  const seenCharacters = givenSyllables.map(() => new Set<string>());
  const seenMeanings = givenSyllables.map(() => new Set<string>());

  while (candidates.length < 10 && remainingCandidates.length) {
    remainingCandidates.sort((a, b) => {
      const novelty = (candidate: (typeof rankedCandidates)[number]) =>
        candidate.character_breakdown.reduce(
          (count, part, position) =>
            count +
            (seenCharacters[position].has(part.character) ? 0 : 2) +
            (seenMeanings[position].has(part.meaning) ? 0 : 1),
          0,
        );
      return (
        novelty(b) - novelty(a) ||
        b.ranking_score - a.ranking_score
      );
    });
    const selected = remainingCandidates.shift()!;
    candidates.push(selected);
    selected.character_breakdown.forEach((part, position) => {
      seenCharacters[position].add(part.character);
      seenMeanings[position].add(part.meaning);
    });
  }

  const labeledCandidates = candidates
    .map((candidate, index) => {
      const { ranking_score: _rankingScore, ...publicCandidate } = candidate;
      void _rankingScore;
      return {
        ...publicCandidate,
        recommendation_focus:
          recommendationFocuses[index]?.[0] ?? `확장 비교안 ${index - 4}`,
        focus_summary:
          recommendationFocuses[index]?.[1] ??
          `${candidate.character_breakdown
            .map((part) => `${part.character}의 '${part.meaning}'`)
            .join("과 ")}을 상위 후보와 비교하기 위한 확장안입니다.`,
      };
    });

  const rejectedFromSound = givenSyllables.flatMap((syllable) => negativeHanja[syllable] ?? []);
  const rejectedFromOfficialMeanings = rejectedOfficialMeaningOptions(
    inputFactors,
    givenSyllables,
  );
  const soundReadingSummary = labeledCandidates[0]?.character_breakdown
    .map(
      (part) =>
        `${part.character}${topicParticle(part.designated_reading)} '${part.designated_reading}'`,
    )
    .join(", ");
  const missingRejected = missingSyllables.map((syllable) => ({
    character: syllable,
    reason: `‘${syllable}’ 음절에 대응하는 인명용 한자 후보는 현재 검토 자료만으로 지정 음가와 등록 가능성을 충분히 확인하기 어렵습니다. 검증되지 않은 글자를 임의로 제안하지 않고, 공식 인명용 한자 조회 기준과 대조하기 전까지 추천에서 제외했습니다.`,
    severity: "medium" as const,
  }));

  return {
    analysis_summary: missingSyllables.length
      ? `'${rawGivenName}' 중 ${missingSyllables.join(", ")} 음절은 현재 검토 자료만으로 지정 음가와 등록 가능성을 확인하기 어렵습니다. 정확성을 위해 해당 음절의 추천을 보류했으며, 공식 인명용 한자 조회 기준과 대조한 뒤 후보를 제시해야 합니다.`
      : `'${rawGivenName}'에 어울리는 한자 조합을 ${analysisPerspectives.join("·")} 관점으로 비교했습니다. 입력하지 않은 선택 조건은 분석에서 제외했으며, 각 후보에서는 다른 조합과 구별되는 의미와 이야기만 보여드립니다.`,
    common_analysis: {
      sound_basis: soundReadingSummary
        ? `${soundReadingSummary}${
            hasFinalConsonant(
              labeledCandidates[0]?.character_breakdown.at(-1)?.designated_reading ?? "",
            )
              ? "이라고"
              : "라고"
          } 읽습니다. 이 지정 발음을 기준으로 정해 둔 '${rawGivenName}'의 소리가 달라지지 않는 한자만 검토했습니다.`
        : `정해 둔 '${rawGivenName}'의 각 음절과 지정 발음이 일치하는 한자만 검토했습니다.`,
      birth_reference: sajuReferenceNote(inputFactors, preferredElement),
      caution_notes:
        "자형 판단은 공식 인명용 한자 조회에 등재된 글자 형태와 지정 발음을 기준으로 합니다. 동자·속자·약자는 공식표에서 해당 관계가 확인되는 경우에만 같은 사용 범주로 인정하며, 示/礻 및 艹 계열의 부수 변형도 규정에서 허용한 범위 안에서만 적용합니다.",
      official_status:
        `등록 가능성은 ${OFFICIAL_HANJA_SOURCE.title}(${OFFICIAL_HANJA_SOURCE.versionLabel})과 ${OFFICIAL_HANJA_SOURCE.ruleReference}를 기준으로 판단합니다. 후보 한자가 신고 시점의 대법원 인명용 한자 조회에 등재되어 있고, 이름 음절과 지정 발음이 일치하는 경우에만 등록 가능 후보로 봅니다. 서비스 추천 결과만으로 등록 가능성을 확정하지 않습니다.`,
    },
    candidates: labeledCandidates,
    rejected_hanja: [
      ...rejectedFromSound,
      ...rejectedFromOfficialMeanings,
      ...excludedCondition(inputFactors),
      ...missingRejected,
    ],
    official_verification_note:
      `기준 원본: ${OFFICIAL_HANJA_SOURCE.title}, ${OFFICIAL_HANJA_SOURCE.ruleReference}, ${OFFICIAL_HANJA_SOURCE.versionLabel}. ${officialRulesText()} 출생신고 또는 개명 전에는 대법원/가족관계등록 기준으로 최종 확인해야 합니다.`,
    add_on_recommendations: ["premiumPdf", "calligraphy", "stamp"],
  };
}
