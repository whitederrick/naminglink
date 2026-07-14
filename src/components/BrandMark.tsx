import Image from "next/image";

const logoImageSrc = "/images/logo-current.png?v=rendered-mark-20260714";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${className}`}
    >
      <Image
        src={logoImageSrc}
        alt=""
        width={56}
        height={56}
        unoptimized
        className="h-full w-full object-cover"
        sizes="56px"
      />
    </span>
  );
}
