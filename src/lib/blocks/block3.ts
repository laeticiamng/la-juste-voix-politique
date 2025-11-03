import { BlockData } from '../types';

export const block3: BlockData = {
  id: 3,
  title: "Santé & Épanouissement personnel",
  subtitle: "Un système de santé accessible et préventif",
  description: "Refuser une vision de la santé centrée uniquement sur le corps ou l'hôpital. Proposer une santé globale, humaine, accessible, préventive, qui prend en compte la souffrance mentale, la solitude, la précarité, l'usure. Assumer que la santé publique ne peut pas fonctionner sans lien social, ni sans souffle collectif.",
  measures: [
    "Crédit Santé Mentale Universel - Offrir à tous les Français un accès réel à un soutien psychologique",
    "Prévention Active & Populaire - Faire de la prévention une présence joyeuse, visible, accessible partout",
    "Plan \"Habiter & Travailler\" — Objectif : zéro SDF en 2028",
    "Santé mobile & numérique de proximité - Répondre aux déserts médicaux et aux exclusions numériques",
    "Inclusion par le travail pour tous (y compris sans-papiers)"
  ],
  quotes: [
    "Soigner, prévenir, élever, reconstruire. Chacun a droit de se sentir debout."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "Crédit Santé Mentale Universel",
      objective: "Offrir à tous les Français un accès réel à un soutien psychologique, sans prescription préalable ni délai dissuasif.",
      details: [
        "10 consultations gratuites par an",
        "Chez un professionnel agréé (psychologue, psychothérapeute)",
        "Sans ordonnance",
        "Sans avance de frais"
      ],
      cost: "1,8 milliard €/an",
      impact: "1 Français sur 4 souffre de troubles anxieux, 60% des arrêts maladie longue durée sont d'origine psychique"
    },
    {
      id: 2,
      title: "Prévention Active & Populaire",
      objective: "Faire de la prévention une présence joyeuse, visible, accessible partout.",
      details: [
        "Dépistages gratuits dans les marchés, stades, festivals, écoles, entreprises",
        "Distribution de kits de bien-être",
        "Ateliers ludiques, coachs de santé",
        "Intégration aux fêtes nationales et locales"
      ],
      impact: "La prévention, ce n'est pas une injonction médicale. C'est un réflexe collectif, une fête du vivant."
    },
    {
      id: 3,
      title: "Plan \"Habiter & Travailler\" — Objectif : zéro SDF en 2028",
      objective: "Sortir les personnes sans domicile de l'errance par le travail encadré et l'hébergement digne.",
      details: [
        "Structures mixtes logement + mission utile (recycleries, cantines, agriculture partagée…)",
        "Contrat de travail temporaire avec hébergement inclus (3 à 12 mois)",
        "Accompagnement humain vers un projet de vie stable"
      ],
      impact: "Ce n'est ni de l'assistanat, ni du travail forcé, c'est un contrat d'engagement réciproque"
    },
    {
      id: 4,
      title: "Santé mobile & numérique de proximité",
      objective: "Répondre aux déserts médicaux et aux exclusions numériques, sans attendre que l'infrastructure suive.",
      details: [
        "Camions de santé dans les zones sous-dotées",
        "Bornes de téléconsultation dans les mairies",
        "Maisons de santé ouvertes tard le soir",
        "Médiateurs numériques pour les personnes âgées ou isolées"
      ],
      impact: "On ne soigne pas en fermant les services. On soigne en ouvrant des voies d'accès."
    },
    {
      id: 5,
      title: "Inclusion par le travail pour tous (y compris sans-papiers)",
      objective: "Permettre à toute personne présente sur le territoire de contribuer légalement, dès qu'elle le peut.",
      details: [
        "Un contrat temporaire d'insertion avec droit au travail encadré",
        "Un parcours de régularisation par l'effort réel et la valeur créée",
        "Des droits ouverts si l'engagement est prouvé"
      ],
      impact: "Travailler pour soi, c'est déjà travailler pour la France."
    }
  ],
  conclusion: "Proposer une santé qui ne s'arrête pas à l'hôpital, qui commence dans le souffle, le lien, la reconnaissance, qui soigne le corps, mais aussi l'élan intérieur. Proposer une vision du travail comme un moteur d'estime de soi, comme un outil de reconstruction, comme un socle de réintégration. Ne pas soigner les symptômes. Soigner la société."
};
