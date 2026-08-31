import { Document, Page, StyleSheet, Text, View, renderToBuffer } from "@react-pdf/renderer";

import {
  citeLines,
  contextText,
  meaningText,
  meaningWorkLabel,
  readingLanguage,
  symbolTerm,
  themeLabels,
} from "@/lib/dream-language";
import { meaningWork } from "@/lib/dream-symbols";
import type { Locale } from "@/lib/i18n";
import { MixedText, pdfLanguageDiffers } from "@/lib/pdf/fonts";
import { CONCEPTION_PAGE_COUNT } from "@/lib/report-pages";
import { warmUpLayoutEngine } from "@/lib/pdf/warm-up";
import { isConceptionMeaning, type DreamOutcome } from "@/lib/engines/dream-match";

/**
 * 태몽 리포트 PDF.
 *
 * ## 장수는 선언이 정한다
 *
 * `Page`를 **`CONCEPTION_PAGE_COUNT`개 선언한다.** 글이 넘쳐서 장이 생기는 구조로 두면 문장
 * 하나에 장수가 흔들리고, 그러면 약관에 적은 장수가 거짓이 된다(사주링크에서 겪은 일이다).
 * 내용이 모자라면 장을 지우는 것이 아니라 **그 장이 무엇을 위한 자리인지**를 다시 정한다.
 *
 * ## 지어내지 않는다
 *
 * 이 문서에 실리는 전통 의미는 **전부 엔진이 사전에서 고른 것**이다. 매칭된 상징이 없으면
 * 그 사실을 적고, 없는 의미를 채우지 않는다. 태몽도 **판정하지 않는다** — 전통적으로 태몽으로
 * 보아 온 상징이 나왔다는 사실까지만 적는다.
 */

const styles = StyleSheet.create({
  page: { paddingTop: 56, paddingBottom: 56, paddingHorizontal: 48, fontSize: 10.5, lineHeight: 1.7 },
  title: { fontSize: 20, marginBottom: 6 },
  subtitle: { fontSize: 11, color: "#666", marginBottom: 22 },
  heading: { fontSize: 13, marginTop: 4, marginBottom: 10 },
  paragraph: { marginBottom: 9 },
  card: { borderWidth: 0.6, borderColor: "#d8d8d8", borderRadius: 6, padding: 12, marginBottom: 9 },
  term: { fontSize: 12, marginBottom: 3 },
  meta: { fontSize: 9, color: "#777" },
  notice: { marginTop: 14, fontSize: 9, color: "#777", lineHeight: 1.6 },
  footer: { position: "absolute", bottom: 26, left: 48, right: 48 },
  footerText: { fontSize: 8, color: "#999" },
});

export type ConceptionReportInput = {
  outcome: DreamOutcome;
  /** 이용자가 적은 꿈. 문서에 그대로 싣되 서버에는 남기지 않는다. */
  dreamText: string;
  locale: Locale;
  generatedAt: string;
  dictVersion: string;
};

/**
 * 문서 문구 두 벌.
 *
 * **사전이 ko·en 두 벌뿐이라 문서도 두 벌이다**(`lib/dream-language.ts` 참고). 화면 사전
 * (`i18n.ts`)에 넣지 않은 이유는, 스물세 벌을 만들어 봐야 본문인 상징 풀이가 영어로 나가
 * 제목만 이탈리아어인 문서가 되기 때문이다. 안내 문서를 ko·global로 가른 것과 같은 판단이다.
 *
 * ⚠️ 예전에는 이 문구들이 한국어로 **박혀** 있었고 `locale`은 받기만 하고 쓰지 않았다.
 * 결제하고 받은 문서가 스물세 언어 전부에서 한국어였다(2026-08-06에 고침).
 */
const COPY = {
  ko: {
    title: "태몽 리포트",
    subtitle: (version: string) => `전통 해몽 상징 사전 ${version} 기준`,
    yourDream: "적어 주신 꿈",
    /** ar·km 전용. 원문 꿈 문단이 줄바꿈되면 렌더러가 죽어(`pdf/fonts.tsx`) 대신 낸다. */
    dreamOmittedNotice:
      "적어 주신 꿈은 이 문서 형식으로는 옮겨 담을 수 없어 생략했습니다. 화면의 무료 결과에서 원문 그대로 확인하실 수 있습니다.",
    atAGlance: "한눈에",
    summary: (found: number, conception: number, themes: string) =>
      `찾은 상징 ${found}개 · 전통적으로 태몽으로 보는 상징 ${conception}개${themes ? ` · 주제 ${themes}` : ""}`,
    noSymbols: "이 꿈에서는 사전에 있는 전통 상징을 찾지 못했습니다.",
    foundHeading: "꿈에서 찾은 상징",
    foundEmpty:
      "사전에 있는 상징이 걸리지 않았습니다. 없는 전통 의미를 지어내지 않기 위해 이 자리를 비워 둡니다.",
    context: (value: string) => `상황: ${value} · `,
    conceptionHeading: "전통적으로 태몽으로 보는 상징",
    conceptionEmpty: "이 꿈에서는 전통적으로 태몽으로 보아 온 상징을 찾지 못했습니다.",
    otherSymbols: (list: string) => `함께 걸린 다른 상징: ${list}`,
    /**
     * 지면에 카드로 다 못 앉힌 상징. **버리지 않고 이름만 잇는다.**
     *
     * 무료 화면은 상징을 전부 보여 준다. 유료 문서가 앞의 몇 개만 주고 나머지를 없애면
     * **파는 것이 무료보다 적어진다** — 그래서 자르는 대신 줄인다.
     */
    moreFound: (list: string) => `지면 관계로 위에는 앞부분만 실었습니다. 함께 찾은 상징: ${list}`,
    /** 이름 줄마저 넘칠 때. **개수로 알린다** — 있었다는 사실까지 지우지는 않는다. */
    andMore: (list: string, rest: number) => `${list} 외 ${rest}개`,
    conceptionNotice:
      "이 문서는 임신 여부를 판정하지 않습니다. 전통적으로 태몽으로 보아 온 상징이 꿈에 나왔다는 사실을 알려 드리는 것이며, 의학적 판단이 필요하면 의료기관에 문의하십시오.",
    keepHeading: "간직하는 장",
    keepBody: "꾼 날과 적어 두고 싶은 말을 손으로 채워 두는 자리입니다.",
    keepDate: "꿈을 꾼 날",
    keepNote: "남기고 싶은 말",
    disclaimer:
      "이 문서는 전통 해몽 관점의 참고 자료이며 의학·재무·법률 자문이 아닙니다. 서비스는 이용자가 적은 꿈과 만들어진 문서를 보관하지 않으므로, 내려받은 파일은 직접 보관해 주십시오.",
    basis: (version: string, engine: string) =>
      `해석 근거: 전통 해몽 상징 사전 ${version} · 엔진 ${engine}`,
  },
  en: {
    title: "Conception-dream report",
    subtitle: (version: string) =>
      `Based on the traditional Korean dream-symbol dictionary ${version}`,
    yourDream: "The dream you wrote",
    /** ar·km only. The renderer crashes on a wrapping paragraph in these scripts
     * (`pdf/fonts.tsx`), so the raw dream text is left out and this note takes its place. */
    dreamOmittedNotice:
      "The dream you wrote could not be included in this document format. You can still read it in the free result on-screen.",
    atAGlance: "At a glance",
    summary: (found: number, conception: number, themes: string) =>
      `${found} symbol(s) found · ${conception} traditionally read as conception omens${themes ? ` · themes: ${themes}` : ""}`,
    noSymbols: "No symbol from the traditional dictionary was found in this dream.",
    foundHeading: "Symbols found in your dream",
    foundEmpty:
      "No symbol from the dictionary matched. We leave this empty rather than invent a traditional meaning that is not there.",
    context: (value: string) => `Context: ${value} · `,
    conceptionHeading: "Symbols traditionally read as conception omens",
    conceptionEmpty:
      "No symbol traditionally read as a conception omen was found in this dream.",
    otherSymbols: (list: string) => `Other symbols found alongside: ${list}`,
    /** 위 ko 주석 참고 — 자르지 않고 줄인다. */
    moreFound: (list: string) =>
      `Only the first few are shown in full above, for space. Also found: ${list}`,
    /** 위 ko 주석 참고 — 개수로 알린다. */
    andMore: (list: string, rest: number) => `${list} and ${rest} more`,
    conceptionNotice:
      "This document does not determine pregnancy. It tells you that symbols traditionally read as conception omens appeared in your dream. For anything medical, please consult a healthcare provider.",
    keepHeading: "A page to keep",
    keepBody: "A place to write in the date of the dream and anything you want to remember.",
    keepDate: "The night of the dream",
    keepNote: "What you want to remember",
    disclaimer:
      "This document is reference material from a traditional dream-reading perspective, not medical, financial or legal advice. The service keeps neither the dream you wrote nor this document, so please store the downloaded file yourself.",
    basis: (version: string, engine: string) =>
      `Basis: traditional dream-symbol dictionary ${version} · engine ${engine}`,
  },
} as const;

function Footer({ page, generatedAt }: { page: number; generatedAt: string }) {
  return (
    /* 꼬리글도 서체 라우팅을 거친다. 맨 `<Text>`로 두면 가운뎃점(·)까지 Helvetica로 그려져
       **모든 문서가 내장 서체 되돌림 1건**으로 잡혔다(사주링크는 0건이었다). */
    <View style={styles.footer} fixed>
      <MixedText
        text={`DreamsLink · ${generatedAt.slice(0, 10)} · ${page} / ${CONCEPTION_PAGE_COUNT}`}
        style={styles.footerText}
      />
    </View>
  );
}

export function ConceptionReport({
  outcome,
  dreamText,
  locale,
  generatedAt,
  dictVersion,
}: ConceptionReportInput) {
  const language = readingLanguage(locale);
  const t = COPY[language];
  /**
   * **원문 꿈 문단은 ar·km에서 그대로 실을 수 없다.** 문서 전체는 이 두 로케일에서 이미
   * 영어로 나가지만(`pdfLocale`), 그건 우리가 쓴 고정 문구 얘기다. 사용자가 원문 그대로
   * 적은 `dreamText`는 그 예외를 안 받아 여전히 원래 문자 그대로 렌더되고, 줄바꿈이 생기는
   * 순간 렌더러가 죽는다(2026-08-26 코드 리뷰에서 발견 — 이름 필드만 예외 대상이었다).
   */
  const dreamTextRenderable = !pdfLanguageDiffers(locale);
  /**
   * **태그가 아니라 이 꿈에서 고른 의미로 가른다.** `dream-match.ts`의 `isConceptionDream`이
   * 이미 이 규칙으로 판정하는데, 이 문서는 `item.tags`(상징 전체의 정적 태그)로 따로
   * 걸러 같은 결함을 되풀이하고 있었다 — 돼지는 재물·태몽 태그를 둘 다 갖고 있어, 이번
   * 꿈에서 실제로 고른 의미가 재물이어도 태그만 보면 태몽 상징으로 잡혔다(2026-08-06에
   * `isConceptionDream` 쪽에서 한 번 고친 바로 그 문제 — `isConceptionMeaning` 주석 참고.
   * 2026-08-26 코드 리뷰에서 이 문서가 옛 방식을 다시 쓰고 있는 것을 발견).
   */
  const conceptionSymbols = outcome.matched.filter((item) => isConceptionMeaning(item.meaning));
  const others = outcome.matched.filter((item) => !isConceptionMeaning(item.meaning));

  /**
   * **한 장에 카드가 몇 개까지 앉는가.** 측정값이지 취향이 아니다.
   *
   * ## 왜 상한이 필요한가
   *
   * 이 문서는 `CONCEPTION_PAGE_COUNT`(4장)로 고시된다. 그런데 상징 목록은 길이가 정해져
   * 있지 않아 **입력에 따라 장수가 달라졌다** — 2026-08-07 실측으로 상징 7개부터 5장이 됐고,
   * 21개 로케일 전부 그랬다. 넘친 장의 꼬리글에는 `2 / 4`가 찍혀 있었다(렌더러는 자기가 아직
   * 2장이라고 믿는다).
   *
   * **선언된 `<Page>` 수만으로는 장수가 고정되지 않는다.** 그것은 바닥일 뿐이고, 목록에
   * 상한이 없으면 천장이 없다. 5장으로 선언해 봐야 상징이 12개면 6장이 된다 — 임계값을
   * 옮길 뿐 같은 결함이 조건만 바꿔 되살아난다.
   *
   * ## 넘치는 것을 버리지 않는다
   *
   * 무료 화면은 찾은 상징을 전부 보여 준다. 유료 문서가 앞의 몇 개만 주면 **파는 것이
   * 무료보다 적어진다.** 그래서 상한 밖은 이름만 한 줄로 잇는다(`moreFound`).
   *
   * ## 값을 바꿀 때
   *
   * 늘리면 장이 갈라진다. `scripts/render-conception-sample.tsx`에 상징을 빽빽하게 넣은
   * 회귀 케이스가 있으니 **고치고 나서 반드시 돌릴 것** — 장수가 어긋나면 그 자리에서 실패한다.
   */
  const CARDS_PER_PAGE = 6;

  /**
   * 이름만 잇는 줄에도 상한이 필요하다.
   *
   * 카드에 상한을 두어도 **이름 줄이 길이 제한 없이 자라면 지면은 여전히 넘칠 수 있다.**
   * 사전에 상징이 215개라 병적인 입력이면 그만큼 걸릴 수 있고, 그러면 이름 줄 하나가 몇
   * 문단이 된다. 상한을 카드에만 두는 것은 **임계값을 옮기는 것**이지 막는 것이 아니다.
   *
   * 여기까지 막아야 지면이 **구조적으로** 넘칠 수 없다 —
   * 카드 수 × 카드 높이 + 이름 줄 길이 + 고지, 셋 다 위가 막혀 있다.
   */
  const NAMES_MAX = 24;

  /** 이름 줄을 상한 안에서 만든다. 넘치면 **개수로 알린다** — 있었다는 사실은 지운 적이 없다. */
  const nameList = (items: typeof outcome.matched) => {
    const names = items.map((item) => symbolTerm(item, language));
    if (names.length <= NAMES_MAX) return names.join(", ");
    return t.andMore(names.slice(0, NAMES_MAX).join(", "), names.length - NAMES_MAX);
  };

  const foundShown = outcome.matched.slice(0, CARDS_PER_PAGE);
  const foundRest = outcome.matched.slice(CARDS_PER_PAGE);
  /**
   * 태몽 장은 카드 아래에 「함께 걸린 다른 상징」과 고지 두 문단이 더 붙는다. 그만큼 카드가
   * 앉을 자리가 줄어 상한이 하나 낮다.
   */
  const conceptionShown = conceptionSymbols.slice(0, CARDS_PER_PAGE - 1);
  const conceptionRest = conceptionSymbols.slice(CARDS_PER_PAGE - 1);
  const themes = themeLabels(outcome.themes, language);

  return (
    <Document>
      {/* 1 — 표지와 요약

          ⚠️ **제목·소제목도 `MixedText`를 거쳐야 한다.** 2026-08-07까지 이 자리들이 맨
          `<Text>`였고, 스타일에 `fontFamily`가 없어 @react-pdf가 Helvetica로 그렸다.
          영어 제목은 멀쩡히 나오니 스물두 언어에서 아무 문제가 없어 보였는데,
          **한국어판만 제목·소제목·소제목 넷이 통째로 깨져 있었다**(`Ü½ ¬ì¸`).
          이 서비스의 주 고객이 한국어 사용자다. */}
      <Page size="A4" style={styles.page}>
        <MixedText style={styles.title} text={t.title} />
        <MixedText style={styles.subtitle} text={t.subtitle(dictVersion)} />
        <MixedText style={styles.heading} text={t.yourDream} />
        <MixedText
          style={styles.paragraph}
          text={dreamTextRenderable ? dreamText : t.dreamOmittedNotice}
        />
        <MixedText style={styles.heading} text={t.atAGlance} />
        <MixedText
          style={styles.paragraph}
          text={
            outcome.matched.length
              ? t.summary(outcome.matched.length, conceptionSymbols.length, themes.join("·"))
              : t.noSymbols
          }
        />
        <Footer page={1} generatedAt={generatedAt} />
      </Page>

      {/* 2 — 걸린 상징 */}
      <Page size="A4" style={styles.page}>
        <MixedText style={styles.heading} text={t.foundHeading} />
        {outcome.matched.length ? (
          foundShown.map((item) => (
            <View key={item.id} style={styles.card} wrap={false}>
              <MixedText style={styles.term} text={symbolTerm(item, language)} />
              <MixedText style={styles.paragraph} text={meaningText(item.meaning, language)} />
              <MixedText
                style={styles.meta}
                text={`${contextText(item.meaning.context, language) ? t.context(item.meaning.context as string) : ""}${themeLabels(item.tags, language).join("·")}`}
              />
            </View>
          ))
        ) : (
          <MixedText style={styles.paragraph} text={t.foundEmpty} />
        )}
        {/* 상한 밖은 **버리지 않고** 이름만 잇는다(위 `CARDS_PER_PAGE` 주석 참고). */}
        {foundRest.length ? (
          <MixedText
            style={styles.notice}
            text={t.moreFound(nameList(foundRest))}
          />
        ) : null}
        <Footer page={2} generatedAt={generatedAt} />
      </Page>

      {/* 3 — 태몽으로 보는 이유 */}
      <Page size="A4" style={styles.page}>
        <MixedText style={styles.heading} text={t.conceptionHeading} />
        {conceptionSymbols.length ? (
          conceptionShown.map((item) => (
            <View key={item.id} style={styles.card} wrap={false}>
              <MixedText style={styles.term} text={symbolTerm(item, language)} />
              <MixedText style={styles.paragraph} text={meaningText(item.meaning, language)} />
              {/* **근거를 문서에도 싣는다**(2026-08-31). 유료 리포트라 더 그렇다 — 옛 사전은
                  근거 없는 해석에 「전통」 라벨만 붙어 있었고(§21), 돈을 낸 사람도 그것을
                  확인할 방법이 없었다. 어느 원문인지와 인용을 함께 적는다. */}
              {item.meaning.cites?.[0] ? (
                <MixedText
                  style={styles.meta}
                  text={`${meaningWorkLabel(meaningWork(item.meaning)!, language)} · ${
                    citeLines(item.meaning.cites[0], language).translation ??
                    item.meaning.cites[0].original
                  }`}
                />
              ) : null}
            </View>
          ))
        ) : (
          <MixedText style={styles.paragraph} text={t.conceptionEmpty} />
        )}
        {/* 이 장도 목록이라 같은 병을 가진다. 넘치는 태몽 상징도 이름만 잇는다. */}
        {conceptionRest.length ? (
          <MixedText
            style={styles.notice}
            text={t.moreFound(nameList(conceptionRest))}
          />
        ) : null}
        {others.length ? (
          <MixedText
            style={styles.notice}
            text={t.otherSymbols(nameList(others))}
          />
        ) : null}
        <MixedText style={styles.notice} text={t.conceptionNotice} />
        <Footer page={3} generatedAt={generatedAt} />
      </Page>

      {/* 4 — 간직하는 장 */}
      <Page size="A4" style={styles.page}>
        <MixedText style={styles.heading} text={t.keepHeading} />
        <MixedText style={styles.paragraph} text={t.keepBody} />
        <View style={styles.card}>
          <MixedText style={styles.meta} text={t.keepDate} />
        </View>
        <View style={styles.card}>
          <MixedText style={styles.meta} text={t.keepNote} />
        </View>
        <MixedText style={styles.notice} text={t.disclaimer} />
        <MixedText
          style={styles.notice}
          text={t.basis(dictVersion, outcome.engineVersion)}
        />
        <Footer page={4} generatedAt={generatedAt} />
      </Page>
    </Document>
  );
}

export async function renderConceptionReport(input: ConceptionReportInput) {
  // 첫 렌더에서 레이아웃 엔진을 깨워 둔다. 안 그러면 첫 결제 건만 눈에 띄게 느리다.
  await warmUpLayoutEngine();
  return renderToBuffer(<ConceptionReport {...input} />);
}
