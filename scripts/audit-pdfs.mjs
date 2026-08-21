// PDF 검사 **셋을 한 번에** 돌린다 — 언어 · 지면 · 글리프.
//
// ## 왜 이 파일이 있는가 (2026-08-07)
//
// 셋은 서로를 대신하지 못한다:
//
//   audit-pdf-language.py  글자가 **그 언어인가** — 번역·과도 번역
//   audit-pdf-layout.py    글자가 **넘치는가**   — 지면·겹침·빈 지면·.notdef
//   audit-pdf-glyphs.py    글자가 **찍히는가**   — 서체 cmap·내장 서체 되돌림
//
// 그런데 셋 다 인자를 요구해서 **전체 검사를 훑을 때 통째로 빠졌다.** 앱마다 산출 폴더
// 이름도 다르다(`conception-report`·`saju-report`·`report-scripts`·`pdf-scripts`). 그 결과
// **태몽 리포트 한국어판의 제목이 깨진 채로 남아 있었다** — 셋 중 둘이 그것을 잡을 수
// 있었는데 아무도 안 돌렸다.
//
// 여기서 폴더를 찾아 셋을 다 돌린다. 인자가 없으면 앱 전부다.
//
// 실행: 레포 루트에서
//   node scripts/audit-pdfs.mjs              전부
//   node scripts/audit-pdfs.mjs dreamslink   한 앱만
//
// ⚠️ **먼저 렌더해야 한다.** 산출물이 없으면 그 앱은 「렌더 먼저」로 알린다 — 0건을 통과로
// 보지 않는다.
//
// ## 감사기에게 **인자를 알려 준다** — 대신 돌려 주지 않는다 (2026-08-21)
//
// 이 자리는 두 번 틀렸다.
//
//   2026-08-20  「부르기만 하면 감싼 것」 — 공격 스크립트가 검사기를 부르자 그 검사기가
//               스윕에서 조용히 사라졌다
//   2026-08-21  「선언하면 감싼 것」 — 부르지도 않으면서 적기만 해도 참이 됐다.
//               자취(출력에 이름이 있는가)를 요구해도 **이름만 찍으면 통과**했다
//
// 출력 문자열로 만드는 증거는 무엇을 하든 위조된다. 그래서 **갈음이라는 갈래 자체를 없앴다.**
// 이 파일은 「어떤 인자로 무엇을 돌릴지」만 알려 주고(`--audit-plan`), 감사기가 **직접**
// `audit-pdf-*.py` 를 돌린다. 믿을 것이 없으면 속을 것도 없다.
//
//   node scripts/audit-pdfs.mjs --audit-plan   돌릴 것을 JSON 으로 내고 끝낸다
//
// 계획을 만드는 코드와 실제로 돌리는 코드는 **같은 하나**다(`buildPlan`). 두 벌로 적으면
// 감사기가 도는 것과 이 파일이 도는 것이 갈라진다.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const only = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const apps = only.length ? APP_KEYS.filter((a) => only.includes(a)) : APP_KEYS;

/** 앱의 PDF 산출 폴더들. 이름을 적어 두지 않고 **PDF가 든 폴더를 찾는다.** */
function pdfDirsOf(app) {
  const tmp = path.join(ROOT, "apps", app, "tmp");
  if (!existsSync(tmp)) return [];
  return readdirSync(tmp)
    .map((name) => path.join(tmp, name))
    .filter((dir) => {
      try {
        return readdirSync(dir).some((f) => f.endsWith(".pdf"));
      } catch {
        return false;
      }
    });
}

/**
 * 견본 렌더러가 쓰는 **사람 이름**을 읽어 온다.
 *
 * 이름은 어느 언어 문서에서도 옮기지 않는 값이라, 영어 문서에 「지현」이 있는 것이 정상이다.
 * **예외를 손으로 적지 않는다** — 견본의 이름이 바뀌면 여기도 따라 움직여야 하고, 손으로
 * 적어 두면 그날부터 검사가 거짓으로 실패한다(실제로 브랜드 예외에서 그 일을 겪었다).
 *
 * 두 글자 이상 한글 리터럴만 본다. 문구·제목은 대개 공백이나 조사를 달고 있어 섞이지 않는다.
 */
function sampleNamesOf(app) {
  const dir = path.join(ROOT, "apps", app, "scripts");
  if (!existsSync(dir)) return [];
  const names = new Set();
  for (const file of readdirSync(dir)) {
    if (!/^render-.*\.tsx?$/.test(file)) continue;
    const text = readFileSync(path.join(dir, file), "utf8");
    for (const m of text.matchAll(/["'`]([가-힣]{2,4})["'`]/g)) names.add(m[1]);
  }
  return [...names];
}

/**
 * **부른 파일 이름을 출력에 남긴다** (2026-08-21).
 *
 * 부른 스크립트 경로를 함께 찍는다 — 사람이 출력만 보고도 무엇이 돌았는지 알 수 있게.
 * **이것은 감사기에게 주는 증거가 아니다.** 감사기는 이제 `--audit-plan` 을 받아 제 손으로
 * 돌린다(머리말 참고). 출력 문자열을 증거로 삼는 방식은 두 번 뚫렸다.
 */
function run(label, cmd, args) {
  const r = spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8" });
  const out = `${r.stdout ?? ""}${r.stderr ?? ""}`;
  const tail = out.trim().split("\n").slice(-2).join(" / ");
  const script = args.find((a) => /\.py$/.test(a)) ?? args[0];
  console.log(`    ${r.status === 0 ? "PASS" : "FAIL"}  ${label}  (${script})`);
  if (r.status !== 0) console.log(`          ${tail.slice(0, 220)}`);
  return r.status === 0;
}

/**
 * **돌릴 것을 먼저 다 정한다.** 이 하나가 `--audit-plan` 의 출력이자 아래 실행의 대본이다.
 *
 * 계획과 실행을 따로 적으면 감사기가 도는 것과 이 파일이 도는 것이 갈라진다 — 같은 규칙을
 * 두 벌로 적지 않는다.
 */
function buildPlan() {
  const jobs = []; // { app, dir, label, script, args }
  const gaps = []; // { app, why } — 검사할 수 없는 자리. **통과가 아니다.**
  for (const app of apps) {
    const dirs = pdfDirsOf(app);
    if (dirs.length === 0) {
      gaps.push({ app, why: "PDF 산출물이 없다 — 견본을 먼저 렌더할 것(이 앱은 검사되지 않았다)" });
      continue;
    }
    const fonts = path.join("apps", app, "assets", "fonts");
    const hasFonts = existsSync(path.join(ROOT, fonts));
    for (const dir of dirs) {
      const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
      const names = sampleNamesOf(app);
      const nameArgs = names.length ? ["--names", names.join(",")] : [];
      jobs.push({
        app,
        dir: rel,
        label: "언어",
        script: "audit-pdf-language.py",
        args: ["scripts/audit-pdf-language.py", rel, ...nameArgs],
      });
      jobs.push({
        app,
        dir: rel,
        label: "지면",
        script: "audit-pdf-layout.py",
        args: ["scripts/audit-pdf-layout.py", `${rel}/*.pdf`],
      });
      if (hasFonts) {
        jobs.push({
          app,
          dir: rel,
          label: "글리프",
          script: "audit-pdf-glyphs.py",
          args: ["scripts/audit-pdf-glyphs.py", "--fonts", fonts, `${rel}/*.pdf`],
        });
      } else {
        gaps.push({ app, why: "서체 폴더가 없다 — 글리프 검사를 못 한다" });
      }
    }
  }
  return { jobs, gaps };
}

const { jobs: planned, gaps } = buildPlan();

if (process.argv.includes("--audit-plan")) {
  // 감사기가 읽는다. **사람이 읽는 줄을 섞지 않는다** — 이 출력은 통째로 JSON 이어야 한다.
  console.log(JSON.stringify({ jobs: planned, gaps }, null, 2));
  process.exit(0);
}

let failures = 0;
let audited = 0;
const seenDirs = new Set();

for (const { app, why } of gaps) {
  console.log(`\n[${app}]`);
  console.log(`    ⚠ ${why}`);
  failures += 1;
}
for (const job of planned) {
  if (!seenDirs.has(job.dir)) {
    seenDirs.add(job.dir);
    audited += 1;
    console.log(`\n[${job.app}] ${job.dir}`);
  }
  if (!run(job.label, "python", job.args)) failures += 1;
}

console.log(`\nPDF 검사 — 폴더 ${audited}개 · 어긋난 자리 ${failures}건`);
if (failures) {
  console.log("⚠️ 아랍어 문서의 글리프 실패는 RTL 거짓 양성일 수 있다 — PNG로 눈으로 볼 것.");
  console.log("   (`audit-pdf-glyphs.py` 머리말에 그 경위가 적혀 있다)");
  process.exit(1);
}
console.log("ALL PASS — 언어·지면·글리프 셋 다 깨끗하다.");
