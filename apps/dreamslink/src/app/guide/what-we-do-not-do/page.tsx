import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "what-we-do-not-do";

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
      <GuideSection title="복권 번호를 뽑아 드리지 않습니다">
        <p>
          해몽 서비스에서 흔히 함께 다루는 것이지만 저희는 하지 않습니다. <b>꿈에서 번호를 끌어낼
          근거가 전통 해몽에 없습니다.</b> 돼지꿈을 재물로 읽어 온 기록은 있어도, 거기서 숫자
          여섯 개가 나오는 규칙은 어느 문헌에도 없습니다.
        </p>
        <p>
          만들려면 저희가 지어내야 하고, 그 순간 이 서비스는 전해 오는 해석을 옮기는 곳이 아니게
          됩니다. 금전적 손해로 이어질 수 있는 자리라 더 그렇습니다.
        </p>
      </GuideSection>

      <GuideSection title="꿈일기를 만들지 않습니다">
        <p>
          지난 꿈을 모아 보는 기능이 있으면 편리하겠지만, 그러려면 <b>적어 주신 꿈을 계속
          보관해야 합니다.</b> 꿈 이야기는 이 서비스가 받는 값 중 가장 사적인 것이라 그 맞바꿈을
          하지 않기로 했습니다.
        </p>
        <p>
          대신 남기고 싶은 꿈은 <b>이미지나 문서로 가져가실 수 있게</b> 했습니다. 보관하는 주체가
          저희가 아니라 이용자분이 되는 방식입니다 —{" "}
          <a
            href={localePath("/guide/reports", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            꿈을 간직하는 두 가지 방법
          </a>
        </p>
      </GuideSection>

      <GuideSection title="임신과 성별을 판정하지 않습니다">
        <p>
          태몽으로 보아 온 상징이 나왔다는 사실까지만 말씀드립니다. 임신했는지, 아이가 딸인지
          아들인지는 <b>꿈으로 알 수 있는 일이 아닙니다.</b> 화면에서도 유료 문서에서도 그런 말은
          나오지 않습니다.
        </p>
      </GuideSection>

      <GuideSection title="액막이나 부적을 팔지 않습니다">
        <p>
          조심할 쪽으로 풀이되는 상징이 나왔다고 해서 무언가를 사야 할 이유는 없습니다. 흉몽은
          전통적으로 <b>지금 살펴볼 자리를 가리키는 말</b>로 쓰였지, 값을 치러 막는 것이
          아니었습니다.
        </p>
        <p>
          불안을 만들어 그것으로 무언가를 파는 방식은 쓰지 않습니다. 파는 것은 앞에 적은 두
          가지뿐이고, 둘 다 풀이 내용을 더 주는 것이 아니라 <b>같은 내용을 간직하는 방법</b>입니다.
        </p>
        <GuideNote title="앞일을 단정하지 않습니다">
          어떤 일이 일어난다거나, 언제 일어난다거나, 건강·재산·수명에 관해 단정하는 말은 하지
          않습니다. 전해 오는 상징의 뜻을 옮기는 것과 앞일을 맞히는 것은 다른 일입니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="없는 풀이를 지어내지 않습니다">
        <p>
          사전에 없는 상징은 <b>찾지 못했다고 말씀드립니다.</b> 비슷한 것을 끌어다 붙이거나
          그럴듯한 문장으로 자리를 채우지 않습니다. 그래서 이 서비스는{" "}
          <a
            href={localePath("/guide/no-ai", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            해몽에 인공지능을 쓰지 않습니다
          </a>
          . 모델은 모르는 것을 모른다고 말하지 않기 때문입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
