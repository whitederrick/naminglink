import "server-only";

import { fallbackCompanyInfo } from "@/lib/company";

/**
 * 운영자에게 알려야 하는 일이 생겼을 때 부른다.
 *
 * **왜 필요한가.** 지금까지 이런 일은 `console.error` 한 줄로만 남았다. Vercel 로그를 아무도
 * 들여다보지 않으면 새벽에 무슨 일이 나도 모르고, 비용이 걸린 사건은 **청구서로 알게 된다.**
 *
 * **웹훅과 메일 둘 다로 보낸다.** 슬랙·디스코드 수신 주소를 `OPS_ALERT_WEBHOOK_URL`에 넣으면
 * 그리로 가고, `RESEND_API_KEY`가 있으면 메일로도 간다. DB에 적지 않는 이유는, 알려야 할
 * 사건 중 가장 급한 것이 **DB가 흔들릴 때** 생기기 때문이다 — 그 상황에서 DB에 적는 알림은
 * 함께 실패한다.
 *
 * 둘 다 없으면 아무 데도 보내지 않고 로그만 남긴다(다크 런치). 광고·결제 키와 같은 방식이다.
 *
 * **naminglink `lib/ops-alert.ts`와 같은 파일이다.** 두 앱이 한 Resend 계정·한 수신함을 쓰므로
 * 제목의 서비스 표시(`[inyeon-link]`)만 다르다. 한쪽을 고치면 다른 쪽도 함께 볼 것.
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

  const webhook = process.env.OPS_ALERT_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (!webhook && !resendKey) return;

  const now = Date.now();
  const last = lastSentAt.get(key) ?? 0;
  if (now - last < THROTTLE_MS) return;
  lastSentAt.set(key, now);

  const mark = level === "critical" ? "🚨" : "⚠️";
  const body = detail ? JSON.stringify(detail, null, 1) : "";

  // **기다리지 않는다.** 알림 때문에 이용자 요청이 늦어지면 안 된다. 실패해도 조용히 넘어간다
  // (여기서 던지면 알림이 장애를 키운다). 보낼 곳이 둘이면 둘 다 보낸다.
  if (webhook) {
    const text = [mark, `[inyeon-link] ${message}`, body ? "```" + body + "```" : ""]
      .filter(Boolean)
      .join(" ");
    void fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // 슬랙은 `text`, 디스코드는 `content`를 본다. 둘 다 넣어 두면 어느 쪽이든 받는다.
      body: JSON.stringify({ text, content: text }),
      // 수신 서버가 느려도 우리 요청을 붙잡지 않도록 짧게 끊는다.
      signal: AbortSignal.timeout(3000),
    }).catch(() => {});
  }

  if (resendKey) void sendAlertEmail(resendKey, mark, message, body);
}

/**
 * 메일로 보낸다. Supabase 인증 메일에 이미 쓰고 있는 Resend를 그대로 쓴다 — 새 서비스에
 * 가입할 필요가 없다.
 *
 * **SMTP 비밀번호와 API 키는 다른 값이다.** Supabase에 넣은 것은 SMTP용이고, 여기서 쓰는
 * 것은 Resend 대시보드의 API Keys에서 따로 발급한다.
 *
 * 받는 주소는 `OPS_ALERT_EMAIL`, 없으면 푸터에 적힌 고객센터 메일을 쓴다 — 주소를 코드에
 * 새로 박지 않고 이미 있는 한 곳(`lib/company.ts`)을 본다. **DB에서 읽는 `getCompanyInfo()`가
 * 아니라 상수 쪽을 본다** — 이 알림이 가장 필요한 순간이 DB를 못 믿는 순간이라, 받는 주소를
 * DB에서 찾다가 알림까지 함께 실패하면 안 된다.
 *
 * **보내는 주소는 이 앱의 주소에서 뽑지 않는다.** naminglink는 자기 도메인에서 뽑지만, 이
 * 앱은 아직 실 도메인이 없어 `inyeonlink.vercel.app`이 나온다 — 인증하지 않은 도메인으로
 * 보내면 Resend가 거절하고, 이 함수는 실패를 조용히 삼키므로 **알림이 통째로 사라진다.**
 * 인증을 마친 `naming-link.com`에서 보내되 제목에 `[inyeon-link]`를 달아 어느 서비스인지
 * 알린다. 인연링크 도메인을 붙이고 Resend에서 인증하면 `OPS_ALERT_FROM`으로 바꾸면 된다.
 */
const VERIFIED_SENDER_DOMAIN = "naming-link.com";

async function sendAlertEmail(
  apiKey: string,
  mark: string,
  message: string,
  body: string,
) {
  const to = (process.env.OPS_ALERT_EMAIL?.trim() || fallbackCompanyInfo.email)
    .split(",")
    .map((address: string) => address.trim())
    .filter(Boolean);
  if (!to.length) return;

  const from =
    process.env.OPS_ALERT_FROM?.trim() ||
    `Inyeon-Link 알림 <alerts@${VERIFIED_SENDER_DOMAIN}>`;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `${mark} [inyeon-link] ${message}`,
        text: body ? `${message}\n\n${body}` : message,
      }),
      signal: AbortSignal.timeout(4000),
    });
  } catch {
    // 조용히 넘어간다. 알림 실패가 장애를 키우면 안 된다.
  }
}
