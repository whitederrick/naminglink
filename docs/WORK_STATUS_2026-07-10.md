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
