import "server-only";

import fontkit, { type Font } from "fontkit";

// 서체 미리보기 SVG 생성(서버리스에서 PNG 렌더 체인 없이 동작).
// fontkit으로 샘플 문구의 글리프 외곽선을 뽑아 로컬 스크립트 PNG와 같은
// 배경(#f6efdf)·크기(600×190)·글자 크기(104)로 구성한다.

const SAMPLE = "김하늘";
const WIDTH = 600;
const HEIGHT = 190;
const FONT_SIZE = 104;
const BACKGROUND = "#f6efdf";
const INK = "#221c14";

export function renderFontPreviewSvg(buffer: Buffer, text = SAMPLE) {
  const opened = fontkit.create(buffer);
  // TTC 컬렉션이면 첫 폰트를 사용한다.
  const font: Font = "fonts" in opened ? (opened as unknown as { fonts: Font[] }).fonts[0] : opened;
  const scale = FONT_SIZE / font.unitsPerEm;
  const run = font.layout(text);

  const totalAdvance = run.positions.reduce((sum, p) => sum + p.xAdvance, 0) * scale;
  const contentHeight = (font.ascent - font.descent) * scale;
  const startX = Math.max(0, (WIDTH - totalAdvance) / 2);
  const baseline = (HEIGHT - contentHeight) / 2 + font.ascent * scale;

  let x = startX;
  const paths: string[] = [];
  for (let i = 0; i < run.glyphs.length; i += 1) {
    const glyph = run.glyphs[i];
    const position = run.positions[i];
    const d = glyph.path.toSVG();
    if (d) {
      const tx = (x + position.xOffset * scale).toFixed(2);
      const ty = (baseline - position.yOffset * scale).toFixed(2);
      paths.push(
        `<path d="${d}" transform="translate(${tx} ${ty}) scale(${scale.toFixed(6)} ${(-scale).toFixed(6)})"/>`,
      );
    }
    x += position.xAdvance * scale;
  }

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">`,
    `<rect width="${WIDTH}" height="${HEIGHT}" fill="${BACKGROUND}"/>`,
    `<g fill="${INK}">${paths.join("")}</g>`,
    `</svg>`,
  ].join("");
}
