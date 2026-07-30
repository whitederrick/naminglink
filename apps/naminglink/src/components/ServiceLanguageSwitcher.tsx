import Link from "next/link";
import { Sparkles } from "lucide-react";

import { localePath } from "@/lib/locale-path";
import { localeLabels, supportedLocales, type Locale } from "@/lib/services";

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
    <details className="group">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-muted transition hover:text-foreground">
        <Sparkles aria-hidden="true" size={15} />
        {label}: {locale.toUpperCase()}
        {/* 여닫이라는 것을 알린다. 화살표는 열리면 뒤집는다. */}
        <span aria-hidden="true" className="text-[10px] group-open:rotate-180">
          ▼
        </span>
      </summary>

      {/* **absolute로 띄우지 않는다.** 이 자리는 화면 위쪽 카드 안이라 아래로 밀어내도 어색하지
          않고, 흐름 안에 두면 폭이 카드에 갇혀 **가로로 넘칠 수 없다.** 절대 배치 + 고정 폭은
          이 저장소가 광고 배너에서 이미 한 번 겪은 함정이다(390px에서 오른쪽이 잘렸다). */}
      <div className="mt-2 flex flex-wrap gap-1 rounded-lg border border-line bg-surface p-2">
        {supportedLocales.map((item) => (
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
    </details>
  );
}
