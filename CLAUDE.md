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

#### Colors (Minimalist with Accent)
```
Primary: #000000 (black)
Background: #FFFFFF (white)
Text: black with opacity (black/60, black/40, black/20 for hierarchy)
Borders: black/10 for subtle dividers
Accent: Rusty Red rgb(213, 41, 65) - defined as 'rusty-red' in tailwind.config.js
  - Used for hover states, active navigation, emphasized text
  - Provides bold contrast while maintaining minimalist aesthetic
```

#### Spacing System
- Sections: `py-32` (128px vertical padding)
- Containers: `px-6` with `max-w-6xl` center alignment
- Grids: `gap-6` to `gap-12` depending on content density

#### Components
- **No component library** - Pure Tailwind CSS with native HTML elements
- Simple borders: `border border-black/10`
- Hover effects:
  - Text links: opacity changes (`hover:opacity-60`) or Rusty Red color
  - Cards: border changes to `hover:border-rusty-red`
  - Buttons: `hover:bg-rusty-red hover:text-white`
  - Project cards: scrolling text animation with Framer Motion
  - Service cards: color transitions and decorative corner accents
- Transitions: 0.6s duration for refined, slower animations (0.3-0.5s for interactions)
- No box shadows - completely flat design

### Critical Design Rules

1. **Pure Tailwind CSS only** - No component libraries. Use native HTML elements styled with Tailwind utilities.

2. **Rusty Red accent usage**: Use `text-rusty-red`, `bg-rusty-red`, `border-rusty-red` for:
   - Active/current navigation items
   - Hover states on interactive elements
   - Emphasized text (via `<span>` with appropriate classes)
   - Call-to-action buttons on hover

3. **Minimalist hover effects**:
   - Text links: `hover:opacity-60` or `hover:text-rusty-red`
   - Cards: `hover:border-rusty-red`
   - Buttons: `hover:bg-rusty-red hover:text-white hover:border-rusty-red`
   - Avoid scale transforms except for subtle effects

4. **Typography emphasis**: Use `<span>` tags with Rusty Red color for emphasis on key phrases (e.g., "great attention"). For spacing in hero text, use `style={{ wordSpacing: '0.25em' }}` if needed.

5. **Consistent spacing**: Always use `py-32` for section vertical padding and `px-6` for horizontal padding. Use `max-w-6xl mx-auto` for content containers.

6. **Border style**: All borders should be `border-black/10` for subtle definition. Cards should use `border border-black/10 p-8`.

7. **Framer Motion**: Used for page animations with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, duration 0.6s (slower, more refined). Mobile menu uses spring animations for smooth slide-in effects.

### Navigation

#### Desktop Navigation
- Fixed header at top of viewport with blur backdrop
- Horizontal menu: Services, Projects, Contact (CTA button)
- Active page underlined with `underline-offset-4`
- Logo/name on left links to homepage

#### Mobile Navigation (< 768px)
- **Burger menu icon** that animates to X when opened
- **Fullscreen overlay** that slides in from right
- Frosted glass effect: `bg-white/95 backdrop-blur-lg`
- Four evenly-spaced menu items: Home, Services, Projects, Contact
- Active page highlighted in Rusty Red
- Spring animations via Framer Motion (`damping: 30, stiffness: 300`)
- z-index: burger button 9999, menu overlay 9998
- Auto-closes on navigation or clicking outside menu content

**Implementation**: `components/Header.tsx` uses React state + AnimatePresence for menu toggle

### Email Integration

- **Resend API** for contact form email delivery
- API endpoint: `app/api/contact/route.ts`
- Environment variable: `RESEND_API_KEY` (stored in `.env.local`)
- **Important**: Resend client must be initialized inside POST handler, not at module level (prevents build errors)
- **Testing mode**: Sends to `francois.beyers@gmail.com` (Resend verified account email)
  - To send to other recipients, verify a domain in Resend dashboard
  - Update `to:` field in `app/api/contact/route.ts` after domain verification
- Reply-to header preserves sender's email for easy replies
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

1. **Resend API initialization** - MUST initialize Resend client inside POST handler, NOT at module level:
   ```typescript
   // ❌ WRONG - causes build errors
   const resend = new Resend(process.env.RESEND_API_KEY);
   export async function POST() { ... }

   // ✅ CORRECT - initialize inside handler
   export async function POST() {
     const resend = new Resend(process.env.RESEND_API_KEY);
     // ... rest of code
   }
   ```

2. **Resend testing mode limitation** - Resend API can only send to verified account email (francois.beyers@gmail.com) until domain is verified. Sending to any other email will fail with 403 error.

3. **Mobile menu z-indexing** - Mobile menu overlay must be outside `<nav>` tag to prevent positioning conflicts. Burger button needs z-9999, overlay needs z-9998.

4. **Build cache issues** - If seeing stale build errors after fixes, run `rm -rf .next && npm run build` to clear cache.

5. **Don't use `generateStaticParams` with `"use client"`** - causes Next.js errors

6. **Tailwind `@apply` only works with existing classes** - custom utilities must be defined in config. Custom color `rusty-red` is defined in `tailwind.config.js`.

7. **Service slugs must match** between `data/services.ts` and URL routing

8. **Mobile viewport**: Test layouts at 375px to ensure proper responsive behavior. Mobile menu is fullscreen with evenly-spaced items.

9. **Environment variables**: Server-side only - accessed via `process.env` in API routes/Server Components

10. **Hero text spacing**: If words appear bunched together, add `style={{ wordSpacing: '0.25em' }}` to heading element.

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

## Recent Updates (November 2025)

### Visual Enhancements
- **Rusty Red accent color** (rgb(213, 41, 65)) added throughout site via `tailwind.config.js`
- **Project cards**: Implemented scrolling text hover effect with Framer Motion
  - Infinitely looping project name across card on hover
  - Animated first letter scales and changes to Rusty Red
  - Gradient overlay and border color transitions
- **Service cards**: Added hover effects with color transitions, decorative corner triangles
- **Hero text spacing**: Fixed word spacing with `style={{ wordSpacing: '0.25em' }}`
- All interactive elements now use Rusty Red for hover states and active navigation

### Mobile Navigation
- Implemented fullscreen burger menu for mobile devices (< 768px)
- Animated burger icon transforms to X when open
- Menu slides in from right with spring physics
- Frosted glass background (`bg-white/95 backdrop-blur-lg`)
- Four evenly-spaced menu items: Home, Services, Projects, Contact
- Active page highlighted in Rusty Red
- Auto-closes on navigation or outside clicks

### Bug Fixes
- Fixed Resend API build error by moving client initialization inside POST handler
- Fixed TypeScript type mismatch in ProjectGrid hover state (number vs string)
- Resolved z-index conflicts in mobile menu by moving outside nav element

### Files Modified
- `tailwind.config.js` - Added Rusty Red color definition
- `app/projects/ProjectGrid.tsx` - Scrolling text animation and hover effects
- `components/ServicesGrid.tsx` - Enhanced hover effects with color transitions
- `components/Header.tsx` - Complete mobile navigation implementation
- `app/page.tsx` - Updated hero section with Rusty Red accents and spacing
- `app/services/page.tsx` - Added Rusty Red accents to hero
- `app/api/contact/route.ts` - Fixed Resend initialization for builds
