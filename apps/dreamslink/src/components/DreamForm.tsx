"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { DREAM_MOODS, DREAM_TEXT_MAX, encodeDreamInput, type DreamMood } from "@/lib/dream-input";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { trackAnalytics } from "@/lib/analytics-client";

/**
 * 꿈 입력 폼.
 *
 * **입력은 주소의 프래그먼트(#)로만 넘긴다.** 서버로 보내지 않으므로 접속 로그에도 남지 않는다.
 * 이 서비스가 받는 값 중 가장 사적인 것이라 미저장 원칙이 여기서 가장 중요하다.
 */
export function DreamForm({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const router = useRouter();
  const t = dictionary.dream;
  const [text, setText] = useState("");
  const [mood, setMood] = useState<DreamMood | null>(null);
  const [recurring, setRecurring] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit() {
    const trimmed = text.trim();
    if (trimmed.length < 2) {
      setError(t.errorEmpty);
      return;
    }
    setError("");
    setBusy(true);
    // **이동 직전에 기다린다.** 집계는 화면이 바뀌면 날아간다 — 인연링크에서 시작 이벤트가
    // 통째로 유실된 적이 있다(`analytics-lost-on-navigation`).
    await trackAnalytics({ eventType: "ANALYSIS_STARTED", serviceType: "DREAM_READING", locale });
    const fragment = encodeDreamInput({ text: trimmed, mood, recurring });
    router.push(`${localePath("/dream/result", locale)}#${fragment}`);
  }

  return (
    // `mt-10`은 사주링크 `SajuForm`과 같은 값이다. 이 여백이 없으면 바로 위의 안내 링크
    // ("무엇을 근거로 풀이하는지 보기")가 카드 테두리에 붙어 제목 묶음의 일부처럼 읽힌다.
    <section className="mt-10 rounded-2xl border border-line bg-surface p-5 shadow-sm">
      <label className="block text-sm font-semibold" htmlFor="dream-text">
        {t.textLabel}
      </label>
      <textarea
        id="dream-text"
        value={text}
        onChange={(event) => setText(event.target.value.slice(0, DREAM_TEXT_MAX))}
        placeholder={t.textPlaceholder}
        rows={6}
        className="mt-2 w-full resize-y rounded-xl border border-line bg-background p-3 text-sm leading-6"
      />
      <p className="mt-1 text-right text-xs text-muted">
        {text.length} / {DREAM_TEXT_MAX}
      </p>

      <p className="mt-4 text-sm font-semibold">{t.moodLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {DREAM_MOODS.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setMood(mood === value ? null : value)}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              mood === value
                ? "border-foreground bg-foreground text-background"
                : "border-line text-muted hover:border-foreground hover:text-foreground"
            }`}
          >
            {t.moods[value]}
          </button>
        ))}
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={recurring}
          onChange={(event) => setRecurring(event.target.checked)}
          className="size-4"
        />
        {t.recurringLabel}
      </label>

      <button
        type="button"
        onClick={() => void submit()}
        disabled={busy}
        className="mt-5 w-full rounded-full bg-foreground px-8 py-3.5 font-semibold text-background transition hover:opacity-90 disabled:opacity-60"
      >
        {busy ? t.submitting : t.submit}
      </button>

      {error ? (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      ) : null}

      <p className="mt-4 text-xs leading-5 text-muted">{t.disclaimer}</p>
    </section>
  );
}
