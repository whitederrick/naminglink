/**
 * **법률 검수의 원본을 고른다** — DB 게시본이 있으면 그것, 없으면 파일.
 *
 * 구현 명세 §4.1 · DEC-01. 운영 약관 화면이 고르는 순서와 **같은 순서**여야 한다.
 *
 *     site_contents.published_content 가 유효하면  → DB 게시본
 *     아니면                                        → legal-content/<locale>.ts 파일
 *
 * ## 왜 이 파일이 생겼나 (2026-08-20)
 *
 * 처음에는 `verify-legal-source.ts` 가 「DB 에 `legal.*` 게시본이 있으면 실패」로 되어 있었다.
 * 그것은 **DEC-01 을 구현한 것이 아니라 문제를 만나면 멈춘 것**이다. 운영자가 정상적으로
 * 약관을 게시하는 날 스윕이 영구 빨간불이 되고, 그러면 사람은 검사기를 끄는 법을 먼저 배운다
 * — `--fill-en` 에서 방금 겪은 실패를 새로 심는 셈이었다.
 *
 * 그래서 **고르는 일을 실제로 한다.** 검사기는 「DB 가 비었는가」(오늘의 상태)가 아니라
 * 「순서대로 고르는가」(지켜야 할 성질)를 본다.
 *
 * ## 왜 인벤토리는 그대로 파일을 읽나
 *
 * `scopeInventory` 는 manifest·packet·해시·관문이 전부 쓰는 **동기** 함수다. 거기에 DB 읽기를
 * 넣으면 네 자리가 모두 자격증명을 요구하게 되고, 없는 컴퓨터에서는 검사기가 통째로 못 돈다.
 * 대신 **봉인과 packet 이 이 resolver 를 거친다** — 런타임 관문이 보는 값이 그 둘이다.
 */
import { getLegalLocaleContent } from "../src/lib/legal-content";
import { parseManagedContent, getContentKey } from "../src/lib/site-content";
import type { Locale } from "../src/lib/services";

export type LegalSourceKind = "db" | "file";

export type ResolvedLegalDocuments = {
  readonly locale: string;
  readonly source: LegalSourceKind;
  /** 문서 종류 → 문서. 파일 폴백과 DB 게시본의 모양이 같다. */
  readonly documents: Record<string, unknown>;
  /** DB 게시본이 있었지만 형식이 깨져 파일로 떨어진 종류. 조용히 넘기지 않는다. */
  readonly invalidFromDb: string[];
};

/**
 * DB 게시본을 읽어 오는 함수. **주입한다** — 검사기가 자격증명 없이도 배선을 시험할 수 있어야
 * 한다. 판정기가 실제 DB 만 보면 「고르는가」를 증명할 방법이 없다.
 */
export type PublishedLegalReader = (
  contentKey: string,
) => Promise<unknown | null> | (unknown | null);

/** 실제 운영 DB 를 읽는 기본 구현. Supabase 가 없으면 전부 `null` — 그러면 파일로 떨어진다. */
export async function supabasePublishedReader(): Promise<PublishedLegalReader> {
  const { getSupabaseAdminClient } = await import("../src/lib/supabase");
  const supabase = getSupabaseAdminClient();
  if (!supabase) return () => null;
  return async (contentKey: string) => {
    const { data, error } = await supabase
      .from("site_contents")
      .select("published_content")
      .eq("content_key", contentKey)
      .maybeSingle();
    if (error) return null;
    return data?.published_content ?? null;
  };
}

/** 자격증명 없이 파일만 쓰는 reader. 인벤토리와 같은 값을 낸다. */
export const fileOnlyReader: PublishedLegalReader = () => null;

/**
 * 그 로케일의 **운영 약관 원본**을 고른다.
 *
 * 게시본이 있으면 DB, 없으면 파일. 게시본이 있는데 형식이 깨졌으면 **파일로 떨어지되 그
 * 사실을 남긴다** — 조용히 넘기면 검수가 화면과 다른 것을 가리키게 된다.
 */
export async function resolveLegalDocuments(
  locale: string,
  reader: PublishedLegalReader,
): Promise<ResolvedLegalDocuments> {
  const fallback = getLegalLocaleContent(locale as Locale).documents as Record<string, unknown>;
  const kinds = Object.keys(fallback);

  const documents: Record<string, unknown> = {};
  const invalidFromDb: string[] = [];
  let usedDb = false;

  for (const kind of kinds) {
    const published = await reader(getContentKey(kind as never, locale as Locale));
    if (published === null || published === undefined) {
      documents[kind] = fallback[kind];
      continue;
    }
    const parsed = parseManagedContent(kind as never, published);
    if (parsed.success) {
      documents[kind] = parsed.data;
      usedDb = true;
    } else {
      // 게시본이 있는데 못 읽는다. 화면도 같은 판단으로 파일을 쓰므로 여기서도 파일이다.
      invalidFromDb.push(kind);
      documents[kind] = fallback[kind];
    }
  }

  return { locale, source: usedDb ? "db" : "file", documents, invalidFromDb };
}
