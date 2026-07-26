import { getResultCopy } from "@/lib/i18n-result";
import type { Locale } from "@/lib/services";

type ResultStorageNoticeProps = {
  persistence?: "saved" | "skipped" | "failed";
  locale?: string;
};

export function ResultStorageNotice({
  persistence,
  locale,
}: ResultStorageNoticeProps) {
  const copy = getResultCopy((locale ?? "ko") as Locale);

  if (persistence === "saved") {
    return (
      <p className="rounded-lg border border-brand-teal/25 bg-brand-teal/10 px-4 py-3 text-sm leading-6 text-foreground">
        {copy.storageSaved}
      </p>
    );
  }

  if (persistence === "failed") {
    return (
      <p className="rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-4 py-3 text-sm leading-6 text-brand-rose">
        {copy.storageFailed}
      </p>
    );
  }

  return (
    <p className="rounded-lg border border-line bg-surface-strong px-4 py-3 text-sm leading-6 text-muted">
      {copy.storageSkipped}
    </p>
  );
}
