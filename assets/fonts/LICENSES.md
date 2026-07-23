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
