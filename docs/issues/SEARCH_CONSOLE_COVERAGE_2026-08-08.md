# 서치 콘솔 미색인 정리 — 2026-08-08 내려받기 (자료 기준일 2026-08-05)

> **폴더의 `(1)(2)(3)`은 중복이 아니다.** 사유가 다른 내려받기 넷이고, 사유는 폴더 이름이
> 아니라 각 폴더의 `메타데이터.csv` `문제` 칸에 있다. 걷어낼 중복은 없다.
>
> 판정은 **8월 5일** 자료다. 그 뒤 주소 구조를 손댔으므로, 아래는 **판정 당시**와
> **2026-08-11 현재 응답**을 함께 적는다. 둘을 안 가르면 이미 고친 것을 다시 고치게 된다.

## 한눈에

| 사유 | naming-link | inyeon-link | 성격 |
| --- | ---: | ---: | --- |
| 발견됨 - 현재 색인이 생성되지 않음 | 425 | 285 | 100% **한 번도 크롤링 안 됨**. 단 naming은 절반(205)이 지금 선언하지 않는 옛 주소다 |
| 중복 페이지, Google이 다른 표준 선택 | 32 | 22 | 대부분 **이미 리다이렉트로 정리됨** |
| 크롤링됨 - 현재 색인이 생성되지 않음 | 6 | 3 | 구글이 판단을 미룬 것 |
| ‘NOINDEX’ 태그에 의해 제외 | 8 | 1 | **전부 의도한 것** |
| **합계** | **471** | **311** | |

**710개(90.8%)가 「발견됨」 한 갈래다.** 나머지 셋을 다 합쳐도 72개다. 어디에 힘을 쓸지는
이걸로 정해진다.

> **읽는 법.** 아래에서 **자료로 확정되는 것**과 **추론**을 갈라 적었다. CSV가 증명하는 것은
> 「크롤링되지 않았다」·「그때 어떤 사유였다」까지이고, **구글이 왜 안 왔는지는 증명하지
> 않는다.** 추론에는 그렇게 표시했다.

---

## 1. 발견됨 - 색인 안 됨 — 710개 · 주소 결함이 아니다

**[자료] 두 도메인 모두 최종 크롤링이 `1970-01-01`이다 — 710개 전부, 예외 없이.** 구글이
주소를 알고는 있는데 **가지러 온 적이 없다.** 이건 추론이 아니라 CSV에 그대로 찍혀 있다.

**[자료] 표본을 열어 보니 주소 자체는 멀쩡하다.**

    naming-link  표본 10 → 200 자기 canonical 7 · 리다이렉트 3
    inyeon-link  표본 10 → 200 자기 canonical 9 · 리다이렉트 1

**[추론] 왜 안 왔는지는 자료가 말해 주지 않는다.** 로케일 23종에 고르게 퍼져 있고(각 7~21개)
경로가 `/guide/*`·`/about`·`/contact`·`/notice` 같은 글로벌 갈래 문서인 것을 보면, 개별 주소의
결함이 아니라 **크롤 우선순위가 낮게 잡혔거나 발견 단계에 머물러 있는 것**으로 보인다. 다만
「크롤 예산이 원인이다」라고 단정할 근거는 이 자료에 없다.

**어느 쪽이든 다음 행동은 같다**: sitemap 재제출로 다시 알리고, 대표 URL 8~10개를 골라 색인을
직접 요청해 크롤을 유도한다. 여기서 개별 주소를 손댈 것은 없다.

### 절반은 이미 없는 주소다 — sitemap과 대조해야 진짜 수가 나온다

**[자료] 발견됨 목록을 현재 sitemap과 맞대 보면 절반 가까이가 지금은 선언하지 않는 주소다.**

    naming-link   발견됨 425 → 지금도 선언 중 220 · 선언에 없는 옛 주소 205 (48%)
    inyeon-link   발견됨 285 → 지금도 선언 중 248 · 선언에 없는 옛 주소  37 (13%)

옛 주소들은 지금 301·308로 떨어진다. **구글이 다시 오면 저절로 정리된다** — 여기에 색인을
요청하면 리다이렉트를 따라가게 만드는 헛일이다.

**그래서 진짜 밀린 것은 710이 아니라 468이다**(naming 220 + inyeon 248). 두 도메인의 차이도
설명된다 — naming은 주소 구조를 크게 손봤고 inyeon은 덜 손봤다.

### 대표 URL — 한국어 갈래에서 실제로 고를 수 있는 것은 5개다

naming-link의 발견됨 중 로케일 접두어가 없는 주소는 16개인데, **그중 11개는 지금
`/en/…`으로 308된다.** 하위 무접두 주소는 `/en`으로 고정 리다이렉트하는 구조라, 그것들은
한국어 갈래가 아니라 **옛 링크가 남긴 자국**이다.

**[자료] 지금도 sitemap에 선언돼 있고 200으로 뜨는 한국어 갈래 미크롤 주소는 다섯이다.**

    경로                            서버 렌더 산문(자)   비고
    /korean-to-global                     3068         서비스 입력
    /guide/how-hanja-meaning              1996         가이드
    /hanja-meaning                        1992         서비스 입력
    /guide/how-korean-to-global           1747         가이드
    /guide/hanja                          1420         가이드(색인 허브)

    308 → /en/… 이라 대상 아님:
    /global-to-korean · /guide · /guide/how-global-to-korean ·
    /guide/how-hangul-transliteration · /guide/what-we-sell · /guide/what-you-can-buy ·
    /notice · /contact · /terms · /pricing · /stamp-order

뿌리(`/`)와 나머지 한국어 갈래(`/guide/hanja/*` 초성 14개·`/guide/hanja-basics`·
`/guide/avoid`·`/guide/reading`)는 발견됨 목록에 없다 — **이미 크롤링됐다.**

### 광고와 색인은 같은 화면에서 만나지 않는다

**[자료] 위 다섯 중 어느 것도 광고 화면이 아니다.** 서버 HTML에 `ins.adsbygoogle`도
슬롯 라벨도 없다. 광고 요청이 확인된 곳은 이름을 넣고 제출한 뒤의
`/hanja-meaning/result?id=…`이고, **그 화면은 `noindex`라 색인 요청 대상이 아니다**(실측 확인).

그러니 한국어 갈래를 앞세우는 이유를 「광고가 붙는 화면이라서」로 적으면 틀린다. 옳은 이유는
이것이다 — **광고는 한국어 서비스가 만들어 낸 실제 결과에만 붙고, 그 서비스의 설명·안내
콘텐츠가 먼저 발견·평가돼야 사이트 품질 판단의 바탕이 선다.** `ko`가 현재 유일한 광고 적격
로케일인 것도 같은 이유에서다.

**「도구 화면은 얇고 가이드는 두껍다」는 통념은 여기서는 맞지 않는다.** 위 표대로
`/korean-to-global`이 가장 두껍고 `/hanja-meaning`은 `/guide/how-hanja-meaning`과 거의 같다.
가장 얇은 것은 오히려 가이드인 `/guide/hanja`다. (산문 자수는 폼 라벨과 푸터까지 포함한
거친 값이라 **문서끼리 비교하는 데만** 쓸 것.)

---

## 2. 중복 - 구글이 다른 표준 선택 — 54개 중 31개는 이미 정리됨

가장 많이 바뀐 갈래다. 판정 뒤 손본 것이 여기에 반영돼 있다.

| | 판정 당시 | 지금 리다이렉트 | **아직 200** |
| --- | ---: | ---: | ---: |
| naming-link | 32 | **26** (301 24 · 308 2) | **6** |
| inyeon-link | 22 | 5 (308) | **17** |

정리된 것들의 모양:

    /{로케일}/guide/hanja/*     → 301 → /guide/hanja/*        한국어 전용 갈래로 거둠
    /{로케일}/guide/korean-name-basis → 308 → …/how-global-to-korean   경로 개명
    /{로케일}/guide/what-we-store     → 308 → …/no-storage             경로 개명
    /{로케일}/guide/how-it-works      → 308 → …/how-compatibility      경로 개명

**재크롤되면 저절로 사라진다.** 손댈 것 없다.

### 아직 열려 있는 23개 — 여기만 보면 된다

**naming-link 6개**

    /de/guide/what-we-sell
    /es/guide/what-we-sell
    /ms/guide/what-we-sell
    /es/guide/how-hangul-transliteration
    /kk/guide/what-we-dont-use
    /fr/notice

**inyeon-link 17개**

    /ar/guide/how-compatibility   /en/guide/how-compatibility
    /ja/guide/affinity            /mn/guide/affinity           /ru/guide/affinity
    /fr/guide/yongsin             /zh/guide/yongsin
    /ar/guide/true-solar-time     /de/guide/true-solar-time
    /fil/guide                    /pl/guide                    /pt/guide
    /ar/guide/no-storage          /ar/notice
    /en/about                     /en/compatibility            /it/contact

**[자료] 전부 200이고 자기 자신을 canonical로 선언하고 있다.** 즉 선언은 옳은데 **구글이
동의하지 않았다.** 그리고 무리를 지어 나온다 — `what-we-sell` 세 로케일(de·es·ms), `affinity`
세 로케일(ja·mn·ru), `/guide` 세 로케일(fil·pl·pt), `yongsin`·`true-solar-time` 각 두 로케일.

**[추론]** canonical과 hreflang 선언이 정상인데도 구글이 언어판들을 한 덩어리로 묶었다면,
남는 설명은 **그 문서들이 언어를 바꿔도 충분히 달라 보이지 않는다**는 쪽이다. 2026-08-10
애드센스 반려 사유(「한 벌짜리 화면을 여러 주소로」)와 같은 자리를 가리킨다. **다만 구글이
무엇을 보고 그렇게 묶었는지는 확인할 방법이 없다** — 설득력 있는 추론이지 확정 사실이 아니다.

지금 재심사를 막는 항목은 아니다. 다만 **재심사가 또 같은 사유로 거절되면** 2차 조치
(검수 로케일만 색인)의 근거가 바로 이 목록이다.

---

## 3. 크롤링됨 - 색인 안 됨 — 9개 중 6개만 남음

    naming-link  6 → 리다이렉트 3 · 아직 200: /hi/terms · /kk/terms · /km/terms
    inyeon-link  3 → 아직 200: /kk/guide/reports · /mn/guide/reports · /pt/guide/reports

**정상이니 놀라지 말 것.** 구글이 판단을 미룬 상태이고, 약관 같은 문서는 색인 가치가 낮아
흔하다. 리다이렉트된 3개는 `/{로케일}/guide/korean-name-basis`와 `/de/hanja-meaning`으로,
2번과 같은 정리에 함께 쓸렸다.

---

## 4. NOINDEX 제외 — 9개 전부 의도한 것

    naming-link  8  /login  (8개 로케일)
    inyeon-link  1  /compatibility/result

**손댈 것 없다.** 로그인과 결과 화면은 색인하지 않는 것이 맞다. 실제로 지금도 200 + noindex로
확인된다 — 선언과 동작이 일치한다.

---

## 그래서 다음 행동에 무엇이 바뀌나

이 자료는 `docs/POST_LAUNCH_CHECKLIST.md` A-0의 두 칸에 대한 답이다.

- **「옛 중복 URL의 리디렉션 확인」** — 확인됐다. naming 32개 중 26개가 이미 301/308이다
- **「구글 선택 canonical = 선언 canonical 표본 확인」** — 어긋난 것은 **23개**이고 목록이
  위에 있다. 전부 자기 canonical을 옳게 선언하고 있으므로 **선언을 고칠 자리가 아니다**
- **sitemap 재제출·색인 요청**은 그대로 하되, 겨냥은 발견됨 710개가 아니라 **지금도 선언 중인
  468개**다

### 색인 요청 8~10개 — 권장 목록

한국어 갈래에서 고를 수 있는 것이 다섯뿐이므로 다섯을 전부 넣고, 나머지는 **지금도 sitemap에
선언돼 있으면서 미크롤인** 글로벌 갈래에서 채운다.

    1  /korean-to-global                       한국어 · 가장 두껍다
    2  /hanja-meaning                          한국어 · 주력 서비스
    3  /guide/how-hanja-meaning                한국어
    4  /guide/how-korean-to-global             한국어
    5  /guide/hanja                            한국어 · 초성 14개로 뻗는 허브
    6  /en                                     글로벌 진입
    7  /en/global-to-korean                    글로벌 서비스
    8  /en/guide/how-global-to-korean          글로벌
    9  /en/guide/how-hangul-transliteration    글로벌
    10 /en/contact

**빼는 것과 이유.** `/notice`·`/contact`·`/pricing`·`/terms`·`/stamp-order`의 무접두 형태는
`/en`으로 308되므로 애초에 대상이 아니다. `/terms`는 다른 로케일 셋이 이미 「크롤링됐지만 색인
안 됨」이라 색인 가치가 낮게 잡혀 있다. `/hanja-meaning/result`는 `noindex`다.

`/en/guide/korean-name-basis`·`/en/guide/what-you-can-buy`·`/en/guide/reading`·
`/en/guide/hangul-spelling-basis`도 미크롤 목록에 있지만 **지금 sitemap에 없다** — 넣지 말 것.

## 이 문서를 검증한 이력

- **2026-08-11 외부 검토 둘이 CSV 원본으로 집계를 독립 재계산했고 한 자리도 어긋나지 않았다**
  (naming 471 · inyeon 311 · 합 782, 발견됨 710 전부 `1970-01-01`).
- 무접두 주소 수는 **16개**다. 한 검토가 36개로 셌는데, 세 글자 로케일 `fil`(20개)을 로케일로
  못 알아본 것이 원인이었다(16 + 20 = 36). 그쪽에서 원인까지 확인해 정정했다.
- **첫 판에서 틀렸던 것 둘**(외부 지적으로 고침):
  - 「`/hanja-meaning`은 광고가 나가는 화면」 — **아니다.** 광고는 제출 뒤 결과 화면에서
    나가고 그 화면은 `noindex`다
  - 「무접두 16개가 한국어 갈래 전체」 — **아니다.** 11개는 `/en`으로 308되는 옛 주소이고,
    진짜는 5개다
- 「지금 리다이렉트 26/5 · 아직 200 6/17」, 산문 자수, sitemap 대조는 **운영을 직접 두드려 얻은
  값**이라 CSV만으로는 검증되지 않는다. 재확인하려면 다시 재는 수밖에 없다.

## 자료를 다시 만들려면

내려받기 원본은 같은 폴더의 8개 디렉터리다. 정리에 쓴 스크립트는 임시본이라 저장소에 없다.
다시 필요하면 `메타데이터.csv`의 `문제`로 사유를 잡고, `테이블.csv`의 `URL,최종 크롤링`을
읽어 **현재 응답 코드와 canonical을 함께** 재면 된다 — 그 두 축이 없으면 이미 고친 것과
남은 것이 섞인다.
