// 발음 표기 붓글씨 PDF(HANGUL_ART_PDF)의 리포트 데이터.
// 데이터 근거 원칙: 음차 결과에 이미 사용자 언어로 담긴 필드(발음 근거·음절·IPA·사용 안내)만
// 재구성하며, AI를 재호출하지 않는다(결정적·즉시 생성).

export type HangulArtReportData = {
  reportId: string;
  generatedAt: string;
  outputLanguage: string;
  name: { hangul: string; romanized: string };
  original: { name: string; language: string };
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

export type HangulArtPremiumResult = {
  entitlement: { productCode: "HANGUL_ART_PDF"; includesPdf: true };
  reportData: HangulArtReportData;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function buildHangulArtResult(payload: {
  inputFactors: Record<string, unknown>;
  candidate: Record<string, unknown>;
  outputLanguage: string;
  reportId: string;
}): HangulArtPremiumResult {
  const { inputFactors, candidate, outputLanguage, reportId } = payload;
  return {
    entitlement: { productCode: "HANGUL_ART_PDF", includesPdf: true },
    reportData: {
      reportId,
      generatedAt: new Date().toISOString(),
      outputLanguage,
      name: {
        hangul: text(candidate.hangul).replace(/\s+/g, " "),
        romanized: text(candidate.pronunciation),
      },
      original: {
        name: text(inputFactors.originalName),
        language: text(inputFactors.originalNameLanguage),
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
    },
  };
}
