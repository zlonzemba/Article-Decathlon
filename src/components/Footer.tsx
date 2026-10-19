import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowRight, ExternalLink, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Academic Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                DT
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                DECATH'TECH Review
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Média indépendant d'analyse technologique, de veille stratégique et d'ingénierie d'affaires dédié aux innovations du groupe Decathlon.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1 border-t border-slate-800">
              <p className="font-semibold text-slate-200">Mastère Ingénieur d'Affaires</p>
              <p>Euridis Business School · Année académique 2025-2026</p>
              <p>Auteur : Zacharie Lonzemba</p>
            </div>
          </div>

          {/* Editorial Sections */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Rubriques Technologiques
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Produits & Matériaux (SportsLab)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Digital, IA & Computer Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Durabilité & Éco-conception (SBTi)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Magasin & Logistique (RFID, Exotec)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sport Connecté & IoT (Kiprun Coros)
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Suite & Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Livrables & Méthodologie
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('academic')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Support de Soutenance (5 Slides)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('business')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Matrice SWOT & Benchmark Concurrence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('timeline')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frise Chronologique des Innovations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Méthodologie de Veille & Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLegal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mentions Légales & RGPD
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Veille Technologique Decathlon
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Recevez les synthèses mensuelles des brevets déposés et des analyses business de rentabilité.
            </p>
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs">
                <Check className="w-4 h-4 shrink-0" />
                <span>Merci ! Vous êtes inscrit à la veille bimensuelle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="votre.email@ecole.fr"
                    className="w-full pl-3 pr-10 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    aria-label="S'inscrire à la newsletter"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Cadre académique · Aucune commercialisation de données.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Mandatory Academic Disclaimer Banner */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <p className="font-medium">
              « Projet académique indépendant, non affilié à Decathlon. Marques citées à titre informatif. »
            </p>
          </div>
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} DECATH'TECH Review · Conçu pour l'épreuve de Veille Stratégique & Numérique en Mastère Ingénieur d'Affaires.
          </p>
        </div>
      </div>
    </footer>
  );
};
