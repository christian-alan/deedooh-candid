# deedooh · Candid

The Candid landing page (same content as Signal Bold E, in the Candid theme: sky and white
sections, light Rubik headlines, rounded photo cards and time-of-day status pills), built with React 19, Vite 6 and Tailwind CSS 4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  App.jsx                 page order
  index.css               Tailwind import, brand tokens (@theme) and component styles
  data/content.js         all copy and section data (publishers, steps, personas, cities…)
  data/globe.js           land dots and coastlines for the globe
  hooks/useAutoAdvance.js timer behind the auto-advancing cards and steps
  components/
    Hero.jsx              nav, headline + subline, campaign prompt, two photo cards
    Prompt.jsx            campaign brief box (typewriter, chips, fake planning)
    PublisherBar.jsx      sticky rolling publisher logos
    WhatWeDo.jsx          expanding video cards with time-of-day pills and the bleeding mark
    HowItWorks.jsx        3 timed steps + photo scenes with overlay windows
    Personas.jsx          Local / Global / Agencies pill tabs with photo card
    Proof.jsx             testimonial cards
    ScreenNetwork.jsx     network stat, city pills, globe card
    Globe.jsx             canvas globe (drag to spin, rotates to the picked city)
    Faq.jsx               accordion + Sara card
    Footer.jsx            CTA photo card, links, big navy wordmark
    ChatWidget.jsx        "Sara" support chat
public/assets/            images, logos, publisher wordmarks, videos
```

## Styling

Brand colours are Tailwind tokens, so you can write `bg-sky` (#EAF2FF page background), `bg-brand`, `text-sun`, `text-navy`,
`bg-lavender`, `text-mint`, `text-haze`, `text-slate`, `text-mist`. Fonts are Rubik
(`font-sans`) and IBM Plex Mono (`font-mono`), loaded from Google Fonts in `index.html`.

Layout and typography are Tailwind utilities in the JSX. Animations, state selectors
(`[aria-selected]`, `details[open]`), pseudo-elements and the scene art live as component
classes in `index.css`.

## Placeholders to replace

- `public/assets/video/*`: stand-in clips made from photos. Swap in real DOOH footage
  (same file names, 8–10 s loops).
- Proof brands, people and quotes, and the chat persona "Sara Lind", are invented.
- Links point to `#`.
- Desktop-first: the design was made at 1440 px. It works on phones without horizontal
  scrolling, but the smaller layouts haven't been designed yet.
