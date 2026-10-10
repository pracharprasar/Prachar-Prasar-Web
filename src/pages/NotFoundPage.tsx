import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="404 — Page Not Found | Prachar Prasar"
        description="The page you requested could not be found. Return to Prachar Prasar official website."
        canonicalPath="/404"
      />

      <section className="py-24 sm:py-32 bg-[#F7F8FA] text-center">
        <div className="max-w-md mx-auto px-4">
          <p className="text-6xl font-extrabold text-[#C62828] mb-4">404</p>
          <h1 className="text-2xl font-bold text-[#111111] mb-2">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-8">
            The link you followed may have moved or no longer exists. Please use the navigation below to find what you are looking for.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Homepage</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="px-5 py-2.5 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              Browse Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
