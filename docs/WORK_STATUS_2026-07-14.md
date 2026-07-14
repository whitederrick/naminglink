# Naming-Link Work Status - 2026-07-14

## Continuation baseline

- Workspace: `C:\myProjects\naminglink`
- Branch: `main`
- Current HEAD: `a4b320a Fix landing policy modal layout`
- Production URL: `https://naminglink.vercel.app`
- All work described below is currently uncommitted and has not been redeployed.
- The worktree contains the administrator, analytics, content-management, and advertising-layout change set described in this document. Do not clean unrelated files broadly.

## Completed in the current worktree

### 1. Managed legal documents and footer

- Added Supabase-backed draft/publish management for Terms, Privacy, Refund Policy, Pricing, and footer content.
- Added administrator-only content APIs and revision history.
- Standalone policy pages and landing policy modals load the published managed content with local fallback content.
- Removed the general login action from footers because all naming and ad-supported services remain usable without membership.
- Administrator content editor is available under `/naming-artist/content`.

Key files:

- `src/lib/site-content.ts`
- `src/lib/site-content-server.ts`
- `src/app/api/site-content/route.ts`
- `src/app/api/admin/site-content/route.ts`
- `src/components/AdminContentManager.tsx`
- `supabase/migrations/20260714193000_site_content_management.sql`

### 2. Administrator authentication and private route

- Administrator entry URL is `/naming-artist/login`.
- Login uses Supabase email and password authentication.
- Every administrator API verifies both the bearer session and `admin` or `super_admin` app metadata.
- `/admin` and `/admin/*` return 404 through `src/proxy.ts`.
- `/api/admin/*` remains server-protected and returns 401 or 403 without a valid administrator session and role.
- One confirmed administrator user with an administrator role exists in Supabase. Its password was not shared with Codex, so a full authenticated browser login was not performed.

### 3. Operations console and statistics

The `/naming-artist` console currently includes:

- Integrated dashboard
- Member list with enable/disable action
- Goods order list, revenue summary, and fulfillment-status updates
- AI usage, token, latency, model, and error reporting
- Global access statistics by country
- Service usage and advertising-event statistics
- Policy and footer management
- Master-data management

Actual Supabase aggregation is used; the previous static zero-value dashboard is no longer the intended console.

Privacy decisions:

- Raw IP addresses are not stored.
- A daily HMAC visitor hash is used for anonymous daily-user aggregation.
- Country is derived from the hosting request header when available.
- Client-supplied `userId` was removed from the naming API to prevent identity spoofing.
- The in-memory serverless rate limiter was replaced with an atomic daily Supabase counter.

Key files:

- `src/components/AdminOperationsConsole.tsx`
- `src/app/api/admin/operations/route.ts`
- `src/components/AnalyticsTracker.tsx`
- `src/app/api/analytics/route.ts`
- `src/app/api/ad-events/route.ts`
- `src/lib/request-context.ts`
- `supabase/migrations/20260714205000_operations_base.sql`
- `supabase/migrations/20260714210000_admin_analytics.sql`

### 4. AI usage recording

- `generateNamingResult` now returns the generated result plus model and token usage metadata.
- Successful naming requests record input tokens, output tokens, total tokens, model, provider request ID, and latency.
- The code default remains `gpt-4o-mini` because `OPENAI_MODEL` is not currently set.
- One AI call generates all candidates; rewarded ads reveal already-generated candidates and do not trigger extra AI calls.
- Production AI traffic has not yet accumulated in the new table, so token-cost estimates are still assumptions until real usage is recorded.

### 5. Master-data storage

Supabase storage and CRUD APIs were added for:

- Country and language
- Name and pronunciation rules
- Hanja data
- AI service and prompt configuration
- Products and pricing
- Payment and shipping
- Advertising slots
- Translation and UI copy
- System settings

The current screen is `/naming-artist/data`. It supports create, update, active/inactive status, sort order, JSON data, revision history, and importing several current code defaults.

Important UX follow-up:

- The user rejected the current single-page horizontal-tab and generic-JSON information architecture as difficult to understand.
- Refactor these areas into visible left-sidebar submenus grouped under Service Operations, Sales Operations, Advertising Operations, and Site Management.
- Replace the generic JSON editor with domain-specific forms. JSON may remain only as an advanced option.
- This sidebar/domain-form refactor has not yet been implemented.

Key files:

- `src/components/AdminMasterDataManager.tsx`
- `src/app/api/admin/master-data/route.ts`
- `supabase/migrations/20260714223000_master_data_management.sql`

### 6. Advertising placeholders and agreed layout

No real advertising provider is connected yet. All current ads are placeholders.

Agreed future provider split:

- Ordinary banner ads: Google AdSense
- Rewarded candidate unlock: Google Ad Manager GPT Rewarded Ads

Current placement keys:

- `service_header`: ordinary banner in the service-page header
  - Desktop: to the right of the Home/service navigation buttons
  - Mobile: above the navigation buttons at the top of the page
- `hangul_result_header`: a separate ordinary banner in the Hangul-pronunciation result header
  - Desktop: between the Home button and the result-page label
  - Mobile: at the top of the result header

Reserved header-ad height:

- Desktop: minimum 90 px
- Mobile: minimum 100 px

Rewarded-ad behavior is still a five-second placeholder. Before production ad integration:

- Remove timer-based reward granting.
- Grant one candidate only after Google `rewardedSlotGranted`.
- Add one-time reward nonce, expiry, idempotency, daily limits, no-fill handling, and consent-aware SDK loading.
- Do not grant rewards for clicks or early close.

Key files:

- `src/components/AdBanner.tsx`
- `src/components/ServiceShell.tsx`
- `src/components/HangulPronunciationResultPage.tsx`
- `src/components/CandidateUnlockPanel.tsx`
- `src/lib/analytics-client.ts`

## Supabase state

The following migrations were applied successfully to the configured remote Supabase project:

1. `20260714193000_site_content_management.sql`
2. `20260714205000_operations_base.sql`
3. `20260714210000_admin_analytics.sql`
4. `20260714223000_master_data_management.sql`

Verified behavior:

- Managed-content tables are reachable with the service role and protected by RLS.
- Administrator analytics RPC returned the real member count and test visit statistics.
- Anonymous administrator API access returns 401.
- `/admin` returns 404.
- `/naming-artist/login` and `/naming-artist/data` return 200.
- `master_data_records` exists remotely and was empty at the last direct verification. An administrator can use `현재 기준 가져오기` to initialize supported categories.

Do not print or commit values from `.env.local`. It contains working Supabase credentials and a database URL and is gitignored.

## Verification status

Completed during this work:

- TypeScript `tsc --noEmit`: passed after the final ad-height change.
- ESLint: passed after the final ad-height change.
- Next.js production build: passed after the final header-ad placement and height refinements.
- Local HTTP checks: new administrator pages 200, `/admin` 404, unauthenticated administrator APIs 401, analytics write 201.
- Supabase aggregation and table-existence checks: passed.

Required before commit or deployment:

- Perform desktop and mobile visual checks of `service_header` and `hangul_result_header`.
- Log in manually at `/naming-artist/login` with the user-owned administrator password and verify every console menu.
- Run `git diff --check` and review the full dirty-worktree scope before staging.

## Features intentionally not complete

- Actual AdSense integration
- Actual Google Ad Manager rewarded-ad integration
- Consent-management platform and regional advertising consent
- Goods catalog and checkout
- Global payment provider integration
- Checkout-only customer signup/login flow
- Shipping-address collection and post-order deletion automation
- PDF, audio, calligraphy, stamp, and other goods fulfillment pipelines
- Domain-specific master-data screens and left-sidebar submenu refactor
- Runtime consumption of every managed master-data category
- Production deployment of the current worktree

## Removed untracked image files

The following untracked images were excluded from the commit and then deleted at the user's explicit request:

- `public/images/logo_blank - 복사본.png`
- `public/images/logo_full.png`
- `public/images/logo_light.png`

## Recommended next sequence

1. Refactor the administrator sidebar and master-data pages into domain-specific submenus and forms.
2. Rerun production build and visually verify the two header banner positions on desktop and mobile.
3. Review and stage the intended worktree only.
4. Commit, push, and deploy only when explicitly requested.
5. After advertising-account approval, connect AdSense banners and GPT rewarded ads with consent and anti-abuse controls.
6. Implement checkout-only membership, payment, order creation, and temporary shipping-address retention.
