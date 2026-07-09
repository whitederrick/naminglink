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
          "한국 이름의 의미 연결성과 목표 지역의 자연스러움을 함께 고려하면, 지나치게 번역투인 이름보다 현지에서 익숙하면서도 원래 이름의 정체성을 설명할 수 있는 후보가 적합합니다.",
        candidates: [
          {
            name: "Julian",
            region_fit: "북미권/유럽권 모두 안정적",
            pronunciation: "JOO-lee-un",
            meaning_connection:
              "지혜롭고 빛나는 이미지를 부드럽고 지적인 인상으로 연결합니다.",
            professional_impression:
              "비즈니스와 크리에이티브 분야 모두에서 고급스럽고 과하지 않은 인상을 줍니다.",
            local_cautions:
              "한국 이름의 첫소리와 완전히 일치하지는 않으므로 소개 문구에서 의미 연결을 함께 쓰는 편이 좋습니다.",
            suitability_score: 91,
          },
          {
            name: "Lucas",
            region_fit: "북미권에서 친근하고 발음이 쉬움",
            pronunciation: "LOO-kus",
            meaning_connection:
              "밝음과 명료함의 이미지를 살리기 좋습니다.",
            professional_impression:
              "기술, 교육, 스타트업 환경에서 신뢰감과 접근성을 줍니다.",
            local_cautions:
              "대중적인 이름이므로 독창성보다 안정성을 원하는 경우에 적합합니다.",
            suitability_score: 88,
          },
        ],
        rejected_options: [
          {
            name: "Blaze",
            reason:
              "강한 이미지는 있으나 비즈니스 문서와 장기 사용성에서는 부담이 커질 수 있습니다.",
          },
        ],
        add_on_recommendations: ["premiumPdf", "calligraphy"],
      };
    case "GLOBAL_TO_KOREAN":
      return {
        analysis_summary:
          "원래 이름의 리듬과 출신 국가의 발음 습관을 고려하면, 한국인이 자연스럽게 부르기 쉬우면서도 한자 의미를 설명할 수 있는 이름이 적합합니다.",
        candidates: [
          {
            hangul: "이도윤",
            hanja: "李道潤",
            pronunciation: "Lee Do-yoon",
            meaning:
              "자신의 길을 바르게 걷고 주변을 윤택하게 하는 사람",
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
            meaning: "넓은 흐름과 바른 기준을 가진 사람",
            cultural_fit:
              "한국식 이름의 친숙함이 강하고 부드러운 이미지를 줍니다.",
            usage_note:
              "성씨를 추천받는 옵션을 선택한 경우 자연스러운 전체 이름으로 제안됩니다.",
            suitability_score: 87,
          },
        ],
        rejected_options: [
          {
            hangul: "강브룩",
            reason:
              "원래 이름을 음차한 느낌이 강해 한국 이름으로 장기 사용하기에는 자연스러움이 떨어집니다.",
          },
        ],
        add_on_recommendations: ["premiumPdf", "stamp", "adUnlock"],
      };
  }
}
