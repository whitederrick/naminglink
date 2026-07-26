import "server-only";

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";

import { getSupabaseAdminClient } from "@/lib/supabase";

// 프리미엄 PDF 배경 이미지 저장소 접근 계층.
// 관리자가 올린 배경 중 생성 시점의 월이 적용 기간(start_month~end_month, 연말 걸침 허용)에
// 드는 활성 배경을 sort_order 순으로 골라 data URI로 돌려준다(react-pdf Image는 base64 임베드가 안전).
// 없거나 실패하면 null → 렌더러가 내장 벡터 배경(계절 자동)으로 폴백한다.

export type ReportBackdropRow = {
  id: string;
  code: string;
  name_ko: string;
  start_month: number;
  end_month: number;
  storage_path: string;
  file_sha256: string | null;
  enabled: boolean;
  sort_order: number;
};

const BACKDROP_SELECT =
  "id,code,name_ko,start_month,end_month,storage_path,file_sha256,enabled,sort_order";

export async function listReportBackdrops() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("배경 저장소 연결이 설정되지 않았습니다.");
  const { data, error } = await supabase
    .from("report_backdrops")
    .select(BACKDROP_SELECT)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []) as ReportBackdropRow[];
}

export function backdropMatchesMonth(row: ReportBackdropRow, month: number) {
  if (row.start_month <= row.end_month) {
    return month >= row.start_month && month <= row.end_month;
  }
  // 12→2월처럼 연말을 걸치는 기간.
  return month >= row.start_month || month <= row.end_month;
}

async function downloadBackdrop(row: ReportBackdropRow) {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("배경 저장소 연결이 설정되지 않았습니다.");
  const cacheDir = path.join(os.tmpdir(), "naminglink-report-backdrops");
  const extension = path.extname(row.storage_path) || ".png";
  const cachePath = path.join(cacheDir, `${row.file_sha256 ?? row.code}${extension}`);
  if (existsSync(cachePath)) return { buffer: readFileSync(cachePath), extension };
  const { data, error } = await supabase.storage
    .from("report-backdrops")
    .download(row.storage_path);
  if (error || !data) throw new Error(`배경 이미지를 내려받지 못했습니다: ${row.code}`);
  const buffer = Buffer.from(await data.arrayBuffer());
  if (row.file_sha256) {
    const sha = createHash("sha256").update(buffer).digest("hex");
    if (sha !== row.file_sha256) throw new Error(`배경 이미지 무결성 검증 실패: ${row.code}`);
  }
  mkdirSync(cacheDir, { recursive: true });
  writeFileSync(cachePath, buffer);
  return { buffer, extension };
}

// 현재(또는 지정) 날짜에 적용될 배경 이미지의 data URI. 실패는 조용히 null(벡터 폴백).
export async function loadActiveBackdropDataUri(date: Date = new Date()) {
  try {
    const month = date.getMonth() + 1;
    const rows = (await listReportBackdrops()).filter(
      (row) => row.enabled && backdropMatchesMonth(row, month),
    );
    const row = rows[0];
    if (!row) return null;
    const { buffer, extension } = await downloadBackdrop(row);
    const mime = extension.toLowerCase() === ".jpg" || extension.toLowerCase() === ".jpeg"
      ? "image/jpeg"
      : "image/png";
    return `data:${mime};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.error("Failed to load report backdrop", error);
    return null;
  }
}
