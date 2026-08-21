import type { LocaleCode } from "@/lib/locale-codes";

/**
 * 주문을 받지 않는 동안의 안내. **한 문장만 둔다** — 상태를 되풀이해 적으면 화면이 「준비 중」
 * 게시판이 된다. 값이 아니라 사실만 적고, 언제 열린다는 약속은 하지 않는다.
 *
 * **왜 `lib`에 있나** (2026-08-20). 원래 `app/[locale]/stamp-order/page.tsx` 안에 있었다.
 * 권위 인벤토리(`scripts/locale-inventory.ts`)는 로케일 표를 **실제로 불러서** 잎을 세는데,
 * 라우트 파일은 Next가 허용하는 export가 정해져 있어 표를 내보낼 수 없다. 화면에 나가는
 * 로케일 표는 **불러올 수 있는 자리**에 두어야 세어진다 — 세지 못하는 표는 검수 대상에서
 * 조용히 빠진다.
 */
export const stampPausedNotice: Record<LocaleCode, string> = {
  ko: "현재 이름 도장 주문은 받지 않고 있습니다. 준비되면 이 화면에서 바로 신청하실 수 있습니다.",
  en: "We are not taking name stamp orders at the moment. You'll be able to order here once it opens.",
  ja: "現在、名前はんこのご注文は承っておりません。受付を開始しましたらこの画面からお申し込みいただけます。",
  zh: "目前暂不接受姓名印章订单。开放后可直接在本页面下单。",
  de: "Derzeit nehmen wir keine Bestellungen für Namensstempel an. Sobald es so weit ist, können Sie hier bestellen.",
  es: "Por ahora no aceptamos pedidos de sellos de nombre. Podrás pedirlo aquí cuando se abra.",
  fr: "Nous n'acceptons pas de commandes de sceaux de nom pour le moment. Vous pourrez commander ici dès l'ouverture.",
  it: "Al momento non accettiamo ordini per il sigillo con il nome. Potrai ordinarlo qui appena sarà disponibile.",
  pt: "No momento não aceitamos pedidos do carimbo de nome. Você poderá pedir aqui assim que abrirmos.",
  vi: "Hiện chúng tôi chưa nhận đặt con dấu tên. Bạn có thể đặt ngay tại trang này khi mở nhận đơn.",
  th: "ขณะนี้เรายังไม่เปิดรับคำสั่งซื้อตราประทับชื่อ เมื่อเปิดรับแล้วคุณสั่งซื้อได้จากหน้านี้",
  id: "Saat ini kami belum menerima pesanan stempel nama. Anda bisa memesan di halaman ini setelah dibuka.",
  ru: "Сейчас мы не принимаем заказы на именную печать. Когда приём откроется, заказать можно будет на этой странице.",
  ar: "لا نستقبل حاليًا طلبات ختم الاسم. سيمكنك الطلب من هذه الصفحة عند فتح الطلبات.",
  fil: "Sa ngayon ay hindi pa kami tumatanggap ng order para sa name stamp. Makakapag-order ka rito kapag nagbukas na.",
  uz: "Hozircha ism muhri buyurtmalarini qabul qilmayapmiz. Ochilganda shu sahifada buyurtma berishingiz mumkin.",
  mn: "Одоогоор нэрийн тамганы захиалга авахгүй байна. Нээгдмэгц энэ хуудаснаас захиалах боломжтой.",
  hi: "फ़िलहाल हम नाम की मुहर के ऑर्डर नहीं ले रहे हैं। शुरू होने पर आप इसी पेज से ऑर्डर कर सकेंगे।",
  tr: "Şu anda isim mührü siparişi almıyoruz. Açıldığında bu sayfadan sipariş verebilirsiniz.",
  km: "បច្ចុប្បន្ន យើងមិនទាន់ទទួលការបញ្ជាទិញត្រាឈ្មោះទេ។ នៅពេលបើក អ្នកអាចបញ្ជាទិញនៅទំព័រនេះបាន។",
  ms: "Buat masa ini kami tidak menerima tempahan cop nama. Anda boleh menempah di halaman ini apabila dibuka.",
  kk: "Қазір атау мөрі тапсырыстарын қабылдамаймыз. Ашылған кезде осы беттен тапсырыс бере аласыз.",
  pl: "Na razie nie przyjmujemy zamówień na pieczęć z imieniem. Gdy ruszymy, zamówisz ją na tej stronie.",
};
