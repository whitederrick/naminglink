import { AdminBackdropsManager } from "@/components/AdminBackdropsManager";
import { AdminShell } from "@/components/AdminOperationsConsole";

export const metadata = { title: "배경 관리 | Naming-Link 운영" };

// AdminShell이 좌측 메뉴와 <main>을 함께 만든다. 이걸 빼면 들어온 뒤 나갈 길이 없어진다.
export default function Page() {
  return (
    <AdminShell>
      <div className="mx-auto w-full max-w-4xl">
        <AdminBackdropsManager />
      </div>
    </AdminShell>
  );
}
