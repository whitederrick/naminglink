import "server-only";
import { unstable_cache } from "next/cache";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getFallbackPolicyDocument } from "@/lib/legal-content";
import {
  fallbackFooterContent,
  getContentKey,
  parseManagedContent,
  type FooterContent,
  type LegalDocumentKind,
  type PolicyDocumentContent,
} from "@/lib/site-content";
import type { Locale } from "@/lib/services";

type ContentRow = {
  draft_content: unknown;
  published_content: unknown;
  draft_version: number;
  published_version: number;
  updated_at: string;
  published_at: string | null;
};

export async function getPublishedPolicyDocument(
  kind: LegalDocumentKind,
  locale: Locale,
): Promise<PolicyDocumentContent> {
  const fallback = getFallbackPolicyDocument(kind, locale);
  const supabase = getSupabaseAdminClient();

  if (!supabase) return fallback;

  const key = getContentKey(kind, locale);
  const { data, error } = await supabase
    .from("site_contents")
    .select("published_content")
    .eq("content_key", key)
    .maybeSingle();

  if (error || !data?.published_content) return fallback;

  const parsed = parseManagedContent(kind, data.published_content);
  return parsed.success ? (parsed.data as PolicyDocumentContent) : fallback;
}

/**
 * 푸터 캐시 태그. 운영자가 푸터를 게시하면 이 태그를 무효화해 다음 요청부터 새 값이 나간다
 * (`app/api/admin/site-content/route.ts`). 태그가 없으면 아래 revalidate 시간만큼 옛 값이 남는다.
 */
export const FOOTER_CONTENT_TAG = "site-content:footer";

/**
 * **읽기에 실패하면 던진다.** 폴백을 여기서 돌려주면 그 폴백이 캐시에 박혀 한 시간 동안
 * 남는다 — Supabase가 잠깐 흔들린 대가로 운영자가 고친 푸터가 한 시간 사라지는 셈이다.
 * 던지면 `unstable_cache`가 결과를 저장하지 않으므로 다음 요청이 다시 시도한다.
 *
 * 반대로 **행이 아예 없는 것은 정상 상태**라 폴백을 그대로 돌려주고 캐시해도 된다
 * (아직 운영자가 저장한 적이 없는 경우다).
 */
async function fetchPublishedFooterContent(): Promise<FooterContent> {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("Supabase가 설정되지 않았습니다.");

  const { data, error } = await supabase
    .from("site_contents")
    .select("published_content")
    .eq("content_key", getContentKey("footer", "global"))
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data?.published_content) return fallbackFooterContent;

  const parsed = parseManagedContent("footer", data.published_content);
  return parsed.success ? (parsed.data as FooterContent) : fallbackFooterContent;
}

const cachedFooterContent = unstable_cache(
  fetchPublishedFooterContent,
  ["published-footer-content"],
  { tags: [FOOTER_CONTENT_TAG], revalidate: 3600 },
);

/**
 * 푸터 사업자 정보. **루트 레이아웃이 부르므로 사실상 모든 페이지 렌더에 한 번씩 실린다.**
 *
 * 캐시가 없을 때는 요청마다 Supabase를 왕복했다. 운영 도메인 실측으로 TTFB가 0.7~2.0초였고
 * 그 왕복이 매번 그대로 얹혀 있었다. 광고 트래픽이 들어오면 이 비용이 방문 수만큼 곱해진다.
 *
 * 값이 거의 바뀌지 않는 법정 표시 항목이라 캐시가 잘 맞는다. 운영자가 고쳐도 게시 시점에
 * 태그를 무효화하므로 바로 반영된다(`app/api/admin/site-content/route.ts`) — revalidate
 * 1시간은 그 무효화가 어떤 이유로 빠졌을 때의 안전망이다.
 *
 * **페이지 자체는 여전히 요청마다 렌더된다.** 로케일을 헤더로 정하기 때문이다(`lib/locale.ts`).
 * 여기서 줄이는 것은 그 렌더에 붙어 있던 DB 왕복이다.
 */
export async function getPublishedFooterContent(): Promise<FooterContent> {
  try {
    return await cachedFooterContent();
  } catch {
    // 이 폴백은 캐시되지 않는다. 다음 요청이 다시 DB를 본다.
    return fallbackFooterContent;
  }
}

export async function getManagedContentRow(contentKey: string) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) return { data: null, error: "Supabase is not configured." };

  const { data, error } = await supabase
    .from("site_contents")
    .select(
      "draft_content,published_content,draft_version,published_version,updated_at,published_at",
    )
    .eq("content_key", contentKey)
    .maybeSingle();

  return {
    data: (data as ContentRow | null) ?? null,
    error: error?.message ?? null,
  };
}
