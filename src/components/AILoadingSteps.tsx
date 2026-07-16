"use client";

import { useEffect, useState } from "react";

const generalSteps = [
  "입력값의 의미와 조건을 정리하고 있습니다.",
  "발음, 문화권, 사주 참고값을 대조하고 있습니다.",
  "이름 후보의 이야기와 배제 사유를 구성하고 있습니다.",
  "JSON 결과를 검증하고 화면에 맞게 정리하고 있습니다.",
];
const OFFICIAL_HANJA_ENTRY_TOTAL = 10_380;
function hanjaSteps(candidateCount?: number | null) {
  const databaseStep = candidateCount
    ? `${OFFICIAL_HANJA_ENTRY_TOTAL.toLocaleString("ko-KR")}\uac1c \uacf5\uc2dd \ud56d\ubaa9 \uc911 \uc785\ub825 \uc74c\uc808\uacfc \uc9c0\uc815 \uc74c\uac00\uac00 \ub9de\ub294 ${candidateCount.toLocaleString("ko-KR")}\uac1c \ud6c4\ubcf4\ub97c \ub300\uc870\ud569\ub2c8\ub2e4.`
    : `${OFFICIAL_HANJA_ENTRY_TOTAL.toLocaleString("ko-KR")}\uac1c \uacf5\uc2dd \uc778\uba85\uc6a9 \ud55c\uc790 \ud56d\ubaa9\uc5d0\uc11c \uc785\ub825 \uc74c\uc808\uacfc \uc9c0\uc815 \uc74c\uac00\uac00 \ub9de\ub294 \uae00\uc790\ub97c \ucc3e\uace0 \uc788\uc2b5\ub2c8\ub2e4.`;

  return [
    "\ubd80\ubaa8\ub2d8\uc758 \ubc14\ub78c\uc774 \uc624\ub798 \ub0a8\uc744 \uc774\ub984\uc744 \uc900\ube44\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
    "\uc785\ub825\ud55c \uc774\ub984\uc758 \ubaa8\ub4e0 \uc74c\uc808\uacfc \ub3cc\ub9bc\uc790 \uc704\uce58\ub97c \uc815\ud655\ud788 \ud655\uc778\ud569\ub2c8\ub2e4.",
    databaseStep,
    "\ub3cc\ub9bc\uc790 \ud55c\uc790\ub294 \ubc14\uafb8\uc9c0 \uc54a\uace0 \ub098\uba38\uc9c0 \uae00\uc790\uc758 \ub73b\uacfc \uc870\ud654\ub97c \uc0b4\ud54d\ub2c8\ub2e4.",
    "\uac01 \uae00\uc790\uc758 \uc790\uc758\uc640 \uc774\ub984 \uc804\uccb4\uc758 \uacb0\ud569 \uc758\ubbf8\ub97c \uc138\uc2ec\ud558\uac8c \uc77d\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
    "\ubd80\ub974\uae30 \uc88b\uace0 \uc124\uba85\ud558\uae30 \uc88b\uc740 \uc774\ub984\uc778\uc9c0 \uc2e4\uc0ac\uc6a9 \uad00\uc810\uc5d0\uc11c \uac80\ud1a0\ud569\ub2c8\ub2e4.",
    "\ubd80\ubaa8\ub2d8\uc758 \ubc14\ub78c\uacfc \uc774\ub984\uc774 \uc804\ud560 \ud488\uaca9\uc744 \ud6c4\ubcf4\ub9c8\ub2e4 \ube44\uad50\ud569\ub2c8\ub2e4.",
    "\uc624\ub798\ub3c4\ub85d \uc790\ub791\uc2a4\ub7fd\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud55c\uc790 \uc870\ud569\uc744 \uace0\ub974\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
    "\uadfc\uac70\uac00 \ubd84\uba85\ud55c \ud6c4\ubcf4\ub97c \ub9e4\uce6d\ub960 \uc21c\uc11c\ub85c \uc815\ub9ac\ud569\ub2c8\ub2e4.",
    "\uc815\uc131\uaecf \uace0\ub978 \uc774\ub984 \uc774\uc57c\uae30\uc640 \ubd84\uc11d \uacb0\uacfc\ub97c \uace7 \ubcf4\uc5ec\ub4dc\ub9bd\ub2c8\ub2e4.",
  ];
}

export function AILoadingSteps({ variant = "general", candidateCount }: { variant?: "general" | "hanja"; candidateCount?: number | null }) {
  const [index, setIndex] = useState(0);
  const activeSteps =
    variant === "hanja" ? hanjaSteps(candidateCount) : generalSteps;


  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => Math.min(current + 1, activeSteps.length - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [activeSteps.length]);

  return (
    <div className="rounded-lg border border-line bg-surface p-4">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-brand-teal" />
        <p className="text-sm font-medium">{activeSteps[index]}</p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-strong">
        <div
          className="h-full rounded-full bg-brand-teal transition-[width] duration-500"
          style={{ width: `${((index + 1) / activeSteps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
