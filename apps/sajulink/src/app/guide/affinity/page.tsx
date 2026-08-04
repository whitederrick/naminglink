import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "affinity";

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
      backLabel="계산 근거"
    >
      <GuideSection title="상대 자리를 비워 둔 채 계산합니다">
        <p>
          궁합은 두 사람을 맞대어 점수를 냅니다. <b>인연의 결</b>은 한 사람만 받고 상대 자리를
          비워 둔 채, 그 자리에 들어올 수 있는 값을 전부 대입해 봅니다. 궁합 엔진을 거꾸로 돌리는
          셈입니다.
        </p>
        <p>
          그래서 상대의 생년월일을 몰라도 됩니다. 아직 만나지 않은 사람에 대해서도 &ldquo;나와
          맞는 결이 어떤 쪽인가&rdquo;는 말할 수 있습니다.
        </p>
      </GuideSection>

      <GuideSection title="수백만 가지를 돌려 보지 않습니다">
        <p>
          사주 궁합의 점수는 네 항목으로 되어 있고, <b>각 항목이 보는 것이 서로 겹치지
          않습니다.</b>
        </p>
        <GuideTable
          head={["항목", "무엇을 축으로 삼는가", "경우의 수"]}
          rows={[
            ["일간 관계 · 배우자성", "두 사람의 일간 — 천간", "10"],
            ["오행 보완", "내 용신과 상대의 오행 세력", "5"],
            ["일지 관계", "두 사람의 일지 — 지지", "12"],
            ["띠 관계", "두 사람의 연지 — 지지", "12"],
          ]}
        />
        <p>
          항목끼리 값을 주고받지 않으므로 <b>축마다 따로 최고점을 찾으면 그것이 곧 전체의
          최고점</b>입니다. 생년월일 조합을 전부 돌려 볼 필요가 없습니다 — 천간 열, 지지 열둘,
          오행 다섯을 세우면 끝납니다.
        </p>
        <GuideNote title="같은 규칙을 씁니다">
          여기 쓰인 점수는 전부 궁합 엔진의 것을 그대로 불러 온 것입니다. 새 규칙을 만들지
          않았기 때문에, 여기서 1등으로 나온 유형은 실제 궁합에서도 그 항목의 점수가 가장
          높습니다. 궁합 규칙을 고치면 이 화면도 함께 따라옵니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="총점을 내지 않습니다">
        <p>
          이것이 이 화면에서 가장 중요한 결정입니다. 축별 1등을 모아 붙이면 &ldquo;완벽한
          상대&rdquo;가 나올 것 같지만, 그 사람은 <b>실존하지 않을 수 있습니다.</b>
        </p>
        <p>
          실제 사람에게서는 일간과 오행 세력이 따로 놀지 않기 때문입니다. 甲木인 사람은 대개 木
          기운도 두텁습니다. 축을 따로 세우는 이 방식은 그 상관을 무시하므로, 축별 1등을 이어
          붙인 값은 현실에 없는 조합이 됩니다.
        </p>
        <p>
          그래서 화면에는 <b>항목 점수만</b> 내보내고 총점은 내지 않습니다. 총점은 상대의
          생년월일을 받아{" "}
          <a
            href={localePath("/compatibility", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            사주 궁합
          </a>
          이 낼 일입니다.
        </p>
      </GuideSection>

      <GuideSection title="'맞는 유형'을 어떻게 읽어야 하나">
        <p>
          결과는 &ldquo;이런 결의 사람과 만나면 이 항목이 높게 나온다&rdquo;는 뜻입니다. 사람을
          고르는 기준이 아니라, 나를 이해하는 한 가지 각도로 읽어 주시는 편이 맞습니다.
        </p>
        <p>
          어떤 유형이 왜 높게 나왔는지는 항목별 근거로 함께 적습니다 — 일간의 짝이 유정한
          자리라서인지, 내가 지금 필요로 하는 기운을 그쪽이 많이 갖고 있어서인지.
        </p>
      </GuideSection>

      <GuideSection title="확인기">
        <p>
          마음에 둔 사람이 그 유형에 해당하는지 궁금하실 수 있습니다. 결과 화면의 확인기에
          생년월일을 넣으면 그 사람의 일간·일지·연지가 무엇인지 알려드립니다. 이때도 입력값은
          저장하지 않습니다{" "}
          <a
            href={localePath("/guide/no-storage", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            (저장하지 않는 방식)
          </a>
          .
        </p>
      </GuideSection>
    </GuideShell>
  );
}
