# 사주 리포트 페이지 구조안 (⑤ PDF 다장 확장)

작성 2026-08-04 · 기준: inyeon `compatibility-report.tsx`(7장, 2인)를 품질 바로 삼되 **1인용만 이식** + 사주 고유 추가. 원칙: **화면보다 더 주는 것(`PAID_ONLY_READING_FIELDS`)만 리포트에** — 무료와 겹치면 살 이유가 없다.

---

## 0. inyeon에서 그대로 가져오는 것 (1인이라 이식 가능)
- **컴포넌트**: `PillarGrid`(네 기둥 여덟 글자), `ElementBars`(오행 누적막대+범례+%), `DepthCard`(왕상휴수사 표: raw/strength/vitality + allyRatio), `CalculationCard`(진태양시·음양력), `Section`(제목+내용 `wrap={false}`), `Footer`(fixed, disclaimer+engineVersion+date), `brandRow`, `PALETTE`/`ELEMENT_COLOR`, `VitalityLegend`.
- **버리는 것(2인 전용)**: `RelationSection`, `SupplyCell`, `StemGodTable(aSeesB/bSeesA)`, `PersonSection ×2`. → saju는 `outcome.people[0]` 하나만.
- **데이터**: `PersonReading`(pillars·elements·rawElements·bodyStrength·favorableElements·allyRatio·vitality·dayMaster·timeCorrection·convertedDate) + `TodayFortune`(score·grade·categories·lucky·factors·todayPillar) + `SajuInterpretation`(GPT: summary·personality·element_balance·strengths·cautions·domains·today·year_outlook·disclaimer).

---

## 1. 총운 (chongun · ₩4,900/US$4.99) — 3장
| 장 | 섹션 | 소스 |
|---|---|---|
| **P1 표지·요약** | brandRow + 일간/원국 한 줄 요약 + `summary`·`personality`(GPT) + `strengths`/`cautions` + **미저장(프라이버시) 안내** | interpretation + reading.dayMaster |
| **P2 나의 원국·오행** | `PillarGrid`(여덟 글자) + `ElementBars`(오행 세력 %) + 강약·필요기운(`bodyStrength`+`favorableElements`) + `element_balance`(GPT) | reading |
| **P3 오늘의 운세 + 삶의 영역** | `today`(등급·점수·카테고리 4·행운요소 색/방위/시간) + today 해설(headline/message/advice) + `domains` **요약**(재물·연애·직업·건강) + 계산근거 축약(진태양시 1줄) | today + interpretation |

## 2. 프리미엄 (premium · ₩9,900/US$9.99) — 총운 3장 + 심화 (목표 5~6장)
P1~P3 동일(단 `domains`는 **상세**). 이어서:
| 장 | 섹션 | 소스 |
|---|---|---|
| **P4 십신 — 내 사주 안의 기운** | 원국 천간·지지의 십신(비견~정인) 표 + 각 십신 해설(`tenGods` 1인판, ④에서 이미 "내 안의 기운"으로 재작성) | reading + tenGods dict |
| **P5 심화(왕상휴수사)** | `DepthCard`(1인) — raw/strength/vitality 표 + `allyRatio`(신강·신약 근거 숫자) + `VitalityLegend` | reading |
| **P6 대운·세운·올해 총운 + 부록** | `year_outlook`(GPT) + [대운/세운 — §3 플래그] + `CalculationCard`(진태양시·음양력) + 오늘 근거 `factors`(프리미엄만) | interpretation + reading |

> 정확한 장수는 **콘텐츠가 정한다** — 렌더 확정 후 실제 장수로 약관을 쓴다(§4).

---

## 3. ⚠️ 플래그: "대운·세운"은 엔진 확인 필요
`report-product.ts`는 프리미엄에 **"대운·세운"**을 적었는데, inyeon `PersonReading`엔 대운/세운(운 기둥) 필드가 **없다**(pillars·elements·vitality·allyRatio·timeCorrection·convertedDate만). 즉 엔진이 대운/세운을 아직 안 낼 가능성이 큼. → **먼저 확인**하고:
- (a) 엔진에 대운(10년 주기) 산출 추가 — 중간 규모 작업.
- (b) 프리미엄 심화를 **왕상휴수사 + 십신 + year_outlook + factors**로 채우고, **약관·상품 설명에서 '대운·세운'을 실제 제공물로 교체**(고시=실제 원칙, ⑥에서). → 런칭 빠름, 권장.
어느 쪽이든 **약관에 없는 것을 적지 않는다**가 원칙.

---

## 4. 고시/약관 순서 (⑥와의 계약)
- 페이지 수·목차는 **PDF가 실제로 렌더하는 장수로** 쓴다. 절대 약관에 장수를 먼저 박지 말 것(#8 `verify-product-consistency`가 목차=장수 대조).
- 순서: **⑤에서 이 구조로 렌더 확정 → 실제 장수·목차 확인 → ⑥ 약관을 그 값으로 작성.**

## 5. 페이지네이션 규칙 (inyeon이 실측으로 배운 것 — 그대로 지킬 것)
- `Footer`는 매 장 `fixed`, disclaimer 항상 포함. `paddingBottom: 78`(2줄 고지 언어 대비 — 이탈리아어에서 겹침 이력).
- 한자·큰 글자(점수 52pt 등)엔 **`lineHeight` 명시**(생략 시 다음 요소가 겹침). 간지는 `MixedText`(라틴·한글 서체엔 한자 글리프 없음).
- `Section`은 제목+내용 `wrap={false}`로 붙임. **긴 표는 카드 통째 `wrap={false}` 금지** → 행 단위 `wrap={false}` + `minPresenceAhead`(마지막 행 여백만 다음 장 넘어가는 것 방지).
- 무료 화면과 겹치지 않게 `PAID_ONLY` 값만 리포트에(현 saju-report의 isPremium 분기 패턴 유지·확장).
