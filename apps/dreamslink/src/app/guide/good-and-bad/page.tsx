import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "good-and-bad";

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
      <GuideSection title="상징마다 네 가지 중 하나가 매겨져 있습니다">
        <p>사전의 상징 215개는 각각 다음 중 하나로 적혀 있습니다.</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>좋은 쪽 107개</b> — 재물·경사·귀인처럼 반가운 일로 풀이해 온 것들입니다.
          </li>
          <li>
            <b>상황에 따라 갈리는 것 59개</b> — 뱀처럼 무엇을 했는지에 따라 뜻이 뒤집히는
            것들입니다. 이 갈래가 가장 조심스럽습니다.
          </li>
          <li>
            <b>조심할 쪽 25개</b> — 구설·다툼·손실로 보아 온 것들입니다.
          </li>
          <li>
            <b>어느 쪽도 아닌 것 24개</b> — 빛깔이나 수처럼 그 자체로는 길흉이 없는 것들입니다.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="좋은 쪽이 절반을 넘는 이유">
        <p>
          저희가 후하게 매겨서가 아닙니다. <b>전통 해몽이 원래 그렇습니다.</b> 돼지·용·불·물처럼
          크고 강한 것을 대개 좋은 조짐으로 보아 왔고, 사전은 그 전승을 그대로 옮긴 것입니다.
        </p>
        <p>
          그래서 「좋은 상징이 나왔다」는 사실이 「좋은 일이 일어난다」는 뜻은 아닙니다. 전해 오는
          해석에서 그 상징을 어떻게 보아 왔는가까지가 저희가 말할 수 있는 전부입니다.
        </p>
      </GuideSection>

      <GuideSection title="꿈 하나의 결은 상징들을 모아 냅니다">
        <p>
          찾은 상징이 여럿이면 각각의 길흉을 모아 꿈 전체의 결을 냅니다. 좋은 쪽만 나왔으면 좋은
          꿈으로, 조심할 쪽만 나왔으면 조심할 꿈으로, <b>섞여 있으면 섞인 대로</b> 말씀드립니다.
        </p>
        <p>
          섞인 것을 억지로 한쪽으로 몰지 않습니다. 실제로 사람이 꾸는 꿈은 대개 섞여 있고, 그것을
          「좋은 꿈입니다」로 정리해 버리면 맞는 말도 아니고 도움도 되지 않습니다.
        </p>
        <GuideNote title="하지 않는 말">
          어떤 일이 일어난다거나, 언제 일어난다거나, 건강·재산에 관해 단정하는 말은 하지 않습니다.
          전해 오는 상징의 뜻을 옮기는 것과 앞일을 맞히는 것은 다른 일입니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="조심할 꿈이 나왔을 때">
        <p>
          조심할 쪽으로 풀이되는 상징이 나와도 그 자체가 나쁜 소식은 아닙니다. 전통 해몽에서
          흉몽은 대개 <b>지금 살펴볼 자리를 가리키는 말</b>로 쓰여 왔습니다. 다툼으로 보아 온
          상징이 나왔다면 말을 아끼라는 정도로 읽으시면 됩니다.
        </p>
        <p>
          같은 이유로 이 서비스는 액막이나 부적 같은 것을 팔지 않습니다. 파는 것은{" "}
          <a
            href={localePath("/guide/reports", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            꿈을 간직하는 두 가지 방법
          </a>
          뿐입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
