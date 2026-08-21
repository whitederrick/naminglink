// 레포의 검사기를 **한 명령으로 전부** 돌리고, 결과를 세 갈래로 가른다.
//
// ## 왜 있는가 (2026-08-07)
//
// 어제 검사기 67개를 전수로 돌려 「없거나·늘 빨간불이거나·못 도는」 자리를 걷어냈다. 그런데
// 오늘 다시 훑었더니 **가짜 빨간불이 7건** 났다. 결함이 아니라 **부르는 법이 제각각**이어서였다:
//
//   naminglink 넷      `server-only`를 임포트하는 모듈을 끌어와, 전용 tsconfig가 있어야 돈다
//   audit-pdf-*.py 셋  인자를 요구한다 — 실은 `audit-pdfs.mjs`가 감싸서 부른다
//   verify-reachable…  앱 이름과 주소 두 개를 인자로 받는다
//
// 그 사실이 **각 파일 머리 주석에만** 적혀 있었다. 주석은 사람이 읽어야 알고, 훑는 사람은
// 다음에도 같은 7건에서 멈춘다. **부르는 법을 코드가 알아야 한다.**
//
// ## 갈래 — **셋뿐이다**
//
//   통과       exit 0
//   검사 안 됨 환경이 없어 못 돌았거나(dev 서버·자격증명), 부수효과가 있어 **안 돌렸다.**
//              **통과로 세지 않는다** — 합계에 따로 찍히고 종료 코드가 2가 된다
//   빨간불     나머지 전부. **분류하지 못한 실패도 여기 넣는다** — 모르는 것을 통과로 바꾸지 않는다
//
// 「감싸짐」(다른 검사가 대신 돌려 준다)은 **없앴다.** 세 판 연속 뚫려서다 — 아래
// `ARGV` 의 PDF 항목에 그 경위가 적혀 있다.
//
// ## 새 검사기를 만들면
//
// 파일 이름이 `verify|audit|validate`로 시작하면 **저절로 잡힌다.** 그다음 둘만 보면 된다.
//
//   인자가 필요하면      아래 `ARGV` 에 한 줄
//   비용이 들거나        `// AUDIT_SIDE_EFFECTS: <무엇을 건드리는지>`
//   운영 DB 를 건드리면   → 기본 스윕에서 **안 돈다**(안 돌린 것은 통과가 아니다)
//
// 건드리는 것으로 **보이는데** 아무 선언도 없으면 감사기가 잡는다. 실제로는 아니라면
// `// AUDIT_NO_SIDE_EFFECTS: <왜 아닌지>` 로 이유를 적는다.
//
// 실행:
//   node scripts/audit-verifiers.mjs            전부 돌린다(부수효과 있는 것은 뺀다)
//   node scripts/audit-verifiers.mjs --list     무엇을 어떻게 부를지만 보여 준다
//   node scripts/audit-verifiers.mjs --filter legal   이름에 그 말이 든 것만
//   node scripts/audit-verifiers.mjs --self-test      대조군만 세고 끝낸다(스윕을 돌리지 않는다)
//   node scripts/audit-verifiers.mjs --with-side-effects   **비용·운영 DB 를 건드린다**
//
// 종료 코드 — **`exit 0`은 「전부 돌았고 깨끗하다」일 때뿐이다.**
//   0  고른 것이 전부 돌았고 빨간불이 없다
//   1  빨간불이 있다 · 대조군이 깨졌다 · 실행 0회다 · 부수효과 선언이 없다
//   2  빨간불은 없으나 **검사하지 못한 것이 있다.** 통과가 아니다

import { spawn, spawnSync } from "node:child_process";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS, APP_DOMAINS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IS_VERIFIER = /^(verify|audit|validate).*\.(mjs|ts|py)$/;
/** 이 러너 자신. 이름이 규칙에 맞지만 검사기가 아니다(자기를 돌리면 끝없이 겹친다). */
const SELF = "audit-verifiers.mjs";
const TIMEOUT_MS = 420_000;

/**
 * 인자가 필요한 검사기에 **무엇을 넘길지**. 파일 이름으로 건다(앱 목록이 아니다).
 *
 * 한 검사기가 앱마다 한 번씩 돌아야 하면 여러 벌을 돌려준다. 주소는 `APP_DOMAINS`에서 오고
 * **여기 적지 않는다** — 도메인이 바뀌면 옛 주소를 두드리며 「통과」를 찍게 된다.
 */
const ARGV = {
  "verify-reachable-links.mjs": () =>
    APP_KEYS.filter((app) => APP_DOMAINS[app]).map((app) => ({
      label: app,
      args: [app, `https://${APP_DOMAINS[app]}`],
    })),
  /**
   * **PDF 검사 셋은 인자를 받아 직접 돈다** (2026-08-21 4차 재검증 P1).
   *
   * 예전에는 `audit-pdfs.mjs` 가 「내가 대신 돌린다」고 선언하면 이 셋을 **안 돌렸다**(감싸짐).
   * 그 갈래가 두 번 뚫렸다 — 부르기만 해도 참이 됐고, 선언만 해도 참이 됐고, 자취를
   * 요구하자 **이름만 찍어도** 참이 됐다. **출력 문자열로 만드는 증거는 위조된다.**
   *
   * 그래서 갈음을 없앴다. `audit-pdfs.mjs --audit-plan` 은 「어떤 인자로 무엇을 돌릴지」만
   * 알려 주고, 여기서 **감사기가 제 손으로** 돌린다. 믿을 것이 없으면 속을 것도 없다.
   */
  "audit-pdf-language.py": () => pdfRuns("audit-pdf-language.py"),
  "audit-pdf-layout.py": () => pdfRuns("audit-pdf-layout.py"),
  "audit-pdf-glyphs.py": () => pdfRuns("audit-pdf-glyphs.py"),
};

/** 계획을 한 번만 물어본다(셋이 같은 계획을 쓴다). */
let pdfPlanCache = null;
function pdfPlan() {
  if (pdfPlanCache) return pdfPlanCache;
  const r = spawnSync("node", ["scripts/audit-pdfs.mjs", "--audit-plan"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (r.status !== 0) {
    pdfPlanCache = { jobs: [], gaps: [{ app: "(all)", why: `계획을 못 받았다: exit ${r.status}` }] };
    return pdfPlanCache;
  }
  try {
    pdfPlanCache = JSON.parse(r.stdout);
  } catch (error) {
    pdfPlanCache = { jobs: [], gaps: [{ app: "(all)", why: `계획이 JSON 이 아니다: ${error.message}` }] };
  }
  return pdfPlanCache;
}

/**
 * 그 스크립트를 돌릴 인자들. **비어 있으면 빈 배열을 돌려준다** — 부르는 쪽이 그것을
 * 「검사 안 됨」으로 적는다. 조용히 통과시키지 않는다.
 */
function pdfRuns(script) {
  return pdfPlan()
    .jobs.filter((job) => job.script === script)
    .map((job) => ({ label: `${job.app}/${path.basename(job.dir)}`, args: job.args.slice(1) }));
}

/** 「돌 수 없다」고 스스로 말하는 출력. 결함이 아니라 검사할 수 없었던 것이다. */
const CANNOT_RUN = [
  { re: /서버가 없다|ECONNREFUSED|fetch failed|dev 서버가 떠 있어야/i, why: "dev 서버 필요" },
  /**
   * **엉뚱한 환경을 보고 있는 것도 「환경이 없다」다** (2026-08-20).
   *
   * 이 저장소는 네 앱을 붙은 포트로 띄운다(3001~3004). `BASE_URL`이 하나 옆을 가리키면 **200과
   * `text/html`이 정상으로 돌아오므로** 검사기가 앱 결함으로 신고하게 된다 — 없는 결함을 쫓게
   * 되고, 출력이 「HTTP 200」이라 원인도 안 보인다. 2026-08-19에 빨간불 하나의 정체를 찾는 데
   * 하루가 걸린 자리가 이 부류다.
   */
  { re: /다른 앱을 보고 있다/i, why: "다른 앱 환경" },
  { re: /OPENAI_API_KEY|비용이 든다/i, why: "OpenAI 비용" },
  /**
   * **검사기가 스스로 붙이는 표식을 실제로 읽는다** (2026-08-20 재검증 P1).
   *
   * `verify-legal-source.ts:53` 은 「0이 아닌 코드로 끝내면 감사기가 출력의 `CANNOT_RUN` 을
   * 읽어 환경 없음으로 갈래를 잡는다」고 **계약을 적어 두었는데, 여기에 그 토큰이 없었다.**
   * 실제로 갈린 것은 우연히 함께 찍히던 「환경변수」 때문이었다 — 그 문장을 다듬는 날 조용히
   * 빨간불로 바뀐다. 계약을 적었으면 읽는 쪽에 그 계약이 있어야 한다.
   */
  { re: /\bCANNOT_RUN\b/, why: "검사기가 CANNOT_RUN 을 선언" },
  { re: /\.env\.local|환경변수|Missing (SUPABASE|OPENAI)/i, why: "환경변수 필요" },
  { re: /원본 PDF|기준 자료가 없|reference PDF/i, why: "기준 자료 필요" },
];

/** `server-only`를 끌어와 죽은 것인가. 이때는 전용 tsconfig로 한 번 더 부른다. */
function needsSweepTsconfig(output) {
  return /server-only|Client Component module/i.test(output);
}

function discover() {
  const found = [];
  for (const dir of ["scripts", ...APP_KEYS.map((app) => `apps/${app}/scripts`)]) {
    const full = path.join(ROOT, dir);
    if (!existsSync(full)) continue;
    for (const file of readdirSync(full).filter((f) => IS_VERIFIER.test(f) && f !== SELF).sort()) {
      found.push({
        dir,
        file,
        // 앱 스크립트는 앱 폴더에서 돌린다(상대 경로·tsconfig가 거기 기준이다).
        cwd: dir === "scripts" ? ROOT : path.join(ROOT, dir, ".."),
        where: dir === "scripts" ? "(root)" : dir.split("/")[1],
      });
    }
  }
  if (!found.length) throw new Error("검사기를 하나도 찾지 못했습니다. 경로가 바뀌었는지 볼 것.");
  return found;
}

/**
 * **감싸짐이라는 갈래는 없앴다** (2026-08-21 4차 재검증 P1).
 *
 * 「다른 검사기가 이 파일을 대신 돌려 준다」는 갈래가 세 판 연속 뚫렸다.
 *
 *     1판  부르기만 하면 참    → 공격 스크립트가 제품 검사기를 스윕에서 지웠다
 *     2판  선언하면 참        → 부르지도 않으면서 적기만 해도 참이 됐다
 *     3판  출력에 이름이 있으면 참 → 「나는 그것을 부른 적이 없다」라고 찍어도 참이 됐다
 *
 * 세 판 다 **출력이나 소스의 문자열**을 증거로 삼았다. 그것은 무엇을 하든 위조된다 —
 * 감싼 쪽이 자기 출력을 통제하기 때문이다. 규칙을 조일수록 위조가 한 줄 길어질 뿐이었다.
 *
 * 그래서 **믿는 것을 그만뒀다.** 인자가 필요한 검사기는 위 `ARGV` 가 인자를 받아 오고,
 * 감사기가 **제 손으로** 돌린다(`audit-pdfs.mjs --audit-plan`). 갈음이 없으면 갈음 사기도 없다.
 *
 * 대가는 `audit-pdf-*.py` 셋이 스윕당 두 번 도는 것이다 — 감사기가 한 번, `audit-pdfs.mjs`
 * 가 제 검사를 하며 한 번. **그 값이면 싸다.**
 */
/**
 * **스윕은 읽기 전용 관문이어야 한다** (2026-08-21 4차 재검증 P1).
 *
 * 이 러너는 이름이 `verify|audit|validate` 로 시작하면 **전부** 돌린다. 그 안에 이런 것들이
 * 섞여 있었다 — `verify-name-script-rules.ts` 는 언어마다 `generateNamingResult` 를 **실호출**
 * 하고, `verify-premium-ai-usage.ts` 는 OpenAI 를 부른 뒤 `ai_usage_logs` 행을 지우며,
 * 주문·티켓 검사기는 운영 DB 에 행을 만들고 지운다.
 *
 * 즉 「전수 스윕을 한 번 돌린다」가 **사용자 승인 없는 비용 지출과 운영 상태 변경**이었다.
 * 2026-08-21 하루에만 다섯 번 돌았다. 검사기를 믿게 만드는 도구가 그 자체로 부작용이었던 것이다.
 *
 * 그래서 **선언하게 하고 기본은 끈다.** `AUDIT_WRAPS` 와 달리 이 선언은 **거짓으로 적을
 * 이유가 없다** — 적으면 안 돌고, 안 돌면 통과로 세지도 않는다(「안 돌림」은 못 돎과 같은 칸,
 * `exit 2`). 숨기려고 적는 것이 아니라 **드러내려고** 적는 것이다.
 *
 * 그리고 **적지 않으면 잡는다.** 아래 힌트에 걸리는데 아무 선언도 없으면 빨간불이다.
 * 목록을 손으로 관리하면 새로 생기는 검사기가 조용히 빠져나간다.
 */
// **이유가 비어도 선언은 잡는다.** `(.+?)` 로 적으면 「AUDIT_SIDE_EFFECTS:」만 쓴 줄이 아예
// 매칭되지 않아 **선언이 없는 것처럼** 조용히 넘어간다 — 대조군이 그것을 잡았다.
const SIDE_EFFECTS_DECL = /^[ \t]*(?:\/\/|#)[ \t]*AUDIT_SIDE_EFFECTS:[ \t]*(.*?)[ \t]*$/m;
/** 「힌트에 걸리지만 실제로는 아니다」를 **이유와 함께** 적는 자리. */
const NO_SIDE_EFFECTS_DECL = /^[ \t]*(?:\/\/|#)[ \t]*AUDIT_NO_SIDE_EFFECTS:[ \t]*(.*?)[ \t]*$/m;

const SIDE_EFFECT_HINTS = [
  {
    re: /\.from\(\s*["'][a-z_]+["']\s*\)[\s\S]{0,400}?\.(insert|upsert|update|delete)\(/,
    why: "운영 DB 표에 쓰는 것으로 보인다",
  },
  { re: /from\s+["'](?:openai|@\/lib\/openai)["']/, why: "OpenAI 를 부르는 것으로 보인다" },
  { re: /import\(\s*["'][^"']*lib\/openai["']\s*\)/, why: "OpenAI 를 동적으로 부르는 것으로 보인다" },
];

/**
 * 소스를 받아 판정한다. **파일을 읽지 않는다** — 대조군이 가짜 소스를 넣어 볼 수 있어야
 * 하고, 그러지 못하면 이 판정기가 사는지 셀 방법이 없다.
 */
function sideEffectAuditSources(entries) {
  const declaredSideEffects = new Map(); // "where/file" → 이유
  const errors = [];
  for (const { where, file, body: source } of entries) {
    const who = `${where}/${file}`;
    const yes = SIDE_EFFECTS_DECL.exec(source);
    const no = NO_SIDE_EFFECTS_DECL.exec(source);
    if (yes && no) {
      errors.push(`${who} — 부수효과가 있다고도 없다고도 적었다. 하나만 적을 것.`);
      continue;
    }
    if (yes) {
      if (!yes[1].trim()) {
        errors.push(`${who} — AUDIT_SIDE_EFFECTS 에 이유가 없다. 무엇을 건드리는지 적을 것.`);
        continue;
      }
      declaredSideEffects.set(who, yes[1].trim());
      continue;
    }
    const hit = SIDE_EFFECT_HINTS.find((hint) => hint.re.test(source));
    if (hit && !no) {
      errors.push(
        `${who} — ${hit.why}. AUDIT_SIDE_EFFECTS 로 무엇을 건드리는지 적거나, ` +
          "아니라면 AUDIT_NO_SIDE_EFFECTS 로 왜 아닌지 적을 것.",
      );
    }
    if (no && !no[1].trim()) {
      errors.push(`${who} — AUDIT_NO_SIDE_EFFECTS 에 이유가 없다. 왜 아닌지 적을 것.`);
    }
  }
  return { declaredSideEffects, errors };
}

/** 실제 파일로 부른다. 판정 규칙은 위 하나뿐이다. */
function sideEffectAudit(scripts) {
  return sideEffectAuditSources(
    scripts.map((script) => ({
      where: script.where,
      file: script.file,
      body: readFileSync(path.join(ROOT, script.dir, script.file), "utf8"),
    })),
  );
}

function commandFor(script, tsconfig) {
  if (script.file.endsWith(".py")) return ["python", [`scripts/${script.file}`]];
  if (script.file.endsWith(".mjs")) return ["node", [`scripts/${script.file}`]];
  return ["npx", ["tsx", "--tsconfig", tsconfig, `scripts/${script.file}`]];
}

/**
 * 검사기 하나를 돌린다. **비동기다** — 여럿을 함께 돌리기 위해서다.
 *
 * 예전에는 `spawnSync` 로 하나씩 돌아 67~76개에 10분이 넘었다. 대부분 서로 무관한 읽기라
 * 순차여야 할 이유가 없었다(주석에도 근거가 없었다).
 */
function run(script, args, tsconfig) {
  const [bin, base] = commandFor(script, tsconfig);
  return new Promise((resolve) => {
    const child = spawn(bin, [...base, ...args], {
      cwd: script.cwd,
      shell: true,
    });
    let out = "";
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill();
    }, TIMEOUT_MS);

    child.stdout?.on("data", (chunk) => { out += chunk; });
    child.stderr?.on("data", (chunk) => { out += chunk; });
    child.on("error", (error) => {
      clearTimeout(timer);
      resolve({ code: 1, timedOut, out: `${out}${error.message}` });
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ code: timedOut ? null : code, timedOut, out });
    });
  });
}

/**
 * 동시에 도는 검사기 수.
 *
 * **무제한으로 던지지 않는다.** 상당수가 같은 Supabase와 실 도메인을 두드린다 — 한꺼번에
 * 보내면 연결 한도나 레이트리밋에 걸려 **진짜 결함이 아닌 빨간불**이 나오고, 그러면 이
 * 감사 자체를 믿을 수 없게 된다. 6은 그 사이를 잡은 값이고, 늘리기 전에 그 위험을 먼저 볼 것.
 */
const CONCURRENCY = 6;

/** 순서를 지켜 결과를 모으되, 도는 것은 최대 `CONCURRENCY` 개다. */
async function pool(items, worker) {
  const results = new Array(items.length);
  let next = 0;
  const lanes = Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (true) {
      const index = next++;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(lanes);
  return results;
}

/**
 * **멈춘 이유는 마지막 줄에 적힌다.**
 *
 * ## 출력 아무 데나 있으면 진짜 실패가 「못 돎」이 됐다 (2026-08-21)
 *
 * 예전에는 `CANNOT_RUN` 을 **출력 전체**에서 찾았다. 그 낱말이 *비정상 종료의 사유인지*는
 * 묻지 않았다. 그래서 이런 것들이 전부 「환경 없음」으로 갈렸다.
 *
 *   verify-review-attacks.ts:155  절 제목으로 `④ CANNOT_RUN 이 통과로 새는가` 를 **늘** 찍는다
 *                                 → PR #2 의 공격 여섯 묶음은 뚫려도 스윕에서 빨간불이 될 수 없었다
 *   verify-legal-source.ts:273    환경변수가 없으면 본문 중간에 `· CANNOT_RUN — …` 을 찍는다
 *                                 → 자격증명 없는 컴퓨터에서는 이 검사기의 **exit 1 이 안 보였다**
 *
 * 두 번째가 더 나쁘다. 제품 검사기이고, 「환경이 없다」와 「결함이 있다」가 **함께** 나는 상태가
 * 흔하기 때문이다. 그때 출력에는 둘 다 적혀 있는데 갈래는 「못 돎」 하나로 접혔다.
 *
 * 그래서 **자리로 판정한다.** 프로세스는 멈춘 자리에서 이유를 말한다 — 마지막 줄이 그것이다.
 * 검사기가 못 돌았으면 **마지막 말이 그 사유여야 한다.** 중간에 흘린 낱말은 근거가 아니다.
 */
function lastLine(out) {
  const lines = String(out ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  return lines[lines.length - 1] ?? "";
}

/** 한 번 부른 결과를 갈래로 나눈다. **모르는 실패는 빨간불이다.** */
function classify(result) {
  if (result.code === 0) return { kind: "pass" };
  if (result.timedOut) {
    return { kind: "red", why: `${TIMEOUT_MS / 1000}초 안에 끝나지 않았다` };
  }
  const reason = lastLine(result.out);
  for (const { re, why } of CANNOT_RUN) {
    if (re.test(reason)) return { kind: "cannot", why };
  }
  return { kind: "red", why: `exit ${result.code}` };
}

function tail(out, lines = 3) {
  return out.trim().split(/\r?\n/).filter(Boolean).slice(-lines).join(" ⏎ ").slice(0, 240);
}

// ── 실행 ──────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const listOnly = argv.includes("--list");
/** 대조군만 세고 끝낸다. 판정기를 고치는 동안 97개를 돌릴 이유가 없다. */
const selfTest = argv.includes("--self-test");
/**
 * **부수효과가 있는 검사기까지 돌린다.** 비용이 들고 운영 DB 를 건드린다 —
 * 사람이 그것을 알고 명시적으로 켤 때만 돈다. 기본은 꺼져 있다.
 */
const withSideEffects = argv.includes("--with-side-effects");
const filter = argv[argv.indexOf("--filter") + 1];
const all = discover();
const selected = filter && argv.includes("--filter")
  ? all.filter((s) => s.file.includes(filter) || s.where.includes(filter))
  : all;

const { declaredSideEffects, errors: declErrors } = sideEffectAudit(all);
if (declErrors.length) {
  console.log("■ 부수효과 선언이 없거나 깨졌다");
  for (const e of declErrors) console.log(`  ✗ ${e}`);
  console.log("\n검사기가 무엇을 건드리는지 코드가 알아야 한다. 이유와 함께 적을 것.");
  process.exit(1);
}

const plan = selected.map((script) => {
  const who = `${script.where}/${script.file}`;
  const sideEffects = declaredSideEffects.get(who) ?? null;
  const runs = ARGV[script.file]?.() ?? [{ label: null, args: [] }];
  return { script, sideEffects, runs };
});

if (listOnly) {
  console.log(`검사기 ${all.length}개 (선택 ${selected.length}개)\n`);
  for (const { script, sideEffects, runs } of plan) {
    const how = sideEffects
      ? `부수효과 — ${sideEffects}`
      : runs.length === 0
        ? "부를 인자가 없다"
        : runs.map((r) => (r.args.length ? `[${r.args.join(" ")}]` : "인자 없음")).join(" · ");
    console.log(`  ${script.where}/${script.file}  —  ${how}`);
  }
  process.exit(0);
}

/**
 * 돌릴 것을 **평평하게 펴서** 한 번에 풀에 넣는다. 앱별로 나눠 돌리면 앱 하나가 느릴 때
 * 나머지 갈래가 놀게 된다.
 */
const jobs = [];
for (const { script, sideEffects, runs } of plan) {
  if (sideEffects && !withSideEffects) {
    jobs.push({ script, skipped: sideEffects });
    continue;
  }
  if (runs.length === 0) {
    /**
     * **인자를 못 받은 것은 통과가 아니다.** `ARGV` 가 빈 배열을 돌려주면(예: PDF 산출물이
     * 없어 계획이 비었을 때) 이 검사기는 한 번도 안 돈다. 예전 구조라면 조용히 사라졌다.
     */
    jobs.push({ script, noArgs: true });
    continue;
  }
  for (const { label, args } of runs) jobs.push({ script, label, args });
}

/**
 * 한 번 부르는 일. **대조군이 끝난 뒤에 부른다** — 아래 `runSweep()` 호출 자리를 볼 것.
 */
const sweepJob = async (job) => {
  // **안 돌린 것은 통과가 아니다.** 못 돎과 같은 칸에 넣는다(합계·종료 코드 둘 다).
  if (job.skipped) {
    return { script: job.script, kind: "cannot", why: `안 돌림 — ${job.skipped}`, tail: "" };
  }
  if (job.noArgs) {
    return {
      script: job.script,
      kind: "cannot",
      why: "부를 인자가 없다 — 계획이 비었다(산출물을 먼저 만들 것)",
      tail: "",
    };
  }

  const { script, label, args } = job;
  let tsconfig = "tsconfig.json";
  let result = await run(script, args, tsconfig);
  // `server-only` 때문에 죽었다면 전용 tsconfig로 한 번 더. **이름 목록으로 걸지 않는다** —
  // 새로 생기는 검사기도 저절로 따라오게 하려면 증상으로 걸어야 한다.
  if (result.code !== 0 && script.file.endsWith(".ts") && needsSweepTsconfig(result.out)) {
    const sweep = path.join(script.cwd, "scripts", "tsconfig.sweep.json");
    if (existsSync(sweep)) {
      tsconfig = "scripts/tsconfig.sweep.json";
      result = await run(script, args, tsconfig);
    }
  }
  return {
    script,
    label,
    tsconfig: script.file.endsWith(".ts") ? tsconfig : null,
    ...classify(result),
    tail: tail(result.out),
  };
};

// ── 대조군 ────────────────────────────────────────────────────────────────
// 판정기가 살아 있는지 본다. 통과만 세는 러너는 아무것도 보증하지 못한다.
const CONTROL = [
  { label: "exit 0은 통과", result: { code: 0, out: "" }, want: "pass" },
  { label: "설명 없는 실패는 빨간불", result: { code: 1, out: "boom" }, want: "red" },
  {
    label: "스스로 못 돈다고 말하면 못 돎",
    result: { code: 1, out: "서버가 없다: http://localhost:3001" },
    want: "cannot",
  },
  {
    label: "다른 앱을 보고 있으면 못 돎",
    result: { code: 1, out: "다른 앱을 보고 있다: http://localhost:3002 — 화면이 「Inyeon-Link」이다." },
    want: "cannot",
  },
  {
    // 서버가 응답했는데 화면이 아니면 **앱 결함**이다. 못 돎으로 새면 안 된다.
    label: "서버는 응답했는데 화면이 아니면 빨간불",
    result: { code: 1, out: "화면이 나오지 않는다: http://localhost:3001 → HTTP 500 · content-type text/plain" },
    want: "red",
  },
  { label: "시간 초과는 빨간불", result: { code: null, timedOut: true, out: "" }, want: "red" },
  {
    // 검사기가 붙인 표식을 읽는가. 이 계약은 `verify-legal-source.ts` 가 머리말에 적어 두었다.
    label: "CANNOT_RUN 을 선언하면 못 돎",
    result: { code: 2, out: "①~⑤ 는 통과했으나 운영 현황을 확인하지 못했다 — CANNOT_RUN" },
    want: "cannot",
  },
  /**
   * **아래 셋은 2026-08-21 에 실제로 뚫렸던 자리다.** 낱말이 출력 어딘가에 있기만 하면 진짜
   * 실패가 「못 돎」으로 갈렸다. 셋 다 「마지막 줄이 사유다」로 고친 뒤에야 빨간불이 된다.
   */
  {
    // verify-review-attacks.ts:155 — 절 제목으로 그 낱말을 늘 찍는다.
    label: "절 제목에만 있는 CANNOT_RUN 은 사유가 아니다",
    result: { code: 1, out: "④ CANNOT_RUN 이 통과로 새는가 (Codex P0)\n  ✗ 공격 하나가 뚫렸다\n빨간불 1건" },
    want: "red",
  },
  {
    // verify-legal-source.ts:273 — 환경이 없으면서 **동시에** 결함이 있는 상태.
    label: "못 돎과 결함이 함께 나면 결함이 이긴다",
    result: {
      code: 1,
      out: "  · CANNOT_RUN — 환경변수가 없어 게시본을 물어보지 못했다.\n  ✗ 깨진 게시본이 있다: terms\n빨간불 1건",
    },
    want: "red",
  },
  {
    // 낱말 규칙 전부에 같은 자리가 있다 — `CANNOT_RUN` 만의 병이 아니다.
    label: "「서버가 없다」도 제목에만 있으면 사유가 아니다",
    result: { code: 1, out: "② 서버가 없다를 통과로 세는가\n  ✗ 뚫렸다\n빨간불 1건" },
    want: "red",
  },
];
let controlOk = true;
for (const { label, result, want } of CONTROL) {
  const got = classify(result).kind;
  if (got !== want) {
    console.log(`  ✗ 대조군 실패 — ${label}: 기대 ${want} · 실제 ${got}`);
    controlOk = false;
  }
}

/**
 * **부수효과 선언에도 대조군이 있어야 한다.**
 *
 * 이 판정이 조용히 멎으면 스윕이 다시 비용을 쓰고 운영 DB 를 건드린다 — 그리고 그 사실이
 * 화면에는 「통과」로 보인다. 가짜 소스를 넣어 판정기가 사는지 센다.
 */
const src = (body) => ({ where: "(control)", file: "verify-x.mjs", dir: null, body });
const SIDE_CONTROL = [
  {
    label: "선언하면 잡히지 않는다(그리고 이유가 남는다)",
    body: '// AUDIT_SIDE_EFFECTS: OpenAI 를 부른다\nimport OpenAI from "openai";',
    wantError: false,
    wantDeclared: true,
  },
  {
    label: "DB 에 쓰는데 아무 선언도 없으면 빨간불",
    body: 'await supabase.from("orders").insert({ id: 1 });',
    wantError: true,
    wantDeclared: false,
  },
  {
    label: "OpenAI 를 부르는데 아무 선언도 없으면 빨간불",
    body: 'import { generateNamingResult } from "@/lib/openai";',
    wantError: true,
    wantDeclared: false,
  },
  {
    label: "아니라고 이유와 함께 적으면 잡지 않는다",
    body: '// AUDIT_NO_SIDE_EFFECTS: 소스 문자열만 훑는다\nimport OpenAI from "openai";',
    wantError: false,
    wantDeclared: false,
  },
  {
    label: "이유 없는 선언은 잡는다",
    body: "// AUDIT_SIDE_EFFECTS:\n",
    wantError: true,
    wantDeclared: false,
  },
  {
    label: "있다고도 없다고도 적으면 잡는다",
    body: "// AUDIT_SIDE_EFFECTS: 쓴다\n// AUDIT_NO_SIDE_EFFECTS: 안 쓴다\n",
    wantError: true,
    wantDeclared: false,
  },
  {
    // **닫는 쪽으로만 틀리면 안 된다.** 아무 관계 없는 검사기가 걸리면 사람이 선언을 남발한다.
    label: "부수효과가 없으면 아무것도 요구하지 않는다",
    body: 'const rows = readFileSync("x").toString();\nmap.delete("k");',
    wantError: false,
    wantDeclared: false,
  },
];
for (const { label, body, wantError, wantDeclared } of SIDE_CONTROL) {
  const { declaredSideEffects, errors } = sideEffectAuditSources([src(body)]);
  const gotError = errors.length > 0;
  const gotDeclared = declaredSideEffects.size > 0;
  if (gotError !== wantError || gotDeclared !== wantDeclared) {
    console.log(
      `  ✗ 대조군 실패 — ${label}: 기대 오류 ${wantError}·선언 ${wantDeclared} · ` +
        `실제 오류 ${gotError}·선언 ${gotDeclared}${errors[0] ? ` (${errors[0]})` : ""}`,
    );
    controlOk = false;
  }
}

/**
 * **관문은 비싼 단계 앞에 있어야 한다** (2026-08-21).
 *
 * 예전에는 대조군을 **스윕이 다 돈 뒤에** 셌다. 판정기가 깨졌는지 알려면 97개를 7분간 돌리고
 * 나서야 알 수 있었다는 뜻이다. 게다가 그 7분의 결과는 이미 못 믿을 것이었다. 순서를 뒤집는다.
 *
 * `--self-test` 는 대조군만 세고 끝낸다. 판정기를 고치는 동안 이것만 돌리면 된다.
 */
if (!controlOk) {
  console.log("  ✗ 대조군이 깨졌다. 판정기를 못 믿으므로 스윕을 돌리지 않는다.");
  process.exit(1);
}
console.log("  ✓ 대조군: 갈래 판정이 산다");
if (selfTest) {
  console.log(`    낱말 갈래 ${CONTROL.length}건 · 부수효과 선언 ${SIDE_CONTROL.length}건 — 전부 기대대로.`);
  process.exit(0);
}

const resolved = await pool(jobs, sweepJob);

const pass = resolved.filter((r) => r.kind === "pass");
const cannot = resolved.filter((r) => r.kind === "cannot");
const red = resolved.filter((r) => r.kind === "red");

console.log(
  `\n검사기 ${selected.length}개 · 실행 ${resolved.length}회 — ` +
    `통과 ${pass.length} / 검사 안 됨 ${cannot.length} / 빨간불 ${red.length}`,
);
const name = (r) => `${r.script.where}/${r.script.file}${r.label ? ` (${r.label})` : ""}`;

if (red.length) {
  console.log("■ 빨간불");
  for (const r of red) console.log(`  ✗ ${name(r)} — ${r.why}\n      ${r.tail}`);
  console.log("");
}
if (cannot.length) {
  console.log("■ 검사 안 됨 — 통과로 세지 않는다");
  for (const r of cannot) console.log(`  · ${name(r)} — ${r.why}`);
  console.log("");
}
console.log("■ 통과");
for (const r of pass) {
  const how = r.tsconfig && r.tsconfig !== "tsconfig.json" ? `  [${r.tsconfig}]` : "";
  console.log(`  ✓ ${name(r)}${how}`);
}

if (red.length) {
  console.log(`\n빨간불 ${red.length}건. 진짜 결함인지 검사기 결함인지 갈라 볼 것.`);
  process.exit(1);
}

/**
 * **한 번도 안 돌았으면 통과가 아니다** (2026-08-20 재검증 P1).
 *
 * `--filter` 가 아무것도 못 고르거나 고른 것이 전부 감싸짐이면 실행이 0회다. 그때 예전 코드는
 * 「빨간불 없음」을 이유로 `ALL PASS` 를 찍었다 — **검사 0건은 실패**라는 규칙이 이 러너 자신에는
 * 적용돼 있지 않았다. 초록불을 근거로 쓰는 것은 사람이므로, 여기서 막는다.
 */
if (!pass.length && !cannot.length) {
  console.log(
    `\n실행 0회다. 초록불을 낼 수 없다 — 검사기 ${selected.length}개를 골랐고 그중 아무것도 돌지 않았다.` +
      (filter ? `\n  --filter ${filter} 가 고른 것이 없거나 전부 감싸짐이다.` : ""),
  );
  process.exit(1);
}

/**
 * **화면으로만 「통과가 아니다」라고 말하고 exit 0 으로 끝냈다** (2026-08-21).
 *
 * 이 러너는 「못 돎은 통과가 아니다」를 갈래로도 적고 문구로도 적어 놓고, **종료 코드는
 * 0** 이었다. 종료 코드를 읽는 것은 사람이 아니라 스크립트다. 그래서 검사기 둘이 안 돈 스윕이
 * `SWEEP_EXIT=0` 으로 나가 「전부 돌았다」와 구별되지 않았다 — `exit 0` 을 「끝남」으로 읽지
 * 말라는 규칙을 이 파일 자신이 어기고 있었던 것이다.
 *
 *   0  고른 것이 전부 돌았고 빨간불이 없다
 *   1  빨간불이 있다 (또는 대조군이 깨졌다 · 실행 0회다)
 *   2  빨간불은 없으나 **검사하지 못한 것이 있다**
 *
 * 마지막 줄에 사유를 적는다 — 이 러너가 다른 검사기에게 요구하는 계약과 같은 것을 지킨다.
 */
if (cannot.length) {
  console.log(
    `\n빨간불은 없다. 다만 검사기 ${cannot.length}개를 **돌리지 못했다** — 통과가 아니다.` +
      "\n환경을 갖추고 다시 돌리거나, 이 결과를 「그만큼은 검사 안 됨」으로 읽을 것.",
  );
  console.log(`\n검사하지 못한 검사기 ${cannot.length}개가 있다 — CANNOT_RUN\n`);
  process.exit(2);
}

console.log("\nALL PASS — 빨간불 없음. 고른 검사기가 전부 돌았다.\n");
process.exit(0);
