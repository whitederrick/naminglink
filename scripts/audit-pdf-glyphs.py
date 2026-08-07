"""PDF에 **글자가 실제로 찍혔는지** 글리프 단위로 확인한다.

    python scripts/audit-pdf-glyphs.py --fonts apps/inyeonlink/assets/fonts \
        "apps/inyeonlink/tmp/report-scripts/*.pdf"

왜 필요한가: @react-pdf는 서체에 글리프가 없어도 **오류 없이** PDF를 만든다. 텍스트 추출에는
글자가 다 들어 있고(문자열은 그대로 박힌다) 표 정렬도 멀쩡해서, 눈으로 PNG를 보기 전에는
아무도 모른다 — 태국어·힌디어 리포트가 그렇게 한참 깨진 채였다(2026-07-31).

이 스크립트는 눈 대신 **어느 서체로 찍혔는지**를 본다. 페이지의 문자마다 그 문자가 쓰는
서체를 찾아 원본 서체 파일의 cmap과 대조한다. 두 가지가 잡힌다.

  1. 등록하지 않은 문자 체계 — @react-pdf가 내장 **Helvetica로 되돌린다.** 빈 네모가 아니라
     엉뚱한 라틴 글자가 찍힌다(아랍어 "عبد"가 ")JFJ5D'"로 나온다). 텍스트 추출에는 원래
     문자열이 그대로 들어 있어 더더욱 안 보인다.
  2. 등록은 했는데 그 서체에 글리프가 없는 문자.

**레이아웃은 이걸로 못 본다.** 넘침·겹침·빈 지면은 여전히 PNG로 봐야 한다. 둘은 서로를
대신하지 못한다.

**아랍어 같은 RTL 문서에서는 거짓 양성이 난다.** PDF에서 글자를 뽑을 때 양방향 재정렬이
일어나 한두 글자가 옆 span에 붙어 나온다(실제 렌더는 멀쩡한데 "NotoSans에 아랍 문자 1자
없음"으로 잡힌다). 한두 글자만 걸리면 이걸 의심하고, 앱의 `verify-pdf-glyphs.ts`로 확인할 것
— 그쪽은 렌더가 아니라 라우팅 자체를 보므로 이 착시가 없다.
"""

from __future__ import annotations

import argparse
import glob
import io
import sys
from collections import defaultdict
from pathlib import Path

import fitz
from fontTools.ttLib import TTFont

# 윈도우 콘솔은 기본이 cp949라 「—」도 한글도 못 찍고 UnicodeEncodeError로 죽는다.
# **검사 결과가 인코딩 때문에 안 보이면 검사를 안 한 것과 같다.**
# `audit-pdf-language.py`에는 있던 처리가 이 두 파일에는 빠져 있었다(2026-08-07에 넣었다) —
# 그래서 결과를 찍다 말고 스택 트레이스로 끝났고, 걸린 문서가 무엇인지 볼 수 없었다.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")


# 제어 문자는 본문이 아니라 추출 과정에서 섞여 들어온다 — 단 나눔 자리에 U+000C가 끼는 식이다.
IGNORED = set(" ​‌‍‎‏﻿ ") | {chr(code) for code in range(0x20)}

# @react-pdf가 되돌아가는 내장 서체들. 파일이 임베드되지 않으므로 뷰어의 기본 서체로 찍히고,
# 사실상 라틴·기본 문장부호(WinAnsi)뿐이다.
BUILTIN_FONTS = {"Helvetica", "Helvetica-Bold", "Helvetica-Oblique", "Times-Roman", "Courier"}



def is_rtl(char: str) -> bool:
    """아랍·히브리 문자인가. 이 글자들만 양방향 재정렬로 span이 섞인다."""
    code = ord(char)
    return (
        0x0590 <= code <= 0x05FF  # 히브리
        or 0x0600 <= code <= 0x06FF  # 아랍
        or 0x0750 <= code <= 0x077F  # 아랍 보충
        or 0xFB50 <= code <= 0xFDFF  # 아랍 표현형 A
        or 0xFE70 <= code <= 0xFEFF  # 아랍 표현형 B
    )

def load_font_coverage(font_dir: Path) -> dict[str, set[int]]:
    """서체 파일에서 이름 → 담고 있는 코드포인트. 이름은 PDF의 span이 부르는 대로 맞춘다.

    임베드된 서브셋에서는 cmap을 못 읽는다(CID 서체라 cmap 테이블 자체가 빠진다). 그래서
    **원본 파일**을 읽는다 — 어차피 등록한 서체가 무엇인지는 우리가 안다.
    """
    coverage: dict[str, set[int]] = {}
    for path in sorted(font_dir.glob("*.[to]tf")):
        try:
            font = TTFont(path, fontNumber=0, lazy=True)
            points = set(font.getBestCmap().keys())
        except Exception as cause:  # noqa: BLE001 - 읽을 수 없는 파일은 건너뛰고 알린다
            print(f"  (서체를 읽지 못함: {path.name} — {cause})")
            continue
        # PDF의 span 이름은 서체 내부 이름(포스트스크립트명·전체이름)으로 나온다.
        # NotoSansKR-400.ttf의 내부 이름이 "NotoSansKRThin-Regular"인 식이라 파일명만으로는
        # 못 맞춘다. 셋 다 키로 넣어 둔다.
        names = {path.stem}
        for record in font["name"].names:
            if record.nameID in (4, 6):
                try:
                    names.add(str(record))
                except Exception:  # noqa: BLE001
                    pass
        for name in names:
            coverage.setdefault(name, points)
    return coverage


def audit(path: str, coverage: dict[str, set[int]]) -> tuple[list[str], set[str]]:
    doc = fitz.open(path)
    missing: dict[str, set[str]] = defaultdict(set)
    pages_of: dict[str, set[int]] = defaultdict(set)
    unknown: set[str] = set()

    for page_number, page in enumerate(doc, start=1):
        for block in page.get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                for span in line.get("spans", []):
                    font = span["font"]
                    if font in BUILTIN_FONTS:
                        # 내장 서체는 라틴만 찍힌다. 그 밖의 문자는 전부 깨진 것이다.
                        points = set(range(0x20, 0x7F))
                    elif font in coverage:
                        points = coverage[font]
                    else:
                        # PDF의 서체 이름은 31자에서 잘려 나오기도 한다
                        # ("NotoSansDevanagari-Regul"). 앞부분으로 한 번 더 맞춰 본다.
                        prefixed = [
                            name for name in coverage if name.startswith(font) or font.startswith(name)
                        ]
                        if len(prefixed) != 1:
                            unknown.add(font)
                            continue
                        points = coverage[prefixed[0]]
                    for char in span["text"]:
                        if char in IGNORED or ord(char) in points:
                            continue
                        # **RTL 거짓 양성을 여기서 거른다.** 아랍어·히브리어 문서는 글자를 뽑을
                        # 때 양방향 재정렬이 일어나 한두 글자가 옆 span에 붙어 나온다 — 실제
                        # 렌더는 멀쩡한데 라틴 서체가 아랍 글자를 못 그린다고 신고했다.
                        #
                        # 그래서 **이 문서에 그 글자를 가진 서체가 실제로 등록돼 있으면** 넘긴다.
                        # 등록조차 안 돼 있으면(진짜 결함) 그대로 잡힌다. 무시가 아니라 대조다.
                        if is_rtl(char) and any(ord(char) in pts for pts in coverage.values()):
                            continue
                        missing[font].add(char)
                        pages_of[font].add(page_number)

    lines = []
    for font, chars in sorted(missing.items()):
        sample = "".join(sorted(chars))[:24]
        pages = ", ".join(str(p) for p in sorted(pages_of[font])[:8])
        label = "내장 서체로 되돌아감" if font in BUILTIN_FONTS else "글리프 없음"
        lines.append(f"    {font}: {len(chars)}자 {label} (p{pages}) 예: {sample}")
    return lines, unknown


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fonts", required=True, help="서체 파일 디렉터리 (assets/fonts)")
    parser.add_argument("patterns", nargs="+", help="검사할 PDF (glob)")
    args = parser.parse_args(argv)

    coverage = load_font_coverage(Path(args.fonts))
    if not coverage:
        print(f"서체를 찾지 못했습니다: {args.fonts}")
        return 1

    files: list[str] = []
    for pattern in args.patterns:
        files.extend(sorted(glob.glob(pattern)))
    if not files:
        print("PDF를 찾지 못했습니다.")
        return 1

    broken = 0
    unknown_fonts: set[str] = set()
    for path in files:
        problems, unknown = audit(path, coverage)
        unknown_fonts |= unknown
        name = Path(path).name
        if problems:
            broken += 1
            print(f"  X {name}")
            for line in problems:
                print(line)
        else:
            print(f"  O {name}")

    if unknown_fonts:
        # 서체 디렉터리 밖의 서체(관리자가 올린 상품 서체 등)는 검사하지 못한다. 조용히
        # 통과시키면 "확인했다"는 착각을 준다.
        print(f"\n검사하지 못한 서체(디렉터리에 없음): {', '.join(sorted(unknown_fonts))}")

    print(f"\n{len(files)}개 중 {broken}개에서 글자가 깨졌습니다.")
    print("레이아웃(넘침·겹침·빈 지면)은 이 검사로 안 보인다 — PNG로 따로 볼 것.")
    return 1 if broken else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
