import Image from "next/image";

/**
 * **쿼리(`?v=…`)를 붙이지 않는다.** 예전에는 캐시 무효화용으로 `?v=rendered-mark-20260714`가
 * 붙어 있었는데, 그 형태를 Next 이미지 최적화가 처리하지 못해 `unoptimized`를 달아야 했고
 * 그 결과 1024×1024 원본 964KB가 56px 자리에 그대로 내려갔다(랜딩 첫 화면 무게의 절반).
 *
 * 로고를 실제로 교체할 때는 쿼리가 아니라 **파일명을 바꾼다.** 최적화를 거치면 브라우저가 보는
 * 주소가 `/_next/image?url=…&w=…&q=…`라 원본 경로에 붙인 쿼리로는 어차피 갱신을 강제할 수 없다.
 */
/**
 * **원본이 아니라 256px 사본을 쓴다.**
 *
 * 원본은 1254×1254 · 2.5MB다. 화면은 next/image가 줄여 내보내니 겉으로는 티가 안 나지만,
 * PDF는 원본을 base64로 그대로 심으므로 **문서 한 건이 2.5MB 무거워지고**, OG 표지도 23장을
 * 구울 때마다 그 원본을 다시 읽는다. 이 자리에서 실제로 필요한 것은 최대 116px이다.
 *
 * 사본은 `-256.png`이고 원본은 보관용으로 남긴다. 로고를 바꾸면 **둘 다** 새로 만들 것.
 */
const logoImageSrc = "/images/naminglink-circle-logo-256.png";

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
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${className}`}
    >
      {/* 최적화를 켜 둔다(`unoptimized` 없음). 원본이 1024×1024 PNG 964KB인데 이 자리는 56px라
          그대로 내려보내면 랜딩 첫 화면 1.92MB 중 절반이 이 파일 하나가 된다.

          **`src`에 쿼리를 다시 붙이지 말 것.** 쿼리가 붙어 있으면 최적화 경로가 처리하지 못해
          랜딩이 500으로 죽는다(2026-07-30에 실제로 그렇게 됐다). 그리고 그 사고는 `next build`로
          안 잡힌다 — 빌드는 통과하고 랜딩이 동적 렌더라 배포 후 실제 요청에서만 드러난다.
          이 컴포넌트를 손대면 **화면을 실제로 열어 확인할 것.** */}
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
