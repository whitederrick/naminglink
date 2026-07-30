import "server-only";

/**
 * 운영자에게 알려야 하는 일이 생겼을 때 부른다.
 *
 * **왜 필요한가.** 지금까지 이런 일은 `console.error` 한 줄로만 남았다. Vercel 로그를 아무도
 * 들여다보지 않으면 새벽에 무슨 일이 나도 모르고, 비용이 걸린 사건은 **청구서로 알게 된다.**
 *
 * **웹훅으로 보낸다.** 슬랙·디스코드 같은 곳의 수신 주소를 `OPS_ALERT_WEBHOOK_URL`에 넣으면
 * 그리로 간다. DB에 적지 않는 이유는, 알려야 할 사건 중 가장 급한 것이 **DB가 흔들릴 때**
 * 생기기 때문이다 — 그 상황에서 DB에 적는 알림은 함께 실패한다.
 *
 * 주소를 넣지 않으면 아무 데도 보내지 않고 로그만 남긴다(다크 런치). 광고·결제 키와 같은 방식이다.
 */

/**
 * 같은 사건이 쏟아질 때 알림이 도배되는 것을 막는다.
 *
 * 서버리스라 인스턴스마다 따로 센다 — 즉 완벽한 억제가 아니라 **한 인스턴스가 같은 사건을
 * 반복해 보내는 것**만 막는다. 그 정도로 충분하다. 완벽하게 하려면 DB가 필요한데, 이 알림이
 * 가장 필요한 순간이 바로 DB를 못 믿는 순간이다.
 */
const lastSentAt = new Map<string, number>();
const THROTTLE_MS = 5 * 60 * 1000;

export type OpsAlertLevel = "warn" | "critical";

export function notifyOps(
  key: string,
  message: string,
  detail?: Record<string, unknown>,
  level: OpsAlertLevel = "warn",
) {
  // 로그는 항상 남긴다. 웹훅이 없거나 실패해도 흔적은 있어야 한다.
  // 고정 표지를 앞에 두어 Vercel 로그에서 검색할 수 있게 한다.
  const line = `[ops-alert:${level}] ${key} ${message}`;
  if (level === "critical") console.error(line, detail ?? "");
  else console.warn(line, detail ?? "");

  const url = process.env.OPS_ALERT_WEBHOOK_URL?.trim();
  if (!url) return;

  const now = Date.now();
  const last = lastSentAt.get(key) ?? 0;
  if (now - last < THROTTLE_MS) return;
  lastSentAt.set(key, now);

  const text = [
    level === "critical" ? "🚨" : "⚠️",
    `[naming-link] ${message}`,
    detail ? "```" + JSON.stringify(detail, null, 1) + "```" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // **기다리지 않는다.** 알림 때문에 이용자 요청이 늦어지면 안 된다. 실패해도 조용히 넘어간다
  // (여기서 던지면 알림이 장애를 키운다).
  void fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, content: text }),
    // 수신 서버가 느려도 우리 요청을 붙잡지 않도록 짧게 끊는다.
    signal: AbortSignal.timeout(3000),
  }).catch(() => {});
}
