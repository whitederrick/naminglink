import { DREAM_SYMBOLS, type DreamSymbol } from "@/lib/dream-symbols";
import { readingLanguage, type ReadingLanguage } from "@/lib/dream-language";
import type { Locale } from "@/lib/i18n";

/**
 * 상징 하나가 제 주소를 갖는 페이지.
 *
 * ## 왜 만드는가
 *
 * **색인이 312개인데 전부 안내·약관 페이지였다**(2026-08-06 실측). 사전에 상징이 215개나
 * 있는데 검색으로 들어올 수 있는 주소는 **0개**였다. 「돼지꿈 해몽」·「이빨 빠지는 꿈」은
 * 검색량이 큰 질의인데 그 트래픽을 받을 페이지가 없었다.
 *
 * 해몽 서비스가 광고로 먹고사는 방식이 원래 이것이다 — 상징 사전을 색인시켜 검색으로 받고,
 * 그 페이지에 광고를 붙인다. 자유 서술 해석은 그 위에 얹는 것이지 그 자체가 유입원이 아니다.
 *
 * ## 왜 ko·en 두 벌뿐인가
 *
 * 상징 사전이 그 둘뿐이다(`lib/dream-language.ts`). 나머지 21개 로케일에 같은 영어 내용을
 * 깔면 **얇은 중복 페이지가 21벌** 생겨 색인에 해가 된다. 안내 문서를 ko·global로 가른 것과
 * 같은 판단이다.
 *
 * ## 주소
 *
 * `/dream/symbol/<id>` — id는 사전의 영문 식별자다(`pig`·`dragon`). 한글을 넣으면 주소가
 * 인코딩되어 공유할 때 깨져 보이고, 사전을 고칠 때 주소가 함께 흔들린다. 검색에는 제목과
 * 본문이 훨씬 크게 작용하므로 주소를 한글로 둘 이유가 없다.
 */

/** 상징 페이지가 나가는 언어. 사전이 두 벌뿐이라 둘이다. */
export const SYMBOL_PAGE_LOCALES: Locale[] = ["ko", "en"];

export function symbolPagePath(id: string) {
  return `/dream/symbol/${id}`;
}

/**
 * 상징 목록. **상징 페이지가 고아가 되지 않게 하는 자리다.**
 *
 * sitemap과 서로 간의 링크만 있으면 크롤러는 찾아가도 사람은 목록을 볼 길이 없다. 검색으로
 * 상징 하나에 들어온 사람이 "다른 것도 있나"를 물을 때 갈 곳이 필요하다.
 */
export const SYMBOLS_INDEX_PATH = "/dream/symbols";

/** sitemap이 쓸 경로 목록. **사전을 넓히면 여기가 저절로 따라온다.** */
export const symbolPagePaths = DREAM_SYMBOLS.map((symbol) => symbolPagePath(symbol.id));

export function findSymbol(id: string): DreamSymbol | undefined {
  return DREAM_SYMBOLS.find((symbol) => symbol.id === id);
}

/**
 * 이 상징과 함께 볼 만한 것들.
 *
 * **같은 갈래에서 고르지 않고 같은 태그에서 고른다.** 갈래(`animal`·`object`)는 사전을 정리하는
 * 축이지 이용자가 궁금해하는 축이 아니다 — 돼지 다음에 궁금한 것은 「다른 동물」이 아니라
 * 「다른 재물 꿈」이다. 태그가 겹치는 수가 많은 순으로 고른다.
 */
export function relatedSymbols(symbol: DreamSymbol, limit = 8): DreamSymbol[] {
  const tags = new Set(symbol.tags ?? []);
  if (!tags.size) return [];
  return DREAM_SYMBOLS.filter((other) => other.id !== symbol.id)
    .map((other) => ({
      symbol: other,
      shared: (other.tags ?? []).filter((tag) => tags.has(tag)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        (b.symbol.weight ?? 1) - (a.symbol.weight ?? 1) ||
        a.symbol.id.localeCompare(b.symbol.id),
    )
    .slice(0, limit)
    .map((entry) => entry.symbol);
}

/**
 * 검색 결과에 나갈 한 줄.
 *
 * **사전 문장을 그대로 쓴다.** 여기서 요약을 새로 지으면 그것이 곧 「없는 전통 의미」가 된다.
 * 의미가 여럿이면 첫째(기본 의미)를 쓴다.
 */
export function symbolSummary(symbol: DreamSymbol, language: ReadingLanguage): string {
  const meaning = symbol.meanings[0];
  if (!meaning) return "";
  return language === "ko" ? meaning.interpretation_ko : meaning.interpretation_en;
}

/** 페이지 제목. 검색 질의에 가깝게 「<상징> 꿈 해몽」 꼴로 둔다. */
export function symbolTitle(symbol: DreamSymbol, locale: Locale): string {
  const language = readingLanguage(locale);
  return language === "ko"
    ? `${symbol.term_ko} 꿈 해몽`
    : `Dreaming of ${symbol.term_en}`;
}

/**
 * 받침을 보고 조사를 고른다 — 「돼지**가**」·「용**이**」.
 *
 * **`이(가)`로 적지 않는다.** 상징 이름이 사전에서 오므로 문장을 미리 써 둘 수 없는데, 그렇다고
 * 괄호로 두면 215개 페이지 전부가 「돼지이(가) 나온 꿈」처럼 읽힌다. 검색으로 들어온 사람이
 * 처음 보는 문장이라 그 어색함이 그대로 서비스의 인상이 된다.
 *
 * 한글 음절은 유니코드에서 `가(0xAC00)`부터 28개 종성이 한 묶음으로 배열되어 있어, 종성이
 * 있는지는 나눗셈 하나로 알 수 있다. 마지막 글자가 한글이 아니면(영문·숫자로 끝나는 이름)
 * 받침 없는 쪽으로 둔다.
 */
export function withParticle(word: string, withJong: string, withoutJong: string): string {
  const last = word.trim().slice(-1);
  const code = last.charCodeAt(0);
  const isHangulSyllable = code >= 0xac00 && code <= 0xd7a3;
  if (!isHangulSyllable) return `${word}${withoutJong}`;
  return `${word}${(code - 0xac00) % 28 > 0 ? withJong : withoutJong}`;
}
