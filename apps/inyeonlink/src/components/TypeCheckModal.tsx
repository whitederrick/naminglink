"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { emphasize } from "@/lib/emphasize";
import type { AffinityOutcome } from "@/lib/engines";
import { fillTemplate, type Dictionary } from "@/lib/i18n";
import { MAX_BIRTH_YEAR, MIN_BIRTH_YEAR } from "@/lib/match-input";

// 간이 유형 확인기. `LegalModal`과 **같은 구조·같은 동작**이다 — 바깥 눌러 닫기(onMouseDown
// 기준이라 드래그로 글자를 고르다 놓아도 닫히지 않는다), Esc로 닫기, 열려 있는 동안 뒤 화면
// 스크롤 잠금. 같은 서비스 안에서 팝업이 화면마다 다르게 굴면 안 된다.
//
// 계산은 서버가 하지만 **순위는 여기서 매긴다.** 유형 목록은 이미 결과 화면이 들고 있으므로
// 서버가 다시 보낼 이유가 없고, 그래야 서버가 알아야 할 것이 "이 날짜의 일간" 하나로 줄어든다.

type Checked = {
  stem: string;
  element: string;
  yearBranch: string;
  animal: string;
};

type State =
  | { status: "idle" }
  | { status: "checking" }
  | { status: "error" }
  | { status: "done"; result: Checked };

export function TypeCheckModal({
  outcome,
  dictionary,
  onClose,
}: {
  outcome: AffinityOutcome;
  dictionary: Dictionary;
  onClose: () => void;
}) {
  const t = dictionary.affinity.check;
  const [calendarType, setCalendarType] = useState<"solar" | "lunar">("solar");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  async function check(event: React.FormEvent) {
    event.preventDefault();
    const numbers = {
      year: Number(year),
      month: Number(month),
      day: Number(day),
    };
    if (
      !Number.isInteger(numbers.year) ||
      numbers.year < MIN_BIRTH_YEAR ||
      numbers.year > MAX_BIRTH_YEAR ||
      !(numbers.month >= 1 && numbers.month <= 12) ||
      !(numbers.day >= 1 && numbers.day <= 31)
    ) {
      setState({ status: "error" });
      return;
    }

    setState({ status: "checking" });
    try {
      const response = await fetch("/api/day-master", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calendarType, ...numbers }),
      });
      if (!response.ok) throw new Error("failed");
      setState({ status: "done", result: (await response.json()) as Checked });
    } catch {
      setState({ status: "error" });
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="type-check-title"
        className="flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-xl border border-line bg-background text-foreground shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
          <h2
            id="type-check-title"
            className="break-keep-all text-lg font-semibold"
          >
            {t.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-background transition hover:border-foreground hover:bg-surface"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-4">
          {state.status === "done" ? (
            <CheckResult
              result={state.result}
              outcome={outcome}
              dictionary={dictionary}
            />
          ) : (
            <>
              <p className="break-keep-all text-sm leading-6 text-muted">
                {t.body}
              </p>

              <form onSubmit={check} className="mt-4">
                <div className="flex gap-2">
                  {(["solar", "lunar"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setCalendarType(type)}
                      aria-pressed={calendarType === type}
                      className={
                        calendarType === type
                          ? "rounded-full bg-brand-plum px-4 py-1.5 text-sm text-white"
                          : "rounded-full border border-line px-4 py-1.5 text-sm text-muted"
                      }
                    >
                      {type === "solar"
                        ? dictionary.form.solar
                        : dictionary.form.lunar}
                    </button>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <DateField
                    label={dictionary.form.year}
                    value={year}
                    digits={4}
                    max={MAX_BIRTH_YEAR}
                    onChange={setYear}
                  />
                  <DateField
                    label={dictionary.form.month}
                    value={month}
                    digits={2}
                    max={12}
                    onChange={setMonth}
                  />
                  <DateField
                    label={dictionary.form.day}
                    value={day}
                    digits={2}
                    max={31}
                    onChange={setDay}
                  />
                </div>

                {state.status === "error" ? (
                  <p
                    role="alert"
                    className="break-keep-all mt-3 text-sm text-brand-plum"
                  >
                    {t.error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={state.status === "checking"}
                  className="mt-4 w-full rounded-full bg-brand-plum px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {state.status === "checking" ? t.checking : t.submit}
                </button>
              </form>
            </>
          )}
        </div>

        {/* 색으로 세 단계를 가른다. 앞서 "확인하기"가 자두색으로 칠해져 있는데 닫기까지 같은
            색이면 무엇이 진짜 행동인지 구분되지 않는다.
              확인하기        칠한 자두색   — 이 팝업의 목적
              다른 사람 확인   테두리 자두색 — 이어서 할 만한 일
              닫기            무채색       — 그만두는 길 */}
        <footer className="flex gap-2 border-t border-line px-5 py-4">
          {state.status === "done" ? (
            <button
              type="button"
              onClick={() => setState({ status: "idle" })}
              className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-brand-plum/40 bg-brand-plum/8 px-4 text-sm font-semibold text-brand-plum transition hover:bg-brand-plum/16"
            >
              {t.another}
            </button>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-line bg-surface px-4 text-sm font-semibold text-muted transition hover:border-foreground hover:text-foreground"
          >
            {t.close}
          </button>
        </footer>
      </section>
    </div>,
    document.body,
  );
}

function CheckResult({
  result,
  outcome,
  dictionary,
}: {
  result: Checked;
  outcome: AffinityOutcome;
  dictionary: Dictionary;
}) {
  const t = dictionary.affinity.check;
  // 유형 목록은 점수순으로 정렬돼 있으므로 자리 번호가 곧 순위다.
  const rank =
    outcome.stems.findIndex((entry) => entry.stem === result.stem) + 1;
  const stem = dictionary.dayMasters[result.stem];

  // **여기서는 유형과 순위까지만 말한다.** 항목 점수·십신 풀이·띠 관계는 전부 결과 화면과
  // 사주 궁합에 이미 있다. 팝업이 그것들을 다시 늘어놓으면 작은 리포트가 되고, 그러면 정작
  // 이 팝업이 답하려던 질문("이 사람이 몇 순위인가")이 묻힌다.
  return (
    <div className="py-2 text-center">
      <p className="text-sm font-semibold text-brand-plum">
        {fillTemplate(t.rank, { rank: String(rank) })}
      </p>
      <h3 className="break-keep-all mt-1 text-2xl font-semibold">
        {fillTemplate(t.heading, { name: stem?.name ?? result.stem })}
      </h3>
      <p className="break-keep-all mx-auto mt-3 max-w-sm leading-7 text-muted [text-wrap:balance]">
        {stem?.trait}
      </p>
      <p className="break-keep-all mx-auto mt-5 max-w-sm text-xs leading-5 text-muted">
        {emphasize(t.caution)}
      </p>
    </div>
  );
}

function DateField({
  label,
  value,
  digits,
  max,
  onChange,
}: {
  label: string;
  value: string;
  digits: number;
  max: number;
  onChange: (next: string) => void;
}) {
  // 입력 폼과 같은 규칙이다 — `type="number"`의 max는 타이핑을 막지 못하므로 직접 거른다.
  const handle = (raw: string) => {
    const onlyDigits = raw.replace(/\D/g, "").slice(0, digits);
    if (!onlyDigits) return onChange("");
    const numeric = Number(onlyDigits);
    onChange(numeric > max ? String(max) : onlyDigits);
  };

  return (
    <label className="block">
      <span className="text-xs text-muted">{label}</span>
      <input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        value={value}
        maxLength={digits}
        onChange={(event) => handle(event.target.value)}
        className="mt-0.5 w-full rounded-lg border border-line bg-surface px-3 py-2"
      />
    </label>
  );
}
