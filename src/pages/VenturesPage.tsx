import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Sparkles, Building2, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

interface VenturesPageProps {
  onNavigate: (path: string) => void;
}

export const VenturesPage: React.FC<VenturesPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="Our Ventures | AstroExperts & Realty Experts — Prachar Prasar"
        description="Discover the specialized ventures of Prachar Prasar: AstroExperts for spiritual practitioners and Realty Experts for real estate developers and channel partners."
        canonicalPath="/ventures"
      />

      {/* Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            Prachar Prasar Brand Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Specialized Ventures. Unmatched Domain Focus.
          </h1>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-2xl mx-auto">
            Prachar Prasar is the parent advertising agency. To address distinct market ecosystems with tailored methodologies, we operate exactly two dedicated industry ventures:
          </p>
        </div>
      </section>

      {/* Ventures Showcase */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Venture 1: AstroExperts */}
          <div className="p-8 sm:p-12 rounded-2xl border border-amber-200 bg-amber-50/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded text-xs font-bold">
                    Specialized Venture
                  </span>
                  <span className="text-xs text-[#606770]">Occult & Spiritual Growth</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
                  AstroExperts
                </h2>
                <p className="text-base font-bold text-[#C62828] mb-4">
                  "Where Spirituality Meets Strategy!"
                </p>

                <p className="text-sm text-[#606770] leading-relaxed mb-6">
                  A specialized digital marketing agency for astrologers, Tarot readers, numerologists, Vastu consultants, healers, and other occult and spiritual professionals seeking to strengthen their online presence, attract relevant enquiries, and grow their practices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Dignified Visual Brand Identity</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Educational Video Marketing Strategy</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Automated Session Booking Workflows</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Pan-India & Global NRI Reach</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('/ventures/astroexperts')}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Read Dedicated AstroExperts Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://www.astroexperts.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F0F2F5] rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Visit www.astroexperts.online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-amber-200 shadow-md aspect-[4/3] bg-white">
                  <img
                    src="/images/astroexperts.jpg"
                    alt="AstroExperts Vedic Consultation Strategy"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Venture 2: Realty Experts */}
          <div className="p-8 sm:p-12 rounded-2xl border border-blue-200 bg-blue-50/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded text-xs font-bold">
                    Specialized Venture
                  </span>
                  <span className="text-xs text-[#606770]">Real Estate Growth</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
                  Realty Experts
                </h2>
                <p className="text-base font-bold text-[#C62828] mb-4">
                  "Strategically Marketed, Scientifically Sold!"
                </p>

                <p className="text-sm text-[#606770] leading-relaxed mb-6">
                  A specialized real estate marketing agency helping developers, channel partners, and real estate associates with digital advertising, project marketing, qualified lead generation, landing pages, content, and high-velocity marketing systems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Real Estate Developers & Builders</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>Authorized Channel Partners (CPs)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>High-Intent Buyer Qualification Funnels</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>High-Converting Project Microsites</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('/ventures/realty-experts')}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Read Dedicated Realty Experts Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://www.realtyexperts.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F0F2F5] rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Visit www.realtyexperts.online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-blue-200 shadow-md aspect-[4/3] bg-white">
                  <img
                    src="/images/realty-experts.jpg"
                    alt="Realty Experts Luxury Residential Architecture"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Brand Architecture Notice */}
      <section className="py-14 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-[#606770] leading-relaxed">
            <strong className="text-[#111111]">Parent Brand Policy:</strong> Prachar Prasar is the parent advertising agency established in 2016. AstroExperts and Realty Experts are its only two current specialized ventures. Both ventures draw directly from Prachar Prasar’s core creative strategy, media planning, and technological infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
};
