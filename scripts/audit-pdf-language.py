"""PDF가 **그 언어로 나왔는지** 전수로 센다.

## 왜 필요한가 (2026-08-07)

화면은 `verify-rendered-locale.mjs`가 열어 본다. PDF는 그럴 수 없다 — 결제해야 나오고,
텍스트가 아니라 지면이라 fetch로 안 열린다. 그런데 **돈을 받고 주는 것이 이쪽**이다.

실제로 2026-08-06에 **유료 태몽 리포트가 스물세 언어 전부에서 한국어 풀이**를 담고 있었다.
화면과 같은 결함이었지만 PDF는 아무도 열어 보지 않아 더 오래 남았다.

## 이미 있는 두 검사와 무엇이 다른가

    verify-pdf-glyphs.ts   글자가 **찍히는가**  — 서체 cmap에 있는지
    audit-pdf-layout.py    글자가 **넘치는가**  — 지면·겹침
    (이 파일)              글자가 **그 언어인가** — 번역·과도 번역

셋은 서로를 대신하지 못한다. 한국어가 한국어 서체로 예쁘게 잘 앉아 있어도, 독일어 문서라면
틀린 것이다.

## 무엇을 정상으로 보는가

**한자는 애초에 세지 않는다.** 간지(壬申)와 한자 이름은 어느 언어로 보든 그대로여야 하는
값이다 — 이것이 「반드시 한글로 보여야 하는 부분까지 과도하게 번역되면 안 된다」의 기계적
표현이다. 여기서 세는 것은 **한글(가-힣)뿐**이다.

허용하는 한글은 아래 `ALLOWED`에 이유와 함께 적는다.

실행: 견본을 먼저 렌더한 뒤
    apps/sajulink>  ../naminglink/node_modules/.bin/tsx scripts/render-saju-sample.tsx
    naminglink>     python scripts/audit-pdf-language.py apps/sajulink/tmp/saju-report
"""

import collections
import glob
import os
import re
import sys

# 윈도우 콘솔은 기본이 cp949라 한글도 「✓」도 못 찍고 UnicodeEncodeError로 죽는다.
# **검사 결과가 인코딩 때문에 안 보이면 검사를 안 한 것과 같다.**
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("PyMuPDF가 필요합니다:  pip install pymupdf")

# 한글 낱말. 한자는 여기 걸리지 않는다 — 그것이 이 검사의 핵심이다.
HANGUL = re.compile(r"[가-힣]+")

# 육십갑자 60개를 한글로 적으면 이 꼴이다. 천간 10 × 지지 12의 조합만 받는다.
STEMS = "갑을병정무기경신임계"
BRANCHES = "자축인묘진사오미신유술해"
SEXAGENARY = {s + b for s in STEMS for b in BRANCHES}

ALLOWED = {
    # 간지의 한글 독음. PDF는 한자(壬申)와 독음(임신)을 나란히 찍는다.
    # ⚠️ **남길지는 제품 판단이다.** 독일어 독자에게 「임신」은 읽을 수 없는 글자이고,
    # 로마자(Im-sin)로 바꾸거나 비한국어 문서에서는 빼는 선택지가 있다. 지금은 그대로 두기로
    # 했으므로 통과시키되, 바꾸기로 하면 이 예외를 지우면 그 자리가 전부 드러난다.
    "간지 독음": lambda w: w in SEXAGENARY,
    # 글리프 시험 문자열. 견본 렌더러가 서체 확인용으로 넣는 것이라 상품에는 없다.
    "글리프 시험 문자열": lambda w: w.startswith("가나다라마바사"),
    # 브랜드 병기.
    "브랜드": lambda w: w in {"사주링크", "인연링크", "드림링크", "네이밍링크"},
}


def audit(directory: str) -> int:
    files = sorted(glob.glob(os.path.join(directory, "*.pdf")))
    if not files:
        print(f"PDF가 없습니다: {directory}")
        print("견본을 먼저 렌더하십시오. 0건을 통과로 보지 않습니다.")
        return 1

    problems: list[tuple[str, collections.Counter]] = []
    checked = 0

    for path in files:
        name = os.path.basename(path)[:-4]
        # 한국어 문서는 한국어인 것이 맞다.
        if re.search(r"(^|-)ko(-|$)", name):
            continue
        checked += 1

        document = fitz.open(path)
        text = "".join(page.get_text() for page in document)
        document.close()

        leaked = collections.Counter(
            word
            for word in HANGUL.findall(text)
            if not any(ok(word) for ok in ALLOWED.values())
        )
        if leaked:
            problems.append((name, leaked))

    # 대조군 — 판정이 살아 있는지 증명한다. 이것이 없으면 정규식이 망가진 채로 통과만 찍는다.
    control_ok = (
        HANGUL.findall("전통 해몽은") != []  # 한글은 잡는다
        and HANGUL.findall("壬申 Traditional") == []  # 한자와 라틴은 안 잡는다
        and "임신" in SEXAGENARY  # 간지는 통과시킨다
        and "해몽" not in SEXAGENARY  # 간지가 아닌 낱말은 통과시키지 않는다
    )

    print("PDF 언어 전수 검사")
    print(f"  문서 {checked}개 · 예외 {len(ALLOWED)}종 · 한자는 세지 않는다")
    if not control_ok:
        print("  ✗ 대조군 실패 — 판정이 고장 났다. 이 결과를 믿지 말 것.")
        return 1
    print("  ✓ 대조군: 한글은 잡고, 한자·라틴·간지는 통과시킨다")

    if problems:
        print(f"\n한국어가 남은 문서 {len(problems)}개:")
        for name, leaked in problems:
            sample = ", ".join(f"{w}({n})" for w, n in leaked.most_common(6))
            print(f"    {name:<28} {sum(leaked.values()):>4}개  {sample}")
        print("\n한자는 그대로 두는 것이 맞다 — 여기 걸린 것은 한글이다.")
        return 1

    print("\nALL PASS — 비한국어 문서에 번역되지 않은 한글이 없다.")
    return 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("실행: python scripts/audit-pdf-language.py <PDF 디렉터리>")
    raise SystemExit(audit(sys.argv[1]))
