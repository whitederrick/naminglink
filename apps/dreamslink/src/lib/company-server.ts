import "server-only";

import { loadCompanyInfo, type CompanyInfo } from "@naminglink/core/company";

import { SERVICE_NAME, SERVICE_SUBTITLE } from "@/lib/company";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 사업자 정보를 naminglink 관리자 화면이 관리하는 `site_contents`에서 읽는다.
//
// 같은 사업자이므로 원본은 하나여야 한다. 앱이 값을 따로 들고 있으면 번호가 나올 때마다 여러
// 곳을 손으로 맞춰야 하고, 실제로 맞추지 못해 인연링크 푸터만 "준비 중"으로 나가고 있었다.
//
// **폴백·필드 매핑·캐시는 `@naminglink/core/company`에 있다.** 이 파일에 남은 것은 조회뿐이다 —
// core가 Supabase를 알 필요가 없고, 그래야 앱이 늘어도 같은 코드가 복제되지 않는다.
// 읽는 행은 naminglink의 `getPublishedFooterContent()`와 같은 `footer.global`이다.

const CONTENT_KEY = "footer.global";

export async function getCompanyInfo(): Promise<CompanyInfo> {
  return loadCompanyInfo({
    serviceName: SERVICE_NAME,
    serviceSubtitle: SERVICE_SUBTITLE,
    loadPublishedFooter: async () => {
      const supabase = getSupabaseAdminClient();
      if (!supabase) return null;
      const { data } = await supabase
        .from("site_contents")
        .select("published_content")
        .eq("content_key", CONTENT_KEY)
        .maybeSingle();
      return (data?.published_content ?? null) as Record<string, unknown> | null;
    },
  });
}
