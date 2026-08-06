import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "categories";

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
      <GuideSection title="꿈에 나오는 것을 아홉으로 나눴습니다">
        <p>
          상징 215개를 성격에 따라 아홉 갈래로 묶었습니다. 나눈 기준은 <b>꿈에서 그것이 무엇으로
          나타나는가</b>입니다 — 짐승인지, 사물인지, 내가 한 행동인지.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>사물 46</b> — 돈·거울·칼처럼 손에 잡히는 것. 가장 두꺼운 갈래입니다.
          </li>
          <li>
            <b>동물 44</b> — 용·돼지·뱀·소. 태몽으로 보아 온 것이 이 갈래에 많습니다.
          </li>
          <li>
            <b>자연 32</b> — 물·불·해·달·산처럼 크고 오래된 것들입니다.
          </li>
          <li>
            <b>행위 31</b> — 쫓기다·떨어지다·날다처럼 꿈에서 한 일입니다.
          </li>
          <li>
            <b>몸 19</b> — 이·머리카락·피. 몸의 어디인지에 따라 뜻이 갈립니다.
          </li>
          <li>
            <b>사람 17</b> · <b>장소 16</b> · <b>빛깔 6</b> · <b>수 4</b>
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="왜 감정 갈래가 없나">
        <p>
          「불안」·「그리움」 같은 갈래를 두지 않았습니다. <b>전통 해몽이 감정을 말하지 않기
          때문</b>입니다. 옛 해몽은 눈에 보인 것과 벌어진 일을 말하지, 꿈꾼 사람의 기분을 풀이
          대상으로 삼지 않았습니다.
        </p>
        <p>
          감정 갈래를 만들려고 해 본 적이 있는데, 나온 것이 「애정의 상실」·「정서적 안정」 같은
          말들이었습니다. 꿈에 나오는 <b>형상</b>이 아니라 현대 심리학의 어휘입니다. 그것은 다른
          종류의 서비스이고, 이 사전이 하려는 일이 아닙니다.
        </p>
        <GuideNote title="그래서 적으실 때도">
          느낌보다 <b>본 것과 한 것</b>을 적어 주시면 훨씬 잘 걸립니다. 다만 깨어났을 때의 기분은
          따로 여쭙습니다 — 같은 상징이라도 상황에 따라 뜻이 갈리는 자리에서 참고합니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="빛깔과 수는 혼자 쓰이지 않습니다">
        <p>
          빛깔 6개와 수 4개는 그 자체로 좋고 나쁨이 없습니다. 흰 뱀과 검은 뱀이 다르듯{" "}
          <b>무엇에 붙는지에 따라</b> 뜻이 달라지기 때문입니다. 그래서 이 두 갈래는 다른 상징과
          함께 나올 때 읽는 값으로 두었습니다.
        </p>
        <p>
          갈래별 전체 목록은{" "}
          <a
            href={localePath("/dream/symbols", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            상징 사전
          </a>
          에 있습니다. 상징 하나를 열면 전해 오는 뜻·갈래·관련 상징이 함께 나옵니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
