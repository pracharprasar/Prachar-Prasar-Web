import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { VenturesPage } from './pages/VenturesPage';
import { AstroExpertsPage } from './pages/AstroExpertsPage';
import { RealtyExpertsPage } from './pages/RealtyExpertsPage';
import { WorkPage } from './pages/WorkPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      // If navigating to /thank-you with query string or other, keep base path matching
      const urlPath = path.split('?')[0];
      setCurrentPath(urlPath);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  // Route Resolver
  const renderCurrentPage = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. About Us
    if (currentPath === '/about-us') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 3. Services Directory
    if (currentPath === '/services') {
      return <ServicesPage onNavigate={navigate} />;
    }

    // 4. Individual Service Pages (/services/:slug)
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      return <ServiceDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 5. Industries
    if (currentPath === '/industries') {
      return <IndustriesPage onNavigate={navigate} />;
    }

    // 6. Ventures
    if (currentPath === '/ventures') {
      return <VenturesPage onNavigate={navigate} />;
    }

    // 7. AstroExperts
    if (currentPath === '/ventures/astroexperts') {
      return <AstroExpertsPage onNavigate={navigate} />;
    }

    // 8. Realty Experts
    if (currentPath === '/ventures/realty-experts') {
      return <RealtyExpertsPage onNavigate={navigate} />;
    }

    // 9. Work & Case Studies
    if (currentPath === '/work') {
      return <WorkPage onNavigate={navigate} />;
    }

    // 10. Insights Directory
    if (currentPath === '/insights') {
      return <InsightsPage onNavigate={navigate} />;
    }

    // 11. Individual Article Pages (/insights/:slug)
    if (currentPath.startsWith('/insights/')) {
      const slug = currentPath.replace('/insights/', '').replace(/\/$/, '');
      return <ArticleDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 12. Contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 13. Privacy Policy
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }

    // 14. Terms and Conditions
    if (currentPath === '/terms-and-conditions') {
      return <TermsPage onNavigate={navigate} />;
    }

    // 15. Thank You
    if (currentPath === '/thank-you') {
      return <ThankYouPage onNavigate={navigate} />;
    }

    // 16. Fallback 404
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202124] font-sans antialiased">
      {/* Global Top Bar Contract Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Authoritative Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
