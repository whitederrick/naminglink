# Naming-Link 코드 감사 보고서 — 2026-07-20

3개 관점(보안 / 도메인 로직 정합성 / 품질·견고성)으로 전체 소스(약 175파일)를 병렬 감사한 결과. 모든 발견은 실제 코드 확인 기준이며, 코드는 수정하지 않았음 (읽기 전용 감사).

---

## 즉시 수정 필요 (HIGH)

### A1. [보안] 결제-주문 미결합: 한 번 결제한 paymentId 재사용으로 무제한 잠금 해제
- 위치: `src/app/api/premium-reports/confirm/route.ts:20-31`, `src/lib/premium-session.ts:37-67`
- confirm 라우트는 클라이언트가 보낸 `paymentId`를 그대로 검증에 사용. PortOne 검증은 "PAID 상태 + 상점ID + 금액 일치"만 확인하고, **그 결제가 이 세션의 주문에 속하는지는 확인하지 않음**. 또한 `markPremiumSessionPaid`는 orders 업데이트가 0건 매칭돼도 세션을 무조건 PAID로 전환.
- 익스플로잇: 상품 X를 1회 결제해 유효한 paymentId 확보 → 같은 상품으로 세션을 여러 개 생성 → 각 세션의 confirm에 같은 paymentId 전달 → 전부 PAID. 1회 결제로 리포트 무제한 생성.
- 수정: 세션의 `order_id`로 주문을 조회해 `provider_payment_id`(`nl_${orderId}`)와 `payment.id` 일치를 서버에서 강제. orders 업데이트가 실제 1건 매칭됐는지 확인 후에만 세션 PAID 전환. (웹훅 경로는 paymentId로 주문을 역조회하므로 이 결함 없음.)

### A2. [로직] TEN_DETAIL(4,900원) 상품은 결제 후 상세 생성이 100% 실패
- 위치: `src/app/api/premium-reports/[sessionId]/generate/route.ts:82-83`
- TEN_DETAIL은 `includesSaju: false`라 `reportData.saju = null`인데, `(premium.reportData.saju as {...}).engine?.name` 접근에서 TypeError → catch에서 세션 FAILED. 4,900원 결제자는 항상 실패를 봄. (`/api/premium-reports/test` 경로는 이 코드를 거치지 않아 테스트에서 미발견.)
- 수정: `premium.reportData.saju?.engine?.name ?? "official-hanja-rules-v1"` 옵셔널 체이닝.

### A3. [로직] 약자 돌림자 가족은 서비스 전면 불가 (후보 0개 → 일반 500)
- 위치: `src/lib/hanja.ts:1428-1436`, `src/lib/openai.ts:67-69, 118-122`
- `optionsForPosition`이 의미 품질 필터와 의미 중복 제거를 **먼저** 적용한 뒤 돌림자 필터링. 돌림자가 약자(徳 = "德의 略字")면 필터에 걸려 후보 0개, 돌림자와 의미 같은 글자가 앞에 있으면 dedupe가 돌림자를 삭제 → `assertGenerationConstraint` throw → 필드 에러 없이 일반 500.
- 수정: 돌림자 위치는 문자 고정을 필터·dedupe 이전에 수행, 불가 시 `NamingInputConstraintError`로 필드 에러 반환.

### A4. [품질+로직] GENERATING 상태 영구 고착 — 결제자가 결과를 영영 못 받음
- 위치: `generate/route.ts:26-41, 90-96`, `src/lib/premium-hanja-analysis.ts:255-256`, `cron/premium-cleanup/route.ts:49`
- OpenAI 클라이언트에 timeout 미설정(SDK 기본 10분) vs 라우트 `maxDuration = 60`. 60초 초과 시 서버리스 함수 강제 종료 → catch(FAILED 전환) 미실행 → 세션이 GENERATING으로 영구 잔류. GENERATING을 리셋하는 코드가 어디에도 없음(cron은 READY/EXPIRED/FAILED만 처리, confirm은 GENERATING이면 조기 반환).
- 수정: OpenAI 클라이언트 timeout 45초 지정 + `updated_at` 기준 스테일 GENERATING을 PAID로 재청구하는 복구 로직.

### A5. [품질] 클라이언트가 generate의 202(GENERATING) 응답을 성공으로 처리 → 빈 결과·오류 표시
- 위치: `src/components/PremiumHanjaCheckoutPanel.tsx:99-101, 117-131`
- 202도 `response.ok`이므로 `premium` 없는 응답을 성공 처리, 폴링 없이 PDF 단계로 진행 → pdf 라우트 409 → "사용 가능한 상세 분석 결과가 없습니다". 리디렉션 복귀와 웹훅이 동시에 generate 호출 시(두 번째는 클레임 실패로 202) 재현.
- 수정: `status === "GENERATING"`이면 지수 백오프 폴링으로 READY까지 대기.

### A6. [품질] OpenAI 키 부재 시 가짜(mock) 결과가 표시 없이 실서비스 제공
- 위치: `src/lib/mock-results.ts:41-224`, `src/lib/openai.ts:212-230`
- KOREAN_TO_GLOBAL / GLOBAL_TO_KOREAN에서 키 부재 시 입력과 무관한 고정 후보("Elian", "이도윤")가 경고 표시 없이 반환됨. 사용자는 광고 시청 후 진짜 분석으로 오인.
- 수정: 키 부재 시 503 반환 또는 데모 플래그 → UI 배지 표시.

---

## MEDIUM

### 결제 후 FAILED/오작동을 유발하는 사전검증 부재
- **B1.** `premium-hanja-eligibility.ts:10-24` — 자격 검사가 음력을 무시(음력 2월 30일생 구매 차단)하고 연도 범위(엔진 1900–2050) 미검증 → 1899/2051년생은 결제 통과 후 FAILED. number 타입 정수 검사 누락(1993.5 통과).
- **B2.** `premium-hanja-analysis.ts:22-25, 220-227` — `Number(null)/Number("") === 0`이라 출생시 미상이 0시(자시) 출생으로 계산될 수 있음. `birthTimeKnown` 미지정 + `birthHour:"unknown"` 조합은 hour null + minute 0으로 엔진 throw → 결제 후 FAILED.
- **B3.** `saju/engine.ts:94, 103-113` — 음력 날짜 실존성 무검증(29일 달의 30일, 윤달 없는 해의 윤달 지정). 변환 결과를 역변환 대조하지 않아 조용히 틀린 사주 산출 가능.

### 화면-PDF 정합성 구멍
- **B4.** `order/route.ts:55` + `official-hanja-db.ts:48-56` — 주문 시 화면 결과를 받지 않고 서버에서 재생성. DB 정렬이 `hangul_syllable`만이라 비결정적 → 화면에서 본 후보와 PDF 후보가 다를 수 있음. 수정: 화면 결과(또는 logId) 전달, DB 2차 정렬 키 추가.
- **B5.** `ResultCard.tsx:350-353` vs `premium-hanja-analysis.ts:197` — 화면은 `matching_rate` 정렬, PDF는 원본 순서 → 표지 대표 한자와 "후보 1"이 화면 1위와 달라질 수 있음.

### 한자 필터 커버리지 홀 (`src/lib/hanja.ts`)
- **B6.** 826-828, 714-729행 — 이체자 畧(U+7563) 미커버, 한글 "약자" 부분 미커버, 괄호 없는 "寧과 同字"·"俗字"는 후보 의미로 그대로 노출.
- **B7.** 830-832행 — 음가 목록 필터가 공백 구분("덕 적"), "、" 구분, 단일 이독음을 놓침.
- **B8.** 865-869행 — 성별 필터가 "여자 이름/여성/남자 이름/남성"만 검사. "계집 X", "사내 X", "며느리" 미감지. "계집슬기로울→슬기로울" 치환이 오히려 성별 단서를 제거.
- **B9.** 761-762행 — "옥(영/령)" 항목은 `displayMeaning`이 괄호를 먼저 제거해 절대 매치 불가(사문). 囹만 하드코딩으로 구제됨.
- **B10.** 838-846행 — 의미 중복 제거가 첫 등장 유지라 DB 순서상 희귀 글자(悳)가 상용 글자(德)를 밀어낼 수 있음. `characterUsabilityScore` 미참조.
- **B11.** `official-hanja-db.ts:56` — `.limit(500)` + 단일 정렬이라 첫 음절 항목이 많으면 둘째 음절 후보가 통째로 잘림 → "해당 음절 확인 어려움" 오안내.

### 보안·운영
- **B12.** `request-context.ts:5-11` — `x-forwarded-for` leftmost 신뢰 → 헤더 회전으로 무료 일일 한도 무한 우회(OpenAI 비용 유발 공격). 플랫폼 보장 IP 헤더 사용 권장.
- **B13.** `test/route.ts`, `test/pdf/route.ts` — 운영에서 `PREMIUM_TEST_MODE=true` 방치 시 무인증·무과금으로 프리미엄 분석/PDF 개방(쿼터도 미적용). 운영 빌드 제외 또는 관리자 인증 요구. `reportData`는 스키마 검증 없는 캐스트.

### 프론트엔드
- **B14.** `PremiumHanjaCheckoutPanel.tsx:41-46, 217-231, 289-299` — localStorage 체크아웃이 성공 후에도 잔존, "이전 결제 결과 이어서 받기"가 미결제·타 결과 세션까지 무조건 최신 1건 복구 → 오류 또는 타 이름의 프리미엄 데이터 혼입.
- **B15.** `PremiumHanjaCheckoutPanel.tsx:188-215` — 결제 리디렉션 실패 파라미터(`code`/`message`) 무시하고 confirm 강행 → 사용자가 실패 원인 대신 검증 오류를 봄.
- **B16.** `NamingForm.tsx:143-165, 210-212` — 렌더 중 sessionStorage 읽기로 hydration 불일치(결과 페이지의 `useSyncExternalStore` 패턴과 불일치).
- **B17.** `locale.ts:44-54` — Accept-Language 폴백이 q값·순서 무시 부분 문자열 매칭("fr-FR,...,en;q=0.7" → 영어 매칭).
- **B18.** i18n 사전은 23개 언어인데 폼 라벨·검증 오류·결과 페이지가 전부 하드코딩 한국어. 외국인 대상 GLOBAL_TO_KOREAN 플로우 포함.

---

## LOW (요약)

- `pdf/premium-hanja-report.tsx:386-388` — PDF 레이어 자체의 `slice(0,10)` 무단 절단 + 빈 배열 fallback (카운트 가드는 상위 레이어에만 존재).
- `premium-hanja-analysis.ts:179` — 외자(1음절) 이름 fallback 텍스트에 "undefined의 'undefined' 뜻" 인쇄.
- `premium-hanja-analysis.ts:373, 366` — 유료 리포트 ID가 `NL-TEST-` 접두사, PDF 만료 안내가 실제(결제+24h)보다 늦음(생성+24h).
- `hanja.ts:1336-1360` — 다양성 선택으로 4순위 이하 글자가 채택되면 옵션 목록에 자기 글자가 없음.
- `hanja.ts:1139` — 제외어 감점이 다중 제외어("죽음, 병")에서 절대 매치 안 됨(필터 함수와 로직 불일치).
- `hanja.ts:1088-1114` — 2월과 무효 월(0/13)이 모두 "earth"로 귀결.
- `premium-hanja-analysis.ts:33-40` — 23시→0시 치환의 야자시/조자시 관행 선택 미문서화.
- `api/naming/route.ts:56-72` — 무료 쿼터를 성공 여부와 무관하게 선차감(400/500에도 소모), RPC 오류 시 fail-open.
- `admin/hanja/route.ts:109` — 업로드 경로에 `sourceKey`/파일명 미정규화(관리자 인증으로 완화됨).
- `request-context.ts:19-20` — 해시 솔트로 서비스 롤 키 재사용.
- `PremiumHanjaCheckoutPanel.tsx:105-107, 317` — 금액(9900)으로 상품 역추론, 가격 개정 시 오해석.
- 후보 수 계산 함수 4곳 중복(cap 5/10/무제한 상이), 시간대 파싱 로직 2곳 중복.
- `NamingForm.tsx:503` — setState 업데이터 내부 sessionStorage 부수효과, `:438` — API 실패에도 광고 대기 후 오류 표시.
- `confirm/route.ts:32-35` — 모든 실패를 400 + 내부 메시지로 반환.
- `order.checkout as Checkout` 등 DB JSON/localStorage 무검증 캐스트 다수 → zod 파싱 권장.
- `supabase.ts`에 `server-only` 미적용(현재 클라이언트 import는 없음 — 방어선 추가 권장).

---

## 검증 체계 평가

- `scripts/verify-premium-candidate-count.ts` — 후보 1개 케이스만 검증해 부분적으로 공허. 10개 케이스, slice 절단, 화면 정렬-PDF 순서(B5), saju 포함 경로, PDF 레이어 미커버.
- `scripts/verify-hanja-candidate-diversity.ts` — 단언은 실질적이나 `officialHanjaCandidates` 직접 주입으로 실서비스 경로(A3 시나리오)를 우회.
- 두 스크립트 모두 CI/`npm test` 미연결 — 수동 실행 전용이라 회귀가 그대로 배포될 수 있음.

---

## 잘 되어 있는 부분

- **웹훅** — PortOne 서명 검증, `provider_event_id` 유니크 + 본문 해시로 재생 방지, 멱등 응답, 서버 측 금액 재검증. 우수.
- **토큰/세션** — `randomBytes(32)` 토큰 + SHA-256 해시 저장 + `timingSafeEqual`, `randomUUID` 세션, 60초 단명 서명 URL. 우수.
- **관리자/CRON 인증** — Supabase `auth.getUser` + role 확인, CRON_SECRET timing-safe 비교, 하드코딩 자격증명 없음.
- **키 분리** — 서비스 롤 키는 서버 전용, 클라이언트는 anon 키만. 하드코딩 시크릿 0건, `.env.local` 미추적.
- **타입/에러 규율** — 타입으로서의 `any` 0건, 빈 catch 0건, 전 라우트 zod 파싱 + 페이로드 크기 제한.

---

## 권장 조치 순서

1. **A1** (결제 재사용 — 매출 직결) + **A2** (4,900원 상품 전면 불능)
2. **A4 + A5** (결제자 결과 유실 — 함께 수정해야 효과)
3. **A3** (약자 돌림자 500), **A6** (mock 무표시)
4. **B1·B2·B3** (결제 후 FAILED 유발 사전검증), **B4·B5** (화면-PDF 정합), **B12·B13** (한도 우회·테스트 모드)
5. 필터 커버리지(B6–B11), 프론트(B14–B18), LOW 항목
6. 검증 스크립트 커버리지 확장 + CI 연결
