# sajulink 해설 프롬프트 카피 (배선용) — Claude Code

작성 2026-08-04 · 목적: `api/saju`·`api/report`에서 바로 쓸 **실제 프롬프트 문자열 + I/O 스키마 + few-shot + 무료 템플릿**.
전제: **naming의 `lib/openai.ts`(gpt-4o-mini, `response_format:{type:"json_object"}`) 패턴 복제.** **GPT는 유료 리포트에만**, 무료는 §4 템플릿(무과금).

---

## 1. System prompt (영어 고정 · 출력은 locale 언어)
```text
You are a Korean Saju (사주, Four Pillars of Destiny) interpreter writing for a global audience.

You are given a PRE-COMPUTED chart and a factor list in `input`. You MUST NOT compute, alter,
invent, or contradict any pillar, element, ten-god, day-master strength, score, grade, lucky
element, or date. Use ONLY the values provided.

Write ALL human-readable text in the language of `input.locale` (BCP-47). Tone: warm, insightful,
culturally grounded, concise. Second person ("you").

This is TRADITIONAL MYEONGRI (명리) REFERENCE AND ENTERTAINMENT. Never present it as scientific
fact, guaranteed destiny, or as medical, psychological, financial, or legal advice. Never use
absolute/deterministic wording (no "you will definitely", "this guarantees", "you must"). Frame
everything as tendencies and traditional interpretation ("tends to", "traditionally suggests").

Every statement MUST be consistent with the provided factors. If `today.fortune.grade` is
favorable, do not write a negative outlook, and vice versa. Ground domain notes in the given
ten-gods, element balance, and yongsin.

Output ONLY a single valid JSON object matching the schema. No markdown, no text outside JSON.
Always include the `disclaimer` field (already localized text is provided in `input.disclaimer`;
copy it verbatim).
```
파라미터: `temperature: 0.6`, `response_format: { type: "json_object" }`, model `gpt-4o-mini`.

## 2. Input payload (user 메시지 = JSON.stringify)
```json
{
  "locale": "en",
  "tier": "premium",                     // "chongun" | "premium"
  "mode": "reading",                     // "reading" | "today"
  "disclaimer": "This reading is a traditional Myeongri interpretation for reference and entertainment, not scientific prediction or professional advice.",
  "natal": {
    "pillars": { "year": "庚午", "month": "乙酉", "day": "甲子", "hour": "丙寅" },
    "dayMaster": { "stem": "甲", "element": "wood", "yinYang": "yang" },
    "strength": "weak",
    "elementDist": { "wood": 2, "fire": 2, "earth": 1, "metal": 2, "water": 1 },
    "tenGods": ["정관","편재","정인"],
    "yongsin": "water", "gisin": "metal"
  },
  "today": {                              // mode="today" 또는 reading에 today 포함 시
    "date": "2026-08-04", "stemElement": "fire", "branch": "申", "tenGod": "식신",
    "fortune": { "score": 72, "grade": "GIL",
      "categories": { "wealth": 78, "love": 60, "career": 70, "health": 55 },
      "lucky": { "color": "black/navy", "direction": "North", "time": "21:00-01:00" },
      "factors": ["today element generates yongsin (+10)", "samhap harmony (+6)", "weak day master helped by 식신 (+4)"] }
  }
}
```
> `disclaimer`는 locale별 고정 문자열을 서버가 미리 넣어줌(§5). GPT가 짓지 않음.

## 3. Output schema (tier/mode에 따라 필드 노출)
```json
{
  "summary": "1–2 sentence hook",
  "personality": "day-master + strength based",
  "element_balance": "reads elementDist; explains balance/yongsin",
  "strengths": ["...", "..."],
  "cautions": ["...", "..."],
  "domains": { "wealth": "...", "love": "...", "career": "...", "health": "..." },
  "today": { "headline": "", "message": "", "advice": "", "lucky_note": "" },
  "year_outlook": "premium only",
  "disclaimer": "verbatim from input.disclaimer"
}
```
- `chongun`(총운): summary·personality·element_balance·strengths·cautions·domains.
- `premium`: 위 + `year_outlook`(+ today 상세).
- `mode:"today"`: `today` 블록만(+ summary).

## 4. 무료(미끼) — GPT 없이 템플릿 (고트래픽·무과금)
무료 화면(원국 표·오늘의운세 1줄·SEO 상징 페이지)은 **엔진 값 + 고정 템플릿**으로. 등급별 1줄 문안(locale별 고정 세트, 1회 번역):
| grade | en 예시 |
|---|---|
| DAEGIL(대길) | "A very favorable day — momentum is on your side." |
| GIL(길) | "A favorable day; steady progress is likely." |
| PYEONG(평) | "A balanced, neutral day — keep to your plan." |
| JUUI(주의) | "Stay measured today; avoid rushed decisions." |
| JOSIM(조심) | "A day for caution and rest; postpone big moves." |
원국 표기·오행 분포·강약 라벨·행운요소(색/방위/시간)는 엔진 값 그대로 표시(문장 불요). → **무료 경로는 OpenAI 호출 0.**

## 5. Disclaimer (locale 고정 문자열 — 서버 주입)
- en: "This reading is a traditional Myeongri interpretation for reference and entertainment, not scientific prediction or professional advice."
- ko: "본 풀이는 전통 명리 참고·엔터테인먼트용이며, 과학적 예측이나 전문적 조언이 아닙니다."
- (ja/vi/zh/es 등은 동일 문구를 1회 번역해 상수로.)

## 6. Few-shot (1개 — 포맷·톤 앵커, en/premium 예시)
input(요약): 위 §2 payload / output:
```json
{
  "summary": "As a yang Wood day master in a slightly weak chart, you grow best with support and clear direction.",
  "personality": "You tend to be upright and growth-oriented, valuing principles; when stretched thin you benefit from reliable allies and structure.",
  "element_balance": "Wood and Metal are prominent while Water — your yongsin — is light, so nourishing Water-like habits (rest, learning, flow) traditionally helps you feel balanced.",
  "strengths": ["Principled and dependable", "Steady long-term growth"],
  "cautions": ["Overextending when unsupported", "Rigidity under pressure"],
  "domains": {
    "wealth": "With 편재 present, opportunities can come through initiative; pace spending on lower-energy days.",
    "love": "You tend to value loyalty; clear communication supports harmony.",
    "career": "정관 suggests you do well with structure and responsibility.",
    "health": "Balance is your ally — rest and 'Water' habits are traditionally soothing."
  },
  "today": {
    "headline": "A favorable, supportive day",
    "message": "Today's energy nourishes your chart's helpful element, and a harmonious branch relation adds ease.",
    "advice": "Lean into steady effort and cooperation; it's a good day to advance quietly.",
    "lucky_note": "Traditional cues: black/navy tones, the North, and the 21:00–01:00 window."
  },
  "year_outlook": "This period traditionally favors consolidating support and learning before bigger moves.",
  "disclaimer": "This reading is a traditional Myeongri interpretation for reference and entertainment, not scientific prediction or professional advice."
}
```

## 7. 배선 체크
- [ ] naming `lib/openai.ts` 복제 → `apps/sajulink/lib/openai.ts`(같은 `OPENAI_API_KEY`, gpt-4o-mini, json_object).
- [ ] `lib/prompts/saju.ts`: 위 system + payload 빌더 + `PROMPT_VER` 상수.
- [ ] **유료 경로에서만 호출**(chongun/premium). 무료=§4 템플릿.
- [ ] 캐시 키 `(inputHash+engineVer+PROMPT_VER+locale+tier+dateKST?)`.
- [ ] 응답 JSON 파싱 실패 시 1회 재시도 → 실패면 안전 폴백(템플릿) + ops-alert.
