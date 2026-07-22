// 로그인·계정 페이지 문구 사전. 다른 사전과 동일하게 ko가 원본이며
// 비한국어 로케일은 해당 언어 사전이 없으면 영어로 폴백한다.
export type AuthCopy = {
  back: string;
  home: string;
  loginEyebrow: string;
  loginTitle: string;
  loginDescription: string;
  accountEyebrow: string;
  accountTitle: string;
  accountDescription: string;
  panelEyebrowLogin: string;
  panelEyebrowAccount: string;
  panelTitle: string;
  panelDescription: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitButton: string;
  legalBefore: string;
  legalTerms: string;
  legalBetween: string;
  legalPrivacy: string;
  legalAfter: string;
  sentMessage: string;
  loggedInEyebrow: string;
  loggedInDescription: string;
  logoutButton: string;
  loggedOutMessage: string;
  configWaitTitle: string;
  configWaitDescription: string;
  supabaseMissingError: string;
};

const authCopies: Record<string, AuthCopy> = {
  ko: {
    back: "이전 화면으로",
    home: "홈",
    loginEyebrow: "Naming-Link",
    loginTitle: "로그인",
    loginDescription:
      "작명 결과, 프리미엄 리포트, 굿즈 주문 이력을 안전하게 관리하기 위한 계정입니다.",
    accountEyebrow: "Naming-Link",
    accountTitle: "계정",
    accountDescription:
      "로그인 후 작명 이력, 결제 이력, 프리미엄 리포트, 도장 주문 상태를 이 화면에서 관리할 수 있도록 확장합니다.",
    panelEyebrowLogin: "이메일 로그인",
    panelEyebrowAccount: "계정 접근",
    panelTitle: "링크 한 번으로 안전하게 로그인",
    panelDescription:
      "비밀번호를 저장하지 않고 이메일 인증 링크로 로그인합니다. 이용 전 이용약관과 개인정보처리방침을 확인해 주세요.",
    emailLabel: "이메일",
    emailPlaceholder: "name@example.com",
    submitButton: "로그인 링크 받기",
    legalBefore: "계속 진행하면 ",
    legalTerms: "이용약관",
    legalBetween: "과 ",
    legalPrivacy: "개인정보처리방침",
    legalAfter: "을 확인한 것으로 봅니다.",
    sentMessage: "로그인 링크를 이메일로 보냈습니다. 메일함에서 확인해 주세요.",
    loggedInEyebrow: "로그인됨",
    loggedInDescription:
      "작명 결과와 주문 이력은 이 계정 기준으로 저장됩니다. 결제와 PDF 발급 기능이 연결되면 이 화면에서 다시 내려받을 수 있게 됩니다.",
    logoutButton: "로그아웃",
    loggedOutMessage: "로그아웃되었습니다.",
    configWaitTitle: "로그인 설정 대기 중",
    configWaitDescription:
      "Supabase URL과 Anon Key가 배포 환경에 설정되면 이메일 링크 로그인을 사용할 수 있습니다.",
    supabaseMissingError:
      "Supabase 공개 키가 설정되지 않아 로그인을 사용할 수 없습니다.",
  },
  en: {
    back: "Back",
    home: "Home",
    loginEyebrow: "Naming-Link",
    loginTitle: "Log in",
    loginDescription:
      "Your account keeps naming results, premium reports, and merchandise order history safe.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Account",
    accountDescription:
      "After logging in, this screen will grow to manage your naming history, payments, premium reports, and stamp order status.",
    panelEyebrowLogin: "Email login",
    panelEyebrowAccount: "Account access",
    panelTitle: "Sign in safely with a single link",
    panelDescription:
      "No passwords are stored — you sign in with an email verification link. Please review the Terms of Service and Privacy Policy before use.",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    submitButton: "Send login link",
    legalBefore: "By continuing, you acknowledge the ",
    legalTerms: "Terms of Service",
    legalBetween: " and the ",
    legalPrivacy: "Privacy Policy",
    legalAfter: ".",
    sentMessage: "We sent a login link to your email. Please check your inbox.",
    loggedInEyebrow: "Logged in",
    loggedInDescription:
      "Naming results and order history are stored under this account. Once payment and PDF delivery are connected, you will be able to download them again from this screen.",
    logoutButton: "Log out",
    loggedOutMessage: "You have been logged out.",
    configWaitTitle: "Login setup pending",
    configWaitDescription:
      "Email-link login becomes available once the Supabase URL and anon key are configured in the deployment environment.",
    supabaseMissingError:
      "Login is unavailable because the Supabase public key is not configured.",
  },
  vi: {
    back: "Quay lại",
    home: "Trang chủ",
    loginEyebrow: "Naming-Link",
    loginTitle: "Đăng nhập",
    loginDescription:
      "Tài khoản giúp bạn quản lý an toàn kết quả đặt tên, báo cáo cao cấp và lịch sử đặt hàng sản phẩm.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Tài khoản",
    accountDescription:
      "Sau khi đăng nhập, màn hình này sẽ được mở rộng để quản lý lịch sử đặt tên, thanh toán, báo cáo cao cấp và trạng thái đặt con dấu.",
    panelEyebrowLogin: "Đăng nhập bằng email",
    panelEyebrowAccount: "Truy cập tài khoản",
    panelTitle: "Đăng nhập an toàn chỉ với một liên kết",
    panelDescription:
      "Không lưu mật khẩu — bạn đăng nhập bằng liên kết xác thực gửi qua email. Vui lòng xem Điều khoản dịch vụ và Chính sách quyền riêng tư trước khi sử dụng.",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    submitButton: "Nhận liên kết đăng nhập",
    legalBefore: "Khi tiếp tục, bạn xác nhận đã xem ",
    legalTerms: "Điều khoản dịch vụ",
    legalBetween: " và ",
    legalPrivacy: "Chính sách quyền riêng tư",
    legalAfter: ".",
    sentMessage:
      "Chúng tôi đã gửi liên kết đăng nhập tới email của bạn. Vui lòng kiểm tra hộp thư.",
    loggedInEyebrow: "Đã đăng nhập",
    loggedInDescription:
      "Kết quả đặt tên và lịch sử đặt hàng được lưu theo tài khoản này. Khi tính năng thanh toán và cấp PDF được kết nối, bạn có thể tải lại chúng tại màn hình này.",
    logoutButton: "Đăng xuất",
    loggedOutMessage: "Bạn đã đăng xuất.",
    configWaitTitle: "Đang chờ cấu hình đăng nhập",
    configWaitDescription:
      "Đăng nhập bằng liên kết email sẽ khả dụng khi Supabase URL và anon key được cấu hình trên môi trường triển khai.",
    supabaseMissingError:
      "Không thể đăng nhập vì khóa công khai Supabase chưa được cấu hình.",
  },
  th: {
    back: "ย้อนกลับ",
    home: "หน้าแรก",
    loginEyebrow: "Naming-Link",
    loginTitle: "เข้าสู่ระบบ",
    loginDescription:
      "บัญชีของคุณช่วยเก็บรักษาผลการตั้งชื่อ รายงานพรีเมียม และประวัติการสั่งซื้อสินค้าที่ระลึกอย่างปลอดภัย",
    accountEyebrow: "Naming-Link",
    accountTitle: "บัญชี",
    accountDescription:
      "หลังจากเข้าสู่ระบบ หน้าจอนี้จะขยายให้คุณจัดการประวัติการตั้งชื่อ ประวัติการชำระเงิน รายงานพรีเมียม และสถานะการสั่งทำตราประทับได้",
    panelEyebrowLogin: "เข้าสู่ระบบด้วยอีเมล",
    panelEyebrowAccount: "การเข้าถึงบัญชี",
    panelTitle: "เข้าสู่ระบบอย่างปลอดภัยด้วยลิงก์เดียว",
    panelDescription:
      "เราไม่จัดเก็บรหัสผ่าน — คุณเข้าสู่ระบบด้วยลิงก์ยืนยันที่ส่งทางอีเมล กรุณาอ่านข้อกำหนดการใช้บริการและนโยบายความเป็นส่วนตัวก่อนใช้งาน",
    emailLabel: "อีเมล",
    emailPlaceholder: "name@example.com",
    submitButton: "รับลิงก์เข้าสู่ระบบ",
    legalBefore: "เมื่อดำเนินการต่อ ถือว่าคุณได้อ่าน",
    legalTerms: "ข้อกำหนดการใช้บริการ",
    legalBetween: "และ",
    legalPrivacy: "นโยบายความเป็นส่วนตัว",
    legalAfter: "แล้ว",
    sentMessage:
      "เราได้ส่งลิงก์เข้าสู่ระบบไปยังอีเมลของคุณแล้ว กรุณาตรวจสอบกล่องจดหมาย",
    loggedInEyebrow: "เข้าสู่ระบบแล้ว",
    loggedInDescription:
      "ผลการตั้งชื่อและประวัติการสั่งซื้อจะถูกบันทึกไว้ตามบัญชีนี้ เมื่อฟีเจอร์การชำระเงินและการออกไฟล์ PDF เชื่อมต่อแล้ว คุณจะสามารถดาวน์โหลดได้อีกครั้งจากหน้าจอนี้",
    logoutButton: "ออกจากระบบ",
    loggedOutMessage: "คุณออกจากระบบแล้ว",
    configWaitTitle: "รอการตั้งค่าการเข้าสู่ระบบ",
    configWaitDescription:
      "การเข้าสู่ระบบด้วยลิงก์อีเมลจะใช้งานได้เมื่อมีการตั้งค่า Supabase URL และ anon key ในสภาพแวดล้อมการใช้งานจริง",
    supabaseMissingError:
      "ไม่สามารถเข้าสู่ระบบได้เนื่องจากยังไม่ได้ตั้งค่าคีย์สาธารณะของ Supabase",
  },
  ja: {
    back: "前の画面に戻る",
    home: "ホーム",
    loginEyebrow: "Naming-Link",
    loginTitle: "ログイン",
    loginDescription:
      "ネーミング結果、プレミアムレポート、グッズの注文履歴を安全に管理するためのアカウントです。",
    accountEyebrow: "Naming-Link",
    accountTitle: "アカウント",
    accountDescription:
      "ログイン後、この画面でネーミング履歴、決済履歴、プレミアムレポート、はんこの注文状況を管理できるように拡張していきます。",
    panelEyebrowLogin: "メールログイン",
    panelEyebrowAccount: "アカウントアクセス",
    panelTitle: "リンク1つで安全にログイン",
    panelDescription:
      "パスワードを保存せず、メール認証リンクでログインします。ご利用前に利用規約とプライバシーポリシーをご確認ください。",
    emailLabel: "メールアドレス",
    emailPlaceholder: "name@example.com",
    submitButton: "ログインリンクを受け取る",
    legalBefore: "続行すると、",
    legalTerms: "利用規約",
    legalBetween: "と",
    legalPrivacy: "プライバシーポリシー",
    legalAfter: "を確認したものとみなされます。",
    sentMessage:
      "ログインリンクをメールでお送りしました。受信トレイをご確認ください。",
    loggedInEyebrow: "ログイン済み",
    loggedInDescription:
      "ネーミング結果と注文履歴はこのアカウントを基準に保存されます。決済とPDF発行機能が連携されると、この画面から再ダウンロードできるようになります。",
    logoutButton: "ログアウト",
    loggedOutMessage: "ログアウトしました。",
    configWaitTitle: "ログイン設定の準備中",
    configWaitDescription:
      "Supabase URLとAnon Keyがデプロイ環境に設定されると、メールリンクによるログインを利用できます。",
    supabaseMissingError:
      "Supabaseの公開キーが設定されていないため、ログインを利用できません。",
  },
  zh: {
    back: "返回上一页",
    home: "首页",
    loginEyebrow: "Naming-Link",
    loginTitle: "登录",
    loginDescription:
      "账户用于安全管理您的起名结果、高级报告和周边商品订单记录。",
    accountEyebrow: "Naming-Link",
    accountTitle: "账户",
    accountDescription:
      "登录后，此页面将逐步扩展，可管理您的起名记录、支付记录、高级报告以及印章订单状态。",
    panelEyebrowLogin: "邮箱登录",
    panelEyebrowAccount: "账户访问",
    panelTitle: "一条链接，安全登录",
    panelDescription:
      "我们不保存密码——您通过发送到邮箱的验证链接登录。使用前请查看服务条款和个人信息处理方针。",
    emailLabel: "电子邮箱",
    emailPlaceholder: "name@example.com",
    submitButton: "获取登录链接",
    legalBefore: "继续操作即视为您已确认",
    legalTerms: "服务条款",
    legalBetween: "和",
    legalPrivacy: "个人信息处理方针",
    legalAfter: "。",
    sentMessage: "登录链接已发送到您的邮箱，请查收。",
    loggedInEyebrow: "已登录",
    loggedInDescription:
      "起名结果和订单记录将保存在此账户下。支付与 PDF 发放功能接入后，您可以在此页面重新下载。",
    logoutButton: "退出登录",
    loggedOutMessage: "您已退出登录。",
    configWaitTitle: "等待登录配置",
    configWaitDescription:
      "在部署环境中配置 Supabase URL 和 anon key 后，即可使用邮箱链接登录。",
    supabaseMissingError:
      "由于尚未配置 Supabase 公钥，暂时无法登录。",
  },
  id: {
    back: "Kembali",
    home: "Beranda",
    loginEyebrow: "Naming-Link",
    loginTitle: "Masuk",
    loginDescription:
      "Akun Anda menyimpan hasil penamaan, laporan premium, dan riwayat pesanan merchandise dengan aman.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Akun",
    accountDescription:
      "Setelah masuk, layar ini akan diperluas untuk mengelola riwayat penamaan, pembayaran, laporan premium, dan status pesanan stempel.",
    panelEyebrowLogin: "Masuk dengan email",
    panelEyebrowAccount: "Akses akun",
    panelTitle: "Masuk dengan aman melalui satu tautan",
    panelDescription:
      "Kata sandi tidak disimpan — Anda masuk dengan tautan verifikasi email. Silakan baca Ketentuan Layanan dan Kebijakan Privasi sebelum menggunakan layanan.",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    submitButton: "Kirim tautan masuk",
    legalBefore: "Dengan melanjutkan, Anda dianggap telah membaca ",
    legalTerms: "Ketentuan Layanan",
    legalBetween: " dan ",
    legalPrivacy: "Kebijakan Privasi",
    legalAfter: ".",
    sentMessage:
      "Kami telah mengirim tautan masuk ke email Anda. Silakan periksa kotak masuk Anda.",
    loggedInEyebrow: "Sudah masuk",
    loggedInDescription:
      "Hasil penamaan dan riwayat pesanan disimpan berdasarkan akun ini. Setelah fitur pembayaran dan penerbitan PDF terhubung, Anda dapat mengunduhnya kembali dari layar ini.",
    logoutButton: "Keluar",
    loggedOutMessage: "Anda telah keluar.",
    configWaitTitle: "Menunggu konfigurasi login",
    configWaitDescription:
      "Login melalui tautan email tersedia setelah Supabase URL dan anon key dikonfigurasi di lingkungan deployment.",
    supabaseMissingError:
      "Login tidak tersedia karena kunci publik Supabase belum dikonfigurasi.",
  },
  de: {
    back: "Zurück",
    home: "Startseite",
    loginEyebrow: "Naming-Link",
    loginTitle: "Anmelden",
    loginDescription:
      "Ihr Konto verwahrt Naming-Ergebnisse, Premium-Berichte und die Bestellhistorie von Merchandise-Artikeln sicher.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Konto",
    accountDescription:
      "Nach der Anmeldung wird dieser Bereich erweitert, damit Sie Naming-Verlauf, Zahlungen, Premium-Berichte und den Status von Stempelbestellungen verwalten können.",
    panelEyebrowLogin: "E-Mail-Anmeldung",
    panelEyebrowAccount: "Kontozugang",
    panelTitle: "Mit einem einzigen Link sicher anmelden",
    panelDescription:
      "Es werden keine Passwörter gespeichert — Sie melden sich über einen E-Mail-Bestätigungslink an. Bitte lesen Sie vor der Nutzung die Nutzungsbedingungen und die Datenschutzerklärung.",
    emailLabel: "E-Mail",
    emailPlaceholder: "name@example.com",
    submitButton: "Anmeldelink senden",
    legalBefore: "Wenn Sie fortfahren, gelten die ",
    legalTerms: "Nutzungsbedingungen",
    legalBetween: " und die ",
    legalPrivacy: "Datenschutzerklärung",
    legalAfter: " als zur Kenntnis genommen.",
    sentMessage:
      "Wir haben Ihnen einen Anmeldelink per E-Mail gesendet. Bitte prüfen Sie Ihren Posteingang.",
    loggedInEyebrow: "Angemeldet",
    loggedInDescription:
      "Naming-Ergebnisse und Bestellhistorie werden unter diesem Konto gespeichert. Sobald Zahlung und PDF-Ausstellung verbunden sind, können Sie sie hier erneut herunterladen.",
    logoutButton: "Abmelden",
    loggedOutMessage: "Sie wurden abgemeldet.",
    configWaitTitle: "Anmeldekonfiguration ausstehend",
    configWaitDescription:
      "Die Anmeldung per E-Mail-Link steht zur Verfügung, sobald Supabase URL und Anon Key in der Bereitstellungsumgebung konfiguriert sind.",
    supabaseMissingError:
      "Die Anmeldung ist nicht verfügbar, da der öffentliche Supabase-Schlüssel nicht konfiguriert ist.",
  },
  es: {
    back: "Volver",
    home: "Inicio",
    loginEyebrow: "Naming-Link",
    loginTitle: "Iniciar sesión",
    loginDescription:
      "Tu cuenta guarda de forma segura los resultados de nombres, los informes premium y el historial de pedidos de merchandising.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Cuenta",
    accountDescription:
      "Tras iniciar sesión, esta pantalla se ampliará para gestionar tu historial de nombres, pagos, informes premium y el estado de los pedidos de sellos.",
    panelEyebrowLogin: "Inicio de sesión por correo",
    panelEyebrowAccount: "Acceso a la cuenta",
    panelTitle: "Inicia sesión de forma segura con un solo enlace",
    panelDescription:
      "No guardamos contraseñas: inicias sesión con un enlace de verificación por correo. Revisa los Términos del servicio y la Política de privacidad antes de usar el servicio.",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "name@example.com",
    submitButton: "Enviar enlace de acceso",
    legalBefore: "Al continuar, confirmas que has revisado los ",
    legalTerms: "Términos del servicio",
    legalBetween: " y la ",
    legalPrivacy: "Política de privacidad",
    legalAfter: ".",
    sentMessage:
      "Hemos enviado un enlace de acceso a tu correo. Revisa tu bandeja de entrada.",
    loggedInEyebrow: "Sesión iniciada",
    loggedInDescription:
      "Los resultados de nombres y el historial de pedidos se guardan en esta cuenta. Cuando el pago y la emisión de PDF estén conectados, podrás volver a descargarlos desde esta pantalla.",
    logoutButton: "Cerrar sesión",
    loggedOutMessage: "Has cerrado sesión.",
    configWaitTitle: "Configuración de acceso pendiente",
    configWaitDescription:
      "El inicio de sesión por enlace de correo estará disponible cuando la Supabase URL y la anon key estén configuradas en el entorno de despliegue.",
    supabaseMissingError:
      "No se puede iniciar sesión porque la clave pública de Supabase no está configurada.",
  },
  fr: {
    back: "Retour",
    home: "Accueil",
    loginEyebrow: "Naming-Link",
    loginTitle: "Connexion",
    loginDescription:
      "Votre compte conserve en toute sécurité vos résultats de prénoms, vos rapports premium et votre historique de commandes d'articles dérivés.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Compte",
    accountDescription:
      "Après la connexion, cet écran s'enrichira pour gérer votre historique de prénoms, vos paiements, vos rapports premium et l'état de vos commandes de sceaux.",
    panelEyebrowLogin: "Connexion par e-mail",
    panelEyebrowAccount: "Accès au compte",
    panelTitle: "Connectez-vous en toute sécurité avec un seul lien",
    panelDescription:
      "Aucun mot de passe n'est enregistré : vous vous connectez via un lien de vérification envoyé par e-mail. Veuillez consulter les Conditions d'utilisation et la Politique de confidentialité avant utilisation.",
    emailLabel: "E-mail",
    emailPlaceholder: "name@example.com",
    submitButton: "Recevoir le lien de connexion",
    legalBefore: "En continuant, vous confirmez avoir consulté les ",
    legalTerms: "Conditions d'utilisation",
    legalBetween: " et la ",
    legalPrivacy: "Politique de confidentialité",
    legalAfter: ".",
    sentMessage:
      "Nous avons envoyé un lien de connexion à votre adresse e-mail. Veuillez vérifier votre boîte de réception.",
    loggedInEyebrow: "Connecté",
    loggedInDescription:
      "Les résultats de prénoms et l'historique de commandes sont conservés sous ce compte. Une fois le paiement et l'émission de PDF connectés, vous pourrez les retélécharger depuis cet écran.",
    logoutButton: "Se déconnecter",
    loggedOutMessage: "Vous avez été déconnecté.",
    configWaitTitle: "Configuration de la connexion en attente",
    configWaitDescription:
      "La connexion par lien e-mail sera disponible une fois l'URL Supabase et la clé anon configurées dans l'environnement de déploiement.",
    supabaseMissingError:
      "La connexion est indisponible car la clé publique Supabase n'est pas configurée.",
  },
  it: {
    back: "Indietro",
    home: "Home",
    loginEyebrow: "Naming-Link",
    loginTitle: "Accedi",
    loginDescription:
      "Il tuo account conserva in sicurezza i risultati dei nomi, i report premium e la cronologia degli ordini di merchandising.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Account",
    accountDescription:
      "Dopo l'accesso, questa schermata verrà ampliata per gestire la cronologia dei nomi, i pagamenti, i report premium e lo stato degli ordini di timbri.",
    panelEyebrowLogin: "Accesso via email",
    panelEyebrowAccount: "Accesso all'account",
    panelTitle: "Accedi in sicurezza con un solo link",
    panelDescription:
      "Nessuna password viene salvata: accedi con un link di verifica inviato via email. Prima dell'uso, consulta i Termini di servizio e l'Informativa sulla privacy.",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    submitButton: "Ricevi il link di accesso",
    legalBefore: "Proseguendo, confermi di aver letto i ",
    legalTerms: "Termini di servizio",
    legalBetween: " e l'",
    legalPrivacy: "Informativa sulla privacy",
    legalAfter: ".",
    sentMessage:
      "Ti abbiamo inviato un link di accesso via email. Controlla la tua casella di posta.",
    loggedInEyebrow: "Accesso effettuato",
    loggedInDescription:
      "I risultati dei nomi e la cronologia degli ordini sono salvati con questo account. Quando il pagamento e l'emissione dei PDF saranno collegati, potrai scaricarli di nuovo da questa schermata.",
    logoutButton: "Esci",
    loggedOutMessage: "Sei uscito dall'account.",
    configWaitTitle: "Configurazione dell'accesso in sospeso",
    configWaitDescription:
      "L'accesso tramite link email sarà disponibile quando la Supabase URL e la anon key saranno configurate nell'ambiente di deployment.",
    supabaseMissingError:
      "L'accesso non è disponibile perché la chiave pubblica di Supabase non è configurata.",
  },
  pt: {
    back: "Voltar",
    home: "Início",
    loginEyebrow: "Naming-Link",
    loginTitle: "Entrar",
    loginDescription:
      "Sua conta guarda com segurança os resultados de nomes, os relatórios premium e o histórico de pedidos de produtos personalizados.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Conta",
    accountDescription:
      "Depois de entrar, esta tela será ampliada para gerenciar seu histórico de nomes, pagamentos, relatórios premium e o status dos pedidos de carimbos.",
    panelEyebrowLogin: "Login por e-mail",
    panelEyebrowAccount: "Acesso à conta",
    panelTitle: "Entre com segurança com um único link",
    panelDescription:
      "Não armazenamos senhas: você entra com um link de verificação enviado por e-mail. Leia os Termos de Serviço e a Política de Privacidade antes de usar.",
    emailLabel: "E-mail",
    emailPlaceholder: "name@example.com",
    submitButton: "Receber link de acesso",
    legalBefore: "Ao continuar, você confirma que leu os ",
    legalTerms: "Termos de Serviço",
    legalBetween: " e a ",
    legalPrivacy: "Política de Privacidade",
    legalAfter: ".",
    sentMessage:
      "Enviamos um link de acesso para o seu e-mail. Verifique sua caixa de entrada.",
    loggedInEyebrow: "Conectado",
    loggedInDescription:
      "Os resultados de nomes e o histórico de pedidos são salvos nesta conta. Quando o pagamento e a emissão de PDF estiverem conectados, você poderá baixá-los novamente nesta tela.",
    logoutButton: "Sair",
    loggedOutMessage: "Você saiu da conta.",
    configWaitTitle: "Configuração de login pendente",
    configWaitDescription:
      "O login por link de e-mail ficará disponível quando a Supabase URL e a anon key forem configuradas no ambiente de implantação.",
    supabaseMissingError:
      "O login está indisponível porque a chave pública do Supabase não está configurada.",
  },
  ru: {
    back: "Назад",
    home: "Главная",
    loginEyebrow: "Naming-Link",
    loginTitle: "Вход",
    loginDescription:
      "Учётная запись надёжно хранит результаты подбора имён, премиум-отчёты и историю заказов сувенирной продукции.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Учётная запись",
    accountDescription:
      "После входа этот экран будет расширен для управления историей подбора имён, платежами, премиум-отчётами и статусом заказов печатей.",
    panelEyebrowLogin: "Вход по электронной почте",
    panelEyebrowAccount: "Доступ к учётной записи",
    panelTitle: "Безопасный вход по одной ссылке",
    panelDescription:
      "Пароли не хранятся — вы входите по ссылке подтверждения из письма. Перед использованием ознакомьтесь с Пользовательским соглашением и Политикой конфиденциальности.",
    emailLabel: "Электронная почта",
    emailPlaceholder: "name@example.com",
    submitButton: "Получить ссылку для входа",
    legalBefore: "Продолжая, вы подтверждаете, что ознакомились с ",
    legalTerms: "Пользовательским соглашением",
    legalBetween: " и ",
    legalPrivacy: "Политикой конфиденциальности",
    legalAfter: ".",
    sentMessage:
      "Мы отправили ссылку для входа на вашу электронную почту. Проверьте входящие.",
    loggedInEyebrow: "Вход выполнен",
    loggedInDescription:
      "Результаты подбора имён и история заказов сохраняются в этой учётной записи. Когда будут подключены оплата и выдача PDF, вы сможете снова скачивать их на этом экране.",
    logoutButton: "Выйти",
    loggedOutMessage: "Вы вышли из учётной записи.",
    configWaitTitle: "Ожидается настройка входа",
    configWaitDescription:
      "Вход по ссылке из письма станет доступен после настройки Supabase URL и anon key в среде развёртывания.",
    supabaseMissingError:
      "Вход недоступен, так как публичный ключ Supabase не настроен.",
  },
  ar: {
    back: "رجوع",
    home: "الرئيسية",
    loginEyebrow: "Naming-Link",
    loginTitle: "تسجيل الدخول",
    loginDescription:
      "يحفظ حسابك بأمان نتائج التسمية والتقارير المميزة وسجل طلبات المنتجات التذكارية.",
    accountEyebrow: "Naming-Link",
    accountTitle: "الحساب",
    accountDescription:
      "بعد تسجيل الدخول، ستتوسع هذه الشاشة لإدارة سجل التسمية والمدفوعات والتقارير المميزة وحالة طلبات الأختام.",
    panelEyebrowLogin: "تسجيل الدخول بالبريد الإلكتروني",
    panelEyebrowAccount: "الوصول إلى الحساب",
    panelTitle: "سجّل الدخول بأمان برابط واحد",
    panelDescription:
      "لا نحفظ كلمات المرور — تسجّل الدخول عبر رابط تحقق يُرسل بالبريد الإلكتروني. يرجى الاطلاع على شروط الخدمة وسياسة الخصوصية قبل الاستخدام.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "name@example.com",
    submitButton: "إرسال رابط تسجيل الدخول",
    legalBefore: "بالمتابعة، فإنك تقرّ بالاطلاع على ",
    legalTerms: "شروط الخدمة",
    legalBetween: " و",
    legalPrivacy: "سياسة الخصوصية",
    legalAfter: ".",
    sentMessage:
      "أرسلنا رابط تسجيل الدخول إلى بريدك الإلكتروني. يرجى التحقق من صندوق الوارد.",
    loggedInEyebrow: "تم تسجيل الدخول",
    loggedInDescription:
      "تُحفظ نتائج التسمية وسجل الطلبات ضمن هذا الحساب. عند ربط الدفع وإصدار ملفات PDF، ستتمكن من تنزيلها مجددًا من هذه الشاشة.",
    logoutButton: "تسجيل الخروج",
    loggedOutMessage: "تم تسجيل خروجك.",
    configWaitTitle: "إعداد تسجيل الدخول قيد الانتظار",
    configWaitDescription:
      "يصبح تسجيل الدخول عبر رابط البريد الإلكتروني متاحًا بعد ضبط Supabase URL و anon key في بيئة النشر.",
    supabaseMissingError:
      "تسجيل الدخول غير متاح لأن مفتاح Supabase العام غير مضبوط.",
  },
  tr: {
    back: "Geri",
    home: "Ana sayfa",
    loginEyebrow: "Naming-Link",
    loginTitle: "Giriş yap",
    loginDescription:
      "Hesabınız; isim sonuçlarını, premium raporları ve hediyelik ürün sipariş geçmişini güvenle saklar.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Hesap",
    accountDescription:
      "Giriş yaptıktan sonra bu ekran; isim geçmişinizi, ödemelerinizi, premium raporlarınızı ve mühür siparişlerinizin durumunu yönetecek şekilde genişletilecektir.",
    panelEyebrowLogin: "E-posta ile giriş",
    panelEyebrowAccount: "Hesap erişimi",
    panelTitle: "Tek bir bağlantıyla güvenle giriş yapın",
    panelDescription:
      "Parola saklanmaz — e-posta doğrulama bağlantısıyla giriş yaparsınız. Kullanmadan önce lütfen Kullanım Koşulları'nı ve Gizlilik Politikası'nı inceleyin.",
    emailLabel: "E-posta",
    emailPlaceholder: "name@example.com",
    submitButton: "Giriş bağlantısı gönder",
    legalBefore: "Devam ederek ",
    legalTerms: "Kullanım Koşulları",
    legalBetween: " ve ",
    legalPrivacy: "Gizlilik Politikası",
    legalAfter: " belgelerini incelediğinizi kabul etmiş olursunuz.",
    sentMessage:
      "Giriş bağlantısını e-posta adresinize gönderdik. Lütfen gelen kutunuzu kontrol edin.",
    loggedInEyebrow: "Giriş yapıldı",
    loggedInDescription:
      "İsim sonuçları ve sipariş geçmişi bu hesap altında saklanır. Ödeme ve PDF teslimi bağlandığında bunları bu ekrandan yeniden indirebileceksiniz.",
    logoutButton: "Çıkış yap",
    loggedOutMessage: "Çıkış yaptınız.",
    configWaitTitle: "Giriş yapılandırması bekleniyor",
    configWaitDescription:
      "E-posta bağlantısıyla giriş, Supabase URL ve anon key dağıtım ortamında yapılandırıldığında kullanılabilir olur.",
    supabaseMissingError:
      "Supabase genel anahtarı yapılandırılmadığı için giriş kullanılamıyor.",
  },
  fil: {
    back: "Bumalik",
    home: "Home",
    loginEyebrow: "Naming-Link",
    loginTitle: "Mag-log in",
    loginDescription:
      "Ligtas na iniingatan ng iyong account ang mga resulta ng pagpapangalan, premium na report, at kasaysayan ng order ng merchandise.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Account",
    accountDescription:
      "Pagkatapos mag-log in, palalawakin ang screen na ito para pamahalaan ang iyong kasaysayan ng pagpapangalan, mga pagbabayad, premium na report, at status ng order ng stamp.",
    panelEyebrowLogin: "Pag-log in gamit ang email",
    panelEyebrowAccount: "Access sa account",
    panelTitle: "Ligtas na mag-log in gamit ang isang link",
    panelDescription:
      "Walang password na iniimbak — nagla-log in ka gamit ang email verification link. Pakisuri muna ang Mga Tuntunin ng Serbisyo at Patakaran sa Privacy bago gamitin.",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    submitButton: "Ipadala ang login link",
    legalBefore: "Sa pagpapatuloy, kinukumpirma mong nabasa mo ang ",
    legalTerms: "Mga Tuntunin ng Serbisyo",
    legalBetween: " at ang ",
    legalPrivacy: "Patakaran sa Privacy",
    legalAfter: ".",
    sentMessage:
      "Nagpadala kami ng login link sa iyong email. Pakisuri ang iyong inbox.",
    loggedInEyebrow: "Naka-log in",
    loggedInDescription:
      "Ang mga resulta ng pagpapangalan at kasaysayan ng order ay iniimbak sa ilalim ng account na ito. Kapag naikonekta na ang pagbabayad at pag-isyu ng PDF, maaari mo itong muling i-download mula sa screen na ito.",
    logoutButton: "Mag-log out",
    loggedOutMessage: "Naka-log out ka na.",
    configWaitTitle: "Hinihintay ang setup ng login",
    configWaitDescription:
      "Magagamit ang pag-log in sa pamamagitan ng email link kapag naikonpigura na ang Supabase URL at anon key sa deployment environment.",
    supabaseMissingError:
      "Hindi magagamit ang login dahil hindi pa naikonpigura ang public key ng Supabase.",
  },
  uz: {
    back: "Orqaga",
    home: "Bosh sahifa",
    loginEyebrow: "Naming-Link",
    loginTitle: "Kirish",
    loginDescription:
      "Hisobingiz ism natijalari, premium hisobotlar va esdalik buyumlari buyurtmalari tarixini xavfsiz saqlaydi.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Hisob",
    accountDescription:
      "Tizimga kirgandan so‘ng bu ekran ism tarixi, to‘lovlar, premium hisobotlar va muhr buyurtmalari holatini boshqarish uchun kengaytiriladi.",
    panelEyebrowLogin: "Email orqali kirish",
    panelEyebrowAccount: "Hisobga kirish",
    panelTitle: "Bitta havola bilan xavfsiz kiring",
    panelDescription:
      "Parollar saqlanmaydi — email tasdiqlash havolasi orqali kirasiz. Foydalanishdan oldin Foydalanish shartlari va Maxfiylik siyosati bilan tanishing.",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    submitButton: "Kirish havolasini yuborish",
    legalBefore: "Davom etish orqali siz ",
    legalTerms: "Foydalanish shartlari",
    legalBetween: " va ",
    legalPrivacy: "Maxfiylik siyosati",
    legalAfter: " bilan tanishganingizni tasdiqlaysiz.",
    sentMessage:
      "Kirish havolasini emailingizga yubordik. Pochta qutingizni tekshiring.",
    loggedInEyebrow: "Tizimga kirilgan",
    loggedInDescription:
      "Ism natijalari va buyurtmalar tarixi shu hisob ostida saqlanadi. To‘lov va PDF berish ulangach, ularni shu ekrandan qayta yuklab olishingiz mumkin bo‘ladi.",
    logoutButton: "Chiqish",
    loggedOutMessage: "Tizimdan chiqdingiz.",
    configWaitTitle: "Kirish sozlamalari kutilmoqda",
    configWaitDescription:
      "Email havolasi orqali kirish Supabase URL va anon key joylashtirish muhitida sozlangach ishlaydi.",
    supabaseMissingError:
      "Supabase ochiq kaliti sozlanmagani uchun kirish ishlamaydi.",
  },
  mn: {
    back: "Буцах",
    home: "Нүүр",
    loginEyebrow: "Naming-Link",
    loginTitle: "Нэвтрэх",
    loginDescription:
      "Таны бүртгэл нэрийн үр дүн, премиум тайлан, дурсгалын бүтээгдэхүүний захиалгын түүхийг аюулгүй хадгална.",
    accountEyebrow: "Naming-Link",
    accountTitle: "Бүртгэл",
    accountDescription:
      "Нэвтэрсний дараа энэ дэлгэц нэрийн түүх, төлбөр, премиум тайлан, тамганы захиалгын төлөвийг удирдах боломжтой болж өргөжнө.",
    panelEyebrowLogin: "Имэйлээр нэвтрэх",
    panelEyebrowAccount: "Бүртгэлд хандах",
    panelTitle: "Ганц холбоосоор аюулгүй нэвтрээрэй",
    panelDescription:
      "Нууц үг хадгалдаггүй — имэйлийн баталгаажуулах холбоосоор нэвтэрнэ. Ашиглахаасаа өмнө Үйлчилгээний нөхцөл болон Нууцлалын бодлоготой танилцана уу.",
    emailLabel: "Имэйл",
    emailPlaceholder: "name@example.com",
    submitButton: "Нэвтрэх холбоос авах",
    legalBefore: "Үргэлжлүүлснээр та ",
    legalTerms: "Үйлчилгээний нөхцөл",
    legalBetween: " болон ",
    legalPrivacy: "Нууцлалын бодлого",
    legalAfter: "-той танилцсанд тооцно.",
    sentMessage:
      "Нэвтрэх холбоосыг имэйл рүү тань илгээлээ. Ирсэн мэйлээ шалгана уу.",
    loggedInEyebrow: "Нэвтэрсэн",
    loggedInDescription:
      "Нэрийн үр дүн болон захиалгын түүх энэ бүртгэлээр хадгалагдана. Төлбөр болон PDF олгох функц холбогдсоны дараа тэдгээрийг энэ дэлгэцээс дахин татаж авах боломжтой болно.",
    logoutButton: "Гарах",
    loggedOutMessage: "Та системээс гарлаа.",
    configWaitTitle: "Нэвтрэх тохиргоо хүлээгдэж байна",
    configWaitDescription:
      "Supabase URL болон anon key байршуулах орчинд тохируулагдсаны дараа имэйл холбоосоор нэвтрэх боломжтой болно.",
    supabaseMissingError:
      "Supabase-ийн нийтийн түлхүүр тохируулагдаагүй тул нэвтрэх боломжгүй.",
  },
};

export function getAuthCopy(locale?: string): AuthCopy {
  if (!locale || locale === "ko") return authCopies.ko;
  return authCopies[locale] ?? authCopies.en;
}
