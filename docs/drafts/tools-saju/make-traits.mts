// 로케일별 일간 성향 문구·이름·십신 이름(제품 사전에서 글자 그대로). 적용 단계가 토큰을 채울 때 쓴다.
import { writeFileSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
const APP = "C:/myProjects/naminglink/apps/sajulink/src/lib/i18n-locales";
const OUT = "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/7a99bada-f923-4caa-869f-cf34b3081068/scratchpad/saju/work/fill";
mkdirSync(OUT, { recursive: true });
const LOCALES = ["ar", "de", "es", "fil", "fr", "hi", "id", "it", "ja", "kk", "km", "mn", "ms", "pl", "pt", "ru", "th", "tr", "uz", "vi", "zh"];
for (const loc of LOCALES) {
  const mod: any = await import(pathToFileURL(`${APP}/${loc}.ts`).href);
  const dict = mod[loc] ?? mod.default?.[loc] ?? mod.default;
  const dm = dict.dayMasters as Record<string, { name: string; trait: string }>;
  const tg = dict.tenGods as Record<string, { name: string }>;
  if (Object.keys(dm).length !== 10 || Object.keys(tg).length !== 10) throw new Error(`${loc}: 사전 크기`);
  writeFileSync(
    `${OUT}/${loc}.json`,
    JSON.stringify(
      {
        dayMasterNames: Object.fromEntries(Object.entries(dm).map(([k, v]) => [k, v.name])),
        dayMasterTraits: Object.fromEntries(Object.entries(dm).map(([k, v]) => [k, v.trait])),
        tenGodNames: Object.fromEntries(Object.entries(tg).map(([k, v]) => [k, v.name])),
      },
      null,
      2,
    ),
    "utf8",
  );
}
console.log("채움 사전", LOCALES.length);
