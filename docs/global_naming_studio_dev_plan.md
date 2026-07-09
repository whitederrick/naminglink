# 📋 글로벌 네이밍 스튜디오 (Global Naming Studio) 개발 계획서

## 1. 프로젝트 개요 (Project Overview)
- **프로젝트명:** 글로벌 네이밍 스튜디오 (Global Naming Studio)
- **핵심 목표:** 하나의 웹 플랫폼에서 한국인/외국인/신생아를 위한 맞춤형 글로벌 네이밍 및 스토리텔링 서비스 제공
- **수익 모델:** 보상형/배너 광고, 프리미엄 리포트(PDF) 다운로드 소액 결제, 제휴 마케팅 링크

---

## 2. 추천 기술 스택 및 가성비 LLM 선정
AI 개발 환경(Vercel, Supabase)과의 최적의 호환성과 비용 효율성을 고려한 아키텍처입니다.

- **Frontend/Backend:** **Next.js (App Router)**
  - Vercel과의 완벽한 통합, SEO(검색엔진 최적화) 우수, API Routes를 통한 서버리스 백엔드 구현 용이.
- **Database & Auth & Storage:** **Supabase (PostgreSQL)**
  - 고유 유저 관리(Auth), 작명 이력 저장(Database), PDF 리포트 및 이미지 스토리지(Storage)를 한 번에 해결.
- **Deployment:** **Vercel**
  - Next.js 배포의 표준, 글로벌 에지 네트워크 지원으로 전 세계 외국인 대상 빠른 로딩 속도 보장.
- **가성비 LLM 추천:** **OpenAI `gpt-4o-mini`** 또는 **DeepSeek-V3**
  - **이유:** 이름 생성 및 뜻풀이는 복잡한 추론보다는 '창의적 조합'과 '다국어 번역 및 뉘앙스 처리'가 핵심입니다. `gpt-4o-mini`는 기존 gpt-3.5-turbo보다 비용은 훨씬 저렴하면서도 성능은 gpt-4급에 근접하여, 수만 건의 작명 요청이 발생해도 API 비용 부담이 극히 적습니다. 문장 완성도와 감성적 스토리텔링이 더 중요하다면 **Anthropic `claude-3-5-haiku`**를 대안으로 추천합니다.

---

## 3. 데이터베이스 스키마 설계 (Supabase / PostgreSQL)

Codex나 Claude가 데이터베이스 테이블을 바로 생성할 수 있도록 SQL DDL 형태로 작성되었습니다.

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
    user_id UUID REFERENCES users(id) ON DELETE SET NULL, -- 비회원 이용 가능 (NULL 허용)
    service_type TEXT NOT NULL, -- 'BABY_HANJA', 'KOREAN_FOR_FOREIGNER', 'FOREIGN_FOR_KOREAN'
    
    -- 입력 변수들 (JSON 구조로 유연하게 저장)
    input_factors JSONB NOT NULL, 
    -- 예시: { "birth_name": "John Doe", "job": "Developer", "gender": "Male", "preferences": ["modern", "strong"] }
    
    -- AI 생성 결과물
    generated_names JSONB NOT NULL,
    -- 예시: [ { "name": "도존우", "hanja": "道尊友", "meaning": "길을 존중하고 친구를 귀하게 여기다" } ]
    
    is_premium_unlocked BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

---

## 4. 핵심 API 라우트 및 아키텍처 (Next.js App Router)

AI 어시스턴트가 파일 구조를 파악할 수 있도록 `/app/api` 디렉토리 구조를 정의합니다.

### 📁 디렉토리 구조 예시
```text
src/
├── app/
│   ├── api/
│   │   └── naming/
│   │       └── route.ts         # AI 작명 생성 요청 처리 엔드포인트
│   ├── baby-hanja/              # 서비스 1 페이지
│   ├── korean-name/             # 서비스 2 페이지
│   └── foreign-name/            # 서비스 3 페이지
├── components/                  # 공통 UI 컴포넌트
└── lib/
    ├── supabase.ts              # Supabase 클라이언트 설정
    └── openai.ts                # OpenAI API 연동 설정
```

### 📄 `/app/api/naming/route.ts` (API 구현 가이드라인)
1. **Rate Limiting 적용:** 무분별한 AI API 호출을 막기 위해 IP당 하루 무료 이용 횟수 제한(예: 하루 3회).
2. **비동기 OpenAI 호출:** 클라이언트로부터 `service_type`과 `factors`를 받아 프리셋팅된 프롬프트와 결합 후 `gpt-4o-mini` 호출.
3. **결과 JSON 파싱:** LLM이 항상 일정한 JSON 구조로 응답하도록 `response_format: { type: "json_object" }` 옵션 사용 필수.
4. **DB 저장:** 생성된 결과를 `naming_logs` 테이블에 삽입 후 클라이언트에 반환.

---

## 5. 서비스별 프롬프트 엔지니어링 전략 (Prompt Engineering)

Claude/Codex가 프롬프트 컴포넌트를 설계할 때 참고할 핵심 시스템 프롬프트(System Prompt) 설계 지침입니다. 결과는 항상 **JSON 포맷**으로 출력하도록 강제해야 에러가 없습니다.

### 서비스 1: 아이 한자 의미 부여 (부모 타겟)
- **System Prompt:** "당신은 한국의 최고 작명가이자 스토리텔러입니다. 부모가 입력한 아이의 한글 이름과 한자, 그리고 부모가 부여하고 싶은 가치관/소망을 바탕으로, 동양 철학과 현대적 감성을 담아 깊이 있고 감동적인 '한자 뜻풀이 스토리'를 생성하세요."
- **Output Format:** `{ "summary": "한 줄 요약", "detailed_story": "감동적인 상세 스토리", "lucky_elements": ["행운의 색상", "어울리는 식물"] }`

### 서비스 2: 외국인용 한국 이름 생성 (외국인 타겟)
- **System Prompt:** "You are a cultural naming expert fluent in English and Korean. Based on the user's original name, country, occupation, and personality traits, create 3 unique and natural Korean names. Provide the name in Hangul, Hanja (Chinese characters), its phonetic pronunciation, and a beautiful story connecting their occupation/personality to the meaning of the Hanja."
- **Output Format:** `[ { "hangul": "이도움", "pronunciation": "Lee Do-um", "hanja": "利道音", "meaning": "A person who brings beautiful sounds and benefits to the world through their path.", "story": "Since you are a software engineer, 'Do-um' reflects your passion for helping others through technology..." } ]`

### 서비스 3: 한국인용 외국 이름 생성 (한국인 타겟)
- **System Prompt:** "당신은 글로벌 네이밍 컨설턴트입니다. 한국인의 성명, 기존 한자의 의미, 직업, 선호하는 국가(미국/영국/프랑스 등)를 기반으로, 현지인들이 들었을 때 가장 세련되고 어색함이 없으면서도 본래 이름의 '정체성(뜻)'을 계승하는 외국어 이름 3개를 추천하고 뉘앙스를 설명하세요."
- **Output Format:** `[ { "name": "Louis", "meaning_connection": "기존 이름의 '빛날 광(廣)' 자의 의미를 담아, 밝고 명예로운 의미를 가진 Louis를 추천합니다.", "nuance": "프랑스권에서 클래식하면서도 지적인 느낌을 주는 이름이며, 비즈니스 환경에서 신뢰감을 줍니다." } ]`

---

## 6. 유료화 및 수익화 기술 구현 계획

초기 웹 서비스 단계에서 유저 이탈을 최소화하면서 수익을 내는 구조입니다.

1. **Google AdSense / 카카오 애드핏 연동:**
   - 결과 로딩 화면("AI가 이름을 짓고 있습니다... 약 5초 소요")에 **전면/네이티브 배너 광고** 배치. 유저가 지루하지 않게 연출하면서 높은 광고 노출 수익 확보.
2. **보상형 광고 (Rewarded Video Ads):**
   - 추천 이름 3개 중 1개는 기본 공개, 나머지 2개나 더 상세한 스토리 분석을 보려면 "30초 광고 보고 무료로 확인하기" 버튼 구현 (웹용 보상형 광고 네트워크 또는 Supabase 기반 이용권 시스템 연동).
3. **프리미엄 PDF 리포트 결제 (Toss Payments / Portone 연동):**
   - 생성된 이름과 뜻풀이를 인쇄 가능한 형태의 아름다운 **'디지털 작명 인증서 PDF'**로 다운로드받는 기능 제공. 결제 금액은 1,900원~2,900원 선으로 책정하여 스토리지에 저장된 PDF 링크 제공.
