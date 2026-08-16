# Oaksis — Landing Page

Next.js 14 + Tailwind CSS landing page for Oaksis Studio.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.tsx           — fonts (Fraunces + Work Sans) and page metadata
  page.tsx              — homepage (assembles teaser sections)
  globals.css           — Tailwind entry + base styles
  about/page.tsx         — About page
  services/page.tsx      — in-depth Services page
  pricing/page.tsx       — Pricing page (placeholder prices — see below)
  work/page.tsx           — Work/portfolio page
  start-a-project/page.tsx — onboarding form + direct contact
components/
  Nav.tsx           — site-wide header nav w/ mobile menu, links to every page
  Footer.tsx        — shared footer
  PageHero.tsx      — reusable compact hero banner used on every secondary page
  Hero.tsx          — homepage hero
  Services.tsx      — homepage services teaser (3-tier ladder)
  About.tsx         — homepage about teaser
  WorkTeaser.tsx    — homepage work preview grid
  CtaBand.tsx       — reusable "start a project" CTA band
  ProjectForm.tsx   — the onboarding form (see Formspree setup below)
  VeinDivider.tsx   — the signature root→ripple line motif used as section dividers
tailwind.config.ts  — Oaksis color palette + font tokens
```

## Set up the project form (Formspree)

The form on `/start-a-project` needs a Formspree endpoint to actually deliver
submissions to your inbox — it won't send anywhere until you do this:

1. Go to https://formspree.io and create a free account
2. Create a new form, and copy the form ID it gives you (looks like `xzzpqrst`)
3. Open `components/ProjectForm.tsx` and replace `YOUR_FORM_ID` in the
   `action="https://formspree.io/f/YOUR_FORM_ID"` line with your real ID
4. Submissions will now arrive by email — the free tier covers 50/month

## Add real work images

Once you have final images for the Work page:

1. Add image files to `/public/work/` (create the folder if it doesn't exist)
2. Open `app/work/page.tsx` — each project's placeholder gradient block has a
   comment showing exactly how to swap it for a real `next/image` `<Image>`
   component

## Editing content

- **Colors**: `tailwind.config.ts` — `oak`, `moss`, `teal`, `oasis`, `sand`, `ink`
- **Copy**: each page/section's text lives directly in its file — e.g. edit
  the `tiers` array in `app/services/page.tsx` to change service descriptions
- **Prices**: `app/pricing/page.tsx` — currently placeholders marked
  `₦[ADD PRICE]`, replace with your real rates
- **Contact email**: appears in `app/start-a-project/page.tsx` — swap
  `hello@oaksisstudio.com`
- **Social links**: `components/Footer.tsx` — currently placeholder `#` hrefs

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Oaksis landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Framework preset should auto-detect as **Next.js** — no config needed
4. Click **Deploy**

Every future push to `main` will auto-redeploy.

## Notes

- Fonts load from Google Fonts at build time via `next/font/google` — this
  requires internet access when running `npm run build` or `npm run dev`
  (works automatically on Vercel and on your local machine).
- No environment variables are required for this project.
