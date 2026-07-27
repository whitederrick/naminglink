-- 관리자가 주문의 배송 정보를 열람한 기록.
--
-- 운영 콘솔은 처음부터 주문 목록에서 배송지를 빼고 `has_shipping_address` 불리언만 내보냈다.
-- 목록 한 번 열었다고 전 주문의 주소·연락처가 브라우저로 내려가는 것을 막으려던 것이고, 그 판단
-- 자체는 맞다. 다만 도장(STAMP_DELIVERY)이 나중에 붙으면서 **발송에 필요한 값을 볼 경로를 아무도
-- 만들지 않았다.** 각인 문구와 모델은 목록 요약에 넣었는데 주소·전화·요청사항은 빠져서, 관리자가
-- 화면만 보고는 도장을 어디로 보낼지 알 수 없었다.
--
-- 그래서 주문 하나씩 명시적으로 요청할 때만 내려주고, 그 열람을 여기에 남긴다. 최소 노출 원칙을
-- 지키면서도 발송 업무가 가능해진다. 누가 언제 어느 주문을 봤는지가 남으므로 사고가 났을 때
-- 되짚을 수 있다.

create table if not exists public.admin_pii_access_logs (
  id uuid primary key default gen_random_uuid(),
  -- 열람한 관리자. 계정이 지워져도 기록은 남아야 하므로 외래키를 걸지 않는다.
  admin_id uuid not null,
  admin_email text,
  order_id uuid not null,
  -- 무엇을 봤는지. 지금은 배송 정보뿐이지만 나중에 늘어날 수 있다.
  scope text not null default 'SHIPPING',
  accessed_at timestamptz not null default now()
);

-- 특정 주문을 누가 봤는지, 특정 관리자가 무엇을 봤는지 둘 다 조회한다.
create index if not exists admin_pii_access_logs_order_idx
  on public.admin_pii_access_logs (order_id, accessed_at desc);
create index if not exists admin_pii_access_logs_admin_idx
  on public.admin_pii_access_logs (admin_id, accessed_at desc);

-- 서비스 롤로만 읽고 쓴다. 클라이언트에서 직접 접근할 일이 없다.
alter table public.admin_pii_access_logs enable row level security;
