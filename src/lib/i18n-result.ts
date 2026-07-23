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
  storageSaved: string;
  storageSkipped: string;
  storageFailed: string;
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
  goodsItemTitle: "이름 도장",
  goodsItemSub: "(원목 도장 · 국내 배송)",
  goodsItemDescription:
    "선택한 한글·한자 이름을 새긴 전통 이름 도장을 제작해 배송해 드립니다.",
  goodsButton: "이름 도장 신청",
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
  storageSaved: "이 분석 결과를 내 계정에 저장했습니다.",
  storageSkipped:
    "이 분석 결과는 서버에 저장하지 않았습니다. 현재 화면을 벗어나기 전에 필요한 내용을 확인해 주세요.",
  storageFailed:
    "분석은 완료했지만 계정 저장에 실패했습니다. 결과를 확인한 뒤 다시 분석해 주세요.",
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
  goodsItemTitle: "Korean name stamp",
  goodsItemSub: "(wooden seal · ships worldwide)",
  goodsItemDescription:
    "Have your Hangul name carved into a traditional Korean name stamp (dojang) and shipped to you — international shipping included.",
  goodsButton: "Order a name stamp",
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
  storageSaved: "This analysis was saved to your account.",
  storageSkipped:
    "This result was not saved to our server. Please review anything you need before leaving this screen.",
  storageFailed:
    "The analysis finished, but saving to your account failed. Review the result, then run the analysis again.",
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
  goodsItemTitle: "Con dấu tên Hàn Quốc",
  goodsItemSub: "(dấu gỗ · giao hàng toàn cầu)",
  goodsItemDescription:
    "Khắc tên Hangul của bạn lên con dấu tên truyền thống Hàn Quốc (dojang) và giao tận nơi — đã bao gồm phí vận chuyển quốc tế.",
  goodsButton: "Đặt con dấu tên",
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
  storageSaved: "Kết quả phân tích này đã được lưu vào tài khoản của bạn.",
  storageSkipped:
    "Kết quả phân tích này chưa được lưu lên máy chủ. Vui lòng xem lại những nội dung cần thiết trước khi rời khỏi màn hình này.",
  storageFailed:
    "Phân tích đã hoàn tất, nhưng việc lưu vào tài khoản đã thất bại. Hãy xem lại kết quả rồi chạy phân tích lại.",
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
  goodsItemTitle: "ตราประทับชื่อเกาหลี",
  goodsItemSub: "(ตราไม้ · จัดส่งทั่วโลก)",
  goodsItemDescription:
    "สลักชื่อฮันกึลของคุณลงบนตราประทับชื่อแบบดั้งเดิมของเกาหลี (โทจัง) และจัดส่งถึงคุณ รวมค่าจัดส่งระหว่างประเทศแล้ว",
  goodsButton: "สั่งทำตราประทับชื่อ",
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
  storageSaved: "บันทึกผลการวิเคราะห์นี้ไว้ในบัญชีของคุณแล้ว",
  storageSkipped:
    "ผลการวิเคราะห์นี้ไม่ได้บันทึกไว้บนเซิร์ฟเวอร์ กรุณาตรวจสอบข้อมูลที่จำเป็นก่อนออกจากหน้าจอนี้",
  storageFailed:
    "การวิเคราะห์เสร็จสมบูรณ์แล้ว แต่การบันทึกลงบัญชีล้มเหลว กรุณาตรวจสอบผลลัพธ์แล้ววิเคราะห์ใหม่อีกครั้ง",
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
  goodsItemTitle: "韓国の名前はんこ",
  goodsItemSub: "(木製印鑑・海外発送)",
  goodsItemDescription:
    "お選びのハングル名を伝統的な名前はんこ(図章)に彫刻してお届けします。国際送料込みです。",
  goodsButton: "名前はんこを注文",
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
  storageSaved: "この分析結果をあなたのアカウントに保存しました。",
  storageSkipped:
    "この分析結果はサーバーに保存していません。この画面を離れる前に、必要な内容をご確認ください。",
  storageFailed:
    "分析は完了しましたが、アカウントへの保存に失敗しました。結果を確認したうえで、もう一度分析してください。",
};

const zh: ResultCopy = {
  reanalysisError: "未能完成发音的重新分析。",
  reanalysisErrorGeneric: "重新分析时发生了错误。",
  reanalysisEyebrow: "和实际发音不一样吗？",
  reanalysisTitle: "使用发音提示重新分析",
  reanalysisDescription:
    "输入更具体的实际发音后，我们会以相同的名字、语言和国家条件重新分析。",
  hintLabel: "实际发音提示",
  hintPlaceholder: "例如：读音接近 Wang Xiao-ming",
  reanalysisCountdown: (seconds) => `观看广告后将重新分析。${seconds} 秒`,
  reanalyzing: "正在重新分析",
  goodsEyebrow: "让结果发挥更多价值",
  goodsSectionTitle: "名字周边商品",
  goodsItemTitle: "韩国名字印章",
  goodsItemSub: "(木质印章 · 全球配送)",
  goodsItemDescription:
    "将您选择的韩文名字刻在传统名字印章(图章)上寄送给您 — 已含国际运费。",
  goodsButton: "订购名字印章",
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
  storageSaved: "已将此分析结果保存到您的账户。",
  storageSkipped:
    "此分析结果未保存到服务器。请在离开当前页面前确认您需要的内容。",
  storageFailed:
    "分析已完成，但保存到账户失败。请确认结果后重新分析。",
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
  goodsItemTitle: "Stempel nama Korea",
  goodsItemSub: "(stempel kayu · dikirim ke seluruh dunia)",
  goodsItemDescription:
    "Nama Hangul pilihan Anda diukir pada stempel nama tradisional Korea (dojang) dan dikirim ke alamat Anda — sudah termasuk ongkos kirim internasional.",
  goodsButton: "Pesan stempel nama",
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
  storageSaved: "Hasil analisis ini telah disimpan ke akun Anda.",
  storageSkipped:
    "Hasil analisis ini tidak disimpan ke server kami. Silakan periksa apa pun yang Anda perlukan sebelum meninggalkan layar ini.",
  storageFailed:
    "Analisis selesai, tetapi penyimpanan ke akun Anda gagal. Periksa hasilnya, lalu jalankan analisis lagi.",
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
  goodsItemTitle: "Koreanischer Namensstempel",
  goodsItemSub: "(Holzstempel · weltweiter Versand)",
  goodsItemDescription:
    "Ihr gewählter Hangul-Name wird in einen traditionellen koreanischen Namensstempel (Dojang) graviert und zu Ihnen geliefert — internationaler Versand inklusive.",
  goodsButton: "Namensstempel bestellen",
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
  storageSaved: "Dieses Analyseergebnis wurde in Ihrem Konto gespeichert.",
  storageSkipped:
    "Dieses Analyseergebnis wurde nicht auf unserem Server gespeichert. Bitte prüfen Sie alles Nötige, bevor Sie diese Seite verlassen.",
  storageFailed:
    "Die Analyse wurde abgeschlossen, aber das Speichern in Ihrem Konto ist fehlgeschlagen. Prüfen Sie das Ergebnis und führen Sie die Analyse erneut aus.",
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
  goodsItemTitle: "Sello de nombre coreano",
  goodsItemSub: "(sello de madera · envío mundial)",
  goodsItemDescription:
    "Tu nombre en hangul grabado en un sello de nombre tradicional coreano (dojang), enviado a tu casa — envío internacional incluido.",
  goodsButton: "Pedir un sello de nombre",
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
  storageSaved: "Este resultado de análisis se guardó en tu cuenta.",
  storageSkipped:
    "Este resultado de análisis no se guardó en nuestro servidor. Revisa lo que necesites antes de salir de esta pantalla.",
  storageFailed:
    "El análisis finalizó, pero no se pudo guardar en tu cuenta. Revisa el resultado y vuelve a ejecutar el análisis.",
};

const fr: ResultCopy = {
  reanalysisError: "Nous n'avons pas pu terminer la nouvelle analyse de la prononciation.",
  reanalysisErrorGeneric: "Une erreur s'est produite lors de la nouvelle analyse.",
  reanalysisEyebrow: "Le résultat sonne différemment de la prononciation réelle ?",
  reanalysisTitle: "Réanalyser avec une indication de prononciation",
  reanalysisDescription:
    "Indiquez plus précisément la prononciation réelle et nous relancerons l'analyse avec le même prénom, la même langue et le même pays.",
  hintLabel: "Indication de prononciation",
  hintPlaceholder: "Ex. : se prononce comme Loui-s Mar-tin",
  reanalysisCountdown: (seconds) => `Nouvelle analyse après la publicité. ${seconds} s`,
  reanalyzing: "Nouvelle analyse en cours",
  goodsEyebrow: "Tirez encore plus de votre résultat",
  goodsSectionTitle: "Articles dérivés avec votre prénom",
  goodsItemTitle: "Sceau de nom coréen",
  goodsItemSub: "(sceau en bois · livraison mondiale)",
  goodsItemDescription:
    "Votre prénom en hangeul gravé sur un sceau de nom traditionnel coréen (dojang), livré chez vous — livraison internationale incluse.",
  goodsButton: "Commander un sceau de nom",
  editInput: "Modifier la saisie",
  home: "Accueil",
  headerAdLabel: "Bannière publicitaire en haut du résultat en hangeul",
  headerCaption: "Résultat de prononciation en hangeul",
  loading: "Chargement de votre résultat.",
  analysisDone: "Analyse terminée",
  resultHeading: "Votre prénom en prononciation hangeul",
  emptyTitle: "Nous n'avons pas pu charger votre résultat.",
  emptyDescription:
    "Ce résultat n'est disponible que dans l'onglet du navigateur où vous avez lancé l'analyse.",
  backToInput: "Revenir à l'écran de saisie",
  storageSaved: "Ce résultat d'analyse a été enregistré dans votre compte.",
  storageSkipped:
    "Ce résultat d'analyse n'a pas été enregistré sur notre serveur. Veuillez vérifier tout ce dont vous avez besoin avant de quitter cet écran.",
  storageFailed:
    "L'analyse est terminée, mais l'enregistrement dans votre compte a échoué. Vérifiez le résultat, puis relancez l'analyse.",
};

const it: ResultCopy = {
  reanalysisError: "Non siamo riusciti a completare la nuova analisi della pronuncia.",
  reanalysisErrorGeneric: "Si è verificato un errore durante la nuova analisi.",
  reanalysisEyebrow: "Suona diverso dalla pronuncia reale?",
  reanalysisTitle: "Analizza di nuovo con un suggerimento di pronuncia",
  reanalysisDescription:
    "Inserisci la pronuncia reale in modo più preciso e analizzeremo di nuovo con lo stesso nome, la stessa lingua e lo stesso paese.",
  hintLabel: "Suggerimento di pronuncia",
  hintPlaceholder: "Es.: si pronuncia come Mar-co Ros-si",
  reanalysisCountdown: (seconds) => `Nuova analisi dopo l'annuncio. ${seconds} s`,
  reanalyzing: "Nuova analisi in corso",
  goodsEyebrow: "Sfrutta al massimo il tuo risultato",
  goodsSectionTitle: "Merchandising con il tuo nome",
  goodsItemTitle: "Timbro del nome coreano",
  goodsItemSub: "(timbro in legno · spedizione mondiale)",
  goodsItemDescription:
    "Il tuo nome in hangul inciso su un tradizionale timbro coreano del nome (dojang), spedito a casa tua — spedizione internazionale inclusa.",
  goodsButton: "Ordina un timbro del nome",
  editInput: "Modifica i dati",
  home: "Home",
  headerAdLabel: "Banner pubblicitario in alto del risultato in hangul",
  headerCaption: "Risultato della pronuncia in hangul",
  loading: "Caricamento del tuo risultato.",
  analysisDone: "Analisi completata",
  resultHeading: "Il tuo nome in pronuncia hangul",
  emptyTitle: "Non siamo riusciti a caricare il tuo risultato.",
  emptyDescription:
    "Questo risultato è disponibile solo nella scheda del browser in cui hai eseguito l'analisi.",
  backToInput: "Torna alla schermata di inserimento",
  storageSaved: "Questo risultato dell'analisi è stato salvato nel tuo account.",
  storageSkipped:
    "Questo risultato dell'analisi non è stato salvato sul nostro server. Controlla tutto ciò che ti serve prima di lasciare questa schermata.",
  storageFailed:
    "L'analisi è terminata, ma il salvataggio nel tuo account non è riuscito. Controlla il risultato, poi esegui di nuovo l'analisi.",
};

const pt: ResultCopy = {
  reanalysisError: "Não foi possível concluir a nova análise da pronúncia.",
  reanalysisErrorGeneric: "Ocorreu um erro ao analisar novamente.",
  reanalysisEyebrow: "Soa diferente da pronúncia real?",
  reanalysisTitle: "Analisar novamente com uma dica de pronúncia",
  reanalysisDescription:
    "Informe a pronúncia real com mais detalhes e analisaremos novamente com o mesmo nome, idioma e país.",
  hintLabel: "Dica de pronúncia",
  hintPlaceholder: "Ex.: soa como A-na Sil-va",
  reanalysisCountdown: (seconds) => `Analisaremos novamente após o anúncio. ${seconds} s`,
  reanalyzing: "Analisando novamente",
  goodsEyebrow: "Aproveite ainda mais o seu resultado",
  goodsSectionTitle: "Produtos personalizados com seu nome",
  goodsItemTitle: "Carimbo de nome coreano",
  goodsItemSub: "(carimbo de madeira · envio internacional)",
  goodsItemDescription:
    "Seu nome em hangul gravado em um carimbo de nome tradicional coreano (dojang), enviado até você — frete internacional incluído.",
  goodsButton: "Pedir um carimbo de nome",
  editInput: "Editar dados",
  home: "Início",
  headerAdLabel: "Anúncio de banner no topo do resultado em hangul",
  headerCaption: "Resultado de pronúncia em hangul",
  loading: "Carregando seu resultado.",
  analysisDone: "Análise concluída",
  resultHeading: "Seu nome na pronúncia em hangul",
  emptyTitle: "Não foi possível carregar seu resultado.",
  emptyDescription:
    "Este resultado só está disponível na aba do navegador em que você executou a análise.",
  backToInput: "Voltar à tela de entrada",
  storageSaved: "Este resultado da análise foi salvo na sua conta.",
  storageSkipped:
    "Este resultado da análise não foi salvo em nosso servidor. Confira tudo o que você precisa antes de sair desta tela.",
  storageFailed:
    "A análise foi concluída, mas não foi possível salvar na sua conta. Confira o resultado e execute a análise novamente.",
};

const ru: ResultCopy = {
  reanalysisError: "Не удалось завершить повторный анализ произношения.",
  reanalysisErrorGeneric: "Произошла ошибка при повторном анализе.",
  reanalysisEyebrow: "Звучит не так, как на самом деле?",
  reanalysisTitle: "Повторный анализ с подсказкой произношения",
  reanalysisDescription:
    "Укажите реальное произношение подробнее, и мы повторим анализ с тем же именем, языком и страной.",
  hintLabel: "Подсказка произношения",
  hintPlaceholder: "Напр.: звучит как И-ван Пет-ров",
  reanalysisCountdown: (seconds) => `Повторный анализ начнётся после рекламы. ${seconds} с`,
  reanalyzing: "Повторный анализ",
  goodsEyebrow: "Используйте результат по максимуму",
  goodsSectionTitle: "Сувенирная продукция с именем",
  goodsItemTitle: "Корейская именная печать",
  goodsItemSub: "(деревянная печать · доставка по всему миру)",
  goodsItemDescription:
    "Ваше имя на хангыле, вырезанное на традиционной корейской именной печати (тоджан), с доставкой к вам — международная доставка включена.",
  goodsButton: "Заказать именную печать",
  editInput: "Изменить данные",
  home: "Главная",
  headerAdLabel: "Баннерная реклама над результатом хангылем",
  headerCaption: "Результат анализа произношения хангылем",
  loading: "Загружаем ваш результат.",
  analysisDone: "Анализ завершён",
  resultHeading: "Ваше имя в записи хангылем по произношению",
  emptyTitle: "Не удалось загрузить результат.",
  emptyDescription:
    "Этот результат доступен только во вкладке браузера, в которой выполнялся анализ.",
  backToInput: "Вернуться к экрану ввода",
  storageSaved: "Этот результат анализа сохранён в вашем аккаунте.",
  storageSkipped:
    "Этот результат анализа не был сохранён на нашем сервере. Пожалуйста, проверьте всё необходимое, прежде чем покинуть этот экран.",
  storageFailed:
    "Анализ завершён, но сохранить его в вашем аккаунте не удалось. Проверьте результат и запустите анализ ещё раз.",
};

const ar: ResultCopy = {
  reanalysisError: "تعذّر إكمال إعادة تحليل النطق.",
  reanalysisErrorGeneric: "حدث خطأ أثناء إعادة التحليل.",
  reanalysisEyebrow: "هل يبدو مختلفًا عن النطق الفعلي؟",
  reanalysisTitle: "إعادة التحليل مع إرشاد النطق",
  reanalysisDescription:
    "أدخل النطق الفعلي بشكل أكثر تحديدًا وسنعيد التحليل بنفس الاسم واللغة والدولة.",
  hintLabel: "إرشاد النطق",
  hintPlaceholder: "مثال: يُنطق مثل سا-را أح-مد",
  reanalysisCountdown: (seconds) => `سنعيد التحليل بعد الإعلان. ${seconds} ثانية`,
  reanalyzing: "جارٍ إعادة التحليل",
  goodsEyebrow: "استفد أكثر من نتيجتك",
  goodsSectionTitle: "منتجات تذكارية بالاسم",
  goodsItemTitle: "ختم الاسم الكوري",
  goodsItemSub: "(ختم خشبي · شحن عالمي)",
  goodsItemDescription:
    "اسمك بالهانغول منقوش على ختم الاسم الكوري التقليدي (دوجانغ) ويُشحن إليك — الشحن الدولي مشمول.",
  goodsButton: "اطلب ختم الاسم",
  editInput: "تعديل البيانات",
  home: "الرئيسية",
  headerAdLabel: "إعلان الشريط العلوي لنتيجة الهانغل",
  headerCaption: "نتيجة تحليل النطق بالهانغل",
  loading: "جارٍ تحميل نتيجتك.",
  analysisDone: "اكتمل التحليل",
  resultHeading: "اسمك مكتوبًا بالهانغل حسب النطق",
  emptyTitle: "تعذّر تحميل نتيجتك.",
  emptyDescription:
    "هذه النتيجة متاحة فقط في علامة تبويب المتصفح التي أجريت فيها التحليل.",
  backToInput: "العودة إلى شاشة الإدخال",
  storageSaved: "تم حفظ نتيجة هذا التحليل في حسابك.",
  storageSkipped:
    "لم يتم حفظ نتيجة هذا التحليل على خادمنا. يُرجى مراجعة كل ما تحتاجه قبل مغادرة هذه الشاشة.",
  storageFailed:
    "اكتمل التحليل، لكن فشل حفظه في حسابك. راجع النتيجة ثم أعد إجراء التحليل.",
};

const tr: ResultCopy = {
  reanalysisError: "Telaffuzun yeniden analizi tamamlanamadı.",
  reanalysisErrorGeneric: "Yeniden analiz sırasında bir hata oluştu.",
  reanalysisEyebrow: "Gerçek telaffuzdan farklı mı geliyor?",
  reanalysisTitle: "Telaffuz ipucuyla yeniden analiz et",
  reanalysisDescription:
    "Gerçek telaffuzu daha ayrıntılı girin; aynı isim, dil ve ülke koşullarıyla yeniden analiz edelim.",
  hintLabel: "Telaffuz ipucu",
  hintPlaceholder: "Örn.: E-lif Yıl-maz gibi okunur",
  reanalysisCountdown: (seconds) => `Reklamdan sonra yeniden analiz edeceğiz. ${seconds} sn`,
  reanalyzing: "Yeniden analiz ediliyor",
  goodsEyebrow: "Sonucunuzdan daha fazla yararlanın",
  goodsSectionTitle: "İsimli hediyelik ürünler",
  goodsItemTitle: "Kore isim mührü",
  goodsItemSub: "(ahşap mühür · dünya geneline kargo)",
  goodsItemDescription:
    "Hangul isminiz geleneksel Kore isim mührüne (dojang) kazınır ve size gönderilir — uluslararası kargo dahildir.",
  goodsButton: "İsim mührü sipariş et",
  editInput: "Girdiyi düzenle",
  home: "Ana sayfa",
  headerAdLabel: "Hangıl sonucu üst banner reklamı",
  headerCaption: "Hangıl telaffuz analizi sonucu",
  loading: "Sonucunuz yükleniyor.",
  analysisDone: "Analiz tamamlandı",
  resultHeading: "İsminizin Hangıl telaffuz yazımı",
  emptyTitle: "Sonucunuz yüklenemedi.",
  emptyDescription:
    "Bu sonuç yalnızca analizi çalıştırdığınız tarayıcı sekmesinde görüntülenebilir.",
  backToInput: "Giriş ekranına dön",
  storageSaved: "Bu analiz sonucu hesabınıza kaydedildi.",
  storageSkipped:
    "Bu analiz sonucu sunucumuza kaydedilmedi. Bu ekrandan ayrılmadan önce lütfen ihtiyaç duyduğunuz her şeyi kontrol edin.",
  storageFailed:
    "Analiz tamamlandı ancak hesabınıza kaydetme başarısız oldu. Sonucu kontrol edin ve analizi yeniden çalıştırın.",
};

const fil: ResultCopy = {
  reanalysisError: "Hindi namin natapos ang muling pagsusuri ng bigkas.",
  reanalysisErrorGeneric: "May naganap na error habang muling nagsusuri.",
  reanalysisEyebrow: "Iba ba ito sa aktwal na bigkas?",
  reanalysisTitle: "Suriing muli gamit ang pahiwatig sa bigkas",
  reanalysisDescription:
    "Ilagay nang mas espesipiko ang aktwal na bigkas at susuriin naming muli gamit ang parehong pangalan, wika, at bansa.",
  hintLabel: "Pahiwatig sa bigkas",
  hintPlaceholder: "Hal.: binibigkas na parang Hu-wan De-la Cruz",
  reanalysisCountdown: (seconds) => `Susuriin muli pagkatapos ng ad. ${seconds} segundo`,
  reanalyzing: "Muling sinusuri",
  goodsEyebrow: "Sulitin pa ang iyong resulta",
  goodsSectionTitle: "Merchandise ng pangalan",
  goodsItemTitle: "Korean name stamp",
  goodsItemSub: "(kahoy na selyo · ipinapadala sa buong mundo)",
  goodsItemDescription:
    "Ipauukit ang iyong pangalang Hangul sa tradisyonal na Korean name stamp (dojang) at ipapadala sa iyo — kasama na ang international shipping.",
  goodsButton: "Umorder ng name stamp",
  editInput: "I-edit ang input",
  home: "Home",
  headerAdLabel: "Banner ad sa itaas ng resulta ng Hangul",
  headerCaption: "Resulta ng pagsusuri ng bigkas sa Hangul",
  loading: "Nilo-load ang iyong resulta.",
  analysisDone: "Tapos na ang pagsusuri",
  resultHeading: "Ang iyong pangalan sa bigkas na Hangul",
  emptyTitle: "Hindi namin ma-load ang iyong resulta.",
  emptyDescription:
    "Makikita lamang ang resultang ito sa browser tab kung saan mo pinatakbo ang pagsusuri.",
  backToInput: "Bumalik sa input screen",
  storageSaved: "Na-save ang resulta ng pagsusuring ito sa iyong account.",
  storageSkipped:
    "Hindi na-save sa aming server ang resulta ng pagsusuring ito. Pakisuri ang anumang kailangan mo bago umalis sa screen na ito.",
  storageFailed:
    "Natapos ang pagsusuri, ngunit nabigo ang pag-save sa iyong account. Suriin ang resulta, pagkatapos ay patakbuhing muli ang pagsusuri.",
};

const uz: ResultCopy = {
  reanalysisError: "Talaffuzni qayta tahlil qilishni yakunlay olmadik.",
  reanalysisErrorGeneric: "Qayta tahlil paytida xatolik yuz berdi.",
  reanalysisEyebrow: "Haqiqiy talaffuzdan farq qiladimi?",
  reanalysisTitle: "Talaffuz ko‘rsatmasi bilan qayta tahlil qilish",
  reanalysisDescription:
    "Haqiqiy talaffuzni aniqroq kiriting — o‘sha ism, til va mamlakat bilan qayta tahlil qilamiz.",
  hintLabel: "Talaffuz ko‘rsatmasi",
  hintPlaceholder: "Masalan: A-ziz Ka-ri-mov kabi o‘qiladi",
  reanalysisCountdown: (seconds) => `Reklamadan so‘ng qayta tahlil qilamiz. ${seconds} soniya`,
  reanalyzing: "Qayta tahlil qilinmoqda",
  goodsEyebrow: "Natijangizdan ko‘proq foydalaning",
  goodsSectionTitle: "Ismli esdalik buyumlari",
  goodsItemTitle: "Koreys ism muhri",
  goodsItemSub: "(yog‘och muhr · butun dunyoga yetkazib berish)",
  goodsItemDescription:
    "Hangul ismingiz an’anaviy koreys ism muhriga (dojang) o‘yib tushiriladi va sizga yetkaziladi — xalqaro yetkazib berish narxga kiritilgan.",
  goodsButton: "Ism muhriga buyurtma berish",
  editInput: "Ma’lumotlarni tahrirlash",
  home: "Bosh sahifa",
  headerAdLabel: "Hangul natijasi yuqorisidagi banner reklama",
  headerCaption: "Hangul talaffuz tahlili natijasi",
  loading: "Natijangiz yuklanmoqda.",
  analysisDone: "Tahlil yakunlandi",
  resultHeading: "Ismingizning Hangul talaffuz yozuvi",
  emptyTitle: "Natijangizni yuklay olmadik.",
  emptyDescription:
    "Bu natija faqat tahlil o‘tkazilgan brauzer tabida ko‘rinadi.",
  backToInput: "Kiritish oynasiga qaytish",
  storageSaved: "Ushbu tahlil natijasi hisobingizga saqlandi.",
  storageSkipped:
    "Ushbu tahlil natijasi serverimizga saqlanmadi. Bu oynadan chiqishdan oldin kerakli narsalarni ko‘rib chiqing.",
  storageFailed:
    "Tahlil yakunlandi, lekin uni hisobingizga saqlab bo‘lmadi. Natijani ko‘rib chiqing va tahlilni qayta ishga tushiring.",
};

const mn: ResultCopy = {
  reanalysisError: "Дуудлагын дахин шинжилгээг дуусгаж чадсангүй.",
  reanalysisErrorGeneric: "Дахин шинжлэх явцад алдаа гарлаа.",
  reanalysisEyebrow: "Бодит дуудлагаас өөр сонсогдож байна уу?",
  reanalysisTitle: "Дуудлагын зөвлөмжтэйгөөр дахин шинжлэх",
  reanalysisDescription:
    "Бодит дуудлагаа илүү тодорхой оруулбал ижил нэр, хэл, улсын нөхцөлөөр дахин шинжилнэ.",
  hintLabel: "Дуудлагын зөвлөмж",
  hintPlaceholder: "Жишээ: Бат-Эр-дэ-нэ гэж дуудагдана",
  reanalysisCountdown: (seconds) => `Зар үзсэний дараа дахин шинжилнэ. ${seconds} секунд`,
  reanalyzing: "Дахин шинжилж байна",
  goodsEyebrow: "Үр дүнгээ илүү ашиглаарай",
  goodsSectionTitle: "Нэртэй дурсгалын бүтээгдэхүүн",
  goodsItemTitle: "Солонгос нэрийн тамга",
  goodsItemSub: "(модон тамга · дэлхий даяар хүргэлт)",
  goodsItemDescription:
    "Таны хангыль нэрийг уламжлалт солонгос нэрийн тамганд (тожан) сийлж, танд хүргэнэ — олон улсын хүргэлт багтсан.",
  goodsButton: "Нэрийн тамга захиалах",
  editInput: "Оруулсан мэдээллийг засах",
  home: "Нүүр",
  headerAdLabel: "Хангыль үр дүнгийн дээд баннер зар",
  headerCaption: "Хангыль дуудлагын шинжилгээний үр дүн",
  loading: "Таны үр дүнг ачаалж байна.",
  analysisDone: "Шинжилгээ дууслаа",
  resultHeading: "Таны нэрийн хангыль дуудлагын бичиглэл",
  emptyTitle: "Таны үр дүнг ачаалж чадсангүй.",
  emptyDescription:
    "Энэ үр дүнг зөвхөн шинжилгээ хийсэн хөтчийн таб дээр л үзэх боломжтой.",
  backToInput: "Мэдээлэл оруулах дэлгэц рүү буцах",
  storageSaved: "Энэ шинжилгээний үр дүнг таны бүртгэлд хадгаллаа.",
  storageSkipped:
    "Энэ шинжилгээний үр дүнг серверт хадгалаагүй. Энэ дэлгэцээс гарахаасаа өмнө шаардлагатай зүйлээ шалгана уу.",
  storageFailed:
    "Шинжилгээ дууссан ч бүртгэлд хадгалж чадсангүй. Үр дүнг шалгаад дахин шинжилгээ хийнэ үү.",
};

const hi: ResultCopy = {
  reanalysisError: "हम उच्चारण का पुनर्विश्लेषण पूरा नहीं कर सके।",
  reanalysisErrorGeneric: "पुनर्विश्लेषण के दौरान एक त्रुटि हुई।",
  reanalysisEyebrow: "क्या यह असली उच्चारण से अलग लगता है?",
  reanalysisTitle: "उच्चारण संकेत के साथ फिर से विश्लेषण करें",
  reanalysisDescription:
    "असली उच्चारण को और स्पष्ट रूप से दर्ज करें, हम उसी नाम, भाषा और देश के साथ फिर से विश्लेषण करेंगे।",
  hintLabel: "उच्चारण संकेत",
  hintPlaceholder: "जैसे: रा-हुल शर-मा जैसा उच्चारण",
  reanalysisCountdown: (seconds) => `विज्ञापन के बाद फिर से विश्लेषण करेंगे। ${seconds} सेकंड`,
  reanalyzing: "फिर से विश्लेषण हो रहा है",
  goodsEyebrow: "अपने परिणाम का और लाभ उठाएँ",
  goodsSectionTitle: "नाम मर्चेंडाइज़",
  goodsItemTitle: "कोरियाई नाम मुहर",
  goodsItemSub: "(लकड़ी की मुहर · दुनिया भर में शिपिंग)",
  goodsItemDescription:
    "आपका हांगुल नाम पारंपरिक कोरियाई नाम मुहर (दोजांग) पर उकेरा जाएगा और आप तक पहुँचाया जाएगा — अंतरराष्ट्रीय शिपिंग शामिल।",
  goodsButton: "नाम मुहर ऑर्डर करें",
  editInput: "इनपुट संपादित करें",
  home: "होम",
  headerAdLabel: "हांगुल परिणाम शीर्ष बैनर विज्ञापन",
  headerCaption: "हांगुल उच्चारण विश्लेषण परिणाम",
  loading: "आपका परिणाम लोड हो रहा है।",
  analysisDone: "विश्लेषण पूर्ण",
  resultHeading: "हांगुल उच्चारण में आपका नाम",
  emptyTitle: "हम आपका परिणाम लोड नहीं कर सके।",
  emptyDescription:
    "यह परिणाम केवल उसी ब्राउज़र टैब में उपलब्ध है जिसमें आपने विश्लेषण चलाया था।",
  backToInput: "इनपुट स्क्रीन पर वापस जाएँ",
  storageSaved: "यह विश्लेषण परिणाम आपके खाते में सहेज लिया गया है।",
  storageSkipped:
    "यह विश्लेषण परिणाम हमारे सर्वर पर सहेजा नहीं गया है। इस स्क्रीन से बाहर जाने से पहले कृपया जो भी आपको चाहिए उसे देख लें।",
  storageFailed:
    "विश्लेषण पूरा हो गया, लेकिन आपके खाते में सहेजना विफल रहा। परिणाम देखें, फिर विश्लेषण दोबारा चलाएँ।",
};

const km: ResultCopy = {
  reanalysisError: "យើងមិនអាចបញ្ចប់ការវិភាគការបញ្ចេញសំឡេងឡើងវិញបានទេ។",
  reanalysisErrorGeneric: "មានបញ្ហាកើតឡើងពេលវិភាគឡើងវិញ។",
  reanalysisEyebrow: "តើវាខុសពីការបញ្ចេញសំឡេងពិតមែនទេ?",
  reanalysisTitle: "វិភាគឡើងវិញដោយប្រើគន្លឹះបញ្ចេញសំឡេង",
  reanalysisDescription:
    "បញ្ចូលរបៀបបញ្ចេញសំឡេងពិតឱ្យបានច្បាស់ជាងមុន ហើយយើងនឹងវិភាគឡើងវិញដោយប្រើឈ្មោះ ភាសា និងប្រទេសដដែល។",
  hintLabel: "គន្លឹះបញ្ចេញសំឡេង",
  hintPlaceholder: "ឧ. បញ្ចេញសំឡេងស្រដៀង សុខ ចន្ថា",
  reanalysisCountdown: (seconds) => `យើងនឹងវិភាគឡើងវិញបន្ទាប់ពីការផ្សាយពាណិជ្ជកម្ម។ ${seconds} វិនាទី`,
  reanalyzing: "កំពុងវិភាគឡើងវិញ",
  goodsEyebrow: "ប្រើប្រាស់លទ្ធផលរបស់អ្នកបន្ថែមទៀត",
  goodsSectionTitle: "ផលិតផលអនុស្សាវរីយ៍តាមឈ្មោះ",
  goodsItemTitle: "ត្រាឈ្មោះកូរ៉េ",
  goodsItemSub: "(ត្រាឈើ · ដឹកជញ្ជូនទូទាំងពិភពលោក)",
  goodsItemDescription:
    "ឈ្មោះហាំងកឹលរបស់អ្នកត្រូវបានឆ្លាក់លើត្រាឈ្មោះប្រពៃណីកូរ៉េ (dojang) ហើយដឹកជញ្ជូនដល់អ្នក — រួមបញ្ចូលថ្លៃដឹកជញ្ជូនអន្តរជាតិ។",
  goodsButton: "បញ្ជាទិញត្រាឈ្មោះ",
  editInput: "កែសម្រួលការបញ្ចូល",
  home: "ទំព័រដើម",
  headerAdLabel: "ផ្ទាំងផ្សាយពាណិជ្ជកម្មខាងលើលទ្ធផលហាន់គុល",
  headerCaption: "លទ្ធផលវិភាគការបញ្ចេញសំឡេងហាន់គុល",
  loading: "កំពុងផ្ទុកលទ្ធផលរបស់អ្នក។",
  analysisDone: "ការវិភាគបានបញ្ចប់",
  resultHeading: "ឈ្មោះរបស់អ្នកសរសេរតាមសំឡេងជាហាន់គុល",
  emptyTitle: "យើងមិនអាចផ្ទុកលទ្ធផលរបស់អ្នកបានទេ។",
  emptyDescription:
    "លទ្ធផលនេះអាចមើលបានតែក្នុងផ្ទាំងកម្មវិធីរុករកដែលអ្នកបានដំណើរការការវិភាគប៉ុណ្ណោះ។",
  backToInput: "ត្រឡប់ទៅអេក្រង់បញ្ចូលវិញ",
  storageSaved: "លទ្ធផលវិភាគនេះត្រូវបានរក្សាទុកក្នុងគណនីរបស់អ្នក។",
  storageSkipped:
    "លទ្ធផលវិភាគនេះមិនត្រូវបានរក្សាទុកនៅលើម៉ាស៊ីនមេរបស់យើងទេ។ សូមពិនិត្យមើលអ្វីដែលអ្នកត្រូវការ មុនពេលចាកចេញពីអេក្រង់នេះ។",
  storageFailed:
    "ការវិភាគបានបញ្ចប់ ប៉ុន្តែការរក្សាទុកទៅគណនីរបស់អ្នកបានបរាជ័យ។ សូមពិនិត្យលទ្ធផល រួចដំណើរការវិភាគម្តងទៀត។",
};

const kk: ResultCopy = {
  reanalysisError: "Дыбысталуды қайта талдауды аяқтай алмадық.",
  reanalysisErrorGeneric: "Қайта талдау кезінде қате орын алды.",
  reanalysisEyebrow: "Нақты дыбысталудан өзгеше ме?",
  reanalysisTitle: "Дыбысталу нұсқауымен қайта талдау",
  reanalysisDescription:
    "Нақты дыбысталуды нақтырақ енгізіңіз — сол есім, тіл және ел бойынша қайта талдаймыз.",
  hintLabel: "Дыбысталу нұсқауы",
  hintPlaceholder: "Мысалы: Ай-дос Се-рік-ұлы сияқты оқылады",
  reanalysisCountdown: (seconds) => `Жарнамадан кейін қайта талдаймыз. ${seconds} секунд`,
  reanalyzing: "Қайта талдануда",
  goodsEyebrow: "Нәтижеңізді көбірек пайдаланыңыз",
  goodsSectionTitle: "Есімі бар кәдесый өнімдер",
  goodsItemTitle: "Корей есім мөрі",
  goodsItemSub: "(ағаш мөр · бүкіл әлемге жеткізу)",
  goodsItemDescription:
    "Хангыль есіміңіз дәстүрлі корей есім мөріне (тоджан) ойылып, сізге жеткізіледі — халықаралық жеткізу құны қосылған.",
  goodsButton: "Есім мөріне тапсырыс беру",
  editInput: "Енгізілген деректерді өзгерту",
  home: "Басты бет",
  headerAdLabel: "Хангыль нәтижесінің жоғарғы баннерлік жарнамасы",
  headerCaption: "Хангыль дыбысталу талдауының нәтижесі",
  loading: "Нәтижеңіз жүктелуде.",
  analysisDone: "Талдау аяқталды",
  resultHeading: "Есіміңіздің хангыль дыбысталу жазылымы",
  emptyTitle: "Нәтижеңізді жүктей алмадық.",
  emptyDescription:
    "Бұл нәтиже тек талдау жүргізілген браузер қойындысында ғана көрінеді.",
  backToInput: "Енгізу экранына оралу",
  storageSaved: "Бұл талдау нәтижесі есептік жазбаңызға сақталды.",
  storageSkipped:
    "Бұл талдау нәтижесі серверімізге сақталмады. Осы экраннан шықпас бұрын қажет нәрсенің бәрін тексеріп алыңыз.",
  storageFailed:
    "Талдау аяқталды, бірақ есептік жазбаңызға сақтау сәтсіз аяқталды. Нәтижені тексеріп, талдауды қайта жүргізіңіз.",
};

const ms: ResultCopy = {
  reanalysisError: "Kami tidak dapat menyelesaikan analisis semula sebutan.",
  reanalysisErrorGeneric: "Ralat berlaku semasa menganalisis semula.",
  reanalysisEyebrow: "Bunyinya berbeza daripada sebutan sebenar?",
  reanalysisTitle: "Analisis semula dengan petunjuk sebutan",
  reanalysisDescription:
    "Masukkan sebutan sebenar dengan lebih terperinci, dan kami akan menganalisis semula dengan nama, bahasa dan negara yang sama.",
  hintLabel: "Petunjuk sebutan",
  hintPlaceholder: "Contoh: disebut seperti Ah-mad Fai-zal",
  reanalysisCountdown: (seconds) => `Kami akan menganalisis semula selepas iklan. ${seconds} saat`,
  reanalyzing: "Menganalisis semula",
  goodsEyebrow: "Manfaatkan hasil anda dengan lebih lanjut",
  goodsSectionTitle: "Barangan cenderamata nama",
  goodsItemTitle: "Cop nama Korea",
  goodsItemSub: "(cop kayu · penghantaran ke seluruh dunia)",
  goodsItemDescription:
    "Nama Hangul pilihan anda diukir pada cop nama tradisional Korea (dojang) dan dihantar kepada anda — penghantaran antarabangsa termasuk.",
  goodsButton: "Tempah cop nama",
  editInput: "Sunting input",
  home: "Laman utama",
  headerAdLabel: "Iklan sepanduk atas hasil Hangul",
  headerCaption: "Hasil sebutan Hangul",
  loading: "Memuatkan hasil anda.",
  analysisDone: "Analisis selesai",
  resultHeading: "Nama anda dalam sebutan Hangul",
  emptyTitle: "Kami tidak dapat memuatkan hasil anda.",
  emptyDescription:
    "Hasil ini hanya tersedia dalam tab pelayar tempat anda menjalankan analisis.",
  backToInput: "Kembali ke skrin input",
  storageSaved: "Hasil analisis ini telah disimpan ke akaun anda.",
  storageSkipped:
    "Hasil analisis ini tidak disimpan ke pelayan kami. Sila semak apa-apa yang anda perlukan sebelum meninggalkan skrin ini.",
  storageFailed:
    "Analisis selesai, tetapi penyimpanan ke akaun anda gagal. Semak hasilnya, kemudian jalankan analisis sekali lagi.",
};

const pl: ResultCopy = {
  reanalysisError: "Nie udało się dokończyć ponownej analizy wymowy.",
  reanalysisErrorGeneric: "Podczas ponownej analizy wystąpił błąd.",
  reanalysisEyebrow: "Brzmi inaczej niż prawdziwa wymowa?",
  reanalysisTitle: "Przeanalizuj ponownie ze wskazówką wymowy",
  reanalysisDescription:
    "Podaj dokładniej rzeczywistą wymowę, a przeanalizujemy ponownie z tym samym imieniem, językiem i krajem.",
  hintLabel: "Wskazówka wymowy",
  hintPlaceholder: "np. brzmi jak Jan Ko-wal-ski",
  reanalysisCountdown: (seconds) => `Ponowna analiza rozpocznie się po reklamie. ${seconds} s`,
  reanalyzing: "Trwa ponowna analiza",
  goodsEyebrow: "Wykorzystaj swój wynik jeszcze bardziej",
  goodsSectionTitle: "Gadżety z imieniem",
  goodsItemTitle: "Koreańska pieczęć imienna",
  goodsItemSub: "(drewniana pieczęć · wysyłka na cały świat)",
  goodsItemDescription:
    "Twoje imię w hangul wygrawerowane na tradycyjnej koreańskiej pieczęci imiennej (dojang), dostarczone do ciebie — wysyłka międzynarodowa w cenie.",
  goodsButton: "Zamów pieczęć imienną",
  editInput: "Edytuj dane",
  home: "Strona główna",
  headerAdLabel: "Reklama banerowa nad wynikiem hangul",
  headerCaption: "Wynik wymowy w hangul",
  loading: "Wczytywanie wyniku.",
  analysisDone: "Analiza zakończona",
  resultHeading: "Twoje imię w wymowie hangul",
  emptyTitle: "Nie udało się wczytać wyniku.",
  emptyDescription:
    "Ten wynik jest dostępny tylko w karcie przeglądarki, w której uruchomiono analizę.",
  backToInput: "Wróć do ekranu wprowadzania",
  storageSaved: "Ten wynik analizy został zapisany na Twoim koncie.",
  storageSkipped:
    "Ten wynik analizy nie został zapisany na naszym serwerze. Sprawdź wszystko, czego potrzebujesz, zanim opuścisz ten ekran.",
  storageFailed:
    "Analiza się zakończyła, ale zapis na Twoim koncie się nie powiódł. Sprawdź wynik, a następnie uruchom analizę ponownie.",
};

// ko/en/vi/th/ja/zh/id/de/es/fr/it/pt/ru/ar/tr/fil/uz/mn/hi/km/kk/ms/pl을 작성했고, 나머지 로케일은 영어로 폴백한다.
const resultCopies: Partial<Record<Locale, ResultCopy>> = { ko, en, vi, th, ja, zh, id, de, es, fr, it, pt, ru, ar, tr, fil, uz, mn, hi, km, kk, ms, pl };

export function getResultCopy(locale: Locale): ResultCopy {
  return resultCopies[locale] ?? en;
}
