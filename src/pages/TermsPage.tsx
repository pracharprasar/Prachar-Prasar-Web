import React from 'react';
import { SEOHead } from '../components/SEOHead';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = () => {
  return (
    <div>
      <SEOHead
        title="Terms & Conditions | Prachar Prasar"
        description="Terms and conditions governing the use of the Prachar Prasar website and client consultation engagements."
        canonicalPath="/terms-and-conditions"
      />

      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-[#111111] mb-2">Terms & Conditions</h1>
          <p className="text-xs text-[#606770]">
            Effective Date: March 2026 · Prachar Prasar (www.pracharprasar.co)
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#202124] leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">1. Agreement to Terms</h2>
            <p className="text-[#606770]">
              By accessing www.pracharprasar.co or submitting inquiries to Prachar Prasar, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">2. Scope of Information & No Guaranteed Outcomes</h2>
            <p className="text-[#606770]">
              All descriptions of marketing methodologies, case study frameworks, and insights published on this website represent educational and illustrative material. Formal client commitments, deliverables, timelines, and commercial scopes are governed exclusively by signed Master Services Agreements (MSAs) or specific Statements of Work (SOWs).
            </p>
            <p className="text-[#606770] mt-2">
              Prachar Prasar does not promise arbitrary guaranteed rankings, overnight lead quantities, or speculative financial windfalls. Advertising outcomes depend on market variables, budget allocation, client product-market fit, and operational execution.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">3. Intellectual Property</h2>
            <p className="text-[#606770]">
              All visual marks, logos, vector insignia, copywriting, articles, and frameworks appearing on this website—including the Prachar Prasar emblem, the motto "Prachar nhi toh Prasar nhi!", AstroExperts ("Where Spirituality Meets Strategy!"), and Realty Experts ("Strategically Marketed, Scientifically Sold!")—are protected intellectual property of Prachar Prasar. Unauthorized reproduction or reverse engineering is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">4. Applicable Jurisdiction</h2>
            <p className="text-[#606770]">
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of the website or agency engagements shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
