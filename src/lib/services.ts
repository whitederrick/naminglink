export type ServiceType =
  | "BABY_HANJA"
  | "KOREAN_FOR_FOREIGNER"
  | "FOREIGN_FOR_KOREAN";

export type FieldConfig = {
  name: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
  required?: boolean;
};

export type ServiceConfig = {
  slug: string;
  serviceType: ServiceType;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  icon: "baby" | "korean" | "foreign";
  fields: FieldConfig[];
};

export const services = {
  babyHanja: {
    slug: "baby-hanja",
    serviceType: "BABY_HANJA",
    title: "신생아 한자 뜻풀이",
    shortTitle: "신생아",
    eyebrow: "부모를 위한 이름 스토리",
    description:
      "아이의 한글 이름과 한자, 부모의 소망을 바탕으로 의미 있는 작명 스토리를 생성합니다.",
    icon: "baby",
    fields: [
      {
        name: "childName",
        label: "아이 이름",
        placeholder: "예: 서윤",
        required: true,
      },
      {
        name: "hanjaName",
        label: "한자",
        placeholder: "예: 瑞潤",
        required: true,
      },
      {
        name: "parentWishes",
        label: "담고 싶은 가치",
        placeholder: "예: 따뜻함, 지혜, 자기 길을 잃지 않는 사람",
        multiline: true,
        required: true,
      },
      {
        name: "birthContext",
        label: "참고 정보",
        placeholder: "예: 봄에 태어난 첫째 아이",
      },
    ],
  },
  koreanName: {
    slug: "korean-name",
    serviceType: "KOREAN_FOR_FOREIGNER",
    title: "외국인용 한국 이름 생성",
    shortTitle: "한국 이름",
    eyebrow: "글로벌 사용자를 위한 한국 이름",
    description:
      "원래 이름, 국가, 직업, 성격을 반영해 자연스러운 한국 이름과 한자 의미를 제안합니다.",
    icon: "korean",
    fields: [
      {
        name: "originalName",
        label: "원래 이름",
        placeholder: "예: Daniel Brooks",
        required: true,
      },
      {
        name: "country",
        label: "국가",
        placeholder: "예: United States",
        required: true,
      },
      {
        name: "occupation",
        label: "직업",
        placeholder: "예: Product designer",
        required: true,
      },
      {
        name: "traits",
        label: "성격과 분위기",
        placeholder: "예: thoughtful, calm, precise, warm",
        multiline: true,
        required: true,
      },
    ],
  },
  foreignName: {
    slug: "foreign-name",
    serviceType: "FOREIGN_FOR_KOREAN",
    title: "한국인용 외국 이름 생성",
    shortTitle: "글로벌 이름",
    eyebrow: "해외 활동을 위한 이름",
    description:
      "한국 이름의 뜻과 정체성을 유지하면서 지역권에 어울리는 외국어 이름을 제안합니다.",
    icon: "foreign",
    fields: [
      {
        name: "koreanName",
        label: "한국 이름",
        placeholder: "예: 김지훈",
        required: true,
      },
      {
        name: "hanjaMeaning",
        label: "이름의 뜻",
        placeholder: "예: 지혜 지, 빛날 훈",
        required: true,
      },
      {
        name: "targetRegion",
        label: "선호 지역",
        placeholder: "예: 미국, 영국, 프랑스",
        required: true,
      },
      {
        name: "vibe",
        label: "원하는 뉘앙스",
        placeholder: "예: 신뢰감, 세련됨, 발음 쉬움",
        multiline: true,
        required: true,
      },
    ],
  },
} satisfies Record<string, ServiceConfig>;

export const serviceList = Object.values(services);
