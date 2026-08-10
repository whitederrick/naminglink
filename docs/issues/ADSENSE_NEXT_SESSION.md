> **SUPERSEDED (2026-08-10)** — 이 문서는 수정 커밋 이전(HEAD 5656343) 시점의 검토 메모입니다. 현재 HEAD(a27b696·7d4b290·58df928 반영본)에서 차단 이슈는 해소됐고, 재확인 결과 **코드상 재심사 블로커는 없습니다**(review 중 ko 실결과 광고는 유지 결정). 현재 결론은 memory `adsense-review-strategy` 및 `docs/WORKLOG_2026-08-11.md` 참조. **현재 검토자에게 이 문서를 그대로 전달하지 마십시오.**

# naming-link 애드센스 재심사 — 다음 작업 메모리

상태: **재심사 요청 보류**. 현재 HEAD `5656343`까지 운영 반영됐지만 아래 차단 이슈를 먼저 고친다.

## 독립 확인에서 통과한 것

- `afe990f` transliteration canonical·hreflang 수정은 운영에 반영됨. `hreflang=ko` 0건.
- 미지원 로케일 `kk·km·mn·uz` 광고 코드 0건.
- 소유권 메타 태그와 `/ads.txt` 정상.
- review 모드에서 GAM·Offerwall·셀프 광고 관문이 꺼지고 후보 봉인이 해제됨.
- 홈에 기존 가이드 4편과 About이 본문 링크로 노출됨.
- 브랜드 404는 실제 404·noindex이며 홈·가이드·About으로 직접 연결됨.
- Organization·WebSite JSON-LD가 화면의 사업자 정보와 일치함.
- `pnpm --filter naminglink lint` 종료 코드 0.
- `pnpm --filter naminglink build` 종료 코드 0.

## 차단 이슈 1 — review 모드에도 전역 광고 요청이 발생함

`apps/naminglink/src/app/layout.tsx`가 `adsAllowedForLocale(locale)`만 보고 전역 AdSense 로더를 싣는다. 이 함수는 `adsLive`를 보지 않는다.

운영 브라우저에서 3.5초 대기 후 다음 모든 화면에 AdSense 스크립트와 `googleads.g.doubleclick.net/pagead/ads` iframe이 실제 생성되는 것을 확인했다.

- `/en`
- `/en/global-to-korean`
- `/en/guide/how-global-to-korean`
- `/en/login` — `noindex`
- `/en/global-to-korean/result` — 세션 없는 빈 결과, `noindex`
- `/en/pricing`
- `/en/stamp-order`

보고서의 “결과 배너만 유지”와 실제 동작이 다르다. 메타 태그와 ads.txt가 있으므로 심사 연결을 위해 전역 로더를 유지할 필요가 없다.

### 수정 원칙

```text
adsConfigured
  → google-adsense-account 메타 태그와 ads.txt만 결정

adsServingEnabled = adsConfigured && adsLive
  → AdSense 로더, 광고 단위, 광고 CSP를 결정
```

review 모드에서는 AdSense 로더·`adsbygoogle`·DoubleClick 요청·결과 배너·GAM·Offerwall이 모두 0이어야 한다. 승인 후에도 전역 레이아웃 로더 대신 실제 게시자 콘텐츠가 확인된 적격 `AdBanner`에서만 로더를 지연 로드하는 방향을 우선 검토한다.

함께 고칠 곳:

- `apps/naminglink/src/app/layout.tsx`
- `apps/naminglink/src/lib/ads.ts`
- `apps/naminglink/src/components/AdBanner.tsx`
- `apps/naminglink/next.config.ts` — review 모드 광고 CSP도 닫기
- 광고 모드·로케일 검사기의 기대값

## 차단 이슈 2 — HUMAN_REVIEWED_LOCALES가 실제 게이트가 아님

현재 구현:

```ts
const HUMAN_REVIEWED_LOCALES: ReadonlySet<string> = ADSENSE_SUPPORTED_LOCALES;
```

따라서 승인 후 `NEXT_PUBLIC_AD_MODE=live`로 바꾸면 검수되지 않은 지원 언어 19개에 광고가 즉시 열린다. 전략 문서의 “처음에는 ko, 검수 후 en”과 코드가 다르다.

현재 값은 독립 Set `new Set(["ko"])`로 둔다. 영어는 사람이 실제 검수하고 `docs/LOCALE_REVIEW_LOG.md`를 갱신한 뒤 추가한다. 미검수 로케일의 sitemap·index·hreflang은 이번 1차 재심사에서는 그대로 유지한다.

## 차단 이슈 3 — 미출시 화면이 여전히 공개·색인·광고 요청 상태

운영 `/en/pricing`에 다음이 그대로 보인다.

- `payment feature in preparation`
- `Before Full Payment Launch`
- 아직 살 수 없는 후보 해제·PDF·굿즈 가격

운영 `/en/stamp-order`는 색인 가능하며 “We are not taking name stamp orders at the moment”만 표시한다. 두 페이지 모두 현재 전역 AdSense 요청도 발생한다.

수정 원칙:

- pricing에는 실제 구매 가능한 상품만 표시.
- 활성 유료 상품이 없으면 “현재 판매 중인 유료 상품 없음, 기본 결과 무료”만 사실적으로 표시.
- 미래 가격·출시 준비 문구·`Before Full Payment Launch` 제거.
- `/stamp-order`는 판매 시작 전 `noindex` + sitemap 제외 또는 404 처리. 이는 로케일 색인 축소와 별개다.
- 법적 `통신판매업 신고 준비 중` 표시는 사실이므로 유지 가능.

## 검사기 보완

현재 `verify-ad-mode.ts`는 review 모드에도 “적격 로케일 광고 코드 존재”와 적격 19개를 성공 조건으로 삼는다. 현재 설계를 정확히 검사할 뿐 정책 안전성을 증명하지 못한다.

새 기대값:

```text
review:
  광고 적격 로케일 0
  AdSense 로더·유닛·GAM·Offerwall 0
  meta + ads.txt만 유지

live:
  Google 지원 ∩ 사람 검수 완료 ∩ 페이지 적격
  현재 사람 검수 완료는 ko만
```

정적 HTML뿐 아니라 운영 브라우저에서 3~5초 기다린 뒤 아래 도메인·마커가 0인지 확인한다.

- `pagead2.googlesyndication.com`
- `googleads.g.doubleclick.net`
- `adsbygoogle`
- `securepubads`
- `googletag`
- `fundingchoices`

검사 페이지 행렬: 홈, 입력, 가이드, 로그인, 빈 결과, pricing, stamp-order, 404, `en·ja·ru`, `kk·km·mn·uz`.

“84개 전수 통과”라고 쓰지 않는다. 시간 초과와 미실행 검사가 있으면 실행 결과를 별도로 표시한다.

## 내일 작업 순서

1. 연결과 게재 판정을 완전히 분리한다.
2. review 모드 광고 로더·배너·광고 CSP를 0으로 만든다.
3. 사람 검수 allowlist를 `ko`로 고친다.
4. pricing과 stamp-order의 미출시 상태를 정리한다.
5. 광고 검사기 기대값과 브라우저 회귀 검사를 고친다.
6. lint·production build·선언 URL·내부 링크 검사를 종료 코드까지 확인한다.
7. 운영 배포 후 브라우저 페이지 행렬을 재실측한다.
8. 모두 통과한 뒤에만 Auto Ads OFF, Search Console sitemap·대표 URL 검사, 구조 동결, 재심사를 진행한다.

## 주의

- naminglink 재심사 변경과 형제 앱 변경을 섞지 않는다.
- URL·canonical·hreflang·로케일 색인 구조는 이번 작업에서 건드리지 않는다. 단, 미출시 단일 상품 페이지의 noindex/sitemap 제외는 허용한다.
- 검사 출력의 `ALL PASS`만 보지 말고 프로세스 종료 코드를 확인한다.
- 이 메모리를 기록한 점검자는 저장소 코드를 수정하지 않았다.
