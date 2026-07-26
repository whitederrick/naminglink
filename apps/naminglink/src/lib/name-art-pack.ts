// 이름 아트 팩(NAME_ART_PACK, US$1.99): 한글 이름 후보 1개 × 선택 서체 N개 아트 PDF.
// AI 호출 없이 저장된 후보 데이터로 결정적 생성한다.
import type { ReportFontSnapshot } from "@/lib/report-fonts-registry";

export type NameArtPackReportData = {
  reportId: string;
  generatedAt: string;
  outputLanguage: string;
  original: { name: string };
  name: { hangul: string; romanized: string };
  fonts: ReportFontSnapshot[];
};

export type NameArtPackResult = {
  entitlement: { productCode: "NAME_ART_PACK"; includesPdf: true };
  reportData: NameArtPackReportData;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

// 후보의 pronunciation에서 로마자 표기만 추린다("로마자 / 한글" 혼합 형식 대비).
function romanizedOf(candidate: Record<string, unknown>) {
  const pronunciation = text(candidate.pronunciation);
  const romanPart = pronunciation
    .split("/")
    .map((part) => part.trim())
    .find((part) => part.length > 0 && !/[가-힣]/.test(part));
  return romanPart ?? pronunciation;
}

export function buildNameArtPackResult(payload: {
  inputFactors: Record<string, unknown>;
  candidate: Record<string, unknown>;
  fonts: ReportFontSnapshot[];
  outputLanguage: string;
  reportId: string;
}): NameArtPackResult {
  const hangul = text(payload.candidate.hangul);
  if (!hangul) throw new Error("아트로 만들 이름이 없습니다.");
  if (payload.fonts.length === 0) throw new Error("선택한 서체가 없습니다.");
  return {
    entitlement: { productCode: "NAME_ART_PACK", includesPdf: true },
    reportData: {
      reportId: payload.reportId,
      generatedAt: new Date().toISOString(),
      outputLanguage: payload.outputLanguage,
      original: { name: text(payload.inputFactors.originalName) },
      name: { hangul, romanized: romanizedOf(payload.candidate) },
      fonts: payload.fonts,
    },
  };
}
