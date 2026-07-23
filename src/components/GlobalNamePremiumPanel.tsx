"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { FileText, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

function hasAdminRole(appMetadata: unknown) {
  if (!appMetadata || typeof appMetadata !== "object") return false;
  const meta = appMetadata as { role?: unknown; roles?: unknown };
  const isAdmin = (value: unknown) => value === "admin" || value === "super_admin";
  return isAdmin(meta.role) || (Array.isArray(meta.roles) && meta.roles.some(isAdmin));
}

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
  artTitle: string;
  artDesc: string;
  artBuy: string;
};

const premiumCopies: Record<string, PremiumCopy> = {
  ko: {
    title: "프리미엄 한글 이름 리포트 (PDF)",
    desc: "선택한 이름 하나를 붓글씨·손글씨 서체 2종 표지와 의미·이유, 사주 오행 참고까지 4장 PDF로 만들어 드립니다. 결제 후 24시간 동안 내려받을 수 있습니다.",
    select: "이름 선택",
    buy: "리포트 구매 · US$9.99",
    paying: "결제 진행 중…",
    generating: "리포트 생성 중… (약 1분)",
    download: "PDF 다운로드",
    resume: "이전 구매 이어받기",
    failed: "처리에 실패했습니다. 다시 시도해 주세요.",
    preparing: "결제 기능 준비 중입니다.",
    artTitle: "한글 표기 아트 (PDF)",
    artDesc: "이름의 한글 표기를 붓글씨·손글씨 두 서체 아트 2장과 발음 안내 1장, 총 3장 PDF로 만들어 드립니다. 결제 후 24시간 다운로드.",
    artBuy: "아트 PDF 구매 · US$2.99",
  },
  en: {
    title: "Premium Korean Name Report (PDF)",
    desc: "Your chosen name as a 4-page keepsake: name art in two calligraphy styles, meaning & story, and a five-element reading. Downloadable for 24 hours after purchase.",
    select: "Choose a name",
    buy: "Buy the report · US$9.99",
    paying: "Processing payment…",
    generating: "Creating your report… (about a minute)",
    download: "Download PDF",
    resume: "Resume previous purchase",
    failed: "Something went wrong. Please try again.",
    preparing: "Payment is coming soon.",
    artTitle: "Hangul Name Art (PDF)",
    artDesc: "Your name's Hangul spelling in two calligraphy styles plus a pronunciation guide — a 3-page PDF, downloadable for 24 hours after purchase.",
    artBuy: "Buy the art PDF · US$2.99",
  },
  vi: {
    title: "Báo cáo tên tiếng Hàn cao cấp (PDF)",
    desc: "Tên bạn chọn trong 4 trang lưu niệm: nghệ thuật tên với 2 kiểu thư pháp, ý nghĩa và câu chuyện, cùng phân tích ngũ hành. Tải xuống trong 24 giờ sau khi mua.",
    select: "Chọn tên",
    buy: "Mua báo cáo · US$9.99",
    paying: "Đang xử lý thanh toán…",
    generating: "Đang tạo báo cáo… (khoảng 1 phút)",
    download: "Tải PDF",
    resume: "Tiếp tục giao dịch trước",
    failed: "Đã xảy ra lỗi. Vui lòng thử lại.",
    preparing: "Tính năng thanh toán sắp ra mắt.",
    artTitle: "Nghệ thuật tên Hangul (PDF)",
    artDesc: "Cách viết Hangul của tên bạn trong 2 kiểu thư pháp kèm hướng dẫn phát âm — PDF 3 trang, tải xuống trong 24 giờ sau khi mua.",
    artBuy: "Mua PDF nghệ thuật · US$2.99",
  },
  th: {
    title: "รายงานชื่อเกาหลีพรีเมียม (PDF)",
    desc: "ชื่อที่คุณเลือกใน 4 หน้าที่ระลึก: ศิลปะชื่อ 2 สไตล์ลายมือ ความหมายและเรื่องราว พร้อมการวิเคราะห์ธาตุทั้งห้า ดาวน์โหลดได้ 24 ชั่วโมงหลังชำระเงิน",
    select: "เลือกชื่อ",
    buy: "ซื้อรายงาน · US$9.99",
    paying: "กำลังดำเนินการชำระเงิน…",
    generating: "กำลังสร้างรายงาน… (ประมาณ 1 นาที)",
    download: "ดาวน์โหลด PDF",
    resume: "ดำเนินการซื้อก่อนหน้าต่อ",
    failed: "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง",
    preparing: "ฟีเจอร์การชำระเงินกำลังจะเปิดเร็ว ๆ นี้",
    artTitle: "ศิลปะชื่อฮันกึล (PDF)",
    artDesc: "การเขียนชื่อของคุณเป็นฮันกึลใน 2 สไตล์ลายมือ พร้อมคู่มือการออกเสียง — PDF 3 หน้า ดาวน์โหลดได้ 24 ชั่วโมงหลังซื้อ",
    artBuy: "ซื้อ PDF ศิลปะ · US$2.99",
  },
  ja: {
    title: "プレミアム韓国語名前レポート (PDF)",
    desc: "選んだ名前を4ページの記念レポートに: 2種の書体による名前アート、意味とストーリー、五行の参考分析。購入後24時間ダウンロードできます。",
    select: "名前を選択",
    buy: "レポートを購入 · US$9.99",
    paying: "決済処理中…",
    generating: "レポートを作成中…（約1分）",
    download: "PDFをダウンロード",
    resume: "前回の購入を再開",
    failed: "処理に失敗しました。もう一度お試しください。",
    preparing: "決済機能は準備中です。",
    artTitle: "ハングル表記アート (PDF)",
    artDesc: "お名前のハングル表記を2種の書体アートと発音ガイドで、全3ページのPDFに。購入後24時間ダウンロードできます。",
    artBuy: "アートPDFを購入 · US$2.99",
  },
  zh: {
    title: "高级韩文名字报告 (PDF)",
    desc: "将您选择的名字制成 4 页纪念报告：两种书法风格的名字艺术、含义与故事，以及五行参考分析。付款后 24 小时内可下载。",
    select: "选择名字",
    buy: "购买报告 · US$9.99",
    paying: "正在处理付款…",
    generating: "正在生成报告…（约 1 分钟）",
    download: "下载 PDF",
    resume: "继续上次购买",
    failed: "处理失败，请重试。",
    preparing: "支付功能即将上线。",
    artTitle: "韩文名字艺术 (PDF)",
    artDesc: "以两种书法风格呈现您名字的韩文写法，并附发音指南 — 共 3 页 PDF，购买后 24 小时内可下载。",
    artBuy: "购买艺术 PDF · US$2.99",
  },
  id: {
    title: "Laporan Nama Korea Premium (PDF)",
    desc: "Nama pilihan Anda dalam 4 halaman kenang-kenangan: seni nama dalam dua gaya kaligrafi, makna dan kisah, serta analisis lima elemen. Dapat diunduh 24 jam setelah pembelian.",
    select: "Pilih nama",
    buy: "Beli laporan · US$9.99",
    paying: "Memproses pembayaran…",
    generating: "Membuat laporan… (sekitar 1 menit)",
    download: "Unduh PDF",
    resume: "Lanjutkan pembelian sebelumnya",
    failed: "Terjadi kesalahan. Silakan coba lagi.",
    preparing: "Fitur pembayaran segera hadir.",
    artTitle: "Seni Nama Hangul (PDF)",
    artDesc: "Ejaan Hangul nama Anda dalam dua gaya kaligrafi plus panduan pelafalan — PDF 3 halaman, dapat diunduh 24 jam setelah pembelian.",
    artBuy: "Beli PDF seni · US$2.99",
  },
  de: {
    title: "Premium-Bericht zum koreanischen Namen (PDF)",
    desc: "Ihr gewählter Name als 4-seitiges Andenken: Namenskunst in zwei Schriftstilen, Bedeutung & Geschichte und eine Fünf-Elemente-Analyse. 24 Stunden nach dem Kauf herunterladbar.",
    select: "Name wählen",
    buy: "Bericht kaufen · US$9.99",
    paying: "Zahlung wird verarbeitet…",
    generating: "Bericht wird erstellt… (ca. 1 Minute)",
    download: "PDF herunterladen",
    resume: "Vorherigen Kauf fortsetzen",
    failed: "Es ist ein Fehler aufgetreten. Bitte erneut versuchen.",
    preparing: "Die Zahlungsfunktion ist in Vorbereitung.",
    artTitle: "Hangul-Namenskunst (PDF)",
    artDesc: "Die Hangul-Schreibweise Ihres Namens in zwei Schriftstilen plus Ausspracheführer — ein 3-seitiges PDF, 24 Stunden nach dem Kauf herunterladbar.",
    artBuy: "Kunst-PDF kaufen · US$2.99",
  },
  es: {
    title: "Informe premium de tu nombre coreano (PDF)",
    desc: "Tu nombre elegido en 4 páginas de recuerdo: arte del nombre en dos estilos caligráficos, significado e historia, y una lectura de los cinco elementos. Descargable durante 24 horas tras la compra.",
    select: "Elige un nombre",
    buy: "Comprar el informe · US$9.99",
    paying: "Procesando el pago…",
    generating: "Creando tu informe… (aprox. 1 minuto)",
    download: "Descargar PDF",
    resume: "Continuar compra anterior",
    failed: "Algo salió mal. Inténtalo de nuevo.",
    preparing: "El pago estará disponible próximamente.",
    artTitle: "Arte de tu nombre en hangul (PDF)",
    artDesc: "La escritura en hangul de tu nombre en dos estilos caligráficos más una guía de pronunciación — PDF de 3 páginas, descargable durante 24 horas tras la compra.",
    artBuy: "Comprar el PDF de arte · US$2.99",
  },
  fr: {
    title: "Rapport premium de votre nom coréen (PDF)",
    desc: "Votre nom choisi en 4 pages souvenir : art du nom en deux styles calligraphiques, signification et histoire, et une lecture des cinq éléments. Téléchargeable pendant 24 h après l'achat.",
    select: "Choisir un nom",
    buy: "Acheter le rapport · US$9.99",
    paying: "Paiement en cours…",
    generating: "Création du rapport… (environ 1 minute)",
    download: "Télécharger le PDF",
    resume: "Reprendre l'achat précédent",
    failed: "Une erreur est survenue. Veuillez réessayer.",
    preparing: "Le paiement sera bientôt disponible.",
    artTitle: "Art de votre nom en hangeul (PDF)",
    artDesc: "L'écriture en hangeul de votre nom en deux styles calligraphiques avec un guide de prononciation — PDF de 3 pages, téléchargeable pendant 24 h après l'achat.",
    artBuy: "Acheter le PDF d'art · US$2.99",
  },
  it: {
    title: "Report premium del tuo nome coreano (PDF)",
    desc: "Il nome scelto in 4 pagine ricordo: arte del nome in due stili calligrafici, significato e storia, e una lettura dei cinque elementi. Scaricabile per 24 ore dopo l'acquisto.",
    select: "Scegli un nome",
    buy: "Acquista il report · US$9.99",
    paying: "Pagamento in corso…",
    generating: "Creazione del report… (circa 1 minuto)",
    download: "Scarica il PDF",
    resume: "Riprendi l'acquisto precedente",
    failed: "Si è verificato un errore. Riprova.",
    preparing: "Il pagamento sarà presto disponibile.",
    artTitle: "Arte del tuo nome in hangul (PDF)",
    artDesc: "La scrittura in hangul del tuo nome in due stili calligrafici con una guida alla pronuncia — PDF di 3 pagine, scaricabile per 24 ore dopo l'acquisto.",
    artBuy: "Acquista il PDF d'arte · US$2.99",
  },
  pt: {
    title: "Relatório premium do seu nome coreano (PDF)",
    desc: "Seu nome escolhido em 4 páginas de lembrança: arte do nome em dois estilos caligráficos, significado e história, e uma leitura dos cinco elementos. Disponível para download por 24 horas após a compra.",
    select: "Escolha um nome",
    buy: "Comprar o relatório · US$9.99",
    paying: "Processando o pagamento…",
    generating: "Criando seu relatório… (cerca de 1 minuto)",
    download: "Baixar PDF",
    resume: "Retomar compra anterior",
    failed: "Algo deu errado. Tente novamente.",
    preparing: "O pagamento estará disponível em breve.",
    artTitle: "Arte do seu nome em hangul (PDF)",
    artDesc: "A escrita em hangul do seu nome em dois estilos caligráficos com um guia de pronúncia — PDF de 3 páginas, disponível para download por 24 horas após a compra.",
    artBuy: "Comprar o PDF de arte · US$2.99",
  },
  ru: {
    title: "Премиум-отчёт о корейском имени (PDF)",
    desc: "Выбранное имя в виде 4-страничного памятного отчёта: имя в двух каллиграфических стилях, значение и история, а также анализ пяти элементов. Доступен для скачивания 24 часа после покупки.",
    select: "Выберите имя",
    buy: "Купить отчёт · US$9.99",
    paying: "Обработка платежа…",
    generating: "Создаём отчёт… (около 1 минуты)",
    download: "Скачать PDF",
    resume: "Продолжить предыдущую покупку",
    failed: "Произошла ошибка. Попробуйте ещё раз.",
    preparing: "Оплата скоро появится.",
    artTitle: "Арт вашего имени на хангыле (PDF)",
    artDesc: "Запись вашего имени на хангыле в двух каллиграфических стилях плюс гид по произношению — PDF из 3 страниц, доступен для скачивания 24 часа после покупки.",
    artBuy: "Купить арт-PDF · US$2.99",
  },
  ar: {
    title: "تقرير مميز لاسمك الكوري (PDF)",
    desc: "اسمك المختار في 4 صفحات تذكارية: فن الاسم بأسلوبين خطّيين، المعنى والقصة، وقراءة العناصر الخمسة. يمكن تنزيله خلال 24 ساعة بعد الشراء.",
    select: "اختر اسمًا",
    buy: "شراء التقرير · US$9.99",
    paying: "جارٍ معالجة الدفع…",
    generating: "جارٍ إنشاء التقرير… (حوالي دقيقة)",
    download: "تنزيل PDF",
    resume: "متابعة الشراء السابق",
    failed: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    preparing: "الدفع متاح قريبًا.",
    artTitle: "فن اسمك بالهانغول (PDF)",
    artDesc: "كتابة اسمك بالهانغول بأسلوبين خطّيين مع دليل النطق — PDF من 3 صفحات، يمكن تنزيله خلال 24 ساعة بعد الشراء.",
    artBuy: "شراء PDF الفني · US$2.99",
  },
  tr: {
    title: "Premium Korece İsim Raporu (PDF)",
    desc: "Seçtiğiniz isim 4 sayfalık bir hatıra olarak: iki hat stilinde isim sanatı, anlam ve hikâye, beş element analizi. Satın alımdan sonra 24 saat indirilebilir.",
    select: "Bir isim seçin",
    buy: "Raporu satın al · US$9.99",
    paying: "Ödeme işleniyor…",
    generating: "Raporunuz oluşturuluyor… (yaklaşık 1 dakika)",
    download: "PDF indir",
    resume: "Önceki satın alımına devam et",
    failed: "Bir hata oluştu. Lütfen tekrar deneyin.",
    preparing: "Ödeme yakında kullanılabilir olacak.",
    artTitle: "Hangul İsim Sanatı (PDF)",
    artDesc: "İsminizin Hangul yazımı iki hat stilinde, telaffuz rehberiyle birlikte — 3 sayfalık PDF, satın alımdan sonra 24 saat indirilebilir.",
    artBuy: "Sanat PDF'sini satın al · US$2.99",
  },
  fil: {
    title: "Premium na Ulat ng Koreanong Pangalan (PDF)",
    desc: "Ang napili mong pangalan sa 4 na pahinang alaala: sining ng pangalan sa dalawang istilo ng kaligrapiya, kahulugan at kuwento, at pagbasa ng limang elemento. Maida-download sa loob ng 24 oras pagkatapos bumili.",
    select: "Pumili ng pangalan",
    buy: "Bilhin ang ulat · US$9.99",
    paying: "Pinoproseso ang bayad…",
    generating: "Ginagawa ang ulat… (mga 1 minuto)",
    download: "I-download ang PDF",
    resume: "Ipagpatuloy ang naunang pagbili",
    failed: "Nagkaproblema. Pakisubukang muli.",
    preparing: "Malapit nang magbukas ang pagbabayad.",
    artTitle: "Sining ng Pangalan sa Hangul (PDF)",
    artDesc: "Ang Hangul na baybay ng pangalan mo sa dalawang istilo ng kaligrapiya kasama ang gabay sa bigkas — 3-pahinang PDF, maida-download sa loob ng 24 oras.",
    artBuy: "Bilhin ang art PDF · US$2.99",
  },
  uz: {
    title: "Premium koreys ismi hisoboti (PDF)",
    desc: "Tanlagan ismingiz 4 sahifalik esdalik sifatida: ikki xattotlik uslubidagi ism san’ati, ma’no va hikoya, besh unsur tahlili. Xariddan keyin 24 soat davomida yuklab olish mumkin.",
    select: "Ism tanlang",
    buy: "Hisobotni sotib olish · US$9.99",
    paying: "To‘lov amalga oshirilmoqda…",
    generating: "Hisobot tayyorlanmoqda… (taxminan 1 daqiqa)",
    download: "PDF yuklab olish",
    resume: "Avvalgi xaridni davom ettirish",
    failed: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
    preparing: "To‘lov tez orada ishga tushadi.",
    artTitle: "Hangul ism san’ati (PDF)",
    artDesc: "Ismingizning Hangul yozuvi ikki xattotlik uslubida, talaffuz qo‘llanmasi bilan — 3 sahifalik PDF, xariddan keyin 24 soat yuklab olinadi.",
    artBuy: "San’at PDF sotib olish · US$2.99",
  },
  mn: {
    title: "Премиум солонгос нэрийн тайлан (PDF)",
    desc: "Сонгосон нэрийг 4 хуудас дурсгалын тайлан болгоно: хоёр бичгийн хэв маягийн нэрийн урлаг, утга ба түүх, таван махбодын шинжилгээ. Худалдан авснаас хойш 24 цагийн дотор татаж авна.",
    select: "Нэр сонгох",
    buy: "Тайлан худалдан авах · US$9.99",
    paying: "Төлбөр боловсруулж байна…",
    generating: "Тайлан бэлтгэж байна… (1 минут орчим)",
    download: "PDF татах",
    resume: "Өмнөх худалдан авалтыг үргэлжлүүлэх",
    failed: "Алдаа гарлаа. Дахин оролдоно уу.",
    preparing: "Төлбөрийн функц тун удахгүй нээгдэнэ.",
    artTitle: "Хангыл нэрийн урлаг (PDF)",
    artDesc: "Таны нэрийн хангыл бичлэгийг хоёр бичгийн хэв маягаар, дуудлагын зааврын хамт — 3 хуудас PDF, худалдан авснаас хойш 24 цаг татаж авна.",
    artBuy: "Урлагийн PDF худалдан авах · US$2.99",
  },
  hi: {
    title: "प्रीमियम कोरियाई नाम रिपोर्ट (PDF)",
    desc: "आपका चुना नाम 4 पन्नों की यादगार रिपोर्ट में: दो सुलेख शैलियों में नाम आर्ट, अर्थ और कहानी, और पाँच तत्वों का विश्लेषण। खरीद के बाद 24 घंटे तक डाउनलोड करें।",
    select: "नाम चुनें",
    buy: "रिपोर्ट खरीदें · US$9.99",
    paying: "भुगतान प्रोसेस हो रहा है…",
    generating: "रिपोर्ट बन रही है… (लगभग 1 मिनट)",
    download: "PDF डाउनलोड करें",
    resume: "पिछली खरीद जारी रखें",
    failed: "कुछ गलत हुआ। कृपया फिर से कोशिश करें।",
    preparing: "भुगतान सुविधा जल्द आ रही है।",
    artTitle: "हंगुल नाम आर्ट (PDF)",
    artDesc: "आपके नाम की हंगुल लिखावट दो सुलेख शैलियों में, उच्चारण गाइड के साथ — 3 पन्नों का PDF, खरीद के बाद 24 घंटे तक डाउनलोड करें।",
    artBuy: "आर्ट PDF खरीदें · US$2.99",
  },
  km: {
    title: "របាយការណ៍ឈ្មោះកូរ៉េពិសេស (PDF)",
    desc: "ឈ្មោះដែលអ្នកជ្រើសរើសក្នុងទំព័រអនុស្សាវរីយ៍ 4 ទំព័រ៖ សិល្បៈឈ្មោះពីរបែបអក្សរសាស្ត្រ អត្ថន័យនិងរឿងរ៉ាវ និងការវិភាគធាតុទាំងប្រាំ។ ទាញយកបានក្នុងរយៈពេល 24 ម៉ោងបន្ទាប់ពីទិញ។",
    select: "ជ្រើសរើសឈ្មោះ",
    buy: "ទិញរបាយការណ៍ · US$9.99",
    paying: "កំពុងដំណើរការទូទាត់…",
    generating: "កំពុងបង្កើតរបាយការណ៍… (ប្រហែល 1 នាទី)",
    download: "ទាញយក PDF",
    resume: "បន្តការទិញមុន",
    failed: "មានបញ្ហាកើតឡើង។ សូមព្យាយាមម្តងទៀត។",
    preparing: "មុខងារទូទាត់នឹងមកដល់ឆាប់ៗនេះ។",
    artTitle: "សិល្បៈឈ្មោះហាន់ហ្គុល (PDF)",
    artDesc: "ការសរសេរឈ្មោះរបស់អ្នកជាហាន់ហ្គុលពីរបែបអក្សរសាស្ត្រ រួមជាមួយការណែនាំការបញ្ចេញសំឡេង — PDF 3 ទំព័រ ទាញយកបាន 24 ម៉ោងបន្ទាប់ពីទិញ។",
    artBuy: "ទិញ PDF សិល្បៈ · US$2.99",
  },
  kk: {
    title: "Премиум корей есімі есебі (PDF)",
    desc: "Таңдаған есіміңіз 4 беттік естелік есеп ретінде: екі каллиграфиялық стильдегі есім өнері, мағынасы мен тарихы және бес элемент талдауы. Сатып алғаннан кейін 24 сағат ішінде жүктеп алуға болады.",
    select: "Есім таңдаңыз",
    buy: "Есепті сатып алу · US$9.99",
    paying: "Төлем өңделуде…",
    generating: "Есеп дайындалуда… (шамамен 1 минут)",
    download: "PDF жүктеп алу",
    resume: "Алдыңғы сатып алуды жалғастыру",
    failed: "Қате пайда болды. Қайталап көріңіз.",
    preparing: "Төлем мүмкіндігі жақында қосылады.",
    artTitle: "Хангыл есім өнері (PDF)",
    artDesc: "Есіміңіздің хангыл жазылуы екі каллиграфиялық стильде, айтылу нұсқаулығымен — 3 беттік PDF, сатып алғаннан кейін 24 сағат жүктеледі.",
    artBuy: "Өнер PDF сатып алу · US$2.99",
  },
  ms: {
    title: "Laporan Nama Korea Premium (PDF)",
    desc: "Nama pilihan anda dalam 4 halaman kenangan: seni nama dalam dua gaya kaligrafi, makna dan kisah, serta analisis lima elemen. Boleh dimuat turun selama 24 jam selepas pembelian.",
    select: "Pilih nama",
    buy: "Beli laporan · US$9.99",
    paying: "Memproses pembayaran…",
    generating: "Menyediakan laporan… (kira-kira 1 minit)",
    download: "Muat turun PDF",
    resume: "Sambung pembelian sebelumnya",
    failed: "Berlaku ralat. Sila cuba lagi.",
    preparing: "Fungsi pembayaran akan datang tidak lama lagi.",
    artTitle: "Seni Nama Hangul (PDF)",
    artDesc: "Ejaan Hangul nama anda dalam dua gaya kaligrafi berserta panduan sebutan — PDF 3 halaman, boleh dimuat turun selama 24 jam selepas pembelian.",
    artBuy: "Beli PDF seni · US$2.99",
  },
  pl: {
    title: "Raport premium o koreańskim imieniu (PDF)",
    desc: "Wybrane imię w 4-stronicowym pamiątkowym raporcie: imię w dwóch stylach kaligrafii, znaczenie i historia oraz analiza pięciu żywiołów. Do pobrania przez 24 godziny po zakupie.",
    select: "Wybierz imię",
    buy: "Kup raport · US$9.99",
    paying: "Przetwarzanie płatności…",
    generating: "Tworzenie raportu… (około 1 minuty)",
    download: "Pobierz PDF",
    resume: "Wznów poprzedni zakup",
    failed: "Coś poszło nie tak. Spróbuj ponownie.",
    preparing: "Płatności będą dostępne wkrótce.",
    artTitle: "Sztuka imienia w hangulu (PDF)",
    artDesc: "Zapis imienia w hangulu w dwóch stylach kaligrafii wraz z przewodnikiem wymowy — 3-stronicowy PDF, do pobrania przez 24 godziny po zakupie.",
    artBuy: "Kup artystyczny PDF · US$2.99",
  },
};

type PremiumProductKey = "GLOBAL_NAME_PDF" | "HANGUL_ART_PDF";

type PremiumCandidate = {
  hangul: string;
  pronunciation?: string;
  meaning?: string;
  recommendation_reason?: string;
  cultural_fit?: string;
  usage_note?: string;
  // 발음 표기 아트(HANGUL_ART_PDF) 전용 필드
  ipa?: string;
  syllables?: string;
  source_pronunciation_basis?: string;
  caution_notes?: string;
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

const CHECKOUT_TTL_MS = 24 * 60 * 60 * 1000;

// 상품별 저장 키를 분리해 이어받기가 서로 섞이지 않게 한다.
function checkoutStorageKey(product: PremiumProductKey) {
  return `nl_global_premium_checkout:${product}`;
}

function readStoredCheckout(product: PremiumProductKey): StoredPremiumCheckout | null {
  try {
    const raw = localStorage.getItem(checkoutStorageKey(product));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredPremiumCheckout;
    if (!parsed?.sessionId || !parsed.accessToken || !parsed.savedAt) return null;
    if (Date.now() - parsed.savedAt > CHECKOUT_TTL_MS) {
      localStorage.removeItem(checkoutStorageKey(product));
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
  product = "GLOBAL_NAME_PDF",
}: {
  candidates: PremiumCandidate[];
  revealedCount: number;
  inputFactors: Record<string, unknown> | null | undefined;
  locale?: string;
  product?: PremiumProductKey;
}) {
  const copy = premiumCopies[locale ?? "en"] ?? premiumCopies.en;
  const isArt = product === "HANGUL_ART_PDF";
  const productCopy = isArt
    ? { title: copy.artTitle, desc: copy.artDesc, buy: copy.artBuy }
    : { title: copy.title, desc: copy.desc, buy: copy.buy };
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
  // 운영자(admin) 로그인 시에만 결제 없이 PDF를 받는 테스트 버튼을 노출한다(개발 환경은 항상).
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [testBusy, setTestBusy] = useState(false);
  // 결제 완료 표시가 있는 저장 체크아웃만 이어받기 대상으로 노출한다.
  useEffect(() => {
    void Promise.resolve().then(() => {
      const stored = readStoredCheckout(product);
      if (stored?.paid) setResumable(stored);
    });
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    void supabase.auth.getSession().then(({ data }) => {
      const session = data.session;
      if (session?.user && hasAdminRole(session.user.app_metadata)) {
        setAdminToken(session.access_token);
      }
    });
  }, [product]);
  const testVisible = process.env.NODE_ENV !== "production" || Boolean(adminToken);

  async function runOperatorTest() {
    if (testBusy || !inputFactors) return;
    setError("");
    setTestBusy(true);
    try {
      const candidate = selectable[selectedIndex] ?? selectable[0];
      const response = await fetch("/api/premium-reports/test/global", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(adminToken ? { Authorization: `Bearer ${adminToken}` } : {}),
        },
        body: JSON.stringify({ product, inputFactors, candidate, locale }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "테스트 PDF 생성에 실패했습니다.");
      }
      const url = URL.createObjectURL(await response.blob());
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `naminglink-global-premium-${candidate.hangul}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : copy.failed);
    } finally {
      setTestBusy(false);
    }
  }

  const selectable = candidates.slice(0, Math.max(1, revealedCount));

  function persistCheckout(next: StoredPremiumCheckout) {
    setCheckout(next);
    try {
      localStorage.setItem(checkoutStorageKey(product), JSON.stringify(next));
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
        product,
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
          <p className="text-sm font-semibold text-brand-teal">{productCopy.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{productCopy.desc}</p>
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
            {busy ? busyLabel : productCopy.buy}
          </button>
        ) : (
          <button
            type="button"
            disabled
            title={copy.preparing}
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 self-end rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
          >
            <FileText aria-hidden="true" size={17} />
            {productCopy.buy}
          </button>
        )}
      </div>

      {testVisible ? (
        <button
          type="button"
          onClick={runOperatorTest}
          disabled={testBusy}
          className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-lg border border-brand-teal/40 px-4 text-sm font-semibold text-brand-teal disabled:opacity-50"
        >
          {testBusy
            ? "테스트 PDF 생성 중… (약 30초)"
            : "운영자 테스트: 결제 없이 3장 PDF 받기"}
        </button>
      ) : null}
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
