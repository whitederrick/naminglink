import { createClient } from "@supabase/supabase-js";

const publish = process.argv.includes("--publish");
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !serviceRoleKey || !anonKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, or SUPABASE_SERVICE_ROLE_KEY.",
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
const publicSupabase = createClient(supabaseUrl, anonKey, {
  auth: { persistSession: false },
});
const hanjaSourceKey = "scourt-personal-name-hanja-2026-07-15";
const pronunciationSourceKey = "scourt-korean-romanization-2026-07-15";

async function requiredSource(table, sourceKey, statusColumn) {
  const { data, error } = await supabase
    .from(table)
    .select(`id,${statusColumn},source_key,title,source_sha256`)
    .eq("source_key", sourceKey)
    .single();
  if (error || !data) throw new Error(`${table} source lookup failed: ${error?.message}`);
  return data;
}

async function exactCount(table, sourceId, reviewStatus) {
  let query = supabase
    .from(table)
    .select("id", { count: "exact", head: true })
    .eq("source_id", sourceId);
  if (reviewStatus) query = query.eq("review_status", reviewStatus);
  const { count, error } = await query;
  if (error) throw new Error(`${table} count failed: ${error.message}`);
  return count ?? 0;
}

const hanjaSource = await requiredSource("official_hanja_sources", hanjaSourceKey, "status");
const pronunciationSource = await requiredSource(
  "official_pronunciation_sources",
  pronunciationSourceKey,
  "extraction_status",
);
const before = {
  hanjaEntries: await exactCount("official_hanja_entries", hanjaSource.id),
  pronunciationEntries: await exactCount(
    "official_pronunciation_entries",
    pronunciationSource.id,
  ),
};

/**
 * 발행 전에 기대하는 행 수.
 *
 * **왜 정확히 일치를 요구하는가.** 이 스크립트는 `--publish`로 reviewed → production을 뒤집는
 * 관문이다. 가져오다 만 데이터가 그대로 발행되면 화면이 조용히 반쪽이 된다.
 *
 * **9,938은 어디서 온 숫자인가.** 원본 추출은 10,380행이었는데, 2026-07-20에 화면에 그릴 수
 * 없는 코드(미할당 Plane 10 · PUA) **442행을 걷어내** 9,938이 됐다(`docs/WORK_STATUS_2026-07-20.md`,
 * 백업 `bad-hanja-backup.json`). 이 상수는 그 정리 이전 값인 10,380에 멈춰 있어 **2026-08-03
 * 전수 감사 때까지 이 검사가 절대 통과할 수 없는 상태**였다.
 *
 * **개정이 오면 이 값도 함께 바꿔야 한다.** 인명용 한자표가 개정되면 행 수가 달라진다. 그때
 * 할 일은 세 가지이고 하나라도 빠지면 여기서 멈춘다 — 그것이 이 검사의 목적이다.
 *   ① `sync-official-reference-data.mjs`의 REVISIONS에 한 줄 추가
 *   ② 동기화 후 실제 행 수를 세어(`count-official-hanja.mjs`) 아래 값을 갱신
 *   ③ `docs/REFERENCE_DATA_UPDATES.md`의 숫자 표 갱신
 */
const EXPECTED = { hanjaEntries: 9938, pronunciationEntries: 2321 };

if (
  before.hanjaEntries !== EXPECTED.hanjaEntries ||
  before.pronunciationEntries !== EXPECTED.pronunciationEntries
) {
  throw new Error(
    [
      `발행 전 행 수가 기대와 다릅니다.`,
      `  기대: ${JSON.stringify(EXPECTED)}`,
      `  실제: ${JSON.stringify(before)}`,
      `개정으로 수가 바뀐 것이라면 node scripts/count-official-hanja.mjs 로 확인한 뒤`,
      `이 파일의 EXPECTED와 docs/REFERENCE_DATA_UPDATES.md를 함께 갱신하십시오.`,
      `그렇지 않다면 가져오기가 중간에 끊긴 것이므로 발행하면 안 됩니다.`,
    ].join("\n"),
  );
}

if (publish) {
  const operations = [
    supabase
      .from("official_hanja_sources")
      .update({ status: "archived", updated_at: new Date().toISOString() })
      .eq("status", "production")
      .neq("id", hanjaSource.id),
    supabase
      .from("official_pronunciation_sources")
      .update({ extraction_status: "archived", updated_at: new Date().toISOString() })
      .eq("extraction_status", "production")
      .neq("id", pronunciationSource.id),
    supabase
      .from("official_hanja_entries")
      .update({ review_status: "production", updated_at: new Date().toISOString() })
      .eq("source_id", hanjaSource.id)
      .eq("review_status", "reviewed"),
    supabase
      .from("official_pronunciation_entries")
      .update({ review_status: "production", updated_at: new Date().toISOString() })
      .eq("source_id", pronunciationSource.id)
      .eq("review_status", "reviewed"),
  ];
  const results = await Promise.all(operations);
  const failure = results.find((result) => result.error);
  if (failure?.error) throw new Error(`Publish preparation failed: ${failure.error.message}`);

  const [{ error: hanjaPublishError }, { error: pronunciationPublishError }] = await Promise.all([
    supabase
      .from("official_hanja_sources")
      .update({ status: "production", updated_at: new Date().toISOString() })
      .eq("id", hanjaSource.id),
    supabase
      .from("official_pronunciation_sources")
      .update({ extraction_status: "production", updated_at: new Date().toISOString() })
      .eq("id", pronunciationSource.id),
  ]);
  if (hanjaPublishError || pronunciationPublishError) {
    throw new Error(
      `Source publish failed: ${hanjaPublishError?.message ?? pronunciationPublishError?.message}`,
    );
  }
}

const [finalHanjaSource, finalPronunciationSource] = await Promise.all([
  requiredSource("official_hanja_sources", hanjaSourceKey, "status"),
  requiredSource("official_pronunciation_sources", pronunciationSourceKey, "extraction_status"),
]);
const after = {
  hanjaEntries: await exactCount("official_hanja_entries", hanjaSource.id),
  hanjaProductionEntries: await exactCount(
    "official_hanja_entries",
    hanjaSource.id,
    "production",
  ),
  pronunciationEntries: await exactCount(
    "official_pronunciation_entries",
    pronunciationSource.id,
  ),
  pronunciationProductionEntries: await exactCount(
    "official_pronunciation_entries",
    pronunciationSource.id,
    "production",
  ),
  hanjaSourceStatus: finalHanjaSource.status,
  pronunciationSourceStatus: finalPronunciationSource.extraction_status,
};

const expectedProduction = publish || finalHanjaSource.status === "production";

/**
 * 실제로 후보가 나오는지 본다. 행 수만 세면 "가져오기는 됐는데 조회가 안 되는" 상태를 못 잡는다.
 *
 * **service_role로 조회한다.** 예전에는 anon 키로 확인했는데, 그것은 **앱이 쓰지 않는 경로**다 —
 * 화면에 쓰이는 조회는 전부 서버에서 service_role로 돈다(`lib/hanja-guide-data.ts`,
 * `lib/official-hanja-db.ts`, `api/hanja/surname`). 안 쓰는 경로를 검사하면 진짜 화면이
 * 깨져도 통과하고, 반대로 권한을 조이면 멀쩡한데도 실패한다(2026-08-03 전수 감사에서 실제로
 * 이 검사가 `permission denied`로 멈춰 있었다).
 */
const { data: candidates, error: candidatesError } = await supabase
  .from("official_hanja_entries")
  .select("hangul_syllable,hanja,meaning_ko")
  .eq("source_id", hanjaSource.id)
  .in("hangul_syllable", ["남", "규"])
  .eq("review_status", "production")
  .limit(200);
if (candidatesError) {
  throw new Error(`Production lookup failed: ${candidatesError.message}`);
}
after.namCandidates = candidates.filter((entry) => entry.hangul_syllable === "남").length;
after.gyuCandidates = candidates.filter((entry) => entry.hangul_syllable === "규").length;

/**
 * **브라우저 키로는 읽히지 않아야 한다.**
 *
 * 이 표는 손질을 거친 자료이고 화면에는 서버가 골라서 내보낸다. anon 키는 클라이언트 번들에
 * 들어 있는 공개값이라, 여기에 읽기 권한이 붙으면 누구나 표를 통째로 긁어 갈 수 있다.
 * 지금은 GRANT가 없어 막혀 있는데(RLS 정책은 남아 있지만 GRANT가 없으면 닿지 않는다),
 * 나중에 누가 편의로 열어 두는 것을 여기서 잡는다.
 */
const { error: anonError } = await publicSupabase
  .from("official_hanja_entries")
  .select("hanja")
  .limit(1);
after.anonReadBlocked = Boolean(anonError);
if (!anonError) {
  console.error(
    "브라우저(anon) 키로 official_hanja_entries가 읽힙니다. " +
      "이 표는 서버를 거쳐서만 나가야 합니다 — GRANT를 확인하십시오.",
  );
}

const ok =
  after.hanjaEntries === EXPECTED.hanjaEntries &&
  after.pronunciationEntries === EXPECTED.pronunciationEntries &&
  after.anonReadBlocked &&
  (!expectedProduction ||
    (after.hanjaProductionEntries === EXPECTED.hanjaEntries &&
      after.pronunciationProductionEntries === EXPECTED.pronunciationEntries &&
      after.hanjaSourceStatus === "production" &&
      after.pronunciationSourceStatus === "production" &&
      after.namCandidates > 0 &&
      after.gyuCandidates > 0));

console.log(JSON.stringify({ ok, publish, before, after }, null, 2));
if (!ok) process.exit(1);
