import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 소개 — 누가 만들고 무엇을 하는 곳인가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 사주로 사람 사이를 말하는 서비스라면, 무엇을 근거로 삼고 무엇을 말하지 않는지 밝히는 것이
 * 그보다 먼저다.
 *
 * 글은 한국어와 영어 두 벌이다. 안내 문서와 같은 기준이다(naminglink의 같은 페이지도 그렇다).
 * 사업자 정보와 연락처는 여기 옮겨 적지 않는다 — `/contact`가 관리자 자료에서 읽는다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const TITLE_KO = "사주링크 소개";
const TITLE_EN = "About Saju-Link";
const SUMMARY_KO =
  "생년월일로 사주 원국을 세워 읽어 드리는 서비스입니다. 무엇을 계산하고 무엇을 말하지 않는지 밝힙니다.";
const SUMMARY_EN =
  "We build and read your birth chart in the Korean Saju tradition. Here is what we calculate, and what we refuse to claim.";

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
              사주링크는 생년월일시로 <b>사주 원국을 세우고 그 여덟 글자가 무엇을 말하는지</b>{" "}
              보여 드립니다. 오행의 세력과 일간의 강약을 읽고, 오늘의 일진을 대어 그날의 운세도
              함께 봅니다.
            </p>
            <p>
              화면에서 보는 것은 <b>무료이고 회원가입도 없습니다.</b> 유료 상품은 화면에 없는 값
              — 신강·신약을 가른 근거 숫자, 왕상휴수사, 진태양시 보정 내역 — 을 담은 PDF
              문서입니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 계산하는가">
            <p>
              사주는 <b>만세력</b>으로 세웁니다. 태어난 시각은 출생지의 <b>진태양시</b>로 보정합니다
              — 같은 시계 시각이라도 지역에 따라 실제 태양의 위치가 다르기 때문입니다.
            </p>
            <p>
              점수는 정해진 규칙으로만 냅니다. 십신·지지 관계·용신 같은 전통 명리의 개념을 규칙으로
              옮겨 계산하고, <b>같은 입력이면 언제나 같은 값</b>이 나옵니다. 규칙을 고칠 때는 예전
              결과가 달라지지 않는지 회귀 검사로 확인합니다.
            </p>
            <p>
              <b>화면의 문장에는 AI를 쓰지 않습니다.</b> 무료 화면에 나오는 설명은 계산 결과에
              붙는 정해진 문구입니다. <b>결제하신 리포트의 해설에만</b> 생성형 AI를 쓰며, 그때도
              AI가 점수를 만들지 않습니다 — 엔진이 낸 값을 근거로 문장만 씁니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 말하지 않는가">
            <ul>
              <li>
                <b>운세를 말하지 않습니다.</b> 누구를 만나라거나 피하라고 적지 않습니다. 전통
                명리의 관점을 정리한 참고 자료입니다.
              </li>
              <li>
                <b>입력을 저장하지 않습니다.</b> 생년월일시는 계산하는 그 순간에만 쓰고 서버에
                남기지 않습니다. 결과 링크도 브라우저가 서버로 보내지 않는 자리에 담깁니다.
              </li>
              <li>
                <b>점수를 사람의 값으로 보지 않습니다.</b> 오늘의 운세가 낮다고 해서 그날을
                포기할 이유가 되지 않습니다.
              </li>
            </ul>
          </GuideSection>

          <GuideNote>
            자세한 계산 방법은 <a href={localePath("/guide", locale)}>이용 안내</a>에 적어
            두었습니다. 사업자 정보와 연락처는{" "}
            <a href={localePath("/contact", locale)}>문의하기</a>에 있습니다.
          </GuideNote>
        </>
      ) : (
        <>
          <GuideSection title="What we do">
            <p>
              Saju-Link builds your birth chart from your date and time of birth and shows{" "}
              <b>what those eight characters say.</b> We read the weight of the five elements and
              the strength of your day master, then lay today’s pillar against the chart for a
              daily reading.
            </p>
            <p>
              Reading on screen is <b>free and needs no account.</b> The paid items are PDF reports
              carrying figures the screen never shows — the ally ratio behind the strong/weak
              verdict, the seasonal standing of each element, and the true-solar-time correction.
            </p>
          </GuideSection>

          <GuideSection title="What we calculate">
            <p>
              Charts are built from the Korean lunisolar almanac, and the birth time is corrected
              to <b>true solar time</b> for the birthplace — the same clock time means a different
              sun position depending on where you were born.
            </p>
            <p>
              Scores come from fixed rules only. Traditional concepts — ten gods, branch relations,
              the supporting element — are expressed as rules, so{" "}
              <b>the same input always gives the same result.</b> When a rule changes we run a
              regression harness to be sure older readings did not move.
            </p>
            <p>
              <b>No AI is involved in the on-screen text.</b> Every sentence on the free screens is
              fixed text attached to a calculated result. Generative AI is used <b>only in the
              commentary of a paid report</b>, and even there it never produces the numbers — it
              writes prose from what the engine already calculated.
            </p>
          </GuideSection>

          <GuideSection title="What we will not claim">
            <ul>
              <li>
                <b>We do not tell fortunes.</b> Nothing here tells you to pursue or avoid anyone.
                It is a reference drawn from a tradition.
              </li>
              <li>
                <b>We do not store what you enter.</b> Birth details are used for the moment of
                calculation and never written down; result links live in the part of the URL a
                browser does not send to a server.
              </li>
              <li>
                <b>A score is not a verdict on a person.</b> A low reading today is not a reason
                to give up on the day.
              </li>
            </ul>
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
