/**
 * Pure business and editorial utility functions decoupled from UI
 * for fast deterministic testing with node:test.
 */

export interface ArticleStub {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  content?: string;
}

/**
 * Calculates reading time in minutes based on average 200 words/minute reading speed.
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  if (!text || typeof text !== 'string') return 1;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}

/**
 * Normalizes string for accent-insensitive and case-insensitive search.
 */
export function normalizeSearchTerm(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Filters articles based on search query, category selection, and tag.
 */
export function filterArticles<T extends ArticleStub>(
  articles: T[],
  query: string,
  category: string = 'all',
  tag: string = ''
): T[] {
  const normQuery = normalizeSearchTerm(query.trim());

  return articles.filter((article) => {
    // Category match
    if (category !== 'all' && article.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // Tag match
    if (tag && !article.tags.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      return false;
    }

    // Search query match in title, excerpt or tags
    if (normQuery) {
      const matchTitle = normalizeSearchTerm(article.title).includes(normQuery);
      const matchExcerpt = normalizeSearchTerm(article.excerpt).includes(normQuery);
      const matchTag = article.tags.some((t) => normalizeSearchTerm(t).includes(normQuery));
      return matchTitle || matchExcerpt || matchTag;
    }

    return true;
  });
}

/**
 * Finds up to `limit` related articles by matching category and shared tags.
 */
export function getRelatedArticles<T extends ArticleStub>(
  currentArticle: T,
  allArticles: T[],
  limit: number = 3
): T[] {
  return allArticles
    .filter((a) => a.id !== currentArticle.id)
    .map((a) => {
      let score = 0;
      if (a.category === currentArticle.category) score += 3;
      const sharedTags = a.tags.filter((t) => currentArticle.tags.includes(t));
      score += sharedTags.length * 2;
      return { article: a, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}

/**
 * Formats ISO date string to French localized human-readable date.
 */
export function formatDateFrench(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  } catch {
    return dateString;
  }
}
