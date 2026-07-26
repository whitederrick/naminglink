// 약관 로케일 파일의 USD 금액 표기를 결제 화면과 같은 US$X.XX 형식으로 통일한다.
//
// 번역이 로케일 관습대로 "1,99 US$"(fr) / "1.99 دولار أمريكي"(ar) / "1.99 ดอลลาร์สหรัฐ"(th)로
// 바꿔놓아, 같은 로케일 안에서도 문서마다 형식이 달라졌다(th는 이용약관 US$1.99, 요금안내는 태국어
// 표기). product-settings의 displayPrice는 로케일과 무관하게 US$9.99로 렌더하므로, 약관 표기가
// 결제 화면과 어긋나지 않도록 맞춘다. 금액 검증(validate-legal-content)도 이 형식을 기준으로 한다.
// 실행: cd scripts && node normalize-legal-usd.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "legal-content");

// 금액 뒤에 붙는 통화 표기를 걷어내고 US$ 접두 형식으로 바꾼다.
const RULES = {
  // "1,99 US$" → "US$1.99" (프랑스어는 소수점도 쉼표를 쓴다)
  fr: [[/(\d+),(\d{2})\s*US\$/g, "US$$$1.$2"]],
  // "1.99 دولار أمريكي" → "US$1.99"
  ar: [[/(\d+)\.(\d{2})\s*دولار أمريكي/g, "US$$$1.$2"]],
  // "1.99 ดอลลาร์สหรัฐ" → "US$1.99"
  th: [[/(\d+)\.(\d{2})\s*ดอลลาร์สหรัฐ/g, "US$$$1.$2"]],
};

let total = 0;
for (const [locale, rules] of Object.entries(RULES)) {
  const file = path.join(DIR, `${locale}.ts`);
  const before = readFileSync(file, "utf8");
  let after = before;
  let count = 0;
  for (const [pattern, replacement] of rules) {
    after = after.replace(pattern, (...args) => {
      count += 1;
      return replacement.replace("$$1", args[1]).replace("$2", args[2]);
    });
  }
  if (after !== before) {
    writeFileSync(file, after);
    total += count;
    console.log(`${locale}: ${count}곳 정규화`);
  } else {
    console.log(`${locale}: 변경 없음`);
  }
}
console.log(`\n총 ${total}곳.`);
