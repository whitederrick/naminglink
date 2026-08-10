import Link from "next/link";
import { Sparkles } from "lucide-react";

import { localePath } from "@/lib/locale-path";
import { localeLabels, supportedLocales, type Locale } from "@/lib/services";
import { LanguageSelectMobile } from "@/components/LanguageSelectMobile";

/**
 * 서비스 화면의 언어 선택기. **"서비스 약속"의 `기본 언어: KO` 칩이 그대로 버튼이 된다.**
 *
 * **왜 이 자리인가.** 언어는 접속 국가로 정해진다(`lib/locale.ts`). 랜딩에는 언어 버튼 줄이
 * 있지만 서비스·가격·약관 화면에는 없어서, 검색·광고·공유 링크로 서비스 화면에 곧바로 들어온
 * 사람은 판정이 어긋나도 바꿀 방법이 없었다. 이 칩은 이미 "지금 이 화면의 언어"를 말하고 있던
 * 자리라, 누를 수 있게 만드는 것으로 **화면 구조를 바꾸지 않고** 그 구멍을 메운다.
 *
 * **자바스크립트가 없다.** `<details>`는 브라우저가 직접 여닫으므로 이 컴포넌트는 서버에서
 * 그려진다. 상태도, 하이드레이션 비용도 없다.
 *
 * **지금 보고 있는 화면을 유지한다.** 언어만 갈아 끼운다(`/ko/hanja-meaning` →
 * `/es/hanja-meaning`). 고른 뒤에는 화면 안의 모든 링크가 그 언어를 달고 다니므로
 * (`localePath`) 결과·약관·가격까지 따라간다.
 */
export function ServiceLanguageSwitcher({
  locale,
  label,
  path,
  query,
}: {
  locale: Locale;
  /** "기본 언어" 같은, 이미 로케일별로 번역돼 있는 라벨. 여기서 새로 짓지 않는다. */
  label: string;
  /** 지금 화면의 경로(로케일 없는 형태). 예: `/hanja-meaning` */
  path: string;
  /** 딸린 쿼리. 발음 표기 흐름의 `mode=transliteration`처럼 흘리면 다른 서비스로 떨어진다. */
  query?: string;
}) {
  return (
    <>
      {/* 좁은 화면: `<select>`. 목록을 우리가 그리지 않고 OS에 맡긴다 — iOS는 휠 피커,
          안드로이드는 목록 시트를 띄운다. 상자를 화면에 그리지 않으므로 23개가 아무리 길어도
          레이아웃이 깨질 수 없다(`LanguageSelectMobile` 주석 참고). */}
      <LanguageSelectMobile
        locale={locale}
        label={label}
        path={path}
        query={query}
        className="sm:hidden"
      />

      {/* 넓은 화면: 드롭다운. 마우스로는 23개를 한눈에 보고 바로 누르는 편이 빠르고,
          이 폭에서는 상자를 띄워도 깨질 일이 없다. */}
      <details className="group hidden sm:block">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-muted transition hover:text-foreground">
        <Sparkles aria-hidden="true" size={15} />
        {label}: {locale.toUpperCase()}
        {/* 여닫이라는 것을 알린다. 화살표는 열리면 뒤집는다. */}
        <span aria-hidden="true" className="text-[10px] group-open:rotate-180">
          ▼
        </span>
      </summary>

      {/* **떠 있는 드롭다운이다.** 흐름 안에 두었더니 목록이 펼쳐질 때 카드 내용을 통째로
          아래로 밀어내 화면이 깨졌다.

          **그런데 고정 폭으로 띄우면 안 된다.** 절대 배치 + 고정 폭은 이 저장소가 광고 배너와
          푸터 선택기에서 두 번 겪은 함정이다 — 390px에서 오른쪽이 잘린다.

          그래서 `left-0 right-0`으로 **부모 줄의 폭에 묶는다.** 부모(`ServiceShell`의 칩 줄)가
          `relative`라 이 상자는 그 줄만큼만 넓어지고, 그 줄은 카드 안에 있으므로 **구조적으로
          화면을 넘을 수 없다.** 폭을 직접 적지 않는 것이 핵심이다.

          언어가 23개라 좁은 화면에서는 길어질 수 있어 높이를 제한하고 스크롤을 준다. */}
      <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[60vh] overflow-y-auto rounded-lg border border-line bg-surface p-2 shadow-xl">
        <div className="flex flex-wrap gap-1">
          {/* **한국어는 뺀다.** 이 선택기는 글로벌 전용 서비스(`GLOBAL_TO_KOREAN`)에서만
              그려지는데(`ServiceShell` 참고), 그 화면에는 한국어판이 없다 — 골라도 영어로
              301된다(`lib/route-locales.ts`). 되돌아올 선택지를 목록에 두지 않는다. */}
          {supportedLocales
            .filter((item) => item !== "ko")
            .map((item) => (
            <Link
              key={item}
              href={localePath(path, item, query)}
              hrefLang={item}
              className={`inline-flex min-h-8 items-center rounded-md px-2.5 py-1 text-[13px] leading-tight transition ${
                locale === item
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-surface-strong"
              }`}
            >
              {localeLabels[item]}
            </Link>
          ))}
        </div>
      </div>
      </details>
    </>
  );
}
