import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { LeadForm } from '../components/LeadForm';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  ArrowLeft,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service: ServiceItem | undefined = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#111111] mb-2">Service Not Found</h1>
        <p className="text-sm text-[#606770] mb-6">
          The requested service page does not exist or has moved.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/services')}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#C62828] rounded-lg"
        >
          View All Services
        </button>
      </div>
    );
  }

  // Related services
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDesc}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="text-xs font-semibold text-[#606770] hover:text-[#C62828] inline-flex items-center gap-1.5 mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Capabilities</span>
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828]">
              Prachar Prasar Capability
            </span>
            <span aria-hidden="true" className="text-[#E6E8EB]">·</span>
            <span className="text-xs font-medium text-[#606770]">{service.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#606770] leading-relaxed max-w-3xl mb-8">
            {service.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('consultation-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Discuss {service.title} Requirements
            </button>
            <a
              href="tel:+919682809232"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F0F2F5] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C62828]" />
              <span>+91 9682809232</span>
            </a>
          </div>
        </div>
      </section>

      {/* Challenges & Capabilities Split */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Challenges Solved */}
            <div className="p-8 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EB]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                The Challenges
              </span>
              <h2 className="text-2xl font-extrabold text-[#111111] mb-6">
                Bottlenecks This Service Solves
              </h2>
              <ul className="space-y-3.5 text-sm text-[#606770]">
                {service.challenges.map((ch, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span className="leading-relaxed">{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Capabilities */}
            <div className="p-8 rounded-2xl bg-white border border-[#E6E8EB] shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                Full-Service Scope
              </span>
              <h2 className="text-2xl font-extrabold text-[#111111] mb-6">
                Technical & Creative Capabilities
              </h2>
              <ul className="space-y-3.5 text-sm text-[#202124]">
                {service.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Concrete Deliverables & Target Audience */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                Tangible Output
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-6">
                What You Receive (Deliverables)
              </h2>
              <div className="space-y-3">
                {service.deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-[#E6E8EB] rounded-xl flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-red-50 text-[#C62828] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#202124] leading-relaxed">
                      {del}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E6E8EB]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
                Intended Fit
              </span>
              <h3 className="text-xl font-extrabold text-[#111111] mb-4">
                Who This Is Designed For
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#606770] mb-6">
                {service.targetAudience.map((aud, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-[#F7F8FA] rounded-xl text-xs text-[#606770] leading-relaxed">
                Need customized parameters? We tailor project scopes to match specific commercial timelines and budgets.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practical 4-Step Workflow */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3">
              How We Deliver {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#606770]">
              Transparent milestones from initial diagnostic to continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#C62828] mb-2 block">
                    STEP {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#111111] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#606770] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E6E8EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              Service Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div key={fIdx} className="bg-white border border-[#E6E8EB] rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#111111] hover:bg-[#F7F8FA] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#606770] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#C62828]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 text-xs sm:text-sm text-[#606770] leading-relaxed border-t border-[#E6E8EB]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-16 bg-white border-b border-[#E6E8EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#111111]">Related Marketing Capabilities</h2>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="text-xs font-semibold text-[#C62828] hover:underline"
            >
              View All 10 Services →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-6 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#111111] mb-2">{rel.title}</h3>
                  <p className="text-xs text-[#606770] leading-relaxed mb-4">{rel.shortDesc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate(`/services/${rel.slug}`)}
                  className="text-xs font-bold text-[#C62828] hover:underline inline-flex items-center gap-1 self-start"
                >
                  Explore Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="consultation-form" className="py-16 sm:py-20 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E6E8EB] shadow-xs text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              Start The Conversation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
              Request a Proposal for {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#606770] max-w-lg mx-auto mb-8">
              Fill in your details below and our campaign strategy leads will contact you within 24 business hours.
            </p>

            <LeadForm
              defaultService={service.title}
              sourcePage={`/services/${service.slug}`}
              onSuccess={(ref) => onNavigate(`/thank-you?ref=${ref}`)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
