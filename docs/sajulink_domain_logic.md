# sajulink 도메인 로직 설계 — 해설 프롬프트 + 오늘의 운세 스코어링

작성 2026-08-04 · 대상: `apps/sajulink` · 원칙: **계산은 결정론 엔진, GPT는 해설만.** 재현성(같은 입력·같은 날 → 같은 결과) 필수.

---

## 1. 엔진 재활용 맵 (무엇을 어디서 얻나)
| 산출물 | 출처 모듈 (기존) |
|---|---|
| 원국(년·월·일·시주 간지), 음양력·절기·경도 보정 | `packages/core/src/saju/{engine,calendar,timezone}` |
| 오행 매핑·분포 | `packages/core/src/saju/elements` + `inyeonlink/lib/engines/elements` |
| 일간·강약, 십신 | `packages/core/src/saju/ten-gods` + `inyeonlink/lib/engines/{saju,ten-gods}` |
| 용신/기신 | `inyeonlink/lib/engines/yongsin` |
| 지지 관계(합·충·형·파·해) | `inyeonlink/lib/engines/branches` |
| 오늘 일진(오늘 날짜의 간지) | `packages/core/src/saju/engine`에 **today = 현재 KST 날짜** 입력 |

→ **신규 코드는 `lib/engines/today-fortune.ts` 하나**(아래 스코어링) + 해설 프롬프트뿐. 나머지는 위 재활용.

---

## 2. 데이터 흐름
```
입력(생년월일시·지역·양음력)
  → core saju engine → 자연 원국(natal): 4주 간지 / 오행분포 / 일간·강약 / 십신 / 용신·기신 / 지지집합
  → today-fortune(natal, todayKST):  오늘 일진 간지 → natal과의 관계 → 결정론 스코어(종합+카테고리+행운요소)
  → 프롬프트(factors) → GPT 해설(로케일)  ※GPT는 숫자·간지 생성 금지, 해설만
  → 결과 조립(티어별) → 캐시((inputHash+engineVer+promptVer+locale+tier+dateKST))
```

---

## 3. 오늘의 운세 스코어링 규칙 (결정론)

> 목표: 오늘 일진이 사용자 사주에 얼마나 우호적인가를 **규칙**으로 0~100 점수화 + 4개 카테고리 서브점수 + 행운요소. 가중치는 코드 상수가 아니라 **DB(`saju_scoring_config`)에서 관리**해 배포 없이 튜닝(gunghap 원칙 재사용).

### 3.1 입력 요소
- natal: `dayMaster`(일간, 오행+음양), `strength`(강/중/약), `yongsin`(용신 오행), `gisin`(기신 오행), `elementDist`(오행 5종 가중치), `branches`(자연 지지 집합).
- today: `todayStemElement`(오늘 천간 오행), `todayBranch`(오늘 지지), `todayTenGod`(오늘 천간의 일간 대비 십신).

### 3.2 종합 점수 (base 50 ± 보정)
```
score = 50
① 용신/기신 관계 (가장 큰 축, ±25)
   if todayStemElement == yongsin        → +20
   elif todayStemElement 生 yongsin(상생) → +10
   elif todayStemElement == gisin         → −20
   elif todayStemElement 克 yongsin(상극)  → −12
② 일간 대비 오늘 오행 생극 (±10)
   생아(오늘이 일간을 生) → +6 / 비화(동일오행) → +4 / 아생(일간이 오늘을 生) → −2 / 극아(오늘이 일간을 克) → −8 / 아극(일간이 오늘을 克, 재물) → +3
③ 지지 관계(오늘 지지 vs 자연 지지들) (±12, 다중이면 합산 후 clamp)
   삼합/육합 → +6 each / 충 → −7 each / 형·파·해 → −3 each
④ 강약 보정 (±5)
   일간 弱 & 오늘이 印/比(도움) → +5 ; 일간 强 & 오늘이 印/比(과다) → −4
   일간 强 & 오늘이 食/財/官(설기·극) → +4 ; 일간 弱 & 오늘이 財/官(부담) → −4
score = clamp(score, 5, 98)   # 0·100 극단 회피(신뢰·과잉약속 방지)
등급: ≥80 大吉 / 65–79 吉 / 45–64 平 / 30–44 注意 / <30 조심
```

### 3.3 카테고리 서브점수 (오늘 천간의 십신 테마로 가중)
| 카테고리 | 강화 십신(오늘) | 규칙 |
|---|---|---|
| 재물(Wealth) | 정재·편재 | 오늘 십신이 재성 → 카테고리 base +15; 종합점수 40% 반영 |
| 애정(Love) | (남)재성 / (여)관성, 또는 배우자궁(일지) 관계 | 재/관성 또는 일지 합 → +15 / 일지 충 → −12 |
| 직업·명예(Career) | 정관·편관·식상 | 관성 → +12(안정), 식상 → +8(활동/표현) |
| 건강(Health) | — | 오행 균형도 + 충 개수 기반: 충 많을수록 −, 용신 우호일수록 + |
각 카테고리 = clamp(종합 base × 0.6 + 테마보정, 5, 98).

### 3.4 행운 요소 (용신 기반, 결정론 매핑)
- 행운 색/방위/시간: `yongsin` 오행 → 고정 매핑(목=청·동/화=적·남/토=황·중앙/금=백·서/수=흑·북; 시간대는 오행별 지지 시각). DB 테이블 `element_lucky_map`.
- 오늘의 조언 1줄: 위 factors를 프롬프트에 넘겨 GPT가 생성(숫자·판정은 엔진값 그대로).

### 3.5 결정론·캐시
- 순수 함수 `todayFortune(natal, dateKST, config) → {score, grade, categories, lucky, factors[]}`. 단위테스트로 고정.
- 캐시 키에 **dateKST 포함** → 하루 동안 동일. 자정(KST) 넘어가면 갱신. `factors[]`는 해설 프롬프트 입력이자 "왜 이 점수인가" 근거 표시용.

### 3.6 무료 vs 유료(운세)
- 무료: 종합 등급 + 1줄 + 카테고리 아이콘(점수 블러 일부) → 광고.
- (구독/프리미엄, 옵션) 카테고리 상세 점수 + 행운요소 + 7일 추이.

---

## 4. saju 해설 프롬프트 설계

### 4.1 시스템 프롬프트(요지, 영어 기준·출력은 locale)
```
You are a Korean Saju (Four Pillars of Destiny) writer for a global audience.
You are given a PRE-COMPUTED chart and factor list. NEVER compute, alter, or invent
pillars, elements, ten-gods, scores, or dates — use only the provided values.
Write in {locale}. Tone: insightful, warm, culturally grounded, concise.
This is TRADITIONAL MYEONGRI REFERENCE / ENTERTAINMENT — never present it as
scientific prediction, guaranteed fate, or medical/financial/legal advice.
Do not contradict the provided factors. Output MUST be valid JSON only.
```

### 4.2 GPT 입력(구조화 factors — 엔진 계산값)
```json
{
  "locale":"en", "tier":"premium",
  "natal":{ "pillars":{"year":"庚午","month":"...","day":"甲子","hour":"..."},
    "dayMaster":{"stem":"甲","element":"wood","yinYang":"yang"},
    "strength":"weak",
    "elementDist":{"wood":2,"fire":1,"earth":1,"metal":3,"water":1},
    "tenGods":["정관","편재","정인"], "yongsin":"water","gisin":"metal" },
  "today":{ "date":"2026-08-04", "stem":"丙","stemElement":"fire",
    "branch":"申","tenGod":"식신",
    "fortune":{"score":72,"grade":"吉",
      "categories":{"wealth":78,"love":60,"career":70,"health":55},
      "lucky":{"color":"black/blue","direction":"north","time":"21-23"},
      "factors":["todayStem 生 yongsin(+10)","삼합(+6)","일간 弱 & 오늘 食(+4)"]}}
}
```

### 4.3 출력 JSON 스키마(티어별 필드 노출)
```json
{
  "summary":"1–2 sentence hook",
  "personality":"day-master + strength 기반 성격(무료 일부)",
  "element_balance":"오행 분포 해설(분포 수치 근거)",
  "today":{ "headline":"", "message":"", "advice":"", "lucky_note":"" },
  "strengths":["..."], "cautions":["..."],
  "domains":{ "wealth":"", "love":"", "career":"", "health":"" },   // 총운+
  "year_outlook":"올해 총운",                                        // 프리미엄
  "disclaimer":"traditional reference, not fate"
}
```

### 4.4 규칙(금지/필수)
- 필수: 제공 factors와 **정합**(예: grade 吉인데 부정 서술 금지). disclaimer 항상 포함. locale 언어로만.
- 금지: 수명·질병 진단, 특정 투자·법적 조언, 운명 단정("반드시/틀림없이"), factors에 없는 간지·점수 생성.
- 길이: 무료<총운<프리미엄. day-1 locale = en+ja/zh/vi/es, 나머지 후속.
- 캐시: `(inputHash + engineVer + promptVer + locale + tier + dateKST)`.

### 4.5 티어별 콘텐츠 매핑
| 필드 | 무료 | 총운(4,900) | 프리미엄(9,900·PDF) |
|---|---|---|---|
| summary/personality(일부)/today 등급·1줄 | ● | ● | ● |
| element_balance·strengths·cautions·domains | ✕(블러) | ● | ● |
| year_outlook·행운 상세·PDF | ✕ | ✕ | ● |

---

## 5. 인터페이스 스텁 (Claude Code 참고)
```ts
// lib/engines/today-fortune.ts
export type Natal = { pillars: Pillars; dayMaster: {stem:string;element:Elem;yinYang:'yin'|'yang'};
  strength:'strong'|'medium'|'weak'; elementDist: Record<Elem,number>;
  tenGods: string[]; yongsin: Elem; gisin: Elem; branches: string[] };
export type TodayFortune = { score:number; grade:string;
  categories: {wealth:number;love:number;career:number;health:number};
  lucky:{color:string;direction:string;time:string}; factors:string[] };
export function todayFortune(natal: Natal, dateKST: string, config: ScoringConfig): TodayFortune;
```
`ScoringConfig`(가중치·매핑)는 DB `saju_scoring_config`·`element_lucky_map`에서 로드 → 배포 없이 튜닝.
```
```
