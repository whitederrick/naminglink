"use client";

import { useEffect, useState } from "react";

import {
  emptyPerson,
  PersonFields,
  toPersonInput,
  type PersonDraft,
} from "@/components/PersonFields";
import { AdWatchOverlay } from "@/components/AdWatchOverlay";
import { submitAdGateEnabled } from "@/lib/ads";
import { trackAnalytics } from "@/lib/analytics-client";
import { localePath } from "@/lib/locale-path";
import type { Dictionary, Locale } from "@/lib/i18n";
import { encodeSajuInput, sajuInputSchema, type SajuInput } from "@/lib/saju-input";

/**
 * 사주 입력 — **한 사람**만 받는다.
 *
 * 인연링크의 궁합 폼에서 사람 하나를 덜어 낸 것이고, 제출 이후의 흐름(프래그먼트에 실어
 * 결과 화면으로 전체 이동)은 그대로다. 그 흐름을 바꾸지 않은 이유가 각각 있다 —
 * 아래 주석과 `lib/saju-input.ts`에 적어 두었다.
 */
export function SajuForm({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const t = dictionary.form;
  const [me, setMe] = useState<PersonDraft>(emptyPerson);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  // 광고를 다 본 뒤 넘어갈 주소. null이면 아직 광고를 띄우지 않은 상태다.
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  // 뒤로 가기로 돌아오면(bfcache) 제출 버튼이 잠긴 채 되살아난다. 인연링크와 같은 처리다.
  useEffect(() => {
    const unlock = () => setSubmitting(false);
    window.addEventListener("pageshow", unlock);
    return () => window.removeEventListener("pageshow", unlock);
  }, []);

  // 이전 조회의 프래그먼트가 주소에 남아 있으면 지운다. 남겨 두면 새 프래그먼트가 뒤에
  // 덧붙어 `#앞것#뒷것`이 되고, 결과 화면이 그것을 읽지 못한다.
  useEffect(() => {
    if (!window.location.hash) return;
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const input = buildInput(me);
    if (!input) {
      setError(t.errorInvalidDate);
      return;
    }

    setSubmitting(true);
    // 분석 시작. **보내 놓고 이동 직전에 기다린다** — 바로 아래에서 문서를 통째로 갈아 끼우므로
    // 기다리지 않으면 이 기록이 그대로 날아간다(`analytics-client` 주석 참고).
    const started = trackAnalytics({
      eventType: "ANALYSIS_STARTED",
      serviceType: "SAJU_READING",
      locale,
    });

    // 생년월일을 쿼리스트링에 싣지 않는다. 프래그먼트(#)는 서버로 전송되지 않으므로 결과
    // 링크를 공유하거나 새로고침해도 접속 로그에는 경로만 남는다.
    //
    // **router.push를 쓰지 않는다.** 프래그먼트가 둘로 겹치면 디코딩이 깨지고, 결과 화면이
    // 해시를 빈 값으로 읽는 경합도 생긴다. location.assign은 넘긴 문자열이 그대로 주소가 된다.
    const target = `${localePath("/reading/result", locale)}#${encodeSajuInput(input)}`;

    // 광고를 시작하는 것이 이 버튼이라, 관문이 켜져 있을 때만 버튼 문구가 그 사실을 말한다.
    // 광고 단위가 없으면 관문도 문구도 함께 사라져 그대로 넘어간다.
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
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <PersonFields
        legend={t.meLegend}
        dictionary={dictionary}
        locale={locale}
        value={me}
        onChange={setMe}
      />

      {error ? (
        <p role="alert" className="break-keep-all text-sm text-brand-navy">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-brand-navy px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting
          ? t.submitting
          : submitAdGateEnabled
            ? t.submit
            : t.submitNoAd}
      </button>
    </form>
  );
}

function buildInput(draft: PersonDraft): SajuInput | null {
  const me = toPersonInput(draft);
  if (!me) return null;

  // 넘기기 전에 스키마로 확인한다. 폼과 스키마가 어긋나면 여기서 잡히고, 통과한 값에는
  // 스키마의 기본값이 적용돼 있어 인코딩·디코딩 결과가 같아진다.
  const parsed = sajuInputSchema.safeParse({ me });
  return parsed.success ? parsed.data : null;
}
