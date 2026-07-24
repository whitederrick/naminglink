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
  cancel: string;
  preparing: string;
  artTitle: string;
  artDesc: string;
  artBuy: string;
  fontSelect: string;
  fontMore: string;
  packTitle: string;
  packDesc: string;
  packBuy: string;
};

const premiumCopies: Record<string, PremiumCopy> = {
  ko: {
    title: "프리미엄 한글 이름 리포트 (PDF)",
    desc: "추천된 한글 이름 후보 전체를 한 권의 기념 PDF로 — 후보마다 선택한 붓글씨 서체의 이름 아트, 의미와 추천 이유, 오행 사주 풀이까지 담아 드립니다. 결제 후 24시간 동안 내려받을 수 있습니다.",
    select: "이름 선택",
    buy: "리포트 구매 · US$9.99",
    paying: "결제 진행 중…",
    generating: "리포트 생성 중… (약 1분)",
    download: "PDF 다운로드",
    resume: "이전 구매 이어받기",
    failed: "처리에 실패했습니다. 다시 시도해 주세요.",
    cancel: "결제 취소",
    preparing: "결제 기능 준비 중입니다.",
    artTitle: "한글 표기 아트 (PDF)",
    artDesc: "이름의 한글 표기를 선택한 붓글씨 서체의 아트와 발음 안내 페이지로 만들어 드립니다. 결제 후 24시간 다운로드.",
    artBuy: "아트 PDF 구매 · US$2.99",
    fontSelect: "서체 선택",
    packTitle: "이름 아트 팩 (PDF)",
    packDesc: "선택한 이름 하나를, 고른 붓글씨 서체마다 아트 한 장씩으로 만들어 드립니다. 서체마다 담긴 이야기가 함께합니다. 결제 후 24시간 다운로드.",
    packBuy: "아트 팩 구매",
    fontMore: "서체 더보기",
  },
  en: {
    title: "Premium Korean Name Report (PDF)",
    desc: "Every recommended Korean name in one keepsake PDF — calligraphy name art in the typeface you choose, each name's meaning and story, and a five-element reading. Downloadable for 24 hours after purchase.",
    select: "Choose a name",
    buy: "Buy the report · US$9.99",
    paying: "Processing payment…",
    generating: "Creating your report… (about a minute)",
    download: "Download PDF",
    resume: "Resume previous purchase",
    failed: "Something went wrong. Please try again.",
    cancel: "Cancel payment",
    preparing: "Payment is coming soon.",
    artTitle: "Hangul Name Art (PDF)",
    artDesc: "Your name's Hangul spelling as calligraphy art in the typeface you choose, plus a pronunciation guide. Downloadable for 24 hours after purchase.",
    artBuy: "Buy the art PDF · US$2.99",
    fontSelect: "Choose typefaces",
    packTitle: "Name Art Pack (PDF)",
    packDesc: "One chosen name, rendered as a keepsake art page in each calligraphy typeface you pick — every typeface carries its own story. Downloadable for 24 hours.",
    packBuy: "Buy the art pack",
    fontMore: "See all typefaces",
  },
  vi: {
    title: "Báo cáo tên tiếng Hàn cao cấp (PDF)",
    desc: "Tất cả các tên tiếng Hàn được đề xuất trong một PDF lưu niệm — nghệ thuật tên bằng kiểu thư pháp bạn chọn, ý nghĩa và câu chuyện của từng tên, cùng phân tích ngũ hành. Tải xuống trong 24 giờ sau khi mua.",
    select: "Chọn tên",
    buy: "Mua báo cáo · US$9.99",
    paying: "Đang xử lý thanh toán…",
    generating: "Đang tạo báo cáo… (khoảng 1 phút)",
    download: "Tải PDF",
    resume: "Tiếp tục giao dịch trước",
    failed: "Đã xảy ra lỗi. Vui lòng thử lại.",
    cancel: "Hủy thanh toán",
    preparing: "Tính năng thanh toán sắp ra mắt.",
    artTitle: "Nghệ thuật tên Hangul (PDF)",
    artDesc: "Cách viết Hangul của tên bạn thành tác phẩm thư pháp theo kiểu chữ bạn chọn, kèm hướng dẫn phát âm. Tải xuống trong 24 giờ sau khi mua.",
    artBuy: "Mua PDF nghệ thuật · US$2.99",
    fontSelect: "Chọn kiểu chữ",
    packTitle: "Gói nghệ thuật tên (PDF)",
    packDesc: "Một cái tên bạn chọn, được thể hiện thành một trang nghệ thuật với mỗi kiểu chữ thư pháp bạn chọn — mỗi kiểu chữ đều có câu chuyện riêng. Tải xuống trong 24 giờ.",
    packBuy: "Mua gói nghệ thuật",
    fontMore: "Xem tất cả kiểu chữ",
  },
  th: {
    title: "รายงานชื่อเกาหลีพรีเมียม (PDF)",
    desc: "ชื่อเกาหลีที่แนะนำทั้งหมดในไฟล์ PDF ที่ระลึกเล่มเดียว — ศิลปะชื่อในแบบอักษรพู่กันที่คุณเลือก ความหมายและเรื่องราวของแต่ละชื่อ พร้อมการวิเคราะห์ธาตุทั้งห้า ดาวน์โหลดได้ 24 ชั่วโมงหลังชำระเงิน",
    select: "เลือกชื่อ",
    buy: "ซื้อรายงาน · US$9.99",
    paying: "กำลังดำเนินการชำระเงิน…",
    generating: "กำลังสร้างรายงาน… (ประมาณ 1 นาที)",
    download: "ดาวน์โหลด PDF",
    resume: "ดำเนินการซื้อก่อนหน้าต่อ",
    failed: "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง",
    cancel: "ยกเลิกการชำระเงิน",
    preparing: "ฟีเจอร์การชำระเงินกำลังจะเปิดเร็ว ๆ นี้",
    artTitle: "ศิลปะชื่อฮันกึล (PDF)",
    artDesc: "การเขียนชื่อของคุณเป็นฮันกึลในรูปแบบศิลปะลายพู่กันตามแบบอักษรที่คุณเลือก พร้อมคู่มือการออกเสียง ดาวน์โหลดได้ 24 ชั่วโมงหลังซื้อ",
    artBuy: "ซื้อ PDF ศิลปะ · US$2.99",
    fontSelect: "เลือกแบบอักษร",
    packTitle: "แพ็กศิลปะชื่อ (PDF)",
    packDesc: "ชื่อที่คุณเลือกหนึ่งชื่อ ถูกสร้างเป็นหน้าศิลปะหนึ่งหน้าต่อแบบอักษรพู่กันที่คุณเลือก — แต่ละแบบอักษรมีเรื่องราวของตัวเอง ดาวน์โหลดได้ 24 ชั่วโมง",
    packBuy: "ซื้อแพ็กศิลปะ",
    fontMore: "ดูแบบอักษรทั้งหมด",
  },
  ja: {
    title: "プレミアム韓国語名前レポート (PDF)",
    desc: "おすすめの韓国語名候補すべてを1冊の記念PDFに: 選んだ書体による名前アート、各名前の意味とストーリー、五行の参考分析まで収録。購入後24時間ダウンロードできます。",
    select: "名前を選択",
    buy: "レポートを購入 · US$9.99",
    paying: "決済処理中…",
    generating: "レポートを作成中…（約1分）",
    download: "PDFをダウンロード",
    resume: "前回の購入を再開",
    failed: "処理に失敗しました。もう一度お試しください。",
    cancel: "決済をキャンセル",
    preparing: "決済機能は準備中です。",
    artTitle: "ハングル表記アート (PDF)",
    artDesc: "お名前のハングル表記を、選んだ書体の書アートと発音ガイドのページに仕上げます。購入後24時間ダウンロードできます。",
    artBuy: "アートPDFを購入 · US$2.99",
    fontSelect: "書体を選択",
    packTitle: "名前アートパック (PDF)",
    packDesc: "選んだ名前ひとつを、選んだ書体ごとに1枚ずつのアートに仕上げます。各書体にはそれぞれの物語があります。購入後24時間ダウンロードできます。",
    packBuy: "アートパックを購入",
    fontMore: "書体をすべて見る",
  },
  zh: {
    title: "高级韩文名字报告 (PDF)",
    desc: "将所有推荐的韩文名字候选汇成一份纪念 PDF——以您选择的书法字体呈现名字艺术，附每个名字的含义与故事，以及五行参考分析。付款后 24 小时内可下载。",
    select: "选择名字",
    buy: "购买报告 · US$9.99",
    paying: "正在处理付款…",
    generating: "正在生成报告…（约 1 分钟）",
    download: "下载 PDF",
    resume: "继续上次购买",
    failed: "处理失败，请重试。",
    cancel: "取消支付",
    preparing: "支付功能即将上线。",
    artTitle: "韩文名字艺术 (PDF)",
    artDesc: "以您选择的书法字体将名字的韩文写法制成艺术页，并附发音指南。付款后 24 小时内可下载。",
    artBuy: "购买艺术 PDF · US$2.99",
    fontSelect: "选择字体",
    packTitle: "名字艺术包 (PDF)",
    packDesc: "将您选择的一个名字，以每种所选书法字体各制成一页艺术作品 — 每种字体都有自己的故事。购买后 24 小时内可下载。",
    packBuy: "购买艺术包",
    fontMore: "查看全部字体",
  },
  id: {
    title: "Laporan Nama Korea Premium (PDF)",
    desc: "Semua kandidat nama Korea yang direkomendasikan dalam satu PDF kenang-kenangan — seni nama dalam gaya kaligrafi pilihan Anda, makna dan kisah tiap nama, serta analisis lima elemen. Dapat diunduh 24 jam setelah pembelian.",
    select: "Pilih nama",
    buy: "Beli laporan · US$9.99",
    paying: "Memproses pembayaran…",
    generating: "Membuat laporan… (sekitar 1 menit)",
    download: "Unduh PDF",
    resume: "Lanjutkan pembelian sebelumnya",
    failed: "Terjadi kesalahan. Silakan coba lagi.",
    cancel: "Batalkan pembayaran",
    preparing: "Fitur pembayaran segera hadir.",
    artTitle: "Seni Nama Hangul (PDF)",
    artDesc: "Ejaan Hangul nama Anda sebagai seni kaligrafi dalam gaya huruf pilihan Anda, plus panduan pelafalan. Dapat diunduh 24 jam setelah pembelian.",
    artBuy: "Beli PDF seni · US$2.99",
    fontSelect: "Pilih gaya huruf",
    packTitle: "Paket Seni Nama (PDF)",
    packDesc: "Satu nama pilihan Anda, dijadikan satu halaman seni untuk tiap gaya kaligrafi yang Anda pilih — setiap gaya huruf punya kisahnya sendiri. Dapat diunduh 24 jam.",
    packBuy: "Beli paket seni",
    fontMore: "Lihat semua gaya huruf",
  },
  de: {
    title: "Premium-Bericht zum koreanischen Namen (PDF)",
    desc: "Alle empfohlenen koreanischen Namenskandidaten in einem Andenken-PDF — Namenskunst im gewählten Schriftstil, Bedeutung und Geschichte jedes Namens sowie eine Fünf-Elemente-Analyse. 24 Stunden nach dem Kauf herunterladbar.",
    select: "Name wählen",
    buy: "Bericht kaufen · US$9.99",
    paying: "Zahlung wird verarbeitet…",
    generating: "Bericht wird erstellt… (ca. 1 Minute)",
    download: "PDF herunterladen",
    resume: "Vorherigen Kauf fortsetzen",
    failed: "Es ist ein Fehler aufgetreten. Bitte erneut versuchen.",
    cancel: "Zahlung abbrechen",
    preparing: "Die Zahlungsfunktion ist in Vorbereitung.",
    artTitle: "Hangul-Namenskunst (PDF)",
    artDesc: "Die Hangul-Schreibweise Ihres Namens als Kalligrafie-Kunst im gewählten Schriftstil, plus Ausspracheführer. 24 Stunden nach dem Kauf herunterladbar.",
    artBuy: "Kunst-PDF kaufen · US$2.99",
    fontSelect: "Schriftstil wählen",
    packTitle: "Namenskunst-Paket (PDF)",
    packDesc: "Ein gewählter Name, als Kunstseite in jedem von Ihnen gewählten Kalligrafie-Stil — jeder Schriftstil trägt seine eigene Geschichte. 24 Stunden herunterladbar.",
    packBuy: "Kunst-Paket kaufen",
    fontMore: "Alle Schriftstile ansehen",
  },
  es: {
    title: "Informe premium de tu nombre coreano (PDF)",
    desc: "Todos los nombres coreanos recomendados en un PDF de recuerdo: arte del nombre en la caligrafía que elijas, el significado y la historia de cada nombre, y una lectura de los cinco elementos. Descargable durante 24 horas tras la compra.",
    select: "Elige un nombre",
    buy: "Comprar el informe · US$9.99",
    paying: "Procesando el pago…",
    generating: "Creando tu informe… (aprox. 1 minuto)",
    download: "Descargar PDF",
    resume: "Continuar compra anterior",
    failed: "Algo salió mal. Inténtalo de nuevo.",
    cancel: "Cancelar el pago",
    preparing: "El pago estará disponible próximamente.",
    artTitle: "Arte de tu nombre en hangul (PDF)",
    artDesc: "La escritura en hangul de tu nombre como arte caligráfico en la tipografía que elijas, con guía de pronunciación. Descargable durante 24 horas tras la compra.",
    artBuy: "Comprar el PDF de arte · US$2.99",
    fontSelect: "Elige caligrafías",
    packTitle: "Pack de arte del nombre (PDF)",
    packDesc: "Un nombre elegido, convertido en una página de arte por cada caligrafía que elijas — cada caligrafía tiene su propia historia. Descargable durante 24 horas.",
    packBuy: "Comprar el pack de arte",
    fontMore: "Ver todas las caligrafías",
  },
  fr: {
    title: "Rapport premium de votre nom coréen (PDF)",
    desc: "Tous les prénoms coréens recommandés dans un PDF souvenir — art du prénom dans la calligraphie de votre choix, signification et histoire de chaque prénom, et une lecture des cinq éléments. Téléchargeable pendant 24 h après l'achat.",
    select: "Choisir un nom",
    buy: "Acheter le rapport · US$9.99",
    paying: "Paiement en cours…",
    generating: "Création du rapport… (environ 1 minute)",
    download: "Télécharger le PDF",
    resume: "Reprendre l'achat précédent",
    failed: "Une erreur est survenue. Veuillez réessayer.",
    cancel: "Annuler le paiement",
    preparing: "Le paiement sera bientôt disponible.",
    artTitle: "Art de votre nom en hangeul (PDF)",
    artDesc: "L'écriture en hangeul de votre prénom en art calligraphique dans le style de votre choix, avec un guide de prononciation. Téléchargeable pendant 24 h après l'achat.",
    artBuy: "Acheter le PDF d'art · US$2.99",
    fontSelect: "Choisir les calligraphies",
    packTitle: "Pack d'art du prénom (PDF)",
    packDesc: "Un prénom choisi, transformé en une page d'art pour chaque calligraphie sélectionnée — chaque style porte sa propre histoire. Téléchargeable pendant 24 h.",
    packBuy: "Acheter le pack d'art",
    fontMore: "Voir toutes les calligraphies",
  },
  it: {
    title: "Report premium del tuo nome coreano (PDF)",
    desc: "Tutti i nomi coreani consigliati in un unico PDF ricordo — arte del nome nello stile calligrafico che scegli, significato e storia di ogni nome, e una lettura dei cinque elementi. Scaricabile per 24 ore dopo l'acquisto.",
    select: "Scegli un nome",
    buy: "Acquista il report · US$9.99",
    paying: "Pagamento in corso…",
    generating: "Creazione del report… (circa 1 minuto)",
    download: "Scarica il PDF",
    resume: "Riprendi l'acquisto precedente",
    failed: "Si è verificato un errore. Riprova.",
    cancel: "Annulla il pagamento",
    preparing: "Il pagamento sarà presto disponibile.",
    artTitle: "Arte del tuo nome in hangul (PDF)",
    artDesc: "La scrittura in hangul del tuo nome come arte calligrafica nello stile che scegli, con guida alla pronuncia. Scaricabile per 24 ore dopo l'acquisto.",
    artBuy: "Acquista il PDF d'arte · US$2.99",
    fontSelect: "Scegli gli stili",
    packTitle: "Pacchetto d'arte del nome (PDF)",
    packDesc: "Un nome scelto, reso come pagina d'arte in ogni stile calligrafico selezionato — ogni stile porta la propria storia. Scaricabile per 24 ore.",
    packBuy: "Acquista il pacchetto",
    fontMore: "Vedi tutti gli stili",
  },
  pt: {
    title: "Relatório premium do seu nome coreano (PDF)",
    desc: "Todos os nomes coreanos recomendados em um único PDF de lembrança — arte do nome na caligrafia que você escolher, o significado e a história de cada nome, e uma leitura dos cinco elementos. Disponível para download por 24 horas após a compra.",
    select: "Escolha um nome",
    buy: "Comprar o relatório · US$9.99",
    paying: "Processando o pagamento…",
    generating: "Criando seu relatório… (cerca de 1 minuto)",
    download: "Baixar PDF",
    resume: "Retomar compra anterior",
    failed: "Algo deu errado. Tente novamente.",
    cancel: "Cancelar pagamento",
    preparing: "O pagamento estará disponível em breve.",
    artTitle: "Arte do seu nome em hangul (PDF)",
    artDesc: "A escrita em hangul do seu nome como arte caligráfica na tipografia que você escolher, com guia de pronúncia. Disponível para download por 24 horas após a compra.",
    artBuy: "Comprar o PDF de arte · US$2.99",
    fontSelect: "Escolha os estilos",
    packTitle: "Pacote de arte do nome (PDF)",
    packDesc: "Um nome escolhido, transformado em uma página de arte para cada caligrafia selecionada — cada estilo carrega sua própria história. Disponível por 24 horas.",
    packBuy: "Comprar o pacote de arte",
    fontMore: "Ver todas as caligrafias",
  },
  ru: {
    title: "Премиум-отчёт о корейском имени (PDF)",
    desc: "Все рекомендованные корейские имена в одном памятном PDF — каллиграфическое искусство имени в выбранном вами шрифте, значение и история каждого имени, а также анализ пяти элементов. Доступен для скачивания 24 часа после покупки.",
    select: "Выберите имя",
    buy: "Купить отчёт · US$9.99",
    paying: "Обработка платежа…",
    generating: "Создаём отчёт… (около 1 минуты)",
    download: "Скачать PDF",
    resume: "Продолжить предыдущую покупку",
    failed: "Произошла ошибка. Попробуйте ещё раз.",
    cancel: "Отменить оплату",
    preparing: "Оплата скоро появится.",
    artTitle: "Арт вашего имени на хангыле (PDF)",
    artDesc: "Запись вашего имени на хангыле в виде каллиграфического искусства выбранным шрифтом, плюс гид по произношению. Доступно для скачивания 24 часа после покупки.",
    artBuy: "Купить арт-PDF · US$2.99",
    fontSelect: "Выберите шрифты",
    packTitle: "Арт-набор имени (PDF)",
    packDesc: "Одно выбранное имя — по одной арт-странице в каждом выбранном каллиграфическом шрифте. У каждого шрифта своя история. Доступно для скачивания 24 часа.",
    packBuy: "Купить арт-набор",
    fontMore: "Показать все шрифты",
  },
  ar: {
    title: "تقرير مميز لاسمك الكوري (PDF)",
    desc: "جميع الأسماء الكورية المقترحة في ملف PDF تذكاري واحد — فن الاسم بالخط الذي تختاره، ومعنى كل اسم وقصته، وقراءة العناصر الخمسة. يمكن تنزيله خلال 24 ساعة بعد الشراء.",
    select: "اختر اسمًا",
    buy: "شراء التقرير · US$9.99",
    paying: "جارٍ معالجة الدفع…",
    generating: "جارٍ إنشاء التقرير… (حوالي دقيقة)",
    download: "تنزيل PDF",
    resume: "متابعة الشراء السابق",
    failed: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    cancel: "إلغاء الدفع",
    preparing: "الدفع متاح قريبًا.",
    artTitle: "فن اسمك بالهانغول (PDF)",
    artDesc: "كتابة اسمك بالهانغول كعمل فني بالخط الذي تختاره، مع دليل النطق. يمكن تنزيله خلال 24 ساعة بعد الشراء.",
    artBuy: "شراء PDF الفني · US$2.99",
    fontSelect: "اختر الخطوط",
    packTitle: "باقة فن الاسم (PDF)",
    packDesc: "اسم واحد تختاره، يُصمم كصفحة فنية بكل خط تختاره — ولكل خط قصته الخاصة. يمكن تنزيله خلال 24 ساعة.",
    packBuy: "شراء الباقة الفنية",
    fontMore: "عرض كل الخطوط",
  },
  tr: {
    title: "Premium Korece İsim Raporu (PDF)",
    desc: "Önerilen tüm Korece isimler tek bir hatıra PDF'inde — seçtiğiniz hat stilinde isim sanatı, her ismin anlamı ve hikâyesi, beş element analizi. Satın alımdan sonra 24 saat indirilebilir.",
    select: "Bir isim seçin",
    buy: "Raporu satın al · US$9.99",
    paying: "Ödeme işleniyor…",
    generating: "Raporunuz oluşturuluyor… (yaklaşık 1 dakika)",
    download: "PDF indir",
    resume: "Önceki satın alımına devam et",
    failed: "Bir hata oluştu. Lütfen tekrar deneyin.",
    cancel: "Ödemeyi iptal et",
    preparing: "Ödeme yakında kullanılabilir olacak.",
    artTitle: "Hangul İsim Sanatı (PDF)",
    artDesc: "İsminizin Hangul yazılışı, seçtiğiniz yazı tipinde hat sanatı olarak, telaffuz rehberiyle birlikte. Satın alımdan sonra 24 saat indirilebilir.",
    artBuy: "Sanat PDF'sini satın al · US$2.99",
    fontSelect: "Yazı stilini seçin",
    packTitle: "İsim Sanat Paketi (PDF)",
    packDesc: "Seçtiğiniz bir isim, seçtiğiniz her hat stilinde birer sanat sayfası olarak — her yazı stilinin kendi hikâyesi var. 24 saat indirilebilir.",
    packBuy: "Sanat paketini satın al",
    fontMore: "Tüm yazı stillerini gör",
  },
  fil: {
    title: "Premium na Ulat ng Koreanong Pangalan (PDF)",
    desc: "Lahat ng inirekomendang pangalang Koreano sa isang keepsake PDF — sining ng pangalan sa kaligrapiyang pipiliin mo, kahulugan at kuwento ng bawat pangalan, at pagbasa ng limang elemento. Maida-download sa loob ng 24 oras pagkatapos bumili.",
    select: "Pumili ng pangalan",
    buy: "Bilhin ang ulat · US$9.99",
    paying: "Pinoproseso ang bayad…",
    generating: "Ginagawa ang ulat… (mga 1 minuto)",
    download: "I-download ang PDF",
    resume: "Ipagpatuloy ang naunang pagbili",
    failed: "Nagkaproblema. Pakisubukang muli.",
    cancel: "Kanselahin ang bayad",
    preparing: "Malapit nang magbukas ang pagbabayad.",
    artTitle: "Sining ng Pangalan sa Hangul (PDF)",
    artDesc: "Ang Hangul na baybay ng iyong pangalan bilang sining ng kaligrapiya sa tipong pipiliin mo, may kasamang gabay sa pagbigkas. Maida-download sa loob ng 24 oras pagkatapos bumili.",
    artBuy: "Bilhin ang art PDF · US$2.99",
    fontSelect: "Pumili ng estilo ng titik",
    packTitle: "Name Art Pack (PDF)",
    packDesc: "Isang napiling pangalan, ginawang isang art page sa bawat kaligrapiyang pipiliin mo — bawat estilo may sariling kuwento. Maida-download sa loob ng 24 oras.",
    packBuy: "Bilhin ang art pack",
    fontMore: "Tingnan lahat ng estilo",
  },
  uz: {
    title: "Premium koreys ismi hisoboti (PDF)",
    desc: "Tavsiya etilgan barcha koreyscha ismlar bitta esdalik PDF’da — siz tanlagan xattotlik uslubidagi ism san’ati, har bir ismning ma’nosi va hikoyasi hamda besh unsur tahlili. Xariddan keyin 24 soat davomida yuklab olish mumkin.",
    select: "Ism tanlang",
    buy: "Hisobotni sotib olish · US$9.99",
    paying: "To‘lov amalga oshirilmoqda…",
    generating: "Hisobot tayyorlanmoqda… (taxminan 1 daqiqa)",
    download: "PDF yuklab olish",
    resume: "Avvalgi xaridni davom ettirish",
    failed: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
    cancel: "To'lovni bekor qilish",
    preparing: "To‘lov tez orada ishga tushadi.",
    artTitle: "Hangul ism san’ati (PDF)",
    artDesc: "Ismingizning hangul yozuvi siz tanlagan uslubda xattotlik san’ati sifatida, talaffuz qo‘llanmasi bilan. Xariddan keyin 24 soat davomida yuklab olish mumkin.",
    artBuy: "San’at PDF sotib olish · US$2.99",
    fontSelect: "Yozuv uslubini tanlang",
    packTitle: "Ism san’at to‘plami (PDF)",
    packDesc: "Tanlangan bitta ism, siz tanlagan har bir xattotlik uslubida bittadan san’at sahifasi sifatida — har bir uslubning o‘z hikoyasi bor. 24 soat yuklab olinadi.",
    packBuy: "San’at to‘plamini sotib olish",
    fontMore: "Barcha uslublarni ko‘rish",
  },
  mn: {
    title: "Премиум солонгос нэрийн тайлан (PDF)",
    desc: "Санал болгосон бүх солонгос нэрийг нэг дурсгалын PDF-д — таны сонгосон бичгийн хэв маягаар нэрийн урлаг, нэр бүрийн утга ба түүх, таван махбодын шинжилгээ. Худалдан авснаас хойш 24 цагийн дотор татаж авна.",
    select: "Нэр сонгох",
    buy: "Тайлан худалдан авах · US$9.99",
    paying: "Төлбөр боловсруулж байна…",
    generating: "Тайлан бэлтгэж байна… (1 минут орчим)",
    download: "PDF татах",
    resume: "Өмнөх худалдан авалтыг үргэлжлүүлэх",
    failed: "Алдаа гарлаа. Дахин оролдоно уу.",
    cancel: "Төлбөрийг цуцлах",
    preparing: "Төлбөрийн функц тун удахгүй нээгдэнэ.",
    artTitle: "Хангыл нэрийн урлаг (PDF)",
    artDesc: "Таны нэрийн хангыль бичлэгийг сонгосон бичгийн хэв маягаар урлагийн хуудас болгож, дуудлагын заавартай хамт. Худалдан авснаас хойш 24 цагийн дотор татаж авна.",
    artBuy: "Урлагийн PDF худалдан авах · US$2.99",
    fontSelect: "Бичгийн хэв сонгох",
    packTitle: "Нэрийн урлагийн багц (PDF)",
    packDesc: "Сонгосон нэг нэрийг таны сонгосон бичгийн хэв бүрээр нэг нэг урлагийн хуудас болгоно — хэв бүр өөрийн түүхтэй. 24 цагийн дотор татаж авна.",
    packBuy: "Урлагийн багц худалдан авах",
    fontMore: "Бүх бичгийн хэвийг харах",
  },
  hi: {
    title: "प्रीमियम कोरियाई नाम रिपोर्ट (PDF)",
    desc: "सुझाए गए सभी कोरियाई नाम एक यादगार PDF में — आपकी चुनी सुलेख शैली में नाम आर्ट, हर नाम का अर्थ और कहानी, और पाँच तत्वों का विश्लेषण। खरीद के बाद 24 घंटे तक डाउनलोड करें।",
    select: "नाम चुनें",
    buy: "रिपोर्ट खरीदें · US$9.99",
    paying: "भुगतान प्रोसेस हो रहा है…",
    generating: "रिपोर्ट बन रही है… (लगभग 1 मिनट)",
    download: "PDF डाउनलोड करें",
    resume: "पिछली खरीद जारी रखें",
    failed: "कुछ गलत हुआ। कृपया फिर से कोशिश करें।",
    cancel: "भुगतान रद्द करें",
    preparing: "भुगतान सुविधा जल्द आ रही है।",
    artTitle: "हंगुल नाम आर्ट (PDF)",
    artDesc: "आपके नाम की हांगुल लिखावट, आपकी चुनी शैली में सुलेख कला के रूप में, उच्चारण गाइड के साथ। खरीद के बाद 24 घंटे तक डाउनलोड करें।",
    artBuy: "आर्ट PDF खरीदें · US$2.99",
    fontSelect: "लिपि शैली चुनें",
    packTitle: "नाम आर्ट पैक (PDF)",
    packDesc: "आपका चुना एक नाम, आपकी चुनी हर सुलेख शैली में एक-एक आर्ट पेज के रूप में — हर शैली की अपनी कहानी है। 24 घंटे तक डाउनलोड करें।",
    packBuy: "आर्ट पैक खरीदें",
    fontMore: "सभी लिपि शैलियाँ देखें",
  },
  km: {
    title: "របាយការណ៍ឈ្មោះកូរ៉េពិសេស (PDF)",
    desc: "ឈ្មោះកូរ៉េដែលបានណែនាំទាំងអស់ក្នុង PDF អនុស្សាវរីយ៍តែមួយ — សិល្បៈឈ្មោះតាមបែបអក្សរដែលអ្នកជ្រើសរើស អត្ថន័យនិងរឿងរ៉ាវនៃឈ្មោះនីមួយៗ និងការវិភាគធាតុទាំងប្រាំ។ ទាញយកបានក្នុងរយៈពេល 24 ម៉ោងបន្ទាប់ពីទិញ។",
    select: "ជ្រើសរើសឈ្មោះ",
    buy: "ទិញរបាយការណ៍ · US$9.99",
    paying: "កំពុងដំណើរការទូទាត់…",
    generating: "កំពុងបង្កើតរបាយការណ៍… (ប្រហែល 1 នាទី)",
    download: "ទាញយក PDF",
    resume: "បន្តការទិញមុន",
    failed: "មានបញ្ហាកើតឡើង។ សូមព្យាយាមម្តងទៀត។",
    cancel: "បោះបង់ការទូទាត់",
    preparing: "មុខងារទូទាត់នឹងមកដល់ឆាប់ៗនេះ។",
    artTitle: "សិល្បៈឈ្មោះហាន់ហ្គុល (PDF)",
    artDesc: "ការសរសេរឈ្មោះរបស់អ្នកជាអក្សរហាំងកឹល ជាសិល្បៈអក្សរសាស្ត្រតាមបែបអក្សរដែលអ្នកជ្រើសរើស រួមជាមួយការណែនាំការបញ្ចេញសំឡេង។ ទាញយកបានក្នុងរយៈពេល 24 ម៉ោងបន្ទាប់ពីទិញ។",
    artBuy: "ទិញ PDF សិល្បៈ · US$2.99",
    fontSelect: "ជ្រើសរើសរចនាប័ទ្មអក្សរ",
    packTitle: "កញ្ចប់សិល្បៈឈ្មោះ (PDF)",
    packDesc: "ឈ្មោះមួយដែលអ្នកជ្រើសរើស ត្រូវបានបង្កើតជាទំព័រសិល្បៈមួយទំព័រក្នុងមួយរចនាប័ទ្មអក្សរដែលអ្នកជ្រើស — រចនាប័ទ្មនីមួយៗមានរឿងរ៉ាវផ្ទាល់ខ្លួន។ ទាញយកបាន 24 ម៉ោង។",
    packBuy: "ទិញកញ្ចប់សិល្បៈ",
    fontMore: "មើលរចនាប័ទ្មអក្សរទាំងអស់",
  },
  kk: {
    title: "Премиум корей есімі есебі (PDF)",
    desc: "Ұсынылған барлық корей есімдері бір естелік PDF-те — сіз таңдаған каллиграфиялық стильдегі есім өнері, әр есімнің мағынасы мен тарихы және бес элемент талдауы. Сатып алғаннан кейін 24 сағат ішінде жүктеп алуға болады.",
    select: "Есім таңдаңыз",
    buy: "Есепті сатып алу · US$9.99",
    paying: "Төлем өңделуде…",
    generating: "Есеп дайындалуда… (шамамен 1 минут)",
    download: "PDF жүктеп алу",
    resume: "Алдыңғы сатып алуды жалғастыру",
    failed: "Қате пайда болды. Қайталап көріңіз.",
    cancel: "Төлемді болдырмау",
    preparing: "Төлем мүмкіндігі жақында қосылады.",
    artTitle: "Хангыл есім өнері (PDF)",
    artDesc: "Есіміңіздің хангыль жазылуы сіз таңдаған стильдегі каллиграфиялық өнер ретінде, айтылу нұсқаулығымен бірге. Сатып алғаннан кейін 24 сағат ішінде жүктеп алуға болады.",
    artBuy: "Өнер PDF сатып алу · US$2.99",
    fontSelect: "Қаріп стилін таңдаңыз",
    packTitle: "Есім өнер жинағы (PDF)",
    packDesc: "Таңдалған бір есім — сіз таңдаған әр каллиграфиялық стильде бір-бір өнер бетінен. Әр стильдің өз тарихы бар. 24 сағат жүктеледі.",
    packBuy: "Өнер жинағын сатып алу",
    fontMore: "Барлық қаріп стильдерін көру",
  },
  ms: {
    title: "Laporan Nama Korea Premium (PDF)",
    desc: "Semua nama Korea yang disyorkan dalam satu PDF kenangan — seni nama dalam gaya kaligrafi pilihan anda, makna dan kisah setiap nama, serta analisis lima elemen. Boleh dimuat turun selama 24 jam selepas pembelian.",
    select: "Pilih nama",
    buy: "Beli laporan · US$9.99",
    paying: "Memproses pembayaran…",
    generating: "Menyediakan laporan… (kira-kira 1 minit)",
    download: "Muat turun PDF",
    resume: "Sambung pembelian sebelumnya",
    failed: "Berlaku ralat. Sila cuba lagi.",
    cancel: "Batalkan pembayaran",
    preparing: "Fungsi pembayaran akan datang tidak lama lagi.",
    artTitle: "Seni Nama Hangul (PDF)",
    artDesc: "Ejaan Hangul nama anda sebagai seni kaligrafi dalam gaya huruf pilihan anda, berserta panduan sebutan. Boleh dimuat turun selama 24 jam selepas pembelian.",
    artBuy: "Beli PDF seni · US$2.99",
    fontSelect: "Pilih gaya tulisan",
    packTitle: "Pek Seni Nama (PDF)",
    packDesc: "Satu nama pilihan anda, dijadikan satu halaman seni bagi setiap gaya kaligrafi yang anda pilih — setiap gaya ada kisahnya sendiri. Boleh dimuat turun 24 jam.",
    packBuy: "Beli pek seni",
    fontMore: "Lihat semua gaya tulisan",
  },
  pl: {
    title: "Raport premium o koreańskim imieniu (PDF)",
    desc: "Wszystkie polecane koreańskie imiona w jednym pamiątkowym PDF — sztuka imienia w wybranym stylu kaligrafii, znaczenie i historia każdego imienia oraz analiza pięciu żywiołów. Do pobrania przez 24 godziny po zakupie.",
    select: "Wybierz imię",
    buy: "Kup raport · US$9.99",
    paying: "Przetwarzanie płatności…",
    generating: "Tworzenie raportu… (około 1 minuty)",
    download: "Pobierz PDF",
    resume: "Wznów poprzedni zakup",
    failed: "Coś poszło nie tak. Spróbuj ponownie.",
    cancel: "Anuluj płatność",
    preparing: "Płatności będą dostępne wkrótce.",
    artTitle: "Sztuka imienia w hangulu (PDF)",
    artDesc: "Zapis twojego imienia w hangul jako sztuka kaligrafii w wybranym stylu, z przewodnikiem wymowy. Do pobrania przez 24 godziny po zakupie.",
    artBuy: "Kup artystyczny PDF · US$2.99",
    fontSelect: "Wybierz style pisma",
    packTitle: "Pakiet artystyczny imienia (PDF)",
    packDesc: "Jedno wybrane imię — po jednej stronie artystycznej w każdym wybranym stylu kaligrafii. Każdy styl ma własną historię. Do pobrania przez 24 godziny.",
    packBuy: "Kup pakiet artystyczny",
    fontMore: "Zobacz wszystkie style",
  },
};

type PremiumProductKey = "GLOBAL_NAME_PDF" | "HANGUL_ART_PDF" | "NAME_ART_PACK";

type FontOption = {
  code: string;
  name: string;
  story: string;
  copyright: string;
  sourceUrl: string;
  preview: string | null;
};

type ProductInfo = { amount: number; currency: string; display: string; fontCount: number };

// 문구에 박힌 가격 표기를 떼고 관리자 설정의 현재 가격을 붙인다(가격 조정형 대응).
function withPrice(label: string, info: ProductInfo | null) {
  const base = label.replace(/\s*·\s*US\$[\d.]+\s*$/, "");
  return info ? `${base} · ${info.display}` : base;
}

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

// 서체 칩(메인 그리드·더보기 시트 공용) — 모바일 터치 타깃을 넉넉히 잡는다.
function FontChip({
  font,
  selected,
  disabled,
  onToggle,
  onInfo,
}: {
  font: FontOption;
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
  onInfo: () => void;
}) {
  return (
    <div
      className={`relative rounded-lg border p-2.5 transition ${
        selected
          ? "border-brand-teal bg-surface-strong"
          : "border-line bg-background hover:border-brand-teal/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        className="block min-h-[84px] w-full text-left"
      >
        {font.preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={font.preview} alt={font.name} className="h-20 w-full object-contain" />
        ) : null}
        <span className="mt-1.5 block truncate text-xs font-medium">{font.name}</span>
      </button>
      <button
        type="button"
        onClick={onInfo}
        aria-label={`${font.name} info`}
        className="absolute right-1.5 top-1.5 flex size-7 items-center justify-center rounded-full border border-line bg-surface text-xs font-semibold text-muted"
      >
        i
      </button>
    </div>
  );
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
  const isPack = product === "NAME_ART_PACK";
  const productCopy = isPack
    ? { title: copy.packTitle, desc: copy.packDesc, buy: copy.packBuy }
    : isArt
      ? { title: copy.artTitle, desc: copy.artDesc, buy: copy.artBuy }
      : { title: copy.title, desc: copy.desc, buy: copy.buy };
  const [fontOptions, setFontOptions] = useState<FontOption[]>([]);
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
  const [selectedFonts, setSelectedFonts] = useState<string[]>([]);
  const [infoFont, setInfoFont] = useState<FontOption | null>(null);
  const [showAllFonts, setShowAllFonts] = useState(false);
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
  // 결제 완료 표시가 있는 저장 체크아웃은 그대로 이어받기로 노출한다. 다만 페이팔 승인 직후 탭이 닫히면
  // onPaymentSuccess가 실행되지 못해 표시가 남지 않으므로, 표시가 없는 체크아웃은 서버에 결제 여부를
  // 확인한다(confirm은 멱등이고 미결제면 실패만 돌려준다). 없으면 "돈은 빠졌는데 이어받기가 안 보이는"
  // 상태로 남는다.
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const stored = readStoredCheckout(product);
      if (!stored) return;
      if (stored.paid) {
        setResumable(stored);
        return;
      }
      const confirmed = await postJson("/api/premium-reports/confirm", {
        sessionId: stored.sessionId,
        paymentId: stored.paymentId,
        accessToken: stored.accessToken,
      }).catch(() => null);
      if (cancelled || !confirmed?.response.ok || !confirmed.data?.ok) return;
      const recovered = { ...stored, paid: true };
      try {
        localStorage.setItem(checkoutStorageKey(product), JSON.stringify(recovered));
      } catch {
        // 저장에 실패해도 이 화면 안에서는 이어받기가 가능하다.
      }
      setResumable(recovered);
    })();
    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      void supabase.auth.getSession().then(({ data }) => {
        const session = data.session;
        if (!cancelled && session?.user && hasAdminRole(session.user.app_metadata)) {
          setAdminToken(session.access_token);
        }
      });
    }
    return () => {
      cancelled = true;
    };
  }, [product]);

  // 가격·서체 수(관리자 설정)와 서체 목록(로케일 스토리 포함)을 불러온다.
  useEffect(() => {
    void (async () => {
      try {
        const [infoResponse, fontsResponse] = await Promise.all([
          fetch(`/api/product-info?codes=${product}`),
          fetch(`/api/report-fonts?lang=${locale ?? "en"}`),
        ]);
        const info = (await infoResponse.json().catch(() => null)) as
          | { ok?: boolean; products?: Record<string, ProductInfo> }
          | null;
        const fonts = (await fontsResponse.json().catch(() => null)) as
          | { ok?: boolean; fonts?: FontOption[] }
          | null;
        setProductInfo(info?.products?.[product] ?? null);
        setFontOptions(fonts?.fonts ?? []);
      } catch {
        // 로드 실패 시 버튼은 준비 중 상태로 남는다.
      }
    })();
  }, [product, locale]);

  const requiredFonts = productInfo?.fontCount ?? 0;

  function toggleFont(code: string) {
    setSelectedFonts((current) => {
      if (current.includes(code)) return current.filter((item) => item !== code);
      if (current.length < requiredFonts) return [...current, code];
      // 이미 가득 차 있으면 가장 먼저 고른 것을 새 선택으로 교체한다.
      return [...current.slice(1), code];
    });
  }
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
        body: JSON.stringify(
          isPack
            ? { product, inputFactors, candidate, locale, fontCodes: selectedFonts }
            : { product, inputFactors, candidates, locale, fontCodes: selectedFonts },
        ),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "테스트 PDF 생성에 실패했습니다.");
      }
      const url = URL.createObjectURL(await response.blob());
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `naminglink-global-premium-${isPack ? candidate.hangul : candidates[0]?.hangul ?? "report"}.pdf`;
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
    // 결제는 끝났는데 리포트를 아직 못 받은 구매가 남아 있으면 새 주문으로 덮어쓰지 않는다.
    // 덮어쓰면 그 구매의 접근 토큰이 사라져 결제한 산출물을 영영 못 받는다.
    const pending = readStoredCheckout(product);
    if (pending?.paid) {
      setResumable(pending);
      return;
    }
    setStage("ordering");
    try {
      const candidate = selectable[selectedIndex] ?? selectable[0];
      // 아트 팩은 선택한 후보 1개, 나머지는 전체 후보를 담는다. 서체 코드도 함께 보낸다.
      const order = await postJson("/api/premium-reports/global-order", {
        product,
        inputFactors,
        ...(isPack ? { candidate } : { candidates }),
        fontCodes: selectedFonts,
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
        hangul: isPack ? candidate.hangul : candidates.map((item) => item.hangul).join(" · "),
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

      {requiredFonts > 0 && fontOptions.length > 0 ? (
        <div className="mt-4">
          <p className="text-xs font-medium text-muted">
            {copy.fontSelect} ({selectedFonts.length}/{requiredFonts})
          </p>
          {/* 인기순 상위 4종만 크게 노출하고, 나머지는 더보기 시트에서 고른다(모바일 우선). */}
          <div className="mt-2 grid grid-cols-2 gap-3">
            {fontOptions.slice(0, 4).map((font) => (
              <FontChip
                key={font.code}
                font={font}
                selected={selectedFonts.includes(font.code)}
                disabled={busy || stage === "ready"}
                onToggle={() => toggleFont(font.code)}
                onInfo={() => setInfoFont(font)}
              />
            ))}
          </div>
          {fontOptions.length > 4 ? (
            <button
              type="button"
              onClick={() => setShowAllFonts(true)}
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg border border-line bg-background text-sm font-semibold text-foreground"
            >
              {copy.fontMore} ({fontOptions.length})
            </button>
          ) : null}
          {selectedFonts.length > 0 ? (
            <div className="mt-3 grid gap-1.5">
              {selectedFonts.map((code) => {
                const font = fontOptions.find((option) => option.code === code);
                if (!font) return null;
                return (
                  <p key={code} className="text-xs leading-5 text-muted">
                    <span className="font-semibold text-foreground">{font.name}</span> — {font.story}
                  </p>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        {isPack ? (
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
        ) : (
          <p className="self-end pb-2 text-sm font-medium">
            {candidates.map((candidate) => candidate.hangul).join(" · ")}
          </p>
        )}
        {stage === "ready" ? (
          <button
            type="button"
            onClick={downloadPdf}
            className="inline-flex h-11 items-center justify-center gap-2 self-end rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal"
          >
            <FileText aria-hidden="true" size={17} />
            {copy.download}
          </button>
        ) : configured && productInfo ? (
          <button
            type="button"
            onClick={startPurchase}
            disabled={busy || (requiredFonts > 0 && selectedFonts.length !== requiredFonts)}
            className="inline-flex h-11 items-center justify-center gap-2 self-end rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FileText aria-hidden="true" size={17} />
            {busy ? busyLabel : withPrice(productCopy.buy, productInfo)}
          </button>
        ) : (
          <button
            type="button"
            disabled
            title={copy.preparing}
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 self-end rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
          >
            <FileText aria-hidden="true" size={17} />
            {withPrice(productCopy.buy, productInfo)}
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
          {testBusy ? "테스트 PDF 생성 중…" : "운영자 테스트: 결제 없이 PDF 받기"}
        </button>
      ) : null}
      {stage === "paying" ? (
        <>
          <div className="portone-ui-container mt-4" />
          {/* 페이팔 SPB는 페이지 안에 버튼을 그리는 방식이라, 결제를 그만두려는 사람에게 빠져나갈
              길이 없으면 결제 단계에 갇힌 채로 남는다. 아직 결제가 성립하지 않은 단계이므로
              화면 상태만 되돌리면 되고, 미결제 주문은 파기 크론이 24시간 뒤 정리한다. */}
          <button
            type="button"
            onClick={() => {
              setPaypalRequest(null);
              setStage("idle");
            }}
            className="mt-2 w-full rounded-lg border border-line px-4 py-2 text-sm text-muted-foreground"
          >
            {copy.cancel}
          </button>
        </>
      ) : null}
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

      {showAllFonts ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-5"
          onClick={() => setShowAllFonts(false)}
          role="presentation"
        >
          <div
            className="flex max-h-[85vh] w-full max-w-lg flex-col rounded-t-2xl bg-surface sm:rounded-lg"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <p className="text-sm font-semibold">
                {copy.fontSelect} ({selectedFonts.length}/{requiredFonts})
              </p>
              <button
                type="button"
                onClick={() => setShowAllFonts(false)}
                aria-label="close"
                className="flex size-8 items-center justify-center rounded-full border border-line text-sm text-muted"
              >
                ×
              </button>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto p-5">
              {fontOptions.map((font) => (
                <FontChip
                  key={font.code}
                  font={font}
                  selected={selectedFonts.includes(font.code)}
                  disabled={busy || stage === "ready"}
                  onToggle={() => toggleFont(font.code)}
                  onInfo={() => setInfoFont(font)}
                />
              ))}
            </div>
            <div className="border-t border-line p-4">
              <button
                type="button"
                onClick={() => setShowAllFonts(false)}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-foreground text-sm font-semibold text-background"
              >
                OK ({selectedFonts.length}/{requiredFonts})
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {infoFont ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5"
          onClick={() => setInfoFont(null)}
          role="presentation"
        >
          <div
            className="w-full max-w-md rounded-lg bg-surface p-5 shadow-lg"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {infoFont.preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={infoFont.preview}
                alt={infoFont.name}
                className="h-20 w-full object-contain"
              />
            ) : null}
            <p className="mt-3 text-base font-semibold">{infoFont.name}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{infoFont.story}</p>
            <p className="mt-3 text-xs text-muted">{infoFont.copyright}</p>
            <a
              href={infoFont.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block truncate text-xs text-brand-teal underline underline-offset-2"
            >
              {infoFont.sourceUrl}
            </a>
            <button
              type="button"
              onClick={() => setInfoFont(null)}
              className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-foreground text-sm font-semibold text-background"
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
