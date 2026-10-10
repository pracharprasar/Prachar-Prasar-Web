import express from 'express';
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
    contentSecurityPolicy: false, // Allows Vite client bundles and web fonts
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
    console.error('Failed to create data directory:', err.message);
  }
}
const leadsFilePath = path.join(dataDir, 'leads.json');
if (!fs.existsSync(leadsFilePath)) {
  try {
    fs.writeFileSync(leadsFilePath, JSON.stringify([], null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to initialize leads.json:', err.message);
  }
}

// In-memory rate limiting map for lead submissions
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 12;

const checkRateLimit = (ip) => {
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

// Health check endpoints (root /health and /api/health)
const handleHealth = (_req, res) => {
  res.status(200).json({
    status: 'ok',
    app: 'Prachar Prasar Web Service',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    tagline: 'Prachar nhi toh Prasar nhi!',
  });
};

app.get('/health', handleHealth);
app.get('/api/health', handleHealth);

// Serve dynamic robots.txt
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you

Sitemap: ${SITE_URL}/sitemap.xml
`);
});

// Serve dynamic XML sitemap
app.get('/sitemap.xml', (_req, res) => {
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
app.post('/api/leads', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

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
    return res.status(200).json({
      success: true,
      reference: 'PP-2026-SPAM-GUARD',
      message: 'Your inquiry has been received.',
    });
  }

  // 3. Backend validation
  const errors = {};

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
    ip: String(clientIp).split(',')[0].trim(),
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
    if (currentLeads.length > 500) {
      currentLeads = currentLeads.slice(0, 500);
    }
    fs.writeFileSync(leadsFilePath, JSON.stringify(currentLeads, null, 2), 'utf-8');
  } catch (storageErr) {
    console.error('Error persisting lead to storage:', storageErr.message);
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

  // 8. Safe operational logging & notification
  const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || 'contact@pracharprasar.co';
  console.log(`[LEAD RECEIVED] Ref: ${referenceId} | Name: ${newLead.name} | Service: ${newLead.service} | Target: ${recipientEmail}`);

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

// Explicit 404 for unhandled API routes to prevent falling through to SPA HTML
app.all('/api/*', (_req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Serve static assets from public/ directory
const publicPath = path.resolve(__dirname, 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath, { maxAge: '1d' }));
}

// Check if request is asking for a static asset file
const isStaticAssetRequest = (reqPath) => {
  return /\.[a-zA-Z0-9]+$/.test(reqPath);
};

// Production vs Development Server Setup
async function startServer() {
  const distPath = path.resolve(__dirname, 'dist');
  const indexHtmlPath = path.join(distPath, 'index.html');
  const hasDist = fs.existsSync(indexHtmlPath);

  if (isProd && !hasDist) {
    console.error('================================================================');
    console.error('[FATAL STARTUP ERROR] Production build directory dist/ is missing!');
    console.error('Path checked:', indexHtmlPath);
    console.error('Please run "npm run build" before launching in production.');
    console.error('================================================================');
    process.exit(1);
  }

  if (hasDist) {
    // Serve production static assets from dist/
    app.use(express.static(distPath, { maxAge: '7d' }));

    // SPA fallback: return index.html for page navigation
    app.get('*', (req, res) => {
      // Guard: Do NOT return index.html for missing static files (js, css, images, etc.)
      if (isStaticAssetRequest(req.path)) {
        return res.status(404).type('text/plain').send(`Asset not found: ${req.path}`);
      }
      res.sendFile(indexHtmlPath);
    });
  } else {
    // Development mode fallback: Mount Vite middleware dynamically
    console.log('[DEV MODE] Mounting Vite middleware server...');
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
  }

  // Centralized Error Handling Middleware (prevents leaking internal stack traces)
  app.use((err, _req, res, _next) => {
    console.error('Server error handler caught:', err.message);
    if (res.headersSent) return;
    res.status(500).json({ error: 'Internal server error' });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Prachar Prasar production server listening on http://0.0.0.0:${PORT} (Node.js ${process.version})`);
    console.log(`Environment: ${process.env.NODE_ENV || 'production'} | Health endpoint: http://0.0.0.0:${PORT}/health`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup failure:', err);
  process.exit(1);
});
