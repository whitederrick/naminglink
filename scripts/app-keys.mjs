// 검사기들이 **앱 목록을 각자 적지 않도록** 한 곳에서 읽어 준다.
//
// ## 왜 있는가
//
// 2026-08-06 하루에 같은 병이 여덟 곳에서 나왔다. 전부 "앱 목록이 코드에 손으로 박혀 있다"는
// 한 가지 원인이었다:
//
//   verify-route-guards      두 앱만 세고 "ALL PASS"를 찍었다
//   verify-reachable-links   두 앱만 인자로 받는다
//   verify-app-split         두 앱만 더해 합계가 어긋났다
//   api/admin/inyeon-status  한 앱만 물었다
//   admin_analytics_snapshot 모르는 앱을 조용히 naminglink로 바꿨다
//
// **검사기에서 이 병은 특히 나쁘다.** 목록에서 빠진 앱은 검사를 통과하는 것이 아니라 **검사받지
// 않는데**, 화면에는 "ALL PASS"가 찍힌다 — 안전장치가 거짓 안심을 준다.
//
// 원본은 `packages/core/src/apps.ts`의 `APP_KEYS` 하나다. TypeScript라 `.mjs`에서 그대로
// import할 수 없으므로 파일을 읽어 뽑는다. **정규식으로 읽는 것이 못마땅하더라도, 목록을 여기
// 한 벌 더 적는 것보다는 낫다** — 두 벌이 되는 순간 어긋나는 것이 이 파일이 막으려는 병이다.

import { readFileSync } from "node:fs";

const SOURCE = new URL("../packages/core/src/apps.ts", import.meta.url);

/** 앱 키 목록. 읽지 못하면 던진다 — 조용히 빈 목록을 돌려주면 검사가 통째로 거짓말이 된다. */
export const APP_KEYS = (() => {
  const source = readFileSync(SOURCE, "utf8");
  const block = source.match(/export const APP_KEYS\s*=\s*\[([\s\S]*?)\]/);
  const keys = block?.[1].match(/"([a-z0-9_-]+)"/gi)?.map((quoted) => quoted.slice(1, -1));
  if (!keys?.length) {
    throw new Error(
      "packages/core/src/apps.ts에서 APP_KEYS를 읽지 못했습니다. 형태가 바뀌었다면 scripts/app-keys.mjs도 함께 고치세요.",
    );
  }
  return keys;
})();

/** 저장소 뿌리 기준 앱 디렉터리(`apps/naminglink` …). */
export const APP_DIRS = APP_KEYS.map((key) => `apps/${key}`);
