# dreamslink 도메인 로직 설계 — 해몽 상징사전 구조 + 프롬프트

작성 2026-08-04 · 대상: `apps/dreamslink` · 원칙: **상징사전으로 GPT를 grounding**해 환각 방지. 사주엔진·한자 불필요(최경량).

---

## 1. 파이프라인
```
꿈 텍스트 입력(+옵션: 감정/상황)
  → ① 상징 추출: dream text에서 상징 키워드 후보 뽑기(LLM 또는 키워드+임베딩)
  → ② 사전 조회: dream_symbols에서 매칭(정확/유사) → 근거 의미 세트
  → ③ 해석 합성: GPT가 매칭된 사전 의미 + 감정/상황을 근거로 일관된 해몽 생성
  → ④ 결과 조립(티어) → 캐시((textHash+dictVer+promptVer+locale+tier))
※ 매칭 0건이면 "전통적 근거 없음" 명시 + 일반 심리 해석만(전통 의미 날조 금지).
```

---

## 2. 상징사전 데이터 구조 (`dream_symbols`)
Supabase 테이블(또는 seed JSON → DB). 사전은 **canonical ko/en**로 관리, 타 언어는 GPT가 로컬라이즈.
```sql
dream_symbols(
  id            text primary key,        -- 'pig','tooth-fall','water','snake'
  term_ko       text,  term_en text,
  aliases       text[],                  -- 표기 변형·동의어 매칭용
  category      text,                    -- animal|person|nature|object|action|body|place|emotion|number|color
  polarity      text,                    -- positive|negative|neutral|ambivalent
  meanings      jsonb,                    -- [{context, interpretation_ko, interpretation_en, polarity}]
  culture_note  text,                    -- 한국 전통 해몽 배경(선택)
  tags          text[],                  -- '재물','임신','구설','변화'...
  related_ids   text[],
  weight        int default 1            -- 해석 우선순위(대표 상징일수록 ↑)
)
```
### 예시 seed (전통 한국 해몽 톤)
```json
[
 {"id":"pig","term_ko":"돼지","term_en":"pig","category":"animal","polarity":"positive",
  "tags":["재물"],"meanings":[{"context":"돼지가 집에 들어옴","interpretation_ko":"재물·횡재수","interpretation_en":"incoming wealth/fortune","polarity":"positive"}],
  "culture_note":"한국 전통에서 돼지꿈=금전운의 대표 길몽"},
 {"id":"tooth-fall","term_ko":"이빨 빠짐","term_en":"tooth falling out","category":"body","polarity":"ambivalent",
  "tags":["구설","가족","변화"],"meanings":[
    {"context":"윗니","interpretation_ko":"윗사람/부모 관련 근심","interpretation_en":"concern about elders","polarity":"negative"},
    {"context":"피 없이","interpretation_ko":"변화·전환","interpretation_en":"transition/change","polarity":"neutral"}]},
 {"id":"water-clear","term_ko":"맑은 물","term_en":"clear water","category":"nature","polarity":"positive",
  "tags":["재물","감정"],"meanings":[{"context":"맑고 잔잔","interpretation_ko":"재물·정서적 안정","interpretation_en":"wealth & emotional calm","polarity":"positive"}]},
 {"id":"snake","term_ko":"뱀","term_en":"snake","category":"animal","polarity":"ambivalent",
  "tags":["재물","임신","경계"],"meanings":[
    {"context":"뱀을 잡음/품음","interpretation_ko":"재물·태몽 가능","interpretation_en":"wealth or conception omen","polarity":"positive"},
    {"context":"물림","interpretation_ko":"구설·건강 주의","interpretation_en":"caution: disputes/health","polarity":"negative"}]},
 {"id":"falling","term_ko":"떨어짐/추락","term_en":"falling","category":"action","polarity":"negative",
  "tags":["불안","통제감"],"meanings":[{"context":"높은 곳에서 추락","interpretation_ko":"불안·통제감 상실","interpretation_en":"anxiety/loss of control","polarity":"negative"}]},
 {"id":"feces","term_ko":"똥","term_en":"feces","category":"object","polarity":"positive",
  "tags":["재물"],"meanings":[{"context":"몸에 묻음","interpretation_ko":"재물·행운","interpretation_en":"wealth/luck","polarity":"positive"}]},
 {"id":"death","term_ko":"죽음","term_en":"death","category":"emotion","polarity":"ambivalent",
  "tags":["변화","재생"],"meanings":[{"context":"자신/타인의 죽음","interpretation_ko":"끝과 새 시작·재생(현실 죽음 아님)","interpretation_en":"endings & rebirth (not literal)","polarity":"neutral"}]}
]
```
### 시드 전략
- 1차 시드 ~120–200개(빈출 상징: 동물·물·불·돈·이빨·죽음·추락·비행·쫓김·시험·아기·뱀·똥·결혼·시험·물고기 등). 카테고리별 균형.
- 확장: 로그에서 미매칭 빈출어를 큐로 모아 주기적 사전 보강(운영 대시보드). `dictVer` 증가 시 캐시 무효화.

---

## 3. 상징 추출·매칭 (② 단계)
- 1차: 정규화 후 `term_ko/term_en/aliases` 정확·부분 매칭.
- 2차(선택): 임베딩 유사도로 근접 상징 보강(예 "이가 흔들려 빠졌다"→tooth-fall).
- 컨텍스트 태그(윗니/피 유무/잡음·물림 등)로 `meanings[].context` 중 최적 선택.
- 매칭 결과 = `matched:[{id, term, chosenMeaning, polarity, weight}]`, weight desc 정렬 top N(무료 1–2, 유료 전체).

---

## 4. 해몽 프롬프트 설계 (③ 단계)
### 4.1 시스템 프롬프트(요지)
```
You are a Korean dream-interpretation (Haemong) writer for a global audience. Write in {locale}.
You are given the user's dream and a list of MATCHED traditional symbols with meanings.
Ground your interpretation ONLY in the matched symbols + general dream psychology.
If a claim is "traditional", it MUST come from a matched symbol's meaning — never invent
traditional Korean meanings. If no symbols matched, give a gentle psychological reading and
say no specific traditional symbol was found. This is reflective/entertainment content —
never medical, psychiatric, financial, or predictive advice. Output valid JSON only.
```
### 4.2 GPT 입력
```json
{ "locale":"en","tier":"premium",
  "dream":"I was falling and my tooth fell out, then saw clear water",
  "emotion":"anxious",
  "matched":[
    {"id":"tooth-fall","term":"tooth falling out","meaning":"transition/change","polarity":"neutral","weight":2},
    {"id":"falling","term":"falling","meaning":"anxiety/loss of control","polarity":"negative","weight":2},
    {"id":"water-clear","term":"clear water","meaning":"wealth & emotional calm","polarity":"positive","weight":1}] }
```
### 4.3 출력 JSON 스키마(티어별)
```json
{
  "summary":"1–2 sentence overall",
  "symbols":[{"term":"","traditional":"","note":""}],   // 매칭 상징별(무료 1–2)
  "interpretation":"통합 해석(전통+상황)",                 // 심층
  "psychological":"심리적 관점",                           // 심층
  "emotional_reflection":"감정 연결(입력 emotion 반영)",
  "guidance":"부드러운 조언 1–2",
  "lucky_hint":"가벼운 행운 힌트(가벼운 톤)",              // 유료
  "no_match_notice":"전통 상징 미발견 시 안내",            // 조건부
  "disclaimer":"reflective/entertainment, not advice"
}
```
### 4.4 규칙
- grounding 필수: `traditional` 서술은 matched 의미에서만. 미매칭이면 `no_match_notice` + 심리 해석.
- 금지: 의학·정신과·재무·예언 단정, 사전에 없는 "전통 의미" 날조.
- 길이: 무료<심층. locale: en+ja/zh/vi/es 우선.
- 캐시: `(textHash + dictVer + promptVer + locale + tier)`.

---

## 5. 티어 매핑
| 필드 | 무료(광고) | 심층 PDF(2,900) |
|---|---|---|
| summary·symbols(1–2)·간단 해석 | ● | ● |
| interpretation·psychological·emotional·guidance·전체 symbols·lucky_hint·PDF | ✕ | ● |
| (옵션) 꿈일기 저장·패턴 분석 | — | 구독(후속) |

---

## 6. 다국어
- 사전은 ko/en canonical. 타 언어는 GPT가 matched 의미를 로컬라이즈해 서술(사전 전량 번역 불필요).
- UI/법적/결제는 inyeonlink shell의 i18n·legal 재활용.

---

## 7. 인터페이스 스텁
```ts
// lib/dream-symbols.ts
export type DreamSymbol = { id:string; term_ko:string; term_en:string; aliases:string[];
  category:string; polarity:'positive'|'negative'|'neutral'|'ambivalent';
  meanings:{context:string;interpretation_ko:string;interpretation_en:string;polarity:string}[];
  culture_note?:string; tags:string[]; related_ids:string[]; weight:number };
export function matchSymbols(dreamText:string, opts?:{emotion?:string}): Promise<Matched[]>;
// lib/engines/dream-interpret.ts
export function buildDreamPrompt(input:{dream:string;emotion?:string;matched:Matched[];locale:string;tier:string}): PromptPayload;
```
`dictVer` 변경 시 캐시 무효화. 미매칭 빈출어는 운영 큐로 수집→사전 보강.
```
```
