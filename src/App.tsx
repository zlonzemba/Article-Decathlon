import React, { useState, useEffect } from 'react';
import { ARTICLES, Article } from './data/articles.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HeroFeatured } from './components/HeroFeatured.tsx';
import { ArticleCard } from './components/ArticleCard.tsx';
import { ArticleView } from './components/ArticleView.tsx';
import { ArticlesDirectoryView } from './components/ArticlesDirectoryView.tsx';
import { BusinessAnalysisView } from './components/BusinessAnalysisView.tsx';
import { TimelineView } from './components/TimelineView.tsx';
import { AcademicSuiteView } from './components/AcademicSuiteView.tsx';
import { AboutContactView } from './components/AboutContactView.tsx';
import { SearchFilterModal } from './components/SearchFilterModal.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { ArrowUp, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('decathtech_dark_mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Sync dark mode class with HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('decathtech_dark_mode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('decathtech_dark_mode', 'false');
    }
  }, [isDarkMode]);

  // Track reading progress & scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setReadingProgress(selectedArticle ? progress : 0);
      }
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticle]);

  // Scroll to top on navigation change or article selection
  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTab = (tab: string) => {
    setSelectedArticle(null);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredArticle = ARTICLES[0]; // SportsLab article
  const secondaryArticles = ARTICLES.slice(1, 4);
  const remainingArticles = ARTICLES.slice(4);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentTab={selectedArticle ? 'article-view' : currentTab}
        setCurrentTab={(tab) => {
          setSelectedArticle(null);
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        readingProgress={selectedArticle ? readingProgress : 0}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {selectedArticle ? (
          <ArticleView
            article={selectedArticle}
            onBack={handleBackToArticles}
            onSelectArticle={handleSelectArticle}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <div className="space-y-16">
                {/* Hero & Highlights Section */}
                <HeroFeatured
                  featuredArticle={featuredArticle}
                  secondaryArticles={secondaryArticles}
                  onSelectArticle={handleSelectArticle}
                  onNavigateTab={handleNavigateTab}
                />

                {/* Second Content Tier: Remaining Articles Grid */}
                <section className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        Grandes Enquêtes & Analyses Stratégiques
                      </h2>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Études de cas réelles documentées par des brevets et rapports d'activité
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigateTab('articles')}
                      className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explorer toutes les rubriques ({ARTICLES.length})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {remainingArticles.map((art) => (
                      <ArticleCard
                        key={art.id}
                        article={art}
                        onSelect={handleSelectArticle}
                        variant="standard"
                      />
                    ))}
                  </div>
                </section>

                {/* Academic Quick Anchor Banner */}
                <section className="rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
                  <div className="max-w-2xl space-y-4 relative z-10">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-200 font-bold">
                      Épreuve de Mastère Ingénieur d'Affaires · Euridis Business School
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      Support de Soutenance en 5 Slides & Guide de Déploiement
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      Consultez la démarche complète de veille stratégique : problématique, méthodologie de recueil des brevets, cartographie des ruptures technologiques, analyse financière et perspectives 2026-2030.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleNavigateTab('academic')}
                        className="px-5 py-2.5 text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-lg shadow-xs transition-colors cursor-pointer"
                      >
                        Consulter les 5 Slides de Soutenance
                      </button>
                      <button
                        onClick={() => handleNavigateTab('business')}
                        className="px-5 py-2.5 text-xs font-bold text-white bg-blue-700/80 hover:bg-blue-700 rounded-lg border border-blue-400/40 transition-colors cursor-pointer"
                      >
                        Voir la Matrice SWOT
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {currentTab === 'articles' && (
              <ArticlesDirectoryView
                articles={ARTICLES}
                onSelectArticle={handleSelectArticle}
              />
            )}

            {currentTab === 'business' && <BusinessAnalysisView />}

            {currentTab === 'timeline' && <TimelineView />}

            {currentTab === 'academic' && <AcademicSuiteView />}

            {currentTab === 'about' && <AboutContactView />}
          </>
        )}
      </main>

      {/* Global Search Filter Modal */}
      <SearchFilterModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      {/* GDPR Minimal Cookie Banner */}
      <CookieBanner />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Remonter en haut de page"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer with Mandatory Disclaimer */}
      <Footer
        onNavigate={handleNavigateTab}
        onOpenLegal={() => handleNavigateTab('about')}
      />
    </div>
  );
}
