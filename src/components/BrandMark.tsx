type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#14221b] shadow-sm ring-1 ring-white/60 ${className}`}
    >
      <svg
        className="h-7 w-7"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 29V11l18 18V11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.4"
        />
        <path
          d="M8.5 23.5c6.2-6.6 18.4-7.4 23-1.4"
          stroke="#168f7d"
          strokeLinecap="round"
          strokeWidth="2.6"
        />
        <circle cx="11" cy="29" r="2.7" fill="currentColor" />
        <circle cx="29" cy="11" r="2.7" fill="#168f7d" />
      </svg>
    </span>
  );
}
