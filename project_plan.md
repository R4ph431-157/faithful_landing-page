# Founder's Pen - Ghostwriting Website

## 1. Project Description
Founder's Pen is a personal ghostwriting service for builders and creators who want to stay consistent and visible online. The website is a single-page landing site that showcases the service, pricing, and allows potential clients to book a call. It is designed to feel warm, elegant, and premium — like a boutique service rather than an agency.

## 2. Page Structure
- `/` - Home (single-page landing with Hero, About, Pricing, System Note, FAQ, Contact sections)

## 3. Core Features
- [ ] Hero section with bold headline and CTA
- [ ] About section with floating image and founder story
- [ ] Pricing section with Base and Premium plans
- [ ] System Note & Payment Terms section
- [ ] FAQ accordion with 8 questions
- [ ] Contact/CTA section with booking form
- [ ] Responsive design for all screen sizes
- [ ] Smooth scroll navigation

## 4. Data Model Design
No database required for this project. All content is static.

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed for this phase
- Shopify: Not needed
- Stripe: Not needed (payments handled via USDT off-platform)
- Contact form: Using Readdy form submission for booking inquiries

## 6. Development Phase Plan

### Phase 1: Landing Page Design & Build ✅ COMPLETE
- Goal: Build the complete single-page landing website with all sections
- Deliverable: Fully functional, responsive landing page with Hero, About, Pricing, System Note, FAQ, and Contact sections

### Phase 2: Polish & Cleanup ✅ COMPLETE
- Removed unused i18n infrastructure (not needed for single-language site)
- Removed unused dependencies (firebase, supabase, stripe, recharts, lucide-react, i18next packages)
- Removed unused Tailwind color token (`surface-hover`)
- Removed unused imports (`useRef` in FAQ component)
- Cleaned up ESLint auto-import globals
- Build passes cleanly