-- 프리미엄 PDF용 서체 저장소 (2026-07-23 사용자 확정: Supabase 업로드형).
-- 폰트 파일은 Storage 버킷(report-fonts)에, 메타데이터·스토리(23로케일 번역 포함)는 이 테이블에 둔다.
-- 판매 문서 임베딩이 허용된 라이선스만 등록해야 하며, license_type·source_url은 필수다.
create table if not exists public.report_fonts (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code ~ '^[a-z0-9-]{2,40}$'),
  name_ko text not null,
  name_en text not null,
  copyright_holder text not null,
  license_type text not null check (
    license_type in ('OFL', 'KOGL-1', 'KOGL-3', 'FREE-EMBED')
  ),
  source_url text not null,
  -- 스토리 원문(한국어)과 로케일별 번역({"en": "...", "ja": "..."}).
  story_ko text not null,
  stories jsonb not null default '{}'::jsonb,
  storage_path text not null,
  file_sha256 text,
  enabled boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists report_fonts_enabled_idx
  on public.report_fonts (enabled, sort_order);

alter table public.report_fonts enable row level security;
revoke all on public.report_fonts from anon, authenticated;
grant all on public.report_fonts to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'report-fonts',
  'report-fonts',
  false,
  20971520,
  array['font/ttf', 'font/otf', 'application/octet-stream', 'application/x-font-ttf', 'application/font-sfnt']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
