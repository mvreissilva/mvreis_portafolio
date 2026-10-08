# Marcus Reis — Portfolio (Clean Version)

Portfolio minimalista inspirado en Carlos Molina. Next.js 15 + TypeScript + Tailwind.
Light/Dark mode. Single page + case studies. Deploy en Vercel gratis.

## Arrancar en local
```bash
npm install && npm run dev
```

## Personalizar

**Figma images** — en cada case study hay placeholders. Copia tus capturas en `/public/assets/` y reemplaza los divs de placeholder por:
```tsx
<img src="/assets/tu-imagen.webp" alt="descripción" className="w-full rounded-lg" />
```

**Link Figma prototipo** — en `app/work/camperoteca/page.tsx`, al final, reemplaza el span `cursor-not-allowed` por:
```tsx
<a href="TU_LINK_FIGMA" target="_blank" className="text-sm text-[rgb(var(--accent))]">Ver prototipo ↗</a>
```

## Deploy en Vercel (gratuito)
1. `git init && git add . && git commit -m "init"`
2. Crear repo en github.com (público o privado)
3. `git remote add origin https://github.com/TU_USER/marcus-portfolio.git`
4. `git push -u origin main`
5. vercel.com → Import → selecciona el repo → Deploy
6. Tu URL: `marcus-portfolio.vercel.app`

## Estructura
```
app/
  page.tsx              ← Home (Hero + Work + About + Skills + Contact)
  work/
    camperoteca/page.tsx
    riptide/page.tsx
components/
  layout/ Nav + ThemeToggle
  ui/     Reveal
public/
  assets/ ← CV + imágenes de Figma aquí
```
