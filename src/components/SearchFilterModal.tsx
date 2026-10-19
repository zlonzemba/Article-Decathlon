import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../data/articles.ts';
import { filterArticles } from '../utils/pure_logic.ts';
import { Search, X, Clock, ArrowRight, Tag } from 'lucide-react';

interface SearchFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchFilterModal: React.FC<SearchFilterModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Toutes les rubriques' },
    { id: 'Produits & Matériaux', label: 'Produits & Matériaux' },
    { id: 'Digital & IA', label: 'Digital & IA' },
    { id: 'Durabilité & Éco-conception', label: 'Durabilité' },
    { id: 'Magasin & Logistique', label: 'Magasin & Logistique' },
    { id: 'Sport Connecté', label: 'Sport Connecté' },
  ];

  const filtered = filterArticles(articles, query, selectedCategory, selectedTag);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in-50 duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par mot-clé (ex: RFID, biomécanique, Pebax, brevet, Arkema...)"
            className="w-full text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            Échap
          </button>
        </div>

        {/* Category Filters bar */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/40 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-2.5 py-1 text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-blue-700 text-white font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search Results list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1 pb-1">
            <span>{filtered.length} article(s) trouvé(s)</span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag('')}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Effacer tag #{selectedTag}
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs sm:text-sm">
              Aucun article ne correspond à votre recherche « {query} ».
            </div>
          ) : (
            filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="group flex gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-blue-700 dark:text-blue-400 font-semibold mb-0.5">
                    <span>{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-600 dark:text-slate-400 font-normal">{art.readTime} min</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {art.excerpt}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
