"use client";

import { useEffect, useState } from "react";

import {
  emptyPerson,
  PersonFields,
  toPersonInput,
  type PersonDraft,
} from "@/components/PersonFields";
import { AdWatchOverlay } from "@/components/AdRewardGate";
import { submitAdGateEnabled } from "@/lib/ads";
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
  // 광고를 다 본 뒤 넘어갈 주소. null이면 광고를 띄우지 않은 상태다.
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  // 결과 화면으로 넘어간 뒤 **뒤로 가기**로 이 폼에 돌아오면 브라우저가 페이지를 통째로
  // 되살리는 경우가 있다(bfcache). 그러면 자바스크립트 상태까지 그대로 복원되어 제출 버튼이
  // "계산 중…"인 채 잠겨 있고, 다시 눌러도 아무 일도 일어나지 않는다.
  //
  // `pageshow`는 그 복원 시점에도 발생하므로 여기서 잠금을 푼다. 일반 로드에서도 한 번
  // 발생하지만 이미 false라 영향이 없다.
  useEffect(() => {
    const unlock = () => setSubmitting(false);
    window.addEventListener("pageshow", unlock);
    return () => window.removeEventListener("pageshow", unlock);
  }, []);

  // 결과 화면에서 "다시 계산하기"로 돌아오면 이전 조회의 프래그먼트가 주소에 남아 있다.
  // 두 가지 이유로 지운다.
  //   - 새 프래그먼트가 그 뒤에 덧붙어 `#앞것#뒷것`이 되던 원인이다.
  //   - 이 화면은 그 값이 필요 없는데 남의 생년월일이 주소창에 계속 보인다.
  // replaceState라 히스토리에 항목이 늘지 않는다.
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

    const input = buildInput(personA, personB);
    if (!input) {
      setError(t.errorInvalidDate);
      return;
    }

    setSubmitting(true);
    // 생년월일을 쿼리스트링에 싣지 않는다. 프래그먼트(#)는 서버로 전송되지 않으므로 결과
    // 링크를 공유하거나 새로고침해도 접속 로그에는 경로만 남는다.
    const target = `/compatibility/result?lang=${locale}#${encodeMatchInput(input)}`;

    // **router.push를 쓰지 않는다.** 두 번째 조회에서 주소가
    // `...result?lang=ko#첫번째프래그먼트#두번째프래그먼트`가 되는 일이 있었다. 프래그먼트가
    // 둘이면 `location.hash`에 `#`가 섞여 들어가 base64 디코딩이 깨지고, 결과 화면은
    // "결과 정보를 읽을 수 없습니다"를 띄운다.
    //
    // location.assign은 넘긴 문자열이 그대로 주소가 되므로 프래그먼트가 하나임이 보장되고,
    // 문서가 새로 뜨는 만큼 **스크립트가 돌기 전에 주소가 확정돼 있다** — 결과 화면이 해시를
    // 빈 값으로 읽는 경합도 함께 사라진다. 전체 이동이라 전환이 조금 느려지지만, 이 화면은
    // 어차피 결과를 받으러 서버를 한 번 다녀온다.
  // 제출을 누르면 **여기서 광고를 띄우고** 끝난 뒤 결과로 넘어간다. 예전에는 결과 화면에
  // 게이트를 세웠는데, 그러면 버튼을 누른 사람은 결과 페이지에서 한 번 더 눌러야 했다.
  // 광고를 시작하는 것이 이 버튼이므로 버튼 문구도 그 사실을 말한다.
  // 슬롯이 없으면(지금처럼 퍼블리셔 ID 미등록) 광고 없이 그대로 넘어간다.
    if (submitAdGateEnabled) {
      setPendingTarget(target);
      return;
    }
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
        {submitting ? t.submitting : t.submit}
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
