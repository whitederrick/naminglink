/**
 * 형제 서비스 명단 — 셀프 광고가 무엇을 보여 줄지의 **단일 기준**.
 *
 * ## 왜 코어에 두는가
 *
 * 여기 있는 것은 주소와 **살아 있는지 여부**뿐이다. 그 둘은 앱마다 다를 이유가 없는데,
 * 앱마다 적어 두면 도메인을 하나 연결할 때 여러 곳을 고쳐야 하고 **빠뜨린 쪽은 조용히 옛
 * 상태로 남는다.** 죽은 링크를 누르게 하거나(고장으로 보인다), 이미 연 서비스를 "준비 중"으로
 * 두는(광고 기회를 버린다) 일이 그렇게 생긴다.
 *
 * **문구는 여기 없다.** 앱마다 쓰는 언어 수가 다르기 때문이다 — naminglink의 한국어 흐름은
 * 한국어로만 쓰고(사용자 방침), 사주링크·인연링크는 23개 언어를 쓴다. 이름과 소개는 각 앱의
 * 사전이 갖고, 이 파일은 "어디로 보낼 수 있는가"만 정한다.
 *
 * ## 켜기 전에 실제로 열어 볼 것
 *
 * `live`는 **"도메인을 샀다"가 아니라 "지금 열린다"**는 뜻이다. 확인 이력:
 *
 *   2026-07-30  naming-link.com 연결
 *   2026-08-03  inyeon-link.com 연결
 *   2026-08-05  saju-link.com 구매했으나 **연결 대기**(지금은 sajulink.vercel.app)
 *               dreams-link.com 앱 자체가 아직 없다
 *               place-link.com 개발 중 — 고장이 아니라 아직 없는 것이다
 */

export const SELF_AD_KEYS = [
  "naminglink",
  "inyeonlink",
  "sajulink",
  "dreamslink",
  "placelink",
] as const;

export type SelfAdKey = (typeof SELF_AD_KEYS)[number];

export type SelfAdService = {
  key: SelfAdKey;
  /**
   * 서비스 이름. **번역하지 않는다.**
   *
   * 사전에 두었더니 번역기가 낱말로 옮겼다 — 중국어에서 `Naming-Link`가 `命名链接`,
   * `Inyeon-Link`가 `因缘链接`가 됐다. 그 서비스가 쓰지 않는 이름을 지어낸 것이고, 화면의
   * 주소(`naming-link.com`)와도 어긋난다. 상표는 문구가 아니라 **고정값**이라 여기 둔다.
   */
  name: string;
  /** 화면에 보이는 주소이자 링크 주소. */
  domain: string;
  /** 참일 때만 링크로 건다. 거짓이면 글자로 두고 "준비 중"을 함께 적는다. */
  live: boolean;
  /**
   * 원형 로고가 있는가.
   *
   * **파일은 여기 없다.** `public/`은 앱마다 따로라 코어가 정적 파일을 내보낼 수 없어서,
   * 각 앱이 `public/images/self-ads/<key>.png`로 **사본을 둔다**(원본은 그 서비스 앱의
   * `<key>-circle-logo-256.png`). 이 값은 "그 사본이 있어야 한다"는 뜻이고, 없는 서비스는
   * 첫 글자를 딴 자리표시로 그린다.
   *
   * 로고를 새로 그리면 사본도 함께 갱신할 것 — `scripts/verify-self-ads.ts`가 파일이 실제로
   * 있는지 확인하므로, 사본을 안 둔 채 참으로 바꾸면 그 자리에서 걸린다.
   */
  logo: boolean;
};

export const SELF_AD_SERVICES: readonly SelfAdService[] = [
  { key: "naminglink", name: "Naming-Link", domain: "naming-link.com", live: true, logo: true },
  { key: "inyeonlink", name: "Inyeon-Link", domain: "inyeon-link.com", live: true, logo: true },
  { key: "sajulink", name: "Saju-Link", domain: "saju-link.com", live: false, logo: true },
  { key: "dreamslink", name: "Dreams-Link", domain: "dreams-link.com", live: false, logo: true },
  // 플레이스링크는 아직 로고가 없다. 자리표시로 그린다.
  { key: "placelink", name: "Place-Link", domain: "place-link.com", live: false, logo: false },
];

/**
 * 이 앱에서 광고할 수 있는 서비스들. **자기 자신은 뺀다.**
 *
 * 보고 있는 화면을 "관련 서비스"라고 다시 권하는 것은 광고가 아니라 결함으로 읽히고, 복제
 * 앱에서 특히 잘 생기는 실수다(명단을 그대로 물려받는다).
 */
export function selfAdsExcluding(self: SelfAdKey): SelfAdService[] {
  return SELF_AD_SERVICES.filter((service) => service.key !== self);
}

/**
 * 명단에서 `count`개를 고른다. **골고루 돌리려고 섞는다** — 자리는 둘인데 후보는 넷이라,
 * 고정해 두면 뒤의 둘은 아무에게도 보이지 않는다.
 *
 * 난수를 **밖에서 받는다.** 이 함수가 `Math.random()`을 부르면 서버가 그린 것과 브라우저가
 * 처음 그린 것이 달라 하이드레이션이 어긋난다. 부르는 쪽이 **화면에 붙은 뒤에** 섞게 하려는
 * 것이고, 그래야 검사도 값을 정해 놓고 돌릴 수 있다.
 */
export function pickSelfAds(
  services: SelfAdService[],
  count: number,
  random: () => number,
): SelfAdService[] {
  const pool = [...services];
  // 피셔–예이츠. 앞에서 `count`개만 쓰더라도 전체를 섞어야 뒤쪽도 같은 확률로 앞에 온다.
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [pool[index], pool[swap]] = [pool[swap]!, pool[index]!];
  }
  return pool.slice(0, count);
}
