import { AlertTriangle, CheckCircle2, Lock } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";

type ResultCardProps = {
  service: ServiceConfig;
  result: unknown;
  revealedCount: number;
  candidateLimit?: number;
  detailedHanja?: boolean;
  locale?: string;
};

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서만 로케일 문구를 쓰고, 한국어 대상 서비스는 항상 ko를 유지한다.
type ResultCardCopy = {
  analysisSummary: string;
  summaryFallback: string;
  allRevealed: (count: number) => string;
  partialRevealed: (count: number) => string;
  noRecommendation: string;
  candidateFallbackSubtitle: string;
  lockedNote: string;
  fitScore: (score: number) => string;
  rejectedTitle: string;
  rejectedFallbackReason: string;
  officialNoteTitle: string;
  rowReason: string;
  rowPronunciation: string;
  rowMeaning: string;
  rowNaturalness: string;
  rowUsageNote: string;
  rowHanjaAddon: string;
  rowCaution: string;
  rowSourceBasis: string;
  rowIpa: string;
  rowSyllables: string;
  rowHangulPronunciation: string;
  rowNotationBasis: string;
  rowNotationTraits: string;
};

const resultCardCopies: Record<string, ResultCardCopy> = {
  ko: {
    analysisSummary: "분석 요약",
    summaryFallback: "분석 결과가 준비되었습니다.",
    allRevealed: (count) => `${count}개 전체 공개`,
    partialRevealed: (count) => `${count}개 공개 · 추가 후보 잠금`,
    noRecommendation: "추천 보류",
    candidateFallbackSubtitle: "추천 후보",
    lockedNote: "광고 1회 또는 전체 결제로 공개",
    fitScore: (score) => `적합도(참고) ${score}점`,
    rejectedTitle: "배제 후보 요약",
    rejectedFallbackReason: "추천 기준에 맞지 않음",
    officialNoteTitle: "공식 확인 안내",
    rowReason: "추천 이유",
    rowPronunciation: "발음",
    rowMeaning: "이름 의미",
    rowNaturalness: "한국어 자연스러움",
    rowUsageNote: "사용 맥락",
    rowHanjaAddon: "한자 확장",
    rowCaution: "주의",
    rowSourceBasis: "원어 발음 기준",
    rowIpa: "발음 기호 (IPA)",
    rowSyllables: "음절 분석",
    rowHangulPronunciation: "한글 표기 읽기 (로마자)",
    rowNotationBasis: "표기 근거",
    rowNotationTraits: "한국어 표기 특징",
  },
  vi: {
    analysisSummary: "Tóm tắt phân tích",
    summaryFallback: "Kết quả phân tích của bạn đã sẵn sàng.",
    allRevealed: (count) => `Đã mở toàn bộ ${count}`,
    partialRevealed: (count) => `Đã mở ${count} · còn khóa thêm`,
    noRecommendation: "Chưa có đề xuất",
    candidateFallbackSubtitle: "Ứng viên được đề xuất",
    lockedNote: "Mở bằng một quảng cáo hoặc thanh toán trọn gói",
    fitScore: (score) => `Độ phù hợp (tham khảo) ${score}`,
    rejectedTitle: "Các phương án bị loại",
    rejectedFallbackReason: "Không đạt tiêu chí đề xuất",
    officialNoteTitle: "Ghi chú xác minh chính thức",
    rowReason: "Lý do đề xuất",
    rowPronunciation: "Phát âm",
    rowMeaning: "Ý nghĩa tên",
    rowNaturalness: "Độ tự nhiên trong tiếng Hàn",
    rowUsageNote: "Bối cảnh sử dụng",
    rowHanjaAddon: "Mở rộng Hanja",
    rowCaution: "Lưu ý",
    rowSourceBasis: "Cơ sở phát âm gốc",
    rowIpa: "Ký hiệu ngữ âm (IPA)",
    rowSyllables: "Phân tích âm tiết",
    rowHangulPronunciation: "Cách đọc Hangul (chữ Latinh)",
    rowNotationBasis: "Cơ sở cách viết",
    rowNotationTraits: "Đặc điểm cách viết tiếng Hàn",
  },
  th: {
    analysisSummary: "สรุปการวิเคราะห์",
    summaryFallback: "ผลการวิเคราะห์ของคุณพร้อมแล้ว",
    allRevealed: (count) => `เปิดครบทั้ง ${count} รายการแล้ว`,
    partialRevealed: (count) => `เปิดแล้ว ${count} รายการ · ยังมีล็อกอยู่`,
    noRecommendation: "ยังไม่มีคำแนะนำ",
    candidateFallbackSubtitle: "ชื่อที่แนะนำ",
    lockedNote: "ปลดล็อกด้วยการชมโฆษณา 1 ครั้งหรือชำระเงินแบบเต็ม",
    fitScore: (score) => `ความเหมาะสม (อ้างอิง) ${score}`,
    rejectedTitle: "ตัวเลือกที่ถูกคัดออก",
    rejectedFallbackReason: "ไม่ผ่านเกณฑ์การแนะนำ",
    officialNoteTitle: "หมายเหตุการตรวจสอบอย่างเป็นทางการ",
    rowReason: "เหตุผลที่แนะนำ",
    rowPronunciation: "การออกเสียง",
    rowMeaning: "ความหมายของชื่อ",
    rowNaturalness: "ความเป็นธรรมชาติในภาษาเกาหลี",
    rowUsageNote: "บริบทการใช้งาน",
    rowHanjaAddon: "ส่วนเสริมฮันจา",
    rowCaution: "ข้อควรระวัง",
    rowSourceBasis: "เกณฑ์การออกเสียงภาษาต้นทาง",
    rowIpa: "สัทอักษร (IPA)",
    rowSyllables: "การวิเคราะห์พยางค์",
    rowHangulPronunciation: "วิธีอ่านการเขียนฮันกึล (อักษรโรมัน)",
    rowNotationBasis: "เหตุผลของการเขียนแบบนี้",
    rowNotationTraits: "ลักษณะการเขียนภาษาเกาหลี",
  },
  ja: {
    analysisSummary: "分析サマリー",
    summaryFallback: "分析結果の準備ができました。",
    allRevealed: (count) => `全${count}件公開`,
    partialRevealed: (count) => `${count}件公開 · 追加候補はロック中`,
    noRecommendation: "推薦保留",
    candidateFallbackSubtitle: "おすすめの候補",
    lockedNote: "広告1回または全体の決済で公開",
    fitScore: (score) => `適合度（参考）${score}点`,
    rejectedTitle: "除外した候補の概要",
    rejectedFallbackReason: "推薦基準に合致しません",
    officialNoteTitle: "公式確認のご案内",
    rowReason: "推薦理由",
    rowPronunciation: "発音",
    rowMeaning: "名前の意味",
    rowNaturalness: "韓国語としての自然さ",
    rowUsageNote: "使用シーン",
    rowHanjaAddon: "漢字の拡張",
    rowCaution: "注意",
    rowSourceBasis: "原語の発音基準",
    rowIpa: "発音記号（IPA）",
    rowSyllables: "音節分析",
    rowHangulPronunciation: "ハングル表記の読み方（ローマ字）",
    rowNotationBasis: "表記の根拠",
    rowNotationTraits: "韓国語表記の特徴",
  },
  zh: {
    analysisSummary: "分析摘要",
    summaryFallback: "您的分析结果已准备就绪。",
    allRevealed: (count) => `已全部公开 ${count} 个`,
    partialRevealed: (count) => `已公开 ${count} 个 · 更多候选已锁定`,
    noRecommendation: "暂缓推荐",
    candidateFallbackSubtitle: "推荐的候选名字",
    lockedNote: "观看 1 次广告或整体付费后公开",
    fitScore: (score) => `匹配度（参考）${score} 分`,
    rejectedTitle: "被排除的候选摘要",
    rejectedFallbackReason: "不符合推荐标准",
    officialNoteTitle: "官方核实说明",
    rowReason: "推荐理由",
    rowPronunciation: "发音",
    rowMeaning: "名字含义",
    rowNaturalness: "韩语自然度",
    rowUsageNote: "使用场景",
    rowHanjaAddon: "汉字扩展",
    rowCaution: "注意",
    rowSourceBasis: "源语言发音依据",
    rowIpa: "音标（IPA）",
    rowSyllables: "音节分析",
    rowHangulPronunciation: "韩文写法的读音（罗马字）",
    rowNotationBasis: "写法依据",
    rowNotationTraits: "韩语写法特点",
  },
  id: {
    analysisSummary: "Ringkasan analisis",
    summaryFallback: "Hasil analisis Anda sudah siap.",
    allRevealed: (count) => `Semua ${count} terbuka`,
    partialRevealed: (count) => `${count} terbuka · lainnya terkunci`,
    noRecommendation: "Belum ada rekomendasi",
    candidateFallbackSubtitle: "Kandidat yang direkomendasikan",
    lockedNote: "Buka dengan satu iklan atau pembelian penuh",
    fitScore: (score) => `Kecocokan (referensi) ${score}`,
    rejectedTitle: "Opsi yang dikecualikan",
    rejectedFallbackReason: "Tidak memenuhi kriteria rekomendasi",
    officialNoteTitle: "Catatan verifikasi resmi",
    rowReason: "Alasan rekomendasi",
    rowPronunciation: "Pelafalan",
    rowMeaning: "Arti nama",
    rowNaturalness: "Kealamian dalam bahasa Korea",
    rowUsageNote: "Konteks penggunaan",
    rowHanjaAddon: "Tambahan Hanja",
    rowCaution: "Perhatian",
    rowSourceBasis: "Dasar pelafalan bahasa sumber",
    rowIpa: "Notasi fonetik (IPA)",
    rowSyllables: "Analisis suku kata",
    rowHangulPronunciation: "Cara membaca Hangul (romanisasi)",
    rowNotationBasis: "Dasar penulisan",
    rowNotationTraits: "Ciri penulisan bahasa Korea",
  },
  de: {
    analysisSummary: "Analyseübersicht",
    summaryFallback: "Ihr Analyseergebnis ist bereit.",
    allRevealed: (count) => `Alle ${count} freigeschaltet`,
    partialRevealed: (count) => `${count} freigeschaltet · weitere gesperrt`,
    noRecommendation: "Keine Empfehlung",
    candidateFallbackSubtitle: "Empfohlener Kandidat",
    lockedNote: "Mit einer Werbung oder per Kauf freischalten",
    fitScore: (score) => `Eignung (Referenz) ${score}`,
    rejectedTitle: "Ausgeschlossene Optionen",
    rejectedFallbackReason: "Entsprach nicht den Empfehlungskriterien",
    officialNoteTitle: "Hinweis zur offiziellen Prüfung",
    rowReason: "Warum wir ihn empfehlen",
    rowPronunciation: "Aussprache",
    rowMeaning: "Bedeutung des Namens",
    rowNaturalness: "Natürlichkeit im Koreanischen",
    rowUsageNote: "Verwendungskontext",
    rowHanjaAddon: "Hanja-Ergänzung",
    rowCaution: "Zu beachten",
    rowSourceBasis: "Grundlage der Originalaussprache",
    rowIpa: "Lautschrift (IPA)",
    rowSyllables: "Silbenanalyse",
    rowHangulPronunciation: "So liest man das Hangul (romanisiert)",
    rowNotationBasis: "Grundlage der Schreibweise",
    rowNotationTraits: "Merkmale der koreanischen Schreibweise",
  },
  es: {
    analysisSummary: "Resumen del análisis",
    summaryFallback: "Tu resultado de análisis está listo.",
    allRevealed: (count) => `Todos los ${count} revelados`,
    partialRevealed: (count) => `${count} revelados · más bloqueados`,
    noRecommendation: "Sin recomendación",
    candidateFallbackSubtitle: "Candidato recomendado",
    lockedNote: "Desbloquea con un anuncio o con la compra completa",
    fitScore: (score) => `Idoneidad (referencia) ${score}`,
    rejectedTitle: "Opciones descartadas",
    rejectedFallbackReason: "No cumplió los criterios de recomendación",
    officialNoteTitle: "Nota de verificación oficial",
    rowReason: "Por qué lo recomendamos",
    rowPronunciation: "Pronunciación",
    rowMeaning: "Significado del nombre",
    rowNaturalness: "Naturalidad en coreano",
    rowUsageNote: "Contexto de uso",
    rowHanjaAddon: "Complemento de hanja",
    rowCaution: "Precaución",
    rowSourceBasis: "Base de pronunciación del idioma de origen",
    rowIpa: "Notación fonética (IPA)",
    rowSyllables: "Análisis de sílabas",
    rowHangulPronunciation: "Cómo leer el hangul (romanizado)",
    rowNotationBasis: "Base de la escritura",
    rowNotationTraits: "Rasgos de la escritura coreana",
  },
  fr: {
    analysisSummary: "Synthèse de l'analyse",
    summaryFallback: "Votre résultat d'analyse est prêt.",
    allRevealed: (count) => `Les ${count} candidats dévoilés`,
    partialRevealed: (count) => `${count} dévoilés · d'autres verrouillés`,
    noRecommendation: "Aucune recommandation",
    candidateFallbackSubtitle: "Candidat recommandé",
    lockedNote: "Débloquez avec une publicité ou l'achat complet",
    fitScore: (score) => `Adéquation (référence) ${score}`,
    rejectedTitle: "Options écartées",
    rejectedFallbackReason: "Ne répondait pas aux critères de recommandation",
    officialNoteTitle: "Note de vérification officielle",
    rowReason: "Pourquoi nous le recommandons",
    rowPronunciation: "Prononciation",
    rowMeaning: "Sens du prénom",
    rowNaturalness: "Naturel en coréen",
    rowUsageNote: "Contexte d'utilisation",
    rowHanjaAddon: "Complément hanja",
    rowCaution: "Précaution",
    rowSourceBasis: "Base de prononciation de la langue d'origine",
    rowIpa: "Notation phonétique (API)",
    rowSyllables: "Analyse des syllabes",
    rowHangulPronunciation: "Comment lire le hangeul (romanisé)",
    rowNotationBasis: "Justification de la graphie",
    rowNotationTraits: "Caractéristiques de la graphie coréenne",
  },
  it: {
    analysisSummary: "Riepilogo dell'analisi",
    summaryFallback: "Il tuo risultato di analisi è pronto.",
    allRevealed: (count) => `Tutti i ${count} rivelati`,
    partialRevealed: (count) => `${count} rivelati · altri bloccati`,
    noRecommendation: "Nessuna raccomandazione",
    candidateFallbackSubtitle: "Candidato consigliato",
    lockedNote: "Sblocca con un annuncio o con l'acquisto completo",
    fitScore: (score) => `Idoneità (riferimento) ${score}`,
    rejectedTitle: "Opzioni escluse",
    rejectedFallbackReason: "Non soddisfaceva i criteri di raccomandazione",
    officialNoteTitle: "Nota di verifica ufficiale",
    rowReason: "Perché lo consigliamo",
    rowPronunciation: "Pronuncia",
    rowMeaning: "Significato del nome",
    rowNaturalness: "Naturalezza in coreano",
    rowUsageNote: "Contesto d'uso",
    rowHanjaAddon: "Componente aggiuntivo hanja",
    rowCaution: "Attenzione",
    rowSourceBasis: "Base di pronuncia della lingua di origine",
    rowIpa: "Notazione fonetica (IPA)",
    rowSyllables: "Analisi delle sillabe",
    rowHangulPronunciation: "Come leggere l'hangul (romanizzato)",
    rowNotationBasis: "Base della grafia",
    rowNotationTraits: "Caratteristiche della grafia coreana",
  },
  pt: {
    analysisSummary: "Resumo da análise",
    summaryFallback: "Seu resultado de análise está pronto.",
    allRevealed: (count) => `Todos os ${count} revelados`,
    partialRevealed: (count) => `${count} revelados · mais bloqueados`,
    noRecommendation: "Sem recomendação",
    candidateFallbackSubtitle: "Candidato recomendado",
    lockedNote: "Desbloqueie com um anúncio ou com a compra completa",
    fitScore: (score) => `Adequação (referência) ${score}`,
    rejectedTitle: "Opções descartadas",
    rejectedFallbackReason: "Não atendeu aos critérios de recomendação",
    officialNoteTitle: "Nota de verificação oficial",
    rowReason: "Por que recomendamos",
    rowPronunciation: "Pronúncia",
    rowMeaning: "Significado do nome",
    rowNaturalness: "Naturalidade em coreano",
    rowUsageNote: "Contexto de uso",
    rowHanjaAddon: "Complemento de hanja",
    rowCaution: "Atenção",
    rowSourceBasis: "Base de pronúncia do idioma de origem",
    rowIpa: "Notação fonética (IPA)",
    rowSyllables: "Análise de sílabas",
    rowHangulPronunciation: "Como ler o hangul (romanizado)",
    rowNotationBasis: "Base da grafia",
    rowNotationTraits: "Características da grafia coreana",
  },
  ru: {
    analysisSummary: "Итог анализа",
    summaryFallback: "Результат анализа готов.",
    allRevealed: (count) => `Открыты все ${count}`,
    partialRevealed: (count) => `Открыто: ${count} · остальные заблокированы`,
    noRecommendation: "Нет рекомендации",
    candidateFallbackSubtitle: "Рекомендуемый вариант",
    lockedNote: "Откройте за одну рекламу или полной покупкой",
    fitScore: (score) => `Соответствие (справочно) ${score}`,
    rejectedTitle: "Исключённые варианты",
    rejectedFallbackReason: "Не соответствует критериям рекомендации",
    officialNoteTitle: "Примечание об официальной проверке",
    rowReason: "Почему мы это рекомендуем",
    rowPronunciation: "Произношение",
    rowMeaning: "Значение имени",
    rowNaturalness: "Естественность в корейском",
    rowUsageNote: "Контекст использования",
    rowHanjaAddon: "Дополнение по ханча",
    rowCaution: "Внимание",
    rowSourceBasis: "Основа произношения в исходном языке",
    rowIpa: "Фонетическая запись (МФА)",
    rowSyllables: "Анализ слогов",
    rowHangulPronunciation: "Как читать хангыль (латиницей)",
    rowNotationBasis: "Обоснование записи",
    rowNotationTraits: "Особенности корейской записи",
  },
  ar: {
    analysisSummary: "ملخص التحليل",
    summaryFallback: "نتيجة التحليل جاهزة.",
    allRevealed: (count) => `تم كشف جميع المرشحات (${count})`,
    partialRevealed: (count) => `${count} مكشوف · البقية مقفلة`,
    noRecommendation: "لا توجد توصية",
    candidateFallbackSubtitle: "المرشح الموصى به",
    lockedNote: "افتحه بإعلان واحد أو بالشراء الكامل",
    fitScore: (score) => `الملاءمة (للاسترشاد) ${score}`,
    rejectedTitle: "الخيارات المستبعدة",
    rejectedFallbackReason: "لم يستوفِ معايير التوصية",
    officialNoteTitle: "ملاحظة التحقق الرسمي",
    rowReason: "لماذا نوصي به",
    rowPronunciation: "النطق",
    rowMeaning: "معنى الاسم",
    rowNaturalness: "الطبيعية في اللغة الكورية",
    rowUsageNote: "سياق الاستخدام",
    rowHanjaAddon: "إضافة الهانجا",
    rowCaution: "تنبيه",
    rowSourceBasis: "أساس النطق في اللغة المصدر",
    rowIpa: "الرموز الصوتية (IPA)",
    rowSyllables: "تحليل المقاطع",
    rowHangulPronunciation: "طريقة قراءة الهانغل (بالحروف اللاتينية)",
    rowNotationBasis: "أساس الكتابة",
    rowNotationTraits: "سمات الكتابة الكورية",
  },
  tr: {
    analysisSummary: "Analiz özeti",
    summaryFallback: "Analiz sonucunuz hazır.",
    allRevealed: (count) => `${count} adayın tümü açıldı`,
    partialRevealed: (count) => `${count} açıldı · diğerleri kilitli`,
    noRecommendation: "Öneri yok",
    candidateFallbackSubtitle: "Önerilen aday",
    lockedNote: "Bir reklamla veya tam satın almayla açın",
    fitScore: (score) => `Uygunluk (referans) ${score}`,
    rejectedTitle: "Elenen seçenekler",
    rejectedFallbackReason: "Öneri ölçütlerini karşılamadı",
    officialNoteTitle: "Resmi doğrulama notu",
    rowReason: "Neden öneriyoruz",
    rowPronunciation: "Telaffuz",
    rowMeaning: "İsmin anlamı",
    rowNaturalness: "Korecede doğallık",
    rowUsageNote: "Kullanım bağlamı",
    rowHanjaAddon: "Hanja eklentisi",
    rowCaution: "Dikkat",
    rowSourceBasis: "Kaynak dildeki telaffuz temeli",
    rowIpa: "Fonetik gösterim (IPA)",
    rowSyllables: "Hece analizi",
    rowHangulPronunciation: "Hangıl nasıl okunur (Latin harfleriyle)",
    rowNotationBasis: "Yazımın dayanağı",
    rowNotationTraits: "Korece yazımın özellikleri",
  },
  fil: {
    analysisSummary: "Buod ng pagsusuri",
    summaryFallback: "Handa na ang resulta ng iyong pagsusuri.",
    allRevealed: (count) => `Lahat ng ${count} ay bukas na`,
    partialRevealed: (count) => `${count} bukas · may naka-lock pa`,
    noRecommendation: "Walang rekomendasyon",
    candidateFallbackSubtitle: "Inirerekomendang kandidato",
    lockedNote: "Buksan gamit ang isang ad o buong pagbili",
    fitScore: (score) => `Pagkakaangkop (sanggunian) ${score}`,
    rejectedTitle: "Mga hindi isinamang opsyon",
    rejectedFallbackReason: "Hindi nakapasa sa mga pamantayan ng rekomendasyon",
    officialNoteTitle: "Paalala sa opisyal na beripikasyon",
    rowReason: "Bakit namin ito inirerekomenda",
    rowPronunciation: "Bigkas",
    rowMeaning: "Kahulugan ng pangalan",
    rowNaturalness: "Pagiging natural sa Korean",
    rowUsageNote: "Konteksto ng paggamit",
    rowHanjaAddon: "Karagdagang Hanja",
    rowCaution: "Babala",
    rowSourceBasis: "Batayan ng bigkas sa pinagmulang wika",
    rowIpa: "Phonetic notation (IPA)",
    rowSyllables: "Pagsusuri ng pantig",
    rowHangulPronunciation: "Paano basahin ang Hangul (romanized)",
    rowNotationBasis: "Batayan ng baybay",
    rowNotationTraits: "Katangian ng pagbaybay sa Korean",
  },
  uz: {
    analysisSummary: "Tahlil xulosasi",
    summaryFallback: "Tahlil natijangiz tayyor.",
    allRevealed: (count) => `Barcha ${count} ta ochildi`,
    partialRevealed: (count) => `${count} ta ochilgan · qolganlari yopiq`,
    noRecommendation: "Tavsiya yo‘q",
    candidateFallbackSubtitle: "Tavsiya etilgan nomzod",
    lockedNote: "Bitta reklama yoki to‘liq xarid bilan oching",
    fitScore: (score) => `Moslik (ma’lumot uchun) ${score}`,
    rejectedTitle: "Chiqarib tashlangan variantlar",
    rejectedFallbackReason: "Tavsiya mezonlariga mos kelmadi",
    officialNoteTitle: "Rasmiy tekshiruv eslatmasi",
    rowReason: "Nega tavsiya qilamiz",
    rowPronunciation: "Talaffuz",
    rowMeaning: "Ism ma’nosi",
    rowNaturalness: "Koreys tilida tabiiylik",
    rowUsageNote: "Foydalanish konteksti",
    rowHanjaAddon: "Hanja qo‘shimchasi",
    rowCaution: "Diqqat",
    rowSourceBasis: "Manba tildagi talaffuz asosi",
    rowIpa: "Fonetik yozuv (IPA)",
    rowSyllables: "Bo‘g‘in tahlili",
    rowHangulPronunciation: "Hangulni qanday o‘qish kerak (lotin yozuvida)",
    rowNotationBasis: "Yozuv asosi",
    rowNotationTraits: "Koreyscha yozuv xususiyatlari",
  },
  mn: {
    analysisSummary: "Шинжилгээний хураангуй",
    summaryFallback: "Таны шинжилгээний үр дүн бэлэн боллоо.",
    allRevealed: (count) => `Бүх ${count} хувилбар нээгдсэн`,
    partialRevealed: (count) => `${count} нээгдсэн · бусад нь түгжээтэй`,
    noRecommendation: "Санал болгох нэр алга",
    candidateFallbackSubtitle: "Санал болгож буй нэрийн хувилбар",
    lockedNote: "Нэг зар үзэх эсвэл бүрэн худалдан авалтаар нээнэ",
    fitScore: (score) => `Тохирц (лавлагаа) ${score}`,
    rejectedTitle: "Хасагдсан сонголтууд",
    rejectedFallbackReason: "Санал болгох шалгуурыг хангаагүй",
    officialNoteTitle: "Албан ёсны баталгаажуулалтын тэмдэглэл",
    rowReason: "Санал болгож буй шалтгаан",
    rowPronunciation: "Дуудлага",
    rowMeaning: "Нэрийн утга",
    rowNaturalness: "Солонгос хэлэнд хэр аядуу сонсогдох",
    rowUsageNote: "Хэрэглээний нөхцөл",
    rowHanjaAddon: "Ханжа нэмэлт",
    rowCaution: "Анхааруулга",
    rowSourceBasis: "Эх хэлний дуудлагын үндэслэл",
    rowIpa: "Авиа зүйн тэмдэглэгээ (IPA)",
    rowSyllables: "Үеийн шинжилгээ",
    rowHangulPronunciation: "Хангылийг хэрхэн унших (латин үсгээр)",
    rowNotationBasis: "Бичиглэлийн үндэслэл",
    rowNotationTraits: "Солонгос бичиглэлийн онцлог",
  },
  en: {
    analysisSummary: "Analysis summary",
    summaryFallback: "Your analysis result is ready.",
    allRevealed: (count) => `All ${count} revealed`,
    partialRevealed: (count) => `${count} revealed · more locked`,
    noRecommendation: "No recommendation",
    candidateFallbackSubtitle: "Recommended candidate",
    lockedNote: "Unlock with one ad or full purchase",
    fitScore: (score) => `Fit (reference) ${score}`,
    rejectedTitle: "Excluded options",
    rejectedFallbackReason: "Did not meet the recommendation criteria",
    officialNoteTitle: "Official verification note",
    rowReason: "Why we recommend it",
    rowPronunciation: "Pronunciation",
    rowMeaning: "Name meaning",
    rowNaturalness: "Naturalness in Korean",
    rowUsageNote: "Usage context",
    rowHanjaAddon: "Hanja add-on",
    rowCaution: "Caution",
    rowSourceBasis: "Source pronunciation basis",
    rowIpa: "Phonetic notation (IPA)",
    rowSyllables: "Syllable analysis",
    rowHangulPronunciation: "How to read the Hangul (romanized)",
    rowNotationBasis: "Notation basis",
    rowNotationTraits: "Korean notation traits",
  },
};

function getResultCardCopy(service: ServiceConfig, locale: string | undefined) {
  if (service.serviceType === "GLOBAL_TO_KOREAN" && locale && locale !== "ko") {
    return resultCardCopies[locale] ?? resultCardCopies.en;
  }
  return resultCardCopies.ko;
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function text(value: unknown) {
  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : "";
}

function publicFacingHanjaText(value: unknown) {
  const content = text(value);

  if (/내장 샘플|PDF 검수 데이터|import 대상|서비스 내 공식 한자 DB/.test(content)) {
    return "현재 검토 자료만으로 지정 음가와 등록 가능성을 충분히 확인하기 어렵습니다. 검증되지 않은 글자를 임의로 제안하지 않고, 공식 인명용 한자 조회 기준과 대조하기 전까지 추천을 보류했습니다.";
  }

  return content;
}

function compactRejectedReason(value: unknown) {
  const content = publicFacingHanjaText(value);
  if (/부정적 의미|자의.*부적합|이름.*부적합/.test(content)) return "부정적 의미 포함";
  if (/제외 조건|원하지 않는 의미/.test(content)) return "입력한 제외 조건과 일치";
  if (/지정 음가|공식.*확인|등록 가능/.test(content)) return "공식 음가·등록 기준 확인 필요";
  if (/사설영역|표시|글자 형태/.test(content)) return "표시·글자 형태 확인 필요";
  const firstSentence = content.split(/[.!?]/)[0]?.trim() || "추천 기준에 맞지 않음";
  return firstSentence.length > 32 ? `${firstSentence.slice(0, 32)}…` : firstSentence;
}

function arrayRecords(value: unknown) {
  return Array.isArray(value)
    ? value.filter(
        (item): item is Record<string, unknown> =>
          item !== null && typeof item === "object" && !Array.isArray(item),
      )
    : [];
}

function getCandidates(record: Record<string, unknown>) {
  return arrayRecords(record.candidates);
}

function numberValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function candidateRate(item: Record<string, unknown>) {
  return numberValue(item.matching_rate) ?? numberValue(item.suitability_score);
}

function candidateTitle(
  service: ServiceConfig,
  item: Record<string, unknown>,
  index: number,
) {
  if (service.serviceType === "GLOBAL_TO_KOREAN") {
    return text(item.hangul) || text(item.name) || `후보 ${index + 1}`;
  }

  if (service.serviceType === "KOREAN_TO_GLOBAL") {
    // 일본어 등은 한자+읽기 병기 표기(local_script, 예: 陽翔(はると))를 제목으로 우선 사용한다.
    return (
      text(item.local_script) || text(item.name) || text(item.hangul) || `후보 ${index + 1}`
    );
  }

  return text(item.hanja) || text(item.hangul) || `후보 ${index + 1}`;
}

function candidateRows(
  service: ServiceConfig,
  item: Record<string, unknown>,
  detailedHanja = false,
  copy: ResultCardCopy = resultCardCopies.ko,
) {
  if (service.slug === "global-name-to-hangul") {
    return [
      [copy.rowSourceBasis, item.source_pronunciation_basis],
      [copy.rowIpa, item.ipa],
      [copy.rowSyllables, item.syllables],
      [copy.rowHangulPronunciation, item.pronunciation],
      [copy.rowReason, item.recommendation_reason],
      [copy.rowNaturalness, item.cultural_fit],
      [copy.rowCaution, item.caution_notes],
    ] satisfies Array<[string, unknown]>;
  }

  if (service.serviceType === "KOREAN_TO_GLOBAL") {
    return [
      ["현지 표기", item.local_script],
      ["성까지 붙인 전체 표기", item.full_name_local],
      ["발음", item.pronunciation],
      ["변환 전략", item.conversion_strategy],
      ["추천 이유", item.recommendation_reason],
      ["이름의 의미", item.name_meaning],
      ["의미 연결", item.meaning_connection],
      ["현지에서의 인식", item.local_perception],
      ["직업적 인상", item.professional_impression],
      ["지역 적합성", item.region_fit],
      ["주의", item.local_cautions],
    ] satisfies Array<[string, unknown]>;
  }

  if (service.serviceType === "GLOBAL_TO_KOREAN") {
    return [
      [copy.rowReason, item.recommendation_reason],
      [copy.rowPronunciation, item.pronunciation],
      [copy.rowMeaning, item.meaning],
      [copy.rowNaturalness, item.cultural_fit],
      [copy.rowUsageNote, item.usage_note],
      [copy.rowHanjaAddon, item.hanja_addon_note],
      [copy.rowCaution, item.caution_notes],
    ] satisfies Array<[string, unknown]>;
  }

  if (service.serviceType === "HANJA_MEANING_MATCH") {
    const rows: Array<[string, unknown]> = [
      ["한자 구성과 기본 뜻", compactHanjaComposition(item) || item.meaning],
      ["이 후보의 의미 구성", item.recommendation_reason],
    ];
    if (detailedHanja) {
      rows.push(
        ["이름 의미 이야기", item.story],
        ["실사용 이름 해석", item.practical_analysis],
      );
    }
    return rows.filter((row) => Boolean(row[1]));
  }

  return [
    ["추천 이유", item.recommendation_reason],
    ["의미", item.meaning || item.meaning_connection],
    ["이름 이야기", item.story],
    ["사주/정교화 메모", item.saju_note],
    ["현지/문화 적합성", item.cultural_fit || item.local_cautions],
    ["사용 인상", item.professional_impression || item.usage_note],
    ["주의", item.caution_notes],
    ["공식 데이터 상태", item.official_status],
  ] satisfies Array<[string, unknown]>;
}

function compactHanjaComposition(item: Record<string, unknown>) {
  return getBreakdown(item.character_breakdown)
    .map((part) => {
      const character = text(part.character);
      const meaning = text(part.meaning);
      const reading = text(part.designated_reading) || text(part.syllable);
      if (!character) return "";
      if (!meaning) return reading ? `${character} (${reading})` : character;
      return `${character} · ${meaning}${reading ? ` (${reading})` : ""}`;
    })
    .filter(Boolean)
    .join(" / ");
}

function getRejected(record: Record<string, unknown>) {
  return [
    ...arrayRecords(record.rejected_hanja),
    ...arrayRecords(record.rejected_options),
  ];
}

function groupRejected(
  rejected: Record<string, unknown>[],
  compactHanja: boolean,
  fallbackReason: string,
) {
  const groups = new Map<string, string[]>();
  for (const item of rejected) {
    const character = text(item.character || item.name || item.hangul);
    if (!character) continue;
    const reason = compactHanja
      ? compactRejectedReason(item.reason)
      : text(item.reason) || fallbackReason;
    const characters = groups.get(reason) ?? [];
    if (!characters.includes(character)) characters.push(character);
    groups.set(reason, characters);
  }
  return [...groups.entries()];
}

function getBreakdown(value: unknown) {
  return arrayRecords(value);
}

function getNestedOptions(value: unknown) {
  const record = asRecord(value);
  return arrayRecords(record.options);
}

const hanjaRecommendationFocus = [
  {
    label: "종합 의미 우선안",
    description: "음가, 자의 결합과 실사용 설명력을 종합적으로 살핀 우선안",
  },
  {
    label: "자의 명확성 우선안",
    description: "선택 조건을 가정하지 않고 각 한자의 뜻이 분명한 조합을 우선한 대안",
  },
  {
    label: "전통 오행 보완안",
    description: "출생월 기반의 간이 전통 오행 참고를 비교축으로 강조한 대안",
  },
  {
    label: "실사용 안정안",
    description: "자의의 명확성, 설명 용이성과 일상적인 사용성을 중시한 대안",
  },
  {
    label: "개성·희소성 대안",
    description: "지정 음가는 유지하면서 상대적으로 차별화된 자의와 인상을 검토한 대안",
  },
] as const;

function getHanjaFocus(item: Record<string, unknown>, index: number) {
  const fallback = hanjaRecommendationFocus[index] ?? {
    label: `추천 관점 ${index + 1}`,
    description: "다른 기준으로 비교할 수 있는 추천 대안",
  };

  return {
    label: text(item.recommendation_focus) || fallback.label,
    description: text(item.focus_summary) || fallback.description,
  };
}

function collectHanjaOptions(candidates: Record<string, unknown>[]) {
  const grouped = new Map<
    string,
    Map<string, Record<string, unknown>>
  >();

  for (const candidate of candidates) {
    for (const group of getBreakdown(candidate.hanja_options)) {
      const syllable = text(group.syllable) || "이름";
      const options = grouped.get(syllable) ?? new Map();

      for (const option of getNestedOptions(group)) {
        const character = text(option.character);
        if (!character) continue;
        const existing = options.get(character);
        if (
          !existing ||
          (candidateRate(option) ?? -1) > (candidateRate(existing) ?? -1)
        ) {
          options.set(character, option);
        }
      }

      grouped.set(syllable, options);
    }
  }

  return Array.from(grouped, ([syllable, options]) => ({
    syllable,
    options: Array.from(options.values()).sort(
      (a, b) => (candidateRate(b) ?? -1) - (candidateRate(a) ?? -1),
    ),
  }));
}

function PronunciationCandidateDetails({
  item,
  title,
  matchingRate,
  copy,
}: {
  item: Record<string, unknown>;
  title: string;
  matchingRate: number | null;
  copy: ResultCardCopy;
}) {
  const pronunciationFacts = [
    [copy.rowSourceBasis, item.source_pronunciation_basis],
    [copy.rowIpa, item.ipa],
    [copy.rowSyllables, item.syllables],
    [copy.rowHangulPronunciation, item.pronunciation],
  ] satisfies Array<[string, unknown]>;
  const explanations = [
    [copy.rowNotationBasis, item.recommendation_reason],
    [copy.rowNotationTraits, item.cultural_fit],
  ] satisfies Array<[string, unknown]>;

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-start justify-between gap-4 rounded-lg bg-surface-strong p-5">
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            추천 한글 표기
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">
            {title}
          </h3>
        </div>
        {matchingRate !== null ? (
          <span className="rounded-lg bg-background px-3 py-2 text-sm font-semibold text-brand-teal shadow-sm">
            {copy.fitScore(matchingRate)}
          </span>
        ) : null}
      </div>

      <dl className="grid gap-3 sm:grid-cols-2">
        {pronunciationFacts
          .filter(([, value]) => text(value))
          .map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-line bg-background p-4"
            >
              <dt className="text-xs font-semibold text-brand-teal">{label}</dt>
              <dd className="mt-2 text-base font-medium leading-6 text-foreground">
                {text(value)}
              </dd>
            </div>
          ))}
      </dl>

      <dl className="grid gap-3 md:grid-cols-2">
        {explanations
          .filter(([, value]) => text(value))
          .map(([label, value]) => (
            <div key={label} className="rounded-lg bg-surface-strong p-4">
              <dt className="text-sm font-semibold">{label}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {text(value)}
              </dd>
            </div>
          ))}
      </dl>

      {text(item.caution_notes) ? (
        <div className="rounded-lg border border-brand-rose/20 bg-brand-rose/5 p-4">
          <p className="text-sm font-semibold">확인 사항</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {text(item.caution_notes)}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function ResultCard({
  service,
  result,
  revealedCount,
  candidateLimit = 5,
  detailedHanja = false,
  locale,
}: ResultCardProps) {
  const copy = getResultCardCopy(service, locale);
  const record = asRecord(result);
  const allCandidates = getCandidates(record).sort(
    (a, b) => (candidateRate(b) ?? -1) - (candidateRate(a) ?? -1),
  );
  const candidates = allCandidates.slice(0, candidateLimit);
  const rejected = getRejected(record);
  const rejectedGroups = groupRejected(
    rejected,
    service.serviceType === "HANJA_MEANING_MATCH",
    copy.rejectedFallbackReason,
  );
  const commonAnalysis = asRecord(record.common_analysis);
  const firstCandidate = candidates[0] ?? {};
  const allCandidatesRevealed =
    allCandidates.length > 0 &&
    candidateLimit >= allCandidates.length &&
    revealedCount >= allCandidates.length;
  const comprehensiveHanjaOptions = collectHanjaOptions(candidates);

  return (
    <div className="grid gap-4">
      {service.slug !== "global-name-to-hangul" ? (
        <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          {service.serviceType === "HANJA_MEANING_MATCH" ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-brand-teal">
                  {allCandidatesRevealed ? "전체 후보 조회 완료" : "무료 후보 조회 완료"}
                </p>
                <h1 className="mt-1 text-2xl font-semibold">기본 검토 요약</h1>
              </div>
              <span className="rounded-full bg-brand-teal/10 px-3 py-1.5 text-xs font-semibold text-brand-teal">
                {candidates.length > 0
                  ? `추천 이름 조합 ${Math.min(revealedCount, candidates.length)}개 공개`
                  : "공식 확인 필요"}
              </span>
            </div>
          ) : (
            <p className="text-sm font-semibold text-brand-teal">{copy.analysisSummary}</p>
          )}
          <p className="mt-3 text-sm leading-6 text-muted">
            {publicFacingHanjaText(record.analysis_summary) || copy.summaryFallback}
          </p>
          {service.serviceType === "HANJA_MEANING_MATCH" ? (
            <div className="mt-5 grid gap-4 border-t border-line pt-5 md:grid-cols-2">
              {[
                [
                  "음가 적합성",
                  commonAnalysis.sound_basis ||
                    "정해 둔 한글 이름의 각 음절과 공식 지정 발음이 일치하는 한자만 후보로 검토했습니다.",
                ],
                [
                  "출생 정보 참고 범위",
                  commonAnalysis.birth_reference || firstCandidate.saju_note,
                ],
                [
                  "자형 적용 기준",
                  commonAnalysis.caution_notes || firstCandidate.caution_notes,
                ],
                [
                  "등록 가능성 판단 기준",
                  commonAnalysis.official_status || firstCandidate.official_status,
                ],
              ]
                .filter(([, value]) => text(value))
                .map(([label, value]) => (
                  <div key={String(label)} className="rounded-lg bg-surface-strong p-4">
                    <p className="text-sm font-semibold">{text(label)}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {text(value)}
                    </p>
                  </div>
                ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{service.resultLabel}</h2>
          {service.slug !== "global-name-to-hangul" ? (
            <span className="text-sm text-muted">
              {candidates.length > 0
                ? allCandidatesRevealed
                  ? copy.allRevealed(allCandidates.length)
                  : copy.partialRevealed(Math.min(revealedCount, candidates.length))
                : copy.noRecommendation}
            </span>
          ) : null}
        </div>

        {candidates.length === 0 ? (
          <div className="rounded-lg border border-line bg-surface p-5 text-sm leading-6 text-muted shadow-sm">
            확인되지 않은 한자를 임의로 추천하지 않았습니다. 아래 검토 사유를 확인해 주세요.
          </div>
        ) : null}

        {candidates.map((item, index) => {
          const locked = index >= revealedCount;
          const title = candidateTitle(service, item, index);
          const subtitle =
            [text(item.hangul), text(item.pronunciation), text(item.region_fit)]
              .filter(Boolean)
              .join(" · ") || copy.candidateFallbackSubtitle;
          const matchingRate = candidateRate(item);
          const focus = getHanjaFocus(item, index);

          return (
            <article
              key={`${title}-${index}`}
              className={`relative overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm ${
                locked ? "min-h-32" : ""
              }`}
            >
              {!locked ? (
                <div>
                {service.slug === "global-name-to-hangul" ? (
                  <PronunciationCandidateDetails
                    item={item}
                    title={title}
                    matchingRate={matchingRate}
                    copy={copy}
                  />
                ) : (
                  <>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        {service.serviceType === "HANJA_MEANING_MATCH" ? (
                          <p className="mb-2 inline-flex rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-semibold text-brand-teal">
                            {focus.label}
                          </p>
                        ) : null}
                        <p className="text-sm text-muted">{subtitle}</p>
                        <h3 className="mt-1 text-2xl font-semibold tracking-normal">
                          {title}
                        </h3>
                        {service.serviceType === "HANJA_MEANING_MATCH" ? (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {getBreakdown(item.character_breakdown)
                              .filter((part) => text(part.origin_label))
                              .map((part) => (
                                <span
                                  key={`${text(part.character)}-${text(part.origin_label)}`}
                                  className="rounded-full border border-brand-teal/25 bg-brand-teal/5 px-2.5 py-1 text-xs font-semibold text-brand-teal"
                                >
                                  {text(part.character)} · {text(part.origin_label)}
                                </span>
                              ))}
                          </div>
                        ) : null}
                        {service.serviceType === "HANJA_MEANING_MATCH" ? (
                          <p className="mt-2 text-sm leading-6 text-muted">
                            {focus.description}
                          </p>
                        ) : null}
                      </div>
                      {matchingRate !== null ? (
                        <span className="rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-brand-teal">
                          {service.serviceType === "HANJA_MEANING_MATCH"
                            ? `조건 적합도 ${matchingRate}점`
                            : copy.fitScore(matchingRate)}
                        </span>
                      ) : service.serviceType === "HANJA_MEANING_MATCH" ? (
                        <span className="rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-brand-teal">
                          공식 음가 확인
                        </span>
                      ) : null}
                    </div>

                    <dl className="mt-4 grid gap-3 text-sm leading-6">
                      {candidateRows(service, item, detailedHanja, copy)
                        .filter(([, value]) => text(value))
                        .map(([label, value]) => (
                          <div key={label} className="grid gap-1">
                            <dt className="font-medium text-foreground">
                              {label}
                            </dt>
                            <dd className="text-muted">{text(value)}</dd>
                          </div>
                        ))}
                    </dl>
                  </>
                )}

                {service.serviceType !== "HANJA_MEANING_MATCH" &&
                getBreakdown(item.character_breakdown).length ? (
                  <div className="mt-5 rounded-lg bg-surface-strong p-4">
                    <p className="text-sm font-semibold">음절별 한자 매칭</p>
                    <div className="mt-3 grid gap-2">
                      {getBreakdown(item.character_breakdown).map(
                        (part, partIndex) => (
                          <div
                            key={`${text(part.syllable)}-${text(part.character)}-${partIndex}`}
                            className="grid gap-1 rounded-lg bg-surface px-3 py-2 text-sm"
                          >
                            <p className="font-semibold">
                              {text(part.syllable)} → {text(part.character)}
                              {text(part.designated_reading)
                                ? ` / 지정 발음 ${text(part.designated_reading)}`
                                : ""}
                            </p>
                            <p className="text-muted">
                              {text(part.meaning)}
                              {text(part.note) ? ` · ${text(part.note)}` : ""}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              ) : null}

              {locked ? (
                <div className="grid min-h-32 content-center gap-3 text-center">
                  {service.serviceType === "HANJA_MEANING_MATCH" ? (
                    <div>
                      <p className="text-sm font-semibold text-brand-teal">
                        {index + 1}순위 · {focus.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {focus.description}
                      </p>
                    </div>
                  ) : null}
                  <span className="mx-auto inline-flex items-center gap-2 rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background">
                    <Lock aria-hidden="true" size={16} />
                    {copy.lockedNote}
                  </span>
                </div>
              ) : null}
            </article>
          );
        })}
      </section>

      {service.serviceType === "HANJA_MEANING_MATCH" && candidates.length > 0 ? (
        allCandidatesRevealed && comprehensiveHanjaOptions.length ? (
          <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                <CheckCircle2 aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-teal">
                  전체 후보 확인 완료
                </p>
                <h2 className="mt-1 text-lg font-semibold">한자 종합 상세</h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  다섯 후보에 사용된 한자를 음절별로 합쳐, 중복 없이 비교합니다.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5">
              {comprehensiveHanjaOptions.map((group) => (
                <div key={group.syllable} className="grid gap-3">
                  <p className="text-sm font-semibold">
                    {group.syllable} 음절 추천 한자
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {group.options.map((option) => (
                      <div
                        key={`${group.syllable}-${text(option.character)}`}
                        className="rounded-lg border border-line bg-background p-4 text-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-2xl font-semibold">
                            {text(option.character)}
                          </p>
                          {candidateRate(option) !== null ? (
                            <span className="rounded-lg bg-surface-strong px-2 py-1 text-xs font-semibold text-brand-teal">
                              {candidateRate(option)}%
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 font-medium">{text(option.meaning)}</p>
                        <p className="mt-1 text-muted">
                          지정 발음 {text(option.designated_reading)}
                        </p>
                        {text(option.interpretation) ? (
                          <p className="mt-2 leading-5 text-muted">
                            {text(option.interpretation)}
                          </p>
                        ) : null}
                        {text(option.recommendation_reason) ? (
                          <p className="mt-2 leading-5 text-muted">
                            {text(option.recommendation_reason)}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="rounded-lg border border-dashed border-line bg-surface-strong p-5 text-center">
            <Lock aria-hidden="true" className="mx-auto text-muted" size={20} />
            <h2 className="mt-3 text-base font-semibold">한자 종합 상세 잠금</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              모든 추천 후보를 확인하면 음절별 한자 뜻과 추천 근거를 한 번에 비교할 수 있습니다.
            </p>
          </section>
        )
      ) : null}

      {rejected.length ? (
        <section className="rounded-lg border border-brand-rose/25 bg-brand-rose/5 p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle
              aria-hidden="true"
              className="text-brand-rose"
              size={18}
            />
            <h2 className="text-base font-semibold">{copy.rejectedTitle}</h2>
          </div>
          <div className="mt-4 grid gap-2">
            {rejectedGroups.map(([reason, characters]) => (
              <div
                key={reason}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg bg-surface px-4 py-2.5 text-sm"
              >
                <p className="font-semibold">{reason}</p>
                <p className="text-base font-semibold tracking-wide text-brand-rose">
                  {characters.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {service.serviceType !== "HANJA_MEANING_MATCH" &&
      text(record.official_verification_note) ? (
        <section className="rounded-lg border border-line bg-surface p-5">
          <div className="flex items-center gap-2">
            <CheckCircle2
              aria-hidden="true"
              className="text-brand-teal"
              size={18}
            />
            <h2 className="text-base font-semibold">{copy.officialNoteTitle}</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">
            {text(record.official_verification_note)}
          </p>
        </section>
      ) : null}
    </div>
  );
}
