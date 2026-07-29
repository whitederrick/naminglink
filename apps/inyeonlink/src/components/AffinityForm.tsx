"use client";

import { useEffect, useState } from "react";

import {
  emptyPerson,
  PersonFields,
  toPersonInput,
  type PersonDraft,
} from "@/components/PersonFields";
import {
  affinityInputSchema,
  encodeAffinityInput,
  type AffinityInput,
} from "@/lib/affinity-input";
import { AdWatchOverlay } from "@/components/AdRewardGate";
import { adSlotFor } from "@/lib/ads";
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
  // 광고를 다 본 뒤 넘어갈 주소. null이면 아직 광고를 띄우지 않은 상태다.
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  // 뒤로 가기로 돌아오면(bfcache) 제출 버튼이 잠긴 채 되살아난다. 궁합 폼과 같은 처리다.
  useEffect(() => {
    const unlock = () => setSubmitting(false);
    window.addEventListener("pageshow", unlock);
    return () => window.removeEventListener("pageshow", unlock);
  }, []);

  // 이전 조회의 프래그먼트가 주소에 남아 있으면 지운다. 이 화면은 그 값이 필요 없고, 남겨
  // 두면 새 프래그먼트가 뒤에 덧붙어 `#앞것#뒷것`이 된다.
  useEffect(() => {
    if (!window.location.hash) return;
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }, []);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const input = buildInput(me, seeking);
    if (!input) {
      setError(dictionary.form.errorInvalidDate);
      return;
    }

    setSubmitting(true);
    // 궁합과 같은 이유로 프래그먼트에 싣고 location.assign으로 넘긴다(주소가 확정된 뒤에
    // 결과 화면의 스크립트가 돈다). 자세한 사연은 CompatibilityForm 주석에 있다.
    // 제출을 누르면 **여기서 광고를 띄우고** 끝난 뒤 결과로 넘어간다. 예전에는 결과 화면에
    // 게이트를 세웠는데, 그러면 버튼을 누른 사람이 결과 페이지에서 한 번 더 눌러야 했다.
    // 광고를 시작하는 것이 이 버튼이므로 버튼 문구도 그 사실을 말한다.
    // 슬롯이 없으면(지금처럼 퍼블리셔 ID 미등록) 광고 없이 그대로 넘어간다.
    const target = `/affinity/result?lang=${locale}#${encodeAffinityInput(input)}`;
    if (adSlotFor("analyzing")) {
      setPendingTarget(target);
      return;
    }
    window.location.assign(target);
  }

  if (pendingTarget) {
    return (
      <AdWatchOverlay
        dictionary={dictionary}
        locale={locale}
        onDone={() => window.location.assign(pendingTarget)}
      />
    );
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
        {submitting ? t.submitting : t.submit}
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
