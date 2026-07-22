# Naming-Link 작업 현황 — 2026-07-20

이날 세션은 코드 감사 대응 → i18n → 프리미엄 리포트 품질/PDF → 데이터 정리로 이어졌다.
운영 URL: `https://naminglink.vercel.app` (main 푸시 시 Vercel 자동 배포). 로컬 dev 포트 3001, 사용자가 직접 실행.

## 1. 코드 감사 대응 (상세: `docs/CODE_AUDIT_2026-07-20.md`)

3방향 병렬 감사(보안·로직 정합성·품질) + 적대적 재검토. HIGH·MEDIUM·LOW 전 항목 + 회귀 3건 수정.

- **HIGH**: 결제 재사용 차단(confirm 라우트 결제-주문 결합), 4,900원 상품 생성 실패(null saju `.engine`), 약자 돌림자 500, GENERATING 영구 고착 + 클라이언트 폴링, OpenAI 키 부재 시 가짜 결과 차단(운영 503).
- **MEDIUM**: 결제 후 FAILED 사전검증(음력·연도·시분), 화면-PDF 후보 정합, 한자 필터 커버리지(畧·俗字·성별·감옥 글자), x-forwarded-for 스푸핑 한도 우회, 프리미엄 테스트 엔드포인트 게이팅, localStorage 결제 복구 정합, locale q값 파싱, hydration 불일치, 공용 유틸 통합 등.
- **LOW**: 15건(상품 역추론, PDF slice, 외자 undefined, 리포트ID/만료, 제외어 감점, 무효 월, 무료 쿼터 선차감, admin 업로드 경로, server-only, zod 캐스트 등).
- 검증: tsc·ESLint·build + 회귀 스크립트 2종 + 신규 스모크 테스트 다수.

## 2. i18n (외국인 대상 서비스 한국어→로케일)

- 원칙: **외국인 대상 서비스(serviceType === "GLOBAL_TO_KOREAN")만** 로케일 번역. 한국어 대상 서비스(hanja-meaning, korean-name, korean-to-global)는 항상 `ko`로 기존 문구 유지(회귀 0).
- 신규: `src/lib/i18n-form.ts`(폼 chrome), `src/lib/i18n-service.ts`(services.ts 설정 오버라이드, slug 기준), `src/lib/i18n-result.ts`(발음 결과 페이지). ko/en 작성 + 영어 폴백.
- 입력 폼(NamingForm) + 발음 표기 폼 + 발음 결과 페이지 이관 완료. ResultCard 후보 본문은 미이관(공유 컴포넌트, 후속 과제).
- **KOREAN_TO_GLOBAL 프롬프트**(`src/lib/prompts.ts`): 사용자가 한국인이므로 설명(추천이유·의미·문화적합·인상·주의)을 한국어로 강제, name은 대상 언어만, pronunciation은 영어+한글 병기("Daniel / 대니얼").

## 3. 기타 UX 수정

- 돌림자 '사용 안 함/모름' 선택 시 돌림자 글자·한자 입력 비활성화(FieldInput disabled 지원 추가).
- 한자 후보가 5개 미만일 때 결과 상단에 이유 안내 메시지(약자·음가목록·중복·부적합 제외, 억지로 안 채움).
- 운영자 무결제 테스트 게이트: 운영에서 `PREMIUM_TEST_MODE`만으로 안 열리고, **admin 로그인(Supabase role)** 시에만 "운영자 테스트" 버튼 노출·토큰 전송·서버 검증(`src/lib/premium-test-access.ts`).

## 4. 프리미엄 리포트 품질 (핵심)

- **서술 품질**: 규칙 폴백에 머물던 원인 = 문장수 게이트 + 과광범위 예측 차단 패턴이 좋은 AI 텍스트를 폴백으로 교체. 게이트 완화 + 프롬프트를 부모 지향 따뜻한 이름 이야기로 재작성 + gloss 원문 인용 금지.
- **사주 정확성**: 확정된 오행 개수·최다/최소 기운 요약(elementSummary)을 주입해 서술이 데이터와 어긋나거나 섹션 간 모순되지 않도록 강제. 일간(중심)과 최다 기운 구분.
- **모델**: gpt-4o로 올렸다가 **다중 후보 이름에서 45초 타임아웃** → **gpt-4o-mini로 복구**. 품질은 프롬프트 덕분이라 mini로도 동일. (운영·로컬 env 모두 mini)
- **병렬화**: 사주 종합 1회 + 후보별 1회 호출을 모두 병렬 실행. 후보 8개+사주 45초 초과 → 11초.
- 비용: mini 기준 리포트 1건 약 4~7원.

## 5. PDF 타임아웃 근본 해결 (중요 교훈)

- 증상: 운영 PDF 생성 60초 타임아웃.
- 격리 측정으로 진짜 원인 규명: **@react-pdf가 한글 WOFF 폰트를 임베딩할 때 렌더당 ~22초**(같은 폰트 TTF는 28ms). 폰트 크기·페이지 수·후보 수·하이프네이션 전부 무관.
- **해결: 한글 폰트를 @fontsource WOFF → 압축 해제한 TTF로 교체**(`assets/fonts/NotoSansKR-400/700.ttf`). 전체 리포트 렌더 26초 → 0.6초. next.config 트레이싱 ttf로 갱신.
- 부수: CJK OTF 단일 등록(이중 파싱 제거), HanjaText 런 기반, CJK 하이프네이션 비활성화.

## 6. PDF 디자인 개선 (사용자 요청, 렌더 이미지로 시각 검증)

`src/lib/pdf/premium-hanja-report.tsx`:
- **표지 1장**: "분 석 대 상 자" + 이름(**한글만, 한자 제거**) + 이름 문구 한 줄, 하단 생성·만료·안내. (초기엔 한자를 남겼다가 사용자 지적으로 제거)
- 사주 원국·오행 2페이지 유지. 후보 10개 각각 상세(후보당 1페이지).
- **후보 페이지 뱃지**(후보N·초점 라벨): 폰트 확대(→11), 제목과 세로 **가운데 정렬**(alignItems center). 제목-안내문 **겹침 해결**(sectionTitle lineHeight 1.3, titleBadgeRow marginBottom).
- **본문 폰트 확대**: 글자별 설명 8→9.6, 요약 9.8, 글자뜻 9.2, 라벨 10.5 (하단 여백 충분해 키움).
- **종합 비교 해설**: 폰트 확대(analysisText 9.6) + **후보별 번호 목록 줄바꿈**. 폴백을 '1. 한자 — 설명' 번호 형식으로 재작성, `toNumberedLines`로 번호 항목 줄바꿈, 프롬프트도 candidateComparison을 번호 목록으로 지시. (AI candidateComparison은 게이트에서 자주 폴백되므로 폴백을 번호로 만드는 게 핵심)
- **글자 카드 '공식 자료 지정 음가 확인' 뱃지**: 폰트 확대(5.6→7.5), 글자 제목과 가운데 정렬.
- 배제 후보에 한자 옆 **(음)** 표기(rejected 데이터에 reading 필드 추가: hanja.ts·premium-hanja-analysis.ts·report 타입).

**교훈**: PDF 레이아웃(폰트·정렬·겹침)은 텍스트 추출로 판단 불가 — 반드시 `pymupdf`로 페이지를 PNG 렌더해 눈으로 확인하고 고칠 것. (텍스트 추출만 믿고 "반영됐다"고 오판한 사고 있었음.)

## 7. 데이터 정리 (Supabase official_hanja_entries)

- 미할당(Plane 10, U+A0xxx) + PUA 코드포인트로 저장된 렌더 불가 문자 **442건 삭제**(10,380 → 9,938). 백업: `bad-hanja-backup.json`(스크래치패드).
- 코드 방어: `isCjkIdeograph` 필터를 후보 소스·배제 목록 양쪽에 적용(hanja.ts). 정상 희귀 한자(확장 A/B)는 유지.

## 8. 표지 워터마크 (진행 중 — 미커밋·미배포, 내일 이어서)

사용자 요청: 표지 안내문(24시간 자동삭제 문구) **밑에** 랜딩 로고(`public/images/logo-current.png` — 검은 사각 "이름" 도장)를 흐릿하게 워터마크로.

- **로드 방식**: `{ data: Buffer, format: "png" }` src는 렌더 안 됨 → **base64 data URI**(`data:image/png;base64,...`)로 바꾸자 PDF에 1024×1024 로고가 실제 임베딩됨(파일 크기 ~1MB 증가로 확인).
- **밀림 버그**: 이미지가 250px라 표지 하단 잔여 공간(약 257pt)을 초과(250+margin55=305pt) → **다음 페이지로 밀려 8페이지**가 됨(로고가 page index 1에 찍힘). → 스타일을 `width:150, opacity:0.12, marginTop:34`로 축소(표지 안에 들어오게).
- **미완**: 최종 시각 확인 못 함. 로컬 렌더 스크립트(`scratchpad/wm-render.ts`)가 `@/lib/...` 경로 별칭을 tsx가 못 풀어 `MODULE_NOT_FOUND`로 실패. 내일 tsconfig-paths 등록(`tsx --tsconfig` 또는 상대경로 import)으로 렌더해 표지에 로고가 실제로 보이는지 PNG로 확인 후 커밋·배포.
- 현재 코드 상태: `premium-hanja-report.tsx`에 `coverLogoSrc`(data URI) + `<Image src={coverLogoSrc}>` + 축소 스타일 반영됨(모두 **미커밋**). next.config 트레이싱에 로고 이미 포함됨.

## 남은 핵심 과제

- **PortOne 운영 결제 활성화(최우선, 실질 런칭 유일 블로커)**: Vercel에 `NEXT_PUBLIC_PORTONE_STORE_ID/CHANNEL_KEY`, `PORTONE_API_SECRET/WEBHOOK_SECRET`, `CRON_SECRET` 미설정 → 결제 자체 불가. 현재 프리미엄은 운영자 테스트 전용. 실카드→웹훅→confirm→24h 자동삭제 통합 시험 필요.
- ResultCard 후보 본문 i18n(외국인 결과 페이지).
- (선택) `ANALYTICS_HASH_SALT`, `PREMIUM_TEST_SECRET` 운영 등록.

## 운영 주의

- 로컬↔운영 **같은 Supabase**(ewrwygeruqwiamwutmxa) → DB 변경은 운영에도 즉시 반영.
- Vercel env는 Sensitive → `vercel env pull` 하지 말 것(실제 값 대신 `[SENSITIVE]` 덮어써 .env.local 손상). 이날 한 번 사고 후 VS Code 로컬 히스토리로 복구함.
- PDF/폰트 코드 변경은 dev에서 `.next` 삭제 + 재시작해야 반영(핫리로드 안 됨). dev 실행 중 `npm run build` 지양(캐시 오염).
- 보존 대상 미커밋 문서: `WORK_STATUS_2026-07-15/16.md`, `gemini 의견.txt`.
