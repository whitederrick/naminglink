import { notFound } from "next/navigation";

import { isAppKey } from "@naminglink/core/apps";

import { AdminProductSettings } from "@/components/AdminProductSettings";

/** 형제 서비스 상품 설정. 아는 값만 받는다 — 모르는 값은 404(같은 폴더의 `page.tsx` 주석 참고). */
export default async function Page({ params }: { params: Promise<{ app: string }> }) {
  const { app } = await params;
  if (!isAppKey(app) || app === "naminglink") notFound();
  return <AdminProductSettings app={app} />;
}
