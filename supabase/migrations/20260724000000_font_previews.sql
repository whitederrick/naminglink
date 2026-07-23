-- 서체 선택 UI용 미리보기 이미지.
-- 폰트 파일 자체는 재배포 금지 라이선스가 있어 공개 서빙하지 않고,
-- 샘플 문구를 렌더한 PNG만 공개 버킷(font-previews)으로 제공한다.
alter table public.report_fonts
  add column if not exists preview_path text;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('font-previews', 'font-previews', true, 2097152, array['image/png'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
