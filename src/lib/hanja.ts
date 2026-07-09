type HanjaOption = {
  character: string;
  meaning: string;
  note: string;
  element: "wood" | "fire" | "earth" | "metal" | "water" | "neutral";
};

type RejectedHanja = {
  character: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

const hanjaBank: Record<string, HanjaOption[]> = {
  가: [
    { character: "佳", meaning: "아름다울 가", note: "품격과 조화", element: "wood" },
    { character: "嘉", meaning: "아름다울/기릴 가", note: "축복과 칭찬", element: "wood" },
  ],
  강: [
    { character: "康", meaning: "편안할 강", note: "건강과 안정", element: "earth" },
    { character: "剛", meaning: "굳셀 강", note: "의지와 단단함", element: "metal" },
  ],
  건: [
    { character: "建", meaning: "세울 건", note: "기반을 세움", element: "wood" },
    { character: "健", meaning: "굳셀/건강할 건", note: "활력과 건강", element: "earth" },
  ],
  규: [
    { character: "奎", meaning: "별 이름 규", note: "빛나는 재능", element: "fire" },
    { character: "圭", meaning: "홀 규", note: "반듯한 기준", element: "earth" },
  ],
  나: [
    { character: "娜", meaning: "아리따울 나", note: "우아함", element: "wood" },
    { character: "羅", meaning: "벌일 나", note: "넓은 펼침", element: "metal" },
  ],
  다: [
    { character: "多", meaning: "많을 다", note: "풍요와 다양성", element: "neutral" },
    { character: "茶", meaning: "차 다", note: "맑고 차분한 이미지", element: "wood" },
  ],
  도: [
    { character: "道", meaning: "길 도", note: "바른 길과 철학", element: "earth" },
    { character: "度", meaning: "법도 도", note: "균형과 품격", element: "metal" },
  ],
  라: [
    { character: "羅", meaning: "벌일 라", note: "넓은 세계", element: "metal" },
    { character: "摞", meaning: "쌓을 라", note: "축적과 성장", element: "earth" },
  ],
  로: [
    { character: "潞", meaning: "강 이름 로", note: "흐름과 확장", element: "water" },
    { character: "路", meaning: "길 로", note: "진로와 여정", element: "earth" },
  ],
  리: [
    { character: "利", meaning: "이로울 리", note: "유익함", element: "metal" },
    { character: "理", meaning: "다스릴/이치 리", note: "이성과 질서", element: "earth" },
  ],
  린: [
    { character: "潾", meaning: "맑을 린", note: "맑은 품성", element: "water" },
    { character: "璘", meaning: "옥빛 린", note: "귀한 빛", element: "metal" },
  ],
  민: [
    { character: "敏", meaning: "민첩할 민", note: "총명함과 기민함", element: "metal" },
    { character: "旻", meaning: "하늘 민", note: "넓은 하늘과 포용", element: "fire" },
    { character: "玟", meaning: "옥돌 민", note: "맑고 귀한 품성", element: "metal" },
  ],
  빈: [
    { character: "彬", meaning: "빛날 빈", note: "문채와 품격", element: "wood" },
    { character: "斌", meaning: "빛날 빈", note: "문무의 균형", element: "fire" },
  ],
  서: [
    { character: "瑞", meaning: "상서로울 서", note: "좋은 징조와 축복", element: "earth" },
    { character: "書", meaning: "글 서", note: "배움과 기록", element: "wood" },
    { character: "序", meaning: "차례 서", note: "질서와 시작", element: "earth" },
  ],
  선: [
    { character: "善", meaning: "착할 선", note: "선한 마음", element: "earth" },
    { character: "宣", meaning: "베풀 선", note: "밝게 드러냄", element: "fire" },
  ],
  수: [
    { character: "秀", meaning: "빼어날 수", note: "뛰어난 재능", element: "wood" },
    { character: "洙", meaning: "물가 수", note: "맑은 흐름", element: "water" },
  ],
  시: [
    { character: "始", meaning: "비로소 시", note: "새로운 시작", element: "wood" },
    { character: "詩", meaning: "시 시", note: "감성과 언어", element: "fire" },
  ],
  아: [
    { character: "雅", meaning: "맑고 우아할 아", note: "품격과 우아함", element: "wood" },
    { character: "娥", meaning: "예쁠 아", note: "고운 아름다움", element: "earth" },
  ],
  연: [
    { character: "姸", meaning: "고울 연", note: "고운 품성", element: "earth" },
    { character: "然", meaning: "그러할 연", note: "자연스러움", element: "fire" },
    { character: "延", meaning: "늘일 연", note: "이어지는 성장", element: "wood" },
  ],
  예: [
    { character: "叡", meaning: "밝을 예", note: "밝은 지혜", element: "fire" },
    { character: "藝", meaning: "재주 예", note: "예술성과 재능", element: "wood" },
  ],
  온: [
    { character: "溫", meaning: "따뜻할 온", note: "따뜻함과 온화함", element: "water" },
    { character: "穩", meaning: "평온할 온", note: "안정과 평정", element: "earth" },
  ],
  우: [
    { character: "祐", meaning: "도울 우", note: "도움과 보호", element: "earth" },
    { character: "宇", meaning: "집/우주 우", note: "큰 그릇과 세계", element: "earth" },
    { character: "雨", meaning: "비 우", note: "생명을 적시는 기운", element: "water" },
  ],
  유: [
    { character: "柔", meaning: "부드러울 유", note: "부드러움과 유연함", element: "wood" },
    { character: "裕", meaning: "넉넉할 유", note: "여유와 풍요", element: "earth" },
    { character: "侑", meaning: "도울 유", note: "돕고 권하는 마음", element: "earth" },
  ],
  윤: [
    { character: "潤", meaning: "윤택할 윤", note: "부드럽게 적시는 덕", element: "water" },
    { character: "允", meaning: "진실로 윤", note: "진정성과 신뢰", element: "earth" },
    { character: "玧", meaning: "귀한 옥 윤", note: "맑고 귀한 이미지", element: "metal" },
  ],
  은: [
    { character: "恩", meaning: "은혜 은", note: "고마움과 따뜻함", element: "earth" },
    { character: "誾", meaning: "온화할 은", note: "부드러운 말과 태도", element: "fire" },
  ],
  이: [
    { character: "怡", meaning: "기쁠 이", note: "밝은 기쁨", element: "fire" },
    { character: "利", meaning: "이로울 이", note: "유익함", element: "metal" },
  ],
  재: [
    { character: "宰", meaning: "다스릴 재", note: "책임과 통솔", element: "earth" },
    { character: "栽", meaning: "심을 재", note: "성장과 돌봄", element: "wood" },
  ],
  준: [
    { character: "俊", meaning: "준걸 준", note: "뛰어남과 재능", element: "fire" },
    { character: "準", meaning: "법도/기준 준", note: "반듯한 기준", element: "water" },
    { character: "浚", meaning: "깊을 준", note: "깊은 내면", element: "water" },
  ],
  지: [
    { character: "智", meaning: "지혜 지", note: "깊은 지혜", element: "fire" },
    { character: "志", meaning: "뜻 지", note: "분명한 뜻", element: "fire" },
    { character: "知", meaning: "알 지", note: "앎과 통찰", element: "fire" },
  ],
  진: [
    { character: "眞", meaning: "참 진", note: "진실함", element: "metal" },
    { character: "鎭", meaning: "진정할 진", note: "안정과 무게", element: "metal" },
    { character: "珍", meaning: "보배 진", note: "귀한 존재", element: "metal" },
  ],
  하: [
    { character: "河", meaning: "물 하", note: "큰 흐름과 포용", element: "water" },
    { character: "夏", meaning: "여름 하", note: "밝은 생동감", element: "fire" },
    { character: "荷", meaning: "연꽃 하", note: "맑음과 품격", element: "wood" },
  ],
  현: [
    { character: "賢", meaning: "어질 현", note: "어진 지혜", element: "metal" },
    { character: "炫", meaning: "빛날 현", note: "빛과 존재감", element: "fire" },
    { character: "絃", meaning: "줄 현", note: "조화와 울림", element: "wood" },
  ],
  혜: [
    { character: "慧", meaning: "슬기로울 혜", note: "밝은 슬기", element: "fire" },
    { character: "惠", meaning: "은혜 혜", note: "베풂과 따뜻함", element: "earth" },
  ],
  훈: [
    { character: "勳", meaning: "공 훈", note: "쌓아 올린 공로", element: "fire" },
    { character: "薰", meaning: "향풀 훈", note: "좋은 향과 영향", element: "wood" },
  ],
};

const negativeHanja: Record<string, RejectedHanja[]> = {
  사: [
    {
      character: "死",
      reason: "죽음의 의미가 직접적이어서 이름의 축복성과 사회적 설명 가능성이 낮습니다.",
      severity: "high",
    },
    {
      character: "邪",
      reason: "간사함, 바르지 않음의 의미가 강해 인명 의미 설계에서 배제합니다.",
      severity: "high",
    },
  ],
  재: [
    {
      character: "災",
      reason: "재앙의 의미가 직접적이어서 같은 소리라도 이름 후보에서 제외합니다.",
      severity: "high",
    },
  ],
  병: [
    {
      character: "病",
      reason: "질병의 의미가 직접적이어서 이름에 담기 부적합합니다.",
      severity: "high",
    },
  ],
  악: [
    {
      character: "惡",
      reason: "악함의 의미가 직접적이어서 이름 후보에서 제외합니다.",
      severity: "high",
    },
  ],
  망: [
    {
      character: "亡",
      reason: "잃음, 망함의 의미가 강해 이름의 긍정적 의미와 충돌합니다.",
      severity: "high",
    },
  ],
};

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function hangulSyllables(value: string) {
  return Array.from(value.replace(/\s/g, "")).filter((char) =>
    /^[가-힣]$/.test(char),
  );
}

function birthLabel(inputFactors: Record<string, unknown>) {
  const year = stringValue(inputFactors.birthYear);
  const month = stringValue(inputFactors.birthMonth);
  const day = stringValue(inputFactors.birthDay);
  const hour = stringValue(inputFactors.birthHour);

  return [year, month, day].filter(Boolean).join(".") + (hour ? ` / ${hour}` : "");
}

function buildCombination(syllables: string[], index: number) {
  return syllables.map((syllable) => {
    const options = hanjaBank[syllable];
    return options?.[index % options.length] ?? null;
  });
}

function hasMissingOptions(options: Array<HanjaOption | null>) {
  return options.some((option) => option === null);
}

function candidateMeaning(options: HanjaOption[]) {
  return options
    .map((option) => `${option.character}(${option.meaning})`)
    .join(", ");
}

export function buildHanjaMeaningResult(inputFactors: Record<string, unknown>) {
  const familyName = stringValue(inputFactors.familyName);
  const rawGivenName = stringValue(inputFactors.givenNameHangul);
  const parentWishes = stringValue(inputFactors.parentWishes);
  const excludedMeanings = stringValue(inputFactors.excludedMeanings);
  const givenSyllables = hangulSyllables(rawGivenName);
  const displayName = `${familyName}${rawGivenName}`;

  if (!givenSyllables.length) {
    return {
      analysis_summary:
        "한글 이름을 인식하지 못했습니다. 한자 후보는 한글 음절을 기준으로 매칭하므로 이름을 한글로 입력해야 합니다.",
      candidates: [],
      rejected_hanja: [],
      official_verification_note:
        "인명용 한자 최종 사용 가능 여부는 대한민국 전자가족관계등록시스템 또는 관할 기관의 최신 기준으로 확인해야 합니다.",
      add_on_recommendations: ["premiumPdf"],
    };
  }

  const missingSyllables = givenSyllables.filter((syllable) => !hanjaBank[syllable]);
  const maxCandidates = missingSyllables.length ? 0 : Math.min(3, givenSyllables.length + 1);
  const candidates = Array.from({ length: maxCandidates }, (_, index) => {
    const combination = buildCombination(givenSyllables, index);

    if (hasMissingOptions(combination)) {
      return null;
    }

    const options = combination as HanjaOption[];
    const hanja = options.map((option) => option.character).join("");
    const elements = [...new Set(options.map((option) => option.element))].join(", ");

    return {
      hangul: rawGivenName,
      hanja,
      meaning: candidateMeaning(options),
      character_breakdown: options.map((option, optionIndex) => ({
        syllable: givenSyllables[optionIndex],
        character: option.character,
        meaning: option.meaning,
        note: option.note,
      })),
      story: `${displayName || rawGivenName}의 '${rawGivenName}' 소리를 그대로 유지하면서 ${options
        .map((option) => option.note)
        .join(", ")}의 의미를 연결한 조합입니다.${
        parentWishes ? ` 부모가 담고 싶은 가치인 "${parentWishes}"와도 자연스럽게 이어집니다.` : ""
      }`,
      saju_note: `입력된 생년월일/생시(${birthLabel(inputFactors) || "미입력"})를 참고할 때, 이 후보는 ${elements} 이미지가 중심입니다. 정확한 사주 해석은 전문 감정과 함께 보조 판단으로 쓰는 것이 좋습니다.`,
      suitability_score: Math.max(82, 94 - index * 5),
      caution_notes:
        "이 후보는 내부 시범 한자 테이블 기반 추천입니다. 법적 등록 전 공식 인명용 한자 조회가 필요합니다.",
    };
  }).filter(Boolean);

  const rejectedFromSound = givenSyllables.flatMap((syllable) => negativeHanja[syllable] ?? []);
  const rejectedFromUserInput = excludedMeanings
    ? [
        {
          character: "사용자 제외 조건",
          reason: `입력한 제외 조건 "${excludedMeanings}"과 충돌하는 의미의 한자는 추천 후보에서 제외해야 합니다.`,
          severity: "medium" as const,
        },
      ]
    : [];
  const missingRejected = missingSyllables.map((syllable) => ({
    character: syllable,
    reason:
      "현재 내장 후보 테이블에 이 음절의 한자 후보가 없습니다. 억지 추천을 하지 않고 공식 인명용 한자 조회 또는 관리자 데이터 보강 대상으로 분류했습니다.",
    severity: "medium" as const,
  }));

  return {
    analysis_summary: missingSyllables.length
      ? `'${rawGivenName}' 중 ${missingSyllables.join(", ")} 음절은 아직 내장 한자 후보가 없어 추천을 보류했습니다. 엉뚱한 한자를 제안하지 않도록 공식 후보 확인 대상으로 표시합니다.`
      : `'${rawGivenName}'의 각 음절에 맞는 한자 후보만 조합했습니다. 추천은 입력한 한글 이름의 소리를 바꾸지 않고, 의미와 부모의 바람을 맞추는 방식입니다.`,
    candidates,
    rejected_hanja: [...rejectedFromSound, ...rejectedFromUserInput, ...missingRejected],
    official_verification_note:
      "추천 후보는 서비스 내부 후보 테이블과 AI 설명을 위한 초안입니다. 출생신고 또는 개명 등 법적 사용 전에는 대한민국 전자가족관계등록시스템/대법원 인명용 한자 기준에서 해당 한자가 이름에 쓸 수 있는지 반드시 확인해야 합니다.",
    add_on_recommendations: ["premiumPdf", "calligraphy", "stamp"],
  };
}
