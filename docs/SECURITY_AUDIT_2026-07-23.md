# 심층 보안·개인정보 감사 및 조치 — 2026-07-23

전체 코드 대상 심층 감사(7개 영역 병렬 서브에이전트 + 의존성/시크릿/헤더)를 수행하고,
우선순위대로 조치했다. 기존 하드닝(`WORKLOG_2026-07-22.md`, 감사 1·2차)의 후속.

## 감사 범위
결제·주문 / 프리미엄 PDF 파이프라인 / API 보안 전면 / 클라이언트 컴포넌트 /
관리자·데이터 계층 / AI·i18n·법적 준수 / 개인정보(PII) + 의존성 CVE + git 이력 시크릿 + 보안 헤더.

---

## ✅ 조치 완료 (커밋·배포됨)

### 1. [CRITICAL] Supabase service_role 키 브라우저 노출 — 해결
- **문제**: `.env.local`·Vercel의 `NEXT_PUBLIC_SUPABASE_ANON_KEY`에 anon 키 대신 **service_role
  마스터 키**가 들어가 있었다(두 슬롯 동일 JWT, `role: service_role`). `NEXT_PUBLIC_*`은 빌드 시
  브라우저 번들에 인라인되므로, 운영(`naminglink.vercel.app/login`,`/account`) 번들에서 마스터 키가
  실제 노출됨 — 누구나 전체 DB(orders·premium_analysis_sessions의 이름·생년·주소·전화 등) 읽기·쓰기 가능.
- **오진 정정**: 마지막 감사 에이전트는 "RLS 드리프트"로 진단했으나, 직접 DB를 조회하니 **RLS는 전
  테이블 정상**이었고, anon 키의 JWT를 디코드해 실제 원인이 키 오설정임을 규명. 운영 번들에서 노출 확인.
- **해결**: 레거시 JWT 키는 개별 재발급 불가 → **새 API 키 체계로 이전**(publishable `sb_publishable_...`
  + secret `sb_secret_...`). Vercel·`.env.local`을 새 키로 교체(anon 자리=publishable, service 자리=secret),
  재배포. 배포 번들에서 JWT/secret 소멸·publishable만 노출 확인. **레거시 키 Disable로 노출된 옛 키
  무효화**. 서버(/api/report-fonts·product-info 정상)·브라우저 양쪽 동작 검증. **코드 변경 없음**.
- **교훈**: `NEXT_PUBLIC_*` 자리에 secret급 키 절대 금지. supabase-js는 새 publishable/secret 키를 그대로 수용.

### 2. [HIGH] Next.js 16.2.10 → 16.2.11 보안 패치 (`114a518`)
미들웨어 우회, Server Actions/rewrites SSRF, DoS, 캐시 혼동, 서버 함수 노출 등 9건. 프로덕션 빌드 검증.
잔여 sharp/postcss 2건은 Next 내장 전이 의존성(다음 Next 릴리스 대기). git 이력 시크릿 노출 없음 확인.

### 3. [HIGH] PortOne 결제 채널 LIVE 검증 (`0267259`)
`getVerifiedPremiumPayment`가 `payment.channel.type !== "LIVE"`를 거부. TEST 채널이 한 상점에
공존하고 채널 키가 브라우저에 노출되므로, 없으면 공격자가 TEST 카드로 무료 결제 완료 가능했음.
다크런치 기간에만 `PORTONE_ALLOW_TEST_CHANNEL=true`로 한시 허용(정식 오픈 시 제거). 모든 confirm·webhook이
이 함수를 거쳐 한 곳 수정으로 전 경로 커버.

### 4. [HIGH] 법적 문서 23로케일 갱신 (`0267259`·`51048e7`)
- 개인정보처리방침 **§5 국외이전 고지**를 플레이스홀더에서 실제 처리자로 채움(OpenAI L.L.C.·Supabase Inc.·
  Vercel Inc. 모두 미국, 항목·목적·보관기간 명시). PIPA 28-8 대응.
- **§1**에 회원 이메일·로그인 기록 추가.
- **약관·환불·요금**에 글로벌 PDF 3종($9.99/$2.99/$1.99)·도장(₩39,000/US$34.99) 반영.
- ko/en 원문 작성 후 나머지 21개는 `scripts/translate-legal-content.mjs`로 AI 번역(구조 23/23 검증).
- ⚠️ **AI 번역이므로 실결제 전 법무 검토 필요**.

### 5. [HIGH] 결제 유실 복구 (`3cb526c`)
- 모바일 리디렉션 복구가 sessionStorage 유실 시 **URL의 paymentId를 폴백**으로 사용(카카오페이 인앱
  브라우저 컨텍스트 전환 시 "결제됐는데 미이행" 방지). confirm이 서버에서 금액 재검증하므로 안전.
- 일괄 공개 결제 해금을 **resultId 기준 localStorage에 보존**(새로고침 시 재잠금 방지). resultId를 가진 두
  결과 페이지에 배선, 인라인 결과는 무변경.

**회귀 점검**: 전 과정 `tsc --noEmit` 에러 0, `eslint` 클린, 모든 배포 Ready.

---

## ⏳ 남은 항목 (결제 런칭 전 처리 대상)

### 결정 필요 (사용자 판단)
- **가격 region 서버 판정** [MEDIUM]: 클라이언트가 domestic/global(₩/US$)을 선택해 보냄. IP 기반 검증은
  한국 여행자 오탐 리스크 → 접근법 결정 필요. 카카오페이 자연 장벽으로 실위험 낮음.
- **법적 문서 법무 검토**: 23로케일 AI 번역본의 사람 검토(실결제 전).

### 제가 바로 가능 (안전·명확)
- **product_settings 금액·통화 정합 검증** [MEDIUM]: USD에 990→$9.90, KRW스케일을 USD로 등 방지. 이력 로깅에
  enabled 토글 누락도 함께.
- **$9.99 리포트 빈 섹션 가드** [MEDIUM]: AI가 키 틀린 JSON 줘도 READY 되던 것 → 필수 섹션 비면 FAILED(재시도 가능).
- **PayPal SPB 결제 유실/취소** [MEDIUM]: 탭 닫힘 시 paid 콜백 전 복구, "결제 중" 취소 버튼, 같은 상품 재구매 시
  저장 checkout 덮어쓰기 방지(sessionId 키).
- **confirm 라우트 레이트리밋·바디 제한, raw error.message 노출 정리** [LOW].
- **프리미엄 AI 사용량 로깅**: 전역 AI 상한·ai_usage_logs를 우회 → 관리자 대시보드가 가장 비싼 요청 누락.

### 실물/운영 기능 (별도 작업)
- **도장 폼 다국어화**(현재 ko/en만, CTA는 23로케일), **도장 PII 파기 크론**(PAID 주문의 주소·전화 영구 보존),
  **계정 삭제 기능**(auth.admin.deleteUser 미구현 — 방침은 삭제 제공) [MEDIUM].
- **PDF 로마자 두부 수정**(MixedText 사용), **`<html lang>` 로케일별·RTL(ar) 적용** [LOW].
- **/tmp 폰트 캐시 sha 강제**(현재 sha 없으면 code 폴백·웜 람다 옛 폰트 고정) [LOW].

---

## 감사에서 정상 확인된 영역
서버 권한 가격 산정(client 금액 불신), 결제 금액·통화 서버 재검증, paymentId 리플레이 차단(유니크 인덱스),
웹훅 서명·멱등성, 접근토큰 32바이트 해시·타이밍세이프, PDF 서명URL ≤60초, 24시간 자동삭제 크론(스토리지·PII
실삭제), RLS 전 테이블 활성(민감 테이블 anon 차단), 관리자 역할 app_metadata 기반, 비회원 미저장 원칙,
방문자 IP 일일 회전 HMAC 해시, 서버 전용 모듈 `import "server-only"`, SSRF 벡터 없음.
