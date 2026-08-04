import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "no-storage";

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
      <GuideSection title="회원가입이 없습니다">
        <p>
          사주링크는 계정을 만들지 않습니다. 이름도, 이메일도, 전화번호도 받지 않습니다. 받는
          것은 생년월일과 (선택으로) 출생 시각·태어난 곳·성별뿐이고, 그것도 계산이 끝나면
          남지 않습니다.
        </p>
        <p>
          결과 화면에 표시할 호칭을 적는 칸이 있지만, 그것은 <b>화면에 보여드리기 위한 것</b>
          이고 계산에 쓰이지 않습니다. 본명을 넣지 않으셔도 됩니다.
        </p>
      </GuideSection>

      <GuideSection title="결과 링크에는 무엇이 담기나">
        <p>
          계산이 끝나면 주소가 이렇게 생깁니다.
        </p>
        <p className="overflow-x-auto rounded-lg border border-line bg-surface-strong px-4 py-3 font-mono text-xs leading-6">
          /ko/reading/result<b className="text-brand-plum">#</b>
          eyJhIjp7InkiOjE5OTAsLi4u
        </p>
        <p>
          <b>#</b> 뒤에 붙은 것이 입력값입니다. 이 부분을 <b>프래그먼트</b>라고 부르는데,{" "}
          <b>브라우저가 서버로 보내지 않는 부분</b>입니다. 웹의 표준 동작이고 우리가 만든
          규칙이 아닙니다 — 원래 한 문서 안에서 위치를 가리키려고 만들어진 자리라 서버는 볼
          일이 없습니다.
        </p>
        <p>
          즉 결과 링크를 여시면 브라우저가 그 값을 읽어 계산을 요청하고, 우리 서버는 계산에 쓸
          값을 받아 답을 돌려준 뒤 그대로 잊습니다.
        </p>
        <GuideNote title="링크를 남에게 보낼 때는 유의해 주세요">
          서버에 저장되지 않는다는 것과 링크가 안전하다는 것은 다릅니다. 결과 링크에는 두 분의
          생년월일이 담겨 있으므로, 그 링크를 받은 사람은 같은 결과를 볼 수 있습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="계산은 서버에서 하는데 왜 안 남나">
        <p>
          계산 자체는 서버에서 합니다. 사주를 뽑는 데 만세력 표가 필요하고 그 표는 브라우저로
          내려보내기에 큽니다. 다만 <b>요청을 처리하고 나면 그 값을 어디에도 쓰지 않습니다.</b>{" "}
          데이터베이스에 넣는 코드가 없습니다.
        </p>
        <p>
          운영에 필요한 최소한의 기록은 남습니다 — 같은 사람이 짧은 시간에 지나치게 많은 요청을
          보내는 것을 막기 위한 카운터입니다. 여기에는 생년월일이 들어가지 않고, 접속 IP도 그대로
          두지 않습니다. 날짜와 함께 해시로 바꾼 값 하나만 세고, 날이 바뀌면 그 값도 달라집니다.
        </p>
      </GuideSection>

      <GuideSection title="저장하지 않아서 못 하는 것">
        <p>정직하게 밝히면, 저장하지 않기 때문에 포기한 것들이 있습니다.</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>지난 결과를 다시 꺼내 볼 수 없습니다.</b> 링크를 갖고 계셔야 다시 보실 수
            있습니다.
          </li>
          <li>
            <b>같은 값을 다시 계산합니다.</b> 캐시가 없기 때문입니다. 대신 모든 규칙이 결정적이라{" "}
            <a
              href={localePath("/guide/natal-chart", locale)}
              className="font-semibold text-brand-plum underline underline-offset-2"
            >
              같은 입력이면 언제나 같은 값
            </a>
            이 나옵니다.
          </li>
          <li>
            <b>새로고침하면 광고 게이트가 다시 나옵니다.</b> 시청 기록을 남길 곳이 없기
            때문입니다.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="구매하시는 경우">
        <p>
          리포트를 구매하시면 그때는 거래 기록이 남습니다. 결제는 법으로 보관 기간이 정해져
          있고, 주문 내역이 없으면 환불도 처리할 수 없기 때문입니다. 다만 이때도 <b>사주 계산에
          쓴 생년월일은 주문에 붙지 않습니다</b> — 결제 확인 후 PDF를 만들 때 다시 받아 그
          자리에서 씁니다.
        </p>
        <p>
          자세한 것은{" "}
          <a
            href={localePath("/privacy", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            개인정보처리방침
          </a>
          에 적어 두었습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
