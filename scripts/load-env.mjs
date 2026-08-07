// 앱의 `.env.local`을 읽어 `process.env`에 채운다.
//
// ## 왜 필요한가 (2026-08-07)
//
// 검사기를 `node scripts/…`로 돌리면 Next가 안 끼어들어 **`.env.local`이 자동으로 안 읽힌다.**
// 그래서 DB를 보는 검사기가 「Missing NEXT_PUBLIC_SUPABASE_URL…」로 죽었다 — 값은 바로 옆에
// 있는데 아무도 읽지 않은 것이다. 그런 검사기는 **평소에 안 돌게 되고, 안 도는 검사는 없는
// 것과 같다.**
//
// 스크립트마다 제각기 읽던 것도 정리한다. `audit-db.mjs`는 경로를 **절대 경로로 박아** 두어
// 다른 컴퓨터나 다른 체크아웃에서는 돌지 않았다.
//
// **이미 들어 있는 값은 덮어쓰지 않는다.** 명령줄에서 준 값이 파일보다 세야 한다
// (`NEXT_PUBLIC_ADSENSE_CLIENT=… node …` 같은 쓰임이 실제로 있다).

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * `appDir/.env.local`을 읽어 `process.env`를 채우고, 읽은 키 목록을 돌려준다.
 * 파일이 없으면 빈 배열 — 죽지 않는다(그 사실은 부르는 쪽이 판단한다).
 */
export function loadEnvLocal(appDir) {
  const file = path.join(appDir, ".env.local");
  if (!existsSync(file)) return [];
  const loaded = [];
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    if (!line.includes("=") || line.trimStart().startsWith("#")) continue;
    const at = line.indexOf("=");
    const key = line.slice(0, at).trim();
    const value = line.slice(at + 1).trim().replace(/^"|"$/g, "");
    if (process.env[key] === undefined) process.env[key] = value;
    loaded.push(key);
  }
  return loaded;
}
