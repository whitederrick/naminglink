import { adsConfigured, adsensePublisherId } from "@/lib/ads";

// ads.txt — 이 도메인의 광고 재고를 누가 팔 수 있는지 밝히는 IAB 표준 파일이다.
// 애드센스는 이 파일이 없으면 "수익이 손실될 수 있습니다" 경고를 띄우고 일부 입찰을 막는다.
//
// public/에 정적 파일로 두지 않고 라우트로 만든 이유: 퍼블리셔 ID를 환경변수에서 읽어야
// 다크 런치가 성립한다. 광고를 켜지 않은 상태에서 남의 퍼블리셔 ID도 아닌 빈 값이 적힌
// ads.txt가 떠 있으면 곤란하다 — 그럴 땐 아예 404를 준다.
export const dynamic = "force-static";

export function GET() {
  // **심사 모드와 무관하다** (2026-08-11). 이 파일은 「이 도메인의 광고 재고를 누가 팔 수
  // 있는가」를 밝히는 연결 표시이지 광고 요청이 아니다. 게재를 멈춘 동안 404를 내면 애드센스
  // 콘솔이 연결 경고를 띄운다 — 심사 중에 가장 피해야 하는 신호다.
  if (!adsConfigured) {
    return new Response("Not found", { status: 404 });
  }

  // f08c47fec0942fa0은 구글 애드센스의 고정 TAG-ID다(모든 게시자가 같은 값을 쓴다).
  const body = `google.com, ${adsensePublisherId}, DIRECT, f08c47fec0942fa0\n`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400",
    },
  });
}
