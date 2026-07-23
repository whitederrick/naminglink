// 초기 서체 시드: 검증 완료 라이선스의 서체를 Storage에 업로드하고 report_fonts에 등록한다.
// 스토리는 사실 기반 한국어 원문을 넣고, OpenAI(gpt-4o-mini)로 22개 로케일 번역을 생성해 저장한다.
// 실행: node scripts/seed-report-fonts.mjs [--fonts-dir <추가 폰트 폴더>]
// 이미 등록된 코드는 파일·메타데이터를 갱신한다(upsert).
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("="))
    .map((line) => {
      const index = line.indexOf("=");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^"|"$/g, "")];
    }),
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SCRATCH =
  "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/75952ee8-b9f5-4335-9a3a-9080fb0b880e/scratchpad";

const LOCALES = [
  "en", "ja", "zh", "de", "es", "fr", "it", "pt", "vi", "th", "id",
  "ru", "ar", "fil", "uz", "mn", "hi", "tr", "km", "ms", "kk", "pl",
];

const fonts = [
  {
    code: "east-sea-dokdo",
    name_ko: "동해독도체",
    name_en: "East Sea Dokdo",
    copyright_holder: "YoonDesign Inc",
    license_type: "OFL",
    source_url: "https://fonts.google.com/specimen/East+Sea+Dokdo",
    story_ko:
      "동해의 섬 독도의 이름을 담아 만들어진 손붓글씨 서체입니다. 붓으로 거칠게 눌러 쓴 듯한 자유분방한 획이 특징으로, 힘 있고 꾸밈없는 인상이 이름 한 자 한 자에 생동감을 더합니다.",
    file: "C:/myProjects/naminglink/assets/fonts/EastSeaDokdo-Regular.ttf",
    sort_order: 10,
  },
  {
    code: "kirang-haerang",
    name_ko: "기랑해랑체",
    name_en: "Kirang Haerang",
    copyright_holder: "Woowahan Brothers",
    license_type: "OFL",
    source_url: "https://fonts.google.com/specimen/Kirang+Haerang",
    story_ko:
      "먹을 듬뿍 머금은 붓으로 눌러 쓴 듯한 굵고 단단한 획의 붓글씨풍 서체입니다. 묵직하고 당당한 인상을 주어 강인한 느낌의 이름 표현에 잘 어울립니다.",
    file: `${SCRATCH}/KirangHaerang-Regular.ttf`,
    sort_order: 20,
  },
  {
    code: "chusa-love",
    name_ko: "추사사랑체",
    name_en: "Chusa Love",
    copyright_holder: "예산군 (Yesan County)",
    license_type: "KOGL-1",
    source_url: "https://www.yesan.go.kr/kor/sub05_02_05.do",
    story_ko:
      "조선 최고의 명필로 꼽히는 추사 김정희를 기려, 그의 고향인 충청남도 예산군이 만든 서체입니다. 추사체 특유의 힘 있는 획과 부드러운 흐름이 조화를 이루어 격조 있는 이름 표현에 어울립니다.",
    file: `${SCRATCH}/chusalove/ChusaLoveBold.ttf`,
    sort_order: 30,
  },
  {
    code: "pocheon-makgeolli",
    name_ko: "포천막걸리체",
    name_en: "Pocheon Makgeolli",
    copyright_holder: "포천시 (Pocheon City)",
    license_type: "KOGL-1",
    source_url: "https://www.pocheon.go.kr/www/contents.do?key=5582",
    story_ko:
      "막걸리로 이름난 경기도 포천시가 지역의 술 문화를 담아 만든 손붓글씨 서체입니다. 자연스럽고 부드러운 곡선이 친근하고 정감 있는 인상을 줍니다.",
    file: `${SCRATCH}/Makgeolli.ttf`,
    sort_order: 40,
  },
];

async function translate(storyKo) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL ?? "gpt-4o-mini",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You translate a short Korean paragraph about a Korean font's origin and feel. Translate faithfully without adding or removing facts; keep proper nouns recognizable. Return valid JSON mapping each locale code to the translation: ${LOCALES.join(", ")}.`,
        },
        { role: "user", content: storyKo },
      ],
    }),
  });
  if (!response.ok) throw new Error(`번역 실패: ${response.status}`);
  const data = await response.json();
  const parsed = JSON.parse(data.choices?.[0]?.message?.content ?? "{}");
  const stories = {};
  for (const locale of LOCALES) {
    if (typeof parsed[locale] === "string" && parsed[locale].trim()) {
      stories[locale] = parsed[locale].trim();
    }
  }
  return stories;
}

for (const font of fonts) {
  if (!existsSync(font.file)) {
    console.error(`파일 없음, 건너뜀: ${font.code} (${font.file})`);
    continue;
  }
  const buffer = readFileSync(font.file);
  const sha = createHash("sha256").update(buffer).digest("hex");
  const extension = font.file.toLowerCase().endsWith(".otf") ? ".otf" : ".ttf";
  const storagePath = `${font.code}/${sha}${extension}`;
  const { error: uploadError } = await supabase.storage
    .from("report-fonts")
    .upload(storagePath, buffer, { contentType: "application/octet-stream", upsert: true });
  if (uploadError) {
    console.error(`업로드 실패: ${font.code}`, uploadError.message);
    process.exit(1);
  }
  const stories = await translate(font.story_ko);
  const { error: upsertError } = await supabase.from("report_fonts").upsert(
    {
      code: font.code,
      name_ko: font.name_ko,
      name_en: font.name_en,
      copyright_holder: font.copyright_holder,
      license_type: font.license_type,
      source_url: font.source_url,
      story_ko: font.story_ko,
      stories,
      storage_path: storagePath,
      file_sha256: sha,
      enabled: true,
      sort_order: font.sort_order,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "code" },
  );
  if (upsertError) {
    console.error(`등록 실패: ${font.code}`, upsertError.message);
    process.exit(1);
  }
  console.log(`등록 완료: ${font.code} (${Math.round(buffer.length / 1024)}KB, 번역 ${Object.keys(stories).length}개 언어)`);
}
console.log("서체 시드 완료.");
