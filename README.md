# Oaksis — Plain HTML Site

No build step, no Node, no TypeScript. Just HTML files you can open directly
in a browser and edit like any normal HTML.

## View it

Just double-click `index.html` — it opens in your browser. No server needed.

Every link between pages (About, Services, Pricing, Work, Start a Project)
works locally right away.

## Files

```
index.html            — homepage
about.html             — about + team bios
services.html          — in-depth services
pricing.html           — pricing (has placeholder prices, see below)
work.html               — portfolio
start-a-project.html    — onboarding form + contact
README.md
```

There's no shared file for the nav/footer — each page has its own copy of
that HTML. That's normal for a plain multi-page site; it just means if you
ever change the nav (e.g. add a new page link), you'll want to copy that
change into each file. Use your editor's "Find in Files" / "Find & Replace
across files" feature to do that quickly across all 6 at once.

## Editing content

Open any `.html` file in a text editor (VS Code, Notepad++, even Notepad).
It's regular HTML with Tailwind CSS utility classes (like `class="text-xl
text-ink"`) for styling — no build step required, styling updates the moment
you save and refresh the page in your browser.

- **Colors**: search for `oak`, `moss`, `teal`, `oasis`, `sand`, `ink` — these
  are custom color names defined once at the top of each file inside the
  `<script>tailwind.config = {...}</script>` block. To change a color itself
  (not just where it's used), edit the hex code there.
- **Team bios**: `about.html` — search for `team-card`, edit the name/role/bio
  text directly, or copy a whole `team-card` block to add another person
- **Prices**: `pricing.html` — search for `ADD PRICE`
- **Contact email**: search for `hello@oaksisstudio.com` in `start-a-project.html`
- **Social links**: search for `Instagram` / `LinkedIn` near the bottom of
  each file (footer)

## Set up the project form (Formspree)

The form on `start-a-project.html` needs a Formspree endpoint to actually
deliver submissions to your inbox:

1. Go to https://formspree.io and create a free account
2. Create a new form, copy the form ID it gives you (looks like `xzzpqrst`)
3. Open `start-a-project.html`, find `YOUR_FORM_ID` in the `<form action=...>`
   line near the top of the form, and replace it with your real ID
4. Submissions arrive by email — free tier covers 50/month

No JavaScript is needed for the form to work — it's a plain HTML form
submission.

## Add real work images

Once you have final images:

1. Create a folder called `images` next to these HTML files
2. Put your image files in there
3. In `work.html`, find the comment near the top of the work section — it
   shows exactly what to replace the placeholder gradient block with

## Push to GitHub / deploy to Vercel

Same as before:

```bash
git init
git add .
git commit -m "Convert to plain HTML"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then import the repo at vercel.com/new — Vercel auto-detects plain HTML/static
sites too, no config needed.
