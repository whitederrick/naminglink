"use client";

import { ReturnLink } from "@/components/ReturnLink";
import { getUiLabels } from "@/lib/ui-labels";
import Link from "next/link";
import { useEffect, useState } from "react";
import { localizeCompanyValue } from "@naminglink/core/company-display";
import { FooterPolicyLinks } from "@/components/FooterPolicyLinks";
import { useServerFooterContent } from "@/components/FooterContentProvider";
import {
  fallbackFooterContent,
  type FooterContent,
} from "@/lib/site-content";
import type { Locale } from "@/lib/services";
import { guideHubHref } from "@/lib/guide-back";
import { getAuthCopy } from "@/lib/i18n-auth";
import { localePath } from "@/lib/locale-path";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { AD_OPENED_LOCALES } from "@/lib/ads";
import { getReportCopy } from "@/lib/report-copy";
import { ReportModal } from "@/components/ReportModal";

type SiteFooterProps = {
  tone?: "light" | "dark";
  className?: string;
  locale?: Locale;
  policyMode?: "links" | "modal";
  /**
   * 이 화면이 어느 서비스인가. 푸터의 이용 안내가 이 값을 함께 보내, 안내에서 돌아올 때
   * 원래 화면으로 돌아간다(`lib/guide-back.ts`). 서비스 화면이 아니면 넘기지 않는다 —
   * 그때는 안내에서 홈으로 나간다.
   *
   * 서비스 화면에 이용 안내 링크가 둘(본문·푸터) 있는데 한쪽만 출처를 실으면, 같은 화면에서
   * 같은 말이 적힌 링크 둘이 서로 다른 곳으로 나가게 된다.
   */
  guideFrom?: string;
};

type FooterCopy = {
  links: {
    terms: string;
    privacy: string;
    refund: string;
    pricing: string;
    login: string;
  };
  labels: {
    legalEntity: string;
    representative: string;
    businessNumber: string;
    address: string;
    email: string;
    privacyOfficer: string;
    mailOrderNumber: string;
    hostingProvider: string;
  };
  values: {
    address: string;
    providedBy: string;
  };
};

export const footerCopies: Record<Locale, FooterCopy> = {
  ko: {
    links: {
      terms: "이용약관",
      privacy: "개인정보처리방침",
      refund: "환불정책",
      pricing: "요금안내",
      login: "로그인",
    },
    labels: {
      legalEntity: "상호",
      representative: "대표자",
      businessNumber: "사업자등록번호",
      address: "주소",
      email: "이메일",
      privacyOfficer: "개인정보 보호책임자",
      mailOrderNumber: "통신판매업",
      hostingProvider: "호스팅 제공",
    },
    values: {
      address: "서울특별시",
      providedBy: "Provided by",
    },
  },
  en: {
    links: {
      terms: "Terms",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      pricing: "Pricing",
      login: "Login",
    },
    labels: {
      legalEntity: "Company",
      representative: "Representative",
      businessNumber: "Business No.",
      address: "Address",
      email: "Email",
      privacyOfficer: "Privacy Officer",
      mailOrderNumber: "E-commerce registration",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Korea",
      providedBy: "Provided by",
    },
  },
  ja: {
    links: {
      terms: "利用規約",
      privacy: "プライバシー",
      refund: "返金ポリシー",
      pricing: "料金",
      login: "ログイン",
    },
    labels: {
      legalEntity: "商号",
      representative: "代表者",
      businessNumber: "事業者番号",
      address: "住所",
      email: "メール",
      privacyOfficer: "個人情報責任者",
      mailOrderNumber: "通信販売業",
      hostingProvider: "ホスティング",
    },
    values: {
      address: "ソウル特別市",
      providedBy: "提供",
    },
  },
  zh: {
    links: {
      terms: "使用条款",
      privacy: "隐私政策",
      refund: "退款政策",
      pricing: "价格",
      login: "登录",
    },
    labels: {
      legalEntity: "商号",
      representative: "代表",
      businessNumber: "营业登记号",
      address: "地址",
      email: "邮箱",
      privacyOfficer: "隐私负责人",
      mailOrderNumber: "网络销售",
      hostingProvider: "托管",
    },
    values: {
      address: "首尔特别市",
      providedBy: "提供",
    },
  },
  de: {
    links: {
      terms: "AGB",
      privacy: "Datenschutz",
      refund: "Erstattung",
      pricing: "Preise",
      login: "Login",
    },
    labels: {
      legalEntity: "Firma",
      representative: "Vertretung",
      businessNumber: "Geschäfts-Nr.",
      address: "Adresse",
      email: "E-Mail",
      privacyOfficer: "Datenschutz",
      mailOrderNumber: "Onlinehandel",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Korea",
      providedBy: "Bereitgestellt von",
    },
  },
  es: {
    links: {
      terms: "Términos",
      privacy: "Privacidad",
      refund: "Reembolsos",
      pricing: "Precios",
      login: "Login",
    },
    labels: {
      legalEntity: "Empresa",
      representative: "Representante",
      businessNumber: "Registro",
      address: "Dirección",
      email: "Email",
      privacyOfficer: "Privacidad",
      mailOrderNumber: "Venta online",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seúl, Corea",
      providedBy: "Proporcionado por",
    },
  },
  fr: {
    links: {
      terms: "Conditions",
      privacy: "Confidentialité",
      refund: "Remboursement",
      pricing: "Tarifs",
      login: "Connexion",
    },
    labels: {
      legalEntity: "Société",
      representative: "Représentant",
      businessNumber: "Registre",
      address: "Adresse",
      email: "Email",
      privacyOfficer: "Données perso.",
      mailOrderNumber: "Vente en ligne",
      hostingProvider: "Hébergement",
    },
    values: {
      address: "Séoul, Corée",
      providedBy: "Fourni par",
    },
  },
  it: {
    links: {
      terms: "Termini",
      privacy: "Privacy",
      refund: "Rimborsi",
      pricing: "Prezzi",
      login: "Login",
    },
    labels: {
      legalEntity: "Società",
      representative: "Rappresentante",
      businessNumber: "Registro",
      address: "Indirizzo",
      email: "Email",
      privacyOfficer: "Responsabile privacy",
      mailOrderNumber: "Vendita online",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Corea",
      providedBy: "Fornito da",
    },
  },
  pt: {
    links: {
      terms: "Termos",
      privacy: "Privacidade",
      refund: "Reembolso",
      pricing: "Preços",
      login: "Login",
    },
    labels: {
      legalEntity: "Empresa",
      representative: "Representante",
      businessNumber: "Registro",
      address: "Endereço",
      email: "Email",
      privacyOfficer: "Privacidade",
      mailOrderNumber: "Comércio online",
      hostingProvider: "Hospedagem",
    },
    values: {
      address: "Seul, Coreia",
      providedBy: "Fornecido por",
    },
  },
  vi: {
    links: {
      terms: "Điều khoản",
      privacy: "Quyền riêng tư",
      refund: "Hoàn tiền",
      pricing: "Bảng giá",
      login: "Đăng nhập",
    },
    labels: {
      legalEntity: "Tên công ty",
      representative: "Đại diện",
      businessNumber: "Đăng ký KD",
      address: "Địa chỉ",
      email: "Email",
      privacyOfficer: "Phụ trách dữ liệu",
      mailOrderNumber: "Bán hàng online",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Hàn Quốc",
      providedBy: "Cung cấp bởi",
    },
  },
  th: {
    links: {
      terms: "ข้อกำหนด",
      privacy: "ความเป็นส่วนตัว",
      refund: "คืนเงิน",
      pricing: "ราคา",
      login: "เข้าสู่ระบบ",
    },
    labels: {
      legalEntity: "ชื่อบริษัท",
      representative: "ผู้แทน",
      businessNumber: "เลขทะเบียน",
      address: "ที่อยู่",
      email: "อีเมล",
      privacyOfficer: "ผู้ดูแลข้อมูล",
      mailOrderNumber: "ขายออนไลน์",
      hostingProvider: "โฮสติ้ง",
    },
    values: {
      address: "โซล เกาหลี",
      providedBy: "ให้บริการโดย",
    },
  },
  id: {
    links: {
      terms: "Ketentuan",
      privacy: "Privasi",
      refund: "Refund",
      pricing: "Harga",
      login: "Login",
    },
    labels: {
      legalEntity: "Perusahaan",
      representative: "Perwakilan",
      businessNumber: "Registrasi",
      address: "Alamat",
      email: "Email",
      privacyOfficer: "Petugas privasi",
      mailOrderNumber: "Perdagangan online",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Korea",
      providedBy: "Disediakan oleh",
    },
  },
  ru: {
    links: {
      terms: "Условия",
      privacy: "Конфиденциальность",
      refund: "Возврат",
      pricing: "Цены",
      login: "Вход",
    },
    labels: {
      legalEntity: "Компания",
      representative: "Представитель",
      businessNumber: "Регистрация",
      address: "Адрес",
      email: "Email",
      privacyOfficer: "Ответственный за данные",
      mailOrderNumber: "Онлайн-торговля",
      hostingProvider: "Хостинг",
    },
    values: {
      address: "Сеул, Корея",
      providedBy: "Предоставлено",
    },
  },
  ar: {
    links: {
      terms: "الشروط",
      privacy: "الخصوصية",
      refund: "الاسترداد",
      pricing: "الأسعار",
      login: "تسجيل الدخول",
    },
    labels: {
      legalEntity: "الشركة",
      representative: "الممثل",
      businessNumber: "رقم التسجيل",
      address: "العنوان",
      email: "البريد",
      privacyOfficer: "مسؤول الخصوصية",
      mailOrderNumber: "التجارة الإلكترونية",
      hostingProvider: "الاستضافة",
    },
    values: {
      address: "سيول، كوريا",
      providedBy: "مقدم من",
    },
  },
  fil: {
    links: {
      terms: "Mga Tuntunin",
      privacy: "Privacy",
      refund: "Refund",
      pricing: "Presyo",
      login: "Login",
    },
    labels: {
      legalEntity: "Kompanya",
      representative: "Kinatawan",
      businessNumber: "Rehistro",
      address: "Address",
      email: "Email",
      privacyOfficer: "Privacy officer",
      mailOrderNumber: "Online commerce",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Korea",
      providedBy: "Provided by",
    },
  },
  uz: {
    links: {
      terms: "Shartlar",
      privacy: "Maxfiylik",
      refund: "Qaytarish",
      pricing: "Narxlar",
      login: "Kirish",
    },
    labels: {
      legalEntity: "Kompaniya",
      representative: "Vakil",
      businessNumber: "Ro'yxat raqami",
      address: "Manzil",
      email: "Email",
      privacyOfficer: "Maxfiylik vakili",
      mailOrderNumber: "Onlayn savdo",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seul, Koreya",
      providedBy: "Taqdim etuvchi",
    },
  },
  mn: {
    links: {
      terms: "Нөхцөл",
      privacy: "Нууцлал",
      refund: "Буцаалт",
      pricing: "Үнэ",
      login: "Нэвтрэх",
    },
    labels: {
      legalEntity: "Компани",
      representative: "Төлөөлөгч",
      businessNumber: "Бүртгэл",
      address: "Хаяг",
      email: "Email",
      privacyOfficer: "Нууцлал хариуцагч",
      mailOrderNumber: "Онлайн худалдаа",
      hostingProvider: "Хостинг",
    },
    values: {
      address: "Сөүл, Солонгос",
      providedBy: "Үйлчилгээ үзүүлэгч",
    },
  },
  hi: {
    links: {
      terms: "शर्तें",
      privacy: "गोपनीयता",
      refund: "रिफंड",
      pricing: "कीमत",
      login: "लॉगिन",
    },
    labels: {
      legalEntity: "कंपनी",
      representative: "प्रतिनिधि",
      businessNumber: "रजिस्ट्रेशन",
      address: "पता",
      email: "ईमेल",
      privacyOfficer: "गोपनीयता अधिकारी",
      mailOrderNumber: "ऑनलाइन व्यापार",
      hostingProvider: "होस्टिंग",
    },
    values: {
      address: "सियोल, कोरिया",
      providedBy: "द्वारा प्रदान",
    },
  },
  tr: {
    links: {
      terms: "Şartlar",
      privacy: "Gizlilik",
      refund: "İade",
      pricing: "Fiyatlar",
      login: "Giriş",
    },
    labels: {
      legalEntity: "Şirket",
      representative: "Temsilci",
      businessNumber: "Kayıt No.",
      address: "Adres",
      email: "Email",
      privacyOfficer: "Gizlilik sorumlusu",
      mailOrderNumber: "Online satış",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seul, Kore",
      providedBy: "Sağlayan",
    },
  },
  km: {
    links: {
      terms: "លក្ខខណ្ឌ",
      privacy: "ឯកជនភាព",
      refund: "បង្វិលប្រាក់",
      pricing: "តម្លៃ",
      login: "ចូល",
    },
    labels: {
      legalEntity: "ក្រុមហ៊ុន",
      representative: "តំណាង",
      businessNumber: "លេខចុះបញ្ជី",
      address: "អាសយដ្ឋាន",
      email: "Email",
      privacyOfficer: "អ្នកទទួលខុសត្រូវឯកជនភាព",
      mailOrderNumber: "ពាណិជ្ជកម្មអនឡាញ",
      hostingProvider: "Hosting",
    },
    values: {
      address: "សេអ៊ូល កូរ៉េ",
      providedBy: "ផ្តល់ដោយ",
    },
  },
  ms: {
    links: {
      terms: "Terma",
      privacy: "Privasi",
      refund: "Bayaran balik",
      pricing: "Harga",
      login: "Log masuk",
    },
    labels: {
      legalEntity: "Syarikat",
      representative: "Wakil",
      businessNumber: "Pendaftaran",
      address: "Alamat",
      email: "Email",
      privacyOfficer: "Pegawai privasi",
      mailOrderNumber: "Jualan online",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seoul, Korea",
      providedBy: "Disediakan oleh",
    },
  },
  kk: {
    links: {
      terms: "Шарттар",
      privacy: "Құпиялылық",
      refund: "Қайтару",
      pricing: "Баға",
      login: "Кіру",
    },
    labels: {
      legalEntity: "Компания",
      representative: "Өкіл",
      businessNumber: "Тіркеу",
      address: "Мекенжай",
      email: "Email",
      privacyOfficer: "Құпиялылық өкілі",
      mailOrderNumber: "Онлайн сауда",
      hostingProvider: "Хостинг",
    },
    values: {
      address: "Сеул, Корея",
      providedBy: "Ұсынған",
    },
  },
  pl: {
    links: {
      terms: "Regulamin",
      privacy: "Prywatność",
      refund: "Zwroty",
      pricing: "Cennik",
      login: "Login",
    },
    labels: {
      legalEntity: "Firma",
      representative: "Przedstawiciel",
      businessNumber: "Rejestracja",
      address: "Adres",
      email: "Email",
      privacyOfficer: "Ochrona danych",
      mailOrderNumber: "Handel online",
      hostingProvider: "Hosting",
    },
    values: {
      address: "Seul, Korea",
      providedBy: "Dostarczane przez",
    },
  },
};

// DB(footer.global)는 한국어 단일본이라 화면에 낼 때 다듬어야 한다 — "준비 중"류는 로케일
// 문구로, 인명·상호·주소는 로마자 한 벌로, 값에 붙은 항목명은 떼어서.
//
// **규칙은 core 에 한 벌 있다**(`localizeCompanyValue`). 예전에는 이 파일 안에만 있어서 형제
// 세 앱 푸터가 비한국어 로케일에도 `곽은하(대표)`를 그대로 냈고, 약관은 또 언어마다 다르게
// 음역했다 — 같은 페이지에서 같은 사람이 세 이름으로 나갔다(2026-08-07). 형제 셋에 옮겨
// 심고 나서는 **네 벌이 서로 달라졌고**, 그중 어느 것도 `/[locale]/contact` 는 거치지 않아
// 네 앱의 영어 문의 화면이 한국어 사업자 값을 그대로 그리고 있었다(2026-08-24 운영 확인).
function localizeFooterValue(locale: Locale, label: string, value: string) {
  return localizeCompanyValue(locale, label, value);
}

export function SiteFooter({
  tone = "dark",
  className = "",
  locale = "ko",
  policyMode = "links",
  guideFrom,
}: SiteFooterProps) {
  // 루트 레이아웃이 서버에서 읽어 내려 준 값을 초기 상태로 쓴다. 사업자등록번호·통신판매업
  // 신고번호는 법정 표시 항목이라 서버 HTML에 실제 값이 들어 있어야 한다(FooterContentProvider 참고).
  const serverContent = useServerFooterContent();
  const [footerContent, setFooterContent] = useState<FooterContent>(
    serverContent ?? fallbackFooterContent,
  );
  // 서버 렌더에서는 로그인 여부를 알 수 없으므로 "로그인"으로 시작하고, 세션을 확인한 뒤
  // 필요하면 계정으로 바꾼다. 반대로 두면 로그아웃 상태에서 "계정"이 잠깐 보인다.
  const [signedIn, setSignedIn] = useState(false);
  // 신고 채널(§3.5 ⑤). 광고 개방 로케일에서만 연다 — AD_OPENED_LOCALES를 사람이 고칠 때
  // 이 버튼도 같은 커밋에서 함께 열리게 하려는 것이다(그 상수를 새로 볼 이유가 없게).
  const [reportOpen, setReportOpen] = useState(false);
  const reportCopy = getReportCopy(locale);
  const showReportTrigger = AD_OPENED_LOCALES.has(locale);
  const isLight = tone === "light";
  const wrapperClass = isLight
    ? "border-white/15 text-white/72"
    : "border-line text-muted";
  const linkClass = isLight
    ? "text-white/86 hover:text-white"
    : "text-foreground hover:text-brand-teal";
  const copy = footerCopies[locale];
  // 컴포넌트 안에 박혀 있던 두 갈래 문구를 옮겨 온 표(구현 명세 §9).
  const labels = getUiLabels(locale);

  // 로그인 여부만 본다. 이메일 등 개인정보는 푸터에 쓰지 않으므로 가져오지 않는다.
  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSignedIn(Boolean(data.session));
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(Boolean(session));
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    // 서버가 이미 값을 내려 줬으면 다시 부르지 않는다. 같은 값을 받으려고 페이지마다 왕복할
    // 이유가 없다 — 운영자가 고치면 다음 요청의 서버 렌더에 반영된다.
    if (serverContent) return;

    const controller = new AbortController();

    fetch("/api/site-content?kind=footer", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (payload?.content) setFooterContent(payload.content);
      })
      .catch((error) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Failed to load footer content", error);
        }
      });

    return () => controller.abort();
  }, [serverContent]);

  /**
   * 사이트 전체에서 유일한 로그인·계정 진입점.
   *
   * 문구는 오래전부터 23개 로케일에 있었는데 링크만 빠져 있어, 입력 화면의 저장 안내문을
   * 봐야만 로그인을 찾을 수 있었다. 로그인한 사람은 계정으로 갈 길이 아예 없었다.
   *
   * 로그인 상태면 계정으로 바꾼다. 이미 들어온 사람에게 "로그인"을 계속 보여 주면 눌렀을 때
   * 할 일이 없다. 문구는 `getAuthCopy(locale).accountTitle`을 쓴다 — 계정 화면 제목과 같은
   * 말이라 새로 번역할 것이 없고, 두 화면이 같은 이름으로 불린다.
   */
  const accountLink = signedIn
    ? { href: localePath("/account", locale), label: getAuthCopy(locale).accountTitle }
    : { href: localePath("/login", locale), label: copy.links.login };

  // 사용자가 보고 있는 언어를 약관 페이지에도 그대로 전달한다(IP·브라우저 언어 재추정 방지).
  // 이용 안내. 허브가 로케일에 맞는 문서를 보여주므로(한국어면 한국어, 그 밖은 영어)
  // 모든 언어에서 건다. 라벨만 갈라 준다.
  const guideLink = {
    href: guideHubHref(locale, guideFrom),
    label: labels.guideLink,
  };
  // 소개·문의하기. 안내 허브와 같은 방식으로 라벨만 갈라 모든 언어에서 건다 — 두 페이지가
  // 한국어·영어 두 벌이라 23로케일 사전에 라벨을 새로 넣을 이유가 없다.
  //
  // **푸터에 거는 것이 핵심이다.** 애드센스 심사는 이 두 페이지가 있는지를 보는데, 어디에서도
  // 닿지 않는 페이지는 없는 것과 같다(안내 문서를 만들어 놓고 sitemap에 넣지 않아 겪었다).
  const aboutLink = {
    href: localePath("/about", locale),
    label: labels.about,
  };
  const contactLink = {
    href: localePath("/contact", locale),
    label: labels.contact,
  };
  const noticeLink = {
    href: localePath("/notice", locale),
    label: labels.notice,
  };
  /**
   * **화면을 옮기는 링크만 지금 주소를 실어 보낸다**(`components/ReturnLink.tsx`).
   *
   * 약관·개인정보·환불·요금은 뺐다 — 모달형 푸터에서는 화면을 옮기지 않고, 링크형에서
   * 여는 `PolicyLayout` 은 아직 `returnTo` 를 읽지 않는다. **읽지 않는 화면에 값을 붙이면
   * 주소창만 지저분해진다.**
   */
  const carriesReturnTo = new Set([
    aboutLink.href,
    contactLink.href,
    noticeLink.href,
    guideLink.href,
    accountLink.href,
  ]);
  const footerLinks = [
    aboutLink,
    contactLink,
    noticeLink,
    { href: localePath("/terms", locale), label: copy.links.terms },
    { href: localePath("/privacy", locale), label: copy.links.privacy },
    { href: localePath("/refund-policy", locale), label: copy.links.refund },
    { href: localePath("/pricing", locale), label: copy.links.pricing },
    guideLink,
    accountLink,
  ];
  const customerCenterLabel = labels.customerService;
  const footerValue = (label: string, value: string) => localizeFooterValue(locale, label, value);
  const firstLine = [
    { label: copy.labels.legalEntity, value: footerValue(copy.labels.legalEntity, footerContent.companyName) },
    { label: copy.labels.representative, value: footerValue(copy.labels.representative, footerContent.representative) },
    { label: copy.labels.businessNumber, value: footerValue(copy.labels.businessNumber, footerContent.businessNumber) },
    { label: copy.labels.address, value: footerValue(copy.labels.address, footerContent.address) },
  ];
  const secondLine = [
    { label: customerCenterLabel, value: footerValue(customerCenterLabel, footerContent.customerCenter) },
    { label: copy.labels.email, value: footerValue(copy.labels.email, footerContent.email) },
    { label: copy.labels.privacyOfficer, value: footerValue(copy.labels.privacyOfficer, footerContent.privacyOfficer) },
    { label: copy.labels.mailOrderNumber, value: footerValue(copy.labels.mailOrderNumber, footerContent.mailOrderNumber) },
    { label: copy.labels.hostingProvider, value: footerValue(copy.labels.hostingProvider, footerContent.hostingProvider) },
  ];
  const mobileRows = [
    [firstLine[0], firstLine[1]],
    [firstLine[2]],
    [secondLine[3]],
    [firstLine[3]],
    [secondLine[0], secondLine[1]],
    [secondLine[2]],
    [secondLine[4]],
  ];
  const textDirection = locale === "ar" ? "rtl" : "ltr";
  const valueClass = isLight
    ? "font-semibold text-white"
    : "font-semibold text-foreground";
  const providerName = footerContent.companyName
    .replace(/^\(주\)\s*/, "")
    .replace(/^주식회사\s*/, "");

  return (
    <footer
      className={`border-t px-5 py-3 text-center text-xs leading-6 sm:px-8 ${wrapperClass} ${className}`}
      dir="ltr"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-semibold">
          {policyMode === "modal" ? (
            <FooterPolicyLinks
              labels={{
                terms: copy.links.terms,
                privacy: copy.links.privacy,
                refund: copy.links.refund,
                pricing: copy.links.pricing,
              }}
              linkClass={linkClass}
              textDirection={textDirection}
              locale={locale}
              loginLabel={accountLink.label}
              loginHref={accountLink.href}
              guideHref={guideLink.href}
              guideLabel={guideLink.label}
              // 링크형 푸터와 같은 순서로 앞에 세운다. 두 푸터가 다른 차례로 늘어놓으면
              // 화면을 옮길 때마다 같은 항목을 다시 찾아야 한다.
              leadingLinks={[aboutLink, contactLink, noticeLink]}
            />
          ) : (
            footerLinks.map((link) =>
              carriesReturnTo.has(link.href) ? (
                <ReturnLink
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                  dir={textDirection}
                >
                  {link.label}
                </ReturnLink>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                  dir={textDirection}
                >
                  {link.label}
                </Link>
              ),
            )
          )}
          {/* 신고 채널 트리거. 두 푸터 모드(modal·link) 공통이라 삼항연산자 바깥에 형제로
              둔다 — FooterPolicyLinks의 prop 표면을 넓히지 않는다. 페이지 이동이 아니라
              모달을 여는 버튼이라 링크가 아니다(약관과 달리 크롤러가 따라갈 콘텐츠가 아님). */}
          {showReportTrigger ? (
            <button
              type="button"
              onClick={() => setReportOpen(true)}
              className={linkClass}
              dir={textDirection}
            >
              {reportCopy.triggerLabel}
            </button>
          ) : null}
        </nav>

        {reportOpen ? (
          <ReportModal locale={locale} onClose={() => setReportOpen(false)} />
        ) : null}

        <div className="mt-1 grid gap-0.5 text-[11px] leading-5 sm:hidden">
          {mobileRows.map((row, rowIndex) => (
            <div
              key={`mobile-footer-row-${rowIndex}`}
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0"
            >
              {row.map((item) => (
                // 주소처럼 긴 값은 nowrap이면 390px 뷰포트를 넘어 잘리므로 줄바꿈을 허용한다.
                <span
                  key={item.label}
                  className={
                    String(item.value ?? "").length > 30
                      ? "max-w-full [overflow-wrap:break-word]"
                      : "whitespace-nowrap"
                  }
                  dir={textDirection}
                >
                  {item.label}{" "}
                  <strong className={valueClass}>{item.value}</strong>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-1 hidden gap-0.5 text-[11px] leading-5 sm:grid">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 lg:flex-nowrap">
            {firstLine.map((item) => (
              <span key={item.label} className="whitespace-nowrap" dir={textDirection}>
                {item.label}{" "}
                <strong className={valueClass}>{item.value}</strong>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 lg:flex-nowrap">
            {secondLine.map((item) => (
              <span key={item.label} className="whitespace-nowrap" dir={textDirection}>
                {item.label}{" "}
                <strong className={valueClass}>{item.value}</strong>
              </span>
            ))}
          </div>
        </div>
        <p className="font-medium" dir={textDirection}>
          © {footerContent.copyrightYear} {footerContent.serviceName}(
          {footerContent.subtitle}) ·{" "}
          {copy.values.providedBy} {providerName}
        </p>
      </div>
    </footer>
  );
}
