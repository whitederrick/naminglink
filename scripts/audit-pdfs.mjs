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
// ## 감사기에게 「내가 이 셋을 대신 돌린다」고 알린다 (2026-08-20)
//
// `scripts/audit-verifiers.mjs` 는 예전에 **부르기만 하면** 감싼 것으로 봤다. 그러다 공격
// 스크립트가 검사기를 부르자 그 검사기가 스윕에서 조용히 사라졌다 — 갈음할 수 없는 실행으로
// 갈음해 버린 것이다. 지금은 **선언한 것만** 갈음한다. 아래 세 줄이 그 선언이고, 없는 파일을
// 적으면 감사기가 잡는다.
//
// AUDIT_WRAPS: audit-pdf-language.py
// AUDIT_WRAPS: audit-pdf-layout.py
// AUDIT_WRAPS: audit-pdf-glyphs.py

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
 * 위 `AUDIT_WRAPS` 세 줄은 「내가 이 셋을 대신 돌린다」는 **선언**이다. 그런데 감사기가
 * 선언만 보고 갈음해 주는 바람에, 부르지도 않으면서 적기만 해도 참이 됐다 — 실제로 그런
 * 대조군을 넣자 검사기 하나가 한 번도 안 돈 채 스윕에서 사라졌다.
 *
 * 지금 감사기는 **이번 실행의 출력에 그 이름이 있는지**를 증거로 본다. 라벨(「언어」·「지면」·
 * 「글리프」)만으로는 증거가 되지 않으므로 스크립트 경로를 함께 찍는다. 이 한 줄이 없으면
 * 감사기가 세 파일을 「선언만 있고 부른 자취가 없다」로 빨간불 낸다 — 그것이 옳은 동작이다.
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

let failures = 0;
let audited = 0;

for (const app of apps) {
  const dirs = pdfDirsOf(app);
  console.log(`\n[${app}]`);
  if (dirs.length === 0) {
    // **산출물이 없는 것은 통과가 아니다.** 렌더를 안 했다는 사실을 그대로 말한다.
    console.log("    ⚠ PDF 산출물이 없다 — 견본을 먼저 렌더할 것(이 앱은 검사되지 않았다)");
    failures += 1;
    continue;
  }
  const fonts = path.join("apps", app, "assets", "fonts");
  for (const dir of dirs) {
    const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
    audited += 1;
    console.log(`  ${rel}`);
    const names = sampleNamesOf(app);
    const nameArgs = names.length ? ["--names", names.join(",")] : [];
    if (!run("언어", "python", ["scripts/audit-pdf-language.py", rel, ...nameArgs])) failures += 1;
    if (!run("지면", "python", ["scripts/audit-pdf-layout.py", `${rel}/*.pdf`])) failures += 1;
    if (existsSync(path.join(ROOT, fonts))) {
      if (!run("글리프", "python", ["scripts/audit-pdf-glyphs.py", "--fonts", fonts, `${rel}/*.pdf`]))
        failures += 1;
    } else {
      console.log("    ⚠ 서체 폴더가 없다 — 글리프 검사를 건너뛴다");
      failures += 1;
    }
  }
}

console.log(`\nPDF 검사 — 폴더 ${audited}개 · 어긋난 자리 ${failures}건`);
if (failures) {
  console.log("⚠️ 아랍어 문서의 글리프 실패는 RTL 거짓 양성일 수 있다 — PNG로 눈으로 볼 것.");
  console.log("   (`audit-pdf-glyphs.py` 머리말에 그 경위가 적혀 있다)");
  process.exit(1);
}
console.log("ALL PASS — 언어·지면·글리프 셋 다 깨끗하다.");
