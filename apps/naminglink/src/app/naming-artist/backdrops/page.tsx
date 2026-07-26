import { AdminBackdropsManager } from "@/components/AdminBackdropsManager";

export const metadata = { title: "배경 관리 | Naming-Link 운영" };

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-8">
      <AdminBackdropsManager />
    </main>
  );
}
