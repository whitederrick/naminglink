import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { displayPrice, getProductSetting } from "@/lib/product-settings";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 무엇을 파는지 밝히는 글.
 *
 * **금액을 여기에 적지 않는다.** `product_settings`에서 읽는다 — 관리자 화면에서 값을 바꾸면
 * 이 글도 함께 맞는다. 손으로 적으면 가격을 바꿀 때 한쪽만 고쳐지고, 표시가와 청구액이
 * 어긋나는 것은 전자상거래법이 금하는 것이다(안내 문서의 숫자를 엔진 상수에서 읽는 것과
 * 같은 이유다).
 *
 * **한계를 함께 적는다.** "이런 게 들어갑니다"만 있으면 광고 문구로 읽히고, 애드센스는 얄팍한
 * 홍보성 페이지를 싫어한다. 무엇보다 재발급 조건과 배송 기간은 사기 전에 알아야 하는 것이다.
 *
 * 조회에 실패하면 그 상품의 값만 "준비 중"으로 둔다. 가격 하나 때문에 글 전체가 죽으면 안 된다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("what-we-sell")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/what-we-sell",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

async function price(code: string) {
  try {
    return displayPrice(await getProductSetting(code));
  } catch {
    return "준비 중";
  }
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  const [unlock, fiveDetail, tenDetail, tenSaju, stampRound, stampSquare, stampEbony] =
    await Promise.all([
      price("CANDIDATE_UNLOCK_KRW"),
      price("FIVE_DETAIL"),
      price("TEN_DETAIL"),
      price("TEN_SAJU_PDF"),
      price("STAMP_ROUND_WOOD_KRW"),
      price("STAMP_SQUARE_WOOD_KRW"),
      price("STAMP_EBONY_KRW"),
    ]);

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={localePath("/guide", locale)}
      backLabel="이용 안내"
    >
      <GuideSection title="무료로 어디까지 보이나">
        <p>
          이름을 짓고 결과를 보는 것은 <b>무료</b>입니다. 회원가입도 필요하지 않습니다. 한자 의미
          매칭·한국 이름 만들기·글로벌 이름 변환·한글 발음 표기 네 흐름 모두, 추천 결과와 그
          근거를 화면에서 보실 수 있습니다.
        </p>
        <p>
          유료 상품은 <b>화면에서 이미 보여 준 것을 다시 파는 것이 아닙니다.</b> 후보를 더 열거나,
          해설을 더 붙이거나, 보관·전달할 수 있는 형태로 만들어 드리는 것입니다.
        </p>
      </GuideSection>

      <GuideSection title={`후보 전체 일괄 공개 — ${unlock}`}>
        <p>
          추천 결과는 후보를 하나씩 열어 보는 구조입니다. 광고를 보면 한 번에 하나씩 열리고,
          이 상품은 <b>남은 후보를 한꺼번에</b> 엽니다.
        </p>
        <p>
          급하지 않다면 사지 않으셔도 됩니다. 광고로 여는 것과 결제로 여는 것의{" "}
          <b>결과는 완전히 같습니다</b> — 기다림의 차이일 뿐이고, 결제했다고 더 좋은 후보가 나오지
          않습니다.
        </p>
      </GuideSection>

      <GuideSection title="한자 상세 — 세 단계">
        <p>한글 이름에 붙일 한자를 고르는 흐름에는 상세 상품이 셋 있습니다.</p>
        <ul>
          <li>
            <b>한자 후보 최대 5개 상세</b> — {fiveDetail}. 화면에서 후보 다섯 개까지 해설을
            펼쳐 봅니다. PDF는 없습니다.
          </li>
          <li>
            <b>한자 후보 최대 10개 확장 상세 PDF</b> — {tenDetail}. 후보가 열 개로 늘고 PDF
            문서가 함께 나옵니다.
          </li>
          <li>
            <b>한자 후보 최대 10개 사주·오행 종합 리포트</b> — {tenSaju}. 위에 더해 태어난
            날짜로 뽑은 사주 원국과 오행 세력을 얹어, 어느 한자가 왜 그 이름에 어울리는지를
            오행 관점에서 함께 봅니다.
          </li>
        </ul>
        <GuideNote title="한자 자체는 공개된 자료입니다">
          쓸 수 있는 한자와 그 뜻·획수는 대법원 인명용 한자표에서 온 것이고, 이 서비스의 안내
          문서에도 전부 공개돼 있습니다. 유료 상품이 파는 것은 한자 정보가 아니라 <b>그 이름에
          맞춰 고르고 설명하는 일</b>입니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="글로벌 이용자용 PDF 둘">
        <p>
          외국 이름을 한국 이름으로 바꾸거나, 이름을 한글로 적어 보는 흐름에서 살 수 있는
          문서입니다. 값은 결제 화면에 표시되는 금액을 따릅니다.
        </p>
        <ul>
          <li>
            <b>Korean Name Premium Report</b> — 3장. 붓글씨 표지, 이름의 뜻과 그 이름을 고른
            이유, 사주·오행 풀이가 들어갑니다.
          </li>
          <li>
            <b>Hangul Name Art</b> — 2장. 붓글씨 표지와 발음 안내입니다. 이름을 한글로 어떻게
            적고 어떻게 소리 내는지를 담습니다.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="이름 도장">
        <p>
          화면에서 만든 이름을 실물 도장으로 새겨 보내 드립니다. 모델에 따라 값이 다릅니다 —
          원형 목도장 {stampRound}, 사각 목도장 {stampSquare}, 흑단 도장 {stampEbony}.
          해외 배송도 됩니다.
        </p>
        <p>
          <b>여기부터는 배송이 있는 상품입니다.</b> 앞의 것들과 달리 제작과 배송에 시간이 걸리고,
          받을 주소가 필요합니다. 배송 정보는 주문 처리와 법령상 보존에만 쓰고, 처리가 끝나면
          방침에 정한 기간 뒤에 파기합니다.
        </p>
      </GuideSection>

      <GuideSection title="사기 전에 알아 두실 것">
        <p>
          <b>디지털 상품은 결제 즉시 제공됩니다.</b> 다운로드가 시작되기 전에는 언제든 취소하고
          전액 환불받을 수 있지만, 다운로드가 끝난 뒤에는 단순 변심에 의한 청약철회가 제한됩니다
          (전자상거래법 제17조 제2항). 결제 화면에서 이 조건에 동의를 따로 받습니다.
        </p>
        <p>
          <b>결과 내용에 대한 불만은 환불 사유가 아닙니다.</b> 다만 문서가 만들어지지 않았거나,
          파일이 열리지 않거나, 결제 금액이 주문과 다른 경우에는 재발급 또는 전액 환불로
          처리합니다.
        </p>
        <p>
          자세한 조건은 <b>환불정책</b>과 <b>요금안내</b>에 적어 두었습니다. 이 글은 무엇이
          들어가는지를 밝히는 안내이고, 법적 조건은 환불정책과 요금안내의 정보를 우선시합니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
