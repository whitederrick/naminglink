"use client";

import { useState } from "react";

import { AdWatchOverlay } from "@/components/AdWatchOverlay";
import { submitAdGateEnabled } from "@/lib/ads";
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
  const t = dictionary.dream;
  const [text, setText] = useState("");
  const [mood, setMood] = useState<DreamMood | null>(null);
  const [recurring, setRecurring] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  // 광고를 다 본 뒤 넘어갈 주소. null이면 아직 광고를 띄우지 않은 상태다(형제 폼과 같은 처리).
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  async function submit() {
    const trimmed = text.trim();
    if (trimmed.length < 2) {
      setError(t.errorEmpty);
      return;
    }
    setError("");
    setBusy(true);
    // 분석 시작. **보내 놓고 이동 직전에 기다린다**(`analytics-client`) — 집계는 화면이
    // 바뀌면 날아간다(`analytics-lost-on-navigation`).
    const started = trackAnalytics({ eventType: "ANALYSIS_STARTED", serviceType: "DREAM_READING", locale });
    const fragment = encodeDreamInput({ text: trimmed, mood, recurring });
    const target = `${localePath("/dream/result", locale)}#${fragment}`;

    // **router.push를 쓰지 않는다.** 두 번째 조회에서 주소에 프래그먼트가 두 번 붙는
    // (`...#첫번째#두번째`) 사고가 형제 폼들에서 있었다(CompatibilityForm.tsx 주석 참고).
    // location.assign은 넘긴 문자열이 그대로 주소가 되므로 프래그먼트가 하나임이 보장된다.
    //
    // 제출을 누르면 여기서 광고를 띄우고 끝난 뒤 결과로 넘어간다(형제 세 앱과 같은 흐름).
    // 광고 단위가 없으면(2026-08-26 기준 — 애드센스 심사 대기 중) `submitAdGateEnabled`가
    // 거짓이라 관문 없이 그대로 넘어간다.
    if (submitAdGateEnabled) {
      // 광고 화면이 떠 있는 동안 전송이 끝난다. 여기서 기다리면 광고가 그만큼 늦게 뜬다.
      setPendingTarget(target);
      return;
    }
    // **문서를 갈아 끼우기 전에 기다린다.** 안 기다리면 시작 기록이 그대로 날아간다.
    await started;
    window.location.assign(target);
  }

  if (pendingTarget) {
    return (
      <AdWatchOverlay
        dictionary={dictionary}
        onDone={() => window.location.assign(pendingTarget)}
      />
    );
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

      {/* 형제 폼들은 관문 on/off에 따라 `submit`/`submitNoAd` 두 문구를 쓴다("광고 확인 후
          보기" vs "보기") — 관문이 꺼져 있는데 광고를 예고하면 안 되기 때문이다. 여기는
          아직 `submitNoAd`가 사전에 없어 `submit` 한 벌만 쓴다. 지금은 `submitAdGateEnabled`가
          거짓이라(애드센스 심사 대기) 정확하지만, GAM을 켜는 날 23로케일 `submitNoAd`를
          더하고 형제 폼과 같은 분기로 바꿀 것. */}
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
