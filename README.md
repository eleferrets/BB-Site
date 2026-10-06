# Brian Balthazar — personal site

One-page portfolio built with React and deployed on Netlify.

## Run it

```
npm install
npm start        # dev server
npm run build    # production build (Netlify runs: CI= npm run build)
```

## Where things live

- `src/data.js` — profile details, and the six projects. Edit content here.
- `src/components/` — Navbar, About (hero), Projects, Contact, Footer.
- `src/index.css` — all styling (plain CSS, dark amber theme, Manrope).
- `public/img/` — optimized project screenshots and portrait (16:10 for projects).

## Contact form (Netlify)

The form in `src/components/Contact.js` POSTs to `/` with `form-name=contact`.
Netlify only detects forms in the static HTML, so the hidden `contact` form in
`public/index.html` must stay in sync with it (fields: `name`, `email`,
`message`, plus the `bot-field` honeypot).
