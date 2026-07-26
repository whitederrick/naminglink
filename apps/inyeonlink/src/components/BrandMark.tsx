/**
 * 인연링크 심볼 — 맞물린 두 고리.
 *
 * 두 사람이 이어진다는 뜻이고, 브랜드명의 "link"와도 겹친다. naminglink의 마크와 같은
 * 크기·선 굵기를 써서 형제 서비스로 읽히게 한다.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-11 items-center justify-center rounded-lg border border-white/30 bg-white/12 backdrop-blur ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="text-white"
      >
        <circle cx="10" cy="13" r="6.2" />
        <circle cx="16" cy="13" r="6.2" />
      </svg>
    </span>
  );
}
