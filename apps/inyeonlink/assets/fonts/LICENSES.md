# 폰트 라이선스 대장 (인연링크)

판매용 PDF(궁합 리포트)에 임베드되는 모든 폰트는 **SIL Open Font License 1.1**
(전문: `OFL.txt`)이다. naminglink `apps/naminglink/assets/fonts/LICENSES.md`에서
2026-07-23에 전수 검증한 것과 **같은 파일**을 그대로 복사해 왔다.

파일을 공유하지 않고 앱마다 두는 이유: Next.js의 `outputFileTracingIncludes`가 앱 루트
상대경로로만 동작하고 `Font.register`도 `process.cwd()` 기준이라, `packages/core`에 두면
두 앱의 배포 산출물에 폰트가 실리지 않는다.

**법적 근거 요약** — OFL 1.1은 상업적 사용·판매 문서에의 임베딩·임베딩용 서브셋을 명시적으로
허용한다(OFL FAQ: 문서 임베딩은 폰트 재배포로 간주되지 않음). 금지는 폰트 파일 자체의 단독
판매뿐이다. Noto 계열은 Reserved Font Name이 없어 서브셋 파일명(`NotoSansCJKkr-Naming`)도
문제가 없고, 저장소에 두는 경우 OFL 전문 동봉으로 배포 조건을 충족한다.

| 파일 | 폰트 | 저작권자 | 라이선스 | 쓰임 |
| --- | --- | --- | --- | --- |
| NotoSansKR-400.ttf, NotoSansKR-700.ttf | Noto Sans KR | Google (Noto Project) | OFL 1.1 | 한글 본문·제목 |
| NotoSansCJKkr-Naming.otf | Noto Sans CJK KR (서브셋) | Google/Adobe (Noto CJK) | OFL 1.1 | 사주 원국·십신의 한자 |
| NotoSans-Regular.ttf | Noto Sans (라틴 확장·키릴·그리스) | Google (Noto Project) | OFL 1.1 | 영문 본문 |
| NotoSansArabic-Regular.ttf | Noto Sans Arabic | Google (Noto Project) | OFL 1.1 | 공유 썸네일(ar) |
| NotoSansThai-Regular.ttf | Noto Sans Thai | Google (Noto Project) | OFL 1.1 | 공유 썸네일(th) |
| NotoSansKhmer-Regular.ttf | Noto Sans Khmer | Google (Noto Project) | OFL 1.1 | 공유 썸네일(km) |
| NotoSansDevanagari-Regular.ttf | Noto Sans Devanagari | Google (Noto Project) | OFL 1.1 | 공유 썸네일(hi) |

아래 넷은 2026-07-30에 naminglink `apps/naminglink/assets/fonts/`에서 그대로 복사했다.
지금 쓰는 곳은 `scripts/render-og-images.ts` 하나다 — 23개 로케일 공유 썸네일을 헤드리스
크롬으로 구울 때 이 문자 체계들이 시스템 글꼴로 떨어지면 두부 문자가 된다. **빌드 산출물이
아니라 개발 도구가 읽는 파일이지만**, 저장소에 두는 이상 라이선스 대장에는 올린다.

## 로케일을 늘릴 때

판매용 PDF의 화면 문구는 아직 ko·en뿐이라 본문용으로는 위 넷(KR·CJK·라틴)으로 충분하다.
PDF 본문까지 23개 로케일로 넓히면 위 네 개를 `@naminglink/core/pdf`의 문자 체계별 라우팅에
등록해야 한다.

**새 폰트를 추가할 때는 반드시 이 표에 출처·라이선스를 기록하고, OFL이 아닌 폰트는 상업
임베딩 조건을 확인하기 전에는 사용하지 않는다.**
