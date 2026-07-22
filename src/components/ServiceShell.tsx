import Link from "next/link";
import { ArrowLeft, BadgeCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale, ServiceConfig } from "@/lib/services";
import { NamingForm } from "@/components/NamingForm";
import { AdBanner } from "@/components/AdBanner";
import {
  globalNameToHangulService,
  serviceList,
  services,
} from "@/lib/services";
import { getServiceOverride, localizeServiceHero } from "@/lib/i18n-service";

const homeLabels: Record<Locale, string> = {
  ko: "홈",
  en: "Home",
  ja: "ホーム",
  zh: "首页",
  de: "Startseite",
  es: "Inicio",
  fr: "Accueil",
  it: "Home",
  pt: "Início",
  vi: "Trang chủ",
  th: "หน้าแรก",
  id: "Beranda",
  ru: "Главная",
  ar: "الرئيسية",
  fil: "Home",
  uz: "Bosh sahifa",
  mn: "Нүүр",
  hi: "होम",
  tr: "Ana sayfa",
  km: "ទំព័រដើម",
  ms: "Laman utama",
  kk: "Басты бет",
  pl: "Strona główna",
};

const koreanEntryServiceSlugs = new Set(["hanja-meaning", "korean-to-global"]);

const globalNavigationLabels: Record<
  Locale,
  { transliteration: string; koreanName: string }
> = {
  ko: { transliteration: "한글 발음 표기", koreanName: "한국 이름" },
  en: { transliteration: "Name in Hangul", koreanName: "Korean Name" },
  ja: { transliteration: "ハングル表記", koreanName: "韓国名" },
  zh: { transliteration: "韩文标音", koreanName: "韩国姓名" },
  de: { transliteration: "Name in Hangul", koreanName: "Koreanischer Name" },
  es: { transliteration: "Nombre en hangul", koreanName: "Nombre coreano" },
  fr: { transliteration: "Nom en hangeul", koreanName: "Nom coréen" },
  it: { transliteration: "Nome in hangul", koreanName: "Nome coreano" },
  pt: { transliteration: "Nome em hangul", koreanName: "Nome coreano" },
  vi: { transliteration: "Tên bằng Hangul", koreanName: "Tên Hàn Quốc" },
  th: { transliteration: "ชื่อเป็นฮันกึล", koreanName: "ชื่อเกาหลี" },
  id: { transliteration: "Nama dalam Hangul", koreanName: "Nama Korea" },
  ru: { transliteration: "Имя на хангыле", koreanName: "Корейское имя" },
  ar: { transliteration: "الاسم بالهانغول", koreanName: "اسم كوري" },
  fil: { transliteration: "Pangalan sa Hangul", koreanName: "Pangalang Koreano" },
  uz: { transliteration: "Ism Hangulda", koreanName: "Koreyscha ism" },
  mn: { transliteration: "Нэр хангыляар", koreanName: "Солонгос нэр" },
  hi: { transliteration: "हंगुल में नाम", koreanName: "कोरियाई नाम" },
  tr: { transliteration: "Hangul ile ad", koreanName: "Korece ad" },
  km: { transliteration: "ឈ្មោះជាហាន់ហ្គុល", koreanName: "ឈ្មោះកូរ៉េ" },
  ms: { transliteration: "Nama dalam Hangul", koreanName: "Nama Korea" },
  kk: { transliteration: "Есім хангыльмен", koreanName: "Корей есімі" },
  pl: { transliteration: "Imię w hangulu", koreanName: "Koreańskie imię" },
};

// 외국인 대상 서비스에서만 로케일 문구를 쓰고, 한국어 대상 서비스는 항상 ko를 유지한다(다른 로케일은 영어 폴백).
const shellCopies: Record<
  string,
  {
    promiseLabel: string;
    defaultLanguage: string;
    g2kPromise: string;
    g2kIntro: string;
    headerAdLabel: string;
  }
> = {
  ko: {
    promiseLabel: "서비스 약속",
    defaultLanguage: "기본 언어",
    g2kPromise:
      "부르고 쓰기 쉬운 이름으로 제안하며, 의미와 발음 등을 확인할 수 있습니다.",
    g2kIntro:
      "아래의 다양한 조건을 입력하면 자연스럽고 설명 가능한 한국 이름을 제안합니다.",
    headerAdLabel: "서비스 상단 배너 광고",
  },
  vi: {
    promiseLabel: "Cam kết dịch vụ",
    defaultLanguage: "Ngôn ngữ mặc định",
    g2kPromise:
      "Chúng tôi đề xuất những cái tên dễ gọi, dễ viết, có thể kiểm chứng ý nghĩa và phát âm.",
    g2kIntro:
      "Điền các thông tin bên dưới và chúng tôi sẽ đề xuất những tên tiếng Hàn tự nhiên, dễ giải thích.",
    headerAdLabel: "Quảng cáo banner đầu trang dịch vụ",
  },
  th: {
    promiseLabel: "คำมั่นสัญญาของบริการ",
    defaultLanguage: "ภาษาเริ่มต้น",
    g2kPromise:
      "เราแนะนำชื่อที่เรียกง่าย เขียนง่าย พร้อมความหมายและการออกเสียงที่ตรวจสอบได้",
    g2kIntro:
      "กรอกข้อมูลด้านล่างแล้วเราจะแนะนำชื่อเกาหลีที่เป็นธรรมชาติและอธิบายที่มาได้",
    headerAdLabel: "โฆษณาแบนเนอร์ด้านบนของหน้าบริการ",
  },
  ja: {
    promiseLabel: "サービスの約束",
    defaultLanguage: "基本言語",
    g2kPromise:
      "呼びやすく書きやすい名前を、意味と発音を確認できる形でご提案します。",
    g2kIntro:
      "以下のさまざまな条件を入力すると、自然で由来を説明できる韓国の名前をご提案します。",
    headerAdLabel: "サービス上部バナー広告",
  },
  zh: {
    promiseLabel: "服务承诺",
    defaultLanguage: "默认语言",
    g2kPromise:
      "我们推荐好叫又好写的名字，含义和发音都可以核实。",
    g2kIntro:
      "填写下面的各项信息，我们将为您推荐自然、可解释的韩国名字。",
    headerAdLabel: "服务页顶部横幅广告",
  },
  id: {
    promiseLabel: "Janji layanan",
    defaultLanguage: "Bahasa default",
    g2kPromise:
      "Kami merekomendasikan nama yang mudah dipanggil dan ditulis, dengan arti dan pelafalan yang dapat diverifikasi.",
    g2kIntro:
      "Isi berbagai informasi di bawah ini dan kami akan mengusulkan nama Korea yang alami dan mudah dijelaskan.",
    headerAdLabel: "Iklan banner atas halaman layanan",
  },
  de: {
    promiseLabel: "Unser Versprechen",
    defaultLanguage: "Standardsprache",
    g2kPromise:
      "Wir schlagen Namen vor, die leicht zu rufen und zu schreiben sind — mit überprüfbarer Bedeutung und Aussprache.",
    g2kIntro:
      "Füllen Sie die Angaben unten aus, und wir schlagen Ihnen natürliche, gut erklärbare koreanische Namen vor.",
    headerAdLabel: "Banner-Werbung oben auf der Serviceseite",
  },
  es: {
    promiseLabel: "Nuestro compromiso",
    defaultLanguage: "Idioma predeterminado",
    g2kPromise:
      "Recomendamos nombres fáciles de pronunciar y escribir, con significado y pronunciación que puedes verificar.",
    g2kIntro:
      "Completa los datos a continuación y te sugeriremos nombres coreanos naturales y fáciles de explicar.",
    headerAdLabel: "Anuncio de banner superior de la página del servicio",
  },
  fr: {
    promiseLabel: "Notre engagement",
    defaultLanguage: "Langue par défaut",
    g2kPromise:
      "Nous recommandons des prénoms faciles à appeler et à écrire, dont vous pouvez vérifier le sens et la prononciation.",
    g2kIntro:
      "Renseignez les informations ci-dessous et nous vous proposerons des prénoms coréens naturels et faciles à expliquer.",
    headerAdLabel: "Bannière publicitaire en haut de la page du service",
  },
  it: {
    promiseLabel: "Il nostro impegno",
    defaultLanguage: "Lingua predefinita",
    g2kPromise:
      "Raccomandiamo nomi facili da chiamare e da scrivere, con significato e pronuncia verificabili.",
    g2kIntro:
      "Compila i dati qui sotto e ti suggeriremo nomi coreani naturali e facili da spiegare.",
    headerAdLabel: "Banner pubblicitario in alto nella pagina del servizio",
  },
  pt: {
    promiseLabel: "Nosso compromisso",
    defaultLanguage: "Idioma padrão",
    g2kPromise:
      "Recomendamos nomes fáceis de chamar e de escrever, com significado e pronúncia que você pode verificar.",
    g2kIntro:
      "Preencha os dados abaixo e vamos sugerir nomes coreanos naturais e fáceis de explicar.",
    headerAdLabel: "Anúncio de banner no topo da página do serviço",
  },
  ru: {
    promiseLabel: "Наше обещание",
    defaultLanguage: "Язык по умолчанию",
    g2kPromise:
      "Мы рекомендуем имена, которые легко произносить и писать, со значением и произношением, которые можно проверить.",
    g2kIntro:
      "Заполните данные ниже, и мы предложим естественные корейские имена с понятным объяснением.",
    headerAdLabel: "Баннерная реклама вверху страницы сервиса",
  },
  ar: {
    promiseLabel: "وعدنا",
    defaultLanguage: "اللغة الافتراضية",
    g2kPromise:
      "نوصي بأسماء يسهل نداؤها وكتابتها، مع معنى ونطق يمكنك التحقق منهما.",
    g2kIntro:
      "املأ البيانات أدناه وسنقترح عليك أسماء كورية طبيعية يسهل شرحها.",
    headerAdLabel: "إعلان الشريط العلوي لصفحة الخدمة",
  },
  tr: {
    promiseLabel: "Sözümüz",
    defaultLanguage: "Varsayılan dil",
    g2kPromise:
      "Çağırması ve yazması kolay, anlamı ve telaffuzu doğrulanabilir isimler öneriyoruz.",
    g2kIntro:
      "Aşağıdaki bilgileri doldurun; size doğal ve kolayca açıklanabilen Kore isimleri önerelim.",
    headerAdLabel: "Hizmet sayfası üst banner reklamı",
  },
  fil: {
    promiseLabel: "Ang aming pangako",
    defaultLanguage: "Default na wika",
    g2kPromise:
      "Nagrerekomenda kami ng mga pangalang madaling tawagin at isulat, na may kahulugan at bigkas na maaari mong beripikahin.",
    g2kIntro:
      "Punan ang mga detalye sa ibaba at magmumungkahi kami ng natural at madaling ipaliwanag na mga pangalang Koreano.",
    headerAdLabel: "Banner ad sa itaas ng pahina ng serbisyo",
  },
  uz: {
    promiseLabel: "Bizning va’damiz",
    defaultLanguage: "Asosiy til",
    g2kPromise:
      "Chaqirish va yozish oson, ma’nosi va talaffuzini tekshirish mumkin bo‘lgan ismlarni tavsiya qilamiz.",
    g2kIntro:
      "Quyidagi ma’lumotlarni to‘ldiring — sizga tabiiy va izohlash oson koreyscha ismlarni taklif qilamiz.",
    headerAdLabel: "Xizmat sahifasi yuqorisidagi banner reklama",
  },
  mn: {
    promiseLabel: "Бидний амлалт",
    defaultLanguage: "Үндсэн хэл",
    g2kPromise:
      "Дуудахад, бичихэд хялбар бөгөөд утга, дуудлагыг нь нягтлах боломжтой нэрсийг санал болгоно.",
    g2kIntro:
      "Доорх мэдээллийг бөглөвөл аяндаа ойлгогдох, тайлбарлахад хялбар солонгос нэрсийг санал болгоно.",
    headerAdLabel: "Үйлчилгээний хуудасны дээд баннер зар",
  },
  hi: {
    promiseLabel: "हमारा वादा",
    defaultLanguage: "डिफ़ॉल्ट भाषा",
    g2kPromise:
      "हम ऐसे नाम सुझाते हैं जो पुकारने और लिखने में आसान हों, और जिनका अर्थ और उच्चारण आप स्वयं जाँच सकते हैं।",
    g2kIntro:
      "नीचे दी गई जानकारी भरें, हम आपको स्वाभाविक और आसानी से समझाए जा सकने वाले कोरियाई नाम सुझाएँगे।",
    headerAdLabel: "सेवा पृष्ठ के शीर्ष का बैनर विज्ञापन",
  },
  km: {
    promiseLabel: "ការសន្យារបស់សេវាកម្ម",
    defaultLanguage: "ភាសាលំនាំដើម",
    g2kPromise:
      "យើងណែនាំឈ្មោះដែលងាយហៅ ងាយសរសេរ ព្រមទាំងអត្ថន័យ និងការបញ្ចេញសំឡេងដែលអ្នកអាចផ្ទៀងផ្ទាត់បាន។",
    g2kIntro:
      "បំពេញព័ត៌មានខាងក្រោម ហើយយើងនឹងណែនាំឈ្មោះកូរ៉េដែលធម្មជាតិ និងងាយពន្យល់។",
    headerAdLabel: "ផ្ទាំងផ្សាយពាណិជ្ជកម្មនៅផ្នែកខាងលើនៃទំព័រសេវាកម្ម",
  },
  kk: {
    promiseLabel: "Біздің уәдеміз",
    defaultLanguage: "Әдепкі тіл",
    g2kPromise:
      "Шақыруға да, жазуға да оңай, мағынасы мен айтылымын тексеруге болатын есімдерді ұсынамыз.",
    g2kIntro:
      "Төмендегі мәліметтерді толтырыңыз — сізге табиғи әрі түсіндіруге оңай корей есімдерін ұсынамыз.",
    headerAdLabel: "Қызмет бетінің жоғарғы баннерлік жарнамасы",
  },
  en: {
    promiseLabel: "Our promise",
    defaultLanguage: "Default language",
    g2kPromise:
      "We suggest names that are easy to call and write, with meaning and pronunciation you can verify.",
    g2kIntro:
      "Fill in the details below and we'll suggest natural, explainable Korean names.",
    headerAdLabel: "Service header banner ad",
  },
};

function getShellCopy(service: ServiceConfig, locale: Locale) {
  if (service.serviceType === "GLOBAL_TO_KOREAN" && locale !== "ko") {
    return shellCopies[locale] ?? shellCopies.en;
  }
  return shellCopies.ko;
}

function ServicePromisePanel({
  service,
  locale,
  className = "",
}: {
  service: ServiceConfig;
  locale: Locale;
  className?: string;
}) {
  const isGlobalToKorean = service.serviceType === "GLOBAL_TO_KOREAN";
  const isHangulTransliteration = service.slug === "global-name-to-hangul";
  const copy = getShellCopy(service, locale);

  return (
    <div className={`rounded-lg bg-surface-strong p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <BadgeCheck
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-brand-teal"
          size={20}
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-semibold">{copy.promiseLabel}</p>
            <p className="inline-flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-muted">
              <Sparkles aria-hidden="true" size={15} />
              {copy.defaultLanguage}: {locale.toUpperCase()}
            </p>
          </div>
          {isGlobalToKorean && !isHangulTransliteration ? (
            <p className="mt-3 text-sm leading-6 text-muted">
              {copy.g2kPromise}
            </p>
          ) : (
            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-muted">
              {service.promise}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ServiceShell({
  service,
  locale,
}: {
  service: ServiceConfig;
  locale: Locale;
}) {
  const homeLabel = homeLabels[locale] ?? homeLabels.en;
  const isGlobalToKorean = service.serviceType === "GLOBAL_TO_KOREAN";
  const isHangulTransliteration = service.slug === "global-name-to-hangul";
  const shellCopy = getShellCopy(service, locale);
  // 외국인 대상 서비스의 소개 문구(제목·설명·약속·결과 라벨)를 로케일 사전으로 덮어쓴다.
  const displayService = localizeServiceHero(
    isGlobalToKorean ? getServiceOverride(locale) : null,
    service,
  );
  const introDescription = isGlobalToKorean && !isHangulTransliteration
    ? shellCopy.g2kIntro
    : displayService.description;
  const navigationServices =
    locale === "ko"
      ? serviceList.filter((item) => koreanEntryServiceSlugs.has(item.slug))
      : [globalNameToHangulService, services.globalToKorean];
  const globalLabels = globalNavigationLabels[locale];

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="border-b border-line pb-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="order-2 flex shrink-0 flex-wrap items-center gap-3 lg:order-1">
              <Link
                href={`/?lang=${locale}`}
                className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm transition hover:border-foreground hover:bg-foreground"
              >
                <ArrowLeft aria-hidden="true" size={17} />
                {homeLabel}
              </Link>
              {navigationServices.length > 0 ? (
                <nav className="flex flex-wrap gap-2 text-sm">
                  {navigationServices.map((item) => (
                    <Link
                      key={item.slug}
                      href={
                        item.slug === "global-name-to-hangul"
                          ? `/global-to-korean?lang=${locale}&mode=transliteration`
                          : `/${item.slug}?lang=${locale}`
                      }
                      className={`rounded-lg border px-3 py-2 transition ${
                        item.slug === service.slug
                          ? "border-foreground bg-foreground text-background"
                          : "border-line bg-surface hover:border-foreground"
                      }`}
                    >
                      {locale === "ko"
                        ? item.shortTitle
                        : item.slug === "global-name-to-hangul"
                          ? globalLabels.transliteration
                          : globalLabels.koreanName}
                    </Link>
                  ))}
                </nav>
              ) : null}
            </div>
            <div className="order-1 min-w-0 flex-1 lg:order-2">
              <AdBanner
                variant="header"
                slotKey="service_header"
                label={shellCopy.headerAdLabel}
              />
            </div>
          </div>
        </header>

        <section className="grid gap-5 rounded-lg border border-line bg-surface p-6 shadow-sm xl:grid-cols-[minmax(0,1fr)_minmax(22rem,30rem)] xl:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-brand-teal">
              {displayService.eyebrow}
            </p>
            <h1
              className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-normal sm:text-4xl"
            >
              {displayService.title}
            </h1>
            <p
              className={`mt-4 max-w-3xl whitespace-pre-line text-base leading-7 text-muted sm:whitespace-normal ${
                service.serviceType === "KOREAN_TO_GLOBAL"
                  ? "sm:whitespace-pre-line"
                  : ""
              }`}
            >
              {introDescription}
            </p>
          </div>
          <ServicePromisePanel service={displayService} locale={locale} />
        </section>

        <NamingForm service={displayService} locale={locale} />
      </section>
      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}
