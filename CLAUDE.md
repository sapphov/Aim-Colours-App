# Aim Colours — Luminora App

## Project Overview
A single-file HTML mockup of the **Luminora** iOS app UI — a luxury wellness/wearable device companion app with a dark, editorial aesthetic.

## Tech Stack
- Pure HTML/CSS/JS — no build tools, no frameworks, no dependencies
- Single file: `Index.html`
- Google Fonts: Playfair Display (serif) + Inter (sans-serif)

## Design System

### Colors
- `--white: #ffffff`
- `--warm-gray: #c8c0b8`
- `--mid-gray: #888078`
- `--divider: rgba(255,255,255,0.15)`
- `--purple: #7B52C8`
- `--purple-light: #A07DE0`
- `--purple-glow: rgba(123, 82, 200, 0.45)`
- `--purple-faint: rgba(123, 82, 200, 0.15)`
- Background: `#05020a` (near black with purple tint)

### Typography
- Headings/editorial: `Playfair Display` (serif), often italic
- UI/labels: `Inter` (sans-serif), uppercase with wide letter-spacing
- Kicker/label style: `font-size: 9–11px`, `letter-spacing: 0.2–0.25em`, `text-transform: uppercase`

### Layout
- Phone frame: 393×852px (iPhone 15 Pro dimensions)
- Centered on a black `body`
- `z-index` layers: bg (0) → scene effects (1) → content (5–10) → tab bar (20) → dynamic island (100)

## App Structure
- **Dynamic Island** — top pill cutout
- **Status Bar** — time + signal/wifi/battery icons
- **Top Nav** — Luminora wordmark + horizontal scrolling tab labels (Closet, Explore, Luminora, Profile, Journal)
- **Hero** — welcome heading, device selector, product image (drag-and-drop or file swap supported)
- **Device Status** — connected device card with pulsing dot
- **Today Strip** — horizontal scrolling mini-cards
- **Tab Bar** — bottom nav (Closet, Explore, Luminora, Profile)

## Conventions
- All styles are inline in `<style>` within `Index.html` — do not create separate CSS files
- Scripts are inline in `<script>` at bottom of body — do not create separate JS files
- Keep everything in one file unless explicitly asked to split
- Image drop/swap uses `FileReader` + `localStorage` for persistence
- Maintain the luxury editorial tone — minimal, dark, typographic
