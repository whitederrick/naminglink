import { ServiceShell } from "@/components/ServiceShell";
import { services } from "@/lib/services";

export default function BabyHanjaPage() {
  return <ServiceShell service={services.babyHanja} />;
}
