

# Fix Quick Links Navigation

## Problem
The app uses `HashRouter`, which means the URL already contains `#` for routing (e.g., `/#/privacy-policy`). When you click `href="#portfolio"`, the browser treats it as a route change (navigating to `/#portfolio` instead of `/#/` with a scroll to the `portfolio` element), causing a 404 from the catch-all route.

## Solution
Create a shared navigation helper that:
1. If already on the homepage — smoothly scrolls to the target section
2. If on another page (Terms, Privacy, Admin) — navigates to `/` first, then scrolls after the page loads

Replace all `<a href="#section">` links with click handlers using this helper across Navbar, Footer, and AboutSection.

## Files to Change

### 1. New: `src/utils/scrollToSection.ts`
- A helper function `scrollToSection(sectionId, navigate)` that:
  - Checks current route — if on homepage, does `document.getElementById(id).scrollIntoView({ behavior: 'smooth' })`
  - If on another page, calls `navigate("/")` then uses a short timeout to scroll after mount

### 2. `src/components/Navbar.tsx`
- Import `useNavigate` from react-router-dom and the scroll helper
- Replace all `<a href="#...">` with `<a onClick={...}>` or `<button>` using the scroll helper
- Replace brand logo `<a href="#">` with `<Link to="/">`

### 3. `src/components/Footer.tsx`
- Same treatment for the 5 quick links — use click handlers with the scroll helper

### 4. `src/components/AboutSection.tsx`
- Replace `<a href="#portfolio">` with click handler using scroll helper

No routing changes needed. HashRouter stays as-is.

