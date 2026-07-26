// 출생지 목록. 사주는 출생지의 진태양시로 시주를 정하므로 경도와 표준시간대가 함께 필요하다.
//
// 라벨을 사전(i18n.ts)이 아니라 데이터에 두는 이유: 도시 이름은 UI 문구가 아니라 데이터고,
// 화면을 고쳐도 바뀌지 않는다. 지금은 ko·en만 두고, 나머지 로케일은 사전을 채울 때 함께
// 넣는다(그때 이 타입에 필드를 추가하면 화면 코드는 그대로 둬도 된다).
//
// 목록은 서비스가 지원하는 23개 로케일의 주요 국가를 덮도록 골랐다. 같은 나라에서도 경도가
// 크게 벌어지면(미국·러시아·인도네시아 등) 도시를 나눠 두었다 — 경도 15°는 시주 한 칸이다.

export type BirthplaceOption = {
  code: string;
  timeZone: string;
  longitude: number;
  ko: string;
  en: string;
};

export const BIRTHPLACES: BirthplaceOption[] = [
  // 한국
  { code: "KR_SEOUL", timeZone: "Asia/Seoul", longitude: 126.978, ko: "서울", en: "Seoul" },
  { code: "KR_BUSAN", timeZone: "Asia/Seoul", longitude: 129.075, ko: "부산", en: "Busan" },
  { code: "KR_DAEGU", timeZone: "Asia/Seoul", longitude: 128.601, ko: "대구", en: "Daegu" },
  { code: "KR_GWANGJU", timeZone: "Asia/Seoul", longitude: 126.852, ko: "광주", en: "Gwangju" },
  { code: "KR_DAEJEON", timeZone: "Asia/Seoul", longitude: 127.385, ko: "대전", en: "Daejeon" },
  { code: "KR_JEJU", timeZone: "Asia/Seoul", longitude: 126.531, ko: "제주", en: "Jeju" },

  // 동아시아
  { code: "JP_TOKYO", timeZone: "Asia/Tokyo", longitude: 139.692, ko: "도쿄", en: "Tokyo" },
  { code: "JP_OSAKA", timeZone: "Asia/Tokyo", longitude: 135.502, ko: "오사카", en: "Osaka" },
  { code: "CN_BEIJING", timeZone: "Asia/Shanghai", longitude: 116.407, ko: "베이징", en: "Beijing" },
  { code: "CN_SHANGHAI", timeZone: "Asia/Shanghai", longitude: 121.474, ko: "상하이", en: "Shanghai" },
  { code: "CN_URUMQI", timeZone: "Asia/Shanghai", longitude: 87.617, ko: "우루무치", en: "Ürümqi" },
  { code: "TW_TAIPEI", timeZone: "Asia/Taipei", longitude: 121.565, ko: "타이베이", en: "Taipei" },
  { code: "HK", timeZone: "Asia/Hong_Kong", longitude: 114.169, ko: "홍콩", en: "Hong Kong" },
  { code: "MN_ULAANBAATAR", timeZone: "Asia/Ulaanbaatar", longitude: 106.917, ko: "울란바토르", en: "Ulaanbaatar" },

  // 동남아시아
  { code: "VN_HANOI", timeZone: "Asia/Ho_Chi_Minh", longitude: 105.834, ko: "하노이", en: "Hanoi" },
  { code: "VN_HCMC", timeZone: "Asia/Ho_Chi_Minh", longitude: 106.66, ko: "호찌민", en: "Ho Chi Minh City" },
  { code: "TH_BANGKOK", timeZone: "Asia/Bangkok", longitude: 100.502, ko: "방콕", en: "Bangkok" },
  { code: "KH_PHNOMPENH", timeZone: "Asia/Phnom_Penh", longitude: 104.892, ko: "프놈펜", en: "Phnom Penh" },
  { code: "ID_JAKARTA", timeZone: "Asia/Jakarta", longitude: 106.845, ko: "자카르타", en: "Jakarta" },
  { code: "ID_MAKASSAR", timeZone: "Asia/Makassar", longitude: 119.432, ko: "마카사르", en: "Makassar" },
  { code: "MY_KUALALUMPUR", timeZone: "Asia/Kuala_Lumpur", longitude: 101.687, ko: "쿠알라룸푸르", en: "Kuala Lumpur" },
  { code: "PH_MANILA", timeZone: "Asia/Manila", longitude: 120.984, ko: "마닐라", en: "Manila" },
  { code: "SG", timeZone: "Asia/Singapore", longitude: 103.82, ko: "싱가포르", en: "Singapore" },

  // 남아시아 · 중앙아시아
  { code: "IN_DELHI", timeZone: "Asia/Kolkata", longitude: 77.209, ko: "델리", en: "Delhi" },
  { code: "IN_MUMBAI", timeZone: "Asia/Kolkata", longitude: 72.878, ko: "뭄바이", en: "Mumbai" },
  { code: "UZ_TASHKENT", timeZone: "Asia/Tashkent", longitude: 69.24, ko: "타슈켄트", en: "Tashkent" },
  { code: "KZ_ALMATY", timeZone: "Asia/Almaty", longitude: 76.887, ko: "알마티", en: "Almaty" },

  // 중동
  { code: "AE_DUBAI", timeZone: "Asia/Dubai", longitude: 55.271, ko: "두바이", en: "Dubai" },
  { code: "SA_RIYADH", timeZone: "Asia/Riyadh", longitude: 46.675, ko: "리야드", en: "Riyadh" },
  { code: "EG_CAIRO", timeZone: "Africa/Cairo", longitude: 31.234, ko: "카이로", en: "Cairo" },
  { code: "TR_ISTANBUL", timeZone: "Europe/Istanbul", longitude: 28.979, ko: "이스탄불", en: "Istanbul" },

  // 유럽
  { code: "RU_MOSCOW", timeZone: "Europe/Moscow", longitude: 37.618, ko: "모스크바", en: "Moscow" },
  { code: "PL_WARSAW", timeZone: "Europe/Warsaw", longitude: 21.012, ko: "바르샤바", en: "Warsaw" },
  { code: "DE_BERLIN", timeZone: "Europe/Berlin", longitude: 13.405, ko: "베를린", en: "Berlin" },
  { code: "AT_VIENNA", timeZone: "Europe/Vienna", longitude: 16.373, ko: "빈", en: "Vienna" },
  { code: "IT_ROME", timeZone: "Europe/Rome", longitude: 12.496, ko: "로마", en: "Rome" },
  { code: "FR_PARIS", timeZone: "Europe/Paris", longitude: 2.352, ko: "파리", en: "Paris" },
  { code: "ES_MADRID", timeZone: "Europe/Madrid", longitude: -3.703, ko: "마드리드", en: "Madrid" },
  { code: "PT_LISBON", timeZone: "Europe/Lisbon", longitude: -9.139, ko: "리스본", en: "Lisbon" },
  { code: "GB_LONDON", timeZone: "Europe/London", longitude: -0.128, ko: "런던", en: "London" },

  // 아메리카
  { code: "US_NEWYORK", timeZone: "America/New_York", longitude: -74.006, ko: "뉴욕", en: "New York" },
  { code: "US_CHICAGO", timeZone: "America/Chicago", longitude: -87.63, ko: "시카고", en: "Chicago" },
  { code: "US_DENVER", timeZone: "America/Denver", longitude: -104.99, ko: "덴버", en: "Denver" },
  { code: "US_LOSANGELES", timeZone: "America/Los_Angeles", longitude: -118.244, ko: "로스앤젤레스", en: "Los Angeles" },
  { code: "US_HONOLULU", timeZone: "Pacific/Honolulu", longitude: -157.858, ko: "호놀룰루", en: "Honolulu" },
  { code: "CA_TORONTO", timeZone: "America/Toronto", longitude: -79.383, ko: "토론토", en: "Toronto" },
  { code: "CA_VANCOUVER", timeZone: "America/Vancouver", longitude: -123.121, ko: "밴쿠버", en: "Vancouver" },
  { code: "MX_MEXICOCITY", timeZone: "America/Mexico_City", longitude: -99.133, ko: "멕시코시티", en: "Mexico City" },
  { code: "BR_SAOPAULO", timeZone: "America/Sao_Paulo", longitude: -46.633, ko: "상파울루", en: "São Paulo" },
  { code: "AR_BUENOSAIRES", timeZone: "America/Argentina/Buenos_Aires", longitude: -58.382, ko: "부에노스아이레스", en: "Buenos Aires" },
  { code: "CL_SANTIAGO", timeZone: "America/Santiago", longitude: -70.669, ko: "산티아고", en: "Santiago" },
  { code: "PE_LIMA", timeZone: "America/Lima", longitude: -77.043, ko: "리마", en: "Lima" },
  { code: "CO_BOGOTA", timeZone: "America/Bogota", longitude: -74.073, ko: "보고타", en: "Bogotá" },

  // 오세아니아
  { code: "AU_SYDNEY", timeZone: "Australia/Sydney", longitude: 151.209, ko: "시드니", en: "Sydney" },
  { code: "AU_PERTH", timeZone: "Australia/Perth", longitude: 115.857, ko: "퍼스", en: "Perth" },
  { code: "NZ_AUCKLAND", timeZone: "Pacific/Auckland", longitude: 174.764, ko: "오클랜드", en: "Auckland" },
];

export const DEFAULT_BIRTHPLACE_CODE = "KR_SEOUL";

const byCode = new Map(BIRTHPLACES.map((place) => [place.code, place]));

export function findBirthplace(code: string) {
  return byCode.get(code) ?? null;
}

/** 로케일에 맞는 표시 이름. ko·en 외에는 영어를 쓴다(사전과 같은 폴백 규칙). */
export function birthplaceLabel(place: BirthplaceOption, locale: string) {
  return locale === "ko" ? place.ko : place.en;
}
