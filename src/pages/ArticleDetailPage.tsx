import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ARTICLES_DATA } from '../data/articlesData';
import { Article } from '../types';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const article: Article | undefined = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#111111] mb-2">Article Not Found</h1>
        <p className="text-sm text-[#606770] mb-6">
          The requested essay could not be located.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/insights')}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#C62828] rounded-lg"
        >
          View All Insights
        </button>
      </div>
    );
  }

  // Next or related articles
  const otherArticles = ARTICLES_DATA.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div>
      <SEOHead
        title={`${article.title} | Prachar Prasar Insights`}
        description={article.excerpt}
        canonicalPath={`/insights/${article.slug}`}
      />

      <article className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            type="button"
            onClick={() => onNavigate('/insights')}
            className="text-xs font-semibold text-[#606770] hover:text-[#C62828] inline-flex items-center gap-1.5 mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-[#606770] mb-4">
            <span className="font-semibold text-[#C62828]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#606770]" />
              {article.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[#E6E8EB] text-xs text-[#606770]">
            <div className="w-8 h-8 rounded-full bg-red-100 text-[#C62828] font-bold flex items-center justify-center">
              PR
            </div>
            <div>
              <p className="font-bold text-[#111111]">{article.author}</p>
              <p className="text-[11px]">Prachar Prasar Strategy & Growth</p>
            </div>
          </div>

          {/* Article Prose */}
          <div className="space-y-6 text-base text-[#202124] leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Founder Quote Card in Article */}
          <div className="mt-12 p-6 bg-[#F7F8FA] border-l-4 border-[#C62828] rounded-r-xl">
            <p className="text-sm font-semibold text-[#111111] italic mb-2">
              "Prachar nhi toh Prasar nhi!"
            </p>
            <p className="text-xs text-[#606770]">
              — Pawan Rai, Founder & CEO, Prachar Prasar. Full-service advertising and media leadership since 2016.
            </p>
          </div>

          {/* Bottom Share & Discuss */}
          <div className="mt-12 pt-8 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#111111]">Want to implement this strategy?</p>
              <p className="text-xs text-[#606770]">Consult with our media planners and growth team.</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#C62828] hover:bg-[#A61F1F] rounded-lg transition-colors cursor-pointer"
            >
              Discuss Your Strategy
            </button>
          </div>

          {/* Other Insights */}
          <div className="mt-16 pt-12 border-t border-[#E6E8EB]">
            <h2 className="text-lg font-bold text-[#111111] mb-6">Further Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.map((oa) => (
                <div
                  key={oa.id}
                  className="p-5 rounded-xl border border-[#E6E8EB] bg-[#F7F8FA] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] text-[#C62828] font-bold block mb-1">
                      {oa.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#111111] mb-2 leading-snug">
                      {oa.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/insights/${oa.slug}`)}
                    className="text-xs font-semibold text-[#C62828] hover:underline inline-flex items-center gap-1 mt-3"
                  >
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};
