# Naming-Link 글로벌 로케일 검수 구현 명세

> 상태: 구현 승인 대기  
> 작성일: 2026-08-20  
> 적용 범위: `apps/naminglink`  
> 협의 이력: [`GLOBAL_LOCALE_REVIEW_DELIBERATION.md`](./GLOBAL_LOCALE_REVIEW_DELIBERATION.md)

이 문서가 글로벌 로케일 검수, 번역 재생성 보호, 광고 개방 범위에 대한 단일 구현 기준이다.
협의 이력의 과거 문장과 충돌하면 이 문서를 따른다. 구현 중 새 사실이 나오면 결정 자체를 다시
열기보다 이 명세의 측정값·검사·실패 처리를 갱신한다.

## 1. 목표와 완료 상태

목표는 다음 네 가지다.

1. 사람이 직접 검수한 번역만 광고 개방의 후보가 되게 한다.
2. 검수 후 재생성·관리자 게시·파일 수정으로 실제 콘텐츠와 검수 기록이 갈라지지 않게 한다.
3. 기계가 검증할 구조·누락·혼입과 사람이 판단할 의미·자연스러움을 분리한다.
4. 현재는 `en`만 전 범위 검수하고 `ja`는 수요 또는 명시적 시장 투자 결정 전까지 보류한다.

구현 완료는 다음 조건을 모두 충족한 상태다.

- 권위 인벤토리, manifest, 검수지가 동일한 artifact 목록을 사용한다.
- 생성기와 관리자 게시가 검수된 콘텐츠를 조용히 바꾸지 못한다.
- `en`의 모든 필수 scope에 `보류=0`인 사람 검수 기록이 있다.
- manifest·로그·콘텐츠 해시·광고 개방 상수가 일치한다.
- 광고 개방은 별도 사용자 승인 없이는 실행되지 않는다.

## 2. 확정 결정

| 결정 | 구현 기준 |
|---|---|
| DEC-01 | 법률 콘텐츠는 DB 게시본이 있으면 DB, 없으면 파일을 선택한 뒤 판매 필터 전 전체 문서를 검수·해시한다. |
| DEC-02 | 모든 보호 상태를 쓰기 전에 판정한다. 검수 로케일 직접 지정은 전체 실패한다. `--all`은 보호 로케일을 제외하되 기준 원문 드리프트가 있으면 쓰기 전 전체 실패한다. |
| DEC-03 | 승인 manifest와 다른 검수 로케일 DB 게시본은 게시 전에 차단한다. 초안 저장은 허용한다. |
| DEC-04 | manifest는 검수 완료의 증거와 상한이다. `AD_OPENED_LOCALES`는 운영자가 실제로 광고를 연 부분집합이다. |
| DEC-05 | `en`만 전 scope 검수한다. `ja`는 분석 시작·색인 또는 명시적 시장 투자 결정이 생길 때 별도 승인한다. |

## 3. 범위

### 3.1 필수 scope

| scope | 콘텐츠 | 현재 기준 | 검수 형식 |
|---|---|---:|---|
| `screen` | 화면 문구와 로케일별 UI 표 | 현재 관측 242, 구현 직전 재측정 | 화면별 대조표 |
| `docs` | 안내·소개·공지 | 199 | 문서 병렬 읽기 |
| `legal` | 약관·방침 | 115 | 문서 병렬 읽기 |
| `consent` | 결제 고시·동의 문구 | 34 | 화면별 대조표 |

`screen=242`는 영구 상수가 아니다. 현재 getter 기준 관측값이다. 구현 직전에 권위 인벤토리로
다시 산출한 값이 검수 packet의 기준이 된다. `docs`·`legal`·`consent`도 동일 추출기로 재확인하며
추출 0건은 실패한다.

### 3.2 제외 범위

- 결제 후 생성되는 개별 PDF 본문 품질
- 현지 법률 적합성 보증
- `ja` 전체 사람 검수와 광고 개방
- 광고 이벤트 계측 체계 전면 개편
- 원어민이 없는 다른 로케일의 사람 검수 완료 처리

`legal`은 의미와 자연스러움만 검수한다. 로그에는 반드시 다음을 남긴다.

```text
문구의 의미·자연스러움 검수 완료 — 현지 법률 검토 아님
```

## 4. 진실의 원천과 해시

### 4.1 운영 콘텐츠 출처

```text
screen     TypeScript 로케일 getter·표
docs       src/lib/doc-content/<locale>.ts
legal      유효한 site_contents.published_content가 있으면 DB, 아니면 legal-content 파일
consent    src/lib/checkout-consent/<locale>.ts
```

법률 화면은 선택된 전체 문서에 `withSellablePricesOnly`를 적용한 결과다. 언어 검수는 필터 전 전체
문서를 대상으로 하고, 필터는 별도 불변식으로 검사한다.

```text
출력 문단은 입력 문단 집합의 부분집합
출력 제목은 입력 제목과 같거나 선행 절 번호만 다름
```

### 4.2 검수 기준과 생성 이력 분리

```text
reviewSourceHash       사람이 실제로 대조해 승인한 기준 원문
targetHash             사람이 승인한 대상 콘텐츠
generationProvenance   생성 mode·입력 locale·입력 hash
```

artifact별 규칙:

| 대상 | sourceKind | reviewSourceHash |
|---|---|---|
| 사람이 쓴 `en` docs | `origin` | 없음 |
| `--fill-en`으로 `ko`에서 만든 `en` docs | `translated` | 해당 `ko` artifact |
| 비영어 docs | `translated` | 승인된 `en` artifact |
| 비한국어 legal | `translated` | 해당 `ko` artifact |
| 화면·결제의 원문 artifact | `origin` | 없음 |
| 화면·결제의 번역 artifact | `translated` | 검수지에서 실제 대조한 원문 artifact |

`generationProvenance`는 manifest와 검수지에 모두 표시한다. 생성 이력은 검수 기준을 대신하지
않는다.

## 5. 권위 인벤토리

텍스트 정규식으로 문자열 수를 세지 않는다. 저장소의 `tsx` 환경에서 실제 getter와 로케일 표를
불러 재귀적으로 문자열 잎 경로를 산출한다.

필수 조건:

- `screen`의 getter·로케일 표 소비 지점을 등록부와 대조한다.
- 소비되지만 등록되지 않은 getter·표가 있으면 실패한다.
- `en`·`ja`·`vi`의 잎 경로를 비교한다. 의도된 원문 전용 차이만 선언한다.
- manifest, 검수지, `targetHash`가 같은 인벤토리 출력을 사용한다.
- packet 발급 시 인벤토리 버전과 개수를 기록한다.
- 발급 뒤 잎 경로 또는 값이 바뀌면 완료 처리를 거부한다.
- 대상 0건은 성공이 아니다.

현재 화면 관측값의 구성은 다음과 같다.

```text
i18n getter·표          225
i18n 밖 로케일 표        10
직접 두 갈래              7
현재 화면 재고           242
```

## 6. manifest 계약

위치:

```text
docs/locale-review/manifest.json
```

최소 구조:

```json
{
  "locale": "en",
  "scope": "docs",
  "inventoryVersion": "...",
  "artifacts": [
    {
      "id": "guide.some-key",
      "sourceKind": "translated",
      "reviewSourceHash": "...",
      "targetHash": "...",
      "generationProvenance": {
        "mode": "fill-en",
        "inputLocale": "ko",
        "inputHash": "..."
      }
    }
  ],
  "reviewer": "...",
  "reviewedAt": "...",
  "verdicts": {
    "modified": 0,
    "approved": 0,
    "deferred": 0
  }
}
```

규칙:

- `sourceKind=origin`이면 `reviewSourceHash`가 없어야 한다.
- `sourceKind=translated`이면 `reviewSourceHash`가 필수다.
- 모든 artifact에 `targetHash`가 필수다.
- `deferred > 0`이면 scope 완료가 아니다.
- 파일 표식과 사람이 읽는 로그는 보조 기록이다. 기계 판정의 기준은 manifest다.

## 7. 재생성 보호

대상 생성기:

- `scripts/translate-doc-content.ts`
- `scripts/translate-legal-content.mjs`

필수 동작:

1. 인자 없는 실행은 사용법 오류로 실패한다.
2. 전체 실행은 명시적인 `--all`만 허용한다.
3. 대상 전체의 보호 상태와 기준 원문 hash를 한 파일도 쓰기 전에 검사한다.
4. 검수 로케일 직접 지정은 쓰기 전에 전체 실패한다.
5. `--all`은 보호 로케일을 제외하고 제외 목록을 출력한다.
6. 제외된 보호 로케일의 `reviewSourceHash`가 바뀌었으면 쓰기 전에 전체 실패한다.
7. `--invalidate-review=<locale>`는 하나의 locale을 요구하고 `--all`과 함께 쓸 수 없다.
8. 비영어 docs는 `en` 검수 완료 뒤 기본 `--all` 경로로 정규화한다.
9. 검수 완료 뒤 보호 로케일의 `--from-ko`는 실패한다.

현재 생성기가 없는 `screen`·`consent`에는 재생성 잠금을 적용하지 않는다. 향후 생성기가 추가되면
보호 상태 판정과 `generationProvenance` 없이 실행할 수 없게 한다.

## 8. 관리자 법률 게시 보호

- 초안 저장은 허용한다.
- 검수 로케일의 새 게시본 hash가 승인 manifest와 다르면 게시 전에 실패한다.
- 관리자 화면에서 즉석 검수 무효화 버튼을 제공하지 않는다.
- 검수 폐기와 새 승인은 manifest 변경과 배포를 거친다.
- 현재 운영 DB에는 `legal.*` 게시본이 없으므로 파일이 실제 출처다.

오류에는 다음을 포함한다.

```text
locale · scope · 검수일 · 현재 hash · 승인 hash · 재검수 절차
```

## 9. 미번역 7건과 자동 검사

검수지 발급 전에 `locale === "ko" ? 한국어 : 영어` 형태의 사용자 노출 7건을 로케일별 자료구조로
옮긴다.

통과 조건:

- 사용자 노출 두 갈래 문자열 패턴 0건
- 새 표의 비영어 값이 동일 항목의 영어 값과 같은 건수 0건
- 정당한 동일 문자열은 `(artifact, locale, value, reason)`으로 선언
- 선언 없이 같은 값, 적용되지 않는 예외, 검사 대상 0건은 실패

추가 자동 검사:

- 문자 체계·한국어 잔재
- 다른 로케일 혼입
- 숫자·가격·고유명사·자리표시자 보존
- 빈 문자열·중복·항목 수
- 실제 모바일·데스크톱 잘림은 별도 렌더 검사

## 10. 사람 검수지

화면·결제 대조표:

```text
앱/화면 | artifact | 출처 | 한국어/기준 원문 | 번역문 | 문맥 | generationProvenance |
문제 유형 | 최종 판정 | 수정문 | 판정 근거 | 검수자 | 날짜
```

문서·법률 검수지는 산문을 문자열 표로 자르지 않고 문서와 절 단위로 병렬 표시한다.

```text
문제 유형   번역 없음 | 의미 오류 | 부자연스러움 | 용어 불일치 | 기타
최종 판정   수정 | 그대로 승인 | 보류
```

`보류`가 하나라도 남으면 해당 scope는 완료가 아니다.

## 11. 광고 개방 계약

역할:

```text
ADSENSE_SUPPORTED_LOCALES  Google 지원 범위
AD_OPENED_LOCALES          운영자가 실제로 광고를 연 범위
review manifest            사람 검수 완료의 증거와 개방 상한
```

불변식:

```text
AD_OPENED_LOCALES - {서비스 defaultLocale}
⊆ 모든 필수 scope 완료 · deferred=0인 manifest locale
```

- manifest 작성만으로 광고를 자동 개방하지 않는다.
- `en`을 목록에 넣는 작업은 사용자 별도 승인을 요구한다.
- 현재 `ad_events`는 광고 노출이 아니라 관문 원격측정이다.
- 개방 후 무효 트래픽은 AdSense 콘솔을 1차 자료로 관측한다.
- `AdBanner` 계측·`GATE_ENTERED` 분리·실제 provider 기록은 후속 작업이다.

## 12. `verify-premium-test` 계약

현재 워킹트리에는 Claude App이 먼저 수정한 `BASE_URL` 일원화가 있다. 유지하되 구현 승인 후 다음
준비 판정으로 완성한다.

```text
연결 실패·시간 초과                 CANNOT_RUN · dev 서버 필요
4xx·5xx 또는 HTML 아님              실제 실패 · HTTP 상태/콘텐츠 유형 출력
200 HTML이지만 Naming-Link가 아님    CANNOT_RUN · 다른 앱을 보고 있음
정확한 Naming-Link 200 HTML          비용 단계 진행 가능
```

- “dev 서버가 떠 있어야” 문구는 연결 실패 갈래에만 쓴다.
- “다른 앱을 보고 있다” 표식을 `audit-verifiers.mjs`의 환경 패턴에 추가한다.
- 실제 비용 호출은 사용자가 dev 서버와 비용을 별도로 승인한 뒤 실행한다.

## 13. 구현 순서

### 단계 1 — 기준선과 읽기 전용 측정

1. 작업 트리의 기존 사용자 변경과 외부 probe를 구분한다.
2. 권위 인벤토리 추출기를 만들고 현재 scope별 잎 경로와 개수를 산출한다.
3. 검수지·manifest·hash가 동일 인벤토리를 쓰는 계약 테스트를 만든다.
4. 기존 읽기 전용 운영 관측값을 기록하되 다시 쓰지 않는다.

완료 기준: 등록되지 않은 화면 getter·표가 없고 scope별 대상 0건이 아니다.

### 단계 2 — 기존 검사기 준비 판정

1. `verify-premium-test`의 서버 판정을 세 갈래로 완성한다.
2. `audit-verifiers.mjs`의 환경 패턴을 맞춘다.
3. 정적 구문 검사를 실행한다. 비용 검사는 실행하지 않는다.

완료 기준: 연결 실패·앱 실패·다른 앱 환경을 서로 다른 결과로 분류한다.

### 단계 3 — manifest와 보호 관문

1. manifest schema와 정규화·hash 도구를 만든다.
2. doc/legal 생성기의 사전 판정과 CLI 계약을 구현한다.
3. 관리자 legal 게시 전 차단을 구현한다.
4. `AD_OPENED_LOCALES` 부분집합 검사를 만든다.

완료 기준: 쓰기 전에 보호 위반이 실패하고 0건 비교는 성공하지 않는다.

### 단계 4 — 화면 결함과 자동 검사

1. 미번역 7건을 로케일별 표로 이동한다.
2. 두 갈래 재발 검사와 영어 동일값 예외 검사를 만든다.
3. 층별 script·leakage·숫자·가격·구조 검사를 실행한다.
4. 렌더 잘림 검사를 별도로 준비한다.

완료 기준: 선언되지 않은 영어 복사·두 갈래 사용자 문구·검사 0건이 모두 실패한다.

### 단계 5 — `en` 검수 packet

1. inventory version과 발급 시점 hash를 잠근다.
2. 화면·결제 대조표와 문서·법률 병렬 검수지를 생성한다.
3. `generationProvenance`와 법률 검수 한계를 표시한다.

완료 기준: packet의 artifact 집합이 manifest/hash 인벤토리와 완전히 같다.

### 단계 6 — 사람 검수

1. 사용자가 `en`을 직접 읽고 판정한다.
2. 수정은 대상 파일과 필요한 기준 원문에 반영한다.
3. 보류를 해결하고 발급 시점 이후 드리프트가 없는지 확인한다.

완료 기준: 네 scope 모두 `deferred=0`이고 reviewer·date·근거가 있다.

### 단계 7 — 비영어 docs 재생성

1. 승인된 `en`을 기준으로 미검수 비영어 docs 21개를 기본 `--all`로 재생성한다.
2. 로케일마다 `verify-locale-script`, `verify-locale-leakage`, docs 잎 199 구조 대조를 실행한다.
3. 실패한 로케일의 결과는 채택하지 않는다.

완료 기준: 21개 대상의 생성 결과와 검증 결과가 로케일별로 기록된다.

### 단계 8 — 승인 커밋 후보

1. 콘텐츠 hash, 검수 로그, manifest를 같은 변경 집합으로 만든다.
2. `AD_OPENED_LOCALES`는 사용자 승인 전 `ko` 그대로 둔다.
3. 전체 비비용 검사를 실행한다.

완료 기준: 광고 개방을 제외한 구현과 검수 증거가 리뷰 가능한 한 변경 집합에 있다.

### 단계 9 — 별도 사용자 승인 후 광고 개방

1. 사용자가 `en` 광고 개방을 승인한다.
2. `AD_OPENED_LOCALES`에 `en`을 추가한다.
3. 배포 후 AdSense 콘솔에서 노출·클릭·무효 트래픽 조정을 관측한다.

## 14. 실패 시 처리

- 보호 관문 실패: 아무 파일도 쓰지 않는다.
- inventory 드리프트: packet을 폐기하고 다시 발급한다.
- 번역 검사 실패: 해당 로케일 결과를 채택하지 않는다.
- 법률 게시 hash 불일치: 초안은 유지하고 게시만 거부한다.
- 렌더 검사 실행 불가: 성공으로 세지 않고 원인을 기록한다.
- 비용 검사 미승인: `CANNOT_RUN`으로 남기며 검수 완료 근거로 사용하지 않는다.

## 15. 구현 전 확인 사항

- [ ] 사용자가 이 명세에 따른 구현 시작을 승인함
- [ ] 기존 `verify-premium-test.mjs` 변경을 유지할지 승인함
- [ ] 운영 광고 1회 실측과 AI 호출 허용 여부가 별도로 정해짐
- [ ] dev 서버를 사용자가 띄울 시점이 정해짐
- [ ] 운영 DB는 읽기 전용 외 변경하지 않는다는 경계가 확인됨
- [ ] `en` 검수자는 사용자로 확정됨

## 16. 변경 관리

- DEC-01~05를 바꾸려면 사용자 의도·정책·안전 또는 운영 구조를 뒤집는 새 근거가 필요하다.
- 대상 개수 정정은 결정 변경이 아니다. 권위 인벤토리 결과로 갱신한다.
- 구현 중 발견한 코드 갈래는 기존 실패 원칙으로 처리하고 이 명세에 반영한다.
- 협의 이력 문서는 수정하지 않는다.
- 광고 확대·운영 DB 쓰기·비용 호출은 각각 별도 사용자 승인을 요구한다.
