# Ambitio PhD landing page — V4 design plan

Kind: software. The product is the signed-in PhD dashboard; access and the commercial offer remain unconfirmed.

## Visual direction

Center the story. Use a warm editorial surface, Ambitio blue, a dark ink, and the existing cloud-sky artwork as a cinematic but readable opening. Origin informs the centered scenic hero and large product reveal; Mercury informs the quiet centered copy and asymmetric editorial pauses. The supplied Solv video informs the pacing: large clear headline, compact proof or feature cards, and a strong shift from atmospheric opening into a simple product story. The supplied feature-layout image informs floating, modular cards, without reusing its copy or social-media chrome.

## Motion

- Hero: one scroll-linked, sticky chapter. Clouds drift and scale at a different rate than the centered headline; the actual dashboard screen lifts into view. Keep calls to action accessible throughout the opening.
- Challenge: four scroll-linked chapters on a sticky stage. Each question gets an editable SVG/CSS illustration: research direction, supervisors, programmes, funding. Never use invented dashboard data or raster emojis.
- Discovery: centered title, tabs, and a full-ratio real dashboard preview. Switch images with a short crossfade.
- Remaining sections: restrained reveal and layout changes inspired by Mercury and Origin; no timed carousel. Reduced motion gets a static readable presentation.

## Assets

- Reuse `public/assets/cloud-sky.png` for the hero. It is editorial atmosphere, not product evidence.
- Keep every `public/dashboard/*.jpg` screenshot fully visible in its natural ratio (`height:auto`, `object-fit:contain`). No browser-frame crop or forced height.
- Use original vector/CSS editorial illustrations for the Challenge, and simple HTML feature callouts based on observed dashboard capabilities. They are explanatory graphics, not fabricated product UI.

## Product guardrails

The finders, Lisa, Research Profile Audit, Shortlist Builder, and Interview Prep must be described according to the signed-in captures. Shortlist Builder and Interview Prep show Elite gates. Do not imply all finders are AI powered. Use the current dashboard URL for calls to action pending Dhruv's offer details.

## Sources

- User supplied: `Layout + Animations Reference.mp4`, `Product Feature Layout.webp`.
- [Mercury on Mobbin](https://mobbin.com/sites/mercury-b76b83da-80e8-408c-a49f-7991b331735b)
- [Origin on Mobbin](https://mobbin.com/sites/origin-2cd21568-f0f6-4f3c-b4d5-89df6c53ba41)
