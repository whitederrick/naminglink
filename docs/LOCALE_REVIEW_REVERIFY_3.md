# 재검증 의뢰 (3차) — 2차에서 나온 넷과, 그 김에 하나

- 대상: **`948c7a1`** (`feat/locale-review-manifest`)
- PR: https://github.com/whitederrick/naminglink/pull/2
- 앞 판정: `be765a1` **조건부 불합격** — Codex 결함 3건(P0 1 · P1 2) + Claude App 결함 1건(P0, 같은 자리)
- 병합 조건: **Codex 와 Claude App 의 독립 재검증 전에는 병합하지 않는다.**

---

## 0. 2차에서 두 분이 같은 곳을 짚었습니다

두 재검증이 **독립적으로 같은 P0** 을 냈습니다.

> `ORIGIN_DOCS_EN = []` 이 실제 영어 문서 이력과 모순된다. 비워 두면 en 검수를 시작하는
> 순간 사람이 영어로 쓴 문서에 **있지도 않은 ko 원문 해시**를 요구받는다.

제가 1차 고침에서 「가릴 수 없으니 선언하게 하고 기본은 닫는다」까지는 맞게 갔는데,
**목록을 비워 두고 「비어 있는 것이 지금의 옳은 상태다」라고 적었습니다.** 그런데 그 근거를
`en.ts` 머리말이 이미 반박하고 있었습니다 — *「소개·문의처럼 사람이 쓴 글과, 한국어 원문에서
옮겨 온 글이 함께 있다」*. 찾을 수 있는 자리에 답이 있었고 **안 찾았습니다.**

막는 쪽으로 틀린 것도 결함입니다. 그 방향의 결함은 초록불로 위장되기 때문에 더 오래 삽니다.

---

## 1. 5분 안에 돌려 보기

```bash
git fetch origin && git checkout 948c7a1
cd apps/naminglink

# 공격 여섯 묶음 — 이게 본론입니다
npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-review-attacks.ts

# 검사기 여섯
npx tsx scripts/verify-locale-inventory.ts
npx tsx scripts/verify-locale-manifest.ts
npx tsx scripts/verify-regeneration-guard.ts
npx tsx scripts/verify-legal-publish-gate.ts
npx tsx scripts/verify-two-branch-copy.ts
npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-legal-source.ts

# 감사기 통합 경로 — 2차 P1 이 「증명되지 않았다」고 한 자리
cd .. && node scripts/audit-verifiers.mjs --filter legal-source
node scripts/audit-verifiers.mjs --filter zzz-nothing      # 실행 0회 → exit 1 이어야 합니다
node scripts/audit-verifiers.mjs --filter audit-pdf-glyphs # 갈음 불성립 → exit 1 이어야 합니다
```

**판정은 종료 코드가 아니라 출력 본문으로 부탁드립니다.** `exit 1` 은 「잡았다」가 아니라
「끝났는데 0이 아니다」입니다 — 죽어도 1이고 파일이 없어도 1입니다.

### 제 쪽 실측 (`948c7a1`)

```
공격 여섯 묶음                          exit 0   ⑥번 2차 재검증분 넷 포함
검사기 다섯 (inventory·manifest·        전부 exit 0
  regeneration·publish-gate·two-branch)
verify-legal-source (자격증명 없음)     exit 2 + CANNOT_RUN
audit-verifiers --filter legal-source   실행 1회 · 못 돎 1   ← 감싸짐으로 사라지지 않는다
audit-verifiers --filter zzz-nothing    exit 1   「실행 0회다. 초록불을 낼 수 없다」
audit-verifiers --filter audit-pdf-…    exit 1   「갈음할 결과가 없다」
전수 스윕 97개                          통과 95 / 못 돎 2 / 감싸짐 3 / 빨간불 0
```

못 돎 2건은 **환경이 없는 것이고 그렇게 표시됩니다** — 빌드 산출물 없음, Supabase 자격증명
없음. 감싸짐 3건은 `audit-pdfs.mjs` 가 **선언으로** 갈음하고 그 자신이 통과한 것입니다.

**자격증명이 있는 환경에서 `verify-legal-source` 가 `exit 0` 인지는 제가 못 봤습니다.**
2차 때 확인해 주신 값이 그대로 유효한지 함께 봐 주시면 좋겠습니다.

---

## 2. 고친 넷

### P0 · `ORIGIN_DOCS_EN` 을 이력으로 채웠습니다

`scripts/locale-manifest.ts`

`--fill-en` 은 **없는 키만** 채우므로 지금 파일만 봐서는 갈리지 않습니다. 그래서 `en.ts` 가
처음 생긴 커밋과 **그 부모의 화면 소스**를 대조했습니다.

```
df1c6b4 시점 en.ts 의 절     about · notice · contact · notices 메타
그 문장이 부모 JSX 에 있나    있다 — about/contact/notice/page.tsx · lib/notices.ts
guide 는                     df1c6b4 에 없다. 뒤에 ko 에서 옮겨 왔다(eae9acb…acb2ea7)
```

en/docs 잎 199개가 이렇게 갈립니다.

```
docs.about.    29 ┐
docs.contact.  24 ├ origin 78   사람이 영어로 쓴 것
docs.notice.    4 │
notices.       21 ┘
docs.guide*   121   translated  ko 에서 옮긴 것
```

**여기서 봐 주실 것:** 문장 일부는 부모에서 그대로 찾히지 않습니다. 다른 것은 `**강조**`
표기와 `{email}` 자리표뿐이고 본문은 같습니다(예: `choose and understand Korean names`,
`two business days`). 제가 그 판단을 느슨하게 한 것은 아닌지 봐 주십시오.

**`guide` 를 넣지 않은 것이 이 목록의 핵심입니다.** 안내 13편이 여기 들어오면 옮겨 온 글이
원문으로 둔갑합니다.

### P1 · 공격 ④ 가 격리 복사본에서 크래시하던 것

`scripts/verify-review-attacks.ts`

`process.cwd()/node_modules/tsx/dist/cli.mjs` 로 박아 둬서, 워크트리에서는 제품 검사를
돌리기도 전에 `MODULE_NOT_FOUND` 로 죽었습니다. **공격이 크래시를 결함으로 셀 뻔했습니다.**

모듈 해석(`createRequire(...).resolve("tsx/package.json")`)으로 찾게 바꿨고, 그 위에
**「공격이 제품 검사를 실제로 돌렸다(크래시가 아니다)」를 시험으로 세웠습니다.**

### P2 · 중복 artifact id 와 목록 자체 검사

`scripts/locale-manifest.ts`

- 같은 `(locale, scope)` 안에서 **같은 artifact id 를 두 번** 적으면 잡습니다. 판정 수를
  채우는 통로였습니다.
- `ORIGIN_DOCS_EN` **목록 자체**를 검사합니다(`originDocsEnErrors`). 이유가 비었거나
  인벤토리에 없는 좌표를 적으면 잡습니다 — 죽은 좌표는 오래 남아 근거처럼 보입니다.
  이 검사는 manifest 와 무관하게 **늘** 돕니다.

### P1 · 감사기 통합 경로 — 지적보다 한 겹 더 나빴습니다

`scripts/audit-verifiers.mjs`

「`--filter` 하면 감싸짐으로 처리돼 실행 없이 `ALL PASS` 가 난다」고 하셨는데, 파 보니
원인이 더 깊었습니다.

```
naminglink/verify-legal-source.ts  —  감싸짐 ← naminglink/verify-review-attacks.ts
```

**제 공격 파일이 제품 검사기 하나를 스윕에서 통째로 사라지게 했습니다.** 게다가 공격은 그
검사기를 **자격증명을 일부러 빼고** 돌립니다 — 「못 돎이 못 돎으로 갈리는가」를 보는 것이지
제품을 검사한 게 아닙니다. 갈음할 수 없는 실행으로 갈음하고 있었습니다.

원인은 「**부르면 감싼 것**」이라는 규칙입니다. 부르는 것과 갈음하는 것은 다릅니다. 넷을
고쳤습니다.

```
① 감싸짐은 감싼 쪽이 그렇게 **선언**할 때만          // AUDIT_WRAPS: audit-pdf-layout.py
   죽은 선언·겹친 선언·자기 자신 선언은 잡는다
② 갈음은 감싼 쪽이 **이번 실행에서 통과**했을 때만    아니면 빨간불
   감싼 쪽이 환경이 없어 못 돌았으면 → **못 돎**      (없는 결함을 신고하지 않는다)
③ 실행 0회면 초록불을 낼 수 없다                     「검사 0건은 실패」를 러너 자신에게도
④ 출력의 `CANNOT_RUN` 토큰을 실제로 읽는다            계약을 적었으면 읽는 쪽에 그 계약이 있어야
```

④ 는 곁가지로 나온 것입니다. `verify-legal-source.ts:53` 이 *「0이 아닌 코드로 끝내면
감사기가 출력의 `CANNOT_RUN` 을 읽어 환경 없음으로 갈래를 잡는다」* 고 계약을 적어 뒀는데
**감사기에 그 토큰이 없었습니다.** 실제로 갈린 것은 우연히 함께 찍히던 「환경변수」 때문이었고,
그 문장을 다듬는 날 조용히 빨간불로 바뀝니다.

②·③ 에는 대조군을 붙였습니다(`WRAP_CONTROL`) — 판정기를 고쳐 놓고 그 판정기가 사는지 안 세면
다음에 같은 자리로 돌아옵니다.

### 덤 · 전수 스윕이 환경 없음을 결함으로 세고 있었습니다

위 넷을 고치고 전수 스윕(97개)을 돌렸더니 빨간불이 하나 남았습니다.

```
✗ naminglink/audit-bundle-secrets.mjs — exit 1
    .next/static 이 비어 있다 — 먼저 빌드할 것
```

**결함이 아니라 「빌드를 안 했다」입니다.** 그런데 `exit 1` 로 끝내서 「번들에 비밀이 샌다」와
같은 칸에 들어갔습니다. 진짜 결함과 섞이면 사람은 빨간불을 무시하는 법부터 배웁니다.

감사기에 정규식을 더하지 않고 **그 검사기가 계약을 지키게** 고쳤습니다 —
`verify-legal-source.ts` 가 세운 그 계약(`CANNOT_RUN` 을 적고 0이 아닌 코드로 끝낸다)입니다.
같은 파일이 **네 앱에 복제돼 있어 넷 다** 고쳤습니다. 한 앱만 고치면 형제 셋에서 같은 거짓
빨간불이 남습니다.

---

## 3. 특히 봐 주셨으면 하는 것

1. **`ORIGIN_DOCS_EN` 78개가 정말 사람이 쓴 것인가.** 제 대조 방법(부모 커밋 JSX 문자열)이
   느슨하지 않은지. 반대로 **`guide` 121개 중 사람이 쓴 것이 섞여 있지는 않은지.**
2. **접두사 판정이 넓지 않은가.** `originAllowed` 가 `startsWith` 입니다. 끝점을 찍었지만
   (`docs.about.`), 접두사 방식 자체가 여는 문이 있는지 봐 주십시오.
3. **`AUDIT_WRAPS` 선언식이 새 구멍이 아닌가.** 이제 아무 검사기나 「내가 저것을 감싼다」고
   적으면 그 검사기를 스윕에서 뺄 수 있습니다. 죽은 선언·겹친 선언·자기 선언은 막았는데,
   **거짓 선언**(부르지도 않으면서 감쌌다고 적는 것)은 아직 안 막았습니다. 막아야 합니까?
4. **실행 0회 관문이 정상 사용을 막지 않는가.** `--filter` 로 좁혀 쓰는 흐름이 있으면
   알려 주십시오.
5. 2차에서 「검사기 결함 0건」이 나왔는데, 제가 그 뒤로 감사기를 크게 고쳤습니다.
   **거기서 새로 심은 것이 없는지.**
6. **`CANNOT_RUN` 을 못 돎으로 읽게 한 것이 새는 문이 아닌가.** 이제 어느 검사기든 출력에
   그 토큰을 적고 0이 아닌 코드로 끝내면 「못 돎」이 됩니다. 진짜 실패를 그렇게 감출 수
   있습니다. 못 돎이 통과로 세어지지는 않지만(합계에 따로 찍힙니다), 봐 주십시오.

---

## 4. 아직 안 한 것

- **en 검수를 실제로 시작하지 않았습니다.** 이 고침은 「시작하면 걸릴 자리」를 없앤 것이고,
  78개를 origin 으로 적은 manifest 를 실제로 만들어 본 것은 아닙니다.
- `docs.guide` 121개가 정말 전부 옮겨 온 것인지, **잎 하나하나로는 확인하지 않았습니다.**
  절 단위(`guide` 가 df1c6b4 에 없었다)로만 판정했습니다.
