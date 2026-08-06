import Image from "next/image";

/**
 * 드림링크 심볼.
 *
 * **쿼리(`?v=…`)를 붙이지 말 것.** Next 이미지 최적화가 쿼리 붙은 경로를 처리하지 못해
 * `unoptimized`를 달게 되고, 그러면 1254×1254 원본이 56px 자리에 그대로 내려간다(naminglink에서
 * 실제로 그랬고, 랜딩 첫 화면 무게의 절반이 로고 하나였다). 로고를 바꿀 때는 **파일명을 바꾼다.**
 *
 * ⚠️ **복제 원본의 파일명이 그대로 남아 있었다**(2026-08-06). `inyeonlink-circle-logo-256.png`를
 * 가리키고 있었는데 그 파일은 이 앱의 `public/`에 없다 — 모든 화면에서 로고가 404였다.
 * 이미지 경로는 tsc도 검사기도 보지 못하니 **파일이 실제로 있는지 눈으로 확인할 것.**
 */
const logoImageSrc = "/images/dreamslink-circle-logo-256.png";

export function BrandMark({
  className = "",
  compact = false,
  onLight = false,
}: {
  className?: string;
  compact?: boolean;
  /** 밝은 배경 위에 놓을 때. 기본값은 히어로 같은 어두운 배경 기준이다. */
  onLight?: boolean;
}) {
  void onLight;
  const size = compact ? 32 : 56;

  return (
    <span
      aria-hidden="true"
      // 로고가 그 자체로 완결된 원형 배지라 뒤에 테두리·배경을 두지 않는다. 예전 인라인
      // SVG는 그것이 있어야 형태가 잡혔지만, 지금은 사각 틀이 이중으로 겹쳐 보인다.
      // `onLight`는 더 이상 모양을 가르지 않으나, 부르는 쪽을 함께 고치지 않으려고 남겨 둔다.
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.28)] ${
        // 기본 56px은 naminglink BrandMark의 기본값(size=56)과 같다. 두 서비스의 헤더에서
        // 로고 자리와 그 옆 글자의 위치가 어긋나지 않게 하려면 이 값을 함께 바꿔야 한다.
        compact ? "size-8" : "size-14"
      } ${className}`}
    >
      {/* 최적화를 켜 둔다(`unoptimized` 없음). 원본이 1254×1254라 그대로 내려보내면 안 된다. */}
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
