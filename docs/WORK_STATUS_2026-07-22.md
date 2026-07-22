# Naming-Link 작업 현황 — 2026-07-22

## 완료: 약관 4종 개정 + 23개 언어 번역 (커밋 04cb7a2, 배포됨)

- **콘텐츠 개정(한국어 원본)**: 4개 서비스와 상품 전부 명시 — 한자 상세 2,900원 / 4,900원(PDF 포함, 기존 문서의 누락 교정) / 9,900원(사주·오행+PDF), 비한자 3개 서비스 후보 일괄 공개 990원(준비 중), 유료 리포트 24시간 열람 후 자동 삭제, 결제 대행사(포트원) 명시. 환불정책에 한자 리포트·990원 상품 조항 신설. 시행일 2026-07-22.
- **구조**: `src/lib/legal-content/` — types.ts + 로케일별 23개 파일 + index.ts(`locale → en 폴백`). site-content.ts `getFallbackPolicyDocument(kind, locale)`가 위임. DB(site_contents)에는 `footer.global`만 발행돼 있어 약관은 전부 코드 폴백으로 렌더(운영 DB 수정 불필요). 관리자 편집기는 언어별 폴백 로드.
- **번역**: ko·en 직접 작성, 21개 언어 병렬 번역 후 검수. 검수에서 교정: 독일어 가격 표기(₩2.900→₩2,900), 태국어 "후보" 오역(ชื่อผู้สมัคร 지원자→ชื่อที่แนะนำ 추천 이름).
- **검증**: `npx tsx --tsconfig tsconfig.json scripts/validate-legal-content.ts` — 23개 로케일 스키마·섹션/문단 수 원본 일치·한글 잔존·가격 표기 전수 검사(재사용 가능). 타입체크·lint 클린.
- **주의**: `company.ts`의 privacyOfficer가 "확인 예정"이라 모든 언어 페이지에 한글 placeholder 노출 — 회사 정보 확정 시 자동 해결. 페이지의 시행일 라벨·로그인 버튼도 로케일화됨.

## 완료: 발음 표기(global-name-to-hangul) 품질 개선 (커밋 afb9955, 배포됨)

2026-07-22 사용자 리포트(왕샤오밍 사례) 처리:

1. **후보 중복 제거** — `normalizeHangulTransliterationResult`(openai.ts): 동일 한글 표기 dedup + matching_rate 정렬. 유일하면 1개만 남고 잠금 패널은 기존 `totalCount <= 1` 조건으로 자동 숨김. 프롬프트에도 "채우기용 중복 금지, 진짜 모호할 때만 대안" 명시.
2. **설명 언어 강제** — `OUTPUT_LANGUAGE_NAMES` 23개 언어명 표를 만들어 outputLanguage를 검증·영어 폴백 후 **언어명을 시스템 프롬프트에 직접 보간**(입력 JSON에만 넣으면 mini가 무시함). GLOBAL_TO_KOREAN 본 서비스 프롬프트(prompts.ts)도 "when possible" → mandatory로 강화.
3. **pronunciation 형식 확정** — 한글 표기의 로마자 읽기(예: Wang-sya-o-ming)로 정의, 라벨을 "한글 표기 읽기 (로마자)"/"How to read the Hangul (romanized)"로 교정. IPA 라벨도 "(IPA)" 명시.
4. **표기 안정화** — 음차는 결정적 작업이라 temperature 0.85→0.4 (실측: 0.85에서는 실행마다 왕샤오밍/왕소명으로 흔들림).
5. 실호출 검증: zh·en·vi 3개 출력 언어 × 중국어/영어 이름 — 표기 고정, 중복 없음, 설명 언어 준수, 형식 정상. 테스트 인프라: `scripts/tsconfig.sweep.json` + `server-only-stub.ts`(향후 실호출 스윕 재사용).

잔여 판단 사항: raw IPA 노출 유지 여부(현재 유지, 라벨만 명확화). UI 라벨의 중국어 폴백은 zh 사전 채우기 백로그에서 해소.

## 완료: 로그인·계정 페이지 개편 (커밋 2cf7107)

결과 페이지와 같은 (이전 화면으로)+(홈) 버튼, 전 문구 로케일화(`i18n-auth.ts`), 약관·폼·매직링크 리다이렉트에 `?lang` 유지.

## 완료: UI 사전 채우기 — 태국어·일본어·중국어 (커밋 d41976d, cf365c5)

사전 8곳(기존 7곳 + i18n-auth)에 th·ja·zh 전체 추가. 사주 시진은 ja 子時~亥時 / zh 子时~亥时, 예시 이름 국가화(山田 太郎·王小明), 용어는 legal-content 글로서리 준수. 이제 ko·en·vi·th·ja·zh 6개 언어 완전 커버, 나머지 17개 로케일 영어 폴백.

## 완료: 약관 모달 한국어 번쩍임 수정 (커밋 74464bc)

- 원인: 푸터 약관 모달(LegalModal)이 한국어 폴백을 먼저 그리고 API 응답으로 교체 → 비한국어 사용자에게 한글이 보였다가 바뀜.
- 수정: 모달은 스켈레톤 → `/api/site-content`가 로케일 문서+라벨(시행일·닫기, 23개 언어에 close 라벨 추가)을 반환해 바로 해당 언어로 렌더.
- 부수 수정: `getFallbackPolicyDocument`를 `@/lib/legal-content`로 이동해 클라이언트 번들이 23개 언어 약관 전체를 끌고 가지 않도록 차단. 푸터 일반 링크에도 `?lang` 전달(IP 재추정 방지).

## 심층 코드 감사 + 수정 (2026-07-22, 커밋 e68df07·455e5eb)

읽기 전용 감사 6영역(인증·결제·API남용·개인정보·라이브러리·프런트엔드). 인증/인가/결제 핵심 방어는 견고(웹훅 서명, 가격은 서버 상품표, 다운로드 토큰 timingSafeEqual, 서비스키 미노출, admin은 app_metadata). 문제는 약관 약속↔코드 불일치에 집중. **수정 완료 4건**:
- **#4 결과 언어 "auto"→영어 누수** (HIGH, 오늘 현지화 직결): GLOBAL_TO_KOREAN에서 사용자가 국가 미변경 시 "auto"가 서버에서 영어로 폴백되던 것 → 요청 로케일(IP·Accept-Language)로 해소. `api/naming/route.ts`.
- **#2 결제 전 유료 한자 상세 노출** (HIGH): 무료 응답이 story·practical_analysis(2,900원 상품)를 담아 sessionStorage로 열람 가능 → 무료 응답·저장에서 제거(`stripPaidHanjaDetail`). 유료는 결제 후 서버 재생성이라 무관.
- **#1 24h 자동삭제 크론 부재** (CRITICAL): 스케줄러가 아예 없었음 → `vercel.json` 시간별 크론 추가(**CRON_SECRET 운영 등록 필요**). 만료 sweep에 PAID·GENERATING 추가.
- **#3 방치 PENDING_PAYMENT PII 잔존** (HIGH): expires_at NULL이라 영구 잔존 → created_at 기준(기본 24h, `PREMIUM_ABANDONED_TTL_HOURS`) 파기 + 미결제 주문 연락처 삭제(PAID 거래기록은 법정 보관으로 유지).

**미수정(하드닝, 백로그)**: MEDIUM — `api/premium-reports/order` 무인증·무제한, `api/naming` inputFactors 크기 무제한(비용 방어), IP당 20회 외 상위 한도 없음, ad-events/analytics 무인증 insert, 보안 헤더(CSP) 부재, 광고 잠금 클라이언트 사이드. LOW — 해시 salt 서비스키 폴백, 프리미엄 localStorage 영구 잔존, PartialCancelled 전액환불 처리, 힌디어 normalizer 스크립트 규칙 누락, geo-IP 맵에 신규 국가 8개 누락, pronunciation 재조립 정규식 오작동, AI 실패 시 쿼터 미환불.

## 하드닝 후속 조치 (2026-07-22 오후, 커밋 460f64f·ee318ad·a70225f — 푸시됨)

세션이 비정상 종료되기 직전까지 진행한 작업. 소스는 전부 커밋·푸시 완료, 미커밋 코드 없음.

- **회사 정보 확정** (460f64f, 0db721c 포함): `company.ts` 대표자 곽은하, privacyOfficer·이메일·고객센터 기입 → 전 언어 약관의 "확인 예정" 한글 노출 해소(남은 작업 5번 완료).
- **공개 엔드포인트 하드닝** (ee318ad): `next.config.ts` 보안 헤더 추가, `request-guard.ts` 신설 — 본문 바이트 제한(`readJsonBodyLimited`, Content-Length 위조 대비 실측 바이트 기준), `inputFactors` 키 수·문자열 총량 제한(`checkInputFactorsSize`). naming·premium order·ad-events·analytics에 적용 → MEDIUM 백로그 중 "inputFactors 크기 무제한, 보안 헤더 부재" 해소.
- **프리미엄 주문 레이트리밋** (a70225f): `consume_rate_limit` RPC(고정 시간창) 마이그레이션 `20260722120000_rate_limit.sql` + `checkRateLimit`. RPC 부재·오류 시 fail-open이라 배포는 안전.
- **마이그레이션 적용 완료** (2026-07-22, 사용자 승인 후): 공유 Supabase에 트랜잭션으로 적용, RPC 실호출 검증(한도 2 설정 시 3번째 호출 false + 초과분 롤백 정상), healthcheck 테스트 행 삭제. 레이트리밋 실동작 상태.

## 크론 실동작 확인 + 시간별 외부 스케줄러 (2026-07-22 저녁, 커밋 f374089)

- **CRON_SECRET 등록 검증**: 사용자가 .env.local·Vercel에 등록 → 프로덕션 실호출로 무인증 401 / 시크릿 200 확인. 24h 자동삭제 크론 실동작.
- **발견**: `vercel.json` 크론이 `0 18 * * *`(일 1회 03:00 KST) — Vercel Hobby 플랜이 크론을 일 1회로 제한(감사 문서의 "시간별" 기록은 부정확했음). 만료 후 최대 ~24h 추가 잔존 가능해 약관의 24시간 삭제 약속과 불일치.
- **해소**: GitHub Actions 시간별 크론 `.github/workflows/premium-cleanup-cron.yml` 신설(매시 정각, workflow_dispatch 수동 실행 가능, Vercel 일 1회 크론은 백업 유지). 리포지토리 시크릿 CRON_SECRET 등록, 수동 트리거로 200 확인.
- **주의**: .env.local의 CRON_SECRET 값은 큰따옴표 포함이라 다른 곳에 복사 등록 시 따옴표를 벗겨야 함(첫 등록 때 401 원인). GitHub 스케줄은 리포지토리 60일 무활동 시 자동 비활성화되므로 장기 방치 시 재활성화 필요.

## 하드닝 백로그 2차 완료 (2026-07-22 밤, 커밋 65ca630)

- **레이트리밋 확장**: ad-events 60건/시간·analytics 120건/시간(방문자 해시 기준). checkRateLimit에 identifier 오버라이드 추가.
- **AI 비용 전역 상한**: IP 로테이션으로 개별 한도(일 20회)를 우회해도 서비스 전체 AI 호출이 `NAMING_AI_GLOBAL_DAILY_LIMIT`(기본 2,000/일)에서 멈춤. fail-open.
- **무료 쿼터 환불**: AI 생성 실패 시 `release_daily_quota` RPC로 차감 복원. 마이그레이션 `20260722180000` **원격 적용·실호출 검증 완료**(2 소비+1 환불=1).
- **PartialCancelled 분리**: 부분취소는 주문만 `PARTIALLY_REFUNDED`로 표시하고 리포트·세션 유지(기존엔 전액환불처럼 리포트 파기). 열람은 세션 status 기준이라 영향 없음.
- **프리미엄 localStorage TTL**: 체크아웃 항목(접근 토큰+연락처 PII) 48시간 후 파싱 시점 자동 삭제.
- **geo-IP 맵**: ES·CO·PE→es, AT·CH→de, BE→fr, NZ·IE→en 추가.
- **CSP**: base-uri·object-src 추가. **전체 script-src CSP는 보류** — PortOne 결제창(cdn.portone.io + PG iframe)을 깨뜨릴 수 있는데 현재 결제 테스트 불가라 검증 불능. 포트원 실결제 테스트 시 확정.
- **광고 잠금 서버화는 보류 권고**: 무료 결과는 "비회원 결과 미저장" 원칙(2026-07-15 확정)에 따라 서버에 저장되지 않아, 서버 권한형 잠금은 결과 저장이 전제라 원칙과 충돌. 현재 광고 자체가 placeholder(수익 없음)이므로 실제 보상형 광고 도입 시 제품 결정과 함께 재설계.

## GLOBAL_TO_KOREAN 성씨 누락·설명 언어 무시 수정 (2026-07-22 밤, 커밋 f373f4c)

사용자 리포트 2건(Stark Tony/en·王蘇/zh) 처리:
- **성씨**: 프롬프트·스키마에 성 요구가 아예 없었음 → hangul을 성+이름 완전한 성명으로 강제, 선택 성(kim 등)은 한글(김)로 확정 주입(`koreanFamilyNameHangul`), 추천 모드는 원 이름과 조화로운 성 1개를 전 후보에 일관 사용. "같은 이름에 성만 5개 바꿔 채우기" 방지 규칙 포함.
- **언어**: 음차 서비스에만 있던 시스템 프롬프트 언어명 직접 보간을 본 서비스에도 적용(입력 JSON만으로는 mini가 무시하고 한국어로 작성).
- **부수**: 힌디어 데바나가리 스크립트 규칙 추가, KOREAN_TO_GLOBAL pronunciation 재조립이 한글 산문에 오작동하던 정규식 수정("/" 구획 전체가 한글일 때만 인정).
- **실호출 검증 ALL PASS**: en 추천·zh 추천·es 김 선택 3케이스 — 성 포함, 이름 5개 상이, 설명 언어 준수.

### 후속 수정 (같은 날 밤, 커밋 4c0c5d5 — 실화면 사용자 리포트 2건)

- **ja UI인데 설명이 한국어**: 폼 기본값 "auto"가 truthy라 제출 코드 `values.outputLanguage || locale`에서 UI 로케일이 절대 쓰이지 않고 서버 IP 추정(한국→ko)으로 흘렀음. 제출 시 "auto"면 사용자가 보고 있는 UI 로케일로 확정. 국가를 직접 고르면 기존처럼 그 나라 언어가 우선.
- **山田에 이씨 추천 + "발음 유사성" 사유 날조**: 실존 성씨 목록(KOREAN_SURNAME_ROMAN, 왕·예·반·연·명·태 보충)을 주입해 그 안에서만 선택 + 정직성 규칙(실제 공유 음절이 있을 때만 소리 연결 주장, 없으면 "자연스러움 기준"이라고 명시. 후보 설명에도 동일 적용). 王蘇→왕 복원(목록 제한으로 생긴 회귀 수정), 山田→김+"태는 太와 음이 비슷"(실제 연결), Garcia→"소리 유사성 없음을 명시하고 김 선택".
- ja 케이스 포함 4개 언어 실호출 재검증 ALL PASS.

## 일괄 공개 상품 가격 확정: 국내 990원 · 해외 US$1.99 (커밋 ff83b01)

- **결정(사용자, 2026-07-22)**: 990원은 한국인만 아는 금액이라 해외는 달러 표기. $0.99 대비 $1.99 권고 채택 — 해외 결제 고정 수수료(~$0.49) 때문에 $0.99는 실수령이 절반 이하($0.46 vs $1.42), 7/15 네임 카드 $1.99 계획과도 일치.
- 반영: 잠금 패널 22개 언어 문구 US$1.99(ko는 990원 유지), 약관·환불·요금 23개 로케일(비한국어 US$1.99, 한국어 원본은 "국내 990원, 해외 US$1.99" 병기), 검증 스크립트 로케일별 기대 가격.
- **미반영(의도)**: 서버 상품표에는 이 상품이 아직 없음(결제 미연결·"준비 중"). 포트원 연동 시 KRW 990/USD 1.99 이원 가격으로 주문 흐름에 추가해야 함. PortOne V2의 PayPal USD 지원은 7/15 확인됨.

## 잔여 백로그 (감사 항목 중)

- 광고 잠금 서버화(위 보류 사유), 전체 CSP(포트원 테스트 후), 힌디어 외 스크립트 규칙 검증 스윕(선택). `ANALYTICS_HASH_SALT`·`PREMIUM_TEST_SECRET` 등록은 사용자 결정 대기.

## 푸터 영문 표기 (2026-07-22 밤, 커밋 6f81765)

비한국어 로케일에서 대표자·개인정보보호책임자 "Gwak Eunha (CEO)", 주소 영문 로마자, "(주)Platforest"→"Platforest Inc.", "통신판매업 신고 준비 중"→로케일별 문구로 표시(표시 단계 변환, DB 원본은 한국어 유지). 사전에 없는 값(관리자 신규 입력)은 원문 유지되므로 회사 정보 변경 시 `SiteFooter.tsx`의 매핑 갱신 필요.

## 남은 작업 (우선순위순)

1. **PortOne 운영 결제 활성화** — 유일한 실질 런칭 블로커. **CRON_SECRET·PREMIUM_ABANDONED_TTL_HOURS(선택) 함께 등록**해야 24h 자동삭제가 실동작.
2. ~~모바일 랜딩 버튼 반응형 버그~~ → **수정 완료(커밋 53ce1b9)**: 원인은 `break-keep`(keep-all)이 띄어쓰기 없는 언어(ja·zh·th·km)에서 줄바꿈 지점을 없애 히어로 본문·서비스 카드가 뷰포트 밖으로 잘리던 것. 해당 언어는 일반 줄바꿈+overflow-wrap으로 전환(한국어는 기존 유지). break-keep은 랜딩에만 존재해 다른 페이지 영향 없음. **사용자 재확인 필요.**
3. ~~언어별 사전 채우기~~ → **전체 완료**: 23개 로케일 전부 완전 커버 (커밋 d41976d·cf365c5·574aaf9·cbb0f23·cc9bfbb·64ffc71·ffc018e·4a973a2). 영어 폴백으로 남는 화면 없음. i18n-service·AILoadingSteps에 ko 항목이 없는 것은 한국어 원본이 기본값이라 정상.
3. 글로벌 이름 gpt-4o 업그레이드 결정 (보류 중).
4. 990원 일괄 공개 실결제 연결 (PortOne 이후).
5. 회사 정보 확정(`company.ts` privacyOfficer 등 — 현재 전 언어 약관에 "확인 예정" 한글 노출).
6. `ANALYTICS_HASH_SALT`, `PREMIUM_TEST_SECRET` 운영 등록 (선택).
