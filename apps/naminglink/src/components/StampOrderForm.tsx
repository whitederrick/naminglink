"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { Stamp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  STAMP_MODEL_CODES,
  STAMP_MODELS,
  type StampModelCode,
  type StampRegion,
} from "@/lib/goods-products";

// 이름 도장 주문 폼.
// - domestic: 한국어 UI · 카카오페이(requestPayment, 리디렉션 복구) · 국내 배송.
// - global: 영어 UI · 페이팔 SPB(loadPaymentUI, 페이지 내 버튼) · 국제 배송(국가 입력 필수).
// 채널 키 등록 전에는 결제 버튼이 "준비 중"으로 남는 다크 런치 상태.

type StampCheckout = {
  orderId: string;
  paymentId: string;
  storeId: string;
  channelKey: string;
  payMethod: "CARD" | "EASY_PAY" | "PAYPAL";
  orderName: string;
  totalAmount: number;
  currency: "KRW" | "USD";
};

const PENDING_STAMP_KEY = "nl_stamp_pending";

const COPY = {
  ko: {
    heading: "이름 도장 신청 · {price}",
    intro:
      "분석 결과에서 고른 한글·한자 이름을 새긴 도장을 제작해 배송해 드립니다. 현재 대한민국 내 배송만 지원합니다.",
    modelLegend: "도장 종류",
    nameLabel: "도장에 새길 이름 (한글 또는 한자, 1~8자)",
    namePlaceholder: "예: 김하늘 또는 金昇河",
    nameInvalid: "도장 문구는 한글 또는 한자 1~8자여야 합니다.",
    recipient: "수령인",
    phone: "연락처",
    phonePlaceholder: "예: 010-1234-5678",
    email: "이메일 (선택)",
    country: "배송 국가",
    countryPlaceholder: "",
    address: "배송 주소 (대한민국 내)",
    addressPlaceholder: "우편번호와 함께 전체 주소를 입력해 주세요.",
    note: "요청사항 (선택)",
    privacy:
      "입력하신 수령인·연락처·주소는 도장 제작과 배송에만 사용되며, 관련 법령에 따른 보관 의무 기간이 지나면 파기됩니다.",
    payButton: "카카오페이로 결제 · {price}",
    paying: "결제 진행 중…",
    preparing: "결제 기능 준비 중입니다",
    orderFailed: "주문 생성에 실패했습니다.",
    payIncomplete: "결제가 완료되지 않았습니다.",
    payMismatch: "결제 식별값이 주문과 일치하지 않습니다.",
    confirmFailed: "결제 확인에 실패했습니다.",
    processFailed: "주문 처리에 실패했습니다.",
    recoverFailed: "결제 정보를 복구하지 못했습니다. 다시 시도해 주세요.",
    doneEyebrow: "주문이 접수되었습니다",
    doneTitle: "이름 도장 제작을 시작합니다",
    doneBody:
      "결제가 확인되었습니다. 제작이 시작되면 입력하신 연락처로 안내드리며, 발송까지는 영업일 기준 5~7일이 걸립니다. 로그인 상태로 주문하셨다면 계정 페이지의 주문 내역에서 진행 상태를 확인할 수 있습니다.",
    orderNo: "주문번호",
  },
  en: {
    heading: "Order a name stamp · {price}",
    intro:
      "We carve your chosen Hangul (or Hanja) name into a traditional Korean name stamp and ship it to you. International shipping is included in the price.",
    modelLegend: "Stamp type",
    nameLabel: "Name to carve (Hangul or Hanja, 1–8 characters)",
    namePlaceholder: "e.g. 김하늘",
    nameInvalid: "The stamp text must be 1–8 Hangul or Hanja characters.",
    recipient: "Recipient",
    phone: "Phone number",
    phonePlaceholder: "e.g. +1 555 123 4567",
    email: "Email (optional)",
    country: "Destination country",
    countryPlaceholder: "e.g. United States",
    address: "Shipping address",
    addressPlaceholder: "Full address including postal code.",
    note: "Special requests (optional)",
    privacy:
      "Your recipient, contact, and address details are used only to make and ship the stamp, and are destroyed after the legally required retention period.",
    payButton: "Pay with PayPal · {price}",
    paying: "Processing payment…",
    preparing: "Payment is coming soon",
    orderFailed: "Failed to create the order.",
    payIncomplete: "The payment was not completed.",
    payMismatch: "The payment ID does not match this order.",
    confirmFailed: "Failed to confirm the payment.",
    processFailed: "Failed to process the order.",
    recoverFailed: "Could not recover payment details. Please try again.",
    doneEyebrow: "Order received",
    doneTitle: "Your name stamp is on its way to production",
    doneBody:
      "Your payment is confirmed. We will contact you when production starts; international delivery typically takes 2–3 weeks after dispatch. If you ordered while signed in, you can track the status on your account page.",
    orderNo: "Order number",
  },
  vi: {
    heading: "Đặt một con dấu tên · {price}",
    intro: "Chúng tôi khắc tên Hangul (hoặc Hanja) mà bạn chọn vào một con dấu tên truyền thống của Hàn Quốc và gửi đến bạn. Phí vận chuyển quốc tế đã được bao gồm trong giá.",
    modelLegend: "Loại con dấu",
    nameLabel: "Tên để khắc (Hangul hoặc Hanja, 1–8 ký tự)",
    namePlaceholder: "ví dụ. 김하늘",
    nameInvalid: "Văn bản con dấu phải có từ 1–8 ký tự Hangul hoặc Hanja.",
    recipient: "Người nhận",
    phone: "Số điện thoại",
    phonePlaceholder: "ví dụ. +1 555 123 4567",
    email: "Email (tùy chọn)",
    country: "Quốc gia đến",
    countryPlaceholder: "ví dụ. Hoa Kỳ",
    address: "Địa chỉ giao hàng",
    addressPlaceholder: "Địa chỉ đầy đủ bao gồm mã bưu chính.",
    note: "Yêu cầu đặc biệt (tùy chọn)",
    privacy: "Thông tin người nhận, liên hệ và địa chỉ của bạn chỉ được sử dụng để làm và gửi con dấu, và sẽ bị tiêu hủy sau thời gian lưu giữ theo quy định pháp luật.",
    payButton: "Thanh toán bằng PayPal · {price}",
    paying: "Đang xử lý thanh toán…",
    preparing: "Thanh toán sắp hoàn tất",
    orderFailed: "Tạo đơn hàng không thành công.",
    payIncomplete: "Thanh toán chưa hoàn tất.",
    payMismatch: "ID thanh toán không khớp với đơn hàng này.",
    confirmFailed: "Xác nhận thanh toán không thành công.",
    processFailed: "Xử lý đơn hàng không thành công.",
    recoverFailed: "Không thể khôi phục thông tin thanh toán. Vui lòng thử lại.",
    doneEyebrow: "Đơn hàng đã nhận",
    doneTitle: "Con dấu tên của bạn đang được sản xuất",
    doneBody: "Thanh toán của bạn đã được xác nhận. Chúng tôi sẽ liên hệ với bạn khi sản xuất bắt đầu; giao hàng quốc tế thường mất 2–3 tuần sau khi gửi. Nếu bạn đã đặt hàng khi đăng nhập, bạn có thể theo dõi trạng thái trên trang tài khoản của mình.",
    orderNo: "Số đơn hàng",
  },
  th: {
    heading: "สั่งซื้อประทับชื่อ · {price}",
    intro: "เราจะแกะสลักชื่อ Hangul (หรือ Hanja) ที่คุณเลือกลงบนประทับชื่อเกาหลีแบบดั้งเดิมและจัดส่งให้คุณ การจัดส่งระหว่างประเทศรวมอยู่ในราคาแล้ว",
    modelLegend: "ประเภทประทับ",
    nameLabel: "ชื่อที่จะแกะสลัก (Hangul หรือ Hanja, 1–8 ตัวอักษร)",
    namePlaceholder: "เช่น 김하늘",
    nameInvalid: "ข้อความประทับต้องมี 1–8 ตัวอักษร Hangul หรือ Hanja",
    recipient: "ผู้รับ",
    phone: "หมายเลขโทรศัพท์",
    phonePlaceholder: "เช่น +1 555 123 4567",
    email: "อีเมล (ไม่บังคับ)",
    country: "ประเทศปลายทาง",
    countryPlaceholder: "เช่น สหรัฐอเมริกา",
    address: "ที่อยู่สำหรับจัดส่ง",
    addressPlaceholder: "ที่อยู่เต็มรวมถึงรหัสไปรษณีย์",
    note: "คำขอพิเศษ (ไม่บังคับ)",
    privacy: "ข้อมูลผู้รับ, ติดต่อ, และที่อยู่ของคุณจะถูกใช้เฉพาะเพื่อทำและจัดส่งประทับ และจะถูกทำลายหลังจากระยะเวลาการเก็บรักษาที่กฎหมายกำหนด",
    payButton: "ชำระเงินด้วย PayPal · {price}",
    paying: "กำลังประมวลผลการชำระเงิน…",
    preparing: "การชำระเงินกำลังจะมาเร็วๆ นี้",
    orderFailed: "ไม่สามารถสร้างคำสั่งซื้อได้",
    payIncomplete: "การชำระเงินไม่สมบูรณ์",
    payMismatch: "รหัสการชำระเงินไม่ตรงกับคำสั่งซื้อนี้",
    confirmFailed: "ไม่สามารถยืนยันการชำระเงินได้",
    processFailed: "ไม่สามารถดำเนินการคำสั่งซื้อได้",
    recoverFailed: "ไม่สามารถกู้คืนรายละเอียดการชำระเงินได้ กรุณาลองอีกครั้ง",
    doneEyebrow: "คำสั่งซื้อได้รับแล้ว",
    doneTitle: "ประทับชื่อของคุณกำลังอยู่ในกระบวนการผลิต",
    doneBody: "การชำระเงินของคุณได้รับการยืนยันแล้ว เราจะติดต่อคุณเมื่อเริ่มการผลิต; การจัดส่งระหว่างประเทศมักใช้เวลาประมาณ 2–3 สัปดาห์หลังจากการจัดส่ง หากคุณสั่งซื้อในขณะที่ลงชื่อเข้าใช้ คุณสามารถติดตามสถานะได้ที่หน้าบัญชีของคุณ",
    orderNo: "หมายเลขคำสั่งซื้อ",
  },
  ja: {
    heading: "名前スタンプを注文 · {price}",
    intro: "あなたが選んだハングル（または漢字）名を伝統的な韓国の名前スタンプに彫刻し、発送します。国際配送は価格に含まれています。",
    modelLegend: "スタンプの種類",
    nameLabel: "彫刻する名前（ハングルまたは漢字、1〜8文字）",
    namePlaceholder: "例：김하늘",
    nameInvalid: "スタンプのテキストは1〜8のハングルまたは漢字の文字でなければなりません。",
    recipient: "受取人",
    phone: "電話番号",
    phonePlaceholder: "例：+1 555 123 4567",
    email: "メールアドレス（任意）",
    country: "配送先国",
    countryPlaceholder: "例：アメリカ合衆国",
    address: "配送先住所",
    addressPlaceholder: "郵便番号を含む完全な住所。",
    note: "特別なリクエスト（任意）",
    privacy: "受取人、連絡先、住所の詳細はスタンプの作成と発送のためだけに使用され、法的に必要な保存期間が過ぎた後に破棄されます。",
    payButton: "PayPalで支払う · {price}",
    paying: "支払い処理中…",
    preparing: "支払いがまもなく行われます",
    orderFailed: "注文の作成に失敗しました。",
    payIncomplete: "支払いが完了していません。",
    payMismatch: "支払いIDがこの注文と一致しません。",
    confirmFailed: "支払いの確認に失敗しました。",
    processFailed: "注文の処理に失敗しました。",
    recoverFailed: "支払い詳細を回復できませんでした。もう一度お試しください。",
    doneEyebrow: "注文を受け取りました",
    doneTitle: "あなたの名前スタンプは製作に向けて進行中です",
    doneBody: "お支払いが確認されました。製作が始まった際にご連絡いたします。国際配送は通常、発送後2〜3週間かかります。サインインして注文した場合は、アカウントページでステータスを追跡できます。",
    orderNo: "注文番号",
  },
  zh: {
    heading: "订购姓名印章 · {price}",
    intro: "我们将您选择的韩文（或汉字）姓名雕刻在传统的韩国姓名印章上并寄送给您。国际运输费用已包含在价格中。",
    modelLegend: "印章类型",
    nameLabel: "要雕刻的姓名（韩文或汉字，1–8个字符）",
    namePlaceholder: "例如：김하늘",
    nameInvalid: "印章文本必须为1–8个韩文或汉字字符。",
    recipient: "收件人",
    phone: "电话号码",
    phonePlaceholder: "例如：+1 555 123 4567",
    email: "电子邮件（可选）",
    country: "目的国家",
    countryPlaceholder: "例如：美国",
    address: "邮寄地址",
    addressPlaceholder: "包括邮政编码的完整地址。",
    note: "特殊请求（可选）",
    privacy: "您的收件人、联系方式和地址信息仅用于制作和寄送印章，法律要求的保留期限后将被销毁。",
    payButton: "使用PayPal支付 · {price}",
    paying: "正在处理付款…",
    preparing: "付款即将完成",
    orderFailed: "创建订单失败。",
    payIncomplete: "付款未完成。",
    payMismatch: "付款ID与此订单不匹配。",
    confirmFailed: "确认付款失败。",
    processFailed: "处理订单失败。",
    recoverFailed: "无法恢复付款详情。请再试一次。",
    doneEyebrow: "订单已收到",
    doneTitle: "您的姓名印章正在生产中",
    doneBody: "您的付款已确认。生产开始时我们会与您联系；国际配送通常在发货后需要2–3周。如果您在登录状态下下单，您可以在您的账户页面跟踪状态。",
    orderNo: "订单编号",
  },
  id: {
    heading: "Pesan stempel nama · {price}",
    intro: "Kami mengukir nama Hangul (atau Hanja) yang Anda pilih ke dalam stempel nama Korea tradisional dan mengirimkannya kepada Anda. Pengiriman internasional sudah termasuk dalam harga.",
    modelLegend: "Jenis stempel",
    nameLabel: "Nama yang akan diukir (Hangul atau Hanja, 1–8 karakter)",
    namePlaceholder: "mis. 김하늘",
    nameInvalid: "Teks stempel harus terdiri dari 1–8 karakter Hangul atau Hanja.",
    recipient: "Penerima",
    phone: "Nomor telepon",
    phonePlaceholder: "mis. +1 555 123 4567",
    email: "Email (opsional)",
    country: "Negara tujuan",
    countryPlaceholder: "mis. Amerika Serikat",
    address: "Alamat pengiriman",
    addressPlaceholder: "Alamat lengkap termasuk kode pos.",
    note: "Permintaan khusus (opsional)",
    privacy: "Detail penerima, kontak, dan alamat Anda hanya digunakan untuk membuat dan mengirim stempel, dan akan dihancurkan setelah periode penyimpanan yang diwajibkan secara hukum.",
    payButton: "Bayar dengan PayPal · {price}",
    paying: "Memproses pembayaran…",
    preparing: "Pembayaran akan segera diproses",
    orderFailed: "Gagal membuat pesanan.",
    payIncomplete: "Pembayaran tidak selesai.",
    payMismatch: "ID pembayaran tidak cocok dengan pesanan ini.",
    confirmFailed: "Gagal mengonfirmasi pembayaran.",
    processFailed: "Gagal memproses pesanan.",
    recoverFailed: "Tidak dapat memulihkan detail pembayaran. Silakan coba lagi.",
    doneEyebrow: "Pesanan diterima",
    doneTitle: "Stempel nama Anda sedang dalam proses produksi",
    doneBody: "Pembayaran Anda telah dikonfirmasi. Kami akan menghubungi Anda saat produksi dimulai; pengiriman internasional biasanya memakan waktu 2–3 minggu setelah pengiriman. Jika Anda memesan saat masuk, Anda dapat melacak status di halaman akun Anda.",
    orderNo: "Nomor pesanan",
  },
  de: {
    heading: "Bestellen Sie einen Namensstempel · {price}",
    intro: "Wir gravieren Ihren gewählten Hangul (oder Hanja) Namen in einen traditionellen koreanischen Namensstempel und versenden ihn an Sie. Der internationale Versand ist im Preis enthalten.",
    modelLegend: "Stempeltyp",
    nameLabel: "Name zum Gravieren (Hangul oder Hanja, 1–8 Zeichen)",
    namePlaceholder: "z.B. 김하늘",
    nameInvalid: "Der Stempeltext muss 1–8 Hangul oder Hanja Zeichen enthalten.",
    recipient: "Empfänger",
    phone: "Telefonnummer",
    phonePlaceholder: "z.B. +1 555 123 4567",
    email: "E-Mail (optional)",
    country: "Zielland",
    countryPlaceholder: "z.B. Vereinigte Staaten",
    address: "Lieferadresse",
    addressPlaceholder: "Vollständige Adresse einschließlich Postleitzahl.",
    note: "Besondere Anfragen (optional)",
    privacy: "Ihre Empfänger-, Kontakt- und Adressdaten werden nur zur Herstellung und zum Versand des Stempels verwendet und nach Ablauf der gesetzlich vorgeschriebenen Aufbewahrungsfrist vernichtet.",
    payButton: "Mit PayPal bezahlen · {price}",
    paying: "Zahlung wird bearbeitet…",
    preparing: "Zahlung kommt bald",
    orderFailed: "Bestellung konnte nicht erstellt werden.",
    payIncomplete: "Die Zahlung wurde nicht abgeschlossen.",
    payMismatch: "Die Zahlungs-ID stimmt nicht mit dieser Bestellung überein.",
    confirmFailed: "Zahlung konnte nicht bestätigt werden.",
    processFailed: "Bestellung konnte nicht bearbeitet werden.",
    recoverFailed: "Zahlungsdetails konnten nicht wiederhergestellt werden. Bitte versuchen Sie es erneut.",
    doneEyebrow: "Bestellung erhalten",
    doneTitle: "Ihr Namensstempel ist auf dem Weg zur Produktion",
    doneBody: "Ihre Zahlung ist bestätigt. Wir werden Sie kontaktieren, wenn die Produktion beginnt; die internationale Lieferung dauert in der Regel 2–3 Wochen nach dem Versand. Wenn Sie während der Bestellung angemeldet waren, können Sie den Status auf Ihrer Kontoseite verfolgen.",
    orderNo: "Bestellnummer",
  },
  es: {
    heading: "Ordenar un sello de nombre · {price}",
    intro: "Grabamos el nombre en Hangul (o Hanja) que elijas en un sello de nombre coreano tradicional y te lo enviamos. El envío internacional está incluido en el precio.",
    modelLegend: "Tipo de sello",
    nameLabel: "Nombre a grabar (Hangul o Hanja, 1–8 caracteres)",
    namePlaceholder: "p. ej. 김하늘",
    nameInvalid: "El texto del sello debe tener de 1 a 8 caracteres en Hangul o Hanja.",
    recipient: "Destinatario",
    phone: "Número de teléfono",
    phonePlaceholder: "p. ej. +1 555 123 4567",
    email: "Correo electrónico (opcional)",
    country: "País de destino",
    countryPlaceholder: "p. ej. Estados Unidos",
    address: "Dirección de envío",
    addressPlaceholder: "Dirección completa incluyendo código postal.",
    note: "Solicitudes especiales (opcional)",
    privacy: "Los detalles de tu destinatario, contacto y dirección se utilizan solo para hacer y enviar el sello, y se destruyen después del período de retención legalmente requerido.",
    payButton: "Pagar con PayPal · {price}",
    paying: "Procesando el pago…",
    preparing: "El pago está en camino",
    orderFailed: "No se pudo crear el pedido.",
    payIncomplete: "El pago no se completó.",
    payMismatch: "La ID de pago no coincide con este pedido.",
    confirmFailed: "No se pudo confirmar el pago.",
    processFailed: "No se pudo procesar el pedido.",
    recoverFailed: "No se pudieron recuperar los detalles del pago. Por favor, inténtalo de nuevo.",
    doneEyebrow: "Pedido recibido",
    doneTitle: "Tu sello de nombre está en camino a producción",
    doneBody: "Tu pago está confirmado. Nos pondremos en contacto contigo cuando comience la producción; la entrega internacional suele tardar de 2 a 3 semanas después del envío. Si hiciste el pedido mientras estabas conectado, puedes rastrear el estado en tu página de cuenta.",
    orderNo: "Número de pedido",
  },
  fr: {
    heading: "Commander un tampon de nom · {price}",
    intro: "Nous gravons votre nom en Hangul (ou Hanja) choisi dans un tampon de nom coréen traditionnel et vous l'expédions. L'expédition internationale est incluse dans le prix.",
    modelLegend: "Type de tampon",
    nameLabel: "Nom à graver (Hangul ou Hanja, 1–8 caractères)",
    namePlaceholder: "par ex. 김하늘",
    nameInvalid: "Le texte du tampon doit comporter 1 à 8 caractères en Hangul ou Hanja.",
    recipient: "Destinataire",
    phone: "Numéro de téléphone",
    phonePlaceholder: "par ex. +1 555 123 4567",
    email: "Email (facultatif)",
    country: "Pays de destination",
    countryPlaceholder: "par ex. États-Unis",
    address: "Adresse de livraison",
    addressPlaceholder: "Adresse complète incluant le code postal.",
    note: "Demandes spéciales (facultatif)",
    privacy: "Les détails de votre destinataire, de contact et d'adresse ne sont utilisés que pour fabriquer et expédier le tampon, et sont détruits après la période de conservation légalement requise.",
    payButton: "Payer avec PayPal · {price}",
    paying: "Traitement du paiement…",
    preparing: "Le paiement arrive bientôt",
    orderFailed: "Échec de la création de la commande.",
    payIncomplete: "Le paiement n'a pas été complété.",
    payMismatch: "L'ID de paiement ne correspond pas à cette commande.",
    confirmFailed: "Échec de la confirmation du paiement.",
    processFailed: "Échec du traitement de la commande.",
    recoverFailed: "Impossible de récupérer les détails du paiement. Veuillez réessayer.",
    doneEyebrow: "Commande reçue",
    doneTitle: "Votre tampon de nom est en cours de production",
    doneBody: "Votre paiement est confirmé. Nous vous contacterons lorsque la production commencera ; la livraison internationale prend généralement 2 à 3 semaines après l'expédition. Si vous avez commandé en étant connecté, vous pouvez suivre le statut sur votre page de compte.",
    orderNo: "Numéro de commande",
  },
  it: {
    heading: "Ordina un timbro con nome · {price}",
    intro: "Incidiamo il tuo nome scelto in Hangul (o Hanja) su un tradizionale timbro coreano e te lo spediamo. La spedizione internazionale è inclusa nel prezzo.",
    modelLegend: "Tipo di timbro",
    nameLabel: "Nome da incidere (Hangul o Hanja, 1–8 caratteri)",
    namePlaceholder: "es. 김하늘",
    nameInvalid: "Il testo del timbro deve contenere da 1 a 8 caratteri Hangul o Hanja.",
    recipient: "Destinatario",
    phone: "Numero di telefono",
    phonePlaceholder: "es. +1 555 123 4567",
    email: "Email (opzionale)",
    country: "Paese di destinazione",
    countryPlaceholder: "es. Stati Uniti",
    address: "Indirizzo di spedizione",
    addressPlaceholder: "Indirizzo completo incluso il codice postale.",
    note: "Richieste speciali (opzionale)",
    privacy: "I dettagli del tuo destinatario, contatto e indirizzo sono utilizzati solo per realizzare e spedire il timbro, e vengono distrutti dopo il periodo di conservazione legale richiesto.",
    payButton: "Paga con PayPal · {price}",
    paying: "Elaborazione del pagamento…",
    preparing: "Il pagamento sta arrivando presto",
    orderFailed: "Creazione dell'ordine fallita.",
    payIncomplete: "Il pagamento non è stato completato.",
    payMismatch: "L'ID del pagamento non corrisponde a questo ordine.",
    confirmFailed: "Conferma del pagamento fallita.",
    processFailed: "Elaborazione dell'ordine fallita.",
    recoverFailed: "Impossibile recuperare i dettagli del pagamento. Per favore riprova.",
    doneEyebrow: "Ordine ricevuto",
    doneTitle: "Il tuo timbro con nome è in fase di produzione",
    doneBody: "Il tuo pagamento è confermato. Ti contatteremo quando inizia la produzione; la consegna internazionale richiede solitamente 2–3 settimane dopo la spedizione. Se hai ordinato mentre eri connesso, puoi tracciare lo stato nella tua pagina account.",
    orderNo: "Numero d'ordine",
  },
  pt: {
    heading: "Peça um carimbo de nome · {price}",
    intro: "Nós gravamos o seu nome escolhido em Hangul (ou Hanja) em um carimbo de nome coreano tradicional e o enviamos para você. O envio internacional está incluído no preço.",
    modelLegend: "Tipo de carimbo",
    nameLabel: "Nome a ser gravado (Hangul ou Hanja, 1–8 caracteres)",
    namePlaceholder: "ex. 김하늘",
    nameInvalid: "O texto do carimbo deve ter de 1 a 8 caracteres em Hangul ou Hanja.",
    recipient: "Destinatário",
    phone: "Número de telefone",
    phonePlaceholder: "ex. +1 555 123 4567",
    email: "Email (opcional)",
    country: "País de destino",
    countryPlaceholder: "ex. Estados Unidos",
    address: "Endereço de envio",
    addressPlaceholder: "Endereço completo, incluindo código postal.",
    note: "Pedidos especiais (opcional)",
    privacy: "Os detalhes do seu destinatário, contato e endereço são usados apenas para fazer e enviar o carimbo, e são destruídos após o período de retenção legalmente exigido.",
    payButton: "Pagar com PayPal · {price}",
    paying: "Processando pagamento…",
    preparing: "O pagamento está chegando em breve",
    orderFailed: "Falha ao criar o pedido.",
    payIncomplete: "O pagamento não foi concluído.",
    payMismatch: "O ID do pagamento não corresponde a este pedido.",
    confirmFailed: "Falha ao confirmar o pagamento.",
    processFailed: "Falha ao processar o pedido.",
    recoverFailed: "Não foi possível recuperar os detalhes do pagamento. Por favor, tente novamente.",
    doneEyebrow: "Pedido recebido",
    doneTitle: "Seu carimbo de nome está a caminho da produção",
    doneBody: "Seu pagamento está confirmado. Entraremos em contato quando a produção começar; a entrega internacional geralmente leva de 2 a 3 semanas após o despacho. Se você fez o pedido enquanto estava logado, pode acompanhar o status na sua página de conta.",
    orderNo: "Número do pedido",
  },
  ru: {
    heading: "Заказать печать с именем · {price}",
    intro: "Мы вырезаем ваше выбранное имя на хангуле (или ханджа) на традиционной корейской печати и отправляем его вам. Международная доставка включена в цену.",
    modelLegend: "Тип печати",
    nameLabel: "Имя для вырезания (хангуль или ханджа, 1–8 символов)",
    namePlaceholder: "например, 김하늘",
    nameInvalid: "Текст печати должен содержать 1–8 символов хангуль или ханджа.",
    recipient: "Получатель",
    phone: "Номер телефона",
    phonePlaceholder: "например, +1 555 123 4567",
    email: "Электронная почта (по желанию)",
    country: "Страна назначения",
    countryPlaceholder: "например, Соединенные Штаты",
    address: "Адрес доставки",
    addressPlaceholder: "Полный адрес, включая почтовый индекс.",
    note: "Особые запросы (по желанию)",
    privacy: "Данные о вашем получателе, контактах и адресе используются только для изготовления и отправки печати и уничтожаются после истечения законного срока хранения.",
    payButton: "Оплатить через PayPal · {price}",
    paying: "Обработка платежа…",
    preparing: "Платеж скоро будет завершен",
    orderFailed: "Не удалось создать заказ.",
    payIncomplete: "Платеж не был завершен.",
    payMismatch: "ID платежа не соответствует этому заказу.",
    confirmFailed: "Не удалось подтвердить платеж.",
    processFailed: "Не удалось обработать заказ.",
    recoverFailed: "Не удалось восстановить данные платежа. Пожалуйста, попробуйте снова.",
    doneEyebrow: "Заказ получен",
    doneTitle: "Ваша печать с именем в процессе производства",
    doneBody: "Ваш платеж подтвержден. Мы свяжемся с вами, когда начнется производство; международная доставка обычно занимает 2–3 недели после отправки. Если вы сделали заказ, будучи в системе, вы можете отслеживать статус на странице вашего аккаунта.",
    orderNo: "Номер заказа",
  },
  ar: {
    heading: "اطلب ختم اسم · {price}",
    intro: "نقوم بنقش الاسم الذي تختاره باللغة الكورية (هانغول أو هانجا) على ختم اسم كوري تقليدي ونقوم بشحنه إليك. الشحن الدولي مشمول في السعر.",
    modelLegend: "نوع الختم",
    nameLabel: "الاسم للنقش (هانغول أو هانجا، 1–8 أحرف)",
    namePlaceholder: "مثل: 김하늘",
    nameInvalid: "يجب أن يتكون نص الختم من 1–8 أحرف هانغول أو هانجا.",
    recipient: "المستلم",
    phone: "رقم الهاتف",
    phonePlaceholder: "مثل: +1 555 123 4567",
    email: "البريد الإلكتروني (اختياري)",
    country: "دولة الوجهة",
    countryPlaceholder: "مثل: الولايات المتحدة",
    address: "عنوان الشحن",
    addressPlaceholder: "العنوان الكامل بما في ذلك الرمز البريدي.",
    note: "طلبات خاصة (اختياري)",
    privacy: "تفاصيل المستلم، والاتصال، والعنوان تُستخدم فقط لصنع وشحن الختم، ويتم تدميرها بعد انتهاء فترة الاحتفاظ القانونية المطلوبة.",
    payButton: "الدفع عبر PayPal · {price}",
    paying: "جارٍ معالجة الدفع…",
    preparing: "الدفع قيد الإعداد قريبًا",
    orderFailed: "فشل إنشاء الطلب.",
    payIncomplete: "لم يتم إكمال الدفع.",
    payMismatch: "معرف الدفع لا يتطابق مع هذا الطلب.",
    confirmFailed: "فشل تأكيد الدفع.",
    processFailed: "فشل في معالجة الطلب.",
    recoverFailed: "تعذر استرداد تفاصيل الدفع. يرجى المحاولة مرة أخرى.",
    doneEyebrow: "تم استلام الطلب",
    doneTitle: "ختم اسمك في طريقه إلى الإنتاج",
    doneBody: "تم تأكيد دفعك. سنتواصل معك عندما يبدأ الإنتاج؛ عادةً ما يستغرق التسليم الدولي من 2 إلى 3 أسابيع بعد الشحن. إذا قمت بالطلب أثناء تسجيل الدخول، يمكنك تتبع الحالة على صفحة حسابك.",
    orderNo: "رقم الطلب",
  },
  tr: {
    heading: "Bir isim mührü sipariş et · {price}",
    intro: "Seçtiğiniz Hangul (veya Hanja) ismini geleneksel bir Kore isim mührüne oyarak size gönderiyoruz. Uluslararası kargo fiyatın içindedir.",
    modelLegend: "Mühür türü",
    nameLabel: "Oymak için isim (Hangul veya Hanja, 1–8 karakter)",
    namePlaceholder: "örn. 김하늘",
    nameInvalid: "Mühür metni 1–8 Hangul veya Hanja karakteri olmalıdır.",
    recipient: "Alıcı",
    phone: "Telefon numarası",
    phonePlaceholder: "örn. +1 555 123 4567",
    email: "E-posta (isteğe bağlı)",
    country: "Gönderim yapılacak ülke",
    countryPlaceholder: "örn. Amerika Birleşik Devletleri",
    address: "Gönderim adresi",
    addressPlaceholder: "Posta kodu dahil tam adres.",
    note: "Özel talepler (isteğe bağlı)",
    privacy: "Alıcınız, iletişim ve adres bilgileri yalnızca mührü yapmak ve göndermek için kullanılır ve yasal olarak gerekli saklama süresi sona erdikten sonra imha edilir.",
    payButton: "PayPal ile öde · {price}",
    paying: "Ödeme işleniyor…",
    preparing: "Ödeme yakında geliyor",
    orderFailed: "Sipariş oluşturulamadı.",
    payIncomplete: "Ödeme tamamlanmadı.",
    payMismatch: "Ödeme kimliği bu siparişle eşleşmiyor.",
    confirmFailed: "Ödemeyi onaylamakta başarısız olundu.",
    processFailed: "Siparişi işlemekte başarısız olundu.",
    recoverFailed: "Ödeme bilgileri kurtarılamadı. Lütfen tekrar deneyin.",
    doneEyebrow: "Sipariş alındı",
    doneTitle: "İsim mührünüz üretim aşamasına geçiyor",
    doneBody: "Ödemeniz onaylandı. Üretim başladığında sizinle iletişime geçeceğiz; uluslararası teslimat genellikle gönderimden sonra 2–3 hafta sürer. Eğer oturum açarak sipariş verdiyseniz, durumunuza hesap sayfanızdan ulaşabilirsiniz.",
    orderNo: "Sipariş numarası",
  },
  fil: {
    heading: "Mag-order ng name stamp · {price}",
    intro: "Ihuhulma namin ang iyong napiling pangalan sa Hangul (o Hanja) sa isang tradisyonal na Korean name stamp at ipapadala ito sa iyo. Kasama sa presyo ang internasyonal na pagpapadala.",
    modelLegend: "Uri ng stamp",
    nameLabel: "Pangalan na ihuhulma (Hangul o Hanja, 1–8 na karakter)",
    namePlaceholder: "hal. 김하늘",
    nameInvalid: "Ang teksto ng stamp ay dapat na 1–8 na karakter ng Hangul o Hanja.",
    recipient: "Tanggapin",
    phone: "Numero ng telepono",
    phonePlaceholder: "hal. +1 555 123 4567",
    email: "Email (opsyonal)",
    country: "Bansang destinasyon",
    countryPlaceholder: "hal. Estados Unidos",
    address: "Address para sa pagpapadala",
    addressPlaceholder: "Buong address kasama ang postal code.",
    note: "Mga espesyal na kahilingan (opsyonal)",
    privacy: "Ang iyong tatanggap, contact, at address na detalye ay ginagamit lamang upang gumawa at ipadala ang stamp, at ito ay sirain pagkatapos ng legal na kinakailangang panahon ng pagpapanatili.",
    payButton: "Magbayad gamit ang PayPal · {price}",
    paying: "Pinoproseso ang pagbabayad…",
    preparing: "Malapit nang dumating ang pagbabayad",
    orderFailed: "Nabigong lumikha ng order.",
    payIncomplete: "Hindi natapos ang pagbabayad.",
    payMismatch: "Ang payment ID ay hindi tumutugma sa order na ito.",
    confirmFailed: "Nabigong kumpirmahin ang pagbabayad.",
    processFailed: "Nabigong iproseso ang order.",
    recoverFailed: "Hindi maibalik ang mga detalye ng pagbabayad. Pakisubukan muli.",
    doneEyebrow: "Natanggap ang order",
    doneTitle: "Ang iyong name stamp ay nasa proseso ng produksyon",
    doneBody: "Nakumpirma ang iyong pagbabayad. Makikipag-ugnayan kami sa iyo kapag nagsimula na ang produksyon; ang internasyonal na paghahatid ay karaniwang tumatagal ng 2–3 linggo pagkatapos ng pagpapadala. Kung nag-order ka habang naka-sign in, maaari mong subaybayan ang katayuan sa iyong account page.",
    orderNo: "Numero ng order",
  },
  uz: {
    heading: "Ism muhrini buyurtma qiling · {price}",
    intro: "Biz siz tanlagan Hangul (yoki Hanja) ismini an'anaviy koreyscha ism muhriga o'yib, sizga yuboramiz. Xalqaro yetkazib berish narxga kiritilgan.",
    modelLegend: "Muhr turi",
    nameLabel: "O'yiladigan ism (Hangul yoki Hanja, 1–8 belgilar)",
    namePlaceholder: "masalan, 김하늘",
    nameInvalid: "Muhr matni 1–8 ta Hangul yoki Hanja belgisidan iborat bo'lishi kerak.",
    recipient: "Qabul qiluvchi",
    phone: "Telefon raqami",
    phonePlaceholder: "masalan, +1 555 123 4567",
    email: "Elektron pochta (ixtiyoriy)",
    country: "Yetkazib berish mamlakati",
    countryPlaceholder: "masalan, Amerika Qo'shma Shtatlari",
    address: "Yetkazib berish manzili",
    addressPlaceholder: "To'liq manzil, pochta indeksi bilan.",
    note: "Maxsus so'rovlar (ixtiyoriy)",
    privacy: "Sizning qabul qiluvchingiz, aloqa va manzil ma'lumotlaringiz faqat muhrni tayyorlash va yuborish uchun ishlatiladi va qonuniy saqlash muddati tugagach yo'q qilinadi.",
    payButton: "PayPal bilan to'lang · {price}",
    paying: "To'lovni qayta ishlash…",
    preparing: "To'lov yaqinlashmoqda",
    orderFailed: "Buyurtma yaratishda xato.",
    payIncomplete: "To'lov to'liq amalga oshirilmadi.",
    payMismatch: "To'lov IDsi ushbu buyurtma bilan mos kelmaydi.",
    confirmFailed: "To'lovni tasdiqlashda xato.",
    processFailed: "Buyurtmani qayta ishlashda xato.",
    recoverFailed: "To'lov ma'lumotlarini tiklash mumkin emas. Iltimos, qaytadan urinib ko'ring.",
    doneEyebrow: "Buyurtma qabul qilindi",
    doneTitle: "Sizning ism muhringiz ishlab chiqarishga tayyorlanmoqda",
    doneBody: "Sizning to'lovingiz tasdiqlandi. Ishlab chiqarish boshlanganda siz bilan bog'lanamiz; xalqaro yetkazib berish odatda jo'natilgandan so'ng 2–3 hafta davom etadi. Agar siz tizimga kirgan holda buyurtma bergan bo'lsangiz, holatini hisobingiz sahifasida kuzatishingiz mumkin.",
    orderNo: "Buyurtma raqami",
  },
  mn: {
    heading: "Нэрийн тамга захиалах · {price}",
    intro: "Бид таны сонгосон Хангули (эсвэл Ханжа) нэрийг уламжлалт Солонгос нэрийн тамганд сийлж, танд илгээнэ. Олон улсын хүргэлт үнэ дээр багтсан.",
    modelLegend: "Тамганы төрөл",
    nameLabel: "Сийлэх нэр (Хангули эсвэл Ханжа, 1–8 тэмдэгт)",
    namePlaceholder: "жишээ нь: 김하늘",
    nameInvalid: "Тамганы текст нь 1–8 Хангули эсвэл Ханжа тэмдэгт байх ёстой.",
    recipient: "Хүлээн авагч",
    phone: "Утасны дугаар",
    phonePlaceholder: "жишээ нь: +1 555 123 4567",
    email: "И-мэйл (сонголттой)",
    country: "Зорьж буй улс",
    countryPlaceholder: "жишээ нь: АНУ",
    address: "Хүргэх хаяг",
    addressPlaceholder: "Шуудангийн кодыг оруулсан бүрэн хаяг.",
    note: "Онцгой хүсэлт (сонголттой)",
    privacy: "Таны хүлээн авагч, холбоо барих, хаягийн мэдээлэл нь зөвхөн тамга хийх болон илгээхэд ашиглагдана, хууль ёсны шаардлагатай хадгалалтын хугацаа дууссаны дараа устгагдана.",
    payButton: "PayPal-ээр төлөх · {price}",
    paying: "Төлбөрийг боловсруулах…",
    preparing: "Төлбөр удахгүй ирнэ",
    orderFailed: "Захиалгыг үүсгэхэд алдаа гарлаа.",
    payIncomplete: "Төлбөр дууссангүй.",
    payMismatch: "Төлбөрийн ID энэ захиалгаас зөрж байна.",
    confirmFailed: "Төлбөрийг баталгаажуулахад алдаа гарлаа.",
    processFailed: "Захиалгыг боловсруулахад алдаа гарлаа.",
    recoverFailed: "Төлбөрийн мэдээллийг сэргээж чадсангүй. Дахин оролдоно уу.",
    doneEyebrow: "Захиалга хүлээн авсан",
    doneTitle: "Таны нэрийн тамга үйлдвэрлэлд явж байна",
    doneBody: "Таны төлбөр баталгаажсан. Бид үйлдвэрлэл эхлэхэд холбоо барина; олон улсын хүргэлт ихэвчлэн илгээснээс хойш 2–3 долоо хоногийн хугацаанд ирдэг. Хэрэв та нэвтэрсэн үед захиалсан бол, таны дансны хуудаснаас статусыг хянах боломжтой.",
    orderNo: "Захиалгын дугаар",
  },
  hi: {
    heading: "एक नाम स्टाम्प का ऑर्डर करें · {price}",
    intro: "हम आपके चुने हुए हैंगुल (या हंजा) नाम को एक पारंपरिक कोरियाई नाम स्टाम्प में उकेरते हैं और इसे आपको भेजते हैं। अंतरराष्ट्रीय शिपिंग कीमत में शामिल है।",
    modelLegend: "स्टाम्प प्रकार",
    nameLabel: "उकेरने के लिए नाम (हैंगुल या हंजा, 1–8 अक्षर)",
    namePlaceholder: "जैसे कि 김하늘",
    nameInvalid: "स्टाम्प पाठ 1–8 हैंगुल या हंजा अक्षरों में होना चाहिए।",
    recipient: "प्राप्तकर्ता",
    phone: "फोन नंबर",
    phonePlaceholder: "जैसे कि +1 555 123 4567",
    email: "ईमेल (वैकल्पिक)",
    country: "गंतव्य देश",
    countryPlaceholder: "जैसे कि संयुक्त राज्य अमेरिका",
    address: "शिपिंग पता",
    addressPlaceholder: "पूर्ण पता जिसमें डाक कोड शामिल है।",
    note: "विशेष अनुरोध (वैकल्पिक)",
    privacy: "आपके प्राप्तकर्ता, संपर्क, और पते की जानकारी केवल स्टाम्प बनाने और भेजने के लिए उपयोग की जाती है, और कानूनी रूप से आवश्यक रखरखाव अवधि के बाद नष्ट कर दी जाती है।",
    payButton: "PayPal के साथ भुगतान करें · {price}",
    paying: "भुगतान प्रक्रिया में…",
    preparing: "भुगतान जल्द ही आ रहा है",
    orderFailed: "ऑर्डर बनाने में विफल।",
    payIncomplete: "भुगतान पूरा नहीं हुआ।",
    payMismatch: "भुगतान आईडी इस ऑर्डर से मेल नहीं खाता।",
    confirmFailed: "भुगतान की पुष्टि करने में विफल।",
    processFailed: "ऑर्डर को संसाधित करने में विफल।",
    recoverFailed: "भुगतान विवरण पुनर्प्राप्त करने में असमर्थ। कृपया फिर से प्रयास करें।",
    doneEyebrow: "ऑर्डर प्राप्त हुआ",
    doneTitle: "आपका नाम स्टाम्प उत्पादन के लिए भेजा गया है",
    doneBody: "आपका भुगतान पुष्टि हो गया है। हम आपको सूचित करेंगे जब उत्पादन शुरू होगा; अंतरराष्ट्रीय डिलीवरी आमतौर पर डिस्पैच के बाद 2–3 सप्ताह लेती है। यदि आपने साइन इन करते समय ऑर्डर किया है, तो आप अपने खाते के पृष्ठ पर स्थिति को ट्रैक कर सकते हैं।",
    orderNo: "ऑर्डर नंबर",
  },
  km: {
    heading: "បញ្ជាទិញត្រា · {price}",
    intro: "យើងឆ្លាក់ឈ្មោះ Hangul (ឬ Hanja) ដែលអ្នកបានជ្រើសរើសទៅលើត្រាខូរ៉េបែបប្រពៃណី ហើយការដឹកជញ្ជូនទៅអ្នក។ ការដឹកជញ្ជូនអន្តរជាតិត្រូវបានរួមបញ្ចូលក្នុងតម្លៃ។",
    modelLegend: "ប្រភេទត្រា",
    nameLabel: "ឈ្មោះដើម្បីឆ្លាក់ (Hangul ឬ Hanja, 1–8 តួអក្សរ)",
    namePlaceholder: "ឧទាហរណ៍: 김하늘",
    nameInvalid: "អត្ថបទត្រាត្រូវតែមាន 1–8 តួអក្សរ Hangul ឬ Hanja។",
    recipient: "អ្នកទទួល",
    phone: "លេខទូរសព្ទ",
    phonePlaceholder: "ឧទាហរណ៍: +1 555 123 4567",
    email: "អ៊ីមែល (ជាជម្រើស)",
    country: "ប្រទេសគោលដៅ",
    countryPlaceholder: "ឧទាហរណ៍: សហរដ្ឋអាមេរិក",
    address: "អាសយដ្ឋានការដឹកជញ្ជូន",
    addressPlaceholder: "អាសយដ្ឋានពេញលេញរួមមានលេខកូដប្រៃសណីយ៍។",
    note: "សំណើពិសេស (ជាជម្រើស)",
    privacy: "ព័ត៌មានអ្នកទទួល, ទំនាក់ទំនង, និងអាសយដ្ឋានរបស់អ្នកត្រូវបានប្រើប្រាស់តែសម្រាប់ការបង្កើត និងការដឹកជញ្ជូនត្រា ហើយត្រូវបានបំផ្លាញបន្ទាប់ពីរយៈពេលរក្សាទុកដែលត្រូវការតាមច្បាប់។",
    payButton: "បង់ប្រាក់ជាមួយ PayPal · {price}",
    paying: "កំពុងដំណើរការបង់ប្រាក់…",
    preparing: "ការបង់ប្រាក់កំពុងមកឆាប់ៗនេះ",
    orderFailed: "បរាជ័យក្នុងការបង្កើតការបញ្ជាទិញ។",
    payIncomplete: "ការបង់ប្រាក់មិនបានបញ្ចប់។",
    payMismatch: "លេខសម្គាល់ការបង់ប្រាក់មិនត្រូវនឹងការបញ្ជាទិញនេះ។",
    confirmFailed: "បរាជ័យក្នុងការបញ្ជាក់ការបង់ប្រាក់។",
    processFailed: "បរាជ័យក្នុងការប្រតិបត្តិការ ការបញ្ជាទិញ។",
    recoverFailed: "មិនអាចស្ដារព័ត៌មានការបង់ប្រាក់បានទេ។ សូមព្យាយាមម្តងទៀត។",
    doneEyebrow: "ការបញ្ជាទិញបានទទួល",
    doneTitle: "ត្រារបស់អ្នកកំពុងនៅលើផ្លូវទៅផលិតកម្ម",
    doneBody: "ការបង់ប្រាក់របស់អ្នកត្រូវបានបញ្ជាក់។ យើងនឹងទំនាក់ទំនងអ្នកនៅពេលដែលការផលិតចាប់ផ្តើម; ការដឹកជញ្ជូនអន្តរជាតិធម្មតាត្រូវការពេល 2–3 សប្តាហ៍បន្ទាប់ពីការដឹកជញ្ជូន។ ប្រសិនបើអ្នកបានបញ្ជាទិញនៅពេលចុះឈ្មោះ អ្នកអាចតាមដានស្ថានភាពនៅលើទំព័រ​គណនី​របស់អ្នក។",
    orderNo: "លេខការបញ្ជាទិញ",
  },
  kk: {
    heading: "Аты штампын тапсырыс беру · {price}",
    intro: "Біз сіз таңдаған Хангыль (немесе Ханджа) атын дәстүрлі корейлік аты штампының үстіне ойып, сізге жібереміз. Халықаралық жеткізу бағаға кіреді.",
    modelLegend: "Штамп түрі",
    nameLabel: "Ойылатын ат (Хангыль немесе Ханджа, 1–8 таңба)",
    namePlaceholder: "мысалы, 김하늘",
    nameInvalid: "Штамп мәтіні 1–8 Хангыль немесе Ханджа таңбаларынан тұруы тиіс.",
    recipient: "Алушы",
    phone: "Телефон нөмірі",
    phonePlaceholder: "мысалы, +1 555 123 4567",
    email: "Электрондық пошта (міндетті емес)",
    country: "Жеткізу елі",
    countryPlaceholder: "мысалы, Америка Құрама Штаттары",
    address: "Жеткізу мекенжайы",
    addressPlaceholder: "Пошта индексін қоса толық мекенжай.",
    note: "Арнайы сұраныстар (міндетті емес)",
    privacy: "Сіздің алушы, байланыс және мекенжай мәліметтеріңіз тек штампты жасау және жеткізу үшін пайдаланылады және заңмен талап етілген сақтау мерзімі өткеннен кейін жойылады.",
    payButton: "PayPal арқылы төлеу · {price}",
    paying: "Төлем өңделуде…",
    preparing: "Төлем жақында келеді",
    orderFailed: "Тапсырысты жасау сәтсіз аяқталды.",
    payIncomplete: "Төлем аяқталған жоқ.",
    payMismatch: "Төлем идентификаторы осы тапсырысқа сәйкес келмейді.",
    confirmFailed: "Төлемді растау сәтсіз аяқталды.",
    processFailed: "Тапсырысты өңдеу сәтсіз аяқталды.",
    recoverFailed: "Төлем мәліметтерін қалпына келтіру мүмкін болмады. Қайтадан көріңіз.",
    doneEyebrow: "Тапсырыс қабылданды",
    doneTitle: "Сіздің аты штампыңыз өндіріс жолында",
    doneBody: "Сіздің төлеміңіз расталды. Өндіріс басталғанда біз сізбен хабарласамыз; халықаралық жеткізу әдетте жіберілгеннен кейін 2–3 апта алады. Егер сіз кірген кезде тапсырыс берсеңіз, статусын өз аккаунт бетіңізден бақылауға болады.",
    orderNo: "Тапсырыс нөмірі",
  },
  ms: {
    heading: "Pesan cap nama · {price}",
    intro: "Kami mengukir nama Hangul (atau Hanja) pilihan anda ke dalam cap nama Korea tradisional dan menghantarnya kepada anda. Penghantaran antarabangsa termasuk dalam harga.",
    modelLegend: "Jenis cap",
    nameLabel: "Nama untuk diukir (Hangul atau Hanja, 1–8 aksara)",
    namePlaceholder: "contoh: 김하늘",
    nameInvalid: "Teks cap mesti terdiri daripada 1–8 aksara Hangul atau Hanja.",
    recipient: "Penerima",
    phone: "Nombor telefon",
    phonePlaceholder: "contoh: +1 555 123 4567",
    email: "Emel (pilihan)",
    country: "Negara destinasi",
    countryPlaceholder: "contoh: Amerika Syarikat",
    address: "Alamat penghantaran",
    addressPlaceholder: "Alamat penuh termasuk kod pos.",
    note: "Permintaan khas (pilihan)",
    privacy: "Butiran penerima, kontak, dan alamat anda hanya digunakan untuk membuat dan menghantar cap, dan akan dimusnahkan selepas tempoh penyimpanan yang diperlukan secara undang-undang.",
    payButton: "Bayar dengan PayPal · {price}",
    paying: "Memproses pembayaran…",
    preparing: "Pembayaran akan datang tidak lama lagi",
    orderFailed: "Gagal untuk membuat pesanan.",
    payIncomplete: "Pembayaran tidak lengkap.",
    payMismatch: "ID pembayaran tidak sepadan dengan pesanan ini.",
    confirmFailed: "Gagal untuk mengesahkan pembayaran.",
    processFailed: "Gagal untuk memproses pesanan.",
    recoverFailed: "Tidak dapat memulihkan butiran pembayaran. Sila cuba lagi.",
    doneEyebrow: "Pesanan diterima",
    doneTitle: "Cap nama anda sedang dalam perjalanan untuk dihasilkan",
    doneBody: "Pembayaran anda telah disahkan. Kami akan menghubungi anda apabila pengeluaran bermula; penghantaran antarabangsa biasanya mengambil masa 2–3 minggu selepas penghantaran. Jika anda membuat pesanan semasa log masuk, anda boleh menjejaki status di halaman akaun anda.",
    orderNo: "Nombor pesanan",
  },
  pl: {
    heading: "Zamów pieczątkę z imieniem · {price}",
    intro: "Wykrawamy wybrane przez Ciebie imię w Hangul (lub Hanja) na tradycyjnej koreańskiej pieczątce i wysyłamy ją do Ciebie. Międzynarodowa wysyłka jest wliczona w cenę.",
    modelLegend: "Typ pieczątki",
    nameLabel: "Imię do wykrojenia (Hangul lub Hanja, 1–8 znaków)",
    namePlaceholder: "np. 김하늘",
    nameInvalid: "Tekst na pieczątce musi składać się z 1–8 znaków Hangul lub Hanja.",
    recipient: "Odbiorca",
    phone: "Numer telefonu",
    phonePlaceholder: "np. +1 555 123 4567",
    email: "Email (opcjonalnie)",
    country: "Kraj docelowy",
    countryPlaceholder: "np. Stany Zjednoczone",
    address: "Adres wysyłki",
    addressPlaceholder: "Pełny adres, w tym kod pocztowy.",
    note: "Specjalne prośby (opcjonalnie)",
    privacy: "Twoje dane odbiorcy, kontaktowe i adresowe są używane tylko do wykonania i wysłania pieczątki, a następnie są niszczone po wymaganym prawnie okresie przechowywania.",
    payButton: "Zapłać przez PayPal · {price}",
    paying: "Przetwarzanie płatności…",
    preparing: "Płatność wkrótce",
    orderFailed: "Nie udało się utworzyć zamówienia.",
    payIncomplete: "Płatność nie została zakończona.",
    payMismatch: "ID płatności nie pasuje do tego zamówienia.",
    confirmFailed: "Nie udało się potwierdzić płatności.",
    processFailed: "Nie udało się przetworzyć zamówienia.",
    recoverFailed: "Nie można odzyskać danych płatności. Proszę spróbować ponownie.",
    doneEyebrow: "Zamówienie odebrane",
    doneTitle: "Twoja pieczątka z imieniem jest w drodze do produkcji",
    doneBody: "Twoja płatność została potwierdzona. Skontaktujemy się z Tobą, gdy produkcja się rozpocznie; międzynarodowa dostawa zazwyczaj zajmuje 2–3 tygodnie po wysyłce. Jeśli zamówiłeś, będąc zalogowanym, możesz śledzić status na swojej stronie konta.",
    orderNo: "Numer zamówienia",
  },
} as const;

export function StampOrderForm({
  initialName,
  region = "domestic",
  display,
  locale = "en",
}: {
  initialName?: string;
  region?: StampRegion;
  display: string;
  locale?: string;
}) {
  const global = region === "global";
  // 국내는 한국어 고정이고, 글로벌은 화면 로케일을 따르되 번역이 없으면 영어로 폴백한다.
  const copy = global ? (COPY[locale as keyof typeof COPY] ?? COPY.en) : COPY.ko;
  const withPrice = (template: string) => template.replace("{price}", display);
  const [stampName, setStampName] = useState(initialName ?? "");
  const [model, setModel] = useState<StampModelCode>("ROUND_WOOD");
  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [stage, setStage] = useState<"idle" | "ordering" | "paying" | "confirming" | "done">(
    "idle",
  );
  const [error, setError] = useState("");
  const [completedOrderId, setCompletedOrderId] = useState("");
  const [spbCheckout, setSpbCheckout] = useState<StampCheckout | null>(null);
  const redirectHandled = useRef(false);

  const channelKey = global
    ? process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL
    : (process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_KAKAOPAY ??
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY);
  const configured = Boolean(process.env.NEXT_PUBLIC_PORTONE_STORE_ID && channelKey);

  async function confirmOrder(orderId: string, paymentId: string) {
    const response = await fetch("/api/goods/stamp-confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, paymentId }),
    });
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;
    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || copy.confirmFailed);
    }
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (stage !== "idle") return;
    setError("");
    if (!/^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(stampName.trim())) {
      setError(copy.nameInvalid);
      return;
    }
    setStage("ordering");
    try {
      const response = await fetch("/api/goods/stamp-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          region,
          stampName: stampName.trim(),
          model,
          recipient: recipient.trim(),
          phone: phone.trim(),
          email: email.trim(),
          country: global ? country.trim() : undefined,
          address: address.trim(),
          note: note.trim() || undefined,
        }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; checkout?: StampCheckout }
        | null;
      if (!response.ok || !data?.ok || !data.checkout) {
        throw new Error(data?.error || copy.orderFailed);
      }
      const checkout = data.checkout;
      setStage("paying");
      if (global) {
        // 페이팔 SPB는 페이지 내 버튼을 렌더하므로 리디렉션 복구가 필요 없다.
        setSpbCheckout(checkout);
        return;
      }
      sessionStorage.setItem(
        PENDING_STAMP_KEY,
        JSON.stringify({ orderId: checkout.orderId, paymentId: checkout.paymentId }),
      );
      const redirectUrl = new URL(window.location.href);
      redirectUrl.searchParams.set("stampOrder", checkout.orderId);
      const payment = await PortOne.requestPayment({
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency,
        payMethod: checkout.payMethod as "CARD" | "EASY_PAY",
        redirectUrl: redirectUrl.toString(),
      });
      if (!payment) return;
      if (payment.code) throw new Error(payment.message || copy.payIncomplete);
      if (payment.paymentId !== checkout.paymentId) throw new Error(copy.payMismatch);
      setStage("confirming");
      await confirmOrder(checkout.orderId, checkout.paymentId);
      sessionStorage.removeItem(PENDING_STAMP_KEY);
      setCompletedOrderId(checkout.orderId);
      setStage("done");
    } catch (caught) {
      sessionStorage.removeItem(PENDING_STAMP_KEY);
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.processFailed);
    }
  }

  // 페이팔 SPB 버튼 렌더: paying 단계에서 컨테이너가 그려진 뒤 SDK를 호출한다.
  useEffect(() => {
    if (!global || stage !== "paying" || !spbCheckout) return;
    const checkout = spbCheckout;
    void PortOne.loadPaymentUI(
      {
        uiType: "PAYPAL_SPB",
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency as "USD",
      },
      {
        onPaymentSuccess: () => {
          setSpbCheckout(null);
          setStage("confirming");
          confirmOrder(checkout.orderId, checkout.paymentId)
            .then(() => {
              setCompletedOrderId(checkout.orderId);
              setStage("done");
            })
            .catch((caught) => {
              setStage("idle");
              setError(caught instanceof Error ? caught.message : copy.processFailed);
            });
        },
        onPaymentFail: (paymentError) => {
          setSpbCheckout(null);
          setStage("idle");
          setError(paymentError.message || copy.payIncomplete);
        },
      },
    ).catch((caught) => {
      setSpbCheckout(null);
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.processFailed);
    });
    // SPB 렌더는 결제 시도 단위로 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global, stage, spbCheckout]);

  // 모바일 간편결제 리디렉션 복귀(국내 카카오페이 전용): URL의 주문 식별값으로 confirm을 마저 수행한다.
  useEffect(() => {
    if (global || redirectHandled.current) return;
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("stampOrder");
    if (!orderId) return;
    redirectHandled.current = true;
    const failureCode = params.get("code");
    const failureMessage = params.get("message");
    const clearParams = () => {
      for (const key of ["stampOrder", "paymentId", "txId", "code", "message"]) {
        params.delete(key);
      }
      const query = params.toString();
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${query ? `?${query}` : ""}`,
      );
    };
    const pendingRaw = sessionStorage.getItem(PENDING_STAMP_KEY);
    sessionStorage.removeItem(PENDING_STAMP_KEY);
    let pending: { orderId?: string; paymentId?: string } | null = null;
    try {
      pending = pendingRaw
        ? (JSON.parse(pendingRaw) as { orderId?: string; paymentId?: string })
        : null;
    } catch {
      pending = null;
    }
    void Promise.resolve()
      .then(async () => {
        if (failureCode) throw new Error(failureMessage || copy.payIncomplete);
        // 다른 컨텍스트로 복귀해 sessionStorage(pending)가 없을 수 있으므로, 포트원이 리디렉션
        // URL에 붙인 paymentId를 폴백으로 사용한다(confirm이 서버에서 주문·금액을 재검증).
        const paymentId =
          pending && pending.orderId === orderId && pending.paymentId
            ? pending.paymentId
            : params.get("paymentId") || undefined;
        if (!paymentId) {
          throw new Error(copy.recoverFailed);
        }
        setStage("confirming");
        await confirmOrder(orderId, paymentId);
        setCompletedOrderId(orderId);
        setStage("done");
      })
      .catch((caught) => {
        setStage("idle");
        setError(caught instanceof Error ? caught.message : copy.processFailed);
      })
      .finally(() => {
        clearParams();
      });
    // 리디렉션 복구는 최초 마운트에서 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (stage === "done") {
    return (
      <section className="rounded-lg border border-brand-teal/25 bg-surface p-6 shadow-sm">
        <p className="text-sm font-semibold text-brand-teal">{copy.doneEyebrow}</p>
        <h2 className="mt-2 text-xl font-semibold">{copy.doneTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{copy.doneBody}</p>
        <p className="mt-3 text-xs text-muted">
          {copy.orderNo}: {completedOrderId}
        </p>
      </section>
    );
  }

  const busy = stage !== "idle";
  const inputClass =
    "h-11 w-full rounded-lg border border-line bg-background px-3 text-sm";

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Stamp aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">{withPrice(copy.heading)}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{copy.intro}</p>
        </div>
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium">{copy.modelLegend}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {STAMP_MODEL_CODES.map((code) => {
            const item = STAMP_MODELS[code];
            const selected = model === code;
            return (
              <label
                key={code}
                className={`flex cursor-pointer flex-col gap-1 rounded-lg border p-3 text-sm transition ${
                  selected
                    ? "border-brand-teal bg-surface-strong"
                    : "border-line bg-background hover:border-brand-teal/50"
                }`}
              >
                <span className="flex items-center gap-2 font-semibold">
                  <input
                    type="radio"
                    name="stampModel"
                    value={code}
                    checked={selected}
                    onChange={() => setModel(code)}
                    className="accent-current"
                  />
                  {global ? item.nameEn : item.name}
                </span>
                <span className="text-xs leading-5 text-muted">
                  {global ? item.descriptionEn : item.description}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.nameLabel}</span>
        <input
          value={stampName}
          onChange={(event) => setStampName(event.target.value)}
          placeholder={copy.namePlaceholder}
          required
          maxLength={8}
          className={inputClass}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium">{copy.recipient}</span>
          <input
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            required
            maxLength={40}
            className={inputClass}
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">{copy.phone}</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder={copy.phonePlaceholder}
            required
            className={inputClass}
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.email}</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
      </label>
      {global ? (
        <label className="grid gap-1 text-sm">
          <span className="font-medium">{copy.country}</span>
          <input
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder={copy.countryPlaceholder}
            required
            maxLength={60}
            className={inputClass}
          />
        </label>
      ) : null}
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.address}</span>
        <textarea
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder={copy.addressPlaceholder}
          required
          rows={3}
          maxLength={300}
          className="w-full rounded-lg border border-line bg-background px-3 py-2 text-sm"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.note}</span>
        <input
          value={note}
          onChange={(event) => setNote(event.target.value)}
          maxLength={500}
          className={inputClass}
        />
      </label>

      <p className="text-xs leading-5 text-muted">{copy.privacy}</p>

      {configured ? (
        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? copy.paying : withPrice(copy.payButton)}
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
        >
          {copy.preparing}
        </button>
      )}
      {global && stage === "paying" ? <div className="portone-ui-container" /> : null}
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
    </form>
  );
}
