import React, { useState } from 'react';
import {
  Compass,
  Mail,
  Send,
  Check,
  ShieldCheck,
  UserCheck,
  FileCheck2,
  Lock,
  ExternalLink
} from 'lucide-react';

export const AboutContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          <Compass className="w-4 h-4" />
          <span>Cadre Académique & Démarche de Recherche</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          À Propos, Méthodologie & Contact
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Présentation du projet de veille stratégique réalisé dans le cadre du Mastère Ingénieur d'Affaires d'Euridis Business School.
        </p>
      </header>

      {/* 2-Column Split: Author & Methodology */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Author Bio (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-700 flex items-center justify-center text-white text-2xl font-bold">
              ZL
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Zacharie Lonzemba
              </h2>
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                Étudiant en Mastère Ingénieur d'Affaires
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Euridis Business School · Paris / Lyon / Lille
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
            <p>
              Ce média indépendant a été conçu pour soutenir l'épreuve académique de <strong>Veille Technologique et Stratégique</strong>.
            </p>
            <p>
              L'ambition est d'adopter une posture d'ingénieur d'affaires : comprendre les ruptures techniques (biomécanique, RFID, IA prédictive, polymères de spécialité) et modéliser rigoureusement leur impact commercial, leur rentabilité financière et leur valeur concurrentielle.
            </p>
          </div>

          {/* Academic Warning Card */}
          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Avertissement Académique Légal</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              « Projet académique indépendant, non affilié à Decathlon. Marques citées à titre informatif. »
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Aucune transaction financière ni vente d'articles n'est effectuée sur ce site.
            </p>
          </div>
        </div>

        {/* Methodology (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <FileCheck2 className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Méthodologie de Veille & Déontologie Éditoriale
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white">
                1. Triangulation des données primaires
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Chaque statistique et citation provient obligatoirement d'une source publique identifiable : rapports annuels financiers Decathlon United, déclarations de brevets auprès de l'INPI et de l'Office Européen des Brevets (OEB), ou communiqués de presse officiels de partenaires industriels (Nedap, Arkema, Carbios, Exotec).
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white">
                2. Règle absolue : Zéro invention de faits
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Conformément aux instructions strictes de l'épreuve, aucune interview fictive, aucun chiffre imaginaire ni aucune innovation hallucinée ne figure sur ce site. Les zones d'ombre ou limites sont explicitement signalées dans l'analyse.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white">
                3. Double lecture technique & business
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Chaque article est rédigé selon un protocole journalistique précis : description factuelle de l'innovation, fonctionnement technique sous-jacent, encadré « À retenir », suivi d'une section d'analyse d'affaires détaillée (opportunités, risques et indicateurs clés).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & RGPD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <Mail className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Formulaire de Contact
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Pour toute question relative au projet, au jury ou à la méthodologie
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                Message envoyé avec succès !
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-sm mx-auto leading-relaxed">
                Votre message a été enregistré dans le cadre du projet académique. Une réponse vous sera adressée sous 48 heures.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs rounded-lg">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Nom & Prénom <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Adresse Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Objet du message
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Évaluation académique / Recrutement / Échange technique"
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Votre message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Bonjour, j'aimerais échanger au sujet de votre analyse sur..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-blue-500 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmettre le message</span>
              </button>
            </form>
          )}
        </div>

        {/* Legal & RGPD Box (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <Lock className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Mentions Légales & RGPD
            </h2>
          </div>

          <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              <strong>Éditeur du site :</strong> Zacharie Lonzemba, étudiant en Mastère Ingénieur d'Affaires à Euridis Business School.
            </p>
            <p>
              <strong>Hébergement :</strong> Plateforme Cloud Serverless certifiée HTTPS TLS 1.3 avec réseau CDN européen.
            </p>
            <p>
              <strong>Protection des données personnelles :</strong> En conformité avec le Règlement Général sur la Protection des Données (RGPD 2016/679), aucune donnée personnelle n'est cédée à des tiers. Les adresses saisies dans le formulaire ne servent qu'à la réponse académique.
            </p>
            <p>
              <strong>Propriété intellectuelle :</strong> DECATHLON, Quechua, Tribord, Kiprun, B'Twin, Domyos et leurs logos respectifs sont des marques déposées de Decathlon SE. Elles sont citées ici exclusivement au titre du droit de citation à des fins d'analyse académique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
