"use client";

import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { PageHeader } from "@/components/admin-ui";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

// 운영자 전용 PDF 테스트 페이지: 분석 결과·결제 없이 샘플 데이터로
// 글로벌 프리미엄 PDF 3종을 바로 생성해 내려받는다(모바일 포함 어느 기기든 로그인만 하면 사용).
// 서버는 /api/premium-reports/test/global 이 운영자 토큰을 재검증한다.

const PRODUCTS = [
  {
    code: "GLOBAL_NAME_PDF",
    label: "한글 이름 종합 리포트 (US$9.99)",
    hint: "한글 이름 후보 1~5개 (쉼표 구분, 공백 없는 2~6자)",
    defaultNames: "김소하, 서하린, 이수아",
  },
  {
    code: "HANGUL_ART_PDF",
    label: "발음 전환 아트 (US$2.99)",
    hint: "한글 표기 후보 1~3개 (쉼표 구분, 어절 공백 허용)",
    defaultNames: "소피아 밀러",
  },
  {
    code: "NAME_ART_PACK",
    label: "이름 아트 팩 (US$1.99)",
    hint: "한글 이름 후보 1개",
    defaultNames: "김소하",
  },
] as const;

type ProductCode = (typeof PRODUCTS)[number]["code"];

const LOCALES = [
  "en", "ko", "ja", "zh", "vi", "th", "id", "de", "es", "fr", "it", "pt",
  "ru", "ar", "tr", "fil", "uz", "mn", "hi", "km", "kk", "ms", "pl",
] as const;

type FontOption = {
  code: string;
  name: string;
  preview?: string | null;
};

export function AdminPdfTestPanel() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductCode>("HANGUL_ART_PDF");
  const [locale, setLocale] = useState<string>("en");
  const [names, setNames] = useState<string>(PRODUCTS[1].defaultNames);
  const [originalName, setOriginalName] = useState("Sophia Miller");
  const [country, setCountry] = useState("United States");
  const [birth, setBirth] = useState({ year: "1995", month: "3", day: "14" });
  const [fontOptions, setFontOptions] = useState<FontOption[]>([]);
  const [fontCount, setFontCount] = useState(0);
  const [selectedFonts, setSelectedFonts] = useState<string[]>([]);
  const [autoFonts, setAutoFonts] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    void (async () => {
      const supabase = getSupabaseBrowserClient();
      const { data } = (await supabase?.auth.getSession()) ?? { data: { session: null } };
      if (!data.session) {
        router.replace("/naming-artist/login");
        return;
      }
      setToken(data.session.access_token);
    })();
  }, [router]);

  // 상품 전환 시 기본 후보·서체 선택을 초기화한다(셀렉트 핸들러에서 호출).
  function switchProduct(next: ProductCode) {
    setProduct(next);
    const meta = PRODUCTS.find((item) => item.code === next);
    if (meta) setNames(meta.defaultNames);
    setSelectedFonts([]);
  }

  // 상품별 서체 수·목록 갱신.
  useEffect(() => {
    void (async () => {
      try {
        const [infoResponse, fontsResponse] = await Promise.all([
          fetch(`/api/product-info?codes=${product}`),
          fetch(`/api/report-fonts?lang=ko`),
        ]);
        const info = (await infoResponse.json().catch(() => null)) as
          | { products?: Record<string, { fontCount?: number }> }
          | null;
        const fonts = (await fontsResponse.json().catch(() => null)) as
          | { fonts?: FontOption[] }
          | null;
        setFontCount(info?.products?.[product]?.fontCount ?? 0);
        setFontOptions(fonts?.fonts ?? []);
      } catch {
        setFontOptions([]);
      }
    })();
  }, [product]);

  function toggleFont(code: string) {
    setSelectedFonts((current) => {
      if (current.includes(code)) return current.filter((item) => item !== code);
      if (current.length < fontCount) return [...current, code];
      return [...current.slice(1), code];
    });
  }

  async function generate() {
    if (!token || busy) return;
    setError("");
    setMessage("");
    const candidateNames = names
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const limit = product === "NAME_ART_PACK" ? 1 : product === "HANGUL_ART_PDF" ? 3 : 5;
    if (candidateNames.length === 0 || candidateNames.length > limit) {
      setError(`후보를 1~${limit}개 입력해 주세요.`);
      return;
    }
    const candidates = candidateNames.map((hangul) => ({ hangul }));
    const inputFactors: Record<string, unknown> = {
      originalName: originalName.trim() || undefined,
      country: country.trim() || undefined,
      birthYear: birth.year.trim() || undefined,
      birthMonth: birth.month.trim() || undefined,
      birthDay: birth.day.trim() || undefined,
    };
    setBusy(true);
    setMessage("PDF 생성 중… (종합 리포트는 1분 안팎)");
    try {
      const response = await fetch("/api/premium-reports/test/global", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product,
          inputFactors,
          ...(product === "NAME_ART_PACK" ? { candidate: candidates[0] } : { candidates }),
          locale,
          ...(autoFonts || selectedFonts.length === 0 ? {} : { fontCodes: selectedFonts }),
        }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "테스트 PDF 생성에 실패했습니다.");
      }
      const url = URL.createObjectURL(await response.blob());
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `naminglink-test-${product.toLowerCase()}-${locale}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);
      setMessage("PDF를 내려받았습니다.");
    } catch (caught) {
      setMessage("");
      setError(caught instanceof Error ? caught.message : "테스트 PDF 생성에 실패했습니다.");
    } finally {
      setBusy(false);
    }
  }

  const inputClass = "h-11 w-full rounded-lg border border-line bg-background px-3 text-sm";
  const meta = PRODUCTS.find((item) => item.code === product);

  return (
    <div className="grid gap-5">
      <PageHeader
        title="PDF 테스트"
        description="결제·분석 결과 없이 샘플 데이터로 글로벌 프리미엄 PDF를 생성합니다. 모바일에서도 운영자 로그인만 하면 사용할 수 있습니다."
      />

      <section className="grid gap-4 rounded-xl border border-line bg-surface p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">상품</span>
            <select
              value={product}
              onChange={(event) => switchProduct(event.target.value as ProductCode)}
              disabled={busy}
              className={inputClass}
            >
              {PRODUCTS.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">출력 언어</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value)}
              disabled={busy}
              className={inputClass}
            >
              {LOCALES.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-1 text-sm">
          <span className="font-medium">한글 후보</span>
          <input
            value={names}
            onChange={(event) => setNames(event.target.value)}
            disabled={busy}
            className={inputClass}
          />
          <span className="text-xs text-muted">{meta?.hint}</span>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">원어 이름 (프롬프트 근거)</span>
            <input
              value={originalName}
              onChange={(event) => setOriginalName(event.target.value)}
              disabled={busy}
              className={inputClass}
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">국가</span>
            <input
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              disabled={busy}
              className={inputClass}
            />
          </label>
        </div>

        <fieldset className="grid gap-1 text-sm">
          <legend className="font-medium">생년월일 (선택 — $9.99 사주·오행 섹션용)</legend>
          <div className="grid grid-cols-3 gap-2">
            <input
              value={birth.year}
              onChange={(event) => setBirth({ ...birth, year: event.target.value })}
              placeholder="년"
              disabled={busy}
              className={inputClass}
            />
            <input
              value={birth.month}
              onChange={(event) => setBirth({ ...birth, month: event.target.value })}
              placeholder="월"
              disabled={busy}
              className={inputClass}
            />
            <input
              value={birth.day}
              onChange={(event) => setBirth({ ...birth, day: event.target.value })}
              placeholder="일"
              disabled={busy}
              className={inputClass}
            />
          </div>
        </fieldset>

        {fontCount > 0 ? (
          <div className="grid gap-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={autoFonts}
                onChange={(event) => setAutoFonts(event.target.checked)}
                disabled={busy}
                className="accent-current"
              />
              서체 자동 선택 (인기순 {fontCount}종)
            </label>
            {!autoFonts ? (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {fontOptions.map((font) => {
                  const selected = selectedFonts.includes(font.code);
                  return (
                    <button
                      key={font.code}
                      type="button"
                      onClick={() => toggleFont(font.code)}
                      disabled={busy}
                      className={`grid gap-1 rounded-lg border p-2 text-left text-xs transition ${
                        selected
                          ? "border-brand-teal bg-surface-strong"
                          : "border-line bg-background hover:border-brand-teal/50"
                      }`}
                    >
                      {font.preview ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={font.preview} alt={font.name} className="h-10 w-full rounded object-cover" />
                      ) : null}
                      <span className="font-medium">{font.name}</span>
                    </button>
                  );
                })}
                <p className="col-span-full text-xs text-muted">
                  선택 {selectedFonts.length}/{fontCount} — 미달이면 자동 선택으로 보완됩니다.
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        <button
          type="button"
          onClick={generate}
          disabled={busy || !token}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FileText aria-hidden="true" size={17} />
          {busy ? "PDF 생성 중…" : "테스트 PDF 생성·다운로드"}
        </button>
        {message ? <p className="text-sm font-medium text-brand-teal">{message}</p> : null}
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      </section>
    </div>
  );
}
