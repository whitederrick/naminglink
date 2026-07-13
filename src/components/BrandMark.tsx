import Image from "next/image";

const logoImageSrc = "/images/logo.png?v=ink-nameplate-20260710";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/25 bg-black/20 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm ${className}`}
    >
      <Image
        src={logoImageSrc}
        alt=""
        width={56}
        height={56}
        unoptimized
        className="h-full w-full scale-[1.52] object-cover grayscale invert contrast-125 opacity-90 mix-blend-screen"
        sizes="56px"
      />
    </span>
  );
}
