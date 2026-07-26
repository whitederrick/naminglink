"use client";

import { useEffect } from "react";

import { supportedLocales } from "@/lib/services";

// 루트 레이아웃은 IP·Accept-Language로 <html lang>·<html dir>을 정하지만, searchParams를 받지 못해
// ?lang= 수동 전환은 반영하지 못한다(미들웨어를 두면 엣지에서 매 요청 판정해야 해 과하다).
// 이 클라이언트 컴포넌트가 URL의 ?lang=만 보고 문서 언어·방향을 보정한다. ?lang=이 없으면 서버가
// 정한 값을 그대로 둔다. 자동 감지 사용자(대다수)는 서버 값이 이미 정확하다.
export function LocaleHtmlSync() {
  useEffect(() => {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (!lang || !(supportedLocales as readonly string[]).includes(lang)) return;
    const root = document.documentElement;
    if (root.lang !== lang) root.lang = lang;
    const dir = lang === "ar" ? "rtl" : "ltr";
    if (root.dir !== dir) root.dir = dir;
  }, []);
  return null;
}
