import React, { useState, useEffect } from 'react';
import { Article } from '../data/articles.ts';
import { formatDateFrench, getRelatedArticles } from '../utils/pure_logic.ts';
import { ARTICLES } from '../data/articles.ts';
import { ArticleCard } from './ArticleCard.tsx';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  Copy,
  ExternalLink,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  List
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  const relatedArticles = getRelatedArticles(article, ARTICLES, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHeadingId(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16">
      {/* Top Utility Bar: Back button & Share */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Retour aux articles</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            aria-label="Copier le lien de l'article"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Lien copié !</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Partager l'article</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        {/* Zero-Pill metadata: unboxed text with typographic separator */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <span className="font-bold text-blue-700 dark:text-blue-400">
            {article.category}
          </span>
          <span aria-hidden="true">·</span>
          <span>{formatDateFrench(article.date)}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime} min de lecture</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight [text-wrap:balance]">
          {article.title}
        </h1>

        {/* Chapô / Lead paragraph */}
        <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed border-l-2 border-blue-600 pl-4 py-1">
          {article.excerpt}
        </p>

        {/* Author Bylines */}
        <div className="pt-2 flex items-center gap-3 border-t border-slate-200 dark:border-slate-800">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-sm">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {article.author.name}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {article.author.role}
            </p>
          </div>
        </div>
      </header>

      {/* Main Feature Image with Caption */}
      <figure className="space-y-2">
        <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-slate-600 dark:text-slate-400 italic px-1">
          {article.imageCaption}
        </figcaption>
      </figure>

      {/* Sommaire Cliquable (Table of Contents) */}
      <nav aria-label="Sommaire de l'article" className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
          <List className="w-4 h-4 text-blue-700 dark:text-blue-400" />
          <span>Sommaire de l'article</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {article.contentSections.map((sec, idx) => {
            const secId = `section-${idx}`;
            return (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(secId)}
                  className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition-colors text-left flex items-start gap-2 cursor-pointer"
                >
                  <span className="font-mono text-slate-400">{idx + 1}.</span>
                  <span>{sec.heading}</span>
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => scrollToSection('section-business-analysis')}
              className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition-colors text-left flex items-center gap-2 cursor-pointer font-semibold text-blue-700 dark:text-blue-400"
            >
              <TrendingUp className="w-3.5 h-3.5 shrink-0" />
              <span>Analyse Business & Impact Marché (Mastère Ingénieur d'Affaires)</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('section-sources')}
              className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition-colors text-left flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400"
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-blue-600" />
              <span>Sources vérifiables citées</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Encadré « À retenir » (Key takeaways) */}
      <aside aria-label="À retenir" className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-700 dark:text-blue-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200">
            À retenir pour le décideur
          </h3>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
          {article.summaryBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Article Body Content */}
      <div className="space-y-10 text-slate-800 dark:text-slate-200 leading-relaxed">
        {article.contentSections.map((section, idx) => (
          <section key={idx} id={`section-${idx}`} className="space-y-4 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight border-b border-slate-100 dark:border-slate-800 pb-2">
              {section.heading}
            </h2>
            <div className="space-y-4 text-base sm:text-lg">
              {section.paragraphs.map((p, pIdx) => {
                // Drop cap on first paragraph of first section
                if (idx === 0 && pIdx === 0) {
                  return (
                    <p
                      key={pIdx}
                      className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-blue-700 dark:first-letter:text-blue-400 first-letter:leading-none leading-relaxed"
                    >
                      {p}
                    </p>
                  );
                }
                return (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Section Obligatoire : Analyse Business & Impact Marché */}
      <section
        id="section-business-analysis"
        className="scroll-mt-20 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xs"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <TrendingUp className="w-5 h-5 text-blue-700 dark:text-blue-400" />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Analyse Business & Impact Marché
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Prisme d'ingénierie d'affaires : modèle économique, opportunités et risques stratégiques
            </p>
          </div>
        </div>

        {/* Global Market Impact */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Impact Concurrentiel Global
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
            {article.businessAnalysis.marketImpact}
          </p>
        </div>

        {/* Opportunities vs Risks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opportunities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              <Lightbulb className="w-4 h-4" />
              <span>Opportunités Commerciales & ROI</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {article.businessAnalysis.businessOpportunities.map((opp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">+</span>
                  <span>{opp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Risks */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Risques Stratégiques & Freins</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {article.businessAnalysis.strategicRisks.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">!</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* KPIs Strip */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            Indicateurs Clés de Performance (KPIs)
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {article.businessAnalysis.kpis.map((kpi, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800 text-center">
                <span className="block text-lg font-extrabold text-blue-700 dark:text-blue-400 font-mono tabular-nums">
                  {kpi.value}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Obligatoire : Sources Citées Vérifiables */}
      <section
        id="section-sources"
        className="scroll-mt-20 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-blue-400" />
            <span>Sources Documentaires & Brevets Vérifiés</span>
          </h2>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            {article.sources.length} sources primaires
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Conformément à la charte éditoriale, chaque fait et chiffre est issu de communiqués vérifiables, de brevets ou de rapports d'activité.
        </p>
        <div className="space-y-2">
          {article.sources.map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700/80 text-xs"
            >
              <div className="space-y-0.5 pr-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {src.title}
                </p>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <span>{src.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{formatDateFrench(src.date)}</span>
                </div>
              </div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-md transition-colors"
                title="Consulter la source externe"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Share & Copy Link Footer */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
          Vous avez apprécié cette enquête technologique ?
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-2xs"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Lien copié dans le presse-papier' : 'Copier le lien direct'}</span>
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Articles et Analyses Liés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <ArticleCard
              key={rel.id}
              article={rel}
              onSelect={onSelectArticle}
              variant="standard"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
