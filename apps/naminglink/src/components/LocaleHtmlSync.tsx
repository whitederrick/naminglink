"use client";

import { useEffect } from "react";

import { isLocaleCode } from "@/lib/locale-codes";

// 주소의 로케일과 <html lang>·<html dir>을 맞춘다.
//
// 서버가 이미 정확한 값을 넣는다 — 미들웨어가 경로의 로케일을 `x-locale` 헤더로 넘기고 루트
// 레이아웃이 그것을 읽는다. 이 컴포넌트는 **클라이언트 라우팅으로 언어를 바꿨을 때**를 위한
// 보정이다: <Link>로 `/ko/…`에서 `/ja/…`로 옮기면 문서가 다시 요청되지 않아 서버가 넣어 둔
// lang이 그대로 남는다.
//
// 예전에는 `?lang=`을 봤는데, 언어판이 경로로 바뀌면서 그 값이 주소에서 사라졌다.
// 로케일이 없는 주소(x-default)에서는 서버가 헤더로 정한 값을 그대로 둔다.
export function LocaleHtmlSync() {
  useEffect(() => {
    const first = window.location.pathname.split("/")[1];
    if (!isLocaleCode(first)) return;
    const root = document.documentElement;
    if (root.lang !== first) root.lang = first;
    const dir = first === "ar" ? "rtl" : "ltr";
    if (root.dir !== dir) root.dir = dir;
  });
  return null;
}
