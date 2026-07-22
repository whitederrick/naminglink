import "server-only";
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

export async function getPublishedFooterContent(): Promise<FooterContent> {
  const supabase = getSupabaseAdminClient();

  if (!supabase) return fallbackFooterContent;

  const { data, error } = await supabase
    .from("site_contents")
    .select("published_content")
    .eq("content_key", getContentKey("footer", "global"))
    .maybeSingle();

  if (error || !data?.published_content) return fallbackFooterContent;

  const parsed = parseManagedContent("footer", data.published_content);
  return parsed.success ? (parsed.data as FooterContent) : fallbackFooterContent;
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
