"use client";

import { useState } from "react";

import {
  emptyPerson,
  PersonFields,
  toPersonInput,
  type PersonDraft,
} from "@/components/PersonFields";
import { localePath } from "@/lib/locale-path";
import {
  affinityInputSchema,
  encodeAffinityInput,
  type AffinityInput,
} from "@/lib/affinity-input";
import { adGatesEnabled } from "@/lib/ads";
import { trackAnalytics } from "@/lib/analytics-client";
import { useAdGatedSubmit } from "@/lib/use-ad-gated-submit";
import type { Dictionary, Locale } from "@/lib/i18n";

export function AffinityForm({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const t = dictionary.affinity;
  const [me, setMe] = useState<PersonDraft>(emptyPerson);
  const [seeking, setSeeking] = useState<"male" | "female" | "unspecified">(
    "unspecified",
  );
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  // bfcache 복원 시 제출 잠금 풀기, 이전 프래그먼트 지우기, 이동 —
  // CompatibilityForm.tsx와 같은 배선이라 훅으로 뽑았다(use-ad-gated-submit.ts).
  const { goto } = useAdGatedSubmit(setSubmitting);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const input = buildInput(me, seeking);
    if (!input) {
      setError(dictionary.form.errorInvalidDate);
      return;
    }

    setSubmitting(true);
    // 분석 시작. 궁합과 같은 방식이다 — **보내 놓고 이동 직전에 기다린다**(`analytics-client`).
    const started = trackAnalytics({ eventType: "ANALYSIS_STARTED", serviceType: "AFFINITY_MATCH", locale });

    // 궁합과 같은 이유로 프래그먼트에 싣고 location.assign으로 넘긴다(주소가 확정된 뒤에
    // 결과 화면의 스크립트가 돈다). 자세한 사연은 CompatibilityForm 주석에 있다.
    const target = `${localePath("/affinity/result", locale)}#${encodeAffinityInput(input)}`;
    // **광고 관문은 여기 없다.** 결과 화면(`AffinityResultView`의 `ResultEntryGate`)이 맡는다 —
    // 입력 화면에서는 오퍼월 유무를 잴 수 없어 한 번의 이용에 광고가 둘이 될 수 있다.
    await goto(target, started);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <PersonFields
        legend={t.meLegend}
        dictionary={dictionary}
        locale={locale}
        value={me}
        onChange={setMe}
        genderHint={t.genderHint}
      />

      <fieldset className="rounded-2xl border border-line/70 bg-surface/70 p-5 shadow-sm backdrop-blur-md">
        <legend className="px-2 text-sm font-semibold text-brand-plum">
          {t.seekingLabel}
        </legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {(["male", "female", "unspecified"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSeeking(option)}
              aria-pressed={seeking === option}
              className={
                seeking === option
                  ? "rounded-full bg-brand-plum px-4 py-1.5 text-sm text-white"
                  : "rounded-full border border-line/70 bg-surface/45 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
              }
            >
              {option === "male"
                ? dictionary.form.male
                : option === "female"
                  ? dictionary.form.female
                  : t.seekingAny}
            </button>
          ))}
        </div>
        <span className="break-keep-all mt-2 block text-xs text-muted">
          {t.seekingHint}
        </span>
      </fieldset>

      {error ? (
        <p role="alert" className="break-keep-all text-sm text-brand-plum">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-brand-plum px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting
          ? t.submitting
          : /* 관문이 꺼져 있으면(심사 모드) 광고 얘기를 하지 않는다. 광고를 안 보여 주는데
               "광고 확인 후"라고 적으면 없는 광고를 예고하는 것이 된다.
               운영 모드(`adGatesEnabled`)면 결과 화면의 관문과 문구가 함께 켜진다. */
            adGatesEnabled
            ? t.submit
            : t.submitNoAd}
      </button>
    </form>
  );
}

function buildInput(
  draft: PersonDraft,
  seeking: "male" | "female" | "unspecified",
): AffinityInput | null {
  const me = toPersonInput(draft);
  if (!me) return null;

  // 넘기기 전에 스키마로 확인한다. 폼과 스키마가 어긋나면 여기서 잡히고, 통과한 값에는
  // 스키마의 기본값이 적용돼 있어 인코딩·디코딩 결과가 같아진다.
  const parsed = affinityInputSchema.safeParse({
    me,
    seeking: seeking === "unspecified" ? null : seeking,
  });
  return parsed.success ? parsed.data : null;
}
