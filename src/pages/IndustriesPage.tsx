import React from 'react';
import { SEOHead } from '../components/SEOHead';
import {
  Building2,
  Sparkles,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="Industries We Serve | Prachar Prasar"
        description="Discover how Prachar Prasar delivers tailored advertising and growth solutions across Real Estate, Spiritual Practice, Education, B2B Services, and Consumer Brands."
        canonicalPath="/industries"
      />

      {/* Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            Sector-Specific Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Advertising Architectures Tailored to Your Industry.
          </h1>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-2xl mx-auto">
            Generic marketing produces generic outcomes. We design customer acquisition funnels, brand positioning, and media plans attuned to your specific buyer psychology.
          </p>
        </div>
      </section>

      {/* Two Specialized Venture Spotlights */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              Dedicated Verticals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Specialized Industry Practices
            </h2>
            <p className="text-xs sm:text-sm text-[#606770] mt-2">
              For real estate and occult professionals, Prachar Prasar operates dedicated venture practices with deep category specialization:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Real Estate Spotlight */}
            <div className="p-8 rounded-2xl border border-blue-200 bg-blue-50/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded text-xs font-bold">
                    Real Estate Practice
                  </span>
                  <Building2 className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-1">
                  Realty Experts
                </h3>
                <p className="text-xs font-semibold text-[#C62828] mb-3">
                  "Strategically Marketed, Scientifically Sold!"
                </p>
                <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                  Serving residential developers, commercial builders, authorized channel partners, and real estate broking associates with high-intent lead generation, project microsites, outdoor advertising, and buyer qualification systems.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-blue-200">
                <button
                  type="button"
                  onClick={() => onNavigate('/ventures/realty-experts')}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer"
                >
                  Explore Realty Experts
                </button>
                <a
                  href="https://www.realtyexperts.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Astrology & Occult Spotlight */}
            <div className="p-8 rounded-2xl border border-amber-200 bg-amber-50/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded text-xs font-bold">
                    Spiritual & Occult Practice
                  </span>
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-1">
                  AstroExperts
                </h3>
                <p className="text-xs font-semibold text-[#C62828] mb-3">
                  "Where Spirituality Meets Strategy!"
                </p>
                <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                  Serving astrologers, Tarot readers, numerologists, Vastu consultants, and spiritual practitioners seeking dignified brand positioning, educational content funnels, and automated appointment booking systems.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-amber-200">
                <button
                  type="button"
                  onClick={() => onNavigate('/ventures/astroexperts')}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer"
                >
                  Explore AstroExperts
                </button>
                <a
                  href="https://www.astroexperts.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Core Sectors Served */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              Broader Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Other Key Sectors We Support
            </h2>
            <p className="text-xs sm:text-sm text-[#606770] mt-1">
              Prachar Prasar delivers multi-channel advertising solutions across diverse growth verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">Education & Training Institutes</h3>
                <p className="text-xs text-[#606770] leading-relaxed mb-4">
                  Synchronizing regional billboards, search intent ads, and landing page funnels to drive student enrollments during critical admission cycles.
                </p>
                <div className="space-y-1 text-xs text-[#202124]">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Competitive Exam Academies</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Higher Education & Universities</span></div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">B2B & Professional Services</h3>
                <p className="text-xs text-[#606770] leading-relaxed mb-4">
                  Engineering executive capabilities profiles, corporate websites, and LinkedIn lead funnels to connect with enterprise procurement leads.
                </p>
                <div className="space-y-1 text-xs text-[#202124]">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Corporate Legal & Financial Firms</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Technology & Engineering Partners</span></div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">Consumer Brands & Retail</h3>
                <p className="text-xs text-[#606770] leading-relaxed mb-4">
                  Crafting distinctive packaging, point-of-sale displays, Meta direct-response ad creative, and retail launch awareness campaigns.
                </p>
                <div className="space-y-1 text-xs text-[#202124]">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>FMCG & Packaged Goods</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C62828]" /><span>Multi-Outlet Retail Brands</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-[#E6E8EB] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-4">
            Want to Discuss Your Industry’s Growth Playbook?
          </h2>
          <p className="text-xs sm:text-sm text-[#606770] max-w-lg mx-auto mb-6">
            Connect with our founder Pawan Rai to assess your market landscape and design an effective advertising strategy.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Schedule Discovery Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
