import type { LocaleCode } from "@/lib/locale-codes";

/**
 * 404 화면의 문구. **화면이 둘이라 값은 하나여야 한다** (2026-08-18).
 *
 * 루트 레이아웃을 로케일 갈래와 한국어 갈래로 나누면서 `not-found`도 둘이 됐다. 문구를 각
 * 화면이 갖고 있으면 언젠가 한쪽만 고쳐진다.
 */
type NotFoundCopy = { eyebrow: string; title: string; description: string };

/**
 * **`Record<LocaleCode, …>`로 둔다.** 로케일이 하나 빠지면 그 언어 이용자만 영어를 보게 되고,
 * `Record<string, …>`이면 tsc가 아무 말도 하지 않는다(`scripts/verify-locale-maps.mjs`).
 */
export const notFoundCopies: Record<LocaleCode, NotFoundCopy> = {
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

