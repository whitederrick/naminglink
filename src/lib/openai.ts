import OpenAI from "openai";
import type { ServiceType } from "@/lib/services";
import { getMockResult } from "@/lib/mock-results";
import { getSystemPrompt } from "@/lib/prompts";
import { getOfficialHanjaCandidates } from "@/lib/official-hanja-db";

let client: OpenAI | null = null;

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  client ??= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 30_000,
    maxRetries: 1,
  });

  return client;
}
type GenerationConstraint = {
  syllable: string;
  hanja: string;
  index: number;
};

export class NamingInputConstraintError extends Error {
  constructor(
    message: string,
    public readonly fieldErrors: Record<string, string>,
  ) {
    super(message);
    this.name = "NamingInputConstraintError";
  }
}

export class AIServiceUnavailableError extends Error {
  constructor() {
    super("AI 이름 생성 기능이 일시적으로 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.");
    this.name = "AIServiceUnavailableError";
  }
}

function inputString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getGenerationConstraint(
  inputFactors: Record<string, unknown>,
): GenerationConstraint | null {
  if (inputString(inputFactors.generationNameUsage) !== "used") return null;

  const syllable = inputString(inputFactors.generationSyllable);
  const hanja = inputString(inputFactors.generationHanja);
  const givenSyllables = Array.from(inputString(inputFactors.givenNameHangul));
  const index = givenSyllables.indexOf(syllable);

  if (!syllable || !hanja || index < 0) return null;

  return { syllable, hanja, index };
}

function assertGenerationConstraint(
  result: unknown,
  inputFactors: Record<string, unknown>,
  constraint: GenerationConstraint | null,
) {
  if (!constraint) return;
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    throw new Error("The AI result cannot be validated for the generation-name constraint.");
  }

  const candidates = (result as Record<string, unknown>).candidates;
  const givenName = inputString(inputFactors.givenNameHangul);
  if (!Array.isArray(candidates)) {
    throw new Error("The AI result cannot be validated for the generation-name constraint.");
  }
  // 규칙 엔진이 후보 부족을 안내문과 함께 빈 목록으로 반환하는 것은 정상 결과다.
  if (candidates.length === 0) return;

  const invalidCandidate = candidates.some((candidate) => {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
      return true;
    }

    const record = candidate as Record<string, unknown>;
    const hanja = Array.from(inputString(record.hanja));
    if (inputString(record.hangul) !== givenName || hanja[constraint.index] !== constraint.hanja) {
      return true;
    }

    const breakdown = record.character_breakdown;
    if (Array.isArray(breakdown)) {
      const fixed = breakdown[constraint.index];
      if (!fixed || typeof fixed !== "object" || Array.isArray(fixed)) return true;
      const fixedRecord = fixed as Record<string, unknown>;
      if (
        inputString(fixedRecord.syllable) !== constraint.syllable ||
        inputString(fixedRecord.character) !== constraint.hanja
      ) return true;
    }

    const optionGroups = record.hanja_options;
    if (Array.isArray(optionGroups)) {
      const fixedGroup = optionGroups[constraint.index];
      if (!fixedGroup || typeof fixedGroup !== "object" || Array.isArray(fixedGroup)) {
        return true;
      }
      const fixedGroupRecord = fixedGroup as Record<string, unknown>;
      if (inputString(fixedGroupRecord.selected_character) !== constraint.hanja) {
        return true;
      }
      const fixedOptions = fixedGroupRecord.options;
      if (
        Array.isArray(fixedOptions) &&
        fixedOptions.some((option) =>
          !option ||
          typeof option !== "object" ||
          Array.isArray(option) ||
          inputString((option as Record<string, unknown>).character) !== constraint.hanja
        )
      ) return true;
    }

    return false;
  });

  if (invalidCandidate) {
    throw new Error(
      `The result did not preserve ${constraint.syllable}(${constraint.hanja}) at the required position.`,
    );
  }
}
function prepareResultForClient(
  result: unknown,
  constraint: GenerationConstraint | null,
) {
  if (!constraint || !result || typeof result !== "object" || Array.isArray(result)) {
    return result;
  }

  const record = result as Record<string, unknown>;
  const candidates = Array.isArray(record.candidates) ? record.candidates : [];

  return {
    ...record,
    generation_constraint: constraint,
    candidates: candidates.map((candidate) => {
      if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) {
        return candidate;
      }

      const candidateRecord = candidate as Record<string, unknown>;
      const optionGroups = Array.isArray(candidateRecord.hanja_options)
        ? candidateRecord.hanja_options.filter(
            (_group, index) => index !== constraint.index,
          )
        : candidateRecord.hanja_options;

      return {
        ...candidateRecord,
        fixed_generation_name: constraint,
        hanja_options: optionGroups,
      };
    }),
  };
}

export async function generateNamingResult(
  serviceType: ServiceType,
  inputFactors: Record<string, unknown>,
) {
  const generationConstraint =
    serviceType === "HANJA_MEANING_MATCH"
      ? getGenerationConstraint(inputFactors)
      : null;
  const officialHanja =
    serviceType === "HANJA_MEANING_MATCH"
      ? await getOfficialHanjaCandidates(inputFactors)
      : null;
  let officialCandidates = officialHanja?.candidates;

  if (officialCandidates && generationConstraint) {
    const fixedOptions = (officialCandidates[generationConstraint.syllable] ?? []).filter(
      (option) =>
        option.character === generationConstraint.hanja &&
        option.reading === generationConstraint.syllable,
    );

    if (fixedOptions.length === 0) {
      throw new NamingInputConstraintError(
        "\uc785\ub825\ud55c \ub3cc\ub9bc\uc790 \ud55c\uc790\ub97c \uacf5\uc2dd \uc778\uba85\uc6a9 \ud55c\uc790 \uc790\ub8cc\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
        {
          generationHanja: "\ub3cc\ub9bc\uc790 \uc74c\uc808\uacfc \uc9c0\uc815 \ud55c\uc790\ub97c \ub2e4\uc2dc \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
        },
      );
    }

    officialCandidates = {
      ...officialCandidates,
      [generationConstraint.syllable]: fixedOptions,
    };
  }

  const officialCandidateCount = officialCandidates
    ? Object.values(officialCandidates).reduce((sum, options) => sum + options.length, 0)
    : null;
  const enrichedInputFactors: Record<string, unknown> = {
    ...inputFactors,
    ...(officialHanja
      ? {
          officialHanjaCandidates: officialCandidates,
          officialHanjaSource: officialHanja.source,
        }
      : {}),
    ...(generationConstraint ? { generationConstraint } : {}),
  };
  const openai = getOpenAIClient();
  const isHangulTransliteration =
    enrichedInputFactors.serviceSlug === "global-name-to-hangul";

  if (serviceType === "HANJA_MEANING_MATCH" || !openai) {
    // 한자 서비스는 규칙 엔진으로 정상 동작하지만, AI 기반 서비스는 키 없이는
    // 입력과 무관한 예시(mock)만 반환하므로 운영에서는 제공하지 않는다.
    if (serviceType !== "HANJA_MEANING_MATCH" && process.env.NODE_ENV === "production") {
      throw new AIServiceUnavailableError();
    }
    const result = getMockResult(serviceType, enrichedInputFactors);
    assertGenerationConstraint(result, enrichedInputFactors, generationConstraint);
    const clientResult = prepareResultForClient(result, generationConstraint);

    return {
      result: clientResult,
      analysisMeta: { officialCandidateCount },
      usage: {
        model:
          serviceType === "HANJA_MEANING_MATCH"
            ? "official-hanja-rules-v1" : "mock",
        promptTokens: 0,
        completionTokens: 0,
        totalTokens: 0,
        providerRequestId: null,
      },
    };
  }

  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    temperature: 0.85,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: isHangulTransliteration
          ? [
              "You are a Korean transliteration and source-language pronunciation specialist.",
              "Do not create a new Korean name. Preserve the original person's name and write its actual pronunciation naturally in Hangul.",
              "Never convert the name to an ordinary English spelling as an intermediate pronunciation source. Infer the pronunciation directly from the originalName, originalNameLanguage, countryProfile, and pronunciationHint.",
              "Apply evidence in this strict priority order: (1) the user's pronunciationHint, (2) originalNameLanguage, (3) country or regional pronunciation, (4) the name's general pronunciation. Do not let country override the explicitly selected language.",
              "First analyze the likely source pronunciation, then structure it into syllables and IPA when reasonably known, and only then map it to natural Korean phonology. If the evidence is ambiguous, provide up to 3 plausible Hangul alternatives and explain why they differ.",
              "Return valid JSON with this shape: { analysis_summary, candidates: [{ hangul, recommendation_reason, matching_rate, source_pronunciation_basis, ipa, syllables, pronunciation, cultural_fit, usage_note, caution_notes, suitability_score }], rejected_options: [{ hangul, reason }], add_on_recommendations: [] }.",
              "Return up to 3 plausible Hangul spellings, ordered from the highest matching_rate to the lowest. The first candidate should be the most natural and faithful Korean pronunciation.",
              "Explain in the requested outputLanguage when possible.",
            ].join(" ")
          : getSystemPrompt(serviceType),
      },
      {
        role: "user",
        content: `Input factors:\n${JSON.stringify(enrichedInputFactors, null, 2)}`,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  const result = JSON.parse(content) as unknown;
  assertGenerationConstraint(result, enrichedInputFactors, generationConstraint);
  const clientResult = prepareResultForClient(result, generationConstraint);

  return {
    result: clientResult,
    analysisMeta: { officialCandidateCount },
    usage: {
      model: completion.model,
      promptTokens: completion.usage?.prompt_tokens ?? 0,
      completionTokens: completion.usage?.completion_tokens ?? 0,
      totalTokens: completion.usage?.total_tokens ?? 0,
      providerRequestId: completion.id,
    },
  };
}
