import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateReadingTime,
  normalizeSearchTerm,
  filterArticles,
  getRelatedArticles,
  formatDateFrench
} from './pure_logic.ts';
import type { ArticleStub } from './pure_logic.ts';

test('calculateReadingTime calculates correct reading time based on word count', () => {
  const shortText = 'Bonjour Decathlon innovation';
  assert.equal(calculateReadingTime(shortText), 1);

  // 450 words should be 3 minutes (ceil(450/200) = 3)
  const mediumWords = Array(450).fill('technologie').join(' ');
  assert.equal(calculateReadingTime(mediumWords), 3);

  // Empty string returns minimum 1
  assert.equal(calculateReadingTime(''), 1);
});

test('normalizeSearchTerm handles accents and uppercase correctly', () => {
  assert.equal(normalizeSearchTerm('Éco-conception & IA'), 'eco-conception & ia');
  assert.equal(normalizeSearchTerm('DÉCATHLON'), 'decathlon');
});

test('filterArticles filters by category, tag, and search term', () => {
  const testArticles: ArticleStub[] = [
    {
      id: 'art-1',
      title: 'La révolution RFID chez Decathlon',
      excerpt: 'Traçabilité intégrale des stocks',
      category: 'Magasin & Logistique',
      tags: ['RFID', 'Supply Chain', 'IoT']
    },
    {
      id: 'art-2',
      title: 'Kiprun KD900X et plaque carbone',
      excerpt: 'Performance marathon et mousse Pebax',
      category: 'Produits & Matériaux',
      tags: ['Running', 'Carbone', 'Matériaux']
    },
    {
      id: 'art-3',
      title: 'IA générative et essayage 3D',
      excerpt: 'Expérience client personnalisée en magasin',
      category: 'Digital & IA',
      tags: ['IA', 'Retail', '3D']
    }
  ];

  // Search by keyword
  const rfidResults = filterArticles(testArticles, 'rfid');
  assert.equal(rfidResults.length, 1);
  assert.equal(rfidResults[0].id, 'art-1');

  // Search by category
  const digitalCategory = filterArticles(testArticles, '', 'Digital & IA');
  assert.equal(digitalCategory.length, 1);
  assert.equal(digitalCategory[0].id, 'art-3');

  // Search by tag
  const carbonTag = filterArticles(testArticles, '', 'all', 'Carbone');
  assert.equal(carbonTag.length, 1);
  assert.equal(carbonTag[0].id, 'art-2');

  // Multi-filter empty match
  const noMatch = filterArticles(testArticles, 'inconnu');
  assert.equal(noMatch.length, 0);
});

test('getRelatedArticles prioritizes category and shared tags', () => {
  const baseArticle: ArticleStub = {
    id: 'base',
    title: 'Base',
    excerpt: 'Base',
    category: 'Produits & Matériaux',
    tags: ['Matériaux', 'Innovation', 'Éco-design']
  };

  const pool: ArticleStub[] = [
    {
      id: 'p1',
      title: 'P1 unrelated',
      excerpt: 'Unrelated',
      category: 'Digital & IA',
      tags: ['Cloud']
    },
    {
      id: 'p2',
      title: 'P2 same category',
      excerpt: 'Same cat',
      category: 'Produits & Matériaux',
      tags: ['Autre']
    },
    {
      id: 'p3',
      title: 'P3 same category & shared tags',
      excerpt: 'High relevance',
      category: 'Produits & Matériaux',
      tags: ['Matériaux', 'Éco-design']
    }
  ];

  const related = getRelatedArticles(baseArticle, pool, 2);
  assert.equal(related.length, 2);
  assert.equal(related[0].id, 'p3'); // highest score
  assert.equal(related[1].id, 'p2');
});

test('formatDateFrench formats ISO dates to readable French strings', () => {
  const formatted = formatDateFrench('2026-03-15');
  assert.match(formatted, /15 mars 2026/);
});
