# 프로그래매틱 SEO 설계서 — sajulink · dreamslink

작성 2026-08-04 · 목적: **시드 데이터 → 대량 랜딩페이지**로 "획득" 병목 정면 돌파. Claude Code는 이 설계대로 **템플릿 1개 + 데이터 루프**만 구현하면 됨.

> 핵심 원칙: 각 페이지는 **시드에서 나온 고유 가치**(상징 의미/사주 개념)를 담아 thin content를 피한다. Google helpful-content 대응 — 자동생성이되 "실제로 유용한" 페이지.

---

## 1. dreamslink — 상징별 랜딩 (최대 트래픽 엔진)

### URL / 라우트
```
/{locale}/dream/{symbol-slug}        예: /en/dream/pig , /ja/dream/pig , /ko/dream/pig
/{locale}/dream/category/{category}  집계(animal/nature/body/action/object/person/place/color)
/{locale}/dream                       허브(검색 + 인기 상징)
```
`symbol-slug` = `dream_symbols.id`. **시드 1행 = 페이지 1개 × 언어 수.** (상징 120개 × 5언어 = 600 페이지, 200개로 확장 시 1,000 페이지.)

### 페이지 콘텐츠(시드 필드 매핑)
| 요소 | 소스 |
|---|---|
| H1 / title | "Dream about {term} — meaning" (locale 문안) |
| 요약 | `meanings[].interpretation` 통합 |
| 전통 해석 표 | `meanings[]`(context별 길흉) |
| 문화 노트 | `culture_note` |
| 태그·관련 상징 | `tags`, `related_ids` → 내부링크 |
| CTA | "내 꿈 전체 해몽하기"(무료 도구) → 결제 퍼널 |
| (AI, 선택) | 매칭 grounding 프롬프트로 상징 확장 서술(사전 근거 내에서만) |

### 메타 / 구조화 데이터
- `<title>`: `{Dream about {term} meaning} | dreamslink` (locale)
- `<meta description>`: 요약 1문장 + 길흉.
- **hreflang**: 모든 locale 상호 + `x-default`(naming 24개 hreflang 방식 재사용).
- **canonical**: 각 locale 자신.
- **schema.org**: `Article` + `FAQPage`("What does dreaming about {term} mean?").
- OG: `saju_dream_backgrounds`의 dream OG 배경 + 상징명.

### 품질 가드
- 상징별 **최소 유의미 분량**(의미 2~3 + 문화 노트) 확보, 미달 상징은 `noindex`.
- "dream about A and B" 조합 페이지는 **상위 인기 조합만** 선별 생성(무한 조합 금지 → thin/spam 회피).
- 카테고리 허브로 내부링크 응집(크롤 효율).

---

## 2. sajulink — 개념/키워드 랜딩 (계산기로 퍼널)

사주는 개인 입력이 필요하므로, 프로그래매틱 페이지는 **교육형 키워드 랜더 → 무료 계산기로 유입**시키는 구조.

### URL / 라우트
```
/{locale}/saju                              허브 + "무엇이 사주인가" + 계산기 CTA
/{locale}/saju/zodiac/{animal}              띠별(쥐~돼지 12): "Year of the {animal} in Saju"
/{locale}/saju/element/{element}            오행별(목화토금수): "{Wood} Day Master personality"
/{locale}/saju/ten-god/{tengod}             십신별(비견~정인 10): 개념 해설
/{locale}/saju/calculator                   무료 원국 계산(입력 폼)
/{locale}/saju/today                         오늘의 운세(리텐션)
```
조합 규모: (12 띠 + 5 오행 + 10 십신 + 허브) × 5언어 ≈ 140 페이지. 각 페이지 하단 **계산기 CTA**.

### 콘텐츠
- 개념 해설(엔진 지식 기반) + "당신의 {오행/띠}는?" → 계산기.
- 결정론 엔진·정통성 신뢰 카피("AI가 지어낸 게 아님").
- schema: `Article`+`FAQ`. hreflang/canonical 동일 규칙.

### 키워드셋(영어 예시 — 언어별 §다국어 문서 참조)
- 허브: "what is saju", "korean astrology", "four pillars of destiny", "saju reading free".
- 띠: "year of the {animal} personality", "{animal} zodiac saju".
- 오행: "{wood} element personality", "day master {wood}".
- 계산기: "saju calculator", "four pillars calculator", "korean birth chart".

---

## 3. 시드 → 페이지 생성 파이프라인 (구현 가이드)
```
build 시(또는 ISR):
  for locale in [en, ja, zh, vi, es, ...]:
    for symbol in dream_symbols:  → /{locale}/dream/{symbol.id}
    for animal in 12, element in 5, tengod in 10:  → saju 랜딩
  sitemap.xml 자동 생성(모든 URL, hreflang 포함)
```
- Next.js `generateStaticParams` + ISR(revalidate). naminglink의 sitemap/robots/hreflang 유틸 재사용.
- 신규 상징 추가 → 자동으로 신규 페이지·sitemap 반영(시드가 곧 SEO 자산).

---

## 4. 크로스 링크 / 퍼널
- dream 상징 페이지 → "이 꿈이 당신의 운세와 맞는지 사주로 확인"(sajulink) 크로스셀.
- saju 페이지 → "오늘 꾼 꿈의 의미"(dreamslink), "당신의 한국 이름"(naming), "궁합"(inyeon).
- 공용 `public.events`로 어느 SEO 페이지가 결제로 전환되는지 attribution.

---

## 5. 우선순위
1. dream 상징 페이지 템플릿 + 시드 루프(en 먼저) → 색인.
2. hreflang 다국어(en→ja/zh/vi/es) 확장.
3. saju 개념 랜딩 + 계산기 CTA.
4. 카테고리 허브·내부링크·sitemap 자동화.
5. 인기 상징 조합 페이지(선별).
```
