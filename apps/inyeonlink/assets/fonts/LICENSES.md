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

## 로케일을 늘릴 때

지금 화면 문구는 ko·en뿐이라 위 넷으로 충분하다. 21개 로케일 번역을 채우면 태국어·아랍어·
데바나가리·크메르 폰트가 더 필요하다 — naminglink에 이미 있는 파일을 같은 방식으로 복사하고
이 표에 추가한다. 문자 체계별 폰트 라우팅은 `@naminglink/core/pdf`가 이미 처리한다.

**새 폰트를 추가할 때는 반드시 이 표에 출처·라이선스를 기록하고, OFL이 아닌 폰트는 상업
임베딩 조건을 확인하기 전에는 사용하지 않는다.**
