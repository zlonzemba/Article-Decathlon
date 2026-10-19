import React from 'react';
import { Article } from '../data/articles.ts';
import { formatDateFrench } from '../utils/pure_logic.ts';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  variant?: 'featured' | 'standard' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  variant = 'standard',
}) => {
  if (variant === 'compact') {
    return (
      <article
        onClick={() => onSelect(article)}
        className="group flex gap-4 items-start py-3 cursor-pointer border-b border-slate-100 dark:border-slate-800/80 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 rounded-lg p-2 transition-colors"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          {/* Zero-Pill unboxed metadata */}
          <div className="flex items-center gap-1.5 text-xs text-blue-700 dark:text-blue-400 font-semibold mb-1">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span className="text-slate-600 dark:text-slate-400 font-normal">{article.readTime} min</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {article.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-1">
            {article.excerpt}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article)}
      className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Zero-Pill metadata: unboxed text with typographic dot separators */}
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-2.5">
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            {article.category}
          </span>
          <span aria-hidden="true">·</span>
          <span>{formatDateFrench(article.date)}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{article.readTime} min de lecture</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2.5">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

        {/* Card Footer: Author & Tag */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[160px]">
            {article.author.name}
          </span>
          <span className="text-blue-700 dark:text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
            Lire l’analyse →
          </span>
        </div>
      </div>
    </article>
  );
};
