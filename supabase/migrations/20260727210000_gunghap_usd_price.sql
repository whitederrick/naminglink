-- 궁합 리포트 PDF 해외가를 US$2.99 → US$1.99로 내린다 (2026-07-27 사용자 확정).
--
-- naminglink가 이미 쓰는 990원 ↔ US$1.99 짝에 맞춘 것이다(일괄 공개 상품). 국내가 990원인데
-- 해외만 2.99이면 같은 상품군에서 가격 기준이 둘이 된다.
--
-- 포트원 V2는 USD를 센트 단위 정수로 받으므로 199다.
--
-- 약관·요금안내는 이 값을 읽어 문장을 만들므로(product_settings → getReportPrices) 문서는
-- 고칠 것이 없다.

update public.product_settings
   set amount = 199,
       updated_at = now()
 where code = 'GUNGHAP_PDF_USD'
   and amount <> 199;
