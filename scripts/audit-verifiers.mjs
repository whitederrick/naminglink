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

import { spawnSync } from "node:child_process";
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
  { re: /OPENAI_API_KEY|비용이 든다/i, why: "OpenAI 비용" },
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

/** 주석을 걷어낸다. 이름이 주석에 나오는 것은 「부른다」가 아니다. */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/^\s*\/\/.*$/gm, " ")
    .replace(/^\s*#.*$/gm, " ");
}

/**
 * 다른 검사기가 이 파일을 **자식 프로세스로 불러 주는가.**
 *
 * `audit-pdfs.mjs`가 파이썬 셋을 감싸는 것이 그 예다. 감싸진 것을 따로 부르면 인자가 없어
 * 빨간불이 나는데, **실제로는 감싼 쪽이 이미 돌렸다.**
 *
 * 처음에는 「소스에 그 이름이 있으면」으로 봤다가 엉망이 됐다 — 주석에 적힌 이름이 걸리고,
 * 형제 앱의 **같은 이름 사본끼리 서로 감쌌다고** 판정했다(파일 이름만 봐서는 자기 자신과
 * 남의 앱 사본을 가를 수 없다). 지금은 셋을 다 요구한다: 자식 프로세스를 쓰고, 주석이 아닌
 * 자리에 이름이 있고, 이름이 서로 다를 것.
 */
const SPAWNS_CHILD = /child_process|subprocess/;

function wrapperOf(target, all) {
  for (const other of all) {
    if (other === target || other.file === target.file) continue;
    const source = readFileSync(path.join(ROOT, other.dir, other.file), "utf8");
    if (!SPAWNS_CHILD.test(source)) continue;
    if (stripComments(source).includes(target.file)) return `${other.where}/${other.file}`;
  }
  return null;
}

function commandFor(script, tsconfig) {
  if (script.file.endsWith(".py")) return ["python", [`scripts/${script.file}`]];
  if (script.file.endsWith(".mjs")) return ["node", [`scripts/${script.file}`]];
  return ["npx", ["tsx", "--tsconfig", tsconfig, `scripts/${script.file}`]];
}

function run(script, args, tsconfig) {
  const [bin, base] = commandFor(script, tsconfig);
  const res = spawnSync(bin, [...base, ...args], {
    cwd: script.cwd,
    encoding: "utf8",
    shell: true,
    timeout: TIMEOUT_MS,
  });
  return {
    code: res.status,
    timedOut: res.status === null,
    out: `${res.stdout ?? ""}${res.stderr ?? ""}`,
  };
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

const plan = selected.map((script) => {
  const wrapper = wrapperOf(script, all);
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

const rows = [];
for (const { script, wrapper, runs } of plan) {
  if (wrapper) {
    rows.push({ script, kind: "wrapped", why: wrapper });
    continue;
  }
  for (const { label, args } of runs) {
    const appDir = script.cwd;
    let tsconfig = "tsconfig.json";
    let result = run(script, args, tsconfig);
    // `server-only` 때문에 죽었다면 전용 tsconfig로 한 번 더. **이름 목록으로 걸지 않는다** —
    // 새로 생기는 검사기도 저절로 따라오게 하려면 증상으로 걸어야 한다.
    if (result.code !== 0 && script.file.endsWith(".ts") && needsSweepTsconfig(result.out)) {
      const sweep = path.join(appDir, "scripts", "tsconfig.sweep.json");
      if (existsSync(sweep)) {
        tsconfig = "scripts/tsconfig.sweep.json";
        result = run(script, args, tsconfig);
      }
    }
    const verdict = classify(result);
    rows.push({
      script,
      label,
      tsconfig: script.file.endsWith(".ts") ? tsconfig : null,
      ...verdict,
      tail: tail(result.out),
    });
  }
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
  { label: "시간 초과는 빨간불", result: { code: null, timedOut: true, out: "" }, want: "red" },
];
let controlOk = true;
for (const { label, result, want } of CONTROL) {
  const got = classify(result).kind;
  if (got !== want) {
    console.log(`  ✗ 대조군 실패 — ${label}: 기대 ${want} · 실제 ${got}`);
    controlOk = false;
  }
}

const pass = rows.filter((r) => r.kind === "pass");
const cannot = rows.filter((r) => r.kind === "cannot");
const wrapped = rows.filter((r) => r.kind === "wrapped");
const red = rows.filter((r) => r.kind === "red");

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
console.log("\nALL PASS — 빨간불 없음.");
if (cannot.length) {
  console.log(`⚠ 다만 ${cannot.length}건은 **돌지 못했다.** 통과가 아니다.`);
}
