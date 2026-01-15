# Luxyana Website

The official marketing website for Luxyana Studios - a quality-first indie app development company building 6 apps in Year 1.

## Overview

This is a Next.js 14 website built with TypeScript, Tailwind CSS, and React 18. It serves as the marketing hub for Luxyana, showcasing our apps, sharing our journey, and building our community.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Runtime:** Node.js
- **Deployment:** Ready for Vercel or GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:luxyana-studios/luxyana-website.git
cd luxyana-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global Tailwind styles
│   ├── about/
│   │   └── page.tsx        # About page - our story and team
│   ├── apps/
│   │   └── page.tsx        # Apps showcase - 6 planned apps
│   ├── blog/
│   │   └── page.tsx        # Blog - updates and learnings
│   ├── contact/
│   │   └── page.tsx        # Contact and social links
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms of service
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind theme with brand colors
├── tsconfig.json           # TypeScript configuration
└── postcss.config.js       # PostCSS configuration
```

## Pages

- **Homepage** (`/`) - Hero section, features, apps preview, email signup
- **About** (`/about`) - Company story, team, and values
- **Apps** (`/apps`) - Showcase of 6 planned apps with launch timeline
- **Blog** (`/blog`) - Articles about our journey and learnings
- **Contact** (`/contact`) - Newsletter signup, social links, contact info
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## Brand Colors

- **Primary:** `#0066ff` (Electric Blue)
- **Secondary:** `#00d9ff` (Cyan)
- **Dark:** `#0a0e27` (Dark Navy)
- **Light:** `#f0f4ff` (Light Blue)

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Features

- ✨ Responsive design (mobile-first)
- 🌙 Dark mode support
- ⚡ Fast page loads with Next.js optimization
- 🎨 Beautiful gradients and animations
- 📧 Email subscription forms
- 🔗 Social media integration
- 🎯 SEO optimized

## Environment Variables

Create a `.env.local` file for environment variables (if needed):

```
NEXT_PUBLIC_SITE_URL=https://luxyana.com
```

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### GitHub Pages

Configure in `next.config.js` and push to GitHub.

## Related Repositories

- [Business Plan](https://github.com/luxyana-studios/luxyana-business-plan) - Our Year 1 strategy and goals

## Contributing

This is a private project for Luxyana Studios. For internal contributions, please follow our code style guidelines.

## License

All rights reserved © 2024 Luxyana Studios

## Contact

- **Email:** hello@luxyana.com
- **Twitter:** [@luxyana_studios](https://twitter.com)
- **GitHub:** [@luxyana-studios](https://github.com/luxyana-studios)
