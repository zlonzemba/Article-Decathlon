/**
 * Business analysis data for DECATH'TECH Review.
 * Prepared for Master's degree in Business Engineering (Ingénieur d'Affaires).
 */

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  source: string;
}

export interface SwotItem {
  id: string;
  title: string;
  description: string;
  impact: 'Critique' | 'Élevé' | 'Modéré';
  engineeringPerspective: string;
}

export interface SwotQuadrant {
  type: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
  title: string;
  subtitle: string;
  items: SwotItem[];
}

export interface CompetitorBenchmark {
  name: string;
  category: string;
  revenue: string;
  businessModel: string;
  rdAutonomy: string;
  priceTechRatio: string;
  supplyChainTech: string;
  circularityScore: string;
  overallAdvantage: string;
}

export const DECATHLON_METRICS: MetricItem[] = [
  {
    id: 'ca',
    label: 'Chiffre d’affaires mondial',
    value: '15,6 Mds€',
    subtext: '+4,4 % à taux de change constants',
    source: 'Rapport Annuel Decathlon United'
  },
  {
    id: 'magasins',
    label: 'Réseau de distribution',
    value: '1 700+',
    subtext: 'Implantations dans plus de 70 pays',
    source: 'Données Corporate Decathlon'
  },
  {
    id: 'rd',
    label: 'Recherche & Développement',
    value: '850+',
    subtext: 'Ingénieurs & chercheurs au SportsLab',
    source: 'Direction Innovation Decathlon'
  },
  {
    id: 'brevets',
    label: 'Propriété intellectuelle',
    value: '850+',
    subtext: 'Brevets industriels actifs (INPI / OEB)',
    source: 'Bases INPI / Espacenet'
  },
  {
    id: 'rfid',
    label: 'Traçabilité unitaire',
    value: '100 %',
    subtext: 'Articles tagués RFID dès la fabrication',
    source: 'Nedap / Embisphere Case Study'
  },
  {
    id: 'seconde-vie',
    label: 'Matériel reconditionné',
    value: '1,2M',
    subtext: 'Articles Seconde Vie remis en circulation',
    source: 'Rapport RSE Decathlon'
  }
];

export const SWOT_DATA: SwotQuadrant[] = [
  {
    type: 'strengths',
    title: 'Forces (Strengths)',
    subtitle: 'Atouts structurels et différenciation concurrentielle interne',
    items: [
      {
        id: 's1',
        title: 'Intégration verticale complète (Concepteur - Fabricant - Distributeur)',
        description: 'Contrôle exclusif de toute la chaîne de valeur : du bureau d’études R&D (SportsLab) aux rayonnages des 1 700 magasins, sans intermédiaire grossiste.',
        impact: 'Critique',
        engineeringPerspective: 'Permet de diviser les marges intermédiaires et d’appliquer des prix publics 30 à 40 % plus bas que les marques tierces à caractéristiques techniques égales.'
      },
      {
        id: 's2',
        title: 'Maîtrise technologique de la RFID et de la Supply Chain 4.0',
        description: '100 % des articles identifiés par puce radiofréquence, inventaire en 45 min, caisses automatiques ultra-rapides sans scan manuel.',
        impact: 'Critique',
        engineeringPerspective: 'Exactitude des stocks de 99,2 %, fondation indispensable de la promesse Click & Collect en 1h et réduction drastique du coût logistique unitaire.'
      },
      {
        id: 's3',
        title: 'Culture de l’innovation accessible et portefeuille de brevets',
        description: 'Plus de 850 brevets actifs (Easybreath, 2 Seconds, K-Ring, VFOAM Arkema), capacité prouvée à créer de nouveaux marchés sportifs grand public.',
        impact: 'Élevé',
        engineeringPerspective: 'Démocratise les pratiques sportives en brisant les barrières techniques et financières à l’entrée pour les débutants et pratiquants réguliers.'
      },
      {
        id: 's4',
        title: 'Réseau mondial physique de plus de 1 700 magasins',
        description: 'Présence omnicanale solide avec des magasins servant à la fois de showrooms d’expérimentation, de points de retrait et d’ateliers de réparation.',
        impact: 'Élevé',
        engineeringPerspective: 'Actif foncier et relationnel que les pure-players digitaux (Amazon, Shein) sont incapables de répliquer sans investissements colossaux.'
      }
    ]
  },
  {
    type: 'weaknesses',
    title: 'Faiblesses (Weaknesses)',
    subtitle: 'Vulnérabilités opérationnelles et freins internes à surveiller',
    items: [
      {
        id: 'w1',
        title: 'Déficit d’image historique sur le très haut de gamme / compétition',
        description: 'Longtemps associé à l’entrée de gamme économique, Decathlon doit encore batailler pour convaincre les athlètes d’élite face au prestige séculaire de Nike ou Salomon.',
        impact: 'Élevé',
        engineeringPerspective: 'Nécessite des investissements marketing majeurs en sponsoring olympique et la création de marques expertes autonomes (Kiprun, Van Rysel, Simond).'
      },
      {
        id: 'w2',
        title: 'Prolifération historique des marques propres générant de la confusion',
        description: 'La création de dizaines de sous-marques (Kalenji, Artengo, Quechua, Tribord, Geologic, Inesis...) a dilué la lisibilité globale de l’offre en magasin.',
        impact: 'Modéré',
        engineeringPerspective: 'Justifie le plan de refonte stratégique 2024 recentrant le catalogue mondial autour de 9 grandes marques spécialisées et 4 marques expertes.'
      },
      {
        id: 'w3',
        title: 'Lourdeur des stocks et cycle d’amortissement des moules industriels',
        description: 'La production massive en marque propre implique des engagements de volumes de fabrication stricts 6 à 9 mois avant la saison sportive.',
        impact: 'Élevé',
        engineeringPerspective: 'Vulnérabilité face aux variations météo imprévues (hivers doux bloquant les stocks de ski, printemps pluvieux pénalisant le cyclisme).'
      }
    ]
  },
  {
    type: 'opportunities',
    title: 'Opportunités (Opportunities)',
    subtitle: 'Relais de croissance stratégiques et tendances de marché favorables',
    items: [
      {
        id: 'o1',
        title: 'Économie de la fonctionnalité et essor de l’occasion (BuyBack & Location)',
        description: 'Le marché de la seconde main sportive croît 3 fois plus vite que le neuf. Decathlon structure ce marché avec garantie légale de 2 ans et marges renforcées.',
        impact: 'Critique',
        engineeringPerspective: 'Modèle économique vertueux : marge brute supérieure (+10 pts) sur le reconditionné et revenus récurrents (ARR) par abonnement mensuel.'
      },
      {
        id: 'o2',
        title: 'Open Innovation et Venture Capital avec Decathlon Pulse',
        description: 'Prises de participation directes dans des start-ups de deeptech, nouveaux biomatériaux et plateformes technologiques (Rebike, Unspun).',
        impact: 'Élevé',
        engineeringPerspective: 'Permet d’accéder aux ruptures technologiques extérieures sans alourdir la structure de coûts fixes ni freiner l’agilité.'
      },
      {
        id: 'o3',
        title: 'Expansion internationale sur les marchés à forte croissance (Inde, Brésil)',
        description: 'L’émergence d’une classe moyenne friande de bien-être et de santé dans les pays du Sud global offre un réservoir de croissance gigantesque.',
        impact: 'Élevé',
        engineeringPerspective: 'Déploiement du modèle de magasins-entrepôts intégrés avec production locale répondant aux exigences fiscales nationales.'
      }
    ]
  },
  {
    type: 'threats',
    title: 'Menaces (Threats)',
    subtitle: 'Pressions concurrentielles externes et contraintes réglementaires',
    items: [
      {
        id: 't1',
        title: 'Pression réglementaire environnementale (Passeport Numérique, CSRD, SBTi)',
        description: 'Obligation de décarboner le Scope 3 (émissions des usines partenaires en Asie) et d’éliminer les plastiques non recyclables sous peine de sanctions.',
        impact: 'Critique',
        engineeringPerspective: 'Exige une refonte coûteuse de toute la chaîne d’approvisionnement matière et un suivi d’Analyse de Cycle de Vie (ACV) automatisé.'
      },
      {
        id: 't2',
        title: 'Concurrence agressive des discounters en ligne asiatiques',
        description: 'Essor de plateformes d’ultra-fast shopping (Temu, AliExpress) commercialisant des équipements sportifs basiques à des prix défiant toute rationalité.',
        impact: 'Élevé',
        engineeringPerspective: 'Oblige Decathlon à accentuer sa différenciation par la sécurité normative européenne, la réparabilité et le service en magasin physique.'
      },
      {
        id: 't3',
        title: 'Instabilité géopolitique et hausse des coûts de fret maritime',
        description: 'Tensions en mer Rouge et hausses périodiques des taux de conteneurs maritimes impactant le coût de revient des produits importés d’Asie.',
        impact: 'Élevé',
        engineeringPerspective: 'Accélère l’impératif de « nearshoring » : relocalisation progressive de la confection textile et du montage cycles en Europe et au Maghreb.'
      }
    ]
  }
];

export const COMPETITOR_BENCHMARK: CompetitorBenchmark[] = [
  {
    name: 'Decathlon',
    category: 'Marque intégrée & Distributeur',
    revenue: '15,6 Mds€',
    businessModel: '100 % intégré (Conception, R&D, Fabrication, Distribution propre)',
    rdAutonomy: 'Très élevée (SportsLab propriétaire, 850 brevets, chimistes & labos)',
    priceTechRatio: 'Exceptionnel (Démocratisation des technologies premium)',
    supplyChainTech: 'Pionnier (RFID intégrale 100%, robots Exotec, inventaire 45 min)',
    circularityScore: 'Leader (BuyBack industriel, ateliers intégrés, garantie 2 ans)',
    overallAdvantage: 'Maîtrise complète des coûts, barrière technologique RFID, agilité R&D'
  },
  {
    name: 'Intersport',
    category: 'Coopérative de détaillants',
    revenue: '13,7 Mds€ (groupe)',
    businessModel: 'Distributeur multimarques (Nike, Adidas, Puma) + marques propres limitées',
    rdAutonomy: 'Faible (Dépendance quasi-totale envers les catalogues des grands équipementiers)',
    priceTechRatio: 'Moyen (Prix élevés fixés par les équipementiers sous contrat)',
    supplyChainTech: 'Standard (Codes-barres classiques, RFID encore partielle)',
    circularityScore: 'En émergence (Programmes de reprise ponctuels via prestataires tiers)',
    overallAdvantage: 'Proximité des commerçants adhérents et force des marques tierces attractives'
  },
  {
    name: 'Nike',
    category: 'Pure équipementier mondial',
    revenue: '46 Mds€',
    businessModel: 'Concepteur & Marketing mondial (Fabrication sous-traitée, vente mixte DTC/Grossistes)',
    rdAutonomy: 'Très élevée (Nike Sport Research Lab / NSRL, innovations de pointe)',
    priceTechRatio: 'Premium élevé (Marges brutes > 45 %, prix publics élevés portés par le storytelling)',
    supplyChainTech: 'Avancée (Automatisation des mégacentres logistiques mondiaux)',
    circularityScore: 'Modéré (Programme Nike Refurbished en boutiques propres)',
    overallAdvantage: 'Notoriété mondiale inégalée, budgets sponsoring records et désirabilité culturelle'
  },
  {
    name: 'Amazon Sports',
    category: 'Pure Player E-Commerce',
    revenue: 'Non ventilé sport',
    businessModel: 'Marketplace globale + logistique algorithmique sans réseau de magasins sportifs',
    rdAutonomy: 'Nulle en sport (Intermédiation commerciale pure, pas de R&D sportive)',
    priceTechRatio: 'Variable (Guerre des prix sur les produits génériques importés)',
    supplyChainTech: 'Leader mondial (Kiva Systems, entrepôts robotisés, livraison J+1)',
    circularityScore: 'Faible (Nombreux retours e-commerce finissant en déstockage massif)',
    overallAdvantage: 'Profondeur d’offre quasi-infinie et rapidité logistique du programme Prime'
  }
];
