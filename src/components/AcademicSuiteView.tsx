import React, { useState } from 'react';
import {
  PRESENTATION_SLIDES,
  DEPLOYMENT_GUIDE,
  LIMITS_AND_IMPROVEMENTS,
  QA_CHECKLIST,
  SlideContent
} from '../data/academicData.ts';
import {
  Presentation,
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Globe,
  Award,
  Layers,
  FileText
} from 'lucide-react';

export const AcademicSuiteView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'slides' | 'deploy' | 'limits' | 'checklist'>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : PRESENTATION_SLIDES.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < PRESENTATION_SLIDES.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          <Award className="w-4 h-4" />
          <span>Mastère Ingénieur d'Affaires · Dossier Pédagogique</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Livrables Académiques & Guide de Déploiement
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Support de présentation officiel pour la soutenance (5 slides), guide pas-à-pas de publication web avec HTTPS, analyse critique des limites méthodologiques et checklist de recette technique.
        </p>
      </header>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <button
          onClick={() => setActiveTab('slides')}
          className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'slides'
              ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-2xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Presentation className="w-4 h-4" />
          <span>Support 5 Slides Soutenance</span>
        </button>

        <button
          onClick={() => setActiveTab('deploy')}
          className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'deploy'
              ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-2xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <UploadCloud className="w-4 h-4" />
          <span>Guide de Déploiement Gratuit</span>
        </button>

        <button
          onClick={() => setActiveTab('limits')}
          className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'limits'
              ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-2xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          <span>Limites & Améliorations</span>
        </button>

        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'checklist'
              ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-2xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Checklist de Tests QA</span>
        </button>
      </div>

      {/* Tab 1: 5 Slides Presentation Deck */}
      {activeTab === 'slides' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Visionneuse de présentation de soutenance (5 diapositives)
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 tabular-nums">
                {currentSlideIndex + 1} / {PRESENTATION_SLIDES.length}
              </span>
              <button
                onClick={handlePrevSlide}
                aria-label="Diapositive précédente"
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                aria-label="Diapositive suivante"
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide Stage Container */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg min-h-[460px] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 tracking-wider">
                  {currentSlide.slideNumber}
                </span>
                <span className="text-xs text-slate-400">
                  Euridis Business School · Veille Stratégique
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentSlide.title}
                </h2>
                <p className="text-sm sm:text-base text-blue-700 dark:text-blue-400 font-medium">
                  {currentSlide.subtitle}
                </p>
              </div>

              {/* Slide Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {currentSlide.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        {bullet.category}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed font-medium">
                        {bullet.text}
                      </p>
                    </div>
                    {bullet.details && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200/40 dark:border-slate-700/50 leading-relaxed">
                        {bullet.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Takeaway Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-xl">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
                  Conclusion clé pour le jury :
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-snug">
                  {currentSlide.keyTakeaway}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {PRESENTATION_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    aria-label={`Aller à la slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                      currentSlideIndex === idx
                        ? 'bg-blue-700 dark:bg-blue-400'
                        : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Deployment Guide */}
      {activeTab === 'deploy' && (
        <section className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Guide de Déploiement et Mise en Ligne Gratuit (HTTPS)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Instructions pas-à-pas pour publier le projet en production avec certificat SSL gratuit et nom de domaine
              </p>
            </div>

            <div className="space-y-6">
              {DEPLOYMENT_GUIDE.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono font-medium text-blue-700 dark:text-blue-400">
                      {step.platform}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {step.commands && step.commands.length > 0 && (
                    <div className="bg-slate-900 text-slate-200 p-3 rounded-lg font-mono text-xs space-y-1">
                      {step.commands.map((cmd, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2">
                          <span className="text-emerald-400">$</span>
                          <span>{cmd}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    💡 Conseil d'ingénieur : {step.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 3: Limits & Improvements */}
      {activeTab === 'limits' && (
        <section className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Fiche d'Évaluation Critique : Limites & Améliorations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Preuve d'esprit critique académique et plan d'évolution technique futur
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LIMITS_AND_IMPROVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {item.domain}
                    </span>
                    <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400">
                      Priorité : {item.priority}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-bold text-rose-700 dark:text-rose-400">
                      Limite identifiée :
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.identifiedLimit}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Axe d'amélioration / Piste de mitigation :
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.mitigationOrRoadmap}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 4: QA Test Checklist */}
      {activeTab === 'checklist' && (
        <section className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Checklist de Validation Technique & Recette
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Contrôle de conformité exigences ergonomiques, responsive, SEO et WCAG 2.1 AA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {QA_CHECKLIST.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800 text-xs"
                >
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold shrink-0 ml-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
