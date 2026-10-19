import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('decathtech_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('decathtech_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Consentement de confidentialité et cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-xs space-y-3 animate-in slide-in-from-bottom-4 duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>Respect de la vie privée & RGPD</span>
        </div>
        <button
          onClick={handleAccept}
          aria-label="Fermer l'avis de confidentialité"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Ce site académique indépendant n'utilise aucun traceur publicitaire ni cookie tiers intrusif. Seule votre préférence de thème (mode clair / sombre) est mémorisée localement dans votre navigateur.
      </p>

      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer"
        >
          Compris & Accepter
        </button>
      </div>
    </aside>
  );
};
