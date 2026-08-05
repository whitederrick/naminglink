-- AI 사용량 기록에 **서비스 구분**을 더한다.
--
-- ## 왜 필요한가
--
-- `ai_usage_logs`는 naminglink 혼자 쓰던 표다. 지금은 사주링크도 결제 경로에서 모델을 부르고
-- (`interpretSaju`), 앞으로 dreamslink도 부른다. 서비스를 가르는 컬럼이 없으면 콘솔의 AI
-- 사용량·원가 화면이 **세 서비스 비용을 한 덩어리로 보여 준다** — 숫자는 멀쩡해 보이므로
-- 어느 서비스가 비싼지 아무도 눈치채지 못한다(`orders.service`·`site_events.app`을 가른 것과
-- 같은 이유다).
--
-- ## 왜 지금인가 — **소급이 불가능하다**
--
-- 기존 행에는 어느 서비스였는지가 어디에도 남아 있지 않다. 지금 넣으면 "지금까지는 전부
-- naminglink였다"가 참이라 기본값으로 메울 수 있지만, 사주링크가 유료로 열린 뒤에 넣으면 그
-- 사이에 쌓인 행을 가를 방법이 없다.
--
-- ## 후방호환
--
-- `default 'naminglink'`이라 **기존 코드가 이 컬럼을 몰라도 계속 쓰인다.** naminglink는 지금
-- 값을 넣지 않으므로 기본값으로 들어가고, 그것이 사실과 맞는다. 사주링크는 이 마이그레이션과
-- 함께 `app: 'sajulink'`를 넣기 시작한다.

alter table public.ai_usage_logs
  add column if not exists app text not null default 'naminglink';

-- 제약은 컬럼을 더한 뒤에 건다. 기존 행이 전부 기본값이라 바로 통과한다.
alter table public.ai_usage_logs drop constraint if exists ai_usage_logs_app_check;
alter table public.ai_usage_logs add constraint ai_usage_logs_app_check
  check (app in ('naminglink', 'inyeonlink', 'sajulink', 'dreamslink'));

-- 콘솔이 서비스별로 기간 집계를 하므로 `app`과 시각을 함께 탄다.
create index if not exists ai_usage_logs_app_created_idx
  on public.ai_usage_logs (app, created_at desc);
