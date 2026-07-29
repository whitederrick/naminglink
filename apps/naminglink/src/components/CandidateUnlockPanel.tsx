"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { CheckoutConsent } from "@/components/CheckoutConsent";
import { CreditCard, Eye, Unlock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { trackAdEvent } from "@/lib/analytics-client";

const UNLOCK_AD_SECONDS = 5;

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서만 로케일 문구를 쓰고, 한국어 대상 서비스는 항상 ko를 유지한다.
type UnlockCopy = {
  title: string;
  status: (revealed: number, locked: number) => string;
  descHanja: string;
  descDefault: string;
  watchingNote: (seconds: number) => string;
  watching: string;
  watchButton: string;
  hanjaProductsLink: string;
  /** 살 수 없을 때의 버튼 라벨. **가격이 들어가면 안 된다** — 팔지 않는 값을 노출하게 된다. */
  bulkPreparing: string;
  /** 살 수 있을 때의 버튼 라벨. `{price}`는 DB에서 온 표시 가격으로 바뀐다. */
  bulkButtonReady: string;
  bulkPaying: string;
  bulkFailed: string;
};

const unlockCopies: Record<string, UnlockCopy> = {
  ko: {
    title: "추가 후보 열기",
    status: (revealed, locked) => `현재 ${revealed}개 공개 · ${locked}개 잠금`,
    descHanja:
      "광고를 한 번 확인할 때마다 서로 다른 추천 관점의 다음 후보 1개가 열립니다. 전체 결제 시에는 모든 후보와 한자 종합 상세를 광고 없이 확인할 수 있도록 준비 중입니다.",
    descDefault:
      "광고를 한 번 확인할 때마다 서로 다른 추천 관점의 다음 후보 1개가 열립니다. 990원 결제로 남은 후보 전체를 광고 없이 한 번에 공개하는 기능을 준비 중입니다.",
    watchingNote: (seconds) => `광고 확인 후 후보 1개를 엽니다. ${seconds}초`,
    watching: "광고 확인 중",
    watchButton: "광고 보고 다음 후보 열기",
    // 금액을 적지 않는다. 이 링크가 가리키는 상품표는 DB 가격을 그리고 판매 중이 아니면
    // "판매 준비 중"으로 바뀌는데, 여기에 "2,900원부터"가 박혀 있으면 그와 어긋난다.
    hanjaProductsLink: "전체 후보 상품 보기",
    bulkPreparing: "결제 기능 준비 중입니다.",
    bulkButtonReady: "전체 후보 일괄 공개 · {price}",
    bulkPaying: "결제 진행 중…",
    bulkFailed: "결제가 완료되지 않았습니다. 다시 시도해 주세요.",
  },
  vi: {
    title: "Mở thêm ứng viên",
    status: (revealed, locked) => `Đã mở ${revealed} · còn khóa ${locked}`,
    descHanja:
      "Mỗi lần xem quảng cáo sẽ mở thêm một ứng viên với góc nhìn khác.",
    descDefault:
      "Mỗi lần xem quảng cáo sẽ mở thêm một ứng viên với góc nhìn khác. Tính năng mở toàn bộ ứng viên còn lại với US$1.99 sắp ra mắt.",
    watchingNote: (seconds) => `Sẽ mở một ứng viên sau quảng cáo. ${seconds} giây`,
    watching: "Đang xem quảng cáo",
    watchButton: "Xem quảng cáo để mở ứng viên tiếp theo",
    hanjaProductsLink: "Xem gói toàn bộ ứng viên · từ ₩2.900",
    bulkPreparing: "Tính năng thanh toán sắp ra mắt.",
    bulkButtonReady: "Mở toàn bộ ứng viên · {price}",
    bulkPaying: "Đang xử lý thanh toán…",
    bulkFailed: "Thanh toán chưa hoàn tất. Vui lòng thử lại.",
  },
  th: {
    title: "เปิดชื่อที่แนะนำเพิ่มเติม",
    status: (revealed, locked) => `เปิดแล้ว ${revealed} รายการ · ล็อกอยู่ ${locked} รายการ`,
    descHanja:
      "การชมโฆษณาแต่ละครั้งจะเปิดชื่อที่แนะนำถัดไปอีก 1 รายการจากมุมมองการแนะนำที่ต่างกัน",
    descDefault:
      "การชมโฆษณาแต่ละครั้งจะเปิดชื่อที่แนะนำถัดไปอีก 1 รายการจากมุมมองการแนะนำที่ต่างกัน ฟีเจอร์ปลดล็อกชื่อที่แนะนำที่เหลือทั้งหมดในครั้งเดียวด้วย US$1.99 กำลังจะเปิดเร็ว ๆ นี้",
    watchingNote: (seconds) => `จะเปิดชื่อที่แนะนำ 1 รายการหลังชมโฆษณา ${seconds} วินาที`,
    watching: "กำลังชมโฆษณา",
    watchButton: "ชมโฆษณาเพื่อเปิดชื่อที่แนะนำถัดไป",
    hanjaProductsLink: "ดูแพ็กเกจชื่อที่แนะนำทั้งหมด · เริ่มต้น ₩2,900",
    bulkPreparing: "ฟีเจอร์การชำระเงินกำลังจะเปิดเร็ว ๆ นี้",
    bulkButtonReady: "เปิดชื่อที่แนะนำทั้งหมดในครั้งเดียว · {price}",
    bulkPaying: "กำลังดำเนินการชำระเงิน…",
    bulkFailed: "การชำระเงินยังไม่เสร็จสิ้น กรุณาลองอีกครั้ง",
  },
  ja: {
    title: "追加の候補を開く",
    status: (revealed, locked) => `現在${revealed}件公開 · ${locked}件ロック中`,
    descHanja:
      "広告を1回確認するごとに、異なる推薦観点の次の候補が1件開きます。",
    descDefault:
      "広告を1回確認するごとに、異なる推薦観点の次の候補が1件開きます。残りの候補全体をUS$1.99で広告なしで一括公開する機能を準備中です。",
    watchingNote: (seconds) => `広告の確認後に候補を1件開きます。${seconds}秒`,
    watching: "広告を確認中",
    watchButton: "広告を見て次の候補を開く",
    hanjaProductsLink: "全候補の商品を見る · ₩2,900から",
    bulkPreparing: "決済機能は準備中です。",
    bulkButtonReady: "全候補を一括公開 · {price}",
    bulkPaying: "決済処理中…",
    bulkFailed: "決済が完了しませんでした。もう一度お試しください。",
  },
  zh: {
    title: "解锁更多候选名字",
    status: (revealed, locked) => `已公开 ${revealed} 个 · 锁定 ${locked} 个`,
    descHanja:
      "每观看一次广告，即可解锁下一个不同推荐角度的候选名字。",
    descDefault:
      "每观看一次广告，即可解锁下一个不同推荐角度的候选名字。以 US$1.99 一次性无广告解锁全部剩余候选名字的功能即将上线。",
    watchingNote: (seconds) => `观看广告后将解锁 1 个候选名字。${seconds} 秒`,
    watching: "正在观看广告",
    watchButton: "观看广告解锁下一个候选名字",
    hanjaProductsLink: "查看全部候选产品 · ₩2,900 起",
    bulkPreparing: "支付功能即将上线。",
    bulkButtonReady: "一次性解锁全部候选名字 · {price}",
    bulkPaying: "正在处理付款…",
    bulkFailed: "付款未完成，请重试。",
  },
  id: {
    title: "Buka kandidat lainnya",
    status: (revealed, locked) => `${revealed} terbuka · ${locked} terkunci`,
    descHanja:
      "Setiap kali menonton iklan, satu kandidat berikutnya dengan sudut pandang rekomendasi berbeda akan terbuka.",
    descDefault:
      "Setiap kali menonton iklan, satu kandidat berikutnya dengan sudut pandang rekomendasi berbeda akan terbuka. Fitur membuka seluruh kandidat tersisa sekaligus seharga US$1.99 segera hadir.",
    watchingNote: (seconds) => `Satu kandidat terbuka setelah iklan. ${seconds} detik`,
    watching: "Menonton iklan",
    watchButton: "Tonton iklan untuk membuka kandidat berikutnya",
    hanjaProductsLink: "Lihat produk seluruh kandidat · mulai ₩2,900",
    bulkPreparing: "Fitur pembayaran segera hadir.",
    bulkButtonReady: "Buka seluruh kandidat sekaligus · {price}",
    bulkPaying: "Memproses pembayaran…",
    bulkFailed: "Pembayaran belum selesai. Silakan coba lagi.",
  },
  de: {
    title: "Weitere Kandidaten freischalten",
    status: (revealed, locked) => `${revealed} freigeschaltet · ${locked} gesperrt`,
    descHanja:
      "Mit jeder angesehenen Werbung wird der nächste Kandidat mit einer anderen Empfehlungsperspektive freigeschaltet.",
    descDefault:
      "Mit jeder angesehenen Werbung wird der nächste Kandidat mit einer anderen Empfehlungsperspektive freigeschaltet. Eine einmalige Freischaltung aller verbleibenden Kandidaten für US$1.99 ist in Vorbereitung.",
    watchingNote: (seconds) => `Nach der Werbung wird ein Kandidat freigeschaltet. ${seconds} Sek.`,
    watching: "Werbung läuft",
    watchButton: "Werbung ansehen und nächsten Kandidaten freischalten",
    hanjaProductsLink: "Alle Kandidaten-Produkte ansehen · ab ₩2,900",
    bulkPreparing: "Die Zahlungsfunktion ist in Vorbereitung.",
    bulkButtonReady: "Alle Kandidaten freischalten · {price}",
    bulkPaying: "Zahlung wird verarbeitet…",
    bulkFailed: "Die Zahlung wurde nicht abgeschlossen. Bitte versuchen Sie es erneut.",
  },
  es: {
    title: "Desbloquea más candidatos",
    status: (revealed, locked) => `${revealed} revelados · ${locked} bloqueados`,
    descHanja:
      "Cada anuncio que ves desbloquea el siguiente candidato con una perspectiva de recomendación distinta.",
    descDefault:
      "Cada anuncio que ves desbloquea el siguiente candidato con una perspectiva de recomendación distinta. Próximamente podrás desbloquear de una sola vez todos los candidatos restantes por US$1.99.",
    watchingNote: (seconds) => `Se desbloqueará un candidato tras el anuncio. ${seconds} s`,
    watching: "Viendo el anuncio",
    watchButton: "Ver un anuncio para desbloquear el siguiente candidato",
    hanjaProductsLink: "Ver productos con todos los candidatos · desde ₩2,900",
    bulkPreparing: "El pago estará disponible próximamente.",
    bulkButtonReady: "Desbloquear todos los candidatos · {price}",
    bulkPaying: "Procesando el pago…",
    bulkFailed: "El pago no se completó. Inténtalo de nuevo.",
  },
  fr: {
    title: "Débloquez plus de candidats",
    status: (revealed, locked) => `${revealed} dévoilés · ${locked} verrouillés`,
    descHanja:
      "Chaque publicité regardée dévoile le candidat suivant, avec une perspective de recommandation différente.",
    descDefault:
      "Chaque publicité regardée dévoile le candidat suivant, avec une perspective de recommandation différente. Un déblocage unique de tous les candidats restants pour US$1.99 arrive bientôt.",
    watchingNote: (seconds) => `Un candidat sera dévoilé après la publicité. ${seconds} s`,
    watching: "Publicité en cours",
    watchButton: "Regarder une publicité pour dévoiler le candidat suivant",
    hanjaProductsLink: "Voir les offres tous candidats · à partir de ₩2,900",
    bulkPreparing: "Le paiement sera bientôt disponible.",
    bulkButtonReady: "Débloquer tous les candidats · {price}",
    bulkPaying: "Paiement en cours…",
    bulkFailed: "Le paiement n'a pas été finalisé. Veuillez réessayer.",
  },
  it: {
    title: "Sblocca altri candidati",
    status: (revealed, locked) => `${revealed} rivelati · ${locked} bloccati`,
    descHanja:
      "Ogni annuncio guardato sblocca il candidato successivo, con una prospettiva di raccomandazione diversa.",
    descDefault:
      "Ogni annuncio guardato sblocca il candidato successivo, con una prospettiva di raccomandazione diversa. Presto potrai sbloccare in una sola volta tutti i candidati rimanenti per US$1.99.",
    watchingNote: (seconds) => `Un candidato verrà sbloccato dopo l'annuncio. ${seconds} s`,
    watching: "Annuncio in corso",
    watchButton: "Guarda un annuncio per sbloccare il prossimo candidato",
    hanjaProductsLink: "Vedi i prodotti con tutti i candidati · da ₩2,900",
    bulkPreparing: "Il pagamento sarà presto disponibile.",
    bulkButtonReady: "Sblocca tutti i candidati · {price}",
    bulkPaying: "Pagamento in corso…",
    bulkFailed: "Il pagamento non è stato completato. Riprova.",
  },
  pt: {
    title: "Desbloqueie mais candidatos",
    status: (revealed, locked) => `${revealed} revelados · ${locked} bloqueados`,
    descHanja:
      "Cada anúncio assistido revela o próximo candidato, com uma perspectiva de recomendação diferente.",
    descDefault:
      "Cada anúncio assistido revela o próximo candidato, com uma perspectiva de recomendação diferente. Em breve você poderá desbloquear de uma só vez todos os candidatos restantes por US$1.99.",
    watchingNote: (seconds) => `Um candidato será revelado após o anúncio. ${seconds} s`,
    watching: "Assistindo ao anúncio",
    watchButton: "Assistir a um anúncio para revelar o próximo candidato",
    hanjaProductsLink: "Ver produtos com todos os candidatos · a partir de ₩2,900",
    bulkPreparing: "O pagamento estará disponível em breve.",
    bulkButtonReady: "Desbloquear todos os candidatos · {price}",
    bulkPaying: "Processando o pagamento…",
    bulkFailed: "O pagamento não foi concluído. Tente novamente.",
  },
  ru: {
    title: "Откройте больше вариантов",
    status: (revealed, locked) => `Открыто: ${revealed} · Заблокировано: ${locked}`,
    descHanja:
      "Каждый просмотр рекламы открывает следующий вариант с другой точкой зрения рекомендации.",
    descDefault:
      "Каждый просмотр рекламы открывает следующий вариант с другой точкой зрения рекомендации. Скоро появится разовая разблокировка всех оставшихся вариантов за US$1.99.",
    watchingNote: (seconds) => `После рекламы откроется один вариант. ${seconds} с`,
    watching: "Просмотр рекламы",
    watchButton: "Посмотреть рекламу и открыть следующий вариант",
    hanjaProductsLink: "Смотреть продукты со всеми вариантами · от ₩2,900",
    bulkPreparing: "Оплата скоро появится.",
    bulkButtonReady: "Открыть все варианты · {price}",
    bulkPaying: "Обработка платежа…",
    bulkFailed: "Платёж не был завершён. Попробуйте ещё раз.",
  },
  ar: {
    title: "افتح مزيدًا من المرشحات",
    status: (revealed, locked) => `${revealed} مكشوف · ${locked} مقفل`,
    descHanja:
      "كل إعلان تشاهده يكشف المرشح التالي من منظور توصية مختلف.",
    descDefault:
      "كل إعلان تشاهده يكشف المرشح التالي من منظور توصية مختلف. قريبًا: فتح جميع المرشحات المتبقية دفعة واحدة مقابل US$1.99.",
    watchingNote: (seconds) => `سيُكشف مرشح واحد بعد الإعلان. ${seconds} ثانية`,
    watching: "جارٍ مشاهدة الإعلان",
    watchButton: "شاهد إعلانًا لكشف المرشح التالي",
    hanjaProductsLink: "عرض منتجات جميع المرشحات · ابتداءً من ₩2,900",
    bulkPreparing: "الدفع متاح قريبًا.",
    bulkButtonReady: "فتح جميع المرشحات · {price}",
    bulkPaying: "جارٍ معالجة الدفع…",
    bulkFailed: "لم يكتمل الدفع. يرجى المحاولة مرة أخرى.",
  },
  tr: {
    title: "Daha fazla adayın kilidini açın",
    status: (revealed, locked) => `${revealed} açıldı · ${locked} kilitli`,
    descHanja:
      "İzlediğiniz her reklam, farklı bir öneri bakış açısına sahip bir sonraki adayı açar.",
    descDefault:
      "İzlediğiniz her reklam, farklı bir öneri bakış açısına sahip bir sonraki adayı açar. Kalan tüm adayları US$1.99 karşılığında tek seferde açma özelliği yakında geliyor.",
    watchingNote: (seconds) => `Reklamdan sonra bir aday açılacak. ${seconds} sn`,
    watching: "Reklam izleniyor",
    watchButton: "Bir sonraki adayı açmak için reklam izleyin",
    hanjaProductsLink: "Tüm aday ürünlerini gör · ₩2,900'dan itibaren",
    bulkPreparing: "Ödeme yakında kullanılabilir olacak.",
    bulkButtonReady: "Tüm adayları aç · {price}",
    bulkPaying: "Ödeme işleniyor…",
    bulkFailed: "Ödeme tamamlanmadı. Lütfen tekrar deneyin.",
  },
  fil: {
    title: "Magbukas ng higit pang kandidato",
    status: (revealed, locked) => `${revealed} bukas · ${locked} naka-lock`,
    descHanja:
      "Bawat ad na pinapanood mo ay nagbubukas ng susunod na kandidato mula sa ibang pananaw ng rekomendasyon.",
    descDefault:
      "Bawat ad na pinapanood mo ay nagbubukas ng susunod na kandidato mula sa ibang pananaw ng rekomendasyon. Malapit na ang isang beses na pagbubukas ng lahat ng natitirang kandidato sa halagang US$1.99.",
    watchingNote: (seconds) => `Magbubukas ng isang kandidato pagkatapos ng ad. ${seconds} segundo`,
    watching: "Nanonood ng ad",
    watchButton: "Manood ng ad para buksan ang susunod na kandidato",
    hanjaProductsLink: "Tingnan ang mga produkto ng buong kandidato · mula ₩2,900",
    bulkPreparing: "Malapit nang magbukas ang pagbabayad.",
    bulkButtonReady: "Buksan ang lahat ng kandidato · {price}",
    bulkPaying: "Pinoproseso ang bayad…",
    bulkFailed: "Hindi natapos ang bayad. Pakisubukang muli.",
  },
  uz: {
    title: "Ko‘proq nomzodlarni oching",
    status: (revealed, locked) => `${revealed} ta ochilgan · ${locked} ta yopiq`,
    descHanja:
      "Har bir ko‘rilgan reklama boshqacha tavsiya nuqtai nazaridagi navbatdagi nomzodni ochadi.",
    descDefault:
      "Har bir ko‘rilgan reklama boshqacha tavsiya nuqtai nazaridagi navbatdagi nomzodni ochadi. Qolgan barcha nomzodlarni US$1.99 evaziga bir vaqtda ochish imkoniyati tez orada ishga tushadi.",
    watchingNote: (seconds) => `Reklamadan so‘ng bitta nomzod ochiladi. ${seconds} soniya`,
    watching: "Reklama ko‘rilmoqda",
    watchButton: "Navbatdagi nomzodni ochish uchun reklama ko‘ring",
    hanjaProductsLink: "Barcha nomzodli mahsulotlarni ko‘rish · ₩2,900 dan",
    bulkPreparing: "To‘lov tez orada ishga tushadi.",
    bulkButtonReady: "Barcha nomzodlarni ochish · {price}",
    bulkPaying: "To‘lov amalga oshirilmoqda…",
    bulkFailed: "To‘lov yakunlanmadi. Qayta urinib ko‘ring.",
  },
  mn: {
    title: "Нэрийн хувилбар нэмж нээх",
    status: (revealed, locked) => `${revealed} нээгдсэн · ${locked} түгжээтэй`,
    descHanja:
      "Зар үзэх бүрд өөр өнцгөөс санал болгосон дараагийн нэрийн хувилбар нэг нэгээр нээгдэнэ.",
    descDefault:
      "Зар үзэх бүрд өөр өнцгөөс санал болгосон дараагийн нэрийн хувилбар нэг нэгээр нээгдэнэ. Үлдсэн бүх хувилбарыг US$1.99-өөр нэг дор нээх боломж тун удахгүй нэмэгдэнэ.",
    watchingNote: (seconds) => `Зар үзсэний дараа нэг хувилбар нээгдэнэ. ${seconds} секунд`,
    watching: "Зар үзэж байна",
    watchButton: "Зар үзээд дараагийн хувилбарыг нээх",
    hanjaProductsLink: "Бүх хувилбарын бүтээгдэхүүнийг үзэх · ₩2,900-с эхэлнэ",
    bulkPreparing: "Төлбөрийн функц тун удахгүй нээгдэнэ.",
    bulkButtonReady: "Бүх хувилбарыг нэг дор нээх · {price}",
    bulkPaying: "Төлбөр боловсруулж байна…",
    bulkFailed: "Төлбөр амжилтгүй боллоо. Дахин оролдоно уу.",
  },
  hi: {
    title: "और उम्मीदवार नाम अनलॉक करें",
    status: (revealed, locked) => `${revealed} खुले · ${locked} लॉक`,
    descHanja:
      "हर विज्ञापन देखने पर एक अलग सिफ़ारिश दृष्टिकोण वाला अगला उम्मीदवार नाम खुलता है।",
    descDefault:
      "हर विज्ञापन देखने पर एक अलग सिफ़ारिश दृष्टिकोण वाला अगला उम्मीदवार नाम खुलता है। US$1.99 में बचे हुए सभी उम्मीदवार नाम एक साथ अनलॉक करने की सुविधा जल्द आ रही है।",
    watchingNote: (seconds) => `विज्ञापन के बाद एक उम्मीदवार नाम खुलेगा। ${seconds} सेकंड`,
    watching: "विज्ञापन देखा जा रहा है",
    watchButton: "अगला उम्मीदवार नाम खोलने के लिए विज्ञापन देखें",
    hanjaProductsLink: "सभी उम्मीदवार नामों के प्रोडक्ट देखें · ₩2,900 से",
    bulkPreparing: "भुगतान सुविधा जल्द आ रही है।",
    bulkButtonReady: "सभी उम्मीदवार नाम अनलॉक करें · {price}",
    bulkPaying: "भुगतान प्रोसेस हो रहा है…",
    bulkFailed: "भुगतान पूरा नहीं हुआ। कृपया फिर से कोशिश करें।",
  },
  km: {
    title: "បើកបេក្ខឈ្មោះបន្ថែម",
    status: (revealed, locked) => `បើកហើយ ${revealed} · ជាប់សោ ${locked}`,
    descHanja:
      "រាល់ការមើលពាណិជ្ជកម្មម្តង នឹងបើកបេក្ខឈ្មោះបន្ទាប់មួយ ដែលមានទស្សនៈណែនាំខុសគ្នា។",
    descDefault:
      "រាល់ការមើលពាណិជ្ជកម្មម្តង នឹងបើកបេក្ខឈ្មោះបន្ទាប់មួយ ដែលមានទស្សនៈណែនាំខុសគ្នា។ មុខងារបើកបេក្ខឈ្មោះដែលនៅសល់ទាំងអស់ក្នុងតម្លៃ US$1.99 នឹងមកដល់ឆាប់ៗនេះ។",
    watchingNote: (seconds) => `បេក្ខឈ្មោះមួយនឹងបើកបន្ទាប់ពីពាណិជ្ជកម្ម។ ${seconds} វិនាទី`,
    watching: "កំពុងមើលពាណិជ្ជកម្ម",
    watchButton: "មើលពាណិជ្ជកម្មដើម្បីបើកបេក្ខឈ្មោះបន្ទាប់",
    hanjaProductsLink: "មើលផលិតផលបេក្ខឈ្មោះទាំងអស់ · ចាប់ពី ₩2,900",
    bulkPreparing: "មុខងារទូទាត់នឹងមកដល់ឆាប់ៗនេះ។",
    bulkButtonReady: "បើកបេក្ខឈ្មោះទាំងអស់ · {price}",
    bulkPaying: "កំពុងដំណើរការទូទាត់…",
    bulkFailed: "ការទូទាត់មិនបានបញ្ចប់ទេ។ សូមព្យាយាមម្តងទៀត។",
  },
  kk: {
    title: "Қосымша есім нұсқаларын ашу",
    status: (revealed, locked) => `${revealed} ашылды · ${locked} құлыпта`,
    descHanja:
      "Әр жарнаманы көрген сайын басқа ұсыныс көзқарасындағы келесі есім нұсқасы ашылады.",
    descDefault:
      "Әр жарнаманы көрген сайын басқа ұсыныс көзқарасындағы келесі есім нұсқасы ашылады. Қалған барлық нұсқаны US$1.99-ға бір сәтте ашу мүмкіндігі жақында қосылады.",
    watchingNote: (seconds) => `Жарнамадан кейін бір нұсқа ашылады. ${seconds} секунд`,
    watching: "Жарнама көрсетілуде",
    watchButton: "Келесі нұсқаны ашу үшін жарнама көріңіз",
    hanjaProductsLink: "Барлық нұсқа қамтылған өнімдерді көру · ₩2,900-ден бастап",
    bulkPreparing: "Төлем мүмкіндігі жақында қосылады.",
    bulkButtonReady: "Барлық нұсқаны бірден ашу · {price}",
    bulkPaying: "Төлем өңделуде…",
    bulkFailed: "Төлем аяқталмады. Қайталап көріңіз.",
  },
  ms: {
    title: "Buka lebih banyak calon",
    status: (revealed, locked) => `${revealed} dibuka · ${locked} berkunci`,
    descHanja:
      "Setiap iklan yang anda tonton membuka calon seterusnya dengan perspektif cadangan yang berbeza.",
    descDefault:
      "Setiap iklan yang anda tonton membuka calon seterusnya dengan perspektif cadangan yang berbeza. Ciri membuka semua calon yang berbaki sekali gus dengan US$1.99 akan datang tidak lama lagi.",
    watchingNote: (seconds) => `Satu calon akan dibuka selepas iklan. ${seconds} saat`,
    watching: "Menonton iklan",
    watchButton: "Tonton iklan untuk membuka calon seterusnya",
    hanjaProductsLink: "Lihat produk semua calon · dari ₩2,900",
    bulkPreparing: "Fungsi pembayaran akan datang tidak lama lagi.",
    bulkButtonReady: "Buka semua calon sekali gus · {price}",
    bulkPaying: "Memproses pembayaran…",
    bulkFailed: "Pembayaran tidak selesai. Sila cuba lagi.",
  },
  pl: {
    title: "Odblokuj więcej kandydatów",
    status: (revealed, locked) => `Odblokowano: ${revealed} · zablokowano: ${locked}`,
    descHanja:
      "Każda obejrzana reklama odblokowuje kolejnego kandydata z innej perspektywy rekomendacji.",
    descDefault:
      "Każda obejrzana reklama odblokowuje kolejnego kandydata z innej perspektywy rekomendacji. Wkrótce będzie można jednorazowo odblokować wszystkich pozostałych kandydatów za US$1.99.",
    watchingNote: (seconds) => `Po reklamie odblokujemy jednego kandydata. ${seconds} s`,
    watching: "Trwa reklama",
    watchButton: "Obejrzyj reklamę, aby odblokować kolejnego kandydata",
    hanjaProductsLink: "Zobacz produkty ze wszystkimi kandydatami · od ₩2,900",
    bulkPreparing: "Płatności będą dostępne wkrótce.",
    bulkButtonReady: "Odblokuj wszystkich kandydatów · {price}",
    bulkPaying: "Przetwarzanie płatności…",
    bulkFailed: "Płatność nie została ukończona. Spróbuj ponownie.",
  },
  en: {
    title: "Unlock more candidates",
    status: (revealed, locked) => `${revealed} revealed · ${locked} locked`,
    descHanja:
      "Each ad you watch reveals the next candidate with a different perspective.",
    descDefault:
      "Each ad you watch reveals the next candidate with a different perspective. A one-time US$1.99 unlock for all remaining candidates is coming soon.",
    watchingNote: (seconds) => `Revealing one candidate after the ad. ${seconds}s`,
    watching: "Watching ad",
    watchButton: "Watch an ad to reveal the next candidate",
    hanjaProductsLink: "View full candidate products · from ₩2,900",
    bulkPreparing: "Payment is coming soon.",
    bulkButtonReady: "Unlock all candidates · {price}",
    bulkPaying: "Processing payment…",
    bulkFailed: "The payment was not completed. Please try again.",
  },
};

type UnlockCheckout = {
  // 국내는 토스페이먼츠 직접, 해외는 포트원 경유 페이팔. 서버가 어느 쪽인지 정해서 내려준다.
  // 국내=토스 직접, 해외=포트원 페이팔. 그 밖의 결제사는 없다(2026-07-29 일원화).
  provider: "TOSS" | "PORTONE";
  clientKey: string | null;
  orderId: string;
  paymentId: string;
  storeId: string;
  channelKey: string;
  payMethod: "PAYPAL";
  uiType: "PAYPAL_SPB" | null;
  orderName: string;
  totalAmount: number;
  currency: "KRW" | "USD";
};

export function CandidateUnlockPanel({
  revealedCount,
  totalCount,
  locale,
  serviceType,
  onUnlock,
  onUnlockAll,
  persistKey,
}: {
  revealedCount: number;
  totalCount: number;
  locale?: string;
  serviceType?: string;
  onUnlock: () => void;
  onUnlockAll?: () => void;
  // 결제로 일괄 공개한 결과의 식별자(예: resultId). 지정하면 결제 성공 시 해금 상태를
  // localStorage에 남겨, 새로고침·재방문에도 잠기지 않고 복원된다(비회원 결과는 미저장이라
  // 서버 엔티틀먼트가 없으므로 클라이언트 로컬로 보존한다).
  persistKey?: string;
}) {
  const [loading, setLoading] = useState(false);
  // 청약철회 제한 동의. 체크 전에는 결제로 넘어가지 않는다.
  const [consented, setConsented] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [bulkStage, setBulkStage] = useState<"idle" | "ordering" | "paying" | "paypal">("idle");
  const [bulkError, setBulkError] = useState("");
  const [paypalCheckout, setPaypalCheckout] = useState<UnlockCheckout | null>(null);
  const redirectHandled = useRef(false);
  // 결제 성공으로 일괄 공개를 확정할 때 호출: 로컬에 해금 상태를 남기고 부모에 반영한다.
  const completeUnlock = () => {
    if (persistKey) {
      try {
        localStorage.setItem(`nl_unlock:${persistKey}`, "1");
      } catch {
        // 로컬 저장 실패(용량·비활성)해도 현재 세션 표시는 진행한다.
      }
    }
    onUnlockAll?.();
  };
  // 마운트 시 이전 결제 해금 상태를 복원한다(새로고침·재방문 대응).
  const unlockRestored = useRef(false);
  useEffect(() => {
    if (unlockRestored.current || !persistKey) return;
    unlockRestored.current = true;
    try {
      if (localStorage.getItem(`nl_unlock:${persistKey}`) === "1") onUnlockAll?.();
    } catch {
      // 접근 불가 시 복원 생략.
    }
    // 최초 마운트에서 한 번만.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persistKey]);
  const remainingCount = Math.max(0, totalCount - revealedCount);
  const isForeign = serviceType === "GLOBAL_TO_KOREAN" && locale && locale !== "ko";
  const copy = isForeign ? unlockCopies[locale] ?? unlockCopies.en : unlockCopies.ko;
  // 문구와 동일한 기준으로 결제권역 결정: 외국인 대상 화면=해외(페이팔), 그 외=국내(토스).
  const region = isForeign ? "global" : "domestic";
  const unlockCode = region === "global" ? "CANDIDATE_UNLOCK_USD" : "CANDIDATE_UNLOCK_KRW";

  // **구매 가능 여부와 가격을 서버에 묻는다.** 응답에 코드가 있으면 살 수 있고, 없으면 준비 중이다
  // (`/api/product-info`가 상품 판매 여부와 결제 수단 준비 여부를 함께 본다).
  //
  // 예전에는 여기서 `NEXT_PUBLIC_*` 키만 보고 판단하고 가격은 문구에 박아 두었다. 그래서 상품을
  // 내려도 화면에는 "990원"이 그대로 보였고, **결제 키가 생기는 순간 판매 중지 상품의 버튼이
  // 활성화돼** 눌러야 주문 라우트가 503을 돌려줬다.
  const [unlockPrice, setUnlockPrice] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    void (async () => {
      try {
        const response = await fetch(`/api/product-info?codes=${unlockCode}`);
        const data = (await response.json().catch(() => null)) as
          | { ok?: boolean; products?: Record<string, { display?: string }> }
          | null;
        if (alive) setUnlockPrice(data?.products?.[unlockCode]?.display ?? null);
      } catch {
        // 조회 실패는 "살 수 없음"으로 둔다. 확인되지 않은 가격으로 버튼을 여는 것보다 낫다.
      }
    })();
    return () => {
      alive = false;
    };
  }, [unlockCode]);

  const bulkConfigured = unlockPrice !== null;

  async function confirmUnlock(orderId: string, paymentId: string) {
    const response = await fetch("/api/candidate-unlock/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, paymentId }),
    });
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;
    if (!response.ok || !data?.ok) throw new Error(data?.error || copy.bulkFailed);
  }

  async function unlockAllWithPayment() {
    if (bulkStage !== "idle") return;
    setBulkError("");
    setBulkStage("ordering");
    try {
      const response = await fetch("/api/candidate-unlock/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // returnPath: 토스는 우리 서버 라우트로 돌아가 승인되므로, 승인 뒤 어디로 되돌릴지를
        // 주문에 적어 둬야 한다. 지금 보고 있는 결과 화면으로 그대로 돌아온다.
        body: JSON.stringify({
          region,
          serviceType,
          locale,
          withdrawalConsent: true,
          returnPath: `${window.location.pathname}${window.location.search}`,
        }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; checkout?: UnlockCheckout }
        | null;
      if (!response.ok || !data?.ok || !data.checkout) {
        throw new Error(data?.error || copy.bulkFailed);
      }
      const checkout = data.checkout;
      if (checkout.provider === "TOSS") {
        if (!checkout.clientKey) throw new Error(copy.bulkFailed);
        setBulkStage("paying");
        // 토스는 결제창을 통과해도 아직 결제가 아니다. 브라우저가 successUrl(우리 서버)에 닿는
        // 순간 서버가 승인 API를 부른다. 그래서 successUrl을 화면이 아니라 라우트로 둔다 —
        // 결과 화면을 먼저 띄우고 JS를 기다리면 그 사이 창을 닫을 여지가 생기고, 승인은
        // 10분 안에 해야 한다. 여기서부터 페이지를 떠나므로 아래 코드는 실행되지 않는다.
        const { loadTossPayments, ANONYMOUS } = await import("@tosspayments/tosspayments-sdk");
        const tossPayments = await loadTossPayments(checkout.clientKey);
        const payment = tossPayments.payment({ customerKey: ANONYMOUS });
        const failUrl = new URL(window.location.href);
        failUrl.searchParams.set("payment", "failed");
        await payment.requestPayment({
          // "CARD"가 카드·간편결제 통합결제창이라 토스페이·카카오페이·네이버페이·페이코가 함께 들어온다.
          method: "CARD",
          amount: { currency: "KRW", value: checkout.totalAmount },
          orderId: checkout.orderId,
          orderName: checkout.orderName,
          successUrl: new URL("/api/payments/toss/confirm", window.location.origin).toString(),
          failUrl: failUrl.toString(),
        });
        return;
      }
      if (checkout.uiType === "PAYPAL_SPB") {
        // 페이팔은 결제창 팝업이 아니라 SPB 버튼을 패널 안에 렌더하는 방식(loadPaymentUI).
        setPaypalCheckout(checkout);
        setBulkStage("paypal");
        return;
      }
      // 여기에 닿으면 서버가 우리가 모르는 결제 수단을 내려 준 것이다. 국내는 토스,
      // 해외는 페이팔 SPB 둘뿐이고 각각 위에서 return한다(2026-07-29 결제 일원화로
      // 포트원 국내 간편결제 리디렉션 경로를 지웠다).
      throw new Error(copy.bulkFailed);
    } catch (caught) {
      setBulkStage("idle");
      setBulkError(caught instanceof Error ? caught.message : copy.bulkFailed);
    }
  }

  // 페이팔 SPB 버튼 렌더: 컨테이너(div.portone-ui-container)가 그려진 뒤 SDK를 호출해야 한다.
  useEffect(() => {
    if (bulkStage !== "paypal" || !paypalCheckout) return;
    const checkout = paypalCheckout;
    const finish = (error?: string) => {
      setBulkStage("idle");
      setPaypalCheckout(null);
      if (error) setBulkError(error);
    };
    void PortOne.loadPaymentUI(
      {
        uiType: "PAYPAL_SPB",
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency,
      },
      {
        onPaymentSuccess: () => {
          void confirmUnlock(checkout.orderId, checkout.paymentId)
            .then(() => {
              finish();
              completeUnlock();
            })
            .catch((caught) =>
              finish(caught instanceof Error ? caught.message : copy.bulkFailed),
            );
        },
        onPaymentFail: (error) => finish(error.message || copy.bulkFailed),
      },
    ).catch((caught) =>
      finish(caught instanceof Error ? caught.message : copy.bulkFailed),
    );
    // SPB 렌더는 결제 시도 단위로 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulkStage, paypalCheckout]);

  // 토스 결제 복귀 처리: 승인 라우트가 payment=paid&orderId=를 붙여 되돌려 보낸다.
  //
  // **되돌아오는 결제는 토스뿐이다.** 해외 페이팔은 SPB 버튼을 화면 안에서 처리해 페이지를
  // 떠나지 않고, 포트원 국내 간편결제 리디렉션 경로는 2026-07-29 결제 일원화로 지웠다.
  // 그래서 sessionStorage에 결제 식별값을 남겨 두던 복구 장치도 함께 없앴다.
  useEffect(() => {
    if (redirectHandled.current) return;
    const params = new URLSearchParams(window.location.search);
    const tossPayment = params.get("payment");
    const orderId = tossPayment ? params.get("orderId") : null;
    if (!orderId && tossPayment !== "failed") return;
    redirectHandled.current = true;
    const failureCode = tossPayment === "failed" ? "TOSS_FAILED" : null;
    const failureMessage = params.get("message");
    const clearParams = () => {
      for (const key of ["code", "message", "payment", "orderId"]) {
        params.delete(key);
      }
      const query = params.toString();
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${query ? `?${query}` : ""}`,
      );
    };
    void Promise.resolve()
      .then(async () => {
        if (failureCode) throw new Error(failureMessage || copy.bulkFailed);
        if (!orderId) throw new Error(copy.bulkFailed);
        // 토스 주문은 provider_payment_id가 orderId와 같고, 승인은 서버 라우트가 이미 끝냈다.
        // 그래서 confirm은 "PAID인지 확인"만 하고 지나간다(alreadyPaid). 값을 지어내도
        // 서버가 결제 상태를 다시 보므로 화면만 열리는 일은 생기지 않는다.
        setBulkStage("paying");
        await confirmUnlock(orderId, orderId);
        completeUnlock();
      })
      .catch((caught) => {
        setBulkError(caught instanceof Error ? caught.message : copy.bulkFailed);
      })
      .finally(() => {
        setBulkStage("idle");
        clearParams();
      });
    // 리디렉션 복구는 최초 마운트에서 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function unlockWithAd() {
    if (loading || remainingCount === 0) return;

    setLoading(true);
    trackAdEvent({ eventType: "IMPRESSION", slotKey: "candidate_unlock", locale, serviceType });
    setCountdown(UNLOCK_AD_SECONDS);
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      setCountdown(Math.max(0, UNLOCK_AD_SECONDS - elapsed));
    }, 250);

    try {
      await new Promise((resolve) =>
        window.setTimeout(resolve, UNLOCK_AD_SECONDS * 1000),
      );
      onUnlock();
      trackAdEvent({ eventType: "REWARD_GRANTED", slotKey: "candidate_unlock", locale, serviceType });
    } finally {
      window.clearInterval(timer);
      setCountdown(0);
      setLoading(false);
    }
  }

  if (totalCount <= 1 || remainingCount === 0) return null;

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Unlock aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">{copy.title}</p>
          <h2 className="mt-1 text-lg font-semibold">
            {copy.status(Math.min(revealedCount, totalCount), remainingCount)}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {serviceType === "HANJA_MEANING_MATCH" ? copy.descHanja : copy.descDefault}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="mt-5 grid gap-3">
          <AdBanner variant="leaderboard" />
          <p className="text-center text-sm font-medium text-brand-teal">
            {copy.watchingNote(countdown)}
          </p>
        </div>
      ) : null}

      {/* 결제 전 고지는 그리드 밖에 둔다. 아래 그리드는 버튼 2개짜리라 항목을 하나 더 끼우면
          상자가 버튼 자리를 차지하고 버튼이 다음 줄로 밀린다. 유료 일괄 공개가 열려 있을 때만
          묻는다 — 광고 시청은 결제가 아니다. */}
      {bulkConfigured && serviceType !== "HANJA_MEANING_MATCH" ? (
        <CheckoutConsent
          kind="DIGITAL"
          locale={locale}
          checked={consented}
          onChange={setConsented}
          className="mt-5"
        />
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={unlockWithAd}
          disabled={loading || remainingCount === 0}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Eye aria-hidden="true" size={17} />
          {loading ? copy.watching : copy.watchButton}
        </button>
        {serviceType === "HANJA_MEANING_MATCH" ? (
          <a
            href="#premium-hanja-analysis"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal"
          >
            <CreditCard aria-hidden="true" size={17} />
            {copy.hanjaProductsLink}
          </a>
        ) : bulkConfigured ? (
          <button
            type="button"
            onClick={unlockAllWithPayment}
            disabled={bulkStage !== "idle" || !consented}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
          >
            <CreditCard aria-hidden="true" size={17} />
            {bulkStage === "idle"
              ? copy.bulkButtonReady.replace("{price}", unlockPrice ?? "")
              : copy.bulkPaying}
          </button>
        ) : (
          <button
            type="button"
            disabled
            title={copy.bulkPreparing}
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
          >
            <CreditCard aria-hidden="true" size={17} />
            {/* 가격 없는 라벨을 쓴다 — 살 수 없는 상품의 값을 노출하지 않는다. */}
            {copy.bulkPreparing}
          </button>
        )}
      </div>

      {bulkStage === "paypal" ? <div className="portone-ui-container mt-4" /> : null}
      {bulkError ? (
        <p className="mt-3 text-sm font-medium text-red-600">{bulkError}</p>
      ) : null}
    </section>
  );
}
