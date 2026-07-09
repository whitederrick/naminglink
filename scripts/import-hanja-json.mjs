import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node scripts/import-hanja-json.mjs data/hanja/official-hanja.sample.json");
  process.exit(1);
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const file = await readFile(path.resolve(inputPath), "utf8");
const payload = JSON.parse(file);
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
  },
});

function requireString(value, fieldName) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required string: ${fieldName}`);
  }

  return value.trim();
}

function nullableNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function chunk(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

async function upsertMany(table, rows, onConflict) {
  for (const rowsChunk of chunk(rows, 500)) {
    const { error } = await supabase.from(table).upsert(rowsChunk, { onConflict });

    if (error) {
      throw new Error(`${table} upsert failed: ${error.message}`);
    }
  }
}

const source = payload.source ?? {};
const sourceKey = requireString(source.sourceKey, "source.sourceKey");

const { data: sourceRow, error: sourceError } = await supabase
  .from("official_hanja_sources")
  .upsert(
    {
      source_key: sourceKey,
      title: requireString(source.title, "source.title"),
      publisher: source.publisher ?? null,
      rule_reference: source.ruleReference ?? null,
      version_label: source.versionLabel ?? null,
      effective_date: source.effectiveDate ?? null,
      source_file_name: source.fileName ?? null,
      source_sha256: source.sha256 ?? null,
      status: source.status ?? "draft",
      metadata: {
        notes: source.notes ?? null,
      },
    },
    { onConflict: "source_key" },
  )
  .select("id")
  .single();

if (sourceError) {
  throw new Error(`official_hanja_sources upsert failed: ${sourceError.message}`);
}

const sourceId = sourceRow.id;

const rules = (payload.rules ?? []).map((rule, index) => ({
  source_id: sourceId,
  rule_code: requireString(rule.code, "rules[].code"),
  description: requireString(rule.description, "rules[].description"),
  is_active: rule.isActive ?? true,
  sort_order: rule.sortOrder ?? index + 1,
}));

if (rules.length) {
  await upsertMany("official_hanja_rules", rules, "source_id,rule_code");
}

const entries = (payload.entries ?? []).map((entry) => ({
  source_id: sourceId,
  hangul_syllable: requireString(entry.hangul, "entries[].hangul"),
  hanja: requireString(entry.hanja, "entries[].hanja"),
  designated_reading: requireString(entry.reading ?? entry.hangul, "entries[].reading"),
  meaning_ko: requireString(entry.meaningKo ?? entry.meaning, "entries[].meaningKo"),
  table_section: entry.section ?? "unknown",
  page_number: nullableNumber(entry.page),
  stroke_count: nullableNumber(entry.strokeCount),
  radical: entry.radical ?? null,
  is_name_usable: entry.isNameUsable ?? true,
  review_status: entry.reviewStatus ?? "draft",
  notes: entry.notes ?? null,
  metadata: entry.metadata ?? {},
}));

if (entries.length) {
  await upsertMany(
    "official_hanja_entries",
    entries,
    "source_id,hangul_syllable,hanja,designated_reading,table_section",
  );
}

const variants = (payload.variants ?? []).map((variant) => ({
  source_id: sourceId,
  base_hanja: requireString(variant.baseHanja, "variants[].baseHanja"),
  variant_hanja: requireString(variant.variantHanja, "variants[].variantHanja"),
  variant_type: variant.variantType ?? "variant",
  rule_code: variant.ruleCode ?? null,
  notes: variant.notes ?? null,
  metadata: variant.metadata ?? {},
}));

if (variants.length) {
  await upsertMany(
    "official_hanja_variants",
    variants,
    "source_id,base_hanja,variant_hanja,variant_type",
  );
}

console.log(
  JSON.stringify(
    {
      ok: true,
      sourceKey,
      sourceId,
      imported: {
        rules: rules.length,
        entries: entries.length,
        variants: variants.length,
      },
    },
    null,
    2,
  ),
);
