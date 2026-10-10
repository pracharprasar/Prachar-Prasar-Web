import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
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
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

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

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'digital', label: 'Digital & Performance' },
    { id: 'brand', label: 'Creative & Strategy' },
    { id: 'media', label: 'Physical & Experiential' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filterCategory === 'digital') {
      return ['digital-advertising', 'performance-marketing', 'website-development', 'seo-content-marketing'].includes(s.id);
    }
    if (filterCategory === 'brand') {
      return ['creative-branding', 'marketing-communications', 'talent-management'].includes(s.id);
    }
    if (filterCategory === 'media') {
      return ['outdoor-advertising', 'printing-solutions', 'events-exhibitions'].includes(s.id);
    }
    return true;
  });

  return (
    <div>
      <SEOHead
        title="Services & Capabilities | Prachar Prasar Advertising Agency"
        description="Explore all 10 advertising, digital marketing, creative, and media capabilities provided by Prachar Prasar. Designed for business growth and qualified lead generation."
        canonicalPath="/services"
      />

      {/* Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            End-To-End Marketing Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Complete Advertising & Growth Solutions.
          </h1>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-2xl mx-auto">
            From high-intent performance marketing and corporate web engineering to large-format outdoor billboards and luxury print production—all synchronized under one strategic roof.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white border border-[#E6E8EB] text-[#606770] hover:text-[#111111]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-10 rounded-2xl border border-[#E6E8EB] bg-[#F7F8FA] hover:border-gray-300 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (5 cols): Overview & Capabilities */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C62828] flex items-center justify-center shrink-0">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#606770]">0{idx + 1}</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                      {service.heroDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                        Core Competencies:
                      </p>
                      {service.capabilities.slice(0, 4).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#202124]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate(`/services/${service.slug}`)}
                      className="px-4 py-2 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Dedicated Service Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Right Column (7 cols): Deliverables & Challenges Solved */}
                  <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E6E8EB] space-y-6">
                    <div>
                      <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-3">
                        Commercial Bottlenecks Solved
                      </h3>
                      <ul className="space-y-2 text-xs text-[#606770]">
                        {service.challenges.map((ch, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-500 font-bold">✕</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#E6E8EB]">
                      <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-3">
                        Key Deliverables
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202124]">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#F7F8FA] border-t border-[#E6E8EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-4">
            Need an Integrated Advertising Package?
          </h2>
          <p className="text-sm text-[#606770] max-w-xl mx-auto mb-8">
            We regularly synchronize multiple capabilities—such as branding + web development + paid ads—into turnkey commercial growth engines.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3.5 text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Request Multi-Service Proposal
          </button>
        </div>
      </section>
    </div>
  );
};
