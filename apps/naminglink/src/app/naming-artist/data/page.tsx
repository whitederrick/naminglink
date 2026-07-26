import { AdminMasterDataManager } from "@/components/AdminMasterDataManager";
import { AdminShell } from "@/components/AdminOperationsConsole";

export default function Page() {
  return <AdminShell><AdminMasterDataManager /></AdminShell>;
}
