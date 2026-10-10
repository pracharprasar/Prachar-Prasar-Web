import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { LeadForm } from '../components/LeadForm';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES } from '../data/caseStudiesData';
import {
  Megaphone,
  TrendingUp,
  Palette,
  Layout,
  Search,
  MessageSquare,
  Building2,
  Printer,
  Sparkles,
  Users,
  CheckCircle2,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Award,
  Calendar,
  Layers,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedCaseCategory, setSelectedCaseCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Printer':
        return <Printer className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      default:
        return <Megaphone className="w-5 h-5" />;
    }
  };

  const caseCategories = ['All', 'Real Estate Marketing', 'Venture Spotlight: AstroExperts', 'Creative & Branding', 'Digital Advertising'];

  const filteredCaseStudies =
    selectedCaseCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === selectedCaseCategory);

  const homeFaqs = [
    {
      q: 'What services does Prachar Prasar provide?',
      a: 'Prachar Prasar is a full-service advertising, digital marketing, and business-growth agency founded in 2016. Our core capabilities span Digital Advertising, Performance Marketing, Creative Strategy & Brand Development, Website Development, SEO & Content Marketing, Marketing Communications, Outdoor Advertising (OOH), Printing Solutions, Events & Exhibitions, and Talent Management.',
    },
    {
      q: 'Does Prachar Prasar work with businesses across India?',
      a: 'Yes. While our strategic roots and primary media relationships are based in India, we deliver campaigns for regional, pan-India, and cross-border NRI-focused brands across all major commercial hubs.',
    },
    {
      q: 'Can I hire Prachar Prasar for a specific service or only full retainers?',
      a: 'You can engage us for specialized standalone projects—such as a high-converting website build, an outdoor advertising campaign, or brand identity revamp—as well as comprehensive ongoing retainers where we manage full-funnel marketing.',
    },
    {
      q: 'What are the two specialized ventures of Prachar Prasar?',
      a: 'Prachar Prasar operates exactly two specialized industry ventures: 1) AstroExperts ("Where Spirituality Meets Strategy!") serving astrologers, Tarot readers, numerologists, and spiritual consultants; and 2) Realty Experts ("Strategically Marketed, Scientifically Sold!") serving real estate developers, channel partners, and associates.',
    },
    {
      q: 'How does the consultation and project-planning process work?',
      a: 'After you submit an enquiry, our founder Pawan Rai and core strategy team review your business objectives, target audience, and current marketing bottlenecks. We schedule a 30-minute discovery call and provide a clear, actionable project blueprint and commercial proposal.',
    },
    {
      q: 'How do we get started?',
      a: 'Simply submit the brief enquiry form below, call our team directly at +91 9682809232, or email contact@pracharprasar.co. We will respond within 24 business hours.',
    },
  ];

  return (
    <div>
      <SEOHead
        title="Prachar Prasar | Advertising & Digital Marketing Agency"
        description="Prachar Prasar is an advertising and digital marketing agency established in 2016 by Pawan Rai, offering digital advertising, performance marketing, creative, website development and integrated marketing solutions."
        canonicalPath="/"
      />

      {/* SECTION 1: Announcement / Credibility Strip */}
      <div className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-xs text-[#606770]">
          <span className="font-semibold text-[#111111]">Advertising & Marketing Solutions Since 2016</span>
          <span aria-hidden="true" className="text-[#E6E8EB]">·</span>
          <span>Founder & CEO: Pawan Rai (10+ Years Advertising & Media Experience)</span>
          <span aria-hidden="true" className="hidden sm:inline text-[#E6E8EB]">·</span>
          <span className="hidden sm:inline font-medium text-[#C62828]">"Prachar nhi toh Prasar nhi!"</span>
        </div>
      </div>

      {/* SECTION 2: Hero Section (2-Column Desktop Layout) */}
      <section className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-[#C62828]">
                <span>Full-Service Advertising Agency</span>
                <span aria-hidden="true">·</span>
                <span>Established 2016</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.12] mb-6">
                We Turn Advertising <br className="hidden sm:inline" />
                Into <span className="text-[#C62828]">Business Growth.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#606770] leading-relaxed max-w-2xl mb-8">
                Prachar Prasar is a full-service advertising and digital marketing agency helping businesses build stronger brands, reach the right audiences, generate qualified leads, and grow through strategic marketing and creative execution.
              </p>

              {/* Action Buttons & Phone */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] active:bg-[#8E1B1B] rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#202124] bg-white border border-[#E6E8EB] hover:bg-[#F7F8FA] rounded-lg transition-colors cursor-pointer"
                >
                  Explore Our Services
                </button>

                <a
                  href="tel:+919682809232"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#606770] hover:text-[#111111] px-2 py-2 transition-colors ml-1"
                >
                  <Phone className="w-4 h-4 text-[#C62828]" />
                  <span>+91 9682809232</span>
                </a>
              </div>

              {/* Trust Statement */}
              <div className="pt-6 border-t border-[#E6E8EB] flex items-center gap-6 text-xs text-[#606770]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C62828]" />
                  <span>Strategic Advertising & Media Since 2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C62828]" />
                  <span>Founder-Led Strategy</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E8EB] shadow-md bg-[#F7F8FA] aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="/images/hero-strategy.jpg"
                  alt="Prachar Prasar Strategy & Campaign Planning Boardroom"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-red-300 font-semibold mb-1">
                    Integrated Strategy
                  </span>
                  <p className="text-sm font-medium leading-snug">
                    "Prachar nhi toh Prasar nhi!" — Connecting creative narrative with disciplined media execution.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Trust & Credibility Strip */}
      <section className="bg-[#F7F8FA] py-10 border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 bg-white border border-[#E6E8EB] rounded-xl shadow-2xs">
              <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#C62828] mb-1">
                <Calendar className="w-5 h-5 text-[#C62828]" />
                <span>2016</span>
              </div>
              <p className="text-xs font-semibold text-[#202124]">Established Year</p>
              <p className="text-[11px] text-[#606770] mt-0.5">A decade of agency growth</p>
            </div>

            <div className="p-4 bg-white border border-[#E6E8EB] rounded-xl shadow-2xs">
              <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#111111] mb-1">
                <span>10+</span>
                <span className="text-xs font-medium text-[#606770]">Years</span>
              </div>
              <p className="text-xs font-semibold text-[#202124]">Founder Experience</p>
              <p className="text-[11px] text-[#606770] mt-0.5">Advertising & media leadership</p>
            </div>

            <div className="p-4 bg-white border border-[#E6E8EB] rounded-xl shadow-2xs">
              <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#C62828] mb-1">
                <Layers className="w-5 h-5 text-[#C62828]" />
                <span>10</span>
              </div>
              <p className="text-xs font-semibold text-[#202124]">Core Capabilities</p>
              <p className="text-[11px] text-[#606770] mt-0.5">End-to-end solutions under one roof</p>
            </div>

            <div className="p-4 bg-white border border-[#E6E8EB] rounded-xl shadow-2xs">
              <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#111111] mb-1">
                <span>2</span>
              </div>
              <p className="text-xs font-semibold text-[#202124]">Specialized Ventures</p>
              <p className="text-[11px] text-[#606770] mt-0.5">AstroExperts & Realty Experts</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: The Business Problem */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            The Commercial Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-6">
            Your Business Deserves More Than Random Marketing.
          </h2>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-3xl mx-auto mb-12">
            Most businesses don’t fail from a lack of effort; they struggle because their marketing activities are fragmented. Tactics are deployed in isolation without a unifying brand narrative or clear commercial attribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl border border-[#E6E8EB] bg-[#F7F8FA]">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h3 className="text-base font-bold text-[#111111] mb-2">Disconnected Marketing Efforts</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                Social media posts that don’t align with sales targets, ads running to broken landing pages, and zero cohesive customer acquisition roadmap.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E6E8EB] bg-[#F7F8FA]">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center font-bold text-xs mb-3">
                02
              </div>
              <h3 className="text-base font-bold text-[#111111] mb-2">Poor Lead Quality & High CAC</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                Ad dollars wasted on cheap, unqualified clicks while sales associates burn out chasing contacts who never intended to buy.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E6E8EB] bg-[#F7F8FA]">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h3 className="text-base font-bold text-[#111111] mb-2">Forgettable Brand Identity</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                Looking identical to generic competitors, forcing you into margin-destroying price wars instead of commanding premium pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Core Services Bento & Interactive Showcase */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                Integrated Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
                Complete Advertising & Marketing Solutions.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="text-xs sm:text-sm font-semibold text-[#C62828] hover:underline inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Explore All 10 Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white border border-[#E6E8EB] rounded-xl p-6 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C62828]/10 text-[#C62828] flex items-center justify-center">
                      {getIcon(srv.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-[#606770]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#C62828] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#606770] leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#606770]">
                    {srv.badge}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/services/${srv.slug}`)}
                    className="text-xs font-bold text-[#C62828] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Prachar Prasar */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Our Operating Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-4">
              Strategy Meets Creativity. Execution Drives Growth.
            </h2>
            <p className="text-sm sm:text-base text-[#606770] leading-relaxed">
              We approach marketing as a rigorous commercial discipline. By anchoring every creative asset in market realities and business economics, we deliver sustainable expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-[#E6E8EB] rounded-xl bg-[#F7F8FA]">
              <h3 className="text-base font-bold text-[#111111] mb-2">01. Strategic Thinking</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                We understand your commercial model, margin structure, and competitive whitespace before spending a single rupee on ad placements.
              </p>
            </div>

            <div className="p-6 border border-[#E6E8EB] rounded-xl bg-[#F7F8FA]">
              <h3 className="text-base font-bold text-[#111111] mb-2">02. Integrated Execution</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                Your brand identity, website code, digital ads, and outdoor billboards speak with one unified voice and drive toward one clear conversion goal.
              </p>
            </div>

            <div className="p-6 border border-[#E6E8EB] rounded-xl bg-[#F7F8FA]">
              <h3 className="text-base font-bold text-[#111111] mb-2">03. Business-Focused Marketing</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                We replace surface vanity metrics with commercial accountability: cost-per-lead, pipeline velocity, customer retention, and net revenue impact.
              </p>
            </div>

            <div className="p-6 border border-[#E6E8EB] rounded-xl bg-[#F7F8FA]">
              <h3 className="text-base font-bold text-[#111111] mb-2">04. Long-Term Partnership</h3>
              <p className="text-xs text-[#606770] leading-relaxed">
                Marketing systems that build cumulative brand equity and compounding customer trust rather than fragile short-term hacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Featured Work & Case Studies */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                Selected Work & Frameworks
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
                Execution Built on Verified Outcomes.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/work')}
              className="text-xs sm:text-sm font-semibold text-[#C62828] hover:underline inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {caseCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCaseCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCaseCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white border border-[#E6E8EB] text-[#606770] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white border border-[#E6E8EB] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-[#E6E8EB] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-[#111111]">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#606770] mb-2">
                      <span>{study.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.client}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#111111] mb-3 leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs text-[#606770] leading-relaxed mb-4">
                      {study.strategy}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                        Key Outcomes:
                      </p>
                      {study.verifiedOutcomes.map((out, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#202124]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#F7F8FA] border-t border-[#E6E8EB] flex items-center justify-between">
                  <span className="text-xs text-[#606770]">Documented Agency Scope</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/work')}
                    className="text-xs font-bold text-[#C62828] hover:underline inline-flex items-center gap-1"
                  >
                    View Scope Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Meet The Founder */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E8EB] shadow-md bg-[#F7F8FA] aspect-[4/5]">
                <img
                  src="/images/creative-campaign.jpg"
                  alt="Pawan Rai, Founder and CEO of Prachar Prasar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-lg font-bold">Pawan Rai</span>
                  <span className="text-xs text-red-300 font-medium">Founder & CEO, Prachar Prasar</span>
                  <span className="text-[11px] text-gray-300 mt-1">Advertising & Media Professional</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                Leadership & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-6">
                Built on Experience. Driven by Advertising.
              </h2>

              <p className="text-base text-[#202124] font-medium leading-relaxed mb-4">
                "Effective advertising starts with understanding the business. Creative ideas, media planning, and digital execution must work together to communicate the right message and support a clear commercial objective."
              </p>

              <p className="text-sm text-[#606770] leading-relaxed mb-6">
                Pawan Rai is an advertising and media professional with more than a decade of experience in advertising, brand strategy, digital marketing, and business growth. Since establishing Prachar Prasar in 2016, he has focused on combining creative thinking, marketing strategy, and practical execution to help businesses strengthen their market presence and reach their growth objectives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 mb-6 border-y border-[#E6E8EB]">
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">10+ Years Experience</h4>
                  <p className="text-[11px] text-[#606770] mt-0.5">Advertising & Media Leadership</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Strategic Brand Thinking</h4>
                  <p className="text-[11px] text-[#606770] mt-0.5">Distinctive market positioning</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Practical Execution</h4>
                  <p className="text-[11px] text-[#606770] mt-0.5">Commercial outcomes first</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('/about-us')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F7F8FA] rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Leadership Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: Specialized Ventures (AstroExperts & Realty Experts ONLY) */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Dedicated Brand Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-4">
              Specialized Expertise. Focused Growth.
            </h2>
            <p className="text-sm sm:text-base text-[#606770] leading-relaxed">
              Prachar Prasar is the parent agency. To serve distinct industry segments with unmatched domain depth, we operate exactly two specialized ventures:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Venture 1: AstroExperts */}
            <div className="bg-white border border-[#E6E8EB] rounded-2xl overflow-hidden p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-md text-xs font-bold">
                    Specialized Venture
                  </span>
                  <span className="text-xs text-[#606770]">Occult & Spiritual Growth</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#111111] mb-1">
                  AstroExperts
                </h3>
                <p className="text-sm font-semibold text-[#C62828] mb-4">
                  "Where Spirituality Meets Strategy!"
                </p>

                <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                  A specialized digital marketing agency for astrologers, Tarot readers, numerologists, Vastu consultants, healers, and spiritual professionals seeking to strengthen their online presence, attract relevant enquiries, and grow their practices with dignified authority.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                    <span>Vedic Astrologers & Kundali Analysts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                    <span>Tarot Readers & Energy Healers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                    <span>Vastu Consultants & Numerology Mentors</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E6E8EB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/ventures/astroexperts')}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://www.astroexperts.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F7F8FA] rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <span className="text-xs text-[#606770]">A Prachar Prasar Venture</span>
              </div>
            </div>

            {/* Venture 2: Realty Experts */}
            <div className="bg-white border border-[#E6E8EB] rounded-2xl overflow-hidden p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-800 border border-blue-200 rounded-md text-xs font-bold">
                    Specialized Venture
                  </span>
                  <span className="text-xs text-[#606770]">Real Estate Growth</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#111111] mb-1">
                  Realty Experts
                </h3>
                <p className="text-sm font-semibold text-[#C62828] mb-4">
                  "Strategically Marketed, Scientifically Sold!"
                </p>

                <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                  A real estate marketing specialist helping developers, channel partners, and real estate associates with digital advertising, project marketing, qualified lead generation, landing pages, content, and high-velocity marketing systems.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                    <span>Real Estate Developers & Builders</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                    <span>Authorized Channel Partners (CPs)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828]" />
                    <span>Real Estate Associates & Broking Firms</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E6E8EB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/ventures/realty-experts')}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://www.realtyexperts.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F7F8FA] rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <span className="text-xs text-[#606770]">A Prachar Prasar Venture</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: Our 5-Step Process */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-4">
              A Clear Process From Strategy to Execution.
            </h2>
            <p className="text-sm sm:text-base text-[#606770]">
              Predictable outcomes require structured workflows. Here is how we take every client project from initial diagnosis to scaled execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Understand the business, audience, commercial targets, and current customer acquisition bottlenecks.',
              },
              {
                step: '02',
                title: 'Strategize',
                desc: 'Define positioning, select optimal media channels, craft core value messaging, and establish spend priorities.',
              },
              {
                step: '03',
                title: 'Create',
                desc: 'Develop high-converting campaigns, visual assets, web landing pages, and persuasive copywriting.',
              },
              {
                step: '04',
                title: 'Execute',
                desc: 'Launch, coordinate, and closely manage agreed marketing activities across digital, print, or outdoor channels.',
              },
              {
                step: '05',
                title: 'Optimize',
                desc: 'Review verified conversion data, provide transparent attribution reporting, and continuously refine performance.',
              },
            ].map((p) => (
              <div key={p.step} className="p-6 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E6E8EB] text-[#C62828] font-bold text-sm flex items-center justify-center mb-4 shadow-2xs">
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#606770] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Testimonials / Trust Signals */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Authentic Relationships
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
              Partnership Built on Mutual Integrity.
            </h2>
            <p className="text-xs sm:text-sm text-[#606770]">
              We prioritize verified project execution and client confidentiality over fabricated reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <p className="text-xs sm:text-sm text-[#202124] italic mb-6 leading-relaxed">
                "Prachar Prasar brought complete clarity to our real estate launch. Rather than just collecting random phone numbers, their funnel qualified genuine home buyers, allowing our sales team to close deals faster."
              </p>
              <div className="pt-4 border-t border-[#E6E8EB]">
                <p className="text-xs font-bold text-[#111111]">Commercial Director</p>
                <p className="text-[11px] text-[#606770]">Regional Residential Developer</p>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <p className="text-xs sm:text-sm text-[#202124] italic mb-6 leading-relaxed">
                "AstroExperts transformed my Vedic astrology practice. They designed an elegant brand and an automated booking system that filled my calendar with respectful, serious clients across India and abroad."
              </p>
              <div className="pt-4 border-t border-[#E6E8EB]">
                <p className="text-xs font-bold text-[#111111]">Vedic Jyotish Consultant</p>
                <p className="text-[11px] text-[#606770]">AstroExperts Client Partner</p>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <p className="text-xs sm:text-sm text-[#202124] italic mb-6 leading-relaxed">
                "Pawan Rai and his team understand the Indian business mindset. Their combination of outdoor visibility and digital lead capture gave our training institute unmatched regional presence during admissions."
              </p>
              <div className="pt-4 border-t border-[#E6E8EB]">
                <p className="text-xs font-bold text-[#111111]">Admissions Head</p>
                <p className="text-[11px] text-[#606770]">Professional Training Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#E6E8EB] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 bg-[#F7F8FA] hover:bg-[#F0F2F5] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111111]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#606770] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#C62828]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 py-5 bg-white text-xs sm:text-sm text-[#606770] leading-relaxed border-t border-[#E6E8EB]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: Final Conversion Section with Form */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E6E8EB] rounded-2xl shadow-sm p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                  Get Started
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-4 leading-tight">
                  Let's Build Your Next Growth Chapter.
                </h2>
                <p className="text-sm text-[#606770] leading-relaxed mb-6">
                  Tell us about your business, your marketing goals, and the challenges you want to solve. Our team will review your enquiry and help you identify the right next step.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E6E8EB] text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C62828] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#111111]">Direct Consultation Phone</p>
                      <a href="tel:+919682809232" className="text-[#606770] hover:text-[#C62828]">
                        +91 9682809232
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C62828] flex items-center justify-center shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#111111]">Official Enquiry Email</p>
                      <a href="mailto:contact@pracharprasar.co" className="text-[#606770] hover:text-[#C62828]">
                        contact@pracharprasar.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C62828] flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#111111]">Response SLA</p>
                      <p className="text-[#606770]">Within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="lg:col-span-7 bg-[#F7F8FA] p-6 sm:p-8 rounded-xl border border-[#E6E8EB]">
                <h3 className="text-lg font-bold text-[#111111] mb-1">
                  Request a Strategic Consultation
                </h3>
                <p className="text-xs text-[#606770] mb-6">
                  Complete this brief form to connect with our advertising & growth specialists.
                </p>
                <LeadForm
                  sourcePage="homepage-conversion"
                  onSuccess={(ref) => onNavigate(`/thank-you?ref=${ref}`)}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
