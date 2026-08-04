import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { DEFAULT_SCORING_CONFIG as CFG } from "@/lib/engines/today-fortune";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "today-fortune";

/** 가감은 전부 엔진 설정에서 읽는다. 글에 숫자를 적어 두면 규칙을 고쳤을 때 여기만 옛값으로 남는다. */
const signed = (n: number) => (n > 0 ? `+${n}` : String(n));

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);
  const [clampLow, clampHigh] = CFG.clamp;

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="계산 근거"
    >
      <GuideSection title="오늘도 여덟 글자와 같은 방식으로 세웁니다">
        <p>
          날마다 그 날의 <b>일진(日辰)</b>이 있습니다. 원국의 일주를 세우는 것과 똑같은 방법으로
          오늘 하루에도 천간 하나와 지지 하나가 붙습니다. 오늘의 운세는 그 두 글자를 원국에 대어
          보는 것입니다.
        </p>
        <p>
          기준 점수는 <b>{CFG.base}점</b>입니다. 여기에 아래 항목들이 더해지고 빠지며, 마지막에{" "}
          {clampLow}점과 {clampHigh}점 사이로 가둡니다 — 0점이나 100점이라는 말은 하지 않습니다.
        </p>
      </GuideSection>

      <GuideSection title="① 오늘의 기운이 내게 필요한 것인가">
        <p>
          가장 크게 보는 자리입니다.{" "}
          <a href={localePath("/guide/yongsin", locale)}>억부용신</a>으로 정한 &ldquo;지금 필요한
          기운&rdquo;에 오늘의 기운이 해당하는지를 봅니다.
        </p>
        <GuideTable
          head={["오늘의 기운이", "가감"]}
          rows={[
            ["지금 필요한 기운이다", signed(CFG.yongsinRelation.todayIsYongsin)],
            ["필요한 기운을 낳아 준다", signed(CFG.yongsinRelation.todayGeneratesYongsin)],
            ["필요한 기운을 누른다", signed(CFG.yongsinRelation.todayControlsYongsin)],
            ["이미 넘치는 쪽을 더 밀어붙인다", signed(CFG.yongsinRelation.todayIsGisin)],
          ]}
        />
        <GuideNote title="기신을 '용신이 아닌 전부'로 두지 않습니다">
          그렇게 두면 용신을 낳아 주는 기운과 용신을 누르는 기운까지 전부 나쁜 것이 되어, 위 표의
          아래 두 줄이 구별되지 않습니다. 억부의 뜻대로 <b>반대 방향으로 더 밀어붙이는 기운만</b>{" "}
          기신으로 봅니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="② 오늘의 천간이 일간과 맺는 관계">
        <p>
          오행의 상생·상극을 일간과 오늘의 천간 사이에 그대로 적용합니다.
        </p>
        <GuideTable
          head={["관계", "가감"]}
          rows={[
            ["오늘이 나를 낳아 준다", signed(CFG.dayMasterRelation.generatesSelf)],
            ["오늘과 내가 같은 기운이다", signed(CFG.dayMasterRelation.sameElement)],
            ["내가 오늘을 누른다", signed(CFG.dayMasterRelation.selfControls)],
            ["내가 오늘로 흘러 나간다", signed(CFG.dayMasterRelation.selfGenerates)],
            ["오늘이 나를 누른다", signed(CFG.dayMasterRelation.controlsSelf)],
          ]}
        />
      </GuideSection>

      <GuideSection title="③ 오늘의 지지가 원국의 지지와 만나는 자리">
        <p>
          오늘의 지지를 원국의 지지들과 대어 봅니다. 관계표 자체는{" "}
          <a href={localePath("/guide/branches", locale)}>십이지 관계</a>에 있습니다.
        </p>
        <GuideTable
          head={["관계", "가감"]}
          rows={[
            ["삼합(三合)", signed(CFG.branchRelation.samhap)],
            ["육합(六合)", signed(CFG.branchRelation.yukhap)],
            ["반합(半合)", signed(CFG.branchRelation.banhap)],
            ["원진(怨嗔)", signed(CFG.branchRelation.wonjin)],
            ["충(沖)", signed(CFG.branchRelation.chung)],
          ]}
        />
        <p>
          기둥이 여럿이라 관계도 여럿 생깁니다. 다 더하되 이 항목 전체가{" "}
          <b>±{CFG.branchRelation.maxAbs}점</b>을 넘지 않게 가둡니다 — 지지 관계 하나로 하루가
          통째로 정해지지 않도록 하려는 것입니다.
        </p>
      </GuideSection>

      <GuideSection title="④ 강약에 따른 보정">
        <p>
          같은 기운이 와도 신강한 사람과 신약한 사람에게 뜻이 다릅니다. 그래서 마지막에 한 번 더
          조정합니다.
        </p>
        <GuideTable
          head={["상황", "가감"]}
          rows={[
            ["신약한데 오늘이 받쳐 준다", signed(CFG.strengthAdjust.weakTodayHelps)],
            ["신강한데 오늘이 알맞게 덜어 준다", signed(CFG.strengthAdjust.strongTodayDrains)],
            ["신강한데 오늘이 더 두텁게 한다", signed(CFG.strengthAdjust.strongTodayHelps)],
            ["신약한데 오늘이 짐을 더한다", signed(CFG.strengthAdjust.weakTodayBurdens)],
          ]}
        />
      </GuideSection>

      <GuideSection title="등급과 분야별 점수">
        <p>총점은 다섯 등급으로 나눕니다.</p>
        <GuideTable
          head={["점수", "등급"]}
          rows={CFG.grades.map((grade) => [
            `${grade.min}점 이상`,
            grade.code === "DAEGIL"
              ? "대길(大吉)"
              : grade.code === "GIL"
                ? "길(吉)"
                : grade.code === "PYEONG"
                  ? "평(平)"
                  : grade.code === "JUUI"
                    ? "주의(注意)"
                    : "조심(操心)",
          ])}
        />
        <p>
          재물·애정·직업·건강 네 분야는 총점을{" "}
          {Math.round(CFG.categoryWeights.overallShare * 100)}%만큼 물려받고, 나머지는 그 분야에
          해당하는 십신과 지지 관계로 갈립니다. 그래서 총점이 같아도 분야별 숫자는 사람마다
          다릅니다.
        </p>
      </GuideSection>

      <GuideNote>
        위 숫자는 전부 엔진 설정(<code>engines/today-fortune.ts</code>)에서 읽어 그립니다. 규칙을
        고치면 이 문서도 함께 바뀌고, 점수가 움직이는 변경은{" "}
        <a href={localePath("/notice", locale)}>공지사항</a>에 먼저 올립니다.
      </GuideNote>
    </GuideShell>
  );
}
