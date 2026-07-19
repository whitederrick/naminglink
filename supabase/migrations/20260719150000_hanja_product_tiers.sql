alter table public.premium_analysis_sessions
  add column if not exists product_code text not null default 'TEN_SAJU_PDF';

alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_price_amount_check;

alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_code_check;

alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_code_check check (
    product_code in ('FIVE_DETAIL', 'TEN_DETAIL', 'TEN_SAJU_PDF')
  );

alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_price_check check (
    (product_code = 'FIVE_DETAIL' and price_amount = 2900) or
    (product_code = 'TEN_DETAIL' and price_amount = 4900) or
    (product_code = 'TEN_SAJU_PDF' and price_amount = 9900)
  );

comment on column public.premium_analysis_sessions.product_code is
  'FIVE_DETAIL=5개 상세, TEN_DETAIL=10개 확장 상세, TEN_SAJU_PDF=10개+사주·오행+PDF';
