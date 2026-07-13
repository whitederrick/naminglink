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
## Follow-up: Landing Brand and Service Icon System

- Reworked the existing watercolor logo into a compact dark-glass mark with a white-ink treatment, removing the detached white-square appearance.
- Reduced the logo frame from 64px to 56px and aligned its border, corner radius, shadow, and transparency with the landing controls.
- Standardized the brand label to `Naming-Link`.
- Replaced the mixed photo, paper, passport, and ink-cloud icon treatments with one code-native monochrome glass icon system.
- Applied the same frame, border, background transparency, line weight, and restrained warm accent to Hanja, global-name conversion, Hangul pronunciation, and Korean-name cards.
- Removed the landing dependency on the raster `logo_blank.png` service icon while retaining the user-provided main logo asset.

### Verification

- `pnpm lint`: passed
- `pnpm build`: passed
- Browser visual check completed for Korean and English landing pages at desktop size.
- Confirmed that the logo no longer appears as a separate white image tile and that all service icons share one visual language.
## Follow-up: Landing Footer Policy Modals

- Changed the landing footer policy actions for Terms, Privacy Policy, Refund Policy, and Pricing from page navigation to in-place modal dialogs.
- Removed the Login action from the landing footer without assigning it a new location.
- Kept the existing policy-page links and Login link on non-landing footers.
- Reused the same shared policy document content for the modal dialogs and standalone refund/pricing pages.
- Retained backdrop click, Escape key, top close control, and bottom close button behavior for all four dialogs.

### Verification

- `git diff --check`: passed
- `pnpm lint`: passed
- `pnpm build`: passed
- Browser check: confirmed four policy buttons, modal open/close behavior, unchanged landing URL, and no Login action in the landing footer.
## Follow-up: Shared Ad-Gated Candidate Results

- Applied the rewarded-ad analysis flow to all non-transliteration naming services that use the shared naming form.
- Removed the always-visible pre-analysis ad and pre-analysis add-on selection area.
- Every analysis now keeps the ad/loading state visible for at least five seconds before showing a result.
- Opens only the strongest candidate initially and orders candidates from highest matching rate to lowest.
- Replaced the previous all-at-once reveal toggle with one-candidate-at-a-time unlocking.
- Each rewarded-ad confirmation waits five seconds and unlocks exactly one additional candidate.
- Added a disabled one-candidate payment option as the integration point for the future payment provider.
- Locked candidates no longer render their hidden details in the DOM; only the lock card is rendered.
- Added post-result add-on cards tailored to Hanja analysis, Korean-to-global naming, and Korean-name creation.
- Detailed reports and goods requests remain clearly marked as preparation-stage until payment, order, and catalog integrations are connected.
- Updated mock, built-in Hanja, and OpenAI prompt ordering so the first candidate is consistently the strongest recommendation.

### Verification

- `git diff --check`: passed
- `pnpm lint`: passed
- `pnpm build`: passed after the final locked-DOM refinement.
- Browser check: confirmed the five-second initial ad state, one initially open candidate, four locked candidates without leaked details, a five-second unlock ad, and exactly one additional candidate opening.
## Follow-up: Post-deploy Korean-name Copy Cleanup (Uncommitted)

- Production baseline remains commit `2d23521` at `https://naminglink.vercel.app`.
- Removed the color restriction from Hangul-name goods examples and descriptions: `모자 · 키링 · 티셔츠 등`.
- Applied the goods wording change to both the dedicated Hangul-pronunciation result and the shared post-result add-on component.
- Replaced the three English Korean-name-creation section descriptions with Korean drafts:
  - `한글 이름 추천에 필요한 기본 정보를 선택합니다.`
  - `정확한 비교와 분석을 위해 항목별 정보를 선택합니다.`
  - `원하는 이름의 분위기와 한국에서의 사용 목적을 선택합니다.`
- The section titles and field labels around these descriptions are still mixed Korean/English and are expected to be reviewed in the next copy-editing pass.
- Current uncommitted source files: `src/components/HangulPronunciationResultPage.tsx`, `src/components/ResultAddOnServices.tsx`, `src/lib/services.ts`.
- Preserve the three user-provided untracked logo image files; they are not part of this copy change.

### Verification

- `git diff --check`: passed
- Full lint/build has not been rerun because these are copy-only changes.
