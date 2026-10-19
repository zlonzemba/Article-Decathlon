import React, { useState } from 'react';
import { Article, CATEGORIES } from '../data/articles.ts';
import { ArticleCard } from './ArticleCard.tsx';
import { filterArticles } from '../utils/pure_logic.ts';
import { Filter, Layers, Tag, X } from 'lucide-react';

interface ArticlesDirectoryViewProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  initialCategory?: string;
}

export const ArticlesDirectoryView: React.FC<ArticlesDirectoryViewProps> = ({
  articles,
  onSelectArticle,
  initialCategory = 'Tous les articles',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract all unique tags
  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));

  const filtered = filterArticles(
    articles,
    searchQuery,
    selectedCategory === 'Tous les articles' ? 'all' : selectedCategory,
    selectedTag
  );

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          <Layers className="w-4 h-4" />
          <span>Index Éditorial & Rubriques</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Articles, Dossiers & Décryptages R&D
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Explorez nos 8 enquêtes approfondies rédigées sous le prisme de l'ingénierie d'affaires : biomécanique, traçabilité RFID, super-mousses Pebax, circularité et magasins autonomes.
        </p>
      </header>

      {/* Category Tabs & Filter Toolbar */}
      <div className="space-y-4">
        {/* Category Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedTag('');
              }}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tags row */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar text-xs">
          <span className="text-slate-600 dark:text-slate-400 font-bold shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3 text-slate-400" />
            <span>Mots-clés :</span>
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              #{tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag('')}
              className="text-blue-600 dark:text-blue-400 hover:underline shrink-0 flex items-center gap-1 cursor-pointer ml-1"
            >
              <X className="w-3 h-3" />
              <span>Réinitialiser tag</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
        <span>
          Affichage de <strong>{filtered.length}</strong> article(s)
          {selectedCategory !== 'Tous les articles' && ` dans la rubrique « ${selectedCategory} »`}
          {selectedTag && ` avec le tag #${selectedTag}`}
        </span>
      </div>

      {/* Grid of Articles */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center space-y-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Aucun article ne correspond à cette combinaison de filtres.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Tous les articles');
              setSelectedTag('');
            }}
            className="px-4 py-2 text-xs font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Réinitialiser tous les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              onSelect={onSelectArticle}
              variant="standard"
            />
          ))}
        </div>
      )}
    </div>
  );
};
