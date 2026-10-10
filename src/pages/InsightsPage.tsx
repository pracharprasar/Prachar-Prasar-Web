import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ARTICLES_DATA } from '../data/articlesData';
import { ArrowRight, BookOpen } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <SEOHead
        title="Insights & Editorial | Prachar Prasar"
        description="Strategic essays and advertising analysis from Pawan Rai and the Prachar Prasar team. Covering media distribution, real estate marketing funnels, and brand strategy."
        canonicalPath="/insights"
      />

      {/* Header */}
      <section className="bg-[#F7F8FA] border-b border-[#E6E8EB] py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
            Agency Thinking & Strategy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Advertising, Media & Growth Insights.
          </h1>
          <p className="text-sm sm:text-base text-[#606770] leading-relaxed max-w-2xl mx-auto">
            Essays on customer acquisition economics, brand narrative architecture, and real estate marketing dynamics from our senior desk.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES_DATA.map((article) => (
              <article
                key={article.id}
                className="p-8 rounded-2xl border border-[#E6E8EB] bg-[#F7F8FA] hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#606770] mb-3">
                    <span className="font-semibold text-[#C62828]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#111111] leading-snug mb-3">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#606770] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
                  <span className="text-xs text-[#606770] font-medium">
                    By {article.author}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/insights/${article.slug}`)}
                    className="text-xs font-bold text-[#C62828] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Read Essay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
