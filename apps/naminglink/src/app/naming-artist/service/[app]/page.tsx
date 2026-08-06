import { notFound } from "next/navigation";

import { isAppKey } from "@naminglink/core/apps";

import { AdminOperationsConsole } from "@/components/AdminOperationsConsole";

/**
 * 형제 서비스 현황. **경로가 서비스를 정한다.**
 *
 * 예전에는 `/naming-artist/inyeon`처럼 서비스마다 폴더가 있었고, 그래서 사주링크가 생겨도
 * 콘솔에 가는 길이 없었다. 이제 `APP_KEYS`에 앱을 더하면 이 경로가 함께 산다.
 *
 * **아는 값만 받는다.** 모르는 값이 오면 404다 — naminglink로 물러서면 남의 서비스 지표를
 * 그 서비스 것인 양 보여 주게 된다(같은 실수를 지표 RPC가 하고 있었다).
 */
export default async function Page({ params }: { params: Promise<{ app: string }> }) {
  const { app } = await params;
  if (!isAppKey(app) || app === "naminglink") notFound();
  return <AdminOperationsConsole view="service" app={app} />;
}
