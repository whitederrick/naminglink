import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "one-symbol-many-meanings";

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
      <GuideSection title="상징이 같아도 상황이 다르면 뜻이 다릅니다">
        <p>
          전통 해몽에서 상징 하나가 늘 한 가지 뜻을 갖는 것은 아닙니다. 같은 뱀이라도{" "}
          <b>품에 안는 것과 물리는 것은 정반대로 풀이해 왔습니다.</b> 사전도 그렇게 적혀 있습니다.
        </p>
        <p>
          상징 215개가 가진 뜻이 모두 256가지인 것은 그 때문입니다. 뜻마다{" "}
          <b>어떤 상황일 때의 뜻인지</b>가 함께 적혀 있어, 적어 주신 글에서 그 상황이 보이면 그
          뜻을 고릅니다.
        </p>
      </GuideSection>

      <GuideSection title="상황을 어떻게 알아보나">
        <p>
          적어 주신 문장에 그 상황을 가리키는 말이 들어 있는지를 봅니다. 「뱀이 나를 물었다」에는
          무는 상황이 적혀 있고, 「뱀을 품에 안았다」에는 안는 상황이 적혀 있습니다. 상황을
          가리키는 말이 없으면 그 상징의 <b>기본 뜻</b>으로 풀이합니다.
        </p>
        <p>
          그래서 꿈을 적으실 때 <b>무엇이 나왔는지만이 아니라 무엇을 했는지까지</b> 적어 주시면
          풀이가 정확해집니다. 「돼지를 봤다」보다 「돼지가 집으로 들어왔다」가 더 많은 것을
          말해 줍니다.
        </p>
        <GuideNote title="적을수록 나아지지만, 길게 쓰실 필요는 없습니다">
          문장 두세 개면 충분합니다. 길게 적으신다고 상징을 더 많이 찾는 것은 아니고, 오히려 꿈과
          상관없는 말이 섞이면 엉뚱한 상징이 걸릴 수 있습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="뜻이 갈리는 상징은 39개입니다">
        <p>
          사전의 상징 215개 가운데 <b>39개</b>가 상황에 따라 뜻이 갈립니다. 나머지는 어느
          상황에서든 한 방향으로 읽어 온 것들입니다.
        </p>
        <p>
          이 39개가 가장 조심스러운 자리입니다. 상황을 잘못 읽으면 좋은 소식을 나쁜 소식으로,
          혹은 그 반대로 전하게 되기 때문입니다. 그래서 상황이 분명하지 않으면{" "}
          <b>억지로 한쪽을 고르지 않고 그 상징의 기본 뜻</b>으로 갑니다 — 확실하지 않은 것을
          확실한 것처럼 말하지 않으려는 것입니다.
        </p>
        <GuideNote title="깨어났을 때의 기분도 참고합니다">
          꿈 내용 아래에서 여쭙는 기분과 되풀이 여부는 상징을 찾는 데 쓰이지 않습니다. 뜻이
          갈리는 자리에서 어느 쪽으로 읽을지 판단할 때 참고합니다. 고르지 않으셔도 결과는
          나옵니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="꿈 전체의 분위기는 따로 셉니다">
        <p>
          찾은 상징이 여럿이면 그 상징들이 각각 좋은 쪽인지 조심할 쪽인지를 모아 꿈 전체의 결을
          냅니다. 좋은 상징 하나와 조심할 상징 하나가 함께 나온 꿈을 「좋은 꿈」이라고만 말하지
          않습니다.
        </p>
        <p>
          갈래별 상징과 각각의 뜻은{" "}
          <a
            href={localePath("/dream/symbols", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            상징 사전
          </a>
          에서 미리 보실 수 있습니다. 꿈을 적기 전에 어떤 것이 실려 있는지 훑어보셔도 좋습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
