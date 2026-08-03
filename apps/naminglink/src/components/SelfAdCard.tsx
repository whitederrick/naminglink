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

/**
 * **살아 있는 주소만 링크로 건다.** 죽은 링크를 누르게 하는 것은 광고를 안 보여 주는 것보다
 * 나쁘다 — 눌렀는데 안 열리면 서비스 자체를 못 믿게 된다.
 *
 * 확인 이력:
 *   2026-07-30  둘 다 미연결 → 전부 글자로만 뒀다
 *   2026-08-03  `inyeon-link.com` 연결 완료(200) → 링크로 전환
 *               `place-link.com`은 **아직 개발 중**이라 글자 유지(고장이 아니다)
 *
 * 플레이스링크가 열리면 `live: true`만 켜면 된다. **켜기 전에 실제로 열어 볼 것.**
 */
type SelfAdService = {
  name: string;
  /** 화면에 보이는 주소. */
  domain: string;
  purpose: string;
  /** 참이면 `<a href>`로 건다. 거짓이면 글자로만 둔다. */
  live?: boolean;
};

/**
 * 문구는 각 서비스가 스스로 쓰는 말을 그대로 옮긴다.
 * 인연링크는 자기 사전(`apps/inyeonlink/src/lib/i18n.ts`)의 tagline이다.
 */
const SERVICES: SelfAdService[] = [
  {
    name: "인연링크",
    domain: "inyeon-link.com",
    purpose: "사주와 띠로 보는 두 사람의 궁합",
    live: true,
  },
  {
    name: "플레이스링크",
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
          <div key={service.domain} className="flex flex-col gap-1 bg-surface px-4 py-3">
            <span className="text-sm font-semibold text-foreground">{service.name}</span>
            <span className="text-[13px] leading-5 text-muted">{service.purpose}</span>
            {/* 살아 있는 주소만 누를 수 있게 한다. `rel`은 셀프 광고라도 외부 도메인이라 붙인다. */}
            {service.live ? (
              <a
                href={`https://${service.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-teal underline underline-offset-2"
              >
                {service.domain}
              </a>
            ) : (
              <span className="text-xs text-brand-teal">{service.domain}</span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
