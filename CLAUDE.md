# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **portfolio website** for Francois Beyers, built with Next.js 16 (App Router), React 19, and TypeScript. The site showcases services (SEO, WordPress development, AI automation), projects, and contact information. The design follows a **minimalist aesthetic** inspired by modern portfolio sites, with clean typography, monochromatic color scheme, and generous whitespace.

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

### Design System (Minimalist)

#### Typography
- **Font**: Clash Display (medium weight, loaded via localFont from `public/ClashDisplay-Bold.woff2`)
- **Sizes**: Large headings (5xl-7xl), medium text (xl-2xl), body (sm-base)
- **Approach**: Clean hierarchy, generous spacing, italic emphasis for key phrases

#### Colors (Monochromatic)
```
Primary: #000000 (black)
Background: #FFFFFF (white)
Text: black with opacity (black/60, black/40, black/20 for hierarchy)
Borders: black/10 for subtle dividers
Accents: Green/Red for success/error states
```

#### Spacing System
- Sections: `py-32` (128px vertical padding)
- Containers: `px-6` with `max-w-6xl` center alignment
- Grids: `gap-6` to `gap-12` depending on content density

#### Components
- **No component library** - Pure Tailwind CSS with native HTML elements
- Simple borders: `border border-black/10`
- Hover effects: opacity changes (`hover:opacity-60`) and border darkening
- Transitions: 0.6s duration for refined, slower animations
- No box shadows - completely flat design

### Critical Design Rules

1. **Pure Tailwind CSS only** - No component libraries. Use native HTML elements styled with Tailwind utilities.

2. **Minimalist hover effects**: Use `hover:opacity-60` for text links and `hover:border-black/30` for cards. Avoid scale transforms except for subtle effects.

3. **Typography emphasis**: Use `<i>` tags for italic emphasis on key phrases (e.g., "great attention to details").

4. **Consistent spacing**: Always use `py-32` for section vertical padding and `px-6` for horizontal padding. Use `max-w-6xl mx-auto` for content containers.

5. **Border style**: All borders should be `border-black/10` for subtle definition. Cards should use `border border-black/10 p-8`.

6. **Framer Motion**: Used for page animations with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, duration 0.6s (slower, more refined).

### Email Integration

- **Resend API** for contact form email delivery
- API endpoint: `app/api/contact/route.ts`
- Environment variable: `RESEND_API_KEY` (stored in `.env.local`)
- Sends to: `francois@beyers.tech` with reply-to header
- Free tier: 3,000 emails/month
- Setup guide: `RESEND_SETUP.md`

### Testing

- **Playwright tests** in `tests/` directory
- Test suites: `homepage.spec.ts`, `snake-game.spec.ts`, `services.spec.ts`, `accessibility.spec.ts`
- Tests validate mobile-first design, navigation, accessibility (WCAG)

### Deployment

- Hosted on **Vercel**
- Sitemap auto-generated post-build via `next-sitemap`
- Configuration in `next-sitemap.config.js`
- **Important**: Add `RESEND_API_KEY` environment variable in Vercel for production email functionality

## Key Implementation Notes

- **Next.js 16 App Router**: All pages are Server Components by default, use `"use client"` for interactivity
- **Dynamic routes**: Service pages use `use(params)` to unwrap promises in Next.js 16
- **Font loading**: Clash Display loaded via `next/font/local` in `app/layout.tsx`
- **No component library**: Pure Tailwind CSS - all components are native HTML elements
- **API Routes**: Contact form uses `/app/api/contact/route.ts` for email sending
- **Environment variables**: Store secrets in `.env.local` (gitignored)
- **Git workflow**: Always create descriptive commits with Claude Code signature:
  ```
  🤖 Generated with [Claude Code](https://claude.com/claude-code)
  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

## Common Gotchas

1. **Don't use `generateStaticParams` with `"use client"`** - causes Next.js errors
2. **Tailwind `@apply` only works with existing classes** - custom utilities must be defined in config
3. **Service slugs must match** between `data/services.ts` and URL routing
4. **Mobile viewport**: Test layouts at 375px to ensure proper responsive behavior
5. **Environment variables**: Server-side only - accessed via `process.env` in API routes/Server Components
6. **Email testing**: Requires valid `RESEND_API_KEY` in `.env.local` for contact form to work

## SEO Implementation

Comprehensive SEO documentation available in project root:
- **START_HERE.md** - Navigation guide for all SEO docs
- **SEO_QUICK_START.md** - Quick reference and implementation timeline
- **SEO_IMPLEMENTATION_GUIDE.md** - Code-ready templates for schema markup, meta tags, etc.
- **SEO_ANALYSIS.md** - Full site audit with recommendations
- **SEO_CHECKLIST.md** - Step-by-step implementation tracking

Priority Phase 1 items (4-6 hours):
- Add schema markup (Organization, Service, FAQ)
- Implement dynamic meta tags per page
- Add FAQ sections to service pages
- Create robots.txt and improve sitemap
