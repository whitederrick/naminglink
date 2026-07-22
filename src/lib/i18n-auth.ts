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
};

export function getAuthCopy(locale?: string): AuthCopy {
  if (!locale || locale === "ko") return authCopies.ko;
  return authCopies[locale] ?? authCopies.en;
}
