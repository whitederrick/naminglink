import { LocaleSelect } from "@/components/LocaleSelect";
import type { Locale } from "@/lib/i18n";

/**
 * 화면 제목 줄. **제목과 언어 선택기**가 전부다.
 *
 * **오른쪽 끝은 언어 자리다(사용자 결정).** 예전에는 여기 고정 배너가 있었고 언어는 머리글에
 * 단추 여섯 개로 늘어서 있었다. 배너는 머리글의 가로형 한 자리로 합치고(`PageHeader` 주석),
 * 그 자리를 언어가 받았다 — 지금 무슨 언어로 보고 있는지는 제목 옆이 가장 잘 보인다.
 *
 * 광고와 붙여 두지 않는 것이 중요하다. 누를 수 있는 것을 광고 옆에 두면 오클릭이 나고,
 * 애드센스는 그것을 계정 정지 사유로 본다(naminglink가 머리글에서 실제로 겪고 고친 자리다).
 */
export function PageTitle({
  title,
  locale,
  path,
  className = "",
}: {
  title: string;
  locale: Locale;
  /** 지금 화면의 경로(로케일 없는 형태). 언어를 바꿔도 이 화면에 머물게 한다. */
  path: string;
  className?: string;
}) {
  return (
    // `items-start`: 제목이 두 줄 이상으로 접히는 언어에서도 언어 칩이 첫 줄에 붙어 있게 한다.
    // 가운데 정렬이면 제목 길이에 따라 칩이 위아래로 흔들린다.
    <div
      className={`flex items-start justify-between gap-3 ${className}`}
    >
      <h1 className="break-keep-all min-w-0 text-3xl font-bold">{title}</h1>
      <LocaleSelect locale={locale} path={path} className="mt-0.5" />
    </div>
  );
}
