# Prachar Prasar — Official Corporate Website & Lead Engine

> **"Prachar nhi toh Prasar nhi!"**  
> Established in 2016 by Founder & CEO Pawan Rai.

Full-service advertising, digital marketing, and business-growth agency website built with Node.js, Express, React, and TypeScript. Featuring specialized venture portals for **AstroExperts** ("Where Spirituality Meets Strategy!") and **Realty Experts** ("Strategically Marketed, Scientifically Sold!").

---

## 1. Technical Stack & Architecture

- **Backend Web Server**: Node.js LTS with Express.js (`server.ts`).
- **Security & Privacy**: Helmet security headers, rate limiting (12 req / 15 min per IP), input sanitization, honeypot anti-spam (`_gotcha`).
- **Lead Capture & Processing**: Modular `POST /api/leads` endpoint with client & server-side validation, automated unique reference ID generation (`PP-2026-XXXXX`), UTM parameter tracking, durable atomic JSON file storage (`data/leads.json`), and pluggable SMTP notification hooks.
- **Search Engine Optimization**: Full dynamic XML sitemap (`/sitemap.xml`) indexing all 24 canonical routes on `https://www.pracharprasar.co`, production `robots.txt`, Schema.org `Organization` structured data (JSON-LD), and OpenGraph / Twitter meta cards.
- **Frontend Architecture**: React 19 SPA, Tailwind CSS v4 design system, Lucide icons, responsive light-theme typography (`Plus Jakarta Sans`), and zero-dependency HTML5 history routing.

---

## 2. All 24 Canonical Page Routes

1. `/` — High-conversion homepage with all 14 required sections
2. `/about-us` — Company story, 2016 origins, Pawan Rai leadership biography, mission, vision & operating values
3. `/services` — Complete directory of all 10 core marketing capabilities
4. `/services/digital-advertising` — Campaign planning, media buying, programmatic
5. `/services/performance-marketing` — Meta & Google ads, CAC reduction, conversion optimization
6. `/services/creative-branding` — Brand identity, vector design tokens, key visuals
7. `/services/website-development` — High-speed web applications, landing pages, lead wiring
8. `/services/seo-content-marketing` — Technical SEO, search intent mapping, Schema.org
9. `/services/marketing-communications` — Executive narrative, pitch decks, corporate PR
10. `/services/outdoor-advertising` — Billboard planning, corridor mapping, transit media, DOOH
11. `/services/printing-solutions` — Corporate stationery, premium brochures, packaging
12. `/services/events-exhibitions` — Trade show stall concepts, experiential launches
13. `/services/talent-management` — Creator partnerships, influencer whitelisting, rights management
14. `/industries` — Sector-specific solutions (Real Estate, Spiritual, Education, B2B, Consumer)
15. `/ventures` — Specialized brand architecture overview
16. `/ventures/astroexperts` — Dedicated venture practice for astrologers, Tarot readers & healers
17. `/ventures/realty-experts` — Dedicated real estate marketing practice (link to www.realtyexperts.online)
18. `/work` — Filterable portfolio of documented project scopes and verified outcomes
19. `/insights` — Thought leadership essays on Indian advertising & growth economics
20. `/insights/:slug` — Individual long-form essay reading views
21. `/contact` — Comprehensive lead consultation page with SLA & direct phone/email
22. `/privacy-policy` — Legitimate data collection and visitor confidentiality disclosure
23. `/terms-and-conditions` — Terms of engagement and intellectual property protections
24. `/thank-you` — Form submission confirmation with inquiry reference code & next steps

---

## 3. Local Installation & Development

### Prerequisites
- Node.js (version 18, 20 LTS or higher)
- npm or bun

### Setup Steps
```bash
# 1. Clone repository & install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env

# 3. Start full-stack development server (Express + Vite on Port 3000)
npm run dev
```

Visit `http://localhost:3000` in your web browser.

---

## 4. Production Build & Deployment

### Build Command
```bash
npm run build
```
This compiles optimized client bundles into the `dist/` directory.

### Production Start Command
```bash
npm start
```
Runs `tsx server.ts`, which serves production static assets from `dist/`, provides the active `/api/leads` pipeline, and serves dynamic `/sitemap.xml` and `/robots.txt`.

---

## 5. Environment Variables Configuration

Copy `.env.example` to `.env` and configure appropriate production values:

| Variable | Description | Default / Example |
|---|---|---|
| `NODE_ENV` | Application environment mode | `production` |
| `PORT` | HTTP server binding port | `3000` |
| `SITE_URL` | Canonical domain URL | `https://www.pracharprasar.co` |
| `SITE_NAME` | Official brand name | `Prachar Prasar` |
| `CONTACT_PHONE` | Direct agency phone | `+91 9682809232` |
| `CONTACT_EMAIL` | Official inquiries email | `contact@pracharprasar.co` |
| `FORMSPREE_FORM_ID` | Formspree Form ID | `mzedgegb` |
| `FORMSPREE_ENDPOINT` | Formspree API endpoint | `https://formspree.io/f/mzedgegb` |
| `SMTP_HOST` | Transactional email SMTP host | `smtp.pracharprasar.co` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | SMTP authenticated user | `contact@pracharprasar.co` |
| `SMTP_PASS` | SMTP secret password | *(configured securely)* |
| `LEAD_NOTIFICATION_EMAIL`| Recipient for lead alerts | `contact@pracharprasar.co` |
| `DATABASE_URL` | Optional PostgreSQL lead connection | `postgresql://...` |

---

## 6. Verifying Production Lead Inquiries

1. Open `/contact` or the consultation form on `/`.
2. Fill out test data: Name, Work Email, Phone (+91 98765 43210), Service, Requirements, and Check Consent.
3. Submit the form.
4. Verify instant transition to `/thank-you?ref=PP-2026-XXXX`.
5. Verify lead record stored in `data/leads.json` on the server disk with unique timestamp, IP, and captured UTM parameters.

---

## 7. Official Brand Contact Information

- **Company**: Prachar Prasar
- **Motto**: "Prachar nhi toh Prasar nhi!"
- **Founder & CEO**: Pawan Rai
- **Telephone**: +91 9682809232
- **Email**: contact@pracharprasar.co
- **Website**: https://www.pracharprasar.co
- **Specialized Ventures**:
  - AstroExperts: "Where Spirituality Meets Strategy!" (https://www.astroexperts.online/)
  - Realty Experts: "Strategically Marketed, Scientifically Sold!" (https://www.realtyexperts.online/)
