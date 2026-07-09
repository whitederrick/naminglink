# naminglink

Global Naming Studio MVP built with Next.js, Supabase, and OpenAI.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase PostgreSQL
- OpenAI JSON responses

## Local Setup

```bash
pnpm install
copy .env.example .env.local
pnpm dev
```

Add the Supabase and OpenAI values to `.env.local`.

## Supabase

Run the SQL in `docs/supabase_schema.sql` from the Supabase SQL editor.

The MVP stores generated naming logs through the server API route at
`/api/naming`. The service role key is used only on the server.

## Routes

- `/` service selector
- `/baby-hanja` baby Hanja story generator
- `/korean-name` Korean name generator for foreigners
- `/foreign-name` foreign name generator for Korean users
- `/api/naming` unified naming API
