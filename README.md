# Dr. Tanvi More — Physiotherapy Clinic Website

A Next.js 15 website for Dr. Tanvi More's physiotherapy clinic with four pages:

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, highlights, services preview, CTA |
| **About** | `/about` | Doctor profile, credentials, core values |
| **Services** | `/services` | 8 treatment cards with tags |
| **Contact** | `/contact` | Booking form + clinic info |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Customise

- Replace emoji placeholders with real photos in `src/app/page.tsx` and `src/app/about/page.tsx`
- Update clinic address, phone, email in `src/app/contact/page.tsx`
- Replace the map placeholder with a real Google Maps `<iframe>` embed
- Connect the contact form to a backend (e.g. EmailJS, Resend, or a Next.js API route)
