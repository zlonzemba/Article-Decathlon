import React from 'react';
import { Article } from '../data/articles.ts';
import { DECATHLON_METRICS } from '../data/businessData.ts';
import { formatDateFrench } from '../utils/pure_logic.ts';
import { Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroFeaturedProps {
  featuredArticle: Article;
  secondaryArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onNavigateTab: (tab: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  featuredArticle,
  secondaryArticles,
  onSelectArticle,
  onNavigateTab,
}) => {
  return (
    <section className="space-y-12">
      {/* 2-Column Split Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column (7 cols): Lead Story */}
        <div
          onClick={() => onSelectArticle(featuredArticle)}
          className="lg:col-span-7 group flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
        >
          {/* Main Visual */}
          <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/decathlon_sportslab_biomechanics.jpg';
              }}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            {/* Overlay Title on Mobile, but on desktop clear contrast */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1.5">
                <span className="uppercase tracking-wider">À la une · Enquête R&D</span>
                <span aria-hidden="true">·</span>
                <span className="text-white/80">{featuredArticle.readTime} min de lecture</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white leading-tight drop-shadow-xs line-clamp-2">
                {featuredArticle.title}
              </h2>
            </div>
          </div>

          {/* Lead Story Body Text */}
          <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
            <div className="space-y-4">
              {/* Zero-Pill unboxed metadata */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-blue-700 dark:text-blue-400">
                  {featuredArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{formatDateFrench(featuredArticle.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredArticle.author.name}</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              {/* Bullet Points Preview */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200/60 dark:border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Points clés de l’investigation :
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {featuredArticle.summaryBullets.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-700 dark:text-blue-400 font-bold shrink-0">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-600 dark:text-slate-400">
                Sources : SportsLab, INPI, Decathlon United
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Lire l’article complet</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Recent Highlights Feed */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Derniers Décryptages
            </h3>
            <button
              onClick={() => onNavigateTab('articles')}
              className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Tous les articles ({secondaryArticles.length + 1}) →
            </button>
          </div>

          <div className="space-y-4 flex-1">
            {secondaryArticles.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xs transition-all duration-200 cursor-pointer"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-blue-700 dark:text-blue-400">
                        {article.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime} min</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {article.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Banner Box */}
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-blue-900 dark:text-blue-200">
                Mastère Ingénieur d'Affaires
              </span>
              <p className="text-xs text-blue-800 dark:text-blue-300">
                Soutenance de veille : 5 slides & analyse SWOT
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('academic')}
              className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Voir le dossier
            </button>
          </div>
        </div>
      </div>

      {/* Real Decathlon Key Metrics Strip (Below Hero) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Decathlon en Chiffres Clés Vérifiés
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Données consolidées issues des rapports annuels financiers et du bilan R&D mondial
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('business')}
            className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Accéder à la matrice SWOT & Benchmark</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {DECATHLON_METRICS.map((metric) => (
            <div key={metric.id} className="space-y-1">
              <p className="text-xl sm:text-2xl font-extrabold text-blue-700 dark:text-blue-400 font-mono tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                {metric.label}
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
