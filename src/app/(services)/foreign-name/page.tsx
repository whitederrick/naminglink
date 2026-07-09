import { ServiceShell } from "@/components/ServiceShell";
import { services } from "@/lib/services";

export default function ForeignNamePage() {
  return <ServiceShell service={services.foreignName} />;
}
