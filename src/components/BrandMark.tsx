import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#181816] shadow-sm ring-1 ring-white/25 ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={56}
        height={56}
        className="h-full w-full scale-125 object-cover"
        sizes="56px"
      />
    </span>
  );
}
