/**
 * 인연링크 심볼 — 맞물린 두 고리.
 *
 * 두 사람이 이어진다는 뜻이고, 브랜드명의 "link"와도 겹친다. naminglink의 마크와 같은
 * 크기·선 굵기를 써서 형제 서비스로 읽히게 한다.
 */
export function BrandMark({
  className = "",
  compact = false,
  onLight = false,
}: {
  className?: string;
  compact?: boolean;
  /** 밝은 배경 위에 놓을 때. 기본값은 히어로 같은 어두운 배경 기준이다. */
  onLight?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center rounded-lg border ${
        onLight ? "border-line bg-surface" : "border-white/30 bg-white/12 backdrop-blur"
      } ${
        compact ? "size-8" : "size-11"
      } ${className}`}
    >
      <svg
        width={compact ? 20 : 28}
        height={compact ? 20 : 28}
        viewBox="0 0 64 64"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M32 8 49 25 32 42 15 25 32 8Z"
          stroke="#e2b7c6"
          strokeWidth="7"
        />
        <path
          d="M32 22 49 39 32 56 15 39 32 22Z"
          stroke="#b9c9be"
          strokeWidth="7"
        />
        <path d="m32 27 5 5-5 5-5-5 5-5Z" fill="#d9a079" />
      </svg>
    </span>
  );
}
