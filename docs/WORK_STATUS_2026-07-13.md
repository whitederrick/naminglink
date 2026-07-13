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