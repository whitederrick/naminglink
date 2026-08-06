import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "symbol-dictionary";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="풀이 근거"
    >
      <GuideSection title="사전에 적힌 것만 보여드립니다">
        <p>
          드림링크의 풀이는 <b>미리 적어 둔 상징 사전</b>에서 나옵니다. 적어 주신 글에서 상징을
          찾고, 그 상징에 대해 사전이 적어 둔 뜻을 그대로 보여드립니다. 사전에 없는 말은 만들지
          않습니다.
        </p>
        <p>
          지금 사전에는 <b>상징 215개</b>가 실려 있고, 그 상징들이 가진 뜻이 모두{" "}
          <b>256가지</b>입니다. 상징 하나에 뜻이 하나뿐인 경우가 대부분이고, 상황에 따라 갈리는
          것들만 여럿을 가집니다.
        </p>
      </GuideSection>

      <GuideSection title="아홉 갈래로 나눠 두었습니다">
        <p>
          꿈에 나오는 것을 성격에 따라 아홉 갈래로 묶었습니다. 괄호 안이 지금 실린 수입니다.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>사물</b>(46) · <b>동물</b>(44) · <b>자연</b>(32) — 가장 두꺼운 세 갈래입니다.
            전통 해몽이 주로 말하는 것이 눈에 보이는 사물과 짐승, 그리고 하늘과 물입니다.
          </li>
          <li>
            <b>행위</b>(31) · <b>몸</b>(19) — 쫓기다·떨어지다처럼 무엇을 했는지, 이·머리카락처럼
            몸의 어디인지입니다.
          </li>
          <li>
            <b>사람</b>(17) · <b>장소</b>(16) · <b>빛깔</b>(6) · <b>수</b>(4)
          </li>
        </ul>
        <p>
          갈래별로 모아 보시려면{" "}
          <a
            href={localePath("/dream/symbols", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            상징 사전
          </a>
          에서 전체 목록을 보실 수 있습니다.
        </p>
      </GuideSection>

      <GuideSection title="전해 오는 근거를 댈 수 있는 것은 24개뿐입니다">
        <p>
          상징 가운데 <b>24개</b>에는 그렇게 풀이해 온 이유가 함께 적혀 있습니다. 이를테면 이가
          빠지는 꿈에서 윗니와 아랫니를 나누어 보는 까닭 같은 것입니다. 나머지 상징에는 그 자리가
          비어 있습니다.
        </p>
        <p>
          <b>비어 있는 자리를 채우지 않았습니다.</b> 그럴듯한 유래를 지어 넣으면 문서는 두꺼워
          지지만, 그 순간 이 사전은 전통을 옮긴 것이 아니라 꾸며낸 것이 됩니다. 근거를 댈 수 있는
          것과 없는 것을 구분해 두는 편이 정직합니다.
        </p>
        <GuideNote title="사전을 함부로 늘리지 않는 이유">
          상징을 수백 개로 늘려 보려고 실제로 시도했다가 접었습니다. 자동으로 만들어 낸 항목들은
          「연애 → 좋은 인연」처럼 같은 말을 되풀이하거나, 전해 오는 근거를 전혀 대지 못했습니다.
          숫자를 늘리는 것보다 <b>있는 것을 정확히 찾아 주는 쪽</b>이 낫다고 판단했습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="좋고 나쁨은 사전이 미리 정해 둡니다">
        <p>
          상징마다 길흉이 함께 적혀 있습니다. <b>좋은 쪽 107개</b>, <b>상황에 따라 갈리는 것
          59개</b>, <b>조심할 쪽 25개</b>, <b>어느 쪽도 아닌 것 24개</b>입니다.
        </p>
        <p>
          좋은 쪽이 절반을 넘는 것은 저희가 후하게 매겨서가 아니라 전통 해몽이 원래 그렇습니다 —
          돼지·용·불처럼 크고 강한 것을 대개 좋은 조짐으로 보아 왔습니다. 그렇다고 모든 꿈이 좋게
          나오지는 않습니다. 이 값은 상징 하나하나의 성격이고, 꿈 전체의 분위기는 찾은 상징들을
          모아 다시 셉니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
