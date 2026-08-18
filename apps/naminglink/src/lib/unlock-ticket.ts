import "server-only";

import { createHash, randomBytes } from "node:crypto";
import { NextRequest } from "next/server";

import { notifyOps } from "@/lib/ops-alert";
import { getDailyVisitorHash } from "@/lib/request-context";
import { getSupabaseAdminClient } from "@/lib/supabase";

/**
 * 후보 열기 관문 표.
 *
 * **무엇을 막는가.** 잠긴 후보의 내용은 봉인문으로만 브라우저에 있고 푸는 것은 서버뿐이지만
 * (`lib/result-seal.ts`), 여는 라우트에 상태가 없어 봉인문만 손에 넣으면 몇 번이든 열렸다.
 * `sessionStorage`를 덤프해 봉인문 넷을 한 번에 POST하면 광고 없이 즉시 다 열리는 자리였다.
 *
 * **왜 "광고를 봤다"를 증명받지 못하는가.** 웹 보상형에는 서버 검증(SSV)이 없다. 구글 문서가
 * 못 박아 두었다 — "Server-side verification is an app only feature and it is unavailable for
 * web use."(support.google.com/admanager/answer/9116812). 예전에 이 저장소는 "언젠가 GAM SSV로
 * 막는다"고 적어 두고 기다렸는데, **오지 않을 것을 기다리는 계획**이었다.
 *
 * **그래서 시간을 판다.** 증명할 수 없다면 부과할 수 있는 것은 정직한 이용자가 광고에 쓰는
 * 바로 그 비용, 시간뿐이다. 예전에는 그 시간을 클라이언트 `setTimeout`이 셌다 — 즉 안 세도
 * 그만이었다. 이제 광고를 **시작할 때** 서버가 표를 끊어 준비 시각을 적고, 후보를 열 때 그
 * 표를 받아 확인한다. 표는 한 번 쓰면 사라지고, 같은 방문자의 표는 줄을 서므로(마이그레이션의
 * `issue_unlock_ticket` 주석) 넷을 병렬로 끊어 기다림을 한 번으로 접을 수 없다.
 *
 * **남는 한계는 적어 둔다.** 방문자 판정이 IP 기반이라 IP를 갈아 가며 병렬로 도는 것은 여전히
 * 가능하다. 다만 그때는 후보 하나를 여는 데 정직한 이용자와 같은 시간이 들고, 시간당 60건
 * 제한도 그대로 걸린다. 광고를 안 보고도 **즉시·무제한**이던 것이 여기서 끝난다.
 *
 * **무엇을 저장하는가.** 표의 해시·방문자 해시·시각뿐이다. 결과도 후보도 남기지 않으므로
 * 비회원 결과 미저장 원칙과 부딪히지 않는다.
 */

/** 표 하나가 준비되기까지의 시간. 화면의 자체 게이트(`UNLOCK_AD_SECONDS`)와 같은 값이다. */
const WAIT_SECONDS = 5;

/**
 * 표의 수명.
 *
 * 광고를 켜 두고 잠깐 자리를 비운 이용자가 돌아와도 쓸 수 있을 만큼은 길어야 하고, 표를
 * 잔뜩 끊어 모아 두기에는 짧아야 한다. 쓰지 않고 지나간 표는 다음 발급을 늦추지 않으므로
 * (준비 시각이 과거가 된다) 이 값이 길다고 정직한 이용자가 손해 보지는 않는다.
 */
const TTL_SECONDS = 30 * 60;

export type IssuedTicket = {
  /** 이용자에게 건네는 원문. 서버에는 해시만 남는다. */
  ticket: string | null;
  /** 이만큼 지나야 쓸 수 있다. 화면은 이 값만큼 기다린다. */
  readyInMs: number;
};

function hashTicket(ticket: string) {
  return createHash("sha256").update(ticket, "utf8").digest("hex");
}

/**
 * 표를 끊는다. **광고를 시작하는 순간** 부른다 — 그때부터 시간이 흐르기 시작해야
 * 기다림이 광고와 겹친다. 후보를 여는 순간에 끊으면 광고를 본 뒤 또 기다리게 된다.
 *
 * 표를 끊을 수 없는 상황(설정 없음·DB 오류)에서는 `ticket: null`을 돌려준다. 화면은 그대로
 * 광고를 보여 주고, 여는 쪽도 같은 판단으로 통과시킨다(`consumeUnlockTicket` 참고).
 */
export async function issueUnlockTicket(request: NextRequest): Promise<IssuedTicket> {
  const supabase = getSupabaseAdminClient();
  const visitorHash = getDailyVisitorHash(request);
  // 설정 자체가 없는 경우(지역 개발)는 막지 않는다. 여기서 막으면 개발이 안 된다.
  if (!supabase || !visitorHash) return { ticket: null, readyInMs: 0 };

  const ticket = randomBytes(32).toString("base64url");
  const { data, error } = await supabase.rpc("issue_unlock_ticket", {
    p_ticket_hash: hashTicket(ticket),
    p_visitor_hash: visitorHash,
    p_wait_seconds: WAIT_SECONDS,
    p_ttl_seconds: TTL_SECONDS,
  });

  if (error) {
    // 알린다. 표가 안 끊기면 관문이 통째로 열린 채로 도는 것이라 조용히 넘어갈 일이 아니다.
    notifyOps(
      "unlock-ticket-unavailable",
      "후보 열기 관문 표를 발급하지 못해 광고 관문 없이 통과시키고 있습니다.",
      { reason: error.message },
      "warn",
    );
    return { ticket: null, readyInMs: 0 };
  }

  // 서버가 계산한 준비 시각을 **남은 시간**으로 바꿔 보낸다. 절대 시각으로 보내면 기기 시계가
  // 틀어진 이용자가 곧바로 막히거나 반대로 그냥 통과한다.
  const readyAt = typeof data === "string" ? Date.parse(data) : Number.NaN;
  const readyInMs = Number.isFinite(readyAt)
    ? Math.max(0, readyAt - Date.now())
    : WAIT_SECONDS * 1000;
  return { ticket, readyInMs };
}

export type TicketVerdict = "ok" | "missing" | "unknown" | "early" | "expired";

/**
 * 표를 쓴다(한 장에 후보 하나, 쓰면 사라진다).
 *
 * **관문을 걸 수 없을 때는 통과시킨다.** 레이트리밋(`checkRateLimit`)과 같은 태도다 — 한
 * 사람이 후보 몇 개를 5초 일찍 여는 손해보다, 광고까지 본 이용자를 막아 세우는 손해가 크다.
 * 대신 조용히 넘어가지 않고 알린다. Supabase가 통째로 없는 지역 개발도 이 길로 지나간다.
 */
export async function consumeUnlockTicket(
  request: NextRequest,
  ticket: string | null | undefined,
): Promise<TicketVerdict> {
  const supabase = getSupabaseAdminClient();
  const visitorHash = getDailyVisitorHash(request);
  if (!supabase || !visitorHash) return "ok";

  /**
   * 표가 없다. 여기에는 **성격이 다른 둘**이 겹쳐 있다.
   *
   *   1. 관문을 건너뛴 요청 — 막아야 한다
   *   2. **발급이 실패해 화면이 표를 못 받은 것** — 막으면 안 된다
   *
   * 2번은 우리 잘못이다. `issueUnlockTicket`은 RPC가 실패하면 `ticket: null`을 돌려주면서
   * 「관문이 통째로 열린 채로 돈다」고 적어 두었는데, 여기서 `missing`으로 막아 버리면
   * **광고를 끝까지 본 이용자가 후보를 못 연다.** 두 주석이 같은 태도를 말하면서 코드는
   * 반대로 가던 자리다(2026-08-18에 Preview 실측으로 드러났다).
   *
   * 그래서 **짐작하지 않고 물어본다.** 같은 RPC를 아무 표로 한 번 부른다 — 살아 있으면
   * 「그런 표 없음」(`unknown`)을 돌려주고, 죽어 있으면 오류가 난다. 죽어 있으면 발급도
   * 실패했을 것이므로 통과시킨다. 살아 있는데 표가 없으면 그건 진짜 건너뛴 요청이다.
   *
   * 없는 표로 부르므로 **아무것도 소비하지 않는다.** 비용은 표 없는 요청에만 붙는다.
   */
  if (!ticket) {
    const probe = await supabase.rpc("consume_unlock_ticket", {
      p_ticket_hash: hashTicket(randomBytes(32).toString("base64url")),
      p_visitor_hash: visitorHash,
    });
    if (probe.error) {
      notifyOps(
        "unlock-ticket-unavailable",
        "표를 발급하지도 확인하지도 못해 후보 열기를 통과시키고 있습니다.",
        { reason: probe.error.message },
        "warn",
      );
      return "ok";
    }
    return "missing";
  }

  const { data, error } = await supabase.rpc("consume_unlock_ticket", {
    p_ticket_hash: hashTicket(ticket),
    p_visitor_hash: visitorHash,
  });

  if (error) {
    notifyOps(
      "unlock-ticket-unavailable",
      "후보 열기 관문 표를 확인하지 못해 통과시키고 있습니다.",
      { reason: error.message },
      "warn",
    );
    return "ok";
  }

  return data === "ok" || data === "early" || data === "expired" || data === "unknown"
    ? (data as TicketVerdict)
    : "unknown";
}
