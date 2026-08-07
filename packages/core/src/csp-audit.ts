/**
 * CSP를 읽어 **설명되지 않은 출처**를 찾아낸다.
 *
 * ## 왜 core에 두는가 (2026-08-07)
 *
 * 네 앱이 각자 `scripts/verify-ads-csp.ts`로 「광고를 끄면 CSP가 광고 이전과 같은가」를 센다.
 * 원래는 앱마다 **기준선 문자열을 통째로 적어 두고 같은지 비교**했는데, 그 방식엔 결함이 둘 있다:
 *
 * 1. **환경변수가 붙는 순간 거짓으로 실패한다.** CSP는 결제 키·Supabase 주소에 따라 넓어진다.
 *    키가 없는 상태에서만 통과하는 검사라, 실제로 키를 등록하고 나면 광고와 무관한 이유로
 *    실패한다. 그러면 사람은 검사기를 무시하게 되고, 그때부터 검사는 없는 것과 같다.
 * 2. **naminglink는 애초에 못 쓴다.** 이 앱은 브라우저가 Supabase를 직접 부르므로(로그인·콘솔)
 *    형제와 기준선이 다르다. 그래서 이 앱에만 검사기가 없었다 — 정작 광고가 실제로 나가는
 *    유일한 앱인데.
 *
 * 그래서 문자열 비교를 버리고 **부분집합**으로 센다: CSP에 나오는 모든 출처가 「광고와 무관한
 * 이유로 열린 것」의 목록 안에 있어야 한다. 목록은 앱이 설정 파일과 **같은 모듈**에서 끌어오므로
 * 결제 설정이 바뀌어도 따라 움직이고, 광고 도메인이나 정체 모를 값(`https:`·`blob:` 같은)이
 * 하나라도 섞이면 이름을 대며 잡는다. 문자열 비교보다 넓게 잡으면서 거짓 실패는 없다.
 *
 * 판정 로직만 여기 두고 **허용 목록은 앱이 만든다** — 앱마다 정당하게 열리는 자리가 다르다.
 */

/** `csp`에서 `name` 지시자의 값(출처들)을 꺼낸다. 없으면 null. */
export function cspDirective(csp: string, name: string): string | null {
  for (const directive of csp.split(";")) {
    const parts = directive.trim().split(/\s+/);
    if (parts[0] === name) return parts.slice(1).join(" ");
  }
  return null;
}

/**
 * `allowed`에 없는 출처를 **지시자 이름과 함께** 돌려준다.
 *
 * 값만 돌려주면 「어디가 열렸는지」를 못 봐서 고칠 자리를 찾는 데 시간이 든다.
 */
export function foreignCspSources(csp: string, allowed: ReadonlySet<string>): string[] {
  const found: string[] = [];
  for (const directive of csp.split(";")) {
    const parts = directive.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) continue;
    const [name, ...sources] = parts;
    for (const source of sources) if (!allowed.has(source)) found.push(`${name}: ${source}`);
  }
  return found;
}

/**
 * 대조군 — **허용 목록이 너무 넓어지면 부분집합 검사는 조용히 아무것도 안 잡는다.**
 *
 * 광고 도메인 하나와 정체 모를 출처 하나를 섞어 둔 표본이다. 이것을 `foreignCspSources`에
 * 넣어 **정확히 둘**이 나오지 않으면 그날의 검사 결과를 믿으면 안 된다.
 */
export const CSP_CONTROL_SAMPLE =
  "script-src 'self' https://pagead2.googlesyndication.com; img-src 'self' blob:";

/** 대조군이 실제로 잡히는가. 앱의 검사기가 결과를 내기 전에 이것부터 부른다. */
export function cspControlHolds(allowed: ReadonlySet<string>): boolean {
  return foreignCspSources(CSP_CONTROL_SAMPLE, allowed).length === 2;
}

/**
 * 광고와 무관하게 **늘 이 값이어야 하는** 자리.
 *
 * 여기가 넓어졌다면 광고를 핑계로 다른 것이 뚫린 것이다. 광고를 켠 상태에서도 검사한다 —
 * 애드센스가 필요로 하는 것은 script/img/frame/connect이지 이 넷이 아니다.
 */
export const FIXED_CSP_DIRECTIVES: ReadonlyArray<readonly [string, string]> = [
  ["default-src", "'self'"],
  ["frame-ancestors", "'none'"],
  ["base-uri", "'self'"],
  ["object-src", "'none'"],
];
