-- 발음 표기 붓글씨 PDF(HANGUL_ART_PDF, US$2.99) 세션 허용.
alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_code_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_code_check check (
    product_code in ('FIVE_DETAIL', 'TEN_DETAIL', 'TEN_SAJU_PDF', 'GLOBAL_NAME_PDF', 'HANGUL_ART_PDF')
  );

alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_price_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_price_check check (
    (product_code = 'FIVE_DETAIL' and price_amount = 2900 and currency = 'KRW') or
    (product_code = 'TEN_DETAIL' and price_amount = 4900 and currency = 'KRW') or
    (product_code = 'TEN_SAJU_PDF' and price_amount = 9900 and currency = 'KRW') or
    (product_code = 'GLOBAL_NAME_PDF' and price_amount = 999 and currency = 'USD') or
    (product_code = 'HANGUL_ART_PDF' and price_amount = 299 and currency = 'USD')
  );

comment on column public.premium_analysis_sessions.product_code is
  'FIVE_DETAIL=5개 상세, TEN_DETAIL=10개 확장 상세, TEN_SAJU_PDF=10개+사주·오행+PDF, GLOBAL_NAME_PDF=글로벌 한글 이름 3장 PDF(US$9.99), HANGUL_ART_PDF=발음 표기 붓글씨 2장 PDF(US$2.99)';
