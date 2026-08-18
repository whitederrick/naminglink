import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";

import { adsEnabled, adSlots } from "@/lib/ads";
// **`gam-rewarded`가 아니라 설정 파일에서 가져온다.** 그쪽은 `"use client"`라 서버에서 읽으면
// 값이 undefined가 되고, 이 응답에서 항목이 통째로 사라진다(실측으로 확인했다).
import { gamRewardedEnabled } from "@/lib/gam-rewarded-config";
import { siteUrl } from "@/lib/seo";
import { tossConfigured } from "@/lib/toss";

/**
 * 이 배포가 무엇을 켜 두고 있는지 알려 준다. **naming-artist 콘솔의 '오픈 상태 점검'이 부른다.**
 *
 * **왜 엔드포인트가 필요한가.** 인연링크의 잠금은 전부 환경변수로 걸려 있는데(광고·보상형·
 * 알림·결제·색인), 그 값은 이 배포의 프로세스 안에만 있다. naminglink 콘솔은 다른 배포라
 * 읽을 방법이 없다. Vercel 대시보드를 열어 확인하는 것은 "지금 실제로 어떻게 동작하는지"가
 * 아니라 "무엇이 설정돼 있는지"라, 오타나 미재배포를 잡지 못한다.
 *
 * **값은 절대 내보내지 않는다.** 켜졌는지(boolean)와 사람이 읽을 이름만 돌려준다. 슬롯 ID나
 * 키가 응답에 실리면 이 엔드포인트 자체가 유출 경로가 된다.
 *
 * **그래도 토큰으로 막는다.** boolean만 나가도 "결제가 아직 안 열렸다" 같은 운영 상태는
 * 알려 주는 셈이라, 아무나 긁어 갈 이유가 없다. `OPS_STATUS_TOKEN`이 없으면 이 엔드포인트는
 * 아예 동작하지 않는다 — 열어 두고 잊는 것보다 안 되는 편이 낫다.
 */

export const runtime = "nodejs";
// 배포된 환경변수를 그대로 읽어야 하므로 캐시하지 않는다.
export const dynamic = "force-dynamic";

function tokenMatches(request: NextRequest) {
  const expected = process.env.OPS_STATUS_TOKEN?.trim();
  if (!expected) return false;
  const provided = request.headers.get("x-ops-token")?.trim() ?? "";
  // 길이가 다르면 timingSafeEqual이 던진다. 길이 자체도 비밀은 아니지만 분기를 맞춰 둔다.
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function GET(request: NextRequest) {
  if (!process.env.OPS_STATUS_TOKEN?.trim()) {
    return NextResponse.json(
      { ok: false, error: "OPS_STATUS_TOKEN이 이 배포에 설정되지 않았습니다." },
      { status: 503 },
    );
  }
  if (!tokenMatches(request)) {
    return NextResponse.json({ ok: false, error: "인증되지 않은 요청입니다." }, { status: 401 });
  }

  // 페이팔은 `getPortOnePaypalConfig()`를 부르지 않고 환경변수를 직접 본다 — 그 함수가 있는
  // 모듈이 포트원 SDK를 끌어오는데, 켜졌는지 묻는 이 라우트가 결제 SDK를 로드할 이유가 없다.
  const paypalReady = Boolean(
    process.env.NEXT_PUBLIC_PORTONE_STORE_ID?.trim() &&
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL?.trim() &&
      process.env.PORTONE_API_SECRET?.trim(),
  );
  // 배포 주소를 그대로 쓰는 동안에는 robots가 전면 Disallow다(`lib/seo.ts`·`robots.ts`).
  const indexable = !/\.vercel\.app$/.test(new URL(siteUrl).hostname);

  return NextResponse.json({
    ok: true,
    siteUrl,
    checks: [
      /**
       * **저장소가 맨 앞이다.** 이것이 꺼지면 나머지가 전부 조용히 무너진다 — 사업자 정보가
       * 폴백으로 그려지고(법적 고지가 틀린다), 레이트리밋이 통째로 통과하고, 집계가 한 줄도
       * 안 쌓이고, 주문 생성이 503이 된다.
       *
       * **2026-08-06에 사주링크가 정확히 그 상태로 며칠 떠 있었다.** 그런데 이 화면에 항목이
       * 없어서, 상태를 보라고 만든 곳이 정작 그날 꺼져 있던 것을 안 보고 있었다.
       *
       * `OPENAI_API_KEY`는 넣지 않는다 — 이 서비스는 규칙 엔진이라 AI를 쓰지 않는다. 영원히
       * 꺼진 항목은 "켜야 하는 것"으로 잘못 읽힌다.
       */
      {
        key: "supabase",
        label: "저장소 연결 (Supabase)",
        enabled: Boolean(
          process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
            process.env.SUPABASE_SERVICE_ROLE_KEY?.trim(),
        ),
        variable: "NEXT_PUBLIC_SUPABASE_URL · SUPABASE_SERVICE_ROLE_KEY",
        note: "꺼지면 사업자 정보가 폴백으로 나가고, 레이트리밋이 전부 통과하며, 주문·집계가 남지 않습니다.",
      },
      {
        key: "analytics_salt",
        label: "방문자 해시 소금",
        enabled: Boolean(process.env.ANALYTICS_HASH_SALT?.trim()),
        variable: "ANALYTICS_HASH_SALT",
        note: "없으면 서비스 키를 대신 씁니다 — 동작은 하지만 키를 교체하는 날 집계가 끊깁니다.",
      },
      {
        key: "adsense",
        label: "애드센스 퍼블리셔 ID",
        enabled: adsEnabled,
        variable: "NEXT_PUBLIC_ADSENSE_CLIENT",
        note: "없으면 광고 스크립트도 CSP 완화도 붙지 않습니다(다크 런치).",
      },
      /**
       * 광고 자리는 **표에서 파생시킨다.** 손으로 적으면 `lib/ads.ts`의 `adSlots`를 고칠
       * 때마다 이 목록이 뒤에 남아 없는 자리를 보고하거나 새 자리를 빠뜨린다. 실제로
       * 2026-08-18에 `top`·`bottom`을 걷어냈을 때 여기가 컴파일을 깨뜨려 드러났다 —
       * 그때는 타입이 잡아 주었지만, 자리를 **더할** 때는 아무도 안 잡아 준다.
       */
      ...Object.entries(adSlots).map(([slotKey, slotValue]) => ({
        key: `slot_${slotKey}`,
        label: `광고 자리 · ${slotKey}`,
        enabled: Boolean(slotValue),
        variable: `NEXT_PUBLIC_ADSENSE_SLOT_${slotKey.toUpperCase()}`,
      })),
      {
        key: "rewarded",
        label: "GAM 보상형 (제출 게이트)",
        enabled: gamRewardedEnabled,
        variable: "NEXT_PUBLIC_GAM_REWARDED_UNIT",
        note: "꺼져 있으면 제출 즉시 결과가 나옵니다 — 게이트 자체가 사라집니다.",
      },
      {
        key: "ops_alert",
        label: "운영 알림 메일",
        enabled: Boolean(process.env.RESEND_API_KEY?.trim()),
        variable: "RESEND_API_KEY",
        note: "없으면 결제·발급 실패가 서버 로그에만 남습니다.",
      },
      {
        key: "toss",
        label: "국내 결제 (토스페이먼츠)",
        enabled: tossConfigured,
        variable: "TOSS_SECRET_KEY",
      },
      {
        key: "paypal",
        label: "해외 결제 (포트원 페이팔)",
        enabled: paypalReady,
        variable: "NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL · PORTONE_API_SECRET",
      },
      {
        key: "indexable",
        label: "검색 색인 허용",
        enabled: indexable,
        variable: "NEXT_PUBLIC_SITE_URL",
        note: "배포 주소(*.vercel.app)인 동안에는 robots가 전면 Disallow입니다 — 의도된 동작입니다.",
      },
    ],
  });
}
