import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { StampOrderForm } from "@/components/StampOrderForm";
import {
  stampOrderableFrom,
  stampRegionForLocale,
  stampSettingCode,
  STAMP_MODEL_CODES,
  type StampModelCode,
  type StampRegion,
} from "@/lib/goods-products";
import { getDocPage } from "@/lib/doc-content";
import { getAuthCopy } from "@/lib/i18n-auth";
import { stampBackTarget } from "@/lib/stamp-back";
import { routeLocale } from "@/lib/route-locale";
import { isLocaleCode, type LocaleCode } from "@/lib/locale-codes";
import { getResultCopy } from "@/lib/i18n-result";
import { getPurchaseDisplay } from "@/lib/purchase";
import { buildPageMetadata } from "@/lib/seo";
import { localePath } from "@/lib/locale-path";

/**
 * **`?name=`을 서버가 읽어 신청서를 채운다.** 그래서 이 화면은 미리 만들어 두지 못한다.
 * 값이 없는 주소(색인되는 쪽)만 정적으로 만들려면 채우는 일을 브라우저로 옮겨야 하는데,
 * 이 화면은 살 수 있는 모델의 **실시간 금액**도 함께 읽으므로 그것만으로는 부족하다.
 */
type StampOrderPageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ name?: string; from?: string; rid?: string }>;
};

/**
 * 주문을 받지 않는 동안의 안내. **한 문장만 둔다** — 상태를 되풀이해 적으면 화면이 「준비 중」
 * 게시판이 된다. 값이 아니라 사실만 적고, 언제 열린다는 약속은 하지 않는다.
 */
const stampPausedNotice: Record<LocaleCode, string> = {
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

/**
 * 제목·설명을 **로케일별로** 낸다 (2026-08-10).
 *
 * 예전에는 23개 언어판이 전부 `"이름 도장 신청 · Name Stamp"` 한 벌을 썼다. 본문은 번역되는데
 * **검색 결과에 나오는 제목만 한·영 병기**로 나가는 상태였다 — 일본어로 검색한 사람에게
 * 한국어 제목이 보인다.
 *
 * **여기서 새 문구를 짓지 않는다.** 결과 화면의 굿즈 문구(`goodsItemTitle`·
 * `goodsItemDescription`)가 이미 23개 언어로 있고, 가리키는 것도 정확히 이 화면이다.
 * 화면에 보이는 말과 검색 결과의 말이 어긋나면 그것대로 이탈로 이어진다.
 */
export async function generateMetadata({
  params,
}: StampOrderPageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const copy = getResultCopy(locale);
  return buildPageMetadata({
    path: "/stamp-order",
    locale,
    requested: locale,
    title: copy.goodsItemTitle,
    description: copy.goodsItemDescription,
  });
}

// 이름 도장 주문 페이지. 로케일로 지역을 정한다:
// ko → 국내(토스페이먼츠·₩) / 그 외 → 글로벌(포트원 페이팔·US$, 국제 배송 포함).
export default async function StampOrderPage({ params, searchParams }: StampOrderPageProps) {
  const locale = routeLocale((await params).locale);
  const query = await searchParams;
  /**
   * **ko는 여기까지 오지 않는다** (2026-08-19). 이 화면은 글로벌 전용이 되어 `/ko/stamp-order`가
   * `/en/stamp-order`로 301 된다(`lib/route-locales.ts`의 `GLOBAL_ONLY_GOODS_PATHS`). 국내
   * 판매를 하지 않기로 한 사업 결정이고, 토스페이먼츠에 「실물 배송 상품 없음」이라고 회신했다.
   *
   * 그래도 갈래를 지우지 않는다 — 판매를 재개하는 날 목록에서 경로 하나를 빼면 되돌아온다.
   * 갈래를 지우면 그날 화면을 다시 만들어야 한다.
   */
  const region: StampRegion = stampRegionForLocale(locale);
  const initialName = String(query?.name ?? "").trim().slice(0, 8);

  // 모델별 표시 가격. **살 수 없으면 null이다**(판매 중지이거나 결제 수단 미준비).
  // **모델마다 값이 다르므로 셋을 모두 읽는다.** 하나만 읽어 머리말에 쓰면 고른 모델과 어긋난다.
  //
  // 예전에는 조회가 실패하면 정적 폴백 가격을 그렸다. 그래서 상품을 내려도 화면에는 ₩39,000이
  // 그대로 보였다 — 팔지 않는 상품의 정가를 계속 노출하는 셈이었다. 이제 null을 내려보내고
  // 화면이 가격을 감춘다.
  const modelPrices = Object.fromEntries(
    await Promise.all(
      STAMP_MODEL_CODES.map(async (code) => [
        code,
        await getPurchaseDisplay(stampSettingCode(code, region)),
      ] as const),
    ),
  ) as Record<StampModelCode, string | null>;

  const heading =
    region === "global"
      ? { eyebrow: "Name goods", title: "Order a Korean name stamp", back: "Home" }
      : { eyebrow: "이름 굿즈", title: "이름 도장 신청", back: "홈으로" };

  /**
   * **돌아가기는 온 곳으로 보낸다**(2026-08-20). 예전에는 무조건 홈이라, 결과 화면의 도장
   * 카드로 들어온 사람이 돌아가면 결과를 잃었다. 「이전 화면으로」는 `i18n-auth`가 23로케일로
   * 이미 갖고 있어 새 번역이 필요 없다.
   */
  const back = stampBackTarget(locale, query?.from, query?.rid, {
    previous: getAuthCopy(locale).back,
    home: heading.back,
  });

  /**
   * **한 모델도 팔 수 없으면 신청서를 내지 않는다** (2026-08-11).
   *
   * 이 주소는 sitemap에 실려 있어 크롤러와 이용자가 직접 들어온다. 그런데 지금까지는 살 수
   * 없는 상태에서도 **이름·주소·동의를 다 받는 신청서를 그리고 마지막 단추만 "결제 기능
   * 준비 중입니다"**로 잠갔다. 끝까지 적고 나서야 못 산다는 것을 알게 되는 화면이다.
   *
   * 주소는 그대로 둔다(sitemap·색인 구조를 이번에 건드리지 않는다). 대신 상품 설명은 남기고
   * **현재 상태를 한 번만 사실대로** 적은 뒤 문의 창구로 잇는다. 판매가 열리면 저절로 신청서가
   * 돌아온다 — 조건은 `getPurchaseDisplay`(상품 enabled AND 결제 수단) 하나다.
   */
  // 판정은 `stampOrderableFrom` 하나다 — 결과 화면 카드도 같은 규칙을 본다(2026-08-20).
  // 여기서 규칙을 옮겨 적으면 판정이 두 벌이 되고, 그게 이번에 고친 결함이다.
  const orderable = stampOrderableFrom(Object.values(modelPrices));
  const contactDoc = getDocPage(locale, "contact");
  const goodsCopy = getResultCopy(locale);
  const notice = isLocaleCode(locale) ? stampPausedNotice[locale] : stampPausedNotice.en;

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-3xl gap-6 px-5 py-6 sm:px-8">
        <header className="grid gap-3 border-b border-line pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={back.href}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              {back.label}
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-teal">{heading.eyebrow}</p>
            <h1 className="mt-1 text-2xl font-semibold">{heading.title}</h1>
          </div>
        </header>
        {orderable ? (
          <StampOrderForm
            region={region}
            modelPrices={modelPrices}
            locale={locale}
            initialName={/^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(initialName) ? initialName : undefined}
          />
        ) : (
          <div className="grid gap-4">
            {/* 상품 설명은 그대로 남긴다 — 이 주소가 무엇에 대한 화면인지는 여전히 유효하다.
                문구는 결과 화면 굿즈 안내와 **같은 사전**에서 온다(23개 언어). */}
            <p className="break-keep text-[15px] leading-7 text-muted">
              {goodsCopy.goodsItemDescription}
            </p>
            <div className="grid gap-2 rounded-lg border border-line bg-surface px-5 py-4">
              <p className="break-keep text-sm leading-7">{notice}</p>
              <Link
                href={localePath("/contact", locale)}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-teal underline underline-offset-4"
              >
                {contactDoc.title}
              </Link>
            </div>
          </div>
        )}
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
