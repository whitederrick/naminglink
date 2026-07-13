# Naming-Link Work Status - 2026-07-13

## Scope

Updated the Korean copy shown on the two global-name service introduction screens.

## Changes

### Name in Hangul

- Changed the eyebrow to `본인 이름을 한글로 표기`.
- Simplified the description to explain that the service analyzes the user's name pronunciation and proposes a natural Hangul spelling.
- Simplified the service promise to focus on the original name's sounds and syllables under Korean pronunciation rules.

### Korean Name

- Changed the eyebrow to `한국 생활과 브랜드를 위한 한글 이름`.
- Consolidated the service promise into one sentence explaining that the result is easy to say and write and includes meaning and pronunciation guidance.

## Modified Files

- `src/lib/services.ts`
- `src/components/ServiceShell.tsx`

## Verification

- `git diff --check`: passed
- `pnpm lint`: passed
- `pnpm build`: passed

## Deployment

- Commit: pending
- Push: pending
- Vercel production deployment: pending
## Follow-up: Hangul Pronunciation Input Flow

- Reduced the original-name input card to two-thirds of the desktop row.
- Added a one-third process panel explaining how the original name becomes a Hangul spelling.
- Reordered the inputs to: original name, original-name language, country, optional pronunciation hint.
- Made the page locale the initial source-language choice and removed the previous Japan-first default.
- Prioritized matching countries in the country selector while keeping every country available for combinations such as United States plus Spanish.
- Added multilingual-country support for countries such as Canada, India, the Philippines, Malaysia, and Kazakhstan.
- Updated the AI instruction to prioritize user pronunciation hints, then source language, then country or region, without using ordinary English spelling as an intermediate pronunciation.
- Added optional source-pronunciation basis, IPA, and syllable-analysis fields to transliteration results.

### Verification

- `git diff --check`: passed
- `pnpm lint`: passed
- `pnpm build`: passed
## Follow-up: Post-Result Services

- Removed the generic add-on section from the Hangul pronunciation input screen.
- Shows the ad banner during pronunciation analysis rather than as a pre-submit add-on.
- Changed the submit label to `한글 발음 분석 시작`.
- Keeps the highest-matching basic Hangul result visible first and leaves additional candidates locked for the future detailed report flow.
- Added two post-result service cards:
  1. Detailed pronunciation report with syllables, IPA, pronunciation evidence, alternatives, audio playback, and PDF saving.
  2. Hangul-name goods for future hats, keyrings, and white T-shirts.
- Buttons are explicitly marked as preparation-stage until payment, audio, PDF, and goods-order flows are implemented.

### Verification

- `pnpm lint`: passed
- `pnpm build`: passed
- Removed the pre-analysis premium-result preview box from the Hangul pronunciation screen; the result area remains empty until analysis starts.

## Follow-up: Dedicated Result Screen and Legal Modals

- Redirects successful Hangul-pronunciation requests away from the input form to `/global-to-korean/result` using router replacement.
- Stores the result in tab-scoped session storage so refresh works without exposing personal result data through a public UUID lookup endpoint.
- Prevents the pronunciation result from rendering beneath the original input form.
- Keeps the best basic result visible on the dedicated result screen and places the two future post-result services below it.
- Replaced the required-consent policy links with accessible modal dialogs for Terms and Privacy.
- Added top and bottom close buttons, backdrop close, Escape-key close, scrollable policy content, and body-scroll locking.
- Refactored Terms and Privacy content into shared components so standalone policy pages and modal content remain consistent.

### Verification

- `pnpm lint`: passed
- `pnpm build`: passed
- Build route confirmed: `/global-to-korean/result`
- Removed the redundant analysis-summary panel and single-candidate count from the Hangul pronunciation result screen.

## Follow-up: Pronunciation Hint Reanalysis

- Removed the generic `사용 안내` row from Hangul pronunciation result details.
- Added a separate `실제 발음과 다른가요?` section below the basic result.
- Preserves the original name, selected source language, country, consent metadata, and other input factors in tab-scoped session storage.
- Lets the user enter or revise only the pronunciation hint and request analysis again with the same original conditions.
- Shows the ad banner and enforces a minimum five-second wait for every reanalysis request.
- Disables repeated clicks while reanalysis is running and replaces the result in the same dedicated result screen when complete.
- The existing API daily rate limit still applies to every reanalysis request.

### Verification

- `pnpm lint`: passed
- `pnpm build`: passed
## Follow-up: Pronunciation Result Detail Layout

- Replaced the sparse single-column pronunciation result details with a dedicated responsive layout.
- Highlights the recommended Hangul spelling and matching rate in a compact header panel.
- Arranges source-pronunciation basis, IPA, syllable analysis, and Hangul pronunciation in a two-by-two information grid.
- Arranges transliteration evidence and Korean-naturalness guidance side by side.
- Shows caution text only when present and uses the full card width.
- Keeps the generic usage-note row removed; pronunciation correction now lives in the separate reanalysis section.

### Verification

- `pnpm lint`: passed
- `pnpm build`: passed