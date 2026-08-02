# 배포 완료 확인 방법 (Vercel)

기록일: 2026-08-02

## 요약

`vercel ls`의 출력을 파이프로 넘겨 배포 상태를 기다리면 **루프가 영원히 끝나지 않는다.**

## 원인

`vercel ls`는 TTY가 아닐 때(파이프·리다이렉션) 출력을 둘로 나눈다.

| 스트림 | 내용 |
| --- | --- |
| stdout | 배포 URL 목록만 (`https://naminglink-xxxx-....vercel.app`) |
| stderr | 표 머리글, Age/Status/Environment 컬럼 — `● Ready`, `● Error` 전부 여기 |

확인:

```bash
npx --no-install vercel ls 2>/dev/null   # URL만 나온다. Ready 라는 글자가 없다.
npx --no-install vercel ls 2>&1 | grep Ready   # 이제 잡힌다.
```

따라서 아래는 배포가 아무리 성공해도 매칭되지 않는다.

```bash
# 잘못된 예 — 무한 루프
until npx vercel ls | grep -q "naminglink-5czn48hz1.*Ready"; do sleep 30; done
```

## 올바른 방법

```bash
# stderr를 합치고, 실패 상태도 함께 본다
until npx --no-install vercel ls 2>&1 | grep -qE "naminglink-<id>.*(Ready|Error|Canceled)"; do
  sleep 30
done
npx --no-install vercel ls 2>&1 | grep "naminglink-<id>"   # 최종 상태를 눈으로 확인
```

`Ready`만 기다리면 배포가 깨졌을 때도 아무 말 없이 계속 돈다. **침묵은 성공이 아니다** — 종료 상태를 전부 패턴에 넣을 것.

## 실제 사고 (2026-08-02)

- 19:00에 `naminglink-5czn48hz1` 대기 루프 시작.
- 배포는 몇 분 만에 Ready, 그 뒤 더 새로운 배포(`13qrcejnm`)까지 Ready.
- 루프는 19분 넘게 30초마다 `vercel ls`를 계속 호출. 수동으로 종료.

## 곁다리: `/clear` 이후 백그라운드 셸 찾기

`/clear`로 대화를 비우면 이전 세션이 띄운 백그라운드 셸은 `TaskList`·`CronList`에 **잡히지 않는다.** 상단 배너에는 계속 뜬다. 이때는 프로세스를 직접 본다.

```powershell
Get-CimInstance Win32_Process |
  Where-Object { $_.CommandLine -match 'vercel|deployment' } |
  Select-Object ProcessId, CreationDate, CommandLine
```

출력 파일은 세션 디렉터리 아래에 남아 있다:
`%LOCALAPPDATA%\Temp\claude\C--myProjects-naminglink\<session-id>\tasks\<task-id>.output`
