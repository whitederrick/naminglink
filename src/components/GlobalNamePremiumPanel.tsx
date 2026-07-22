"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { FileText, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// GLOBAL_TO_KOREAN 결과 페이지의 글로벌 프리미엄 3장 PDF(US$9.99) 체크아웃 패널.
// 결제는 포트원 페이팔 SPB(loadPaymentUI, 페이지 내 버튼 렌더)라 리디렉션 복구가 필요 없다.
// 채널 키 env가 없으면 버튼이 "준비 중"으로 남는 다크 런치 상태를 유지한다.

type PremiumCopy = {
  title: string;
  desc: string;
  select: string;
  buy: string;
  paying: string;
  generating: string;
  download: string;
  resume: string;
  failed: string;
  preparing: string;
};

const premiumCopies: Record<string, PremiumCopy> = {
  ko: {
    title: "프리미엄 한글 이름 리포트 (PDF)",
    desc: "선택한 이름 하나를 붓글씨 표지·의미와 이유·사주 오행 참고의 3장 PDF로 만들어 드립니다. 결제 후 24시간 동안 내려받을 수 있습니다.",
    select: "이름 선택",
    buy: "리포트 구매 · US$9.99",
    paying: "결제 진행 중…",
    generating: "리포트 생성 중… (약 1분)",
    download: "PDF 다운로드",
    resume: "이전 구매 이어받기",
    failed: "처리에 실패했습니다. 다시 시도해 주세요.",
    preparing: "결제 기능 준비 중입니다.",
  },
  en: {
    title: "Premium Korean Name Report (PDF)",
    desc: "Your chosen name as a 3-page keepsake: brush-style name art, meaning & story, and a five-element reading. Downloadable for 24 hours after purchase.",
    select: "Choose a name",
    buy: "Buy the report · US$9.99",
    paying: "Processing payment…",
    generating: "Creating your report… (about a minute)",
    download: "Download PDF",
    resume: "Resume previous purchase",
    failed: "Something went wrong. Please try again.",
    preparing: "Payment is coming soon.",
  },
  vi: {
    title: "Báo cáo tên tiếng Hàn cao cấp (PDF)",
    desc: "Tên bạn chọn trong 3 trang lưu niệm: thư pháp tên, ý nghĩa và câu chuyện, cùng phân tích ngũ hành. Tải xuống trong 24 giờ sau khi mua.",
    select: "Chọn tên",
    buy: "Mua báo cáo · US$9.99",
    paying: "Đang xử lý thanh toán…",
    generating: "Đang tạo báo cáo… (khoảng 1 phút)",
    download: "Tải PDF",
    resume: "Tiếp tục giao dịch trước",
    failed: "Đã xảy ra lỗi. Vui lòng thử lại.",
    preparing: "Tính năng thanh toán sắp ra mắt.",
  },
  th: {
    title: "รายงานชื่อเกาหลีพรีเมียม (PDF)",
    desc: "ชื่อที่คุณเลือกใน 3 หน้าที่ระลึก: ชื่อลายพู่กัน ความหมายและเรื่องราว พร้อมการวิเคราะห์ธาตุทั้งห้า ดาวน์โหลดได้ 24 ชั่วโมงหลังชำระเงิน",
    select: "เลือกชื่อ",
    buy: "ซื้อรายงาน · US$9.99",
    paying: "กำลังดำเนินการชำระเงิน…",
    generating: "กำลังสร้างรายงาน… (ประมาณ 1 นาที)",
    download: "ดาวน์โหลด PDF",
    resume: "ดำเนินการซื้อก่อนหน้าต่อ",
    failed: "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง",
    preparing: "ฟีเจอร์การชำระเงินกำลังจะเปิดเร็ว ๆ นี้",
  },
  ja: {
    title: "プレミアム韓国語名前レポート (PDF)",
    desc: "選んだ名前を3ページの記念レポートに: 筆文字の名前アート、意味とストーリー、五行の参考分析。購入後24時間ダウンロードできます。",
    select: "名前を選択",
    buy: "レポートを購入 · US$9.99",
    paying: "決済処理中…",
    generating: "レポートを作成中…（約1分）",
    download: "PDFをダウンロード",
    resume: "前回の購入を再開",
    failed: "処理に失敗しました。もう一度お試しください。",
    preparing: "決済機能は準備中です。",
  },
  zh: {
    title: "高级韩文名字报告 (PDF)",
    desc: "将您选择的名字制成 3 页纪念报告：毛笔字名字艺术、含义与故事，以及五行参考分析。付款后 24 小时内可下载。",
    select: "选择名字",
    buy: "购买报告 · US$9.99",
    paying: "正在处理付款…",
    generating: "正在生成报告…（约 1 分钟）",
    download: "下载 PDF",
    resume: "继续上次购买",
    failed: "处理失败，请重试。",
    preparing: "支付功能即将上线。",
  },
  id: {
    title: "Laporan Nama Korea Premium (PDF)",
    desc: "Nama pilihan Anda dalam 3 halaman kenang-kenangan: seni nama gaya kuas, makna dan kisah, serta analisis lima elemen. Dapat diunduh 24 jam setelah pembelian.",
    select: "Pilih nama",
    buy: "Beli laporan · US$9.99",
    paying: "Memproses pembayaran…",
    generating: "Membuat laporan… (sekitar 1 menit)",
    download: "Unduh PDF",
    resume: "Lanjutkan pembelian sebelumnya",
    failed: "Terjadi kesalahan. Silakan coba lagi.",
    preparing: "Fitur pembayaran segera hadir.",
  },
  de: {
    title: "Premium-Bericht zum koreanischen Namen (PDF)",
    desc: "Ihr gewählter Name als 3-seitiges Andenken: Name in Pinselschrift, Bedeutung & Geschichte und eine Fünf-Elemente-Analyse. 24 Stunden nach dem Kauf herunterladbar.",
    select: "Name wählen",
    buy: "Bericht kaufen · US$9.99",
    paying: "Zahlung wird verarbeitet…",
    generating: "Bericht wird erstellt… (ca. 1 Minute)",
    download: "PDF herunterladen",
    resume: "Vorherigen Kauf fortsetzen",
    failed: "Es ist ein Fehler aufgetreten. Bitte erneut versuchen.",
    preparing: "Die Zahlungsfunktion ist in Vorbereitung.",
  },
  es: {
    title: "Informe premium de tu nombre coreano (PDF)",
    desc: "Tu nombre elegido en 3 páginas de recuerdo: caligrafía a pincel, significado e historia, y una lectura de los cinco elementos. Descargable durante 24 horas tras la compra.",
    select: "Elige un nombre",
    buy: "Comprar el informe · US$9.99",
    paying: "Procesando el pago…",
    generating: "Creando tu informe… (aprox. 1 minuto)",
    download: "Descargar PDF",
    resume: "Continuar compra anterior",
    failed: "Algo salió mal. Inténtalo de nuevo.",
    preparing: "El pago estará disponible próximamente.",
  },
  fr: {
    title: "Rapport premium de votre nom coréen (PDF)",
    desc: "Votre nom choisi en 3 pages souvenir : calligraphie au pinceau, signification et histoire, et une lecture des cinq éléments. Téléchargeable pendant 24 h après l'achat.",
    select: "Choisir un nom",
    buy: "Acheter le rapport · US$9.99",
    paying: "Paiement en cours…",
    generating: "Création du rapport… (environ 1 minute)",
    download: "Télécharger le PDF",
    resume: "Reprendre l'achat précédent",
    failed: "Une erreur est survenue. Veuillez réessayer.",
    preparing: "Le paiement sera bientôt disponible.",
  },
  it: {
    title: "Report premium del tuo nome coreano (PDF)",
    desc: "Il nome scelto in 3 pagine ricordo: calligrafia a pennello, significato e storia, e una lettura dei cinque elementi. Scaricabile per 24 ore dopo l'acquisto.",
    select: "Scegli un nome",
    buy: "Acquista il report · US$9.99",
    paying: "Pagamento in corso…",
    generating: "Creazione del report… (circa 1 minuto)",
    download: "Scarica il PDF",
    resume: "Riprendi l'acquisto precedente",
    failed: "Si è verificato un errore. Riprova.",
    preparing: "Il pagamento sarà presto disponibile.",
  },
  pt: {
    title: "Relatório premium do seu nome coreano (PDF)",
    desc: "Seu nome escolhido em 3 páginas de lembrança: caligrafia a pincel, significado e história, e uma leitura dos cinco elementos. Disponível para download por 24 horas após a compra.",
    select: "Escolha um nome",
    buy: "Comprar o relatório · US$9.99",
    paying: "Processando o pagamento…",
    generating: "Criando seu relatório… (cerca de 1 minuto)",
    download: "Baixar PDF",
    resume: "Retomar compra anterior",
    failed: "Algo deu errado. Tente novamente.",
    preparing: "O pagamento estará disponível em breve.",
  },
  ru: {
    title: "Премиум-отчёт о корейском имени (PDF)",
    desc: "Выбранное имя в виде 3-страничного памятного отчёта: имя кистью, значение и история, а также анализ пяти элементов. Доступен для скачивания 24 часа после покупки.",
    select: "Выберите имя",
    buy: "Купить отчёт · US$9.99",
    paying: "Обработка платежа…",
    generating: "Создаём отчёт… (около 1 минуты)",
    download: "Скачать PDF",
    resume: "Продолжить предыдущую покупку",
    failed: "Произошла ошибка. Попробуйте ещё раз.",
    preparing: "Оплата скоро появится.",
  },
  ar: {
    title: "تقرير مميز لاسمك الكوري (PDF)",
    desc: "اسمك المختار في 3 صفحات تذكارية: فن الاسم بخط الفرشاة، المعنى والقصة، وقراءة العناصر الخمسة. يمكن تنزيله خلال 24 ساعة بعد الشراء.",
    select: "اختر اسمًا",
    buy: "شراء التقرير · US$9.99",
    paying: "جارٍ معالجة الدفع…",
    generating: "جارٍ إنشاء التقرير… (حوالي دقيقة)",
    download: "تنزيل PDF",
    resume: "متابعة الشراء السابق",
    failed: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    preparing: "الدفع متاح قريبًا.",
  },
  tr: {
    title: "Premium Korece İsim Raporu (PDF)",
    desc: "Seçtiğiniz isim 3 sayfalık bir hatıra olarak: fırça yazısıyla isim sanatı, anlam ve hikâye, beş element analizi. Satın alımdan sonra 24 saat indirilebilir.",
    select: "Bir isim seçin",
    buy: "Raporu satın al · US$9.99",
    paying: "Ödeme işleniyor…",
    generating: "Raporunuz oluşturuluyor… (yaklaşık 1 dakika)",
    download: "PDF indir",
    resume: "Önceki satın alımına devam et",
    failed: "Bir hata oluştu. Lütfen tekrar deneyin.",
    preparing: "Ödeme yakında kullanılabilir olacak.",
  },
  fil: {
    title: "Premium na Ulat ng Koreanong Pangalan (PDF)",
    desc: "Ang napili mong pangalan sa 3 pahinang alaala: brush-style na sining ng pangalan, kahulugan at kuwento, at pagbasa ng limang elemento. Maida-download sa loob ng 24 oras pagkatapos bumili.",
    select: "Pumili ng pangalan",
    buy: "Bilhin ang ulat · US$9.99",
    paying: "Pinoproseso ang bayad…",
    generating: "Ginagawa ang ulat… (mga 1 minuto)",
    download: "I-download ang PDF",
    resume: "Ipagpatuloy ang naunang pagbili",
    failed: "Nagkaproblema. Pakisubukang muli.",
    preparing: "Malapit nang magbukas ang pagbabayad.",
  },
  uz: {
    title: "Premium koreys ismi hisoboti (PDF)",
    desc: "Tanlagan ismingiz 3 sahifalik esdalik sifatida: mo‘yqalam uslubidagi ism san’ati, ma’no va hikoya, besh unsur tahlili. Xariddan keyin 24 soat davomida yuklab olish mumkin.",
    select: "Ism tanlang",
    buy: "Hisobotni sotib olish · US$9.99",
    paying: "To‘lov amalga oshirilmoqda…",
    generating: "Hisobot tayyorlanmoqda… (taxminan 1 daqiqa)",
    download: "PDF yuklab olish",
    resume: "Avvalgi xaridni davom ettirish",
    failed: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
    preparing: "To‘lov tez orada ishga tushadi.",
  },
  mn: {
    title: "Премиум солонгос нэрийн тайлан (PDF)",
    desc: "Сонгосон нэрийг 3 хуудас дурсгалын тайлан болгоно: бийрийн бичгийн нэрийн урлаг, утга ба түүх, таван махбодын шинжилгээ. Худалдан авснаас хойш 24 цагийн дотор татаж авна.",
    select: "Нэр сонгох",
    buy: "Тайлан худалдан авах · US$9.99",
    paying: "Төлбөр боловсруулж байна…",
    generating: "Тайлан бэлтгэж байна… (1 минут орчим)",
    download: "PDF татах",
    resume: "Өмнөх худалдан авалтыг үргэлжлүүлэх",
    failed: "Алдаа гарлаа. Дахин оролдоно уу.",
    preparing: "Төлбөрийн функц тун удахгүй нээгдэнэ.",
  },
  hi: {
    title: "प्रीमियम कोरियाई नाम रिपोर्ट (PDF)",
    desc: "आपका चुना नाम 3 पन्नों की यादगार रिपोर्ट में: ब्रश शैली का नाम आर्ट, अर्थ और कहानी, और पाँच तत्वों का विश्लेषण। खरीद के बाद 24 घंटे तक डाउनलोड करें।",
    select: "नाम चुनें",
    buy: "रिपोर्ट खरीदें · US$9.99",
    paying: "भुगतान प्रोसेस हो रहा है…",
    generating: "रिपोर्ट बन रही है… (लगभग 1 मिनट)",
    download: "PDF डाउनलोड करें",
    resume: "पिछली खरीद जारी रखें",
    failed: "कुछ गलत हुआ। कृपया फिर से कोशिश करें।",
    preparing: "भुगतान सुविधा जल्द आ रही है।",
  },
  km: {
    title: "របាយការណ៍ឈ្មោះកូរ៉េពិសេស (PDF)",
    desc: "ឈ្មោះដែលអ្នកជ្រើសរើសក្នុងទំព័រអនុស្សាវរីយ៍ 3 ទំព័រ៖ សិល្បៈឈ្មោះបែបជក់ អត្ថន័យនិងរឿងរ៉ាវ និងការវិភាគធាតុទាំងប្រាំ។ ទាញយកបានក្នុងរយៈពេល 24 ម៉ោងបន្ទាប់ពីទិញ។",
    select: "ជ្រើសរើសឈ្មោះ",
    buy: "ទិញរបាយការណ៍ · US$9.99",
    paying: "កំពុងដំណើរការទូទាត់…",
    generating: "កំពុងបង្កើតរបាយការណ៍… (ប្រហែល 1 នាទី)",
    download: "ទាញយក PDF",
    resume: "បន្តការទិញមុន",
    failed: "មានបញ្ហាកើតឡើង។ សូមព្យាយាមម្តងទៀត។",
    preparing: "មុខងារទូទាត់នឹងមកដល់ឆាប់ៗនេះ។",
  },
  kk: {
    title: "Премиум корей есімі есебі (PDF)",
    desc: "Таңдаған есіміңіз 3 беттік естелік есеп ретінде: қылқаламмен жазылған есім өнері, мағынасы мен тарихы және бес элемент талдауы. Сатып алғаннан кейін 24 сағат ішінде жүктеп алуға болады.",
    select: "Есім таңдаңыз",
    buy: "Есепті сатып алу · US$9.99",
    paying: "Төлем өңделуде…",
    generating: "Есеп дайындалуда… (шамамен 1 минут)",
    download: "PDF жүктеп алу",
    resume: "Алдыңғы сатып алуды жалғастыру",
    failed: "Қате пайда болды. Қайталап көріңіз.",
    preparing: "Төлем мүмкіндігі жақында қосылады.",
  },
  ms: {
    title: "Laporan Nama Korea Premium (PDF)",
    desc: "Nama pilihan anda dalam 3 halaman kenangan: seni nama gaya berus, makna dan kisah, serta analisis lima elemen. Boleh dimuat turun selama 24 jam selepas pembelian.",
    select: "Pilih nama",
    buy: "Beli laporan · US$9.99",
    paying: "Memproses pembayaran…",
    generating: "Menyediakan laporan… (kira-kira 1 minit)",
    download: "Muat turun PDF",
    resume: "Sambung pembelian sebelumnya",
    failed: "Berlaku ralat. Sila cuba lagi.",
    preparing: "Fungsi pembayaran akan datang tidak lama lagi.",
  },
  pl: {
    title: "Raport premium o koreańskim imieniu (PDF)",
    desc: "Wybrane imię w 3-stronicowym pamiątkowym raporcie: imię pędzlem, znaczenie i historia oraz analiza pięciu żywiołów. Do pobrania przez 24 godziny po zakupie.",
    select: "Wybierz imię",
    buy: "Kup raport · US$9.99",
    paying: "Przetwarzanie płatności…",
    generating: "Tworzenie raportu… (około 1 minuty)",
    download: "Pobierz PDF",
    resume: "Wznów poprzedni zakup",
    failed: "Coś poszło nie tak. Spróbuj ponownie.",
    preparing: "Płatności będą dostępne wkrótce.",
  },
};

type PremiumCandidate = {
  hangul: string;
  pronunciation?: string;
  meaning?: string;
  recommendation_reason?: string;
  cultural_fit?: string;
  usage_note?: string;
};

type StoredPremiumCheckout = {
  sessionId: string;
  paymentId: string;
  orderId: string;
  accessToken: string;
  hangul: string;
  paid?: boolean;
  savedAt: number;
};

const CHECKOUT_STORAGE_KEY = "nl_global_premium_checkout";
const CHECKOUT_TTL_MS = 24 * 60 * 60 * 1000;

function readStoredCheckout(): StoredPremiumCheckout | null {
  try {
    const raw = localStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredPremiumCheckout;
    if (!parsed?.sessionId || !parsed.accessToken || !parsed.savedAt) return null;
    if (Date.now() - parsed.savedAt > CHECKOUT_TTL_MS) {
      localStorage.removeItem(CHECKOUT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function makeStoredCheckout(
  base: Omit<StoredPremiumCheckout, "savedAt">,
): StoredPremiumCheckout {
  return { ...base, savedAt: Date.now() };
}

async function postJson(url: string, body: Record<string, unknown>) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json().catch(() => null)) as
    | ({ ok?: boolean; error?: string } & Record<string, unknown>)
    | null;
  return { response, data };
}

export function GlobalNamePremiumPanel({
  candidates,
  revealedCount,
  inputFactors,
  locale,
}: {
  candidates: PremiumCandidate[];
  revealedCount: number;
  inputFactors: Record<string, unknown> | null | undefined;
  locale?: string;
}) {
  const copy = premiumCopies[locale ?? "en"] ?? premiumCopies.en;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [stage, setStage] = useState<
    "idle" | "ordering" | "paying" | "confirming" | "generating" | "ready"
  >("idle");
  const [error, setError] = useState("");
  const [checkout, setCheckout] = useState<StoredPremiumCheckout | null>(null);
  const [resumable, setResumable] = useState<StoredPremiumCheckout | null>(null);
  const [paypalRequest, setPaypalRequest] = useState<Record<string, unknown> | null>(null);

  const configured = Boolean(
    process.env.NEXT_PUBLIC_PORTONE_STORE_ID &&
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL,
  );
  // 결제 완료 표시가 있는 저장 체크아웃만 이어받기 대상으로 노출한다.
  useEffect(() => {
    void Promise.resolve().then(() => {
      const stored = readStoredCheckout();
      if (stored?.paid) setResumable(stored);
    });
  }, []);

  const selectable = candidates.slice(0, Math.max(1, revealedCount));

  function persistCheckout(next: StoredPremiumCheckout) {
    setCheckout(next);
    try {
      localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // 저장 실패 시에도 현재 세션 안에서는 상태로 진행 가능하다.
    }
  }

  // 결제 완료 이후 확인→생성→PDF 준비까지 이어서 진행한다(재시도 겸용, 멱등).
  async function finishReport(target: StoredPremiumCheckout) {
    setStage("confirming");
    const confirm = await postJson("/api/premium-reports/confirm", {
      sessionId: target.sessionId,
      paymentId: target.paymentId,
      accessToken: target.accessToken,
    });
    if (!confirm.response.ok || !confirm.data?.ok) {
      throw new Error(confirm.data?.error || copy.failed);
    }
    setStage("generating");
    const deadline = Date.now() + 120_000;
    let ready = false;
    while (Date.now() < deadline) {
      const generate = await postJson(`/api/premium-reports/${target.sessionId}/generate`, {
        accessToken: target.accessToken,
      });
      if (generate.data?.status === "READY") {
        ready = true;
        break;
      }
      if (!generate.response.ok || !generate.data?.ok) {
        throw new Error(generate.data?.error || copy.failed);
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    if (!ready) throw new Error(copy.failed);
    const pdf = await postJson(`/api/premium-reports/${target.sessionId}/pdf`, {
      accessToken: target.accessToken,
    });
    if (!pdf.response.ok || !pdf.data?.ok) {
      throw new Error(pdf.data?.error || copy.failed);
    }
    setStage("ready");
  }

  async function startPurchase() {
    if (stage !== "idle" || !inputFactors) return;
    setError("");
    setStage("ordering");
    try {
      const candidate = selectable[selectedIndex] ?? selectable[0];
      const order = await postJson("/api/premium-reports/global-order", {
        inputFactors,
        candidate,
        locale,
      });
      if (!order.response.ok || !order.data?.ok || !order.data.checkout) {
        throw new Error(order.data?.error || copy.failed);
      }
      const orderCheckout = order.data.checkout as Record<string, unknown> & {
        sessionId: string;
        orderId: string;
        paymentId: string;
        accessToken: string;
      };
      const stored = makeStoredCheckout({
        sessionId: orderCheckout.sessionId,
        orderId: orderCheckout.orderId,
        paymentId: orderCheckout.paymentId,
        accessToken: orderCheckout.accessToken,
        hangul: candidate.hangul,
      });
      persistCheckout(stored);
      setStage("paying");
      setPaypalRequest(orderCheckout);
    } catch (caught) {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.failed);
    }
  }

  // 페이팔 SPB 버튼 렌더: paying 단계에서 컨테이너가 그려진 뒤 SDK를 호출한다.
  useEffect(() => {
    if (stage !== "paying" || !paypalRequest || !checkout) return;
    const request = paypalRequest;
    const target = checkout;
    void PortOne.loadPaymentUI(
      {
        uiType: "PAYPAL_SPB",
        storeId: String(request.storeId),
        channelKey: String(request.channelKey),
        paymentId: String(request.paymentId),
        orderName: String(request.orderName),
        totalAmount: Number(request.totalAmount),
        currency: String(request.currency) as "USD",
      },
      {
        onPaymentSuccess: () => {
          const paid = { ...target, paid: true };
          persistCheckout(paid);
          setPaypalRequest(null);
          void finishReport(paid).catch((caught) => {
            setStage("idle");
            setResumable(paid);
            setError(caught instanceof Error ? caught.message : copy.failed);
          });
        },
        onPaymentFail: (paymentError) => {
          setPaypalRequest(null);
          setStage("idle");
          setError(paymentError.message || copy.failed);
        },
      },
    ).catch((caught) => {
      setPaypalRequest(null);
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.failed);
    });
    // SPB 렌더는 결제 시도 단위로 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, paypalRequest]);

  async function resumePurchase() {
    if (!resumable || stage !== "idle") return;
    setError("");
    setCheckout(resumable);
    try {
      await finishReport(resumable);
    } catch (caught) {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.failed);
    }
  }

  async function downloadPdf() {
    const target = checkout ?? resumable;
    if (!target) return;
    setError("");
    try {
      const download = await postJson(`/api/premium-reports/${target.sessionId}/download`, {
        accessToken: target.accessToken,
      });
      const signedUrl = download.data?.signedUrl;
      if (!download.response.ok || !download.data?.ok || typeof signedUrl !== "string") {
        throw new Error(download.data?.error || copy.failed);
      }
      window.location.href = signedUrl;
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : copy.failed);
    }
  }

  if (!inputFactors || selectable.length === 0) return null;

  const busy = stage !== "idle" && stage !== "ready";
  const busyLabel =
    stage === "generating" || stage === "confirming" ? copy.generating : copy.paying;

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Sparkles aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">{copy.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{copy.desc}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="grid gap-1 text-sm">
          <span className="text-xs font-medium text-muted">{copy.select}</span>
          <select
            value={selectedIndex}
            onChange={(event) => setSelectedIndex(Number(event.target.value))}
            disabled={busy || stage === "ready"}
            className="h-11 rounded-lg border border-line bg-background px-3 text-sm"
          >
            {selectable.map((candidate, index) => (
              <option key={`${candidate.hangul}-${index}`} value={index}>
                {candidate.hangul}
                {candidate.pronunciation ? ` · ${candidate.pronunciation}` : ""}
              </option>
            ))}
          </select>
        </label>
        {stage === "ready" ? (
          <button
            type="button"
            onClick={downloadPdf}
            className="inline-flex h-11 items-center justify-center gap-2 self-end rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal"
          >
            <FileText aria-hidden="true" size={17} />
            {copy.download}
          </button>
        ) : configured ? (
          <button
            type="button"
            onClick={startPurchase}
            disabled={busy}
            className="inline-flex h-11 items-center justify-center gap-2 self-end rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FileText aria-hidden="true" size={17} />
            {busy ? busyLabel : copy.buy}
          </button>
        ) : (
          <button
            type="button"
            disabled
            title={copy.preparing}
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 self-end rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
          >
            <FileText aria-hidden="true" size={17} />
            {copy.buy}
          </button>
        )}
      </div>

      {stage === "paying" ? <div className="portone-ui-container mt-4" /> : null}
      {resumable && stage === "idle" ? (
        <button
          type="button"
          onClick={resumePurchase}
          className="mt-3 text-sm font-medium text-brand-teal underline underline-offset-4"
        >
          {copy.resume} · {resumable.hangul}
        </button>
      ) : null}
      {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}
    </section>
  );
}
