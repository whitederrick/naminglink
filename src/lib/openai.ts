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
  });

  return client;
}

export async function generateNamingResult(
  serviceType: ServiceType,
  inputFactors: Record<string, unknown>,
) {
  const officialHanja =
    serviceType === "HANJA_MEANING_MATCH"
      ? await getOfficialHanjaCandidates(inputFactors)
      : null;
  const enrichedInputFactors = officialHanja
    ? {
        ...inputFactors,
        officialHanjaCandidates: officialHanja.candidates,
        officialHanjaSource: officialHanja.source,
      }
    : inputFactors;
  const openai = getOpenAIClient();
  const isHangulTransliteration =
    enrichedInputFactors.serviceSlug === "global-name-to-hangul";

  if (!openai) {
    return {
      result: getMockResult(serviceType, enrichedInputFactors),
      usage: {
        model: "mock",
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

  return {
    result: JSON.parse(content) as unknown,
    usage: {
      model: completion.model,
      promptTokens: completion.usage?.prompt_tokens ?? 0,
      completionTokens: completion.usage?.completion_tokens ?? 0,
      totalTokens: completion.usage?.total_tokens ?? 0,
      providerRequestId: completion.id,
    },
  };
}
