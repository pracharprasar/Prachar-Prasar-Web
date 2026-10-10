import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { label: 'Digital Advertising', path: '/services/digital-advertising' },
    { label: 'Performance Marketing', path: '/services/performance-marketing' },
    { label: 'Creative & Branding', path: '/services/creative-branding' },
    { label: 'Website Development', path: '/services/website-development' },
    { label: 'SEO & Content Marketing', path: '/services/seo-content-marketing' },
    { label: 'Marketing Communications', path: '/services/marketing-communications' },
    { label: 'Outdoor Advertising (OOH)', path: '/services/outdoor-advertising' },
    { label: 'Printing Solutions', path: '/services/printing-solutions' },
    { label: 'Events & Exhibitions', path: '/services/events-exhibitions' },
    { label: 'Talent Management', path: '/services/talent-management' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'All Services', path: '/services' },
    { label: 'Industries We Serve', path: '/industries' },
    { label: 'Specialized Ventures', path: '/ventures' },
    { label: 'Featured Work & Case Studies', path: '/work' },
    { label: 'Insights & Editorial', path: '/insights' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E6E8EB] text-[#202124]">
      {/* Top Banner Tagline Strip */}
      <div className="border-b border-[#E6E8EB] bg-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C62828]" />
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#111111]">
              "Prachar nhi toh Prasar nhi!"
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#606770] font-medium text-center md:text-right">
            Advertising, Media & Marketing Solutions Since 2016 · Founded by Pawan Rai
          </p>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo size="lg" />
            <p className="text-sm text-[#606770] leading-relaxed max-w-sm">
              Prachar Prasar is a full-service advertising, digital marketing, and business-growth agency helping companies build lasting brand presence, capture qualified enquiries, and scale through disciplined creative strategy.
            </p>

            <div className="flex flex-col gap-2.5 pt-2 text-sm text-[#202124]">
              <a
                href="tel:+919682809232"
                className="inline-flex items-center gap-2.5 text-[#202124] hover:text-[#C62828] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C62828] shrink-0" />
                <span className="font-semibold">+91 9682809232</span>
              </a>
              <a
                href="mailto:contact@pracharprasar.co"
                className="inline-flex items-center gap-2.5 text-[#202124] hover:text-[#C62828] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C62828] shrink-0" />
                <span>contact@pracharprasar.co</span>
              </a>
              <div className="inline-flex items-center gap-2.5 text-[#606770]">
                <MapPin className="w-4 h-4 text-[#C62828] shrink-0" />
                <span>Primary Market: India (Pan-India Service)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#202124] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesList.slice(0, 7).map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    className="text-[#606770] hover:text-[#C62828] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="text-xs font-semibold text-[#C62828] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  View All 10 Services
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#202124] mb-4">
              Organization
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.slice(1, 7).map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    className="text-[#606770] hover:text-[#C62828] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Specialized Ventures (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#202124] mb-4">
              Specialized Ventures
            </h4>
            <p className="text-xs text-[#606770] mb-4">
              Prachar Prasar operates two dedicated industry verticals with focused category domain expertise:
            </p>

            <div className="space-y-3">
              {/* AstroExperts */}
              <div className="p-3.5 bg-white border border-[#E6E8EB] rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-[#111111]">AstroExperts</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('/ventures/astroexperts')}
                      className="text-[11px] font-semibold text-[#606770] hover:text-[#C62828] hover:underline"
                    >
                      Overview
                    </button>
                    <a
                      href="https://www.astroexperts.online/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#C62828] hover:underline inline-flex items-center gap-0.5"
                    >
                      Website
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <p className="text-[11px] font-medium text-[#C62828]">"Where Spirituality Meets Strategy!"</p>
                <p className="text-[11px] text-[#606770] mt-1 leading-normal">
                  Dedicated marketing for astrologers, Tarot readers, numerologists, and spiritual consultants.
                </p>
              </div>

              {/* Realty Experts */}
              <div className="p-3.5 bg-white border border-[#E6E8EB] rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-[#111111]">Realty Experts</span>
                  <a
                    href="https://www.realtyexperts.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#C62828] hover:underline inline-flex items-center gap-0.5"
                  >
                    Website
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-[11px] font-medium text-[#C62828]">"Strategically Marketed, Scientifically Sold!"</p>
                <p className="text-[11px] text-[#606770] mt-1 leading-normal">
                  Specialized real estate marketing for developers, channel partners, and associates.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#E6E8EB] bg-[#F0F2F5] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#606770]">
          <div>
            © {currentYear} Prachar Prasar. All rights reserved. Established in 2016.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-[#202124] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-[#E6E8EB]">|</span>
            <button
              type="button"
              onClick={() => onNavigate('/terms-and-conditions')}
              className="hover:text-[#202124] transition-colors"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true" className="text-[#E6E8EB]">|</span>
            <a
              href="https://www.pracharprasar.co"
              className="hover:text-[#C62828] transition-colors font-medium"
            >
              www.pracharprasar.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
