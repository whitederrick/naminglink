import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "conception-dreams";

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
      <GuideSection title="먼저 분명히 해 둘 것">
        <p>
          <b>드림링크는 임신 여부를 판정하지 않습니다. 아이의 성별도 말하지 않습니다.</b> 그것은
          꿈으로 알 수 있는 일이 아니고, 저희가 할 수 있는 일도 아닙니다.
        </p>
        <p>
          저희가 말씀드리는 것은 여기까지입니다 — <b>전통적으로 태몽으로 보아 온 상징이 이 꿈에
          나왔다</b>는 사실. 그 상징을 옛사람들이 어떤 뜻으로 읽었는지까지가 전부입니다.
        </p>
      </GuideSection>

      <GuideSection title="태몽으로 보아 온 상징은 27개입니다">
        <p>
          사전의 상징 215개 가운데 <b>27개</b>에 태몽 표시가 붙어 있습니다. 용·돼지·구렁이처럼
          짐승이 많고, 복숭아·밤처럼 열매도 있으며, 해와 달도 들어갑니다.
        </p>
        <p>
          다만 <b>그 상징이 나왔다고 곧바로 태몽으로 보지는 않습니다.</b> 여기가 이 서비스가
          공을 들인 자리입니다.
        </p>
      </GuideSection>

      <GuideSection title="상징이 아니라 고른 뜻으로 판정합니다">
        <p>
          돼지는 태몽 상징이면서 동시에 <b>재물 꿈의 대표</b>입니다. 상징이 나왔다는 이유만으로
          태몽이라고 하면, 돼지꿈을 꾼 사람이 전부 태몽을 꾼 것이 됩니다. 실제로는 대부분 재물
          꿈으로 풀이해 왔습니다.
        </p>
        <p>
          그래서 상징이 아니라 <b>그 상징에서 실제로 고른 뜻</b>을 봅니다. 적어 주신 상황에서
          태몽 쪽 뜻이 골라졌을 때만 태몽으로 표시합니다. 같은 돼지라도 문장이 다르면 판정이
          달라집니다.
        </p>
        <GuideNote title="임신을 말씀하시면 그쪽을 먼저 봅니다">
          적어 주신 글에 임신·태몽·출산 같은 말이 들어 있으면, 그 상징이 가진 뜻 가운데 태몽 쪽을
          먼저 고릅니다. 같은 꿈이라도 지금 어떤 상황인지에 따라 옛사람들이 다르게 읽었기
          때문입니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="태몽 리포트를 따로 두는 이유">
        <p>
          태몽은 다른 꿈과 쓰임이 다릅니다. 아이가 태어난 뒤에도 오래 이야기되고, 가족끼리
          나누는 일이 많습니다. 그래서 화면으로만 보고 넘기기보다 <b>남겨 둘 수 있는 문서</b>를
          따로 만들었습니다.
        </p>
        <p>
          무엇이 담기는지는{" "}
          <a
            href={localePath("/guide/reports", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            꿈을 간직하는 두 가지 방법
          </a>
          에 적어 두었습니다. 화면에서 보시는 풀이는 구매하지 않으셔도 전부 보실 수 있습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
