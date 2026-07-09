import type { ServiceType } from "@/lib/services";

export function getMockResult(serviceType: ServiceType) {
  switch (serviceType) {
    case "BABY_HANJA":
      return {
        summary: "이 이름은 맑은 기운과 단단한 성장을 함께 품고 있습니다.",
        detailed_story:
          "입력된 한자는 아이가 자신만의 속도로 세상을 이해하고, 주변 사람에게 따뜻한 영향을 남기는 사람으로 자라기를 바라는 마음과 잘 맞닿아 있습니다. 부드럽지만 흐트러지지 않는 균형감이 이름의 중심에 있습니다.",
        lucky_elements: ["청록색", "올리브 나무", "맑은 물"],
      };
    case "KOREAN_FOR_FOREIGNER":
      return {
        names: [
          {
            hangul: "이도윤",
            pronunciation: "Lee Do-yoon",
            hanja: "道潤",
            meaning:
              "A person whose path brings calm generosity and thoughtful influence.",
            story:
              "The name keeps a gentle international sound while giving the person a Korean identity that feels balanced, warm, and natural.",
          },
          {
            hangul: "서하준",
            pronunciation: "Seo Ha-joon",
            hanja: "河準",
            meaning:
              "A steady person with a broad view and reliable standards.",
            story:
              "This name fits someone who wants a modern Korean name with a calm and trustworthy tone.",
          },
          {
            hangul: "윤태오",
            pronunciation: "Yoon Tae-oh",
            hanja: "泰悟",
            meaning:
              "A peaceful and perceptive person who understands the wider world.",
            story:
              "The sound is easy for Korean speakers while retaining a global rhythm.",
          },
        ],
      };
    case "FOREIGN_FOR_KOREAN":
      return {
        recommendations: [
          {
            name: "Lucas",
            meaning_connection:
              "밝음과 지혜의 이미지를 가진 한국 이름과 잘 연결됩니다.",
            nuance:
              "영어권에서 친근하면서도 전문적인 인상을 주고 발음 부담이 적습니다.",
          },
          {
            name: "Julian",
            meaning_connection:
              "부드러운 지성과 세련된 이미지를 살리기에 좋은 이름입니다.",
            nuance:
              "유럽권과 영어권 모두에서 자연스럽고 차분한 신뢰감을 줍니다.",
          },
          {
            name: "Evan",
            meaning_connection:
              "간결한 소리 안에 단정함과 선명한 정체성을 담을 수 있습니다.",
            nuance:
              "비즈니스 환경에서도 쉽게 기억되고 과하게 튀지 않습니다.",
          },
        ],
      };
  }
}
