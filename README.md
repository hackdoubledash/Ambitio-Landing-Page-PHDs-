# Ambitio PhD dashboard landing page — centered scroll version

A local Next.js concept for a separately marketed Ambitio dashboard. The page currently focuses on the PhD workflow visible in the signed-in product: programme and supervisor discovery, funding, profile audit, Lisa, shortlisting, and applications.

## Design direction

The current version uses a centered cloud hero and a scroll-led, four-question Challenge section. Real dashboard captures remain fully visible within browser frames. The other sections use product-led cards, interactive finder and planning selectors, a concise FAQ, and a full footer. Framer Motion respects reduced-motion preferences.

The [Mercury](https://mobbin.com/sites/mercury-b76b83da-80e8-408c-a49f-7991b331735b) and [Origin](https://mobbin.com/sites/origin-2cd21568-f0f6-4f3c-b4d5-89df6c53ba41) references informed the editorial type, centered hero, scenic background, and product montage. Earlier reference notes remain below.

- Mercury and Origin: centered editorial hero, scenic background, and product montage.
- Figma and Intercom: interactive finder and planning selectors.
- Miro and Superhuman: product-led AI cards.
- Mintlify: concise accordion FAQ.
- User-provided Lantern footer reference: blue gradient, compact links, and oversized wordmark.

The previous layouts are preserved in `research/versions/`. The reference screenshots and source links are indexed in `research/mobbin-reference-export/README.md`. The current design plan is in `.taste-skill/plan-v4.md`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Source of product details

- The signed-in dashboard was reviewed on 25 November 2026.
- Representative captures are in [`research/dashboard-screens`](research/dashboard-screens).
- The landing page uses selected captures from [`public/dashboard`](public/dashboard).
- The public [Ambitio site](https://ambitio.club/) informed the broader brand and student-first positioning.

## Brief-dependent decisions

- Confirm whether this landing page is specifically for the PhD dashboard or for a wider student product.
- Confirm the standalone offer, access levels, price, and desired call to action. Current dashboard Elite upsells lead to Ambitio's counselling offer.
- Approve any public proof, statistics, testimonials, or outcomes before adding them.
- Replace or approve the current copy and selected product captures.

The current call to action opens the existing dashboard. No separate checkout or signup path is represented.
