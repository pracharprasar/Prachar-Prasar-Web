import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (path: string) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  // Extract reference code from window.location.search
  const params = new URLSearchParams(window.location.search);
  const refCode = params.get('ref') || 'PP-2026-CONFIRMED';

  return (
    <div>
      <SEOHead
        title="Enquiry Received | Prachar Prasar"
        description="Your marketing consultation inquiry has been safely received. Our team will review your requirements and respond within 24 business hours."
        canonicalPath="/thank-you"
      />

      <section className="py-20 sm:py-28 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E6E8EB] shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1 block">
              Submission Confirmed
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4">
              Thank You for Reaching Out.
            </h1>

            <p className="text-sm sm:text-base text-[#606770] max-w-lg mx-auto leading-relaxed mb-6">
              Your inquiry has been safely recorded in our production system. Founder Pawan Rai and our senior media strategy desk will evaluate your requirements.
            </p>

            {/* Reference Badge */}
            <div className="p-4 bg-[#F7F8FA] border border-[#E6E8EB] rounded-xl max-w-sm mx-auto mb-8">
              <p className="text-xs text-[#606770] uppercase tracking-wider mb-1">
                Your Inquiry Reference ID
              </p>
              <p className="text-lg font-mono font-bold text-[#C62828]">
                {refCode}
              </p>
            </div>

            {/* Next Steps List */}
            <div className="text-left bg-white border border-[#E6E8EB] rounded-xl p-6 mb-8 max-w-md mx-auto space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                What to Expect Next:
              </h3>
              <div className="flex items-start gap-2.5 text-xs text-[#606770]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#C62828] font-bold text-[10px] flex items-center justify-center shrink-0">1</span>
                <span><strong>Requirement Review:</strong> We analyze your industry landscape, current marketing assets, and goals.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#606770]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#C62828] font-bold text-[10px] flex items-center justify-center shrink-0">2</span>
                <span><strong>Discovery Contact:</strong> We contact you via phone or email within 24 business hours.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#606770]">
                <span className="w-5 h-5 rounded-full bg-red-100 text-[#C62828] font-bold text-[10px] flex items-center justify-center shrink-0">3</span>
                <span><strong>Action Blueprint:</strong> We present a concrete project timeline and commercial scope proposal.</span>
              </div>
            </div>

            {/* Direct Channel Fallback */}
            <p className="text-xs text-[#606770] mb-8">
              Need immediate assistance? Call us directly at{' '}
              <a href="tel:+919682809232" className="text-[#111111] font-bold underline">
                +91 9682809232
              </a>{' '}
              or email{' '}
              <a href="mailto:contact@pracharprasar.co" className="text-[#C62828] font-bold underline">
                contact@pracharprasar.co
              </a>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer"
              >
                Return to Homepage
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/services')}
                className="px-5 py-2.5 text-xs font-semibold text-[#111111] bg-white border border-[#E6E8EB] hover:bg-[#F7F8FA] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
