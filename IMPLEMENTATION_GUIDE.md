# KMITL Formula Student Website - Implementation Guide

## ✅ Completed

### Core Infrastructure
- [x] Next.js 15 App Router configuration
- [x] TypeScript setup with proper configs
- [x] Tailwind CSS with custom design tokens and motorsport color palette
- [x] PostCSS and Autoprefixer configuration
- [x] Global CSS with animations and component utilities
- [x] Font integration (Inter + IBM Plex Sans Thai)

### Components
- [x] Navigation bar (responsive with mobile menu)
- [x] Footer with links and social media
- [x] Layout wrapper with dark mode setup

### Pages (8 pages × 100% complete)

#### 1. Home Page `/`
- [x] Hero section with overlaid gradient
- [x] Stats bar (year, members, cars, subsystems)
- [x] Current car highlight with specs
- [x] Latest news cards (3 articles)
- [x] Sponsor wall (Platinum, Gold, Silver tiers)
- [x] Partner CTA section
- [x] Responsive grid layouts

#### 2. About Page `/about`
- [x] Mission and vision sections
- [x] Team journey timeline (5 phases)
- [x] Team structure with 6 departments
- [x] Full team photo placeholder
- [x] Gradient overlays and visual hierarchy

#### 3. Cars Page `/cars`
- [x] Current car (KMITL-FS01) detailed specs
- [x] Performance metrics grid
- [x] Gallery grid (6 photos)
- [x] Core subsystems breakdown (4 systems)
- [x] Car evolution timeline (4 generations)
- [x] Video section with embeds
- [x] Comprehensive technical specifications

#### 4. Team Page `/team`
- [x] Filterable team members by department
- [x] 12 sample team members with roles
- [x] Department filter buttons
- [x] Member cards with photo, role, and social links
- [x] Join section CTA
- [x] Responsive grid layout

#### 5. Sponsors Page `/sponsors`
- [x] Why sponsor section (6 benefits)
- [x] Sponsorship package tiers (Silver, Gold, Platinum)
- [x] Package comparison table
- [x] Download sections (Media Kit, Sponsorship Deck)
- [x] Contact CTA section
- [x] Recommended tier highlighting

#### 6. News Page `/news`
- [x] Featured article showcase
- [x] Recent articles grid (6 total)
- [x] Article categories and dates
- [x] Newsletter subscription form
- [x] Article cards with excerpts
- [x] Read more links

#### 7. Join Page `/join`
- [x] Why join section (grow skills, build network)
- [x] Open positions by department (6 depts)
- [x] Application timeline (4 phases)
- [x] Eligibility requirements (essential + preferred)
- [x] Google Form embed placeholder
- [x] FAQ section with details elements

#### 8. Contact Page `/contact`
- [x] Contact info cards (email, phone, sponsorship)
- [x] Office location with map embed placeholder
- [x] Contact form with all fields (name, email, phone, subject, message)
- [x] Form validation and success message
- [x] Social media links sidebar
- [x] Quick links section
- [x] Response time expectations

### Styling & Design
- [x] Dark mode base color scheme
- [x] Motorsport aesthetic (red #E10600 + electric blue #00D1FF)
- [x] Premium button styles (primary, secondary)
- [x] Card components with hover effects
- [x] Animation keyframes (fadeInUp, slideInRight)
- [x] Responsive grid systems
- [x] Border and accent styling

---

## 🚀 Quick Start

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Deploy (automatic on every push)

---

## 📋 Immediate Next Steps (Priority Order)

### 1. Replace Image Placeholders (HIGH PRIORITY)
**Why**: Website looks incomplete without real images

**What**: Replace emoji placeholders with actual images
- `/src/app/page.tsx` - Hero section car image
- `/src/app/cars/page.tsx` - Current car photos and gallery
- `/src/app/about/page.tsx` - Team group photo
- `/src/app/team/page.tsx` - Member profile photos

**How**:
```tsx
// Replace this:
<p className="text-6xl">🏎️</p>

// With this:
import Image from 'next/image';
<Image src="/cars/fs01.jpg" alt="KMITL-FS01" width={600} height={400} />
```

**Files to create**:
- Create `/public/cars/` directory
- Create `/public/team/` directory
- Create `/public/gallery/` directory
- Add high-res photos (JPG/WebP recommended)

---

### 2. Connect Contact & Sponsorship Forms (HIGH PRIORITY)
**Why**: Forms currently don't send anywhere

**Option A: EmailJS (Easy, Free tier available)**
```bash
npm install @emailjs/browser
```

**Option B: Formspree (No code required)**
- Sign up at https://formspree.io
- Replace form action

**Option C: Backend API (Custom)**
- Create `/api/contact.ts` endpoint
- Connect to your email service

---

### 3. Embed Google Form for Applications (HIGH PRIORITY)
**Where**: `/src/app/join/page.tsx` (line ~180)

**Current**:
```tsx
<div className="bg-surface p-8 rounded border border-dark-border text-center">
  <p className="text-gray-500 mb-4">📋 Google Form Embed</p>
</div>
```

**Replace with**:
```tsx
<iframe
  src="https://docs.google.com/forms/d/1YOUR_FORM_ID/viewform"
  width="100%"
  height="600"
  frameBorder="0"
  marginHeight={0}
  marginWidth={0}
>
  Loading…
</iframe>
```

**To get form ID**:
1. Create Google Form at forms.google.com
2. Click Share (top right)
3. Copy the ID from URL
4. Replace `1YOUR_FORM_ID` with actual ID

---

### 4. Create Downloadable Sponsorship Deck (MEDIUM PRIORITY)
**Where**: `/src/app/sponsors/page.tsx` (line ~120)

**Current**:
```tsx
<a href="#" className="btn-primary inline-block">Download PDF</a>
```

**Option A: Static PDF**
1. Create sponsorship deck in PowerPoint/Google Slides
2. Export as PDF
3. Save to `/public/downloads/sponsorship-deck.pdf`
4. Update link: `href="/downloads/sponsorship-deck.pdf"`

**Option B: Dynamic PDF Generator**
```bash
npm install @react-pdf/renderer
```

---

### 5. Set Up Environment Variables (MEDIUM PRIORITY)

1. Copy `.env.example` to `.env.local`
2. Fill in actual values:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   # Add email service keys when you choose one
   ```

---

### 6. Update Team & Car Information (MEDIUM PRIORITY)
**Files to edit**:
- `/src/app/team/page.tsx` - Update `teamMembers` array (line ~30)
- `/src/app/cars/page.tsx` - Update specifications
- `/src/app/about/page.tsx` - Update timeline dates

**Example - Add team member**:
```tsx
const teamMembers = [
  { 
    name: 'Your Name', 
    role: 'Your Role', 
    department: 'Powertrain',  // Must match one in departments
    image: '👨‍🔧' 
  },
  // ... more members
];
```

---

## 🌐 Bilingual Support (TH/EN) - Optional

### Setup i18n with next-i18next
```bash
npm install next-i18next i18next
```

### Create Translation Files
```
/public/locales/
├── en/
│   └── common.json
└── th/
    └── common.json
```

### Setup Routing
```
/pages/[[...locale]]/
├── index.tsx (auto-routes to /en and /th)
├── about.tsx
├── cars.tsx
// etc.
```

---

## 🎨 Customization Reference

### Change Primary Color
File: `tailwind.config.ts`
```ts
primary: {
  500: '#E10600',  // Change this
  600: '#cc0500',
  700: '#b30400',
}
```

### Add New Page
1. Create folder: `/src/app/newpage/`
2. Create file: `/src/app/newpage/page.tsx`
3. Import Navigation & Footer
4. Add link to Navigation component

### Change Font
File: `src/app/layout.tsx`
```tsx
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: '700' });
```

---

## 📊 Analytics & SEO

### Add Google Analytics
```tsx
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G_YOUR_ID" />
```

### Add Meta Tags
File: `src/app/layout.tsx`
```ts
export const metadata = {
  title: 'KMITL Formula Student',
  description: '...',
  openGraph: {
    title: '...',
    image: '/og-image.jpg',
  },
}
```

---

## 🚀 Deployment Checklist

- [ ] Replace all image placeholders with real images
- [ ] Connect contact forms to email service
- [ ] Set up environment variables
- [ ] Test all forms work
- [ ] Update team member information
- [ ] Add Google Analytics
- [ ] Create SEO sitemap
- [ ] Test on mobile devices
- [ ] Test form submissions
- [ ] Check lighthouse score
- [ ] Deploy to Vercel

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **EmailJS**: https://www.emailjs.com/docs/
- **Formspree**: https://formspree.io/help
- **Vercel Deploy**: https://vercel.com/docs

---

## 🎯 Performance Tips

1. **Image Optimization** - Use Next.js Image component
   ```tsx
   import Image from 'next/image'
   <Image src="/photo.jpg" alt="..." width={600} height={400} />
   ```

2. **Lazy Loading** - Add `loading="lazy"` to images

3. **Code Splitting** - Use `dynamic` imports for heavy components
   ```tsx
   import dynamic from 'next/dynamic'
   const HeavyComponent = dynamic(() => import('./Heavy'))
   ```

4. **Caching** - Enable ISR for static pages
   ```tsx
   export const revalidate = 3600 // 1 hour
   ```

---

## Questions?

Document complete! Ready to customize. Start with the "Immediate Next Steps" section above.
