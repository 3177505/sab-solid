# sab-solid

Redesign homepage [sab.cz](https://www.sab.cz/) — UX workshop pro SAB Finance.

## Struktura

| Route | Popis |
|-------|--------|
| `/` | Hub — přehled fází projektu |
| `/analysis` | Audit & strategie |
| `/ux` | UX kostra homepage s (i) poznámkami |
| `/ui/classic` | UI varianta — Classic |
| `/ui/premium` | UI varianta — Premium |
| `/tokens` | Design tokeny |

## Export stávajícího sab.cz

```bash
npm run export:sab
```

- **JSON:** `content/sab-export/site-content.json` — texty ze 7 stránek
- **Obrázky:** `public/sab-export/images/` — stažené assety (111 souborů)

## Vývoj

```bash
npm install
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

## Stack

Next.js 15 · TypeScript · SCSS (`components/_setup/`)
