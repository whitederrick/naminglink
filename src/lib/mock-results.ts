import type { ServiceType } from "@/lib/services";

export function getMockResult(serviceType: ServiceType) {
  switch (serviceType) {
    case "HANJA_MEANING_MATCH":
      return {
        analysis_summary:
          "한글 이름의 부드러운 발음과 부모가 입력한 가치관을 기준으로, 밝고 안정적인 뜻을 가진 인명용 한자 후보를 우선 제안합니다. 최종 사용 전에는 공식 인명용 한자 조회가 필요합니다.",
        candidates: [
          {
            hangul: "서윤",
            hanja: "瑞潤",
            meaning: "상서로운 기운으로 주변을 부드럽게 윤택하게 하는 사람",
            story:
              "瑞는 좋은 징조와 축복의 이미지를, 潤은 마르지 않는 온기와 배려의 이미지를 줍니다. 두 글자는 아이가 자신의 속도로 성장하면서도 주변에 안정감을 주는 이름 스토리로 확장하기 좋습니다.",
            saju_note:
              "생시가 명확하지 않을 때는 오행 균형을 단정하지 않고, 물의 부드러움과 토대의 안정감을 보완하는 방향으로 해석합니다.",
            suitability_score: 92,
            caution_notes:
              "획수와 세부 사주 균형은 가족이 쓰는 성씨와 함께 한 번 더 검토하는 것이 좋습니다.",
          },
          {
            hangul: "서윤",
            hanja: "書潤",
            meaning: "배움으로 마음을 윤택하게 하는 사람",
            story:
              "書는 배움과 기록의 이미지를 주어 지적인 인상을 강화합니다. 부드러운 이름을 원하면서도 차분하고 학구적인 느낌을 원할 때 적합합니다.",
            saju_note:
              "목·수의 이미지를 강조하는 해석으로, 지나치게 강한 기운보다 성장과 순환의 이미지를 살립니다.",
            suitability_score: 86,
            caution_notes:
              "書는 의미가 명확한 대신 다소 학구적 이미지가 강해질 수 있습니다.",
          },
        ],
        rejected_hanja: [
          {
            character: "災",
            reason:
              "재앙의 의미가 직접적이어서 이름의 축복성, 사회적 인상, 설명 가능성 측면에서 배제합니다.",
            severity: "high",
          },
          {
            character: "尹",
            reason:
              "소리는 맞을 수 있으나 단독 의미 설계가 약하고 성씨/이름 조합에 따라 의도가 흐려질 수 있어 후순위로 둡니다.",
            severity: "medium",
          },
        ],
        official_verification_note:
          "법적 이름 등록 전 대한민국 전자가족관계등록시스템 또는 관할 기관의 최신 인명용 한자 기준을 확인해야 합니다.",
        add_on_recommendations: ["premiumPdf", "calligraphy", "stamp"],
      };
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
