import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { STRONG_THRESHOLD, WEAK_THRESHOLD } from "@/lib/engines/yongsin";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "five-elements";

/** 엔진의 경계값을 백분율 문자열로. 손으로 적으면 규칙을 고쳤을 때 글만 옛 숫자로 남는다. */
const strongPct = `${Math.round(STRONG_THRESHOLD * 100)}%`;
const weakPct = `${Math.round(WEAK_THRESHOLD * 100)}%`;

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
      <GuideSection title="여덟 글자를 다섯 기운으로 셉니다">
        <p>
          천간 열 가지와 지지 열두 가지는 각각 <b>오행(五行)</b> 중 하나에 속합니다 — 목(木)·
          화(火)·토(土)·금(金)·수(水)입니다. 원국의 글자를 오행별로 세면 어느 기운이 두텁고
          어느 기운이 얇은지가 나옵니다.
        </p>
        <p>
          다만 개수만 세지는 않습니다. <b>태어난 달이 그 기운을 밀어 주는지</b>를 함께 봅니다.
          같은 한 글자라도 제철을 만난 기운과 그렇지 않은 기운은 힘이 다르기 때문입니다. 이것을
          월령(月令)이라 하고, 왕(旺)·상(相)·휴(休)·수(囚)·사(死) 다섯 단계로 나눕니다.
        </p>
        <GuideNote title="화면과 리포트가 갈리는 자리">
          무료 화면은 <b>월령을 반영한 뒤의 세력</b>만 보여 드립니다. 월령 전의 값과 왕상휴수사
          표는 유료 리포트에 실립니다 — 판정이 어디서 갈렸는지 직접 확인하시라고 넣은 것입니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="일간의 힘 — 신강과 신약">
        <p>
          오행 세력을 다 세고 나면 <b>일간이 강한지 약한지</b>를 가릅니다. 기준은 일간 편에 선
          기운의 비율입니다.
        </p>
        <p>
          일간 편은 <b>인성과 비겁</b>입니다 — 나를 낳아 주는 기운과 나와 같은 기운. 다섯 중
          둘이므로 아무 치우침이 없으면 40% 근처가 됩니다. 그 언저리를 중화로 두고 위아래를
          가릅니다.
        </p>
        <GuideTable
          head={["일간 편의 비율", "판정", "무엇을 뜻하나"]}
          rows={[
            [`${strongPct} 이상`, "신강(身强)", "일간을 돕는 기운이 넉넉하다"],
            [`${weakPct} 이상 ${strongPct} 미만`, "중화(中和)", "어느 쪽으로도 단정하기 어렵다"],
            [`${weakPct} 미만`, "신약(身弱)", "일간을 돕는 기운이 얇다"],
          ]}
        />
        <p>
          이 표의 숫자는 글에 옮겨 적은 것이 아니라 <b>엔진에서 그대로 읽어</b> 그립니다. 규칙을
          고치면 이 문서도 함께 바뀝니다.
        </p>
      </GuideSection>

      <GuideSection title="강약은 좋고 나쁨이 아닙니다">
        <p>
          신강이 좋고 신약이 나쁘다는 뜻이 아닙니다. 강하면 스스로 밀고 나가는 힘이 있는 대신
          한쪽으로 쏠리기 쉽고, 약하면 주변의 힘을 잘 빌리는 대신 혼자 오래 버티는 일에 지치기
          쉽습니다. <b>어느 쪽이든 필요한 기운이 다를 뿐</b>입니다.
        </p>
        <p>
          그 &ldquo;필요한 기운&rdquo;을 정하는 것이 용신이고,{" "}
          <a href={localePath("/guide/yongsin", locale)}>억부용신</a>에서 이어집니다.
        </p>
      </GuideSection>

      <GuideNote>
        여덟 글자가 어떻게 세워지는지는{" "}
        <a href={localePath("/guide/natal-chart", locale)}>사주 원국</a>에 있습니다. 오늘의
        일진이 이 세력과 어떻게 만나는지는{" "}
        <a href={localePath("/guide/today-fortune", locale)}>오늘의 운세</a>에서 다룹니다.
      </GuideNote>
    </GuideShell>
  );
}
