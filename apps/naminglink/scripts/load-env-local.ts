/**
 * 검사 스크립트가 `.env.local` 을 읽어 `process.env` 에 채운다.
 *
 * ## 왜 있는가 (2026-08-21)
 *
 * `verify-legal-source.ts` 가 전수 스윕에서 늘 **「못 돎 — 자격증명이 없다」**로 나왔다.
 * 그런데 `apps/naminglink/.env.local` 은 **46줄로 있었다.** 그 검사기가 그 파일을 읽지 않았을
 * 뿐이고, 같은 폴더의 `verify-premium-ai-usage.ts` 는 읽고 있었다 — **빠진 것은 파일이 아니라
 * 배선이었다.** 그 사이 기록에는 「이 컴퓨터에 `.env.local` 이 없다」고 적혀 있었다.
 *
 * 그래서 파싱을 **한 곳에** 둔다. 두 벌로 적으면 하나만 고쳐지는 날이 온다 — 따옴표를 벗기는
 * 규칙이나 `#` 주석 처리가 갈라지면, 한쪽 검사기만 조용히 자격증명을 못 읽는다.
 *
 * ## 「없으면 비운다」가 옳은 이유
 *
 * 파일이 없는 것은 **결함이 아니라 환경이 없는 것**이다(CI·형제 앱). 여기서 던지면 부르는
 * 검사기가 스택 트레이스로 죽고, 감사기는 그것을 **빨간불**로 센다 — 없는 결함이 신고된다.
 * 빈 표를 돌려주면 부르는 쪽이 「물어보지 못했다」를 제 갈래(`CANNOT_RUN`)로 적을 수 있다.
 *
 * **덮어쓰지 않는다.** 이미 `process.env` 에 있는 값이 이긴다 — Vercel·CI 에서 넣어 준 값을
 * 로컬 파일이 밀어내면, 검사기가 **다른 환경을 보면서 초록불**을 내게 된다.
 */
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/** 이 앱의 `.env.local`. 경로를 문자열로 박지 않는다 — 어디서 돌리든 같은 파일을 본다. */
export const ENV_LOCAL_PATH = fileURLToPath(new URL("../.env.local", import.meta.url));

/**
 * **「자격증명이 없는 상태」를 만들 수 있어야 한다.**
 *
 * 이 배선을 넣자마자 공격 ④(`verify-review-attacks.ts`)가 뚫렸다. 그 공격은 자식 프로세스의
 * `SUPABASE*` 환경변수를 지워 「못 물어보는」 상태를 만들고 검사기가 `CANNOT_RUN` 을 제대로
 * 알리는지 본다. 그런데 검사기가 파일을 스스로 읽으니 **그 상태가 만들어지지 않았다** —
 * 배선을 넣으면서 그 경로를 시험할 방법을 없앤 것이다.
 *
 * `legal-source.ts` 가 reader 를 **주입**하게 만든 이유와 같은 자리다. 그래서 같은 방식으로
 * 이음매를 둔다. 이 표식이 켜지면 파일을 읽지 않는다 — 그러면 못 돎 경로가 다시 시험된다.
 *
 * **초록불을 만드는 스위치가 아니다.** 이것을 켜면 검사기는 「못 돎」으로 끝나고, 못 돎은
 * 통과가 아니다(스윕은 `exit 2` 로 나간다).
 */
export const IGNORE_FLAG = "NAMINGLINK_IGNORE_ENV_LOCAL";

/**
 * `.env.local` 을 파싱해 `process.env` 에 채우고, 읽은 표를 돌려준다.
 *
 * 파일이 없으면 **빈 표**다(던지지 않는다).
 */
export function loadEnvLocal(): Record<string, string> {
  if (process.env[IGNORE_FLAG] === "1") return {};
  if (!existsSync(ENV_LOCAL_PATH)) return {};
  const parsed: Record<string, string> = {};
  for (const line of readFileSync(ENV_LOCAL_PATH, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index < 0) continue;
    const key = trimmed.slice(0, index).trim();
    if (!key) continue;
    // 줄 단위로 자른 뒤라 값에 줄바꿈이 없다 — `s` 플래그를 쓰지 않는다(이 앱의 target 에서
    // `TS1501` 이 난다. tsc 0건을 근거로 쓰려면 target 안에서 써야 한다).
    parsed[key] = trimmed
      .slice(index + 1)
      .trim()
      .replace(/^"(.*)"$/, "$1")
      .replace(/^'(.*)'$/, "$1");
  }
  for (const [key, value] of Object.entries(parsed)) {
    if (process.env[key] === undefined) process.env[key] = value;
  }
  return parsed;
}
