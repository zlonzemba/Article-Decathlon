/**
 * Chronological timeline of Decathlon's landmark innovations and engineering milestones.
 */

export interface TimelineMilestone {
  year: number;
  dateStr: string;
  title: string;
  category: 'Produit' | 'Logistique & Tech' | 'Stratégie' | 'R&D';
  shortSummary: string;
  fullDetails: string;
  businessImpact: string;
  patentOrTech: string;
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 1976,
    dateStr: 'Juillet 1976',
    title: 'Création du premier magasin à Englos (Nord)',
    category: 'Stratégie',
    shortSummary: 'Michel Leclercq fonde Decathlon sur une idée révolutionnaire : rassembler tous les sports sous un même toit.',
    fullDetails: 'Le 26 juillet 1976, sur le parking du centre commercial d’Englos près de Lille, un premier magasin de 900 m² ouvre ses portes. Le concept casse les codes du commerce d’alors : proposer aux sportifs débutants et passionnés tous les équipements au prix le plus bas possible en libre-service.',
    businessImpact: 'Naissance du modèle de la grande surface spécialisée sportive en France.',
    patentOrTech: 'Modèle de distribution sportive en grande surface'
  },
  {
    year: 1986,
    dateStr: '1986',
    title: 'Création de « Decathlon Production » et premier cadre de vélo',
    category: 'R&D',
    shortSummary: 'Decathlon décide de concevoir et faire fabriquer ses propres produits pour maîtriser les coûts et la qualité.',
    fullDetails: 'Constatant que les grandes marques refusent de baisser leurs prix ou réservent leurs nouveautés aux boutiques spécialisées de centre-ville, Decathlon crée sa propre division industrielle. Le tout premier produit conçu en interne est un cadre de vélo en acier assemblé dans le Nord.',
    businessImpact: 'Début de l’intégration verticale : Decathlon passe du statut de simple distributeur à celui de concepteur-fabricant.',
    patentOrTech: 'Premier bureau d’études mécaniques interne'
  },
  {
    year: 1996,
    dateStr: '1996',
    title: 'Création des premières « Marques Passion » : Quechua et Tribord',
    category: 'Stratégie',
    shortSummary: 'Décentralisation des équipes de conception au plus près du terrain de pratique sportive.',
    fullDetails: 'Pour concevoir des produits véritablement innovants, les équipes de conception quittent les bureaux administratifs de Lille pour s’installer au pied des montagnes (Passy au pied du Mont-Blanc pour Quechua) et en bord d’océan (Hendaye pour Tribord). Les ingénieurs testent le matériel en conditions réelles avec les pratiquants.',
    businessImpact: 'Émergence de marques fortes et hyperspécialisées bénéficiant d’une crédibilité terrain immédiate.',
    patentOrTech: 'Méthodologie de co-conception in situ'
  },
  {
    year: 2005,
    dateStr: '2005',
    title: 'Lancement de la tente Quechua 2 Seconds',
    category: 'Produit',
    shortSummary: 'Rupture d’usage absolue : une tente de camping qui se déploie instantanément en la lançant en l’air.',
    fullDetails: 'Fruit de plusieurs années de R&D au centre de conception de Sallanches, la tente 2 Seconds résout le principal irritant du campeur : la complexité du montage des arceaux et des haubans. Grâce à une armature circulaire en fibre de verre sous tension élastique continue, la tente prend sa forme en deux secondes chrono.',
    businessImpact: 'Succès commercial planétaire : plusieurs dizaines de millions d’exemplaires vendus dans le monde entier.',
    patentOrTech: 'Brevet international d’arceau précontraint auto-déployant'
  },
  {
    year: 2014,
    dateStr: '2014',
    title: 'Masque facial intégral Tribord Easybreath',
    category: 'Produit',
    shortSummary: 'Le premier masque de snorkeling au monde permettant de respirer sous l’eau par le nez et la bouche.',
    fullDetails: 'Le tuba traditionnel provoquait des réflexes nauséeux, des entrées d’eau salée et de la buée constante sur le champ visuel. L’équipe d’ingénieurs de Tribord à Hendaye conçoit un masque facial intégral doté d’une double circulation d’air inspiré des climatiseurs et d’une valve Dry-Top étanche.',
    businessImpact: 'Création d’une toute nouvelle catégorie de marché aquatique, reprise plus tard par toute l’industrie.',
    patentOrTech: 'Brevet de circulation d’air double flux antibuée et soupape étanche'
  },
  {
    year: 2015,
    dateStr: '2015',
    title: 'Déploiement mondial de la technologie RFID (Radio Fréquence)',
    category: 'Logistique & Tech',
    shortSummary: 'Decathlon devient le premier distributeur mondial de sport à tracer 100 % de ses articles par RFID.',
    fullDetails: 'Avec ses partenaires Embisphere et Nedap, Decathlon généralise les puces RFID passives UHF dans les étiquettes de chaque vêtement et accessoire. L’inventaire en magasin passe de 3 jours à 45 minutes, et les caisses automatiques à bac sans scan de code-barres sont installées dans tous les magasins.',
    businessImpact: 'Précision des stocks portée à 99,2 %, chute de la démarque inconnue de 40 % et accélération du passage en caisse.',
    patentOrTech: 'Système RFID UHF massif en boucle fermée usine-magasin'
  },
  {
    year: 2020,
    dateStr: 'Mars 2020',
    title: 'Adaptation du masque Easybreath en respirateur médical d’urgence Covid-19',
    category: 'R&D',
    shortSummary: 'Decathlon offre ses plans 3D en open source pour sauver des milliers de patients en soins intensifs.',
    fullDetails: 'Lors de la première vague de Covid-19 en Italie et en Europe face à la pénurie critique de respirateurs dans les hôpitaux, Decathlon s’associe à la société d’ingénierie Isinnova pour concevoir la valve « Charlotte » imprimée en 3D, transformant le masque Easybreath en masque de ventilation respiratoire non invasif (CPAP). Decathlon partage les fichiers CAO gratuitement au monde entier.',
    businessImpact: 'Reconnaissance mondiale de l’utilité sociétale et de la réactivité d’ingénierie du groupe.',
    patentOrTech: 'Fichiers CAO Open-Source et raccord d’urgence médicalisé'
  },
  {
    year: 2022,
    dateStr: '2022',
    title: 'Kiprun KD900X et alliance robotique avec la licorne Exotec',
    category: 'Produit',
    shortSummary: 'Démocratisation de la plaque carbone marathon (150 €) et entrepôts robotisés Skypod en 3D.',
    fullDetails: 'Decathlon frappe deux grands coups : sur le volet produit, lancement de la KD900X co-développée avec le chimiste Arkema (mousse Pebax VFOAM) défiant la Nike Vaporfly à un tarif divisé par deux. Sur le volet logistique, déploiement des robots verticaux Skypod d’Exotec multipliant par 5 les débits de picking.',
    businessImpact: 'Percée majeure sur le running d’élite et optimisation du coût unitaire de livraison e-commerce.',
    patentOrTech: 'Mousse VFOAM Pebax exclusive et robots tridimensionnels Skypod'
  },
  {
    year: 2024,
    dateStr: 'Mars 2024',
    title: 'Plan de transformation « Ready to Play » et création de Decathlon Pulse',
    category: 'Stratégie',
    shortSummary: 'Nouvelle identité globale avec le logo « L’Orbite » et lancement d’un fonds d’investissement Sportstech.',
    fullDetails: 'Sous la direction de Barbara Martin Coppola, Decathlon dévoile sa nouvelle stratégie d’entreprise mondiale : modernisation de son image de marque, rationalisation du portefeuille autour de 9 marques spécialistes (Quechua, Tribord, B’Twin, Kiprun...) et 4 marques expertes (Van Rysel, Kiprun, Simond, Solognac), et création de Decathlon Pulse pour financer les start-ups de deeptech et de circularité.',
    businessImpact: 'Montée en gamme perçue, clarification de l’offre internationale et investissements dans l’open innovation.',
    patentOrTech: 'Filiale d’investissement Corporate Venture Capital Decathlon Pulse'
  },
  {
    year: 2025,
    dateStr: '2025 - 2026',
    title: 'IA générative omnicanale, bio-recyclage Carbios et objectif 100 % écoconçu',
    category: 'R&D',
    shortSummary: 'L’ère de la personnalisation biométrique par vision par ordinateur et de la circularité industrielle fermée.',
    fullDetails: 'Généralisation de l’essayage numérique 3D sur smartphone réduisant les retours textiles de 22 %, premiers vêtements techniques fabriqués à partir de polyester dépolymérisé par enzymes biologiques avec Carbios, et alignement sur la trajectoire SBTi de baisse de 42 % des émissions de CO2 d’ici 2030.',
    businessImpact: 'Conformité proactive au Passeport Numérique Européen (DPP) et renforcement de l’attractivité auprès de la Gen Z.',
    patentOrTech: 'Algorithmes prédictifs Computer Vision et bio-recyclage enzymatique PET'
  }
];
