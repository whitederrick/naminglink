# Naming-Link 관리자 콘텐츠 관리

## 관리 범위

- 이용약관
- 개인정보처리방침
- 환불정책
- 요금안내
- 푸터 사업자 및 연락처 정보

정책 문서는 언어별로 관리할 수 있습니다. 저장한 초안은 공개되지 않으며,
`게시` 작업을 완료한 콘텐츠만 공개 페이지와 랜딩 푸터 팝업에 반영됩니다.

## 최초 설정

1. `supabase/migrations/20260714193000_site_content_management.sql`을 Supabase에 적용합니다.
2. Supabase Auth에서 운영자 이메일/비밀번호 계정을 생성합니다.
3. 신뢰할 수 있는 SQL 세션에서 해당 계정의 `app_metadata`에 운영자 역할을 부여합니다.

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
  || '{"role":"admin"}'::jsonb
where email = 'operator@example.com';
```

4. `/naming-artist/login`에서 운영자 계정으로 로그인합니다.
5. `/naming-artist/content`에서 콘텐츠를 편집하고 초안 저장 또는 게시합니다.

## 공개 서비스 정책

- 이름 분석과 광고 보상형 후보 열람은 비회원으로 이용합니다.
- 일반 회원가입 또는 로그인은 굿즈 주문 기능이 열릴 때 주문 단계에서만 노출합니다.
- 푸터에는 일반 로그인 링크를 표시하지 않습니다.
- 운영자 로그인은 일반 회원 로그인과 분리합니다.

## 보안 원칙

- 공개 브라우저는 `site_contents` 테이블에 직접 접근하지 않습니다.
- 공개 읽기와 운영자 쓰기는 Next.js API를 통해서만 수행합니다.
- 운영자 API는 Supabase access token을 서버에서 다시 검증하고 `app_metadata`의
  `admin` 또는 `super_admin` 역할을 확인합니다.
- `anon`과 `authenticated` 데이터베이스 역할에는 관리 콘텐츠 테이블 권한을
  부여하지 않습니다.
- 저장과 게시 이력은 `site_content_revisions`에 기록합니다.
- 운영 배포에서는 운영자 계정에 MFA를 추가하는 것을 권장합니다.

## 장애 시 동작

Supabase 설정이 없거나 게시 콘텐츠를 불러오지 못하면 코드에 포함된 기본 정책과
푸터 정보가 표시됩니다. 관리 테이블 장애가 공개 랜딩 페이지 장애로 이어지지
않도록 한 안전장치입니다.
