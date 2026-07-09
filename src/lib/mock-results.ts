import type { ServiceType } from "@/lib/services";
import { buildHanjaMeaningResult } from "@/lib/hanja";

export function getMockResult(
  serviceType: ServiceType,
  inputFactors: Record<string, unknown> = {},
) {
  switch (serviceType) {
    case "HANJA_MEANING_MATCH":
      return buildHanjaMeaningResult(inputFactors);
    case "KOREAN_TO_GLOBAL":
      return {
        analysis_summary:
          "한글 이름의 소리와 의미, 목표 지역의 발음 습관, 직업적 인상을 함께 고려하면 단순 번역보다 실제로 소개하기 쉬운 이름이 적합합니다.",
        candidates: [
          {
            name: "Julian",
            region_fit: "영어권과 유럽권에서 모두 안정적인 후보",
            pronunciation: "JOO-lee-un",
            meaning_connection:
              "지혜롭고 밝은 이미지를 부드럽고 전문적인 인상으로 연결합니다.",
            professional_impression:
              "비즈니스, 크리에이티브, 교육 분야 모두에서 과하지 않고 신뢰감 있는 이름입니다.",
            local_cautions:
              "한국 이름의 첫소리와 완전히 일치하지 않으므로 소개 문구에서 원래 이름의 의미를 함께 설명하면 좋습니다.",
            suitability_score: 91,
          },
          {
            name: "Luca",
            region_fit: "영어권, 독일어권, 스페인어권에서 발음 부담이 낮음",
            pronunciation: "LOO-ka",
            meaning_connection:
              "빛, 명료함, 따뜻함의 이미지를 여러 언어권에서 자연스럽게 전달합니다.",
            professional_impression:
              "친근하지만 너무 가볍지 않아 학교, 업무, 창작자 프로필에 모두 사용할 수 있습니다.",
            local_cautions:
              "일부 지역에서는 남성 이미지가 강할 수 있어 성별/브랜드 톤에 따라 보조 후보를 함께 검토하세요.",
            suitability_score: 88,
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
          "원래 이름의 리듬과 출신 국가의 발음 습관을 고려하면 한국인이 자연스럽게 부르기 쉬우면서도 한자 의미를 설명할 수 있는 이름이 적합합니다.",
        candidates: [
          {
            hangul: "이도윤",
            hanja: "李道潤",
            pronunciation: "Lee Do-yoon",
            meaning:
              "자기 길을 바르게 걷고 주변을 윤택하게 하는 사람이라는 뜻을 담습니다.",
            cultural_fit:
              "현대 한국 이름으로 자연스럽고, 외국인 사용자에게도 발음 설명이 비교적 쉽습니다.",
            usage_note:
              "회사, 학교, 커뮤니티 프로필에서 모두 무난하게 사용할 수 있습니다.",
            suitability_score: 93,
          },
          {
            hangul: "서하준",
            hanja: "徐河準",
            pronunciation: "Seo Ha-joon",
            meaning: "넓게 흐르되 기준을 지키는 사람이라는 인상을 줍니다.",
            cultural_fit:
              "한국식 이름의 친숙함이 강하고 부드러운 이미지를 줍니다.",
            usage_note:
              "성씨를 추천받는 옵션을 선택한 경우 자연스러운 전체 이름 후보로 제안합니다.",
            suitability_score: 87,
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
