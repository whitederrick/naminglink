// 발음 표기 아트 PDF(HANGUL_ART_PDF)의 리포트 데이터.
// 구성(2026-07-23 확정): 선택 서체 N개(설정값) × 표기 후보(최대 3) 아트 페이지 + 후보별 발음 안내.
// 데이터 근거 원칙: 음차 결과에 이미 사용자 언어로 담긴 필드만 재구성하며 AI를 재호출하지 않는다.
import type { ReportFontSnapshot } from "@/lib/report-fonts-registry";

export type HangulArtCandidate = {
  name: { hangul: string; romanized: string };
  pronunciation: {
    basis: string;
    syllables: string;
    ipa: string;
    reason: string;
    culturalFit: string;
    usageNote: string;
    cautionNotes: string;
  };
};

export type HangulArtReportData = {
  reportId: string;
  generatedAt: string;
  outputLanguage: string;
  original: { name: string; language: string };
  fonts: ReportFontSnapshot[];
  candidates: HangulArtCandidate[];
};

export type HangulArtPremiumResult = {
  entitlement: { productCode: "HANGUL_ART_PDF"; includesPdf: true };
  reportData: HangulArtReportData;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function buildHangulArtResult(payload: {
  inputFactors: Record<string, unknown>;
  candidates: Array<Record<string, unknown>>;
  fonts: ReportFontSnapshot[];
  outputLanguage: string;
  reportId: string;
}): HangulArtPremiumResult {
  const { inputFactors, fonts, outputLanguage, reportId } = payload;
  const candidates = payload.candidates
    .filter((candidate) => text(candidate.hangul))
    .map((candidate) => ({
      name: {
        hangul: text(candidate.hangul).replace(/\s+/g, " "),
        romanized: text(candidate.pronunciation),
      },
      pronunciation: {
        basis: text(candidate.source_pronunciation_basis),
        syllables: text(candidate.syllables),
        ipa: text(candidate.ipa),
        reason: text(candidate.recommendation_reason),
        culturalFit: text(candidate.cultural_fit),
        usageNote: text(candidate.usage_note),
        cautionNotes: text(candidate.caution_notes),
      },
    }));
  if (candidates.length === 0) throw new Error("리포트로 만들 표기 후보가 없습니다.");
  return {
    entitlement: { productCode: "HANGUL_ART_PDF", includesPdf: true },
    reportData: {
      reportId,
      generatedAt: new Date().toISOString(),
      outputLanguage,
      original: {
        name: text(inputFactors.originalName),
        language: text(inputFactors.originalNameLanguage),
      },
      fonts,
      candidates,
    },
  };
}
