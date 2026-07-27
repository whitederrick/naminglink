"use client";

import { useEffect, useState } from "react";

import {
  BIRTHPLACES,
  DEFAULT_BIRTHPLACE_CODE,
  birthplaceLabel,
} from "@/lib/birthplaces";
import type { Dictionary, Locale } from "@/lib/i18n";
import {
  encodeMatchInput,
  matchInputSchema,
  MAX_BIRTH_YEAR,
  MIN_BIRTH_YEAR,
  type MatchInput,
} from "@/lib/match-input";

type PersonDraft = {
  label: string;
  gender: "male" | "female" | "unspecified";
  birthplaceCode: string;
  calendarType: "solar" | "lunar";
  year: string;
  month: string;
  day: string;
  lunarLeapMonth: boolean;
  knowsTime: boolean;
  hour: string;
  minute: string;
};

const emptyPerson: PersonDraft = {
  label: "",
  gender: "unspecified",
  birthplaceCode: DEFAULT_BIRTHPLACE_CODE,
  calendarType: "solar",
  year: "",
  month: "",
  day: "",
  lunarLeapMonth: false,
  knowsTime: false,
  hour: "",
  minute: "",
};

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
    window.location.assign(target);
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

function PersonFields({
  legend,
  dictionary,
  locale,
  value,
  onChange,
}: {
  legend: string;
  dictionary: Dictionary;
  locale: Locale;
  value: PersonDraft;
  onChange: (next: PersonDraft) => void;
}) {
  const t = dictionary.form;
  const set = <K extends keyof PersonDraft>(key: K, next: PersonDraft[K]) =>
    onChange({ ...value, [key]: next });

  // 카드와 입력칸을 반투명으로 두어 배경 이미지가 비치게 한다. 흐림(backdrop-blur)을 함께
  // 거는 것은 장식이 아니라 가독성 때문이다 — 이미지의 결이 그대로 비치면 글씨와 겹친다.
  return (
    <fieldset className="rounded-2xl border border-line/70 bg-surface/70 p-5 shadow-sm backdrop-blur-md">
      <legend className="px-2 text-sm font-semibold text-brand-plum">
        {legend}
      </legend>

      <label className="block">
        <span className="text-sm font-medium">{t.nickname}</span>
        <input
          type="text"
          value={value.label}
          maxLength={24}
          placeholder={t.nicknamePlaceholder}
          onChange={(event) => set("label", event.target.value)}
          className="mt-1 w-full rounded-lg border border-line/70 bg-background/60 px-3 py-2 backdrop-blur-sm"
        />
        <span className="mt-1 block text-xs text-muted">{t.nicknameHint}</span>
      </label>

      <div className="mt-4">
        <span className="text-sm font-medium">{t.gender}</span>
        <div className="mt-1 flex flex-wrap gap-2">
          {(["male", "female", "unspecified"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => set("gender", option)}
              aria-pressed={value.gender === option}
              className={
                value.gender === option
                  ? "rounded-full bg-brand-plum px-4 py-1.5 text-sm text-white"
                  : "rounded-full border border-line/70 bg-surface/45 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
              }
            >
              {option === "male"
                ? t.male
                : option === "female"
                  ? t.female
                  : t.genderUnspecified}
            </button>
          ))}
        </div>
        <span className="break-keep-all mt-1 block text-xs text-muted">
          {t.genderHint}
        </span>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium">{t.birthplace}</span>
        <select
          value={value.birthplaceCode}
          onChange={(event) => set("birthplaceCode", event.target.value)}
          className="mt-1 w-full rounded-lg border border-line/70 bg-background/60 px-3 py-2 backdrop-blur-sm"
        >
          {BIRTHPLACES.map((place) => (
            <option key={place.code} value={place.code}>
              {birthplaceLabel(place, locale)}
            </option>
          ))}
        </select>
        <span className="break-keep-all mt-1 block text-xs text-muted">
          {t.birthplaceHint}
        </span>
      </label>

      {/* 달력과 생년월일은 한 덩어리로 읽힌다 — 양력/음력을 고르고 바로 옆에 날짜를 넣는다. */}
      <div className="mt-4 grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-4">
      <div>
        <span className="text-sm font-medium">{t.calendar}</span>
        <div className="mt-1 flex gap-2">
          {(["solar", "lunar"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => set("calendarType", type)}
              aria-pressed={value.calendarType === type}
              className={
                value.calendarType === type
                  ? "rounded-full bg-brand-plum px-4 py-1.5 text-sm text-white"
                  : "rounded-full border border-line/70 bg-surface/45 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
              }
            >
              {type === "solar" ? t.solar : t.lunar}
            </button>
          ))}
        </div>
        {value.calendarType === "lunar" ? (
          <label className="mt-2 flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={value.lunarLeapMonth}
              onChange={(event) => set("lunarLeapMonth", event.target.checked)}
            />
            {t.leapMonth}
          </label>
        ) : null}
      </div>

      <div>
        <span className="text-sm font-medium">{t.birthDate}</span>
        <div className="mt-1 grid grid-cols-3 gap-2">
          <NumberField
            label={t.year}
            value={value.year}
            min={MIN_BIRTH_YEAR}
            max={MAX_BIRTH_YEAR}
            digits={4}
            onChange={(next) => set("year", next)}
          />
          <NumberField
            label={t.month}
            value={value.month}
            min={1}
            max={12}
            digits={2}
            onChange={(next) => set("month", next)}
          />
          <NumberField
            label={t.day}
            value={value.day}
            min={1}
            max={31}
            digits={2}
            onChange={(next) => set("day", next)}
          />
        </div>
      </div>
      </div>

      <div className="mt-4">
        <span className="text-sm font-medium">{t.birthTime}</span>
        <label className="mt-1 flex items-center gap-2 text-sm text-muted">
          <input
            type="checkbox"
            checked={!value.knowsTime}
            onChange={(event) => set("knowsTime", !event.target.checked)}
          />
          {t.unknownTime}
        </label>
        {value.knowsTime ? (
          <div className="mt-2 grid grid-cols-2 gap-2">
            <NumberField
              label={t.hour}
              value={value.hour}
              min={0}
              max={23}
              digits={2}
              onChange={(next) => set("hour", next)}
            />
            <NumberField
              label={t.minute}
              value={value.minute}
              min={0}
              max={59}
              digits={2}
              onChange={(next) => set("minute", next)}
            />
          </div>
        ) : null}
      </div>
    </fieldset>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  digits,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  /** 허용 자릿수. 년 4·월 2·일 2. 넘으면 입력 자체를 받지 않는다. */
  digits?: number;
  onChange: (next: string) => void;
}) {
  // `<input type="number">`의 min·max는 **타이핑을 막지 못한다.** 스피너와 브라우저 기본
  // 유효성 검사에만 쓰여서, 월에 99를 그대로 적을 수 있었다. 그래서 여기서 직접 거른다.
  //
  // 지우는 중일 수 있으므로 빈 값은 그대로 통과시킨다. 상한을 넘으면 잘라내지 않고 상한으로
  // 맞춘다 — 잘라내면 "31"이 "3"이 되어 무엇을 지웠는지 알기 어렵다.
  const handle = (raw: string) => {
    const onlyDigits = raw.replace(/\D/g, "");
    if (!onlyDigits) return onChange("");
    const limited = digits ? onlyDigits.slice(0, digits) : onlyDigits;
    const numeric = Number(limited);
    if (Number.isNaN(numeric)) return;
    onChange(numeric > max ? String(max) : limited);
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
        onBlur={() => {
          // 자리를 벗어날 때 하한만 맞춘다(0월·0일 방지). 입력 중에는 건드리지 않는다.
          if (!value) return;
          const numeric = Number(value);
          if (!Number.isNaN(numeric) && numeric < min) onChange(String(min));
        }}
        className="mt-0.5 w-full rounded-lg border border-line/70 bg-background/60 px-3 py-2 backdrop-blur-sm"
      />
    </label>
  );
}

function buildInput(a: PersonDraft, b: PersonDraft): MatchInput | null {
  const personA = toPersonInput(a);
  const personB = toPersonInput(b);
  if (!personA || !personB) return null;

  // **반드시 스키마로 확인한 뒤 넘긴다.** 아래 toPersonInput이 규칙을 따로 적어 두는 바람에
  // 스키마와 어긋난 적이 있다 — 출생 연도 상한이 스키마에는 있고(올해까지) 폼에는 없어서,
  // 미래 연도를 넣으면 폼은 통과시키고 결과 화면이 프래그먼트를 디코드하지 못해
  // "결과 정보를 읽을 수 없습니다"라고 말했다. 입력한 사람 입장에서는 영문 모를 오류다.
  //
  // 여기서 확인하면 어긋남이 생겨도 **넘어가기 전에** 폼에서 잡힌다. 또 스키마의 기본값
  // (gender의 null 등)이 적용된 값을 그대로 실으므로 인코딩·디코딩 결과가 같아진다.
  const parsed = matchInputSchema.safeParse({ a: personA, b: personB });
  return parsed.success ? parsed.data : null;
}

function toPersonInput(draft: PersonDraft) {
  const year = Number(draft.year);
  const month = Number(draft.month);
  const day = Number(draft.day);
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return null;
  }
  if (year < MIN_BIRTH_YEAR || year > MAX_BIRTH_YEAR) return null;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;

  const hour = draft.knowsTime ? Number(draft.hour) : null;
  const minute = draft.knowsTime ? Number(draft.minute || "0") : null;
  if (hour !== null && (!Number.isInteger(hour) || hour < 0 || hour > 23)) {
    return null;
  }
  if (minute !== null && (!Number.isInteger(minute) || minute < 0 || minute > 59)) {
    return null;
  }

  return {
    label: draft.label.trim() || undefined,
    gender: draft.gender === "unspecified" ? null : draft.gender,
    birthplaceCode: draft.birthplaceCode,
    calendarType: draft.calendarType,
    year,
    month,
    day,
    lunarLeapMonth: draft.calendarType === "lunar" ? draft.lunarLeapMonth : undefined,
    birthHour: hour,
    birthMinute: minute,
  };
}
