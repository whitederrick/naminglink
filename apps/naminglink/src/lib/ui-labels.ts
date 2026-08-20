import type { LocaleCode } from "@/lib/locale-codes";

/**
 * **화면 여기저기에 흩어져 있던 두 갈래 문구를 모은 표** (2026-08-20, 구현 명세 §9).
 *
 * 여기 오기 전에는 이런 꼴이었다 — 컴포넌트 일곱 자리.
 *
 *     {locale === "ko" ? "이용 안내" : "How it works"}
 *
 * 갈래가 둘뿐이라 **`ko`가 아닌 22개 언어가 전부 영어를 봤다.** 바닥글은 모든 화면에 있으므로
 * 로케일당 한 번이 아니라 **모든 페이지에서** 그랬다. 셈에서 빠진 문자열이 아니라 미번역이다.
 *
 * ## 값의 출처
 *
 * `about`·`contact`·`notice`는 **이미 23개 언어로 번역돼 있던 값**을 옮겨 왔다
 * (`doc-content`의 각 문서 `eyebrow`). 지어낸 것이 아니다.
 *
 * 나머지 셋(`guideLink`·`customerService`·`stampText`)은 옮겨 올 원문이 없어 **한국어 밖은
 * 아직 영어**다. 그 상태를 숨기지 않고 `scripts/verify-two-branch-copy.ts`가 선언 목록과
 * 대조해 센다 — 선언 없이 영어와 같은 값이 새로 생기면 실패한다. 이 셋은 `en` 검수
 * packet(단계 5)에 그대로 올라간다.
 *
 * ## 왜 `doc-content`를 직접 부르지 않는가
 *
 * `SiteFooter`·`HangulStampCard`는 `"use client"`다. `doc-content/index.ts`는 23개 로케일
 * 파일을 전부 불러오므로(약 800KB), 클라이언트에서 부르면 그만큼이 번들에 실린다. 짧은 표를
 * 따로 두는 편이 싸다.
 */
export type UiLabels = {
  /** 이용 안내 허브로 가는 링크. */
  guideLink: string;
  about: string;
  contact: string;
  notice: string;
  customerService: string;
  /** 도장에 새길 문구 라벨. */
  stampText: string;
};

/** **`Record<LocaleCode, …>`로 둔다.** 로케일이 하나 빠지면 그 언어만 조용히 영어를 보게 된다. */
export const uiLabels: Record<LocaleCode, UiLabels> = {
  ko: {
    guideLink: "이용 안내",
    about: "소개",
    contact: "문의",
    notice: "공지",
    customerService: "고객센터",
    stampText: "도장 문구",
  },
  en: {
    guideLink: "How it works",
    about: "About",
    contact: "Contact",
    notice: "Notices",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  ja: {
    guideLink: "How it works",
    about: "概要",
    contact: "お問い合わせ",
    notice: "お知らせ",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  zh: {
    guideLink: "How it works",
    about: "关于",
    contact: "联系",
    notice: "通知",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  de: {
    guideLink: "How it works",
    about: "Über",
    contact: "Kontakt",
    notice: "Hinweise",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  es: {
    guideLink: "How it works",
    about: "Acerca de",
    contact: "Contacto",
    notice: "Avisos",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  fr: {
    guideLink: "How it works",
    about: "À propos",
    contact: "Contact",
    notice: "Avis",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  it: {
    guideLink: "How it works",
    about: "Informazioni",
    contact: "Contatto",
    notice: "Avvisi",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  pt: {
    guideLink: "How it works",
    about: "Sobre",
    contact: "Contato",
    notice: "Avisos",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  vi: {
    guideLink: "How it works",
    about: "Giới thiệu",
    contact: "Liên hệ",
    notice: "Thông báo",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  th: {
    guideLink: "How it works",
    about: "เกี่ยวกับ",
    contact: "ติดต่อ",
    notice: "ประกาศ",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  id: {
    guideLink: "How it works",
    about: "Tentang",
    contact: "Kontak",
    notice: "Pemberitahuan",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  ru: {
    guideLink: "How it works",
    about: "О нас",
    contact: "Контакт",
    notice: "Уведомления",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  ar: {
    guideLink: "How it works",
    about: "حول",
    contact: "اتصل",
    notice: "إشعارات",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  fil: {
    guideLink: "How it works",
    about: "Tungkol sa",
    contact: "Makipag-ugnayan",
    notice: "Mga Anunsyo",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  uz: {
    guideLink: "How it works",
    about: "Haqqida",
    contact: "Aloqa",
    notice: "E'lonlar",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  mn: {
    guideLink: "How it works",
    about: "Тухай",
    contact: "Холбоо барих",
    notice: "Мэдэгдлүүд",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  hi: {
    guideLink: "How it works",
    about: "के बारे में",
    contact: "संपर्क",
    notice: "सूचनाएँ",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  tr: {
    guideLink: "How it works",
    about: "Hakkında",
    contact: "İletişim",
    notice: "Duyurular",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  km: {
    guideLink: "How it works",
    about: "អំពី",
    contact: "ទំនាក់ទំនង",
    notice: "ការជូនដំណឹង",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  ms: {
    guideLink: "How it works",
    about: "Tentang",
    contact: "Hubungi",
    notice: "Notis",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  kk: {
    guideLink: "How it works",
    about: "Туралы",
    contact: "Байланыс",
    notice: "Хабарламалар",
    customerService: "Customer service",
    stampText: "Stamp",
  },
  pl: {
    guideLink: "How it works",
    about: "O nas",
    contact: "Kontakt",
    notice: "Ogłoszenia",
    customerService: "Customer service",
    stampText: "Stamp",
  },
};

/**
 * 안전한 접근. 컴포넌트의 `locale`은 `Locale`(문자열)이라 로케일 코드가 아닐 수 있다 —
 * 그때는 영어로 떨어뜨린다. **`Record`를 직접 색인하지 말 것**: 없는 키면 `undefined`가 되어
 * 화면에 빈 라벨이 나간다.
 */
export function getUiLabels(locale: string): UiLabels {
  return (uiLabels as Record<string, UiLabels>)[locale] ?? uiLabels.en;
}
