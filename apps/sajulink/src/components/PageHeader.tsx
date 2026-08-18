import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { getDictionary, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

/**
 * 랜딩 외 페이지의 머리글 — **가로형 배너 한 자리와 이동 버튼**이 전부다.
 *
 * **브랜드 로고와 이름을 뺐다(사용자 결정).** 화면을 열자마자 로고와 언어 단추 여섯 개가 먼저
 * 눈에 들고 정작 이 화면이 무엇인지는 그 아래에서 시작했다. 돌아갈 길은 '홈' 버튼이 대신하고,
 * 언어는 제목 줄 오른쪽 끝으로 옮겼다(`PageTitle` → `LocaleSelect`).
 *
 * **naminglink와 같은 구성이다.** 그쪽 입력 화면(`ServiceShell`)은 배너 아래에 `홈` + 서비스
 * 메뉴를, 결과 화면(`HanjaMeaningResultPage` 등)은 `입력 수정` + `홈`을 둔다. 두 서비스를 오가는
 * 사용자가 같은 자리에서 같은 것을 찾게 하려는 것이라, 한쪽만 바꾸면 어긋난다.
 *
 * **배너는 한 자리뿐이다.** 예전에는 여기 최상단 배너와 제목 옆 `header` 배너가 따로 있었는데,
 * 입력 화면은 폼 하나뿐이라 상단·제목 옆·하단으로 광고가 셋이 되어 콘텐츠보다 많아 보였다
 * (2026-07-30 기록에 "심사에서 걸리면 `SLOT_HEADER`를 비우면 된다"고 남겨 둔 자리다).
 * 제목 옆 자리를 걷어내고 이 배너 하나로 합쳤다 — `header` 슬롯은 `lib/ads.ts`에서도 없앴다.
 */
export function PageHeader({
  locale,
  path,
  width,
}: {
  locale: Locale;
  /**
   * 지금 화면의 경로(로케일 없는 형태). 예: `/compatibility`
   *
   * **부르는 쪽이 넘긴다.** 서버 컴포넌트라 지금 경로를 스스로 알 수 없고, 이것 하나 때문에
   * 클라이언트 컴포넌트로 내리면 머리글 전체가 하이드레이션 대상이 된다.
   *
   * 버튼 구성도 이 값으로 갈린다(아래 `navFor`).
   */
  path: string;
  /**
   * 이 화면 본문의 폭. **버튼 줄이 본문과 같은 선에서 시작하게 하려고 받는다.**
   *
   * 머리글이 `max-w-5xl`로 박혀 있었는데 본문은 `2xl`(서비스 화면)·`3xl`(약관)이라, 상단
   * 버튼의 왼쪽 끝이 제목보다 바깥에 있었다. 두 줄이 각자 다른 자리에서 시작하니 정렬이
   * 어긋나 보인다 — 드림링크에서 먼저 잡은 것과 **같은 결함**이다(복제한 자리라 같이 왔다).
   *
   * 부르는 쪽의 본문 컨테이너와 **같은 값**을 넘길 것. 값이 갈리면 다시 어긋난다.
   */
  width: string;
}) {
  const dictionary = getDictionary(locale);
  const nav = navFor(path, locale, dictionary);

  return (
    <header className="bg-background">
      {/* **광고 자리는 여기에 없다**(2026-08-18에 뺐다). 머리글은 입력·안내·약관을 포함해 모든
          화면이 함께 쓰는 자리라, 여기에 배너를 두면 아직 아무것도 발행하지 않은 화면에까지
          광고가 나간다 — naming-link을 2026-08-10에 반려시킨(「가치가 별로 없는 콘텐츠」) 구조가
          그것이다. 광고는 결과·사전 화면이 자기 자리에서 직접 부른다(`lib/ads.ts`의 `adSlots`).

          `min-w-0`과 줄바꿈이 함께 있어야 한다. flex 항목은 기본이 min-content라, 이것이 없으면
          버튼 줄이 뷰포트보다 넓어질 때 줄지 않고 페이지 전체가 가로로 넘친다. */}
      <div className={`mx-auto w-full ${width} px-6 py-4`}>
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          {nav.map((item) =>
            item.tone === "solid" ? (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg bg-brand-navy px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                {item.icon === "home" ? (
                  <Home aria-hidden="true" size={17} />
                ) : (
                  <ArrowLeft aria-hidden="true" size={17} />
                )}
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg border px-4 text-[13px] font-semibold shadow-sm transition sm:text-sm ${
                  item.active
                    ? "border-brand-navy bg-brand-navy/10 text-brand-navy"
                    : "border-line bg-surface text-foreground hover:border-brand-navy"
                }`}
              >
                {item.icon === "back" ? (
                  <ArrowLeft aria-hidden="true" size={17} />
                ) : null}
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </header>
  );
}

type NavItem = {
  href: string;
  label: string;
  /** 채운 버튼은 한 줄에 하나뿐이다. 무엇이 주된 이동인지 한눈에 들어와야 한다. */
  tone: "solid" | "outline";
  icon?: "home" | "back";
  active?: boolean;
};

/**
 * 화면에 따라 버튼을 고른다. **naminglink의 두 화면을 그대로 옮긴 것이다.**
 *
 *   입력·약관   `[← 홈]` + 서비스 메뉴 둘 (지금 화면은 눌린 상태)
 *   결과        `[← 다시 계산하기]` + `[🏠 홈]`
 *
 * 결과 화면에 서비스 메뉴를 두지 않는 이유는, 그 자리에서 가장 하고 싶은 일이 **입력을 고쳐
 * 다시 보는 것**이라서다. 메뉴까지 늘어놓으면 그 버튼이 묻힌다(naminglink도 같은 판단이다).
 *
 * 문구는 전부 이미 번역돼 있는 키를 쓴다. 머리글 때문에 23벌짜리 새 문구를 만들지 않는다 —
 * `result.recalculate`·`affinity.recalculate`는 결과 화면 본문에서 **이미 입력 화면으로 돌아가는
 * 버튼**에 쓰이는 말이고, `footer.backHome`은 약관 화면 맨 아래 '처음으로'와 같은 말이다.
 */
function navFor(
  path: string,
  locale: Locale,
  dictionary: ReturnType<typeof getDictionary>,
): NavItem[] {
  const home = (tone: "solid" | "outline"): NavItem => ({
    href: localePath("/", locale),
    label: dictionary.footer.backHome,
    tone,
    icon: "home",
  });

  // 결과 화면. 되돌아갈 입력 화면과 그 화면의 '다시' 버튼 문구가 메뉴마다 다르다.
  const backToForm: Record<string, { form: string; label: string }> = {
    "/reading/result": {
      form: "/reading",
      label: dictionary.result.recalculate,
    },
  };
  const back = backToForm[path];
  if (back) {
    return [
      { href: localePath(back.form, locale), label: back.label, tone: "outline", icon: "back" },
      home("solid"),
    ];
  }

  // 입력 화면과 약관·가격 화면. 홈과 서비스 메뉴 둘.
  return [
    home("solid"),
    {
      href: localePath("/reading", locale),
      // 랜딩의 '내 사주 보기' 버튼과 같은 말이다. 메뉴용 짧은 키를 새로 만들면 23벌을 더
      // 번역해야 하고, 같은 곳으로 가는 버튼이 화면마다 다른 이름으로 불리게 된다.
      label: dictionary.landing.cta,
      tone: "outline",
      active: path === "/reading",
    },
    {
      href: localePath("/today", locale),
      label: dictionary.today.menu,
      tone: "outline",
      active: path === "/today",
    },
  ];
}
