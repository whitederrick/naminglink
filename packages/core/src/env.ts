/**
 * 개발(로컬)과 운영(Vercel)을 가르는 단 하나의 판정.
 *
 * 두 앱이 **같은 Supabase 프로젝트**를 본다. DB를 나누는 대신, 이용자·결제가 만드는 행에는
 * `is_test`를 찍고 운영자가 정하는 설정은 로컬에서 읽기만 하는 방식으로 가른다. 그 갈림길이
 * 여기 하나뿐이어야 앱이 늘어나도 규칙이 흩어지지 않는다.
 *
 * **기본값이 운영인 것이 핵심이다.** 두 방향의 오판 비용이 대칭이 아니다.
 *
 * - 로컬을 운영으로 착각 → 테스트 주문이 통계에 섞인다. 지저분하지만 되돌릴 수 있다.
 * - 운영을 개발로 착각 → **실주문이 `is_test=true`로 기록되어** 관리자 목록·매출에서 사라지고
 *   배송이 누락된다. 돈을 받고 상품을 안 보내는 상태다.
 *
 * 그래서 개발은 `.env.local`에 `APP_ENV=dev`를 **명시해야만** 되고, Vercel 운영에서는 그 값이
 * 어떤 경로로 들어오더라도 무시한다(`VERCEL_ENV`가 먼저다).
 *
 * Vercel Preview 배포도 기본은 운영으로 본다. 운영과 같은 DB를 보기 때문이다. Preview를
 * 테스트로 다루고 싶으면 Preview 스코프에만 `APP_ENV=dev`를 넣으면 된다.
 */

export type AppEnvironment = "development" | "production";

type EnvSource = Record<string, string | undefined>;

/** Node·Edge·브라우저 어디서 불려도 안전하게 환경변수를 읽는다. */
function currentEnv(): EnvSource {
  const scope = globalThis as { process?: { env?: EnvSource } };
  return scope.process?.env ?? {};
}

export function resolveAppEnvironment(env: EnvSource = currentEnv()): AppEnvironment {
  // 운영 배포는 어떤 설정으로도 개발이 될 수 없다.
  if (env.VERCEL_ENV === "production") return "production";
  if (env.APP_ENV === "dev" || env.APP_ENV === "development") return "development";
  return "production";
}

export function isDevEnvironment(env?: EnvSource): boolean {
  return resolveAppEnvironment(env) === "development";
}

/**
 * 운영 데이터를 건드릴 수 있는 스크립트·라우트가 맨 앞에서 부른다.
 * 개발 환경이 아니면 던진다(막는 쪽이 기본).
 */
export function assertDevEnvironment(action: string, env?: EnvSource): void {
  if (isDevEnvironment(env)) return;
  throw new Error(
    `${action}은(는) 개발 환경에서만 할 수 있습니다. ` +
      `운영 DB를 보고 있을 수 있으니 .env.local에 APP_ENV=dev가 있는지 확인하세요.`,
  );
}
