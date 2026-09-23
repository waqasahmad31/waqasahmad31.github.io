# waqasahmad31.github.io

Personal site for Waqas Ahmad — senior full-stack .NET & Angular developer and technical team lead.

Built as **case studies rather than a project gallery**. Most of the work worth discussing is private
or client-owned, so each piece explains the problem, the trade-offs and the outcome instead of
linking to a repository that does not exist publicly.

| | |
|---|---|
| **Framework** | Astro 7 (static output, zero client JS) |
| **Styling** | Plain CSS with a token system — no framework dependency |
| **Hosting** | GitHub Pages, deployed from `main` by GitHub Actions |
| **Live** | https://waqasahmad31.github.io |

## Local development

Requires Node 22.12 or later.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output into dist/
npm run preview  # serve the built site
```

## Structure

```
src/
├── data/
│   └── profile.ts         # single source of truth: bio, skills, experience, all 17 projects
├── layouts/
│   ├── Layout.astro       # document shell, SEO tags, Person schema
│   └── CaseLayout.astro   # case-study chrome: header, meta grid, article styles
├── components/
│   ├── Header.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro        # hero, impact figures, featured case studies, skills, domains
│   ├── about.astro        # the full CV: profile, skills, experience, education, languages
│   └── work/
│       ├── index.astro         # every project, grouped, with detail and stack
│       ├── abis.astro          # scaling a national identity system
│       ├── coreflow.astro      # ERP architecture
│       └── healthcarems.astro  # clinical platform, monolith-by-choice
└── styles/
    └── tokens.css         # colour, type and spacing tokens; light + dark
```

## Conventions

- **All content lives in `src/data/profile.ts`.** Pages render it; nothing is retyped between the
  home page, the work page and the CV. Adding a project or a skill means editing that one file.
- **Colours and type come from `src/styles/tokens.css`.** Light and dark are both defined there via
  `prefers-color-scheme`. Do not hard-code a colour in a component.
- **`CaseLayout.astro` owns case-study typography** through a global style block scoped to `.body`.
  New case studies should pass their metadata as props and write plain HTML in the slot.
- **No client-side JavaScript.** The site is static by design; keep it that way unless something
  genuinely needs interactivity.
- **Grid items carry `min-width: 0`.** Long unbroken strings (repository names) otherwise widen the
  track and force horizontal scroll on phones.

## Standalone by design

The site is meant to work as a complete substitute for the CV — if someone is sent only this link,
every fact from the CV is reachable: full contact details including phone, the complete skill list
(legacy stacks included), every responsibility for every role, education, and languages. The `/about/`
page carries the CV in full; `/work/` carries every project individually.

## Content note

The ABIS case study describes a government biometric programme. It is deliberately limited to
engineering technique — no system internals, schemas, vendors or operational detail, and nothing
beyond what already appears on a public CV. Keep it that way when editing.
