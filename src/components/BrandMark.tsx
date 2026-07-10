import Image from "next/image";

const logoImageSrc = "/images/logo.png?v=ink-nameplate-20260710";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-white/45 ${className}`}
    >
      <Image
        src={logoImageSrc}
        alt=""
        width={64}
        height={64}
        unoptimized
        className="h-full w-full scale-[1.28] object-cover"
        sizes="64px"
      />
    </span>
  );
}
