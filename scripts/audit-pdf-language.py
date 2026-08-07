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

# 「번역어 (원어)」 또는 「번역어 원어」 — 뜻이 바로 앞에 적혀 있으면 병기다.
#
# **화면(`verify-rendered-locale`)·약관(`verify-legal-residue`)과 같은 규칙이다.** 이 레포는
# 한국 고유 용어에 원어를 덧붙이는데, 그 자리를 잔재로 세면 검사가 늘 빨간불이 된다 —
# 실제로 화면 검사가 그 상태였다(2026-08-07에 고쳤다).
#
# PDF는 지면이라 괄호 없이 붙여 적는 자리도 있다(`Day master (일간)` vs `Wood 목`). 둘 다
# **앞에 라틴 낱말이 있는가**로 가른다. 앞이 비어 있거나 한글이면 병기가 아니다.
GLOSSED = re.compile(r"[0-9A-Za-z][0-9A-Za-z .,'\-]{0,24}[(（]?\s*$")


def is_glossed(text: str, start: int) -> bool:
    """`start` 앞을 보고 병기인지 판단한다."""
    return bool(GLOSSED.search(text[max(0, start - 30):start]))


ALLOWED = {
    # ⚠️ **간지 독음은 더 이상 예외가 아니다**(2026-08-07). 비한국어 문서는 로마자로 낸다
    # (`romanizePillar`). 예외를 지우자 그 자리가 전부 드러났고, 그것이 이 수정이 실제로
    # 먹혔다는 증거다 — 예외를 남겨 두었다면 고쳤는지 안 고쳤는지 알 방법이 없었다.
    #
    # `SEXAGENARY`는 대조군으로 남긴다. 「임신」이 다시 나오면 그것은 간지가 되살아난 것이지
    # 새 결함이 아니라는 것을 아래 대조군이 확인해 준다.
    #
    # 글리프 시험 문자열. 견본 렌더러가 서체 확인용으로 넣는 것이라 상품에는 없다.
    "글리프 시험 문자열": lambda w: w.startswith("가나다라마바사"),
    # 브랜드 병기.
    "브랜드": lambda w: w in {"사주링크", "인연링크", "드림링크", "네이밍링크"},
}

# **한글이 상품의 내용물인 문서군.** 여기서만 통하는 예외다.
#
# naminglink의 글로벌 작명·한글 아트는 외국인에게 **한국 이름을 지어 주는** 상품이라
# 「김하늘」이 독일어 문서에 있는 것이 정상이고, 음절마다 뜻을 붙이므로 낱글자도 나온다.
# 서체 이름(「나눔손글씨 붓」)도 고유명사라 옮기지 않는다.
#
# ⚠️ **문서군을 한정하는 것이 핵심이다.** 예외를 전역으로 두면 「공백 없는 다섯 음절 이하」에
# `태몽`·`해몽`·`사주`가 걸려 **다른 앱의 진짜 잔재가 통째로 통과한다.** 처음에 그렇게
# 적었다가 되돌렸다 — 아래 대조군이 그것을 지킨다.
CONTENT_IS_HANGUL = ("global-name-", "name-art-", "hangul-")


def hangul_is_the_product(document_name: str) -> bool:
    return document_name.startswith(CONTENT_IS_HANGUL)


def name_or_font(word: str) -> bool:
    """이름·서체 같은 고유명사인가. 산문은 띄어쓰기와 조사 때문에 여기 안 걸린다."""
    return " " not in word and len(word) <= 5


def audit(directory: str, names: set[str] | None = None) -> int:
    """`names`는 견본에 쓰인 **사람 이름**이다. 이름은 어느 언어 문서에서도 옮기지 않는다."""
    names = names or set()
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
            match.group(0)
            for match in HANGUL.finditer(text)
            if not is_glossed(text, match.start())
            and not any(ok(match.group(0)) for ok in ALLOWED.values())
            and not (hangul_is_the_product(name) and name_or_font(match.group(0)))
            and match.group(0) not in names
        )
        if leaked:
            problems.append((name, leaked))

    # 대조군 — 판정이 살아 있는지 증명한다. 이것이 없으면 정규식이 망가진 채로 통과만 찍는다.
    control_ok = (
        HANGUL.findall("전통 해몽은") != []  # 한글은 잡는다
        and HANGUL.findall("壬申 Traditional") == []  # 한자와 라틴은 안 잡는다
        and "임신" in SEXAGENARY  # 간지는 통과시킨다
        and "해몽" not in SEXAGENARY  # 간지가 아닌 낱말은 통과시키지 않는다
        # 병기는 통과시킨다(화면·약관과 같은 규칙).
        and is_glossed("Wood 목", 5)
        and is_glossed("Day master (일간)", 12)
        # 앞이 비었거나 한글이면 병기가 아니다 — 잔재로 잡아야 한다.
        and not is_glossed("전통 해몽은", 3)
        and not is_glossed("해몽", 0)
        # **상품군 한정이 지켜지는가.** 「태몽」이 드림링크 문서에서 통과하면 안 된다.
        and hangul_is_the_product("global-name-base-de")
        and not hangul_is_the_product("conception-de-base")
        and name_or_font("김하늘")
        and not name_or_font("꿈에 나온 상징")
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
        sys.exit(
            "실행: python scripts/audit-pdf-language.py <PDF 디렉터리> [--names 지현,김하늘]"
        )
    # `--names`는 견본에 쓰인 **사람 이름**이다. 이름은 어느 언어 문서에서도 옮기지 않으므로
    # 영어 문서에 「지현」이 있는 것이 정상이다. **손으로 적지 말 것** —
    # `audit-pdfs.mjs`가 각 앱의 렌더 견본에서 읽어 넘긴다.
    sample_names: set[str] = set()
    if "--names" in sys.argv:
        raw = sys.argv[sys.argv.index("--names") + 1]
        sample_names = {n.strip() for n in raw.split(",") if n.strip()}
    raise SystemExit(audit(sys.argv[1], sample_names))
