# Export obsahu sab.cz

Stažený snapshot webu [sab.cz](https://www.sab.cz/) pro redesign.

## Soubory

| Soubor | Popis |
|--------|--------|
| `site-content.json` | Všechny texty, navigace, odkazy a metadata ze 7 stránek |
| `../public/sab-export/images/` | 111 stažených obrázků (loga, hero, ikony služeb, reference…) |

## Stránky v exportu

- `/` — homepage
- `/pro-klienty`
- `/o-nas`
- `/pro-investory`
- `/kontakty`
- `/ke-stazeni`
- `/kariera`

## Struktura JSON (každá stránka)

```json
{
  "id": "homepage",
  "url": "https://www.sab.cz/",
  "meta": { "title", "description" },
  "headings": [{ "level": "h1", "text": "..." }],
  "paragraphs": ["..."],
  "listItems": ["..."],
  "links": [{ "text", "href", "absolute" }],
  "buttons": ["..."],
  "images": [{ "src", "absolute", "alt", "local": "/sab-export/images/..." }],
  "navigation": [...],
  "blockquotes": [...],
  "emphasis": [...]
}
```

## Znovu exportovat

```bash
npm run export:sab
```

Exportováno: viz pole `exportedAt` v `site-content.json`.
