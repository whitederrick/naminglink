# 재검증 의뢰 (2차) — 66f15c4 불합격분 다섯을 고친 뒤

- 대상: **`be765a1`** (`feat/locale-review-manifest`)
- PR: https://github.com/whitederrick/naminglink/pull/2
- 앞 판정: `66f15c4` **불합격** (Codex 재검증 · P0 다섯)
- 병합 조건: **Codex 와 Claude App 의 독립 재검증 전에는 병합하지 않는다.**

---

## 0. 지난번에 왜 뚫렸나 — 그리고 이번에 무엇을 바꿨나

지난 의뢰서는 「대조군이 진짜인가」를 봐 달라고 했습니다. **대조군은 전부 통과했고
우회는 다섯 남아 있었습니다.** 원인은 하나입니다.

> 대조군을 **내 구현을 보고** 만들었습니다. 그러면 같은 사각지대가 양쪽에 들어가서,
> 검사기는 초록불인데 우회는 그대로 있습니다.

이번에는 순서를 바꿨습니다.

```
① 코덱스의 결함 진술에서 공격을 먼저 썼다   scripts/verify-review-attacks.ts
② 다섯이 다 빨간불인 것을 확인했다
③ 그 뒤에 고쳤다
④ 판정은 종료 코드가 아니라 **출력 본문**으로 한다
```

④가 중요합니다. `exit 1` 은 「잡았다」가 아니라 「끝났는데 0이 아니다」입니다. 죽어도 1이고
파일이 없어도 1입니다. 지난 재검증에서 Claude App 이 그것으로 일곱 시험을 잘못 읽었고,
정직하게 중단 보고를 냈습니다. 그 규칙을 공격 파일에 박아 뒀습니다.

**공격 ④는 제가 처음에 틀리게 썼습니다.** 소스 문자열에 `failures +=` 가 있는지만 보고
초록불을 냈습니다. 실제로 자격증명을 뺀 자식 프로세스를 띄워 종료 코드를 보게 고쳤습니다.

---

## 1. 5분 안에 돌려 보기

```bash
git fetch origin && git checkout be765a1
cd apps/naminglink

# 공격 다섯 — 이게 본론입니다
npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-review-attacks.ts

# 검사기 여섯
npx tsx scripts/verify-locale-inventory.ts
npx tsx scripts/verify-locale-manifest.ts
npx tsx scripts/verify-regeneration-guard.ts
npx tsx scripts/verify-legal-publish-gate.ts
npx tsx scripts/verify-two-branch-copy.ts
npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-legal-source.ts
```

**`verify-legal-source` 는 자격증명 유무를 둘 다 돌려 주십시오.**
`--env-file=.env.local` 있으면 `exit 0`, 없으면 **`exit 2` + `CANNOT_RUN`** 이어야 합니다.

`scanText` 는 이제 `scripts/locale-table-scan.ts` 에 있습니다 — **밖에서 부를 수 있습니다.**
예전에는 검사기를 import 하면 본문이 통째로 돌고 `process.exit` 로 죽었습니다.

---

## 2. 고친 다섯

### P0-1 · artifact 1개 승인으로 약관 4종이 봉인됐다

`scripts/seal-locale-review.ts` — manifest 에 **적힌 것만** 대조하고 문서 **전체**를 봉인했습니다.

이제 **대조한 개수가 대상 개수와 같아야** 합니다. 「검사 0건은 실패」와 같은 자리입니다.

```
ko/legal 115개 중 1개만 기록 → 봉인 0건 · SealMismatchError
  "검수가 덮지 못한 문장이 114건 있다(대상 115 · 기록 1) … 일부만 검수하고 문서 전체를 봉인할 수 없다"
```

### P0-2 · en/docs 199개를 전부 origin 으로 위장할 수 있었다

`--fill-en` 이 **흔적을 남기지 않아** 직접 작성물과 산출물을 사후에 가릴 수 없습니다.
그래서 「가릴 수 없다」를 **「선언하게 하고 기본은 닫는다」**로 바꿨습니다.

```
scripts/locale-manifest.ts   ORIGIN_DOCS_EN: readonly { id, reason }[] = [];
```

목록에 **이유와 함께** 적힌 것만 `origin` 입니다. `EXCLUDED_TABLES` 와 같은 방식이고,
**지금 비어 있는 것이 옳은 상태**입니다.

> **확인 부탁**: 사람이 영어로 직접 쓴 en docs 가 실제로 있습니까? 있다면 목록이 비어 있는
> 것이 새로운 거짓 거부가 됩니다. 저는 판단할 자료가 없어 닫아 두었습니다.

### P0-3 · 정상 en/screen origin 이 거짓 거부됐다

**한 사실에 규칙 두 벌**이었습니다. `sourceLocaleFor` 는 `screen`·`consent` 를 전 로케일
`origin` 으로 보는데, 옛 `allowedOriginLocale` 은 `ko` 만 허용했습니다. 정상 `en` 검수
manifest 를 **아예 만들 수 없었습니다** — 광고 개방 상한까지 갈 길이 막힌 것입니다.

`originAllowed(scope, locale, artifactId)` 하나로 묶었습니다.

```
screen · consent   전 로케일 origin      ← 생성기 없는 직접 작성물
legal              ko 만
docs               en 만, 그중 ORIGIN_DOCS_EN 에 적힌 것만
```

**이건 P1-5(판정식 두 벌)를 고치면서 제가 새로 만든 결함입니다.**

### P0-4 · CANNOT_RUN 을 찍고 exit 0 으로 끝났다

감사기(`scripts/audit-verifiers.mjs:195`)는 **종료 코드 0을 가장 먼저 통과로 분류**하므로
`CANNOT_RUN` 문구를 보지도 않습니다. 동결 조건에 「CANNOT_RUN + 비정상 종료」라고 제가 적어
놓고 문구만 만들고 종료를 안 붙였습니다.

이제 `exit 2` 입니다. 감사기가 출력을 읽어 **빨간불이 아니라 「환경 없음」**으로 갈래를 잡습니다.

### P0-5 · 스캐너가 `["ko"]` 정적 계산 키를 놓쳤다

사각지대를 「계산으로 만드는 표」라고 적어 놓고 이걸 놓쳤습니다 — **계약이 자기 경계를
틀리게 말한 것**입니다. 대괄호가 붙었을 뿐 값이 지금 확정된 문자열입니다.

거르는 기준을 **문법이 아니라 「값을 지금 알 수 있는가」**로 바꿨습니다.

```
["ko"] · [`ko`]                          잡는다   ← 값이 확정됨
Object.fromEntries(LOCALES.map(...))     못 잡는다 ← 계약 밖, 손으로 등록
```

---

## 3. 함께 드러난 것 — 이쪽도 봐 주십시오

### ① 검사기를 밖에서 부를 수 없었다

`verify-locale-inventory.ts` 는 최상위에서 본문이 돌고 `process.exit` 로 끝납니다. 그래서
`scanText` 만 부르려고 import 하면 **검사기가 통째로 실행되고 거기서 프로세스가 죽습니다.**
공격을 쓰다가 그대로 걸렸습니다.

밖에서 시험할 수 없는 판정기는 **대조군을 자기 안에서만** 만들게 되고, 그것이 이번 우회
다섯이 통과한 구조적 자리입니다. `scanText` 를 `locale-table-scan.ts` 로 꺼냈습니다.

**다른 검사기에도 같은 문제가 남아 있는지** 봐 주시면 좋겠습니다.

### ② 대조군 셋이 옛 계약을 담고 있었다 (회귀로 잡힘)

`verify-locale-manifest.ts` 가 빨간불 3건을 냈습니다. 통과시키려고 약화하지 않고 새 계약에
맞춰 다시 썼습니다. 그중 하나가 이렇습니다.

```
이름: "en/docs 를 전부 origin 으로 적어도 잡는다"
본문:  locale: "vi"
```

**이름이 본문보다 넓게 말했습니다.** 그래서 en/docs 위장이 통하는 동안에도 초록불이었습니다.
이름을 본문에 맞추고, en 갈래를 실제 199개로 따로 세웠습니다.

---

## 4. 공격해 주실 것

**초록불 재확인은 필요 없습니다.** 아래를 부탁드립니다.

- **여섯 번째 우회.** 다섯을 막았을 뿐입니다. 특히 P0-1 의 완전성 검사(개수 대조)를 우회하는
  방법 — 같은 `id` 를 두 번 적으면? 없는 `id` 를 채워 넣으면?
- **새 거짓 거부.** `originAllowed` 가 정당한 기록을 막습니까? `ORIGIN_DOCS_EN` 이 비어 있는
  것이 실제로 옳습니까?
- **공격 파일 자체.** `verify-review-attacks.ts` 의 다섯이 **진짜 그 결함을 재는지**.
  제가 ④를 한 번 틀리게 썼으니 나머지도 의심해 주십시오.
- **`exit 2` 가 감사기에서 실제로 「환경 없음」으로 잡히는지.**
  `node scripts/audit-verifiers.mjs` 로 확인 부탁드립니다.
- **회귀.** 이번 변경으로 예전에 되던 것이 안 되는 자리가 있는지.

---

## 5. 판정과 회신

```
[P0|P1|P2] 한 줄 제목
  자리:   파일:줄
  증상:   무엇이 잘못되는가
  재현:   돌릴 명령 또는 심을 본문
  관측:   **출력 본문** (종료 코드만으로 판정하지 말 것)
  근거:   어떤 약속이 깨지는가
```

```
결함        코드가 틀렸다
검사기 결함  코드는 맞는데 검사기가 못 잡는다 / 잘못 잡는다
환경 없음    돌릴 수 없었다 (통과가 아니다)
```

**격리 복사본에서 검증해 주십시오.** 지난번에 다른 도구가 작업 트리를 옮겨 검증이 무효가
됐습니다. 대상은 브랜치 현재 상태가 아니라 **커밋 `be765a1`** 입니다.

---

## 6. 절대 하지 말 것

- 운영 DB 쓰기 · 광고 로케일 확대 · 실제 광고/유료 AI 호출
- `apps/naminglink/scripts/probe-*` 8개 — 읽기 전용 도구
- `apps/naminglink/scripts/verify-premium-test.mjs` — 다른 도구의 미커밋 수정
- Vercel Preview 에서 광고 측정

## 7. 제 검증 결과 (근거로 쓰지 마십시오)

`tsc` 0건 · `eslint` 0건 · 검사기 7종 `exit 0` · 스윕 2회 동일.

**이 값은 지난번에도 같았고, 그때 우회가 다섯 있었습니다.** 판정은 두 분 결과로 하십시오.
