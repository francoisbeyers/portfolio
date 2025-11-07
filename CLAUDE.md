# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **portfolio website** for Francois Beyers, built with Next.js 16 (App Router), React 19, and TypeScript. The site showcases services (SEO, WordPress development, AI automation), projects, and contact information. The design follows **Klarna's aesthetic** with bold typography, flat design, pastel colors, and fluid responsive sizing.

## Development Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:3000
npm run build            # Production build + sitemap generation
npm run start            # Start production server
npm run lint             # Run ESLint

# Testing
npm run test             # Run all Playwright tests
npm run test:mobile      # Run mobile-specific tests
npm run test:ui          # Open Playwright UI mode
```

**Important**: Requires Node.js >= 22.x

## Architecture

### App Router Structure

```
app/
├── layout.tsx           # Root layout with navigation/footer
├── page.tsx             # Homepage with hero, services, projects
├── contact/page.tsx     # Contact form
├── services/
│   ├── page.tsx         # Services listing
│   └── [slug]/page.tsx  # Dynamic service detail pages
└── projects/page.tsx    # Projects showcase
```

### Data Layer

- **`data/services.ts`**: Service definitions (SEO, WordPress, AI Automation, etc.)
- **`data/projects.ts`**: Project portfolio data with tags and service associations
- **`types/index.ts`**: TypeScript interfaces for Service, Project, BlogPost, ContactFormData

Services and projects are **statically defined** in TypeScript files, not database-driven. Service pages use dynamic routing with `getServiceBySlug()` helper.

### Design System (Klarna-Inspired)

#### Typography
- **Display sizes**: `text-display-xl` (46-120px), `text-display-lg` (40-100px), `text-display-md` (32-80px), `text-display-sm` (25-60px)
- **Body sizes**: `text-body-lg` (18-24px), `text-body-md` (16-20px), `text-body-sm` (14px)
- **Font**: Clash Display (bold, loaded via localFont from `public/ClashDisplay-Bold.woff2`)
- **Line-height**: 1 for headings (tight), 1.3 for body
- **Letter-spacing**: -0.03em for headings, -0.02em for body

#### Colors (Exact Klarna Palette)
```
Pink: #FFB3C7, Cyan: #99F8FF, Yellow: #FFF999
Lavender: #F0E3FF, Peach: #FFE6CC, Mint: #9EFFBB
Light Blue: #D1E2FF, Off-White: #F9F9F9, Charcoal: #000000
```

#### Spacing System
- `p-container`: `max(20px, 2.222vw)` - card/section padding
- `py-section`: `max(70px, 6.370vw)` - vertical section spacing
- `gap-gap`: `max(30px, 2.593vw)` - grid/flex gaps

#### Components
- `rounded-klarna`: 50px border radius
- Flat design with **no shadows** (box-shadow: none)
- Buttons: `.btn-klarna-primary` (black bg) and `.btn-klarna-secondary` (transparent with border)
- Transitions: 250ms cubic-bezier(0.4, 0, 0.2, 1)

### Critical Design Rules

1. **Card titles must use fluid font sizing** to prevent overflow:
   ```tsx
   // Service/Project cards
   style={{ fontSize: 'clamp(20px, 2.5vw, 36px)', lineHeight: '1.15' }}
   ```
   Do NOT use `text-display-sm` in cards - it causes text to overflow on smaller screens.

2. **Always add `overflow-hidden` and `break-words`** to card containers to prevent text breaking out.

3. **Tailwind custom classes**: Only use `transition-all`, not `transition-klarna` (which doesn't exist). Use `duration-klarna` and `ease-klarna` for timing.

4. **Framer Motion**: Used for page animations with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, duration 0.25s (fast, Klarna-style).

### Testing

- **Playwright tests** in `tests/` directory
- Test suites: `homepage.spec.ts`, `snake-game.spec.ts`, `services.spec.ts`, `accessibility.spec.ts`
- Tests validate mobile-first design, navigation, accessibility (WCAG)

### Deployment

- Hosted on **Vercel**
- Sitemap auto-generated post-build via `next-sitemap`
- Configuration in `next-sitemap.config.js`

## Key Implementation Notes

- **Next.js 16 App Router**: All pages are Server Components by default, use `"use client"` for interactivity
- **Dynamic routes**: Service pages use `use(params)` to unwrap promises in Next.js 16
- **Font loading**: Clash Display loaded via `next/font/local` in `app/layout.tsx`
- **Git workflow**: Always create descriptive commits with Claude Code signature:
  ```
  🤖 Generated with [Claude Code](https://claude.com/claude-code)
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

## Common Gotchas

1. **Don't use `generateStaticParams` with `"use client"`** - causes Next.js errors
2. **Tailwind `@apply` only works with existing classes** - custom utilities must be defined in config
3. **Service slugs must match** between `data/services.ts` and URL routing
4. **Mobile viewport**: Test card layouts at 375px to ensure text doesn't overflow
