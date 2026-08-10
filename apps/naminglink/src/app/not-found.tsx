import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { getResultCopy } from "@/lib/i18n-result";
import { isLocaleCode, type LocaleCode } from "@/lib/locale-codes";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { noIndex } from "@/lib/seo";

/**
 * 없는 주소로 들어왔을 때의 화면.
 *
 * ## 왜 만들었나 (2026-08-11)
 *
 * 이 앱에는 `not-found.tsx`가 **한 장도 없어서** Next의 기본 404(검은 글씨 한 줄)가 나가고
 * 있었다. 어제 URL 구조를 정리하며 301·308을 많이 걸었고, 옛 링크를 타고 들어오는 사람이
 * 늘어나는 시점이라 그 자리가 브랜드 밖 화면이면 곤란하다. 애드센스 심사에서도 「완성되지 않은
 * 사이트」로 읽히는 자리다.
 *
 * ## 지키는 것 셋
 *
 * · **canonical을 넣지 않는다.** 404는 정본이 없는 자리다. 여기에 canonical을 적으면 없는
 *   주소를 「이 주소가 정본」이라고 선언하게 된다. `robots`만 `noindex`로 둔다.
 * · **상태 코드는 Next가 낸다.** 이 파일이 그리는 응답은 404다 — 200으로 나가는 「소프트 404」는
 *   구글이 색인 문제로 잡는 자리라, 여기서 리다이렉트하거나 정상 페이지를 흉내 내지 않는다.
 * · **막다른 길로 두지 않는다.** 홈·이용 안내·소개로 잇는다. 링크는 `localePath`로 만들어
 *   한국어 전용·글로벌 전용 규칙을 그대로 따른다(무접두 주소를 직접 적으면 3xx가 생긴다).
 *
 * 문구는 이 파일이 갖고, **링크 이름은 이미 23개 언어로 있는 값**을 그대로 쓴다 — 안내 허브와
 * 소개 문서의 제목, 결과 화면 사전의 "홈".
 */

type NotFoundCopy = { eyebrow: string; title: string; description: string };

/**
 * **`Record<LocaleCode, …>`로 둔다.** 로케일이 하나 빠지면 그 언어 이용자만 영어를 보게 되고,
 * `Record<string, …>`이면 tsc가 아무 말도 하지 않는다(`scripts/verify-locale-maps.mjs`).
 */
const notFoundCopies: Record<LocaleCode, NotFoundCopy> = {
  ko: {
    eyebrow: "404",
    title: "페이지를 찾을 수 없습니다",
    description: "주소가 바뀌었거나 없는 페이지입니다. 아래에서 이어서 보실 수 있습니다.",
  },
  en: {
    eyebrow: "404",
    title: "We couldn't find that page",
    description: "The address may have changed or never existed. You can continue from here.",
  },
  ja: {
    eyebrow: "404",
    title: "ページが見つかりません",
    description: "アドレスが変わったか、存在しないページです。こちらから続けてご覧いただけます。",
  },
  zh: {
    eyebrow: "404",
    title: "找不到该页面",
    description: "网址可能已更改或不存在。您可以从下面继续浏览。",
  },
  de: {
    eyebrow: "404",
    title: "Diese Seite konnten wir nicht finden",
    description:
      "Die Adresse hat sich möglicherweise geändert oder existiert nicht. Hier geht es weiter.",
  },
  es: {
    eyebrow: "404",
    title: "No encontramos esa página",
    description:
      "Puede que la dirección haya cambiado o que no exista. Puedes continuar desde aquí.",
  },
  fr: {
    eyebrow: "404",
    title: "Nous n'avons pas trouvé cette page",
    description:
      "L'adresse a peut-être changé ou n'existe pas. Vous pouvez continuer à partir d'ici.",
  },
  it: {
    eyebrow: "404",
    title: "Non abbiamo trovato questa pagina",
    description:
      "L'indirizzo potrebbe essere cambiato o non esistere. Puoi continuare da qui.",
  },
  pt: {
    eyebrow: "404",
    title: "Não encontramos essa página",
    description:
      "O endereço pode ter mudado ou não existir. Você pode continuar a partir daqui.",
  },
  vi: {
    eyebrow: "404",
    title: "Không tìm thấy trang này",
    description: "Địa chỉ có thể đã thay đổi hoặc không tồn tại. Bạn có thể tiếp tục từ đây.",
  },
  th: {
    eyebrow: "404",
    title: "ไม่พบหน้านี้",
    description: "ที่อยู่อาจเปลี่ยนไปหรือไม่มีอยู่ คุณสามารถไปต่อได้จากด้านล่าง",
  },
  id: {
    eyebrow: "404",
    title: "Halaman itu tidak ditemukan",
    description: "Alamatnya mungkin berubah atau tidak ada. Anda bisa melanjutkan dari sini.",
  },
  ru: {
    eyebrow: "404",
    title: "Страница не найдена",
    description: "Адрес мог измениться или его не существует. Продолжить можно отсюда.",
  },
  ar: {
    eyebrow: "404",
    title: "لم نعثر على هذه الصفحة",
    description: "ربما تغيّر العنوان أو أنه غير موجود. يمكنك المتابعة من هنا.",
  },
  fil: {
    eyebrow: "404",
    title: "Hindi namin makita ang page na iyon",
    description:
      "Maaaring nagbago ang address o wala ito. Maaari kang magpatuloy mula rito.",
  },
  uz: {
    eyebrow: "404",
    title: "Bu sahifani topa olmadik",
    description: "Manzil o'zgargan yoki mavjud emas. Bu yerdan davom ettirishingiz mumkin.",
  },
  mn: {
    eyebrow: "404",
    title: "Энэ хуудсыг олсонгүй",
    description: "Хаяг өөрчлөгдсөн эсвэл байхгүй байна. Та эндээс үргэлжлүүлж болно.",
  },
  hi: {
    eyebrow: "404",
    title: "यह पेज नहीं मिला",
    description: "पता बदल गया हो सकता है या मौजूद नहीं है। आप यहाँ से आगे बढ़ सकते हैं।",
  },
  tr: {
    eyebrow: "404",
    title: "Bu sayfayı bulamadık",
    description: "Adres değişmiş ya da hiç var olmamış olabilir. Buradan devam edebilirsiniz.",
  },
  km: {
    eyebrow: "404",
    title: "រកមិនឃើញទំព័រនេះទេ",
    description: "អាសយដ្ឋានប្រហែលបានផ្លាស់ប្តូរ ឬមិនមាន។ អ្នកអាចបន្តពីទីនេះបាន។",
  },
  ms: {
    eyebrow: "404",
    title: "Kami tidak menemui halaman itu",
    description: "Alamat mungkin telah berubah atau tidak wujud. Anda boleh teruskan dari sini.",
  },
  kk: {
    eyebrow: "404",
    title: "Бұл бетті таба алмадық",
    description: "Мекенжай өзгерген болуы мүмкін немесе жоқ. Осы жерден жалғастыра аласыз.",
  },
  pl: {
    eyebrow: "404",
    title: "Nie znaleźliśmy tej strony",
    description: "Adres mógł się zmienić lub nie istnieje. Możesz kontynuować stąd.",
  },
};

/**
 * **색인하지 않는다.** 제목은 루트 레이아웃의 기본값을 그대로 쓴다 — 404는 검색 결과에 나오지
 * 않는 화면이라 로케일별 제목을 따로 둘 이유가 없다.
 */
export const metadata: Metadata = { robots: noIndex };

export default async function NotFound() {
  const locale = await getRequestLocale();
  const copy = isLocaleCode(locale) ? notFoundCopies[locale] : notFoundCopies.en;
  const guide = getDocPage(locale, "guide");
  const about = getDocPage(locale, "about");
  const result = getResultCopy(locale);

  const links = [
    { href: localePath("/guide", locale), label: guide.title, hint: guide.summary },
    { href: localePath("/about", locale), label: about.title, hint: about.summary },
  ];

  return (
    <GuideShell
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      backHref={localePath("/", locale)}
      backLabel={result.home}
    >
      <nav className="grid gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group grid gap-1 rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-foreground"
          >
            <p className="flex items-center gap-2 text-lg font-semibold">
              {link.label}
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="shrink-0 transition group-hover:translate-x-0.5"
              />
            </p>
            <p className="text-sm leading-7 text-muted">{link.hint}</p>
          </Link>
        ))}
      </nav>
    </GuideShell>
  );
}
