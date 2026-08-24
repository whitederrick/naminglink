# ② 거래 직결 문구 en 검수 — 결과와 반영 (2026-08-24)

_`TRADE_COPY_REVIEW_EN_2026-08-21.md` 가 뽑은 66자리를 사람이 전부 읽고 판정했다._
_판정은 사용자가, 반영 여부는 Claude 가 정했다. 반영하지 않은 것도 이유와 함께 남긴다._

## 1. 숫자

```
검수 판정   좋음 13 · 의심 52 · 고쳐야 함 1 · 미판정 0   (66/66)
반영        채택 30 · 수정 채택 22 · 그대로 13 · 별도 1
```

**「수정 채택」은 제안의 뜻은 받되 그대로 넣으면 깨지는 것을 고친 것이다.**
이유는 넷이고, **한 자리가 둘 이상에 걸리기도 한다**(그래서 아래 합이 22를 넘는다).

| 무엇 | 몇 | 왜 |
| --- | --- | --- |
| `₩` → `KRW` 표기 되돌림 | 10 | `verify-legal-prices.ts` 가 인정하는 표기에 `KRW 2,900` 이 없다. 상품표 기준 유효 금액은 `₩2,900`·`2,900원` 두 가지뿐이고, 표기를 바꾸려면 나머지 21개 로케일과 검사기를 함께 바꿔야 한다 — 번역 품질과는 다른 결정이라 이번 판에서 뺐다 |
| `**강조**` 복원 | 3 | 하필 「철회가 제한된다」를 감싼 것이다. `verify-checkout-consent.ts` 가 한국어 원문과 쌍 수를 맞추고, 화면에서도 그 문장만 굵게 나온다 |
| 「Korean」 복원 | 4 | `Electronic Commerce Act` 만 적으면 영어 독자는 어느 나라 법인지 알 수 없다 |
| 문장 다듬기 | 6 | 제안이 원문보다 흐려진 자리. `B-2-3`·`B-4-2` 의 「the download period after the 24-hour storage period」 는 같은 말을 두 번 하고, `C-MADE_TO_ORDER-info-4` 의 「international orders are shipped internationally」 는 동어반복이다. `A-pricing3-3`·`A-pricing5-1` 은 `Saju (Four Pillars)` 주석을 되살렸다 — 영어 독자에게 `saju` 만으로는 통하지 않는다 |

그리고 **원문을 되살려 다시 쓴 것이 2건** 있다 — `A-terms4-1` 과 `A-terms4-3`. 제안이 「…are as follows:」 로 끝나는데,
한국어 원문은 **한 문단 안에 상품 ①②③(또는 ④⑤⑥)과 금액이 다 들어 있다.** 그대로 넣으면
약관에서 ₩2,900·₩4,900·₩9,900 과 US$9.99·US$2.99·US$1.99 가 사라진다.
제안의 말투는 받고 **목록은 원문대로 유지**해 다시 썼다.

## 2. 검증

고치기 **전** 기준선을 잡고 같은 검사를 뒤에 다시 돌렸다 — 전후 모두 초록이어야 내 수정이 깨지 않은 것이다.

```
verify-checkout-consent.ts   전 exit 0 → 후 exit 0   (23로케일 × 2종)
verify-legal-prices.ts       전 exit 0 → 후 exit 0   (금액을 DB 상품표와 대조)
validate-legal-content.ts    후 exit 0
verify-legal-publish-gate.ts 후 exit 0
tsc --noEmit                 후 exit 0
영어 파일의 한글 잔재         본문 0건 (주석 4줄만)
```

## 3. 문구로 풀 수 없는 것 — `/contact` 가 사업자 값을 변환 없이 그린다

`D-mailOrderNumber` 를 「고쳐야 함」으로 받은 것이 맞았다. 다만 **문구 문제가 아니라 배선 문제**다.
운영 화면에서 확인했다 — `https://naming-link.com/en/contact` 가 지금 이렇게 나온다.

```
Mail-order sales no. — 통신판매업 신고 준비 중
Address              — 서울특별시 금천구 디지털로 130, 13층 1309호 (가산동, 남성프라자)
Privacy officer      — 곽은하(대표)
```

푸터는 `SiteFooter.tsx` 의 `localizeFooterValue` 로 **로마자 표 + 「준비 중」 로케일 문구**를 거치는데,
`app/[locale]/contact/page.tsx:62` 는 `footer.mailOrderNumber` 를 **날것으로** 넘긴다.
주소·책임자는 로마자 표에 값이 **이미 있는데** 그 표를 안 거친다.

- 22개 비한국어 로케일 전부 해당한다.
- 형제 앱도 같은 모양이다(`apps/dreamslink/src/app/[locale]/contact/page.tsx:60` 확인).
- 고치려면 `localizeFooterValue` 를 공용 모듈로 빼야 한다. 지금은 클라이언트 컴포넌트 안에 있고
  「준비 중」 문구 23벌도 그 안에 있다 — 같은 규칙을 두 벌로 적지 않으려면(§6) 옮기는 것이 맞다.

**이번 판에 넣지 않았다.** 네 앱 × 23로케일 배선이라 번역 반영과 성격이 다르고,
여기서 함께 하면 이 커밋이 무엇을 고쳤는지 흐려진다.

## 4. 아직 남은 큰 것 — 나머지 21개 언어

**en 은 22개 언어의 본이다.** 이번에 en 을 52자리 고쳤다는 것은,
같은 자리들이 21개 언어에도 옛 문장에서 옮겨져 있다는 뜻이다.
다시 낼지 말지는 비용이 드는 결정이라 사용자가 정한다(§12).

---

## 5. 자리별 기록

## C. 결제 고시

### C-DIGITAL-info-1 — 검수 `좋음` · 반영 `그대로`

`checkout-consent · 디지털 콘텐츠` · Provider (원문 「제작·공급자」)

```
KO   Naming-Link
전   Naming-Link
```

### C-DIGITAL-info-2 — 검수 `의심` · 반영 `채택`

`checkout-consent · 디지털 콘텐츠` · Format (원문 「상품 형태」)

```
KO   디지털 콘텐츠(웹 화면 또는 PDF 문서). 결제 후 즉시 제공됩니다.
전   Digital content (on-screen result or PDF), delivered immediately after payment.
후   Digital content (web page or PDF document). Available immediately after payment.
```

### C-DIGITAL-info-3 — 검수 `의심` · 반영 `채택`

`checkout-consent · 디지털 콘텐츠` · Requirements (원문 「이용 조건」)

```
KO   인터넷 브라우저 또는 PDF 열람이 가능한 기기. 별도 설치가 필요하지 않습니다.
전   A browser or any device that opens a PDF. No installation needed.
후   Any device with a web browser or PDF reader. No additional software installation is required.
```

### C-DIGITAL-info-4 — 검수 `의심` · 반영 `채택`

`checkout-consent · 디지털 콘텐츠` · Term of use (원문 「이용 기간」)

```
KO   제한 없음. 내려받은 파일은 이용자가 보관합니다.
전   No limit. You keep the file you download.
후   No restrictions. Users may retain downloaded files.
```

### C-DIGITAL-info-5 — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 디지털 콘텐츠` · Withdrawal (원문 「청약철회」)

```
KO   제공이 시작되기 전에는 전액 환불. 시작된 뒤에는 단순 변심에 의한 철회가 제한됩니다(전자상거래법 제17조 제2항).
전   Full refund before delivery begins. Once it has begun, withdrawal for a change of mind is restricted (Art. 17(2), Korean E-Commerce Act).
후   A full refund is available before provision of the content begins. Once provision has begun, the right to cancel due to a change of mind is restricted (Article 17(2), Korean E-Commerce Act).
제안 A full refund is available before access to the content begins. Once access has begun, the right to cancel due to a change of mind is restricted (Article 17(2) of the Electronic Commerce Act).
```

### C-DIGITAL-info-6 — 검수 `의심` · 반영 `채택`

`checkout-consent · 디지털 콘텐츠` · Return costs (원문 「교환·반품 비용」)

```
KO   없음. 디지털 콘텐츠라 배송이 없습니다.
전   None — digital content, nothing is shipped.
후   Not applicable. This is digital content, so no physical delivery is required.
```

### C-DIGITAL-consent — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 디지털 콘텐츠` · 동의문 — 실제로 체크를 받는 문장

```
KO   이 상품은 결제 후 즉시 제공되는 디지털 콘텐츠로, **제공이 시작되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.
전   I understand this is digital content delivered immediately on payment, and that **withdrawal for a simple change of mind is restricted once delivery begins**.
후   I acknowledge that this product is digital content made available immediately after payment, and that **once provision begins, my right to cancel due to a change of mind will be restricted**.
제안 I acknowledge that this product is digital content made available immediately after payment and that once access to the content begins, my right to cancel due to a change of mind will be restricted.
```

### C-DIGITAL-required — 검수 `의심` · 반영 `채택`

`checkout-consent · 디지털 콘텐츠` · 미동의 안내

```
KO   청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.
전   Please confirm the withdrawal terms before paying.
후   You must agree to the cancellation restrictions before proceeding with payment.
```

### C-DIGITAL-refund — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 디지털 콘텐츠` · 환불 안내문

```
KO   환불·문의는 하단 고객센터 또는 이메일로 접수해 주십시오. 시스템 오류로 상품이 제공되지 않았거나 결제 금액이 주문과 다른 경우에는 전액 환불해 드립니다.
전   For refunds or questions, use the customer centre or email below. If a system error prevented delivery, or the amount charged differs from the order, we refund in full.
후   For refunds or inquiries, please contact the customer centre or email address below. If the product was not provided due to a system error, or the amount charged differs from the order, a full refund will be issued.
제안 For refunds or inquiries, please contact customer support using the information at the bottom of the page or email us. If the product is not provided due to a system error, or if the amount charged differs from the order total, a full refund will be issued.
```

### C-MADE_TO_ORDER-info-1 — 검수 `좋음` · 반영 `그대로`

`checkout-consent · 주문 제작(도장)` · Provider (원문 「제작·공급자」)

```
KO   Naming-Link
전   Naming-Link
```

### C-MADE_TO_ORDER-info-2 — 검수 `의심` · 반영 `채택`

`checkout-consent · 주문 제작(도장)` · Format (원문 「상품 형태」)

```
KO   주문하신 문구를 새겨 개별 제작하는 실물 도장
전   A physical seal (dojang), carved individually with the text you order.
후   A physical stamp custom-made with the wording specified in your order.
```

### C-MADE_TO_ORDER-info-3 — 검수 `의심` · 반영 `채택`

`checkout-consent · 주문 제작(도장)` · How it is made (원문 「제작 방식」)

```
KO   주문 접수 후 문구·서체를 확인하고 제작에 들어갑니다.
전   We confirm the text and typeface after your order, then begin carving.
후   After receiving your order, we will confirm the wording and font before production begins.
```

### C-MADE_TO_ORDER-info-4 — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 주문 제작(도장)` · Shipping (원문 「배송」)

```
KO   제작 완료 후 발송합니다. 국내는 택배, 해외는 국제배송입니다.
전   Dispatched once carving is complete. Courier within Korea, international shipping elsewhere.
후   Dispatched once production is complete. Courier delivery within Korea; international shipping elsewhere.
제안 Your order will be shipped once production is complete. Domestic orders are shipped by courier, and international orders are shipped internationally.
```

### C-MADE_TO_ORDER-info-5 — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 주문 제작(도장)` · Withdrawal (원문 「청약철회」)

```
KO   **제작이 시작되기 전에는** 전액 환불. 시작된 뒤에는 청약철회가 제한됩니다 — 주문에 따라 개별 생산되어 재판매가 불가능한 재화입니다(전자상거래법 제17조 제2항).
전   **Before carving begins**, full refund. After it begins, withdrawal is restricted — the item is made to your order and cannot be resold (Art. 17(2), Korean E-Commerce Act).
후   **Before production begins**, a full refund is available. Once production has begun, the right to cancel is restricted because the item is custom-made to order and cannot be resold (Article 17(2), Korean E-Commerce Act).
제안 A full refund is available before production begins. Once production has begun, the right to cancel is restricted because the item is custom-made to order and cannot be resold (Article 17(2) of the Electronic Commerce Act).
```

### C-MADE_TO_ORDER-info-6 — 검수 `의심` · 반영 `채택`

`checkout-consent · 주문 제작(도장)` · Exchange / return (원문 「교환·반품」)

```
KO   파손·오각(잘못 새김)·주문과 다른 상품인 경우 무상으로 재제작하거나 전액 환불합니다.
전   If the item arrives damaged, mis-carved, or different from your order, we remake it or refund in full.
후   If the item arrives damaged, is engraved incorrectly, or differs from your order, we will remake it at no charge or issue a full refund.
```

### C-MADE_TO_ORDER-info-7 — 검수 `의심` · 반영 `채택`

`checkout-consent · 주문 제작(도장)` · Return costs (원문 「반품 비용」)

```
KO   위 사유에 해당하면 무료. 단순 변심은 제작 시작 전에만 취소할 수 있습니다.
전   Free in the cases above. A change of mind can only be cancelled before carving begins.
후   There is no charge in any of the above cases. Cancellations due to a change of mind are accepted only before production begins.
```

### C-MADE_TO_ORDER-consent — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 주문 제작(도장)` · 동의문 — 실제로 체크를 받는 문장

```
KO   이 상품은 주문하신 문구를 새겨 만드는 **주문 제작 상품으로, 제작이 시작되면 단순 변심에 의한 청약철회가 제한된다는 점**을 확인했습니다.
전   I understand this seal is **made to order with the text I supplied, and that withdrawal for a simple change of mind is restricted once carving begins**.
후   I acknowledge that this is a **custom-made product engraved with the wording I specified, and that once production begins, my right to cancel due to a change of mind will be restricted**.
제안 I acknowledge that this is a custom-made product engraved with the wording specified in my order and that once production begins, my right to cancel due to a change of mind will be restricted.
```

### C-MADE_TO_ORDER-required — 검수 `의심` · 반영 `채택`

`checkout-consent · 주문 제작(도장)` · 미동의 안내

```
KO   청약철회 제한 사항에 동의하셔야 결제할 수 있습니다.
전   Please confirm the withdrawal terms before paying.
후   You must agree to the cancellation restrictions before proceeding with payment.
```

### C-MADE_TO_ORDER-refund — 검수 `의심` · 반영 `수정 채택`

`checkout-consent · 주문 제작(도장)` · 환불 안내문

```
KO   환불·문의는 하단 고객센터 또는 이메일로 접수해 주십시오. 파손·오각이나 주문과 다른 상품인 경우에는 무상 재제작 또는 전액 환불로 처리합니다.
전   For refunds or questions, use the customer centre or email below. Damaged, mis-carved or incorrect items are remade or refunded in full.
후   For refunds or inquiries, please contact the customer centre or email address below. If the item is damaged, incorrectly engraved, or differs from your order, we will remake it at no charge or issue a full refund.
제안 For refunds or inquiries, please contact customer support using the information at the bottom of the page or email us. If the item is damaged, incorrectly engraved, or differs from your order, we will remake it at no charge or issue a full refund.
```


## B. 환불 정책

### B-1-1 — 검수 `의심` · 반영 `채택`

`[refund] 1. General Principles` · 문단 1 / 1

```
KO   결제 기능이 활성화되면 각 상품의 제공 방식, 제작 착수 시점, 다운로드 여부에 따라 환불 가능 범위가 달라질 수 있습니다. 구체 조건은 결제 전 상품 화면에 고지합니다.
전   Once payment features are activated, the refundable scope may vary depending on each product's delivery method, production start time, and download status. Specific conditions are disclosed on the product screen before payment.
후   Once payment functionality becomes available, the scope of available refunds may vary depending on how each product is provided, when production begins, and whether the product is downloadable. The specific terms will be displayed on the product page before payment.
```

### B-2-1 — 검수 `의심` · 반영 `수정 채택`

`[refund] 2. Hanja Detailed Reports` · 문단 1 / 3

```
KO   한자 상세 리포트의 국내 결제 가격은 2,900원 / 4,900원 / 9,900원입니다.
전   Domestic payment prices for the Hanja detailed reports are ₩2,900 / ₩4,900 / ₩9,900.
후   The Korean domestic prices for the detailed Hanja reports are ₩2,900, ₩4,900, and ₩9,900.
제안 The Korean domestic prices for detailed Hanja reports are KRW 2,900, KRW 4,900, and KRW 9,900.
```

### B-2-2 — 검수 `의심` · 반영 `채택`

`[refund] 2. Hanja Detailed Reports` · 문단 2 / 3

```
KO   결제 후 AI 상세 분석 생성이 시작되기 전에는 취소가 가능합니다. 분석 생성이 완료되어 열람 또는 다운로드가 가능해진 뒤에는 단순 변심에 의한 환불이 제한될 수 있습니다.
전   You may cancel after payment as long as AI detailed analysis generation has not started. Once generation is complete and the report can be viewed or downloaded, refunds for a simple change of mind may be restricted.
후   Orders may be canceled after payment but before the AI begins generating the detailed analysis. Once the analysis has been generated and is available to view or download, refunds due to a change of mind may be restricted.
```

### B-2-3 — 검수 `의심` · 반영 `수정 채택`

`[refund] 2. Hanja Detailed Reports` · 문단 3 / 3

```
KO   내용 오류, 시스템 장애로 인한 생성 실패, 결제 금액 불일치가 확인되는 경우 재발급 또는 환불로 처리합니다. 보관 기간(결제 후 24시간) 경과로 다운로드가 종료된 경우는 환불 사유에 해당하지 않습니다.
전   If content errors, generation failures due to system faults, or payment amount mismatches are confirmed, we will reissue the report or provide a refund. Expiration of the retention period (24 hours after payment) is not grounds for a refund.
후   If a content error, a generation failure caused by a system fault, or a discrepancy in the payment amount is confirmed, we will reissue the report or provide a refund. Expiry of the retention period (24 hours after payment) is not grounds for a refund.
제안 If a content error, generation failure caused by a system error, or discrepancy in the payment amount is confirmed, we will reissue the product or provide a refund. Expiration of the download period after the 24-hour storage period has elapsed does not qualify for a refund.
```

### B-3-1 — 검수 `의심` · 반영 `수정 채택`

`[refund] 3. Unlock All Candidates` · 문단 1 / 4

```
KO   후보 전체 일괄 공개의 국내 결제 가격은 990원입니다.
전   The domestic payment price for unlocking all candidates is ₩990.
후   The Korean domestic price for unlocking all candidates at once is ₩990.
제안 The Korean domestic price for unlocking all candidates at once is KRW 990.
```

### B-3-2 — 검수 `의심` · 반영 `채택`

`[refund] 3. Unlock All Candidates` · 문단 2 / 4

```
KO   같은 상품의 해외 결제 가격은 US$1.99입니다.
전   The international payment price for the same product is US$1.99.
후   The international price for the same product is US$1.99.
```

### B-3-3 — 검수 `의심` · 반영 `채택`

`[refund] 3. Unlock All Candidates` · 문단 3 / 4

```
KO   글로벌 이름 변환, 한국 이름 변환, 한글 발음 표기 서비스의 후보 일괄 공개는 결제 즉시 제공되는 디지털 콘텐츠입니다. 후보 열람이 시작되기 전에는 취소가 가능하며, 열람 후에는 단순 변심 환불이 제한될 수 있습니다.
전   Unlocking all candidates in the global name conversion, Korean name conversion, and Hangul pronunciation services is digital content delivered immediately upon payment. You may cancel before viewing begins; after viewing, refunds for a simple change of mind may be restricted.
후   The option to unlock all candidates in the Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services is digital content provided immediately after payment. Orders may be canceled before viewing begins. Once the candidates have been viewed, refunds due to a change of mind may be restricted.
```

### B-3-4 — 검수 `의심` · 반영 `채택`

`[refund] 3. Unlock All Candidates` · 문단 4 / 4

```
KO   시스템 오류로 후보가 정상적으로 공개되지 않은 경우 재제공 또는 환불로 처리합니다.
전   If candidates fail to unlock properly due to a system error, we will re-deliver them or provide a refund.
후   If the candidates are not properly unlocked due to a system error, we will provide access again or issue a refund.
```

### B-4-1 — 검수 `의심` · 반영 `채택`

`[refund] 4. Global Digital PDF Products` · 문단 1 / 2

```
KO   한글 이름 종합 리포트(US$9.99), 한글 발음 전환 아트(US$2.99), 이름 아트 팩(US$1.99)은 결제 후 생성되는 디지털 콘텐츠입니다. PDF 생성이 시작되기 전에는 취소가 가능하며, 생성이 완료되어 다운로드가 가능해진 뒤에는 단순 변심에 의한 환불이 제한될 수 있습니다.
전   The Korean Name Report (US$9.99), Hangul Pronunciation Art (US$2.99), and Name Art Pack (US$1.99) are digital content generated after payment. You may cancel before PDF generation begins; after generation completes and the download becomes available, refunds for a simple change of mind may be restricted.
후   The Comprehensive Korean Name Report (US$9.99), Hangul Pronunciation Art (US$2.99), and Name Art Pack (US$1.99) are digital products generated after payment. Orders may be canceled before PDF generation begins. Once generation is complete and the PDF is available to download, refunds due to a change of mind may be restricted.
```

### B-4-2 — 검수 `의심` · 반영 `수정 채택`

`[refund] 4. Global Digital PDF Products` · 문단 2 / 2

```
KO   생성 실패, 내용 오류, 결제 금액 불일치가 확인되는 경우 재발급 또는 환불로 처리합니다. 보관 기간(결제 후 24시간) 경과로 다운로드가 종료된 경우는 환불 사유에 해당하지 않습니다.
전   If generation fails, the content is defective, or a payment-amount mismatch is confirmed, we will re-issue or refund. Expiry of the download window (24 hours after payment) is not itself grounds for a refund.
후   If a generation failure, a content error, or a discrepancy in the payment amount is confirmed, we will reissue the product or provide a refund. Expiry of the retention period (24 hours after payment) is not grounds for a refund.
제안 If a generation failure, content error, or discrepancy in the payment amount is confirmed, we will reissue the product or provide a refund. Expiration of the download period after the 24-hour storage period has elapsed does not qualify for a refund.
```

### B-5-1 — 검수 `의심` · 반영 `수정 채택`

`[refund] 5. Custom-Made Merchandise (Name Stamps, etc.)` · 문단 1 / 3

```
KO   이름 도장 등 개인 맞춤 제작물의 국내 결제 가격은 39,000원 / 59,000원 / 79,000원입니다.
전   For personalized items such as name stamps, domestic payment prices are ₩39,000 / ₩59,000 / ₩79,000.
후   The Korean domestic prices for personalized products, including name stamps, are ₩39,000, ₩59,000, and ₩79,000.
제안 The Korean domestic prices for personalized products, including name stamps, are KRW 39,000, KRW 59,000, and KRW 79,000.
```

### B-5-2 — 검수 `의심` · 반영 `채택`

`[refund] 5. Custom-Made Merchandise (Name Stamps, etc.)` · 문단 2 / 3

```
KO   같은 제작물의 해외 결제 가격은 US$39.90 / US$59.90 / US$79.90이며 국제 배송비가 포함됩니다.
전   For the same items, international payment prices are US$39.90 / US$59.90 / US$79.90, with international shipping included.
후   The international prices for the same products are US$39.90, US$59.90, and US$79.90, including international shipping.
```

### B-5-3 — 검수 `의심` · 반영 `채택`

`[refund] 5. Custom-Made Merchandise (Name Stamps, etc.)` · 문단 3 / 3

```
KO   개인 맞춤 제작물은 제작 착수 전까지 취소가 가능합니다. 제작 착수 후에는 각인 문구가 개인 맞춤으로 확정되므로 단순 변심 환불이 제한될 수 있으며, 오탈자, 파손, 오제작 또는 배송 문제는 확인 후 교환, 재제작, 환불 중 적절한 방식으로 처리합니다.
전   Personalized items can be cancelled until production begins. After production begins the engraved text is personalized, so refunds for a simple change of mind may be restricted; typos, damage, production errors, or shipping problems are handled by exchange, remake, or refund as appropriate after confirmation.
후   Personalized products may be canceled before production begins. Once production begins, refunds due to a change of mind may be restricted because the personalized engraving has been finalized. If the product contains a typographical error, arrives damaged, is made incorrectly, or has a delivery issue, we will review the matter and provide an exchange, remake, or refund as appropriate.
```

### B-6-1 — 검수 `의심` · 반영 `채택`

`[refund] 6. Ad-Based Unlocking` · 문단 1 / 1

```
KO   광고 시청형 혜택은 결제 상품이 아닙니다. 광고 네트워크 오류로 보상이 지급되지 않은 경우 서비스 내 재시도 또는 고객센터 문의로 처리합니다.
전   Ad-reward benefits are not paid products. If a reward is not granted due to an ad network error, retry within the service or contact the customer center.
후   Benefits provided in exchange for viewing advertisements are not paid products. If a reward is not issued due to an advertising network error, please try again within the service or contact customer support.
```

### B-7-1 — 검수 `좋음` · 반영 `그대로`

`[refund] 7. Contact` · 문단 1 / 1

```
KO   환불 문의: platforest.inc@gmail.com
전   Refund inquiries: platforest.inc@gmail.com
```


## A. 금액

### A-terms4-1 — 검수 `의심` · 반영 `수정 채택`

`[terms] 4. Paid Services` · 문단 1 / 7

```
KO   한자 의미 매칭 서비스의 상세 상품은 다음과 같습니다. ① 후보 최대 5개 상세 설명 및 한자 종합 상세: 2,900원 ② 후보 최대 10개 확장 상세 설명, 한자 종합 상세 및 소장용 PDF: 4,900원 ③ 후보 최대 10개 상세, 한자 종합 상세, 사주·오행 분석 및 소장용 PDF: 9,900원.
전   The Hanja meaning-matching service offers the following detailed products: (1) detailed explanations for up to 5 candidates plus a comprehensive Hanja analysis: ₩2,900; (2) extended explanations for up to 10 candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900; (3) details for up to 10 candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900.
후   The detailed products available through the Hanja meaning-matching service are as follows: (1) detailed descriptions of up to five candidates and a comprehensive Hanja analysis: ₩2,900; (2) expanded descriptions of up to ten candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900; (3) detailed descriptions of up to ten candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900.
제안 The detailed products available through the Hanja Meaning Matching service are as follows:
```

### A-terms4-2 — 검수 `의심` · 반영 `수정 채택`

`[terms] 4. Paid Services` · 문단 2 / 7

```
KO   글로벌 이름 변환, 한국 이름 변환, 한글 발음 표기 서비스에서는 남은 후보 전체를 광고 없이 한 번에 공개하는 상품(국내 결제 990원, 해외 결제 US$1.99)이 제공될 수 있습니다. 결제 기능 활성화 전에는 광고 보상형 열람만 제공됩니다.
전   In the global name conversion, Korean name conversion, and Hangul pronunciation services, a product that unlocks all remaining candidates at once without ads (₩990 domestic, US$1.99 international) may be offered. Until payment features are activated, candidates can only be unlocked through ad rewards.
후   The Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services may offer an option to unlock all remaining candidates at once without advertisements (₩990 for domestic payments and US$1.99 for international payments). Until payment functionality is available, candidates may be viewed only through advertisement-based rewards.
제안 The Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services may offer an option to unlock all remaining candidates at once without advertisements (KRW 990 for domestic payments and US$1.99 for international payments). Until payment functionality is available, candidates may be viewed only through advertisement-based rewards.
```

### A-terms4-3 — 검수 `의심` · 반영 `수정 채택`

`[terms] 4. Paid Services` · 문단 3 / 7

```
KO   글로벌 이용자를 위한 디지털 상품으로 ④ 한글 이름 종합 리포트 PDF(US$9.99): 추천 후보 전체의 선택 서체 이름 아트·의미 해설·오행 사주 참고 ⑤ 한글 발음 전환 아트 PDF(US$2.99): 선택 서체 이름 아트와 발음 안내 ⑥ 이름 아트 팩 PDF(US$1.99): 선택한 이름 1개를 고른 서체별 아트로 제공. 각 상품의 가격과 적용 서체 수는 화면에 고지된 값을 따릅니다.
전   Digital products for global users include: (4) Korean Name Report PDF (US$9.99): name art in your chosen typeface for all recommended candidates, meaning explanations, and a Five Elements (Saju) reference; (5) Hangul Pronunciation Art PDF (US$2.99): name art in your chosen typeface with a pronunciation guide; (6) Name Art Pack PDF (US$1.99): one chosen name rendered as art in each typeface you pick. The price and number of typefaces for each product follow the values shown on screen.
후   The following digital products are available for international users: (4) Comprehensive Korean Name Report PDF (US$9.99): name art in the selected font for all recommended candidates, explanations of their meanings, and a Saju (Four Pillars) and Five Elements reference; (5) Hangul Pronunciation Art PDF (US$2.99): name art in the selected font and a pronunciation guide; (6) Name Art Pack PDF (US$1.99): artwork featuring one selected name in each chosen font. The price and the number of fonts included for each product are as displayed on the product page.
제안 The following digital products are available for international users:
```

### A-terms4-4 — 검수 `의심` · 반영 `채택`

`[terms] 4. Paid Services` · 문단 4 / 7

```
KO   유료 상세 리포트와 분석 결과, PDF 파일은 결제 완료 후 24시간 동안 다시 열람·다운로드할 수 있으며, 보관 기간이 지나면 자동 삭제됩니다.
전   Paid detailed reports, analysis results, and PDF files remain available for viewing and download for 24 hours after payment, after which they are automatically deleted.
후   Paid detailed reports, analysis results, and PDF files may be viewed and downloaded again for 24 hours after payment. They will be automatically deleted once the storage period expires.
```

### A-terms4-5 — 검수 `의심` · 반영 `수정 채택`

`[terms] 4. Paid Services` · 문단 5 / 7

```
KO   이름 도장 등 실물 굿즈의 국내 결제 가격은 39,000원 / 59,000원 / 79,000원이며, 상품별 조건과 함께 제공됩니다.
전   For physical merchandise such as name stamps, domestic payment prices are ₩39,000 / ₩59,000 / ₩79,000, offered with per-product conditions.
후   The Korean domestic prices for physical merchandise, including name stamps, are ₩39,000, ₩59,000, and ₩79,000. The applicable terms will be provided for each product.
제안 The Korean domestic prices for physical merchandise, including name stamps, are KRW 39,000, KRW 59,000, and KRW 79,000. The applicable terms will be provided for each product.
```

### A-terms4-6 — 검수 `의심` · 반영 `채택`

`[terms] 4. Paid Services` · 문단 6 / 7

```
KO   같은 실물 굿즈의 해외 결제 가격은 US$39.90 / US$59.90 / US$79.90이며 국제 배송비가 포함됩니다.
전   For the same physical merchandise, international payment prices are US$39.90 / US$59.90 / US$79.90, with international shipping included.
후   The international prices for the same physical merchandise are US$39.90, US$59.90, and US$79.90, including international shipping.
```

### A-terms4-7 — 검수 `의심` · 반영 `채택`

`[terms] 4. Paid Services` · 문단 7 / 7

```
KO   모든 유료 상품은 결제 전 상품 내용, 가격, 제공 방식, 환불 조건을 화면에 고지합니다.
전   For every paid product, the product details, price, delivery method, and refund conditions are disclosed on screen before payment.
후   The product details, price, delivery method, and refund terms for every paid product will be displayed before payment.
```

### A-pricing3-1 — 검수 `의심` · 반영 `수정 채택`

`[pricing] Hanja Meaning-Matching Detailed Products` · 문단 1 / 4

```
KO   후보 최대 5개 상세 설명 및 한자 종합 상세: 2,900원
전   Detailed explanations for up to 5 candidates plus a comprehensive Hanja analysis: ₩2,900
후   Detailed descriptions of up to five candidates and a comprehensive Hanja analysis: ₩2,900
제안 Detailed descriptions of up to five candidates and a comprehensive Hanja analysis: KRW 2,900
```

### A-pricing3-2 — 검수 `의심` · 반영 `수정 채택`

`[pricing] Hanja Meaning-Matching Detailed Products` · 문단 2 / 4

```
KO   후보 최대 10개 확장 상세 설명, 한자 종합 상세 및 소장용 PDF: 4,900원
전   Extended explanations for up to 10 candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900
후   Expanded descriptions of up to ten candidates, a comprehensive Hanja analysis, and a keepsake PDF: ₩4,900
제안 Expanded descriptions of up to ten candidates, a comprehensive Hanja analysis, and a keepsake PDF: KRW 4,900
```

### A-pricing3-3 — 검수 `의심` · 반영 `수정 채택`

`[pricing] Hanja Meaning-Matching Detailed Products` · 문단 3 / 4

```
KO   후보 최대 10개 상세, 한자 종합 상세, 사주·오행 분석 및 소장용 PDF: 9,900원
전   Details for up to 10 candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900
후   Detailed descriptions of up to ten candidates, a comprehensive Hanja analysis, a Saju (Four Pillars) and Five Elements analysis, and a keepsake PDF: ₩9,900
제안 Detailed descriptions of up to ten candidates, a comprehensive Hanja analysis, a saju and Five Elements analysis, and a keepsake PDF: KRW 9,900
```

### A-pricing3-4 — 검수 `의심` · 반영 `채택`

`[pricing] Hanja Meaning-Matching Detailed Products` · 문단 4 / 4

```
KO   유료 리포트와 PDF는 결제 후 24시간 동안 다시 열람·다운로드할 수 있으며 이후 자동 삭제됩니다.
전   Paid reports and PDFs remain available for viewing and download for 24 hours after payment, after which they are automatically deleted.
후   Paid reports and PDFs may be viewed and downloaded again for 24 hours after payment. They will be automatically deleted afterward.
```

### A-pricing4-1 — 검수 `의심` · 반영 `수정 채택`

`[pricing] Unlock All Candidates` · 문단 1 / 2

```
KO   글로벌 이름 변환, 한국 이름 변환, 한글 발음 표기 서비스에서 남은 후보 전체를 광고 없이 한 번에 공개 (국내 결제): 990원
전   Unlock all remaining candidates at once, without ads, in the global name conversion, Korean name conversion, and Hangul pronunciation services — domestic payment: ₩990
후   Unlock all remaining candidates at once without advertisements in the Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services (Korean domestic payment): ₩990
제안 Unlock all remaining candidates at once without advertisements in the Global Name Conversion, Korean Name Conversion, and Hangul Pronunciation Transcription services (Korean domestic payment): KRW 990
```

### A-pricing4-2 — 검수 `의심` · 반영 `채택`

`[pricing] Unlock All Candidates` · 문단 2 / 2

```
KO   같은 상품의 해외 결제 가격: US$1.99
전   The same product, international payment: US$1.99
후   International price for the same product: US$1.99
```

### A-pricing5-1 — 검수 `의심` · 반영 `수정 채택`

`[pricing] Global Digital PDF Products` · 문단 1 / 4

```
KO   한글 이름 종합 리포트 PDF (추천 후보 전체의 이름 아트·의미 해설·오행 사주 참고): US$9.99
전   Korean Name Report PDF (name art, meaning explanations, and Five Elements reference for all recommended candidates): US$9.99
후   Comprehensive Korean Name Report PDF (name art for all recommended candidates, explanations of their meanings, and a Saju (Four Pillars) and Five Elements reference): US$9.99
제안 Comprehensive Korean Name Report PDF (name art for all recommended candidates, explanations of their meanings, and saju and Five Elements references): US$9.99
```

### A-pricing5-2 — 검수 `의심` · 반영 `채택`

`[pricing] Global Digital PDF Products` · 문단 2 / 4

```
KO   한글 발음 전환 아트 PDF (선택 서체 이름 아트와 발음 안내): US$2.99
전   Hangul Pronunciation Art PDF (name art in your chosen typeface with a pronunciation guide): US$2.99
후   Hangul Pronunciation Art PDF (name art in the selected font and a pronunciation guide): US$2.99
```

### A-pricing5-3 — 검수 `의심` · 반영 `채택`

`[pricing] Global Digital PDF Products` · 문단 3 / 4

```
KO   이름 아트 팩 PDF (선택한 이름 1개를 고른 서체별 아트로 제공): US$1.99
전   Name Art Pack PDF (one chosen name rendered as art in each typeface you pick): US$1.99
후   Name Art Pack PDF (artwork featuring one selected name in each chosen font): US$1.99
```

### A-pricing5-4 — 검수 `의심` · 반영 `채택`

`[pricing] Global Digital PDF Products` · 문단 4 / 4

```
KO   가격과 적용 서체 수는 화면에 고지된 값을 따르며, PDF는 결제 후 24시간 동안 다시 다운로드할 수 있고 이후 자동 삭제됩니다.
전   Prices and the number of typefaces follow the values shown on screen. PDFs remain downloadable for 24 hours after payment and are automatically deleted afterward.
후   The prices and number of fonts included are as displayed on the relevant product page. PDFs may be downloaded again for 24 hours after payment and will be automatically deleted afterward.
```

### A-pricing6-1 — 검수 `의심` · 반영 `수정 채택`

`[pricing] Korean Name Merchandise` · 문단 1 / 3

```
KO   이름 도장 (국내 결제): 39,000원 / 59,000원 / 79,000원
전   Name stamp (domestic payment): ₩39,000 / ₩59,000 / ₩79,000
후   Name stamp (Korean domestic payment): ₩39,000 / ₩59,000 / ₩79,000
제안 Name stamp (Korean domestic payment): KRW 39,000 / KRW 59,000 / KRW 79,000
```

### A-pricing6-2 — 검수 `의심` · 반영 `채택`

`[pricing] Korean Name Merchandise` · 문단 2 / 3

```
KO   이름 도장 (해외 결제): US$39.90 / US$59.90 / US$79.90 (국제 배송비 포함)
전   Name stamp (international payment): US$39.90 / US$59.90 / US$79.90 (shipping included)
후   Name stamp (international payment): US$39.90 / US$59.90 / US$79.90, including international shipping
```

### A-pricing6-3 — 검수 `의심` · 반영 `채택`

`[pricing] Korean Name Merchandise` · 문단 3 / 3

```
KO   기타 실물 굿즈는 상품별 가격, 배송비, 제작 기간을 별도 고지합니다.
전   Other physical merchandise is announced separately with per-product prices, shipping fees, and production times.
후   For other physical merchandise, the price, shipping fee, and production time will be provided separately for each product.
```

### A-pricing7-1 — 검수 `의심` · 반영 `채택`

`[pricing] How Prices Are Announced` · 문단 1 / 1

```
KO   결제 금액, 배송비, 제작 기간, 환불 조건은 결제 전 상품 화면에서 다시 고지하며, 이 문서의 금액과 상품 화면의 금액이 다를 경우 상품 화면의 금액이 기준입니다.
전   The payment amount, shipping fees, production time, and refund conditions are disclosed again on the product screen before payment. If an amount in this document differs from the amount on the product screen, the product screen governs.
후   The payment amount, shipping fee, production time, and refund terms will be displayed again on the product page before payment. If a price in this document differs from the price displayed on the product page, the price on the product page will apply.
```


## D. 사업자 정보

### D-legalEntity — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 상호

```
KO   (주)Platforest
전   Platforest Inc.
```

### D-representative — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 대표자

```
KO   곽은하
전   Gwak Eunha
```

### D-businessNumber — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 사업자등록번호

```
KO   197-86-02010
전   197-86-02010
```

### D-mailOrderNumber — 검수 `고쳐야 함` · 반영 `별도`

`packages/core/src/company.ts` · 통신판매업 신고번호

```
KO   통신판매업 신고 준비 중
전   통신판매업 신고 준비 중
제안 Mail-order business registration pending.
```

### D-address — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 주소

```
KO   서울특별시 금천구 디지털로 130, 13층 1309호 (가산동, 남성프라자)
전   13F #1309, Namseong Plaza, 130 Digital-ro, Geumcheon-gu, Seoul, Republic of Korea
```

### D-customerCenter — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 고객센터

```
KO   070-4300-7141
전   070-4300-7141
```

### D-email — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 이메일

```
KO   platforest.inc@gmail.com
전   platforest.inc@gmail.com
```

### D-privacyOfficer — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 개인정보 보호책임자

```
KO   곽은하(대표)
전   Gwak Eunha (CEO)
```

### D-hostingProvider — 검수 `좋음` · 반영 `그대로`

`packages/core/src/company.ts` · 호스팅 제공자

```
KO   Vercel Inc.
전   Vercel Inc.
```

### D-privacy8-1 — 검수 `좋음` · 반영 `그대로`

`[privacy] 8. Privacy Officer` · 문단 1 / 2

```
KO   책임자: 곽은하(대표)
전   Officer: Gwak Eunha (CEO)
```

### D-privacy8-2 — 검수 `좋음` · 반영 `그대로`

`[privacy] 8. Privacy Officer` · 문단 2 / 2

```
KO   이메일: platforest.inc@gmail.com
전   Email: platforest.inc@gmail.com
```
