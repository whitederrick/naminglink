# Naming-Link Work Status - 2026-07-15

## Continuation baseline

- Workspace: `C:\myProjects\naminglink`
- Branch: `main`
- Verified HEAD: `8b3e9bf Add official Hanja data and matching flow`
- Verified remote ref: `origin/main` also points to `8b3e9bf`
- Previous handoff: `docs/WORK_STATUS_2026-07-14.md`
- This document records the current implementation check and the architecture guidance received on 2026-07-15.
- At the time this status snapshot was written, the result-retention code changes were still local and not yet committed or deployed.
- With explicit user approval, remote migration `20260715150000_explicit_result_saving.sql` was applied successfully on 2026-07-15. It removed 11 legacy anonymous naming-result rows.

## Local result-retention work completed and verified

The four user-facing analysis flows now share the following intended policy:

1. Hanja meaning matching for a Korean name
2. Global-name creation from a Korean name
3. Hangul pronunciation rendering of a global name
4. Korean-name creation from a global name

Policy implemented locally:

- Anonymous results are not written to `naming_logs`.
- A signed-in user must explicitly select result saving.
- The API verifies the Supabase bearer token before saving.
- Operational AI and advertising logs do not contain raw input, generated output, `user_id`, or a saved-result link.
- Result pages disclose whether the result was saved, skipped, or failed to save.
- The local privacy-policy fallback copy reflects this retention policy.
- Migration `20260715150000_explicit_result_saving.sql` deletes legacy anonymous naming results, requires a member owner for future saved results, and removes member/result links from operational logs.

Verification completed:

- Next.js production build: passed.
- TypeScript: passed as part of the production build.
- ESLint: passed.
- `git diff --check`: passed.

Important remaining work:

- Verify the production API/UI after the authorized commit and Vercel deployment.
- Add an account result-history screen so members can list and delete explicitly saved results.
- Future migrations and deployments still require explicit approval.

## Architecture guidance register and current verification

### A. Strict structured AI output

Status: **partially implemented**

Confirmed current state:

- `src/lib/openai.ts` requests `response_format: { type: "json_object" }`.
- The response is parsed with `JSON.parse`, but the parsed result remains `unknown`.
- There is no service-specific Zod schema validating the generated response.
- There is no strict JSON Schema response contract, schema-repair retry, or structured streaming.
- The project currently uses the OpenAI Node SDK directly, not Vercel AI SDK `streamObject`.

Required work:

1. Define a separate Zod result schema for all four user-facing services.
2. Require schema-bound model output rather than JSON-object mode alone.
3. Reject or repair malformed responses before they reach React components.
4. Add bounded retry behavior for schema failure; never retry indefinitely.
5. Record only prompt version, schema version, error category, token counts, and latency in operational logs.
6. Evaluate structured streaming only where progressive rendering provides real UX value. Strict validation is required whether the response is streamed or generated at once.
7. Add contract tests using valid, missing-field, wrong-type, extra-field, and malformed model responses.

Acceptance criteria:

- No result component receives an unvalidated `unknown` object.
- Every stored member result includes `service_type`, `prompt_version`, and `schema_version`.
- Invalid output cannot be displayed or saved.

### B. Official Hanja DB as the authority and AI as a constrained selector

Status: **pre-query implemented; post-validation incomplete**

Confirmed current state:

- `getOfficialHanjaCandidates` splits `givenNameHangul` into Hangul syllables.
- It queries only the latest production source, production-reviewed entries, and `is_name_usable = true` rows.
- The resulting official candidates are added to the AI input.
- `official_hanja_entries` already has a lookup index on `(hangul_syllable, designated_reading, review_status)` and an index on `hanja`.
- The current query has a 500-row ceiling.
- The AI response is not yet rechecked against the exact candidates supplied by the server.

Required work:

1. Represent candidates with stable database IDs, not only character/read/meaning strings.
2. Apply generation-character, excluded-Hanja, designated-reading, variant, review-status, and name-usability filters before prompting.
3. Reduce each syllable candidate set before the AI call to avoid unnecessary input tokens.
4. Ask the AI to select only candidate IDs supplied by the server.
5. Re-query or compare every returned ID/character after generation.
6. Drop any combination containing an unknown, mismatched, unreviewed, or unusable character.
7. Calculate factual fields and exclusion reasons on the server; use AI only for ranking, differentiated interpretation, and readable expert narrative.
8. Return a controlled `NO_VERIFIED_CANDIDATE` state instead of inventing a character when no verified combination exists.

Target flow:

`input validation -> syllable split -> official DB lookup -> deterministic filtering -> bounded combination creation -> constrained AI selection -> strict schema validation -> official DB post-validation -> final result`

Acceptance criteria:

- A Hanja character not present in the supplied production candidate set can never reach the final response.
- Every final character is traceable to its official source row and review status.

### C. Romanization and pronunciation reference DB

Status: **database/import implemented; runtime integration not implemented**

Confirmed current state:

- Official pronunciation source, chunk, and entry tables exist.
- Imported pronunciation entries have lookup indexes.
- Import, verification, and administrator source-management tooling exists.
- No user-facing runtime code currently queries `official_pronunciation_entries`.
- The global-name-to-Hangul flow still asks the LLM to perform pronunciation analysis.

Required work:

1. Separate two different domains clearly:
   - Korean name to official Roman alphabet notation
   - Foreign/global name pronunciation to natural Hangul notation
2. Implement Korean-to-Roman output with a deterministic Node.js rule engine backed by official rules and reviewed exception data; do not let the LLM determine the official spelling.
3. Treat passport spelling, established personal spelling, and strict standard notation as separate output categories.
4. Use the pronunciation DB as reviewed evidence for the foreign-name-to-Hangul flow, but do not assume Korean romanization rules are a complete inverse transliteration engine.
5. Let AI explain alternatives only after deterministic/reference-based candidates have been produced.
6. Add regression fixtures for assimilation, syllable boundaries, surnames, ambiguous source-language pronunciation, and user-provided pronunciation hints.

Acceptance criteria:

- Official Romanization output is reproducible without an AI call.
- AI cannot overwrite a deterministic official result.
- Foreign-name Hangul candidates state the evidence source and uncertainty level.

### D. Prompt tuning and administrator management

Status: **storage foundation exists; runtime prompt versioning is not connected**

Confirmed current state:

- Master-data storage can hold AI service and prompt configuration.
- The live generation path still reads prompts from `src/lib/prompts.ts` and inline strings in `src/lib/openai.ts`.
- Prompt drafts, activation, controlled rollout, rollback, and prompt-version attribution are not part of the live generation path.

Required work:

1. Add service-specific prompt records with draft/published state and immutable versions.
2. Validate prompt variables and result schema compatibility before publishing.
3. Resolve the active prompt on the server and attach its version to the usage log and explicitly saved member result.
4. Add rollback and a small percentage canary option before full activation.
5. Maintain curated synthetic or administrator-authored success/failure test cases.
6. Do not accumulate anonymous raw prompts and completions as tuning data.
7. Permit raw case retention only in a separately consented member workflow or an administrator-created test dataset with retention/deletion controls.

Acceptance criteria:

- Every AI call is attributable to an immutable prompt and schema version without retaining personal input.
- A prompt can be tested and rolled back without a code deployment.

### E. Locale routing and page separation

Status: **language detection exists; locale-path routing is not implemented**

Confirmed current state:

- `getRequestLocale` accepts the `lang` query parameter first, then checks `x-vercel-ip-country`, then `Accept-Language`.
- Public URLs currently use forms such as `/?lang=ko` and `/service?lang=fr`.
- `src/proxy.ts` only blocks `/admin`; it does not perform locale routing.
- There is no `app/[locale]/` public route tree.
- Root `<html lang>` is fixed to `ko` in `src/app/layout.tsx`.
- Korean and global services already have meaningfully different page flows, but they share several common components.

Required work:

1. Decide and document canonical locale URLs, preferably `/{locale}/...` for indexable public pages.
2. Add locale detection and a one-time redirect only when the URL has no locale.
3. Preserve an explicit user language selection and prevent redirect loops.
4. Redirect legacy `?lang=` URLs to the canonical locale path with a permanent redirect after link migration is complete.
5. Validate locale parameters against the supported-locale allowlist.
6. Set `<html lang>` dynamically.
7. Split locale-specific page composition where Korean/global product structure differs, while continuing to share domain logic, validation, and design-system components.
8. Verify authentication callbacks, result URLs, legal modals, advertising slots, analytics paths, and existing inbound links after routing migration.

Acceptance criteria:

- Every indexable page has one stable locale-specific canonical URL.
- Browser/country detection never overrides a locale already present in the URL or explicitly chosen by the user.
- Unsupported locale paths return a controlled fallback or 404.

### F. Global SEO and `hreflang`

Status: **not implemented**

Confirmed current state:

- Root metadata contains one static title and description.
- No locale-specific `generateMetadata` implementation was found.
- No canonical alternates or `hreflang` language alternates were found.
- Locale-specific sitemap generation was not found.

Required work:

1. Generate localized title, description, canonical URL, and language alternates for each public service page.
2. Add an `x-default` alternate for the global/default entry page.
3. Generate a sitemap containing every canonical locale/service combination.
4. Keep translated pages equivalent in purpose; do not publish thin or fallback-English pages as localized SEO pages.
5. Add Open Graph locale metadata and localized share copy.
6. Verify rendered metadata, canonical tags, alternate URLs, robots behavior, and sitemap output in production.
7. Monitor indexing and duplicate-page reports after the URL migration.

Acceptance criteria:

- Every supported, publishable locale points to itself as canonical and to all valid alternates.
- No canonical URL uses the old `?lang=` form after migration.
- More-menu/fallback-English translations must be complete before a locale is made indexable.

### G. Four distinct service analytics dimensions

Status: **three service types currently represent four user-facing flows**

Confirmed current state:

- Current values are `HANJA_MEANING_MATCH`, `KOREAN_TO_GLOBAL`, and `GLOBAL_TO_KOREAN`.
- Both global-name Hangul pronunciation and global-to-Korean-name creation use `GLOBAL_TO_KOREAN`.
- This prevents accurate per-product usage, advertising, conversion, latency, and payment analysis.
- Operational event tables already index `service_type`, so the dimension can remain efficient after correcting the taxonomy.

Target service keys:

- `HANJA_MATCH`
- `KOREAN_TO_GLOBAL`
- `GLOBAL_NAME_TO_HANGUL`
- `GLOBAL_TO_KOREAN_NAME`

Required work:

1. Define one canonical service-key registry shared by UI, API schemas, prompts, result schemas, analytics, advertising, orders, and administrator labels.
2. Add the fourth service key before collecting meaningful production conversion data.
3. Migrate constraints and code references without rewriting historical records incorrectly.
4. Preserve `path` and locale/country as separate analytics dimensions.
5. Define funnel events such as started, completed, first result viewed, rewarded unlock, save selected, checkout started, paid, and refunded.
6. Do not add personal input or generated result content to conversion logs.
7. Add composite indexes only after verifying real query shapes, for example `(service_type, created_at)` and possibly `(country_code, service_type, created_at)`.

Acceptance criteria:

- The administrator dashboard reports all four services separately.
- Advertising and payment conversion can be compared by service, locale, and country without joining personal result data.

### H. Multilingual AI output, token budget, and cultural quality

Status: **23 UI locales are declared; end-to-end multilingual AI quality controls are incomplete**

Confirmed current state:

- The application declares 23 supported locales: Korean, English, Japanese, Chinese, German, Spanish, French, Italian, Portuguese, Vietnamese, Thai, Indonesian, Russian, Arabic, Filipino, Uzbek, Mongolian, Hindi, Turkish, Khmer, Malay, Kazakh, and Polish.
- Landing-page static copy is maintained in code through `src/lib/i18n.ts`; fixed UI text is not generated by AI at request time.
- Arabic text direction support exists in parts of the landing page and footer.
- Several service-page and result labels remain hard-coded rather than coming from one complete locale message catalog.
- Non-Hanja requests pass an `outputLanguage`, and the prompt asks the model to use it “when possible.” This is guidance, not an enforceable language contract.
- Hanja meaning matching currently forces `outputLanguage: "ko"` in `NamingForm`, so it is not an end-to-end multilingual result flow.
- The AI request has no explicit completion-token ceiling or per-field text-length constraints.
- The current temperature is `0.85`, which may increase variation in translation, terminology, and cultural-safety wording.
- `ai_usage_logs` stores token counts and latency but not output locale, so cost and latency cannot currently be compared by language.
- Prompts request cultural fit and caution notes but do not provide locale-specific reviewed terminology, prohibited associations, or quality gates.

Important validation note:

- Do not assume every non-Latin language always consumes exactly three to four times as many tokens. Tokenization varies by model, script, wording, and output structure. Establish budgets using measured prompt/completion tokens for every supported locale and target model.
- A universal “150 words” limit is not reliable for languages without English-style word boundaries. Enforce model-level output-token limits plus schema field limits measured in characters or grapheme clusters, with locale-specific test thresholds.

Required work:

1. Keep static UI messages completely separate from AI-generated content. Buttons, labels, validation messages, legal text, payment copy, result headings, and error states must come from reviewed locale catalogs.
2. Evaluate `next-intl` or an equivalent typed message-catalog approach during the locale-route migration; do not use AI at runtime to translate UI chrome.
3. Audit every one of the 23 locales for missing keys, English/Korean fallback, overflow, RTL behavior, font support, plural/number/date formatting, and mobile wrapping.
4. Restrict AI generation to dynamic analysis fields such as meaning interpretation, story, differentiated recommendation reason, cultural-fit explanation, and exclusion reason.
5. Make `output_locale` a validated enum derived from the canonical URL/user choice, not free-form user input or country inference alone.
6. Include the required output locale in the strict result schema and reject a response that is substantially in the wrong language.
7. Add `output_locale`, `prompt_version`, and `schema_version` to non-identifying AI usage logs so token cost, latency, and schema failures can be compared by locale.
8. Configure a model-level maximum output-token budget and field-level limits for summaries, candidate reasons, stories, cautions, and rejected-option reasons.
9. Preserve premium usefulness by using different limits per field instead of reducing the entire result to one short generic paragraph.
10. Measure p50/p95 latency, prompt tokens, completion tokens, schema failures, and retry rates for all locales before defining the five-second UX target.
11. Create a locale benchmark set using identical naming cases across all 23 languages and compare meaning preservation, terminology consistency, tone, and length.
12. Add reviewed locale terminology for Korean naming concepts such as 음가, 자의, 결합 의미, 지정 발음, 인명용 한자, and traditional-reference disclaimers.
13. Add locale/culture-specific negative-association test cases and reviewed prohibited or caution terminology. A system-prompt warning alone does not guarantee cultural safety.
14. For lower-confidence locales, display a restrained uncertainty notice and require human/native review before using strong claims in paid reports.
15. Keep names, birth data, wishes, exclusions, raw prompts, and raw completions out of anonymous quality/usage logs.

Target responsibility split:

- Locale catalog: all fixed UI, legal, payment, validation, and navigation text
- Deterministic server logic/official DB: factual name, Hanja, pronunciation, and eligibility fields
- AI: bounded dynamic interpretation and storytelling in the validated output locale
- Post-validation: language match, schema/length limits, official-data consistency, prohibited terminology, and safe fallback

Acceptance criteria:

- All 23 locale builds have complete static messages without unintended Korean or English fallback.
- Every dynamic response passes schema, locale, length, official-data, and safety validation before display or member saving.
- The administrator dashboard can compare token cost, latency, retries, and failures by non-identifying output locale and service.
- Locale-specific p95 latency and cost budgets are based on measured production-like fixtures rather than a fixed multiplier assumption.

### I. Model selection, strict Structured Outputs, and free/premium routing

Status: **GPT-4o-mini is the current code default; suitability and tier routing require benchmark validation**

Confirmed current state:

- `src/lib/openai.ts` defaults to `gpt-4o-mini` when `OPENAI_MODEL` is unset.
- OpenAI currently describes GPT-4o-mini as a fast, affordable small model for focused tasks and confirms that it supports streaming and Structured Outputs.
- The current code uses Chat Completions JSON-object mode, not strict JSON Schema Structured Outputs.
- OpenAI documents JSON-object mode as the older JSON mode and recommends `json_schema` for supported models. Strict schema adherence supports only a subset of JSON Schema, so service schemas must be designed and tested within that subset.
- The current OpenAI model catalog recommends newer GPT-5.6 variants for new workloads. Therefore GPT-4o-mini remains a candidate baseline, not a permanently “perfect” or latest model choice.
- No measured Naming-Link benchmark currently proves that five candidates and multilingual narrative consistently complete within five seconds.
- No advertising revenue data currently proves that one impression funds tens or hundreds of AI calls.
- There is no free/premium model router, tier-specific prompt, quality evaluation, or fallback policy in the live generation path.

Official references checked on 2026-07-15:

- GPT-4o-mini model capabilities and current token pricing: `https://developers.openai.com/api/docs/models/gpt-4o-mini`
- Current OpenAI model-selection catalog: `https://developers.openai.com/api/docs/models`
- Structured output API reference: `https://platform.openai.com/docs/api-reference/responses-streaming/response/refusal/delta`

Required work:

1. Replace `json_object` plus unchecked `JSON.parse` with strict `json_schema` Structured Outputs and service-specific Zod validation.
2. Treat strict model output as a parsing guarantee only; continue official Hanja/pronunciation DB post-validation because schema adherence does not prove factual correctness.
3. Benchmark GPT-4o-mini against current cost-sensitive and balanced model candidates using the same 23-locale fixture set.
4. Measure per service/locale: factual pass rate, schema pass rate, cultural-quality score, human-review score, prompt/completion tokens, p50/p95 latency, retry rate, and cost per completed result.
5. Define the five-second target as a measured service-level objective with a timeout/fallback policy, not as a model marketing assumption.
6. Calculate unit economics using actual ad fill rate, eCPM/reward revenue, payment conversion, model tokens, retries, Supabase/Vercel cost, refunds, and taxes. Do not assume one ad funds a fixed number of calls.
7. Add a versioned server-side model-routing registry. Never let the browser choose an arbitrary model or premium entitlement.
8. Keep factual inputs, official candidate constraints, strict result schema, and post-validation identical across free and premium tiers.
9. Differentiate premium primarily through deeper reviewed narrative, more comparison dimensions, longer report limits, optional second-pass critique, and downloadable output—not by relaxing factual controls.
10. Use stable model snapshots where available, then run regression evaluation before changing an alias or snapshot.
11. Add bounded fallback behavior for timeout, rate limit, refusal, schema failure, and provider outage.
12. Keep provider-specific premium candidates configurable. Do not hard-code GPT-4o or Claude 3.5 Sonnet as a future tier before rechecking current availability, pricing, data terms, multilingual quality, and migration cost.
13. Strengthen localization instructions so dynamic prose is natural and culturally respectful rather than literal, but validate this with native-language fixtures and review; prompt wording alone is not a quality guarantee.

Proposed routing policy:

- Free/ad-supported: lowest-cost model that passes the factual, schema, multilingual, and latency thresholds
- Premium: best-value model that materially improves evaluated narrative quality while preserving the same verified facts
- Fallback: validated lower-cost model or controlled retry, never an unvalidated free-form response
- Configuration: server/admin-managed model, snapshot, prompt version, schema version, output limits, timeout, and rollout percentage

Acceptance criteria:

- Strict schema output is used for every production model route, and server Zod plus official-data validation still runs afterward.
- Free and premium model choices are backed by repeatable 23-locale evaluation results and measured unit economics.
- A model or snapshot can be canaried, rolled back, or replaced without changing the public result contract.
- Premium copy makes no unsupported claim such as “better AI” unless the evaluated quality difference is material and documented.

### J. Viral sharing loop, digital name card, and referral reward

Status: **not implemented; phased growth design required**

Confirmed current state:

- No Web Share API integration was found.
- No Instagram-story card, client/server image renderer, watermark, referral token, referral attribution, or share-reward flow was found.
- Result pages currently support advertising-based candidate unlock placeholders but no sharing alternative.
- Existing anonymous result-retention policy means a share feature must not depend on storing raw anonymous input or full results.

Important product and security notes:

- Sharing is not literally zero-cost: image rendering, fonts, CDN traffic, QA, fraud prevention, analytics, and support still have costs.
- Calling `navigator.share()` does not prove that a recipient opened the link or became a new user. The user may cancel, share to themselves, or repeat the action.
- Do not grant a candidate merely because the share sheet opened or returned. Start with non-rewarded sharing, then add referral rewards only after qualified referral verification exists.
- Instagram Story does not expose one universal browser publishing path. Use capability detection, file sharing where supported, and a downloadable 9:16 image fallback.
- A public share URL must not reveal a child's birth data, gender, wishes, excluded meanings, full analysis, member ID, or private saved-result ID.

Phase 1 required work — safe organic sharing:

1. Add a 9:16 digital name-card template with selected name, pronunciation, one reviewed short meaning, locale-aware typography, and a clear `Created by Naming-Link` plus canonical site address watermark.
2. Let the user preview and explicitly choose what will appear before generating the card.
3. Default to privacy-minimal content. Never include birth information, gender, detailed exclusions, analysis scores, official-registration claims, or internal identifiers.
4. Prefer client-side image generation where reliable so anonymous result content does not need server persistence. If server rendering is later used, process on demand without retaining the payload or generated file by default.
5. Support `navigator.share` with an image file and canonical service link where the browser permits it.
6. Provide image download/copy-link fallback for unsupported browsers and Instagram workflows.
7. Load reviewed multilingual fonts and verify Korean, Arabic RTL, Hindi, Thai, Khmer, Kazakh, Mongolian, and other supported scripts without clipping or broken glyphs.
8. Add a localized result-end nudge such as “친구에게도 어울리는 한국 이름을 찾아보세요,” linked to the relevant locale/service input page.
9. Keep the watermark readable but visually restrained. Do not imply official registration approval or hide material service limitations.
10. Add accessibility labels, keyboard operation, image alternative text, and reduced-motion behavior.

Phase 2 required work — qualified referral unlock:

1. Issue a short-lived, signed, single-purpose referral token that contains no name, birth data, raw result, or member identity.
2. Link to the canonical locale/service entry page, not to a private result payload.
3. Count a qualified referral only after a different visitor opens the link and reaches a defined activation event such as analysis start or valid completion.
4. Add nonce, expiry, idempotency, per-result/per-visitor daily limits, self-referral prevention, duplicate-device/network heuristics, and replay protection.
5. Grant at most one candidate per qualified referral under a server-verified entitlement. Never trust a browser-only `shared = true` value.
6. Define behavior for cookie rejection, private browsing, shared networks, no-fill advertising, and users without Web Share support.
7. Keep referral analytics non-identifying: referral campaign/token hash, service, locale, country, timestamps, qualified state, and reward state only.
8. Add retention and deletion rules for referral tokens/events and prevent joins to raw member results.
9. Display transparent reward terms before sharing and avoid manipulative or spam-inducing copy.

Suggested funnel metrics:

- Name-card preview opened
- Image generated
- Share intent or download selected
- Referral landing reached
- Qualified referral activation
- Referred analysis completed
- Referral reward granted
- Referred checkout and payment conversion

Do not label share-sheet invocation as a completed acquisition. The business metric is qualified referred activation and downstream conversion.

Acceptance criteria:

- A shared image or link contains no sensitive/private analysis data unless the user explicitly selected that exact visible content.
- All 23 locale cards render at 9:16 without clipped text, missing glyphs, or broken RTL layout.
- Referral candidate unlock is granted only by a server-verified, idempotent qualified referral event.
- The original analysis result remains unstored for anonymous users.
- Viral conversion and abuse rates can be measured without storing names, birth data, prompts, or generated result text in referral logs.

### K. Naming-Link x place-link Seoul pickup integration

Status: **cross-service concept accepted for validation; commerce and pickup foundations are not implemented**

Product concept:

- A foreign customer ordering a personalized Naming-Link stamp can choose international shipping or pickup during a future Seoul trip.
- A pickup location may be a reviewed place or partner venue surfaced through place-link.
- After purchase, Naming-Link can deep-link the customer into place-link to view the pickup venue, directions, nearby places, and a suggested local itinerary.
- The objective is to reduce international fulfillment friction while creating a measurable, consent-aware acquisition path into place-link.

Confirmed current Naming-Link state:

- `orders.order_type` includes `STAMP_DELIVERY`, but the schema models only a shipping address and generic fulfillment status.
- No `fulfillment_method`, pickup location, pickup window, pickup code, ready date, collection event, expiry, or unclaimed-item state exists.
- The administrator order screen supports generic pending/processing/shipped/completed/cancelled handling only.
- Stamp checkout, payment, manufacturing, shipping, refund, and fulfillment pipelines are still intentionally incomplete.
- No `place-link` identifier, API client, webhook, deep link, analytics bridge, or shared authentication was found in the Naming-Link checkout.
- The place-link repository, production API, place taxonomy, partner model, authentication, and current deployment were not inspected in this task; they must be verified separately before an integration contract is designed.

Architecture principles:

1. Naming-Link owns the product, payment, manufacturing request, order, pickup entitlement, refund, and fulfillment history.
2. place-link owns place identity, editorial/place data, maps, directions, nearby recommendations, and visitor discovery UX.
3. Do not couple both products by letting them write directly into each other's database tables. Use a versioned API/webhook or stable public place identifier.
4. Save an immutable purchase-time snapshot of the pickup venue name, address, instructions, and policy in the Naming-Link order so later place edits do not change the agreed fulfillment terms.
5. A place-link deep link must contain only a public place ID and non-identifying campaign/referral token, never the customer's name, stamp text, email, order ID, or pickup code.
6. Shared login is not required for the first pilot. Add cross-service identity only if a clear user benefit and explicit consent justify it.

Required Naming-Link data model:

- `fulfillment_method`: `INTERNATIONAL_SHIPPING` or `SEOUL_PICKUP`
- `pickup_location_id`: internal immutable location record
- `place_link_place_id`: optional stable place-link public identifier
- Purchase-time venue snapshot: localized name, address, coordinates, opening hours, contact/instructions, timezone
- Pickup window start/end and customer travel-date preference
- `pickup_code_hash` or signed one-time QR entitlement; never store the plaintext code after issuance
- `ready_at`, `picked_up_at`, `expires_at`, cancellation/return/unclaimed status
- Append-only fulfillment events for production, venue handoff, ready notification, collection, expiry, return, and refund
- Partner/venue agreement status, capacity, active dates, storage limit, handoff SLA, and incident contact

Required operational flow:

1. Customer selects shipping or Seoul pickup before payment and sees the price, estimated readiness, pickup window, venue policy, and refund/unclaimed terms.
2. Server validates that the selected venue is active, has capacity, and can accept the expected production date.
3. Payment confirmation creates an immutable order and pickup entitlement; browser state alone is never trusted.
4. Stamp production and partner-venue handoff are confirmed before the customer receives a ready notification.
5. Customer receives a one-time QR/code plus a place-link deep link for directions and nearby recommendations.
6. Venue staff verifies the one-time entitlement with the minimum customer information needed and records collection idempotently.
7. Expired or unclaimed items follow a disclosed return, storage, disposal, reshipment, and refund policy.
8. Every cross-service webhook is signed, timestamped, idempotent, retried safely, and audited without exposing stamp/name details to place-link.

Privacy, policy, and partnership requirements:

- Obtain separate, explicit disclosure before sharing any pickup contact information with a partner venue.
- Share only the minimum operational data; prefer a pickup alias/code over full analysis or account data.
- Define controller/processor or independent-party roles, retention, breach handling, customer support ownership, and deletion procedures in the partner agreement.
- Publish pickup availability, accessibility, opening-hour exceptions, holiday closures, late arrival, lost/damaged item, unclaimed item, cancellation, and refund terms before payment.
- Confirm payment, tax, e-commerce, custom-made goods, consumer-protection, liability, and venue-partnership requirements before launch.
- Do not choose venues only for popularity. Verify secure storage, staff training, reliable hours, accessibility, tourist navigation, handoff capacity, and incident response.

Recommended phased rollout:

1. Complete the ordinary stamp product, payment, manufacturing, administrator, refund, and delivery workflow first.
2. Pilot `SEOUL_PICKUP` at one directly controlled or highly reliable venue with manual partner operations and no place-link API dependency.
3. Measure readiness accuracy, pickup success, no-show rate, support volume, storage incidents, and fulfillment savings.
4. Add the place-link public place deep link and nearby-itinerary CTA after the pickup pilot is operationally stable.
5. Add signed status webhooks/partner tools only when more venues make manual operation inefficient.
6. Expand from Seoul only after venue economics, traveler demand, customer satisfaction, and operational controls meet approved thresholds.

Cross-service metrics:

- Shipping versus Seoul-pickup selection rate
- Manufacturing-to-ready lead time
- Ready-to-collected time and successful pickup rate
- No-show, expiry, damage, support, refund, and reshipment rate
- Naming-Link to place-link deep-link open and activated-visitor rate
- Nearby-place/detail views and itinerary starts after pickup-link entry
- Partner-venue attributable visits and conversion, using non-identifying campaign data
- Fulfillment savings and incremental place-link value net of venue fees and support cost

Acceptance criteria:

- A pickup order cannot be paid for unless venue availability, production readiness range, and policy snapshot are valid.
- place-link never receives private naming-analysis content or a reusable pickup credential.
- Collection is one-time, server-verified, idempotent, auditable, and reversible only through an authorized support process.
- The one-venue pilot demonstrates acceptable pickup, no-show, support, privacy, and unit-economics metrics before expansion.

## Recommended implementation sequence

1. Finish and deploy the explicit-save/non-identifying-log migration after reviewing its cleanup impact.
2. Split the service taxonomy into four stable service keys before more analytics data accumulates.
3. Add strict result schemas and server-side validation for all four services.
4. Complete Hanja candidate-ID constraints and post-generation DB validation.
5. Implement deterministic Romanization/runtime pronunciation evidence integration.
6. Connect versioned prompt management to the live generation path.
7. Add strict Structured Outputs and run the model/23-locale quality, latency, cost, and unit-economics benchmark.
8. Implement server-managed free/premium/fallback model routing only after benchmark thresholds are approved.
9. Add multilingual AI token/length controls, output-locale validation, and locale usage metrics.
10. Design and migrate canonical `/{locale}/...` routes with redirects from existing `?lang=` URLs.
11. Move all fixed UI text into complete reviewed locale catalogs and finish RTL/mobile validation.
12. Add localized metadata, canonical URLs, `hreflang`, and locale sitemap generation.
13. Complete the stamp product, checkout, payment, manufacturing, delivery, refund, and administrator fulfillment baseline.
14. Pilot one-venue Seoul pickup with manual operations, one-time pickup entitlement, and full policy disclosure.
15. Verify place-link's current code/API and add a public-place deep link before designing broader cross-service webhooks or identity sharing.
16. Implement privacy-minimal 9:16 name cards, capability-aware sharing/download fallback, and localized friend-name nudges without referral rewards.
17. Measure organic share and referred activation before deciding the reward value.
18. Add server-verified referral candidate unlock only after signed-token and anti-abuse controls pass review.
19. Run desktop/mobile, authentication, analytics, multilingual quality, model-routing, commerce, pickup, cross-service privacy, sharing, referral-abuse, SEO, and production regression checks before deployment.

## Release boundary

- Do not treat this document as proof that the listed required work is implemented.
- Only the items explicitly marked as completed or confirmed current state have been verified in the current checkout.
- The architecture items above are the required validation and implementation backlog received from the user.
- Do not push, apply remote migrations, or deploy without explicit user approval.
