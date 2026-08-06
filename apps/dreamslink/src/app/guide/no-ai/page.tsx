import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "no-ai";

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
      <GuideSection title="해몽에는 인공지능이 쓰이지 않습니다">
        <p>
          요즘 해몽 서비스 상당수가 생성형 모델에 꿈 이야기를 넣고 나온 글을 보여드립니다.
          드림링크는 그렇게 하지 않습니다. <b>풀이를 만드는 자리에 모델을 부르는 코드가
          없습니다.</b>
        </p>
        <p>
          하는 일은 단순합니다. 적어 주신 글에서 사전에 있는 상징을 찾고, 그 상징에 대해 사전이
          적어 둔 뜻을 골라 보여드립니다. 사전에 없는 문장이 나올 자리가 없습니다.
        </p>
      </GuideSection>

      <GuideSection title="왜 그렇게 정했나">
        <p>
          <b>모델은 모르는 것을 모른다고 말하지 않습니다.</b> 전해 오는 근거가 없는 상징에 대해
          물으면 그럴듯한 유래를 지어냅니다. 그리고 그것이 지어낸 것인지 아닌지는 읽는 분이 알 수
          없습니다. 전통을 옮긴다고 하면서 그 자리에 창작을 넣으면 서비스의 전제가 무너집니다.
        </p>
        <p>
          실제로 사전을 넓히려고 모델에게 상징을 만들게 해 본 적이 있습니다. 채택할 만한 것으로
          추린 66개 가운데 <b>55개가 전해 오는 근거를 전혀 대지 못했고</b>, 지하철·고속도로처럼
          전통 해몽에 있을 수 없는 것들도 섞여 나왔습니다. 그래서 <b>하나도 넣지 않았습니다.</b>
        </p>
        <GuideNote title="더 큰 모델을 써도 마찬가지였습니다">
          같은 일을 더 좋은 모델로 다시 해 보았더니 19개 중 1개가 통과했고, 그 하나도 근거 자리가
          같은 말의 되풀이였습니다. 큰 모델은 모르는 것을 <b>더 그럴듯하게</b> 말할 뿐이었습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="모델을 쓰지 않아서 생기는 좋은 점">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>같은 꿈이면 같은 풀이가 나옵니다.</b> 볼 때마다 말이 달라지지 않습니다.
          </li>
          <li>
            <b>빠릅니다.</b> 모델의 답을 기다릴 일이 없어 결과가 곧바로 열립니다.
          </li>
          <li>
            <b>적어 주신 꿈이 외부로 나가지 않습니다.</b> 바깥 회사의 서버로 보낼 일이 없습니다 —{" "}
            <a
              href={localePath("/guide/no-storage", locale)}
              className="font-semibold text-brand-violet underline underline-offset-2"
            >
              저장하지 않는 방식
            </a>
            과 함께 읽어 주세요.
          </li>
          <li>
            <b>무료로 둘 수 있습니다.</b> 꿈은 매일 꾸는 것이라 조회가 많습니다. 조회마다 모델을
            부르면 그 비용을 어딘가에서 받아야 합니다.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="대신 포기한 것">
        <p>
          사전에 없는 것은 풀이하지 못합니다. 모델을 썼다면 무엇을 적으셔도 그럴듯한 답이
          나왔을 것입니다. 저희는 <b>못 찾았을 때 못 찾았다고 말하는 쪽</b>을 골랐습니다. 그때
          무엇을 보여드리는지는{" "}
          <a
            href={localePath("/guide/not-found", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            상징을 찾지 못했을 때
          </a>
          에 적어 두었습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
