import Link from "next/link";

const rows = [
  ["PDF", "결제 대기", "프리미엄 리포트 다운로드 링크"],
  ["CALLIGRAPHY", "제작 대기", "캘리그라피 이미지 시안"],
  ["STAMP", "배송 정보 대기", "수제 이름 도장"],
];

export default function AdminOrdersPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-6 sm:px-8 lg:px-10">
        <Link href="/admin" className="text-sm text-muted hover:text-foreground">
          시스템 관리자
        </Link>
        <h1 className="text-3xl font-semibold tracking-normal">주문 관리</h1>
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-surface-strong">
              <tr>
                <th className="px-4 py-3 font-semibold">상품</th>
                <th className="px-4 py-3 font-semibold">상태</th>
                <th className="px-4 py-3 font-semibold">설명</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([product, status, description]) => (
                <tr key={product} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{product}</td>
                  <td className="px-4 py-3 text-muted">{status}</td>
                  <td className="px-4 py-3 text-muted">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
