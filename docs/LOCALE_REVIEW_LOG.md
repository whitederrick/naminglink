# 로케일 검수 기록

> **무엇을 사람이 읽어 봤는가**를 적는다. 이 저장소의 번역은 **기계 번역이며 원어민 감수를
> 거치지 않았다**(안내 문서에도 그렇게 밝혀 두었다). 그 사실과 「검수했다」를 섞지 않기 위해
> 기록을 따로 둔다.

## 왜 있는가 (2026-08-11)

애드센스 정책 위반(「가치가 별로 없는 콘텐츠」)을 정리하면서 **「구글이 지원하는 언어」와
「사람이 검수한 언어」를 다른 개념으로** 갈랐다(`apps/naminglink/src/lib/ads.ts`).

- `ADSENSE_SUPPORTED_LOCALES` — 구글 게시자 제품이 광고를 지원하는 언어. 우리 23개 중 19개.
- `AD_OPENED_LOCALES` — 운영자가 **실제로 광고를 연** 언어. (2026-08-20 이전 이름:
  `HUMAN_REVIEWED_LOCALES`. 형제 셋은 아직 옛 이름을 쓴다.)
- `docs/locale-review/manifest.json` — **사람이 검수를 마친** 언어. 기계 판정의 기준이자
  광고 개방의 **상한**이다. 이 문서는 그 옆의 사람이 읽는 서술이다.

**지금 상태는 이렇다.**

```text
AD_OPENED_LOCALES     { ko }        운영자가 연 것
manifest.json         (아직 없음)   번역 검수를 마친 것 — 하나도 없다
```

둘이 다른 이유는 **`ko`가 manifest 에 들어가지 않기 때문**이다. `ko`는 번역이 아니라 원문이라
번역 검수 행을 가질 수 없다. 그래서 불변식에서 원문 로케일을 빼고 비교하며, 그 예외 목록은
손으로 적지 않고 `services.ts`의 `defaultLocale`에서 파생한다.

```text
AD_OPENED_LOCALES − {원문 로케일} ⊆ 모든 필수 scope 완료 · 보류 0 인 manifest 로케일
```

부분집합이지 완전 일치가 아니다. **「검수는 끝냈지만 색인을 고친 뒤에 열겠다」가 정상 상태**이기
때문이다 — manifest 는 켤 수 있는 것의 상한이고 상수는 실제로 켠 것이다.

처음에는 `HUMAN_REVIEWED_LOCALES`에 지원 19개 전부를 넣어 두었다. **이름은 「사람 검수」인데
값은 아무도 읽어 보지 않은 19개**였고, 그 상태로 승인 뒤 `NEXT_PUBLIC_AD_MODE=live`로 켜면
미검수 언어 열아홉에 한꺼번에 광고가 열린다. 외부 검토가 그 자리를 짚었고(2026-08-11),
이름이 지키지 못하는 약속을 하고 있었다는 것이 맞다.

한국어는 번역이 아니라 원문이라 검수 대상이 아니다 — 그래서 목록에 있다.

**색인 범위와는 별개다.** 미검수 로케일의 sitemap·색인은 그대로 두고 광고만 좁혔다. 같은
사유로 다시 거절되면 그때 색인 축소(sitemap 제외·noindex·hreflang 재구성)를 검토한다.

## 기록

| locale | reviewer | reviewedAt | 검수 범위 | 비고 |
|---|---|---|---|---|
| ko | — | — | 원문 | 한국어는 번역이 아니라 원문이다. 검수 대상이 아니다 |

_아직 사람이 검수한 번역 로케일은 없다. 한 줄도 지어내지 말 것 — 이 표의 값이 광고 적격과
색인 범위를 정한다._

## 넣는 법

> **2026-08-20에 구조가 바뀌었다.** 이 문서는 이제 **사람이 읽는 서술**이고, 기계 판정의 기준은
> `docs/locale-review/manifest.json`이다. 절차 전체는
> [`GLOBAL_LOCALE_REVIEW_IMPLEMENTATION_SPEC.md`](./GLOBAL_LOCALE_REVIEW_IMPLEMENTATION_SPEC.md)에
> 있다. 아래는 그 요약이다.
>
> `apps/naminglink`의 상수 이름도 `HUMAN_REVIEWED_LOCALES` → **`AD_OPENED_LOCALES`**로 바뀌었다.
> 옛 이름은 `ko`에 대해 거짓이었다 — `ko`는 원문이라 번역 검수를 받은 적이 없다. 형제 셋은 아직
> 옛 이름을 쓴다.

1. 검수 packet을 발급한다 — 대상 목록은 권위 인벤토리가 만든다
   (`apps/naminglink/scripts/locale-inventory.ts`). 발급 시점의 해시가 함께 잠긴다.
2. 그 언어로 **실제 화면과 문서**를 훑는다. 필수 scope는 넷이다 —
   `screen` · `docs` · `legal` · `consent`.
3. 문장이 그 언어로 자연스러운가, 뜻이 원문과 맞는가, 용어가 한 문서 안에서 한 이름으로
   불리는가를 본다(기계 번역이 가장 자주 틀리는 자리다 — `docs/I18N_DOC_CONTENT.md` §3).
   판정은 **문제 유형**(번역 없음·의미 오류·부자연스러움·용어 불일치·기타)과 **최종
   판정**(수정·그대로 승인·보류)을 나눠 적는다. `보류`가 하나라도 남으면 그 scope는 완료가 아니다.
4. `legal`은 의미와 자연스러움만 본다. 로그에 한계를 반드시 남긴다 —
   「문구의 의미·자연스러움 검수 완료 — 현지 법률 검토 아님」.
5. 위 표에 줄을 더하고, 같은 변경에서 `manifest.json`을 갱신한 뒤
   `npx tsx scripts/seal-locale-review.ts`로 봉인을 다시 만든다.
6. **광고를 여는 것은 별개의 결정이다.** manifest에 줄을 더하는 것만으로 광고가 켜지지 않는다 —
   `AD_OPENED_LOCALES`를 사람이 고쳐야 하고, 그것은 사용자 승인 사항이다.
7. 검사기를 돌린다.

```text
npx tsx scripts/verify-locale-inventory.ts     대상 목록이 실제 화면 전부를 담았는가
npx tsx scripts/verify-locale-manifest.ts      manifest ↔ 콘텐츠 ↔ 광고 상수가 어긋나지 않는가
npx tsx scripts/verify-legal-publish-gate.ts   봉인이 manifest 와 같은가
node ../../scripts/verify-ads-locale-policy.mjs --base <주소>
```
