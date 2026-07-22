import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, AudioLines, Globe2, Signature, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getLandingCopy, getTextDirection } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { serviceList, type Locale } from "@/lib/services";

const hangulPronunciationCopy: Record<
  Locale,
  { audience: string; title: string; description: string }
> = {
  ko: { audience: "한글 발음 표기가 필요한 외국인", title: "글로벌 이름 한글 표기", description: "새로운 한국 이름을 만들지 않고, 원래 이름의 발음을 자연스러운 한글 표기로 바꿉니다." },
  en: { audience: "Keep your name, written in Korean", title: "Write My Name as It Sounds in Hangul", description: "Turn your name’s original pronunciation into a natural Hangul spelling—without creating a new Korean name." },
  ja: { audience: "ハングル発音表記が必要な方", title: "名前をハングルで表記", description: "新しい韓国名を作らず、元の名前の発音を自然なハングル表記に変換します。" },
  zh: { audience: "需要韩文发音标记的用户", title: "用韩文标记姓名发音", description: "不创建新的韩国姓名，而是将原名发音转换为自然的韩文写法。" },
  de: { audience: "Für eine Hangul-Aussprache", title: "Namen in Hangul schreiben", description: "Überträgt die ursprüngliche Aussprache natürlich in Hangul, ohne einen neuen koreanischen Namen zu erfinden." },
  es: { audience: "Para escribir la pronunciación en hangul", title: "Escribir mi nombre en hangul", description: "Convierte la pronunciación original en una escritura natural en hangul, sin crear un nombre coreano nuevo." },
  fr: { audience: "Pour une transcription en hangeul", title: "Écrire mon nom en hangeul", description: "Transcrit naturellement la prononciation d’origine en hangeul, sans créer un nouveau nom coréen." },
  it: { audience: "Per la pronuncia in hangul", title: "Scrivi il mio nome in hangul", description: "Trascrive naturalmente la pronuncia originale in hangul, senza creare un nuovo nome coreano." },
  pt: { audience: "Para pronúncia em hangul", title: "Escrever meu nome em hangul", description: "Converte a pronúncia original em uma escrita natural em hangul, sem criar um novo nome coreano." },
  vi: { audience: "Dành cho cách đọc bằng Hangul", title: "Viết tên bằng Hangul", description: "Chuyển cách phát âm tên gốc sang cách viết Hangul tự nhiên, không tạo tên Hàn Quốc mới." },
  th: { audience: "สำหรับการเขียนเสียงอ่านด้วยฮันกึล", title: "เขียนชื่อเป็นฮันกึล", description: "ถอดเสียงชื่อเดิมเป็นฮันกึลอย่างเป็นธรรมชาติ โดยไม่สร้างชื่อเกาหลีใหม่" },
  id: { audience: "Untuk pelafalan dalam Hangul", title: "Tulis nama saya dalam Hangul", description: "Mengubah pelafalan nama asli menjadi tulisan Hangul yang alami tanpa membuat nama Korea baru." },
  ru: { audience: "Для записи произношения на хангыле", title: "Записать имя на хангыле", description: "Передаёт исходное произношение естественной записью на хангыле, не создавая новое корейское имя." },
  ar: { audience: "لكتابة النطق بالهانغول", title: "اكتب اسمي بالهانغول", description: "يحوّل نطق الاسم الأصلي إلى كتابة طبيعية بالهانغول من دون إنشاء اسم كوري جديد." },
  fil: { audience: "Para sa bigkas sa Hangul", title: "Isulat ang pangalan sa Hangul", description: "Isinusulat sa natural na Hangul ang orihinal na bigkas nang hindi gumagawa ng bagong Koreanong pangalan." },
  uz: { audience: "Hangulcha talaffuz uchun", title: "Ismni Hangulda yozish", description: "Yangi koreyscha ism yaratmay, asl ism talaffuzini tabiiy Hangul yozuviga o‘giradi." },
  mn: { audience: "Хангыл дуудлагын бичлэг", title: "Нэрийг хангыляар бичих", description: "Шинэ солонгос нэр зохиолгүйгээр эх нэрийн дуудлагыг хангыляар байгалийн байдлаар бичнэ." },
  hi: { audience: "हंगुल उच्चारण लिखने के लिए", title: "नाम हंगुल में लिखें", description: "नया कोरियाई नाम बनाए बिना मूल नाम के उच्चारण को स्वाभाविक हंगुल लेखन में बदलता है।" },
  tr: { audience: "Hangul telaffuzu için", title: "Adımı Hangul ile yaz", description: "Yeni bir Korece ad oluşturmadan özgün telaffuzu doğal bir Hangul yazımına dönüştürür." },
  km: { audience: "សម្រាប់ការសរសេរសំឡេងជាហាន់ហ្គុល", title: "សរសេរឈ្មោះជាហាន់ហ្គុល", description: "បម្លែងសំឡេងឈ្មោះដើមទៅជាអក្សរហាន់ហ្គុលធម្មជាតិ ដោយមិនបង្កើតឈ្មោះកូរ៉េថ្មី។" },
  ms: { audience: "Untuk sebutan dalam Hangul", title: "Tulis nama saya dalam Hangul", description: "Menukar sebutan nama asal kepada ejaan Hangul semula jadi tanpa mencipta nama Korea baharu." },
  kk: { audience: "Хангыльша айтылуы үшін", title: "Есімді хангыльмен жазу", description: "Жаңа корей есімін жасамай, бастапқы есімнің айтылуын табиғи хангыль жазуына айналдырады." },
  pl: { audience: "Do zapisu wymowy w hangulu", title: "Zapisz imię w hangulu", description: "Przenosi oryginalną wymowę do naturalnego zapisu w hangulu bez tworzenia nowego koreańskiego imienia." },
};

function LandingIconShell({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md border border-white/20 bg-black/18 text-white shadow-inner backdrop-blur-sm"
    >
      <span className="absolute inset-x-2 top-2 h-px bg-white/16" />
      <span className="absolute inset-x-2 bottom-2 h-px bg-white/10" />
      {children}
    </span>
  );
}

function LocalizedNamePlateIcon() {
  return (
    <LandingIconShell>
      <span className="relative flex h-[3.45rem] w-[3.45rem] items-center justify-center rounded-md border border-white/42 bg-white/6 text-white">
        <Signature aria-hidden="true" size={31} strokeWidth={1.7} />
        <Sparkles
          aria-hidden="true"
          size={13}
          strokeWidth={1.8}
          className="absolute right-1.5 top-1.5 text-[#e6c8b6]"
        />
      </span>
    </LandingIconShell>
  );
}
function HangulPronunciationIcon() {
  return (
    <LandingIconShell>
      <span className="relative flex h-[3.45rem] w-[3.45rem] flex-col items-center justify-center rounded-md border border-white/42 bg-white/6 text-white">
        <AudioLines
          aria-hidden="true"
          size={33}
          strokeWidth={1.7}
          className="text-white"
        />
        <span className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-[#e6c8b6]" />
      </span>
    </LandingIconShell>
  );
}

function FancyKoreanServiceIcon({
  icon,
}: {
  icon: "hanja" | "passport" | "korean";
}) {
  if (icon === "passport") {
    return (
      <LandingIconShell>
        <span className="relative flex h-[3.45rem] w-[3.45rem] flex-col items-center justify-center rounded-md border border-white/42 bg-white/6 text-white">
          <Globe2 aria-hidden="true" size={24} strokeWidth={1.7} />
          <span className="mt-1 text-[8px] font-semibold tracking-[0.12em] text-white/70">
            NAME
          </span>
          <span className="absolute right-1.5 top-1.5 text-[8px] font-semibold text-[#e6c8b6]">
            名
          </span>
        </span>
      </LandingIconShell>
    );
  }

  return (
    <LandingIconShell>
      <span className="relative flex h-[3.45rem] w-[3.45rem] items-center justify-center rounded-md border border-white/42 bg-white/6">
        <span
          className="text-[1.75rem] font-semibold leading-none text-white"
          style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
        >
          漢
        </span>
        <span className="absolute bottom-1.5 right-1.5 text-[8px] font-semibold text-[#e6c8b6]">
          意
        </span>
      </span>
    </LandingIconShell>
  );
}
type HomeProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const copy = getLandingCopy(locale);
  const textDirection = getTextDirection(locale);
  const isKoreanEntry = locale === "ko";
  // break-keep(keep-all)은 한국어 단어 단위 줄바꿈용. 띄어쓰기가 없는 문자권(일본어·중국어·
  // 태국어·크메르어)에서는 줄바꿈 지점이 사라져 텍스트가 뷰포트 밖으로 잘리므로 일반 줄바꿈을 쓴다.
  const spacelessScript = ["ja", "zh", "th", "km"].includes(locale);
  const wordBreakClass = spacelessScript
    ? "break-normal [overflow-wrap:anywhere]"
    : "break-keep";
  const heroImage = isKoreanEntry
    ? "/images/landing-hero.png"
    : "/images/landing-hero-global.png";
  const heroHeadingClass = isKoreanEntry
    ? "text-[2.125rem] sm:text-[2.75rem] xl:text-[3.25rem]"
    : "text-3xl sm:text-4xl xl:text-5xl";
  const descriptionText = copy.descriptionLines.join(" ");
  const visibleServices = serviceList.filter((service) =>
    isKoreanEntry
      ? service.slug === "hanja-meaning" || service.slug === "korean-to-global"
      : service.slug === "global-to-korean",
  );

  return (
    <main className="min-h-screen bg-background" dir="ltr">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden lg:h-[100svh] lg:min-h-0">
        <Image
          src={heroImage}
          alt="Korean calligraphy, name seal, passport, and keepsake card on a refined desk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,20,0.88),rgba(18,24,20,0.62),rgba(18,24,20,0.24))]" />

        <header className="relative z-40 mx-auto grid w-full max-w-7xl gap-3 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,600px)] lg:items-center lg:gap-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <BrandMark />
            <span className="flex flex-col gap-1">
              <span className="text-[22px] font-semibold leading-none">
                Naming-Link
              </span>
              <span
                className="text-[18px] font-medium leading-none text-white/78"
                style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
              >
                네이밍 - 링크
              </span>
            </span>
          </Link>
          <LanguageSwitcher
            locale={locale}
            currentLanguageLabel={copy.currentLanguage}
            moreLabel={copy.moreLanguages}
            closeLabel={copy.closeLanguages}
            className="lg:justify-end"
          />
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,600px)] lg:items-start lg:px-10 lg:pt-[clamp(6.5rem,14vh,8.5rem)]">
          <section className="max-w-3xl text-left lg:-translate-y-8 lg:grid lg:max-w-none lg:grid-rows-[5.75rem_12rem_6.25rem] lg:content-start">
            <p className="inline-flex w-fit items-center justify-center justify-self-start self-start rounded-lg border border-white/30 bg-white/12 px-5 py-3 text-center text-xl font-semibold text-white shadow-sm backdrop-blur sm:text-2xl">
              {copy.badge}
            </p>
            <h1
              className={`mt-5 min-h-[9.75rem] max-w-[18ch] ${wordBreakClass} text-left font-semibold leading-[1.08] tracking-normal [text-wrap:balance] sm:min-h-[11.25rem] sm:max-w-[20ch] lg:mt-0 lg:min-h-0 lg:max-w-[20ch] xl:min-h-0 ${heroHeadingClass}`}
              dir={textDirection}
            >
              {copy.heroLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className={`mt-5 max-w-2xl ${wordBreakClass} text-left text-base leading-7 text-white/82 [text-wrap:pretty] sm:min-h-[5.25rem] sm:text-lg lg:mt-0 lg:min-h-0`}
              dir={textDirection}
            >
              {descriptionText}
            </p>
          </section>

          <section className="grid w-full max-w-[37.5rem] justify-self-end gap-2 lg:min-h-[18rem]">
            <div className="flex items-center justify-end gap-3">
              <p className="text-xs text-white/60">{copy.servicePickerHint}</p>
            </div>
            {!isKoreanEntry ? (
              <Link
                href={`/global-to-korean?lang=${locale}&mode=transliteration`}
                className="group h-[7.25rem] rounded-lg border border-white/20 bg-white/12 p-3 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
              >
                <div className="relative flex items-start gap-3 pr-7">
                  <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-lg border border-white/18 bg-black/20 p-1 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                    <HangulPronunciationIcon />
                  </span>
                  <div className="min-w-0 flex-1 text-left" dir={textDirection}>
                    <p className="truncate break-keep text-xs font-semibold text-white/70">
                      {hangulPronunciationCopy[locale].audience}
                    </p>
                    <h2 className="mt-1 truncate break-keep text-base font-semibold sm:text-lg">
                      {hangulPronunciationCopy[locale].title}
                    </h2>
                    <p className={`mt-1 overflow-hidden ${wordBreakClass} text-[13px] leading-5 text-white/74 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}>
                      {hangulPronunciationCopy[locale].description}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute right-0 top-1 transition group-hover:translate-x-1"
                    size={19}
                  />
                </div>
              </Link>
            ) : null}
            {visibleServices.map((service) => {
              const serviceCopy = copy.services[service.slug] ?? service;

              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}?lang=${locale}`}
                  className="group h-[7.25rem] rounded-lg border border-white/20 bg-white/12 p-3 shadow-sm backdrop-blur transition hover:border-white/70 hover:bg-white/18"
                >
                  <div className="relative flex items-start gap-3 pr-7">
                    <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-lg border border-white/18 bg-black/20 p-1 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                      {isKoreanEntry ? (
                        <FancyKoreanServiceIcon icon={service.icon} />
                      ) : (
                        <LocalizedNamePlateIcon />
                      )}
                    </span>
                    <div
                      className="min-w-0 flex-1 text-left"
                      dir={textDirection}
                    >
                      <p className="truncate break-keep text-xs font-semibold text-white/70">
                        {serviceCopy.audience}
                      </p>
                      <h2 className="mt-1 truncate break-keep text-base font-semibold sm:text-lg">
                        {serviceCopy.title}
                      </h2>
                      <p className={`mt-1 overflow-hidden ${wordBreakClass} text-[13px] leading-5 text-white/74 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]`}>
                        {serviceCopy.description}
                      </p>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute right-0 top-1 transition group-hover:translate-x-1"
                      size={19}
                    />
                  </div>
                </Link>
              );
            })}
          </section>
        </div>

        <SiteFooter
          tone="light"
          className="relative bottom-1 z-10 shrink-0 bg-foreground/50 !pb-4 !pt-2 backdrop-blur"
          locale={locale}
          policyMode="modal"
        />
      </section>
    </main>
  );
}
