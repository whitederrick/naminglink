import Image from "next/image";

const logoImageSrc = "/images/logo-current.png?v=rendered-mark-20260714";

type BrandMarkProps = {
  className?: string;
  /** 한 변의 픽셀 크기. 랜딩은 기본값 56, 운영자 콘솔 사이드바처럼 좁은 자리는 줄여 쓴다. */
  size?: number;
};

// 크기는 Tailwind 클래스가 아니라 인라인 스타일로 준다. 클래스로 h-14를 덮어쓰려 하면
// 우선순위가 스타일시트 순서에 달려 있어 화면마다 다르게 나올 수 있다.
export function BrandMark({ className = "", size = 56 }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${className}`}
    >
      <Image
        src={logoImageSrc}
        alt=""
        width={size}
        height={size}
        unoptimized
        className="h-full w-full object-cover"
        sizes={`${size}px`}
      />
    </span>
  );
}
