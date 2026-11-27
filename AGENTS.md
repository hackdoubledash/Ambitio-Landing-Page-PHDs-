<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- codebase-memory-mcp:start -->
For structural codebase exploration, use the installed `codebase-memory` skill.
<!-- codebase-memory-mcp:end -->

## Ambitio project context

This repository is a local landing-page concept for Ambitio's student dashboard. The current signed-in product evidence is PhD focused. Ambitio helps students plan university applications with data-backed guidance and AI tools. The proposed page should feel visually ambitious while explaining the product plainly.

### Working autonomy

Do any action you can complete yourself, including launching the needed app or local preview and verifying the result. Continue through routine implementation and review steps without handing them back to the user. Ask only when a required decision, missing access, or applicable approval rule truly prevents progress.

### Strategy

- Ground product statements in the [dashboard captures](research/dashboard-screens/) and [Ambitio's public site](https://ambitio.club/). Distinguish observed tools from advertised or gated tools.
- Help a prospective PhD applicant understand three connected jobs: discover programmes, supervisors and funding; understand their research profile; plan applications and interviews.
- Show AI in the work it supports. Lisa is an in-dashboard assistant, the Research Profile Audit is presented as an AI audit, and the current Interview Prep screen advertises AI mock interviews behind an Elite gate. Do not imply every finder is AI-powered.
- Keep copy specific, direct and student-centered. Avoid guaranteed admissions or funding, invented results, unapproved testimonials and unsupported numerical claims.
- Treat the separately sold dashboard offer, pricing, access tiers and final conversion destination as unconfirmed. Current dashboard upsells for some tools point to Ambitio Elite.
- Keep design decisions editable as the user reviews the page. This file intentionally does not prescribe the website layout, section order or animation choreography.

### Working copy

These lines are the current draft, not final approved brand copy:

- Core promise: “The right PhD path starts with clarity.”
- Explanation: “Explore programmes, supervisors and funding. Understand your research profile. See your next move in one place.”
- Problem framing: “A PhD search is never just a search.” The decision involves research direction, programme fit, supervisors, funding and next steps.
- Discovery: “Go where your research could take you.” Explain what each finder actually filters and reveals.
- Detail: “A result is only the beginning.” Explain the programme information available beyond a search result.
- AI: “More useful questions. More informed moves.” Pair Lisa and the audit with their actual interface rather than broad AI claims.
- Planning: “Build a shortlist. Prepare for what follows.” State the current Elite access gate for Shortlist Builder and Interview Prep.
- Closing thought: “Make the next move with a clearer view.”

When Dhruv confirms the commercial offer, revise access language and calls to action before treating this copy as final.

### Images and provenance

- `research/dashboard-screens/` contains nine signed-in dashboard captures gathered for product research. These are the evidence for product descriptions.
- `public/dashboard/` contains selected copies used in the local landing page. The screenshots should stay recognizable and must not be presented as fabricated product states.
- `public/assets/cloud-sky.png` is a generated editorial background asset. It contains no product UI or factual claim.
- The three user-provided reference screenshots establish a blue-sky/cloud mood, floating product cards and modern SaaS presentation. They are visual references, not Ambitio product evidence.
- Mobbin references are structural and interaction inspiration only. Attribute them via Mobbin links; do not reuse their copy or imply their screens belong to Ambitio.
- The saved Mobbin reference captures and source index are in `research/mobbin-reference-export/`; a review copy is kept on the Desktop.

The detailed research and copy rationale lives in [research/landing-page-strategy.md](research/landing-page-strategy.md). That document may discuss possible structure; this file does not lock one in.
