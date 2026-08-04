/**
 * 문구의 `**…**`만 굵게 만든다. 마크다운 전체를 지원할 이유는 없다 — 문구는 사람이 직접
 * 쓰므로 강조 하나면 충분하다.
 *
 * 사전 문구에 이 표기가 들어 있는데 화면이 처리하지 않으면 별표가 그대로 보인다. 결과 화면들이
 * 같은 사전을 나눠 쓰므로 처리도 한 곳에 둔다.
 */
export function emphasize(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}
