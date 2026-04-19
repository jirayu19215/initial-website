# KMITL Formula Student Team Website

A professional, modern website for **INIYAIL KMITL Formula Student** racing team built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **🎨 Professional Dark Mode Design** - Premium motorsport aesthetic with red (#E10600) and electric blue (#00D1FF) accent colors
- **⚡ High-Performance Static Pages** - Fast loading with Next.js App Router
- **📱 Fully Responsive** - Mobile-first design for all devices
- **🎯 Sponsor-Focused** - Dedicated sponsorship packages and partnership sections
- **📰 Blog System** - News and updates in blog-style layout
- **👥 Team Management** - Filterable team member profiles
- **🏎️ Car Showcase** - Detailed specs and gallery for vehicles
- **✉️ Contact Forms** - Get in touch with custom forms
- **🔍 SEO Optimized** - Meta tags, OG images, and structure (ready to enhance)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── globals.css          # Global styles & Tailwind
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page with timeline
│   ├── cars/page.tsx        # Vehicle showcase
│   ├── team/page.tsx        # Team members (filterable)
│   ├── sponsors/page.tsx    # Sponsorship packages
│   ├── news/page.tsx        # News & blog
│   ├── join/page.tsx        # Recruitment info
│   └── contact/page.tsx     # Contact form
├── components/
│   ├── Navigation.tsx       # Main navbar
│   └── Footer.tsx           # Footer
└── lib/                     # Utilities (ready for i18n)

public/                      # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#E10600` (Motorsport aggression)
- **Dark Background**: `#0B0B0D` (almost black)
- **Surface**: `#121217` (elevated elements)
- **Accent**: `#FFFFFF` (text)
- **Highlight**: `#00D1FF` (electric blue - EV team indicator)

### Typography
- **Headings**: Inter Bold/ExtraBold (industrial, sans-serif)
- **Body English**: Inter Regular
- **Body Thai**: IBM Plex Sans Thai (bilingual content)
- **Letter Spacing**: Wide tracking for motorsport vibe

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Inter + IBM Plex Sans Thai (from Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup

1. **Clone/Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - Changes auto-refresh (hot reload)

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📄 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, stats, car highlight, news, sponsors |
| About | `/about` | Mission, vision, timeline, team structure |
| Cars | `/cars` | Vehicle specs, gallery, subsystems, history |
| Team | `/team` | Filterable member profiles with LinkedIn |
| Sponsors | `/sponsors` | Sponsorship tiers, packages, downloadable media kit |
| News | `/news` | Blog-style articles with filtering |
| Join | `/join` | Recruitment info, application timeline, FAQ |
| Contact | `/contact` | Contact form, hours, social links |

## 🔧 Customization Guide

### Add Team Members
Edit `src/app/team/page.tsx` - Update `teamMembers` array with names, roles, departments.

### Update Car Specs
Edit `src/app/cars/page.tsx` - Modify the performance metrics and subsystem details.

### Change Colors
Edit `tailwind.config.ts` - Modify the color values in the `extend.colors` section.

### Add Sponsorship Package
Edit `src/app/sponsors/page.tsx` - Add new tier in the sponsorship packages grid.

### Update News Articles
Edit `src/app/news/page.tsx` - Modify `newsArticles` array or connect to backend.

## 🌐 Deployment to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# or push to GitHub and connect to Vercel dashboard
```

## 📝 Next Steps & Enhancements

- [ ] **Bilingual Support (TH/EN)** - Implement i18n routing with next-i18next
- [ ] **Blog CMS** - Connect to Headless CMS (Contentful, Strapi, etc.)
- [ ] **Image Optimization** - Replace placeholders with actual car/team photos
- [ ] **Backend Integration** - Connect contact & sponsorship forms to email service
- [ ] **Analytics** - Add Google Analytics or similar
- [ ] **Performance** - Lazy load images, implement code splitting
- [ ] **SEO** - Dynamic sitemap, robots.txt, structured data
- [ ] **Form Submission** - Add Formspree, Netlify Forms, or custom backend endpoint

## 🎯 Key Features to Implement

### High Priority
1. **Replace Image Placeholders** - Add real car photos and team photos
2. **Backend Connection** - Wire contact/sponsorship forms to email service
3. **Google Drive/Form Embed** - Embed Google Form for applications
4. **Downloadable Media Kit** - Add PDF generation for sponsorship deck

### Medium Priority
1. **Multi-language Support** - Add Thai language version
2. **Blog Backend** - Connect to CMS for news management
3. **Search Functionality** - Add search for team members and news
4. **Video Embeds** - YouTube/Vimeo integration

### Lower Priority
1. **PWA Support** - App-like experience
2. **Dark/Light Toggle** - User preference
3. **Comments System** - Community engagement
4. **Social Sharing** - Twitter, Facebook share buttons

## 📞 Contact & Support

- **Email**: contact@kmitlfs.com
- **Phone**: +66 (0) 2 429 7000
- **Location**: KMITL, Bangkok, Thailand

## 📄 License

This website is the property of INIYAIL KMITL Formula Student Team. All rights reserved.

---

**Built with ❤️ by INIYAIL KMITL Formula Student Team**
