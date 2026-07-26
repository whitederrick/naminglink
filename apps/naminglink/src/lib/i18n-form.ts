import type { Locale } from "@/lib/services";

// NamingForm의 사용자 노출 문자열(입력 폼 chrome). 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서만
// 로케일에 따라 사용하고, 한국어 대상 서비스는 항상 ko를 사용해 기존 문구를 그대로 유지한다.
export type FormCopy = {
  errorCheckInput: string;
  errorConsent: string;
  errorLoginToSave: string;
  errorRequestFailed: string;
  errorGeneric: string;
  consentTitle: string;
  consentIntro: string;
  consentIntroSaved: string;
  termsLink: string;
  privacyLink: string;
  agreeToTermsSuffix: string;
  agreeToPrivacySuffix: string;
  saveResultLabel: string;
  saveResultHint: string;
  guestNoSavePrefix: string;
  loginLink: string;
  guestNoSaveSuffix: string;
  adConsentLabel: string;
  submitTransliteration: string;
  submitDefault: string;
  adRevealNote: (seconds: number) => string;
  analysisDone: string;
  editInput: string;
  previewNote: string;
  adDialogLabel: string;
  loadingEyebrow: string;
  loadingTitle: string;
  loadingCountdown: (seconds: number) => string;
  loadingDone: string;
  countryHint: (params: {
    languageName: string;
    localNameHint: string;
    motivationNote?: string | null;
  }) => string;
  transliterationStepsTitle: string;
  transliterationSteps: Array<[string, string]>;
};

const ko: FormCopy = {
  errorCheckInput: "정확한 분석을 위해 입력 형식을 확인해 주세요.",
  errorConsent: "이용약관과 개인정보처리방침에 동의해야 분석을 시작할 수 있습니다.",
  errorLoginToSave: "분석 결과를 저장하려면 다시 로그인해 주세요.",
  errorRequestFailed: "작명 요청을 처리하지 못했습니다.",
  errorGeneric: "오류가 발생했습니다.",
  consentTitle: "필수 동의",
  consentIntro: "이름, 생년월일, 국가 등의 입력 내용은 분석 결과 생성에 사용되며,",
  consentIntroSaved: " 저장을 선택한 회원의 입력 내용과 결과만 저장됩니다.",
  termsLink: "이용약관",
  privacyLink: "개인정보처리방침",
  agreeToTermsSuffix: "에 동의합니다.",
  agreeToPrivacySuffix: "에 동의합니다.",
  saveResultLabel: "분석 결과를 내 계정에 저장(선택)",
  saveResultHint: "선택한 경우에만 입력 내용과 분석 결과를 저장합니다.",
  guestNoSavePrefix: "비회원 분석 결과는 저장하지 않습니다. 결과 보관이 필요하면 ",
  loginLink: "로그인",
  guestNoSaveSuffix: "한 뒤 저장을 선택해 주세요.",
  adConsentLabel: "필수 동의 영역 광고",
  submitTransliteration: "한글 발음 분석 시작",
  submitDefault: "광고 확인 후 분석 시작",
  adRevealNote: (seconds) => `광고 확인 후 결과를 공개합니다. ${seconds}초`,
  analysisDone: "분석 완료",
  editInput: "입력 수정",
  previewNote:
    "가장 적합한 후보 1개를 먼저 공개했습니다. 추가 후보는 광고 확인 또는 향후 결제로 한 개씩 열 수 있습니다.",
  adDialogLabel: "보상 광고 확인 및 이름 분석 진행",
  loadingEyebrow: "이름 분석 중",
  loadingTitle: "사용 환경에 어울리는 이름을 비교하고 있습니다",
  loadingCountdown: (seconds) => `광고 확인 및 분석 진행 중 · ${seconds}초`,
  loadingDone: "광고 확인 완료 · 분석 결과를 준비하고 있습니다",
  countryHint: ({ languageName, localNameHint, motivationNote }) =>
    `기본 언어: ${languageName} · 현지 이름 예시: ${localNameHint}${
      motivationNote ? ` · 추천 옵션: ${motivationNote}` : ""
    }`,
  transliterationStepsTitle: "본인 이름이 한글로 바뀌는 단계",
  transliterationSteps: [
    ["본명 확인", "입력한 원래 철자와 음절을 확인합니다."],
    ["언어·지역 발음 분석", "표기 언어를 우선하고, 국가별 발음 차이를 반영합니다."],
    ["발음 힌트 우선 반영", "입력된 발음 힌트는 일반적인 발음 규칙보다 우선합니다."],
    ["발음 구조화", "실제 발음을 음절과 발음 기호로 분석합니다."],
    ["한글 표기 제안", "원래 발음을 유지하며, 자연스러운 한글로 제안합니다."],
  ],
};

const en: FormCopy = {
  errorCheckInput: "Please check the input format for an accurate analysis.",
  errorConsent: "You must agree to the Terms of Service and Privacy Policy to start.",
  errorLoginToSave: "Please sign in again to save your analysis result.",
  errorRequestFailed: "We couldn't process your naming request.",
  errorGeneric: "Something went wrong.",
  consentTitle: "Required consent",
  consentIntro:
    "Your inputs such as name, birth date, and country are used to generate the result,",
  consentIntroSaved: " and only members who opt in have their inputs and results stored.",
  termsLink: "Terms of Service",
  privacyLink: "Privacy Policy",
  agreeToTermsSuffix: ".",
  agreeToPrivacySuffix: ".",
  saveResultLabel: "Save the result to my account (optional)",
  saveResultHint: "We store your inputs and results only when you opt in.",
  guestNoSavePrefix: "Guest results are not stored. If you want to keep your result, ",
  loginLink: "sign in",
  guestNoSaveSuffix: " and then choose to save.",
  adConsentLabel: "Required consent area ad",
  submitTransliteration: "Start Hangul pronunciation analysis",
  submitDefault: "Watch ad and start analysis",
  adRevealNote: (seconds) => `Your result will be revealed after the ad. ${seconds}s`,
  analysisDone: "Analysis complete",
  editInput: "Edit input",
  previewNote:
    "We revealed the single best candidate first. You can open more candidates one at a time by watching an ad or via payment.",
  adDialogLabel: "Watch reward ad and run name analysis",
  loadingEyebrow: "Analyzing your name",
  loadingTitle: "Comparing names that fit your context",
  loadingCountdown: (seconds) => `Watching ad and analyzing · ${seconds}s`,
  loadingDone: "Ad complete · preparing your result",
  // motivationNote는 한국어 원문이라 외국어 화면에서는 표시하지 않는다.
  countryHint: ({ languageName, localNameHint }) =>
    `Default language: ${languageName} · Local name example: ${localNameHint}`,
  transliterationStepsTitle: "How your name becomes Hangul",
  transliterationSteps: [
    ["Confirm your name", "We confirm the original spelling and syllables you entered."],
    ["Analyze language & region", "Your source language comes first, with country-level pronunciation differences applied."],
    ["Apply your pronunciation hint", "Any hint you entered overrides general pronunciation rules."],
    ["Structure the pronunciation", "We break the actual pronunciation into syllables and phonetic notation."],
    ["Suggest Hangul spellings", "We keep your original pronunciation and suggest natural Hangul."],
  ],
};

const vi: FormCopy = {
  errorCheckInput: "Vui lòng kiểm tra định dạng thông tin để phân tích chính xác.",
  errorConsent: "Bạn cần đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư để bắt đầu.",
  errorLoginToSave: "Vui lòng đăng nhập lại để lưu kết quả phân tích.",
  errorRequestFailed: "Không thể xử lý yêu cầu đặt tên của bạn.",
  errorGeneric: "Đã xảy ra lỗi.",
  consentTitle: "Đồng ý bắt buộc",
  consentIntro:
    "Thông tin bạn nhập như tên, ngày sinh và quốc gia được dùng để tạo kết quả,",
  consentIntroSaved: " và chỉ thành viên chọn lưu mới được lưu thông tin cùng kết quả.",
  termsLink: "Điều khoản dịch vụ",
  privacyLink: "Chính sách quyền riêng tư",
  agreeToTermsSuffix: ".",
  agreeToPrivacySuffix: ".",
  saveResultLabel: "Lưu kết quả vào tài khoản của tôi (tùy chọn)",
  saveResultHint: "Chúng tôi chỉ lưu thông tin và kết quả khi bạn chọn lưu.",
  guestNoSavePrefix: "Kết quả của khách không được lưu. Nếu muốn giữ kết quả, hãy ",
  loginLink: "đăng nhập",
  guestNoSaveSuffix: " rồi chọn lưu.",
  adConsentLabel: "Quảng cáo khu vực đồng ý bắt buộc",
  submitTransliteration: "Bắt đầu phân tích phát âm Hangul",
  submitDefault: "Xem quảng cáo và bắt đầu phân tích",
  adRevealNote: (seconds) => `Kết quả sẽ hiển thị sau quảng cáo. ${seconds} giây`,
  analysisDone: "Phân tích hoàn tất",
  editInput: "Chỉnh sửa thông tin",
  previewNote:
    "Chúng tôi đã mở ứng viên phù hợp nhất trước. Bạn có thể mở thêm từng ứng viên bằng cách xem quảng cáo hoặc thanh toán.",
  adDialogLabel: "Xem quảng cáo và chạy phân tích tên",
  loadingEyebrow: "Đang phân tích tên của bạn",
  loadingTitle: "Đang so sánh những cái tên phù hợp với hoàn cảnh của bạn",
  loadingCountdown: (seconds) => `Đang xem quảng cáo và phân tích · ${seconds} giây`,
  loadingDone: "Đã xem xong quảng cáo · đang chuẩn bị kết quả",
  countryHint: ({ languageName, localNameHint }) =>
    `Ngôn ngữ mặc định: ${languageName} · Ví dụ tên bản địa: ${localNameHint}`,
  transliterationStepsTitle: "Các bước tên bạn trở thành Hangul",
  transliterationSteps: [
    ["Xác nhận tên gốc", "Chúng tôi xác nhận đúng chính tả và âm tiết bạn đã nhập."],
    ["Phân tích phát âm theo ngôn ngữ và khu vực", "Ưu tiên ngôn ngữ gốc, đồng thời phản ánh khác biệt phát âm theo quốc gia."],
    ["Ưu tiên gợi ý phát âm", "Gợi ý phát âm bạn nhập được ưu tiên hơn quy tắc chung."],
    ["Cấu trúc hoá phát âm", "Phân tích phát âm thực tế thành âm tiết và ký hiệu ngữ âm."],
    ["Đề xuất cách viết Hangul", "Giữ nguyên phát âm gốc và đề xuất cách viết Hangul tự nhiên."],
  ],
};

const th: FormCopy = {
  errorCheckInput: "กรุณาตรวจสอบรูปแบบข้อมูลที่กรอกเพื่อการวิเคราะห์ที่แม่นยำ",
  errorConsent:
    "คุณต้องยอมรับข้อกำหนดการใช้บริการและนโยบายความเป็นส่วนตัวก่อนเริ่มการวิเคราะห์",
  errorLoginToSave: "กรุณาเข้าสู่ระบบอีกครั้งเพื่อบันทึกผลการวิเคราะห์",
  errorRequestFailed: "ไม่สามารถดำเนินการคำขอตั้งชื่อของคุณได้",
  errorGeneric: "เกิดข้อผิดพลาด",
  consentTitle: "ความยินยอมที่จำเป็น",
  consentIntro:
    "ข้อมูลที่คุณกรอก เช่น ชื่อ วันเกิด และประเทศ จะถูกใช้เพื่อสร้างผลการวิเคราะห์",
  consentIntroSaved: " และจะบันทึกข้อมูลกับผลลัพธ์เฉพาะของสมาชิกที่เลือกบันทึกเท่านั้น",
  termsLink: "ข้อกำหนดการใช้บริการ",
  privacyLink: "นโยบายความเป็นส่วนตัว",
  agreeToTermsSuffix: " — ฉันยอมรับ",
  agreeToPrivacySuffix: " — ฉันยอมรับ",
  saveResultLabel: "บันทึกผลการวิเคราะห์ไว้ในบัญชีของฉัน (ไม่บังคับ)",
  saveResultHint: "เราจะบันทึกข้อมูลที่กรอกและผลลัพธ์เฉพาะเมื่อคุณเลือกบันทึกเท่านั้น",
  guestNoSavePrefix:
    "ผลลัพธ์ของผู้ที่ไม่ได้เป็นสมาชิกจะไม่ถูกบันทึก หากต้องการเก็บผลลัพธ์ กรุณา",
  loginLink: "เข้าสู่ระบบ",
  guestNoSaveSuffix: " แล้วเลือกบันทึก",
  adConsentLabel: "โฆษณาบริเวณความยินยอมที่จำเป็น",
  submitTransliteration: "เริ่มวิเคราะห์การออกเสียงเป็นฮันกึล",
  submitDefault: "ชมโฆษณาแล้วเริ่มการวิเคราะห์",
  adRevealNote: (seconds) => `ผลลัพธ์จะแสดงหลังชมโฆษณา ${seconds} วินาที`,
  analysisDone: "การวิเคราะห์เสร็จสมบูรณ์",
  editInput: "แก้ไขข้อมูล",
  previewNote:
    "เราเปิดเผยชื่อที่แนะนำที่เหมาะสมที่สุด 1 รายการก่อน คุณสามารถเปิดชื่อที่แนะนำเพิ่มเติมได้ทีละรายการโดยการชมโฆษณาหรือการชำระเงิน",
  adDialogLabel: "ชมโฆษณารับรางวัลและดำเนินการวิเคราะห์ชื่อ",
  loadingEyebrow: "กำลังวิเคราะห์ชื่อของคุณ",
  loadingTitle: "กำลังเปรียบเทียบชื่อที่เหมาะกับบริบทการใช้งานของคุณ",
  loadingCountdown: (seconds) => `กำลังชมโฆษณาและวิเคราะห์ · ${seconds} วินาที`,
  loadingDone: "ชมโฆษณาเสร็จแล้ว · กำลังเตรียมผลลัพธ์ของคุณ",
  countryHint: ({ languageName, localNameHint }) =>
    `ภาษาเริ่มต้น: ${languageName} · ตัวอย่างชื่อท้องถิ่น: ${localNameHint}`,
  transliterationStepsTitle: "ขั้นตอนที่ชื่อของคุณกลายเป็นฮันกึล",
  transliterationSteps: [
    ["ยืนยันชื่อจริง", "เรายืนยันตัวสะกดและพยางค์ดั้งเดิมที่คุณกรอก"],
    ["วิเคราะห์การออกเสียงตามภาษาและภูมิภาค", "ให้ความสำคัญกับภาษาต้นทางก่อน และสะท้อนความต่างของการออกเสียงในแต่ละประเทศ"],
    ["ใช้คำใบ้การออกเสียงเป็นอันดับแรก", "คำใบ้การออกเสียงที่คุณกรอกจะมาก่อนกฎการออกเสียงทั่วไป"],
    ["จัดโครงสร้างการออกเสียง", "วิเคราะห์การออกเสียงจริงออกเป็นพยางค์และสัทอักษร"],
    ["เสนอการเขียนเป็นฮันกึล", "คงการออกเสียงดั้งเดิมไว้และเสนอการเขียนฮันกึลที่เป็นธรรมชาติ"],
  ],
};

const ja: FormCopy = {
  errorCheckInput: "正確な分析のため、入力形式をご確認ください。",
  errorConsent: "利用規約とプライバシーポリシーに同意すると分析を開始できます。",
  errorLoginToSave: "分析結果を保存するには、もう一度ログインしてください。",
  errorRequestFailed: "ネーミングのリクエストを処理できませんでした。",
  errorGeneric: "エラーが発生しました。",
  consentTitle: "必須の同意",
  consentIntro:
    "お名前、生年月日、国などの入力内容は分析結果の生成に使用され、",
  consentIntroSaved: "保存を選択した会員の入力内容と結果のみが保存されます。",
  termsLink: "利用規約",
  privacyLink: "プライバシーポリシー",
  agreeToTermsSuffix: "に同意します。",
  agreeToPrivacySuffix: "に同意します。",
  saveResultLabel: "分析結果を自分のアカウントに保存（任意）",
  saveResultHint: "選択した場合にのみ、入力内容と分析結果を保存します。",
  guestNoSavePrefix: "非会員の分析結果は保存されません。結果を保管したい場合は、",
  loginLink: "ログイン",
  guestNoSaveSuffix: "してから保存を選択してください。",
  adConsentLabel: "必須同意エリアの広告",
  submitTransliteration: "ハングル発音分析を開始",
  submitDefault: "広告の確認後に分析を開始",
  adRevealNote: (seconds) => `広告の確認後に結果を公開します。${seconds}秒`,
  analysisDone: "分析完了",
  editInput: "入力を修正",
  previewNote:
    "最も適した候補1件を先に公開しました。追加の候補は、広告の視聴または今後の決済で1件ずつ開くことができます。",
  adDialogLabel: "リワード広告を確認して名前分析を実行",
  loadingEyebrow: "名前を分析中",
  loadingTitle: "ご利用の環境に合う名前を比較しています",
  loadingCountdown: (seconds) => `広告の確認と分析を進行中 · ${seconds}秒`,
  loadingDone: "広告の確認完了 · 分析結果を準備しています",
  countryHint: ({ languageName, localNameHint }) =>
    `基本言語: ${languageName} · 現地の名前の例: ${localNameHint}`,
  transliterationStepsTitle: "お名前がハングルになるまでのステップ",
  transliterationSteps: [
    ["本名の確認", "入力された元のつづりと音節を確認します。"],
    ["言語・地域の発音分析", "表記言語を優先し、国ごとの発音の違いを反映します。"],
    ["発音ヒントを最優先で反映", "入力された発音ヒントは、一般的な発音規則より優先されます。"],
    ["発音の構造化", "実際の発音を音節と発音記号に分析します。"],
    ["ハングル表記の提案", "元の発音を保ちながら、自然なハングルでご提案します。"],
  ],
};

const zh: FormCopy = {
  errorCheckInput: "为确保分析准确，请检查输入格式。",
  errorConsent: "您需要同意服务条款和个人信息处理方针后才能开始分析。",
  errorLoginToSave: "如需保存分析结果，请重新登录。",
  errorRequestFailed: "无法处理您的起名请求。",
  errorGeneric: "发生了错误。",
  consentTitle: "必要同意事项",
  consentIntro:
    "您输入的姓名、出生日期、国家等信息将用于生成分析结果，",
  consentIntroSaved: "并且只有选择保存的会员的输入内容和结果才会被保存。",
  termsLink: "服务条款",
  privacyLink: "个人信息处理方针",
  agreeToTermsSuffix: "——我同意。",
  agreeToPrivacySuffix: "——我同意。",
  saveResultLabel: "将分析结果保存到我的账户（可选）",
  saveResultHint: "只有在您选择保存时，我们才会保存输入内容和分析结果。",
  guestNoSavePrefix: "非会员的分析结果不会被保存。如需保留结果，请先",
  loginLink: "登录",
  guestNoSaveSuffix: "，然后选择保存。",
  adConsentLabel: "必要同意区域广告",
  submitTransliteration: "开始韩文发音分析",
  submitDefault: "观看广告后开始分析",
  adRevealNote: (seconds) => `观看广告后即可查看结果。${seconds} 秒`,
  analysisDone: "分析完成",
  editInput: "修改输入",
  previewNote:
    "我们已先公开最合适的 1 个候选名字。您可以通过观看广告或今后的付费方式逐个解锁更多候选名字。",
  adDialogLabel: "观看奖励广告并进行名字分析",
  loadingEyebrow: "正在分析名字",
  loadingTitle: "正在比较适合您使用场景的名字",
  loadingCountdown: (seconds) => `正在观看广告并进行分析 · ${seconds} 秒`,
  loadingDone: "广告观看完成 · 正在准备分析结果",
  countryHint: ({ languageName, localNameHint }) =>
    `默认语言：${languageName} · 当地名字示例：${localNameHint}`,
  transliterationStepsTitle: "您的名字变成韩文的步骤",
  transliterationSteps: [
    ["确认原名", "确认您输入的原始拼写和音节。"],
    ["按语言与地区分析发音", "优先考虑源语言，并反映各国的发音差异。"],
    ["优先采用发音提示", "您输入的发音提示优先于一般发音规则。"],
    ["构建发音结构", "将实际发音解析为音节和音标。"],
    ["建议韩文写法", "保留原有发音，并给出自然的韩文写法。"],
  ],
};

const id: FormCopy = {
  errorCheckInput: "Periksa format input agar analisis akurat.",
  errorConsent:
    "Anda harus menyetujui Ketentuan Layanan dan Kebijakan Privasi untuk memulai analisis.",
  errorLoginToSave: "Silakan masuk kembali untuk menyimpan hasil analisis Anda.",
  errorRequestFailed: "Kami tidak dapat memproses permintaan penamaan Anda.",
  errorGeneric: "Terjadi kesalahan.",
  consentTitle: "Persetujuan wajib",
  consentIntro:
    "Data yang Anda masukkan seperti nama, tanggal lahir, dan negara digunakan untuk membuat hasil analisis,",
  consentIntroSaved:
    " dan hanya data serta hasil dari anggota yang memilih menyimpan yang akan disimpan.",
  termsLink: "Ketentuan Layanan",
  privacyLink: "Kebijakan Privasi",
  agreeToTermsSuffix: " — saya setuju.",
  agreeToPrivacySuffix: " — saya setuju.",
  saveResultLabel: "Simpan hasil analisis ke akun saya (opsional)",
  saveResultHint:
    "Kami hanya menyimpan data input dan hasil analisis jika Anda memilih menyimpan.",
  guestNoSavePrefix:
    "Hasil analisis tamu tidak disimpan. Jika ingin menyimpan hasil, silakan ",
  loginLink: "masuk",
  guestNoSaveSuffix: " lalu pilih simpan.",
  adConsentLabel: "Iklan area persetujuan wajib",
  submitTransliteration: "Mulai analisis pelafalan Hangul",
  submitDefault: "Tonton iklan lalu mulai analisis",
  adRevealNote: (seconds) => `Hasil akan ditampilkan setelah iklan. ${seconds} detik`,
  analysisDone: "Analisis selesai",
  editInput: "Ubah input",
  previewNote:
    "Kami menampilkan satu kandidat terbaik terlebih dahulu. Anda dapat membuka kandidat lainnya satu per satu dengan menonton iklan atau melalui pembayaran.",
  adDialogLabel: "Tonton iklan berhadiah dan jalankan analisis nama",
  loadingEyebrow: "Menganalisis nama Anda",
  loadingTitle: "Membandingkan nama yang sesuai dengan konteks Anda",
  loadingCountdown: (seconds) => `Menonton iklan dan menganalisis · ${seconds} detik`,
  loadingDone: "Iklan selesai · menyiapkan hasil Anda",
  countryHint: ({ languageName, localNameHint }) =>
    `Bahasa default: ${languageName} · Contoh nama lokal: ${localNameHint}`,
  transliterationStepsTitle: "Bagaimana nama Anda menjadi Hangul",
  transliterationSteps: [
    ["Konfirmasi nama asli", "Kami mengonfirmasi ejaan dan suku kata asli yang Anda masukkan."],
    ["Analisis bahasa & wilayah", "Bahasa sumber diutamakan, dengan mempertimbangkan perbedaan pelafalan tiap negara."],
    ["Terapkan petunjuk pelafalan", "Petunjuk pelafalan yang Anda masukkan diutamakan di atas aturan pelafalan umum."],
    ["Strukturkan pelafalan", "Kami memecah pelafalan sebenarnya menjadi suku kata dan simbol fonetik."],
    ["Usulkan penulisan Hangul", "Kami mempertahankan pelafalan asli dan mengusulkan Hangul yang alami."],
  ],
};

const de: FormCopy = {
  errorCheckInput: "Bitte überprüfen Sie das Eingabeformat für eine genaue Analyse.",
  errorConsent:
    "Sie müssen den Nutzungsbedingungen und der Datenschutzerklärung zustimmen, um die Analyse zu starten.",
  errorLoginToSave: "Bitte melden Sie sich erneut an, um Ihr Analyseergebnis zu speichern.",
  errorRequestFailed: "Ihre Naming-Anfrage konnte nicht verarbeitet werden.",
  errorGeneric: "Ein Fehler ist aufgetreten.",
  consentTitle: "Erforderliche Zustimmung",
  consentIntro:
    "Ihre Eingaben wie Name, Geburtsdatum und Land werden zur Erstellung des Ergebnisses verwendet,",
  consentIntroSaved:
    " und nur bei Mitgliedern, die das Speichern wählen, werden Eingaben und Ergebnisse gespeichert.",
  termsLink: "Nutzungsbedingungen",
  privacyLink: "Datenschutzerklärung",
  agreeToTermsSuffix: " – ich stimme zu.",
  agreeToPrivacySuffix: " – ich stimme zu.",
  saveResultLabel: "Ergebnis in meinem Konto speichern (optional)",
  saveResultHint:
    "Wir speichern Ihre Eingaben und Ergebnisse nur, wenn Sie das Speichern wählen.",
  guestNoSavePrefix:
    "Ergebnisse von Gästen werden nicht gespeichert. Wenn Sie Ihr Ergebnis behalten möchten, ",
  loginLink: "melden Sie sich an",
  guestNoSaveSuffix: " und wählen Sie dann das Speichern.",
  adConsentLabel: "Werbung im Bereich der erforderlichen Zustimmung",
  submitTransliteration: "Hangul-Ausspracheanalyse starten",
  submitDefault: "Werbung ansehen und Analyse starten",
  adRevealNote: (seconds) => `Ihr Ergebnis wird nach der Werbung angezeigt. ${seconds} Sek.`,
  analysisDone: "Analyse abgeschlossen",
  editInput: "Eingabe bearbeiten",
  previewNote:
    "Wir haben zuerst den am besten passenden Kandidaten veröffentlicht. Weitere Kandidaten können Sie einzeln freischalten, indem Sie Werbung ansehen oder künftig per Zahlung.",
  adDialogLabel: "Prämienwerbung ansehen und Namensanalyse durchführen",
  loadingEyebrow: "Ihr Name wird analysiert",
  loadingTitle: "Wir vergleichen Namen, die zu Ihrem Kontext passen",
  loadingCountdown: (seconds) => `Werbung läuft und Analyse wird durchgeführt · ${seconds} Sek.`,
  loadingDone: "Werbung abgeschlossen · Ihr Ergebnis wird vorbereitet",
  countryHint: ({ languageName, localNameHint }) =>
    `Standardsprache: ${languageName} · Beispiel für einen lokalen Namen: ${localNameHint}`,
  transliterationStepsTitle: "So wird Ihr Name zu Hangul",
  transliterationSteps: [
    ["Namen bestätigen", "Wir bestätigen die ursprüngliche Schreibweise und die Silben, die Sie eingegeben haben."],
    ["Sprache & Region analysieren", "Ihre Ausgangssprache hat Vorrang, Ausspracheunterschiede je Land werden berücksichtigt."],
    ["Aussprachehinweis anwenden", "Ein von Ihnen eingegebener Hinweis hat Vorrang vor allgemeinen Ausspracheregeln."],
    ["Aussprache strukturieren", "Wir zerlegen die tatsächliche Aussprache in Silben und Lautschrift."],
    ["Hangul-Schreibweisen vorschlagen", "Wir bewahren Ihre ursprüngliche Aussprache und schlagen natürliches Hangul vor."],
  ],
};

const es: FormCopy = {
  errorCheckInput: "Revisa el formato de los datos para un análisis preciso.",
  errorConsent:
    "Debes aceptar los Términos del servicio y la Política de privacidad para comenzar.",
  errorLoginToSave: "Inicia sesión de nuevo para guardar tu resultado de análisis.",
  errorRequestFailed: "No pudimos procesar tu solicitud de nombre.",
  errorGeneric: "Se ha producido un error.",
  consentTitle: "Consentimiento obligatorio",
  consentIntro:
    "Los datos que introduces, como nombre, fecha de nacimiento y país, se usan para generar el resultado,",
  consentIntroSaved:
    " y solo se guardan los datos y resultados de los miembros que eligen guardarlos.",
  termsLink: "Términos del servicio",
  privacyLink: "Política de privacidad",
  agreeToTermsSuffix: " — acepto.",
  agreeToPrivacySuffix: " — acepto.",
  saveResultLabel: "Guardar el resultado en mi cuenta (opcional)",
  saveResultHint: "Solo guardamos tus datos y resultados si eliges guardarlos.",
  guestNoSavePrefix:
    "Los resultados de invitados no se guardan. Si quieres conservar tu resultado, ",
  loginLink: "inicia sesión",
  guestNoSaveSuffix: " y luego elige guardar.",
  adConsentLabel: "Anuncio del área de consentimiento obligatorio",
  submitTransliteration: "Iniciar el análisis de pronunciación en hangul",
  submitDefault: "Ver el anuncio y comenzar el análisis",
  adRevealNote: (seconds) => `El resultado se mostrará después del anuncio. ${seconds} s`,
  analysisDone: "Análisis completado",
  editInput: "Editar datos",
  previewNote:
    "Mostramos primero el mejor candidato. Puedes desbloquear más candidatos uno a uno viendo un anuncio o mediante pago.",
  adDialogLabel: "Ver anuncio con recompensa y ejecutar el análisis del nombre",
  loadingEyebrow: "Analizando tu nombre",
  loadingTitle: "Comparando nombres que encajan con tu contexto",
  loadingCountdown: (seconds) => `Viendo el anuncio y analizando · ${seconds} s`,
  loadingDone: "Anuncio completado · preparando tu resultado",
  countryHint: ({ languageName, localNameHint }) =>
    `Idioma predeterminado: ${languageName} · Ejemplo de nombre local: ${localNameHint}`,
  transliterationStepsTitle: "Cómo tu nombre se convierte en hangul",
  transliterationSteps: [
    ["Confirmar tu nombre", "Confirmamos la ortografía y las sílabas originales que introdujiste."],
    ["Analizar idioma y región", "Priorizamos tu idioma de origen y aplicamos las diferencias de pronunciación por país."],
    ["Aplicar tu pista de pronunciación", "Cualquier pista que introduzcas prevalece sobre las reglas generales de pronunciación."],
    ["Estructurar la pronunciación", "Descomponemos la pronunciación real en sílabas y notación fonética."],
    ["Sugerir escrituras en hangul", "Mantenemos tu pronunciación original y sugerimos un hangul natural."],
  ],
};

const fr: FormCopy = {
  errorCheckInput: "Veuillez vérifier le format des informations saisies pour une analyse précise.",
  errorConsent:
    "Vous devez accepter les Conditions d'utilisation et la Politique de confidentialité pour commencer.",
  errorLoginToSave: "Veuillez vous reconnecter pour enregistrer votre résultat d'analyse.",
  errorRequestFailed: "Nous n'avons pas pu traiter votre demande de prénom.",
  errorGeneric: "Une erreur s'est produite.",
  consentTitle: "Consentement obligatoire",
  consentIntro:
    "Les informations saisies, telles que le prénom, la date de naissance et le pays, servent à générer le résultat,",
  consentIntroSaved:
    " et seuls les membres ayant choisi l'enregistrement voient leurs saisies et résultats conservés.",
  termsLink: "Conditions d'utilisation",
  privacyLink: "Politique de confidentialité",
  agreeToTermsSuffix: " — j'accepte.",
  agreeToPrivacySuffix: " — j'accepte.",
  saveResultLabel: "Enregistrer le résultat dans mon compte (facultatif)",
  saveResultHint:
    "Nous ne conservons vos saisies et résultats que si vous choisissez de les enregistrer.",
  guestNoSavePrefix:
    "Les résultats des visiteurs ne sont pas conservés. Pour garder votre résultat, ",
  loginLink: "connectez-vous",
  guestNoSaveSuffix: " puis choisissez l'enregistrement.",
  adConsentLabel: "Publicité de la zone de consentement obligatoire",
  submitTransliteration: "Lancer l'analyse de la prononciation en hangeul",
  submitDefault: "Regarder la publicité et lancer l'analyse",
  adRevealNote: (seconds) => `Le résultat sera dévoilé après la publicité. ${seconds} s`,
  analysisDone: "Analyse terminée",
  editInput: "Modifier la saisie",
  previewNote:
    "Nous avons d'abord dévoilé le meilleur candidat. Vous pouvez débloquer d'autres candidats un par un en regardant une publicité ou via un paiement.",
  adDialogLabel: "Regarder la publicité récompensée et lancer l'analyse du prénom",
  loadingEyebrow: "Analyse de votre prénom en cours",
  loadingTitle: "Nous comparons les prénoms adaptés à votre contexte",
  loadingCountdown: (seconds) => `Publicité en cours et analyse · ${seconds} s`,
  loadingDone: "Publicité terminée · préparation de votre résultat",
  countryHint: ({ languageName, localNameHint }) =>
    `Langue par défaut : ${languageName} · Exemple de prénom local : ${localNameHint}`,
  transliterationStepsTitle: "Comment votre prénom devient du hangeul",
  transliterationSteps: [
    ["Confirmer votre prénom", "Nous confirmons l'orthographe et les syllabes d'origine que vous avez saisies."],
    ["Analyser la langue et la région", "Votre langue d'origine est prioritaire, avec les différences de prononciation propres à chaque pays."],
    ["Appliquer votre indication de prononciation", "Toute indication que vous saisissez prévaut sur les règles générales de prononciation."],
    ["Structurer la prononciation", "Nous décomposons la prononciation réelle en syllabes et en notation phonétique."],
    ["Proposer des graphies en hangeul", "Nous conservons votre prononciation d'origine et proposons un hangeul naturel."],
  ],
};

const it: FormCopy = {
  errorCheckInput: "Controlla il formato dei dati inseriti per un'analisi accurata.",
  errorConsent:
    "Devi accettare i Termini di servizio e l'Informativa sulla privacy per iniziare.",
  errorLoginToSave: "Accedi di nuovo per salvare il risultato dell'analisi.",
  errorRequestFailed: "Non siamo riusciti a elaborare la tua richiesta di nome.",
  errorGeneric: "Si è verificato un errore.",
  consentTitle: "Consenso obbligatorio",
  consentIntro:
    "I dati inseriti, come nome, data di nascita e paese, vengono usati per generare il risultato,",
  consentIntroSaved:
    " e solo i membri che scelgono di salvare vedono conservati i propri dati e risultati.",
  termsLink: "Termini di servizio",
  privacyLink: "Informativa sulla privacy",
  agreeToTermsSuffix: " — accetto.",
  agreeToPrivacySuffix: " — accetto.",
  saveResultLabel: "Salva il risultato nel mio account (facoltativo)",
  saveResultHint: "Conserviamo i tuoi dati e risultati solo se scegli di salvarli.",
  guestNoSavePrefix:
    "I risultati degli ospiti non vengono salvati. Se vuoi conservare il tuo risultato, ",
  loginLink: "accedi",
  guestNoSaveSuffix: " e poi scegli di salvare.",
  adConsentLabel: "Annuncio dell'area del consenso obbligatorio",
  submitTransliteration: "Avvia l'analisi della pronuncia in hangul",
  submitDefault: "Guarda l'annuncio e avvia l'analisi",
  adRevealNote: (seconds) => `Il risultato verrà mostrato dopo l'annuncio. ${seconds} s`,
  analysisDone: "Analisi completata",
  editInput: "Modifica i dati",
  previewNote:
    "Abbiamo mostrato prima il candidato migliore. Puoi sbloccare altri candidati uno alla volta guardando un annuncio o tramite pagamento.",
  adDialogLabel: "Guarda l'annuncio con ricompensa ed esegui l'analisi del nome",
  loadingEyebrow: "Analisi del tuo nome in corso",
  loadingTitle: "Stiamo confrontando i nomi adatti al tuo contesto",
  loadingCountdown: (seconds) => `Annuncio in corso e analisi · ${seconds} s`,
  loadingDone: "Annuncio completato · stiamo preparando il tuo risultato",
  countryHint: ({ languageName, localNameHint }) =>
    `Lingua predefinita: ${languageName} · Esempio di nome locale: ${localNameHint}`,
  transliterationStepsTitle: "Come il tuo nome diventa hangul",
  transliterationSteps: [
    ["Conferma il tuo nome", "Confermiamo l'ortografia e le sillabe originali che hai inserito."],
    ["Analizza lingua e regione", "La tua lingua di origine ha la priorità, con le differenze di pronuncia di ciascun paese."],
    ["Applica il tuo suggerimento di pronuncia", "Qualsiasi suggerimento inserito prevale sulle regole generali di pronuncia."],
    ["Struttura la pronuncia", "Scomponiamo la pronuncia reale in sillabe e notazione fonetica."],
    ["Suggerisci le grafie in hangul", "Manteniamo la tua pronuncia originale e suggeriamo un hangul naturale."],
  ],
};

const pt: FormCopy = {
  errorCheckInput: "Verifique o formato dos dados inseridos para uma análise precisa.",
  errorConsent:
    "Você precisa aceitar os Termos de Serviço e a Política de Privacidade para começar.",
  errorLoginToSave: "Entre novamente para salvar o resultado da análise.",
  errorRequestFailed: "Não foi possível processar sua solicitação de nome.",
  errorGeneric: "Ocorreu um erro.",
  consentTitle: "Consentimento obrigatório",
  consentIntro:
    "Os dados inseridos, como nome, data de nascimento e país, são usados para gerar o resultado,",
  consentIntroSaved:
    " e somente os membros que optam por salvar têm seus dados e resultados armazenados.",
  termsLink: "Termos de Serviço",
  privacyLink: "Política de Privacidade",
  agreeToTermsSuffix: " — eu aceito.",
  agreeToPrivacySuffix: " — eu aceito.",
  saveResultLabel: "Salvar o resultado na minha conta (opcional)",
  saveResultHint: "Só armazenamos seus dados e resultados se você optar por salvar.",
  guestNoSavePrefix:
    "Resultados de visitantes não são armazenados. Se quiser guardar seu resultado, ",
  loginLink: "entre",
  guestNoSaveSuffix: " e depois escolha salvar.",
  adConsentLabel: "Anúncio da área de consentimento obrigatório",
  submitTransliteration: "Iniciar a análise de pronúncia em hangul",
  submitDefault: "Assistir ao anúncio e iniciar a análise",
  adRevealNote: (seconds) => `O resultado será revelado após o anúncio. ${seconds} s`,
  analysisDone: "Análise concluída",
  editInput: "Editar dados",
  previewNote:
    "Revelamos primeiro o melhor candidato. Você pode desbloquear mais candidatos um a um assistindo a um anúncio ou por pagamento.",
  adDialogLabel: "Assistir ao anúncio com recompensa e executar a análise do nome",
  loadingEyebrow: "Analisando seu nome",
  loadingTitle: "Comparando nomes que combinam com o seu contexto",
  loadingCountdown: (seconds) => `Assistindo ao anúncio e analisando · ${seconds} s`,
  loadingDone: "Anúncio concluído · preparando seu resultado",
  countryHint: ({ languageName, localNameHint }) =>
    `Idioma padrão: ${languageName} · Exemplo de nome local: ${localNameHint}`,
  transliterationStepsTitle: "Como seu nome vira hangul",
  transliterationSteps: [
    ["Confirmar seu nome", "Confirmamos a grafia e as sílabas originais que você inseriu."],
    ["Analisar idioma e região", "Seu idioma de origem tem prioridade, com as diferenças de pronúncia de cada país."],
    ["Aplicar sua dica de pronúncia", "Qualquer dica inserida prevalece sobre as regras gerais de pronúncia."],
    ["Estruturar a pronúncia", "Decompomos a pronúncia real em sílabas e notação fonética."],
    ["Sugerir grafias em hangul", "Mantemos sua pronúncia original e sugerimos um hangul natural."],
  ],
};

const ru: FormCopy = {
  errorCheckInput: "Проверьте формат введённых данных для точного анализа.",
  errorConsent:
    "Чтобы начать, необходимо согласиться с Пользовательским соглашением и Политикой конфиденциальности.",
  errorLoginToSave: "Войдите снова, чтобы сохранить результат анализа.",
  errorRequestFailed: "Не удалось обработать ваш запрос на подбор имени.",
  errorGeneric: "Произошла ошибка.",
  consentTitle: "Обязательное согласие",
  consentIntro:
    "Введённые данные, такие как имя, дата рождения и страна, используются для формирования результата,",
  consentIntroSaved:
    " и только у участников, выбравших сохранение, данные и результаты сохраняются.",
  termsLink: "Пользовательское соглашение",
  privacyLink: "Политика конфиденциальности",
  agreeToTermsSuffix: " — я согласен(на).",
  agreeToPrivacySuffix: " — я согласен(на).",
  saveResultLabel: "Сохранить результат в моей учётной записи (по желанию)",
  saveResultHint:
    "Мы сохраняем ваши данные и результаты только при выборе сохранения.",
  guestNoSavePrefix:
    "Результаты гостей не сохраняются. Если хотите сохранить результат, ",
  loginLink: "войдите",
  guestNoSaveSuffix: " и затем выберите сохранение.",
  adConsentLabel: "Реклама в области обязательного согласия",
  submitTransliteration: "Начать анализ произношения хангылем",
  submitDefault: "Посмотреть рекламу и начать анализ",
  adRevealNote: (seconds) => `Результат откроется после рекламы. ${seconds} с`,
  analysisDone: "Анализ завершён",
  editInput: "Изменить данные",
  previewNote:
    "Мы сначала открыли самый подходящий вариант. Остальные варианты можно открывать по одному, посмотрев рекламу или через оплату.",
  adDialogLabel: "Посмотреть рекламу с вознаграждением и запустить анализ имени",
  loadingEyebrow: "Анализируем ваше имя",
  loadingTitle: "Сравниваем имена, подходящие вашему контексту",
  loadingCountdown: (seconds) => `Просмотр рекламы и анализ · ${seconds} с`,
  loadingDone: "Реклама завершена · готовим ваш результат",
  countryHint: ({ languageName, localNameHint }) =>
    `Язык по умолчанию: ${languageName} · Пример местного имени: ${localNameHint}`,
  transliterationStepsTitle: "Как ваше имя записывается хангылем",
  transliterationSteps: [
    ["Подтверждение имени", "Мы подтверждаем исходное написание и слоги, которые вы ввели."],
    ["Анализ языка и региона", "Приоритет отдаётся исходному языку с учётом различий произношения по странам."],
    ["Учёт подсказки произношения", "Введённая вами подсказка имеет приоритет над общими правилами произношения."],
    ["Структурирование произношения", "Мы разбиваем реальное произношение на слоги и фонетическую запись."],
    ["Предложение записи хангылем", "Мы сохраняем исходное произношение и предлагаем естественный хангыль."],
  ],
};

const ar: FormCopy = {
  errorCheckInput: "يرجى التحقق من صيغة البيانات المدخلة للحصول على تحليل دقيق.",
  errorConsent: "يجب الموافقة على شروط الخدمة وسياسة الخصوصية لبدء التحليل.",
  errorLoginToSave: "يرجى تسجيل الدخول مرة أخرى لحفظ نتيجة التحليل.",
  errorRequestFailed: "تعذّرت معالجة طلب التسمية الخاص بك.",
  errorGeneric: "حدث خطأ ما.",
  consentTitle: "الموافقة المطلوبة",
  consentIntro:
    "تُستخدم البيانات التي تدخلها، مثل الاسم وتاريخ الميلاد والدولة، لإنشاء النتيجة،",
  consentIntroSaved:
    " ولا تُحفظ البيانات والنتائج إلا للأعضاء الذين يختارون الحفظ.",
  termsLink: "شروط الخدمة",
  privacyLink: "سياسة الخصوصية",
  agreeToTermsSuffix: " — أوافق.",
  agreeToPrivacySuffix: " — أوافق.",
  saveResultLabel: "حفظ النتيجة في حسابي (اختياري)",
  saveResultHint: "نحفظ بياناتك ونتائجك فقط عندما تختار الحفظ.",
  guestNoSavePrefix:
    "نتائج الزوار لا تُحفظ. إذا أردت الاحتفاظ بنتيجتك، يرجى ",
  loginLink: "تسجيل الدخول",
  guestNoSaveSuffix: " ثم اختيار الحفظ.",
  adConsentLabel: "إعلان منطقة الموافقة المطلوبة",
  submitTransliteration: "بدء تحليل النطق بالهانغل",
  submitDefault: "مشاهدة الإعلان وبدء التحليل",
  adRevealNote: (seconds) => `ستظهر النتيجة بعد الإعلان. ${seconds} ثانية`,
  analysisDone: "اكتمل التحليل",
  editInput: "تعديل البيانات",
  previewNote:
    "كشفنا أولًا عن أفضل مرشح واحد. يمكنك فتح مرشحات إضافية واحدًا تلو الآخر عبر مشاهدة إعلان أو عبر الدفع.",
  adDialogLabel: "مشاهدة الإعلان المكافئ وتشغيل تحليل الاسم",
  loadingEyebrow: "جارٍ تحليل اسمك",
  loadingTitle: "نقارن الأسماء المناسبة لسياق استخدامك",
  loadingCountdown: (seconds) => `جارٍ مشاهدة الإعلان والتحليل · ${seconds} ثانية`,
  loadingDone: "اكتملت مشاهدة الإعلان · نجهّز نتيجتك",
  countryHint: ({ languageName, localNameHint }) =>
    `اللغة الافتراضية: ${languageName} · مثال على اسم محلي: ${localNameHint}`,
  transliterationStepsTitle: "كيف يتحول اسمك إلى الهانغل",
  transliterationSteps: [
    ["تأكيد اسمك", "نتأكد من التهجئة الأصلية والمقاطع التي أدخلتها."],
    ["تحليل اللغة والمنطقة", "تُمنح الأولوية للغة المصدر مع مراعاة اختلافات النطق بين الدول."],
    ["تطبيق إرشاد النطق", "أي إرشاد نطق تدخله يتقدم على قواعد النطق العامة."],
    ["هيكلة النطق", "نحلل النطق الفعلي إلى مقاطع ورموز صوتية."],
    ["اقتراح الكتابة بالهانغل", "نحافظ على نطقك الأصلي ونقترح كتابة طبيعية بالهانغل."],
  ],
};

const tr: FormCopy = {
  errorCheckInput: "Doğru bir analiz için girdi biçimini kontrol edin.",
  errorConsent:
    "Analize başlamak için Kullanım Koşulları'nı ve Gizlilik Politikası'nı kabul etmeniz gerekir.",
  errorLoginToSave: "Analiz sonucunuzu kaydetmek için lütfen yeniden giriş yapın.",
  errorRequestFailed: "İsim talebiniz işlenemedi.",
  errorGeneric: "Bir hata oluştu.",
  consentTitle: "Zorunlu onay",
  consentIntro:
    "İsim, doğum tarihi ve ülke gibi girdiğiniz bilgiler sonucun oluşturulmasında kullanılır,",
  consentIntroSaved:
    " ve yalnızca kaydetmeyi seçen üyelerin girdileri ve sonuçları saklanır.",
  termsLink: "Kullanım Koşulları",
  privacyLink: "Gizlilik Politikası",
  agreeToTermsSuffix: " — kabul ediyorum.",
  agreeToPrivacySuffix: " — kabul ediyorum.",
  saveResultLabel: "Sonucu hesabıma kaydet (isteğe bağlı)",
  saveResultHint:
    "Girdilerinizi ve sonuçlarınızı yalnızca kaydetmeyi seçtiğinizde saklarız.",
  guestNoSavePrefix:
    "Misafir sonuçları saklanmaz. Sonucunuzu saklamak istiyorsanız ",
  loginLink: "giriş yapın",
  guestNoSaveSuffix: " ve ardından kaydetmeyi seçin.",
  adConsentLabel: "Zorunlu onay alanı reklamı",
  submitTransliteration: "Hangıl telaffuz analizini başlat",
  submitDefault: "Reklamı izle ve analizi başlat",
  adRevealNote: (seconds) => `Sonucunuz reklamdan sonra gösterilecek. ${seconds} sn`,
  analysisDone: "Analiz tamamlandı",
  editInput: "Girdiyi düzenle",
  previewNote:
    "Önce en uygun adayı gösterdik. Diğer adayları reklam izleyerek veya ödeme yaparak tek tek açabilirsiniz.",
  adDialogLabel: "Ödüllü reklamı izle ve isim analizini çalıştır",
  loadingEyebrow: "İsminiz analiz ediliyor",
  loadingTitle: "Bağlamınıza uygun isimleri karşılaştırıyoruz",
  loadingCountdown: (seconds) => `Reklam izleniyor ve analiz sürüyor · ${seconds} sn`,
  loadingDone: "Reklam tamamlandı · sonucunuz hazırlanıyor",
  countryHint: ({ languageName, localNameHint }) =>
    `Varsayılan dil: ${languageName} · Yerel isim örneği: ${localNameHint}`,
  transliterationStepsTitle: "İsminiz nasıl Hangıl'a dönüşür",
  transliterationSteps: [
    ["İsminizi doğrulama", "Girdiğiniz özgün yazımı ve heceleri doğrularız."],
    ["Dil ve bölge analizi", "Kaynak diliniz önceliklidir; ülkelere göre telaffuz farkları da uygulanır."],
    ["Telaffuz ipucunuzu uygulama", "Girdiğiniz herhangi bir ipucu, genel telaffuz kurallarının önüne geçer."],
    ["Telaffuzu yapılandırma", "Gerçek telaffuzu hecelere ve fonetik gösterime ayırırız."],
    ["Hangıl yazımları önerme", "Özgün telaffuzunuzu koruyarak doğal Hangıl yazımları öneririz."],
  ],
};

const fil: FormCopy = {
  errorCheckInput: "Pakisuri ang format ng iyong input para sa tumpak na pagsusuri.",
  errorConsent:
    "Kailangan mong sumang-ayon sa Mga Tuntunin ng Serbisyo at Patakaran sa Privacy para magsimula.",
  errorLoginToSave: "Mag-log in muli para i-save ang resulta ng iyong pagsusuri.",
  errorRequestFailed: "Hindi namin naproseso ang iyong kahilingan sa pagpapangalan.",
  errorGeneric: "May naganap na error.",
  consentTitle: "Kinakailangang pahintulot",
  consentIntro:
    "Ang mga inilagay mong impormasyon tulad ng pangalan, petsa ng kapanganakan, at bansa ay ginagamit sa paggawa ng resulta,",
  consentIntroSaved:
    " at tanging ang mga miyembrong pumili ng pag-save ang may iniimbak na impormasyon at resulta.",
  termsLink: "Mga Tuntunin ng Serbisyo",
  privacyLink: "Patakaran sa Privacy",
  agreeToTermsSuffix: " — sumasang-ayon ako.",
  agreeToPrivacySuffix: " — sumasang-ayon ako.",
  saveResultLabel: "I-save ang resulta sa aking account (opsyonal)",
  saveResultHint:
    "Iniimbak lamang namin ang iyong impormasyon at resulta kapag pinili mong i-save.",
  guestNoSavePrefix:
    "Hindi iniimbak ang mga resulta ng bisita. Kung gusto mong itago ang resulta, ",
  loginLink: "mag-log in",
  guestNoSaveSuffix: " at pagkatapos ay piliin ang pag-save.",
  adConsentLabel: "Ad sa bahagi ng kinakailangang pahintulot",
  submitTransliteration: "Simulan ang pagsusuri ng bigkas sa Hangul",
  submitDefault: "Manood ng ad at simulan ang pagsusuri",
  adRevealNote: (seconds) => `Ipapakita ang resulta pagkatapos ng ad. ${seconds} segundo`,
  analysisDone: "Tapos na ang pagsusuri",
  editInput: "I-edit ang input",
  previewNote:
    "Inilabas muna namin ang pinakaangkop na kandidato. Maaari kang magbukas ng karagdagang mga kandidato nang paisa-isa sa pamamagitan ng panonood ng ad o ng pagbabayad.",
  adDialogLabel: "Manood ng reward ad at patakbuhin ang pagsusuri ng pangalan",
  loadingEyebrow: "Sinusuri ang iyong pangalan",
  loadingTitle: "Inihahambing ang mga pangalang angkop sa iyong sitwasyon",
  loadingCountdown: (seconds) => `Nanonood ng ad at nagsusuri · ${seconds} segundo`,
  loadingDone: "Tapos na ang ad · inihahanda ang iyong resulta",
  countryHint: ({ languageName, localNameHint }) =>
    `Default na wika: ${languageName} · Halimbawa ng lokal na pangalan: ${localNameHint}`,
  transliterationStepsTitle: "Paano nagiging Hangul ang iyong pangalan",
  transliterationSteps: [
    ["Kumpirmahin ang iyong pangalan", "Kinukumpirma namin ang orihinal na baybay at mga pantig na inilagay mo."],
    ["Suriin ang wika at rehiyon", "Inuuna ang pinagmulang wika, at isinasaalang-alang ang pagkakaiba ng bigkas sa bawat bansa."],
    ["Iangkop ang iyong pahiwatig sa bigkas", "Ang anumang pahiwatig na inilagay mo ay nangingibabaw sa mga pangkalahatang tuntunin ng bigkas."],
    ["Ayusin ang istruktura ng bigkas", "Hinahati namin ang aktwal na bigkas sa mga pantig at phonetic notation."],
    ["Magmungkahi ng baybay sa Hangul", "Pinapanatili namin ang orihinal na bigkas at nagmumungkahi ng natural na Hangul."],
  ],
};

const uz: FormCopy = {
  errorCheckInput: "Aniq tahlil uchun kiritilgan ma’lumotlar formatini tekshiring.",
  errorConsent:
    "Tahlilni boshlash uchun Foydalanish shartlari va Maxfiylik siyosatiga rozilik bildirishingiz kerak.",
  errorLoginToSave: "Tahlil natijasini saqlash uchun qaytadan tizimga kiring.",
  errorRequestFailed: "Ism bo‘yicha so‘rovingizni qayta ishlay olmadik.",
  errorGeneric: "Xatolik yuz berdi.",
  consentTitle: "Majburiy rozilik",
  consentIntro:
    "Ism, tug‘ilgan sana va mamlakat kabi kiritgan ma’lumotlaringiz natijani yaratish uchun ishlatiladi,",
  consentIntroSaved:
    " va faqat saqlashni tanlagan a’zolarning ma’lumotlari va natijalari saqlanadi.",
  termsLink: "Foydalanish shartlari",
  privacyLink: "Maxfiylik siyosati",
  agreeToTermsSuffix: " — roziman.",
  agreeToPrivacySuffix: " — roziman.",
  saveResultLabel: "Natijani hisobimga saqlash (ixtiyoriy)",
  saveResultHint:
    "Ma’lumotlaringiz va natijalaringizni faqat saqlashni tanlaganingizda saqlaymiz.",
  guestNoSavePrefix:
    "Mehmon natijalari saqlanmaydi. Natijangizni saqlab qolmoqchi bo‘lsangiz, ",
  loginLink: "tizimga kiring",
  guestNoSaveSuffix: ", so‘ng saqlashni tanlang.",
  adConsentLabel: "Majburiy rozilik maydonidagi reklama",
  submitTransliteration: "Hangul talaffuz tahlilini boshlash",
  submitDefault: "Reklamani ko‘rib, tahlilni boshlash",
  adRevealNote: (seconds) => `Natija reklamadan so‘ng ochiladi. ${seconds} soniya`,
  analysisDone: "Tahlil yakunlandi",
  editInput: "Ma’lumotlarni tahrirlash",
  previewNote:
    "Avval eng mos bitta nomzodni ochib berdik. Qo‘shimcha nomzodlarni reklama ko‘rish yoki to‘lov orqali bittadan ochishingiz mumkin.",
  adDialogLabel: "Mukofotli reklamani ko‘rish va ism tahlilini ishga tushirish",
  loadingEyebrow: "Ismingiz tahlil qilinmoqda",
  loadingTitle: "Vaziyatingizga mos ismlarni solishtiryapmiz",
  loadingCountdown: (seconds) => `Reklama ko‘rilmoqda va tahlil qilinmoqda · ${seconds} soniya`,
  loadingDone: "Reklama yakunlandi · natijangiz tayyorlanmoqda",
  countryHint: ({ languageName, localNameHint }) =>
    `Asosiy til: ${languageName} · Mahalliy ism namunasi: ${localNameHint}`,
  transliterationStepsTitle: "Ismingiz qanday qilib Hangulga aylanadi",
  transliterationSteps: [
    ["Ismingizni tasdiqlash", "Siz kiritgan asl imlo va bo‘g‘inlarni tasdiqlaymiz."],
    ["Til va hududni tahlil qilish", "Manba tilingiz birinchi o‘rinda turadi, mamlakatlararo talaffuz farqlari ham hisobga olinadi."],
    ["Talaffuz ko‘rsatmangizni qo‘llash", "Siz kiritgan har qanday ko‘rsatma umumiy talaffuz qoidalaridan ustun turadi."],
    ["Talaffuzni tuzilmaga solish", "Haqiqiy talaffuzni bo‘g‘inlar va fonetik belgilarga ajratamiz."],
    ["Hangul yozuvini taklif qilish", "Asl talaffuzingizni saqlab, tabiiy Hangul yozuvini taklif qilamiz."],
  ],
};

const mn: FormCopy = {
  errorCheckInput: "Шинжилгээ оновчтой байхын тулд оруулсан мэдээллийн форматыг шалгана уу.",
  errorConsent:
    "Шинжилгээг эхлүүлэхийн тулд Үйлчилгээний нөхцөл болон Нууцлалын бодлогыг зөвшөөрөх шаардлагатай.",
  errorLoginToSave: "Шинжилгээний үр дүнг хадгалахын тулд дахин нэвтэрнэ үү.",
  errorRequestFailed: "Таны нэрийн хүсэлтийг боловсруулж чадсангүй.",
  errorGeneric: "Алдаа гарлаа.",
  consentTitle: "Заавал өгөх зөвшөөрөл",
  consentIntro:
    "Нэр, төрсөн огноо, улс зэрэг таны оруулсан мэдээллийг үр дүн гаргахад ашиглах бөгөөд,",
  consentIntroSaved:
    " хадгалахыг сонгосон гишүүдийн мэдээлэл, үр дүн л хадгалагдана.",
  termsLink: "Үйлчилгээний нөхцөл",
  privacyLink: "Нууцлалын бодлого",
  agreeToTermsSuffix: " — зөвшөөрч байна.",
  agreeToPrivacySuffix: " — зөвшөөрч байна.",
  saveResultLabel: "Үр дүнг миний бүртгэлд хадгалах (сонголтоор)",
  saveResultHint:
    "Таныг хадгалахыг сонгосон үед л оруулсан мэдээлэл, үр дүнг хадгална.",
  guestNoSavePrefix:
    "Зочны үр дүн хадгалагдахгүй. Үр дүнгээ хадгалахыг хүсвэл ",
  loginLink: "нэвтэрч",
  guestNoSaveSuffix: " орсны дараа хадгалахыг сонгоно уу.",
  adConsentLabel: "Заавал өгөх зөвшөөрлийн хэсгийн зар сурталчилгаа",
  submitTransliteration: "Хангыль дуудлагын шинжилгээг эхлүүлэх",
  submitDefault: "Зар үзээд шинжилгээг эхлүүлэх",
  adRevealNote: (seconds) => `Зар үзсэний дараа үр дүнг харуулна. ${seconds} секунд`,
  analysisDone: "Шинжилгээ дууслаа",
  editInput: "Оруулсан мэдээллийг засах",
  previewNote:
    "Хамгийн тохиромжтой нэг нэрийн хувилбарыг эхэлж нээлээ. Зар үзэх эсвэл төлбөр төлөх замаар нэмэлт хувилбаруудыг нэг нэгээр нээж болно.",
  adDialogLabel: "Урамшуулалт зар үзэж нэрийн шинжилгээ хийх",
  loadingEyebrow: "Таны нэрийг шинжилж байна",
  loadingTitle: "Таны нөхцөлд тохирох нэрсийг харьцуулж байна",
  loadingCountdown: (seconds) => `Зар үзэж, шинжилж байна · ${seconds} секунд`,
  loadingDone: "Зар дууслаа · таны үр дүнг бэлтгэж байна",
  countryHint: ({ languageName, localNameHint }) =>
    `Үндсэн хэл: ${languageName} · Нутгийн нэрийн жишээ: ${localNameHint}`,
  transliterationStepsTitle: "Таны нэр хангыль болох алхмууд",
  transliterationSteps: [
    ["Нэрээ баталгаажуулах", "Таны оруулсан анхны бичиглэл болон үеийг баталгаажуулна."],
    ["Хэл, бүс нутгийг шинжлэх", "Эх хэлийг тэргүүн ээлжинд авч, улс бүрийн дуудлагын ялгааг тусгана."],
    ["Дуудлагын зөвлөмжийг эхэлж тусгах", "Таны оруулсан дуудлагын зөвлөмж ерөнхий дуудлагын дүрмээс давуу үйлчилнэ."],
    ["Дуудлагыг бүтэцжүүлэх", "Бодит дуудлагыг үе болон авиа зүйн тэмдэглэгээгээр задлан шинжилнэ."],
    ["Хангыль бичиглэл санал болгох", "Анхны дуудлагыг тань хадгалж, аяндаа ойлгогдох хангыль бичиглэл санал болгоно."],
  ],
};

const hi: FormCopy = {
  errorCheckInput: "सटीक विश्लेषण के लिए कृपया इनपुट का प्रारूप जाँच लें।",
  errorConsent:
    "विश्लेषण शुरू करने के लिए सेवा की शर्तों और गोपनीयता नीति से सहमत होना आवश्यक है।",
  errorLoginToSave: "विश्लेषण परिणाम सहेजने के लिए कृपया फिर से लॉग इन करें।",
  errorRequestFailed: "हम आपका नामकरण अनुरोध संसाधित नहीं कर सके।",
  errorGeneric: "एक त्रुटि हुई।",
  consentTitle: "आवश्यक सहमति",
  consentIntro:
    "नाम, जन्म तिथि और देश जैसी आपकी दर्ज की गई जानकारी विश्लेषण परिणाम बनाने में उपयोग होती है,",
  consentIntroSaved:
    " और केवल सहेजना चुनने वाले सदस्यों की जानकारी और परिणाम ही सहेजे जाते हैं।",
  termsLink: "सेवा की शर्तें",
  privacyLink: "गोपनीयता नीति",
  agreeToTermsSuffix: " — मैं सहमत हूँ।",
  agreeToPrivacySuffix: " — मैं सहमत हूँ।",
  saveResultLabel: "विश्लेषण परिणाम मेरे खाते में सहेजें (वैकल्पिक)",
  saveResultHint:
    "केवल आपके सहेजना चुनने पर ही हम दर्ज की गई जानकारी और परिणाम सहेजते हैं।",
  guestNoSavePrefix:
    "गैर-सदस्यों के विश्लेषण परिणाम सहेजे नहीं जाते। परिणाम सुरक्षित रखने के लिए ",
  loginLink: "लॉग इन",
  guestNoSaveSuffix: " करें और फिर सहेजना चुनें।",
  adConsentLabel: "आवश्यक सहमति क्षेत्र का विज्ञापन",
  submitTransliteration: "हांगुल उच्चारण विश्लेषण शुरू करें",
  submitDefault: "विज्ञापन देखकर विश्लेषण शुरू करें",
  adRevealNote: (seconds) => `विज्ञापन देखने के बाद परिणाम दिखाया जाएगा। ${seconds} सेकंड`,
  analysisDone: "विश्लेषण पूर्ण",
  editInput: "इनपुट संपादित करें",
  previewNote:
    "हमने सबसे उपयुक्त 1 उम्मीदवार नाम पहले दिखाया है। अतिरिक्त उम्मीदवार नाम विज्ञापन देखकर या भुगतान के ज़रिए एक-एक करके खोले जा सकते हैं।",
  adDialogLabel: "रिवॉर्ड विज्ञापन देखें और नाम विश्लेषण चलाएँ",
  loadingEyebrow: "नाम का विश्लेषण हो रहा है",
  loadingTitle: "आपके संदर्भ के अनुकूल नामों की तुलना की जा रही है",
  loadingCountdown: (seconds) => `विज्ञापन देखना और विश्लेषण जारी · ${seconds} सेकंड`,
  loadingDone: "विज्ञापन पूरा हुआ · विश्लेषण परिणाम तैयार किया जा रहा है",
  countryHint: ({ languageName, localNameHint }) =>
    `डिफ़ॉल्ट भाषा: ${languageName} · स्थानीय नाम का उदाहरण: ${localNameHint}`,
  transliterationStepsTitle: "आपका नाम हांगुल में बदलने के चरण",
  transliterationSteps: [
    ["मूल नाम की पुष्टि", "आपकी दर्ज की गई मूल वर्तनी और शब्दांशों की पुष्टि करते हैं।"],
    ["भाषा और क्षेत्र के उच्चारण का विश्लेषण", "स्रोत भाषा को प्राथमिकता देते हुए देश-विशेष उच्चारण अंतर लागू करते हैं।"],
    ["उच्चारण संकेत को प्राथमिकता", "आपका दर्ज किया गया उच्चारण संकेत सामान्य उच्चारण नियमों से ऊपर रहता है।"],
    ["उच्चारण की संरचना", "वास्तविक उच्चारण को शब्दांशों और ध्वनि-चिह्नों में विश्लेषित करते हैं।"],
    ["हांगुल लेखन का सुझाव", "मूल उच्चारण बनाए रखते हुए स्वाभाविक हांगुल सुझाते हैं।"],
  ],
};

const km: FormCopy = {
  errorCheckInput: "សូមពិនិត្យទម្រង់ព័ត៌មានដែលបានបញ្ចូល ដើម្បីទទួលបានការវិភាគត្រឹមត្រូវ។",
  errorConsent:
    "អ្នកត្រូវយល់ព្រមតាមលក្ខខណ្ឌនៃការប្រើប្រាស់ និងគោលការណ៍ឯកជនភាព ដើម្បីចាប់ផ្តើមការវិភាគ។",
  errorLoginToSave: "សូមចូលគណនីម្តងទៀត ដើម្បីរក្សាទុកលទ្ធផលវិភាគរបស់អ្នក។",
  errorRequestFailed: "មិនអាចដំណើរការសំណើដាក់ឈ្មោះរបស់អ្នកបានទេ។",
  errorGeneric: "មានបញ្ហាកើតឡើង។",
  consentTitle: "ការយល់ព្រមចាំបាច់",
  consentIntro:
    "ព័ត៌មានដែលអ្នកបញ្ចូល ដូចជាឈ្មោះ ថ្ងៃខែឆ្នាំកំណើត និងប្រទេស ត្រូវបានប្រើដើម្បីបង្កើតលទ្ធផលវិភាគ",
  consentIntroSaved:
    " ហើយមានតែសមាជិកដែលជ្រើសរើសរក្សាទុកប៉ុណ្ណោះ ដែលព័ត៌មាន និងលទ្ធផលត្រូវបានរក្សាទុក។",
  termsLink: "លក្ខខណ្ឌនៃការប្រើប្រាស់",
  privacyLink: "គោលការណ៍ឯកជនភាព",
  agreeToTermsSuffix: " — ខ្ញុំយល់ព្រម។",
  agreeToPrivacySuffix: " — ខ្ញុំយល់ព្រម។",
  saveResultLabel: "រក្សាទុកលទ្ធផលវិភាគក្នុងគណនីរបស់ខ្ញុំ (ស្រេចចិត្ត)",
  saveResultHint:
    "យើងរក្សាទុកព័ត៌មានដែលបានបញ្ចូល និងលទ្ធផល តែនៅពេលអ្នកជ្រើសរើសរក្សាទុកប៉ុណ្ណោះ។",
  guestNoSavePrefix:
    "លទ្ធផលរបស់អ្នកមិនមែនសមាជិកមិនត្រូវបានរក្សាទុកទេ។ បើចង់រក្សាទុកលទ្ធផល សូម",
  loginLink: "ចូលគណនី",
  guestNoSaveSuffix: " រួចជ្រើសរើសរក្សាទុក។",
  adConsentLabel: "ពាណិជ្ជកម្មក្នុងតំបន់ការយល់ព្រមចាំបាច់",
  submitTransliteration: "ចាប់ផ្តើមវិភាគការបញ្ចេញសំឡេងជាហាន់គុល",
  submitDefault: "មើលពាណិជ្ជកម្ម រួចចាប់ផ្តើមការវិភាគ",
  adRevealNote: (seconds) => `លទ្ធផលនឹងបង្ហាញបន្ទាប់ពីមើលពាណិជ្ជកម្ម។ ${seconds} វិនាទី`,
  analysisDone: "ការវិភាគបានបញ្ចប់",
  editInput: "កែសម្រួលព័ត៌មាន",
  previewNote:
    "យើងបានបង្ហាញបេក្ខឈ្មោះដែលសមស្របបំផុតមួយជាមុន។ អ្នកអាចបើកបេក្ខឈ្មោះបន្ថែមម្តងមួយៗ ដោយមើលពាណិជ្ជកម្ម ឬតាមរយៈការបង់ប្រាក់។",
  adDialogLabel: "មើលពាណិជ្ជកម្មរង្វាន់ រួចដំណើរការវិភាគឈ្មោះ",
  loadingEyebrow: "កំពុងវិភាគឈ្មោះរបស់អ្នក",
  loadingTitle: "កំពុងប្រៀបធៀបឈ្មោះដែលសមនឹងបរិបទរបស់អ្នក",
  loadingCountdown: (seconds) => `កំពុងមើលពាណិជ្ជកម្ម និងវិភាគ · ${seconds} វិនាទី`,
  loadingDone: "មើលពាណិជ្ជកម្មរួចរាល់ · កំពុងរៀបចំលទ្ធផលរបស់អ្នក",
  countryHint: ({ languageName, localNameHint }) =>
    `ភាសាលំនាំដើម៖ ${languageName} · ឧទាហរណ៍ឈ្មោះក្នុងតំបន់៖ ${localNameHint}`,
  transliterationStepsTitle: "ជំហានដែលឈ្មោះរបស់អ្នកក្លាយជាហាន់គុល",
  transliterationSteps: [
    ["បញ្ជាក់ឈ្មោះពិត", "យើងបញ្ជាក់អក្ខរាវិរុទ្ធ និងព្យាង្គដើមដែលអ្នកបានបញ្ចូល។"],
    ["វិភាគការបញ្ចេញសំឡេងតាមភាសា និងតំបន់", "ផ្តល់អាទិភាពដល់ភាសាដើម និងឆ្លុះបញ្ចាំងភាពខុសគ្នានៃការបញ្ចេញសំឡេងតាមប្រទេស។"],
    ["ផ្តល់អាទិភាពដល់គន្លឹះការបញ្ចេញសំឡេង", "គន្លឹះការបញ្ចេញសំឡេងដែលអ្នកបញ្ចូល មានអាទិភាពជាងច្បាប់បញ្ចេញសំឡេងទូទៅ។"],
    ["រៀបចំរចនាសម្ព័ន្ធការបញ្ចេញសំឡេង", "វិភាគការបញ្ចេញសំឡេងពិតជាព្យាង្គ និងសញ្ញាសូរសព្ទ។"],
    ["ស្នើការសរសេរជាហាន់គុល", "រក្សាការបញ្ចេញសំឡេងដើម និងស្នើការសរសេរហាន់គុលដែលធម្មជាតិ។"],
  ],
};

const kk: FormCopy = {
  errorCheckInput: "Дәл талдау үшін енгізілген деректер форматын тексеріңіз.",
  errorConsent:
    "Талдауды бастау үшін Қызмет көрсету шарттары мен Құпиялылық саясатына келісуіңіз қажет.",
  errorLoginToSave: "Талдау нәтижесін сақтау үшін қайта кіріңіз.",
  errorRequestFailed: "Есім бойынша сұрауыңызды өңдей алмадық.",
  errorGeneric: "Қате пайда болды.",
  consentTitle: "Міндетті келісім",
  consentIntro:
    "Есім, туған күн және ел сияқты енгізген деректеріңіз талдау нәтижесін жасау үшін пайдаланылады,",
  consentIntroSaved:
    " және тек сақтауды таңдаған мүшелердің деректері мен нәтижелері ғана сақталады.",
  termsLink: "Қызмет көрсету шарттары",
  privacyLink: "Құпиялылық саясаты",
  agreeToTermsSuffix: " — келісемін.",
  agreeToPrivacySuffix: " — келісемін.",
  saveResultLabel: "Нәтижені тіркелгіме сақтау (міндетті емес)",
  saveResultHint:
    "Деректеріңіз бен нәтижелеріңізді тек сақтауды таңдағанда ғана сақтаймыз.",
  guestNoSavePrefix:
    "Қонақ нәтижелері сақталмайды. Нәтижеңізді сақтап қалғыңыз келсе, ",
  loginLink: "кіріп",
  guestNoSaveSuffix: ", содан кейін сақтауды таңдаңыз.",
  adConsentLabel: "Міндетті келісім аймағындағы жарнама",
  submitTransliteration: "Хангыль айтылым талдауын бастау",
  submitDefault: "Жарнаманы көріп, талдауды бастау",
  adRevealNote: (seconds) => `Нәтиже жарнамадан кейін ашылады. ${seconds} секунд`,
  analysisDone: "Талдау аяқталды",
  editInput: "Деректерді өзгерту",
  previewNote:
    "Алдымен ең қолайлы бір есім нұсқасын аштық. Қосымша нұсқаларды жарнама көру немесе төлем арқылы бір-бірлеп аша аласыз.",
  adDialogLabel: "Сыйақылы жарнаманы көріп, есім талдауын іске қосу",
  loadingEyebrow: "Есіміңіз талданып жатыр",
  loadingTitle: "Жағдайыңызға сай есімдерді салыстырып жатырмыз",
  loadingCountdown: (seconds) => `Жарнама көрсетіліп, талдау жүріп жатыр · ${seconds} секунд`,
  loadingDone: "Жарнама аяқталды · нәтижеңіз дайындалуда",
  countryHint: ({ languageName, localNameHint }) =>
    `Әдепкі тіл: ${languageName} · Жергілікті есім мысалы: ${localNameHint}`,
  transliterationStepsTitle: "Есіміңіздің хангыльге айналу қадамдары",
  transliterationSteps: [
    ["Есімді растау", "Сіз енгізген бастапқы жазылу мен буындарды растаймыз."],
    ["Тіл мен аймақты талдау", "Бастапқы тілге басымдық беріп, елдер бойынша айтылым айырмашылықтарын ескереміз."],
    ["Айтылым нұсқауын басым қолдану", "Сіз енгізген айтылым нұсқауы жалпы айтылым ережелерінен басым болады."],
    ["Айтылымды құрылымдау", "Нақты айтылымды буындар мен фонетикалық белгілерге бөлеміз."],
    ["Хангыль жазылуын ұсыну", "Бастапқы айтылымыңызды сақтап, табиғи хангыль жазылуын ұсынамыз."],
  ],
};

const ms: FormCopy = {
  errorCheckInput: "Sila semak format input untuk analisis yang tepat.",
  errorConsent:
    "Anda perlu bersetuju dengan Terma Perkhidmatan dan Dasar Privasi untuk memulakan analisis.",
  errorLoginToSave: "Sila log masuk semula untuk menyimpan hasil analisis anda.",
  errorRequestFailed: "Kami tidak dapat memproses permintaan penamaan anda.",
  errorGeneric: "Ralat telah berlaku.",
  consentTitle: "Persetujuan wajib",
  consentIntro:
    "Maklumat yang anda masukkan seperti nama, tarikh lahir dan negara digunakan untuk menjana hasil analisis,",
  consentIntroSaved:
    " dan hanya maklumat serta hasil ahli yang memilih untuk menyimpan akan disimpan.",
  termsLink: "Terma Perkhidmatan",
  privacyLink: "Dasar Privasi",
  agreeToTermsSuffix: " — saya bersetuju.",
  agreeToPrivacySuffix: " — saya bersetuju.",
  saveResultLabel: "Simpan hasil ke akaun saya (pilihan)",
  saveResultHint:
    "Kami hanya menyimpan maklumat dan hasil anda apabila anda memilih untuk menyimpan.",
  guestNoSavePrefix:
    "Hasil bukan ahli tidak disimpan. Jika mahu menyimpan hasil anda, sila ",
  loginLink: "log masuk",
  guestNoSaveSuffix: " kemudian pilih simpan.",
  adConsentLabel: "Iklan kawasan persetujuan wajib",
  submitTransliteration: "Mulakan analisis sebutan Hangul",
  submitDefault: "Tonton iklan dan mulakan analisis",
  adRevealNote: (seconds) => `Hasil akan dipaparkan selepas iklan. ${seconds} saat`,
  analysisDone: "Analisis selesai",
  editInput: "Sunting input",
  previewNote:
    "Kami memaparkan satu calon terbaik terlebih dahulu. Anda boleh membuka calon tambahan satu demi satu dengan menonton iklan atau melalui pembayaran.",
  adDialogLabel: "Tonton iklan ganjaran dan jalankan analisis nama",
  loadingEyebrow: "Menganalisis nama anda",
  loadingTitle: "Membandingkan nama yang sesuai dengan konteks anda",
  loadingCountdown: (seconds) => `Menonton iklan dan menganalisis · ${seconds} saat`,
  loadingDone: "Iklan selesai · menyediakan hasil anda",
  countryHint: ({ languageName, localNameHint }) =>
    `Bahasa lalai: ${languageName} · Contoh nama tempatan: ${localNameHint}`,
  transliterationStepsTitle: "Bagaimana nama anda menjadi Hangul",
  transliterationSteps: [
    ["Sahkan nama anda", "Kami mengesahkan ejaan dan suku kata asal yang anda masukkan."],
    ["Analisis bahasa & wilayah", "Bahasa sumber diutamakan, dengan mengambil kira perbezaan sebutan mengikut negara."],
    ["Terapkan petunjuk sebutan anda", "Sebarang petunjuk yang anda masukkan mengatasi peraturan sebutan umum."],
    ["Strukturkan sebutan", "Kami memecahkan sebutan sebenar kepada suku kata dan simbol fonetik."],
    ["Cadangkan ejaan Hangul", "Kami mengekalkan sebutan asal anda dan mencadangkan Hangul yang semula jadi."],
  ],
};

const pl: FormCopy = {
  errorCheckInput: "Sprawdź format wprowadzonych danych, aby analiza była dokładna.",
  errorConsent:
    "Aby rozpocząć, musisz zaakceptować Regulamin i Politykę prywatności.",
  errorLoginToSave: "Zaloguj się ponownie, aby zapisać wynik analizy.",
  errorRequestFailed: "Nie udało się przetworzyć Twojego zapytania o imię.",
  errorGeneric: "Wystąpił błąd.",
  consentTitle: "Wymagana zgoda",
  consentIntro:
    "Wprowadzone dane, takie jak imię, data urodzenia i kraj, służą do wygenerowania wyniku,",
  consentIntroSaved:
    " a dane i wyniki są zapisywane wyłącznie u członków, którzy wybiorą zapisanie.",
  termsLink: "Regulamin",
  privacyLink: "Polityka prywatności",
  agreeToTermsSuffix: " — akceptuję.",
  agreeToPrivacySuffix: " — akceptuję.",
  saveResultLabel: "Zapisz wynik na moim koncie (opcjonalnie)",
  saveResultHint:
    "Przechowujemy Twoje dane i wyniki tylko wtedy, gdy wybierzesz zapisanie.",
  guestNoSavePrefix:
    "Wyniki gości nie są zapisywane. Jeśli chcesz zachować wynik, ",
  loginLink: "zaloguj się",
  guestNoSaveSuffix: ", a następnie wybierz zapisanie.",
  adConsentLabel: "Reklama w obszarze wymaganej zgody",
  submitTransliteration: "Rozpocznij analizę wymowy w hangul",
  submitDefault: "Obejrzyj reklamę i rozpocznij analizę",
  adRevealNote: (seconds) => `Wynik zostanie pokazany po reklamie. ${seconds} s`,
  analysisDone: "Analiza zakończona",
  editInput: "Edytuj dane",
  previewNote:
    "Najpierw pokazaliśmy najlepszego kandydata. Kolejnych kandydatów możesz odblokowywać pojedynczo, oglądając reklamę lub poprzez płatność.",
  adDialogLabel: "Obejrzyj reklamę z nagrodą i uruchom analizę imienia",
  loadingEyebrow: "Analizujemy Twoje imię",
  loadingTitle: "Porównujemy imiona pasujące do Twojego kontekstu",
  loadingCountdown: (seconds) => `Trwa reklama i analiza · ${seconds} s`,
  loadingDone: "Reklama zakończona · przygotowujemy Twój wynik",
  countryHint: ({ languageName, localNameHint }) =>
    `Język domyślny: ${languageName} · Przykład lokalnego imienia: ${localNameHint}`,
  transliterationStepsTitle: "Jak Twoje imię zamienia się w hangul",
  transliterationSteps: [
    ["Potwierdzenie imienia", "Potwierdzamy oryginalną pisownię i sylaby, które wprowadzono."],
    ["Analiza języka i regionu", "Priorytet ma język źródłowy, z uwzględnieniem różnic wymowy w poszczególnych krajach."],
    ["Zastosowanie wskazówki wymowy", "Wprowadzona przez Ciebie wskazówka ma pierwszeństwo przed ogólnymi zasadami wymowy."],
    ["Strukturyzacja wymowy", "Rozkładamy rzeczywistą wymowę na sylaby i zapis fonetyczny."],
    ["Propozycje zapisu w hangul", "Zachowujemy oryginalną wymowę i proponujemy naturalny hangul."],
  ],
};

// ko/en/vi/th/ja/zh/id/de/es/fr/it/pt/ru/ar/tr/fil/uz/mn/hi/km/kk/ms/pl을 작성했고, 나머지 로케일은 영어로 폴백한다(언어별로 채워 넣을 수 있는 구조).
const formCopies: Partial<Record<Locale, FormCopy>> = { ko, en, vi, th, ja, zh, id, de, es, fr, it, pt, ru, ar, tr, fil, uz, mn, hi, km, kk, ms, pl };

export function getFormCopy(locale: Locale): FormCopy {
  return formCopies[locale] ?? en;
}
