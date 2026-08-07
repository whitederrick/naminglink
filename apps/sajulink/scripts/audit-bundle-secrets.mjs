// 빌드된 클라이언트 번들에 서버 비밀이 섞였는지 **실제 값으로** 검사한다.
//
// 이름(`SUPABASE_SERVICE_ROLE_KEY` 같은 문자열)을 찾는 것으로는 부족하다. 값이 다른 경로로
// 흘러 들어가면 이름은 안 보이고 값만 남는다. 그래서 .env.local의 값을 그대로 들고
// .next/static(브라우저가 받는 것)에서 찾는다.
//
// ## 2026-08-07에 고친 것
//
// **① 대조군이 없었다.** 찾기가 망가져도(경로가 바뀌거나 파일을 못 읽거나) 「비밀이 없다」로
// 똑같이 끝났다. 이제 **반드시 있어야 하는 문자열**과 **절대 없어야 하는 문자열**을 함께
// 찾아, 둘 다 기대대로여야 결과를 내놓는다.
//
// **② 비밀이 0개여도 통과했다.** `.env.local`에 `NEXT_PUBLIC_`만 있으면 찾을 것이 없는데도
// 「서버 비밀이 브라우저 자산에 없다」가 찍혔다. 찾을 것이 없는 것은 통과가 아니다.
//
// **③ 드림링크는 아예 못 돌았다.** `.env.local`이 없어 첫 줄에서 죽었고, 그래서 **이 앱의
// 번들은 한 번도 검사된 적이 없었다.** 값 기반 검사는 파일이 있어야 하지만 **이름 기반
// 검사는 없어도 된다** — 나눠서, 못 돈 쪽을 눈에 띄게 알린다. 늘 빨간불이면 아무도 안 본다.
//
// 실행: apps/<app> 에서  node scripts/audit-bundle-secrets.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const appDir = process.cwd();

/**
 * 값 기반 검사에 쓸 환경 파일. 기본은 이 앱의 `.env.local`이고, `--env <경로>`로 바꿀 수 있다.
 *
 * **왜 바꿀 수 있어야 하나:** 드림링크는 `.env.local`이 없어 값 기반 검사가 통째로 못 돌았다.
 * 네 앱은 Supabase 하나를 함께 쓰므로 형제의 환경 파일로도 **같은 비밀이 번들에 있는지**
 * 볼 수 있다. 파일을 새로 만들지 않고(그러면 그 앱의 dev 동작이 바뀐다) 검사만 돌린다.
 *
 *   node scripts/audit-bundle-secrets.mjs --env ../sajulink/.env.local
 */
const envFlag = process.argv.indexOf("--env");
const envPath =
  envFlag >= 0 && process.argv[envFlag + 1]
    ? path.resolve(appDir, process.argv[envFlag + 1])
    : path.join(appDir, ".env.local");
const staticDir = path.join(appDir, ".next", "static");

/** `.env.local`이 없으면 값 기반 검사를 못 한다. 죽지 않고 그 사실을 들고 간다. */
let env = null;
try {
  env = Object.fromEntries(
    readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .filter((l) => l.includes("=") && !l.trimStart().startsWith("#"))
      .map((l) => {
        const i = l.indexOf("=");
        return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")];
      }),
  );
} catch {
  env = null;
}

// NEXT_PUBLIC_ 은 브라우저로 나가는 것이 정상이다. 나머지는 전부 서버 전용으로 본다.
const secrets = env
  ? Object.entries(env).filter(
      ([k, v]) => !k.startsWith("NEXT_PUBLIC_") && typeof v === "string" && v.length >= 12,
    )
  : [];

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(js|mjs|css|map|json|txt|html)$/.test(name)) out.push(p);
  }
  return out;
}

const files = walk(staticDir);
if (files.length === 0) {
  console.error(`.next/static 이 비어 있다 — 먼저 빌드할 것 (${staticDir})`);
  process.exit(1);
}

const blobs = files.map((f) => ({ f, text: readFileSync(f, "utf8") }));
const findIn = (needle) => blobs.filter((b) => b.text.includes(needle));

// ── 대조군 ─────────────────────────────────────────────────────────────────
//
// 찾기가 살아 있는가. **있어야 하는 것과 없어야 하는 것을 함께** 본다 — 한쪽만 보면
// 「전부 못 찾는 상태」나 「전부 찾는 상태」 중 하나를 놓친다.
// **있어야 하는 쪽은 `NEXT_PUBLIC_` 값으로 잡는다.** 그 값은 정의상 번들에 들어가야 하므로,
// 찾아진다는 것은 「환경변수 값이 번들에 섞이면 이 검사가 잡는다」가 실제로 증명된 것이다.
// 「번들에 흔한 문자열」로 하는 것보다 훨씬 강하다 — 그건 파일을 읽었다는 사실만 말해 준다.
// `.env.local`이 없는 앱은 번들러가 늘 남기는 문자열로 물러선다(그 앱은 반쪽 검사다).
const publicValues = env
  ? Object.entries(env)
      .filter(([k, v]) => k.startsWith("NEXT_PUBLIC_") && typeof v === "string" && v.length >= 12)
      .map(([, v]) => v)
  : [];
const controlNeedle = publicValues.find((v) => findIn(v).length > 0) ?? null;
/**
 * 공개값이 번들에 없는 앱(브라우저가 Supabase를 안 부르는 형제 셋)을 위한 대비책.
 *
 * **번들에서 실제로 잘라 온 40글자**를 찾는다. 「use strict」 같은 흔한 말로 하면 파일을
 * 읽었다는 사실밖에 증명이 안 되는데, 이건 **키 길이의 임의 문자열을 전 파일에서 찾아낼 수
 * 있다**는 것을 증명한다 — 유출된 비밀을 찾는 일과 같은 모양이다.
 */
const sampledNeedle = (() => {
  const biggest = blobs.reduce((a, b) => (b.text.length > a.text.length ? b : a), blobs[0]);
  const at = Math.floor(biggest.text.length / 2);
  return biggest.text.slice(at, at + 40);
})();
const MUST_FIND = controlNeedle ?? sampledNeedle;
const MUST_NOT_FIND = "naminglink-audit-sentinel-절대없음";
if (findIn(MUST_FIND).length === 0 || findIn(MUST_NOT_FIND).length > 0) {
  console.error("대조군 실패 — 번들 안에서 문자열을 제대로 찾지 못한다. 이 결과를 믿지 말 것.");
  console.error(`  찾아야 할 문자열 찾음 ${findIn(MUST_FIND).length}개 (0이면 안 됨)`);
  console.error(`  없어야 할 문자열 찾음 ${findIn(MUST_NOT_FIND).length}개 (0이어야 함)`);
  if (env && publicValues.length > 0 && !controlNeedle) {
    console.error("  ※ NEXT_PUBLIC_ 값이 번들에서 하나도 안 나온다 — 빌드가 최신인지 볼 것.");
  }
  process.exit(1);
}
const controlKind = controlNeedle
  ? "NEXT_PUBLIC_ 값이 번들에서 실제로 찾아진다 — 값이 새면 잡힌다"
  : "번들에서 뽑은 40글자를 전 파일에서 찾아낸다 (이 앱은 브라우저가 쓰는 공개값이 없다)";

console.log(
  `검사 대상: 브라우저 자산 ${files.length}개 · 서버 비밀 ${env ? `${secrets.length}개` : "(.env.local 없음)"}\n`,
);

let leaks = 0;

for (const [key, value] of secrets) {
  const hits = findIn(value);
  if (hits.length > 0) {
    leaks += 1;
    console.error(`  !!! ${key} 의 값이 브라우저 자산에 들어 있다`);
    for (const h of hits.slice(0, 3)) console.error(`      ${path.relative(appDir, h.f)}`);
  }
}

// 이름만으로도 한 번 훑는다. **`.env.local`이 없어도 이 검사는 돈다.**
const NAME_PATTERNS = [
  "SERVICE_ROLE", "TOSS_SECRET", "PORTONE_API_SECRET", "OPENAI_API_KEY",
  "RESULT_SEAL_SECRET", "RESEND_API_KEY", "CRON_SECRET", "PREMIUM_TEST_SECRET",
  "ANALYTICS_HASH_SALT", "OPS_STATUS_TOKEN", "WEBHOOK_SECRET", "SUPABASE_DB_URL",
];
for (const name of NAME_PATTERNS) {
  const hits = findIn(name);
  if (hits.length > 0) {
    leaks += 1;
    console.error(`  !!! 이름 "${name}" 이 브라우저 자산에 나타난다`);
    for (const h of hits.slice(0, 3)) console.error(`      ${path.relative(appDir, h.f)}`);
  }
}

if (leaks > 0) {
  console.error(`\n유출 의심 ${leaks}건`);
  process.exit(1);
}

console.log(`✓ 대조군: ${controlKind}`);
console.log(`✓ 이름 ${NAME_PATTERNS.length}종이 브라우저 자산에 없다`);

if (!env) {
  // **찾을 것이 없는 것은 통과가 아니다.** 절반만 봤다는 사실을 눈에 띄게 남긴다.
  console.log("\n⚠ 값 기반 검사는 돌지 않았다 — `.env.local`이 없다.");
  console.log(`   ${envPath} 를 만들면(Vercel 값과 같게) 값이 번들에 섞였는지까지 본다.`);
  console.log("   지금 통과한 것은 **이름 기반 검사뿐**이다.");
  process.exit(0);
}

if (secrets.length === 0) {
  console.error("\n찾을 서버 비밀이 0개다 — .env.local에 NEXT_PUBLIC_ 말고는 없다.");
  console.error("찾을 것이 없는 것은 통과가 아니다. 환경 파일이 맞는지 볼 것.");
  process.exit(1);
}

console.log(`✓ 서버 비밀 ${secrets.length}개의 **값**이 브라우저 자산에 없다`);
for (const [key] of secrets) console.log(`    확인함: ${key}`);
