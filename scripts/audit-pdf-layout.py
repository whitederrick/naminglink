"""PDF **지면**을 기계로 훑는다 — 넘침·겹침·빈 지면·빈 글리프.

    python scripts/audit-pdf-layout.py "apps/*/tmp/**/*.pdf"

글자가 찍히는가는 `verify-pdf-glyphs.ts`와 `audit-pdf-glyphs.py`가 본다. 이 스크립트는 그
다음 문제를 본다 — **글자는 다 있는데 자리가 틀린** 경우다. 지금까지 이건 사람이 PNG를 열어
보는 수밖에 없었고, 그래서 **표본만 봤다.** 로케일이 23개고 상품이 여섯인데 눈으로 다 보는
것은 실제로 안 되는 일이다(어제 감사가 그렇게 실패했다).

잡는 것 넷.

  넘침    글자가 페이지 밖으로 나갔다. 인쇄하면 잘린다.
  겹침    서로 다른 문단의 글자가 같은 자리에 겹쳐 찍혔다.
  빈 지면 유료 문서에서 빈 지면은 그 자체로 값이 깎인다(2026-07-31에 4장에서 겪었다).
  빈 글리프 .notdef(코드 0)가 찍혔다 — 서체에 없는 글자를 그리려다 남은 자국이다.

**이걸로도 못 보는 것이 있다.** 줄 간격이 어색하다거나 표가 못생겼다거나 하는 것은 사람이
봐야 한다. 다만 "사람이 봐야 하는 것"의 범위를 크게 줄여 준다.
"""

from __future__ import annotations

import argparse
import glob
import sys
from pathlib import Path

import fitz

# 페이지 경계를 이만큼 넘어가면 넘침으로 본다. 글꼴 경계 상자는 실제 잉크보다 약간 넓어서
# 0으로 두면 정상 지면도 걸린다.
BLEED = 1.0

# 빈 지면 기준.
#
# **꼬리글·서체 표기는 세지 않는다.** 그것만 있는 지면이 진짜 빈 지면이다(본문이 다 끝났는데
# 상자 하나 때문에 한 장이 더 붙는 경우). 반대로 본문 두어 줄이 넘어온 지면은 빈 지면이
# 아니다 — 이어지는 글이 길어서 생긴 것이고, 그건 어느 조판에서나 나온다.
#
# 그래서 **아래쪽 띠를 빼고** 글자를 센다. 그 띠에 꼬리글과 서체 표기가 들어간다.
BLANK_MAX_CHARS = 30
BLANK_MAX_DRAWINGS = 8
FOOTER_BAND = 70.0

# 겹침으로 볼 최소 비율(작은 쪽 넓이 기준). 글자 상자는 조금씩 스치므로 넉넉히 둔다.
OVERLAP_RATIO = 0.55


def span_rects(page: fitz.Page):
    """(사각형, 글자, 줄 식별자) 목록. 줄 식별자가 같으면 같은 줄이라 겹쳐도 정상이다."""
    out = []
    for block_index, block in enumerate(page.get_text("dict")["blocks"]):
        for line_index, line in enumerate(block.get("lines", [])):
            for span in line.get("spans", []):
                text = span["text"]
                if not text.strip():
                    continue
                out.append((fitz.Rect(span["bbox"]), text, (block_index, line_index)))
    return out


def audit_page(page: fitz.Page) -> list[str]:
    problems: list[str] = []
    rect = page.rect
    spans = span_rects(page)

    # ① 넘침
    for box, text, _line in spans:
        if (
            box.x0 < -BLEED
            or box.y0 < -BLEED
            or box.x1 > rect.width + BLEED
            or box.y1 > rect.height + BLEED
        ):
            problems.append(f"넘침: {text[:30]!r} @ {tuple(round(v) for v in box)}")
            break

    # ② 겹침 — 같은 줄끼리는 제외한다(위첨자·강조가 스친다).
    found_overlap = False
    for i in range(len(spans)):
        if found_overlap:
            break
        box_a, text_a, line_a = spans[i]
        for j in range(i + 1, len(spans)):
            box_b, text_b, line_b = spans[j]
            if line_a == line_b:
                continue
            if box_b.y0 > box_a.y1:
                # 세로로 이미 지났다. dict 순서가 대체로 위에서 아래라 여기서 끊어도 된다.
                continue
            hit = box_a & box_b
            if hit.is_empty:
                continue
            smaller = min(box_a.get_area(), box_b.get_area())
            if smaller > 0 and hit.get_area() / smaller >= OVERLAP_RATIO:
                problems.append(f"겹침: {text_a[:20]!r} × {text_b[:20]!r}")
                found_overlap = True
                break

    # ③ 빈 지면 — 아래쪽 띠(꼬리글·서체 표기)는 빼고 센다.
    characters = sum(
        len(text.strip())
        for box, text, _line in spans
        if box.y1 < rect.height - FOOTER_BAND
    )
    if characters < BLANK_MAX_CHARS:
        drawings = len(page.get_drawings())
        images = len(page.get_images())
        if drawings < BLANK_MAX_DRAWINGS and images == 0:
            problems.append(f"빈 지면: 글자 {characters}자 · 도형 {drawings} · 그림 {images}")

    # ④ 빈 글리프(.notdef)
    notdef = {text for _box, text, _line in spans if "\x00" in text}
    if notdef:
        problems.append(f"빈 글리프(.notdef) {len(notdef)}곳 — 서체에 없는 글자를 그리려 한 자국")

    return problems


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("patterns", nargs="+", help="검사할 PDF (glob)")
    parser.add_argument("--quiet", action="store_true", help="문제 있는 것만 출력")
    args = parser.parse_args(argv)

    files: list[str] = []
    for pattern in args.patterns:
        files.extend(sorted(glob.glob(pattern, recursive=True)))
    if not files:
        print("PDF를 찾지 못했습니다.")
        return 1

    broken = 0
    for path in files:
        doc = fitz.open(path)
        found: list[str] = []
        for number, page in enumerate(doc, start=1):
            for problem in audit_page(page):
                found.append(f"    p{number} {problem}")
        name = Path(path).name
        if found:
            broken += 1
            print(f"  X {name}")
            for line in found[:12]:
                print(line)
            if len(found) > 12:
                print(f"    … 그 밖 {len(found) - 12}건")
        elif not args.quiet:
            print(f"  O {name} ({doc.page_count}장)")

    print(f"\n{len(files)}개 중 {broken}개에 지면 문제가 있습니다.")
    return 1 if broken else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
