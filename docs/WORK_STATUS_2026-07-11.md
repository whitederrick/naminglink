# Naming-Link Work Status - 2026-07-11

## Current Git State

- Branch: `main`
- Feature commit: `6f859a0 Add Hangul pronunciation service and polish landing`
- The feature commit was pushed to `origin/main` and deployed to Vercel production.
- Production URL: `https://naminglink.vercel.app`
- Vercel deployment status: `Ready`
- The worktree also contains pre-existing untracked logo files that were intentionally left untouched:
  - `public/images/logo_blank - 복사본.png`
  - `public/images/logo_full.png`
  - `public/images/logo_light.png`

## Completed Today

### Landing language selector

- Changed the desktop secondary-language popup from 4 columns / 5 rows to 6 columns / 3 rows.
- Increased the popup maximum width from `36rem` to `48rem`.
- Kept the right edge anchored so the wider popup expands toward the left.
- Preserved the existing narrow-screen responsive layout.

### Korean landing layout

- Slightly reduced the Korean hero headline size.
- Moved the left hero content upward by a total of `32px` on desktop.
- Reduced the desktop content top padding so the footer can fit in the first viewport.
- Fixed the desktop landing section to `100svh` while retaining the mobile minimum-height behavior.

### Landing footer

- Prevented the footer from shrinking inside the desktop flex layout.
- Reduced the top padding and retained a slightly larger bottom padding.
- Added a 4px visual safety gap from the viewport bottom.
- Browser measurement at `1280x720` confirmed the complete footer is visible.

### New global-name pronunciation service

- Added a new service card above the existing global-to-Korean-name card for all non-Korean landing locales.
- Purpose: preserve an existing global name and write its pronunciation naturally in Hangul, without creating a new Korean name.
- Added localized card copy for all 23 supported locales.
- Removed the repeated `Daniel / 다니엘` example from the landing copy, input examples, AI instruction, and mock path.
- Added a dedicated code-native icon styled like the Hanja card:
  - `ABC`
  - red `발음 →`
  - `한글`
- The new card links to:
  - `/global-to-korean?lang=<locale>&mode=transliteration`

### Pronunciation-mode detail flow

- Added `globalNameToHangulService` as a dedicated configuration.
- The pronunciation form currently asks for:
  - original name
  - country
  - optional local pronunciation hint
  - explanation language
- Added an AI system instruction that explicitly forbids creating a new Korean name and requests pronunciation-preserving Hangul transliteration.
- Added a separate mock-result branch for the pronunciation service.
- Kept the result JSON compatible with the existing global-to-Korean result card.

### Detail-page service navigation

- Global-language detail pages now display:
  - Home
  - Name in Hangul
  - Korean Name
- Added localized navigation labels for all 23 supported locales.
- Confirmed that the selected state switches correctly between pronunciation mode and Korean-name mode.
- Korean entry pages retain their existing Home / Hanja Meaning / Global Name navigation.

## Modified Files

- `src/app/page.tsx`
- `src/components/LanguageSwitcher.tsx`
- `src/app/(services)/global-to-korean/page.tsx`
- `src/components/NamingForm.tsx`
- `src/components/ServiceShell.tsx`
- `src/lib/services.ts`
- `src/lib/openai.ts`
- `src/lib/mock-results.ts`
- `docs/WORK_STATUS_2026-07-11.md`

## Verification

- `pnpm lint`: passed after the final navigation changes.
- `pnpm build`: passed after all final icon, copy, navigation, pronunciation-service, and footer changes.
- Browser checks completed at `1280x720`:
  - full footer visible with bottom safety gap
  - new pronunciation card visible on the English landing page
  - card title does not overflow
  - card description stays within two lines
  - pronunciation-mode detail title and four intended inputs are present
  - global service navigation links and active states switch correctly

## Important Follow-Up Notes

- The final production build was rerun successfully before commit preparation.
- Visually review the `ABC → 한글` icon at desktop and mobile sizes.
- Review the 23 localized pronunciation-service strings for native-language polish.
- The no-API-key mock result is intentionally generic and is not a real transliteration engine; real name-specific output requires the configured OpenAI path.
- Review whether pronunciation mode should eventually get a dedicated route instead of sharing `/global-to-korean` through a query parameter.
- Confirm mobile behavior for the fixed-height desktop landing changes and the two global service cards.
- Commit, push, and Vercel production deployment were completed after final verification.

## Suggested Next Steps

1. Run `git status --short` and review the current diff.
2. Visually verify Korean and English landing pages at desktop and mobile sizes.
3. Test both global service detail flows, including a real API-backed pronunciation request if an API key is configured.
4. Review the three intentionally untracked logo assets separately before deciding whether to keep or remove them.
