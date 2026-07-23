import "server-only";

import { Font } from "@react-pdf/renderer";

import {
  ensureReportFontFile,
  type ReportFontRow,
} from "@/lib/report-fonts-registry";

// 저장소 서체를 react-pdf에 동적 등록한다. family 이름은 코드 기반으로 고정해
// 같은 람다 안에서 중복 등록을 피한다.
const registered = new Set<string>();

export function reportFontFamily(code: string) {
  return `rf_${code.replaceAll("-", "_")}`;
}

export async function registerReportFonts(rows: ReportFontRow[]) {
  const families: Record<string, string> = {};
  for (const row of rows) {
    const family = reportFontFamily(row.code);
    families[row.code] = family;
    if (registered.has(family)) continue;
    const filePath = await ensureReportFontFile(row);
    Font.register({ family, fonts: [{ src: filePath, fontWeight: 400 }] });
    registered.add(family);
  }
  return families;
}
