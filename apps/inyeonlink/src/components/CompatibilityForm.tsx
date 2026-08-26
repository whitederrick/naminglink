"use client";

import { useState } from "react";

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
import { useAdGatedSubmit } from "@/lib/use-ad-gated-submit";
import type { Dictionary, Locale } from "@/lib/i18n";
import {
  encodeMatchInput,
  matchInputSchema,
  type MatchInput,
} from "@/lib/match-input";

export function CompatibilityForm({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const t = dictionary.form;
  const [personA, setPersonA] = useState<PersonDraft>(emptyPerson);
  const [personB, setPersonB] = useState<PersonDraft>(emptyPerson);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  // bfcache 복원 시 제출 잠금 풀기, 이전 프래그먼트 지우기, 광고 관문 통과 후 이동 —
  // AffinityForm.tsx와 같은 배선이라 훅으로 뽑았다(use-ad-gated-submit.ts).
  const { pendingTarget, goto } = useAdGatedSubmit(setSubmitting);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const input = buildInput(personA, personB);
    if (!input) {
      setError(t.errorInvalidDate);
      return;
    }

    setSubmitting(true);
    // 분석 시작. 바로 아래에서 문서를 통째로 갈아 끼우므로 **보내 놓고 이동 직전에 기다린다**
    // (`analytics-client`). 실린 것은 메뉴 구분과 경로뿐이다.
    const started = trackAnalytics({ eventType: "ANALYSIS_STARTED", serviceType: "GUNGHAP_MATCH", locale });

    // 생년월일을 쿼리스트링에 싣지 않는다. 프래그먼트(#)는 서버로 전송되지 않으므로 결과
    // 링크를 공유하거나 새로고침해도 접속 로그에는 경로만 남는다.
    const target = `${localePath("/compatibility/result", locale)}#${encodeMatchInput(input)}`;

    // **router.push를 쓰지 않는다.** 두 번째 조회에서 주소가
    // `...result?lang=ko#첫번째프래그먼트#두번째프래그먼트`가 되는 일이 있었다. 프래그먼트가
    // 둘이면 `location.hash`에 `#`가 섞여 들어가 base64 디코딩이 깨지고, 결과 화면은
    // "결과 정보를 읽을 수 없습니다"를 띄운다.
    //
    // location.assign은 넘긴 문자열이 그대로 주소가 되므로 프래그먼트가 하나임이 보장되고,
    // 문서가 새로 뜨는 만큼 **스크립트가 돌기 전에 주소가 확정돼 있다** — 결과 화면이 해시를
    // 빈 값으로 읽는 경합도 함께 사라진다. 전체 이동이라 전환이 조금 느려지지만, 이 화면은
    // 어차피 결과를 받으러 서버를 한 번 다녀온다.
    //
    // 제출을 누르면 **여기서 광고를 띄우고** 끝난 뒤 결과로 넘어간다(goto — 위 훅 참고).
    // 예전에는 결과 화면에 게이트를 세웠는데, 그러면 버튼을 누른 사람은 결과 페이지에서
    // 한 번 더 눌러야 했다. 광고 단위가 없으면(지금) 관문 없이 그대로 넘어간다.
    await goto(target, started);
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
        legend={t.personA}
        dictionary={dictionary}
        locale={locale}
        value={personA}
        onChange={setPersonA}
      />
      <PersonFields
        legend={t.personB}
        dictionary={dictionary}
        locale={locale}
        value={personB}
        onChange={setPersonB}
      />

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
          : /* 띄울 광고가 없으면 광고 얘기를 하지 않는다. 관문이 꺼져 있는데
               "광고 확인 후"라고 적으면 없는 광고를 예고하는 것이 된다.
               광고 단위를 넣으면 관문과 문구가 함께 켜진다. */
            submitAdGateEnabled
            ? t.submit
            : t.submitNoAd}
      </button>
    </form>
  );
}

function buildInput(a: PersonDraft, b: PersonDraft): MatchInput | null {
  const personA = toPersonInput(a);
  const personB = toPersonInput(b);
  if (!personA || !personB) return null;

  // 반드시 스키마로 확인한 뒤 넘긴다. 어긋남이 생겨도 **넘어가기 전에** 폼에서 잡히고,
  // 스키마의 기본값(gender의 null 등)이 적용된 값을 그대로 실으므로 인코딩·디코딩 결과가
  // 같아진다. 자세한 사연은 `toPersonInput` 주석에 적어 두었다.
  const parsed = matchInputSchema.safeParse({ a: personA, b: personB });
  return parsed.success ? parsed.data : null;
}
