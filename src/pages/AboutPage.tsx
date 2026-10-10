import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { LeadForm } from '../components/LeadForm';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Layers,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="About Us | Prachar Prasar — Advertising & Growth Agency"
        description="Learn about Prachar Prasar, established in 2016 by Pawan Rai. Discover our advertising philosophy 'Prachar nhi toh Prasar nhi!', mission, values, and specialized ventures."
        canonicalPath="/about-us"
      />

      {/* Hero Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E6E8EB] rounded-md text-xs font-semibold text-[#C62828] mb-4 shadow-2xs">
            <span>Established 2016</span>
            <span aria-hidden="true">·</span>
            <span>Founder-Led Agency</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
            Connecting Strategic Thinking <br className="hidden sm:inline" />
            With <span className="text-[#C62828]">Disciplined Execution.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#606770] leading-relaxed max-w-3xl mx-auto">
            Prachar Prasar was founded in 2016 with a foundational commitment: that business expansion is impossible without deliberate, high-conviction advertising. Today, we deliver full-service marketing across India.
          </p>
        </div>
      </section>

      {/* Company Origin & Philosophy */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                The Origin Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-4">
                "Prachar nhi toh Prasar nhi!"
              </h2>
              <div className="space-y-4 text-sm text-[#606770] leading-relaxed">
                <p>
                  In Hindi, the phrase captures an incontrovertible commercial reality: without deliberate promotion (Prachar), there can be no meaningful business reach or expansion (Prasar).
                </p>
                <p>
                  Established in 2016 by Pawan Rai, Prachar Prasar originated as a focused digital marketing firm addressing the gap between digital ad technology and commercial business outcomes. Over nearly a decade of continuous operation, the agency evolved into a comprehensive advertising, media, and marketing operation.
                </p>
                <p>
                  Today, we bridge digital performance marketing, creative brand identity design, web engineering, outdoor advertising (OOH), corporate printing, and high-impact experiential campaigns under one coordinated roof.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#F7F8FA] border border-[#E6E8EB] rounded-2xl p-8 space-y-6">
              <h3 className="text-base font-bold text-[#111111] border-b border-[#E6E8EB] pb-3">
                Quick Facts
              </h3>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#111111]">Founded</p>
                  <p className="text-xs text-[#606770]">2016</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#111111]">Founder & CEO</p>
                  <p className="text-xs text-[#606770]">Pawan Rai (10+ Years Advertising Experience)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#111111]">Primary Market</p>
                  <p className="text-xs text-[#606770]">India (Pan-India execution)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#111111]">Specialized Verticals</p>
                  <p className="text-xs text-[#606770]">AstroExperts & Realty Experts</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-[#E6E8EB] p-8 rounded-2xl shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Our Mission</h3>
              <p className="text-sm text-[#606770] leading-relaxed">
                "To help businesses communicate more effectively, reach the right audiences, and pursue sustainable growth through strategic advertising, creative thinking, and integrated marketing execution."
              </p>
            </div>

            <div className="bg-white border border-[#E6E8EB] p-8 rounded-2xl shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Our Vision</h3>
              <p className="text-sm text-[#606770] leading-relaxed">
                "To build an enduring advertising and marketing organization recognized for strategic thinking, creative excellence, and meaningful business impact."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Biography */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E6E8EB] shadow-md aspect-[4/5] bg-[#F7F8FA]">
                <img
                  src="/images/creative-campaign.jpg"
                  alt="Pawan Rai, Founder and CEO of Prachar Prasar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
                Founder & CEO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
                Pawan Rai
              </h2>
              <p className="text-sm font-semibold text-[#606770] mb-6">
                10+ Years in Advertising, Media, Brand Strategy & Business Growth
              </p>

              <div className="space-y-4 text-sm text-[#606770] leading-relaxed mb-6">
                <p>
                  Pawan Rai is an advertising and media professional with more than a decade of experience in advertising, brand strategy, digital marketing, and business growth. Since establishing Prachar Prasar in 2016, he has focused on combining creative thinking, marketing strategy, and practical execution to help businesses strengthen their market presence and reach their growth objectives.
                </p>
                <p className="italic border-l-2 border-[#C62828] pl-4 text-[#202124]">
                  "Effective advertising starts with understanding the business. Creative ideas, media planning, and digital execution must work together to communicate the right message and support a clear commercial objective."
                </p>
                <p>
                  Under his leadership, Prachar Prasar launched specialized industry practices—including AstroExperts for spiritual practitioners and Realty Experts for real estate developers and associates—ensuring tailored marketing systems with unmatched category expertise.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer"
                >
                  Consult With Pawan Rai
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Operating Principles / Values */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              How We Operate Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <h4 className="text-base font-bold text-[#111111] mb-2">Commercially Anchored</h4>
              <p className="text-xs text-[#606770] leading-relaxed">
                We design marketing initiatives that serve balance-sheet objectives, qualified leads, and measurable customer acquisition.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <h4 className="text-base font-bold text-[#111111] mb-2">Zero Vanity Claims</h4>
              <p className="text-xs text-[#606770] leading-relaxed">
                We refuse to manufacture fake statistics or guarantee overnight rankings. We build enduring systems grounded in verified work.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <h4 className="text-base font-bold text-[#111111] mb-2">Craft & Precision</h4>
              <p className="text-xs text-[#606770] leading-relaxed">
                From vector typography and brand guidelines to server code and large-format print calibration, we attend to details.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <h4 className="text-base font-bold text-[#111111] mb-2">Multi-Channel Cohesion</h4>
              <p className="text-xs text-[#606770] leading-relaxed">
                Your billboards, website, Google ads, and print collateral reflect one consistent, authoritative brand voice.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <h4 className="text-base font-bold text-[#111111] mb-2">Specialized Domain Depth</h4>
              <p className="text-xs text-[#606770] leading-relaxed">
                Through AstroExperts and Realty Experts, we deploy industry-native strategies rather than generic agency templates.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E6E8EB] rounded-xl">
              <h4 className="text-base font-bold text-[#111111] mb-2">Direct Founder Access</h4>
              <p className="text-xs text-[#606770] leading-relaxed">
                Every project benefits from direct strategic oversight from Pawan Rai and seasoned senior media planners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-4">
            Ready to Discuss Your Brand's Next Phase?
          </h2>
          <p className="text-sm text-[#606770] max-w-xl mx-auto mb-8">
            Whether you need a dedicated performance campaign, corporate rebrand, or specialized real estate marketing, we are ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3.5 text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Discuss Your Project
            </button>
            <a
              href="tel:+919682809232"
              className="px-6 py-3.5 text-sm font-semibold text-[#111111] bg-[#F7F8FA] border border-[#E6E8EB] hover:bg-[#E6E8EB] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C62828]" />
              <span>+91 9682809232</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
