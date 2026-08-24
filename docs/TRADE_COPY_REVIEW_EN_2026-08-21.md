# ② 거래 직결 문구 — `en` 사람 확인 목록 (2026-08-21)

_광고 개방 임계 경로의 두 번째 칸이다(`LOCALE_AD_STRATEGY_2026-08-21.md` §3.5).
**여기서 내 역할은 「무엇을 봐야 하는지」를 뽑는 것까지다.** 판정은 사람이 한다._

---

## 0. 범위를 어떻게 그었나

전략 문서 §3.1 ②의 정의를 그대로 쓴다 — **금액 · 환불 · 사업자 정보 · 결제 고시.
「705개가 아니라 거래에 직결되는 소수」.** 잎 705개 전수 검수와는 다른 일이다.

**뺀 것과 그 이유를 먼저 적는다.** 처음 자동 추출에서는 개인정보처리방침 §1·§3·§6이
함께 걸렸다. 셋 다 「address」·「email」·「payment」라는 낱말 때문에 걸린 것이고, 내용은
개인정보 처리·국외이전이지 거래 조건이 아니다. **정규식은 그물이지 울타리가 아니라서**
본문을 열어 보고 뺐다. 다만 §3(2)의 「결제·주문 거래 기록은 법정 기간 별도 보관」과
§8(개인정보 보호책임자)은 각각 전자상거래법·사업자 표시와 겹쳐 **곁가지**로 남긴다.

## 1. 기계가 이미 보는 것 — 여기는 사람이 다시 안 봐도 된다

| 검사기 | 무엇을 보장하나 |
| --- | --- |
| `verify-legal-prices.ts` | 약관·환불·요금의 **금액이 DB(`product_settings`)의 실제 판매가와 일치**하는가. 기대값을 스크립트에 박지 않고 DB를 진실로 삼는다 |
| `verify-checkout-consent.ts` | 결제 고시의 **항목 수**(DIGITAL 6 / MADE_TO_ORDER 7) · `**강조**` 쌍 수 · 한국어 원문 잔재 |
| `verify-legal-interpolation.mjs` | 사업자 값을 **박아 쓰지 않고 보간**하는가, 비한국어는 `romanize`를 통과하는가 |
| `verify-consent-locale` | 결제 고시가 **그 로케일로 전달**되는가 |

**그래서 사람이 볼 것은 「숫자가 맞나」가 아니다.** 숫자는 이미 DB와 대조된다.
사람만 할 수 있는 것은 **영어 문장이 그 조건을 정확히·오해 없이 말하는가**다.

## 2. 목록

### A. 금액 — 21문단

| 자리 | 절 | 문단 |
| --- | --- | --- |
| `legal-content/en.ts:37` | [terms] §4 Paid Services | 7 |
| `legal-content/en.ts:217` | [pricing] §3 Hanja Meaning-Matching Detailed Products | 4 |
| `legal-content/en.ts:226` | [pricing] §4 Unlock All Candidates | 2 |
| `legal-content/en.ts:233` | [pricing] §5 Global Digital PDF Products | 4 |
| `legal-content/en.ts:242` | [pricing] §6 Korean Name Merchandise | 3 |
| `legal-content/en.ts:250` | [pricing] §7 How Prices Are Announced | 1 |

가장 무거운 자리는 **terms §4**다. 한 절에 상품 다섯 갈래의 금액이 다 들어 있다
(₩2,900 · ₩990/US$1.99 · US$9.99 · ₩39,000~79,000 · US$39.90~79.90).

### B. 환불 — 15문단 (문서 전문)

`legal-content/en.ts:143`~`198`. **일부 절만 고르지 않았다** — 문서 전체가 환불 조건이다.

```
§1 General Principles (1)   §2 Hanja Detailed Reports (3)   §3 Unlock All Candidates (4)
§4 Global Digital PDF (2)   §5 Custom-Made Merchandise (3)  §6 Ad-Based Unlocking (1)
§7 Contact (1)
```

### C. 결제 고시 — 19항목 (`checkout-consent/en.ts`)

전자상거래법 제17조 제2항의 **청약철회 제한 고지**다. 이것이 빠지거나 뜻이 흐려지면
그 언어 구매자에게는 **고지를 하지 않은 것이 된다.**

| 상품 갈래 | 항목 |
| --- | --- |
| `DIGITAL` | Provider · Format · Requirements · Term of use · **Withdrawal** · Return costs + 동의문 · 안내 · 환불문 |
| `MADE_TO_ORDER` | Provider · Format · How it is made · **Shipping** · **Withdrawal** · Exchange/return · Return costs + 동의문 · 안내 · 환불문 |

굵게 표시한 셋이 실제로 분쟁이 나는 자리다.

### D. 사업자 정보 — 9항목 (`packages/core/src/company.ts`)

`en`이 보는 값(로마자 변환 뒤):

```
legalEntity       Platforest Inc.
representative    Gwak Eunha
businessNumber    197-86-02010
mailOrderNumber   통신판매업 신고 준비 중      ← 3.1 참고
address           13F #1309, Namseong Plaza, 130 Digital-ro, Geumcheon-gu, Seoul, Republic of Korea
customerCenter    070-4300-7141
email             platforest.inc@gmail.com
privacyOfficer    Gwak Eunha (CEO)
hostingProvider   Vercel Inc.
```

곁가지: `legal-content/en.ts:134` [privacy] §8 Privacy Officer (2문단).

### 합계

```
금액 21 · 환불 15 · 결제 고시 19 · 사업자 9 (+곁가지 2)   =  66
```

잎 705개가 아니라 **66자리**다. 이것이 전략 문서가 말한 「거래에 직결되는 소수」의 실측값이다.

## 3. 읽으면서 볼 것

숫자는 기계가 본다. 사람이 보는 것은 이 넷이다.

1. **조건이 조건대로 읽히는가** — 「once delivery begins」·「before carving begins」가
   *언제부터* 철회가 막히는지를 오해 없이 말하는가.
2. **한국 법을 영어로 인용한 자리** — 「Art. 17(2), Korean E-Commerce Act」가 영어 구매자에게
   실제로 무엇을 뜻하는지 전달되는가.
3. **같은 조건이 두 곳에서 다르게 적혀 있지 않은가** — 결제 고시(C)와 환불 정책(B)은
   같은 것을 두 번 말한다. 기계는 둘의 **일치**를 보지 않는다.
4. **화면과 문서가 어긋나지 않는가** — pricing §7이 「결제 전 화면에 다시 고지한다」고
   약속한다. 그 약속이 실제 화면과 맞는지는 눌러 봐야 안다.

---

## 3.1 목록을 뽑다가 나온 것 — 확인 필요 2건

**둘 다 코드를 읽어서 나온 것이다.** 다만 **증명하는 방법이 서로 다르다** — 하나는 화면을
열면 보이고, 하나는 화면을 열어서는 보이지 않는다. 그 차이를 각 항목에 적는다.
어느 쪽도 이 문서 브랜치에서 고치지 않는다.

### (1) `/en/contact`에 한국어 값이 그대로 나갈 수 있다 — **화면으로 판정한다**

```
contact/page.tsx:62   footer.mailOrderNumber 등 9항목을 DocBody 로 그대로 넘긴다
DocBody.tsx:38        fill() 은 {name} 을 갈아 끼우기만 한다 — romanize 도, 준비중 치환도 없다
```

`SiteFooter`는 그 둘을 한다(`SiteFooter.tsx:682`). **문의 페이지는 안 한다.**
그렇다면 영어 사용자가 문의 페이지에서 대표자·주소를 **한글로** 보게 된다.
사업자 표시는 전자상거래법 제10조 사항이라 §2-D와 같은 무게다.

### (2) 「준비 중」 치환이 한국어 문자열 **정확히 일치**에 걸려 있다 — **화면으로는 판정되지 않는다**

```
SiteFooter.tsx:682   if (trimmed === "통신판매업 신고 준비 중") return copy.values.mailOrderPending;
SiteFooter.tsx:683   if (trimmed === "사업자등록번호 준비 중")   return copy.values.registrationPending;
```

관리자 화면에서 이 문구를 한 글자라도 고치면 **비한국어 사용자에게 한국어가 그대로 나간다.**
조용히 깨지고, 화면은 멀쩡해 보인다. 이 저장소가 이미 아는 모양이다
(`known-value-tables-must-be-maps`).

**페이지를 열어서는 증명되지 않는다.** 지금 DB 문구가 정확히 일치하므로 화면은 정상으로
번역돼 나온다 — 즉 **초록불이 이 갈래를 덮는다.** 증명하려면 **변형 문자열**을 넣어
치환이 빠지는 것을 보여야 하고, 그 시험은 **운영 DB를 바꾸지 않는 자리**에서 해야 한다.
따라서 여기서는 **코드 근거로만 남기고**, 후속 코드 PR에서 시험과 함께 판정한다.

`mailOrderNumber`가 아직 번호가 아니라 「준비 중」인 것 자체는 **알려진 오픈 블로커**이고
이 목록의 결함이 아니다.

---

## 4. 안 한 것 · 후속 범위

**안 한 것**

- **화면으로 관측하지 않았다.** dev 서버(:3001)가 안 떠 있어 `/en/contact`를 못 받았다
  (HTTP 000). 3.1 (1)은 **관측 전까지 「그럴 것」이지 「그렇다」가 아니다.**
- **`ja`는 안 뽑았다.** 전략 문서 ④는 `en` 개방까지다.
- 이 목록은 **읽을 자리를 센 것**이고, 읽은 것이 아니다.

**후속 범위 — 이번 문서 커밋에 끌어들이지 않는다 (§14)**

- 3.1 (1)·(2)의 **고침은 별도 코드 PR**이다. 이 브랜치는 문서만 담는다.
- **형제 셋 조사**(inyeonlink · sajulink · dreamslink). 셋도 같은 구조라 같은 목록이 나올
  것이지만 **세어 보지 않았으므로 그렇다고 적지 않는다.**
- **치환을 지키는 검사기.** 3.1 (2)가 조용히 깨지는 갈래라 필요하지만, 그것을 지금 세우면
  「관문이 지켜지는 것보다 커지는」 자리로 다시 들어간다. **고침과 같은 PR에서 함께 낸다.**
