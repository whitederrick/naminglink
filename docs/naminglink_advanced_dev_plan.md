# 🚀 naminglink (Global Naming Studio) 심화 개발 및 실행 계획서 (Advanced Plan)

본 문서는 기존의 통합 개발 명세서를 바탕으로, **실제 프로젝트 론칭을 위한 주차별 로드맵(WBS), 확장된 데이터베이스 설계(결제 및 커머스 포함), 상세 시스템 아키텍처 및 핵심 로직**을 추가한 심화 개발 계획서입니다.

---

## 1. 단계별 개발 로드맵 (4주 완성 WBS)

### 🟢 Week 1: 인프라 구축 및 기본 UI 설계
- **Day 1-2 (환경 세팅):** Next.js(App Router) 프로젝트 초기화, Tailwind CSS & shadcn/ui 세팅, Vercel 프로젝트 연동.
- **Day 3-4 (DB 구축):** Supabase 프로젝트 생성, User 및 Naming Logs 테이블 생성, RLS(Row Level Security) 정책 설정.
- **Day 5-7 (프론트엔드 퍼블리싱):** 3가지 메인 서비스(신생아/외국인/한국인) 입력 폼 UI 구현, 공통 레이아웃(헤더/푸터) 작업.

### 🟡 Week 2: AI 연동 및 핵심 기능 구현
- **Day 1-3 (AI API 연동):** OpenAI API 연동, 서비스별 System Prompt 최적화, JSON 응답 파싱 및 에러 핸들링 로직 구현.
- **Day 4-5 (DB 연동):** 생성된 작명 결과를 Supabase `naming_logs`에 INSERT 및 GET 하는 서버 액션(Server Actions) 구현.
- **Day 6-7 (UI 고도화):** API 호출 시 5~7초 대기 시간을 위한 스켈레톤 UI 및 로딩 애니메이션 구현 (이 구간에 AdSense 배너 삽입 공간 확보).

### 🟠 Week 3: 수익화 로직 적용 (광고 및 프리미엄 PDF)
- **Day 1-2 (Freemium 로직):** 작명 결과 3개 중 1개만 렌더링, 나머지 2개는 CSS Blur 처리. 
- **Day 3-4 (보상형 광고):** Blur 해제를 위한 리워드 광고 API 연동 (구글 애드센스 전면광고 혹은 서드파티 보상형 웹 광고 적용).
- **Day 5-7 (결제 및 PDF):** 포트원(Portone) 결제 모듈 연동. 결제 성공 시 `html2canvas` + `jsPDF` (또는 백엔드 Puppeteer)를 활용해 작명 결과를 인증서 형태의 PDF로 생성 및 다운로드 제공.

### 🔴 Week 4: 수제 도장 커머스 연동 및 정식 오픈
- **Day 1-3 (커머스 DB 및 주문 폼):** 실물 수제 도장 주문을 받기 위한 `orders` 테이블 추가 및 배송 정보 입력 폼 구현.
- **Day 4-5 (어드민 패널):** 들어온 주문(PDF 결제 내역, 도장 주문 내역)을 확인할 수 있는 간단한 어드민 대시보드(Supabase 기본 뷰 활용 또는 별도 페이지) 구축.
- **Day 6-7 (QA 및 배포):** SEO 메타 태그 최적화(Open Graph 등), 다국어 지원(i18n) 점검, 최종 버그 수정 후 Vercel 프로덕션 배포.

---

## 2. 확장된 데이터베이스 스키마 (결제 및 커머스 포함)

기존 작명 로그 테이블에 더해, **수제 도장 구매 및 프리미엄 PDF 결제 내역**을 관리하는 테이블을 추가합니다.

```sql
-- 1. 작명 기록 테이블 (기존 동일)
CREATE TABLE naming_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    service_type TEXT NOT NULL,
    input_factors JSONB NOT NULL,
    generated_names JSONB NOT NULL,
    is_premium_unlocked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 주문/결제 테이블 (신규 - 도장 및 PDF 결제 관리)
CREATE TABLE orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    naming_log_id UUID REFERENCES naming_logs(id) ON DELETE CASCADE,
    order_type TEXT NOT NULL, -- 'PREMIUM_PDF', 'STAMP_DELIVERY'
    
    -- 주문자 및 배송 정보
    customer_name TEXT,
    customer_email TEXT,
    shipping_address TEXT,
    shipping_status TEXT DEFAULT 'PENDING', -- 'PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'
    
    -- 결제 정보
    payment_status TEXT DEFAULT 'UNPAID', -- 'UNPAID', 'PAID', 'FAILED'
    payment_amount INTEGER NOT NULL,
    portone_imp_uid TEXT, -- 포트원 결제 고유번호
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS 정책 (자신의 주문만 확인 가능하도록 설정)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
```

---

## 3. 핵심 모듈 및 로직 상세

### A. AI 응답 지연 시간(Latency) 활용 전략
OpenAI API는 응답까지 수 초가 걸립니다. 이 시간을 단순한 로딩 스피너로 방치하지 않고 **수익화 및 스토리텔링 구간**으로 활용합니다.
- **구현 방식:** React의 `Suspense`를 활용하여 Streaming UI를 구성.
- **UI 연출:** "AI 작명가가 동양 철학 데이터를 분석 중입니다...", "글로벌 트렌드와 발음을 대조하고 있습니다..." 와 같은 진행 문구를 1.5초 간격으로 교체 노출하며, 해당 화면 하단에 네이티브 광고를 배치합니다.

### B. 프리미엄 PDF 생성 로직 (Client vs Server)
- **추천 방식 (Client-side):** 서버 비용 절감을 위해 클라이언트 브라우저 자원을 활용합니다.
- **라이브러리:** `html2canvas` (DOM을 이미지로 캡처) + `jspdf` (이미지를 PDF로 변환).
- **프로세스:** 결제 성공 콜백 수신 -> 숨겨져 있던(display: none) '인증서 템플릿 DOM'에 데이터를 바인딩 -> 캡처 후 PDF 다운로드 트리거.

### C. 실물 도장 커머스 플로우 (STAMP_DELIVERY)
1. 사용자가 작명 결과 페이지 하단의 **'이 이름으로 수제 도장 주문하기 (₩39,000)'** 버튼 클릭.
2. 배송지 입력 폼 모달 오픈 및 포트원 결제 창 호출.
3. 결제 성공 시 `orders` 테이블에 `order_type: 'STAMP_DELIVERY'` 및 배송 정보 INSERT.
4. Supabase Database Webhooks 또는 Edge Functions를 활용해 관리자 이메일(또는 슬랙)로 주문 접수 알림 전송.

---

## 4. 상세 디렉토리 구조 (결제 및 커머스 반영)

```text
naminglink/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── naming/route.ts         # 작명 AI 생성 API
│   │   │   └── payment/
│   │   │       └── webhook/route.ts    # 포트원 결제 결과 수신(Webhook) API
│   │   ├── (services)/...              # 기존 서비스 페이지들
│   │   ├── checkout/                   
│   │   │   └── [logId]/page.tsx        # 도장 주문 및 결제 페이지
│   │   └── admin/
│   │       └── orders/page.tsx         # 관리자 주문 관리 대시보드
│   ├── components/
│   │   ├── loading/
│   │   │   └── AILoadingSteps.tsx      # 로딩 중 스토리텔링 & 광고 컴포넌트
│   │   ├── pdf/
│   │   │   └── CertificateTemplate.tsx # PDF 렌더링용 숨김 템플릿
│   │   └── commerce/
│   │       └── StampOrderForm.tsx      # 도장 배송지 입력 폼
│   └── lib/
│       ├── payment.ts                  # 포트원 SDK 연동 유틸리티
│       └── ...
```
