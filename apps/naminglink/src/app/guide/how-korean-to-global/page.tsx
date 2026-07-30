import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("how-korean-to-global")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  return buildPageMetadata({
    path: "/guide/how-korean-to-global",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={localePath("/guide", locale)}
      backLabel="이용 안내"
    >
      <GuideSection title="다섯 가지 관점으로 후보를 냅니다">
        <p>
          이름을 바깥 언어로 옮기는 방법은 하나가 아닙니다. 소리를 살릴지 뜻을 살릴지, 현지에서
          자연스러운 이름을 고를지 개성을 앞세울지에 따라 답이 달라집니다. 그래서 하나를 골라
          내놓지 않고 <b>서로 다른 다섯 관점에서 하나씩</b> 냅니다.
        </p>
        <ul className="grid gap-1.5 text-[15px] leading-7">
          <li>
            <b>소리 보존안</b> — 원래 이름의 소리를 최대한 남깁니다
          </li>
          <li>
            <b>의미 번역안</b> — 이름에 담긴 뜻을 그 언어의 이름으로 옮깁니다
          </li>
          <li>
            <b>소리·의미 절충안</b> — 둘을 절반씩 가져갑니다
          </li>
          <li>
            <b>현지 정통안</b> — 그 문화권에서 실제로 흔히 쓰는 이름을 고릅니다
          </li>
          <li>
            <b>개성·브랜드안</b> — 기억에 남고 구분되는 쪽을 앞세웁니다
          </li>
        </ul>
        <p>
          다섯 개가 반드시 나오도록 되어 있습니다. 마음에 드는 관점이 사람마다 다르므로, 하나를
          정답이라고 내밀기보다 고르실 수 있게 하는 편이 낫다고 봅니다.
        </p>
      </GuideSection>

      <GuideSection title="언어마다 문자 체계 규칙이 다릅니다">
        <p>
          로마자를 쓰지 않는 언어로 옮길 때는 그 언어의 문자로 적어야 합니다. 일본어면 가나와
          한자, 러시아어·몽골어·카자흐어면 키릴, 아랍어면 아랍 문자, 태국어·크메르어·힌디어면
          각각의 문자입니다. 로마자로 적어 놓고 &ldquo;일본어 이름&rdquo;이라고 하면 그 나라에서
          쓸 수 없습니다.
        </p>
        <p>
          그래서 언어마다 지켜야 할 표기 규칙을 따로 두고, 결과가 그 문자 체계로 나왔는지 서버에서
          한 번 더 확인합니다. 성을 빠뜨리거나 한글이 섞여 나오는 실수도 여기서 걸러냅니다.
        </p>
      </GuideSection>

      <GuideSection title="실제로 쓰이는 이름을 씁니다">
        <p>
          그럴듯해 보이지만 그 나라에 없는 이름을 만들어 내지 않도록, 실존하는 이름을 기준으로
          삼습니다. 이름은 서류와 소개에 쓰이는 것이라, 현지 사람이 &ldquo;그런 이름은
          없다&rdquo;고 여기면 쓸 수 없기 때문입니다.
        </p>
      </GuideSection>

      <GuideSection title="선정과 서술을 나눕니다">
        <p>
          후보 다섯을 정하는 일과 각 후보를 길게 설명하는 일을 나누어 처리합니다. 설명이 시간을
          많이 쓰는 부분이라 그것만 나눠서 동시에 만듭니다.
        </p>
        <GuideNote title="왜 이렇게 바꿨나">
          <p>
            처음에는 다섯 관점을 각각 따로 만들었습니다. 빨랐지만 <b>후보 수가 매번 달라졌습니다.</b>{" "}
            각자 후보를 고르다 보니 서로 겹치거나 어긋났고, 하나가 실패하면 그 후보가 통째로
            사라져 다섯이 아니라 둘·셋만 나오는 일이 있었습니다.
          </p>
          <p className="mt-1">
            지금은 후보 집합과 관점 배분을 한 번에 정하므로 <b>개수가 고정됩니다.</b> 설명 하나가
            실패해도 후보는 사라지지 않고 짧은 정보로 남습니다. 조금 느려도 매번 같은 개수가
            나오는 쪽이 낫다고 보았습니다.
          </p>
        </GuideNote>
      </GuideSection>
    </GuideShell>
  );
}
