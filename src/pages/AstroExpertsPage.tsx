import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { LeadForm } from '../components/LeadForm';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Video,
  ShieldCheck,
  ArrowRight,
  Phone,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';

interface AstroExpertsPageProps {
  onNavigate: (path: string) => void;
}

export const AstroExpertsPage: React.FC<AstroExpertsPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="AstroExperts | Digital Marketing for Astrologers & Spiritual Healers"
        description="AstroExperts — Where Spirituality Meets Strategy! Specialized digital marketing agency by Prachar Prasar for Vedic astrologers, Tarot readers, numerologists, and Vastu consultants."
        canonicalPath="/ventures/astroexperts"
      />

      {/* Hero Header */}
      <section className="bg-amber-50/30 border-b border-amber-200/60 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('/ventures')}
            className="text-xs font-semibold text-[#606770] hover:text-[#C62828] inline-flex items-center gap-1.5 mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Ventures</span>
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-200 rounded text-xs font-bold">
              Specialized Venture of Prachar Prasar
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-2">
            AstroExperts
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#C62828] mb-6">
            "Where Spirituality Meets Strategy!"
          </p>

          <p className="text-base sm:text-lg text-[#606770] leading-relaxed max-w-3xl mb-8">
            A specialized digital marketing agency for astrologers, Tarot readers, numerologists, Vastu consultants, healers, and other occult and spiritual professionals seeking to strengthen their online presence, attract relevant enquiries, and grow their practices.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('astro-enquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Consult With AstroExperts Team
            </button>
            <a
              href="https://www.astroexperts.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F0F2F5] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Visit www.astroexperts.online</span>
              <ExternalLink className="w-4 h-4 text-[#C62828]" />
            </a>
            <a
              href="tel:+919682809232"
              className="px-4 py-3 text-xs sm:text-sm font-semibold text-[#606770] hover:text-[#111111] inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C62828]" />
              <span>+91 9682809232</span>
            </a>
          </div>
        </div>
      </section>

      {/* Image & Philosophy Split */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E6E8EB] shadow-md aspect-[4/3] bg-[#F7F8FA]">
                <img
                  src="/images/astroexperts.jpg"
                  alt="AstroExperts Vedic Astrology & Spiritual Strategy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                The AstroExperts Difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-4">
                Dignified, High-Trust Growth for Occult & Spiritual Leaders.
              </h2>
              <div className="space-y-4 text-sm text-[#606770] leading-relaxed">
                <p>
                  Most generic marketing agencies fail spiritual practitioners because they apply aggressive, sensationalist e-commerce tactics that cheapen classical occult sciences.
                </p>
                <p>
                  At AstroExperts, we understand the sacred depth of Vedic Astrology (Jyotish), Tarot reading, Numerology, and Vastu Shastra. We frame your knowledge with institutional dignity, positioning you as an empathetic, authentic guide.
                </p>
                <p>
                  By pairing respectful educational video content with targeted digital advertising and automated consultation calendars, we help practitioners build predictable practices with clients who genuinely value their guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Serve & What We Build */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Who We Serve */}
            <div className="p-8 bg-white border border-[#E6E8EB] rounded-2xl">
              <h3 className="text-lg font-bold text-[#111111] mb-4">
                Practitioners We Serve
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#202124]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Vedic Astrologers (Jyotishis)</strong> — Kundali analysis & planetary remedial guidance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Tarot Card Readers</strong> — Intuitive life guidance and career consultations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Numerologists</strong> — Name correction and date-of-birth compatibility</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Vastu Shastra Consultants</strong> — Residential and commercial spatial energy alignment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Reiki & Energy Healers</strong> — Holistic wellness and spiritual mentors</span>
                </li>
              </ul>
            </div>

            {/* Core Capabilities */}
            <div className="p-8 bg-white border border-[#E6E8EB] rounded-2xl">
              <h3 className="text-lg font-bold text-[#111111] mb-4">
                Specialized Solutions Delivered
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#606770]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Personal Brand Positioning:</strong> Elevated visual identity, logo, and social aesthetics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Educational Video Strategy:</strong> Scripting informative reels and YouTube videos that answer real seeker questions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Automated Booking Architecture:</strong> Pre-paid appointment booking calendar with automated reminders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Targeted Meta Ads:</strong> Connecting with seekers actively looking for birth-chart and spiritual insights.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span><strong>Pan-India & NRI Reach:</strong> Attracting affluent Indian diaspora seeking authentic cultural guidance.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="astro-enquiry" className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-amber-200 bg-amber-50/20 text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              AstroExperts Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
              Transform Your Spiritual Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#606770] max-w-lg mx-auto mb-8">
              Discuss your practice goals with our specialized team under Prachar Prasar.
            </p>

            <LeadForm
              defaultService="AstroExperts Inquiry"
              sourcePage="/ventures/astroexperts"
              onSuccess={(ref) => onNavigate(`/thank-you?ref=${ref}`)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
