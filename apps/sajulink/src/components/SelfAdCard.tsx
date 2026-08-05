"use client";

import Image from "next/image";
import { useState } from "react";

import {
  pickSelfAds,
  selfAdsExcluding,
  type SelfAdService,
} from "@naminglink/core/self-ads";

import type { Dictionary } from "@/lib/i18n";

/**
 * 형제 서비스 안내 — **애드센스가 못 채우는 자리를 대신 채운다.**
 *
 * ## 왜 필요한가
 *
 * 광고 관문(`AdWatchOverlay`)은 이용자를 몇 초 붙잡아 둔다. 그 대가가 광고인데, 보상형이
 * 안 뜨는 일이 흔하다 — 트래픽이 적은 초기의 no-fill, 차단기, 그리고 지금처럼 광고 단위를
 * 아직 안 넣은 상태. 그러면 이용자는 **빈 상자를 보며 시간만 버린다.**
 *
 * 관문을 없애거나 기다림을 건너뛰지 않는다. **채울 것만 바꾼다.**
 *
 * 이 자리에 애드센스 표시 광고를 되돌리지 말 것 — 오버레이 안이고 콘텐츠 해제의 대가라
 * 정책에 걸린다(`AdWatchOverlay`의 주석 참고).
 *
 * ## 복제 앱이 물려받는 실수 하나
 *
 * **자기 자신을 광고하지 않는다.** 보고 있는 화면을 "관련 서비스"라고 다시 권하면 광고가
 * 아니라 결함으로 읽힌다. 명단은 코어에 있고 여기서 `sajulink`를 뺀다 — 이 앱을 복제할 때
 * 그 한 글자만 바꾸면 된다.
 */

/** 한 번에 보여 주는 수. 좁은 화면에서도 두 칸이 나란히 들어간다. */
const VISIBLE = 2;

export function SelfAdCard({
  dictionary,
  className = "",
}: {
  dictionary: Dictionary;
  className?: string;
}) {
  const copy = dictionary.selfAds;
  const candidates = selfAdsExcluding("sajulink");

  /**
   * **매번 섞는다.** 자리는 둘인데 후보는 넷이라, 고정해 두면 뒤의 둘은 아무에게도 보이지
   * 않는다 — 새 서비스일수록 명단 뒤에 붙는데 그쪽이 알려야 할 쪽이다.
   *
   * 첫 렌더에 난수를 써도 되는 이유: **이 카드는 서버에서 그려지지 않는다.** 두 자리 모두
   * 서버 렌더를 지나지 않는다 —
   *
   *   `AdWatchOverlay`   버튼을 누른 뒤에만 뜬다
   *   `SajuResultView`   결과를 받아 온 뒤(`status === "ready"`)에만 그린다.
   *                      서버가 그리는 것은 "불러오는 중" 한 줄이다
   *
   * 서버 렌더를 지나는 자리에 이 카드를 놓으면 그때는 하이드레이션이 어긋난다. 그런 자리가
   * 생기면 난수를 **서버에서 받아** 넘길 것(같은 씨앗을 양쪽이 쓰면 어긋나지 않는다).
   */
  const [shown] = useState<SelfAdService[]>(() =>
    pickSelfAds(candidates, VISIBLE, Math.random),
  );

  return (
    <aside
      aria-label={copy.label}
      className={`w-full overflow-hidden rounded-xl border border-line bg-surface-strong ${className}`}
    >
      <p className="border-b border-line px-4 py-2 text-center text-[10px] uppercase tracking-wide text-muted">
        {copy.label}
      </p>
      <div className="grid gap-px bg-line sm:grid-cols-2">
        {shown.map((service) => {
          const purpose = copy.purposes[service.key];
          return (
            <div key={service.key} className="flex gap-3 bg-surface px-4 py-3">
              {/* 로고 — 서비스를 알아보는 가장 빠른 표식이다. 사본이 없는 서비스는 이름
                  첫 글자로 대신한다(빈 칸을 두면 두 칸의 글 시작점이 어긋난다). */}
              {service.logo ? (
                <Image
                  src={`/images/self-ads/${service.key}.png`}
                  alt=""
                  width={36}
                  height={36}
                  className="mt-0.5 size-9 shrink-0 rounded-full"
                />
              ) : (
                <span
                  aria-hidden
                  className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-strong text-sm font-semibold text-muted"
                >
                  {Array.from(service.name)[0]}
                </span>
              )}

              <div className="flex min-w-0 flex-col gap-1">
                {/* 이름은 상표라 번역하지 않는다 — 명단이 갖는 고정값이다. */}
                <span className="text-sm font-semibold text-foreground">{service.name}</span>
                <span className="break-keep-all text-[13px] leading-5 text-muted">
                  {purpose}
                </span>
                {/* **살아 있는 주소만 누를 수 있게 한다.** 눌렀는데 안 열리면 광고를 안 보여
                    준 것보다 나쁘다 — 서비스 자체를 못 믿게 된다. 아직 열지 않은 곳은 "준비 중"을
                    함께 적어, 고장이 아니라 아직 없는 것임을 밝힌다. */}
                {service.live ? (
                  <a
                    href={`https://${service.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-xs text-brand-celadon underline underline-offset-2"
                  >
                    {service.domain}
                  </a>
                ) : (
                  <span className="break-all text-xs text-muted">
                    {service.domain} · {copy.comingSoon}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
