"use client";

import { useEffect } from "react";

import { isLocale, isRtlLocale } from "@/lib/i18n";

// 루트 레이아웃은 IP·Accept-Language로 <html lang>·<html dir>을 정하지만 searchParams를 받지
// 못해 ?lang= 수동 전환은 반영하지 못한다. 이 컴포넌트가 URL의 ?lang=만 보고 보정한다.
// ?lang=이 없으면 서버가 정한 값을 그대로 둔다.
export function LocaleHtmlSync() {
  useEffect(() => {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (!isLocale(lang)) return;
    const root = document.documentElement;
    if (root.lang !== lang) root.lang = lang;
    const dir = isRtlLocale(lang) ? "rtl" : "ltr";
    if (root.dir !== dir) root.dir = dir;
  }, []);
  return null;
}
