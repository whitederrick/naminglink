# 오픈 전 준비도 점검 (2026-07-29)

배포 직후 **운영 환경을 직접 두드려** 확인한 결과다. 코드를 읽어 추정한 항목은 그렇게 표시했다.
대상: `https://naminglink.vercel.app`, `https://inyeonlink.vercel.app`, 공용 Supabase.

---

## 0. 결론

문을 열 수 없는 상태다. 막는 것은 코드가 아니라 **셋뿐**이다 — 통신판매업 신고, 결제 키, 실 도메인.
나머지 잠금·보호 장치는 실측으로 전부 정상이었다.

---

## 1. 오픈을 막는 것

### ① 통신판매업 신고번호가 없다 — 법정 표시 미완

푸터의 `mailOrderNumber`가 `"통신판매업 신고 준비 중"`이다(운영 HTML 실측).
사업자등록번호(197-86-02010)·대표자·주소·고객센터는 다 들어 있고 **서버 렌더로 나간다**(어제 작업).

전자상거래법은 통신판매업자에게 신고 의무를 지운다. 결제를 여는 순간부터 미신고 상태가 되므로,
**신고번호가 나오기 전에는 결제를 열 수 없다.** 지금 상품이 전부 잠겨 있어 위반 상태는 아니다.

### ② 결제 키 미등록

토스페이먼츠 실채널 키와 포트원 페이팔 채널 키가 아직 없다. 오늘 국내 폴백을 걷어냈으므로
키가 없으면 **주문 자체가 503으로 막힌다**(예전에는 계약하지 않은 채널로 결제창이 열렸다).

안전장치로 `product_settings` 20건을 전부 판매 중지로 내렸다(실측: 20건 중 판매중 0건).
키가 준비되면 관리자 화면이나 `scripts/toggle-products.mjs --on`으로 되돌린다.

### ③ 실 도메인 미연결 — **오늘 색인을 열었다는 점을 함께 판단해야 한다**

오늘 배포한 `robots.txt`는 `naminglink.vercel.app`의 색인을 **허용**한다. 도메인이 붙기 전에
색인이 쌓이면 도메인 연결 시 그 URL이 전부 이동하고, 리다이렉트 정리가 따라붙는다.
`SEO_STATUS_2026-07-28.md`가 "실 도메인 먼저"를 권한 이유이기도 하다.

지금 트래픽이 없으므로 색인을 여는 이득이 사실상 0이었다.

**→ 조치함(같은 날).** `NEXT_PUBLIC_SITE_URL`이 `*.vercel.app`이면 `robots.ts`가 전면 Disallow를
낸다. **실 도메인을 넣는 순간 색인이 열린다** — 따로 기억해 두었다가 꺼야 하는 스위치는 만들지
않았다(그런 스위치는 잊힌다). 실 도메인·배포 주소 양쪽으로 빌드해 확인했다.

인연링크는 `robots.txt`·`sitemap.xml`이 아예 없다(404). SEO는 naminglink만 했다.

---

## 2. 실측으로 정상 확인한 것

### 접근 통제

| 대상 | 결과 |
| --- | --- |
| `/admin`, `/admin/*` | **404** (proxy.ts가 막는다) |
| `/api/admin/products`, `/api/admin/operations` | **401** |
| `/api/premium-reports/test`, `/test/global`, `/test/pdf` | **403** (운영에서 닫힘) |
| `/api/cron/premium-cleanup` | **401** (시크릿 없이는 불가) |
| `/naming-artist/*` | 200이지만 **주문·이용자 데이터가 HTML에 실려 나오지 않는다.** 데이터는 401인 admin API로만 오고, robots에서도 제외했다 |

### 데이터

| 항목 | 값 |
| --- | --- |
| `orders` | **4건, 전부 `is_test=true` + UNPAID** → 실거래 0건 |
| 배송 주소가 있는 주문 | **0건** → 파기할 PII 없음 |
| `product_settings` | 20건, **판매중 0건** |
| `product_setting_history` | 17건(오늘 잠금 이력 포함) |
| `report_fonts` | 18건 |

오픈 시 테스트 데이터 일괄 삭제 방침이 있는데, 지울 것이 4건뿐이라 부담이 없다.

### 보안 헤더 (양쪽 앱 동일)

`Content-Security-Policy` · `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` ·
`X-Frame-Options: DENY` · `X-Content-Type-Options: nosniff` · `Referrer-Policy: strict-origin-when-cross-origin`
(naminglink는 `Permissions-Policy: camera=(), microphone=(), geolocation=()`도 붙는다.)

### 광고 잠금 (인연링크)

`ads.txt`가 `Not found`를 돌려준다 = `NEXT_PUBLIC_ADSENSE_CLIENT` 미설정. 슬롯 ID도 비어 있어
광고 자리와 보상형 게이트가 잠긴 상태다. naminglink에는 광고 코드 자체가 없다.

### SEO (오늘 작업분, 운영 실측)

`robots.txt` 정상 · `sitemap.xml` **216 URL** · 서비스 페이지 canonical이 언어판 자신 ·
hreflang 24개(x-default 포함) · 로그인·결과 화면 `noindex, follow`.

---

## 3. 남은 작업 (오픈을 막지는 않음)

1. **실결제 검증 4종** — 도장, 글로벌 프리미엄 PDF(US$9.99), 음차 PDF(US$2.99), 인연의 결 PDF.
   코드는 끝났고 키만 남았다. 실채널 전환 시 `PORTONE_ALLOW_TEST_CHANNEL` 삭제 + 웹훅 시크릿 교체
   (**운영 환경변수 값은 코드로 확인 불가** — 전환 시 사람이 확인할 것).
2. **인연링크 SEO 전무** — robots·sitemap·canonical·hreflang 0건. naminglink와 같은 꼴로 옮기면 된다.
3. **경로 기반 URL(`/ko/`, `/en/`)** — SEO 우선순위 ③. 오픈 전이 압도적으로 싸다.
   음차 화면(`?mode=transliteration`)에 자기 경로를 주는 일도 여기에 딸려 온다.
4. **프로그래매틱 페이지** — 우선순위 ④.
5. **눈으로 볼 것** — 결제 고지 상자의 아랍어 RTL·태국어/크메르어 접힘, 인연링크 랜딩 언어 전환 밀림.
   Chrome 확장 연결이 필요하다.
6. **인연링크 도메인** 미연결.

---

## 4. 확인하지 못한 것

- **Vercel 운영 환경변수의 실제 값.** 코드에서 읽을 수 없다. 무료 한도(`FREE_DAILY_LIMIT`),
  테스트 채널 허용 플래그, 웹훅 시크릿은 배포 화면에서 사람이 봐야 한다.
- **첫 실결제에서만 드러나는 CSP 누락.** 카드 인증창은 발급사마다 도메인이 달라 목록으로 다
  덮이지 않는다. 첫 결제 때 콘솔의 CSP 위반 보고를 볼 것.
