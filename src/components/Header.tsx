import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Our Ventures', path: '/ventures' },
    { label: 'Work', path: '/work' },
    { label: 'Insights', path: '/insights' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white border-b ${
          isScrolled ? 'border-[#E6E8EB] shadow-xs py-3' : 'border-[#E6E8EB]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 links) — Zone 3 (1 primary CTA) */}
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Single Brand Element */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/');
              }}
              className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] rounded-md"
              aria-label="Prachar Prasar - Home"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: Single-line Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#202124]">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.path);
                    }}
                    className={`whitespace-nowrap transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#C62828] font-semibold'
                        : 'text-[#202124] hover:text-[#C62828]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C62828] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action + Direct Phone */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919682809232"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-[#606770] hover:text-[#202124] px-2.5 py-2 transition-colors whitespace-nowrap"
                title="Call Prachar Prasar"
              >
                <Phone className="w-3.5 h-3.5 text-[#C62828]" />
                <span>+91 9682809232</span>
              </a>

              <button
                type="button"
                onClick={() => handleLinkClick('/contact')}
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C62828] hover:bg-[#A61F1F] active:bg-[#8E1B1B] rounded-lg shadow-xs transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828] focus-visible:ring-offset-2 cursor-pointer"
              >
                Discuss Your Project
              </button>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#202124] hover:bg-[#F7F8FA] border border-[#E6E8EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-5 border-b border-[#E6E8EB]">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-[#606770] hover:bg-[#F7F8FA]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col py-6 gap-1 overflow-y-auto flex-1">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => handleLinkClick(link.path)}
                    className={`flex items-center justify-between text-left py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#C62828]/10 text-[#C62828] font-semibold'
                        : 'text-[#202124] hover:bg-[#F7F8FA]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#606770]" />
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E6E8EB]">
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-[#606770] mb-2">
                  Specialized Ventures
                </p>
                <button
                  type="button"
                  onClick={() => handleLinkClick('/ventures/astroexperts')}
                  className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg text-xs font-medium text-[#202124] hover:bg-[#F7F8FA]"
                >
                  <span>AstroExperts</span>
                  <span className="text-[10px] text-[#606770]">Spiritual Marketing</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('/ventures/realty-experts')}
                  className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg text-xs font-medium text-[#202124] hover:bg-[#F7F8FA]"
                >
                  <span>Realty Experts</span>
                  <span className="text-[10px] text-[#606770]">Real Estate Marketing</span>
                </button>
              </div>
            </nav>

            <div className="pt-4 border-t border-[#E6E8EB] flex flex-col gap-3">
              <a
                href="tel:+919682809232"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#202124] bg-[#F7F8FA] border border-[#E6E8EB] rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#C62828]" />
                <span>+91 9682809232</span>
              </a>
              <button
                type="button"
                onClick={() => handleLinkClick('/contact')}
                className="w-full py-3 text-sm font-semibold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
