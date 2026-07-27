import "server-only";

import {
  fallbackCompanyInfo,
  SERVICE_NAME,
  type CompanyInfo,
} from "@/lib/company";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 사업자 정보를 naminglink 관리자 화면이 관리하는 `site_contents`에서 읽는다.
//
// 같은 사업자이므로 원본은 하나여야 한다. 인연링크가 값을 따로 들고 있으면 번호가 나올 때마다
// 두 곳을 손으로 맞춰야 하고, 실제로 맞추지 못해 인연링크 푸터만 "사업자등록번호 준비 중"으로
// 나가고 있었다. 이제 관리자 화면에서 한 번 고치면 두 서비스에 함께 반영된다.
//
// 읽는 행은 naminglink의 `getPublishedFooterContent()`와 같은 `footer.global`이다. 스키마도
// 그쪽 `footerContentSchema`와 같은 모양이라 필드 이름을 그대로 쓴다. **naminglink에서 필드를
// 바꾸면 여기도 같이 봐야 한다** — 지금은 읽기만 하므로 없는 필드는 폴백으로 떨어진다.

const CONTENT_KEY = "footer.global";
/** 람다 안에서 잠깐만 캐시한다. 페이지마다 DB를 왕복할 값이 아니다. */
const CACHE_TTL_MS = 60_000;

let cache: { at: number; value: CompanyInfo } | null = null;

function text(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.value;

  const supabase = getSupabaseAdminClient();
  if (!supabase) return fallbackCompanyInfo;

  try {
    const { data } = await supabase
      .from("site_contents")
      .select("published_content")
      .eq("content_key", CONTENT_KEY)
      .maybeSingle();

    const content = (data?.published_content ?? null) as Record<
      string,
      unknown
    > | null;
    if (!content) return fallbackCompanyInfo;

    const value: CompanyInfo = {
      // 서비스 이름만은 DB에서 오지 않는다. `footer.global`은 naminglink 것을 담고 있어서
      // 그대로 쓰면 인연링크 푸터에 "Naming-Link"가 찍힌다.
      serviceName: SERVICE_NAME,
      legalEntity: text(content.companyName, fallbackCompanyInfo.legalEntity),
      representative: text(
        content.representative,
        fallbackCompanyInfo.representative,
      ),
      businessNumber: text(
        content.businessNumber,
        fallbackCompanyInfo.businessNumber,
      ),
      mailOrderNumber: text(
        content.mailOrderNumber,
        fallbackCompanyInfo.mailOrderNumber,
      ),
      address: text(content.address, fallbackCompanyInfo.address),
      customerCenter: text(
        content.customerCenter,
        fallbackCompanyInfo.customerCenter,
      ),
      email: text(content.email, fallbackCompanyInfo.email),
      privacyOfficer: text(
        content.privacyOfficer,
        fallbackCompanyInfo.privacyOfficer,
      ),
      hostingProvider: text(
        content.hostingProvider,
        fallbackCompanyInfo.hostingProvider,
      ),
    };

    cache = { at: Date.now(), value };
    return value;
  } catch {
    // 사업자 정보를 못 읽었다고 화면 전체가 실패하면 안 된다. 폴백으로 그린다.
    return fallbackCompanyInfo;
  }
}
