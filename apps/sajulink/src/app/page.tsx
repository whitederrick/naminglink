import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { absoluteUrl, buildAlternates, localeUrl, ogImageFor } from "@/lib/seo";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  // ?lang=이 있을 때만 그 언어판을 canonical로 삼는다. 없으면 헤더로 언어가 갈리는
  // x-default 자리라 로케일 없는 주소가 canonical이다.
  const requested = isLocale(lang) ? lang : null;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);
  // 히어로 제목에는 줄바꿈이 들어 있다(화면에서 whitespace-pre-line으로 쓴다).
  // 검색 결과 제목에 개행이 그대로 나가면 안 되므로 공백으로 편다.
  const title = `${dictionary.landing.title.replace(/\s*\n\s*/g, " ")} | ${dictionary.brand}`;

  return {
    // 루트는 template("%s | Inyeon-Link")이 브랜드를 또 붙이면 안 되므로 absolute로 둔다.
    title: { absolute: title },
    description: dictionary.landing.subtitle,
    alternates: buildAlternates("/", requested),
    openGraph: {
      type: "website",
      siteName: "Inyeon-Link",
      title,
      description: dictionary.landing.subtitle,
      url: requested ? localeUrl("/", requested) : absoluteUrl("/"),
      locale,
      images: [ogImageFor(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dictionary.landing.subtitle,
      images: [ogImageFor(locale).url],
    },
  };
}

// 레이아웃 문법은 naminglink 랜딩과 같다: 화면을 채우는 어두운 히어로 + 그 위 흰 글씨 +
// 반투명 유리 카드. 배경만 사진이 아니라 그라데이션이다(globals.css의 .hero-backdrop).
export default async function LandingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const dictionary = getDictionary(locale);
  const { landing } = dictionary;
  // 주소로 언어를 고른 방문자에게만 로케일을 붙여 따라다니게 한다. `?lang=`도 `/ko/`도
  // 없이 들어온 사람은 헤더로 언어가 갈리는 x-default 자리에 그대로 머물러야 한다.
  const linkLocale = lang ? locale : null;

  return (
    <main className="min-h-screen bg-background">
      <section className="hero-backdrop relative flex min-h-[100svh] flex-col overflow-hidden lg:h-[100svh] lg:min-h-0">
        <Image
          src="/images/landing-hero.png"
          alt=""
          fill
          priority
          aria-hidden
          className="object-cover object-[62%_center] sm:object-center"
          sizes="100vw"
        />
        <div aria-hidden className="hero-texture absolute inset-0" />
        {/* naminglink와 같은 좌→우 어둠 그라데이션. 왼쪽 글씨의 대비를 확보한다. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,12,15,0.9),rgba(18,12,15,0.55),rgba(18,12,15,0.15))]"
        />

        {/* 언어 단추가 6개 + 더보기로 늘어 좁은 화면에서는 한 줄에 못 담는다. flex+justify-between
            이면 브랜드 옆에서 접히며 로고를 밀어내므로, naminglink 헤더처럼 grid로 두어 좁은
            화면에서는 아래 줄로 내려가게 한다. z-40은 '더보기' 목록이 히어로 카드 위에 덮이도록.
            **열 정의와 좌우 여백·간격은 아래 본문 그리드와 반드시 같아야 한다.** 그래야 언어
            선택기가 오른쪽 카드 열 바로 위에 정확히 얹히고 '더보기' 목록도 그 폭 안에서 열린다
            (naminglink 랜딩이 헤더와 본문에 같은 grid-cols를 쓰는 이유다). 한쪽만 고치지 말 것. */}
        <header className="relative z-40 mx-auto grid w-full max-w-7xl gap-3 px-5 py-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(34rem,34rem)] lg:items-center lg:gap-5 lg:px-10">
          {/* 로고 묶음의 크기·간격은 naminglink 헤더와 같은 값이다(22px / 18px, gap-3, gap-1). */}
          <Link href={localePath("/", linkLocale)} className="flex items-center gap-3">
            <BrandMark />
            <span className="flex flex-col gap-1">
              <span className="text-[22px] font-semibold leading-none">
                Inyeon-Link
              </span>
              <span
                className="text-[18px] font-medium leading-none text-white/78"
                style={{ fontFamily: "Gungsuh, 'Noto Serif KR', serif" }}
              >
                인연 - 링크
              </span>
            </span>
          </Link>
          <LocaleSwitcher current={locale} tone="onDark" className="lg:justify-end" />
        </header>

        {/* 오른쪽 열은 **544px(34rem)** 이다. naminglink는 600px인데 그쪽 카드는 제목 한 줄 + 2줄
            말줄임이라 넓어야 하고, 이 화면은 3단계 설명과 미저장 안내가 문단이라 사정이 다르다.
            600px에서는 한국어 외 언어에서 왼쪽 제목이 밀렸고, 480px까지 줄였더니 이번엔 카드가
            너무 좁았다. 그 사이 값이다. **헤더 grid-cols도 같은 값이어야 한다.**
            위쪽 여백을 크게 잡는 이유는 따로 있다 — '더보기'를 열면 17개짜리 목록이 z-50으로 떠서
            오른쪽 카드를 덮으므로 그 자리를 미리 비워 둔다(목록은 6열 3줄 ≈ 7rem).
            naminglink 랜딩이 같은 이유로 lg:pt-[clamp(6.5rem,14vh,8.5rem)]을 쓴다. */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 pb-4 pt-4 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(34rem,34rem)] lg:px-10 lg:pt-[clamp(6.5rem,14vh,8.5rem)]">
          {/* 칸 높이를 고정하지 않는다. naminglink는 lg에서 grid-rows로 칸을 고정하지만, 이 서비스는
              문구가 짧아 같은 값을 쓰면 칸마다 빈 공간이 남아 버튼이 아래로 밀려난다. 여백은
              각 요소의 margin으로만 잡아 제목·부제·버튼이 붙어 읽히게 한다. */}
          <section className="min-w-0 max-w-3xl text-left">
            {/* naminglink 랜딩에는 여기 배지 상자(`copy.badge`)가 있지만 이 화면에서는 뺐다.
                한 줄짜리 상자라 언어마다 폭·줄 수가 크게 달라져, 그 아래 제목·부제·버튼이 통째로
                밀리는 것이 23개 언어에서 가장 큰 불일치 요인이었다. 문구 자체는 `dictionary.tagline`에
                그대로 있고 PDF 리포트(`lib/pdf/compatibility-report.tsx`)가 계속 쓴다 — 키를 지우지 말 것.
                제목→부제→버튼 간격은 전부 mt-5(20px)로 같다. 하나만 바꾸면 리듬이 깨진다. */}
            <h1 className="break-keep-all max-w-[18ch] whitespace-pre-line text-[2.125rem] font-semibold leading-[1.08] [text-wrap:balance] sm:max-w-[20ch] sm:text-[2.75rem] lg:max-w-[20ch] xl:text-[3.25rem]">
              {landing.title}
            </h1>
            {/* 사전의 \n을 그대로 줄바꿈으로 쓴다. 문장 단위로 끊어야 읽기 쉬운데, 어디서
                끊을지는 언어마다 달라 화면이 아니라 사전이 정하는 게 맞다. */}
            <p className="break-keep-all mt-5 max-w-2xl whitespace-pre-line text-base leading-7 text-white/82 [text-wrap:pretty] sm:text-lg">
              {landing.subtitle}
            </p>
            {/* 메뉴가 둘이다. 사주 궁합은 상대의 생년월일을 알아야 하고, 인연의 결은 나
                하나로 본다 — 후자가 문턱이 낮으므로 나란히 두어 둘 다 첫 화면에서 보이게 한다.
                채운 버튼 하나 + 테두리 버튼 하나로 두어 무엇이 이 서비스의 본 상품인지는
                그대로 남긴다. */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={localePath("/compatibility", linkLocale)}
                className="inline-block rounded-full bg-white px-7 py-3.5 text-lg font-semibold text-[#3d1327] shadow-sm transition hover:bg-white/90"
              >
                {landing.cta}
              </Link>
              <Link
                href={localePath("/affinity", linkLocale)}
                className="inline-block rounded-full border border-white/45 bg-white/12 px-7 py-3.5 text-lg font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/20"
              >
                {dictionary.affinity.menu}
              </Link>
            </div>
          </section>

          {/* 계산 방식과 미저장 안내를 히어로 안에서 바로 보여 준다. naminglink가 서비스 카드를
              두는 자리이고 정렬·카드 간격(gap-2)도 그쪽과 같다. 폭만 34rem으로 좁다(위 참조).
              lg:mt-6은 naminglink 카드 위에 있는 안내 문구 한 줄(servicePickerHint, 약 24px)
              자리를 대신한다. 그래야 두 서비스의 첫 박스가 같은 높이에서 시작한다.
              content-start가 없으면 그리드 행이 남는 높이만큼 늘어나고, 그 늘어난 높이가 각 박스로
              들어가 아래쪽에 빈 공간이 생긴다. naminglink는 카드 높이가 h-[7.25rem]로 고정이라
              이 문제가 없지만 여기 박스는 내용에 따라 높이가 달라지므로 내용에 붙여야 한다. */}
          <div className="grid w-full min-w-0 max-w-[34rem] content-start justify-self-end gap-2 lg:mt-6">
            {/* 카드 안쪽 여백: 좌우 20px · 상하 10px. 글자 크기(14px/24px)는 읽기 위해 건드리지
                않고 여백으로만 줄인다. 제목↔목록 4px, 단계 사이 4px.
                **미저장 안내 카드(PrivacyNotice)도 같은 값이어야 한다** — 두 장이 나란히 놓여
                여백이 다르면 바로 눈에 띈다. */}
            <section className="rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 shadow-sm backdrop-blur">
              <h2 className="text-base font-semibold">{landing.howTitle}</h2>
              <ol className="mt-1 space-y-1">
                {landing.steps.map((step, index) => (
                  <li key={step} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-semibold"
                    >
                      {index + 1}
                    </span>
                    <p className="break-keep-all text-sm leading-6 text-white/80">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <PrivacyNotice locale={locale} tone="onDark" />
          </div>
        </div>

        {/* naminglink와 같다 — 푸터를 히어로 섹션 안에 두어 데스크탑에서 한 화면에 담는다.
            여백 값도 naminglink 랜딩과 **같아야 한다**(`!pb-0 !pt-2`). 한쪽만 바꾸면 두 서비스를
            오갈 때 푸터가 들썩인다. 예전에는 naminglink만 `!pb-4`였는데, 그때는 그쪽 정책 링크가
            5개(로그인 포함)라 줄이 더 접혔기 때문이다. 지금은 양쪽 다 4개라 그 전제가 없다. */}
        <SiteFooter
          locale={locale}
          tone="light"
          className="relative bottom-1 z-10 shrink-0 bg-black/25 !pb-0 !pt-2 backdrop-blur"
        />
      </section>
    </main>
  );
}
