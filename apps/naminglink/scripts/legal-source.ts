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
import { leaves, type Leaf } from "./locale-inventory";
import type { Locale } from "../src/lib/services";

export type LegalSourceKind = "db" | "file";

export type ResolvedLegalDocuments = {
  readonly locale: string;
  readonly source: LegalSourceKind;
  /** 문서 종류 → 문서. 파일 폴백과 DB 게시본의 모양이 같다. */
  readonly documents: Record<string, unknown>;
  /** DB 게시본이 있었지만 형식이 깨져 파일로 떨어진 종류. 조용히 넘기지 않는다. */
  readonly invalidFromDb: string[];
  /**
   * **물어보지 못한 종류와 그 이유.** 「게시본이 없다」와 다르다 — 비어 있지 않으면 이 결과는
   * 운영 원본을 말해 주지 못한다(결함 동결 P0-3).
   */
  readonly unavailable: { kind: string; reason: string }[];
};

/**
 * **「행이 없다」와 「물어보지 못했다」는 다르다** (2026-08-20 · 결함 동결 P0-3).
 *
 * 예전 reader 는 `unknown | null` 을 돌려줬다. 그래서 이 셋이 **한 값으로 뭉갰다**.
 *
 *     자격증명이 없다        → null
 *     조회가 오류를 냈다      → null
 *     게시본이 정말 없다      → null
 *
 * 호출자는 셋을 구분할 방법이 없었고, resolver 는 세 경우 모두 `source: "file"` 을 **자신
 * 있게** 보고했다. DB 가 죽은 동안 검수하면 **파일을 봉인해 놓고 화면은 DB 를 내보낸다.**
 *
 * 이 저장소가 아는 자리다 — **「못 돎은 통과가 아니다」.** 조건문을 더해서는 못 고친다.
 * **자료형이 셋을 갈라야** 호출자가 무시할 수 없다.
 */
export type PublishedLookup =
  /** 게시본이 있고 읽었다. */
  | { readonly state: "found"; readonly content: unknown }
  /** 물어봤고, 행이 없었다. **정상이다.** 파일로 떨어지는 것이 옳다. */
  | { readonly state: "absent" }
  /** **물어보지 못했다.** 자격증명이 없거나 조회가 실패했다. 통과도 실패도 아닌 셋째 상태다. */
  | { readonly state: "unavailable"; readonly reason: string };

/**
 * DB 게시본을 읽어 오는 함수. **주입한다** — 검사기가 자격증명 없이도 배선을 시험할 수 있어야
 * 한다. 판정기가 실제 DB 만 보면 「고르는가」를 증명할 방법이 없다.
 */
export type PublishedLegalReader = (
  contentKey: string,
) => Promise<PublishedLookup> | PublishedLookup;

/**
 * 실제 운영 DB 를 읽는 기본 구현.
 *
 * **자격증명이 없으면 `unavailable` 이다.** 예전에는 `() => null` 을 돌려줘서 「게시본이
 * 없다」와 똑같이 보였고, 자격증명 없는 컴퓨터에서 봉인이 조용히 파일로 만들어졌다.
 */
export async function supabasePublishedReader(): Promise<PublishedLegalReader> {
  const { getSupabaseAdminClient } = await import("../src/lib/supabase");
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return () => ({
      state: "unavailable",
      reason: "Supabase 환경변수가 없어 게시본을 물어보지 못했다",
    });
  }
  return async (contentKey: string): Promise<PublishedLookup> => {
    const { data, error } = await supabase
      .from("site_contents")
      .select("published_content")
      .eq("content_key", contentKey)
      .maybeSingle();
    if (error) return { state: "unavailable", reason: `조회 실패: ${error.message}` };
    const published = data?.published_content;
    return published === null || published === undefined
      ? { state: "absent" }
      : { state: "found", content: published };
  };
}

/**
 * 자격증명 없이 파일만 쓰는 reader. 인벤토리와 같은 값을 낸다.
 *
 * **`absent` 이지 `unavailable` 이 아니다.** 이건 「물어보지 못했다」가 아니라 「게시본을 쓰지
 * 않기로 한 것」이다. 그래서 주입 reader 를 쓰는 순수 대조군은 자격증명 없이도 돈다(조건 ④).
 */
export const fileOnlyReader: PublishedLegalReader = () => ({ state: "absent" });

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
  const unavailable: { kind: string; reason: string }[] = [];
  let usedDb = false;

  for (const kind of kinds) {
    const lookup = await reader(getContentKey(kind as never, locale as Locale));
    if (lookup.state === "unavailable") {
      // **물어보지 못했다.** 파일을 쓰되 그렇게 말하지 않는다 — 호출자가 판단한다.
      unavailable.push({ kind, reason: lookup.reason });
      documents[kind] = fallback[kind];
      continue;
    }
    if (lookup.state === "absent") {
      documents[kind] = fallback[kind];
      continue;
    }
    const parsed = parseManagedContent(kind as never, lookup.content);
    if (parsed.success) {
      documents[kind] = parsed.data;
      usedDb = true;
    } else {
      // 게시본이 있는데 못 읽는다. 화면도 같은 판단으로 파일을 쓰므로 여기서도 파일이다.
      invalidFromDb.push(kind);
      documents[kind] = fallback[kind];
    }
  }

  return { locale, source: usedDb ? "db" : "file", documents, invalidFromDb, unavailable };
}

/**
 * **고른 원본을 인벤토리와 같은 잎 모양으로 편다.**
 *
 * 결함 동결 P0-1 (2026-08-20). packet 과 봉인이 **같은 함수**를 거쳐야 둘이 같은 문서를
 * 가리킨다. 예전에는 이 변환이 없어서 이런 일이 났다.
 *
 *     드리프트 검사 → `scopeInventory("legal", …)`  = **파일**을 본다
 *     봉인 값 계산  → `resolveLegalDocuments(…)`     = **DB** 를 본다
 *
 * 그래서 manifest 가 파일 내용을 승인해 둔 상태에서 DB 문서를 바꿔 넣으면, 드리프트 검사는
 * 파일끼리 대조해 통과하고 **승인한 적 없는 DB 내용이 그대로 봉인**됐다. 런타임 게시 관문이
 * 그 값을 정답으로 읽으므로, 아무도 승인하지 않은 약관이 게시 가능해진다.
 *
 * `legalLeaves`(`locale-inventory.ts`)와 **같은 경로 규칙**을 쓴다 — `legal.labels.*` 와
 * `legal.<kind>.*`. 다른 점은 `documents` 를 파일이 아니라 **고른 원본**에서 가져온다는 것뿐이다.
 *
 * `labels` 는 DB 게시 대상이 아니라 파일에서 읽는다(관리 대상 콘텐츠는 `documents` 뿐이다).
 */
export function resolvedLegalLeaves(
  locale: string,
  resolved: ResolvedLegalDocuments,
): Leaf[] {
  const out: Leaf[] = [];
  leaves(getLegalLocaleContent(locale as Locale).labels, "legal.labels", out);
  for (const kind of Object.keys(resolved.documents).sort()) {
    leaves(resolved.documents[kind], `legal.${kind}`, out);
  }
  return out.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}
