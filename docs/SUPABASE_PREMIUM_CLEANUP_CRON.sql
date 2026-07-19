-- Supabase Dashboard > SQL Editor에서 운영 URL과 CRON_SECRET을 바꾼 뒤 실행합니다.
-- CRON_SECRET은 Vercel 환경변수와 반드시 같은 값이어야 합니다.

create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;

select vault.create_secret(
  'https://naminglink.vercel.app',
  'naminglink_site_url',
  'Naming-Link production URL'
);

select vault.create_secret(
  'REPLACE_WITH_THE_SAME_CRON_SECRET_USED_IN_VERCEL',
  'naminglink_cron_secret',
  'Naming-Link premium cleanup authorization'
);

-- 매시간 7분에 만료 리포트를 정리합니다.
select cron.schedule(
  'naminglink-premium-cleanup-hourly',
  '7 * * * *',
  $$
  select net.http_get(
    url := (
      select decrypted_secret
      from vault.decrypted_secrets
      where name = 'naminglink_site_url'
      limit 1
    ) || '/api/cron/premium-cleanup',
    headers := jsonb_build_object(
      'Authorization',
      'Bearer ' || (
        select decrypted_secret
        from vault.decrypted_secrets
        where name = 'naminglink_cron_secret'
        limit 1
      )
    ),
    timeout_milliseconds := 30000
  ) as request_id;
  $$
);

-- 등록 확인
select jobid, jobname, schedule, active
from cron.job
where jobname = 'naminglink-premium-cleanup-hourly';

-- 필요 시 해제
-- select cron.unschedule('naminglink-premium-cleanup-hourly');
