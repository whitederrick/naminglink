import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "how-to-write";

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
      <GuideSection title="본 것과 한 것을 적어 주세요">
        <p>
          형식은 없습니다. 평소 말하듯 두세 문장이면 충분합니다. 다만 무엇이 잘 걸리는지는
          정해져 있습니다 — <b>눈에 보인 것</b>과 <b>벌어진 일</b>입니다.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            잘 걸립니다 — 「커다란 구렁이가 나를 감았다」, 「맑은 물이 흐르는 것을 보았다」,
            「높은 곳에서 떨어졌다」
          </li>
          <li>
            걸리지 않습니다 — 「무서웠다」, 「기분이 이상했다」, 「누군가 나를 미워하는 것
            같았다」
          </li>
        </ul>
        <p>
          느낌만 적으시면 찾을 상징이 없습니다. 전통 해몽이 감정이 아니라{" "}
          <a
            href={localePath("/guide/categories", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            사물과 행위
          </a>
          를 말하기 때문입니다.
        </p>
      </GuideSection>

      <GuideSection title="무엇을 했는지까지 적으시면 정확해집니다">
        <p>
          같은 상징이라도 상황에 따라 뜻이 갈리는 것이 59개 있습니다. 뱀을 품에 안는 것과 물리는
          것은 전통적으로 반대로 풀이해 왔습니다.
        </p>
        <p>
          그래서 「돼지를 봤다」보다 「돼지가 집으로 들어왔다」가, 「물이 있었다」보다 「맑은 물을
          마셨다」가 더 정확한 풀이로 이어집니다. <b>동사 하나가 뜻을 가릅니다.</b>
        </p>
      </GuideSection>

      <GuideSection title="기분과 되풀이 여부를 함께 여쭙는 이유">
        <p>
          꿈 내용 아래에 <b>깨어났을 때의 기분</b>과 <b>같은 꿈을 되풀이해 꾸는지</b>를 고르는
          자리가 있습니다. 둘 다 선택하지 않으셔도 결과는 나옵니다.
        </p>
        <p>
          이 값들은 상징을 찾는 데 쓰이지 않습니다. 같은 상징에서 <b>어느 뜻을 고를지</b> 판단할
          때와, 결과를 어떤 결로 전해 드릴지에 참고합니다. 되풀이해 꾸는 꿈은 전통적으로 한 번
          꾼 꿈과 다르게 여겨 왔습니다.
        </p>
        <GuideNote title="임신을 말씀하시는 경우">
          글에 임신·태몽·출산 같은 말이 들어 있으면, 그 상징이 가진 뜻 가운데 태몽 쪽을 먼저
          봅니다. 같은 돼지꿈이라도 상황에 따라 옛사람들이 다르게 읽었기 때문입니다 —{" "}
          <a
            href={localePath("/guide/conception-dreams", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            태몽을 가리는 방식
          </a>
        </GuideNote>
      </GuideSection>

      <GuideSection title="길게 쓰실 필요는 없습니다">
        <p>
          길이가 길다고 상징을 더 찾는 것은 아닙니다. 오히려 꿈과 상관없는 말이 길게 섞이면
          엉뚱한 낱말이 상징으로 걸릴 여지가 늘어납니다. <b>기억나는 장면만</b> 적어 주세요.
        </p>
        <p>
          적어 주신 글은 어디에도 저장되지 않습니다. 마음 놓고 적으셔도 되는 이유는{" "}
          <a
            href={localePath("/guide/no-storage", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            저장하지 않는 방식
          </a>
          에 적어 두었습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
