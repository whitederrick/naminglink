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

import { SELF_AD_SERVICES, type SelfAdKey } from "@naminglink/core/self-ads";

/**
 * **주소와 살아 있는지 여부는 `@naminglink/core/self-ads`가 갖는다.**
 *
 * 예전에는 여기에 명단을 직접 적어 두었다. 그러면 도메인을 하나 연결할 때 앱마다 고쳐야 하고,
 * **빠뜨린 쪽은 조용히 옛 상태로 남는다** — 죽은 링크를 누르게 하거나(고장으로 보인다), 이미
 * 연 서비스를 계속 "준비 중"으로 두게 된다. 사주링크가 같은 카드를 쓰게 되면서 한 곳으로 모았다.
 *
 * **문구는 여기 남는다.** 이 화면은 한국어 흐름 전용이라 한국어로만 쓴다(사용자 방침).
 * 23개 언어를 쓰는 사주링크·인연링크는 각자 사전에서 같은 자리를 채운다.
 *
 * 어느 서비스를 보여 줄지도 앱이 정한다. 여기서는 예전과 같은 둘을 그대로 둔다 — 이 화면은
 * 이름을 지으러 온 사람이 보는 자리라, 관계 있는 것부터 짧게 거는 편이 낫다.
 */
const SHOWN: SelfAdKey[] = ["inyeonlink", "placelink"];

/** 문구는 각 서비스가 스스로 쓰는 말을 그대로 옮긴다. */
const PURPOSE: Record<SelfAdKey, string> = {
  naminglink: "뜻과 획수로 짓는 한글·한자 이름",
  inyeonlink: "사주와 띠로 보는 두 사람의 궁합",
  sajulink: "원국과 오늘의 운세로 읽는 나의 사주",
  dreamslink: "상징 사전으로 풀어 보는 꿈 해몽",
  placelink: "한국의 데이트 장소를 나누고 추천하는 곳",
};

const SERVICES = SHOWN.map((key) => {
  const service = SELF_AD_SERVICES.find((entry) => entry.key === key);
  if (!service) throw new Error(`self-ad 명단에 없는 키: ${key}`);
  return service;
});

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
            <span className="text-[13px] leading-5 text-muted">{PURPOSE[service.key]}</span>
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
