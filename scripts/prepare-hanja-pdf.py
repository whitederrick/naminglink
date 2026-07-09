import argparse
import hashlib
import json
import shutil
import subprocess
from pathlib import Path


DEFAULT_POPPLER = Path(
    r"C:\Users\white\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin"
)


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def find_tool(name: str) -> str | None:
    bundled = DEFAULT_POPPLER / f"{name}.exe"
    if bundled.exists():
        return str(bundled)

    candidate = shutil.which(name)
    if candidate:
        return candidate

    return None


def get_page_count(pdf_path: Path) -> int | None:
    pdfinfo = find_tool("pdfinfo")
    if not pdfinfo:
        return None

    result = subprocess.run(
        [pdfinfo, str(pdf_path)],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )

    for line in result.stdout.splitlines():
        if line.startswith("Pages:"):
            return int(line.split(":", 1)[1].strip())

    return None


def extract_text_probe(pdf_path: Path) -> dict:
    try:
        import pdfplumber  # type: ignore
    except Exception as exc:
        return {
            "available": False,
            "note": f"pdfplumber unavailable: {exc}",
            "sample": "",
        }

    try:
        with pdfplumber.open(str(pdf_path)) as pdf:
            sample = "\n".join((page.extract_text() or "") for page in pdf.pages[:2]).strip()
    except Exception as exc:
        return {
            "available": False,
            "note": f"text extraction failed: {exc}",
            "sample": "",
        }

    return {
        "available": bool(sample),
        "note": "Text layer found." if sample else "No useful text layer found; OCR or manual correction is needed.",
        "sample": sample[:800],
    }


def render_pages(pdf_path: Path, output_dir: Path, dpi: int, max_pages: int | None) -> list[str]:
    pdftoppm = find_tool("pdftoppm")
    if not pdftoppm:
        raise RuntimeError("pdftoppm was not found. Install Poppler or use the bundled Codex runtime.")

    output_dir.mkdir(parents=True, exist_ok=True)
    prefix = output_dir / "page"
    command = [pdftoppm, "-png", "-r", str(dpi)]

    if max_pages:
        command.extend(["-f", "1", "-l", str(max_pages)])

    command.extend([str(pdf_path), str(prefix)])
    subprocess.run(command, check=True)

    return [str(path) for path in sorted(output_dir.glob("page-*.png"))]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Prepare the official personal-name Hanja PDF for review/import."
    )
    parser.add_argument("pdf", help="Path to hanja.pdf")
    parser.add_argument("--output", default="tmp/hanja-pdf", help="Output directory for manifest/images")
    parser.add_argument("--render", action="store_true", help="Render pages to PNG for OCR/manual review")
    parser.add_argument("--dpi", type=int, default=220)
    parser.add_argument("--max-pages", type=int, default=None)
    args = parser.parse_args()

    pdf_path = Path(args.pdf).expanduser().resolve()
    if not pdf_path.exists():
        raise SystemExit(f"PDF not found: {pdf_path}")

    output_dir = Path(args.output).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    page_count = get_page_count(pdf_path)
    text_probe = extract_text_probe(pdf_path)
    rendered_pages: list[str] = []

    if args.render:
        rendered_pages = render_pages(pdf_path, output_dir / "pages", args.dpi, args.max_pages)

    manifest = {
        "source": {
            "fileName": pdf_path.name,
            "absolutePath": str(pdf_path),
            "sha256": sha256_file(pdf_path),
            "pageCount": page_count,
        },
        "textExtraction": text_probe,
        "renderedPages": rendered_pages,
        "nextStep": "Create a reviewed JSON file in data/hanja/*.json, then run pnpm hanja:import <file>.",
    }

    manifest_path = output_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"ok": True, "manifest": str(manifest_path)}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
