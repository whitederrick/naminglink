import "server-only";

import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
  randomUUID,
} from "node:crypto";

import { adGatesEnabled } from "@/lib/ads";
import { sortCandidatesByRate } from "@/lib/candidate-order";
import type { LockedCandidate } from "@/lib/candidate-seal";
import { notifyOps } from "@/lib/ops-alert";

/**
 * 잠긴 후보를 서버 비밀키로 봉인해 내려보낸다.
 *
 * **왜 필요한가.** 예전에는 후보 전부가 평문으로 내려가고 잠금은 화면의 `index >= revealedCount`
 * 하나뿐이었다. 개발자도구를 열거나 `sessionStorage`를 덤프하면 광고도 결제도 없이 다 읽혔다.
 * 광고 자리와 유료 상품 둘 다 새는 구멍이다.
 *
 * **저장하지 않는다.** 이 서비스는 비회원 결과를 서버에 남기지 않는다는 원칙이 있어, 서버에
 * 무엇이 열렸는지 기록해 두는 방식(엔티틀먼트 테이블)을 쓸 수 없다. 그래서 잠긴 내용을 **암호문
 * 형태로 이용자에게 맡겨 두고**, 열 때 서버가 풀어 준다. 서버에는 키 말고 아무것도 남지 않는다.
 *
 * **후보 하나에 봉인 하나다.** 한 덩어리로 묶으면 한 번 풀 때 전부 열린다. "광고 1회 = 후보 1개"가
 * 성립하려면 봉인도 후보 단위여야 한다.
 */

const VERSION = "v1";

/**
 * 봉인문 유효기간.
 *
 * 결과는 `sessionStorage`에만 있어 탭을 닫으면 사라진다. 그보다 오래 살아 있을 이유가 없다.
 * 탭을 하루 넘게 열어 둔 이용자는 다시 만들어야 하는데, 그 편이 오래된 봉인문이 무한정
 * 유효한 것보다 낫다.
 */
const TTL_MS = 12 * 60 * 60 * 1000;

/**
 * 무료로 보여 주는 후보 수. 화면의 초기 공개 개수와 같은 값이다.
 *
 * **1을 지킨다** (2026-08-19). 관문을 입력 화면에서 결과 화면으로 옮기면서 0으로 내려 첫
 * 후보까지 잠글까 검토했는데, 그러면 오퍼월이 **안 도는** 방문에서 「아무 후보도 안 보이는
 * 결과 화면 + 광고 단추」가 된다 — 아래 심사 모드 주석이 걱정하는 바로 그 모양이고,
 * 2026-08-10 거절 사유와 맞닿아 있다.
 *
 * 오퍼월이 도는 방문에서는 오퍼월이 화면을 덮으므로 이 값과 무관하게 관문이 성립한다.
 * 즉 0으로 내려서 더 버는 것은 **오퍼월이 안 도는 방문뿐**인데, 그 대가로 승인 이틀째의
 * 애드센스를 건다. 값이 맞지 않는다.
 */
export const FREE_CANDIDATE_COUNT = 1;

type SealHeader = {
  /** 이 결과 한 벌의 식별자. 일괄 공개 주문이 다른 결과에 재사용되는 것을 막는 데 쓴다. */
  sid: string;
  /** 후보 배열에서의 자리. */
  i: number;
  /** 만료 시각(ms). */
  exp: number;
};

export class SealError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SealError";
  }
}

/**
 * 봉인 키.
 *
 * 길이·형식을 가리지 않고 받아 SHA-256으로 32바이트를 만든다. 운영자가 base64를 넣든 임의
 * 문자열을 넣든 동작하게 하려는 것이다 — 키 형식 때문에 배포가 깨지는 쪽이 더 위험하다.
 */
function sealKey() {
  const secret = process.env.RESULT_SEAL_SECRET?.trim();
  // 너무 짧은 값은 설정하다 만 것으로 본다. 그런 키로 봉인하면 봉인한 척만 하게 된다.
  if (!secret || secret.length < 16) return null;
  return createHash("sha256").update(secret).digest();
}

export function sealingConfigured() {
  return sealKey() !== null;
}

function encodeHeader(header: SealHeader) {
  return Buffer.from(JSON.stringify(header), "utf8").toString("base64url");
}

function sealOne(key: Buffer, header: SealHeader, candidate: unknown): LockedCandidate {
  const headerText = encodeHeader(header);
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  // 머리글을 AAD로 묶는다. 자리(i)나 만료(exp)를 바꿔치기하면 복호화가 실패한다.
  cipher.setAAD(Buffer.from(headerText, "utf8"));
  const ciphertext = Buffer.concat([
    cipher.update(Buffer.from(JSON.stringify(candidate), "utf8")),
    cipher.final(),
  ]);
  const seal = [
    VERSION,
    headerText,
    iv.toString("base64url"),
    cipher.getAuthTag().toString("base64url"),
    ciphertext.toString("base64url"),
  ].join(".");
  return { __locked: true, seal };
}

/**
 * 결과의 후보를 정렬하고, 무료분을 뺀 나머지를 봉인한다.
 *
 * **키가 없으면 잠긴 후보를 아예 내려보내지 않는다.** 평문으로 떨어뜨리는 폴백은 두지 않았다 —
 * 그 폴백은 "봉인이 꺼진 채 몇 달"이 되는 길이고, 이 저장소에는 조용한 플래그(`countReviewRequired`)가
 * 켜진 채 방치된 전례가 있다. 무료 후보는 그대로 나가므로 서비스는 살아 있고, 운영자에게는 알린다.
 */
export function sealCandidates(result: unknown, freeCount = FREE_CANDIDATE_COUNT): unknown {
  if (!result || typeof result !== "object" || Array.isArray(result)) return result;
  const record = result as Record<string, unknown>;
  if (!Array.isArray(record.candidates)) return result;

  const ordered = sortCandidatesByRate(record.candidates);

  /**
   * **심사 모드에서는 봉인하지 않는다** (2026-08-11).
   *
   * 잠긴 후보를 여는 길은 둘뿐이다 — 광고를 보거나(관문) 결제하거나. 심사 기간에는 관문이
   * 없고 결제도 열려 있지 않으므로, 봉인을 그대로 두면 **아무도 열 수 없는 잠금**만 화면에
   * 남는다. 잠긴 자리와 「광고 보고 열기」 단추를 함께 보여 주는 것이 이번 거절 사유와 맞닿아
   * 있기도 하다.
   *
   * **화면은 손대지 않는다.** `CandidateUnlockPanel`은 잠긴 후보가 없으면 스스로 사라지고
   * (`remainingCount === 0`), 23개 로케일 문구도 그대로 잠든다. 여는 판정은 서버에 있으므로
   * 여기 한 곳이 유일한 스위치다 — 승인 뒤 `NEXT_PUBLIC_AD_MODE=live`면 그대로 돌아온다.
   *
   * 일괄 공개·프리미엄 상품은 **영향이 없다.** 그쪽은 결제 증명을 보는 다른 라우트다
   * (`api/candidates/unseal-all`·`api/premium-reports/*`).
   */
  if (!adGatesEnabled) return { ...record, candidates: ordered };

  if (ordered.length <= freeCount) return { ...record, candidates: ordered };

  const key = sealKey();
  if (!key) {
    notifyOps(
      "result-seal-unconfigured",
      "RESULT_SEAL_SECRET이 없어 잠긴 후보를 내려보내지 않고 있습니다. 무료 후보만 표시됩니다.",
      { droppedCandidates: ordered.length - freeCount },
      "critical",
    );
    return { ...record, candidates: ordered.slice(0, freeCount) };
  }

  const sid = randomUUID();
  const exp = Date.now() + TTL_MS;
  return {
    ...record,
    candidates: ordered.map((candidate, index) =>
      index < freeCount ? candidate : sealOne(key, { sid, i: index, exp }, candidate),
    ),
  };
}

/** 봉인문 하나를 푼다. 실패는 전부 `SealError`로 모은다(사유를 이용자에게 흘리지 않는다). */
export function openSeal(seal: string): { index: number; sid: string; candidate: unknown } {
  const key = sealKey();
  if (!key) throw new SealError("후보 열기가 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.");

  const parts = seal.split(".");
  if (parts.length !== 5 || parts[0] !== VERSION) {
    throw new SealError("후보 정보를 열 수 없습니다. 결과를 다시 만들어 주세요.");
  }
  const [, headerText, ivText, tagText, ciphertextText] = parts;

  let header: SealHeader;
  try {
    header = JSON.parse(Buffer.from(headerText, "base64url").toString("utf8")) as SealHeader;
  } catch {
    throw new SealError("후보 정보를 열 수 없습니다. 결과를 다시 만들어 주세요.");
  }
  if (
    typeof header?.sid !== "string" ||
    typeof header?.i !== "number" ||
    typeof header?.exp !== "number"
  ) {
    throw new SealError("후보 정보를 열 수 없습니다. 결과를 다시 만들어 주세요.");
  }
  // 만료는 다른 실패와 구분해 알린다. 이용자가 할 일이 다르다(다시 만들면 된다).
  if (header.exp < Date.now()) {
    throw new SealError("결과가 만료되었습니다. 결과를 다시 만들어 주세요.");
  }

  try {
    const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(ivText, "base64url"));
    decipher.setAAD(Buffer.from(headerText, "utf8"));
    decipher.setAuthTag(Buffer.from(tagText, "base64url"));
    const plain = Buffer.concat([
      decipher.update(Buffer.from(ciphertextText, "base64url")),
      decipher.final(),
    ]);
    return { index: header.i, sid: header.sid, candidate: JSON.parse(plain.toString("utf8")) };
  } catch {
    throw new SealError("후보 정보를 열 수 없습니다. 결과를 다시 만들어 주세요.");
  }
}

/**
 * 결과 안의 봉인된 자리를 전부 풀어 원래 모양으로 되돌린다.
 *
 * **결제·운영자 경로 전용이다.** 화면이 보낸 결과를 서버가 그대로 쓰는 자리(유료 리포트 주문,
 * 운영자 테스트)에서는 잠긴 후보가 봉인문인 채로 들어오면 그 후보가 상품에서 통째로 빠진다.
 * 그 자리에서만 부른다 — 이용자에게 되돌려 보내는 응답에는 쓰지 않는다.
 */
export function openSealedResult(result: unknown): unknown {
  if (!result || typeof result !== "object" || Array.isArray(result)) return result;
  const record = result as Record<string, unknown>;
  if (!Array.isArray(record.candidates)) return result;

  return {
    ...record,
    candidates: record.candidates.map((candidate) => {
      if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return candidate;
      const entry = candidate as Record<string, unknown>;
      if (entry.__locked !== true || typeof entry.seal !== "string") return candidate;
      return openSeal(entry.seal).candidate;
    }),
  };
}

/**
 * 봉인문 여러 개를 푼다(일괄 공개).
 *
 * **한 벌에서 온 것인지 확인한다.** 서로 다른 결과의 봉인문을 섞어 보내면 주문 하나로 여러 결과를
 * 여는 셈이 된다. 같은 `sid`가 아니면 거절한다.
 */
export function openSeals(seals: string[]) {
  const opened = seals.map((seal) => openSeal(seal));
  const sid = opened[0]?.sid;
  if (opened.some((entry) => entry.sid !== sid)) {
    throw new SealError("후보 정보가 서로 다른 결과의 것입니다.");
  }
  return { sid: sid ?? null, opened };
}
