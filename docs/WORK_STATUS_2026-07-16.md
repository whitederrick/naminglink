# Naming-Link 작업 현황 — 2026-07-16

## 현재 목표

`한글 이름에 맞는 한자 의미 매칭`을 광고형 단순 결과가 아닌 9,900원 1회성 프리미엄 상품으로 확장한다.

- 출생 연·월·일·시를 바탕으로 전통 명리와 오행을 참고한 분석
- 대법원 인명용 한자 공식 자료 기준 후보만 사용
- 돌림자 한글과 한자는 모든 후보에서 절대 변경하지 않음
- 후보마다 다른, 읽을 가치가 있는 AI 해설
- 결제 후 24시간 동안 결과 열람과 PDF 재다운로드 가능
- 24시간 뒤 결과와 PDF 자동 삭제
- 출생신고 가능 여부와 오행 보완 효과를 단정하지 않고 공식 조회 재확인 안내
- 개발자에게는 결제 없이 같은 9,900원 기능을 시험할 수 있는 경로 제공

## 이번 작업에서 구현한 내용

### 1. 프리미엄 분석 기반

- `@fullstackfamily/manseryeok` 기반 만세력 계산을 연결했다.
- 사주 원국과 오행 분포를 계산하고 프리미엄 분석 입력으로 전달한다.
- 정확한 출생 시각, 출생 시각 모름, 출생 지역·경도, 음력 윤달 여부를 받을 수 있게 했다.
- 무료 결과와 프리미엄 결과 모두 서버에서 한자 후보를 다시 계산한다.
- 돌림자 한자 고정 조건은 서버 결과에서 다시 검증한다.
- OpenAI 응답이 없거나 실패할 때 사용할 결정론적 폴백 해설도 유지한다.

### 2. 9,900원 PortOne V2 결제 흐름

- 결제 주문 생성 API를 추가했다.
- 브라우저에서 PortOne 카드 결제창을 여는 UI를 추가했다.
- 결제 완료 후 서버가 PortOne API로 결제 상태·스토어·결제 ID·금액·통화를 재검증한다.
- 검증 조건은 `PAID`, 9,900 KRW, 주문의 결제 ID 일치이다.
- 결제 성공 뒤에만 프리미엄 분석과 PDF 생성 API를 호출한다.
- 액세스 토큰은 URL에 넣지 않고 브라우저 `localStorage`에만 저장한다.
- 모바일 리다이렉트 후 결제를 이어서 확인하는 흐름과 `이전 결제 결과 이어서 받기`를 추가했다.
- PortOne 웹훅 서명 검증, 중복 처리 방지, 결제 완료·취소·실패 상태 반영을 추가했다.

### 3. 결과 보관과 PDF

- 프리미엄 주문·세션·아티팩트용 Supabase 마이그레이션을 작성했다.
- 결제 시각을 기준으로 24시간 만료 시간을 설정한다.
- 분석 결과를 저장하고 PDF를 별도 생성한다.
- PDF는 비공개 Supabase Storage에 올리고 제한된 서명 URL로 내려받는다.
- 만료 세션과 PDF를 지우는 정리 API를 추가했다.
- Supabase Cron에서 정리 API를 호출할 수 있는 SQL 예시를 작성했다.

### 4. 결제 없는 개발자 시험

- 개발 환경 또는 `PREMIUM_TEST_MODE=true`에서 `결제 없이 동일 조건으로 9,900원 기능 테스트` 버튼이 보인다.
- 이 버튼도 실제 프리미엄과 동일한 출생 시각·지역·후보·사주·AI·PDF 경로를 사용한다.
- 운영 공개 전에 `PREMIUM_TEST_MODE`를 반드시 `false`로 돌려야 한다.

## 주요 파일

- `src/components/PremiumHanjaCheckoutPanel.tsx`
- `src/lib/premium-hanja-analysis.ts`
- `src/lib/portone.ts`
- `src/lib/premium-session.ts`
- `src/lib/saju/`
- `src/lib/pdf/`
- `src/app/api/premium-reports/`
- `src/app/api/payments/portone/webhook/route.ts`
- `src/app/api/cron/premium-cleanup/route.ts`
- `supabase/migrations/20260716130000_premium_saju_reports.sql`
- `supabase/migrations/20260716150000_portone_premium_payments.sql`
- `docs/PREMIUM_HANJA_REPORT_ARCHITECTURE.md`
- `docs/SUPABASE_PREMIUM_CLEANUP_CRON.sql`

## 검증 완료

- TypeScript `npx tsc --noEmit` 통과
- 변경 파일 ESLint 통과
- `npm run build` 통과
- 로컬 자동 검증 스크립트 통과
  - 무료 후보: `㛦奎`
  - 프리미엄 후보: `㛦奎`
  - 돌림자 `奎` 고정 확인
  - 사주 원국: `甲辰 丙寅 甲辰 庚午`
  - 분석 출처: OpenAI
  - PDF 응답: HTTP 200, PDF 헤더 정상, 약 88 KB
- 로컬 브라우저에서 무료 분석 결과 URL 진입까지 확인
  - 확인 URL: `/hanja-meaning/result?lang=ko&id=78200e8d-93b8-497f-ac16-f43007d05197`

## 아직 하지 않은 일

- 운영 Supabase DB에 두 마이그레이션을 적용하지 않았다.
- 비공개 PDF Storage 버킷과 정책을 운영 환경에서 최종 확인하지 않았다.
- Supabase Cron SQL을 실행하지 않았다.
- PortOne 실제 카드 승인·취소·웹훅 통합 시험을 하지 않았다.
- 실제 결제 화면은 PortOne 환경변수와 채널 설정 전에는 활성화되지 않는다.
- 프리미엄 카드의 실제 브라우저 화면과 결제 없는 테스트 버튼을 마지막까지 수동 확인하는 작업이 남았다.
- 이번 변경은 아직 커밋·푸시·Vercel 배포하지 않았다.

## 운영 반영에 필요한 환경변수

```text
NEXT_PUBLIC_PORTONE_STORE_ID
NEXT_PUBLIC_PORTONE_CHANNEL_KEY
PORTONE_API_SECRET
PORTONE_WEBHOOK_SECRET
CRON_SECRET
PREMIUM_TEST_MODE=false
```

PortOne 웹훅 주소:

```text
https://naminglink.vercel.app/api/payments/portone/webhook
```

## 다음 작업 시작 순서

1. 현재 Git 변경 내역을 다시 확인하고 사용자 소유 파일을 건드리지 않는다.
2. 로컬 결과 화면에서 프리미엄 카드, 정밀 출생 입력, 결제 없는 테스트 버튼을 육안 확인한다.
3. 결제 없는 테스트로 AI 분석과 PDF 다운로드를 한 번 더 확인한다.
4. 사용자 승인 후 두 Supabase 마이그레이션을 적용한다.
5. PortOne 네 환경변수를 로컬·Vercel에 넣고 웹훅 URL을 등록한다.
6. 실제 9,900원 승인·결과 생성·PDF 다운로드·취소·웹훅을 통합 시험한다.
7. `CRON_SECRET`을 설정하고 Supabase Cron SQL을 실행해 24시간 삭제를 확인한다.
8. `PREMIUM_TEST_MODE=false`를 확인한 뒤 커밋·푸시·배포한다.

## 보존 주의

- `docs/WORK_STATUS_2026-07-15.md`는 기존 사용자 변경이 있으므로 덮어쓰거나 되돌리지 않는다.
- `docs/gemini 의견.txt`는 사용자 제공 파일이므로 수정·삭제·커밋하지 않는다.
- 사용자가 직접 실행 중인 개발 서버를 임의로 시작하거나 종료하지 않는다.

