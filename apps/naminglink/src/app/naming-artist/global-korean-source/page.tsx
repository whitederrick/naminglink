import { AdminGlobalKoreanSource } from "@/components/AdminGlobalKoreanSource";
import { AdminShell } from "@/components/AdminOperationsConsole";

export default function Page() {
  return (
    <AdminShell>
      <AdminGlobalKoreanSource />
    </AdminShell>
  );
}
