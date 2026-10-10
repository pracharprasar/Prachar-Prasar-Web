import React from 'react';
import { SEOHead } from '../components/SEOHead';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = () => {
  return (
    <div>
      <SEOHead
        title="Privacy Policy | Prachar Prasar"
        description="Privacy policy and data processing disclosure for Prachar Prasar. We respect your confidentiality and protect all inquiry submissions."
        canonicalPath="/privacy-policy"
      />

      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-[#111111] mb-2">Privacy Policy</h1>
          <p className="text-xs text-[#606770]">
            Last Updated: March 2026 · Prachar Prasar (www.pracharprasar.co)
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#202124] leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">1. Overview</h2>
            <p className="text-[#606770]">
              Prachar Prasar ("we", "our", or "the agency"), established in 2016 and operating www.pracharprasar.co, is committed to safeguarding the privacy and confidentiality of individuals who visit our website, submit project inquiries, or engage our advertising and marketing services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">2. Information We Collect</h2>
            <p className="text-[#606770] mb-3">
              We collect information strictly necessary to review and respond to marketing project inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#606770]">
              <li><strong>Contact Information:</strong> Full name, professional work email address, and direct phone number.</li>
              <li><strong>Business Information:</strong> Company name, website URL, approximate marketing budget, and described campaign requirements.</li>
              <li><strong>Technical Logs:</strong> IP address, browser type, referring URL, and UTM campaign parameters for attribution analysis and spam prevention.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">3. How Information Is Used</h2>
            <p className="text-[#606770] mb-2">
              We use your submitted details exclusively for legitimate commercial purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#606770]">
              <li>To evaluate your project requirements and prepare customized advertising proposals.</li>
              <li>To contact you via phone or email for scheduled discovery sessions.</li>
              <li>To prevent fraudulent submissions, bots, and network abuse.</li>
            </ul>
            <p className="text-[#606770] mt-2">
              We never sell, rent, lease, or monetize your contact details to third-party telemarketers or external brokerages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">4. Data Retention & Security</h2>
            <p className="text-[#606770]">
              Inquiry submissions are durably stored in secure server environments equipped with encryption in transit and standard access controls. Data is retained only for the duration required to evaluate business partnerships or fulfill contracted client commitments.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#111111] mb-2">5. Contact Regarding Privacy</h2>
            <p className="text-[#606770]">
              For any questions regarding your data or to request deletion of your inquiry records, contact us directly at{' '}
              <a href="mailto:contact@pracharprasar.co" className="text-[#C62828] font-semibold underline">
                contact@pracharprasar.co
              </a>{' '}
              or call{' '}
              <a href="tel:+919682809232" className="text-[#C62828] font-semibold underline">
                +91 9682809232
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
