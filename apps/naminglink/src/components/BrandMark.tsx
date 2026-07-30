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
      {/* **`unoptimized`를 함부로 떼지 말 것 — 떼 봤다가 랜딩이 500으로 죽었다(2026-07-30).**
          `src`에 쿼리(`?v=…`)가 붙어 있어 최적화 경로가 이 이미지를 처리하지 못한다.
          `next build`는 통과하므로 빌드로는 안 잡히고, 랜딩이 동적 렌더라 배포 후에야 드러난다.

          원본이 1024×1024 PNG 964KB인데 이 자리는 56px라 최적화 이득이 크다(랜딩 첫 화면
          1.92MB 중 절반이 이 파일이다). 떼려면 **쿼리를 먼저 없애고 로컬에서 실제로 열어 본 뒤**
          올릴 것. 빌드 성공만 보고 배포하면 같은 일이 반복된다. */}
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
