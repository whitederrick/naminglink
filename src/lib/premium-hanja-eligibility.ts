function numericPart(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value !== "string" || value === "unknown" || !value.trim()) {
    return null;
  }
  const parsed = Number(value);
  return Number.isInteger(parsed) ? parsed : null;
}

export function hasCompletePremiumBirthDate(
  inputFactors?: Record<string, unknown>,
) {
  if (!inputFactors) return false;

  const year = numericPart(inputFactors.birthYear);
  const month = numericPart(inputFactors.birthMonth);
  const day = numericPart(inputFactors.birthDay);
  if (!year || !month || !day || month < 1 || month > 12 || day < 1) {
    return false;
  }

  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return day <= lastDay;
}
