-- 프리미엄 PDF 배경 이미지 저장소 (2026-07-23 사용자 요청).
-- 배경을 이미지 파일로 관리하고, 관리자 화면에서 추가·적용 기간(월 범위)을 설정한다.
-- 렌더 시 생성 시점의 월이 [start_month, end_month] 범위(12→2처럼 연말 걸침 허용)에
-- 드는 활성 배경 중 sort_order가 가장 낮은 것을 쓴다. 없으면 내장 벡터 배경으로 폴백.
create table if not exists public.report_backdrops (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code ~ '^[a-z0-9-]{2,40}$'),
  name_ko text not null,
  start_month integer not null check (start_month between 1 and 12),
  end_month integer not null check (end_month between 1 and 12),
  storage_path text not null,
  file_sha256 text,
  enabled boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists report_backdrops_enabled_idx
  on public.report_backdrops (enabled, sort_order);

alter table public.report_backdrops enable row level security;
revoke all on public.report_backdrops from anon, authenticated;
grant all on public.report_backdrops to service_role;

-- 공개 버킷: 관리자 미리보기 표시용(민감 정보 아님). PDF 렌더는 서버에서 내려받아 임베드.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'report-backdrops',
  'report-backdrops',
  true,
  5242880,
  array['image/png', 'image/jpeg']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
