import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node scripts/import-pronunciation-json.mjs data/pronunciation/romanization.json");
  process.exit(1);
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const payload = JSON.parse(await readFile(path.resolve(inputPath), "utf8"));
const source = payload.source ?? {};

function required(value, field) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required string: ${field}`);
  }
  return value.trim();
}

function chunks(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
const sourceKey = required(source.sourceKey, "source.sourceKey");
const { data: sourceRow, error: sourceError } = await supabase
  .from("official_pronunciation_sources")
  .upsert(
    {
      source_key: sourceKey,
      title: required(source.title, "source.title"),
      publisher: source.publisher ?? null,
      source_url: source.sourceUrl ?? null,
      source_file_name: source.fileName ?? null,
      source_sha256: source.sha256 ?? null,
      page_count: source.pageCount ?? null,
      extraction_status: source.status ?? "needs_ocr",
      metadata: {
        extraction: source.extraction ?? null,
        notes: source.notes ?? null,
      },
    },
    { onConflict: "source_key" },
  )
  .select("id")
  .single();

if (sourceError) {
  throw new Error(`official_pronunciation_sources upsert failed: ${sourceError.message}`);
}

const rows = (payload.entries ?? []).map((entry) => ({
  source_id: sourceRow.id,
  hangul: required(entry.hangul, "entries[].hangul"),
  romanization: required(entry.romanization, "entries[].romanization").toUpperCase(),
  surname_usable: typeof entry.surnameUsable === "boolean" ? entry.surnameUsable : null,
  given_name_usable: typeof entry.givenNameUsable === "boolean" ? entry.givenNameUsable : null,
  page_number: Number.isInteger(entry.page) ? entry.page : null,
  review_status: entry.reviewStatus ?? "ocr",
  notes: entry.notes ?? null,
  metadata: entry.metadata ?? {},
}));

for (const batch of chunks(rows, 500)) {
  const { error } = await supabase
    .from("official_pronunciation_entries")
    .upsert(batch, { onConflict: "source_id,hangul,romanization" });
  if (error) {
    throw new Error(`official_pronunciation_entries upsert failed: ${error.message}`);
  }
}

console.log(
  JSON.stringify(
    { ok: true, sourceKey, sourceId: sourceRow.id, imported: rows.length },
    null,
    2,
  ),
);
