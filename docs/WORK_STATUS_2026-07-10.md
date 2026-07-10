# Naming-Link Work Status - 2026-07-10

## Current Git State

- Branch: `main`
- Latest pushed commit before this handoff: `2f9a9b6 Pin Node runtime to 22`
- Production URL: `https://naminglink.vercel.app`
- Node runtime is pinned to `22.x` in `package.json`; `.nvmrc` is `22`.

## Completed Today

- Stabilized the multilingual landing layout and pushed it.
  - Commit: `dd84017 Polish multilingual landing layout`
- Added Node runtime metadata and deployed with Vercel Node 22.
  - Commits: `479daba Require Node 22 runtime`, `2f9a9b6 Pin Node runtime to 22`
- Removed the landing page `servicePickerTitle` display, so the right-side card area no longer shows `목적별 시작`.
- Replaced the temporary SVG brand mark with the user-provided `public/images/logo.png`.
- Increased the header brand mark display from `40x40` to `56x56`.
- Increased the logo image display scale inside the mark to `scale-125`.
- Increased the English `Naming-Link` header text to `text-xl`.
- Added Korean sub-brand text under the English name:
  - Text: `네이밍 링크`
  - Font preference: `Gungsuh, 'Noto Serif KR', serif`
  - Size: `15px`
- Confirmed `pnpm lint` passes after the latest header/logo changes.

## Files Changed In This Final Batch

- `src/app/page.tsx`
  - Removed visible purpose title above the service cards.
  - Added the Korean sub-brand line under `Naming-Link`.
- `src/components/BrandMark.tsx`
  - Uses `/images/logo.png`.
  - Shows the logo at `56x56` with `scale-125`.
- `public/images/logo.png`
  - User-provided logo asset used by the header.
- `docs/WORK_STATUS_2026-07-10.md`
  - This handoff document.

## Files Intentionally Not Committed

- `public/images/logo_full.png`
- `public/images/logo_light.png`

These were present in the workspace but were not requested for the header and should be reviewed separately before use.

## Verification

- `pnpm lint`: passed after the final header/logo changes.
- `pnpm build`: passed after the final header/logo changes.
- Local Codex runtime uses Node `24.x`, so local commands show an expected engine warning because the project is pinned to Node `22.x`.

## Next Session Notes

- Visually inspect the header logo at desktop and mobile sizes.
- If the logo text is still hard to read, decide between:
  - increasing the header mark size further,
  - applying a stronger crop/zoom in CSS,
  - or preparing a dedicated icon-only logo image.
- Confirm whether `logo_full.png` and `logo_light.png` should be kept, ignored, or removed.
- If the header is accepted, run `pnpm build`, commit any follow-up changes, push, and deploy to Vercel.

---

## Additional Work Log - Later 2026-07-10

### Pre-Commit Git State

- Branch: `main`
- Current HEAD: `6946dba Update landing header brand and logo`
- Local branch state: `main` is ahead of `origin/main` by 1 commit.
- The worktree still had uncommitted changes at the time this section was written.

### Current Modified / Untracked Files

- Modified:
  - `src/app/page.tsx`
  - `src/components/BrandMark.tsx`
  - `src/components/NamingForm.tsx`
  - `src/components/ServiceShell.tsx`
- Untracked image assets observed before staging:
  - `public/images/logo_blank.png`
  - `public/images/logo_blank - 복사본.png`
  - `public/images/logo_full.png`
  - `public/images/logo_light.png`

### Completed In This Round

- Updated the landing/header logo direction.
  - Header brand mark now uses the image logo instead of the earlier temporary mark.
  - Header logo display was adjusted so the mark appears larger and less tightly cropped.

- Updated landing service-card icons.
  - Non-Korean primary service card now uses `logo_blank.png` as a nameplate-like icon base.
  - The localized word for "name" is overlaid inside the nameplate per locale.
  - Korean landing service icons for Hanja meaning and global name conversion were made more decorative than the default lucide icons.

- Updated detail-page header behavior.
  - The top-left `Naming-Link` text link was changed to a localized Home button.
  - The Home button uses a dark ink-like background with white text.
  - The right-side service navigation is restricted for Korean entry flows instead of showing every service everywhere.

- Updated the `global-to-korean` intro card.
  - Reduced the title size for `외국 이름을 한국 이름으로 변환`.
  - Replaced the intro description with:
    - `아래의 다양한 조건을 입력하면 자연스럽고 설명 가능한 한국 이름을 제안합니다.`
  - Added a right-side `서비스 약속` panel in the intro card.
  - Moved the `기본 언어: XX` badge beside the `서비스 약속` title.
  - Replaced the promise copy with:
    - `생성 결과는 실제 부르고 쓰기 쉬운 한글 이름 중심으로 제안합니다.`
    - `이름의 의미와 발음 등을 확인할 수 있습니다.`

- Updated the `global-to-korean` condition input layout.
  - The three condition sections are horizontally aligned on desktop:
    - `Original identity`
    - `Birth profile`
    - `Korean usage context`
  - Fields inside each card are stacked vertically so the 3-column layout stays readable.
  - Other service forms keep the previous vertical section flow.

### Not Implemented Yet

- The final one-page input screen cleanup is not complete yet.
  - Add-on services and consent sections still need final compact layout treatment.
  - The current form still needs visual review for whether it fits without scrolling.

- The result flow has not been implemented yet.
  - The intended requirement is:
    - submit conditions,
    - force a 5-second loading/ad viewing screen,
    - then open a separate result-view page.
  - This round intentionally did not implement that flow because the user asked to proceed step by step and not get ahead.

- No new commit was created for this later work log yet.
- No push was performed for this later work log yet.

### Verification

- `pnpm lint`: passed after the latest `ServiceShell.tsx` and `NamingForm.tsx` edits.
- `pnpm build`: passed after the latest detail-page/input-layout edits.
- Local runtime still shows the expected Node engine warning:
  - Project wants Node `22.x`.
  - Current local bundled runtime reports Node `24.x`.
