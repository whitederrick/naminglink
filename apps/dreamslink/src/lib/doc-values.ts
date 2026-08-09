import { CONCEPTION_TAG, DREAM_SYMBOLS } from "@/lib/dream-symbols";
import type { Locale } from "@/lib/i18n";
import { CONCEPTION_PAGE_COUNT } from "@/lib/report-pages";

/**
 * 편집 문서의 자리표시자를 채울 값.
 *
 * **글에 숫자를 적지 않으려고 있는 파일이다.** 이 앱의 안내는 거의 전부 사전을 세어 적은
 * 수다 — 상징 몇 개, 갈래별 몇 개, 뜻이 갈리는 것 몇 개. 사전은 **자주 늘어나는 자료**라
 * 글에 손으로 적으면 늘리는 날마다 열두 편이 조용히 거짓이 된다.
 *
 * 실제로 그런 자리가 있었다. 「뜻이 갈리는 것」을 두 문서가 다른 수(39·59)로 적고 있었고,
 * 하나는 맥락 분기를, 하나는 양가 상징을 센 값이었다. **같은 말에 다른 수**가 붙어 있으면
 * 어느 쪽이 맞는지 아무도 모른다. 여기서 세면 그 자리가 하나로 남는다.
 *
 * **세는 자리를 여기 한 벌만 둔다.** 화면마다 따로 세면 어느 하나가 다른 기준으로 세게 된다.
 */
export async function docValues(_locale: Locale): Promise<Record<string, string>> {
  const symbols = DREAM_SYMBOLS;
  const count = (predicate: (symbol: (typeof symbols)[number]) => boolean) =>
    String(symbols.filter(predicate).length);
  const byCategory = (category: string) => count((symbol) => symbol.category === category);
  const byPolarity = (polarity: string) => count((symbol) => symbol.polarity === polarity);

  return {
    symbolTotal: String(symbols.length),
    meaningTotal: String(symbols.reduce((sum, symbol) => sum + symbol.meanings.length, 0)),
    aliasTotal: String(
      symbols.reduce((sum, symbol) => sum + (symbol.aliases?.length ?? 0), 0),
    ),

    // 한 글자짜리 상징은 매칭에서 오탐을 내기 쉬워 따로 다루는 자리가 있다.
    singleCharSymbolTotal: count((symbol) => symbol.term_ko.length === 1),
    // 전승 배경은 있는 것에만 있다. **없다고 지어내지 않는다**는 것이 이 사전의 규칙이다.
    cultureNoteTotal: count((symbol) => Boolean(symbol.culture_note)),

    polarityPositive: byPolarity("positive"),
    polarityAmbivalent: byPolarity("ambivalent"),
    polarityNegative: byPolarity("negative"),
    polarityNeutral: byPolarity("neutral"),

    /**
     * **맥락으로 뜻이 갈리는 상징.** 양가(`polarity: ambivalent`)와 다른 값이다 — 이쪽은
     * 「뱀을 품다」와 「뱀에 물리다」처럼 **적은 글에 따라 다른 의미를 고르는** 상징이다.
     */
    contextSplitSymbolTotal: count(
      (symbol) => symbol.meanings.filter((meaning) => meaning.context).length > 1,
    ),
    conceptionSymbolTotal: count((symbol) => symbol.tags?.includes(CONCEPTION_TAG) ?? false),

    categoryThing: byCategory("object"),
    categoryAnimal: byCategory("animal"),
    categoryNature: byCategory("nature"),
    categoryAction: byCategory("action"),
    categoryBody: byCategory("body"),
    categoryPerson: byCategory("person"),
    categoryPlace: byCategory("place"),
    categoryColor: byCategory("color"),
    categoryNumber: byCategory("number"),

    conceptionPages: String(CONCEPTION_PAGE_COUNT),
  };
}
