"use client";

import {
  BIRTHPLACES,
  DEFAULT_BIRTHPLACE_CODE,
  birthplaceLabel,
} from "@/lib/birthplaces";
import type { Dictionary, Locale } from "@/lib/i18n";
import { MAX_BIRTH_YEAR, MIN_BIRTH_YEAR } from "@/lib/saju-input";

// 생년월일 입력 한 벌. 궁합(두 사람)과 인연의 결(한 사람)이 **같은 것을 쓴다.**
//
// 원래 이 코드는 CompatibilityForm 안에 있었다. 인연의 결을 만들며 복사해 두면 자릿수 검증이나
// 출생지 안내 같은 것을 고칠 때 한쪽만 고치게 되고, 그러면 같은 서비스 안에서 통과되는 입력이
// 화면마다 달라진다. 그래서 옮겨 놓고 양쪽이 불러 쓴다.

export type PersonDraft = {
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

export const emptyPerson: PersonDraft = {
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

export function PersonFields({
  legend,
  dictionary,
  locale,
  value,
  onChange,
  genderHint,
}: {
  legend: string;
  dictionary: Dictionary;
  locale: Locale;
  value: PersonDraft;
  onChange: (next: PersonDraft) => void;
  /** 성별 칸 아래 안내. 화면마다 이유가 달라 기본값(궁합의 문구)을 덮어쓸 수 있다. */
  genderHint?: string;
}) {
  const t = dictionary.form;
  const set = <K extends keyof PersonDraft>(key: K, next: PersonDraft[K]) =>
    onChange({ ...value, [key]: next });

  // 카드와 입력칸을 반투명으로 두어 배경 이미지가 비치게 한다. 흐림(backdrop-blur)을 함께
  // 거는 것은 장식이 아니라 가독성 때문이다 — 이미지의 결이 그대로 비치면 글씨와 겹친다.
  return (
    <fieldset className="rounded-2xl border border-line/70 bg-surface/70 p-5 shadow-sm backdrop-blur-md">
      <legend className="px-2 text-sm font-semibold text-brand-navy">
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
                  ? "rounded-full bg-brand-navy px-4 py-1.5 text-sm text-white"
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
          {genderHint ?? t.genderHint}
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
        {/* 안내 문구에 줄바꿈이 들어 있다. pre-line이 없으면 공백으로 접힌다. */}
        <span className="break-keep-all mt-1 block whitespace-pre-line text-xs text-muted">
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
                  ? "rounded-full bg-brand-navy px-4 py-1.5 text-sm text-white"
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

      <div className="mt-4">
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

/**
 * 폼 상태를 스키마에 넣을 값으로 바꾼다. 날짜가 말이 안 되면 null.
 *
 * **여기서 돌려준 값은 반드시 zod 스키마로 한 번 더 확인한 뒤 써야 한다.** 이 함수가 규칙을
 * 따로 적어 두는 바람에 스키마와 어긋난 적이 있다 — 출생 연도 상한이 스키마에는 있고 폼에는
 * 없어서, 미래 연도를 넣으면 폼은 통과시키고 결과 화면이 프래그먼트를 디코드하지 못해
 * "결과 정보를 읽을 수 없습니다"라고 말했다. 입력한 사람 입장에서는 영문 모를 오류다.
 */
export function toPersonInput(draft: PersonDraft) {
  const year = Number(draft.year);
  const month = Number(draft.month);
  const day = Number(draft.day);
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
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
    lunarLeapMonth:
      draft.calendarType === "lunar" ? draft.lunarLeapMonth : undefined,
    birthHour: hour,
    birthMinute: minute,
  };
}
