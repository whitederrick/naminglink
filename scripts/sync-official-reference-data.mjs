import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://efamily.scourt.go.kr";
const ROMAN_ENDPOINT = `${BASE_URL}/cs/CsNtcMttrMgtRomanAjax.do`;
const HANJA_ENDPOINT = `${BASE_URL}/webhanja/whjsearch`;
const ROOT = process.cwd();
const outputDir = path.join(ROOT, "data", "official");
const checkpointDir = path.join(ROOT, "tmp", "official-sync");
const romanCheckpointDir = path.join(checkpointDir, "roman-pages");
const hanjaCheckpointDir = path.join(checkpointDir, "hanja-readings");

await Promise.all([
  mkdir(outputDir, { recursive: true }),
  mkdir(romanCheckpointDir, { recursive: true }),
  mkdir(hanjaCheckpointDir, { recursive: true }),
]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url, options = {}, attempt = 1) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "user-agent": "Naming-Link official-reference sync/1.0",
        ...(options.headers ?? {}),
      },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    if (attempt >= 4) throw error;
    await sleep(500 * 2 ** (attempt - 1));
    return fetchJson(url, options, attempt + 1);
  }
}

async function readJsonIfPresent(filePath) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function mapConcurrent(items, concurrency, worker) {
  let cursor = 0;
  const results = new Array(items.length);
  const runners = Array.from({ length: concurrency }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

async function fetchRomanPage(pageIndex) {
  const checkpoint = path.join(romanCheckpointDir, `page-${String(pageIndex).padStart(4, "0")}.json`);
  const cached = await readJsonIfPresent(checkpoint);
  if (cached) return cached;

  const body = new URLSearchParams({
    bltnbordId: "0000010",
    pageIndex: String(pageIndex),
    korNm: "",
    lnmYn: "",
    fnmYn: "",
    selectYn: "N",
  });
  const data = await fetchJson(ROMAN_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      referer: `${BASE_URL}/cs/CsBltnWrtList.do?bltnbordId=0000009`,
    },
    body,
  });
  await writeJson(checkpoint, data);
  return data;
}

async function syncRomanization() {
  const firstPage = await fetchRomanPage(1);
  const totalPages = firstPage.paginationInfo.totalPageCount;
  const pageNumbers = Array.from({ length: totalPages - 1 }, (_, index) => index + 2);
  let completed = 1;
  const remainingPages = await mapConcurrent(pageNumbers, 4, async (page) => {
    const data = await fetchRomanPage(page);
    completed += 1;
    if (completed % 25 === 0 || completed === totalPages) {
      console.log(`ROMANIZATION ${completed}/${totalPages} pages`);
    }
    await sleep(40);
    return data;
  });

  const rawRows = [firstPage, ...remainingPages].flatMap((page) => page.resultList ?? []);
  const entries = rawRows.map((row) => ({
    hangul: row.korNm,
    romanization: row.romazaEnm,
    surnameUsable: row.lnmYn === "사용",
    givenNameUsable: row.fnmYn === "사용",
    reviewStatus: "reviewed",
    metadata: {
      officialSequence: row.romazaSn,
      registeredAt: row.rgtDtm || null,
      sourceEndpoint: "/cs/CsNtcMttrMgtRomanAjax.do",
    },
  }));

  const pdfPath = path.join(ROOT, "docs", "국어의 로마자 표기 조회.pdf");
  const pdf = await readFile(pdfPath);
  const payload = {
    source: {
      sourceKey: `scourt-korean-romanization-${new Date().toISOString().slice(0, 10)}`,
      title: "Supreme Court Korean romanization lookup",
      publisher: "Supreme Court of Korea",
      sourceUrl: `${BASE_URL}/cs/CsBltnWrtList.do?bltnbordId=0000009`,
      fileName: path.basename(pdfPath),
      sha256: createHash("sha256").update(pdf).digest("hex"),
      pageCount: 212,
      extraction: "official_query_api",
      status: "reviewed",
    },
    entries,
    extractedCount: entries.length,
  };
  await writeJson(path.join(outputDir, "scourt-romanization.json"), payload);
  return payload;
}

function cleanMeaning(value, reading) {
  if (typeof value !== "string") return null;
  const colon = value.indexOf(":");
  const meaning = (colon >= 0 ? value.slice(colon + 1) : value).trim();
  return meaning.replaceAll(`(${reading})`, "").replace(/\s+/g, " ").trim() || null;
}

async function fetchHanjaReading(reading) {
  const codePoint = reading.codePointAt(0).toString(16);
  const checkpoint = path.join(hanjaCheckpointDir, `${codePoint}.json`);
  const cached = await readJsonIfPresent(checkpoint);
  if (cached) return cached;

  const query = new URLSearchParams({
    mode: "listUnicodeByKsnd",
    ksnd: codePoint,
    ext: "0",
    pgmode: "1",
    pgno: "1",
    pgsize: "10000",
  });
  const data = await fetchJson(`${HANJA_ENDPOINT}?${query}`, {
    headers: { referer: `${BASE_URL}/cs/CsBltnWrtList.do?bltnbordId=0000010` },
  });
  await writeJson(checkpoint, data);
  return data;
}

async function syncHanja(readings) {
  let completed = 0;
  const results = await mapConcurrent(readings, 4, async (reading) => {
    const data = await fetchHanjaReading(reading);
    completed += 1;
    if (completed % 100 === 0 || completed === readings.length) {
      console.log(`HANJA ${completed}/${readings.length} readings`);
    }
    await sleep(50);
    return { reading, data };
  });

  const entries = results.flatMap(({ reading, data }) =>
    (data.resultlist ?? []).map((row) => ({
      hangul: reading,
      hanja: String.fromCodePoint(Number.parseInt(row.cd, 16)),
      reading,
      meaningKo: cleanMeaning(row.in, reading),
      section: "official_query",
      page: null,
      isNameUsable: row.isin === 1,
      reviewStatus: "reviewed",
      metadata: {
        codePoint: row.cd,
        officialReadings: row.ineum,
        officialDescription: row.in,
        dictionaryReadings: row.dic || null,
        extended: row.ex === 1,
        sourceTypeCode: row.type,
        embeddedMarker: row.em,
        sourceEndpoint: "/webhanja/whjsearch",
      },
    })),
  );

  const deduplicated = [
    ...new Map(entries.map((entry) => [`${entry.hangul}:${entry.hanja}`, entry])).values(),
  ];
  const pdfPath = path.join(ROOT, "docs", "hanja.pdf");
  const pdf = await readFile(pdfPath);
  const payload = {
    source: {
      sourceKey: `scourt-personal-name-hanja-${new Date().toISOString().slice(0, 10)}`,
      title: "Supreme Court personal-name Hanja lookup",
      publisher: "Supreme Court of Korea",
      ruleReference: "Rules on Registration of Family Relations, Article 37",
      versionLabel: "2024-06-11",
      effectiveDate: "2024-06-11",
      sourceUrl: `${BASE_URL}/cs/CsBltnWrtList.do?bltnbordId=0000010`,
      fileName: path.basename(pdfPath),
      sha256: createHash("sha256").update(pdf).digest("hex"),
      extraction: "official_query_api",
      status: "reviewed",
      notes: "Direct official lookup data. Publish only after count and sample review.",
    },
    rules: [
      {
        code: "DESIGNATED_READING_ONLY",
        description: "Use each Hanja only with a reading designated by the official lookup.",
        sortOrder: 1,
      },
      {
        code: "INITIAL_SOUND_RULE",
        description: "Initial ㄴ or ㄹ may follow the officially stated Korean initial-sound rule.",
        sortOrder: 2,
      },
      {
        code: "VARIANT_ONLY_IF_LISTED",
        description: "Same, popular, abbreviated, and radical variants are allowed only when officially listed.",
        sortOrder: 3,
      },
    ],
    entries: deduplicated,
    extractedCount: deduplicated.length,
  };
  await writeJson(path.join(outputDir, "scourt-hanja.json"), payload);
  return payload;
}

const romanization = await syncRomanization();
const readings = [...new Set(romanization.entries.map((entry) => entry.hangul))].sort();
const hanja = await syncHanja(readings);
const uniqueHanja = new Set(hanja.entries.map((entry) => entry.hanja));
const readingsWithHanja = new Set(hanja.entries.map((entry) => entry.hangul));
const audit = {
  syncedAt: new Date().toISOString(),
  romanization: {
    expectedRows: 2321,
    extractedRows: romanization.entries.length,
    uniqueHangul: readings.length,
    complete: romanization.entries.length === 2321,
  },
  hanja: {
    announcedPrimaryCharacters: 9389,
    extractedReadingEntries: hanja.entries.length,
    listedUniqueCodePoints: uniqueHanja.size,
    additionalListedCodePoints: Math.max(0, uniqueHanja.size - 9389),
    queriedReadings: readings.length,
    officialLookupCompleted: true,
    countReviewRequired: uniqueHanja.size !== 9389,
    readingsWithHanja: readingsWithHanja.size,
    readingsWithoutHanja: readings.length - readingsWithHanja.size,
  },
};
await writeJson(path.join(outputDir, "sync-audit.json"), audit);
console.log(JSON.stringify(audit, null, 2));
