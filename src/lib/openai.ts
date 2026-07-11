import OpenAI from "openai";
import type { ServiceType } from "@/lib/services";
import { getMockResult } from "@/lib/mock-results";
import { getSystemPrompt } from "@/lib/prompts";

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
  const openai = getOpenAIClient();
  const isHangulTransliteration =
    inputFactors.serviceSlug === "global-name-to-hangul";

  if (!openai) {
    return getMockResult(serviceType, inputFactors);
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
              "You are a Korean transliteration specialist.",
              "Do not create a new Korean name. Preserve the original person's name and write its pronunciation naturally in Hangul.",
              "Use the source country, language, and pronunciationHint to resolve ambiguous spelling. Explain meaningful pronunciation choices briefly.",
              "Return valid JSON with this shape: { analysis_summary, candidates: [{ hangul, recommendation_reason, matching_rate, pronunciation, cultural_fit, usage_note, caution_notes, suitability_score }], rejected_options: [{ hangul, reason }], add_on_recommendations: [] }.",
              "Return up to 3 plausible Hangul spellings, ordered from the lowest matching_rate to the highest. The highest-rated candidate should be the most natural and faithful Korean pronunciation.",
              "Explain in the requested outputLanguage when possible.",
            ].join(" ")
          : getSystemPrompt(serviceType),
      },
      {
        role: "user",
        content: `Input factors:\n${JSON.stringify(inputFactors, null, 2)}`,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  return JSON.parse(content) as unknown;
}
