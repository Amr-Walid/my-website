#!/usr/bin/env python3
"""Render cv/cv.html to public/assets/Amr_Walid_CV.pdf (A4) using headless Chromium.

Usage:
    pip install playwright && python -m playwright install chromium
    python cv/build_cv.py
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "cv.html"
OUT = ROOT.parent / "public" / "assets" / "Amr_Walid_CV.pdf"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(SRC.as_uri(), wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    page.pdf(path=str(OUT), format="A4", print_background=True, prefer_css_page_size=True)
    browser.close()

print(f"CV written to {OUT}")
