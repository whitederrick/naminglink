import { ServiceShell } from "@/components/ServiceShell";
import { services } from "@/lib/services";

export default function KoreanNamePage() {
  return <ServiceShell service={services.koreanName} />;
}
