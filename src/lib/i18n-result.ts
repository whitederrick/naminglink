import type { Locale } from "@/lib/services";

// 발음 표기 결과 페이지(HangulPronunciationResultPage)의 사용자 노출 문자열.
// 이 페이지는 외국인 대상(GLOBAL_TO_KOREAN) 전용이라 locale을 직접 사용한다.
export type ResultCopy = {
  reanalysisError: string;
  reanalysisErrorGeneric: string;
  reanalysisEyebrow: string;
  reanalysisTitle: string;
  reanalysisDescription: string;
  hintLabel: string;
  hintPlaceholder: string;
  reanalysisCountdown: (seconds: number) => string;
  reanalyzing: string;
  goodsEyebrow: string;
  goodsSectionTitle: string;
  goodsItemTitle: string;
  goodsItemSub: string;
  goodsItemDescription: string;
  goodsButton: string;
  editInput: string;
  home: string;
  headerAdLabel: string;
  headerCaption: string;
  loading: string;
  analysisDone: string;
  resultHeading: string;
  emptyTitle: string;
  emptyDescription: string;
  backToInput: string;
};

const ko: ResultCopy = {
  reanalysisError: "발음 재분석을 완료하지 못했습니다.",
  reanalysisErrorGeneric: "발음 재분석 중 오류가 발생했습니다.",
  reanalysisEyebrow: "실제 발음과 다른가요?",
  reanalysisTitle: "발음 힌트로 다시 분석",
  reanalysisDescription:
    "실제 발음 방법을 더 구체적으로 입력하면 같은 이름과 언어·국가 조건으로 다시 분석합니다.",
  hintLabel: "실제 발음 힌트",
  hintPlaceholder: "예: Dan-yell과 비슷함",
  reanalysisCountdown: (seconds) => `광고 확인 후 다시 분석합니다. ${seconds}초`,
  reanalyzing: "다시 분석 중",
  goodsEyebrow: "결과를 더 활용해 보세요",
  goodsSectionTitle: "이름 굿즈",
  goodsItemTitle: "한글 이름 굿즈",
  goodsItemSub: "(모자 · 키링 · 티셔츠 등)",
  goodsItemDescription:
    "선택한 한글 이름을 모자, 키링, 티셔츠 등에 새겨 나만의 굿즈를 만들어보세요.",
  goodsButton: "굿즈 신청 준비 중",
  editInput: "입력 수정",
  home: "홈",
  headerAdLabel: "한글 발음 결과 상단 배너 광고",
  headerCaption: "한글 발음 분석 결과",
  loading: "결과를 불러오고 있습니다.",
  analysisDone: "분석 완료",
  resultHeading: "본인 이름의 한글 발음 표기",
  emptyTitle: "결과를 불러올 수 없습니다.",
  emptyDescription: "이 결과는 분석을 진행한 브라우저 탭에서만 확인할 수 있습니다.",
  backToInput: "입력 화면으로 돌아가기",
};

const en: ResultCopy = {
  reanalysisError: "We couldn't finish re-analyzing the pronunciation.",
  reanalysisErrorGeneric: "Something went wrong while re-analyzing.",
  reanalysisEyebrow: "Does it sound different?",
  reanalysisTitle: "Re-analyze with a pronunciation hint",
  reanalysisDescription:
    "Enter a more specific pronunciation and we'll re-analyze with the same name, language, and country.",
  hintLabel: "Pronunciation hint",
  hintPlaceholder: "e.g., sounds like Dan-yell",
  reanalysisCountdown: (seconds) => `We'll re-analyze after the ad. ${seconds}s`,
  reanalyzing: "Re-analyzing",
  goodsEyebrow: "Do more with your result",
  goodsSectionTitle: "Name goods",
  goodsItemTitle: "Hangul name goods",
  goodsItemSub: "(caps, keyrings, tees, and more)",
  goodsItemDescription:
    "Put your chosen Hangul name on caps, keyrings, tees, and more to make your own goods.",
  goodsButton: "Goods ordering coming soon",
  editInput: "Edit input",
  home: "Home",
  headerAdLabel: "Hangul result top banner ad",
  headerCaption: "Hangul pronunciation result",
  loading: "Loading your result.",
  analysisDone: "Analysis complete",
  resultHeading: "Your name in Hangul pronunciation",
  emptyTitle: "We couldn't load your result.",
  emptyDescription:
    "This result is only available in the browser tab where you ran the analysis.",
  backToInput: "Back to the input screen",
};

const vi: ResultCopy = {
  reanalysisError: "Không thể hoàn tất việc phân tích lại phát âm.",
  reanalysisErrorGeneric: "Đã xảy ra lỗi khi phân tích lại.",
  reanalysisEyebrow: "Phát âm nghe khác với thực tế?",
  reanalysisTitle: "Phân tích lại với gợi ý phát âm",
  reanalysisDescription:
    "Nhập cách phát âm cụ thể hơn, chúng tôi sẽ phân tích lại với cùng tên, ngôn ngữ và quốc gia.",
  hintLabel: "Gợi ý phát âm",
  hintPlaceholder: "VD: đọc gần giống Đa-ni-en",
  reanalysisCountdown: (seconds) => `Sẽ phân tích lại sau quảng cáo. ${seconds} giây`,
  reanalyzing: "Đang phân tích lại",
  goodsEyebrow: "Tận dụng kết quả của bạn",
  goodsSectionTitle: "Quà lưu niệm theo tên",
  goodsItemTitle: "Quà lưu niệm tên Hangul",
  goodsItemSub: "(mũ, móc khóa, áo thun...)",
  goodsItemDescription:
    "In tên Hangul bạn chọn lên mũ, móc khóa, áo thun và nhiều món đồ để tạo quà lưu niệm của riêng bạn.",
  goodsButton: "Sắp mở đặt hàng quà lưu niệm",
  editInput: "Chỉnh sửa thông tin",
  home: "Trang chủ",
  headerAdLabel: "Quảng cáo đầu trang kết quả Hangul",
  headerCaption: "Kết quả phát âm Hangul",
  loading: "Đang tải kết quả của bạn.",
  analysisDone: "Phân tích hoàn tất",
  resultHeading: "Tên của bạn theo phát âm Hangul",
  emptyTitle: "Không thể tải kết quả.",
  emptyDescription:
    "Kết quả này chỉ xem được trong tab trình duyệt đã chạy phân tích.",
  backToInput: "Quay lại màn hình nhập",
};

const th: ResultCopy = {
  reanalysisError: "ไม่สามารถวิเคราะห์การออกเสียงใหม่ให้เสร็จสมบูรณ์ได้",
  reanalysisErrorGeneric: "เกิดข้อผิดพลาดระหว่างการวิเคราะห์ใหม่",
  reanalysisEyebrow: "เสียงต่างจากการออกเสียงจริงหรือไม่",
  reanalysisTitle: "วิเคราะห์ใหม่ด้วยคำใบ้การออกเสียง",
  reanalysisDescription:
    "กรอกวิธีการออกเสียงจริงให้เจาะจงมากขึ้น แล้วเราจะวิเคราะห์ใหม่ด้วยชื่อ ภาษา และประเทศเดิม",
  hintLabel: "คำใบ้การออกเสียงจริง",
  hintPlaceholder: "เช่น ออกเสียงคล้าย แดน-เยล",
  reanalysisCountdown: (seconds) => `จะวิเคราะห์ใหม่หลังชมโฆษณา ${seconds} วินาที`,
  reanalyzing: "กำลังวิเคราะห์ใหม่",
  goodsEyebrow: "ใช้ประโยชน์จากผลลัพธ์ของคุณให้มากขึ้น",
  goodsSectionTitle: "สินค้าที่ระลึกตามชื่อ",
  goodsItemTitle: "สินค้าที่ระลึกชื่อฮันกึล",
  goodsItemSub: "(หมวก พวงกุญแจ เสื้อยืด และอื่น ๆ)",
  goodsItemDescription:
    "นำชื่อฮันกึลที่คุณเลือกไปใส่บนหมวก พวงกุญแจ เสื้อยืด และอื่น ๆ เพื่อสร้างสินค้าที่ระลึกของคุณเอง",
  goodsButton: "การสั่งซื้อสินค้าที่ระลึกกำลังจะเปิดเร็ว ๆ นี้",
  editInput: "แก้ไขข้อมูล",
  home: "หน้าแรก",
  headerAdLabel: "โฆษณาแบนเนอร์ด้านบนของผลลัพธ์ฮันกึล",
  headerCaption: "ผลการวิเคราะห์การออกเสียงฮันกึล",
  loading: "กำลังโหลดผลลัพธ์ของคุณ",
  analysisDone: "การวิเคราะห์เสร็จสมบูรณ์",
  resultHeading: "ชื่อของคุณในการเขียนแบบฮันกึลตามการออกเสียง",
  emptyTitle: "ไม่สามารถโหลดผลลัพธ์ได้",
  emptyDescription:
    "ผลลัพธ์นี้ดูได้เฉพาะในแท็บเบราว์เซอร์ที่ใช้ทำการวิเคราะห์เท่านั้น",
  backToInput: "กลับไปยังหน้ากรอกข้อมูล",
};

const ja: ResultCopy = {
  reanalysisError: "発音の再分析を完了できませんでした。",
  reanalysisErrorGeneric: "発音の再分析中にエラーが発生しました。",
  reanalysisEyebrow: "実際の発音と違いますか？",
  reanalysisTitle: "発音ヒントで再分析",
  reanalysisDescription:
    "実際の発音をより具体的に入力すると、同じ名前・言語・国の条件で再分析します。",
  hintLabel: "実際の発音ヒント",
  hintPlaceholder: "例: 「ダニエル」に近い発音",
  reanalysisCountdown: (seconds) => `広告の確認後に再分析します。${seconds}秒`,
  reanalyzing: "再分析中",
  goodsEyebrow: "結果をもっと活用しましょう",
  goodsSectionTitle: "名前グッズ",
  goodsItemTitle: "ハングル名前グッズ",
  goodsItemSub: "（キャップ・キーリング・Tシャツなど）",
  goodsItemDescription:
    "選んだハングルの名前をキャップ、キーリング、Tシャツなどに入れて、自分だけのグッズを作ってみましょう。",
  goodsButton: "グッズ注文は準備中です",
  editInput: "入力を修正",
  home: "ホーム",
  headerAdLabel: "ハングル発音結果上部バナー広告",
  headerCaption: "ハングル発音分析結果",
  loading: "結果を読み込んでいます。",
  analysisDone: "分析完了",
  resultHeading: "あなたの名前のハングル発音表記",
  emptyTitle: "結果を読み込めませんでした。",
  emptyDescription:
    "この結果は、分析を実行したブラウザのタブでのみ確認できます。",
  backToInput: "入力画面に戻る",
};

const zh: ResultCopy = {
  reanalysisError: "未能完成发音的重新分析。",
  reanalysisErrorGeneric: "重新分析时发生了错误。",
  reanalysisEyebrow: "和实际发音不一样吗？",
  reanalysisTitle: "使用发音提示重新分析",
  reanalysisDescription:
    "输入更具体的实际发音后，我们会以相同的名字、语言和国家条件重新分析。",
  hintLabel: "实际发音提示",
  hintPlaceholder: "例如：读音接近 Dan-yell",
  reanalysisCountdown: (seconds) => `观看广告后将重新分析。${seconds} 秒`,
  reanalyzing: "正在重新分析",
  goodsEyebrow: "让结果发挥更多价值",
  goodsSectionTitle: "名字周边商品",
  goodsItemTitle: "韩文名字周边商品",
  goodsItemSub: "（帽子、钥匙扣、T恤等）",
  goodsItemDescription:
    "把您选定的韩文名字印在帽子、钥匙扣、T恤等物品上，制作专属于您的周边商品。",
  goodsButton: "周边商品下单即将开放",
  editInput: "修改输入",
  home: "首页",
  headerAdLabel: "韩文发音结果顶部横幅广告",
  headerCaption: "韩文发音分析结果",
  loading: "正在加载结果。",
  analysisDone: "分析完成",
  resultHeading: "您名字的韩文发音写法",
  emptyTitle: "无法加载结果。",
  emptyDescription:
    "此结果仅能在进行分析的浏览器标签页中查看。",
  backToInput: "返回输入页面",
};

const id: ResultCopy = {
  reanalysisError: "Kami tidak dapat menyelesaikan analisis ulang pelafalan.",
  reanalysisErrorGeneric: "Terjadi kesalahan saat menganalisis ulang.",
  reanalysisEyebrow: "Terdengar berbeda dari pelafalan aslinya?",
  reanalysisTitle: "Analisis ulang dengan petunjuk pelafalan",
  reanalysisDescription:
    "Masukkan cara pelafalan yang lebih spesifik, dan kami akan menganalisis ulang dengan nama, bahasa, dan negara yang sama.",
  hintLabel: "Petunjuk pelafalan",
  hintPlaceholder: "Contoh: dibaca seperti Si-ti Ra-ha-yu",
  reanalysisCountdown: (seconds) => `Analisis ulang dimulai setelah iklan. ${seconds} detik`,
  reanalyzing: "Menganalisis ulang",
  goodsEyebrow: "Manfaatkan hasil Anda lebih jauh",
  goodsSectionTitle: "Merchandise nama",
  goodsItemTitle: "Merchandise nama Hangul",
  goodsItemSub: "(topi, gantungan kunci, kaus, dan lainnya)",
  goodsItemDescription:
    "Cetak nama Hangul pilihan Anda pada topi, gantungan kunci, kaus, dan lainnya untuk membuat merchandise Anda sendiri.",
  goodsButton: "Pemesanan merchandise segera hadir",
  editInput: "Ubah input",
  home: "Beranda",
  headerAdLabel: "Iklan banner atas hasil Hangul",
  headerCaption: "Hasil pelafalan Hangul",
  loading: "Memuat hasil Anda.",
  analysisDone: "Analisis selesai",
  resultHeading: "Nama Anda dalam pelafalan Hangul",
  emptyTitle: "Kami tidak dapat memuat hasil Anda.",
  emptyDescription:
    "Hasil ini hanya tersedia di tab browser tempat Anda menjalankan analisis.",
  backToInput: "Kembali ke layar input",
};

const de: ResultCopy = {
  reanalysisError: "Die erneute Ausspracheanalyse konnte nicht abgeschlossen werden.",
  reanalysisErrorGeneric: "Bei der erneuten Analyse ist ein Fehler aufgetreten.",
  reanalysisEyebrow: "Klingt es anders als die tatsächliche Aussprache?",
  reanalysisTitle: "Mit Aussprachehinweis erneut analysieren",
  reanalysisDescription:
    "Geben Sie die tatsächliche Aussprache genauer an, und wir analysieren erneut mit demselben Namen, derselben Sprache und demselben Land.",
  hintLabel: "Aussprachehinweis",
  hintPlaceholder: "z. B. klingt wie Luh-kas Mül-ler",
  reanalysisCountdown: (seconds) => `Nach der Werbung analysieren wir erneut. ${seconds} Sek.`,
  reanalyzing: "Erneute Analyse läuft",
  goodsEyebrow: "Machen Sie mehr aus Ihrem Ergebnis",
  goodsSectionTitle: "Namens-Merchandise",
  goodsItemTitle: "Hangul-Namens-Merchandise",
  goodsItemSub: "(Caps, Schlüsselanhänger, T-Shirts und mehr)",
  goodsItemDescription:
    "Lassen Sie Ihren gewählten Hangul-Namen auf Caps, Schlüsselanhänger, T-Shirts und mehr drucken und gestalten Sie Ihre eigenen Merchandise-Artikel.",
  goodsButton: "Merchandise-Bestellung in Vorbereitung",
  editInput: "Eingabe bearbeiten",
  home: "Startseite",
  headerAdLabel: "Banner-Werbung über dem Hangul-Ergebnis",
  headerCaption: "Hangul-Ausspracheergebnis",
  loading: "Ihr Ergebnis wird geladen.",
  analysisDone: "Analyse abgeschlossen",
  resultHeading: "Ihr Name in Hangul-Aussprache",
  emptyTitle: "Ihr Ergebnis konnte nicht geladen werden.",
  emptyDescription:
    "Dieses Ergebnis ist nur in dem Browser-Tab verfügbar, in dem Sie die Analyse durchgeführt haben.",
  backToInput: "Zurück zur Eingabe",
};

const es: ResultCopy = {
  reanalysisError: "No pudimos completar el nuevo análisis de la pronunciación.",
  reanalysisErrorGeneric: "Se produjo un error al volver a analizar.",
  reanalysisEyebrow: "¿Suena distinto a la pronunciación real?",
  reanalysisTitle: "Volver a analizar con una pista de pronunciación",
  reanalysisDescription:
    "Introduce la pronunciación real con más detalle y volveremos a analizar con el mismo nombre, idioma y país.",
  hintLabel: "Pista de pronunciación",
  hintPlaceholder: "Ej.: suena como Ma-ri-a Gar-si-a",
  reanalysisCountdown: (seconds) => `Volveremos a analizar después del anuncio. ${seconds} s`,
  reanalyzing: "Volviendo a analizar",
  goodsEyebrow: "Saca más partido a tu resultado",
  goodsSectionTitle: "Merchandising con tu nombre",
  goodsItemTitle: "Merchandising con tu nombre en hangul",
  goodsItemSub: "(gorras, llaveros, camisetas y más)",
  goodsItemDescription:
    "Estampa el nombre en hangul que elegiste en gorras, llaveros, camisetas y más para crear tus propios artículos de merchandising.",
  goodsButton: "Pedidos de merchandising próximamente",
  editInput: "Editar datos",
  home: "Inicio",
  headerAdLabel: "Anuncio de banner superior del resultado en hangul",
  headerCaption: "Resultado de pronunciación en hangul",
  loading: "Cargando tu resultado.",
  analysisDone: "Análisis completado",
  resultHeading: "Tu nombre en pronunciación hangul",
  emptyTitle: "No pudimos cargar tu resultado.",
  emptyDescription:
    "Este resultado solo está disponible en la pestaña del navegador donde ejecutaste el análisis.",
  backToInput: "Volver a la pantalla de entrada",
};

// ko/en/vi/th/ja/zh/id/de/es를 작성했고, 나머지 로케일은 영어로 폴백한다.
const resultCopies: Partial<Record<Locale, ResultCopy>> = { ko, en, vi, th, ja, zh, id, de, es };

export function getResultCopy(locale: Locale): ResultCopy {
  return resultCopies[locale] ?? en;
}
