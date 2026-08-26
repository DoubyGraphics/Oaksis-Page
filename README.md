# Oaksis — Homepage (Replit design, integrated)

This is your Replit-designed homepage, fully ported into working HTML/CSS/JS
— including real interactivity that the Replit preview alone doesn't give
you (it strips JavaScript when saved), rebuilt from scratch here:

- **Ripple canvas** — a real cursor-reactive water ripple effect in the hero
  (canvas-based, in `js/main.js`)
- **Scroll-triggered reveals** — sections and the root-line drawings now
  animate in as you scroll to them, instead of playing once on page load
- **Mobile menu** — working open/close toggle

## What was fixed from the Replit output

Replit's design tool invented some business details as placeholder content.
Fixed here, but double check these are right for you:

- **Location**: changed "Lagos / remote" → "Remote, worldwide" (update to
  your real location if you want it stated)
- **Prices**: fabricated ₦480k / ₦1.8m replaced with `[ADD PRICE]`
  placeholders — search `ADD PRICE` in `index.html`
- **Work section**: the fictional "coastal conservation collective" case
  study was replaced with a generic placeholder marked `SPEC PROJECT 01` —
  search for `EDIT ME` in `index.html` to find and replace it with your real
  spec project

## New copy adopted from Replit

The three service tiers are now named **The Seed / The Grove / The Canopy**
(previously Brand Foundation / Applied Creative / Ongoing Partnership), with
new taglines throughout. This carries through once the other pages are
built too, so naming stays consistent.

## View it

Copy your GC Methane `.ttf` files into `fonts/` (same filenames as before),
then double-click `index.html`.

## Structure

Same pattern as before — `css/styles.css` (one shared stylesheet) and
`js/main.js` (one shared script). This is currently just the homepage;
about/services/pricing/work/start-a-project still need the same treatment
once you've reviewed this one.
