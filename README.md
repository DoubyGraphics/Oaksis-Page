# Oaksis — Website

Plain HTML, with real separate CSS and JS files (the way a typical hand-built
site is structured) — no build step, no Node, no framework.

## File structure

```
index.html              — homepage
about.html                — about + team bios
services.html              — in-depth services
pricing.html                — pricing (placeholder prices — see below)
work.html                     — portfolio
start-a-project.html          — onboarding form + contact
css/styles.css                 — all styling: design tokens, layout, components
js/main.js                      — mobile nav toggle + form submit handling
fonts/                            — put your GC Methane .ttf files here
images/                             — put real work/photo images here
```

Every page links the same `css/styles.css` and `js/main.js` — so unlike the
previous version, there's one shared stylesheet and script, not code repeated
per page. Changing a color or the nav behavior updates every page from one
file.

## View it

Double-click `index.html` — opens straight in your browser, no server needed.

## Add your GC Methane font files

This site references GC Methane, self-hosted (not from Google Fonts):

1. Copy your `.ttf` files into the `fonts` folder, using these exact names
   (or update the paths in `css/styles.css` under `/* Fonts */` to match
   whatever you actually have):
   `GCMethaneDemo-Thin.ttf`, `GCMethaneDemo-ExtraLight.ttf`,
   `GCMethaneDemo-Light.ttf`, `GCMethaneDemo-Regular.ttf`,
   `GCMethaneDemo-Medium.ttf`, `GCMethaneDemo-SemiBold.ttf`,
   `GCMethaneDemo-Bold.ttf`, `GCMethaneDemo-ExtraBold.ttf`
2. Save, refresh in your browser.

## Editing content

Everything is plain HTML — open any file in a text editor.

- **Colors, fonts, spacing, every component's style**: all in `css/styles.css`,
  under `:root` at the top for the color/font tokens
- **Copy**: directly in each page's HTML — search for the text you want to
  change
- **Team bios**: `about.html` — search for `team-card`
- **Prices**: `pricing.html` — search for `ADD PRICE`
- **Contact email**: search for `hello@oaksisstudio.com` in
  `start-a-project.html`
- **Social links**: bottom of `css` — actually in each page's `<footer>`,
  search for `Instagram`

## Set up the project form (Formspree)

1. Create a free account at https://formspree.io
2. Create a form, copy the ID it gives you
3. In `start-a-project.html`, find `YOUR_FORM_ID` in the `<form action=...>`
   line and replace it with your real ID

The form now submits via JavaScript (`js/main.js`) and shows a thank-you
message in place, instead of redirecting away from the page.

## Add real work images

1. Put image files in `/images`
2. In `work.html`, find the comment near the top showing exactly what to
   replace each placeholder `<div class="work-card__media">` block with

## Push to GitHub / deploy to Vercel

```bash
git add .
git commit -m "Redesign: separate CSS/JS, editorial layout"
git push
```

Vercel auto-redeploys on push — no config needed for a static site like this.
