# @naminglink/core

`apps/naminglink`와 `apps/inyeonlink`가 함께 쓰는 코드만 둔다.

한쪽 앱에서만 쓰는 코드는 그 앱 안에 두고, **두 번째 소비자가 생겼을 때** 이곳으로 옮긴다.
미리 옮기면 쓰지도 않을 경계를 유지하는 비용만 든다.

## 서브경로

| 경로 | 내용 |
|---|---|
| `@naminglink/core/saju` | 만세력 래퍼 — 사주 4주(연·월·일·시), 일간 오행, 표면 오행 개수 |

소스(.ts)를 그대로 export하므로 소비하는 앱의 `next.config.ts`에
`transpilePackages: ["@naminglink/core"]`가 있어야 한다.
