import type { Metadata } from "next";
import { ServiceShell } from "@/components/ServiceShell";
import { buildServiceMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

/**
 * **한국어 한 벌짜리 화면이라 요청에서 언어를 읽지 않는다** (2026-08-18).
 *
 * 이 서비스는 화면이 한국어뿐이라 로케일 주소를 갖지 않는다(`lib/route-locales.ts`).
 * 그런데도 `getRequestLocale()`을 부르고 있었고, 그 함수는 `headers()`를 읽는다 —
 * **읽는 순간 이 화면은 미리 만들어지지 못한다.** 늘 `ko`가 나오는 판정 하나 때문에
 * 요청마다 서버가 화면을 다시 그리고 있었다.
 */
const LOCALE = "ko" as const;

export function generateMetadata(): Metadata {
  return buildServiceMetadata({
    slug: services.koreanToGlobal.slug,
    path: "/korean-to-global",
    locale: LOCALE,
  });
}

export default function KoreanToGlobalPage() {
  return <ServiceShell service={services.koreanToGlobal} locale={LOCALE} />;
}
