import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell, GuideStats } from "@/components/GuideShell";
import { guideHubHref } from "@/lib/guide-back";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const ENTRY = findGuideEntry("hanja-basics")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/hanja-basics",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const counts = await getGuideCounts();

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={guideHubHref(locale, params?.from)}
      backLabel="이용 안내"
    >
      {counts ? (
        <GuideStats
          items={[
            { value: `${formatCount(counts.characterTotal)}자`, label: "인명용 한자" },
            { value: `${formatCount(counts.syllableCount)}개`, label: "걸쳐 있는 한글 음절" },
            { value: counts.effectiveDate ?? "—", label: "표 기준일" },
          ]}
        />
      ) : null}

      <GuideSection title="인명용 한자란 무엇인가">
        <p>
          아이 이름에 한자를 쓰려면 아무 글자나 쓸 수 없습니다.{" "}
          <strong>
            출생신고에 쓸 수 있는 한자는 대법원이 표로 정해 두었고, 그 표에 있는 글자만 이름의
            한자로 등록됩니다.
          </strong>{" "}
          이것을 인명용 한자라고 합니다.
        </p>
      </GuideSection>

      <GuideSection title="왜 정해 두었나">
        <p>
          한자는 수만 자입니다. 그중에는 뜻이 험한 글자도 있고, 지금은 아무도 쓰지 않아 읽는
          법이 남아 있지 않은 글자도 있으며, 컴퓨터에서 아예 표시되지 않는 글자도 있습니다.
          이런 글자가 이름에 들어가면 곤란한 쪽은 결국 그 이름을 평생 쓰는 사람입니다.
          주민등록·여권·은행·학교 어디서든 이름이 깨지거나, 서류마다 다르게 읽히거나, 본인이
          자기 이름을 설명해야 합니다.
        </p>
        <p>
          그래서 이름에 쓸 수 있는 한자의 범위를 미리 정해 두는 방식을 택한 것입니다. 범위를
          좁히는 규제라기보다, 이름이 평생 문제없이 쓰이도록 하는 장치에 가깝습니다.
        </p>
      </GuideSection>

      <GuideSection title="무엇을 근거로 정해지나">
        <p>대법원이 인명용 한자표를 정하고, 표는 필요에 따라 개정되며 글자가 추가됩니다.</p>
        {counts ? (
          <GuideNote title="이 화면이 쓰는 자료">
            <p>
              {counts.publisher ?? "대법원"} 인명용 한자 자료
              {counts.effectiveDate ? ` · ${counts.effectiveDate} 기준` : ""}
              {counts.ruleReference ? ` · 근거 규정: ${counts.ruleReference}` : ""}
            </p>
            <p className="mt-1">
              {formatCount(counts.characterTotal)}자가 한글 음절{" "}
              {formatCount(counts.syllableCount)}개에 걸쳐 있습니다. 원본 파일의 해시값을 함께
              보관해, 표가 바뀌면 언제 무엇이 바뀌었는지 확인할 수 있게 해 두었습니다.
            </p>
          </GuideNote>
        ) : null}
      </GuideSection>

      {counts ? (
        <GuideSection title="대법원이 발표한 글자 수와 저희가 보여드리는 수가 다릅니다">
          <p>
            <strong>
              대법원이 발표한 인명용 한자는 {formatCount(counts.announcedTotal)}자이고, 저희가
              후보로 보여드리는 것은 {formatCount(counts.characterTotal)}자입니다.
            </strong>{" "}
            숨길 이유가 없는 차이라 왜 그런지 그대로 적습니다.
          </p>
          <p>
            대법원 조회 자료를 받아 보면 글자가{" "}
            {formatCount(counts.listedTotal)}자 실려 있습니다. 그중{" "}
            <b>{formatCount(counts.excludedNoStandardCode)}자</b>는{" "}
            <strong>세계 공통 문자 코드(유니코드)에 자리가 없는 글자</strong>입니다. 대법원
            전산은 그런 글자를 자기 시스템 안에서만 통하는 번호로 다루고, 화면에는 글자가 아니라{" "}
            <b>그림으로</b> 그려서 보여 줍니다.
          </p>

          <GuideNote title="폰트를 더 넣어서 될 일이 아닙니다">
            <p>
              글자가 화면에 나오려면 <b>세상이 합의한 번호</b>가 있어야 하고, 서체는 그 번호에
              해당하는 그림을 담습니다. 번호 자체가 없는 글자는 어떤 서체에도 들어 있을 수
              없습니다. 저희가 서체를 아무리 더 넣어도 이 글자들은 빈 네모로 나옵니다.
            </p>
          </GuideNote>

          <p>
            그래서 저희는 이 글자들을 후보에서 뺐습니다.{" "}
            <strong>보여드릴 수 없는 글자를 목록에 채우는 것은 도움이 되지 않는다</strong>고
            판단했습니다. 저희 자료에는 이 글자들의 뜻도 대부분 비어 있어, 뜻을 근거로 이름을
            고르는 이 서비스의 방식과도 맞지 않습니다.
          </p>

          <p>
            <strong>더 중요한 이유는 이름을 쓰실 분에게 있습니다.</strong> 이름은 평생 여러 곳에
            입력되는 값입니다. 문자 코드가 없는 글자는 출생신고를 마치더라도 은행·학교·병원·여권
            같은 곳의 전산에서 입력하거나 출력하지 못하는 경우가 생깁니다. 그런 글자를 저희가
            먼저 권해 드리기는 어렵습니다.
          </p>

          <p>
            다만 <strong>그 글자를 쓸 수 있는지 없는지를 저희가 판단하는 것은 아닙니다.</strong>{" "}
            대법원 표에 있는 글자이므로 등록 자체는 가능할 수 있습니다. 그 글자를 꼭 쓰고
            싶으시다면 대법원 전자가족관계등록시스템에서 직접 확인하시고,{" "}
            <b>실제 사용 가능 여부는 관할 관청에 문의</b>하시기 바랍니다.
          </p>
        </GuideSection>
      ) : null}

      <GuideSection title="표에 없는 한자를 쓰고 싶다면">
        <p>
          쓸 수 없습니다. 정확히 말하면, 그 글자는 이름의 한자로 등록되지 않고 이름은 한글로만
          기재됩니다. 한자를 곁들여 쓰고 싶다면 표 안에서 골라야 합니다.
        </p>
        <p>
          그래서 저희는 표에 없는 글자를 후보로 내놓지 않습니다. 화면에 보이는 한자는 전부 실제로
          출생신고에 쓸 수 있는 글자입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
