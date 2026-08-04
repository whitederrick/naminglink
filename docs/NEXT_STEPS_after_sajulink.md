# 후속 작업 지시서 (sajulink 완료 후) — Claude Code 실행용

작성 2026-08-04 · 전제: `apps/sajulink` 빌드가 어느 정도 돌아가는 상태에서 이어받음. **상세 설계는 기존 문서 참조(중복 안 함)** — 여기선 순서·마무리 검증·다음 착수만.

---

## 1. sajulink 마무리·검증 (먼저 끝낼 것)

### 남은 구현 (있으면 완료, 이미 됐으면 확인만)
- [ ] 화면: `app/reading`(입력→무료결과) · `app/today`(오늘의 운세) · `app/reading/result`.
- [ ] 컴포넌트: `SajuForm`(1인, PersonFields 재사용) · `SajuResultView`(원국·오행·강약·해설).
- [ ] PDF: `lib/pdf/saju-report.tsx`(총운/프리미엄).
- [ ] 콘텐츠 리테마: `app/guide/*`의 궁합 주제(affinity·how-compatibility) → 사주 주제로, `lib/i18n-*`·`legal-*`의 서비스 문자열 saju로.
- [ ] 상품 티어: 무료 / 총운(₩4,900/$4.99) / 프리미엄(₩9,900/$9.99) — `product-settings` SSOT.
- [ ] 해설 프롬프트가 **`sajulink_domain_logic.md` §4** 준수(엔진값만 사용·과잉약속 회피·로케일별 JSON).
- [ ] `today-fortune.ts` 가중치가 **`saju_scoring_defaults.json`**(또는 DB `saju_scoring_config`) 참조(하드코딩 X).
- [ ] 히어로/섹션 배경 = `saju_dream_backgrounds.html`의 `.saju-*` CSS.

### 검증 (실행)
- [ ] `pnpm -F sajulink build` + typecheck 0 errors.
- [ ] `verify-legal-prices`(가격↔약관 정합) · `verify-checkout-consent` · i18n 검증 통과.
- [ ] robots: `NEXT_PUBLIC_SITE_URL`이 `*.vercel.app`이면 전면 Disallow.
- [ ] 구매 게이팅: 상품 판매중 **AND** 통화 결제수단 준비 시에만 결제 버튼.
- [ ] 무료 결과=광고 슬롯 / 유료=페이월→결제→PDF 로컬 동작. 24h cleanup·접근토큰 inyeon과 동일.

### 배포
- [ ] Vercel 프로젝트: Root Directory=`apps/sajulink`, Ignored Build Step.
- [ ] env: `NEXT_PUBLIC_SITE_URL=https://saju-link.com`, PortOne 키, Supabase(공유).
- [ ] 도메인 `saju-link.com` 연결 → 색인 활성. (통신판매업 신고번호·PortOne 실키는 공용 선행 블로커.)

---

## 2. dreamslink 착수 (Phase 2)
`IMPLEMENTATION_TICKET_saju_dream.md` §3 그대로: **inyeonlink 복제 → `naminglink/apps/dreamslink`**, `packages/core` 사주엔진·`PersonFields`·`birthplaces`·`lib/engines/*`(사주)·사주 guide 제거.
- **데이터**: `dream_symbols.seed.json` + `dream_symbols.seed.batch2.json` 병합(209개, dictVer 1.1.0) → `dream_symbols` 테이블/데이터.
- **로직**: `dreamslink_domain_logic.md`(상징 매칭 → grounding 프롬프트, 환각 방지).
- **화면**: `app/dream`(꿈 텍스트 입력→무료 해몽) · `app/dream/result`. `DreamResultView`. `lib/pdf/dream-report.tsx`. `api/dream`. 상품: 무료 / 심층 PDF(₩2,900/$2.99).
- **배경**: `saju_dream_backgrounds.html`의 `.dream-*`.
- **도메인**: `dreams-link.com`.
- 검증·배포는 §1과 동일 패턴(앱명만 dreamslink).

---

## 3. 프로그래매틱 SEO 구현 (획득 엔진 — 우선순위 높음)
`programmatic_seo_plan.md`대로:
- **dream**: `/{locale}/dream/{symbol}` 템플릿 1개 + `dream_symbols` 루프 → sitemap 자동 생성. **en 먼저 → ja/vi 확장**(다국어 리서치 우선순위).
- **saju**: `/{locale}/saju/{zodiac|element|ten-god}` 개념 랜딩 + 하단 계산기 CTA.
- hreflang·canonical·schema.org(Article+FAQ)는 naming 유틸 재사용. 품질 가드: 미달 상징 `noindex`, 무한 조합 페이지 금지.
- 각 상징 페이지 = 트래픽 자산(시드 209개 × 언어).

---

## 4. 공용 이벤트/퍼널 "Destiny Chain" (후순위)
- `public.orders(service 컬럼)` · `public.events`(어느 미끼→어느 본진 전환 attribution).
- 크로스셀 CTA(사주↔궁합↔이름↔해몽), 공유카드(share-card), 번들/언락. **미끼=광고 / 본진=페이월 분리**(애드센스 인센티브 정책).

## 5. tattoo → naming-link 하위 (후순위)
`naming-link.com/korean-tattoo` 라우트: 문구 뜻검증 + 서체 시안 + PDF. naming의 한자·캘리그래피 엔진 재활용, 별도 도메인·세팅 없음.

## 6. 언어 우선순위 (공통)
day-1: **en + ja + vi** → es(saju 신개념) → zh(번체) 후속. 각 언어 네이티브 용어(四柱推命/夢占い, tử vi/giải mã giấc mơ)로.

---

## 완료 기준 / 나(Cowork)에게 재요청할 것
- 각 단계: `build`·`verify-*` 통과 + 로컬 결제·광고 동작.
- **sajulink가 최종 완료되면 알려주세요** → 제가 실제 코드를 스테이징해 도메인 설계와 대조(미니 코드리뷰)하고, dreamslink 세부를 최종 상태에 맞춰 조정해 드립니다.
- 필요 콘텐츠(추가 상징, saju/dream 다국어 카피, SEO 페이지 문안 등)는 제가 이어서 생성.
