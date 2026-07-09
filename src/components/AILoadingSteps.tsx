"use client";

import { useEffect, useState } from "react";

const steps = [
  "입력값의 의미를 정리하고 있습니다.",
  "발음과 문화적 뉘앙스를 대조하고 있습니다.",
  "이름 후보의 스토리를 다듬고 있습니다.",
  "JSON 결과를 검증하고 있습니다.",
];

export function AILoadingSteps() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % steps.length);
    }, 1400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-lg border border-line bg-surface p-4">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-brand-teal" />
        <p className="text-sm font-medium">{steps[index]}</p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-strong">
        <div className="h-full w-2/3 animate-pulse rounded-full bg-brand-teal" />
      </div>
    </div>
  );
}
