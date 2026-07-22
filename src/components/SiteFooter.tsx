"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FooterPolicyLinks } from "@/components/FooterPolicyLinks";
import {
  fallbackFooterContent,
  type FooterContent,
} from "@/lib/site-content";
import type { Locale } from "@/lib/services";

type SiteFooterProps = {
  tone?: "light" | "dark";
  className?: string;
  locale?: Locale;
  policyMode?: "links" | "modal";
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
    pending: string;
    registrationPending: string;
    mailOrderPending: string;
    address: string;
    providedBy: string;
  };
};

const footerCopies: Record<Locale, FooterCopy> = {
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
      pending: "확인 예정",
      registrationPending: "준비 중",
      mailOrderPending: "신고 준비 중",
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
      pending: "to be confirmed",
      registrationPending: "pending",
      mailOrderPending: "filing pending",
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
      pending: "確認予定",
      registrationPending: "準備中",
      mailOrderPending: "申告準備中",
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
      pending: "待确认",
      registrationPending: "准备中",
      mailOrderPending: "申报准备中",
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
      pending: "in Prüfung",
      registrationPending: "in Vorbereitung",
      mailOrderPending: "Meldung in Vorbereitung",
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
      pending: "por confirmar",
      registrationPending: "en preparación",
      mailOrderPending: "registro en preparación",
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
      pending: "à confirmer",
      registrationPending: "en préparation",
      mailOrderPending: "déclaration en préparation",
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
      pending: "da confermare",
      registrationPending: "in preparazione",
      mailOrderPending: "segnalazione in preparazione",
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
      pending: "a confirmar",
      registrationPending: "em preparação",
      mailOrderPending: "declaração em preparação",
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
      pending: "sẽ xác nhận",
      registrationPending: "đang chuẩn bị",
      mailOrderPending: "đang chuẩn bị khai báo",
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
      pending: "รอยืนยัน",
      registrationPending: "กำลังเตรียม",
      mailOrderPending: "กำลังเตรียมแจ้ง",
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
      pending: "akan dikonfirmasi",
      registrationPending: "sedang disiapkan",
      mailOrderPending: "pelaporan disiapkan",
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
      pending: "уточняется",
      registrationPending: "готовится",
      mailOrderPending: "подача готовится",
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
      pending: "سيتم التأكيد",
      registrationPending: "قيد التحضير",
      mailOrderPending: "قيد الإبلاغ",
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
      pending: "kukumpirmahin",
      registrationPending: "inihahanda",
      mailOrderPending: "inihahanda ang filing",
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
      pending: "tasdiqlanadi",
      registrationPending: "tayyorlanmoqda",
      mailOrderPending: "ariza tayyorlanmoqda",
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
      pending: "баталгаажина",
      registrationPending: "бэлтгэж байна",
      mailOrderPending: "мэдүүлэг бэлтгэж байна",
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
      pending: "पुष्टि बाकी",
      registrationPending: "तैयारी में",
      mailOrderPending: "फाइलिंग तैयारी में",
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
      pending: "onay bekliyor",
      registrationPending: "hazırlanıyor",
      mailOrderPending: "bildirim hazırlanıyor",
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
      pending: "នឹងបញ្ជាក់",
      registrationPending: "កំពុងរៀបចំ",
      mailOrderPending: "កំពុងរៀបចំដាក់ស្នើ",
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
      pending: "akan disahkan",
      registrationPending: "sedang disediakan",
      mailOrderPending: "pemfailan disediakan",
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
      pending: "нақтыланады",
      registrationPending: "дайындалуда",
      mailOrderPending: "өтініш дайындалуда",
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
      pending: "do potwierdzenia",
      registrationPending: "w przygotowaniu",
      mailOrderPending: "zgłoszenie w przygotowaniu",
      address: "Seul, Korea",
      providedBy: "Dostarczane przez",
    },
  },
};

function displayFooterValue(label: string, value: string) {
  const trimmedValue = value.trim();

  return trimmedValue.startsWith(label)
    ? trimmedValue.slice(label.length).trim()
    : trimmedValue;
}

export function SiteFooter({
  tone = "dark",
  className = "",
  locale = "ko",
  policyMode = "links",
}: SiteFooterProps) {
  const [footerContent, setFooterContent] = useState<FooterContent>(
    fallbackFooterContent,
  );
  const isLight = tone === "light";
  const wrapperClass = isLight
    ? "border-white/15 text-white/72"
    : "border-line text-muted";
  const linkClass = isLight
    ? "text-white/86 hover:text-white"
    : "text-foreground hover:text-brand-teal";
  const copy = footerCopies[locale];

  useEffect(() => {
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
  }, []);

  // 사용자가 보고 있는 언어를 약관 페이지에도 그대로 전달한다(IP·브라우저 언어 재추정 방지).
  const langQuery = locale && locale !== "ko" ? `?lang=${locale}` : "";
  const footerLinks = [
    { href: `/terms${langQuery}`, label: copy.links.terms },
    { href: `/privacy${langQuery}`, label: copy.links.privacy },
    { href: `/refund-policy${langQuery}`, label: copy.links.refund },
    { href: `/pricing${langQuery}`, label: copy.links.pricing },
  ];
  const customerCenterLabel = locale === "ko" ? "고객센터" : "Customer service";
  const firstLine = [
    { label: copy.labels.legalEntity, value: displayFooterValue(copy.labels.legalEntity, footerContent.companyName) },
    { label: copy.labels.representative, value: displayFooterValue(copy.labels.representative, footerContent.representative) },
    { label: copy.labels.businessNumber, value: displayFooterValue(copy.labels.businessNumber, footerContent.businessNumber) },
    { label: copy.labels.address, value: displayFooterValue(copy.labels.address, footerContent.address) },
  ];
  const secondLine = [
    { label: customerCenterLabel, value: displayFooterValue(customerCenterLabel, footerContent.customerCenter) },
    { label: copy.labels.email, value: displayFooterValue(copy.labels.email, footerContent.email) },
    { label: copy.labels.privacyOfficer, value: displayFooterValue(copy.labels.privacyOfficer, footerContent.privacyOfficer) },
    { label: copy.labels.mailOrderNumber, value: displayFooterValue(copy.labels.mailOrderNumber, footerContent.mailOrderNumber) },
    { label: copy.labels.hostingProvider, value: displayFooterValue(copy.labels.hostingProvider, footerContent.hostingProvider) },
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
            />
          ) : (
            footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass}
                dir={textDirection}
              >
                {link.label}
              </Link>
            ))
          )}
        </nav>

        <div className="mt-1 grid gap-0.5 text-[11px] leading-5 sm:hidden">
          {mobileRows.map((row, rowIndex) => (
            <div
              key={`mobile-footer-row-${rowIndex}`}
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0"
            >
              {row.map((item) => (
                <span key={item.label} className="whitespace-nowrap" dir={textDirection}>
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
