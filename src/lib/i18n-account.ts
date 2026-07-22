// 계정 대시보드(내 저장 결과·주문 내역) 문구. ko가 원본이며 비한국어는 en으로 폴백한다.
// (23개 언어 전체 채우기는 다른 사전과 동일하게 이후 배치로 진행한다.)
export type AccountCopy = {
  dashboardTitle: string;
  loading: string;
  loadError: string;
  resultsTitle: string;
  resultsEmpty: string;
  ordersTitle: string;
  ordersEmpty: string;
  untitledResult: string;
  openResult: string;
  deleteResult: string;
  deleteConfirm: string;
  serviceNames: Record<string, string>;
  orderTypes: Record<string, string>;
  paymentStatus: Record<string, string>;
  fulfillmentStatus: Record<string, string>;
};

const ko: AccountCopy = {
  dashboardTitle: "내 계정 활동",
  loading: "계정 데이터를 불러오는 중입니다.",
  loadError: "계정 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
  resultsTitle: "내 저장 결과",
  resultsEmpty: "저장한 분석 결과가 없습니다.",
  ordersTitle: "내 주문 내역",
  ordersEmpty: "주문 내역이 없습니다.",
  untitledResult: "분석 결과",
  openResult: "다시 보기",
  deleteResult: "삭제",
  deleteConfirm: "이 저장 결과를 삭제할까요?",
  serviceNames: {
    HANJA_MEANING_MATCH: "한자 의미 매칭",
    KOREAN_TO_GLOBAL: "글로벌 이름 변환",
    GLOBAL_TO_KOREAN: "한국 이름·발음 변환",
  },
  orderTypes: {
    PREMIUM_PDF: "프리미엄 리포트",
    CALLIGRAPHY_IMAGE: "캘리그래피 이미지",
    STAMP_DELIVERY: "이름 도장",
  },
  paymentStatus: {
    UNPAID: "미결제",
    PAID: "결제 완료",
    REFUNDED: "환불",
    CANCELLED: "취소",
  },
  fulfillmentStatus: {
    PENDING: "대기 중",
    PROCESSING: "처리 중",
    SHIPPED: "발송됨",
    COMPLETED: "완료",
    CANCELLED: "취소",
  },
};

const en: AccountCopy = {
  dashboardTitle: "My account activity",
  loading: "Loading your account data.",
  loadError: "Couldn't load your account data. Please try again shortly.",
  resultsTitle: "Saved results",
  resultsEmpty: "You have no saved analysis results yet.",
  ordersTitle: "Order history",
  ordersEmpty: "You have no orders yet.",
  untitledResult: "Analysis result",
  openResult: "View again",
  deleteResult: "Delete",
  deleteConfirm: "Delete this saved result?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Hanja meaning matching",
    KOREAN_TO_GLOBAL: "Global name conversion",
    GLOBAL_TO_KOREAN: "Korean name / pronunciation",
  },
  orderTypes: {
    PREMIUM_PDF: "Premium report",
    CALLIGRAPHY_IMAGE: "Calligraphy image",
    STAMP_DELIVERY: "Name stamp",
  },
  paymentStatus: {
    UNPAID: "Unpaid",
    PAID: "Paid",
    REFUNDED: "Refunded",
    CANCELLED: "Cancelled",
  },
  fulfillmentStatus: {
    PENDING: "Pending",
    PROCESSING: "Processing",
    SHIPPED: "Shipped",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
  },
};

const vi: AccountCopy = {
  dashboardTitle: "Hoạt động tài khoản của tôi",
  loading: "Đang tải dữ liệu tài khoản của bạn.",
  loadError: "Không thể tải dữ liệu tài khoản. Vui lòng thử lại sau.",
  resultsTitle: "Kết quả đã lưu",
  resultsEmpty: "Bạn chưa có kết quả phân tích nào được lưu.",
  ordersTitle: "Lịch sử đơn hàng",
  ordersEmpty: "Bạn chưa có đơn hàng nào.",
  untitledResult: "Kết quả phân tích",
  openResult: "Xem lại",
  deleteResult: "Xóa",
  deleteConfirm: "Xóa kết quả đã lưu này?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Ghép nghĩa Hanja",
    KOREAN_TO_GLOBAL: "Chuyển đổi tên toàn cầu",
    GLOBAL_TO_KOREAN: "Tên / phát âm tiếng Hàn",
  },
  orderTypes: {
    PREMIUM_PDF: "Báo cáo cao cấp",
    CALLIGRAPHY_IMAGE: "Hình thư pháp",
    STAMP_DELIVERY: "Con dấu tên",
  },
  paymentStatus: {
    UNPAID: "Chưa thanh toán",
    PAID: "Đã thanh toán",
    REFUNDED: "Đã hoàn tiền",
    CANCELLED: "Đã hủy",
  },
  fulfillmentStatus: {
    PENDING: "Đang chờ",
    PROCESSING: "Đang xử lý",
    SHIPPED: "Đã gửi",
    COMPLETED: "Hoàn tất",
    CANCELLED: "Đã hủy",
  },
};

const ja: AccountCopy = {
  dashboardTitle: "マイアカウントの利用状況",
  loading: "アカウント情報を読み込んでいます。",
  loadError: "アカウント情報を読み込めませんでした。しばらくしてからもう一度お試しください。",
  resultsTitle: "保存した結果",
  resultsEmpty: "保存された分析結果はまだありません。",
  ordersTitle: "注文履歴",
  ordersEmpty: "注文履歴はありません。",
  untitledResult: "分析結果",
  openResult: "もう一度見る",
  deleteResult: "削除",
  deleteConfirm: "この保存結果を削除しますか？",
  serviceNames: {
    HANJA_MEANING_MATCH: "漢字の意味マッチング",
    KOREAN_TO_GLOBAL: "グローバル名前変換",
    GLOBAL_TO_KOREAN: "韓国の名前・発音表記",
  },
  orderTypes: {
    PREMIUM_PDF: "プレミアムレポート",
    CALLIGRAPHY_IMAGE: "カリグラフィー画像",
    STAMP_DELIVERY: "名前はんこ",
  },
  paymentStatus: {
    UNPAID: "未決済",
    PAID: "決済完了",
    REFUNDED: "返金",
    CANCELLED: "キャンセル",
  },
  fulfillmentStatus: {
    PENDING: "受付中",
    PROCESSING: "処理中",
    SHIPPED: "発送済み",
    COMPLETED: "完了",
    CANCELLED: "キャンセル",
  },
};

const zh: AccountCopy = {
  dashboardTitle: "我的账户动态",
  loading: "正在加载您的账户数据。",
  loadError: "无法加载您的账户数据，请稍后重试。",
  resultsTitle: "已保存的结果",
  resultsEmpty: "您还没有已保存的分析结果。",
  ordersTitle: "订单记录",
  ordersEmpty: "您还没有订单。",
  untitledResult: "分析结果",
  openResult: "再次查看",
  deleteResult: "删除",
  deleteConfirm: "确定删除此保存的结果吗？",
  serviceNames: {
    HANJA_MEANING_MATCH: "汉字含义匹配",
    KOREAN_TO_GLOBAL: "全球名字转换",
    GLOBAL_TO_KOREAN: "韩国名字・发音标注",
  },
  orderTypes: {
    PREMIUM_PDF: "高级报告",
    CALLIGRAPHY_IMAGE: "书法图像",
    STAMP_DELIVERY: "姓名印章",
  },
  paymentStatus: {
    UNPAID: "未支付",
    PAID: "已支付",
    REFUNDED: "已退款",
    CANCELLED: "已取消",
  },
  fulfillmentStatus: {
    PENDING: "待处理",
    PROCESSING: "处理中",
    SHIPPED: "已发货",
    COMPLETED: "已完成",
    CANCELLED: "已取消",
  },
};

const th: AccountCopy = {
  dashboardTitle: "กิจกรรมบัญชีของฉัน",
  loading: "กำลังโหลดข้อมูลบัญชีของคุณ",
  loadError: "ไม่สามารถโหลดข้อมูลบัญชีของคุณได้ กรุณาลองใหม่อีกครั้งในภายหลัง",
  resultsTitle: "ผลลัพธ์ที่บันทึกไว้",
  resultsEmpty: "คุณยังไม่มีผลการวิเคราะห์ที่บันทึกไว้",
  ordersTitle: "ประวัติการสั่งซื้อ",
  ordersEmpty: "คุณยังไม่มีคำสั่งซื้อ",
  untitledResult: "ผลการวิเคราะห์",
  openResult: "ดูอีกครั้ง",
  deleteResult: "ลบ",
  deleteConfirm: "ลบผลลัพธ์ที่บันทึกไว้นี้หรือไม่?",
  serviceNames: {
    HANJA_MEANING_MATCH: "จับคู่ความหมายฮันจา",
    KOREAN_TO_GLOBAL: "แปลงเป็นชื่อสากล",
    GLOBAL_TO_KOREAN: "ชื่อเกาหลี / การออกเสียง",
  },
  orderTypes: {
    PREMIUM_PDF: "รายงานพรีเมียม",
    CALLIGRAPHY_IMAGE: "ภาพอักษรวิจิตร",
    STAMP_DELIVERY: "ตราประทับชื่อ",
  },
  paymentStatus: {
    UNPAID: "ยังไม่ชำระเงิน",
    PAID: "ชำระเงินแล้ว",
    REFUNDED: "คืนเงินแล้ว",
    CANCELLED: "ยกเลิกแล้ว",
  },
  fulfillmentStatus: {
    PENDING: "รอดำเนินการ",
    PROCESSING: "กำลังดำเนินการ",
    SHIPPED: "จัดส่งแล้ว",
    COMPLETED: "เสร็จสิ้น",
    CANCELLED: "ยกเลิกแล้ว",
  },
};

const id: AccountCopy = {
  dashboardTitle: "Aktivitas akun saya",
  loading: "Memuat data akun Anda.",
  loadError: "Tidak dapat memuat data akun Anda. Silakan coba lagi nanti.",
  resultsTitle: "Hasil tersimpan",
  resultsEmpty: "Anda belum memiliki hasil analisis yang tersimpan.",
  ordersTitle: "Riwayat pesanan",
  ordersEmpty: "Anda belum memiliki pesanan.",
  untitledResult: "Hasil analisis",
  openResult: "Lihat lagi",
  deleteResult: "Hapus",
  deleteConfirm: "Hapus hasil tersimpan ini?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Pencocokan makna Hanja",
    KOREAN_TO_GLOBAL: "Konversi nama global",
    GLOBAL_TO_KOREAN: "Nama Korea / pelafalan",
  },
  orderTypes: {
    PREMIUM_PDF: "Laporan premium",
    CALLIGRAPHY_IMAGE: "Gambar kaligrafi",
    STAMP_DELIVERY: "Stempel nama",
  },
  paymentStatus: {
    UNPAID: "Belum dibayar",
    PAID: "Sudah dibayar",
    REFUNDED: "Dikembalikan",
    CANCELLED: "Dibatalkan",
  },
  fulfillmentStatus: {
    PENDING: "Menunggu",
    PROCESSING: "Diproses",
    SHIPPED: "Dikirim",
    COMPLETED: "Selesai",
    CANCELLED: "Dibatalkan",
  },
};

const de: AccountCopy = {
  dashboardTitle: "Meine Kontoaktivität",
  loading: "Ihre Kontodaten werden geladen.",
  loadError: "Ihre Kontodaten konnten nicht geladen werden. Bitte versuchen Sie es später erneut.",
  resultsTitle: "Gespeicherte Ergebnisse",
  resultsEmpty: "Sie haben noch keine gespeicherten Analyseergebnisse.",
  ordersTitle: "Bestellverlauf",
  ordersEmpty: "Sie haben noch keine Bestellungen.",
  untitledResult: "Analyseergebnis",
  openResult: "Erneut ansehen",
  deleteResult: "Löschen",
  deleteConfirm: "Dieses gespeicherte Ergebnis löschen?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Hanja-Bedeutungszuordnung",
    KOREAN_TO_GLOBAL: "Globale Namensumwandlung",
    GLOBAL_TO_KOREAN: "Koreanischer Name / Aussprache",
  },
  orderTypes: {
    PREMIUM_PDF: "Premium-Bericht",
    CALLIGRAPHY_IMAGE: "Kalligrafie-Bild",
    STAMP_DELIVERY: "Namensstempel",
  },
  paymentStatus: {
    UNPAID: "Nicht bezahlt",
    PAID: "Bezahlt",
    REFUNDED: "Erstattet",
    CANCELLED: "Storniert",
  },
  fulfillmentStatus: {
    PENDING: "Ausstehend",
    PROCESSING: "In Bearbeitung",
    SHIPPED: "Versendet",
    COMPLETED: "Abgeschlossen",
    CANCELLED: "Storniert",
  },
};

const es: AccountCopy = {
  dashboardTitle: "Actividad de mi cuenta",
  loading: "Cargando los datos de tu cuenta.",
  loadError: "No se pudieron cargar los datos de tu cuenta. Inténtalo de nuevo en unos momentos.",
  resultsTitle: "Resultados guardados",
  resultsEmpty: "Aún no tienes resultados de análisis guardados.",
  ordersTitle: "Historial de pedidos",
  ordersEmpty: "Aún no tienes pedidos.",
  untitledResult: "Resultado del análisis",
  openResult: "Ver de nuevo",
  deleteResult: "Eliminar",
  deleteConfirm: "¿Eliminar este resultado guardado?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Asociación de significados de hanja",
    KOREAN_TO_GLOBAL: "Conversión de nombre global",
    GLOBAL_TO_KOREAN: "Nombre coreano / pronunciación",
  },
  orderTypes: {
    PREMIUM_PDF: "Informe premium",
    CALLIGRAPHY_IMAGE: "Imagen de caligrafía",
    STAMP_DELIVERY: "Sello de nombre",
  },
  paymentStatus: {
    UNPAID: "Sin pagar",
    PAID: "Pagado",
    REFUNDED: "Reembolsado",
    CANCELLED: "Cancelado",
  },
  fulfillmentStatus: {
    PENDING: "Pendiente",
    PROCESSING: "En proceso",
    SHIPPED: "Enviado",
    COMPLETED: "Completado",
    CANCELLED: "Cancelado",
  },
};

const fr: AccountCopy = {
  dashboardTitle: "Activité de mon compte",
  loading: "Chargement des données de votre compte.",
  loadError: "Impossible de charger les données de votre compte. Veuillez réessayer dans un instant.",
  resultsTitle: "Résultats enregistrés",
  resultsEmpty: "Vous n'avez pas encore de résultats d'analyse enregistrés.",
  ordersTitle: "Historique des commandes",
  ordersEmpty: "Vous n'avez pas encore de commandes.",
  untitledResult: "Résultat d'analyse",
  openResult: "Revoir",
  deleteResult: "Supprimer",
  deleteConfirm: "Supprimer ce résultat enregistré ?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Association de sens en hanja",
    KOREAN_TO_GLOBAL: "Conversion de nom international",
    GLOBAL_TO_KOREAN: "Nom coréen / prononciation",
  },
  orderTypes: {
    PREMIUM_PDF: "Rapport premium",
    CALLIGRAPHY_IMAGE: "Image de calligraphie",
    STAMP_DELIVERY: "Tampon de nom",
  },
  paymentStatus: {
    UNPAID: "Non payé",
    PAID: "Payé",
    REFUNDED: "Remboursé",
    CANCELLED: "Annulé",
  },
  fulfillmentStatus: {
    PENDING: "En attente",
    PROCESSING: "En cours de traitement",
    SHIPPED: "Expédié",
    COMPLETED: "Terminé",
    CANCELLED: "Annulé",
  },
};

const it: AccountCopy = {
  dashboardTitle: "Attività del mio account",
  loading: "Caricamento dei dati del tuo account.",
  loadError: "Impossibile caricare i dati del tuo account. Riprova tra poco.",
  resultsTitle: "Risultati salvati",
  resultsEmpty: "Non hai ancora risultati di analisi salvati.",
  ordersTitle: "Cronologia degli ordini",
  ordersEmpty: "Non hai ancora ordini.",
  untitledResult: "Risultato dell'analisi",
  openResult: "Rivedi",
  deleteResult: "Elimina",
  deleteConfirm: "Eliminare questo risultato salvato?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Abbinamento del significato degli hanja",
    KOREAN_TO_GLOBAL: "Conversione del nome globale",
    GLOBAL_TO_KOREAN: "Nome coreano / pronuncia",
  },
  orderTypes: {
    PREMIUM_PDF: "Rapporto premium",
    CALLIGRAPHY_IMAGE: "Immagine di calligrafia",
    STAMP_DELIVERY: "Timbro del nome",
  },
  paymentStatus: {
    UNPAID: "Non pagato",
    PAID: "Pagato",
    REFUNDED: "Rimborsato",
    CANCELLED: "Annullato",
  },
  fulfillmentStatus: {
    PENDING: "In attesa",
    PROCESSING: "In elaborazione",
    SHIPPED: "Spedito",
    COMPLETED: "Completato",
    CANCELLED: "Annullato",
  },
};

const pt: AccountCopy = {
  dashboardTitle: "Atividade da minha conta",
  loading: "Carregando os dados da sua conta.",
  loadError: "Não foi possível carregar os dados da sua conta. Tente novamente em instantes.",
  resultsTitle: "Resultados salvos",
  resultsEmpty: "Você ainda não tem resultados de análise salvos.",
  ordersTitle: "Histórico de pedidos",
  ordersEmpty: "Você ainda não tem pedidos.",
  untitledResult: "Resultado da análise",
  openResult: "Ver novamente",
  deleteResult: "Excluir",
  deleteConfirm: "Excluir este resultado salvo?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Correspondência de significados de hanja",
    KOREAN_TO_GLOBAL: "Conversão de nome global",
    GLOBAL_TO_KOREAN: "Nome coreano / pronúncia",
  },
  orderTypes: {
    PREMIUM_PDF: "Relatório premium",
    CALLIGRAPHY_IMAGE: "Imagem de caligrafia",
    STAMP_DELIVERY: "Carimbo de nome",
  },
  paymentStatus: {
    UNPAID: "Não pago",
    PAID: "Pago",
    REFUNDED: "Reembolsado",
    CANCELLED: "Cancelado",
  },
  fulfillmentStatus: {
    PENDING: "Pendente",
    PROCESSING: "Em processamento",
    SHIPPED: "Enviado",
    COMPLETED: "Concluído",
    CANCELLED: "Cancelado",
  },
};

const ru: AccountCopy = {
  dashboardTitle: "Активность моего аккаунта",
  loading: "Загрузка данных вашего аккаунта.",
  loadError: "Не удалось загрузить данные вашего аккаунта. Пожалуйста, повторите попытку позже.",
  resultsTitle: "Сохранённые результаты",
  resultsEmpty: "У вас пока нет сохранённых результатов анализа.",
  ordersTitle: "История заказов",
  ordersEmpty: "У вас пока нет заказов.",
  untitledResult: "Результат анализа",
  openResult: "Посмотреть снова",
  deleteResult: "Удалить",
  deleteConfirm: "Удалить этот сохранённый результат?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Подбор значений ханча",
    KOREAN_TO_GLOBAL: "Преобразование в глобальное имя",
    GLOBAL_TO_KOREAN: "Корейское имя / произношение",
  },
  orderTypes: {
    PREMIUM_PDF: "Премиум-отчёт",
    CALLIGRAPHY_IMAGE: "Каллиграфическое изображение",
    STAMP_DELIVERY: "Именная печать",
  },
  paymentStatus: {
    UNPAID: "Не оплачено",
    PAID: "Оплачено",
    REFUNDED: "Возвращено",
    CANCELLED: "Отменено",
  },
  fulfillmentStatus: {
    PENDING: "Ожидает",
    PROCESSING: "В обработке",
    SHIPPED: "Отправлено",
    COMPLETED: "Завершено",
    CANCELLED: "Отменено",
  },
};

const ar: AccountCopy = {
  dashboardTitle: "نشاط حسابي",
  loading: "جارٍ تحميل بيانات حسابك.",
  loadError: "تعذّر تحميل بيانات حسابك. يُرجى المحاولة مرة أخرى بعد قليل.",
  resultsTitle: "النتائج المحفوظة",
  resultsEmpty: "ليس لديك أي نتائج تحليل محفوظة بعد.",
  ordersTitle: "سجل الطلبات",
  ordersEmpty: "ليس لديك أي طلبات بعد.",
  untitledResult: "نتيجة التحليل",
  openResult: "عرض مرة أخرى",
  deleteResult: "حذف",
  deleteConfirm: "هل تريد حذف هذه النتيجة المحفوظة؟",
  serviceNames: {
    HANJA_MEANING_MATCH: "مطابقة معاني الهانجا",
    KOREAN_TO_GLOBAL: "تحويل الاسم العالمي",
    GLOBAL_TO_KOREAN: "الاسم الكوري / النطق",
  },
  orderTypes: {
    PREMIUM_PDF: "تقرير مميّز",
    CALLIGRAPHY_IMAGE: "صورة خط فني",
    STAMP_DELIVERY: "ختم الاسم",
  },
  paymentStatus: {
    UNPAID: "غير مدفوع",
    PAID: "مدفوع",
    REFUNDED: "تم الاسترداد",
    CANCELLED: "ملغى",
  },
  fulfillmentStatus: {
    PENDING: "قيد الانتظار",
    PROCESSING: "قيد المعالجة",
    SHIPPED: "تم الشحن",
    COMPLETED: "مكتمل",
    CANCELLED: "ملغى",
  },
};

const fil: AccountCopy = {
  dashboardTitle: "Aktibidad ng aking account",
  loading: "Nilo-load ang data ng iyong account.",
  loadError: "Hindi ma-load ang data ng iyong account. Pakisubukan muli mamaya.",
  resultsTitle: "Mga naka-save na resulta",
  resultsEmpty: "Wala ka pang naka-save na resulta ng pagsusuri.",
  ordersTitle: "Kasaysayan ng order",
  ordersEmpty: "Wala ka pang order.",
  untitledResult: "Resulta ng pagsusuri",
  openResult: "Tingnan muli",
  deleteResult: "Tanggalin",
  deleteConfirm: "Tanggalin ang naka-save na resultang ito?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Pagtutugma ng kahulugan ng Hanja",
    KOREAN_TO_GLOBAL: "Conversion ng global na pangalan",
    GLOBAL_TO_KOREAN: "Pangalang Koreano / pagbigkas",
  },
  orderTypes: {
    PREMIUM_PDF: "Premium na ulat",
    CALLIGRAPHY_IMAGE: "Larawan ng calligraphy",
    STAMP_DELIVERY: "Name stamp",
  },
  paymentStatus: {
    UNPAID: "Hindi pa bayad",
    PAID: "Bayad na",
    REFUNDED: "Na-refund",
    CANCELLED: "Kinansela",
  },
  fulfillmentStatus: {
    PENDING: "Nakabinbin",
    PROCESSING: "Pinoproseso",
    SHIPPED: "Naipadala na",
    COMPLETED: "Kumpleto",
    CANCELLED: "Kinansela",
  },
};

const uz: AccountCopy = {
  dashboardTitle: "Hisobim faoliyati",
  loading: "Hisob ma'lumotlaringiz yuklanmoqda.",
  loadError: "Hisob ma'lumotlaringizni yuklab bo'lmadi. Iltimos, birozdan so'ng qayta urinib ko'ring.",
  resultsTitle: "Saqlangan natijalar",
  resultsEmpty: "Sizda hali saqlangan tahlil natijalari yo'q.",
  ordersTitle: "Buyurtmalar tarixi",
  ordersEmpty: "Sizda hali buyurtmalar yo'q.",
  untitledResult: "Tahlil natijasi",
  openResult: "Yana ko'rish",
  deleteResult: "O'chirish",
  deleteConfirm: "Ushbu saqlangan natija o'chirilsinmi?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Hanja ma'nosini moslashtirish",
    KOREAN_TO_GLOBAL: "Global ismga aylantirish",
    GLOBAL_TO_KOREAN: "Koreyscha ism / talaffuz",
  },
  orderTypes: {
    PREMIUM_PDF: "Premium hisobot",
    CALLIGRAPHY_IMAGE: "Kalligrafiya tasviri",
    STAMP_DELIVERY: "Ism muhri",
  },
  paymentStatus: {
    UNPAID: "To'lanmagan",
    PAID: "To'langan",
    REFUNDED: "Qaytarilgan",
    CANCELLED: "Bekor qilingan",
  },
  fulfillmentStatus: {
    PENDING: "Kutilmoqda",
    PROCESSING: "Ishlanmoqda",
    SHIPPED: "Jo'natilgan",
    COMPLETED: "Yakunlangan",
    CANCELLED: "Bekor qilingan",
  },
};

const mn: AccountCopy = {
  dashboardTitle: "Миний бүртгэлийн үйл ажиллагаа",
  loading: "Таны бүртгэлийн мэдээллийг ачаалж байна.",
  loadError: "Таны бүртгэлийн мэдээллийг ачаалж чадсангүй. Хэсэг хугацааны дараа дахин оролдоно уу.",
  resultsTitle: "Хадгалсан үр дүн",
  resultsEmpty: "Танд хадгалсан шинжилгээний үр дүн одоогоор алга.",
  ordersTitle: "Захиалгын түүх",
  ordersEmpty: "Танд одоогоор захиалга алга.",
  untitledResult: "Шинжилгээний үр дүн",
  openResult: "Дахин үзэх",
  deleteResult: "Устгах",
  deleteConfirm: "Энэ хадгалсан үр дүнг устгах уу?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Ханзны утга тохируулах",
    KOREAN_TO_GLOBAL: "Дэлхийн нэр хөрвүүлэх",
    GLOBAL_TO_KOREAN: "Солонгос нэр / дуудлага",
  },
  orderTypes: {
    PREMIUM_PDF: "Премиум тайлан",
    CALLIGRAPHY_IMAGE: "Уран бичлэгийн зураг",
    STAMP_DELIVERY: "Нэрийн тамга",
  },
  paymentStatus: {
    UNPAID: "Төлөгдөөгүй",
    PAID: "Төлөгдсөн",
    REFUNDED: "Буцаагдсан",
    CANCELLED: "Цуцлагдсан",
  },
  fulfillmentStatus: {
    PENDING: "Хүлээгдэж буй",
    PROCESSING: "Боловсруулж байна",
    SHIPPED: "Илгээгдсэн",
    COMPLETED: "Дууссан",
    CANCELLED: "Цуцлагдсан",
  },
};

const hi: AccountCopy = {
  dashboardTitle: "मेरे खाते की गतिविधि",
  loading: "आपके खाते का डेटा लोड हो रहा है।",
  loadError: "आपके खाते का डेटा लोड नहीं हो सका। कृपया थोड़ी देर बाद पुनः प्रयास करें।",
  resultsTitle: "सहेजे गए परिणाम",
  resultsEmpty: "आपके पास अभी तक कोई सहेजा गया विश्लेषण परिणाम नहीं है।",
  ordersTitle: "ऑर्डर इतिहास",
  ordersEmpty: "आपके पास अभी तक कोई ऑर्डर नहीं है।",
  untitledResult: "विश्लेषण परिणाम",
  openResult: "फिर से देखें",
  deleteResult: "हटाएं",
  deleteConfirm: "क्या इस सहेजे गए परिणाम को हटाना है?",
  serviceNames: {
    HANJA_MEANING_MATCH: "हांजा अर्थ मिलान",
    KOREAN_TO_GLOBAL: "वैश्विक नाम रूपांतरण",
    GLOBAL_TO_KOREAN: "कोरियाई नाम / उच्चारण",
  },
  orderTypes: {
    PREMIUM_PDF: "प्रीमियम रिपोर्ट",
    CALLIGRAPHY_IMAGE: "सुलेख छवि",
    STAMP_DELIVERY: "नाम की मुहर",
  },
  paymentStatus: {
    UNPAID: "अवैतनिक",
    PAID: "भुगतान किया गया",
    REFUNDED: "रिफंड किया गया",
    CANCELLED: "रद्द किया गया",
  },
  fulfillmentStatus: {
    PENDING: "लंबित",
    PROCESSING: "प्रसंस्करण जारी",
    SHIPPED: "भेजा गया",
    COMPLETED: "पूर्ण",
    CANCELLED: "रद्द किया गया",
  },
};

const tr: AccountCopy = {
  dashboardTitle: "Hesap etkinliğim",
  loading: "Hesap verileriniz yükleniyor.",
  loadError: "Hesap verileriniz yüklenemedi. Lütfen birazdan tekrar deneyin.",
  resultsTitle: "Kaydedilen sonuçlar",
  resultsEmpty: "Henüz kaydedilmiş bir analiz sonucunuz yok.",
  ordersTitle: "Sipariş geçmişi",
  ordersEmpty: "Henüz bir siparişiniz yok.",
  untitledResult: "Analiz sonucu",
  openResult: "Tekrar görüntüle",
  deleteResult: "Sil",
  deleteConfirm: "Bu kaydedilen sonuç silinsin mi?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Hanja anlam eşleştirme",
    KOREAN_TO_GLOBAL: "Küresel ada dönüştürme",
    GLOBAL_TO_KOREAN: "Korece ad / telaffuz",
  },
  orderTypes: {
    PREMIUM_PDF: "Premium rapor",
    CALLIGRAPHY_IMAGE: "Kaligrafi görseli",
    STAMP_DELIVERY: "İsim mührü",
  },
  paymentStatus: {
    UNPAID: "Ödenmedi",
    PAID: "Ödendi",
    REFUNDED: "İade edildi",
    CANCELLED: "İptal edildi",
  },
  fulfillmentStatus: {
    PENDING: "Beklemede",
    PROCESSING: "İşleniyor",
    SHIPPED: "Gönderildi",
    COMPLETED: "Tamamlandı",
    CANCELLED: "İptal edildi",
  },
};

const km: AccountCopy = {
  dashboardTitle: "សកម្មភាពគណនីរបស់ខ្ញុំ",
  loading: "កំពុងផ្ទុកទិន្នន័យគណនីរបស់អ្នក។",
  loadError: "មិនអាចផ្ទុកទិន្នន័យគណនីរបស់អ្នកបានទេ។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។",
  resultsTitle: "លទ្ធផលដែលបានរក្សាទុក",
  resultsEmpty: "អ្នកមិនទាន់មានលទ្ធផលវិភាគដែលបានរក្សាទុកនៅឡើយទេ។",
  ordersTitle: "ប្រវត្តិការបញ្ជាទិញ",
  ordersEmpty: "អ្នកមិនទាន់មានការបញ្ជាទិញនៅឡើយទេ។",
  untitledResult: "លទ្ធផលវិភាគ",
  openResult: "មើលម្តងទៀត",
  deleteResult: "លុប",
  deleteConfirm: "លុបលទ្ធផលដែលបានរក្សាទុកនេះឬ?",
  serviceNames: {
    HANJA_MEANING_MATCH: "ការផ្គូផ្គងអត្ថន័យហាន់ចា",
    KOREAN_TO_GLOBAL: "ការបំប្លែងឈ្មោះសកល",
    GLOBAL_TO_KOREAN: "ឈ្មោះកូរ៉េ / ការបញ្ចេញសំឡេង",
  },
  orderTypes: {
    PREMIUM_PDF: "របាយការណ៍ព្រីមៀម",
    CALLIGRAPHY_IMAGE: "រូបភាពអក្សរផ្ចង់",
    STAMP_DELIVERY: "ត្រាឈ្មោះ",
  },
  paymentStatus: {
    UNPAID: "មិនទាន់បង់ប្រាក់",
    PAID: "បានបង់ប្រាក់",
    REFUNDED: "បានបង្វិលប្រាក់",
    CANCELLED: "បានលុបចោល",
  },
  fulfillmentStatus: {
    PENDING: "កំពុងរង់ចាំ",
    PROCESSING: "កំពុងដំណើរការ",
    SHIPPED: "បានដឹកជញ្ជូន",
    COMPLETED: "បានបញ្ចប់",
    CANCELLED: "បានលុបចោល",
  },
};

const ms: AccountCopy = {
  dashboardTitle: "Aktiviti akaun saya",
  loading: "Memuatkan data akaun anda.",
  loadError: "Tidak dapat memuatkan data akaun anda. Sila cuba lagi sebentar lagi.",
  resultsTitle: "Keputusan disimpan",
  resultsEmpty: "Anda belum mempunyai keputusan analisis yang disimpan.",
  ordersTitle: "Sejarah pesanan",
  ordersEmpty: "Anda belum mempunyai pesanan.",
  untitledResult: "Keputusan analisis",
  openResult: "Lihat semula",
  deleteResult: "Padam",
  deleteConfirm: "Padam keputusan disimpan ini?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Pemadanan makna Hanja",
    KOREAN_TO_GLOBAL: "Penukaran nama global",
    GLOBAL_TO_KOREAN: "Nama Korea / sebutan",
  },
  orderTypes: {
    PREMIUM_PDF: "Laporan premium",
    CALLIGRAPHY_IMAGE: "Imej kaligrafi",
    STAMP_DELIVERY: "Cop nama",
  },
  paymentStatus: {
    UNPAID: "Belum dibayar",
    PAID: "Telah dibayar",
    REFUNDED: "Dikembalikan",
    CANCELLED: "Dibatalkan",
  },
  fulfillmentStatus: {
    PENDING: "Menunggu",
    PROCESSING: "Diproses",
    SHIPPED: "Dihantar",
    COMPLETED: "Selesai",
    CANCELLED: "Dibatalkan",
  },
};

const kk: AccountCopy = {
  dashboardTitle: "Менің тіркелгі әрекетім",
  loading: "Тіркелгі деректеріңіз жүктелуде.",
  loadError: "Тіркелгі деректеріңізді жүктеу мүмкін болмады. Сәл кейінірек қайталап көріңіз.",
  resultsTitle: "Сақталған нәтижелер",
  resultsEmpty: "Сізде әзірге сақталған талдау нәтижелері жоқ.",
  ordersTitle: "Тапсырыстар тарихы",
  ordersEmpty: "Сізде әзірге тапсырыстар жоқ.",
  untitledResult: "Талдау нәтижесі",
  openResult: "Қайта қарау",
  deleteResult: "Жою",
  deleteConfirm: "Осы сақталған нәтижені жою керек пе?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Ханча мағынасын сәйкестендіру",
    KOREAN_TO_GLOBAL: "Жаһандық есімге түрлендіру",
    GLOBAL_TO_KOREAN: "Корей есімі / айтылуы",
  },
  orderTypes: {
    PREMIUM_PDF: "Премиум есеп",
    CALLIGRAPHY_IMAGE: "Каллиграфия суреті",
    STAMP_DELIVERY: "Есім мөрі",
  },
  paymentStatus: {
    UNPAID: "Төленбеген",
    PAID: "Төленген",
    REFUNDED: "Қайтарылған",
    CANCELLED: "Бас тартылған",
  },
  fulfillmentStatus: {
    PENDING: "Күтуде",
    PROCESSING: "Өңделуде",
    SHIPPED: "Жіберілген",
    COMPLETED: "Аяқталған",
    CANCELLED: "Бас тартылған",
  },
};

const pl: AccountCopy = {
  dashboardTitle: "Aktywność mojego konta",
  loading: "Ładowanie danych Twojego konta.",
  loadError: "Nie udało się załadować danych Twojego konta. Spróbuj ponownie za chwilę.",
  resultsTitle: "Zapisane wyniki",
  resultsEmpty: "Nie masz jeszcze zapisanych wyników analizy.",
  ordersTitle: "Historia zamówień",
  ordersEmpty: "Nie masz jeszcze żadnych zamówień.",
  untitledResult: "Wynik analizy",
  openResult: "Zobacz ponownie",
  deleteResult: "Usuń",
  deleteConfirm: "Usunąć ten zapisany wynik?",
  serviceNames: {
    HANJA_MEANING_MATCH: "Dopasowanie znaczeń hanja",
    KOREAN_TO_GLOBAL: "Konwersja na imię międzynarodowe",
    GLOBAL_TO_KOREAN: "Imię koreańskie / wymowa",
  },
  orderTypes: {
    PREMIUM_PDF: "Raport premium",
    CALLIGRAPHY_IMAGE: "Obraz kaligrafii",
    STAMP_DELIVERY: "Pieczęć imienna",
  },
  paymentStatus: {
    UNPAID: "Nieopłacone",
    PAID: "Opłacone",
    REFUNDED: "Zwrócone",
    CANCELLED: "Anulowane",
  },
  fulfillmentStatus: {
    PENDING: "Oczekujące",
    PROCESSING: "W realizacji",
    SHIPPED: "Wysłane",
    COMPLETED: "Zrealizowane",
    CANCELLED: "Anulowane",
  },
};

const accountCopies: Record<string, AccountCopy> = { ko, en, vi, ja, zh, th, id, de, es, fr, it, pt, ru, ar, fil, uz, mn, hi, tr, km, ms, kk, pl };

export function getAccountCopy(locale?: string): AccountCopy {
  if (!locale || locale === "ko") return ko;
  return accountCopies[locale] ?? en;
}
