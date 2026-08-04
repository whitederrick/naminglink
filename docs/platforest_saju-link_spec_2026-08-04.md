# saju-link 상세 앱 스펙 (build-ready)

작성 2026-08-04 · 위치: naming 모노레포 `apps/saju` · 도메인 `saju-link.com`(확보) · 성격: **본진(고단가 총운 PDF) + 오늘의 운세 리텐션**

> 핵심 원칙: **계산은 결정론 엔진, GPT는 해설만**(inyeon과 동일). 새로 짓는 게 아니라 inyeon의 만세력·리포트·결제 엔진에 "1인 사주" 스킨을 얹는 작업.

---

## 0. 포지셔닝
- 서구 astrology(Co-Star/Nebula)는 별자리 하나뿐 → **사주(Four Pillars)라는 콘텐츠 깊이 + 결정론 재현성**이 해자.
- 글로벌·다국어: **영어 우선 + 상위 시장(ja/zh/vi/es 등 naming 타깃)** day-1, 나머지는 공용 `packages/i18n`으로 단계 확장.
- inyeon(궁합)·naming(이름)·dream(해몽)과 **크로스 퍼널**(공용 auth).

## 1. 라우트 / 화면
| 경로 | 내용 |
|---|---|
| `/` | 로케일 인식 랜딩(가치·무료 체험 CTA) |
| `/reading` | 생년월일시 입력폼 → **무료 결과**(원국+오행+오늘의 운세) |
| `/today` | 오늘의 운세(일진 기반) — **리텐션 데일리** |
| `/checkout/[sessionId]` | 총운/프리미엄 결제(PortOne V2) |
| `/result/[sessionId]` | 결과(무료/유료), 24h 접근 토큰 |
| `/api/saju` | 엔진 계산 + 해설 생성 |
| `/api/payments/portone/webhook` | 결제 웹훅(멱등) |
| `/api/cron/premium-cleanup` | 24h 만료 삭제 |
| `/admin/*` | proxy 보호(404/401) |

## 2. 입력 (naming 프리미엄 입력 재활용)
- 양력/음력(+윤달), 출생 연·월·일, 시·분 또는 **시각 모름→`PARTIAL_NO_TIME`**, 출생지/경도, 기준 `Asia/Seoul`.
- 무료 화면은 간이 입력, 유료(사주·오행 포함)는 정밀 입력(naming 9,900 상품 입력폼 그대로).

## 3. 엔진 재활용 맵
| 재활용(그대로) | 신규(작음) |
|---|---|
| `packages/saju` 만세력(@fullstackfamily/manseryeok 1.0.8, 결정론·엔진버전 기록) | **오늘의 운세 로직**(오늘 일진 간지 × 사용자 원국 → 규칙 스코어 + GPT 해설) |
| `packages/report` react-pdf + OFL(간지·한자 글리프) | **사주 해설 프롬프트**(원국·오행분포→성격/운세, 다국어) |
| `packages/payments` PortOne V2·웹훅 멱등 | 티어별 결과 조립 |
| `packages/i18n` 다국어 · `packages/ui` · `packages/share-card` | 공유카드 템플릿(오행) |
| `packages/db` supabase | — |

## 4. 상품 / 티어 (가격 제안 — §12에서 확정)
| 티어 | 가격(제안) | 내용 | 수익 |
|---|---|---|---|
| **무료(미끼)** | ₩0 | 사주 원국(팔자) + 오행 분포 + 오늘의 운세 1줄 | **AdSense/GAM** |
| **총운** | ₩4,900 / $4.99 | 성격·오행 강약·연애/재물/직업 성향 요약 PDF | PortOne+PDF |
| **프리미엄 총운** | ₩9,900 / $9.99 | 대운·세운·올해 총운·연애/재물/건강 상세 + PDF (naming 9,900 사주 상품과 정합) | PortOne+PDF |
| **(옵션) 구독** | ₩3,900 / $3.99·월 | 매일 운세 푸시 + 매월 리포트 | 반복 매출·리텐션 |

## 5. 무료→유료 퍼널 & 크로스셀
- 무료 결과 하단: 프리미엄 티저(블러) + "총운 전체 보기" 페이월.
- **Destiny Chain 크로스셀 CTA**: "이 사주로 궁합 보기"→inyeon · "내 한국 이름"→naming · "오늘의 꿈 해몽"→dream. (공용 `public.orders`로 번들/언락)
- 무료 결과·오늘의운세 = 광고 트래픽 현금화하며 동시에 유료·타서비스로 퍼널.

## 6. 프롬프트 원칙
- **엔진이 원국·오행·강약·일진을 계산 → GPT는 그 구조화 결과를 받아 해설/스토리만.** 점수·간지 생성 금지(재현성·환각 방지).
- **과잉약속 회피 카피**(naming 재활용): "전통 명리 참고, 과학적 예측·운명 단정 아님".
- 출력 JSON 강제 · 로케일별 해설.
- **캐시 키 = (입력 해시 + 엔진버전 + 프롬프트버전 + locale)** → 재조회 동일성 + LLM 비용 절감.

## 7. 데이터 모델
```sql
saju.readings( id, user_id NULL, input_hash TEXT, engine_ver TEXT, prompt_ver TEXT, locale TEXT,
  birth JSONB,          -- 양음력·윤달·연월일시·경도·PARTIAL 플래그
  wonguk JSONB,         -- 사주팔자·천간지지·오행분포(엔진 계산)
  tier TEXT, result JSONB, is_premium BOOLEAN, created_at, expires_at )  -- 24h 만료
-- 결제·이벤트는 공용
public.orders( ..., service='saju', product_code, amount, currency, access_token_hash, expires_at )
public.events( ..., service='saju', name, ref_service, props )
```

## 8. 수익 이원화
- **무료 페이지(원국·오늘의운세)** = AdSense/GAM(트래픽 현금화). ※ 점술 콘텐츠 애드센스 적합성 확인(공용 열린결정).
- **유료(총운·프리미엄)** = PortOne V2 + 프리미엄 PDF(비공개 `premium-reports` 버킷, 60초 서명 URL, 24h 삭제).

## 9. 리텐션
- **오늘의 운세**(일진 기반)로 데일리 재방문 → saju의 최대 리텐션 훅. 구독(옵션)으로 반복 매출화.

## 10. 다국어 전략
- 공용 `packages/i18n` 재활용. **day-1 = 영어 + 상위 시장(ja/zh/vi/es)**, 이후 naming 수준(22개)으로 확장.
- 해설 텍스트는 로케일별 프롬프트로 생성 후 캐시. UI는 사전 기반.

## 11. 리스크 · 컴플라이언스
- 24h 자동삭제(개인정보 최소 보관) · PortOne 웹훅 멱등(`payment_webhook_events`) · 접근토큰 SHA-256 · **가격 SSOT(`product_settings`) + `verify-legal-prices`**(약관·요금 정합).
- 통신판매업 표시·개인정보처리방침·이용약관(공용 컴포넌트).

## 12. 화면 구조·코드 재활용 (★ naming/inyeon **현재본** 기준 — saju·dream 공통)
**원칙: 새 UI를 만들지 않는다. 버그 수정이 끝난 "지금의" naming/inyeon 앱 스켈레톤을 복제해 도메인 부분만 교체.** 화면 구조·톤은 naming/inyeon과 동일.

**그대로 상속(가능한 한 `packages/*`로 중앙화)** — 이미 고친 오류가 새 앱에서 재발하지 않게:
- 레이아웃·헤더·**푸터**(사업자정보·통신판매업 신고번호·대표자·주소·고객센터, 서버 렌더)
- 법적 페이지(이용약관·개인정보처리방침) + 로케일 라우팅/i18n 배선
- 보안 헤더(CSP·HSTS·X-Frame-Options·nosniff·Referrer/Permissions-Policy)
- **robots/sitemap/hreflang** + 도메인 스위치 로직(`NEXT_PUBLIC_SITE_URL`이 `*.vercel.app`이면 전면 Disallow, 실도메인 연결 시 자동 색인)
- admin proxy 가드(`/admin`·admin API → 404/401), 결과·테스트 엔드포인트 운영 차단
- **결제 플로우**(PortOne V2·웹훅 멱등 `payment_webhook_events`·접근토큰 SHA-256·모바일 리디렉션)
- **구매 게이팅**(`lib/purchase.ts`: 상품 판매중 + 해당 통화 결제수단 준비 **둘 다** 충족 시에만 구매 가능; 판매중지면 가격 감추고 "준비 중")
- **가격 SSOT**(`product_settings`) + **`verify-legal-prices`**(DB를 진실로 약관·요금표 금액 정합 검증)
- 24h 만료 cleanup cron + `CRON_SECRET`, 프리미엄 PDF 비공개 버킷·서명 URL
- 로딩/스켈레톤 UI·에러 핸들링·결제 고지 정합(`verify-checkout-consent`)

**교체(도메인만)**: 입력폼 · 엔진 호출 · 프롬프트 · 결과 뷰 · 상품 코드/티어 · PDF 템플릿 · 공유카드.

> 실행 지침: 공통 shell 조각(푸터·법적·결제·robots·구매게이팅·가격검증)을 `packages/{ui,legal,payments,seo}`로 뽑아 **한 번 고치면 naming·inyeon·saju·dream 4개에 전파**되게 한다. naming/inyeon에서 겪은 가격 정합성·robots 색인·구매 버튼 활성화 버그의 재발 방지가 목적.

## 13. 열린 결정 (확인 필요)
1. **가격·통화** — 위 제안(KRW+USD) 확정? 프리미엄 9,900/$9.99 유지?
2. **구독 도입 시점** — 1차 포함 vs Phase 2(권장: Phase 2, 먼저 단품·리텐션 검증).
3. **day-1 언어셋** — 영어 + (ja/zh/vi/es) 확정?
4. **오늘의 운세 규칙** — 일진×원국 스코어링 규칙 상세(작명 팀 확인).

---
*다음: 확정 후 프롬프트 상세(원국→해설 JSON 스키마)와 오늘의운세 스코어링 규칙, 그리고 실제 naming/inyeon 소스를 스테이징해 파일 단위 복제·중앙화 맵을 뽑으면 착수 가능.*
