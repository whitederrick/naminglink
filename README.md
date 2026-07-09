# naminglink

Premium global naming service built with Next.js, Supabase, OpenAI, and Vercel.

## Product Areas

- Public landing page with locale-aware service routing
- Hanja meaning matching for Korean baby names
- Korean name to global name conversion
- Foreign name to Korean name conversion
- System admin screens for operations, add-ons, ads, and service status
- Add-on scaffolding for premium PDF, calligraphy, stamp delivery, and ad unlocks

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase PostgreSQL
- OpenAI JSON responses
- Vercel deployment

## Local Setup

```bash
pnpm install
copy .env.example .env.local
pnpm dev -- -p 3001
```

Add the Supabase and OpenAI values to `.env.local`.

## Supabase

Run the SQL in `docs/supabase_schema.sql` from the Supabase SQL editor.

## Routes

- `/` landing page
- `/hanja-meaning` Korean Hanja meaning matching
- `/korean-to-global` Korean name to foreign/global name
- `/global-to-korean` foreign name to Korean name
- `/admin` system admin overview
- `/admin/orders` order queue scaffold
- `/admin/ads` ad slot scaffold
- `/api/naming` unified naming API

## Deployment

Production URL:

https://naminglink.vercel.app
