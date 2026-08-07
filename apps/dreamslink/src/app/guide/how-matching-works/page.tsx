import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "how-matching-works";

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
      <GuideSection title="적어 주신 문장에서 상징을 찾습니다">
        <p>
          꿈 이야기를 자유롭게 적으시면 그 글 안에서 사전에 있는 상징을 찾습니다. 항목을 고르거나
          형식에 맞춰 적으실 필요가 없습니다. 「어젯밤에 커다란 구렁이가 나를 감았다」처럼 평소
          말하듯 적으시면 됩니다.
        </p>
        <p>
          찾을 때는 상징의 이름만 보지 않고 <b>다르게 부르는 말 249개</b>를 함께 봅니다. 구렁이와
          뱀, 떨어지다와 빠지다처럼 같은 것을 가리키는 말들입니다. 「떨어지는」·「쫓겨서」·
          「빠졌다」처럼 어미가 붙어 모양이 바뀐 것도 걸립니다.
        </p>
      </GuideSection>

      <GuideSection title="낱말 안에 우연히 들어간 글자는 세지 않습니다">
        <p>
          한국어에서 가장 까다로운 자리입니다. 상징 중에는 <b>별</b>·<b>말</b>·<b>배</b>·
          <b>손</b>처럼 한 글자짜리가 예순 개쯤 있는데, 이것들은 다른 낱말 안에 아주 흔하게
          들어갑니다.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            「<b>특별</b>할 것 없는 하루였다」의 <b>별</b>
          </li>
          <li>
            「누군가에<b>게</b> 쫓겼다」의 <b>게</b>
          </li>
          <li>
            「그 사람이 <b>말</b>했다」의 <b>말</b>, 「<b>배</b>가 고팠다」의 <b>배</b>
          </li>
        </ul>
        <p>
          이런 것을 상징으로 세면 아무 상관 없는 풀이가 나갑니다. 그래서 앞뒤 글자를 함께 봅니다 —
          <b>앞에 한글이 붙어 있으면</b> 낱말의 조각으로 보고 세지 않고, <b>뒤에 붙은 것이 조사나
          어미인지</b>를 가려 「소가」는 통과시키고 「소리」는 걸러냅니다.
        </p>
        <GuideNote title="실제로 그렇게 나가고 있었습니다">
          이 규칙을 넣기 전에는 사람이 실제로 쓰는 문장 열두 개를 넣어 보았을 때{" "}
          <b>열둘 모두</b>에서 엉뚱한 상징이 걸렸습니다. 지금은 하나가 남습니다 — 「배가 고팠다」의
          배입니다. 소리가 같고 뜻이 다른 말이라 앞뒤 글자만으로는 가릴 수 없습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="같은 글이면 언제나 같은 결과가 나옵니다">
        <p>
          찾는 규칙에 우연이 들어가는 자리가 없습니다. 사전이 고정이고 규칙이 정해져 있으므로,
          같은 문장을 다시 넣으시면 <b>같은 상징이 같은 순서로</b> 나옵니다. 오늘 본 풀이와 내일
          본 풀이가 다르지 않습니다.
        </p>
        <p>
          이 성질은 저희가 지키기로 한 약속이기도 합니다. 볼 때마다 말이 달라지는 풀이는 재미는
          있어도 근거가 없습니다.{" "}
          <a
            href={localePath("/guide/no-ai", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            모델을 쓰지 않는 이유
          </a>
          와 이어지는 이야기입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
