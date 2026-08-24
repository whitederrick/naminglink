// 사업자 값 한 칸을 **화면에 쓸 문자열**로 다듬는다. 네 앱이 같은 규칙을 쓴다.
//
// 왜 core 에 있나: 예전에는 이 규칙이 앱마다 따로 있었다. naminglink 는
// `SiteFooter.tsx` 안에, 형제 셋은 각자의 `SiteFooter.tsx` 안에 — 네 벌이었고
// 서로 달랐다(형제 판만 라벨 겹침을 떼어 냈다). 그리고 **`/[locale]/contact` 는
// 어느 앱에서도 이 규칙을 안 거쳐서**, 2026-08-24 에 네 앱의 영어 화면이 전부
// 「곽은하(대표)」·「서울특별시 …」·「통신판매업 신고 준비 중」을 그대로 그리고
// 있었다(운영에서 확인). 판정이 두 곳에 적히면 하나만 고쳐지는 날이 온다.
//
// 다루는 것은 둘이다.
//   ① 「준비 중」류 상태 문구 — 이름이 아니라 문장이라 **로케일별 번역**이 맞다.
//   ② 인명·상호·주소 — 언어마다 새로 음역하면 같은 사람이 언어마다 다른 이름이
//      된다. **로마자 한 벌**을 쓴다(`romanizeCompanyValue`, 여권 표기와 같은 값).
//
// 로케일 문구는 `apps/inyeonlink/src/components/SiteFooter.tsx` 에 있던 것을 옮긴 것이다.

import { romanizeCompanyValue } from "./company";

export type CompanyPendingCopy = {
  pending: string;
  registrationPending: string;
  mailOrderPending: string;
};

/**
 * DB(`site_contents`)가 한국어 단일본이라, 「준비 중」류는 여기서 로케일 문구로 바꾼다.
 * 표에 없는 로케일은 `en` 으로 떨어진다 — **조용히 한국어를 내보내지 않는다.**
 */
export const COMPANY_PENDING_COPIES: Record<string, CompanyPendingCopy> = {
  ko: { pending: "확인 예정", registrationPending: "준비 중", mailOrderPending: "신고 준비 중" },
  en: { pending: "to be confirmed", registrationPending: "pending", mailOrderPending: "filing pending" },
  ja: { pending: "確認予定", registrationPending: "準備中", mailOrderPending: "申告準備中" },
  zh: { pending: "待确认", registrationPending: "准备中", mailOrderPending: "申报准备中" },
  de: { pending: "in Prüfung", registrationPending: "in Vorbereitung", mailOrderPending: "Meldung in Vorbereitung" },
  es: { pending: "por confirmar", registrationPending: "en preparación", mailOrderPending: "registro en preparación" },
  fr: { pending: "à confirmer", registrationPending: "en préparation", mailOrderPending: "déclaration en préparation" },
  it: { pending: "da confermare", registrationPending: "in preparazione", mailOrderPending: "segnalazione in preparazione" },
  pt: { pending: "a confirmar", registrationPending: "em preparação", mailOrderPending: "declaração em preparação" },
  vi: { pending: "sẽ xác nhận", registrationPending: "đang chuẩn bị", mailOrderPending: "đang chuẩn bị khai báo" },
  th: { pending: "รอยืนยัน", registrationPending: "กำลังเตรียม", mailOrderPending: "กำลังเตรียมแจ้ง" },
  id: { pending: "akan dikonfirmasi", registrationPending: "sedang disiapkan", mailOrderPending: "pelaporan disiapkan" },
  ru: { pending: "уточняется", registrationPending: "готовится", mailOrderPending: "подача готовится" },
  ar: { pending: "سيتم التأكيد", registrationPending: "قيد التحضير", mailOrderPending: "قيد الإبلاغ" },
  fil: { pending: "kukumpirmahin", registrationPending: "inihahanda", mailOrderPending: "inihahanda ang filing" },
  uz: { pending: "tasdiqlanadi", registrationPending: "tayyorlanmoqda", mailOrderPending: "ariza tayyorlanmoqda" },
  mn: { pending: "баталгаажина", registrationPending: "бэлтгэж байна", mailOrderPending: "мэдүүлэг бэлтгэж байна" },
  hi: { pending: "पुष्टि बाकी", registrationPending: "तैयारी में", mailOrderPending: "फाइलिंग तैयारी में" },
  tr: { pending: "onay bekliyor", registrationPending: "hazırlanıyor", mailOrderPending: "bildirim hazırlanıyor" },
  km: { pending: "នឹងបញ្ជាក់", registrationPending: "កំពុងរៀបចំ", mailOrderPending: "កំពុងរៀបចំដាក់ស្នើ" },
  ms: { pending: "akan disahkan", registrationPending: "sedang disediakan", mailOrderPending: "pemfailan disediakan" },
  kk: { pending: "нақтыланады", registrationPending: "дайындалуда", mailOrderPending: "өтініш дайындалуда" },
  pl: { pending: "do potwierdzenia", registrationPending: "w przygotowaniu", mailOrderPending: "zgłoszenie w przygotowaniu" },
};

/** 이 표가 문구를 들고 있는 로케일. 검사기가 앱의 지원 로케일과 대조한다. */
export const COMPANY_PENDING_LOCALES = Object.keys(COMPANY_PENDING_COPIES);

/** DB 값이 이 셋 중 하나면 「아직 없음」이라는 뜻이고, 번호가 아니라 문장으로 낸다. */
const PENDING_SENTINELS = {
  "통신판매업 신고 준비 중": "mailOrderPending",
  "사업자등록번호 준비 중": "registrationPending",
  "확인 예정": "pending",
} as const;

/**
 * 사업자 값 한 칸을 화면 문자열로.
 *
 * @param locale 화면 로케일. `ko` 면 라벨 겹침만 떼고 원값을 쓴다.
 * @param label  그 칸의 항목명. DB 값에 항목명이 붙어 있는 경우가 있어 떼어 낸다 —
 *               안 떼면 「통신판매업 통신판매업 신고 준비 중」이 된다.
 * @param value  DB(또는 폴백)에서 온 한국어 원값.
 */
export function localizeCompanyValue(locale: string, label: string, value: string): string {
  const trimmed = value.trim();

  const sentinel = PENDING_SENTINELS[trimmed as keyof typeof PENDING_SENTINELS];
  if (sentinel) {
    const copy = COMPANY_PENDING_COPIES[locale] ?? COMPANY_PENDING_COPIES.en;
    return copy[sentinel];
  }

  // 값이 라벨로 시작하면 그 부분을 뗀다. 떼고 나서 비면 값 자체가 라벨뿐이었다는
  // 뜻이라 원래 값을 그대로 둔다.
  const stripped =
    label && trimmed.startsWith(label) ? trimmed.slice(label.length).trim() || trimmed : trimmed;

  return locale === "ko" ? stripped : romanizeCompanyValue(stripped);
}

/**
 * 사업자 값 여러 칸을 한 번에. `/[locale]/contact` 처럼 **항목명을 문서 쪽이 들고 있어
 * 여기서는 모르는 자리**에서 쓴다 — 라벨을 모르면 겹침을 뗄 수 없으므로 빈 문자열을 준다.
 *
 * 자리마다 손으로 감싸지 않는 이유: 아홉 칸 중 하나만 빠뜨려도 그 칸만 한국어로 나가고,
 * 화면을 열어 보기 전에는 아무도 모른다. 실제로 2026-08-24 이전이 그 상태였다.
 */
export function localizeCompanyValues<T extends Record<string, string>>(
  locale: string,
  values: T,
): T {
  const out = {} as Record<string, string>;
  for (const [key, value] of Object.entries(values)) {
    out[key] = localizeCompanyValue(locale, "", value);
  }
  return out as T;
}
