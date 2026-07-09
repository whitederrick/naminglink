# naminglink (Global Naming Studio) 통합 개발 명세서

본 문서는 `naminglink.com` 서비스의 프론트엔드, 백엔드, 데이터베이스 및 AI 연동을 즉시 구현할 수 있도록 작성된 상세 기술 명세서입니다.

---

## 1. 프로젝트 개요 및 환경
- **프로젝트명:** naminglink (글로벌 네이밍 스튜디오)
- **도메인:** naminglink.com
- **핵심 목표:** 하나의 웹 플랫폼에서 한국인/외국인/신생아를 위한 맞춤형 글로벌 네이밍 및 스토리텔링 서비스 제공
- **수익 모델:** 
  - 보상형/배너 광고
  - 프리미엄 리포트(PDF) 다운로드 소액 결제
  - **생성된 이름을 활용한 실물 수제 도장 등 맞춤형 굿즈 제작 판매**
  - 제휴 마케팅 링크

### 기술 스택
- **Frontend/Backend:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Database & Auth & Storage:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **AI Model:** OpenAI `gpt-4o-mini` (또는 `claude-3-5-haiku`)

### 필수 환경 변수 (`.env.local`)
| 변수명 | 설명 |
| :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Public API Key |
| `SUPABASE_SERVICE_ROLE_KEY` | 백엔드 전용 Supabase Admin Key |
| `OPENAI_API_KEY` | OpenAI API 키 |
| `PORTONE_API_KEY` | 결제 연동(포트원) API 키 (선택) |

---

## 2. 데이터베이스 스키마 설계 (Supabase / PostgreSQL)

```sql
-- 1. 유저 테이블 (기본 무료 이용자 및 소셜 로그인 연동용)
CREATE TABLE users (
    id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. 작명 요청 및 결과 저장 테이블 (통합 관리)
CREATE TABLE naming_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL, 
    service_type TEXT NOT NULL, 
    
    input_factors JSONB NOT NULL, 
    generated_names JSONB NOT NULL,
    
    is_premium_unlocked BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Row Level Security (RLS) 설정
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE naming_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert to naming_logs" ON naming_logs FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow users to view own naming_logs" ON naming_logs FOR SELECT USING (auth.uid() = user_id);
```

---

## 3. 핵심 디렉토리 구조 (Next.js App Router)

```text
naminglink/
├── src/
│   ├── app/
│   │   ├── (services)/
│   │   │   ├── baby-hanja/page.tsx         # 신생아 한자 뜻풀이 페이지
│   │   │   ├── korean-name/page.tsx        # 외국인용 한국 이름 생성 페이지
│   │   │   └── foreign-name/page.tsx       # 한국인용 외국 이름 생성 페이지
│   │   ├── api/
│   │   │   └── naming/
│   │   │       └── route.ts                # AI 작명 통합 API 엔드포인트
│   │   ├── layout.tsx                      # 글로벌 레이아웃 
│   │   └── page.tsx                        # 메인 랜딩 페이지
│   ├── components/
│   │   ├── NamingForm.tsx                  # 공통 입력 폼 컴포넌트
│   │   ├── ResultCard.tsx                  # 생성 결과 표시 컴포넌트
│   │   └── AdBanner.tsx                    # 광고 배너 컴포넌트
│   └── lib/
│       ├── supabase.ts                     # Supabase 클라이언트 설정
│       └── openai.ts                       # OpenAI API 연동 설정
```

---

## 4. 통합 API 명세서 (`/app/api/naming/route.ts`)

### Request Interface (POST)
```typescript
interface NamingRequest {
  userId?: string; 
  serviceType: 'BABY_HANJA' | 'KOREAN_FOR_FOREIGNER' | 'FOREIGN_FOR_KOREAN';
  inputFactors: Record<string, any>;
}
```

### 처리 가이드라인
1. **Rate Limiting:** IP당 하루 무료 이용 횟수 제한(예: 3회) 적용.
2. **LLM 호출:** 클라이언트 요청 바디 검증 후 `serviceType`에 맞는 프롬프트 매핑. `openai.chat.completions.create` 호출 시 `response_format: { type: "json_object" }` 옵션 필수 사용.
3. **DB 저장:** JSON 응답값을 `naming_logs` 테이블에 삽입.
4. **반환:** 생성된 데이터를 클라이언트로 전달.

---

## 5. 서비스별 프롬프트 엔지니어링 전략 및 JSON 스키마

### 서비스 1: 신생아 한자 의미 부여 (BABY_HANJA)
* **System Prompt:** "당신은 한국의 최고 작명가이자 스토리텔러입니다. 사용자가 입력한 아이의 한글 이름과 한자, 그리고 부모가 부여하고 싶은 가치관을 바탕으로, 동양 철학과 현대적 감성을 담아 깊이 있고 감동적인 '한자 뜻풀이 스토리'를 생성하세요. 출력은 반드시 JSON 포맷이어야 합니다."
* **Output JSON Schema:**
  ```json
  {
    "summary": "한 줄 요약",
    "detailed_story": "감동적인 상세 스토리",
    "lucky_elements": ["행운의 색상", "어울리는 식물"]
  }
  ```

### 서비스 2: 외국인용 한국 이름 생성 (KOREAN_FOR_FOREIGNER)
* **System Prompt:** "You are a cultural naming expert fluent in English and Korean. Based on the user's original name, country, occupation, and personality traits, create 3 unique and natural Korean names. Provide the name in Hangul, Hanja, phonetic pronunciation, and a beautiful story connecting their traits to the Hanja meaning. Output must be valid JSON."
* **Output JSON Schema:**
  ```json
  {
    "names": [
      {
        "hangul": "이도움",
        "pronunciation": "Lee Do-um",
        "hanja": "利道音",
        "meaning": "A person who brings beautiful sounds and benefits to the world through their path.",
        "story": "Since you are a software engineer, 'Do-um' reflects your passion..."
      }
    ]
  }
  ```

### 서비스 3: 한국인용 외국 이름 생성 (FOREIGN_FOR_KOREAN)
* **System Prompt:** "당신은 글로벌 네이밍 컨설턴트입니다. 한국인의 성명, 직업, 선호하는 국가 및 분위기를 기반으로, 현지인들이 들었을 때 세련되면서도 본래 이름의 정체성을 계승하는 외국어 이름 3개를 추천하고 뉘앙스를 설명하세요. 반드시 JSON 포맷으로 출력하세요."
* **Output JSON Schema:**
  ```json
  {
    "recommendations": [
      {
        "name": "Louis",
        "meaning_connection": "기존 이름의 '빛날 광(廣)' 자의 의미를 담아 추천합니다.",
        "nuance": "프랑스권에서 클래식하면서도 지적인 느낌을 주며 신뢰감을 줍니다."
      }
    ]
  }
  ```

---

## 6. UI 흐름 및 수익화 전략 구현 노트

1. **로딩 및 광고 노출:** AI가 이름을 짓는 약 3~7초의 시간 동안 로딩 스피너와 함께 전면/네이티브 배너 광고 배치.
2. **Freemium 렌더링:** 생성된 3개의 이름 중 첫 번째 이름만 텍스트로 렌더링하고 나머지는 블러(Blur) 처리. 블러 영역 클릭 시 "30초 광고 보고 모두 확인하기" 기능을 실행하여 잠금 해제.
3. **프리미엄 PDF 리포트:** 뜻풀이와 스토리를 아름다운 인증서 디자인으로 구성. 포트원(Portone) 등 결제 API를 연동해 소액 결제 완료 시 PDF 다운로드 링크 제공.
4. **수제 도장 굿즈 커머스 (Physical Goods):** 새롭게 지은 한글/한자 이름을 실물로 간직하고자 하는 외국인 및 신생아 부모를 타겟팅. AI 작명 결과물 하단에 '나만의 맞춤형 이름 도장 주문하기' 버튼을 배치하여 자체 주문 폼이나 외부 커머스 솔루션(Shopify 등)으로 연동 후 실물 배송 처리.
