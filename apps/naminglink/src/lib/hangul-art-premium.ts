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

/**
 * 음절 표기를 **줄바꿈될 수 있는 형태**로 고친다. "에·밀·리" → "에 · 밀 · 리".
 *
 * PDF에서 이 값은 좁은 상자 안에 들어간다. 그런데 가운뎃점만으로 이어 붙이면 공백이 없어
 * **한 단어**가 되고, `registerHyphenationCallback`이 단어를 쪼개지 않게 해 두어서 상자를
 * 넘어 옆 칸을 덮는다. 한글 표기는 최대 51자까지 올 수 있어(어절 12자 × 4) 실제로 지면
 * 절반을 가로질렀다(2026-08-01 상한값 케이스에서 발견).
 *
 * **모델이 주는 값이라 형식을 프롬프트로 강제하지 않고 여기서 고친다** — 서버 normalize가
 * 이 저장소의 방식이다. 가운뎃점·중점·하이픈 무엇으로 오든 같은 모양으로 맞춘다.
 */
function breakableSyllables(value: unknown) {
  const raw = text(value);
  if (!raw) return "";
  return raw
    .replace(/\s*[·・‧∙•]\s*/g, " · ")
    .replace(/\s+/g, " ")
    .trim();
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
        syllables: breakableSyllables(candidate.syllables),
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
