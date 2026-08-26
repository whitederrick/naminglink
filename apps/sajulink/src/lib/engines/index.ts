export * from "./types";
export type { PersonReading } from "./prepare";

/**
 * 결과 화면과 리포트에 "계산 기준"으로 찍히는 문자열이다. **이용자가 읽는 값**이라 서비스
 * 이름이 맞아야 한다 — 인연링크 이름이 사주링크 화면에 나가면 안 된다.
 *
 * 규칙 자체는 인연링크 v10을 그대로 물려받았고 한 사람 몫으로 쓸 뿐이라 계산은 바뀌지 않았다.
 * 그래서 번호는 v1에서 새로 시작한다. 점수 규칙을 고치는 날 이 번호를 올린다.
 */
export const ENGINE_VERSION = "sajulink-natal-v1";
