import type { ReactNode } from "react";

import { GuideNote, GuideSection, GuideStats } from "@/components/GuideShell";
import type { DocBlock, DocSection } from "@/lib/doc-content/types";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/services";

/**
 * 편집 문서(안내·소개·공지·문의)의 본문을 자료에서 그린다.
 *
 * **표기는 둘뿐이다** — `**굵게**`와 `[보이는 말](/경로)`. 자료형(`doc-content/types.ts`)에
 * 이유를 적어 두었다. 표기를 늘리면 번역기가 깨뜨릴 자리와 그것을 세는 검사기가 함께 는다.
 *
 * ## 왜 HTML을 문자열로 넣지 않는가
 *
 * `dangerouslySetInnerHTML`이면 표기를 늘릴 필요가 없어 편하지만, 번역기가 만든 문자열을 그대로
 * HTML로 실행하게 된다. 23개 언어를 사람이 다 읽어 볼 수 없는 이상 그 자리는 열어 두면 안 된다.
 * 여기서는 **아는 표기만 골라내고 나머지는 전부 글자로** 그린다.
 *
 * 링크 경로에 로케일을 붙이는 것도 이 파일의 몫이다. 자료에는 `/contact`라고만 적혀 있다 —
 * 자료에 `/ja/contact`를 적으면 그 문장은 일본어판에서만 맞는 말이 된다.
 */

/**
 * `{email}` 같은 자리표시자를 실제 값으로 바꾼다.
 *
 * **모르는 이름은 그대로 둔다.** 빈 문자열로 지우면 「이메일: 」처럼 값이 빠진 문장이 나가는데,
 * 그것은 사업자 정보 표시 의무를 어긴 화면이 조용히 배포되는 길이다. 자리표시자가 글자 그대로
 * 남으면 눈에 띄고 검사기도 잡는다.
 */
function fill(text: string, values: Record<string, string>) {
  return text.replace(/\{([a-zA-Z]+)\}/g, (whole, name: string) => values[name] ?? whole);
}

/** `**굵게**`와 `[말](/경로)`을 갈라 낸다. 아는 표기가 아니면 글자 그대로 둔다. */
function inline(text: string, locale: Locale): ReactNode[] {
  const nodes: ReactNode[] = [];
  // 굵게와 링크를 한 번에 훑는다. 겹치지 않으므로 순서대로 잘라 내면 된다.
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[1] !== undefined) {
      nodes.push(<b key={`b${match.index}`}>{match[1]}</b>);
    } else {
      nodes.push(
        <a key={`a${match.index}`} href={localePath(match[3]!, locale)}>
          {match[2]}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** 채우지 못한 자리표시자가 남았는가. 남았으면 그 블록은 그리지 않는다. */
const unresolved = (text: string) => /\{[a-zA-Z]+\}/.test(text);

function Block({
  block,
  locale,
  values,
}: {
  block: DocBlock;
  locale: Locale;
  values: Record<string, string>;
}) {
  if ("stats" in block) {
    const items = block.stats.map((item) => ({
      value: fill(item.value, values),
      label: fill(item.label, values),
    }));
    // 숫자를 못 채웠으면 판을 통째로 뺀다 — 빈 칸이 있는 숫자판은 자료가 틀린 것처럼 보인다.
    if (items.some((item) => unresolved(item.value))) return null;
    return <GuideStats items={items} />;
  }

  if ("ul" in block) {
    const items = block.ul.map((item) => fill(item, values));
    if (items.some(unresolved)) return null;
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{inline(item, locale)}</li>
        ))}
      </ul>
    );
  }

  const text = fill(block.p, values);
  if (unresolved(text)) return null;
  return <p>{inline(text, locale)}</p>;
}

export function DocBody({
  sections,
  locale,
  /** `{email}` 같은 자리표시자를 채울 값. 사업자 정보는 화면이 DB에서 읽어 넘긴다. */
  values = {},
}: {
  sections: readonly DocSection[];
  locale: Locale;
  values?: Record<string, string>;
}) {
  return (
    <>
      {sections.map((section, index) => {
        const blocks = section.blocks.map((block, blockIndex) => (
          <Block key={blockIndex} block={block} locale={locale} values={values} />
        ));

        return section.kind === "note" ? (
          <GuideNote key={index} title={section.title}>
            {blocks}
          </GuideNote>
        ) : (
          // 제목 없는 절은 `GuideSection`이 받지 않는다(제목이 필수다). 그런 자리는 note로 쓴다.
          <GuideSection key={index} title={section.title ?? ""}>
            {blocks}
          </GuideSection>
        );
      })}
    </>
  );
}
