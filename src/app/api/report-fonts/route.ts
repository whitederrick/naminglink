import { NextRequest, NextResponse } from "next/server";

import {
  fontDisplayName,
  fontStoryFor,
  listReportFonts,
} from "@/lib/report-fonts-registry";

export const runtime = "nodejs";

// 프리미엄 상품의 서체 선택 UI용 공개 목록.
// 활성 서체의 코드·표시명·로케일 스토리만 노출한다(파일 경로 등 내부 정보 제외).
export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("lang") ?? "en";
  try {
    const rows = await listReportFonts({ enabledOnly: true });
    return NextResponse.json({
      ok: true,
      fonts: rows.map((row) => ({
        code: row.code,
        name: fontDisplayName(row, locale),
        story: fontStoryFor(row, locale),
      })),
    });
  } catch (error) {
    console.error("Failed to list report fonts", error);
    return NextResponse.json({ ok: false, error: "서체 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}
