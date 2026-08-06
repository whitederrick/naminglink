import { getDictionary, type Locale } from "@/lib/i18n";

/**
 * 미저장 안내와 면책 문구.
 *
 * 푸터가 아니라 **본문**에 둔다. 푸터의 작은 글씨는 읽히지 않는데, 이 서비스에서 "저장하지
 * 않는다"는 것은 각주가 아니라 서비스의 성격 자체이고, 면책 문구도 결과를 어떻게 받아들일지
 * 정하는 내용이라 결과를 보기 전후에 눈에 들어와야 한다.
 *
 * 배경 이미지가 깔린 화면에도 얹히므로 카드를 반투명으로 두고 흐림을 건다.
 */
export function PrivacyNotice({
  locale,
  tone = "onLight",
  className = "",
}: {
  locale: Locale;
  /** "onDark"는 히어로처럼 어두운 배경 위에 얹을 때. */
  tone?: "onLight" | "onDark";
  className?: string;
}) {
  const { landing } = getDictionary(locale);
  const onDark = tone === "onDark";

  return (
    <section
      className={`rounded-2xl border px-5 py-2.5 shadow-sm backdrop-blur ${
        onDark
          ? "border-white/20 bg-white/10 text-white/80"
          : "border-line/70 bg-surface/75 text-muted"
      } ${className}`}
    >
      <h2
        className={`break-keep-all text-base font-semibold ${
          onDark ? "text-white" : "text-brand-moonlit"
        }`}
      >
        {landing.privacyTitle}
      </h2>
      {/* 문구에 줄바꿈이 들어 있다. pre-line이 없으면 공백으로 접힌다. */}
      <p className="break-keep-all mt-1.5 max-w-3xl whitespace-pre-line text-sm leading-6">
        {landing.privacyBody}
      </p>
      {/* 구분선은 넣지 않는다 — 카드가 두 장 겹쳐 들어가는 자리라 선 하나가 세로 공간을
          그만큼 더 먹는다. 글자는 본래 크기(14px/24px) 그대로다. */}
      <p className="break-keep-all mt-2 text-sm leading-6">
        {landing.disclaimer}
      </p>
    </section>
  );
}
