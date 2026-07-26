import "server-only";

import { Font } from "@react-pdf/renderer";

import {
  ensureReportFontFile,
  type ReportFontRow,
} from "@/lib/report-fonts-registry";

// 저장소 서체를 react-pdf에 동적 등록한다. family 이름은 코드 기반으로 고정해(PDF가 코드로 참조)
// 같은 람다 안에서 중복 등록을 피하되, 중복 판별은 내용 해시까지 포함한다. 파일이 교체되면 sha가
// 달라지므로 웜 람다에서도 새 파일로 다시 등록된다(예전엔 code만 봐서 옛 파일이 고정됐다).
const registered = new Set<string>();

export function reportFontFamily(code: string) {
  return `rf_${code.replaceAll("-", "_")}`;
}

export async function registerReportFonts(rows: ReportFontRow[]) {
  const families: Record<string, string> = {};
  for (const row of rows) {
    const family = reportFontFamily(row.code);
    families[row.code] = family;
    const key = `${family}:${row.file_sha256 ?? ""}`;
    if (registered.has(key)) continue;
    const filePath = await ensureReportFontFile(row);
    Font.register({ family, fonts: [{ src: filePath, fontWeight: 400 }] });
    registered.add(key);
  }
  return families;
}
