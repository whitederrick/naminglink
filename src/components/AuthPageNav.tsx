"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { getAuthCopy } from "@/lib/i18n-auth";

// 결과 페이지 헤더와 같은 버튼 스타일로 로그인·계정 화면의 이동 UX를 통일한다.
export function AuthPageNav({ locale }: { locale?: string }) {
  const router = useRouter();
  const copy = getAuthCopy(locale);
  const homeHref = locale && locale !== "ko" ? `/?lang=${locale}` : "/";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push(homeHref);
          }
        }}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
      >
        <ArrowLeft aria-hidden="true" size={17} />
        {copy.back}
      </button>
      <Link
        href={homeHref}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm"
      >
        <Home aria-hidden="true" size={17} />
        {copy.home}
      </Link>
    </div>
  );
}
