-- 글로벌 프리미엄 PDF(GLOBAL_NAME_PDF, US$9.99) 세션 허용.
-- premium_analysis_sessions의 한자 전용 제약을 확장한다:
-- service_type에 GLOBAL_TO_KOREAN, product_code에 GLOBAL_NAME_PDF,
-- currency에 USD(금액은 센트 단위 정수 999) 추가.
alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_service_type_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_service_type_check check (
    service_type in ('HANJA_MEANING_MATCH', 'GLOBAL_TO_KOREAN')
  );

alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_code_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_code_check check (
    product_code in ('FIVE_DETAIL', 'TEN_DETAIL', 'TEN_SAJU_PDF', 'GLOBAL_NAME_PDF')
  );

alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_currency_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_currency_check check (
    currency in ('KRW', 'USD')
  );

alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_price_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_price_check check (
    (product_code = 'FIVE_DETAIL' and price_amount = 2900 and currency = 'KRW') or
    (product_code = 'TEN_DETAIL' and price_amount = 4900 and currency = 'KRW') or
    (product_code = 'TEN_SAJU_PDF' and price_amount = 9900 and currency = 'KRW') or
    (product_code = 'GLOBAL_NAME_PDF' and price_amount = 999 and currency = 'USD')
  );

comment on column public.premium_analysis_sessions.product_code is
  'FIVE_DETAIL=5개 상세, TEN_DETAIL=10개 확장 상세, TEN_SAJU_PDF=10개+사주·오행+PDF, GLOBAL_NAME_PDF=글로벌 한글 이름 3장 PDF(US$9.99)';
