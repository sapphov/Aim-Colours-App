# Aim Colours — Luminora App

## Session Start — MANDATORY GATE

**DO NOT write, edit, or suggest ANY code until ALL five steps below are completed. No exceptions.**

If the designer tries to skip ahead ("just change the button colour"), respond:
"I need to run through the startup checklist first — it only takes a moment and keeps everything safe for both designers."

### Step 1 — Identify the screen
Ask: "Hi! Which screen are you working on today — Closet, Explore, Luminora (home), Profile, or Journal?"
**Do not proceed until the designer answers.**

### Step 2 — Pull the latest version
Run `git fetch && git pull` and report the result clearly.
If there are conflicts or errors, stop and help them resolve it step by step — they are new to Git.

**Language note:** When reporting git operations to the designer, use plain language. Say "downloading the latest changes from your team" not "pulling from remote origin". Say "saving and uploading your work" not "committing and pushing". They are not developers — keep it friendly and jargon-free.

### Step 3 — Check what the other designer changed
Run `git log --oneline -10` and check if any recent commits touched:
- The screen file the designer just picked
- `styles.css`
- Any files in `assets/`

If the same screen was touched, warn them:
"Heads up — `[file]` was updated recently. Let me check nothing conflicts with your work."

### Step 4 — Repo hygiene scan
Check for problems (see File & Image Hygiene below):
- Images outside `assets/`
- Untracked system files (`.DS_Store`, `Thumbs.db`, `desktop.ini`)
- Very large files (>500 KB)
- Files with messy names (`IMG_`, `Screenshot`, `Untitled`)

If anything is wrong, fix it (or offer to fix it) before moving on.

### Step 5 — Confirm and begin
"All good! Working on `[screen-file.html]`. If we need to touch `styles.css`, I'll flag it. Let's go!"

## Project Overview

A single-file HTML mockup of the **Luminora** iOS app UI — a luxury wellness/wearable device companion app with a dark, editorial aesthetic.

## Tech Stack

- Pure HTML/CSS/JS — no build tools, no frameworks, no dependencies
- Google Fonts: Playfair Display (serif) + Inter (sans-serif)

## File Structure

```
index.html            — Luminora (home) screen
screen-closet.html    — Closet screen
screen-explore.html   — Explore screen
screen-profile.html   — Profile screen
screen-journal.html   — Journal screen
styles.css            — Shared styles (phone frame, colors, typography, components)
assets/               — ALL images and media go here (see File & Image Hygiene)
```

Each screen is a self-contained HTML file that links to `styles.css`. Navigation between screens uses plain `<a href>` links — no JS router needed, works with local file:// protocol.

## Workflow for Two Designers

- Each designer works on their own screen file (e.g. `screen-closet.html`)
- Everyone works on `main` — no branching needed
- **Before every session**, always pull the latest (see Session Start above — this is mandatory)
- Screen-specific styles go in a `<style>` block inside the screen's HTML file
- Only edit `styles.css` when adding truly shared components — always flag this to the designer so they can tell their teammate

## Commit & Push — AFTER EVERY EDIT

**Every change gets committed and pushed immediately.** Do not batch up changes or wait until the end of the session. After each meaningful edit:

1. Run `git add` for the changed files (never `git add .` — be explicit)
2. Commit with a **clear, descriptive message** using the format `[area] what changed` — e.g. `[closet] add hero image and subtitle`, `[styles] add card hover state`, `[hygiene] move loose images to assets/`
3. Push to GitHub immediately: `git push`
4. Confirm to the designer in plain language: "Saved and uploaded: [what changed]"

This way either designer can always pull the latest, and if anything goes wrong, every change has a clear label to find and revert.

## File & Image Hygiene

The designers are new to VS Code and GitHub. They may drag files into the project root, add large images, or forget to organise assets. **Proactively check for this.**

### Rules

- ALL images go in the `assets/` folder. If images appear in the root or anywhere else, offer to move them.
- Use descriptive filenames: `closet-hero.png`, not `IMG_4832.png` or `Screenshot 2026-04-03.png`. Offer to rename messy filenames.
- Watch for very large files (>500 KB). Suggest resizing or compressing before committing. Warn them that GitHub is not meant for storing huge images.
- If an `assets/` folder doesn't exist yet, create it when the first image is added.
- Before committing, always run `git status` and review what's being added. If you see unexpected files (`.DS_Store`, `Thumbs.db`, `desktop.ini`, editor temp files), flag them and add to `.gitignore`.

### When you spot issues

Don't just warn — offer to fix it:
- "I see `hero-image.png` sitting in the project root. Want me to move it to `assets/` and update the reference in your HTML?"
- "There's a 4 MB image here — want me to check if we can use a smaller version?"
- "Looks like some system files got tracked. Let me add them to `.gitignore` so they don't end up on GitHub."

## End of Session

When the designer seems done or says goodbye:

1. Run `git status` to make sure nothing was left uncommitted (there shouldn't be, since we commit after every edit — but double-check)
2. If anything is uncommitted, commit and push it now
3. Show them a summary: "Here's everything we did today: [list of commits]"
4. Remind them: "All pushed! Your teammate will get these changes when they pull next time."

## If Something Goes Wrong

Things will break sometimes — a merge conflict, an accidental deletion, a weird error. When that happens:

1. **Stay calm and explain simply.** Tell the designer what happened in plain English: "It looks like both of you edited the same file at the same time, so there's a clash. I can fix this."
2. **Never run destructive commands without explaining first.** Before doing anything that deletes or overwrites work (like `git reset`, `git checkout -- file`, `git clean`), explain what it will do and ask for permission.
3. **When in doubt, do nothing.** If you're unsure whether an action could lose work, tell the designer: "I'm not 100% sure this is safe — let me explain the options and you can decide."
4. **Every change was committed individually** (see Commit & Push above), so you can always go back. Remind the designer: "Don't worry — every change we made was saved separately, so we can undo just the one that caused the problem."

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
- Kicker/label style: `font-size: 9-11px`, `letter-spacing: 0.2-0.25em`, `text-transform: uppercase`

### Layout

- Phone frame: 393x852px (iPhone 15 Pro dimensions)
- Centered on a black `body`
- `z-index` layers: bg (0) -> scene effects (1) -> content (5-10) -> tab bar (20) -> dynamic island (100)

## App Structure

- **Dynamic Island** — top pill cutout
- **Status Bar** — time + signal/wifi/battery icons
- **Top Nav** — Luminora wordmark + horizontal scrolling tab labels (Closet, Explore, Luminora, Profile, Journal)
- **Hero** — welcome heading, device selector, product image (drag-and-drop or file swap supported)
- **Device Status** — connected device card with pulsing dot
- **Today Strip** — horizontal scrolling mini-cards
- **Tab Bar** — bottom nav (Closet, Explore, Luminora, Profile)

## Conventions

- Scripts are inline in `<script>` at bottom of body — do not create separate JS files
- Image drop/swap uses `FileReader` + `localStorage` for persistence
- Maintain the luxury editorial tone — minimal, dark, typographic

## Keep CLAUDE.md Up to Date

After every push, check if `styles.css` changed. If new CSS variables or colour values were added or modified, **automatically update the Design System section** below to match. This is mechanical and safe to do without asking.

For anything else — new files, new screens, new conventions — **suggest the update to the designer** rather than making it silently:
"I noticed we added a new screen. Want me to update the project guide to include it?"

## CSS Guidelines

- **Shared styles** go in `styles.css` — phone frame, colors, typography, tab bar, and reusable components
- **Screen-specific styles** go in a `<style>` block inside each screen's HTML file
- When a designer asks for a style change, check whether it's screen-specific or shared before deciding where to put it
- If it needs to go in `styles.css`, tell the designer: "This is a shared style — I'll add it to `styles.css`. Let your teammate know so they can pull."
- Use the CSS variables defined in the Design System above — don't hardcode colour values
