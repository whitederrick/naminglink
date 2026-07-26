import "server-only";
import { createHash } from "node:crypto";

type PdfTextItem = {
  str?: string;
  transform?: number[];
};

export type ExtractedHanjaEntry = {
  hangul: string;
  hanja: string;
  reading: string;
  section: "official_table";
  page: number;
  reviewStatus: "ocr";
  metadata: {
    extraction: "pdfjs_text_layer";
  };
};

export type ExtractedHanjaVariant = {
  baseHanja: string;
  variantHanja: string;
  variantType: "other";
  page: number;
};

const hangulRowPattern = /^[가-힣]{1,2}$/u;
const hanjaPattern = /\p{Script=Han}/gu;
const variantPattern = /(\p{Script=Han})\s*\((\p{Script=Han})\)/gu;
const ignoredHangul = new Set([
  "한글",
  "현재",
  "별표",
  "추가",
  "허용",
  "한자",
]);

function lineKey(y: number) {
  return Math.round(y * 2) / 2;
}

function uniqueHanja(value: string) {
  return [...new Set(value.match(hanjaPattern) ?? [])];
}

export async function extractOfficialHanjaPdf(buffer: Buffer) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const document = await pdfjs.getDocument({
    data: new Uint8Array(buffer),
    useSystemFonts: true,
  }).promise;
  const entries = new Map<string, ExtractedHanjaEntry>();
  const variants = new Map<string, ExtractedHanjaVariant>();
  const pageStats: Array<{ page: number; rows: number; entries: number }> = [];

  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const content = await page.getTextContent();
    const lines = new Map<number, Array<{ x: number; text: string }>>();

    for (const rawItem of content.items as PdfTextItem[]) {
      const text = rawItem.str?.trim();
      const transform = rawItem.transform;
      if (!text || !transform) continue;
      const key = lineKey(transform[5] ?? 0);
      const row = lines.get(key) ?? [];
      row.push({ x: transform[4] ?? 0, text });
      lines.set(key, row);
    }

    const orderedLines = [...lines.entries()]
      .sort(([a], [b]) => b - a)
      .map(([, items]) => items.sort((a, b) => a.x - b.x));
    let currentReading = "";
    let pageRows = 0;
    const beforeCount = entries.size;

    for (const items of orderedLines) {
      const rowLabel = items.find(
        (item) =>
          hangulRowPattern.test(item.text) && !ignoredHangul.has(item.text),
      );

      if (rowLabel) {
        currentReading = rowLabel.text;
        pageRows += 1;
      }

      if (!currentReading) continue;
      const rowText = items
        .filter((item) => item !== rowLabel)
        .map((item) => item.text)
        .join(" ");

      for (const match of rowText.matchAll(variantPattern)) {
        const [, baseHanja, variantHanja] = match;
        variants.set(`${baseHanja}:${variantHanja}`, {
          baseHanja,
          variantHanja,
          variantType: "other",
          page: pageNumber,
        });
      }

      for (const hanja of uniqueHanja(rowText.replace(variantPattern, "$1"))) {
        entries.set(`${currentReading}:${hanja}`, {
          hangul: currentReading,
          hanja,
          reading: currentReading,
          section: "official_table",
          page: pageNumber,
          reviewStatus: "ocr",
          metadata: { extraction: "pdfjs_text_layer" },
        });
      }
    }

    pageStats.push({
      page: pageNumber,
      rows: pageRows,
      entries: entries.size - beforeCount,
    });
  }

  return {
    sha256: createHash("sha256").update(buffer).digest("hex"),
    pageCount: document.numPages,
    entries: [...entries.values()],
    variants: [...variants.values()],
    pageStats,
  };
}

export async function extractReferencePdfText(buffer: Buffer) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const document = await pdfjs.getDocument({
    data: new Uint8Array(buffer),
    useSystemFonts: true,
  }).promise;
  const chunks: Array<{ page: number; content: string }> = [];

  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const content = (textContent.items as PdfTextItem[])
      .map((item) => item.str?.trim() ?? "")
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    if (content.length >= 20) chunks.push({ page: pageNumber, content });
  }

  return {
    sha256: createHash("sha256").update(buffer).digest("hex"),
    pageCount: document.numPages,
    chunks,
    extractionStatus: chunks.length ? "extracted" : "needs_ocr",
  } as const;
}
