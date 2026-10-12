// 로케일별 용어집: 제품 사전(i18n-locales)의 십신·일간·월령·오행 이름. 번역기가 이 말을 그대로 써야 화면과 맞는다.
import { writeFileSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
const APP = "C:/myProjects/naminglink/apps/sajulink/src/lib/i18n-locales";
const OUT = "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/7a99bada-f923-4caa-869f-cf34b3081068/scratchpad/saju/work/glossary";
mkdirSync(OUT, { recursive: true });
const LOCALES = ["ar", "de", "es", "fil", "fr", "hi", "id", "it", "ja", "kk", "km", "mn", "ms", "pl", "pt", "ru", "th", "tr", "uz", "vi", "zh"];
for (const loc of LOCALES) {
  const mod: any = await import(pathToFileURL(`${APP}/${loc}.ts`).href);
  const dict = mod[loc] ?? mod.default?.[loc] ?? mod.default;
  if (!dict?.dayMasters) throw new Error(`${loc}: 사전을 못 읽었다`);
  const g: Record<string, unknown> = {
    dayMasterNames: Object.fromEntries(Object.entries(dict.dayMasters as Record<string, any>).map(([k, v]) => [k, v.name])),
    tenGodNames: Object.fromEntries(Object.entries(dict.tenGods as Record<string, any>).map(([k, v]) => [k, v.name])),
    vitalityNames: Object.fromEntries(Object.entries(dict.reportDetail.vitalities as Record<string, any>).map(([k, v]) => [k, v.name])),
    elementNames: dict.elements,
  };
  writeFileSync(`${OUT}/${loc}.json`, JSON.stringify(g, null, 2), "utf8");
}
console.log(`용어집 ${LOCALES.length}개`);
