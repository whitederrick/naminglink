import Link from "next/link";

const slots = [
  ["loading_leaderboard", "결과 대기 상단", "728x90 또는 반응형"],
  ["result_inline", "결과 카드 사이", "네이티브 광고"],
  ["unlock_reward", "잠금 해제", "보상형 광고"],
  ["admin_sponsor", "관리자 테스트", "비노출 테스트 슬롯"],
];

export default function AdminAdsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-6 sm:px-8 lg:px-10">
        <Link href="/admin" className="text-sm text-muted hover:text-foreground">
          시스템 관리자
        </Link>
        <h1 className="text-3xl font-semibold tracking-normal">광고 슬롯 관리</h1>
        <div className="grid gap-3 md:grid-cols-2">
          {slots.map(([key, label, note]) => (
            <article
              key={key}
              className="rounded-lg border border-line bg-surface p-5 shadow-sm"
            >
              <p className="text-sm font-mono text-muted">{key}</p>
              <h2 className="mt-2 font-semibold">{label}</h2>
              <p className="mt-2 text-sm text-muted">{note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
