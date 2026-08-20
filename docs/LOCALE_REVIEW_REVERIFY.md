# 재검증 의뢰 — 결함 다섯 수정본

- 대상: `feat/locale-review-manifest` → `66f15c4` (11파일 +1,541 / −183)
- PR: https://github.com/whitederrick/naminglink/pull/2
- 앞 문서: `docs/LOCALE_REVIEW_DEFECT_FREEZE.md` (결함 목록·양방향 합격 조건)
- 병합 조건: **Codex 와 Claude App 의 독립 재검증 전에는 병합하지 않는다.**

---

## 0. 무엇을 봐 주셔야 하는가

**초록불 재확인이 아닙니다.** `tsc` 0건 · `eslint` 0건 · 검사기 6종 exit 0 · 스윕 2회 동일은
이미 나와 있고, 그건 제가 낸 값입니다.

봐 주실 것은 **제 대조군이 진짜인가**입니다. 이번에 대조군을 「실제로 통과했던 본문」으로
바꿨다고 주장하는데, 그 주장이 맞는지가 이 재검증의 본론입니다.

앞선 실패가 정확히 그 자리였습니다 — 가짜 이름(`Nowhere.tsx:ghost`)으로 초록불을 받는
동안 `StampOrderForm.COPY` 가 통째로 빠져 있었고, `verify-legal-source.ts` §④ 는 **결함을
기능이라고 증명**하고 있었습니다.

---

## 1. 5분 안에 돌려 보기

```bash
git fetch origin && git checkout feat/locale-review-manifest   # 66f15c4
cd apps/naminglink

npx tsx scripts/verify-locale-inventory.ts
npx tsx scripts/verify-locale-manifest.ts
npx tsx scripts/verify-regeneration-guard.ts
npx tsx scripts/verify-legal-publish-gate.ts
npx tsx scripts/verify-two-branch-copy.ts
npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-legal-source.ts
```

마지막 하나만 `--tsconfig` 가 필요합니다(`server-only`).

**자격증명이 있을 때와 없을 때를 둘 다 돌려 주십시오.** P0-3 이 그 차이를 만듭니다.
`--env-file=.env.local` 을 붙이면 있는 쪽, 안 붙이면 없는 쪽입니다.

---

## 2. 고친 것 다섯

### P0-1 · 승인하지 않은 DB 약관이 봉인을 통과했다

| | |
|---|---|
| 원인 | 드리프트는 **파일 인벤토리**로 검사하고 봉인 값은 **고른 원본**에서 만들었다 |
| 고침 | 먼저 고르고, **고른 것**을 승인 해시와 대조한다 |
| 변환 함수 | `scripts/legal-source.ts:176` `resolvedLegalLeaves()` — packet 과 공용 |
| 죽는 방식 | `scripts/seal-locale-review.ts:34` `SealMismatchError` — 부분 봉인을 돌려주지 않는다 |

`skipped` 배열은 없앴습니다. **호출자가 무시할 수 있는 반환값은 관문이 아니라서**입니다.

**공격해 주실 것**
- 승인 안 된 DB 내용이 봉인되는 다른 경로가 남았는가
- 반대로 **정상 승인분이 거짓 거부**되는가 (이게 더 위험합니다 — 막히면 사람은 검사기를 끕니다)
- `resolvedLegalLeaves` 가 `locale-inventory.ts` 의 `legalLeaves` 와 **정말 같은 경로 규칙**인가
  (`legal.labels.*` + `legal.<kind>.*`). 다르면 승인과 봉인이 또 어긋납니다

### P0-2 · 임의의 `reviewSourceHash` 가 통과했다

| | |
|---|---|
| 원인 | 검사가 **구조뿐** — `origin` 엔 없고 `translated` 엔 있는지만 봤다 |
| 고침 | `scripts/locale-manifest.ts:173` `reviewSourceHashErrors()` — 실제 원문에서 재계산 대조 |
| 매핑 | `scripts/locale-manifest.ts:154` `sourceLocaleFor()` |

매핑은 동결 문서의 artifact 별 규칙을 그대로 옮겼습니다.

```
en docs 직접 작성            origin      없음
en docs 의 --fill-en 산출물  translated  대응하는 ko
비영어 docs                  translated  대응하는 en
ko legal                     origin      없음
비한국어 legal               translated  대응하는 ko
screen · consent 전체 로케일 origin      없음
```

**공격해 주실 것**
- 이 매핑이 실제 파이프라인과 맞는가. 특히 `en` docs 의 원문/`--fill-en` 혼재
- 재계산을 우회하는 값이 있는가
- **정상 검수 기록이 거짓 거부되는가**

### P0-3 · DB 미접속·조회 오류가 「게시본 없음」이 됐다

| | |
|---|---|
| 원인 | reader 가 `unknown \| null` — 셋이 한 값으로 뭉갰다 |
| 고침 | `scripts/legal-source.ts:61` `PublishedLookup` — **자료형이 셋을 가른다** |
| 죽는 방식 | `scripts/seal-locale-review.ts:49` `SealEnvironmentError` (`CANNOT_RUN`) |

```ts
type PublishedLookup =
  | { state: "found"; content: unknown }      // 있다
  | { state: "absent" }                        // 물어봤고 없다 — 정상
  | { state: "unavailable"; reason: string }   // 못 물어봤다 — 환경
```

`fileOnlyReader` 는 `absent` 입니다. 그래서 주입 reader 대조군은 자격증명 없이 돕니다.

**공격해 주실 것**
- `unavailable` 이 조용히 `absent` 로 떨어지는 경로가 남았는가
- `SealEnvironmentError` 와 `SealMismatchError` 를 한 덩어리로 잡는 곳이 있는가
  (둘을 묶으면 「못 돎이 통과로 새는」 자리가 다시 생깁니다)
- `CANNOT_RUN` 문구가 `scripts/audit-verifiers.mjs` 의 패턴에 실제로 걸리는가

### P0-4 · 스캐너 탐지 계약 — 정규식 → AST

| | |
|---|---|
| 새는 원인 | 선언 모양이 아니라 **키 추출 한 줄**이었다 (들여쓰기 정확히 2칸 + 따옴표 없는 키) |
| 고침 | `scripts/verify-locale-inventory.ts:216` `scanText()` — TypeScript AST |
| 판정 | `scripts/verify-locale-inventory.ts:116` `isLocaleTable()` |
| 자료형 갈래 | `scripts/verify-locale-inventory.ts:153` `namesLocaleRecord()` |

**임계값은 1입니다.** 다만 임계값만으로는 못 씁니다 — `id` 가 인도네시아어 코드라 평범한
객체 **9건**이 걸렸습니다. 그래서 판정을 키 **구성**으로 합니다.

```
{ ko: …, en: … }          표 ✓
{ ko: … }                 표 ✓   ← 키 1개도 표다 (C)
{ ko: …, fallback: … }    표 ✓
{ id: "x", title: "y" }   표 아님 — title 이 로케일이 아니다
{ id, ...changes }        표 아님 — 줄임 표기·스프레드는 안 센다
```

임계값을 올려 오탐을 숨기지 않습니다. 오탐은 `EXCLUDED_TABLES` 에 이유와 함께 적습니다.

**계약에 적어 둔 사각지대**

> 이 검사기는 **리터럴 로케일 키**만 본다. `Object.fromEntries(LOCALES.map(...))` 처럼
> 계산으로 만드는 표는 **계약 밖이며 손으로 등록해야 한다.** AST 로도 못 잡는다.

**공격해 주실 것**
- A·B·C 말고 **네 번째 모양**이 있는가
- `isLocaleTable` 의 `FALLBACK_KEYS`(`default`·`fallback`)가 구멍인가
- `namesLocaleRecord` 가 `Record` 의 첫 인자만 보는데, 놓치는 자료형 표기가 있는가
  (한 번 넓게 짰다가 `locale: LocaleCode` 까지 걸려 60건이 났습니다)
- **선언 30건 = 등록 23 + 제외 7** 이 맞는가. `EXCLUDED_TABLES` 7건의 사유가 각각 타당한가

### P1-5 · 게시 차단 판정식이 두 벌이었다

| | |
|---|---|
| 고침 | `src/lib/locale-review-seal.ts:38` `legalPublishBlocked()` — 라우트와 검사기가 함께 import |
| 알맹이 | `src/lib/locale-review-seal.ts:53` `isBlockedBySeal()` |

고치는 중에 하나 더 나왔습니다 — **대조군이 가짜 봉인으로 규칙을 또 다시 적고** 있었습니다.
그대로 뒀으면 P1-5 를 고치면서 같은 결함을 대조군에 새로 심는 셈이라, 알맹이를 꺼내 셋이
다 그것을 부르게 했습니다.

```bash
# 복사본이 0건인지 세어 보십시오
grep -rn "sealed !== \|sealedHash !== \|!== hashReviewDocument" src/ scripts/ \
  --include=*.ts --include=*.tsx | grep -v locale-review-seal.ts | grep -v seal-locale-review.ts
```

`src/lib/locale-review-seal.ts` 는 **생성물**입니다. 손으로 고치지 말고
`npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/seal-locale-review.ts` 로 다시 만듭니다.
렌더러는 `scripts/seal-locale-review.ts` 의 `renderSeal()` 안에 있습니다.

---

## 3. 대조군 — 여기가 본론입니다

**전부 「실제로 통과했던 본문」으로 바꿨다고 주장합니다.** 그 주장을 깨 주십시오.

| 대조군 | 출처 | 어디에 |
|---|---|---|
| 따옴표 로케일 키 표 | Claude App 이 심어 통과시킴 | `verify-locale-inventory.ts` ⑤ `PLANTED` |
| 함수 안 무타입 표 | Claude App | 같은 곳 |
| 로케일 키 1개 + fallback | Codex | 같은 곳 |
| `reviewSourceHash: "bogus"` | Codex 가 통과시킨 값 | `verify-locale-manifest.ts` `bogusSourceHashErrors` |
| 바뀐 DB 문서 주입 | Codex 가 봉인시킨 값 | `verify-legal-source.ts` §④-2 |

**반대 방향도 짝지었습니다.**

```
평범한 객체(id·title)          → 표로 세지 않는다
줄임 표기 + 스프레드            → 표로 세지 않는다
LocaleCode 지만 Record 아님     → 표로 세지 않는다
실제 원문에서 계산한 해시        → 통과한다 (오류 0건)
DB 기준 정상 승인               → 봉인한다 (막지 않는다)
주입 reader 대조군              → 자격증명 없이 실행된다
```

**물어봐 주실 것**
- 이 대조군이 **결함을 심어야만 빨간불이 되는가**, 아니면 다른 이유로도 빨간불이 되는가
- 대조군을 통과시키면서 **진짜 결함은 통과하는** 본문을 만들 수 있는가
- 반대 방향 대조군이 **늘 통과하도록 짜여 있지는 않은가**

---

## 4. 실측 (수정 후 · dev :3001)

```
/ko 200 · /en 200 · /ja 200

SiteFooter (/ja)                    概要 · お問い合わせ · お知らせ            ✓
                                    "How it works" · "Customer service"      ✓ (선언된 영어)
ServiceShell (/ja/global-to-korean)  "How it works"                          ✓
```

**`stampText` 는 확인하지 않았습니다.** 도장 상품이 통신판매업·PG 대기로 닫혀 있어 화면에
없습니다. `/ja/stamp-order` 는 일시중지 안내만 내고 주문 양식은 0건입니다. 상품이 열릴 때
되살릴 목록을 `LOCALE_REVIEW_DEFECT_FREEZE.md` 에 남겼습니다.

> 이 항목을 처음에 「유료 AI 호출이 필요해 못 봤다」고 **틀린 이유**로 적었습니다. 상품 상태를
> 보지 않고 원인을 지어낸 것입니다.

---

## 5. 절대 하지 말 것

- 운영 DB 쓰기 · 광고 로케일 확대 · 실제 광고/유료 AI 호출
- `apps/naminglink/scripts/probe-*` 8개 — 읽기 전용 도구. 삭제·수정 금지
- `apps/naminglink/scripts/verify-premium-test.mjs` — 다른 도구의 미커밋 수정이 있음
- Vercel Preview 에서 광고 측정

---

## 6. 회신 형식

```
[P0|P1|P2] 한 줄 제목
  자리:   파일:줄
  증상:   무엇이 잘못되는가
  재현:   돌릴 명령 또는 심을 본문
  근거:   어떤 약속이 깨지는가
```

판정은 셋으로 갈라 주십시오.

```
결함        코드가 틀렸다
검사기 결함  코드는 맞는데 검사기가 못 잡는다 / 잘못 잡는다
환경 없음    돌릴 수 없었다 (통과가 아니다)
```

**증명 기준** — 스윕 두 번은 재현성일 뿐 정확성의 증명이 아닙니다.
증명은 **결함을 심으면 빨간불, 정상 입력이면 초록불**이 함께 나오는 것입니다.
