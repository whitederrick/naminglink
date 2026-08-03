/**
 * 봉인된 후보의 모양과 그것을 다루는 화면 쪽 도구(서버·클라이언트 공용).
 *
 * 암호는 여기 없다 — 봉인·해제는 서버만 한다(`lib/result-seal.ts`). 이 파일은 "잠긴 자리가
 * 어떻게 생겼는가"와 "푼 것을 어디에 꽂는가"만 안다.
 *
 * **왜 배열 길이를 유지하는가.** 후보 수를 세는 코드가 전부 `candidates.length`를 본다
 * (`cappedCandidateCount`, 결과 화면의 `totalCount`). 잠긴 자리를 빼 버리면 "5개 중 1개 공개"가
 * "1개 중 1개 공개"가 되어 열기 패널 자체가 사라진다. 자리는 남기고 내용만 봉인한다.
 */

export type LockedCandidate = { __locked: true; seal: string };

export function isLockedCandidate(value: unknown): value is LockedCandidate {
  return (
    !!value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    (value as Record<string, unknown>).__locked === true
  );
}

function candidatesOf(result: unknown): unknown[] {
  if (!result || typeof result !== "object" || Array.isArray(result)) return [];
  const candidates = (result as Record<string, unknown>).candidates;
  return Array.isArray(candidates) ? candidates : [];
}

/** 잠기지 않은(=이미 볼 수 있는) 후보 수. 화면의 "N개 공개"는 이 값을 쓴다. */
export function unlockedCandidateCount(result: unknown) {
  return candidatesOf(result).filter((candidate) => !isLockedCandidate(candidate)).length;
}

/** 아직 잠겨 있는 첫 자리. 없으면 -1. 광고 한 번은 이 자리 하나를 연다. */
export function firstLockedIndex(result: unknown) {
  return candidatesOf(result).findIndex((candidate) => isLockedCandidate(candidate));
}

/** 잠긴 자리의 봉인문 전부(일괄 공개용). */
export function lockedSeals(result: unknown) {
  return candidatesOf(result).flatMap((candidate, index) =>
    isLockedCandidate(candidate) ? [{ index, seal: candidate.seal }] : [],
  );
}

/** 푼 후보를 제자리에 꽂은 **새 결과 객체**를 돌려준다(원본은 건드리지 않는다). */
export function withUnsealedCandidates(
  result: unknown,
  opened: Array<{ index: number; candidate: unknown }>,
) {
  if (!result || typeof result !== "object" || Array.isArray(result)) return result;
  const record = result as Record<string, unknown>;
  if (!Array.isArray(record.candidates)) return result;

  const next = [...record.candidates];
  for (const { index, candidate } of opened) {
    if (index >= 0 && index < next.length) next[index] = candidate;
  }
  return { ...record, candidates: next };
}

async function postUnseal(path: string, body: unknown) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string; opened?: Array<{ index: number; candidate: unknown }> }
    | null;
  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || "후보를 열지 못했습니다. 잠시 후 다시 시도해 주세요.");
  }
  return payload.opened ?? [];
}

/** 광고 관문 표. 원문과 "이만큼 지나야 쓸 수 있다"가 함께 온다. */
export type UnlockTicket = {
  ticket: string | null;
  readyInMs: number;
  /**
   * 서버에 **닿았는가.**
   *
   * `ticket`이 null인 데는 두 가지 사연이 있고 대응이 정반대다.
   *
   * - 서버가 관문을 걸 수 없다(설정 없음·DB 장애) → 서버도 표를 요구하지 않는다. **그냥 진행.**
   * - 서버에 닿지 못했다(네트워크·5xx) → 서버는 여전히 표를 요구한다. **광고를 보여 주기 전에
   *   멈춰야 한다.** 그대로 진행하면 이용자가 광고를 다 본 뒤에 실패를 본다.
   *
   * 이 값이 그 둘을 가른다. 참이면 앞의 경우, 거짓이면 뒤의 경우다.
   */
  issued: boolean;
};

/**
 * 광고 관문 표를 받아 온다. **광고를 시작할 때** 부른다.
 *
 * 여기서부터 서버가 기다림을 재기 시작하므로, 광고를 보는 시간과 관문 시간이 겹친다. 광고를
 * 다 본 뒤에 부르면 그때부터 5초를 또 세게 된다.
 */
export async function requestUnlockTicket(): Promise<UnlockTicket> {
  try {
    const response = await fetch("/api/candidates/unlock-ticket", { method: "POST" });
    const payload = (await response.json().catch(() => null)) as
      | { ok?: boolean; ticket?: string | null; readyInMs?: number }
      | null;
    if (!response.ok || !payload?.ok) return { ticket: null, readyInMs: 0, issued: false };
    return {
      ticket: payload.ticket ?? null,
      readyInMs: Math.max(0, Number(payload.readyInMs) || 0),
      issued: true,
    };
  } catch {
    return { ticket: null, readyInMs: 0, issued: false };
  }
}

/**
 * 잠긴 첫 후보 하나를 연다(광고 경로).
 *
 * 열 것이 없으면 결과를 그대로 돌려준다 — 부를 쪽에서 개수를 또 세지 않게 한다.
 *
 * `ticket`은 `requestUnlockTicket()`으로 미리 받아 둔 표다. 이것 없이 부르면 서버가 거절한다
 * (표를 끊을 수 있는 환경일 때). 봉인문만으로 몇 번이든 열리던 자리를 막는 것이 이 인자다.
 */
export async function unsealNextCandidate(result: unknown, ticket?: string | null) {
  const index = firstLockedIndex(result);
  if (index < 0) return result;
  const seals = lockedSeals(result);
  const target = seals.find((entry) => entry.index === index);
  if (!target) return result;
  const opened = await postUnseal("/api/candidates/unseal", { seal: target.seal, ticket });
  return withUnsealedCandidates(result, opened);
}

/**
 * 결과 화면의 `sessionStorage` 기록에서 `result`만 갈아 끼운다.
 *
 * **한 번 연 것은 다시 광고를 보지 않는다.** 예전에는 열림 개수가 화면 상태(`useState(1)`)에만
 * 있어 새로고침하면 도로 잠겼다. 이제 실제로 열린 후보를 받아 두므로, 기록에 되써서 새로고침·
 * 뒤로가기에도 그대로 열려 있게 한다(탭을 닫으면 결과 자체가 사라지는 것은 그대로다).
 */
export function persistUnsealedResult(storageKey: string, result: unknown) {
  try {
    const raw = sessionStorage.getItem(storageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    sessionStorage.setItem(storageKey, JSON.stringify({ ...parsed, result }));
  } catch {
    // 되쓰기에 실패해도 지금 보고 있는 화면은 이미 열려 있다. 여기서 막을 일이 아니다.
  }
}

/** 결제로 확인된 권리를 증명하는 값. 서버가 이 증명을 보고 일괄 해제한다. */
export type UnsealEntitlement =
  | { order: { orderId: string; paymentId: string } }
  | { premium: { sessionId: string; accessToken: string } }
  // 운영자 테스트. 상품 코드를 함께 보내 결제 경로와 **같은 범위**로 열리게 한다 — 테스트가
  // 실제보다 넓게 열리면 "5개 상품인데 10개가 열린다"를 못 잡는다.
  | { test: true; productCode: string };

/** 잠긴 후보를 한 번에 연다(결제 경로). */
export async function unsealAllCandidates(
  result: unknown,
  entitlement: UnsealEntitlement,
  headers?: Record<string, string>,
) {
  const seals = lockedSeals(result);
  if (seals.length === 0) return result;
  const response = await fetch("/api/candidates/unseal-all", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(headers ?? {}) },
    body: JSON.stringify({ seals: seals.map((entry) => entry.seal), ...entitlement }),
  });
  const payload = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string; opened?: Array<{ index: number; candidate: unknown }> }
    | null;
  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || "후보를 열지 못했습니다. 잠시 후 다시 시도해 주세요.");
  }
  return withUnsealedCandidates(result, payload.opened ?? []);
}
