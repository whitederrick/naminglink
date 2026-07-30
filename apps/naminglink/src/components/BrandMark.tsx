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
      {/* **`unoptimized`를 붙이지 말 것.** 원본은 1024×1024 PNG 964KB인데 이 자리는 56px다.
          그대로 내려보내면 **랜딩 첫 화면 무게 1.92MB 중 절반이 로고 하나**가 된다(실측).
          최적화를 켜면 Next가 자리 크기에 맞는 webp로 줄여 준다. 저장소가 분리되기 전부터
          붙어 있던 속성이고 이유가 기록돼 있지 않았다. */}
      <Image
        src={logoImageSrc}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-cover"
        sizes={`${size}px`}
      />
    </span>
  );
}
