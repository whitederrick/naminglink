# 구현 지시서 — apps/sajulink · apps/dreamslink (Claude Code 실행용)

작성 2026-08-04 · 대상 레포: `C:\myProjects\naminglink`(pnpm workspace 모노레포) · 실행 주체: **VS Code의 Claude Code**
목적: 버그 수정이 끝난 **현재 `apps/inyeonlink`를 템플릿으로 복제**해 `apps/sajulink`·`apps/dreamslink`를 만들고, 도메인 부분만 교체한다. 새 UI/shell을 새로 짜지 않는다.

> ⚠️ **위치 필수**: 두 앱은 반드시 **`naminglink/apps/` 안**(inyeonlink 옆 형제)에 만든다 — `naminglink/apps/sajulink`, `naminglink/apps/dreamslink`. 모노레포 밖(최상위 폴더)에 두면 `packages/core`·shell을 import·재활용할 수 없어 "한 번 고치면 전파"가 끊긴다. (이 지시서 문서 자체는 `naminglink/docs/`에 보관해도 무방 — 코드 위치와 별개.)

> 이 티켓이 **구조 기준 authoritative**. 도메인·상품 디테일은 `platforest_saju-link_spec_2026-08-04.md`·`platforest_link_factory_build_spec_2026-08-04.md` 참고(단, 그 문서들의 packages/{hanja,saju,payments,report,db} 명칭은 아이디어 시점 가정이며 **실제는 `packages/core` 1개 + shell은 앱별 복제**임 — 아래 실구조를 따른다).

---

## 0. 실제 구조 (ground truth — Claude Code는 반드시 실제 파일을 열어 확인)
```
naminglink/ (pnpm workspace)
├─ apps/
│  ├─ naminglink/   (작명: data/hanja·data/official, lib/hanja.ts·openai.ts·prompts.ts·services.ts·premium-hanja-analysis.ts 등)
│  └─ inyeonlink/   (궁합: ★ 복제 템플릿. 아래 트리)
└─ packages/
   └─ core/         (src/saju/{engine,calendar,elements,ten-gods,timezone}, src/pdf/script-runs.tsx, src/env.ts, src/apps.ts)
```
`apps/inyeonlink/src` 실제 구성:
- `proxy.ts` (admin 가드), `app/{layout.tsx,page.tsx,robots.ts,sitemap.ts,ads.txt}`
- 법적/정보 라우트: `app/{about,contact,privacy,terms,refund-policy,notice,pricing}`
- 도메인 라우트: `app/{affinity,compatibility}` + `app/api/{affinity,match,day-master,legal,ops,payments/toss,report/order,report/pdf,analytics}` + `app/guide/*`
- components: `SiteFooter, LegalDocumentBody/View, LegalModal, LegalLinks, Locale*(Select/Switcher/HtmlSync), PageHeader, PageTitle, AdBanner, AdWatchOverlay, AnalyticsTracker, PrivacyNotice, ReportPurchasePanel, PersonFields, CompatibilityForm/AffinityForm, MatchResultView/AffinityResultView, BrandMark, GuideShell/Figure/Link, TypeCheckModal`
- lib: `portone.ts, toss.ts, seo.ts, ads.ts, gam-rewarded(.ts/-config), analytics-client.ts, company(.ts/-server), locale(.ts/-codes/-path), i18n.ts + i18n-locales/*(22개), legal-content.ts + legal-locales/*(22개), notices.ts, ops-alert.ts, order-writes.ts, payments-csp.ts, request-guard.ts, report-product.ts, report-order-binding.ts, public-outcome.ts, result-seal.ts, use-result-fragment.ts, supabase.ts, engines/{saju,yongsin,ten-gods,elements,branches,relations,detail,affinity,zodiac,prepare,index,types}, pdf/{compatibility-report,affinity-report,fonts,warm-up}`

→ **shell(footer/legal/locale/robots/seo/payments/ads/proxy)이 inyeonlink에 이미 다 있음.** saju/dream은 이걸 복제해 재활용한다.

---

## 1. 전략 — 하이브리드(복제 우선 + 선별 중앙화)
1. **복제로 shell 확보**: `apps/inyeonlink`를 복제 → shell 그대로, 도메인만 교체. 오늘까지 고친 버그가 그대로 상속됨.
2. **중앙화는 점진적**: shell이 naminglink/inyeonlink에 **중복**돼 있으므로, 버그 잦은 프레임워크 모듈만 `packages/core`로 hoist해 이후 전파. **단 near-launch인 naming/inyeon 안정성을 위해 Phase 0(중앙화)은 선택·후순위**로 두고, 급하면 복제만으로 saju/dream 먼저 낸다.
3. **프레임워크(중앙화 대상) vs 콘텐츠(앱별 유지) 구분**:
   - 중앙화 후보: `portone`(결제 코어·웹훅검증), `purchase` 게이팅, `product-settings` 로더, `robots` 도메인스위치 헬퍼, `checkout-consent` 프레임워크, `seo` 헬퍼, `payments-csp`, `SiteFooter`(회사/서비스 props화), `verify-legal-prices` 스크립트.
   - 앱별 유지: `legal-content/-locales`(문구), `i18n-*`(서비스 문자열), 상품 카탈로그, 프롬프트, 도메인 엔진.
   - ⚠️ hoist는 **한 모듈씩 PR → naming·inyeon 빌드 통과 확인 → 다음**. 한꺼번에 옮기지 말 것.

---

## 2. Phase 1 — apps/sajulink (inyeonlink 복제)
**saju = inyeon의 "2인 궁합"을 "1인 사주 + 오늘의 운세"로 바꾼 것.** 엔진(core saju·yongsin·ten-gods·elements)은 그대로, 2인 매칭(affinity/relations/match)만 제거.

1. **복제**: `apps/inyeonlink` → `apps/sajulink`. `package.json` name·dev 포트 변경. workspace 등록 확인.
2. **그대로 유지(shell)**: `proxy.ts`, `app/{layout,robots.ts,sitemap.ts,ads.txt,about,contact,privacy,terms,refund-policy,notice,pricing}`, components `{SiteFooter,Legal*,Locale*,PageHeader,PageTitle,AdBanner,AdWatchOverlay,AnalyticsTracker,PrivacyNotice,ReportPurchasePanel,BrandMark,GuideShell/Figure/Link}`, lib `{portone,toss,seo,ads,gam-rewarded,analytics-client,company*,locale*,notices,ops-alert,order-writes,payments-csp,request-guard,report-product,report-order-binding,public-outcome,result-seal,use-result-fragment,supabase}`.
3. **도메인 교체**:
   | 대상 | inyeon(from) | saju(to) |
   |---|---|---|
   | 라우트 | `app/affinity`,`app/compatibility` | `app/reading`(입력→무료결과), `app/today`(오늘의 운세), `app/reading/result` |
   | 폼 | `CompatibilityForm/AffinityForm`,`PersonFields`(2인) | `SajuForm`+`PersonFields`(1인만) |
   | 엔진 | `lib/engines/{affinity,relations,match}`(2인) | 제거/미사용. `lib/engines/{saju,yongsin,ten-gods,elements,branches}` + `packages/core` **유지** |
   | 신규 엔진 | — | `lib/engines/today-fortune.ts`(오늘 일진 간지 × 원국 → 규칙 스코어) |
   | 결과뷰 | `MatchResultView/AffinityResultView` | `SajuResultView`(1인: 원국·오행·강약·해설) |
   | 프롬프트 | (inyeon 해설) | 사주 해설 프롬프트 — **엔진 계산 결과 입력, GPT는 해설만**, 과잉약속 회피, 로케일별 (naminglink `lib/openai.ts`·`prompts.ts` 패턴 참고) |
   | PDF | `lib/pdf/compatibility-report.tsx` | `lib/pdf/saju-report.tsx`(총운/프리미엄) |
   | api | `api/{affinity,match}` | `api/saju`(계산+해설), `api/today`. `api/{report/order,report/pdf,payments/toss,legal,ops,analytics}` **재활용** |
   | 상품 | inyeon 상품코드 | saju 상품코드: 무료 / 총운(₩4,900/$4.99) / 프리미엄(₩9,900/$9.99). `product-settings`·`report-product` |
   | guide | 궁합 가이드 | 사주 가이드로 텍스트 교체(구조 유지) |
4. **i18n/legal**: `i18n-locales/*`·`legal-locales/*` 복제 → **서비스 문자열/상품 문구만 saju로 교체**. day-1은 en + ja/zh/vi/es 우선, 나머지 후속(구조는 22개 유지).
5. **크로스셀**: 결과 하단 CTA → inyeon(궁합)·naming(이름)·dream. (공용 orders/이벤트)
6. **env**: `NEXT_PUBLIC_SITE_URL=https://saju-link.com`, PortOne 키(공유 또는 별도 채널), Supabase(공유). robots는 `*.vercel.app`이면 Disallow(기존 로직).

---

## 3. Phase 2 — apps/dreamslink (inyeonlink 복제, 사주엔진 제거)
**dream = shell만 재활용, 도메인은 완전 신규(최경량).**
1. **복제**: `apps/inyeonlink` → `apps/dreamslink`. shell 유지.
2. **제거**: `packages/core` saju·manseryeok 의존, `PersonFields`·`birthplaces`·`lib/engines/*`(사주), 사주 guide, day-master API. → dream은 만세력/한자 불필요.
3. **도메인 신규**:
   - 라우트 `app/dream`(꿈 텍스트 입력→무료 해몽), `app/dream/result`.
   - 엔진 `lib/dream-symbols.ts`(전통 해몽 상징 사전) + LLM 해석(openai 패턴). ※상징 DB 범위는 열린 결정(순수 LLM로 시작 가능).
   - 결과뷰 `DreamResultView`, PDF `lib/pdf/dream-report.tsx`(심층 해몽).
   - api `api/dream`. 상품: 무료 해몽 / 심층 PDF(₩2,900/$2.99). (꿈일기 구독은 후속.)
   - guide: 해몽 가이드.
4. **유지(shell)**: footer/legal/locale/robots/seo/payments(report,portone,toss)/ads/proxy/analytics — Phase 1과 동일 목록.
5. **env**: `NEXT_PUBLIC_SITE_URL=https://dreams-link.com`.

---

## 4. Phase 0(선택·점진) — 공통 모듈 중앙화
saju/dream 복제가 끝난 뒤(또는 병행), 아래를 **한 개씩** `packages/core`(또는 신설 `packages/shell`)로 hoist하고 naming·inyeon·saju·dream이 import하도록 교체. 각 단계마다 4개 앱 `build`·`typecheck` 통과 확인.
우선순위: `portone` → `purchase 게이팅` → `product-settings` → `robots 도메인스위치 헬퍼` → `payments-csp`/`checkout-consent 프레임워크` → `seo` → `SiteFooter`(props화) → `verify-legal-prices`.
목적: 이후 이 모듈들의 버그 수정이 4개 앱에 자동 전파(가격 정합·robots·구매 게이팅 재발 방지).

---

## 5. Vercel / 도메인 / DB
- Vercel: 앱별 프로젝트, **Root Directory=`apps/sajulink`|`apps/dreamslink`**, Ignored Build Step(변경 없는 앱 스킵). 도메인 saju-link.com / dreams-link.com.
- DB: **inyeonlink의 order/report/supabase 저장 패턴을 그대로 미러링**(24h 만료·접근토큰·`order-writes`·`report-order-binding`). 결과 테이블은 서비스별 또는 `service` 컬럼. ⚠️ **정확한 스키마는 레포의 기존 마이그레이션/코드를 열어 확인 후 맞출 것 — 새 스키마 임의 발명 금지.**

---

## 6. 수용 기준 (Claude Code가 실행·확인)
- `pnpm -F sajulink build` / `pnpm -F dreamslink build` + typecheck 통과(0 errors).
- 기존 검증 스크립트 통과: `verify-legal-prices`(가격↔약관 정합), `verify-checkout-consent`, i18n 검증.
- robots: `NEXT_PUBLIC_SITE_URL`이 `*.vercel.app`이면 전면 Disallow 확인.
- 구매 게이팅: 상품 판매중 **AND** 해당 통화 결제수단 준비일 때만 결제 버튼(판매중지면 가격 감춤).
- 무료 결과 페이지=광고 슬롯 렌더, 유료=페이월→결제→PDF 경로 로컬 동작.
- 24h cleanup cron·접근토큰 경로 inyeon과 동일 동작.

---

## 7. 진행 순서 요약
1) apps/sajulink 복제·도메인 교체 → build 통과 → 로컬 결제/PDF 확인
2) apps/dreamslink 복제·엔진 제거·해몽 신규 → build 통과
3) (선택) Phase 0 공통 모듈 1개씩 중앙화
4) Vercel 프로젝트·도메인·env·robots → 스테이징 확인 → 오픈
※ 선행: naming/inyeon 런칭 블로커(통신판매업 신고번호·PortOne 실채널 키·실도메인/색인) 해소.

---

## 부록: 열린 결정(착수 전 확정 권장)
가격·통화 티어 / saju 구독(Phase 2 권장) / dream 상징DB 범위(순수 LLM vs 사전) / day-1 언어셋(en+ja/zh/vi/es) / 애드센스 점술 정책 적합성.
