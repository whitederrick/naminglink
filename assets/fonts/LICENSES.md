# 폰트 라이선스 대장

판매용 PDF(프리미엄 리포트·한글 표기 아트 등)에 임베드되는 모든 폰트는 **SIL Open Font
License 1.1**(전문: `OFL.txt`)이다. 2026-07-23 각 폰트의 원 배포처 라이선스 문서로
전수 검증했다(google/fonts METADATA·OFL.txt, notofonts OFL.txt, @fontsource package.json).

**법적 근거 요약**
- OFL 1.1은 상업적 사용·판매 문서에의 임베딩·임베딩용 서브셋을 명시적으로 허용한다
  (OFL FAQ: 문서 임베딩은 폰트 재배포로 간주되지 않음). 금지는 폰트 파일 자체의 단독 판매뿐.
- 나눔 계열은 Reserved Font Name(Nanum, NanumBrush, NanumPen 등)이 지정돼 있으나,
  RFN은 "수정본을 그 이름으로 배포"할 때만 적용된다 — 본 프로젝트는 원본 그대로 임베드하므로 무관.
- Noto 계열은 RFN이 없어 서브셋 파일명(NotoSansCJKkr-Naming)도 문제 없다. 수정본(서브셋)을
  저장소에 두는 경우에도 OFL 전문(OFL.txt) 동봉으로 배포 조건을 충족한다.
- 새 폰트를 추가할 때는 반드시 이 표에 출처·라이선스를 기록하고, OFL이 아닌 폰트는
  상업 임베딩 조건을 확인하기 전에는 사용하지 않는다.

| 파일 | 폰트 | 저작권자 | 라이선스 | 출처 |
| --- | --- | --- | --- | --- |
| NotoSansKR-400.ttf, NotoSansKR-700.ttf | Noto Sans KR | Google (Noto Project) | OFL 1.1 | @fontsource/noto-sans-kr (woff 압축 해제본) |
| NotoSansCJKkr-Naming.otf | Noto Sans CJK KR (서브셋) | Google/Adobe (Noto CJK) | OFL 1.1 | Noto Sans CJK KR 서브셋 |
| NotoSans-Regular.ttf | Noto Sans (라틴 확장·키릴·그리스) | Google (Noto Project) | OFL 1.1 | notofonts.github.io |
| NotoSansThai-Regular.ttf | Noto Sans Thai | Google (Noto Project) | OFL 1.1 | notofonts.github.io |
| NotoSansDevanagari-Regular.ttf | Noto Sans Devanagari | Google (Noto Project) | OFL 1.1 | notofonts.github.io |
| NotoSansArabic-Regular.ttf | Noto Sans Arabic | Google (Noto Project) | OFL 1.1 | notofonts.github.io |
| NotoSansKhmer-Regular.ttf | Noto Sans Khmer | Google (Noto Project) | OFL 1.1 | notofonts.github.io |
| NanumBrushScript-Regular.ttf | 나눔손글씨 붓 | NAVER Corporation | OFL 1.1 | google/fonts (ofl/nanumbrushscript) |
| NanumPenScript-Regular.ttf | 나눔손글씨 펜 (현재 미사용) | NAVER Corporation | OFL 1.1 | google/fonts (ofl/nanumpenscript) |
| EastSeaDokdo-Regular.ttf | 동해독도체 | YoonDesign Inc. | OFL 1.1 | google/fonts (ofl/eastseadokdo) |

## 선택형 리포트 서체 (Supabase `report_fonts`)

사용자가 고르는 리포트 서체는 저장소가 아니라 Supabase Storage(`report-fonts` 버킷)에
보관하며, 서체별 저작권자·라이선스 유형·출처 URL을 `report_fonts` 테이블에 기록한다
(시드: `scripts/seed-report-fonts.mjs`, 판매 PDF 하단에 자동 표기). 2026-07-23 기준 18종
전수 검증 완료. 라이선스 유형 구분:
- **OFL**: SIL OFL 1.1 (기랑해랑·동해독도·솔뫼김대건).
- **KOGL-1**(공공누리 1유형, 출처표시): 추사사랑·포천막걸리·정선아리랑 3종·제주한라산·도봉옛길.
- **KOGL-3**(공공누리 3유형, 변경금지 → 공식 원본 파일만 사용): 덕온공주.
- **FREE-EMBED**(상업 사용·문서 임베딩 허용, 파일 수정·재배포 금지 → 공식 원본 파일만 사용):
  상상토끼 2종·신라문화·영월·행복고흥·헬스셋조릿대·조선100년.
- 제외(임베딩 근거 미확인/입수 불가): 대한민국독도체·월인석보체·밀양영남루체·문체부 훈민정음체·
  윤디자인 독립체·만세체(폰코자키 앱 전용 배포).
