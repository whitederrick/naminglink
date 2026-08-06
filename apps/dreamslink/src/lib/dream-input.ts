import { z } from "zod";

/**
 * 꿈 입력.
 *
 * **저장하지 않는다.** 꿈 이야기는 이 서비스가 받는 값 중 가장 사적인 것이라, 인연·사주가
 * 지켜 온 미저장 원칙이 여기서는 더 중요하다. 입력은 주소의 프래그먼트(#)에만 실려 서버로
 * 가지 않고, 유료 발급 요청에만 본문으로 실린다. 주문 표에는 무엇을 꿨는지가 남지 않는다.
 *
 * **꿈일기는 만들지 않기로 했다**(2026-08-06 결정). 기간 리포트는 값이 크지만 이 원칙을 정면으로
 * 깨야 해서 뺐다.
 */

/** 꿈 이야기 길이 상한. 길수록 좋은 값이 아니고, 본문 크기 제한과도 맞물린다. */
export const DREAM_TEXT_MAX = 1000;

/**
 * 깨어났을 때의 기분. **해석의 근거가 아니라 색이다.**
 *
 * 같은 상징이라도 무섭게 꾼 꿈과 편하게 꾼 꿈은 사람에게 다르게 남는다. 다만 이 값으로 전통
 * 의미를 바꾸지는 않는다 — 사전이 정한 의미는 그대로 두고, 문장의 결만 맞춘다.
 */
export const DREAM_MOODS = ["good", "scary", "strange", "sad", "unsure"] as const;
export type DreamMood = (typeof DREAM_MOODS)[number];

export const dreamInputSchema = z.object({
  text: z.string().trim().min(2).max(DREAM_TEXT_MAX),
  mood: z.enum(DREAM_MOODS).nullable().default(null),
  /**
   * 같은 꿈을 반복해서 꾸는가. 화면에서 물어보는 한 칸이고, **기록해 두는 것이 아니다** —
   * 반복몽은 사람이 실제로 괴로워하는 자리라 해석의 결이 달라져야 한다.
   */
  recurring: z.boolean().optional(),
});

export type DreamInput = z.infer<typeof dreamInputSchema>;

/**
 * 프래그먼트에 실을 문자열로 만든다. 암호화가 아니라 URL 안전 인코딩일 뿐이다.
 *
 * **형제 앱과 같은 방식이어야 한다.** 한쪽만 인코딩을 바꾸면 화면끼리 서로의 링크를 못 읽게
 * 되고, 그 어긋남은 사용자에게 "결과를 읽을 수 없습니다"로만 보인다.
 */
export function encodePayload(value: unknown) {
  const json = JSON.stringify(value);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodePayload<T>(
  value: string,
  schema: { safeParse: (input: unknown) => { success: boolean; data?: T } },
): T | null {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    const result = schema.safeParse(parsed);
    return result.success ? (result.data as T) : null;
  } catch {
    return null;
  }
}

export function encodeDreamInput(input: DreamInput) {
  return encodePayload(input);
}

export function decodeDreamInput(value: string): DreamInput | null {
  return decodePayload(value, dreamInputSchema);
}
