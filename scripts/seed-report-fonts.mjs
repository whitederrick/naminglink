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
    code: "jeongmuk-bawi",
    name_ko: "정묵바위체",
    name_en: "Jeongmuk Bawi",
    copyright_holder: "상상토끼 (SangSangTokki)",
    license_type: "FREE-EMBED",
    source_url: "https://sangsangfont.com/21/?idx=122",
    story_ko:
      "서예가 정묵의 붓글씨를 바탕으로 상상토끼가 만든 서체입니다. 바위처럼 단단하고 힘찬 획이 특징으로, 강인하고 진중한 인상의 이름 표현에 잘 어울립니다.",
    file: "C:/Users/white/.claude/uploads/75952ee8-b9f5-4335-9a3a-9080fb0b880e/1e5da21d-SSRockRegular_otf.otf",
    sort_order: 5,
  },
  {
    code: "kkotgil",
    name_ko: "꽃길체",
    name_en: "Kkotgil (Flower Road)",
    copyright_holder: "상상토끼 (SangSangTokki)",
    license_type: "FREE-EMBED",
    source_url: "https://sangsangfont.com/21/?idx=79",
    story_ko:
      "캘리그라피 작가의 손글씨 붓 터치를 살려 상상토끼가 만든 서체입니다. '꽃길'이라는 이름처럼 부드럽고 따뜻한 감성이 담겨 있어 다정한 축복의 마음을 전하는 이름 표현에 어울립니다.",
    file: "C:/Users/white/.claude/uploads/75952ee8-b9f5-4335-9a3a-9080fb0b880e/30cb64db-SSFlowerRoadRegular_otf.otf",
    sort_order: 45,
  },
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
  {
    code: "shilla-culture",
    name_ko: "신라문화체",
    name_en: "Shilla Culture",
    copyright_holder: "경주시 (Gyeongju City)",
    license_type: "FREE-EMBED",
    source_url: "https://www.gyeongju.go.kr/open_content/ko/page.do?mnu_uid=3288",
    story_ko:
      "천년 고도 경주시가 신라의 문화를 담아 배포한 서체입니다. 붓 획의 질감을 그대로 살린 거칠고 힘 있는 붓글씨의 매력이 특징으로, 전통적이면서도 경쾌한 인상의 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/ShillaCultureB.ttf`,
    sort_order: 50,
  },
  {
    code: "jeongseon-arirang-hon",
    name_ko: "정선아리랑혼체",
    name_en: "Jeongseon Arirang Hon",
    copyright_holder: "정선군 (Jeongseon County)",
    license_type: "KOGL-1",
    source_url: "https://www.jeongseon.go.kr/portal/jeongseongun/generalsituation/font",
    story_ko:
      "아리랑의 고장 강원도 정선군이 배포한 서체로, 정선아리랑의 '혼(魂)'을 담았다는 이름처럼 힘차고 자유로운 붓 획이 특징입니다. 강렬하고 생동감 있는 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/JeongseonArirangHon.ttf`,
    sort_order: 55,
  },
  {
    code: "jeongseon-arirang",
    name_ko: "정선아리랑체",
    name_en: "Jeongseon Arirang",
    copyright_holder: "정선군 (Jeongseon County)",
    license_type: "KOGL-1",
    source_url: "https://www.jeongseon.go.kr/portal/jeongseongun/generalsituation/font",
    story_ko:
      "아리랑의 고장 강원도 정선군이 정선아리랑의 정서를 담아 배포한 손글씨 서체입니다. 노랫가락처럼 자연스럽게 흐르는 획이 정감 있는 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/JeongseonArirang.ttf`,
    sort_order: 60,
  },
  {
    code: "jeongseon-arirang-ppuri",
    name_ko: "정선아리랑뿌리체",
    name_en: "Jeongseon Arirang Ppuri",
    copyright_holder: "정선군 (Jeongseon County)",
    license_type: "KOGL-1",
    source_url: "https://www.jeongseon.go.kr/portal/jeongseongun/generalsituation/font",
    story_ko:
      "강원도 정선군이 배포한 정선아리랑 서체 가족 중 하나로, 전통의 '뿌리'를 담았다는 이름처럼 단단하고 소박한 획이 특징입니다. 묵직하고 진솔한 인상의 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/JeongseonArirangPpuri.ttf`,
    sort_order: 65,
  },
  {
    code: "jeju-hallasan",
    name_ko: "제주한라산체",
    name_en: "Jeju Hallasan",
    copyright_holder: "제주특별자치도 (Jeju Province)",
    license_type: "KOGL-1",
    source_url: "https://www.jeju.go.kr/jeju/symbol/font/infor.htm",
    story_ko:
      "제주특별자치도가 배포하는 제주서체 중 하나로, 한라산의 힘찬 기상을 담은 붓글씨풍 서체입니다. 굵고 당당한 획이 큰 제목처럼 시원한 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/JejuHallasan.ttf`,
    sort_order: 70,
  },
  {
    code: "yeongwol",
    name_ko: "영월체",
    name_en: "Yeongwol",
    copyright_holder: "영월군 (Yeongwol County)",
    license_type: "FREE-EMBED",
    source_url: "https://www.yw.go.kr/www/contents.do?key=1500",
    story_ko:
      "강원도 영월군이 지역의 이름을 담아 배포한 손글씨 서체입니다. 꾸밈없이 자연스러운 획이 소박하고 정겨운 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/Yeongwol.otf`,
    sort_order: 75,
  },
  {
    code: "solmoe-kimdaegeon",
    name_ko: "솔뫼김대건체",
    name_en: "Solmoe KimDaeGeon",
    copyright_holder: "써밋디자인 (Summit Design)",
    license_type: "OFL",
    source_url: "http://www.kimdaegeon.com/design/node/?menu=n050500",
    story_ko:
      "한국 최초의 천주교 사제 김대건 신부의 탄생지 '솔뫼'의 이름을 딴 서체로, 김대건 신부의 친필 서한 글씨에서 모티브를 얻어 만들어졌습니다. 단정하면서도 붓의 결이 살아 있는 획이 차분한 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/SolmoeKimDaeGeonM.ttf`,
    sort_order: 80,
  },
  {
    code: "happy-goheung",
    name_ko: "행복고흥체",
    name_en: "Happy Goheung",
    copyright_holder: "고흥군 × 헤움디자인 (Goheung County)",
    license_type: "FREE-EMBED",
    source_url: "https://www.goheung.go.kr/contentsView.do?pageId=www158",
    story_ko:
      "전라남도 고흥군이 배포한 '행복고흥' 서체입니다. 부드럽고 밝은 손글씨 획이 따뜻하고 행복한 기운의 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/HappyGoheungB.ttf`,
    sort_order: 85,
  },
  {
    code: "healthset-joritdae",
    name_ko: "헬스셋조릿대체",
    name_en: "Healthset Joritdae",
    copyright_holder: "헬스셋 (Healthset)",
    license_type: "FREE-EMBED",
    source_url: "http://shop2.hangria.cafe24.com/product/detail.html?product_no=98",
    story_ko:
      "폰트 공방 헬스셋이 만든 손글씨 서체로, 산에서 자라는 작은 대나무 '조릿대'의 이름을 담았습니다. 가늘고 유연하게 뻗는 획이 맑고 산뜻한 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/HealthsetBamboo.ttf`,
    sort_order: 90,
  },
  {
    code: "dobong-yetgil",
    name_ko: "도봉옛길체",
    name_en: "Dobong Yetgil",
    copyright_holder: "도봉문화원 (Dobong Cultural Center)",
    license_type: "KOGL-1",
    source_url: "http://www.dobong.or.kr/main/main.php?categoryid=05&menuid=04&groupid=05&partid=00",
    story_ko:
      "서울 도봉문화원이 도봉산 자락의 옛길을 모티브로 만든 서체입니다. 옛길을 걷는 듯한 고졸한 멋이 있어 전통적인 정취의 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/DobongYetgil.ttf`,
    sort_order: 95,
  },
  {
    code: "deogon-princess",
    name_ko: "덕온공주체",
    name_en: "Deogon Princess",
    copyright_holder: "국립한글박물관 (National Hangeul Museum)",
    license_type: "KOGL-3",
    source_url: "https://hanfont.hangeul.go.kr/relaxfont/font/deokon.do",
    story_ko:
      "조선 순조의 셋째 딸 덕온공주가 남긴 친필 한글 자료 '자경전기'의 글씨를 바탕으로 국립한글박물관이 개발한 서체입니다. 조선 왕실 여성의 단아하고 기품 있는 궁체의 멋이 우아한 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/DeogonPrincess.ttf`,
    sort_order: 100,
  },
  {
    code: "chosun-centennial",
    name_ko: "조선100년체",
    name_en: "Chosun Centennial",
    copyright_holder: "방일영문화재단 (Bang Il-young Cultural Foundation)",
    license_type: "FREE-EMBED",
    source_url: "https://event.chosun.com/100/100font.html",
    story_ko:
      "1920년대 조선일보 지면에 쓰인 한글 활자를 현대적으로 복원한 서체로, 조선일보 창간 100주년을 기념해 방일영문화재단이 배포했습니다. 오래된 활자의 곧고 단정한 골격이 고전적인 품격의 이름 표현에 어울립니다.",
    file: `${SCRATCH}/fonts-staged/ChosunCentennial.ttf`,
    sort_order: 105,
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
  // 재실행 시 스토리가 그대로면 기존 번역을 재사용한다(불필요한 번역 호출·문구 변동 방지).
  const { data: existing } = await supabase
    .from("report_fonts")
    .select("story_ko,stories")
    .eq("code", font.code)
    .maybeSingle();
  const stories =
    existing && existing.story_ko === font.story_ko && Object.keys(existing.stories ?? {}).length > 0
      ? existing.stories
      : await translate(font.story_ko);
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
