import { supportedLocales, type Locale } from "@/lib/services";

// **PDF가 화면과 다른 언어로 나가는 경우의 결제 전 고지.**
//
// 지금 그런 로케일은 아랍어·크메르어뿐이다 — 그 두 문자 체계는 문단을 렌더하면 라이브러리가
// 죽거나 글자를 뒤엉키게 놓아서 PDF를 영어로 낸다(`@/lib/pdf/pdf-language`에 사연이 있다).
// 사고 나서 알면 늦는 조건이라 구매 화면에서 미리 알린다.
//
// 문구는 인연링크의 같은 고지(`i18n-locales/*.ts`의 `pdfLanguageNotice`)와 **같은 문장**이다.
// 두 서비스가 같은 제약을 같은 말로 알려야 하고, 이미 23로케일로 번역돼 있었다.
//
// `Record`(부분이 아님)라 로케일을 추가하면 여기서 컴파일이 깨진다. 결제 전 고지는 한 언어라도
// 비면 그 언어 구매자에게 알리지 않은 것이 된다.
const NOTICES: Record<Locale, string> = {
  ko: "PDF 문서는 화면과 같은 언어로 나갑니다.",
  en: "The PDF is produced in the same language as this screen.",
  ja: "PDFはこの画面と同じ言語で作成されます。",
  zh: "PDF 文档以与本画面相同的语言生成。",
  de: "Das PDF wird in derselben Sprache wie dieser Bildschirm erstellt.",
  es: "El PDF se genera en el mismo idioma que esta pantalla.",
  fr: "Le PDF est produit dans la même langue que cet écran.",
  it: "Il PDF viene prodotto nella stessa lingua di questa schermata.",
  pt: "O PDF é gerado no mesmo idioma desta tela.",
  vi: "Tệp PDF được tạo bằng cùng ngôn ngữ với màn hình này.",
  th: "ไฟล์ PDF จัดทำในภาษาเดียวกับหน้าจอนี้",
  id: "PDF dibuat dalam bahasa yang sama dengan layar ini.",
  ru: "PDF создаётся на том же языке, что и этот экран.",
  ar: "يصدر ملف PDF باللغة الإنجليزية. فالخط العربي لا يُرسم في هذا الملف حاليًا، ولو أصدرناه بالعربية لتعذّر إنشاؤه أصلًا. أما هذه الشاشة فتبقى بالعربية.",
  fil: "Ang PDF ay ginagawa sa parehong wika ng screen na ito.",
  uz: "PDF shu ekran bilan bir xil tilda tayyorlanadi.",
  mn: "PDF энэ дэлгэцтэй ижил хэлээр үүсдэг.",
  hi: "PDF इसी स्क्रीन की भाषा में बनाई जाती है।",
  tr: "PDF, bu ekranla aynı dilde oluşturulur.",
  km: "ឯកសារ PDF ចេញជាភាសាអង់គ្លេស។ អក្សរខ្មែរមិនទាន់អាចបង្ហាញក្នុងឯកសារនេះបានទេ ហើយបើចេញជាខ្មែរ ឯកសារនឹងមិនអាចបង្កើតបានឡើយ។ រីឯអេក្រង់នេះនៅតែជាភាសាខ្មែរដដែល។",
  ms: "PDF dihasilkan dalam bahasa yang sama dengan skrin ini.",
  kk: "PDF осы экранмен бір тілде дайындалады.",
  pl: "PDF jest tworzony w tym samym języku co ten ekran.",
};

function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value) && (supportedLocales as readonly string[]).includes(value as string);
}

export function getPdfLanguageNotice(locale: string | null | undefined): string {
  return isLocale(locale) ? NOTICES[locale] : NOTICES.en;
}
