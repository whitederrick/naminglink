// 서체 선택 UI용 미리보기 PNG 생성·업로드.
// 활성 서체를 저장소에서 내려받아 샘플 문구("김하늘")를 렌더한 뒤 font-previews 공개 버킷에 올리고
// report_fonts.preview_path를 갱신한다. 새 서체 등록 후 이 스크립트를 실행하면 된다.
// 실행: npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/generate-font-previews.tsx
import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import React from "react";
import { Document, Font, Page, Text, renderToBuffer } from "@react-pdf/renderer";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(path.join(__dirname, "../.env.local"), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL!, env.SUPABASE_SERVICE_ROLE_KEY!);
const SAMPLE = "김하늘";

async function main() {
  const { data: fonts, error } = await supabase
    .from("report_fonts")
    .select("id,code,storage_path")
    .eq("enabled", true)
    .order("sort_order");
  if (error || !fonts?.length) throw new Error(`서체 조회 실패: ${error?.message ?? "없음"}`);

  const workDir = path.join(os.tmpdir(), "naminglink-font-previews");
  mkdirSync(workDir, { recursive: true });

  for (const font of fonts) {
    const { data: file, error: downloadError } = await supabase.storage
      .from("report-fonts")
      .download(font.storage_path);
    if (downloadError || !file) throw new Error(`다운로드 실패: ${font.code}`);
    const extension = path.extname(font.storage_path) || ".ttf";
    const localPath = path.join(workDir, `${font.code}${extension}`);
    writeFileSync(localPath, Buffer.from(await file.arrayBuffer()));
    Font.register({ family: font.code, fonts: [{ src: localPath, fontWeight: 400 }] });
  }
  Font.registerHyphenationCallback((word) => [word]);

  const pdf = await renderToBuffer(
    <Document>
      {fonts.map((font) => (
        <Page
          key={font.code}
          size={{ width: 600, height: 190 }}
          style={{ backgroundColor: "#f6efdf", alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontFamily: font.code, fontSize: 104, color: "#221c14" }}>{SAMPLE}</Text>
        </Page>
      ))}
    </Document>,
  );
  const pdfPath = path.join(workDir, "previews.pdf");
  writeFileSync(pdfPath, pdf);

  // pymupdf로 페이지별 PNG 추출.
  const pyScript = path.join(workDir, "to-png.py");
  writeFileSync(
    pyScript,
    [
      "import sys, fitz",
      "doc = fitz.open(sys.argv[1])",
      "for i, page in enumerate(doc):",
      "    page.get_pixmap(dpi=144).save(f'{sys.argv[2]}/preview-{i}.png')",
    ].join("\n"),
  );
  const result = spawnSync("node", [path.join(__dirname, "run-python.mjs"), pyScript, pdfPath, workDir], {
    stdio: "inherit",
  });
  if (result.status !== 0) throw new Error("PNG 변환 실패");

  const pngs = readdirSync(workDir).filter((name) => name.startsWith("preview-"));
  if (pngs.length !== fonts.length) throw new Error(`PNG 수 불일치: ${pngs.length}/${fonts.length}`);

  for (let index = 0; index < fonts.length; index += 1) {
    const font = fonts[index];
    const png = readFileSync(path.join(workDir, `preview-${index}.png`));
    const storagePath = `${font.code}/preview.png`;
    const { error: uploadError } = await supabase.storage
      .from("font-previews")
      .upload(storagePath, png, { contentType: "image/png", upsert: true });
    if (uploadError) throw new Error(`업로드 실패: ${font.code} — ${uploadError.message}`);
    const { error: updateError } = await supabase
      .from("report_fonts")
      .update({ preview_path: storagePath, updated_at: new Date().toISOString() })
      .eq("id", font.id);
    if (updateError) throw new Error(`갱신 실패: ${font.code}`);
    console.log(`미리보기 생성: ${font.code} (${Math.round(png.length / 1024)}KB)`);
  }
  console.log("완료.");
}

void main();
