# 해몽 사전 원문 커버리지 실측 — 다음 배치의 작업 목록

_2026-08-27 작성. 사용자가 "근거도 없는 자료를 기준으로 잡은게 문제인거 같은데"라고
지적해 사전의 기준을 **AI가 만든 218개 틀**에서 **원문(주공해몽·밀러)** 쪽으로 뒤집기로
한 뒤, 무엇이 실제로 근거를 갖고 있는지 전수로 잰 결과다._

**이 문서의 수치는 손으로 세지 않았다** — `node scripts/audit-dream-source-coverage.mjs`가
낸 것이다(CLAUDE.md §10 #40·41). 사전을 고치면 그 스크립트를 다시 돌려 이 문서를 갱신할 것.

```
node scripts/audit-dream-source-coverage.mjs          # 수치만
node scripts/audit-dream-source-coverage.mjs --list   # 목록까지
```

---

## 1. 지금 상태 (dictVer 1.37.0)

| | 개수 |
| --- | --- |
| 상징 | 218개 |
| 의미 | 350개 |
| **원문 근거 있는 의미**(`source: "tradition"`) | **105개** |
| 근거 없는 의미(`source: "general"`) | 245개 |

`source` 필드는 2026-08-27에 전면 재분류했다 — 그전에는 345/347건(99%)이 "tradition"
이었지만 **스키마 기본값으로 기계적으로 채워진 거짓 라벨**이었다. git 이력 21개 커밋을
의미 단위로 대조해 실제 근거만 남겼다(`scripts/reclassify-dream-meaning-source.mjs`,
CLAUDE.md §21).

### 상징별 원문 커버리지

밀러 표제어 2,257개와 `term_en`을 대조하고, 근거 유무는 `source` + `culture_note`
인용문으로 판정했다.

| 갈래 | 개수 | 뜻 |
| --- | --- | --- |
| 근거 있음 · 밀러 표제어에도 있음 | 54 | 이미 채웠고, 밀러로 더 넓힐 여지도 있음 |
| **밀러에 있는데 아직 안 씀** | **69** | ← **다음 배치 우선순위** |
| 근거 있음 · 밀러 표제어엔 없음 | 18 | 주공해몽으로만 채운 것 |
| **둘 다 근거 없음**(AI가 만든 것) | **77** | ← **존치/제거 미결정** |

---

## 2. 원문 자료 둘

| 자료 | 위치 | 규모 | 라이선스 |
| --- | --- | --- | --- |
| 《주공해몽(周公解夢)》 | `apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json` | 27개 갈래·988줄 | 퍼블릭 도메인(송대, 작자 미상) |
| 밀러 《10,000 Dreams Interpreted》(1901) | `apps/dreamslink/data-sources/miller-1901-parsed.json` | 표제어 2,257개 | 퍼블릭 도메인, 상업 이용 가능 |

**2026-08-27까지 12차례의 배치가 전부 주공해몽만 썼고 밀러는 한 번도 열어보지 않았다.**
그래서 69개가 미개척으로 쌓여 있다 — 지금 가장 큰 지렛대다.

### 사용자가 정한 규칙 — 상충 시 한국 우선

> **"상충되는건 한국을 우선합시다."** (2026-08-27)

밀러는 19세기 서양 상징 체계라 한국 통설과 정면으로 어긋나는 자리가 있다.

```
까치 울음   한국 = 반가운 소식(길조)
            밀러 = "denotes much dissatisfaction and quarrels"  ← 안 쓴다
```

이런 자리는 **밀러 근거를 넣지 않고 기존 한국 해석을 그대로 둔다.** 같은 표제어의 다른
문단이 상충하지 않으면 그 문단만 골라 쓸 수는 있다.

---

## 3. 밀러 미개척 69개 — 다음 배치 목록

```
magpie(까치)*, bear(곰), butterfly(나비), sea(바다), river(강), snow(눈), blood(피),
pregnancy(임신), wound(상처), eye(눈(眼)), flying(날다), crying(우는 것),
laughing(웃는 것), eating(먹는 것), drowning(물에 빠짐), digging(땅 파기), gun(총),
stairs(계단), watch(시계), baby(아기), crowd(군중), school(학교), hospital(병원),
sky(하늘), elephant(코끼리), lion(사자), wolf(늑대), sheep(양), whale(고래),
shark(상어), peacock(공작), owl(부엉이), fox(여우), mosquito(모기), comet(혜성),
volcano(화산), island(섬), ice(얼음), fog(안개), tornado(회오리), valley(계곡),
forest(숲), beard(수염), tongue(혀), heart(심장), bone(뼈·해골), hand(손), face(얼굴),
singing(노래), cooking(요리), traveling(여행), crown(왕관), wallet(지갑), camera(카메라),
medicine(약), needle(바늘), scissors(가위), twins(쌍둥이), police(경찰), doctor(의사),
bride-groom(신부·신랑), tower(탑), elevator(엘리베이터), bank(은행), hotel(호텔),
bread(빵), meat(고기), milk(우유), grape(포도)
```

`*` 까치는 상충 사례로 확인됨 — 위 규칙대로 밀러 근거를 쓰지 않는다.

**배치 절차**(주공해몽 배치에서 굳은 것과 같다):
1. 밀러 원문(`entries[].text`)을 읽고 기존 한국어 문맥과 상충하는지 먼저 본다
2. 상충 없는 문단만 골라 `scripts/add-dream-miller-batchN.mjs` 작성·실행
3. `dream-contexts-ko.ts`·`dream-contexts.ts`에 매칭 키를 **손으로** 추가
   (생성기 `build-dream-contexts.ts`·`build-dream-aliases-en.ts`는 돌리지 말 것 — CLAUDE.md §10 #49)
4. `verify-dream-context-parity.ts`에 ko/en 시험 쌍 추가
5. **통과해도 손으로 `matchDream`에 태워 정답 재확인**
6. `verify-guide-numbers`가 요구하는 문서 숫자 갱신 → tsc → build → 커밋

---

## 4. 둘 다 근거 없음 77개 — 존치/제거 미결정

**이 목록은 사용자 결정을 기다린다.** AI가 2026-08-06에 상식으로 만든 것들이고 두 원문
어디에도 대응 항목이 없다. 지우면 색인된 URL이 그만큼 줄어든다(상징마다 개별 주소를 가짐).

```
dog(개), carp(잉어), phoenix(봉황), bee(벌), frog(개구리), insect(벌레),
dragon-serpent(구렁이), water-clear(맑은 물), water-muddy(흙탕물), flood(홍수),
nail(손톱), naked(벌거벗음), falling(추락), chased(쫓김), chasing(쫓음), exam(시험),
fighting(싸움), lost-way(길 잃음), climbing(오름), descending(내려감),
giving-birth(출산), losing-item(잃어버림), ancestor(조상·죽은 사람), celebrity(연예인),
stranger(낯선 사람), ex-lover(옛 연인), toilet(화장실), temple(절·사원),
underwater(물속), white(흰색), red(빨강), black(검정), gold-color(금색),
number-seven(숫자 7), number-three(숫자 3), eagle(독수리), dove(비둘기), octopus(문어),
duck(오리), ant(개미), crab(게), earthworm(지렁이), dinosaur(공룡), cave(동굴),
spring-water(샘), pearl(진주), ear(귀), sweat(땀), foot(발), dancing(춤),
praying(기도), shopping(쇼핑), missing-transport(차·기차 놓침), being-late(지각),
hiding(숨음), kissing(키스), drinking-alcohol(술 마심), moving-house(이사), photo(사진),
glasses(안경), bell(종), painting(그림), soldier(군인), old-person(노인),
foreigner(외국인), airport(공항), station(역), rooftop(옥상), egg(계란), cake(케이크),
blue(파랑), green(초록), number-nine(숫자 9), number-eight(숫자 8), chestnut(밤),
chili(고추), bead(구슬)
```

**갈래를 나눠 볼 것** — 전부 같은 성격이 아니다.

- **현대 사물**(엘리베이터·은행·공항·카메라 등)은 원문에 있을 수가 없다. 지우면 요즘
  사람이 실제로 꾸는 꿈이 사전에서 빠진다.
- **한국 고유 상징**(구렁이=업신·까치·태몽류)은 원문 둘에 없더라도 한국 민속 자료로
  근거를 댈 수 있을지 모른다 — 다만 한국민속대백과사전은 공공누리 제4유형(상업 이용
  금지)이라 문장을 못 가져다 쓴다. 사실 대조용 참고만 가능
  (memory: `dream-dictionary-cannot-be-model-grown`).
- **추상 행위**(지각·숨음·쇼핑)는 전통 해몽의 축(사물·형상)과 애초에 안 맞는다.

---

## 5. 이번 감사에서 잡은 실제 결함

**호랑이·소·말·물고기·거북이 — 근거가 git 이력에만 있고 제품에는 안 보였다.**

2026-08-26 `dc28636` 커밋이 이 다섯에 주공해몽 근거로 새 의미를 넣으면서 **인용문을 커밋
메시지에만 적고 `culture_note`에는 안 넣었다.** 결과:

- 의미는 `source: "tradition"`으로 올바르게 표시됨(실제로 근거가 있으므로)
- 그런데 상징 화면의 "전해 오는 배경" 절은 `culture_note`로 그리므로 **아예 안 떴다**
- 근거가 있는데 이용자에게는 없는 것처럼 보이는 상태로 하루 넘게 방치

**손으로 셌으면 못 잡았다** — 이 감사 스크립트를 짜서 수치를 냈더니 앞서 손으로 센 것과
어긋나(72 vs 74) 원인을 파다 드러났다. 다섯 인용 전부 원문에서 재확인한 뒤
`scripts/backfill-missing-culture-notes.mjs`로 채웠다.

---

## 관련

- `CLAUDE.md` §21 — source 필드가 스키마 기본값으로 거짓 라벨을 만든 사고
- `docs/WORKLOG_2026-08-27-3.md` — 방향 전환 당일 기록
- memory `dream-dictionary-cannot-be-model-grown` — 왜 모델로는 못 늘리는가
- memory `dream-dictionary-source-field-was-fake` — 라벨 조작 사고
