import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "reports";

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
      <GuideSection title="풀이 자체는 값을 받지 않습니다">
        <p>
          꿈을 적고 어떤 상징이 들어 있는지 보시는 데에는 <b>돈이 들지 않고 회원가입도 필요하지
          않습니다.</b> 사람은 매일 꿈을 꾸니 그 자리는 무료로 두어야 한다고 판단했습니다.
        </p>
        <p>
          <b>파는 두 가지는 더 나은 풀이가 아닙니다.</b> 같은 풀이를 <b>간직하는 두 가지
          방법</b>입니다. 화면에서 보신 내용이 결제 뒤에 달라지지 않습니다.
        </p>
      </GuideSection>

      <GuideSection title="꿈 카드 — 이미지 한 장">
        <p>
          꿈에서 찾은 상징과 그 뜻을 <b>그림 한 장</b>에 담아 드립니다. PDF가 아니라 이미지
          파일이라 그대로 저장하거나 남에게 보내실 수 있습니다.
        </p>
        <p>
          좋은 꿈을 꾸었을 때 화면을 닫으면 사라지는 것이 아쉬운 분들을 위한 것입니다. 저희가
          꿈을 저장하지 않으므로, 남기고 싶으시면 이렇게 가져가시는 방법뿐입니다.
        </p>
      </GuideSection>

      <GuideSection title="태몽 리포트 — 문서 네 장">
        <p>
          태몽으로 보이는 상징이 나온 꿈에 대해 <b>네 장짜리 문서</b>를 만들어 드립니다. 어떤
          상징이 나왔는지, 전통적으로 그 상징을 어떻게 읽어 왔는지, 그리고 그 기록을 남길 수 있는
          자리가 들어갑니다.
        </p>
        <p>
          태몽은 아이가 태어난 뒤에도 오래 이야기되고 가족끼리 나누는 일이 많아, 화면으로만 보고
          넘기기 아까운 꿈이라 따로 만들었습니다.
        </p>
        <GuideNote title="여기서도 하지 않는 말">
          임신 여부와 아이의 성별은 판정하지 않습니다. 문서에도 그런 말은 들어가지 않습니다.
          자세한 것은{" "}
          <a
            href={localePath("/guide/conception-dreams", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            태몽을 가리는 방식
          </a>
          에 적어 두었습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="값과 판매 여부">
        <p>
          가격은{" "}
          <a
            href={localePath("/pricing", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            요금 안내
          </a>
          에 있습니다. 이 문서에 금액을 적지 않은 것은 일부러입니다 — 값이 바뀌었을 때 안내
          문서만 옛 금액으로 남는 일을 막기 위해서입니다. 화면과 약관은 모두 같은 한 곳에서
          금액을 읽습니다.
        </p>
        <p>
          결제하신 문서는 <b>같은 주문으로 다시 받으실 수 있습니다.</b> 다만 저희가 파일을
          보관하지 않으므로 결과 화면을 벗어나면 다시 만들 수 없습니다 — 받으신 파일은 직접
          보관해 주세요.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
