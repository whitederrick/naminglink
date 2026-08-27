// 클렌징 배치 — 사용자와 합의한 클렌징 시점(배치 10개)에서 정리하는 매칭 결함 (a)·(b).
//
// (a) term_ko/term_en에 괄호·슬래시가 있어 평범한 낱말이 한국어에서 단독으로 안 걸리던
// 상징들의 별칭을 채운다. 매 후보를 손으로 동형이의어 충돌 여부를 시험한 뒤에만
// 추가했다 — "신"(신나다)·"머리"(두통)·"임금"(급여)·"절"(절하다)·"사원"(회사원)·
// "뼈"(뼈를 깎는 노력 등 관용구)는 실제로 충돌 위험이 실측으로 확인돼 이번에도
// 손대지 않는다.
//
// (b) `isStandalone`의 `PARTICLES`에 어미(다·었·았·였·던 등)를 넣어 보는 것도 시도했다.
// "결혼했다"·"벌거벗었다" 같은 정상 매칭은 살아났지만 "말았다"(그만두다)→말(馬),
// "새었다"(날이 새다)→새(鳥), "개었다"(날이 개다)→개(犬), "물건을 집었다"→집(家),
// "라면이 불었다"→불(火)처럼 **새 오탐 다섯 건**이 실측으로 났다. 사전형("말다"·
// "새다"·"개다"·"집다"·"불다")으로도 같은 문제가 나 "다"만 남기는 것도 안전하지
// 않았다 — 결국 `dream-match.ts`의 `PARTICLES`는 손대지 않고 되돌렸다. 대신 안 걸리던
// 문장이 실제로 쓸 법한 **완전한 활용형을 상징별 별칭에 직접 올리는 쪽**으로 갔다
// (아래 marriage·bathing·naked·tooth-fall).
//
// 실행: node scripts/cleanse-dream-alias-gaps.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

function addAliases(id, aliases) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  for (const alias of aliases) {
    if (!symbol.aliases.includes(alias)) {
      symbol.aliases.push(alias);
      console.log(`별칭 추가: ${id} / ${alias}`);
    }
  }
}

// 눈(眼) — 별칭이 0개였다. "눈" 단독은 "눈"(snow)과 겹쳐 못 쓴다(기존 관례).
// "눈동자"·"눈알"은 눈(snow)과 겹치지 않고 동형이의어 충돌도 없다(확인함).
addAliases("eye", ["눈동자", "눈알"]);

// 금·보석 — "지금"·"요금"·"금지" 같은 합성어는 경계 검사(isStandalone)가 이미 걸러
// 준다(실측으로 확인: "길에서 금을 주웠다"는 걸리고 "금지된 행동"·"요금을 냈다"는
// 안 걸림). "보석"은 동형이의어가 없다.
addAliases("gold", ["금", "보석"]);

// 조상·죽은 사람 — "조상님"만 있었다. "조상"단독은 동형이의어가 없다.
addAliases("ancestor", ["조상"]);

// 대통령·임금 — "대통령"만 추가한다. **"임금"은 뺀다** — "임금이 올랐다"(급여)처럼
// 실제로 겹치는 실사용 표현이 있고, 경계 검사로도 못 가른다(실측으로 확인).
addAliases("president", ["대통령"]);

// 돌·바위 — "바위"만 있었다. "돌"단독은 "돌잔치"·"첫돌"·"돌겠다"류 관용구와 겹칠까
// 걱정했지만, 그 낱말들은 전부 합성어라 경계 검사가 이미 걸러 준다(실측으로 확인:
// "아이의 돌잔치를 했다"·"첫돌을 맞았다"·"정말 돌겠다"는 안 걸리고 "길에서 돌을
// 봤다"는 걸림).
addAliases("stone", ["돌"]);

// 신부·신랑 — 둘 다 추가한다. "신랑"은 동형이의어가 없다. "신부"는 "신부님이…"
// (사제, 존칭)처럼 뒤에 존칭이 오면 경계 검사가 걸러 주고("님"은 조사가 아니라 안
// 걸림, 확인함), 존칭 없이 "신부가…"만 쓰면 여전히 모호할 수 있다 — 그래도 실사용
// 빈도상 신부(bride)쪽이 훨씬 흔해 남겨 둔다.
addAliases("bride-groom", ["신랑", "신부"]);

// 거미 — "거미줄에 얽혔다"가 안 걸렸다. "거미줄"(거미+줄)은 합성어라 경계 검사가
// "거미"뒤에 "줄"이 조사가 아니라며 걸러 왔다 — 맞는 판정이지만, 그러면 "거미줄"이라는
// 표현 자체가 이 상징을 가리킬 방법이 없다. 통째로 별칭에 올린다.
addAliases("spider", ["거미줄"]);

// 이빨 빠짐 — "이가 빠졌다"가 안 걸렸다. 기존 별칭 "이가 빠"뒤에 오는 "졌"은 "지+었"이
// 축약된 별개의 음절이라 PARTICLES로는 못 잡는다(문자 자체가 다르다). **PARTICLES를
// 안 건드리기로 했으므로** 활용형 전체("이가 빠졌다")를 별칭으로 올려 자기 안에서
// 끝맺는다 — 뒤에 무엇이 오든 이 별칭 자체가 이미 "다"까지 포함해 경계 검사가 필요
// 없다.
addAliases("tooth-fall", ["이가 빠졌다"]);

// 결혼 — "내가 결혼했다"·"결혼했어요"가 안 걸렸다. 완전한 활용형을 별칭으로 올린다.
addAliases("marriage", ["결혼했다", "결혼했어요"]);

// 목욕 — "깨끗이 씻었다"가 안 걸렸다. 완전한 활용형을 별칭으로 올린다.
addAliases("bathing", ["씻었다"]);

// 벌거벗음 — "벌거벗었다"가 안 걸렸다. 완전한 활용형을 별칭으로 올린다.
addAliases("naked", ["벌거벗었다"]);

// 날다 — "자유롭게 하늘을 날았다"가 안 걸렸다(기존 별칭 "날았"뒤에 "다"가 필요했는데
// PARTICLES를 안 건드리기로 했다). 완전한 활용형을 별칭으로 올린다.
addAliases("flying", ["날았다"]);

// **손대지 않고 남긴 것** (memory에 이미 적힌 판단, 여기서 다시 확인만 함):
//   신·신령 — "신"단독은 "신나다"(흥분하다)와 충돌(경계 검사로도 못 가름, 실측 완료)
//   머리카락 — "머리"단독은 "두통"·"머리를 쓰다"(궁리하다)와 충돌
//   절·사원 — "절"(절하다)·"사원"(회사원) 둘 다 경계 검사로도 못 가름(실측 완료)
//   뼈·해골 — "뼈"는 "뼈를 깎는 노력"류 관용구와 경계 검사로도 못 가름(실측 완료)
//   차·기차 놓침 — "차" 단독은 원래도 너무 넓어 의도적으로 뺀 것으로 보임

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
