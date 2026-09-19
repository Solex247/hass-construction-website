# Hass Construction Company — Next.js Frontend Assessment

A premium, responsive construction-company landing page built with the Next.js App Router and Tailwind CSS.

## Stack

- Next.js 16.3.3 (Active LTS at project creation)
- React 19.2
- Tailwind CSS 4.3.3
- TypeScript
- Next/Image for optimized images
- CSS-only micro-animations (no heavy animation library)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production check

```bash
npm run build
npm start
```

## Notes

- Replace the placeholder email/phone in `components/home-page.tsx` with the client's real contact details before deployment.
- Images are stored in `public/images` and served through Next/Image.
- The page is intentionally a single polished landing page for an assessment. Sections are linked through the header navigation.
- Tailwind v4 uses the official PostCSS integration; there is no legacy `tailwind.config.js` requirement.
