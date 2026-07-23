import React from "react";
import { Document, renderToBuffer } from "@react-pdf/renderer";

import type { NameArtPackReportData } from "@/lib/name-art-pack";
import { ArtPage, FALLBACK_ART_FAMILY } from "@/lib/pdf/art-shared";

// 이름 아트 팩(US$1.99): 이름 1개 × 선택 서체 N개 = 아트 페이지 N장.
// 각 페이지 하단에 해당 서체명·저작권·출처를 표기한다.
export function NameArtPackDocument({
  data,
  families,
}: {
  data: NameArtPackReportData;
  families: Record<string, string>;
}) {
  const generatedDate = data.generatedAt.slice(0, 10);
  return (
    <Document title={`Naming-Link Name Art ${data.name.hangul}`}>
      {data.fonts.map((font) => (
        <ArtPage
          key={font.code}
          eyebrow="Korean Name Art"
          forName={data.original.name}
          hangul={data.name.hangul}
          romanized={data.name.romanized}
          fontFamily={families[font.code] ?? FALLBACK_ART_FAMILY}
          reportId={data.reportId}
          generatedDate={generatedDate}
          font={font}
        />
      ))}
    </Document>
  );
}

export async function renderNameArtPackPdf(
  data: NameArtPackReportData,
  families: Record<string, string> = {},
) {
  return renderToBuffer(<NameArtPackDocument data={data} families={families} />);
}
