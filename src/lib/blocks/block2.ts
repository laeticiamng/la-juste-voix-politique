import { BlockData } from '../types';

export const block2: BlockData = {
  id: 2,
  title: "Justice pénale & sociale",
  subtitle: "Équité et réinsertion au cœur du système",
  description: "Refuser l'illusion d'égalité qui traite de manière identique des personnes inégalement armées dans la vie. Proposer une justice proportionnée, réparatrice, humanisée, qui ne cède ni au laxisme, ni à la brutalité, qui répare plutôt que de casser, qui prépare l'avenir au lieu de figer le passé.",
  measures: [
    "La Peine à Impact Équivalent (PIE) - Adapter la peine à la réalité de vie de la personne condamnée, pour qu'elle soit juste dans ses effets",
    "Observatoire Citoyen de la Justice Sociale - Évaluer la justice non seulement dans les textes, mais dans ses effets concrets sur les citoyens",
    "Généralisation des Peines Réparatrices - Utiliser la peine comme un levier de réparation sociale, pas d'exclusion systématique",
    "Portail numérique \"Ma Justice\" - Offrir aux citoyens un accès clair, personnalisé et humanisé à leur parcours judiciaire",
    "Prévention dès le collège - Ne pas attendre que le conflit éclate pour intervenir",
    "Justice de proximité : visible, rapide, utile - Ramener la justice dans les territoires, dans le quotidien, dans le concret"
  ],
  quotes: [
    "Être jugé selon ses actes, puni selon son monde, réinséré selon son potentiel."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "La Peine à Impact Équivalent (PIE)",
      objective: "Adapter la peine à la réalité de vie de la personne condamnée, pour qu'elle soit juste dans ses effets.",
      details: [
        "La peine \"classique\" (prison, TIG, amende) reste inchangée",
        "Une composante ajustée au niveau de vie est ajoutée",
        "Exemple : un sursis dans une villa ≠ un sursis en chambre d'hôtel précaire",
        "Limitation d'usage de certaines zones (condamné privilégié)",
        "Obligation de mentorat utile (dirigeants, fonctionnaires)",
        "Amende symbolique publique pour délits d'image"
      ],
      impact: "Source d'inspiration : Les systèmes scandinaves d'amende proportionnelle (Finlande, Allemagne, Suisse)"
    },
    {
      id: 2,
      title: "Observatoire Citoyen de la Justice Sociale",
      objective: "Évaluer la justice non seulement dans les textes, mais dans ses effets concrets sur les citoyens.",
      details: [
        "Composition : Magistrats, Citoyens tirés au sort, Sociologues, avocats, représentants associatifs",
        "Missions : Publier un rapport annuel sur les inégalités d'application, les délais d'accès au droit, l'efficacité des peines, la médiatisation des condamnations"
      ],
      cost: "20 millions €/an",
      financing: "Comparable à la HALDE ou au Défenseur des droits"
    },
    {
      id: 3,
      title: "Généralisation des Peines Réparatrices",
      objective: "Utiliser la peine comme un levier de réparation sociale, pas d'exclusion systématique.",
      details: [
        "Mentorat obligatoire pour les condamnés ayant des compétences utiles",
        "Peines utiles à la collectivité en lien avec le délit",
        "Violence = aide à des victimes",
        "Dégradation = rénovation d'espace public",
        "Implication éducative : encadrement de jeunes, médiation locale",
        "Structure prévue : Catalogue national de missions, Coordination avec les collectivités et les associations"
      ]
    },
    {
      id: 4,
      title: "Portail numérique \"Ma Justice\"",
      objective: "Offrir aux citoyens un accès clair, personnalisé et humanisé à leur parcours judiciaire.",
      details: [
        "Fonctionnalités : Espace personnel pour suivre un dossier, connaître les dates d'audience, déposer une plainte assistée, modèles de recours / lettres, assistant juridique automatisé (non décisionnel)",
        "Accessibilité : Application mobile + bornes en mairie / France Services, Médiateurs numériques pour les publics fragiles"
      ],
      cost: "100 millions €",
      financing: "Équivalent au développement du CPF"
    },
    {
      id: 5,
      title: "Prévention dès le collège",
      objective: "Ne pas attendre que le conflit éclate pour intervenir.",
      details: [
        "Binômes éducateur-médiateur dans chaque collège",
        "Stages de responsabilisation dès la 5e",
        "Activités éducatives obligatoires en zones sensibles",
        "Soutien parental ou \"responsabilisation parentale\""
      ]
    },
    {
      id: 6,
      title: "Justice de proximité : visible, rapide, utile",
      objective: "Ramener la justice dans les territoires, dans le quotidien, dans le concret.",
      details: [
        "Création de Maisons de Justice de Proximité dans toutes les communes > 30 000 hab",
        "Délits du quotidien jugés rapidement",
        "Médiation, compensation, pédagogie priorisées"
      ]
    }
  ],
  conclusion: "Proposer une justice qui punit sans briser, qui responsabilise sans humilier, qui protège sans oppresser, qui éduque sans infantiliser. Ne pas parler de justice abstraite. Proposer une justice à hauteur de terrain, à hauteur d'humain, à hauteur de République."
};
