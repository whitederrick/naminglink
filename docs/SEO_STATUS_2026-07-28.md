# SEO 현황 점검 (2026-07-28)

대상: `apps/naminglink`. 코드 실측 기준이며, 추정으로 적은 항목은 따로 표시했다.

## 0. 결론

글로벌 SEO는 **미착수** 상태다. 새로 발견된 문제가 아니라, `docs/WORK_STATUS_2026-07-15.md` §F("글로벌 SEO와 `hreflang`", 상태: 미구현)에 이미 적혀 있던 항목이 그대로 남은 것이다. 그 문서의 통과 기준에 "URL 이전 후 canonical에 `?lang=`을 사용하지 않는다"까지 들어 있어, 경로 기반 URL 전환도 당초 계획에 포함돼 있었다.

## 1. 실측으로 확인된 결함

| 항목 | 상태 | 근거 |
| --- | --- | --- |
| `sitemap.ts` | 없음 | `src/**/sitemap.ts` 0건 |
| `robots.ts` | 없음 | `src/**/robots.ts` 0건 |
| hreflang (`alternates.languages`) | 없음 | 소스 전체에서 `alternates`/`hreflang` 0건 |
| `metadataBase` / `openGraph` / `canonical` | 없음 | 소스 전체 0건 |
| 루트 metadata | `title` + `description`뿐 | `src/app/layout.tsx:26` |
| 서비스별 metadata | 없음 | `export const metadata`는 `stamp-order`와 운영자(`naming-artist/*`) 페이지에만 존재. `hanja-meaning`·`global-to-korean`·`korean-to-global`은 루트 title을 그대로 물려받는다 |

추가로 확인된 두 가지:

- **루트 `/`의 중복 위험.** `getRequestLocale()`(`src/lib/locale.ts:84`)이 `x-vercel-ip-country` → `accept-language` 순으로 로케일을 정해 같은 URL이 접속자에 따라 다른 언어를 낸다. canonical이 없어 `/`와 `/?lang=xx`가 중복으로 잡힐 수 있다.
- **하위 페이지 언어판에 내부 링크가 없다.** `LanguageSwitcher`(`src/components/LanguageSwitcher.tsx:47,70`)의 링크는 전부 루트(`/?lang=xx`)로만 간다. 서비스 페이지의 각 언어판으로 가는 크롤 경로가 없어 발견이 sitemap에 의존하는데, 그 sitemap이 없다.

## 2. 앞선 구두 진단 중 정정한 내용

기기 연결이 끊긴 상태에서 파일을 다 못 보고 말한 부분이 있어 바로잡는다.

- ~~"미들웨어가 IP·Accept-Language로 로케일을 정하고 리다이렉트한다"~~ → **틀림.** `src/proxy.ts`는 `/admin`을 404로 막는 10줄이 전부다. 로케일 리다이렉트는 없다. 따라서 "IP 리다이렉트는 국제 SEO 금기"라는 지적도 이 코드에는 해당하지 않는다. 실제 성격은 리다이렉트가 아니라 같은 URL의 헤더 기반 dynamic serving이다.
  - 참고: `src/app/layout.tsx:37` 주석이 "미들웨어가 주입한 로케일"이라고 돼 있으나 실제와 다르다. **주석 정리 필요.**
- ~~"구글은 사실상 한 페이지로만 보고 한국어·일본어 페이지는 존재조차 모른다"~~ → **과장.** `?lang=ko`는 색인 가능한 별개 URL이고, `LanguageSwitcher`가 전 로케일 `<Link>`를 렌더하므로 루트 언어판에 대한 크롤 경로는 있다. 다만 구글의 다국어 URL 권장안에서 쿼리 파라미터는 가장 낮은 선택지다.
- ~~"28개 언어"~~ → **23개 로케일**이 맞다.

## 3. 우선순위 (수정본)

1. **sitemap·robots·페이지별 metadata·canonical.** 파일 몇 개 규모인데, 지금은 색인될 근거 자체가 없다. 비용 대비 효과가 가장 크다.
2. **hreflang(`alternates.languages`) + `x-default`.** 23개 로케일이 서로를 가리키게 한다.
3. **경로 기반 URL(`/ko/`, `/en/`) 전환.** 오픈 후에 하면 전 URL 변경 + 리다이렉트가 따라붙으므로 오픈 전이 싸다. 다만 1·2보다 작업량이 크다.
4. **프로그래매틱 페이지.** 보유한 한자 DB(`hanja.ts`, 공식 인명용 한자)로 "민준 이름 뜻", "旼 한자 뜻", "Korean name for [이름]" 류 페이지를 자동 생성. 경쟁이 약하고 검색 의도가 정확해 유입이 곧 사용으로 이어진다. 1~3이 끝난 뒤에 의미가 있다.

`WORK_STATUS_2026-07-15.md` §F의 통과 기준("각 공개 locale 페이지는 자기 자신을 canonical로 가리키고 유효한 모든 언어 대체 링크를 제공한다", "번역이 불완전한 locale은 검색 노출하지 않는다")은 그대로 유효하므로 재사용한다.

## 부록: 무료 한도 확인 (같은 세션에서 함께 확인)

- **1인당 하루 20회** — `src/app/api/naming/route.ts:133`, `FREE_DAILY_LIMIT ?? 20`. 식별자는 `getDailyVisitorHash()` = HMAC(`날짜:IP`)(`src/lib/request-context.ts:24`)로 **계정이 아니라 IP 기준**이다. `.env.example`에만 값이 있고 로컬 `.env.local`에는 없어 기본값 20이 적용된다. Vercel 운영 환경변수 값은 코드로 확인 불가.
- **서비스 전체 하루 2,000회** — 같은 파일 `:144`, `NAMING_AI_GLOBAL_DAILY_LIMIT ?? 2000`, 24시간 창, `identifier: "global"`, RPC 오류 시 fail-open.
- 두 한도의 적용 범위가 다르다. `HANJA_MEANING_MATCH`는 규칙 엔진이라 전역 2,000 상한에서 제외되고, 개인 20회 한도만 **생성 성공 후에** 차감한다(`:200`). AI 서비스는 생성 전에 차감하고 실패 시 `release_daily_quota`로 환급한다(`:161-168`).
- 무료 한도는 `NODE_ENV === "production"`에서만 적용된다(`:117`).
