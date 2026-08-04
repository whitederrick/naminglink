# 멀티서비스 운영자 콘솔 설계 (naming-artist 확장) — 서비스별 비용·수익 분리

작성 2026-08-04 · 문제: 공유 Supabase/OpenAI/PortOne 위에 naming·inyeon·saju·dream·(tattoo)이 올라가면 운영 데이터가 섞여 **서비스별 운영비용·수익 파악이 어려움.**

---

## 0. 핵심 원칙
- **"뒤섞임"은 UI가 아니라 데이터 태깅 규율 문제.** 콘솔을 서비스별로 쪼개지 말 것(교차 비교·공통비용 파악 불가, 유지비↑).
- **정답 = 콘솔은 하나(중앙, `naming-artist` 일반화) + 모든 재무/운영 행에 `service` 태그 강제.**
- ⚠️ **소급 불가**: 지금 태깅 안 해두면 나중에 서비스별로 못 나눔. **태깅이 유일한 되돌릴 수 없는 선행작업.**

---

## 1. 모든 재무/운영 데이터에 `service` 태그 (필수·지금)
| 데이터 | 태깅 | 상태/조치 |
|---|---|---|
| 주문·결제 | `public.orders.service` | ✅ 이미 설계됨 — 매출·PG수수료 서비스별 |
| 이벤트·전환 | `public.events.service` | ✅ — 유입/전환 attribution |
| **AI 원가** | `ai_usage_logs`에 서비스 구분 | ⚠️ **정정: 현재 `ai_usage_logs`엔 `service`/`app` 컬럼이 없음**(`service_type`은 naming 메뉴 enum, `naming_log_id` FK로 naming에 묶임). → "태깅"이 아니라 **운영 표 스키마 마이그레이션**(별도 승인). **후방호환 방식**: nullable `service` 컬럼 추가 + 기존 행 backfill + `naming_log_id` nullable화, 콘솔 쿼리 `GROUP BY service`. **대안**: saju 전용 usage 테이블 + 콘솔 합산(라이브 표 불변). 두 라이브 앱 빌드 확인 후 적용. |
| 알림톡/SMS·이메일 | `notifications.service` | 발송비 서비스별 |
| PDF·스토리지 | 서비스별 경로/버킷(`premium-reports/{service}/…`) | 스토리지 원가·정리 서비스별 |
| 광고 수익 | 도메인=서비스 | AdSense/GAM은 **속성(도메인)별 리포트 자동 분리**. ad unit도 service 네이밍 |
| 인프라(Vercel) | 앱=프로젝트 | Vercel이 **프로젝트별 청구** → 서비스별 컴퓨트/대역폭 자동 분리 |
| 인프라(Supabase) | 공유 | 단일 프로젝트라 직접분리 難 → §3 배분 |
> 규율: **공용 테이블에 `service` 없는 행을 쓰지 않는다.** 이 한 줄이 뒤섞임 방지의 전부.

---

## 2. 콘솔 구조 = `naming-artist` 일반화 (쪼개지 않음)
- 상단 **서비스 셀렉터**: `전체 / naming / inyeon / saju / dream / tattoo`. 모든 뷰가 이 필터를 받음.
- **① 포트폴리오 개요(기본 화면)**: 서비스별 P&L 한 표 —
  `매출 | PG수수료 | AI원가 | 알림비 | 광고수익 | 인프라 | 마진(%)` 을 서비스 행으로 나란히.
- **② 서비스 드릴다운**: 주문·전환율·오늘 매출·AI 사용량·미처리 이슈.
- 콘솔은 **한 앱(naminglink)에서 공유 `public.*`를 읽음**(DB가 공유라 한 곳에서 전 서비스 조회 가능). admin `proxy.ts` 가드 유지. 각 앱은 `api/ops/status`만 노출.

---

## 3. 비용 귀속 규칙 (투명하게)
- **직접 귀속(정확)**: PG수수료(`orders.service`) · AI토큰(`ai_usage.service`) · PDF/스토리지(경로) · 광고수익(도메인/속성) · Vercel(프로젝트).
- **배분(공통비)**: Supabase·도메인·기타 공통 → **매출 비율 또는 요청량 비율**로 배분하고 **"공통배분(정확 귀속 아님)"으로 표기**. 정직한 근사.
- 결과: 서비스별 **기여마진**(매출 − 직접원가)까지는 정확, 순마진은 배분 포함 근사.

---

## 4. 단계 (런칭 부담 최소화)
1. **지금(필수·저비용)**: `ai_usage`에 `service` 추가 + `orders`/`events` 태깅 검증. → **분리 가능한 원천 데이터부터 확보**(소급 불가 항목).
2. **곧**: `naming-artist`에 서비스 셀렉터 + 서비스별 매출/AI원가 요약 카드.
3. **런칭 후**: 풀 P&L 대시보드(광고수익 import·배분 규칙·마진 추이·알림비).

---

## 5. 콘솔 재구성: naming-artist → 포트폴리오 콘솔 (naming·inyeon·saju·dream[+tattoo])

### 현재 vs 목표
- 현재: `naming-artist`가 **naminglink에 집중**(naming 전용 뷰·쿼리·상품).
- 목표: **4~5개 서비스를 한 콘솔**에서, 서비스별 분리 + 전체 합산.

### 어디에 둘 것인가
- **장기 목표 = 전용 admin 앱**(`apps/admin` 또는 `apps/console`). 공유 Supabase `public.*`만 읽음, 고객 앱과 **배포·장애 격리**(콘솔이 naminglink 안에 있으면 naminglink 배포/장애가 콘솔에 영향).
- **현실 경로 = 2단계**: ① 지금은 `naming-artist`를 **서비스 인식형으로 일반화**(가장 빠름, 기존 admin 인증·UI 재사용) → ② 규모 커지면 `apps/admin`으로 추출. 지금 추출을 강행해 라이브를 흔들 필요는 없음.

### 서비스 인식 구조 (config-driven — 하드코딩 금지)
- **`packages/core/apps.ts`(앱/서비스 레지스트리)를 콘솔이 단일 소스로 소비**: 각 서비스의 `id·name·domain·products·menuTypes·KPI`.
- 콘솔 뷰는 서비스별 하드코딩 대신 **레지스트리 순회로 렌더** → 새 서비스는 `apps.ts` 등록만 하면 콘솔에 자동 등장(saju/dream/tattoo 추가가 콘솔 코드 수정 없이).
- 서비스마다 다른 것(상품·메뉴·결과 타입)은 전부 이 config로 흡수.

### 화면 구조
- 상단 **서비스 셀렉터**: `전체 + naming·inyeon·saju·dream(+tattoo)`.
- **전체 뷰**: 포트폴리오 P&L(서비스 행: 매출·PG·AI원가·광고·인프라·마진) + 합계.
- **서비스 뷰**: 주문·전환·오늘 매출·AI 사용·미처리 이슈·**상품 관리**(`product_settings` service별).
- 단일 admin 세션(naming `proxy.ts` 가드 재사용). 서비스별 역할 스코프는 필요 시(현재 전체 접근이면 충분).

### 마이그레이션 단계 (naming/inyeon 깨지 않게)
1. 콘솔 쿼리에 `service` 필터 추가, **기본=기존 naming 뷰 유지**(`service='naming'`) → 두 라이브 앱 빌드/스모크 확인.
2. 서비스 셀렉터 + inyeon/saju/dream 뷰(주문·이벤트가 이미 `service` 태깅돼 있으면 필터만 추가).
3. 포트폴리오 P&L(`ai_usage_logs` 후방호환 마이그레이션 후 원가 포함).
4. (후) `apps/admin`으로 추출.

> 순서 원칙: **데이터 분리(service 구분)가 먼저, 콘솔 재구성은 그 위에.** UI는 언제든 얹을 수 있지만 태깅 안 된 과거 데이터는 소급 불가.

## 6. 한 줄 요약
콘솔은 하나(→ 장기엔 전용 admin 앱), 데이터는 `service`로 완전 분리, 뷰는 `apps.ts` 레지스트리로 config-driven. **지금 할 필수 = 공용 테이블 서비스 구분 확보(`ai_usage_logs`는 후방호환 마이그레이션).** 재구성/대시보드는 그 위에 언제든.
