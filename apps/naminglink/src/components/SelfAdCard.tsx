import { ArrowUpRight } from "lucide-react";

/**
 * 셀프 광고 — 애드센스가 소재를 못 채웠을 때 게이트를 대신 채운다.
 *
 * **왜 필요한가.** 게이트("광고 확인 후 분석 시작")는 이용자를 10초(한자 15초) 붙잡아 둔다.
 * 그 대가가 광고인데, 트래픽이 적은 초기에는 애드센스가 소재를 못 채우는 일이 흔하다
 * (Fill Rate). 그러면 이용자는 **빈 상자를 보며 시간만 버린다.** 그때 우리 다른 서비스를
 * 대신 보여 준다 — 기다림에 이유가 생기고, 자체 서비스로 트래픽도 돈다.
 *
 * 게이트를 없애거나 기다림을 건너뛰지 않는다. 채울 것만 바꾼다.
 *
 * 배경 이미지는 나중에 받는다. 지금은 글자만 둔다.
 */

type SelfAdService = {
  name: string;
  href: string;
  /** 화면에 그대로 보이는 주소. 링크와 같은 값이지만 프로토콜은 뺀다. */
  domain: string;
  purpose: string;
};

/**
 * 문구는 각 서비스가 스스로 쓰는 말을 그대로 옮긴다.
 * 인연링크는 자기 사전(`apps/inyeonlink/src/lib/i18n.ts`)의 tagline이다.
 */
const SERVICES: SelfAdService[] = [
  {
    name: "인연링크",
    href: "https://inyeon-link.com",
    domain: "inyeon-link.com",
    purpose: "사주와 띠로 보는 두 사람의 궁합",
  },
  {
    name: "플레이스링크",
    href: "https://place-link.com",
    domain: "place-link.com",
    purpose: "한국의 데이트 코스 공유 · 추천 서비스",
  },
];

export function SelfAdCard() {
  return (
    <aside
      aria-label="관련 서비스 안내"
      className="w-full overflow-hidden rounded-lg border border-line bg-surface-strong"
    >
      <p className="border-b border-line px-4 py-2 text-center text-[10px] uppercase tracking-wide text-muted">
        관련 서비스
      </p>
      <div className="grid gap-px bg-line sm:grid-cols-2">
        {SERVICES.map((service) => (
          <a
            key={service.href}
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 bg-surface px-4 py-3 transition hover:bg-surface-strong"
          >
            <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
              {service.name}
              <ArrowUpRight
                aria-hidden="true"
                size={14}
                className="transition group-hover:translate-x-0.5"
              />
            </span>
            <span className="text-[13px] leading-5 text-muted">{service.purpose}</span>
            <span className="text-xs text-brand-teal">{service.domain}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
