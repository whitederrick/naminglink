"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  BIRTHPLACES,
  DEFAULT_BIRTHPLACE_CODE,
  birthplaceLabel,
} from "@/lib/birthplaces";
import type { Dictionary, Locale } from "@/lib/i18n";
import { encodeMatchInput, type MatchInput } from "@/lib/match-input";

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
  const router = useRouter();
  const t = dictionary.form;
  const [personA, setPersonA] = useState<PersonDraft>(emptyPerson);
  const [personB, setPersonB] = useState<PersonDraft>(emptyPerson);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

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
    const query = `?lang=${locale}`;
    router.push(`/compatibility/result${query}#${encodeMatchInput(input)}`);
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

  return (
    <fieldset className="rounded-2xl border border-line bg-surface p-5">
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
          className="mt-1 w-full rounded-lg border border-line bg-background px-3 py-2"
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
                  : "rounded-full border border-line px-4 py-1.5 text-sm text-muted"
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
          className="mt-1 w-full rounded-lg border border-line bg-background px-3 py-2"
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

      <div className="mt-4">
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
                  : "rounded-full border border-line px-4 py-1.5 text-sm text-muted"
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

      <div className="mt-4">
        <span className="text-sm font-medium">{t.birthDate}</span>
        <div className="mt-1 grid grid-cols-3 gap-2">
          <NumberField
            label={t.year}
            value={value.year}
            min={1900}
            max={2050}
            onChange={(next) => set("year", next)}
          />
          <NumberField
            label={t.month}
            value={value.month}
            min={1}
            max={12}
            onChange={(next) => set("month", next)}
          />
          <NumberField
            label={t.day}
            value={value.day}
            min={1}
            max={31}
            onChange={(next) => set("day", next)}
          />
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
              onChange={(next) => set("hour", next)}
            />
            <NumberField
              label={t.minute}
              value={value.minute}
              min={0}
              max={59}
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
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  onChange: (next: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs text-muted">{label}</span>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        onChange={(event) => onChange(event.target.value)}
        className="mt-0.5 w-full rounded-lg border border-line bg-background px-3 py-2"
      />
    </label>
  );
}

function buildInput(a: PersonDraft, b: PersonDraft): MatchInput | null {
  const personA = toPersonInput(a);
  const personB = toPersonInput(b);
  if (!personA || !personB) return null;
  return { a: personA, b: personB };
}

function toPersonInput(draft: PersonDraft) {
  const year = Number(draft.year);
  const month = Number(draft.month);
  const day = Number(draft.day);
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return null;
  }
  if (year < 1900 || month < 1 || month > 12 || day < 1 || day > 31) return null;

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
