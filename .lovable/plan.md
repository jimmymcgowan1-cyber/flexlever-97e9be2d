
# FlexLever Website — Production Readiness Revisions

This plan addresses every issue from the engineering audit, organized into implementation phases.

---

## Phase 1: Critical Fixes (Launch Blockers)

### 1. Fix index.html Meta Tags and SEO
- Update `<title>` to "FlexLever -- AI-Powered Business Automation for Service Businesses"
- Replace author, og:title, twitter:title, og:description, twitter:description with FlexLever branding
- Remove TODO comments from the HTML
- Update twitter:site to @FlexLever

### 2. Connect Contact Form to Real Submission
- Replace the fake `setTimeout` in `ContactPage.tsx` with a real `fetch` call to Formspree (or Web3Forms)
- Add `name` attributes to all form inputs (name, company, email, phone, industry, message)
- Add proper error handling with destructive toast on failure
- **Note**: You will need to sign up for a free Formspree account and provide the form ID, or we can use Web3Forms. We'll set up the form structure now and use a placeholder endpoint you can swap in.

### 3. Blog Email Subscribe Handler
- Add state and an `onSubmit` handler to the subscribe form in `BlogPage.tsx`
- Show a success toast on submission
- Wire to the same form service or a separate endpoint for email capture

### 4. Fix CookieConsent / MobileCTA Overlap on Mobile
- Add `mb-16` bottom margin to CookieConsent on mobile so it clears the sticky MobileCTA bar
- Add `pb-16` to Footer on mobile to prevent MobileCTA from covering footer content

---

## Phase 2: High-Priority Improvements

### 5. Remove Unused Dependencies
Remove from `package.json`:
- `@hookform/resolvers`, `react-hook-form`, `zod` (no forms using them)
- `framer-motion` (not imported anywhere)
- `recharts`, `react-day-picker`, `date-fns`, `embla-carousel-react`
- `react-resizable-panels`, `input-otp`, `cmdk`, `next-themes`, `vaul`
- Unused Radix packages: alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, separator, sheet, switch, tabs, toggle, toggle-group

Delete corresponding unused UI component files from `src/components/ui/`.

### 6. Add Route-Level Code Splitting
- Convert all page imports in `App.tsx` to `React.lazy()`
- Wrap `<Routes>` in `<Suspense>` with a minimal loading fallback

### 7. Extract Index.tsx into Separate Components
Move each section into `src/components/home/`:
- `Hero.tsx`, `SocialProof.tsx`, `Problem.tsx`, `Solution.tsx`, `Services.tsx`, `HowItWorks.tsx`, `Metrics.tsx`, `Industries.tsx`, `Testimonials.tsx`, `ROICalculator.tsx`, `FAQ.tsx`, `FinalCTA.tsx`
- `Index.tsx` becomes a simple composition of these imports

### 8. Remove Unused react-query Wrapper
- Remove `QueryClient`, `QueryClientProvider` imports and wrapper from `App.tsx`
- Remove `@tanstack/react-query` from dependencies

### 9. Remove Dual Toast System
- Remove Sonner toast (keep Radix `useToast` which is already used by the contact form)
- Remove `sonner` package from dependencies
- Delete `src/components/ui/sonner.tsx`

### 10. Clean Up NavLink Component
- Delete `src/components/NavLink.tsx` since it is not imported anywhere

---

## Phase 3: Medium-Priority Polish

### 11. Per-Page SEO with react-helmet-async
- Install `react-helmet-async`
- Add `<HelmetProvider>` wrapper in `App.tsx`
- Add unique `<Helmet>` (title + description) to every page component

### 12. Accessibility Improvements
- Navbar mobile toggle: add `aria-label="Toggle navigation menu"` and `aria-expanded`
- ROI calculator sliders: connect labels to sliders with `htmlFor`/`id`
- Industry selector buttons: add `role="radiogroup"` and `aria-pressed`
- Footer social links: add `aria-label` attributes ("LinkedIn", "Twitter")

### 13. Fix CountUp Timer Leak
- Move the `setInterval` timer reference outside the observer callback
- Clear the interval in the useEffect cleanup return alongside `observer.disconnect()`

### 14. Fix 404 Page
- Replace `<a href="/">` with React Router `<Link to="/">`
- Change `min-h-screen` to `min-h-[60vh]` to account for Navbar/Footer already rendered

### 15. Qualify Metrics and Testimonials
- Change metrics wording to projected/target language (e.g., "Target: 40% time saved")
- Add disclaimer text: "Based on projections for service businesses"
- Update testimonials subtitle to "Based on early partner conversations"

### 16. Replace CSS Logo with Real Logo Asset
- Use `src/assets/flexlever-logo.png` (already copied to project) as an `<img>` in Navbar
- Add the logo icon to the Footer brand section as well

### 17. Replace Favicon
- Replace `public/favicon.ico` with the FlexLever logo asset
- Add `<link rel="icon">` pointing to the new file in `index.html`

---

## Phase 4: Low-Priority / Polish

### 18. Rename package.json
- Change `"name"` from `"vite_react_shadcn_ts"` to `"flexlever"`

### 19. Self-Host Google Fonts
- Download DM Sans and Inter font files to `public/fonts/`
- Replace the `@import url(...)` in `index.css` with local `@font-face` declarations using `font-display: swap`

### 20. Add Error Boundary
- Create `src/components/ErrorBoundary.tsx` (class component)
- Wrap the app content in `App.tsx` with it
- Show a friendly "Something went wrong" UI with a reload button

### 21. Optimize ScrollReveal
- Refactor `ScrollReveal.tsx` to use a single shared `IntersectionObserver` instance via a context provider instead of creating one observer per component

### 22. Generate Sitemap
- Add all routes to a static `public/sitemap.xml`
- Reference it in `robots.txt`

### 23. Verify robots.txt
- Add `Sitemap: https://flexlever.lovable.app/sitemap.xml` to `robots.txt`

### 24. Analytics Placeholder
- Add commented-out GA4 script block in `index.html` with instructions for where to paste the tracking ID

### 25. Mobile Footer Padding
- Already addressed in Phase 1, item 4 (add `pb-16` on mobile to Footer)

### 26. Consolidate Pricing References
- Add "See full pricing details" links from service pages (Audit, Retainer) to `/pricing` instead of duplicating pricing info

---

## Technical Notes

- **Form service**: The contact form and blog subscribe will be wired to Formspree/Web3Forms. You'll need to create an account and provide the form endpoint ID. We'll use a placeholder that you can swap in.
- **Logo**: The file at `src/assets/flexlever-logo.png` will be used. If it needs to be re-uploaded, please attach it again.
- **Bundle impact**: Removing unused dependencies should reduce the production bundle by roughly 300-500KB.
- **Estimated scope**: ~20 files modified or created, ~30 files deleted (unused UI components).
