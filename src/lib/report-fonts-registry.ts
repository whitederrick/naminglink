import "server-only";

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";

import OpenAI from "openai";

import { OUTPUT_LANGUAGE_NAMES } from "@/lib/openai";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 프리미엄 PDF 서체 저장소 접근 계층.
// - 목록/조회: report_fonts 테이블
// - 파일: Storage(report-fonts) → 서버리스 /tmp에 sha 기준 캐시 후 react-pdf에 등록
// - 스토리 번역: 등록 시 1회 생성해 stories(jsonb)에 저장(23로케일)

export type ReportFontRow = {
  id: string;
  code: string;
  name_ko: string;
  name_en: string;
  copyright_holder: string;
  license_type: string;
  source_url: string;
  story_ko: string;
  stories: Record<string, string>;
  storage_path: string;
  file_sha256: string | null;
  enabled: boolean;
  sort_order: number;
};

const FONT_SELECT =
  "id,code,name_ko,name_en,copyright_holder,license_type,source_url,story_ko,stories,storage_path,file_sha256,enabled,sort_order";

export async function listReportFonts(options?: { enabledOnly?: boolean }) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("서체 저장소 연결이 설정되지 않았습니다.");
  let query = supabase
    .from("report_fonts")
    .select(FONT_SELECT)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (options?.enabledOnly) query = query.eq("enabled", true);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as ReportFontRow[];
}

export async function getReportFontsByCodes(codes: string[]) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("서체 저장소 연결이 설정되지 않았습니다.");
  const { data, error } = await supabase
    .from("report_fonts")
    .select(FONT_SELECT)
    .in("code", codes)
    .eq("enabled", true);
  if (error) throw error;
  const rows = (data ?? []) as ReportFontRow[];
  // 주문 검증: 요청한 모든 코드가 활성 상태로 존재해야 한다.
  if (rows.length !== new Set(codes).size) {
    throw new Error("선택한 서체를 찾을 수 없습니다.");
  }
  return codes.map((code) => rows.find((row) => row.code === code) as ReportFontRow);
}

// 로케일에 맞는 스토리(없으면 en → ko 순 폴백).
export function fontStoryFor(row: ReportFontRow, locale: string) {
  if (locale === "ko") return row.story_ko;
  return row.stories?.[locale] ?? row.stories?.en ?? row.story_ko;
}

export function fontDisplayName(row: ReportFontRow, locale: string) {
  return locale === "ko" ? row.name_ko : `${row.name_en} (${row.name_ko})`;
}

// PDF 하단 서체 표기용 문자열.
export function fontCreditLine(row: ReportFontRow) {
  return `${row.name_en} (${row.name_ko}) © ${row.copyright_holder} · ${row.license_type} · ${row.source_url}`;
}

// Storage에서 폰트 파일을 내려받아 /tmp에 캐시하고 로컬 경로를 돌려준다.
export async function ensureReportFontFile(row: ReportFontRow) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("서체 저장소 연결이 설정되지 않았습니다.");
  const cacheDir = path.join(os.tmpdir(), "naminglink-report-fonts");
  const extension = path.extname(row.storage_path) || ".ttf";
  const cacheKey = row.file_sha256 ?? row.code;
  const cachePath = path.join(cacheDir, `${cacheKey}${extension}`);
  if (existsSync(cachePath)) return cachePath;
  const { data, error } = await supabase.storage.from("report-fonts").download(row.storage_path);
  if (error || !data) throw new Error(`서체 파일을 내려받지 못했습니다: ${row.code}`);
  const buffer = Buffer.from(await data.arrayBuffer());
  if (row.file_sha256) {
    const sha = createHash("sha256").update(buffer).digest("hex");
    if (sha !== row.file_sha256) throw new Error(`서체 파일 무결성 검증 실패: ${row.code}`);
  }
  mkdirSync(cacheDir, { recursive: true });
  writeFileSync(cachePath, buffer);
  return cachePath;
}

// 등록 시 1회: 한국어 스토리를 나머지 로케일로 번역한다(짧은 문단 1건 → 단일 호출).
export async function translateFontStory(storyKo: string) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("번역을 위해 OPENAI_API_KEY가 필요합니다.");
  }
  const locales = Object.keys(OUTPUT_LANGUAGE_NAMES).filter((locale) => locale !== "ko");
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 60_000, maxRetries: 1 });
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: [
          "You translate a short Korean paragraph about a Korean font's origin and feel into multiple languages.",
          "Translate faithfully without adding or removing facts. Keep proper nouns (person names, place names, font names) recognizable.",
          `Return valid JSON mapping each of these locale codes to the translated paragraph: ${locales.join(", ")}.`,
        ].join(" "),
      },
      { role: "user", content: storyKo },
    ],
  });
  const parsed = JSON.parse(completion.choices[0]?.message?.content ?? "{}") as Record<
    string,
    unknown
  >;
  const stories: Record<string, string> = {};
  for (const locale of locales) {
    const value = parsed[locale];
    if (typeof value === "string" && value.trim()) stories[locale] = value.trim();
  }
  return stories;
}
