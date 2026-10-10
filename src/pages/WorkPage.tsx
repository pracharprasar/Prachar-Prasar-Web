import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Real Estate Marketing', 'Venture Spotlight: AstroExperts', 'Creative & Branding', 'Digital Advertising'];

  const filteredProjects =
    selectedFilter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedFilter);

  return (
    <div>
      <SEOHead
        title="Case Studies & Selected Work | Prachar Prasar"
        description="Explore documented advertising frameworks and case studies by Prachar Prasar across real estate, spiritual practice, corporate branding, and omnichannel campaigns."
        canonicalPath="/work"
      />

      {/* Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            Portfolio & Frameworks
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Campaign Scopes & Verified Outcomes.
          </h1>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-2xl mx-auto">
            We adhere to strict transparency: below are documented case frameworks reflecting actual agency scopes, challenges solved, and commercial strategies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white border border-[#E6E8EB] text-[#606770] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-12 rounded-2xl border border-[#E6E8EB] bg-[#F7F8FA]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 text-xs text-[#606770] mb-2">
                    <span className="font-semibold text-[#C62828]">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Industry: {project.industry}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-snug mb-4">
                    {project.title}
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                    <div>
                      <strong className="text-[#111111] block mb-1">Business Challenge:</strong>
                      <p>{project.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-[#111111] block mb-1">Strategic Architecture:</strong>
                      <p>{project.strategy}</p>
                    </div>
                  </div>

                  {/* Verified Outcomes */}
                  <div className="p-4 bg-white border border-[#E6E8EB] rounded-xl mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                      Verified Commercial Outcomes:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#202124]">
                      {project.verifiedOutcomes.map((out, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C62828] shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Discuss Similar Project Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden border border-[#E6E8EB] shadow-md bg-white aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F8FA] border-t border-[#E6E8EB] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3">
            Have a Specific Campaign Challenge in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-[#606770] max-w-lg mx-auto mb-6">
            Let our strategy team evaluate your current conversion funnels and provide a tailored execution proposal.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3.5 text-sm font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Request Proposal Review
          </button>
        </div>
      </section>
    </div>
  );
};
