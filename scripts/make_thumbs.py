#!/usr/bin/env python3
"""Generate lightweight card thumbnails for project screenshots.

Project cards render ~370px wide (~740px on 2x screens), but the original
screenshots are up to ~1800px. This writes 760px-wide WebP copies to
public/assets/thumbs/ which the project cards use; the modal/lightbox keeps
the full-size originals.

Usage:  python scripts/make_thumbs.py      (re-run after adding project images)
"""
import re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "assets"
OUT = ASSETS / "thumbs"
WIDTH = 760

OUT.mkdir(exist_ok=True)
data = (ROOT / "src" / "data.ts").read_text(encoding="utf-8")
names = sorted(set(re.findall(r'/assets/([\w.-]+\.webp)', data)))

saved = 0
for name in names:
    src = ASSETS / name
    if not src.exists():
        continue
    im = Image.open(src)
    if im.width > WIDTH:
        im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
    dst = OUT / name
    im.save(dst, "WEBP", quality=78, method=6)
    saved += src.stat().st_size - dst.stat().st_size
    print(f"{name:42} {src.stat().st_size//1024:4} KB -> {dst.stat().st_size//1024:3} KB")
print(f"total saved: {saved//1024} KB")
