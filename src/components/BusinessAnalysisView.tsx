import React, { useState } from 'react';
import {
  DECATHLON_METRICS,
  SWOT_DATA,
  COMPETITOR_BENCHMARK,
  SwotItem,
  SwotQuadrant
} from '../data/businessData.ts';
import {
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Building2,
  Scale
} from 'lucide-react';

export const BusinessAnalysisView: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('all');
  const [expandedItemId, setExpandedItemId] = useState<string | null>('s1');

  const filteredQuadrants =
    selectedQuadrant === 'all'
      ? SWOT_DATA
      : SWOT_DATA.filter((q) => q.type === selectedQuadrant);

  const toggleExpand = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const getQuadrantIcon = (type: SwotQuadrant['type']) => {
    switch (type) {
      case 'strengths':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'weaknesses':
        return <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'opportunities':
        return <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'threats':
        return <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  const getQuadrantBorder = (type: SwotQuadrant['type']) => {
    switch (type) {
      case 'strengths':
        return 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/20';
      case 'weaknesses':
        return 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/20';
      case 'opportunities':
        return 'border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/20';
      case 'threats':
        return 'border-amber-200 dark:border-amber-900/60 bg-amber-50/20 dark:bg-amber-950/20';
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          <TrendingUp className="w-4 h-4" />
          <span>Dossier Stratégique · Ingénieur d'Affaires</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Analyse Business & Positionnement Concurrentiel
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Décryptage du modèle économique d'intégration verticale de Decathlon, matrice SWOT interactive des capacités technologiques et benchmark comparatif face à Intersport, Nike et Amazon.
        </p>
      </header>

      {/* Verified Metrics Counter */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-700 dark:text-blue-400" />
          <span>Indicateurs Clés de Puissance Économique (Exercice Consolidé)</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {DECATHLON_METRICS.map((metric) => (
            <div key={metric.id} className="space-y-1">
              <span className="text-xl sm:text-2xl font-extrabold text-blue-700 dark:text-blue-400 font-mono tabular-nums block">
                {metric.value}
              </span>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                {metric.label}
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive SWOT Matrix */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Matrice SWOT Technologique
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Cliquez sur un élément pour explorer l'analyse détaillée d'ingénierie d'affaires
            </p>
          </div>

          {/* Quadrant Filters (segmented control buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedQuadrant('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedQuadrant === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Vue Complète (4)
            </button>
            <button
              onClick={() => setSelectedQuadrant('strengths')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedQuadrant === 'strengths'
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600'
              }`}
            >
              Forces
            </button>
            <button
              onClick={() => setSelectedQuadrant('weaknesses')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedQuadrant === 'weaknesses'
                  ? 'bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-rose-600'
              }`}
            >
              Faiblesses
            </button>
            <button
              onClick={() => setSelectedQuadrant('opportunities')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedQuadrant === 'opportunities'
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              Opportunités
            </button>
            <button
              onClick={() => setSelectedQuadrant('threats')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedQuadrant === 'threats'
                  ? 'bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-400 shadow-2xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-amber-600'
              }`}
            >
              Menaces
            </button>
          </div>
        </div>

        {/* SWOT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuadrants.map((quadrant) => (
            <div
              key={quadrant.type}
              className={`rounded-2xl border p-6 space-y-4 ${getQuadrantBorder(quadrant.type)}`}
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
                {getQuadrantIcon(quadrant.type)}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {quadrant.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {quadrant.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {quadrant.items.map((item) => {
                  const isExpanded = expandedItemId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleExpand(item.id)}
                      className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 cursor-pointer hover:border-blue-400 dark:hover:border-blue-500/50 transition-all shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              {item.title}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400">
                              [{item.impact}]
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <button
                          aria-label={isExpanded ? 'Réduire les détails' : 'Développer les détails'}
                          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Expandable Engineering Perspective */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs space-y-1 animate-in fade-in-50 duration-150">
                          <p className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                            <Scale className="w-3.5 h-3.5" />
                            <span>Perspective Ingénieur d'Affaires :</span>
                          </p>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                            {item.engineeringPerspective}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Benchmark Table */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Positionnement Concurrentiel & Matrice Stratégique
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Comparatif des modèles d'affaires : intégration verticale vs distributeurs multimarques vs géants du web
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <th className="p-4 font-bold">Acteur & Catégorie</th>
                <th className="p-4 font-bold">Modèle d'Affaires</th>
                <th className="p-4 font-bold">Autonomie R&D / Brevets</th>
                <th className="p-4 font-bold">Ratio Prix / Tech</th>
                <th className="p-4 font-bold">Tech Supply Chain</th>
                <th className="p-4 font-bold">Circulaire & Seconde Vie</th>
                <th className="p-4 font-bold">Avantage Clé</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300">
              {COMPETITOR_BENCHMARK.map((comp) => {
                const isDecathlon = comp.name === 'Decathlon';
                return (
                  <tr
                    key={comp.name}
                    className={
                      isDecathlon
                        ? 'bg-blue-50/50 dark:bg-blue-950/30 font-medium'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }
                  >
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {isDecathlon && (
                          <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                        )}
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">
                            {comp.name}
                          </p>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400">
                            {comp.revenue}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 max-w-xs leading-relaxed">
                      {comp.businessModel}
                    </td>
                    <td className="p-4 max-w-xs leading-relaxed">
                      {comp.rdAutonomy}
                    </td>
                    <td className="p-4 max-w-xs leading-relaxed">
                      {comp.priceTechRatio}
                    </td>
                    <td className="p-4 max-w-xs leading-relaxed">
                      {comp.supplyChainTech}
                    </td>
                    <td className="p-4 max-w-xs leading-relaxed">
                      {comp.circularityScore}
                    </td>
                    <td className="p-4 max-w-xs leading-relaxed font-semibold text-slate-900 dark:text-white">
                      {comp.overallAdvantage}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Synthesis Callout for Master's Jury */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white dark:bg-slate-950 dark:border dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          <span>Synthèse pour le Jury de Soutenance</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
          L'Équation Stratégique : Pourquoi Decathlon résiste mieux que ses rivaux
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Alors que les distributeurs multimarques généralistes souffrent d'une guerre des prix frontale et d'une dépendance envers les géants américains du sportswear, Decathlon tire son épingle du jeu grâce à un triptyque industriel maîtrisé : <strong>propriété intellectuelle propre</strong> (850 brevets évitant les royalties), <strong>barrière technologique logistique</strong> (RFID 100 % et robotisation réduisant le coût de distribution unitaire) et <strong>bascule vers l'économie de la fonctionnalité</strong> (BuyBack et abonnements transformant des clients ponctuels en abonnés fidèles).
        </p>
      </section>
    </div>
  );
};
