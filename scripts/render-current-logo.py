from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageOps, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "images" / "logo.png"
OUTPUT = ROOT / "public" / "images" / "logo-current.png"
SIZE = 1024


def render() -> None:
    source = Image.open(SOURCE).convert("RGB")
    crop_side = round(min(source.size) / 1.52)
    left = (source.width - crop_side) // 2
    top = (source.height - crop_side) // 2
    source = source.crop((left, top, left + crop_side, top + crop_side))
    source = source.resize((SIZE, SIZE), Image.Resampling.LANCZOS)

    grayscale = ImageOps.grayscale(source)
    inverted = ImageOps.invert(grayscale)
    ink = ImageEnhance.Contrast(inverted).enhance(1.25)
    alpha = ink.point(lambda value: round(value * 0.90))
    clip_mask = Image.new("L", (SIZE, SIZE), 0)
    clip_draw = ImageDraw.Draw(clip_mask)
    clip_draw.rounded_rectangle(
        (8, 8, SIZE - 9, SIZE - 9),
        radius=142,
        fill=255,
    )
    alpha = ImageChops.multiply(alpha, clip_mask)
    white_ink = Image.new("RGBA", (SIZE, SIZE), (255, 255, 255, 0))
    white_ink.putalpha(alpha)

    badge = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    inset = 8
    radius = 142
    draw.rounded_rectangle(
        (inset, inset, SIZE - inset - 1, SIZE - inset - 1),
        radius=radius,
        fill=(16, 21, 15, 214),
    )
    badge.alpha_composite(white_ink)
    draw.rounded_rectangle(
        (inset, inset, SIZE - inset - 1, SIZE - inset - 1),
        radius=radius,
        outline=(255, 255, 255, 74),
        width=12,
    )
    badge.save(OUTPUT, optimize=True)


if __name__ == "__main__":
    render()
