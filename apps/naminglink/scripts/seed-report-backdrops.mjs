// 4계절 기본 배경 이미지를 Storage에 올리고 report_backdrops에 등록한다.
// 이미지 생성: scripts/render-season-backdrops.tsx → pymupdf PNG 변환(작업 노트 참조).
// 실행: node scripts/seed-report-backdrops.mjs [--dir <PNG 폴더>]
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const dirIndex = process.argv.indexOf("--dir");
const DIR =
  dirIndex > -1
    ? process.argv[dirIndex + 1]
    : "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/75952ee8-b9f5-4335-9a3a-9080fb0b880e/scratchpad/backdrops";

const backdrops = [
  { code: "season-spring", name_ko: "봄 (매화·연분홍)", start_month: 3, end_month: 5, file: "spring.png" },
  { code: "season-summer", name_ko: "여름 (대나무·초록)", start_month: 6, end_month: 8, file: "summer.png" },
  { code: "season-autumn", name_ko: "가을 (홍매·한지)", start_month: 9, end_month: 11, file: "autumn.png" },
  { code: "season-winter", name_ko: "겨울 (설경·달)", start_month: 12, end_month: 2, file: "winter.png" },
];

for (const backdrop of backdrops) {
  const filePath = path.join(DIR, backdrop.file);
  if (!existsSync(filePath)) {
    console.error(`파일 없음, 건너뜀: ${backdrop.code} (${filePath})`);
    continue;
  }
  const buffer = readFileSync(filePath);
  const sha = createHash("sha256").update(buffer).digest("hex");
  const storagePath = `${backdrop.code}/${sha}.png`;
  const { error: uploadError } = await supabase.storage
    .from("report-backdrops")
    .upload(storagePath, buffer, { contentType: "image/png", upsert: true });
  if (uploadError) {
    console.error(`업로드 실패: ${backdrop.code}`, uploadError.message);
    process.exit(1);
  }
  const { error: upsertError } = await supabase.from("report_backdrops").upsert(
    {
      code: backdrop.code,
      name_ko: backdrop.name_ko,
      start_month: backdrop.start_month,
      end_month: backdrop.end_month,
      storage_path: storagePath,
      file_sha256: sha,
      enabled: true,
      sort_order: 10,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "code" },
  );
  if (upsertError) {
    console.error(`등록 실패: ${backdrop.code}`, upsertError.message);
    process.exit(1);
  }
  console.log(`등록 완료: ${backdrop.code} (${Math.round(buffer.length / 1024)}KB, ${backdrop.start_month}~${backdrop.end_month}월)`);
}
console.log("배경 시드 완료.");
