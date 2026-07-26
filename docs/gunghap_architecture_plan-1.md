# 궁합 서비스 구성 계획

작성일: 2026-07-26
기준 레포: `whitederrick/naminglink` (`97784b3`)

---

## 1. 요구사항

- naminglink와 **호스팅(도메인) 분리**
- **DB는 공유** — Supabase 프로젝트를 쪼개지 않음
- 서비스 성격이 달라 구성은 별도로 유지
- 이름 궁합 + 사주 궁합 등을 **통합 제공**, 결과를 **매칭률 %**로 표시

---

## 2. 결론: 모노레포 + 단일 Supabase + 스키마 분리

레포를 완전히 분리하지 않는 이유:

- 이름 궁합 → naminglink의 한자 DB·획수·오행 데이터를 그대로 사용
- 사주 궁합 → `@fullstackfamily/manseryeok`, `premium_saju_reports` 재사용
- 결과 판매 → PortOne 결제, react-pdf 리포트, 폰트 관리 재사용

재사용률이 절반을 넘음. 레포를 쪼개면 한자 데이터가 두 벌이 되고 동기화 부채가 발생함.

---

## 3. 디렉터리 구조

```
naminglink/                  ← 레포 이름 유지
├─ apps/
│  ├─ naminglink/            ← 현재 src/ 통째로 이동
│  └─ gunghap/               ← 신규
├─ packages/
│  ├─ hanja/                 한자 DB 조회 · 획수 · 오행
│  ├─ saju/                  만세력 래퍼
│  ├─ payments/              PortOne 주문 · 확인 · 웹훅
│  ├─ report/                react-pdf 리포트 + 폰트
│  └─ db/                    supabase client
├─ supabase/migrations/      단일 소스 (분산 금지)
└─ pnpm-workspace.yaml
```

## 4. 배포

| 항목 | naminglink | gunghap |
|---|---|---|
| Vercel 프로젝트 | 별도 | 별도 |
| Root Directory | `apps/naminglink` | `apps/gunghap` |
| 도메인 | naminglink.vercel.app | 신규 |
| Supabase env | 동일 URL / 키 | 동일 URL / 키 |

- Ignored Build Step을 걸어 변경 없는 앱은 빌드 스킵
- 레포는 하나, 배포는 둘

---

## 5. DB 분리 방식

Postgres schema로 분리. 테이블 접두사(`gh_*`)보다 깔끔함.

```sql
create schema gunghap;
grant usage on schema gunghap to anon, authenticated, service_role;
```

Supabase Dashboard → Settings → API → **Exposed schemas**에 `gunghap` 추가.

궁합 앱 클라이언트:

```ts
createClient(url, key, { db: { schema: "gunghap" } })
```

### 자동 공유되는 것

- `auth.users` — 회원 계정이 그대로 공유됨
- Storage 버킷, 커넥션 풀, 요금제

### 스키마 배치 기준

| 대상 | 위치 |
|---|---|
| 회원 | `auth` (공유) |
| 주문 · 결제 | `public` + `service` 컬럼으로 구분 |
| 한자 마스터 데이터 | `public` (읽기 공유) |
| 폰트 · 배경 | `public` |
| 궁합 결과 · 세션 | `gunghap` |

### 주의

1. 마이그레이션은 `supabase/migrations` 한 곳에서만 관리. 두 곳에서 돌리면 타임스탬프가 꼬임
2. 결제는 `public.orders`에 통합. PortOne 웹훅을 두 벌 관리하지 않기 위함
3. `gunghap` 스키마 테이블도 **RLS를 따로 켜야 함**. 스키마가 다르다고 상속되지 않음

---

## 6. 매칭률 설계

### 원칙: 점수는 규칙 기반, OpenAI는 해설문만

점수 산출까지 GPT에 맡기면 같은 커플이 재조회할 때 숫자가 달라짐. 유료 상품에서는 환불 사유가 됨.

### 엔진 인터페이스

```ts
type Factor = { label: string; delta: number; note: string };

type MatchEngine = {
  key: "name" | "saju" | "zodiac";
  run(a: Person, b: Person): { score: number; factors: Factor[] };
};
```

- 각 엔진은 0~100 반환
- 최종 % = 가중 평균
- `factors`는 근거 표시 + GPT 해설문 생성의 입력으로 사용

### 가중치

코드가 아닌 **DB에서 관리**. 기존 `product_settings` 관리 화면에 붙이면 배포 없이 튜닝 가능.

### 캐싱

입력 조합(생년월일시 + 이름 + 엔진 버전) 해시를 키로 결과 저장.

- 재조회 시 동일한 값 보장
- OpenAI 호출 비용 절감
- 엔진 버전을 키에 포함해야 로직 변경 시 자동 무효화됨

---

## 7. 진행 순서

1. `packages/hanja` **하나만** 분리 → naminglink 정상 빌드 확인
2. 통과하면 `saju` · `payments` · `report` · `db` 순으로 분리
3. `apps/gunghap` 스캐폴딩
4. `gunghap` 스키마 + 초기 마이그레이션
5. 엔진 2종(name, saju) 구현 → 가중 합산 → 결과 화면
6. 유료 리포트 연결

1번에서 빌드가 깨지지 않으면 이후는 기계적인 작업임.
