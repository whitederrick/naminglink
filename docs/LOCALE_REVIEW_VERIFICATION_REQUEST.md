# 검증 의뢰 — 글로벌 로케일 검수 구조 (PR #2)

- 대상: `feat/locale-review-manifest` → `2a779d6` (34파일 +6,863/−75)
- PR: https://github.com/whitederrick/naminglink/pull/2
- 의뢰인: Claude Code (구현자)
- 작성: 2026-08-20

---

## 0. 왜 의뢰하는가 — 이 검증의 전제

**지금까지의 초록불은 전부 구현자 자체 검증입니다.**

```
tsc --noEmit          0건
eslint src scripts    0건
검사기 6종            전부 exit 0
```

그런데 **그 검사기 여섯을 구현자가 직접 썼습니다.** 코드를 쓴 사람이 검사기도 쓰면
사각지대가 그대로 이어집니다. 이 저장소에서 이미 일어난 일입니다.

> 인벤토리 수치가 242 → 323 → 357 로 두 번 움직였습니다. 대조군이 **가짜 이름**
> (`Nowhere.tsx:ghost`)을 시험하고 있었기 때문입니다. 검사기는 내내 초록불이었고,
> 실제로는 로케일 표 넷(`shellCopies` · `StampOrderForm.COPY` ·
> `globalNavigationLabels` · `generalStepsByLocale`)이 빠져 있었습니다.

**그래서 이 의뢰의 1순위는 「코드가 맞는가」가 아니라 「검사기가 진짜를 잡는가」입니다.**

Codex 가 앞서 P1 6건 + 블로커 3건을 잡아 주었고 전부 재현·수정했습니다.
**그 수정들은 아직 아무도 검증하지 않았습니다.** 여기가 가장 위험한 자리입니다.

---

## 1. 5분 안에 돌려 보기

```bash
git fetch origin && git checkout feat/locale-review-manifest
cd apps/naminglink && npm ci        # 이미 있으면 생략

# 검사기 여섯 — 전부 exit 0 이 현재 주장입니다
npx tsx scripts/verify-locale-inventory.ts
npx tsx scripts/verify-locale-manifest.ts
npx tsx scripts/verify-regeneration-guard.ts
npx tsx scripts/verify-legal-publish-gate.ts
npx tsx scripts/verify-two-branch-copy.ts
npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-legal-source.ts
```

마지막 하나만 `--tsconfig` 가 필요합니다(`server-only` 모듈을 탑니다).

**Supabase 자격증명 없이도 여섯 개 전부 돌아야 합니다.** 하나라도 자격증명을
요구하면 그 자체가 결함입니다 — 검수 절차가 한 사람 컴퓨터에서만 도는 뜻이 됩니다.

---

## 2. 무엇을 만들었나 (배경)

23개 로케일을 사람이 검수했다는 말에 근거가 없었습니다. 무엇을 대상으로 세는지,
누가 언제 승인했는지, 승인한 내용이 지금 화면과 같은지 — 셋 다 기록이 없었습니다.

```
scripts/locale-inventory.ts     무엇을 세는가        SCREEN_SOURCES 18건 + 문서/법률/고시
scripts/locale-manifest.ts      판정을 어떻게 적는가  docs/locale-review/manifest.json
scripts/legal-source.ts         원본을 어떻게 고르는가 DB 게시본 우선, 없으면 파일
scripts/seal-locale-review.ts   런타임이 읽을 봉인    src/lib/locale-review-seal.ts
scripts/regeneration-guard.ts   승인본 재생성 차단
```

인벤토리 현재 수치 — **로케일당 705개 잎**:

| 범위 | 개수 |
|---|---|
| 화면 | 357 |
| 문서 | 199 |
| 법률 | 115 |
| 결제 고시 | 34 |

---

## 3. 우선순위별 검증 요청

### P0 — 검사기가 진짜 결함을 잡는가 (가장 중요)

각 검사기에 대해 **일부러 결함을 심고** 빨간불이 뜨는지 봐 주십시오.
초록불을 확인하는 게 아니라 **빨간불을 만들 수 있는지**가 질문입니다.

**① 인벤토리 스캐너 — 이게 두 번 틀렸습니다**

`scripts/verify-locale-inventory.ts` 는 소스를 훑어 등록부와 대조합니다.
판정 기준이 두 갈래입니다.

```
verify-locale-inventory.ts:67   TABLE_PATTERNS    타입이 붙은 표 (Record<LocaleCode,…> 등)
verify-locale-inventory.ts:91   shapedTables()    무명 표 — 로케일 키 2개 이상이면 표로 본다
verify-locale-inventory.ts:118  임계값: localeKeys.length >= 2
```

- **진짜 새 로케일 표를 하나 만들어** 컴포넌트에 넣고, 등록부에 안 적은 채 돌려
  보십시오. 잡습니까? (가짜 이름을 등록부에 적는 시험은 이미 해 봤고 **무의미했습니다**)
- 임계값 `>= 2` 를 피해 가는 표를 만들 수 있습니까? 로케일 키가 **정확히 1개**인
  표는 안 잡힙니다. 그게 허용 가능한 구멍입니까, 아니면 결함입니까?
- `EXCLUDED_TABLES`(`locale-inventory.ts:150`, 7건)의 제외 사유가 각각 타당합니까?
  **하나라도 「화면에 그려지는데 제외된」 것이 있으면 P0 입니다.**
- 세 코드베이스 관례를 벗어난 표 정의 방식(예: 함수가 반환하는 표, 스프레드로
  합치는 표, 다른 파일에서 조립되는 표)을 스캐너가 놓칩니까?

**② manifest 위조 — Codex 가 잡았고, 수정본을 아무도 안 봤습니다**

`scripts/locale-manifest.ts` 에 두 규칙이 있습니다.

```
locale-manifest.ts:117  allowedOriginLocale()    docs 는 en, 나머지는 ko 만 origin
locale-manifest.ts:121  sourceKindErrors()
locale-manifest.ts:143  inventoryVersionErrors()
locale-manifest.ts:198  scopeComplete()          modified + approved === artifacts.length && > 0
```

- **검수 안 한 로케일을 「검수 완료」로 통과시키는 manifest 를 쓸 수 있습니까?**
  Codex 가 쓴 위조(`inventoryVersion: "bogus"` + 전부 `origin`)는 이제 막힙니다.
  **다른 모양의 위조를 찾아 주십시오.**
- 반대 방향도 봐 주십시오 — **정당한 검수 기록이 거짓 빨간불**을 받습니까?
  이게 더 위험합니다. 사람은 막히면 검사기를 끄는 법을 먼저 배웁니다.

**③ 법률 원본 선택 — 한 번 잘못 만들었던 자리**

처음엔 「DB 에 게시본이 있으면 실패」였습니다. 그건 **오늘의 상태**를 검사한 것이지
지켜야 할 성질이 아니었고, 운영자가 약관을 정상 게시하는 날 영구 빨간불이 됩니다.

지금은 `scripts/legal-source.ts` 의 `resolveLegalDocuments()` 가 실제로 고르고,
검사기는 **파일 봉인과 DB 봉인의 해시가 다른지**로 배선이 값에 닿는 걸 증명합니다.

- 이 resolver 의 순서가 **운영 약관 화면이 고르는 순서와 같습니까?**
  화면 쪽 코드를 직접 읽고 대조해 주십시오. 두 벌이면 언젠가 갈라집니다.
- 깨진 게시본이 파일로 떨어질 때 **그 사실이 정말 남습니까**(`invalidFromDb`)?
  조용히 넘어가면 검수가 화면과 다른 것을 가리키게 됩니다.
- `verify-legal-source.ts` §⑤(운영 현황)가 자격증명 유무에 따라 **판정을 바꿉니까?**
  바꾼다면, 자격증명 없는 CI 에서 이 검사는 무엇을 보증합니까?

**④ 봉인 ↔ manifest 갈라짐**

```
docs/locale-review/manifest.json    판정의 진실
src/lib/locale-review-seal.ts       배포된 코드가 읽는 복사본
```

복사본이 하나 있다는 게 이 구조의 유일한 구조적 위험입니다.

- `verify-legal-publish-gate.ts` 가 정말 매번 다시 만들어 대조합니까,
  아니면 파일 두 개를 그냥 비교합니까?
- **봉인이 빠진 로케일을 「통과」로 세는 경로가 남아 있습니까?** 빠지면 런타임에서
  게시가 열립니다. 현재는 `fail()` 이지만, 우회 경로가 있는지 봐 주십시오.
- 관문 판정식이 `site-content/route.ts` 와 `verify-legal-publish-gate.ts:62` 에
  **두 벌로 적혀** 있습니다. 지금 같습니까? 갈라지면 어떻게 알아챕니까?

### P1 — 구조와 이름

- `HUMAN_REVIEWED_LOCALES` → `AD_OPENED_LOCALES` 개명(`src/lib/ads.ts`).
  값은 `ko` 하나 그대로입니다. **개명이 놓친 호출부가 있습니까?**
  형제 앱 셋(inyeonlink·sajulink·dreamslink)은 아직 옛 이름을 씁니다 — 의도된
  범위 밖입니다. 그런데 **공유 모듈을 통해 새 이름이 형제 앱에 새어 나갑니까?**
- 로케일 표 9개를 인벤토리가 읽을 수 있게 `export` 했습니다.
  **export 가 클라이언트 번들을 키웠습니까?** `"use client"` 파일에서 스크립트가
  import 하는 구조라 트리셰이킹이 깨질 수 있습니다.
- `Record<LocaleCode, …>` 타이핑으로 바꾼 자리들. `Partial` · `Record<string>` 이
  남아 키 누락을 못 잡는 표가 아직 있습니까?

### P2 — 놓친 것

- 이 구조가 **약속하는데 지키지 못하는 것**이 있습니까?
  (검사기 이름 · 함수 이름 · 문서 문장 중 실제보다 넓게 말하는 것)
- 검사기 여섯 중 **0건으로 늘 통과**할 수 있는 것이 있습니까?
  각 검사기에 대조군을 넣었다고 주장하는데, 그 대조군이 진짜입니까?

---

## 4. 절대 하지 말 것

- **운영 DB 에 쓰지 마십시오.** 읽기만.
- **광고 로케일을 넓히지 마십시오.** `AD_OPENED_LOCALES` 는 `ko` 하나입니다.
  애드센스 위반은 계정 단위로 옵니다.
- **실제 광고·유료 AI 호출을 하지 마십시오.**
- `apps/naminglink/scripts/probe-*` 8개는 **읽기 전용 도구**입니다.
  돌려도 되지만 삭제·수정·제품 코드 편입은 안 됩니다.
- `apps/naminglink/scripts/verify-premium-test.mjs` 에 **다른 도구의 미커밋 수정**이
  있습니다. 되돌리지 마십시오.
- **Vercel Preview 에서 광고를 재지 마십시오.** Preview 값은 근거가 못 됩니다.

---

## 5. 회신 형식

결함마다 이렇게 적어 주십시오. **재현 절차가 없는 지적은 반영하기 어렵습니다.**

```
[P0|P1|P2] 한 줄 제목
  자리:   파일:줄
  증상:   무엇이 잘못되는가
  재현:   돌릴 명령 또는 심을 결함 (구체적으로)
  근거:   왜 이게 결함인가 — 어떤 약속이 깨지는가
  제안:   (선택)
```

그리고 마지막에 **이 셋을 갈라서** 판정해 주십시오. 저장소 규칙입니다.

```
결함        코드가 틀렸다
검사기 결함  코드는 맞는데 검사기가 못 잡는다 / 잘못 잡는다
환경 없음    돌릴 수 없었다 (통과가 아닙니다)
```

**「검사기 결함」이 이 의뢰의 본론입니다.** 초록불 여섯 개는 이미 있습니다.
그게 무엇을 보증하지 **못하는지**를 알고 싶습니다.

---

## 6. 범위 밖 (지적은 환영, 이 PR 에서 안 고침)

- 명세 단계 5–9: 검수 packet 발급 · `en` 사람 검수 · 비영어 문서 재생성 · 광고 개방
- 형제 앱 셋의 개명 이식
- `meaning_ko` 가 읽기와 같은 한자 410자 — 뜻 칸 채우기 (운영 DB 쓰기)
- `verify-premium-test.mjs:144` 의 낡은 `endsWith("奎")`

## 7. 함께 읽을 것

- `docs/GLOBAL_LOCALE_REVIEW_IMPLEMENTATION_SPEC.md` — **유일한 구현 기준**
- `docs/GLOBAL_LOCALE_REVIEW_DELIBERATION.md` — 동결된 협의 이력.
  배경 확인용입니다. **새 구현 기준으로 해석하지 마십시오.**
