# 🚀 naminglink (Global Naming Studio) 심화 개발 및 실행 계획서 (Advanced Plan)

본 문서는 `naminglink.com` 서비스의 프론트엔드, 백엔드, 데이터베이스 및 AI 연동을 즉시 구현할 수 있도록 작성된 상세 기술 명세서입니다.

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

```sql
-- 1. 작명 기록 테이블
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
    shipping_status TEXT DEFAULT 'PENDING',
    
    -- 결제 정보
    payment_status TEXT DEFAULT 'UNPAID',
    payment_amount INTEGER NOT NULL,
    portone_imp_uid TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
```

---

## 3. 핵심 모듈 및 로직 상세

### A. AI 응답 지연 시간(Latency) 활용 전략
- **구현 방식:** React의 `Suspense`를 활용하여 Streaming UI 구성.
- **UI 연출:** 진행 문구를 1.5초 간격으로 교체 노출하며, 하단에 네이티브 광고 배치.

### B. 프리미엄 PDF 생성 로직
- **방식:** `html2canvas` + `jsPDF`를 활용한 클라이언트 사이드 렌더링.
- **프로세스:** 결제 성공 콜백 수신 -> 숨겨진 템플릿 DOM 데이터 바인딩 -> 캡처 후 다운로드 트리거.

### C. 실물 도장 커머스 플로우
1. 작명 결과 페이지 하단 '수제 도장 주문' 버튼 클릭.
2. 배송지 폼 오픈 및 포트원 결제 호출.
3. 성공 시 `orders` 테이블 INSERT (`STAMP_DELIVERY`).
4. 관리자 알림(Webhook) 전송.

---

## 4. 상세 디렉토리 구조

```text
naminglink/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── naming/route.ts
│   │   │   └── payment/webhook/route.ts
│   │   ├── checkout/[logId]/page.tsx
│   │   └── admin/orders/page.tsx
│   ├── components/
│   │   ├── loading/AILoadingSteps.tsx
│   │   ├── pdf/CertificateTemplate.tsx
│   │   └── commerce/StampOrderForm.tsx
│   └── lib/
│       ├── supabase.ts
│       ├── openai.ts
│       └── payment.ts
```

---

## 5. 실제 론칭을 위한 라스트 마일 (Last Mile)

본격적인 서비스 론칭을 위해 개발 착수와 함께 반드시 병행되어야 할 필수 점검 사항입니다.

### 🎨 UI/UX 및 브랜드 디자인 (Design System)
- **브랜드 자산:** 서비스의 신뢰도를 높여줄 메인 컬러, 폰트, 로고 정의.
- **시각적 시안:** 프론트엔드 개발 전 '프리미엄 PDF 인증서'와 '실물 도장'의 구체적인 시각적 디자인 시안(Mockup) 확보 필수.

### 🔐 사용자 인증(Auth) 상세 정책
- **소셜 로그인 연동:** Supabase Auth를 활용할 때 구체적으로 어떤 소셜 로그인(구글, 카카오, 애플 등)을 붙일 것인지 확정.
- **비회원 결제:** 도장 구매 시 비회원 결제를 허용할 것인지에 대한 유저 플로우 결정.

### 📜 법적 고지 및 행정 처리 (Compliance)
- **약관 및 정책:** 사용자의 이름, 직업, 배송지 주소 등 개인 정보를 수집하므로 '개인정보처리방침' 및 '이용약관' 작성 필수.
- **행정 절차:** 실물 도장 커머스 판매를 위한 '통신판매업 신고' 및 '포트원(PG사) 실가입 심사' 통과.

### 🛡️ AI 프롬프트 예외 처리 (Edge Cases)
- **입력값 필터링 및 튜닝:** 사용자가 장난으로 비속어를 입력하거나 해석하기 어려운 텍스트를 넣었을 때 LLM이 어떻게 방어할지 프롬프트 미세 조정(Tuning).
- **에러 핸들링:** 비정상 요청에 대해 적절한 에러 메시지를 띄워주는 예외 처리 로직 추가.
