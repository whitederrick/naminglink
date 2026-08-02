import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 소개 — 누가 만들고 무엇을 하는 곳인가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 그 전에, 이름처럼 오래 쓰는 것을 정하는 서비스라면 만든 사람이 무엇을 근거로 삼는지 밝히는
 * 것이 먼저다.
 *
 * **자랑을 적지 않는다.** 무엇을 근거로 하는지, 무엇을 하지 않는지, 무엇을 저장하지 않는지를
 * 적는다 — 이용 안내 문서들과 같은 말투다. 사업자 정보와 연락처는 여기 옮겨 적지 않고
 * `/contact`와 푸터가 맡는다(값이 두 곳에 있으면 언젠가 어긋난다).
 *
 * 글은 한국어와 영어 두 벌이다. 안내 문서(`guide-index`의 audience)와 같은 기준이다 —
 * 23로케일 번역을 두지 않는 대신, 한국어 이용자와 그 밖의 이용자가 각자 읽을 수 있게 한다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const TITLE_KO = "네이밍링크 소개";
const TITLE_EN = "About Naming-Link";
const SUMMARY_KO =
  "이름을 짓고 고르는 일을 돕는 서비스입니다. 무엇을 근거로 삼고 무엇을 하지 않는지 밝힙니다.";
const SUMMARY_EN =
  "We help you choose and understand Korean names. Here is what we base our results on, and what we deliberately do not do.";

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
              네이밍링크는 <b>이름을 짓고 고르는 일</b>을 돕습니다. 아이 이름에 붙일 인명용 한자를
              찾는 일, 해외에서 쓸 한국 이름을 만드는 일, 외국 이름을 한글로 적는 일, 그리고 그
              이름을 도장이나 문서로 남기는 일입니다.
            </p>
            <p>
              결과를 보는 것은 <b>무료이고 회원가입도 필요하지 않습니다.</b> 유료 상품은 화면에서
              이미 보여 드린 것을 다시 파는 것이 아니라, 후보를 더 열거나 해설을 더 붙이거나
              보관할 수 있는 형태로 만들어 드리는 것입니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 근거로 하는가">
            <p>
              인명용 한자는 <b>대법원 인명용 한자표</b>를 그대로 씁니다. 글자마다 이름에 쓸 때의
              지정 독음이 정해져 있고, 표에 없는 글자는 출생신고에 쓸 수 없습니다. 저희가 고르거나
              늘리지 않습니다.
            </p>
            <p>
              사주·오행은 <b>만세력 계산</b> 결과이고, 태어난 시각은 출생지의 진태양시로 보정합니다.
              해석은 전통 명리의 관점을 정리한 참고 자료이지, 앞일을 맞히는 것이 아닙니다.
            </p>
            <p>
              설명 문장은 AI가 씁니다. 다만 <b>없는 사실을 지어내지 않도록</b> 입력값과 저희가 가진
              자료만 넣고 그 안에서 쓰게 합니다. 자세한 것은 이용 안내에 적어 두었습니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 하지 않는가">
            <ul>
              <li>
                <b>운세를 말하지 않습니다.</b> 좋은 일이 생긴다거나 나쁜 일을 피한다고 적지 않습니다.
              </li>
              <li>
                <b>이름을 저장하지 않습니다.</b> 무료 결과는 서버에 남기지 않습니다. 결제한
                문서는 만들어 보내 드리고 파일로 보관하지 않습니다.
              </li>
              <li>
                <b>결제한다고 더 좋은 결과가 나오지 않습니다.</b> 광고로 여는 것과 결제로 여는
                것의 내용은 완전히 같습니다.
              </li>
            </ul>
          </GuideSection>

          <GuideNote>
            서비스 화면과 문서는 23개 언어로 제공합니다. 다만 인명용 한자처럼 한국 제도를 다루는
            안내는 한국어로, 해외 이용자를 위한 안내는 영어로 씁니다.
          </GuideNote>

          <GuideSection title="문의">
            <p>
              사업자 정보와 연락처는 <a href={localePath("/contact", locale)}>문의하기</a>에
              모아 두었습니다. 환불·개인정보·오류 신고도 그 창구로 받습니다.
            </p>
          </GuideSection>
        </>
      ) : (
        <>
          <GuideSection title="What we do">
            <p>
              Naming-Link helps you <b>choose and understand Korean names</b> — the hanja behind a
              child&apos;s name, a Korean name to use abroad, a Hangul spelling of your own name,
              and keepsakes such as a seal or a printed report.
            </p>
            <p>
              Seeing your results is <b>free and needs no account.</b> Paid items never resell what
              the screen already showed you: they open more candidates, add written analysis, or
              turn the result into something you can keep.
            </p>
          </GuideSection>

          <GuideSection title="What our answers are based on">
            <p>
              Hanja come from the <b>Supreme Court of Korea&apos;s official name-hanja table.</b>{" "}
              Each character has a fixed reading for use in names, and characters outside the table
              cannot be registered. We do not add to that list or pick favourites.
            </p>
            <p>
              Saju and five-element figures are calculated from the Korean lunisolar almanac, with
              the birth time corrected to true solar time for the birthplace. The reading is a
              traditional reference, <b>not a prediction.</b>
            </p>
            <p>
              The written explanations are produced by AI. To keep it from inventing things, the
              model is given only your input and our own reference data, and is told to stay
              inside it.
            </p>
          </GuideSection>

          <GuideSection title="What we do not do">
            <ul>
              <li>
                <b>We do not tell fortunes.</b> Nothing here promises luck, wealth or protection.
              </li>
              <li>
                <b>We do not store your name.</b> Free results are never written to our servers,
                and paid documents are delivered without keeping a copy of the file.
              </li>
              <li>
                <b>Paying does not buy a better answer.</b> Unlocking with an ad and unlocking with
                a payment give exactly the same content.
              </li>
            </ul>
          </GuideSection>

          <GuideNote>
            The service is available in 23 languages. Guides about Korean law and registration are
            written in Korean; guides for readers outside Korea are written in English.
          </GuideNote>

          <GuideSection title="Contact">
            <p>
              Company details and how to reach us are on the{" "}
              <a href={localePath("/contact", locale)}>contact page</a>, including refunds, privacy
              requests and error reports.
            </p>
          </GuideSection>
        </>
      )}
    </GuideShell>
  );
}
