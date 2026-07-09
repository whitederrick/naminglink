# 인명용 한자 운영 정책

이 서비스의 한글 이름-한자 의미 매칭은 공식 인명용 한자표를 별도 데이터베이스로 관리한다. AI 응답은 설명과 조합 생성을 돕는 보조 수단이며, 출생신고나 개명 등 법적 사용 가능 여부의 최종 판정으로 표시하지 않는다.

## 기준 원본

- 원본 파일: `hanja.pdf`
- 확인된 표지 정보: `가족관계의 등록 등에 관한 규칙 제37조`, `2024. 5. 23. 일부개정`, `2024. 6. 11. 시행`
- 저장 방식: PDF 자체를 서비스 코드에 섞지 않고, 검수된 JSON/CSV를 `official_hanja_*` 테이블에 import한다.
- 원본 무결성: `scripts/prepare-hanja-pdf.py`가 SHA-256과 페이지 수를 `tmp/hanja-pdf/manifest.json`에 기록한다.

## 반드시 반영할 주의사항

1. 한자는 지정된 발음으로만 사용할 수 있습니다.
2. 그러나 첫소리(初聲)가 "ㄴ" 또는 "ㄹ"인 한자는 각각 소리나는 바에 따라 "ㅇ" 또는 "ㄴ"으로 사용할 수 있습니다.
3. 동자(同字), 속자(俗字), 약자(略字)는 조회되는 한자에 한하여 사용할 수 있습니다.
4. "示"변과 "礻"의 변, "++"변과 "艹"변은 서로 바꾸어 쓸 수 있습니다.

## DB 반영 흐름

1. PDF 원본 준비

```powershell
pnpm hanja:prepare-pdf "C:\Users\white\Downloads\hanja.pdf" -- --render --max-pages 3
```

2. OCR 또는 수기 검수

PDF가 이미지형이면 자동 텍스트 추출이 비어 있을 수 있다. 이 경우 렌더링된 PNG를 OCR하거나 사람이 표를 검수해 `data/hanja/*.json` 형식으로 정리한다.

3. Supabase 스키마 적용

`docs/supabase_schema.sql`을 Supabase SQL Editor에서 실행한다.

4. 검수 JSON import

```powershell
pnpm hanja:import data/hanja/official-hanja.sample.json
```

운영 데이터는 `source.status = production`, `entry.review_status = production`이 된 행만 공개 조회 대상으로 삼는다.

## 추천 엔진 규칙

- 한글 음절과 지정 발음이 맞지 않는 한자는 후보에서 제외한다.
- 첫소리 ㄴ/ㄹ 예외는 표기/발음 보조 규칙으로만 다룬다. 원 한자의 지정 발음과 매칭 기록은 보존한다.
- 동자, 속자, 약자, 부수 변형은 `official_hanja_variants`에 등록된 항목만 허용한다.
- 금지 또는 주의 의미는 `rejected_hanja`에 한자와 이유를 함께 표시한다.
- DB가 아직 채워지지 않은 음절은 추정 후보를 만들지 않고 공식 데이터 보강 필요로 표시한다.

## 공식 연계 방침

현재 구조는 공식 PDF/표를 버전 관리형 내부 DB로 가져오는 방식이다. 외부 공식 조회 API가 확인되면 `official_hanja_sources`에 `source_key`와 버전을 추가하고, import 스크립트만 API 수집기로 교체하면 된다. 서비스 화면과 추천 로직은 동일한 `official_hanja_*` 테이블을 기준으로 동작하도록 유지한다.
