import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { LeadForm } from '../components/LeadForm';
import {
  Building2,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
  Phone,
  ArrowLeft,
} from 'lucide-react';

interface RealtyExpertsPageProps {
  onNavigate: (path: string) => void;
}

export const RealtyExpertsPage: React.FC<RealtyExpertsPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="Realty Experts | Real Estate Marketing Agency — Prachar Prasar"
        description="Realty Experts — Strategically Marketed, Scientifically Sold! Specialized real estate marketing agency by Prachar Prasar serving developers, channel partners, and associates."
        canonicalPath="/ventures/realty-experts"
      />

      {/* Hero Header */}
      <section className="bg-blue-50/30 border-b border-blue-200/60 py-14 sm:py-20">
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
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-900 border border-blue-200 rounded text-xs font-bold">
              Specialized Venture of Prachar Prasar
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-2">
            Realty Experts
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#C62828] mb-6">
            "Strategically Marketed, Scientifically Sold!"
          </p>

          <p className="text-base sm:text-lg text-[#606770] leading-relaxed max-w-3xl mb-8">
            A specialized real estate marketing agency helping developers, channel partners, and real estate associates with digital advertising, project marketing, qualified lead generation, landing pages, content, and high-velocity marketing systems.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('realty-enquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Discuss Real Estate Mandate
            </button>
            <a
              href="https://www.realtyexperts.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F0F2F5] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Visit www.realtyexperts.online</span>
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
                  src="/images/realty-experts.jpg"
                  alt="Realty Experts High-Rise Residential Architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                The Scientific Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-4">
                Beyond Generic Telecalling: High-Intent Property Acquisition.
              </h2>
              <div className="space-y-4 text-sm text-[#606770] leading-relaxed">
                <p>
                  The Indian real estate landscape is crowded with brokerages blasting unsolicited phone lists. This causes buyer resistance and exhausts on-ground sales teams.
                </p>
                <p>
                  Realty Experts operates on scientific conversion principles: we build price-qualified digital funnels, immersive project microsites with 3D walk-throughs, and location-targeted Meta and Google Search campaigns that address the exact questions genuine buyers ask.
                </p>
                <p>
                  Every lead captured is screened for unit configuration preference, investment horizon, and verified phone contact, ensuring that site visits translate into booked inventory.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stakeholders We Empower */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Who We Partner With
            </h2>
            <p className="text-xs sm:text-sm text-[#606770] mt-1">
              End-to-end commercial solutions across the property development value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white border border-[#E6E8EB] rounded-2xl">
              <h3 className="text-base font-bold text-[#111111] mb-2">Real Estate Developers</h3>
              <p className="text-xs text-[#606770] leading-relaxed mb-4">
                Full project launch marketing mandates, brand positioning, large-format outdoor billboards, and rapid digital inventory sales.
              </p>
              <div className="space-y-1.5 text-xs text-[#202124]">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Residential Towers & Townships</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Commercial & Retail Developments</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Plotted Developments & Luxury Villas</span></div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-2xl">
              <h3 className="text-base font-bold text-[#111111] mb-2">Authorized Channel Partners</h3>
              <p className="text-xs text-[#606770] leading-relaxed mb-4">
                Exclusive project digital distribution, pre-launch lead capture funnels, and CRM automation that scales associate closing capacity.
              </p>
              <div className="space-y-1.5 text-xs text-[#202124]">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Tier-1 CP Launch Campaigns</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>NRI Investor Roadshow Marketing</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Real-Time WhatsApp Follow-Up Bots</span></div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-2xl">
              <h3 className="text-base font-bold text-[#111111] mb-2">Real Estate Associates</h3>
              <p className="text-xs text-[#606770] leading-relaxed mb-4">
                Local catchment domination, high-converting social media creatives, and micro-budget ad funnels designed for independent brokers.
              </p>
              <div className="space-y-1.5 text-xs text-[#202124]">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Hyper-Local Micro Ad Sets</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Resale & Rental Mandate Capture</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Personal Broker Branding</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="realty-enquiry" className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-blue-200 bg-blue-50/20 text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              Realty Experts Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
              Scale Your Project Sales Velocity
            </h2>
            <p className="text-xs sm:text-sm text-[#606770] max-w-lg mx-auto mb-8">
              Discuss your project mandate with Realty Experts and the Prachar Prasar senior strategy team.
            </p>

            <LeadForm
              defaultService="Realty Experts Inquiry"
              sourcePage="/ventures/realty-experts"
              onSuccess={(ref) => onNavigate(`/thank-you?ref=${ref}`)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
