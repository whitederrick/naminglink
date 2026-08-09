"use client";

import Image from "next/image";
import { useState } from "react";

import {
  pickSelfAds,
  selfAdsExcluding,
  type SelfAdKey,
  type SelfAdService,
} from "@naminglink/core/self-ads";

/**
 * 형제 서비스 안내 — **GAM 보상형이 안 뜰 때 그 자리를 채운다.**
 *
 * ## 광고 자리는 셋이고 역할이 다르다
 *
 *     고정형 배너   애드센스 표시 광고 — 입력 화면과 결과 화면
 *     GAM 보상형    「광고 보고 분석하기」 관문 — 결과를 여는 대가다
 *     셀프 광고     **이 카드.** GAM이 안 뜰 때만 그 자리를 채운다
 *                   (no-fill · 차단기 · 아직 광고 단위를 안 넣은 상태)
 *
 * 관문을 없애거나 기다림을 건너뛰지 않는다. **채울 것만 바꾼다.** 이 자리에 애드센스 표시
 * 광고를 되돌리지 말 것 — 오버레이 게재 금지와 「콘텐츠 해제의 대가」 두 가지로 정책에 걸린다.
 *
 * ## 명단은 코어가 갖는다
 *
 * 주소와 살아 있는지 여부는 `@naminglink/core/self-ads`에 있다. 예전에는 여기에 **보여 줄
 * 서비스를 손으로 고정**해 두었는데(`["inyeonlink", "placelink"]`), 그 사이 사주·드림이 열렸는데도
 * **한 번도 나가지 않았고**, 아직 없는 `placelink`가 자리 둘 중 하나를 계속 차지했다. 코어
 * 주석이 경고한 바로 그 상태다 — 명단을 손으로 적으면 빠뜨린 쪽이 조용히 옛 상태로 남는다.
 *
 * **자기 자신은 뺀다.** 보고 있는 화면을 "관련 서비스"라고 다시 권하면 광고가 아니라 결함으로
 * 읽힌다. 이 앱을 복제할 때는 `selfAdsExcluding`의 한 글자만 바꾸면 된다.
 *
 * ## 문구는 여기 남는다
 *
 * 이 카드가 뜨는 세 자리(`NamingForm`·`CandidateUnlockPanel`·`HangulPronunciationResultPage`)는
 * 한국어 흐름이 중심이라 한국어로 쓴다(사용자 방침). 23개 언어를 쓰는 형제 앱은 각자 사전에서
 * 같은 자리를 채운다 — 구조는 같고 문구의 출처만 다르다.
 */

/** 한 번에 보여 주는 수. 좁은 화면에서도 두 칸이 나란히 들어간다. */
const VISIBLE = 2;

/** 문구는 각 서비스가 스스로 쓰는 말을 그대로 옮긴다. */
const PURPOSE: Record<SelfAdKey, string> = {
  naminglink: "뜻과 획수로 짓는 한글·한자 이름",
  inyeonlink: "사주와 띠로 보는 두 사람의 궁합",
  sajulink: "원국과 오늘의 운세로 읽는 나의 사주",
  dreamslink: "상징 사전으로 풀어 보는 꿈 해몽",
  placelink: "한국의 데이트 장소를 나누고 추천하는 곳",
};

const LABEL = "관련 서비스";
const COMING_SOON = "준비 중";

export function SelfAdCard({ className = "" }: { className?: string }) {
  const candidates = selfAdsExcluding("naminglink");

  /**
   * **매번 섞는다.** 자리는 둘인데 후보는 넷이라, 고정해 두면 뒤의 둘은 아무에게도 보이지
   * 않는다 — 새 서비스일수록 명단 뒤에 붙는데 그쪽이 알려야 할 쪽이다.
   *
   * 첫 렌더에 난수를 써도 되는 이유: **이 카드는 서버에서 그려지지 않는다.** 세 자리 모두
   * 버튼을 누른 뒤나 결과를 받아 온 뒤에만 뜬다. 서버 렌더를 지나는 자리에 이 카드를 놓으면
   * 그때는 하이드레이션이 어긋나므로, 그런 자리가 생기면 난수를 **서버에서 받아** 넘길 것.
   */
  const [shown] = useState<SelfAdService[]>(() =>
    pickSelfAds(candidates, VISIBLE, Math.random),
  );

  return (
    <aside
      aria-label={LABEL}
      className={`w-full overflow-hidden rounded-lg border border-line bg-surface-strong ${className}`}
    >
      <p className="border-b border-line px-4 py-2 text-center text-[10px] uppercase tracking-wide text-muted">
        {LABEL}
      </p>
      <div className="grid gap-px bg-line sm:grid-cols-2">
        {shown.map((service) => (
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
                {PURPOSE[service.key]}
              </span>
              {/* **살아 있는 주소만 누를 수 있게 한다.** 눌렀는데 안 열리면 광고를 안 보여 준
                  것보다 나쁘다 — 서비스 자체를 못 믿게 된다. 아직 열지 않은 곳은 "준비 중"을
                  함께 적어, 고장이 아니라 아직 없는 것임을 밝힌다. */}
              {service.live ? (
                <a
                  href={`https://${service.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-xs text-brand-teal underline underline-offset-2"
                >
                  {service.domain}
                </a>
              ) : (
                <span className="break-all text-xs text-muted">
                  {service.domain} · {COMING_SOON}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
