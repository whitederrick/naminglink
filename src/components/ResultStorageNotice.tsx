type ResultStorageNoticeProps = {
  persistence?: "saved" | "skipped" | "failed";
};

export function ResultStorageNotice({ persistence }: ResultStorageNoticeProps) {
  if (persistence === "saved") {
    return (
      <p className="rounded-lg border border-brand-teal/25 bg-brand-teal/10 px-4 py-3 text-sm leading-6 text-foreground">
        이 분석 결과를 내 계정에 저장했습니다.
      </p>
    );
  }

  if (persistence === "failed") {
    return (
      <p className="rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-4 py-3 text-sm leading-6 text-brand-rose">
        분석은 완료했지만 계정 저장에 실패했습니다. 결과를 확인한 뒤 다시 분석해 주세요.
      </p>
    );
  }

  return (
    <p className="rounded-lg border border-line bg-surface-strong px-4 py-3 text-sm leading-6 text-muted">
      이 분석 결과는 서버에 저장하지 않았습니다. 현재 화면을 벗어나기 전에 필요한 내용을 확인해 주세요.
    </p>
  );
}
