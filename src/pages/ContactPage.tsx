import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { SEOHead } from '../components/SEOHead';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  // 1. Direct integration with @formspree/react useForm hook
  const [formspreeState, handleFormspreeSubmit] = useForm('mzedgegb');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'Digital Advertising',
    budget: 'Exploring / Flexible',
    message: '',
    consent: false,
    _gotcha: '',
  });

  const [referenceId, setReferenceId] = useState<string>('');
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [submissionTime, setSubmissionTime] = useState<string>('');

  useEffect(() => {
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    setReferenceId(`PP-2026-${randomSuffix}`);
  }, []);

  const servicesOptions = [
    'Digital Advertising',
    'Performance Marketing',
    'Creative & Branding',
    'Website Development',
    'SEO & Content Marketing',
    'Marketing Communications',
    'Outdoor Advertising',
    'Printing Solutions',
    'Events & Exhibitions',
    'Talent Management',
    'AstroExperts Inquiry',
    'Realty Experts Inquiry',
    'Other / Integrated Campaign',
  ];

  const budgetOptions = [
    'Exploring / Flexible',
    'Under ₹50,000 / month',
    '₹50,000 – ₹1,50,000 / month',
    '₹1,50,000 – ₹5,00,000 / month',
    '₹5,00,000+ / month',
    'One-Time Project Contract',
  ];

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid business email address.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || digitsOnly.length < 8) {
      errors.phone = 'Please provide a valid contact number (at least 8-10 digits).';
    }

    if (!formData.service) {
      errors.service = 'Please choose a primary service of interest.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = 'Please provide brief details of your requirements (at least 5 characters).';
    }

    if (!formData.consent) {
      errors.consent = 'Your consent is required to receive our project consultation.';
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCustomSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const now = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    setSubmissionTime(now);

    // Concurrently post to local server /api/leads for durable storage
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      website: formData.website,
      service: formData.service,
      budget: formData.budget,
      requirements: formData.message,
      consent: formData.consent,
      _gotcha: formData._gotcha,
      source_page: '/contact',
      reference_id: referenceId,
    };

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((err) => console.warn('Local lead archive note:', err));

    // Submit via @formspree/react hook
    await handleFormspreeSubmit(e);
  };

  return (
    <div>
      <SEOHead
        title="Contact Us | Request Marketing Consultation — Prachar Prasar"
        description="Connect with Prachar Prasar. Call +91 9682809232 or submit your project details. Strategic advertising, digital marketing, and business growth solutions across India."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            Direct Commercial Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Let's Discuss Your Project.
          </h1>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-2xl mx-auto">
            Tell us about your business, target audience, and commercial objectives. Founder Pawan Rai and our senior media strategy team review every submission personally.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Channels + Form / Success State */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 cols): Direct Agency Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#111111] mb-2">
                  Direct Agency Contact
                </h2>
                <p className="text-xs sm:text-sm text-[#606770] leading-relaxed">
                  For immediate consultation regarding active campaigns, media planning, or new project mandates, reach out directly:
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="p-5 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                      Direct Telephone
                    </p>
                    <a
                      href="tel:+919682809232"
                      className="text-base font-bold text-[#111111] hover:text-[#C62828] transition-colors"
                    >
                      +91 9682809232
                    </a>
                    <p className="text-[11px] text-[#606770] mt-0.5">
                      Mon – Sat, 9:30 AM to 6:30 PM IST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                      Official Email
                    </p>
                    <a
                      href="mailto:contact@pracharprasar.co"
                      className="text-base font-bold text-[#111111] hover:text-[#C62828] transition-colors"
                    >
                      contact@pracharprasar.co
                    </a>
                    <p className="text-[11px] text-[#606770] mt-0.5">
                      Proposals, briefs & media inquiries
                    </p>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="p-5 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                      Response SLA Commitment
                    </p>
                    <p className="text-sm font-semibold text-[#202124]">
                      Within 24 Business Hours
                    </p>
                    <p className="text-[11px] text-[#606770] mt-0.5">
                      Fast diagnosis and initial discovery scheduling
                    </p>
                  </div>
                </div>

                {/* Primary Market */}
                <div className="p-5 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                      Primary Market
                    </p>
                    <p className="text-sm font-semibold text-[#202124]">
                      India (Pan-India Agency Coverage)
                    </p>
                    <p className="text-[11px] text-[#606770] mt-0.5">
                      Established 2016 · Parent agency of AstroExperts & Realty Experts
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Steps */}
              <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  What Happens After You Submit:
                </h3>
                <div className="space-y-2 text-xs text-[#606770]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Inquiry sent directly via Formspree to our executive desk.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Founder Pawan Rai audits your business goals and marketing bottlenecks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                    <span>We schedule a 30-minute discovery call with actionable campaign recommendations.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): Formspree Form OR Rich Success State UI */}
            <div className="lg:col-span-7 bg-[#F7F8FA] p-8 sm:p-10 rounded-2xl border border-[#E6E8EB]">
              
              {/* SUCCESS STATE UI (Triggered when @formspree/react state.succeeded is true) */}
              {formspreeState.succeeded ? (
                <div className="space-y-6 text-center py-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
                      Formspree Dispatch Confirmed
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                      Enquiry Received Successfully!
                    </h2>
                    <p className="text-sm text-[#606770] max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you for contacting Prachar Prasar, <strong className="text-[#111111]">{formData.name}</strong>. Your project brief has been securely delivered to our strategy inbox.
                    </p>
                  </div>

                  {/* Submission Details Card */}
                  <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl text-left space-y-3 max-w-lg mx-auto shadow-2xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E6E8EB]">
                      <span className="text-xs text-[#606770]">Tracking Reference</span>
                      <span className="font-mono font-bold text-sm text-[#C62828] bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                        {referenceId}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                      <div>
                        <span className="text-[#606770] block">Service Selected:</span>
                        <span className="font-semibold text-[#111111]">{formData.service}</span>
                      </div>
                      <div>
                        <span className="text-[#606770] block">Budget Range:</span>
                        <span className="font-semibold text-[#111111]">{formData.budget}</span>
                      </div>
                      <div>
                        <span className="text-[#606770] block">Contact Phone:</span>
                        <span className="font-semibold text-[#111111]">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-[#606770] block">Work Email:</span>
                        <span className="font-semibold text-[#111111]">{formData.email}</span>
                      </div>
                    </div>

                    {submissionTime && (
                      <div className="pt-2 text-[11px] text-[#606770] border-t border-[#E6E8EB] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C62828]" />
                        <span>Submitted on {submissionTime} (IST)</span>
                      </div>
                    )}
                  </div>

                  {/* Next Step Guidance */}
                  <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs text-emerald-900 max-w-lg mx-auto leading-relaxed flex items-start gap-2.5 text-left">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold mb-0.5">Response SLA Commitment:</strong>
                      Founder Pawan Rai and our senior media strategy team will review your enquiry within 24 business hours. You will receive an initial email diagnostic or a discovery phone call.
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate('/services')}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Explore Our 10 Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => onNavigate('/')}
                      className="px-4 py-2.5 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F7F8FA] rounded-lg transition-colors cursor-pointer"
                    >
                      Return to Homepage
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.location.reload();
                      }}
                      className="text-xs text-[#606770] hover:text-[#C62828] underline block w-full mt-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INTERFACE */
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
                      Project Brief
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#111111]">
                      Submit Your Marketing Brief
                    </h2>
                    <p className="text-xs text-[#606770] mt-1">
                      Powered by Formspree. All fields marked with (<span className="text-[#C62828]">*</span>) are required. Your details remain strictly confidential.
                    </p>
                  </div>

                  <form
                    onSubmit={handleCustomSubmit}
                    action="https://formspree.io/f/mzedgegb"
                    method="POST"
                    noValidate
                    className="space-y-4 text-left"
                  >
                    {/* Hidden Metadata for Formspree */}
                    <input type="hidden" name="reference_id" value={referenceId} />
                    <input type="hidden" name="source_page" value="/contact" />
                    <input
                      type="hidden"
                      name="_subject"
                      value={`[Prachar Prasar Enquiry] ${formData.service} — ${formData.name || 'Prospect'}`}
                    />

                    {/* Formspree Native Honeypot */}
                    <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                      <label htmlFor="_gotcha">Leave this blank</label>
                      <input
                        type="text"
                        id="_gotcha"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData._gotcha}
                        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                      />
                    </div>

                    {/* Top Level Formspree Errors if any */}
                    {formspreeState.errors && formspreeState.errors.getFormErrors().length > 0 && (
                      <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5 text-xs text-red-700">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          {formspreeState.errors.getFormErrors().map((err, idx) => (
                            <p key={idx}>{err.message}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Row 1: Full Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#202124] mb-1">
                          Full Name <span className="text-[#C62828]">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          placeholder="e.g. Vikram Malhotra"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (clientErrors.name) setClientErrors({ ...clientErrors, name: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
                            clientErrors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
                          }`}
                        />
                        {clientErrors.name && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium">{clientErrors.name}</p>
                        )}
                        <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#202124] mb-1">
                          Work Email <span className="text-[#C62828]">*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          placeholder="vikram@enterprise.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (clientErrors.email) setClientErrors({ ...clientErrors, email: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
                            clientErrors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
                          }`}
                        />
                        {clientErrors.email && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium">{clientErrors.email}</p>
                        )}
                        <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-[#202124] mb-1">
                          Phone Number <span className="text-[#C62828]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (clientErrors.phone) setClientErrors({ ...clientErrors, phone: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
                            clientErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
                          }`}
                        />
                        {clientErrors.phone && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium">{clientErrors.phone}</p>
                        )}
                        <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-bold text-[#202124] mb-1">
                          Company / Business Name <span className="text-[#606770] font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          placeholder="e.g. Malhotra Holdings"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E6E8EB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service Selection & Approximate Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-bold text-[#202124] mb-1">
                          Service of Interest <span className="text-[#C62828]">*</span>
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={(e) => {
                            setFormData({ ...formData, service: e.target.value });
                            if (clientErrors.service) setClientErrors({ ...clientErrors, service: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
                            clientErrors.service ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
                          }`}
                        >
                          {servicesOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {clientErrors.service && (
                          <p className="mt-1 text-[11px] text-red-600 font-medium">{clientErrors.service}</p>
                        )}
                        <ValidationError prefix="Service" field="service" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
                      </div>

                      <div>
                        <label htmlFor="contact-budget" className="block text-xs font-bold text-[#202124] mb-1">
                          Estimated Marketing Budget <span className="text-[#606770] font-normal">(Optional)</span>
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E6E8EB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828]"
                        >
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Website URL (Optional) */}
                    <div>
                      <label htmlFor="contact-website" className="block text-xs font-bold text-[#202124] mb-1">
                        Current Website URL <span className="text-[#606770] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        id="contact-website"
                        name="website"
                        placeholder="https://www.yourcompany.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E6E8EB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828]"
                      />
                    </div>

                    {/* Row 5: Message / Requirements */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-[#202124] mb-1">
                        Brief Description of Requirements <span className="text-[#C62828]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your target market, current campaign performance, specific objectives, or key growth timelines..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (clientErrors.message) setClientErrors({ ...clientErrors, message: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
                          clientErrors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
                        }`}
                      />
                      {clientErrors.message && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{clientErrors.message}</p>
                      )}
                      <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
                    </div>

                    {/* Row 6: Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="consent"
                          required
                          checked={formData.consent}
                          onChange={(e) => {
                            setFormData({ ...formData, consent: e.target.checked });
                            if (clientErrors.consent) setClientErrors({ ...clientErrors, consent: '' });
                          }}
                          className="mt-0.5 h-4 w-4 rounded border-[#E6E8EB] text-[#C62828] focus:ring-[#C62828] cursor-pointer"
                        />
                        <span className="text-xs text-[#606770] leading-snug">
                          I agree to allow Prachar Prasar to contact me regarding my project inquiry via phone or email in accordance with the{' '}
                          <button
                            type="button"
                            onClick={() => onNavigate('/privacy-policy')}
                            className="underline text-[#202124] hover:text-[#C62828]"
                          >
                            Privacy Policy
                          </button>. No spam, ever.
                        </span>
                      </label>
                      {clientErrors.consent && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{clientErrors.consent}</p>
                      )}
                    </div>

                    {/* Submit Button with Loading Indicator */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formspreeState.submitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] active:bg-[#8E1B1B] rounded-lg shadow-xs transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2"
                      >
                        {formspreeState.submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Transmitting Inquiry via Formspree...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Strategic Consultation</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-[#606770] text-center mt-2.5">
                        Prefer an immediate phone conversation? Call{' '}
                        <a href="tel:+919682809232" className="text-[#C62828] font-semibold hover:underline">
                          +91 9682809232
                        </a>{' '}
                        or email{' '}
                        <a href="mailto:contact@pracharprasar.co" className="text-[#C62828] font-semibold hover:underline">
                          contact@pracharprasar.co
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
