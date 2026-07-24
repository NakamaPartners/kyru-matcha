# Kyru Matcha

## Overview
Brand website for Kyru Matcha — a Vietnamese-owned matcha pop-up project (Instagram: @kyrumatcha). Single-page, presentation-first site: hero, pop-up ticker, drink catalogue, event list, KYRU X NAMI giveaway band, footer with email signup. No backend; email forms are UI-only.

## Architecture
- pnpm monorepo. Main artifact: `artifacts/kyru-matcha` (React + Vite + Tailwind v4, wouter). Workflow: `artifacts/kyru-matcha: web`.
- Photos/mascot are copied into `artifacts/kyru-matcha/public/images/` (originals in `attached_assets/`).
- Main page: `src/pages/Home.tsx`; theme tokens in `src/index.css`.

## Design rules (from user's Notion moodboard — follow strictly)
- Palette: base #F1EFE8 bone white (~70%), #181916 ink black, #264866 denim blue accent, #76805B matcha green, #B8B7B0 grey, #796957 brown; #3049C9 cobalt only for handwritten annotations. No gradients or bright greens.
- Type: Instrument Sans (headlines 500–600, tight), IBM Plex Mono for dates/locations/labels, Instrument Serif Italic only for campaign words ("giveaway").
- Voice: brief, lowercase, slightly cryptic. No rounded cards, no emojis in UI, thin 1px rules, arrow-text CTAs.
- Layout follows the user's mockup (`attached_assets/image_1784859145526.png`) closely — no exceptions.
- Real menu names only: white rabbit matcha, white rabbit hojicha, the make up. Do not invent facts (events, sourcing claims).

## User preferences
- (none recorded yet)
