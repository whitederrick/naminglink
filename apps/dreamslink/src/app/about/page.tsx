import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";
import { DREAM_SYMBOLS } from "@/lib/dream-symbols";

/**
 * 소개 — 누가 만들고 무엇을 하는 곳인가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 꿈으로 사람의 앞일을 말하는 서비스라면, 무엇을 근거로 삼고 무엇을 말하지 않는지 밝히는 것이
 * 그보다 먼저다.
 *
 * 글은 한국어와 영어 두 벌이다. 안내 문서와 같은 기준이다.
 * 사업자 정보와 연락처는 여기 옮겨 적지 않는다 — `/contact`가 관리자 자료에서 읽는다.
 *
 * **상징 수는 사전에서 읽는다.** 숫자를 손으로 적으면 사전을 넓히는 날 이 문장만 옛 수로 남는다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const SYMBOL_COUNT = DREAM_SYMBOLS.length;

const TITLE_KO = "드림링크 소개";
const TITLE_EN = "About Dreams-Link";
const SUMMARY_KO =
  "전통 해몽 상징 사전으로 꾼 꿈을 풀어 보는 서비스입니다. 무엇을 근거로 삼고 무엇을 말하지 않는지 밝힙니다.";
const SUMMARY_EN =
  "We read your dream against a dictionary of traditional Korean dream symbols. Here is what we ground it in, and what we refuse to claim.";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const korean = locale === "ko";

  return buildPageMetadata({
    path: "/about",
    locale,
    requested,
    title: korean ? TITLE_KO : TITLE_EN,
    description: korean ? SUMMARY_KO : SUMMARY_EN,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const korean = locale === "ko";

  return (
    <GuideShell
      locale={locale}
      eyebrow={korean ? "소개" : "About"}
      title={korean ? TITLE_KO : TITLE_EN}
      description={korean ? SUMMARY_KO : SUMMARY_EN}
      backHref={localePath("/", locale)}
      backLabel={korean ? "처음으로" : "Home"}
    >
      {korean ? (
        <>
          <GuideSection title="무엇을 하는 곳인가">
            <p>
              드림링크는 적어 주신 꿈에서 <b>전통 해몽에 쓰이는 상징을 찾아</b> 그 의미를 보여
              드립니다. 꿈은 매일 꾸는 것이라, 화면에서 보는 해몽은 <b>무료이고 회원가입도
              없습니다.</b>
            </p>
            <p>
              유료로 파는 것은 <b>간직하는 형태</b> 둘뿐입니다 — 좋은 꿈을 담은 이미지 한 장(꿈
              카드)과, 전통적으로 태몽으로 보아 온 상징이 나왔을 때 그 배경을 담은 PDF입니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 근거로 삼는가">
            <p>
              해석의 근거는 <b>상징 {SYMBOL_COUNT}개짜리 사전</b>입니다. 꿈 글에서 상징을 찾고,
              그 상징에 사전이 적어 둔 의미만 보여 드립니다. 상징에 의미가 여럿이면 상황으로
              고릅니다 — 뱀을 품는 것과 물리는 것은 전통적으로 정반대이기 때문입니다.
            </p>
            <p>
              찾는 일은 <b>정해진 규칙으로만</b> 합니다. 같은 꿈이면 언제나 같은 상징이 나오고,
              어제와 오늘 해석이 달라지지 않습니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 말하지 않는가">
            <p>
              <b>사전에 없는 전통 의미를 지어내지 않습니다.</b> 상징을 하나도 찾지 못하면 찾지
              못했다고 말하고 끝냅니다. 그 자리를 그럴듯한 말로 채우는 것이 이 서비스가 가장
              경계하는 일입니다.
            </p>
            <p>
              <b>태몽은 표시일 뿐 판정이 아닙니다.</b> 전통적으로 태몽으로 보아 온 상징이 꿈에
              나왔다는 사실까지만 알려 드립니다. 임신 여부나 아이의 성별을 맞히지 않으며, 그런
              주장에는 근거가 없습니다.
            </p>
            <p>
              건강·재물·진로를 <b>단정하지 않습니다.</b> 전통 해몽 관점의 참고 자료이며, 의학·
              재무·법률 자문이 아닙니다.
            </p>
          </GuideSection>

          <GuideSection title="적어 주신 꿈은 남기지 않습니다">
            <p>
              꿈 이야기는 이 서비스가 받는 값 중 가장 사적인 것입니다. 그래서{" "}
              <b>저장하지 않습니다.</b> 입력은 주소에만 실려 계산에 쓰이고, 서버의 어떤 표에도
              기록되지 않습니다.
            </p>
            <p>
              꿈일기처럼 모아 두는 기능은 <b>만들지 않기로 했습니다.</b> 값이 큰 기능이지만, 그러려면
              가장 사적인 글을 계속 보관해야 하기 때문입니다.
            </p>
          </GuideSection>

          <GuideNote>
            방법은 <a href={localePath("/guide", locale)}>안내 문서</a>에 더 자세히 적었습니다.
            사업자 정보와 연락처는 <a href={localePath("/contact", locale)}>문의하기</a>에
            있습니다.
          </GuideNote>
        </>
      ) : (
        <>
          <GuideSection title="What this is">
            <p>
              Dreams-Link finds <b>symbols used in traditional Korean dream reading</b> in the dream
              you write down, and shows you what they have traditionally meant. Because people dream
              every night, reading your dream on screen is <b>free and needs no account.</b>
            </p>
            <p>
              We sell only two things, both ways of <b>keeping</b> a dream — a single image (the
              dream card), and a PDF for when symbols traditionally read as conception omens appear.
            </p>
          </GuideSection>

          <GuideSection title="What we ground it in">
            <p>
              Every reading is grounded in a <b>dictionary of {SYMBOL_COUNT} symbols</b>. We find
              symbols in your text and show only the meanings the dictionary records for them. When a
              symbol has several meanings we pick by context — holding a snake and being bitten by
              one are traditionally opposite.
            </p>
            <p>
              The matching is done by <b>fixed rules</b>. The same dream always yields the same
              symbols; the reading does not drift from one day to the next.
            </p>
          </GuideSection>

          <GuideSection title="What we will not claim">
            <p>
              <b>We do not invent traditional meanings.</b> If no symbol is found we say so and stop.
              Filling that silence with plausible-sounding text is the thing this service guards
              against most.
            </p>
            <p>
              <b>A conception omen is shown, not decided.</b> We tell you only that symbols
              traditionally read as conception omens appeared. We do not determine pregnancy or the
              sex of a child; there is no basis for such a claim.
            </p>
            <p>
              We make no claims about <b>health, money, or career</b>. This is reference material
              from a traditional dream-reading perspective, not medical, financial, or legal advice.
            </p>
          </GuideSection>

          <GuideSection title="We do not keep your dream">
            <p>
              What you dreamt is the most personal thing this service receives, so{" "}
              <b>we do not store it.</b> The text travels in the address bar, is used for the
              calculation, and is written to no table on our server.
            </p>
            <p>
              We decided <b>not to build</b> a dream journal. It would be valuable, but it would
              require keeping that most personal text indefinitely.
            </p>
          </GuideSection>

          <GuideNote>
            The method is described in detail in the{" "}
            <a href={localePath("/guide", locale)}>guides</a>. Company details and how to reach us
            are on the <a href={localePath("/contact", locale)}>contact page</a>.
          </GuideNote>
        </>
      )}
    </GuideShell>
  );
}
