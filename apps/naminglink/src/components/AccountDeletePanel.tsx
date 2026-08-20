"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { isLocaleCode } from "@/lib/locale-codes";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/services";

/**
 * 회원 탈퇴.
 *
 * 개인정보처리방침 §7의 삭제 요구권을 화면에서 바로 행사하는 경로다. 지금까지는 고객센터
 * 메일로만 접수했는데 그 주소가 아직 "확인 예정"이라 사실상 창구가 없었다.
 *
 * **두 단계로 나눈다.**
 *
 *   1) 탈퇴를 누르면 등록된 메일로 인증 링크를 보낸다(로그인과 같은 매직링크).
 *   2) 그 링크로 돌아오면 `?confirm=delete`가 붙고, 그때만 최종 삭제 버튼이 뜬다.
 *
 * 세션 쿠키만 탈취해도 계정이 지워지는 상황을 막기 위해서다. 로그인 자체가 이미 매직링크라
 * 이용자에게 새로운 절차도 아니다.
 *
 * 문구는 이 파일이 직접 들고 있다. 기존 `i18n-auth`의 23개 로케일 블록을 모두 건드리는
 * 대신, 이 기능에만 쓰는 말을 한곳에 모아 둔다.
 */

type DeleteCopy = {
  title: string;
  /** 무엇이 지워지고 무엇이 남는지. 법정 보관 대상을 반드시 함께 적는다. */
  warning: string;
  requestButton: string;
  sending: string;
  sent: string;
  confirmTitle: string;
  confirmButton: string;
  deleting: string;
  done: string;
  failed: string;
  cancel: string;
};

export const COPY: Record<Locale, DeleteCopy> = {
  ko: {
    title: "회원 탈퇴",
    warning:
      "탈퇴하면 저장한 작명 결과가 함께 삭제되며 복구할 수 없습니다. 결제·주문 거래기록은 관계 법령에 따라 회원 정보와 분리해 보관됩니다.",
    requestButton: "탈퇴 확인 메일 받기",
    sending: "메일을 보내는 중…",
    sent: "확인 메일을 보냈습니다. 메일의 링크를 눌러 탈퇴를 완료해 주세요.",
    confirmTitle: "본인 확인이 끝났습니다. 아래를 누르면 계정이 삭제됩니다.",
    confirmButton: "계정을 영구 삭제합니다",
    deleting: "삭제하는 중…",
    done: "탈퇴가 완료되었습니다. 이용해 주셔서 감사합니다.",
    failed: "탈퇴를 처리하지 못했습니다. 잠시 후 다시 시도해 주세요.",
    cancel: "취소",
  },
  en: {
    title: "Delete account",
    warning:
      "Deleting your account also deletes your saved naming results, and this cannot be undone. Payment and order records are kept separately from your account as required by law.",
    requestButton: "Send confirmation email",
    sending: "Sending email…",
    sent: "We sent a confirmation email. Open the link in it to finish deleting your account.",
    confirmTitle: "Your identity is confirmed. The button below permanently deletes your account.",
    confirmButton: "Permanently delete my account",
    deleting: "Deleting…",
    done: "Your account has been deleted. Thank you for using our service.",
    failed: "We could not delete your account. Please try again shortly.",
    cancel: "Cancel",
  },
  ja: {
    title: "退会",
    warning:
      "退会すると保存した命名結果も削除され、復元できません。決済・注文の記録は法令に基づき会員情報と分けて保管されます。",
    requestButton: "確認メールを受け取る",
    sending: "メールを送信中…",
    sent: "確認メールを送信しました。メール内のリンクから退会を完了してください。",
    confirmTitle: "本人確認が完了しました。下のボタンでアカウントを削除します。",
    confirmButton: "アカウントを完全に削除する",
    deleting: "削除中…",
    done: "退会が完了しました。ご利用ありがとうございました。",
    failed: "退会を処理できませんでした。しばらくしてからもう一度お試しください。",
    cancel: "キャンセル",
  },
  zh: {
    title: "注销账户",
    warning:
      "注销后，已保存的取名结果将一并删除且无法恢复。支付与订单记录将依法与会员信息分开保存。",
    requestButton: "接收确认邮件",
    sending: "正在发送邮件…",
    sent: "已发送确认邮件。请点击邮件中的链接完成注销。",
    confirmTitle: "身份验证已完成。点击下方按钮将永久删除账户。",
    confirmButton: "永久删除我的账户",
    deleting: "正在删除…",
    done: "注销已完成。感谢您的使用。",
    failed: "无法完成注销，请稍后再试。",
    cancel: "取消",
  },
  de: {
    title: "Konto löschen",
    warning:
      "Mit dem Löschen des Kontos werden auch Ihre gespeicherten Namensergebnisse gelöscht; dies lässt sich nicht rückgängig machen. Zahlungs- und Bestelldaten werden gesetzlich vorgeschrieben getrennt vom Konto aufbewahrt.",
    requestButton: "Bestätigungs-E-Mail erhalten",
    sending: "E-Mail wird gesendet…",
    sent: "Wir haben eine Bestätigungs-E-Mail gesendet. Öffnen Sie den Link darin, um die Löschung abzuschließen.",
    confirmTitle: "Ihre Identität ist bestätigt. Die Schaltfläche unten löscht Ihr Konto endgültig.",
    confirmButton: "Mein Konto endgültig löschen",
    deleting: "Wird gelöscht…",
    done: "Ihr Konto wurde gelöscht. Danke, dass Sie unseren Dienst genutzt haben.",
    failed: "Das Konto konnte nicht gelöscht werden. Bitte versuchen Sie es später erneut.",
    cancel: "Abbrechen",
  },
  es: {
    title: "Eliminar cuenta",
    warning:
      "Al eliminar la cuenta también se eliminan los resultados de nombres guardados, y no se puede deshacer. Los registros de pago y pedidos se conservan por ley, separados de tu cuenta.",
    requestButton: "Recibir correo de confirmación",
    sending: "Enviando correo…",
    sent: "Te enviamos un correo de confirmación. Abre el enlace para completar la eliminación.",
    confirmTitle: "Identidad confirmada. El botón de abajo elimina tu cuenta de forma permanente.",
    confirmButton: "Eliminar mi cuenta permanentemente",
    deleting: "Eliminando…",
    done: "Tu cuenta ha sido eliminada. Gracias por usar nuestro servicio.",
    failed: "No pudimos eliminar tu cuenta. Inténtalo de nuevo en unos minutos.",
    cancel: "Cancelar",
  },
  fr: {
    title: "Supprimer le compte",
    warning:
      "La suppression du compte efface aussi vos résultats de noms enregistrés, sans possibilité de restauration. Les enregistrements de paiement et de commande sont conservés séparément, comme l'exige la loi.",
    requestButton: "Recevoir l'e-mail de confirmation",
    sending: "Envoi de l'e-mail…",
    sent: "Nous avons envoyé un e-mail de confirmation. Ouvrez le lien pour finaliser la suppression.",
    confirmTitle: "Votre identité est confirmée. Le bouton ci-dessous supprime définitivement votre compte.",
    confirmButton: "Supprimer définitivement mon compte",
    deleting: "Suppression…",
    done: "Votre compte a été supprimé. Merci d'avoir utilisé notre service.",
    failed: "Nous n'avons pas pu supprimer votre compte. Réessayez dans un instant.",
    cancel: "Annuler",
  },
  it: {
    title: "Elimina account",
    warning:
      "Eliminando l'account vengono cancellati anche i risultati salvati, senza possibilità di recupero. I dati di pagamento e ordine sono conservati per legge, separati dall'account.",
    requestButton: "Ricevi l'email di conferma",
    sending: "Invio dell'email…",
    sent: "Abbiamo inviato un'email di conferma. Apri il link per completare l'eliminazione.",
    confirmTitle: "Identità confermata. Il pulsante qui sotto elimina definitivamente l'account.",
    confirmButton: "Elimina definitivamente il mio account",
    deleting: "Eliminazione…",
    done: "Il tuo account è stato eliminato. Grazie per aver usato il servizio.",
    failed: "Non siamo riusciti a eliminare l'account. Riprova tra poco.",
    cancel: "Annulla",
  },
  pt: {
    title: "Excluir conta",
    warning:
      "Excluir a conta também apaga os resultados de nomes salvos, sem possibilidade de recuperação. Registros de pagamento e pedidos são mantidos por lei, separados da conta.",
    requestButton: "Receber e-mail de confirmação",
    sending: "Enviando e-mail…",
    sent: "Enviamos um e-mail de confirmação. Abra o link para concluir a exclusão.",
    confirmTitle: "Identidade confirmada. O botão abaixo exclui sua conta permanentemente.",
    confirmButton: "Excluir minha conta permanentemente",
    deleting: "Excluindo…",
    done: "Sua conta foi excluída. Obrigado por usar nosso serviço.",
    failed: "Não foi possível excluir a conta. Tente novamente em instantes.",
    cancel: "Cancelar",
  },
  vi: {
    title: "Xóa tài khoản",
    warning:
      "Xóa tài khoản cũng xóa các kết quả đặt tên đã lưu và không thể khôi phục. Hồ sơ thanh toán và đơn hàng được lưu riêng theo quy định pháp luật.",
    requestButton: "Nhận email xác nhận",
    sending: "Đang gửi email…",
    sent: "Chúng tôi đã gửi email xác nhận. Mở liên kết trong email để hoàn tất việc xóa.",
    confirmTitle: "Đã xác minh danh tính. Nút bên dưới sẽ xóa vĩnh viễn tài khoản.",
    confirmButton: "Xóa vĩnh viễn tài khoản của tôi",
    deleting: "Đang xóa…",
    done: "Tài khoản đã được xóa. Cảm ơn bạn đã sử dụng dịch vụ.",
    failed: "Không thể xóa tài khoản. Vui lòng thử lại sau.",
    cancel: "Hủy",
  },
  th: {
    title: "ลบบัญชี",
    warning:
      "การลบบัญชีจะลบผลการตั้งชื่อที่บันทึกไว้ด้วย และไม่สามารถกู้คืนได้ บันทึกการชำระเงินและคำสั่งซื้อจะถูกเก็บแยกไว้ตามที่กฎหมายกำหนด",
    requestButton: "รับอีเมลยืนยัน",
    sending: "กำลังส่งอีเมล…",
    sent: "เราส่งอีเมลยืนยันแล้ว เปิดลิงก์ในอีเมลเพื่อลบบัญชีให้เสร็จสิ้น",
    confirmTitle: "ยืนยันตัวตนแล้ว ปุ่มด้านล่างจะลบบัญชีอย่างถาวร",
    confirmButton: "ลบบัญชีของฉันอย่างถาวร",
    deleting: "กำลังลบ…",
    done: "ลบบัญชีเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ",
    failed: "ไม่สามารถลบบัญชีได้ กรุณาลองใหม่อีกครั้ง",
    cancel: "ยกเลิก",
  },
  id: {
    title: "Hapus akun",
    warning:
      "Menghapus akun juga menghapus hasil penamaan yang tersimpan dan tidak dapat dipulihkan. Catatan pembayaran dan pesanan disimpan terpisah sesuai ketentuan hukum.",
    requestButton: "Terima email konfirmasi",
    sending: "Mengirim email…",
    sent: "Kami mengirim email konfirmasi. Buka tautan di dalamnya untuk menyelesaikan penghapusan.",
    confirmTitle: "Identitas terverifikasi. Tombol di bawah menghapus akun secara permanen.",
    confirmButton: "Hapus akun saya secara permanen",
    deleting: "Menghapus…",
    done: "Akun Anda telah dihapus. Terima kasih telah menggunakan layanan kami.",
    failed: "Kami tidak dapat menghapus akun. Silakan coba lagi nanti.",
    cancel: "Batal",
  },
  ru: {
    title: "Удалить аккаунт",
    warning:
      "Удаление аккаунта также удалит сохранённые результаты подбора имён без возможности восстановления. Записи о платежах и заказах хранятся отдельно в соответствии с законом.",
    requestButton: "Получить письмо с подтверждением",
    sending: "Отправка письма…",
    sent: "Мы отправили письмо с подтверждением. Откройте ссылку в нём, чтобы завершить удаление.",
    confirmTitle: "Личность подтверждена. Кнопка ниже безвозвратно удалит аккаунт.",
    confirmButton: "Удалить мой аккаунт навсегда",
    deleting: "Удаление…",
    done: "Аккаунт удалён. Спасибо, что пользовались сервисом.",
    failed: "Не удалось удалить аккаунт. Повторите попытку позже.",
    cancel: "Отмена",
  },
  ar: {
    title: "حذف الحساب",
    warning:
      "حذف الحساب يحذف أيضًا نتائج التسمية المحفوظة ولا يمكن التراجع عنه. تُحفظ سجلات الدفع والطلبات بشكل منفصل وفقًا للقانون.",
    requestButton: "استلام بريد التأكيد",
    sending: "جارٍ إرسال البريد…",
    sent: "أرسلنا بريد تأكيد. افتح الرابط الموجود فيه لإتمام الحذف.",
    confirmTitle: "تم التحقق من هويتك. الزر أدناه يحذف حسابك نهائيًا.",
    confirmButton: "احذف حسابي نهائيًا",
    deleting: "جارٍ الحذف…",
    done: "تم حذف حسابك. شكرًا لاستخدامك خدمتنا.",
    failed: "تعذّر حذف الحساب. حاول مرة أخرى بعد قليل.",
    cancel: "إلغاء",
  },
  fil: {
    title: "Burahin ang account",
    warning:
      "Ang pagbura ng account ay bubura rin sa mga naka-save na resulta ng pagpapangalan, at hindi na ito maibabalik. Ang mga tala ng bayad at order ay itinatago nang hiwalay ayon sa batas.",
    requestButton: "Tumanggap ng confirmation email",
    sending: "Ipinapadala ang email…",
    sent: "Nagpadala kami ng confirmation email. Buksan ang link para tapusin ang pagbura.",
    confirmTitle: "Nakumpirma ang iyong pagkakakilanlan. Buburahin ng button sa ibaba ang account nang permanente.",
    confirmButton: "Permanenteng burahin ang aking account",
    deleting: "Binubura…",
    done: "Nabura na ang iyong account. Salamat sa paggamit ng aming serbisyo.",
    failed: "Hindi namin nabura ang account. Subukan muli mamaya.",
    cancel: "Kanselahin",
  },
  uz: {
    title: "Hisobni o'chirish",
    warning:
      "Hisobni o'chirsangiz, saqlangan ism natijalari ham o'chiriladi va tiklab bo'lmaydi. To'lov va buyurtma yozuvlari qonunga muvofiq alohida saqlanadi.",
    requestButton: "Tasdiqlash xatini olish",
    sending: "Xat yuborilmoqda…",
    sent: "Tasdiqlash xatini yubordik. O'chirishni yakunlash uchun xatdagi havolani oching.",
    confirmTitle: "Shaxsingiz tasdiqlandi. Quyidagi tugma hisobni butunlay o'chiradi.",
    confirmButton: "Hisobimni butunlay o'chirish",
    deleting: "O'chirilmoqda…",
    done: "Hisobingiz o'chirildi. Xizmatimizdan foydalanganingiz uchun rahmat.",
    failed: "Hisobni o'chira olmadik. Birozdan so'ng qayta urinib ko'ring.",
    cancel: "Bekor qilish",
  },
  mn: {
    title: "Бүртгэл устгах",
    warning:
      "Бүртгэлээ устгавал хадгалсан нэрийн үр дүн хамт устах бөгөөд сэргээх боломжгүй. Төлбөр, захиалгын бүртгэлийг хуулийн дагуу тусад нь хадгална.",
    requestButton: "Баталгаажуулах и-мэйл авах",
    sending: "И-мэйл илгээж байна…",
    sent: "Баталгаажуулах и-мэйл илгээлээ. Доторх холбоосыг дарж устгалыг дуусгана уу.",
    confirmTitle: "Таны хэн болох нь баталгаажлаа. Доорх товч бүртгэлийг бүрмөсөн устгана.",
    confirmButton: "Бүртгэлээ бүрмөсөн устгах",
    deleting: "Устгаж байна…",
    done: "Бүртгэл устлаа. Үйлчилгээг ашигласанд баярлалаа.",
    failed: "Бүртгэлийг устгаж чадсангүй. Дараа дахин оролдоно уу.",
    cancel: "Цуцлах",
  },
  hi: {
    title: "खाता हटाएं",
    warning:
      "खाता हटाने पर सहेजे गए नामकरण परिणाम भी हट जाते हैं और उन्हें वापस नहीं लाया जा सकता। भुगतान और ऑर्डर रिकॉर्ड कानून के अनुसार खाते से अलग रखे जाते हैं।",
    requestButton: "पुष्टिकरण ईमेल प्राप्त करें",
    sending: "ईमेल भेजा जा रहा है…",
    sent: "हमने पुष्टिकरण ईमेल भेजा है। हटाने की प्रक्रिया पूरी करने के लिए उसमें दिए लिंक को खोलें।",
    confirmTitle: "आपकी पहचान सत्यापित हो गई। नीचे का बटन खाता स्थायी रूप से हटा देगा।",
    confirmButton: "मेरा खाता स्थायी रूप से हटाएं",
    deleting: "हटाया जा रहा है…",
    done: "आपका खाता हटा दिया गया है। हमारी सेवा का उपयोग करने के लिए धन्यवाद।",
    failed: "हम खाता नहीं हटा सके। कृपया थोड़ी देर बाद पुनः प्रयास करें।",
    cancel: "रद्द करें",
  },
  tr: {
    title: "Hesabı sil",
    warning:
      "Hesabınızı silmek kayıtlı isim sonuçlarınızı da siler ve bu geri alınamaz. Ödeme ve sipariş kayıtları yasa gereği hesabınızdan ayrı olarak saklanır.",
    requestButton: "Onay e-postası al",
    sending: "E-posta gönderiliyor…",
    sent: "Onay e-postası gönderdik. Silme işlemini tamamlamak için içindeki bağlantıyı açın.",
    confirmTitle: "Kimliğiniz doğrulandı. Aşağıdaki düğme hesabınızı kalıcı olarak siler.",
    confirmButton: "Hesabımı kalıcı olarak sil",
    deleting: "Siliniyor…",
    done: "Hesabınız silindi. Hizmetimizi kullandığınız için teşekkürler.",
    failed: "Hesabı silemedik. Lütfen kısa süre sonra tekrar deneyin.",
    cancel: "İptal",
  },
  km: {
    title: "លុបគណនី",
    warning:
      "ការលុបគណនីនឹងលុបលទ្ធផលដាក់ឈ្មោះដែលបានរក្សាទុកផងដែរ ហើយមិនអាចស្ដារវិញបានទេ។ កំណត់ត្រាការទូទាត់និងការបញ្ជាទិញត្រូវរក្សាទុកដោយឡែកតាមច្បាប់។",
    requestButton: "ទទួលអ៊ីមែលបញ្ជាក់",
    sending: "កំពុងផ្ញើអ៊ីមែល…",
    sent: "យើងបានផ្ញើអ៊ីមែលបញ្ជាក់។ សូមបើកតំណក្នុងអ៊ីមែលដើម្បីបញ្ចប់ការលុប។",
    confirmTitle: "អត្តសញ្ញាណរបស់អ្នកត្រូវបានផ្ទៀងផ្ទាត់។ ប៊ូតុងខាងក្រោមនឹងលុបគណនីជាអចិន្ត្រៃយ៍។",
    confirmButton: "លុបគណនីរបស់ខ្ញុំជាអចិន្ត្រៃយ៍",
    deleting: "កំពុងលុប…",
    done: "គណនីរបស់អ្នកត្រូវបានលុប។ សូមអរគុណដែលបានប្រើសេវាកម្មរបស់យើង។",
    failed: "យើងមិនអាចលុបគណនីបានទេ។ សូមព្យាយាមម្ដងទៀតនៅពេលក្រោយ។",
    cancel: "បោះបង់",
  },
  ms: {
    title: "Padam akaun",
    warning:
      "Memadam akaun turut memadam hasil penamaan yang disimpan dan tidak boleh dipulihkan. Rekod pembayaran dan pesanan disimpan berasingan mengikut undang-undang.",
    requestButton: "Terima e-mel pengesahan",
    sending: "Menghantar e-mel…",
    sent: "Kami telah menghantar e-mel pengesahan. Buka pautan di dalamnya untuk menyelesaikan pemadaman.",
    confirmTitle: "Identiti anda disahkan. Butang di bawah akan memadam akaun secara kekal.",
    confirmButton: "Padam akaun saya secara kekal",
    deleting: "Memadam…",
    done: "Akaun anda telah dipadam. Terima kasih kerana menggunakan perkhidmatan kami.",
    failed: "Kami tidak dapat memadam akaun. Sila cuba lagi sebentar nanti.",
    cancel: "Batal",
  },
  kk: {
    title: "Аккаунтты жою",
    warning:
      "Аккаунтты жойсаңыз, сақталған есім нәтижелері де жойылады және оны қалпына келтіру мүмкін емес. Төлем мен тапсырыс жазбалары заңға сәйкес бөлек сақталады.",
    requestButton: "Растау хатын алу",
    sending: "Хат жіберілуде…",
    sent: "Растау хатын жібердік. Жоюды аяқтау үшін хаттағы сілтемені ашыңыз.",
    confirmTitle: "Жеке басыңыз расталды. Төмендегі түйме аккаунтты біржола жояды.",
    confirmButton: "Аккаунтымды біржола жою",
    deleting: "Жойылуда…",
    done: "Аккаунтыңыз жойылды. Қызметімізді пайдаланғаныңыз үшін рақмет.",
    failed: "Аккаунтты жоя алмадық. Кейінірек қайталап көріңіз.",
    cancel: "Бас тарту",
  },
  pl: {
    title: "Usuń konto",
    warning:
      "Usunięcie konta usuwa także zapisane wyniki doboru imion i nie można tego cofnąć. Zapisy płatności i zamówień są przechowywane oddzielnie zgodnie z przepisami.",
    requestButton: "Otrzymaj e-mail potwierdzający",
    sending: "Wysyłanie e-maila…",
    sent: "Wysłaliśmy e-mail potwierdzający. Otwórz link w wiadomości, aby dokończyć usuwanie.",
    confirmTitle: "Tożsamość potwierdzona. Przycisk poniżej trwale usuwa konto.",
    confirmButton: "Trwale usuń moje konto",
    deleting: "Usuwanie…",
    done: "Twoje konto zostało usunięte. Dziękujemy za korzystanie z serwisu.",
    failed: "Nie udało się usunąć konta. Spróbuj ponownie za chwilę.",
    cancel: "Anuluj",
  },
};

type Stage = "idle" | "sending" | "sent" | "confirm" | "deleting" | "done" | "failed";

export function AccountDeletePanel({
  email,
  locale,
}: {
  email: string;
  locale?: string;
}) {
  const copy = COPY[isLocaleCode(locale) ? locale : "ko"] ?? COPY.ko;
  // 인증 링크로 돌아오면(`?confirm=delete`) 최종 삭제 단계로 연다. 링크를 거치지 않으면 이
  // 단계에 닿을 수 없다. 주소를 읽는 것뿐이라 effect가 아니라 훅으로 받는다.
  const confirmedByEmail = useSearchParams().get("confirm") === "delete";
  const [stage, setStage] = useState<Stage>(confirmedByEmail ? "confirm" : "idle");
  const [open, setOpen] = useState(confirmedByEmail);

  async function requestConfirmation() {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    setStage("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}${localePath("/account", isLocaleCode(locale) ? locale : "ko")}?confirm=delete`,
      },
    });
    setStage(error ? "failed" : "sent");
  }

  async function deleteAccount() {
    setStage("deleting");
    try {
      const supabase = getSupabaseBrowserClient();
      // 계정 API는 세션 쿠키가 아니라 Bearer 토큰으로 인증한다(AccountDashboard와 같은 방식).
      const token = (await supabase?.auth.getSession())?.data.session?.access_token;
      if (!token) {
        setStage("failed");
        return;
      }
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        setStage("failed");
        return;
      }
      setStage("done");
      // 계정이 사라졌으므로 세션도 정리하고 홈으로 보낸다.
      await getSupabaseBrowserClient()?.auth.signOut();
      window.setTimeout(() => {
        window.location.href = localePath("/", isLocaleCode(locale) ? locale : "ko");
      }, 2500);
    } catch {
      setStage("failed");
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-fit text-sm text-muted underline decoration-line underline-offset-4 transition hover:text-brand-rose"
      >
        {copy.title}
      </button>
    );
  }

  return (
    <section className="grid gap-3 rounded-lg border border-brand-rose/30 bg-brand-rose/5 p-4">
      <p className="flex items-start gap-2 text-sm font-semibold text-brand-rose">
        <AlertTriangle aria-hidden="true" size={17} className="mt-0.5 shrink-0" />
        {copy.title}
      </p>
      <p className="text-sm leading-6 text-muted">{copy.warning}</p>

      {stage === "sent" ? <p className="text-sm text-brand-teal">{copy.sent}</p> : null}
      {stage === "failed" ? <p className="text-sm text-brand-rose">{copy.failed}</p> : null}
      {stage === "done" ? <p className="text-sm text-brand-teal">{copy.done}</p> : null}
      {stage === "confirm" ? (
        <p className="text-sm font-semibold text-foreground">{copy.confirmTitle}</p>
      ) : null}

      {stage === "done" ? null : (
        <div className="flex flex-wrap items-center gap-3">
          {stage === "confirm" || stage === "deleting" ? (
            <button
              type="button"
              onClick={() => void deleteAccount()}
              disabled={stage === "deleting"}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-rose px-4 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {stage === "deleting" ? copy.deleting : copy.confirmButton}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => void requestConfirmation()}
              disabled={stage === "sending"}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-brand-rose px-4 text-sm font-semibold text-brand-rose transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {stage === "sending" ? copy.sending : copy.requestButton}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setStage("idle");
            }}
            className="text-sm text-muted underline decoration-line underline-offset-4"
          >
            {copy.cancel}
          </button>
        </div>
      )}
    </section>
  );
}
