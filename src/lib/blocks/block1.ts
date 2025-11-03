import { BlockData } from '../types';

export const block1: BlockData = {
  id: 1,
  title: "Travail & Valeur",
  subtitle: "Reconnaître toutes les formes de contribution",
  description: "Refuser l'idée que seule l'activité salariale mérite reconnaissance. Valoriser tout engagement productif, éducatif, social ou créatif. Reconnaître l'effort, l'intention de progression et l'utilité réelle, même sans contrat de travail formel.",
  measures: [
    "Prime de Progression Individuelle (PPI) - Soutenir financièrement les personnes en transition (formation, reconversion, création de projet utile)",
    "Statut de Contributeur Actif (SCA) - Reconnaître officiellement les engagements non rémunérés mais essentiels",
    "Réforme du RSA : De l'Aide à l'Autonomie - Transformer l'assistanat en accompagnement vers l'emploi avec des aides fléchées pour protéger les enfants",
    "Droit au cumul d'activités et de projets - Permettre le développement d'activités secondaires légales",
    "Compte de Valeur Créée (CVC) - Attribuer des points sociaux pour les actions utiles non salariées",
    "Réseau des Référents Ambition - Accompagner humainement et avec bienveillance chaque citoyen engagé"
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
      title: "Réforme du RSA : De l'Aide à l'Autonomie",
      objective: "Transformer la logique d'assistance en accompagnement vers l'emploi, en garantissant que chaque aide profite réellement aux enfants et encourage le retour à l'activité.",
      details: [
        "🔒 Principe : Personne sur le canapé, personne sur le carreau. On aide pour se relever, pas pour s'enliser.",
        "",
        "**Aides fléchées pour les enfants**",
        "• Toutes les aides destinées aux enfants sont fléchées : fournitures scolaires, vêtements, activités, alimentation, santé, livres",
        "• Impossible d'acheter alcool, tabac ou produits non-essentiels avec l'argent des enfants",
        "• Chaque euro destiné à un enfant sert à l'enfant",
        "",
        "**Contrat d'Engagement Emploi progressif**",
        "• Semaine 1 à 4 : 24 heures/semaine (mise en route + garde et transport réglés)",
        "• Semaine 5 à 12 : 30 heures/semaine (stabilisation du rythme)",
        "• Semaine 13+ : 35 heures/semaine (travail réel, activité réelle, dignité retrouvée)",
        "• Même droits, mêmes devoirs",
        "",
        "**Levée des blocages avant d'exiger**",
        "• Pass crèche ou cantine",
        "• Pass mobilité (transport, vélo, permis)",
        "• Accompagnement santé",
        "• Guichet unique administratif",
        "➡️ On supprime les excuses réelles puis on exige comme tout salarié",
        "",
        "**Bonus de maintien**",
        "• +300 € après 3 mois d'activité continue",
        "• +600 € après 6 mois d'activité continue",
        "➡️ On récompense l'effort, pas la déclaration d'intention",
        "",
        "**Sanctions progressives en cas de refus injustifié**",
        "• 1er refus : -30% RSA",
        "• 2e refus : -60% RSA",
        "• 3e refus : suspension",
        "➡️ La solidarité n'est pas un droit sans devoir"
      ],
      impact: "Pour la personne : Un travail, une formation, de vraies compétences, un avenir autonome. Pour les enfants : Meilleure santé, réussite scolaire, avenir sécurisé. Pour la société : Moins de pauvreté durable, plus de contribution, investissement qui rapporte.",
      cost: "Réallocation des aides existantes avec meilleur ciblage",
      financing: "Optimisation du RSA actuel, économies sur les aides détournées, augmentation de la base contributive"
    },
    {
      id: 6,
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
  conclusion: "Proposer une nouvelle vision du travail : moins statique et plus évolutive, moins stigmatisante et plus humaine, moins centrée sur le contrat et plus ouverte à la contribution. Transformer l'idée même d'utilité sociale et proposer un État qui reconnaît, soutient et encourage, plutôt qu'un État qui juge, classe et abandonne."
};
