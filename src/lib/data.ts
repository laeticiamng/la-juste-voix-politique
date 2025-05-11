
// Temporary data structure for La Juste Voix program

export interface BlockData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  measures: string[];
  quotes?: string[];
}

export const manifesteContent = {
  title: "La Juste Voix",
  content: `La Juste Voix est un programme politique qui vise à restaurer la justice, la dignité et l'égalité au cœur de notre République. 
  
  Nous croyons en une société où chaque citoyen peut vivre dignement de son travail, où les services publics sont accessibles à tous, et où la transition écologique est une opportunité plutôt qu'une contrainte.
  
  Notre programme s'articule autour de 14 grands blocs thématiques qui couvrent l'ensemble des défis auxquels notre pays fait face.`
};

export const blocksData: BlockData[] = [
  {
    id: 1,
    title: "Justice Économique",
    subtitle: "Pour une économie au service de tous",
    description: "Nous proposons une refonte du système fiscal pour plus d'équité et une meilleure répartition des richesses.",
    measures: [
      "Revalorisation du SMIC à 1500€ net",
      "Taxation des superprofits des multinationales",
      "Création d'un revenu de dignité pour les plus précaires"
    ],
    quotes: [
      "L'économie doit servir l'Homme, et non l'inverse."
    ]
  },
  {
    id: 2,
    title: "Rénovation Démocratique",
    subtitle: "Redonner le pouvoir aux citoyens",
    description: "Notre démocratie a besoin d'un nouveau souffle pour retrouver la confiance des citoyens.",
    measures: [
      "Reconnaissance du vote blanc",
      "Référendum d'initiative citoyenne",
      "Limitation du cumul des mandats dans le temps"
    ],
    quotes: [
      "La démocratie n'est pas un acquis, c'est un combat permanent."
    ]
  },
  {
    id: 3,
    title: "Transition Écologique",
    subtitle: "Agir maintenant pour notre avenir",
    description: "Face à l'urgence climatique, nous proposons un plan ambitieux mais réaliste.",
    measures: [
      "Plan d'isolation des logements",
      "Développement massif des énergies renouvelables",
      "Taxe carbone progressive et sociale"
    ],
    quotes: [
      "La planète n'a pas besoin d'être sauvée. Nous si."
    ]
  },
  {
    id: 4,
    title: "École et Formation",
    subtitle: "Investir dans notre jeunesse",
    description: "L'éducation est la clé de l'émancipation individuelle et collective.",
    measures: [
      "Réduction des effectifs en classe à 20 élèves maximum",
      "Revalorisation du métier d'enseignant",
      "Gratuité réelle de l'école publique"
    ],
    quotes: [
      "Éduquer, c'est transmettre non seulement des savoirs, mais aussi des valeurs."
    ]
  },
  {
    id: 5,
    title: "Santé pour Tous",
    subtitle: "Un système de santé solidaire et efficace",
    description: "La santé est un droit fondamental qui doit être garanti à tous.",
    measures: [
      "Fin des déserts médicaux par l'installation de médecins salariés",
      "Réouverture de lits dans les hôpitaux",
      "Remboursement à 100% des soins essentiels"
    ],
    quotes: [
      "Une nation se juge à la manière dont elle prend soin des plus vulnérables."
    ]
  },
  {
    id: 6,
    title: "Travail et Emploi",
    subtitle: "Dignité et reconnaissance",
    description: "Le travail doit être source d'épanouissement et non d'aliénation.",
    measures: [
      "Réduction du temps de travail à 32h",
      "Échelle des salaires de 1 à 12 dans les entreprises",
      "Revalorisation des métiers essentiels"
    ],
    quotes: [
      "Le travail n'est pas une marchandise, c'est une part de notre humanité."
    ]
  },
  {
    id: 7,
    title: "Logement et Territoire",
    subtitle: "Un toit pour chacun, partout",
    description: "Le logement est un droit fondamental qui doit être garanti à tous.",
    measures: [
      "Construction de 200 000 logements sociaux par an",
      "Encadrement strict des loyers",
      "Plan de rénovation urbaine des quartiers prioritaires"
    ]
  },
  {
    id: 8,
    title: "Culture et Médias",
    subtitle: "Liberté, diversité et indépendance",
    description: "La culture est l'âme d'une nation et doit être accessible à tous.",
    measures: [
      "Pass culture renforcé pour les jeunes",
      "Statut des intermittents préservé et renforcé",
      "Lutte contre la concentration des médias"
    ]
  },
  {
    id: 9,
    title: "Europe et International",
    subtitle: "Coopération et souveraineté",
    description: "La France doit retrouver sa voix sur la scène internationale.",
    measures: [
      "Réforme profonde des institutions européennes",
      "Diplomatie climatique ambitieuse",
      "Coopération renforcée avec les pays du Sud"
    ]
  },
  {
    id: 10,
    title: "Sécurité et Justice",
    subtitle: "Protection et réparation",
    description: "La sécurité est la première des libertés et doit être garantie à tous.",
    measures: [
      "Police de proximité rétablie",
      "Justice mieux dotée en moyens humains et financiers",
      "Prévention renforcée contre la délinquance"
    ]
  },
  {
    id: 11,
    title: "Famille et Solidarité",
    subtitle: "Des liens humains plus forts",
    description: "La famille, sous toutes ses formes, est le premier lieu de solidarité.",
    measures: [
      "Congé parental allongé et mieux rémunéré",
      "Services publics de la petite enfance renforcés",
      "Aide aux aidants familiaux"
    ]
  },
  {
    id: 12,
    title: "Numérique et Innovation",
    subtitle: "Maîtriser notre avenir technologique",
    description: "Le numérique doit être un outil d'émancipation et non de surveillance.",
    measures: [
      "Souveraineté numérique européenne",
      "Droit à la déconnexion effectif",
      "Lutte contre la fracture numérique"
    ]
  },
  {
    id: 13,
    title: "Immigration et Intégration",
    subtitle: "Dignité, humanité, responsabilité",
    description: "L'immigration doit être abordée avec humanité et réalisme.",
    measures: [
      "Procédures d'asile plus rapides et plus justes",
      "Parcours d'intégration renforcé",
      "Régularisation des travailleurs sans-papiers"
    ]
  },
  {
    id: 14,
    title: "Institutions et Fonction Publique",
    subtitle: "Au service de l'intérêt général",
    description: "Nos institutions doivent être plus transparentes et plus efficaces.",
    measures: [
      "VIe République avec une dose de proportionnelle",
      "Revalorisation des fonctionnaires",
      "Décentralisation approfondie"
    ]
  }
];
