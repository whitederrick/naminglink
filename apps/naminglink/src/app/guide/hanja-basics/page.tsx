import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell, GuideStats } from "@/components/GuideShell";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

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
      backHref={localePath("/guide", locale)}
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
