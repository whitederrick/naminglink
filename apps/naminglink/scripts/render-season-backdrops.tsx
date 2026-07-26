// 4계절 배경을 "배경만"(이름 글자 없음) 담긴 PDF로 렌더한다.
// 이후 pymupdf로 PNG 변환해 report-backdrops 버킷에 시드한다(scripts/seed-report-backdrops.mjs).
// 실행: cd scripts && npx tsx --tsconfig tsconfig.sweep.json render-season-backdrops.tsx
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import React from "react";
import { Document, Page, renderToBuffer } from "@react-pdf/renderer";

import { HanjiBackdrop, type Season } from "@/lib/pdf/report-decor";

const OUT_DIR = path.join(
  "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/75952ee8-b9f5-4335-9a3a-9080fb0b880e/scratchpad",
  "backdrops",
);

const SEASONS: Season[] = ["spring", "summer", "autumn", "winter"];

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  for (const season of SEASONS) {
    const pdf = await renderToBuffer(
      <Document>
        {/* frameInner와 같은 한지 심색 배경 위에 장식만 그린다(글자 없음). */}
        <Page size={[800, 540]} style={{ backgroundColor: "#efe4cb" }}>
          <HanjiBackdrop season={season} />
        </Page>
      </Document>,
    );
    const file = path.join(OUT_DIR, `${season}.pdf`);
    writeFileSync(file, pdf);
    console.log("렌더 완료:", file);
  }
}

void main();
