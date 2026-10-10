import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  defaultService?: string;
  sourcePage?: string;
  onSuccess?: (reference: string) => void;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  defaultService = '',
  sourcePage = '/',
  onSuccess,
  compact = false,
}) => {
  // 1. Formspree React Hook integration with form ID: mzedgegb
  const [formspreeState, handleFormspreeSubmit] = useForm('mzedgegb');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: defaultService || '',
    budget: '',
    requirements: '',
    consent: false,
    _gotcha: '', // Formspree native anti-spam honeypot
  });

  const [referenceId, setReferenceId] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize unique reference code on mount
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
      errors.name = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid work email address.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || digitsOnly.length < 8) {
      errors.phone = 'Please provide a valid contact number (at least 8-10 digits).';
    }

    if (!formData.service) {
      errors.service = 'Please select a service of interest.';
    }

    if (!formData.requirements.trim() || formData.requirements.trim().length < 5) {
      errors.requirements = 'Please describe your project goals or marketing requirements.';
    }

    if (!formData.consent) {
      errors.consent = 'Your consent is required to receive our project consultation call or email.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError(null);

    // If honeypot filled, silent return
    if (formData._gotcha) {
      setIsCompleted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const activeRef = referenceId || `PP-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

      // Collect query string params for UTM capture
      const urlParams = new URLSearchParams(window.location.search);

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        service: formData.service,
        budget: formData.budget,
        message: formData.requirements,
        requirements: formData.requirements,
        consent: formData.consent,
        reference_id: activeRef,
        source_page: sourcePage || window.location.pathname,
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_term: urlParams.get('utm_term'),
        utm_content: urlParams.get('utm_content'),
      };

      // 1. Submit to Formspree endpoint (mzedgegb) via handleFormspreeSubmit
      const formspreePromise = handleFormspreeSubmit(e);

      // 2. Concurrently archive to local durable storage at /api/leads
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => console.warn('Local lead archive note:', err));

      await formspreePromise;

      setIsCompleted(true);

      if (onSuccess) {
        onSuccess(activeRef);
      }
    } catch (err: any) {
      setGeneralError(err.message || 'Error transmitting your enquiry. Please reach us at +91 9682809232.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render confirmation once Formspree succeeds or local submit completes
  if (formspreeState.succeeded || isCompleted) {
    return (
      <div className="p-8 bg-emerald-50/70 border border-emerald-200 rounded-xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-[#111111]">Enquiry Received Successfully</h3>
        <p className="text-sm text-[#606770] max-w-md mx-auto">
          Thank you for reaching out to Prachar Prasar. Your enquiry has been delivered via Formspree and recorded under reference:
        </p>
        <div className="inline-block px-4 py-2 bg-white border border-emerald-300 rounded-md font-mono font-bold text-sm text-[#C62828] shadow-2xs">
          {referenceId}
        </div>
        <p className="text-xs text-[#606770]">
          Founder Pawan Rai & our strategy team review enquiries within 24 business hours. You can also call us directly at{' '}
          <a href="tel:+919682809232" className="font-semibold text-[#111111] underline">
            +91 9682809232
          </a>.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsCompleted(false);
            const newRef = `PP-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
            setReferenceId(newRef);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              website: '',
              service: defaultService || '',
              budget: '',
              requirements: '',
              consent: false,
              _gotcha: '',
            });
          }}
          className="text-xs font-semibold text-[#C62828] hover:underline"
        >
          Submit Another Project Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      action="https://formspree.io/f/mzedgegb"
      method="POST"
      noValidate
      className="space-y-4 text-left"
    >
      {/* Hidden Metadata for Formspree Email Notifications */}
      <input type="hidden" name="reference_id" value={referenceId} />
      <input type="hidden" name="source_page" value={sourcePage || '/'} />
      <input
        type="hidden"
        name="_subject"
        value={`[Prachar Prasar Enquiry] ${formData.service || 'Consultation'} — ${formData.name || 'Prospect'}`}
      />

      {/* Formspree Native Honeypot Anti-Spam */}
      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
        <label htmlFor="_gotcha">Leave this empty</label>
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

      {generalError && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{generalError}</span>
        </div>
      )}

      {/* Row 1: Full Name & Work Email */}
      <div className={`grid grid-cols-1 ${compact ? 'gap-3' : 'sm:grid-cols-2 gap-4'}`}>
        <div>
          <label htmlFor="lead-name" className="block text-xs font-bold text-[#202124] mb-1">
            Full Name <span className="text-[#C62828]">*</span>
          </label>
          <input
            type="text"
            id="lead-name"
            name="name"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
            }}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
              fieldErrors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
            }`}
          />
          {fieldErrors.name && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.name}</p>
          )}
          <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
        </div>

        <div>
          <label htmlFor="lead-email" className="block text-xs font-bold text-[#202124] mb-1">
            Work Email <span className="text-[#C62828]">*</span>
          </label>
          <input
            type="email"
            id="lead-email"
            name="email"
            required
            placeholder="rahul@company.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
            }}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
              fieldErrors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
            }`}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.email}</p>
          )}
          <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className={`grid grid-cols-1 ${compact ? 'gap-3' : 'sm:grid-cols-2 gap-4'}`}>
        <div>
          <label htmlFor="lead-phone" className="block text-xs font-bold text-[#202124] mb-1">
            Phone Number <span className="text-[#C62828]">*</span>
          </label>
          <input
            type="tel"
            id="lead-phone"
            name="phone"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
            }}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
              fieldErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
            }`}
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.phone}</p>
          )}
          <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
        </div>

        <div>
          <label htmlFor="lead-company" className="block text-xs font-bold text-[#202124] mb-1">
            Company / Business Name <span className="text-[#606770] font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="lead-company"
            name="company"
            placeholder="e.g. Apex Enterprises"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E6E8EB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828]"
          />
        </div>
      </div>

      {/* Row 3: Service Selection & Approximate Budget */}
      <div className={`grid grid-cols-1 ${compact ? 'gap-3' : 'sm:grid-cols-2 gap-4'}`}>
        <div>
          <label htmlFor="lead-service" className="block text-xs font-bold text-[#202124] mb-1">
            Service of Interest <span className="text-[#C62828]">*</span>
          </label>
          <select
            id="lead-service"
            name="service"
            required
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (fieldErrors.service) setFieldErrors({ ...fieldErrors, service: '' });
            }}
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
              fieldErrors.service ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
            }`}
          >
            <option value="">Select Service...</option>
            {servicesOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.service && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.service}</p>
          )}
          <ValidationError prefix="Service" field="service" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
        </div>

        <div>
          <label htmlFor="lead-budget" className="block text-xs font-bold text-[#202124] mb-1">
            Estimated Marketing Budget <span className="text-[#606770] font-normal">(Optional)</span>
          </label>
          <select
            id="lead-budget"
            name="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E6E8EB] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828]"
          >
            <option value="">Select Budget Range...</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Requirements / Message Textarea */}
      <div>
        <label htmlFor="lead-requirements" className="block text-xs font-bold text-[#202124] mb-1">
          Brief Description of Requirements <span className="text-[#C62828]">*</span>
        </label>
        <textarea
          id="lead-requirements"
          name="message"
          required
          rows={compact ? 3 : 4}
          placeholder="Tell us about your business goals, target audience, timeline, or current marketing bottlenecks..."
          value={formData.requirements}
          onChange={(e) => {
            setFormData({ ...formData, requirements: e.target.value });
            if (fieldErrors.requirements) setFieldErrors({ ...fieldErrors, requirements: '' });
          }}
          className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 focus:border-[#C62828] ${
            fieldErrors.requirements ? 'border-red-400 bg-red-50/20' : 'border-[#E6E8EB]'
          }`}
        />
        {fieldErrors.requirements && (
          <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.requirements}</p>
        )}
        <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="mt-1 text-[11px] text-red-600 font-medium" />
      </div>

      {/* Row 5: Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            required
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (fieldErrors.consent) setFieldErrors({ ...fieldErrors, consent: '' });
            }}
            className="mt-0.5 h-4 w-4 rounded border-[#E6E8EB] text-[#C62828] focus:ring-[#C62828] cursor-pointer"
          />
          <span className="text-xs text-[#606770] leading-snug">
            I agree to allow Prachar Prasar to contact me regarding my project inquiry via phone or email in accordance with the{' '}
            <span className="underline text-[#202124]">Privacy Policy</span>. No spam, ever.
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting || formspreeState.submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] active:bg-[#8E1B1B] rounded-lg shadow-xs transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2"
        >
          {isSubmitting || formspreeState.submitting ? (
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
        <p className="text-[11px] text-[#606770] text-center mt-2">
          Prefer an immediate discussion? Call{' '}
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
  );
};
