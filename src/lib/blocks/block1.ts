
import { BlockData } from '../types';

export const block1: BlockData = {
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
};
