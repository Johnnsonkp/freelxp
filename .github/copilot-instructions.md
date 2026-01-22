# Copilot Instructions for Next.js Notion Portfolio

## Project Overview
Portfolio site powered by Notion as a CMS, built with Next.js 13 (Pages Router), TypeScript/JavaScript hybrid, and PostgreSQL for job tracking. The site fetches blog posts from Notion, renders them with markdown, and includes a custom job application tracker.

## Architecture & Data Flow

### Notion Integration (Blog System)
- **Source**: Notion database (`process.env.NOTION_DATABASE_ID`) queried via `@notionhq/client`
- **Entry Point**: [`lib/notion.js`](lib/notion.js) - All Notion API interactions happen here
- **Key Functions**:
  - `getAllPublished()` - Fetches all published blog posts (Publish=true checkbox)
  - `getSingleBlogPostBySlug(slug)` - Gets single post with markdown conversion via `notion-to-md`
  - `getPageMetaData()` - Extracts structured metadata (title, category, tags, description, date, slug)
- **Image Proxy Pattern**: Notion images proxied through [`/api/image-proxy`](pages/api/image-proxy.js) to avoid expiring URLs and caching issues. Always use `proxyImage(url)` helper when handling Notion images
- **Rendering**: Uses `getStaticProps` with 60s revalidation for ISR (Incremental Static Regeneration)

### Job Tracker Feature (PostgreSQL)
- **Database**: PostgreSQL with connection pooling ([`lib/db/postgres.ts`](lib/db/postgres.ts))
- **Schema**: [`lib/db/schema.pgsql`](lib/db/schema.pgsql) - includes `job_status` ENUM, UUID primary keys, auto-updating timestamps
- **API Routes**:
  - `POST/GET /api/job-applications` - CRUD operations with Zod validation
  - `PUT/DELETE /api/job-applications/[id]` - Update/delete specific applications
- **Validation**: Zod schemas in [`lib/schema/job-application.ts`](lib/schema/job-application.ts)
- **Database Layer**: [`lib/db/job-application-db.ts`](lib/db/job-application-db.ts) - SQL queries with parameterized inputs

### Configuration System
- **Primary Config**: [`site.config.ts`](site.config.ts) exports default `siteConfig()` with:
  - Profile metadata (name, bio, social links)
  - `introSectionData` array for landing page cards
  - Feature flags (`isPreviewImageSupportEnabled`, `isSearchEnabled`)
- **Type Definitions**: [`lib/site-config.ts`](lib/site-config.ts) defines interfaces

## File Organization Conventions

### Component Structure (Mid-migration to TypeScript)
- **Mixed Extensions**: `.jsx` (older), `.tsx` (newer) coexist - prefer `.tsx` for new components
- **Directory Pattern**:
  - `components/ui/` - Reusable UI components (buttons, cards, header, nav)
  - `components/post/` - Blog-specific components
  - `components/sections/` - Page sections (hero, footer, experience)
- **Styling**: CSS Modules (`.module.css`) for scoped styles, Tailwind for utilities

### Pages (Next.js Pages Router)
- **Static Generation**: All pages use `getStaticProps` except API routes
- **Blog Flow**: [`pages/index.js`](pages/index.js) → [`pages/blog.jsx`](pages/blog.jsx) → [`pages/posts/[slug].js`](pages/posts/[slug].js)
- **Dynamic Routes**: Use bracket notation (`[slug].js`, `[id].ts`)

## Project-Specific Patterns

### Color Theming with Color Thief
- [`components/post/postDetail.tsx`](components/post/postDetail.tsx) uses `use-color-thief` to extract palette from blog cover images
- Dynamically applies colors to header, title, and theme-color meta tag via DOM manipulation in `useEffect`
- Pattern: Extract 6 colors, use palette[5] for background, palette[1] for title

### Framer Motion Animations
- Used extensively for page transitions and scroll-based animations
- Common imports: `motion`, `useScroll` from `framer-motion`
- Example: [`components/ui/AnimatedText.jsx`](components/ui/AnimatedText.jsx), [`components/sections/Experience.jsx`](components/sections/Experience.jsx)

### Image Loading Strategy
- **SmoothImgLoad Component**: Custom shimmer placeholder for progressive image loading
- **Next Image**: Uses `next/image` with configured domains in [`next.config.js`](next.config.js)
  - Allowed domains: `images.unsplash.com`, `www.notion.so`, `s3.us-west-2.amazonaws.com`, `prod-files-secure.s3.us-west-2.amazonaws.com`

### TypeScript Build Configuration
- **Strict Mode**: `ignoreBuildErrors: true` in `next.config.js` - **intentional** to allow gradual TS migration
- When creating new files, prefer TypeScript (.tsx/.ts) but don't refactor existing JS files unless explicitly requested

### Styling Conventions
- **Tailwind Classes**: Utility-first approach with CSS Modules for complex components
- **Custom Breakpoints**: Inverted desktop-first naming (`desk-sm`, `desk-md`, `desk-lg`, `desk-xl`, `desk-2xl`) defined in [`tailwind.config.js`](tailwind.config.js)
- **Color Palette**: Custom colors including `primary: "#ec5899"`, `dark: "#121212"`, `light: "#f5f5f5"` - reference [`tailwind.config.js`](tailwind.config.js) for full palette
- **Responsive Pattern**: Use `desk-*` breakpoints for max-width media queries (e.g., `desk-sm:ml-14` applies on screens ≤639px)

### API Response Pattern
All API routes follow a standardized response structure:
```typescript
// Success response
{ success: true, data: {...} }

// Error responses
{ success: false, error: "Error message" }
{ success: false, error: "Validation failed", details: [...] }  // Zod errors
{ success: false, error: "Error message", message: "Technical details" }
```
- Always return `success: boolean` field
- Use appropriate HTTP status codes (200, 201, 400, 404, 500)
- Zod validation errors go in `details` array
- Technical error details in `message` field (dev only)

## Development Workflows

### Running the Application
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm start            # Start production server
npm run lint         # ESLint checks
```

### Database Setup
```bash
npm run db:local     # Run setup-database.sh (creates DB, runs migrations)
npm run db:setup     # Node-based migration runner
```

**Database Prerequisites**:
- PostgreSQL installed locally (via Homebrew on macOS)
- Environment variables in `.env.local` (see `.env.local.example`)
- Default connection: `postgres://user:password@localhost:5432/job_tracker`

### Environment Variables Required
```
NOTION_API_KEY=          # Notion integration token
NOTION_DATABASE_ID=      # Database ID from Notion URL
NEXT_PUBLIC_DOMAIN=      # Optional: domain override
POSTGRES_HOST=localhost  # PostgreSQL connection details
POSTGRES_PORT=5432
POSTGRES_DB=job_tracker
POSTGRES_USER=user
POSTGRES_PASSWORD=       # Can be empty for trust auth
```

## Common Tasks

### Adding a New Blog Post
1. Create post in Notion database with required properties: Name, Category, Tags, Description, Date, Slug, Publish (checkbox)
2. Set `Publish` checkbox to true
3. Posts automatically appear on site within 60 seconds (ISR revalidation)

### Adding a New Page
1. Create `pages/newpage.jsx` (or `.tsx`)
2. Export default component + `getStaticProps` for data fetching
3. Update navigation in [`components/ui/nav/SideNav.tsx`](components/ui/nav/SideNav.tsx) or [`components/ui/header/Header.jsx`](components/ui/header/Header.jsx)

### Extending Job Tracker
1. Update [`lib/db/schema.pgsql`](lib/db/schema.pgsql) with new columns/tables
2. Run migrations: `npm run db:local`
3. Update Zod schema in [`lib/schema/job-application.ts`](lib/schema/job-application.ts)
4. Add database functions in [`lib/db/job-application-db.ts`](lib/db/job-application-db.ts)
5. Update API routes in [`pages/api/job-applications/`](pages/api/job-applications/)
6. Update TypeScript types in [`types/job-application.d.ts`](types/job-application.d.ts)

## Troubleshooting

### Notion Image Loading Issues
- **Symptom**: Images fail to load or show stale versions
- **Root Cause**: Notion image URLs expire after ~1 hour
- **Solution**: All images must route through [`/api/image-proxy?url=`](pages/api/image-proxy.js) - uses 8-second timeout and immutable caching
- **Check**: Verify `proxyImage()` is called in [`lib/notion.js`](lib/notion.js) line 89

### PostgreSQL Connection Errors
- **Symptom**: Job tracker features fail with connection errors
- **Fix**: Ensure PostgreSQL is running (`brew services start postgresql@14`) and `.env.local` has correct credentials
- **Test**: Run `psql -U user -d job_tracker -h localhost` to verify access

### TypeScript Errors Breaking Build
- Currently using `ignoreBuildErrors: true` - this is **temporary** during migration
- When fixing TS errors, focus on:
  1. API routes (`pages/api/**/*.ts`)
  2. Database layer (`lib/db/**/*.ts`)
  3. Schema/types (`lib/schema/**/*.ts`, `types/**/*.d.ts`)

## Testing Strategy

### Planned Framework Setup
- **Unit/Integration Tests**: Vitest + React Testing Library
  - Test components, hooks, and utility functions
  - Focus on business logic in `lib/` directory
- **E2E Tests**: Playwright
  - Test critical user flows (blog reading, job tracker CRUD)
  - Test across browsers and devices
- **Component Documentation**: Storybook
  - Visual testing and component library
  - Document component props and variants

### Testing Priorities (When Implemented)
1. Job tracker CRUD operations (database layer + API routes)
2. Notion integration (blog fetching and rendering)
3. Image proxy functionality
4. Form validation (Zod schemas)

## State Management

### Context API Pattern
- Use React Context API for global state management
- Recommended structure:
  - Create contexts in `lib/contexts/` directory
  - Separate context definition from provider implementation
  - Use custom hooks (e.g., `useJobTracker()`) to consume context
- **When to use Context**:
  - User authentication state (when added)
  - Theme/dark mode toggle (when added)
  - Job tracker filters and pagination
- **When NOT to use Context**:
  - Single-component state (use `useState`)
  - Server-fetched data (use `getStaticProps` or SWR/React Query)

## Deployment

- **Platform**: Railway App (current deployment)
- **Build Command**: `npm run build`
- **Environment Variables**: Ensure all variables from `.env.local.example` are configured in Railway
- **Database**: PostgreSQL provisioned through Railway or external provider

## Current State & Planned Improvements

**Active Development** (see [`TODO.md`](TODO.md)):
- [ ] Complete TypeScript migration (pages + components)
- [ ] Add state manager (Context API or Zustand)
- [ ] Content creation calendar feature
- [x] Job application tracking ✅

**Known Technical Debt** (see [`IMPROVEMENTS.md`](IMPROVEMENTS.md)):
- Lack of comprehensive testing (unit + integration)
- Mixed JS/TS files - gradual migration in progress
- No error boundary implementation
- Responsive design needs refinement

When implementing new features, follow the existing patterns above but prefer TypeScript, proper error handling, and Zod validation for new code.
