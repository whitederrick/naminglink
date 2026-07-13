import type { ServiceType } from "@/lib/services";
import { buildHanjaMeaningResult } from "@/lib/hanja";

export function getMockResult(
  serviceType: ServiceType,
  inputFactors: Record<string, unknown> = {},
) {
  if (inputFactors.serviceSlug === "global-name-to-hangul") {
    const originalName =
      typeof inputFactors.originalName === "string"
        ? inputFactors.originalName
        : "입력한 원래 이름";

    return {
      analysis_summary: `${originalName}의 원래 발음을 유지하면서 한국어 화자가 자연스럽게 읽을 수 있는 한글 표기를 제안합니다.`,
      candidates: [
        {
          hangul: "원음 기반 한글 표기",
          recommendation_reason:
            "선택한 표기 언어와 국가·지역, 사용자가 제공한 발음 힌트를 순서대로 반영한 예시입니다.",
          matching_rate: 95,
          source_pronunciation_basis: "선택한 본명 표기 언어와 국가·지역",
          ipa: "API 연결 후 실제 발음 기호 제공",
          syllables: "API 연결 후 실제 음절 분석 제공",
          pronunciation: originalName,
          cultural_fit: "한국어 문서와 소개 문구에서 쉽게 읽을 수 있습니다.",
          usage_note: "실제 본인의 현지 발음이 다르면 발음 힌트를 입력해 조정하세요.",
          caution_notes:
            "현재 결과는 API 키가 없을 때 표시되는 예시이며 입력 이름별 실제 음역은 AI 연결 후 생성됩니다.",
          suitability_score: 95,
        },
      ],
      rejected_options: [],
      add_on_recommendations: [],
    };
  }

  switch (serviceType) {
    case "HANJA_MEANING_MATCH":
      return buildHanjaMeaningResult(inputFactors);
    case "KOREAN_TO_GLOBAL":
      return {
        analysis_summary:
          "한글 이름의 소리와 의미, 목표 지역의 발음 습관, 직업적 인상을 함께 고려하면 단순 번역보다 실제로 소개하기 쉬운 이름이 적합합니다. 후보는 매칭률이 높은 순서부터 표시합니다.",
        candidates: [
          {
            name: "Ariel",
            recommendation_reason:
              "부드럽고 기억하기 쉽지만 지역에 따라 성별 이미지가 다르게 읽힐 수 있어 상대적으로 매칭률이 낮은 대안 후보입니다.",
            matching_rate: 61,
            region_fit: "영어권과 스페인어권에서 사용 가능하나 이미지 편차 있음",
            pronunciation: "AIR-ee-el",
            meaning_connection:
              "밝고 섬세한 이미지를 줄 수 있지만 한국 이름의 원래 의미와는 간접적으로 연결됩니다.",
            professional_impression:
              "창작자나 캐주얼한 프로필에는 좋지만 보수적인 비즈니스 문서에서는 가볍게 느껴질 수 있습니다.",
            local_cautions:
              "지역별 성별 인식 차이를 확인하고 사용하는 것이 좋습니다.",
            suitability_score: 61,
          },
          {
            name: "Mina",
            recommendation_reason:
              "한국 이름의 음절감을 어느 정도 살리지만, 이미 여러 문화권에서 별도 의미를 가진 이름이라 정체성 연결은 중간 수준입니다.",
            matching_rate: 72,
            region_fit: "영어권, 독일어권, 일본어권에서 발음 부담이 낮음",
            pronunciation: "MEE-na",
            meaning_connection:
              "작고 맑은 인상을 줄 수 있어 부드러운 이름 의미와 연결됩니다.",
            professional_impression:
              "친근하고 기억하기 쉬우나 매우 고급스러운 인상은 아닙니다.",
            local_cautions:
              "일본어권/유럽권에서 기존 이름으로 인식될 수 있어 소개 문구가 필요합니다.",
            suitability_score: 72,
          },
          {
            name: "Luca",
            recommendation_reason:
              "목표 지역을 여러 언어권으로 넓혔을 때 발음 난도가 낮고, 빛과 따뜻함의 이미지가 한자 의미와 연결됩니다.",
            matching_rate: 82,
            region_fit: "영어권, 독일어권, 스페인어권에서 발음 부담이 낮음",
            pronunciation: "LOO-ka",
            meaning_connection:
              "빛, 명료함, 따뜻함의 이미지를 여러 언어권에서 자연스럽게 전달합니다.",
            professional_impression:
              "친근하지만 너무 가볍지 않아 학교, 업무, 창작자 프로필에 모두 사용할 수 있습니다.",
            local_cautions:
              "일부 지역에서는 남성 이미지가 강할 수 있어 성별/브랜드 톤에 따라 보조 후보를 함께 검토하세요.",
            suitability_score: 82,
          },
          {
            name: "Julian",
            recommendation_reason:
              "한국 이름의 지혜롭고 밝은 의미를 영어권에서 전문적이고 부드럽게 전달할 수 있고, 비즈니스/학교/공개 프로필에서 설명 부담이 낮습니다.",
            matching_rate: 89,
            region_fit: "영어권과 유럽권에서 모두 안정적인 후보",
            pronunciation: "JOO-lee-un",
            meaning_connection:
              "지혜롭고 밝은 이미지를 부드럽고 전문적인 인상으로 연결합니다.",
            professional_impression:
              "비즈니스, 크리에이티브, 교육 분야 모두에서 과하지 않고 신뢰감 있는 이름입니다.",
            local_cautions:
              "한국 이름의 첫소리와 완전히 일치하지 않으므로 소개 문구에서 원래 이름의 의미를 함께 설명하면 좋습니다.",
            suitability_score: 89,
          },
          {
            name: "Elian",
            recommendation_reason:
              "발음, 고급스러운 인상, 여러 언어권 사용성, 이름의 빛/지혜 이미지가 가장 균형 있게 맞아 높은 매칭률 후보로 제시했습니다.",
            matching_rate: 94,
            region_fit: "영어권, 프랑스어권, 스페인어권에서 세련된 인상",
            pronunciation: "EL-ee-an",
            meaning_connection:
              "밝음과 따뜻함, 성장의 이미지를 자연스럽게 담습니다.",
            professional_impression:
              "국제적이고 고급스러우며 장기 사용성이 좋습니다.",
            local_cautions:
              "일부 지역에서는 낯설 수 있어 첫 소개에서 발음 표기를 함께 쓰는 것이 좋습니다.",
            suitability_score: 94,
          },
        ],
        rejected_options: [
          {
            name: "Blaze",
            reason:
              "강렬한 이미지는 있으나 비즈니스 문서와 장기 사용성에서는 과하게 느껴질 수 있습니다.",
          },
        ],
        add_on_recommendations: ["premiumPdf", "calligraphy"],
      };
    case "GLOBAL_TO_KOREAN":
      return {
        analysis_summary:
          "외국인 사용자의 목적은 한글 이름을 갖는 것이므로 결과의 중심은 한글 이름입니다. 한자 풀이는 기본 결과가 아니라 프리미엄 확장 리포트에서 제공합니다. 후보는 매칭률이 높은 순서부터 표시합니다.",
        candidates: [
          {
            hangul: "강브룩",
            recommendation_reason:
              "원래 이름의 소리를 직접 살리지만 한국 이름으로는 다소 번역투가 강해 상대적으로 매칭률이 낮은 대안 후보입니다.",
            matching_rate: 52,
            pronunciation: "Kang Beu-ruk",
            meaning:
              "원래 이름의 소리를 최대한 보존하는 방식입니다.",
            cultural_fit:
              "한국인이 듣기에는 외래어 별칭에 가까워 자연스러운 본명 느낌은 약합니다.",
            usage_note:
              "가벼운 커뮤니티 닉네임에는 가능하지만 공식 한국 이름으로는 권하지 않습니다.",
            hanja_addon_note:
              "한자 의미 매칭은 기본 결과에서 제외되며 프리미엄 PDF에서 별도 제안합니다.",
            suitability_score: 52,
          },
          {
            hangul: "한리온",
            recommendation_reason:
              "외국 이름의 리듬을 살리면서도 한국식 성과 이름 구조에 맞췄지만, 실제 한국 이름 빈도는 중간 이하입니다.",
            matching_rate: 66,
            pronunciation: "Han Ri-on",
            meaning:
              "부드럽고 현대적인 느낌의 한국식 이름입니다.",
            cultural_fit:
              "창작자나 공개 프로필에는 어울리지만 일상 이름으로는 조금 독특합니다.",
            usage_note:
              "개성 있는 한국 이름을 원하는 경우 선택할 수 있습니다.",
            hanja_addon_note:
              "한자는 선택형 부가 서비스에서 의미와 등록 가능성을 따로 검토합니다.",
            suitability_score: 66,
          },
          {
            hangul: "서이안",
            recommendation_reason:
              "영어권 이름의 부드러운 모음감을 한국식 이름으로 옮기면서 발음 설명이 쉬워 중간 매칭률 후보로 제시했습니다.",
            matching_rate: 76,
            pronunciation: "Seo I-an",
            meaning:
              "차분하고 현대적인 인상을 주는 이름입니다.",
            cultural_fit:
              "한국식 이름으로 자연스럽고 외국인도 발음하기 쉽습니다.",
            usage_note:
              "학교, 커뮤니티, 소셜 프로필에서 쓰기 좋습니다.",
            hanja_addon_note:
              "프리미엄 PDF를 선택하면 이안에 어울리는 한자 의미 후보를 별도로 제공합니다.",
            suitability_score: 76,
          },
          {
            hangul: "서하준",
            recommendation_reason:
              "부드럽고 현대적인 한국 이름 인상이 강하며, 선택한 성씨가 없을 때도 발음과 의미 설명이 쉬워 높은 매칭률 후보로 추천했습니다.",
            matching_rate: 87,
            pronunciation: "Seo Ha-joon",
            meaning: "넓게 흐르되 기준을 지키는 사람이라는 인상을 줍니다.",
            cultural_fit:
              "한국식 이름의 친숙함이 강하고 부드러운 이미지를 줍니다.",
            usage_note:
              "성씨를 추천받는 옵션을 선택한 경우 자연스러운 전체 이름 후보로 제안합니다.",
            hanja_addon_note:
              "한자 표기는 외국인 기본 화면에서 숨기고, 리포트 구매 시 확장 설명으로 제공합니다.",
            suitability_score: 87,
          },
          {
            hangul: "이도윤",
            recommendation_reason:
              "원래 이름의 리듬을 한국식 세 음절 이름으로 자연스럽게 정리하면서, 한국 생활/업무 맥락에서 발음과 설명이 모두 쉬워 가장 높은 매칭률 후보입니다.",
            matching_rate: 94,
            pronunciation: "Lee Do-yoon",
            meaning:
              "자기 길을 바르게 걷고 주변을 윤택하게 하는 사람이라는 뜻을 담습니다.",
            cultural_fit:
              "현대 한국 이름으로 자연스럽고, 외국인 사용자에게도 발음 설명이 비교적 쉽습니다.",
            usage_note:
              "회사, 학교, 커뮤니티 프로필에서 모두 무난하게 사용할 수 있습니다.",
            hanja_addon_note:
              "한자 의미와 등록 가능성 검토는 프리미엄 PDF 부가 서비스에서 제공합니다.",
            suitability_score: 94,
          },
        ],
        rejected_options: [
          {
            hangul: "강브룩",
            reason:
              "원래 이름을 소리대로 옮긴 느낌이 강해 한국 이름으로 장기 사용하기에는 자연스러움이 떨어집니다.",
          },
        ],
        add_on_recommendations: ["premiumPdf", "stamp", "adUnlock"],
      };
  }
}
