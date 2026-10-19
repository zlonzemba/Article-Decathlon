import React, { useState } from 'react';
import { TIMELINE_MILESTONES, TimelineMilestone } from '../data/timelineData.ts';
import {
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  ShieldCheck,
  TrendingUp,
  Calendar
} from 'lucide-react';

export const TimelineView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedYear, setExpandedYear] = useState<number | null>(2014); // Easybreath expanded by default

  const categories = ['all', 'Produit', 'Logistique & Tech', 'Stratégie', 'R&D'] as const;

  const filteredMilestones =
    selectedFilter === 'all'
      ? TIMELINE_MILESTONES
      : TIMELINE_MILESTONES.filter((m) => m.category === selectedFilter);

  const toggleExpand = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          <Clock className="w-4 h-4" />
          <span>Histoire Industrielle & Brevets</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Frise Chronologique des Grandes Innovations Decathlon
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          De l'ouverture du premier magasin à Englos en 1976 jusqu'à la robotisation 3D et aux super-chaussures carbone de 2026 : un demi-siècle de brevets et de ruptures d'usage.
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mr-2">
          Filtrer par nature d'innovation :
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedFilter === cat
                ? 'bg-blue-700 text-white font-semibold shadow-2xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat === 'all' ? 'Toutes les dates (10)' : cat}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/30 dark:border-blue-500/20 space-y-8 ml-2 sm:ml-4">
        {filteredMilestones.map((milestone) => {
          const isExpanded = expandedYear === milestone.year;
          return (
            <div key={milestone.year} className="relative group">
              {/* Timeline Bullet Anchor */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-950 transition-all ${
                  isExpanded
                    ? 'border-blue-600 ring-4 ring-blue-100 dark:ring-blue-950'
                    : 'border-slate-400 dark:border-slate-600 group-hover:border-blue-500'
                }`}
              />

              {/* Milestone Card */}
              <div
                onClick={() => toggleExpand(milestone.year)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? 'bg-white dark:bg-slate-900 border-blue-400 dark:border-blue-600 shadow-md'
                    : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-black text-blue-700 dark:text-blue-400 font-mono tracking-tight tabular-nums">
                      {milestone.year}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      {milestone.dateStr}
                    </span>
                  </div>
                  {/* Zero-Pill unboxed category label */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <span>{milestone.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-700 dark:text-blue-400">
                      {isExpanded ? 'Réduire' : 'Détails & Brevet'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {milestone.shortSummary}
                </p>

                {/* Expandable Deep Dive */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs sm:text-sm animate-in fade-in-50 duration-150">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {milestone.fullDetails}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 space-y-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                          <span>Impact Business & Marché</span>
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {milestone.businessImpact}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 space-y-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Brevet / Technologie Sous-jacente</span>
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {milestone.patentOrTech}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
