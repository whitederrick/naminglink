import { NextResponse } from "next/server";

import { buildPremiumHanjaTestResult } from "@/lib/premium-hanja-analysis";
import {
  getHanjaProduct,
  HANJA_PRODUCT_CODES,
} from "@/lib/hanja-products";
import { hasCompletePremiumBirthDate } from "@/lib/premium-hanja-eligibility";
import { isPremiumTestRequestAllowed } from "@/lib/premium-test-access";
import { z } from "zod";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: Request) {
  if (!(await isPremiumTestRequestAllowed(request))) {
    return NextResponse.json({ ok: false, error: "운영자 로그인 후 결제 없이 테스트할 수 있습니다." }, { status: 403 });
  }

  const body = z.object({
    productCode: z.enum(HANJA_PRODUCT_CODES),
    inputFactors: z.record(z.string(), z.unknown()),
    result: z.unknown(),
  }).safeParse(await request.json().catch(() => null));
  if (!body.success) {
    return NextResponse.json({ ok: false, error: "원래 입력 정보를 불러올 수 없습니다. 입력 화면에서 다시 분석해 주세요." }, { status: 400 });
  }
  const product = getHanjaProduct(body.data.productCode);
  if (product.includesSaju && !hasCompletePremiumBirthDate(body.data.inputFactors)) {
    return NextResponse.json(
      { ok: false, error: "출생 연·월·일이 확정된 경우에만 사주·오행 상세 분석을 이용할 수 있습니다." },
      { status: 400 },
    );
  }
  if (!product.includesSaju && !product.includesPdf) {
    return NextResponse.json({
      ok: true,
      premium: {
        entitlement: {
          productCode: product.code,
          candidateLimit: product.candidateLimit,
          includesSaju: product.includesSaju,
          includesPdf: product.includesPdf,
        },
      },
    });
  }

  try {
    const premium = await buildPremiumHanjaTestResult(
      body.data.inputFactors,
      body.data.result,
      {
        candidateLimit: product.candidateLimit,
        includeSaju: product.includesSaju,
      },
    );
    return NextResponse.json({ ok: true, premium });
  } catch (error) {
    console.error("Premium Hanja test analysis failed", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "상세 분석 테스트에 실패했습니다." },
      { status: 500 },
    );
  }
}
