
// Temporary data structure for La Juste Voix program

export interface BlockData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  measures: string[];
  quotes?: string[];
  detailedMeasures?: {
    id: number;
    title: string;
    objective: string;
    details: string[];
    impact?: string;
    cost?: string;
    financing?: string;
  }[];
  conclusion?: string;
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
    title: "Travail & Valeur",
    subtitle: "Reconnaître toutes les formes de contribution",
    description: "Nous refusons l'idée que seule l'activité salariale mérite reconnaissance. Notre modèle valorise tout engagement productif, éducatif, social ou créatif. Nous valorisons l'effort, l'intention de progression et l'utilité réelle, même sans contrat de travail formel.",
    measures: [
      "Prime de Progression Individuelle (PPI) - Soutien financier pour les personnes en transition (formation, reconversion, création de projet utile)",
      "Statut de Contributeur Actif (SCA) - Reconnaissance officielle des engagements non rémunérés mais essentiels",
      "Droit au cumul d'activités et de projets - Permettre le développement d'activités secondaires légales",
      "Compte de Valeur Créée (CVC) - Attribution de points sociaux pour les actions utiles non salariées",
      "Réseau des Référents Ambition - Accompagnement humain et bienveillant pour chaque citoyen engagé"
    ],
    quotes: [
      "La dignité commence quand on reconnaît ce que chacun peut apporter."
    ],
    detailedMeasures: [
      {
        id: 1,
        title: "Prime de Progression Individuelle (PPI)",
        objective: "Soutenir les individus en phase de transition (formation, reconversion, création de projet utile…).",
        details: [
          "Montant : de 200 à 600 € nets/mois selon le niveau d'investissement",
          "Durée : 6 à 12 mois, renouvelable une fois",
          "Public ciblé : 300 000 bénéficiaires en phase 1"
        ],
        cost: "1,35 milliard €/an",
        financing: "Réaffectation partielle des allocations chômage longue durée + FSE+"
      },
      {
        id: 2,
        title: "Statut de Contributeur Actif (SCA)",
        objective: "Reconnaître les engagements non rémunérés mais essentiels (aidants, parents isolés, bénévoles, créateurs de contenu éducatif ou solidaire…).",
        details: [
          "Création d'un statut officiel avec droits sociaux minimaux",
          "Accès à un guichet unique : Cap Contribution",
          "Public estimé : 2 à 3 millions de personnes"
        ],
        cost: "2 à 3 milliards €/an",
        financing: "Fusion d'aides passives, rationalisation des dispositifs, fonds européens"
      },
      {
        id: 3,
        title: "Droit au cumul d'activités et de projets",
        objective: "Permettre aux salariés, agents publics, ou demandeurs d'emploi de développer une activité secondaire légale.",
        details: [
          "Suppression des blocages réglementaires hors conflits d'intérêt",
          "Déclaration via Cap Contribution",
          "Accompagnement à la création/structuration d'activité"
        ],
        impact: "1 à 2 millions de Français concernés"
      },
      {
        id: 4,
        title: "Compte de Valeur Créée (CVC)",
        objective: "Attribuer des points sociaux à chaque action utile non salariée, traçable, reconnue.",
        details: [
          "Exemples d'actions valorisées : Aide familiale, Création de contenu éducatif, Accompagnement scolaire, Participation citoyenne locale, Bénévolat structuré",
          "Utilisation des points : Accès prioritaire à certains services publics, Réduction sur les transports, la culture, les soins, Accès facilité à des formations ou logements"
        ]
      },
      {
        id: 5,
        title: "Réseau des Référents Ambition",
        objective: "Offrir à chaque citoyen engagé un suivi humain et bienveillant, capable de l'aider à évoluer sans jugement.",
        details: [
          "10 000 référents formés",
          "Ratio : 1 pour 300 bénéficiaires",
          "Mission : accompagnement, suivi, orientation, validation des parcours"
        ],
        cost: "400 millions €/an",
        financing: "Redéploiement partiel de Pôle Emploi + FSE+"
      }
    ],
    conclusion: "Nous proposons une nouvelle vision du travail : moins statique et plus évolutive, moins stigmatisante et plus humaine, moins centrée sur le contrat et plus ouverte à la contribution. Nous transformons l'idée même d'utilité sociale et proposons un État qui reconnaît, soutient et encourage, plutôt qu'un État qui juge, classe et abandonne."
  },
  {
    id: 2,
    title: "Justice pénale & sociale",
    subtitle: "Équité et réinsertion au cœur du système",
    description: "Notre démocratie a besoin d'un nouveau souffle pour retrouver la confiance des citoyens.",
    measures: [
      "Reconnaissance du vote blanc",
      "Référendum d'initiative citoyenne",
      "Limitation du cumul des mandats dans le temps"
    ],
    quotes: [
      "Être jugé selon ses actes, puni selon son monde, réinséré selon son potentiel."
    ]
  },
  {
    id: 3,
    title: "Santé & Épanouissement personnel",
    subtitle: "Un système de santé accessible et préventif",
    description: "Face à l'urgence climatique, nous proposons un plan ambitieux mais réaliste.",
    measures: [
      "Plan d'isolation des logements",
      "Développement massif des énergies renouvelables",
      "Taxe carbone progressive et sociale"
    ],
    quotes: [
      "Soigner, prévenir, élever, reconstruire. Chacun a droit de se sentir debout."
    ]
  },
  {
    id: 4,
    title: "Éducation & Formation de vie",
    subtitle: "Investir dans notre jeunesse",
    description: "L'éducation est la clé de l'émancipation individuelle et collective.",
    measures: [
      "Réduction des effectifs en classe à 20 élèves maximum",
      "Revalorisation du métier d'enseignant",
      "Gratuité réelle de l'école publique"
    ],
    quotes: [
      "Chaque élève a droit à l'ambition. Chaque parcours mérite le respect."
    ]
  },
  {
    id: 5,
    title: "Économie & Fiscalité juste",
    subtitle: "Un système économique au service de tous",
    description: "La santé est un droit fondamental qui doit être garanti à tous.",
    measures: [
      "Fin des déserts médicaux par l'installation de médecins salariés",
      "Réouverture de lits dans les hôpitaux",
      "Remboursement à 100% des soins essentiels"
    ],
    quotes: [
      "Reconnaître l'effort, valoriser la création, responsabiliser les grandes fortunes."
    ]
  },
  {
    id: 6,
    title: "Logement & Dignité de vie",
    subtitle: "Un logement digne pour tous",
    description: "Le travail doit être source d'épanouissement et non d'aliénation.",
    measures: [
      "Réduction du temps de travail à 32h",
      "Échelle des salaires de 1 à 12 dans les entreprises",
      "Revalorisation des métiers essentiels"
    ],
    quotes: [
      "Un toit, ce n'est pas un privilège. C'est une base."
    ]
  },
  {
    id: 7,
    title: "Environnement & Écologie humaine",
    subtitle: "Une transition écologique juste et efficace",
    description: "Le logement est un droit fondamental qui doit être garanti à tous.",
    measures: [
      "Construction de 200 000 logements sociaux par an",
      "Encadrement strict des loyers",
      "Plan de rénovation urbaine des quartiers prioritaires"
    ],
    quotes: [
      "Une planète saine, une société stable, un être humain valorisé."
    ]
  },
  {
    id: 8,
    title: "Immigration & Intégration par la contribution",
    subtitle: "Une politique migratoire humaine et réaliste",
    description: "La culture est l'âme d'une nation et doit être accessible à tous.",
    measures: [
      "Pass culture renforcé pour les jeunes",
      "Statut des intermittents préservé et renforcé",
      "Lutte contre la concentration des médias"
    ],
    quotes: [
      "Chaque personne qui veut contribuer doit pouvoir trouver sa place."
    ]
  },
  {
    id: 9,
    title: "Sécurité & Responsabilité",
    subtitle: "Protection sans brutalité",
    description: "La France doit retrouver sa voix sur la scène internationale.",
    measures: [
      "Réforme profonde des institutions européennes",
      "Diplomatie climatique ambitieuse",
      "Coopération renforcée avec les pays du Sud"
    ],
    quotes: [
      "Protéger sans brutaliser. Sanctionner sans casser. Créer de la valeur, même dans la sanction."
    ]
  },
  {
    id: 10,
    title: "Démocratie & Engagement citoyen",
    subtitle: "Redonner le pouvoir aux citoyens",
    description: "La sécurité est la première des libertés et doit être garantie à tous.",
    measures: [
      "Police de proximité rétablie",
      "Justice mieux dotée en moyens humains et financiers",
      "Prévention renforcée contre la délinquance"
    ],
    quotes: [
      "Investir dans la démocratie, c'est investir dans les citoyens."
    ]
  },
  {
    id: 11,
    title: "Europe & Souveraineté nationale",
    subtitle: "Une Europe des nations au service des peuples",
    description: "La famille, sous toutes ses formes, est le premier lieu de solidarité.",
    measures: [
      "Congé parental allongé et mieux rémunéré",
      "Services publics de la petite enfance renforcés",
      "Aide aux aidants familiaux"
    ],
    quotes: [
      "Être européen ne signifie pas s'effacer. La France reste la France."
    ]
  },
  {
    id: 12,
    title: "Éthique publique & transparence politique",
    subtitle: "Un pouvoir au service des citoyens",
    description: "Le numérique doit être un outil d'émancipation et non de surveillance.",
    measures: [
      "Souveraineté numérique européenne",
      "Droit à la déconnexion effectif",
      "Lutte contre la fracture numérique"
    ],
    quotes: [
      "Le pouvoir, c'est une mission. Pas un privilège."
    ]
  },
  {
    id: 13,
    title: "Justice de genre & équité réelle",
    subtitle: "Égalité des chances et des droits",
    description: "L'immigration doit être abordée avec humanité et réalisme.",
    measures: [
      "Procédures d'asile plus rapides et plus justes",
      "Parcours d'intégration renforcé",
      "Régularisation des travailleurs sans-papiers"
    ],
    quotes: [
      "L'égalité, ce n'est pas niveler. C'est rendre justice à l'effort."
    ]
  },
  {
    id: 14,
    title: "Culture, création & transmission",
    subtitle: "Une culture accessible et vivante",
    description: "Nos institutions doivent être plus transparentes et plus efficaces.",
    measures: [
      "VIe République avec une dose de proportionnelle",
      "Revalorisation des fonctionnaires",
      "Décentralisation approfondie"
    ],
    quotes: [
      "La culture, ce n'est pas un loisir. C'est une colonne vertébrale."
    ]
  }
];
