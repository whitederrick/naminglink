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
// ## 갈래
//
//   통과    exit 0
//   못 돎   서버·비용·자료가 있어야 하는 검사. **통과로 세지 않는다**
//   감싸짐  다른 검사가 불러 준다(그 검사의 결과로 갈음한다)
//   빨간불  나머지 전부. **분류하지 못한 실패도 여기 넣는다** — 모르는 것을 통과로 바꾸지 않는다
//
// ## 새 검사기를 만들면
//
// 아무것도 안 해도 된다. 파일 이름이 `verify|audit|validate`로 시작하면 **저절로 잡힌다.**
// 부르는 법이 특별하면 아래 `ARGV`에 한 줄 더하거나, 감싸는 검사가 그 파일 이름을 언급하게 한다.
//
// 실행:
//   node scripts/audit-verifiers.mjs            전부 돌린다
//   node scripts/audit-verifiers.mjs --list     무엇을 어떻게 부를지만 보여 준다
//   node scripts/audit-verifiers.mjs --filter legal   이름에 그 말이 든 것만

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
};

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
 * 다른 검사기가 이 파일을 **대신 돌려 주는가.**
 *
 * `audit-pdfs.mjs`가 파이썬 셋을 감싸는 것이 그 예다. 감싸진 것을 따로 부르면 인자가 없어
 * 빨간불이 나는데, **실제로는 감싼 쪽이 이미 돌렸다.**
 *
 * ## 「부르면 감싼 것」이 검사기를 통째로 사라지게 했다 (2026-08-20 재검증 P1)
 *
 * 예전 규칙은 **자식 프로세스를 쓰고 주석 아닌 자리에 이름이 있으면** 감싼 것으로 봤다.
 * 그날 `verify-review-attacks.ts`(공격 파일)가 `verify-legal-source.ts`를 띄우자 이렇게 됐다.
 *
 *     naminglink/verify-legal-source.ts  —  감싸짐 ← naminglink/verify-review-attacks.ts
 *
 * **공격은 그 검사기를 자격증명을 일부러 빼고 돌린다.** 「못 돎이 못 돎으로 갈리는가」를 보는
 * 것이지 제품을 검사한 게 아니다. 그런데 감사기는 그 결과로 **갈음**해 버렸고, 제품 검사기
 * 하나가 스윕에서 조용히 빠졌다. `--filter legal-source`로 좁히면 **실행 0회에 `ALL PASS`**가
 * 나왔다 — 「검사 0건은 실패」와 정확히 같은 자리다.
 *
 * 부르는 것과 갈음하는 것은 다르다. 그래서 **감싼 쪽이 그렇게 선언할 때만** 감싼 것으로 본다.
 * 선언이 없는 호출(공격·프로브)은 그냥 호출이고, 감싸진 쪽은 **제 발로 돈다.**
 *
 *     // AUDIT_WRAPS: audit-pdf-language.py
 */
const WRAPS_DECL = /^[ \t]*(?:\/\/|#)[ \t]*AUDIT_WRAPS:[ \t]*(\S+)[ \t]*$/gm;

/** 선언된 이름을 모은다. **죽은 선언은 잡는다** — 없는 파일을 감쌌다고 적을 수 없다. */
function wrapDeclarations(all) {
  const declared = new Map(); // file → "where/file" (감싼 쪽)
  const errors = [];
  const known = new Set(all.map((s) => s.file));
  for (const script of all) {
    const source = readFileSync(path.join(ROOT, script.dir, script.file), "utf8");
    for (const [, name] of source.matchAll(WRAPS_DECL)) {
      const who = `${script.where}/${script.file}`;
      if (name === script.file) {
        errors.push(`${who} — 자기 자신을 감쌌다고 적었다`);
        continue;
      }
      if (!known.has(name)) {
        errors.push(`${who} — AUDIT_WRAPS: ${name} 이라는 검사기가 없다. 적용되지 않는 선언은 지운다.`);
        continue;
      }
      const already = declared.get(name);
      if (already && already !== who) {
        errors.push(`${name} — ${already} 와 ${who} 가 둘 다 감쌌다고 적었다. 갈음은 한 곳이어야 한다.`);
        continue;
      }
      declared.set(name, who);
    }
  }
  return { declared, errors };
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

/** 한 번 부른 결과를 갈래로 나눈다. **모르는 실패는 빨간불이다.** */
function classify(result) {
  if (result.code === 0) return { kind: "pass" };
  if (result.timedOut) {
    return { kind: "red", why: `${TIMEOUT_MS / 1000}초 안에 끝나지 않았다` };
  }
  for (const { re, why } of CANNOT_RUN) {
    if (re.test(result.out)) return { kind: "cannot", why };
  }
  return { kind: "red", why: `exit ${result.code}` };
}

function tail(out, lines = 3) {
  return out.trim().split(/\r?\n/).filter(Boolean).slice(-lines).join(" ⏎ ").slice(0, 240);
}

// ── 실행 ──────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const listOnly = argv.includes("--list");
const filter = argv[argv.indexOf("--filter") + 1];
const all = discover();
const selected = filter && argv.includes("--filter")
  ? all.filter((s) => s.file.includes(filter) || s.where.includes(filter))
  : all;

// **선언 자체가 성립하는가.** 죽은 선언·겹친 선언은 갈음을 조용히 비운다.
const { declared, errors: declErrors } = wrapDeclarations(all);
if (declErrors.length) {
  console.log("■ AUDIT_WRAPS 선언이 깨졌다");
  for (const e of declErrors) console.log(`  ✗ ${e}`);
  process.exit(1);
}

const plan = selected.map((script) => {
  const wrapper = declared.get(script.file) ?? null;
  const runs = ARGV[script.file]?.() ?? [{ label: null, args: [] }];
  return { script, wrapper, runs };
});

if (listOnly) {
  console.log(`검사기 ${all.length}개 (선택 ${selected.length}개)\n`);
  for (const { script, wrapper, runs } of plan) {
    const how = wrapper
      ? `감싸짐 ← ${wrapper}`
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
for (const { script, wrapper, runs } of plan) {
  if (wrapper) {
    jobs.push({ script, wrapper });
    continue;
  }
  for (const { label, args } of runs) jobs.push({ script, label, args });
}

const rows = await pool(jobs, async (job) => {
  if (job.wrapper) return { script: job.script, kind: "wrapped", why: job.wrapper };

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
});

/**
 * **갈음이 실제로 성립했는가** (2026-08-20 재검증 P1).
 *
 * 「감싸짐」은 *감싼 검사의 결과로 갈음한다*는 뜻이다. 그런데 감싼 쪽이 이번 실행에 **없거나**
 * (`--filter`로 좁혔을 때) 돌았는데 통과하지 못했다면, 갈음할 결과가 없다. 그 상태를 그대로
 * 「감싸짐」에 두면 **아무도 안 돈 검사기가 조용히 초록불 쪽에 선다.**
 *
 * 갈음이 성립하지 않으면 **빨간불**이다. 통과도 못 돎도 아니다 — 환경이 없는 게 아니라
 * **검사를 안 한 것**이기 때문이다.
 */
function resolveWrapped(rows) {
  const outcomeOf = new Map(); // "where/file" → 그 검사기의 실행 결과들
  for (const row of rows) {
    if (row.kind === "wrapped") continue;
    const key = `${row.script.where}/${row.script.file}`;
    if (!outcomeOf.has(key)) outcomeOf.set(key, []);
    outcomeOf.get(key).push(row.kind);
  }
  return rows.map((row) => {
    if (row.kind !== "wrapped") return row;
    const kinds = outcomeOf.get(row.why);
    if (!kinds?.length) {
      return { ...row, kind: "red", why: `갈음할 결과가 없다 — 감싼 ${row.why} 가 이번에 돌지 않았다`, tail: "" };
    }
    if (kinds.every((kind) => kind === "pass")) return row;
    // **환경이 없어 감싼 쪽이 못 돌았다면 감싸진 쪽도 「못 돎」이다.** 여기서 빨간불을 내면
    // 렌더 산출물이 없는 컴퓨터마다 없는 결함 세 건이 신고된다 — 갈래를 잘못 잡은 것이다.
    if (kinds.every((kind) => kind === "pass" || kind === "cannot")) {
      return { ...row, kind: "cannot", why: `감싼 ${row.why} 가 돌지 못했다 — 이것도 안 돈 것이다` };
    }
    return { ...row, kind: "red", why: `감싼 ${row.why} 가 통과하지 못했다(${kinds.join("·")}) — 갈음이 성립하지 않는다`, tail: "" };
  });
}

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
 * **갈음 판정에도 대조군이 있어야 한다.** 이 규칙이 없어서 실행 0회에 `ALL PASS` 가 났다.
 * 판정기를 고쳐 놓고 그 판정기가 사는지 안 세면 다음에 또 같은 자리로 돌아온다.
 */
const at = (where, file, kind) => ({ script: { where, file }, kind });
const WRAP_CONTROL = [
  {
    label: "감싼 쪽이 통과했으면 갈음이 선다",
    rows: [at("(root)", "a.py", "wrapped-src"), at("(root)", "w.mjs", "pass")],
    want: "wrapped",
  },
  {
    label: "감싼 쪽이 이번에 안 돌았으면 빨간불",
    rows: [at("(root)", "a.py", "wrapped-src")],
    want: "red",
  },
  {
    label: "감싼 쪽이 빨간불이면 갈음이 서지 않는다",
    rows: [at("(root)", "a.py", "wrapped-src"), at("(root)", "w.mjs", "red")],
    want: "red",
  },
  {
    // **못 돎으로 갈음할 수 없다.** 다만 그것은 빨간불이 아니라 **못 돎**이다 — 감싼 쪽이
    // 환경이 없어 못 돌았으면 감싸진 쪽도 「검사 안 됨」이지 「결함」이 아니다.
    label: "감싼 쪽이 못 돎이면 감싸진 쪽도 못 돎",
    rows: [at("(root)", "a.py", "wrapped-src"), at("(root)", "w.mjs", "cannot")],
    want: "cannot",
  },
  {
    // 여러 번 도는 검사기라면 **한 번이라도 빨간불이면** 갈음이 서지 않는다.
    label: "감싼 쪽이 통과와 빨간불을 섞으면 빨간불",
    rows: [
      at("(root)", "a.py", "wrapped-src"),
      at("(root)", "w.mjs", "pass"),
      at("(root)", "w.mjs", "red"),
    ],
    want: "red",
  },
];
for (const { label, rows: sample, want } of WRAP_CONTROL) {
  const input = sample.map((r) =>
    r.kind === "wrapped-src" ? { ...r, kind: "wrapped", why: "(root)/w.mjs" } : r,
  );
  const got = resolveWrapped(input)[0].kind;
  if (got !== want) {
    console.log(`  ✗ 대조군 실패 — ${label}: 기대 ${want} · 실제 ${got}`);
    controlOk = false;
  }
}

const resolved = resolveWrapped(rows);
const pass = resolved.filter((r) => r.kind === "pass");
const cannot = resolved.filter((r) => r.kind === "cannot");
const wrapped = resolved.filter((r) => r.kind === "wrapped");
const red = resolved.filter((r) => r.kind === "red");

console.log(
  `\n검사기 ${selected.length}개 · 실행 ${rows.length}회 — ` +
    `통과 ${pass.length} / 못 돎 ${cannot.length} / 감싸짐 ${wrapped.length} / 빨간불 ${red.length}`,
);
if (!controlOk) {
  console.log("  ✗ 대조군이 깨졌다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 통과·빨간불·못 돎·시간초과를 제 갈래로 나눈다\n");

const name = (r) => `${r.script.where}/${r.script.file}${r.label ? ` (${r.label})` : ""}`;

if (red.length) {
  console.log("■ 빨간불");
  for (const r of red) console.log(`  ✗ ${name(r)} — ${r.why}\n      ${r.tail}`);
  console.log("");
}
if (cannot.length) {
  console.log("■ 못 돎 — 통과로 세지 않는다");
  for (const r of cannot) console.log(`  · ${name(r)} — ${r.why}`);
  console.log("");
}
if (wrapped.length) {
  console.log("■ 감싸짐 — 감싼 검사의 결과로 갈음한다");
  for (const r of wrapped) console.log(`  · ${name(r)} ← ${r.why}`);
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

console.log("\nALL PASS — 빨간불 없음.");
if (cannot.length) {
  console.log(`⚠ 다만 ${cannot.length}건은 **돌지 못했다.** 통과가 아니다.`);
}
