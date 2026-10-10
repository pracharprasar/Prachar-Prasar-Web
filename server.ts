import express, { Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProd = process.env.NODE_ENV === 'production';
const SITE_URL = process.env.SITE_URL || 'https://www.pracharprasar.co';

// Security Headers with Helmet
app.use(
  helmet({
    contentSecurityPolicy: false, // Let Vite client scripts & Google Fonts load without CSP blockage
    crossOriginEmbedderPolicy: false,
  })
);

app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: true, limit: '200kb' }));

// Ensure data directory exists for durable JSON lead store
const dataDir = path.resolve(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
  } catch (err) {
    console.error('Failed to create data directory:', err);
  }
}
const leadsFilePath = path.join(dataDir, 'leads.json');
if (!fs.existsSync(leadsFilePath)) {
  try {
    fs.writeFileSync(leadsFilePath, JSON.stringify([], null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to initialize leads.json:', err);
  }
}

// In-memory rate limiting map for lead submissions
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 12;

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  record.count += 1;
  return true;
};

// All 24 canonical routes
const CANONICAL_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about-us', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/digital-advertising', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/performance-marketing', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/creative-branding', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/website-development', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/seo-content-marketing', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/marketing-communications', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/outdoor-advertising', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/printing-solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/events-exhibitions', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/talent-management', priority: '0.8', changefreq: 'monthly' },
  { path: '/industries', priority: '0.8', changefreq: 'monthly' },
  { path: '/ventures', priority: '0.9', changefreq: 'monthly' },
  { path: '/ventures/astroexperts', priority: '0.9', changefreq: 'monthly' },
  { path: '/ventures/realty-experts', priority: '0.9', changefreq: 'monthly' },
  { path: '/work', priority: '0.8', changefreq: 'weekly' },
  { path: '/insights', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
];

// Serve dynamic robots.txt
app.get('/robots.txt', (_req: Request, res: Response) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you

Sitemap: ${SITE_URL}/sitemap.xml
`);
});

// Serve dynamic XML sitemap
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = CANONICAL_ROUTES.map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join('\n');

  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`);
});

// Lead Submission API
app.post('/api/leads', (req: Request, res: Response): any => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

  // 1. Rate limiting
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions from this connection. Please try again after 15 minutes or call +91 9682809232 directly.',
    });
  }

  const {
    name,
    email,
    phone,
    service,
    budget,
    company,
    website,
    requirements,
    consent,
    _gotcha,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    source_page,
  } = req.body;

  // 2. Honeypot spam check
  if (_gotcha && String(_gotcha).trim().length > 0) {
    // Silently succeed for bots
    return res.status(200).json({
      success: true,
      reference: 'PP-2026-SPAM-GUARD',
      message: 'Your inquiry has been received.',
    });
  }

  // 3. Backend validation
  const errors: Record<string, string> = {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Full name is required (minimum 2 characters).';
  } else if (name.trim().length > 100) {
    errors.name = 'Full name must not exceed 100 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'A valid work email address is required.';
  } else if (email.trim().length > 150) {
    errors.email = 'Email address must not exceed 150 characters.';
  }

  // Clean phone: at least 7 digits, reasonable symbols
  const digitsOnly = phone ? String(phone).replace(/\D/g, '') : '';
  if (!phone || digitsOnly.length < 8 || digitsOnly.length > 15) {
    errors.phone = 'Please provide a valid contact phone number (at least 8-10 digits).';
  }

  if (!service || typeof service !== 'string' || service.trim().length === 0) {
    errors.service = 'Please select a service of interest.';
  }

  if (!requirements || typeof requirements !== 'string' || requirements.trim().length < 5) {
    errors.requirements = 'Please describe your project requirements (minimum 5 characters).';
  } else if (requirements.trim().length > 3000) {
    errors.requirements = 'Requirements description must not exceed 3000 characters.';
  }

  if (consent !== true && consent !== 'true' && consent !== 'on') {
    errors.consent = 'You must consent to being contacted regarding your project inquiry.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Please correct the highlighted form errors.',
      fieldErrors: errors,
    });
  }

  // 4. Generate unique reference ID
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const referenceId = `PP-2026-${randomSuffix}`;

  // 5. Structure clean lead payload
  const newLead = {
    id: referenceId,
    createdAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: String(phone).trim(),
    company: company ? String(company).trim().slice(0, 150) : '',
    website: website ? String(website).trim().slice(0, 200) : '',
    service: String(service).trim(),
    budget: budget ? String(budget).trim() : 'Undisclosed',
    requirements: requirements.trim(),
    consent: true,
    ip: clientIp.split(',')[0].trim(),
    sourcePage: source_page ? String(source_page).slice(0, 250) : '/',
    utm: {
      source: utm_source ? String(utm_source).slice(0, 80) : null,
      medium: utm_medium ? String(utm_medium).slice(0, 80) : null,
      campaign: utm_campaign ? String(utm_campaign).slice(0, 80) : null,
      term: utm_term ? String(utm_term).slice(0, 80) : null,
      content: utm_content ? String(utm_content).slice(0, 80) : null,
    },
  };

  // 6. Durable Storage: Save to data/leads.json
  try {
    let currentLeads = [];
    if (fs.existsSync(leadsFilePath)) {
      const fileData = fs.readFileSync(leadsFilePath, 'utf-8');
      try {
        currentLeads = JSON.parse(fileData);
        if (!Array.isArray(currentLeads)) currentLeads = [];
      } catch {
        currentLeads = [];
      }
    }
    currentLeads.unshift(newLead);
    // Keep max 500 records in JSON file to prevent unbounded growth
    if (currentLeads.length > 500) {
      currentLeads = currentLeads.slice(0, 500);
    }
    fs.writeFileSync(leadsFilePath, JSON.stringify(currentLeads, null, 2), 'utf-8');
  } catch (storageErr) {
    console.error('Error persisting lead to storage:', storageErr);
  }

  // 7. Formspree dispatch hook
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/mzedgegb';
  if (formspreeEndpoint) {
    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newLead.name,
        email: newLead.email,
        phone: newLead.phone,
        company: newLead.company,
        website: newLead.website,
        service: newLead.service,
        budget: newLead.budget,
        message: newLead.requirements,
        reference_id: referenceId,
        source_page: newLead.sourcePage,
        _subject: `[Prachar Prasar Lead] ${newLead.service} — ${newLead.name}`,
      }),
    }).catch((fErr) => console.warn('Formspree server dispatch note:', fErr.message));
  }

  // 8. Safe operational logging & SMTP notification check
  const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || 'contact@pracharprasar.co';
  console.log(`[LEAD RECEIVED] Ref: ${referenceId} | Name: ${newLead.name} | Service: ${newLead.service} | Target: ${recipientEmail} | Formspree: ${formspreeEndpoint}`);

  return res.status(201).json({
    success: true,
    reference: referenceId,
    lead: {
      id: referenceId,
      name: newLead.name,
      service: newLead.service,
      createdAt: newLead.createdAt,
    },
    message: 'Your enquiry has been submitted successfully. Our strategy team will review it and reach out within 24 hours.',
  });
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'Prachar Prasar Web Service',
    time: new Date().toISOString(),
    version: '1.0.0',
    tagline: 'Prachar nhi toh Prasar nhi!',
  });
});

// Static assets from public directory
app.use(express.static(path.resolve(__dirname, 'public'), { maxAge: '1d' }));

// Set up Vite or Static Production Serving
async function startServer() {
  if (!isProd) {
    // Development mode: Mount Vite middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve dist/
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath, { maxAge: '7d' }));
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    } else {
      // Fallback if not yet built
      const { createServer } = await import('vite');
      const vite = await createServer({
        server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Prachar Prasar server running on http://0.0.0.0:${PORT} [${process.env.NODE_ENV || 'development'}]`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server start error:', err);
  process.exit(1);
});
