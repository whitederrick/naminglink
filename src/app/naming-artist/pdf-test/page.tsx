import { AdminPdfTestPanel } from "@/components/AdminPdfTestPanel";

export const metadata = { title: "PDF 테스트 | Naming-Link 운영" };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-8">
      <AdminPdfTestPanel />
    </main>
  );
}
