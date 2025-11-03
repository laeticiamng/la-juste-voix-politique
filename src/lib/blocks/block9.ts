
import { BlockData } from '../types';

export const block9: BlockData = {
  id: 9,
  title: "Sécurité & Responsabilité",
  subtitle: "Protection sans brutalité",
  description: "Refuser une sécurité basée sur la peur ou utilisée comme un outil électoral, mais aussi le laxisme qui laisse les citoyens seuls face à la violence. Proposer une sécurité juste, ferme, préventive, pensée comme un investissement collectif, connectée au terrain, où chaque sanction produit un effet utile, pas un effet d'écrasement.",
  measures: [
    "Renouer la confiance entre population et police",
    "Mettre en place des sanctions utiles et immédiates",
    "Renforcer la prévention dès le collège",
    "Développer des sanctions éducatives pour les mineurs",
    "Établir un pacte civique local",
    "Créer une justice de proximité visible, rapide et humaine"
  ],
  quotes: [
    "Protéger sans brutaliser. Sanctionner sans casser. Créer de la valeur, même dans la sanction.",
    "L'uniforme doit incarner la protection, pas la menace.",
    "Une sanction visible, immédiate, utile. C'est ça, la crédibilité judiciaire.",
    "La prévention, ce n'est pas un discours. C'est une présence active.",
    "Tu ne veux pas punir un jeune. Tu veux qu'il puisse se réparer.",
    "Tu ne subis pas la République. Tu y participes.",
    "Le respect est une responsabilité partagée. Pas une autorité à sens unique.",
    "Une justice lente n'est plus crédible. Une justice absente est un vide explosif."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "Renouer la confiance entre population et police",
      objective: "Restaurer un lien de proximité, de respect mutuel et de légitimité",
      details: [
        "Formation humaine renforcée (médiation, désescalade, gestion du stress)",
        "Création de brigades de lien (quartiers, écoles, événements locaux)",
        "Organisation de dialogues réguliers citoyens–police (collèges, quartiers, mairies)"
      ],
      impact: "Transformation de la perception des forces de l'ordre en figure de protection plutôt que de menace"
    },
    {
      id: 2,
      title: "Sanctions utiles et immédiates",
      objective: "Remplacer les sanctions sans effet par des peines à forte valeur sociale",
      details: [
        "Travaux d'intérêt collectif rapides",
        "Stage de responsabilisation encadré",
        "Service civique pour récidivistes non violents",
        "Exécution sous 15 jours",
        "Encadrement par les Maisons de Justice de Proximité"
      ],
      impact: "Renforcement de la crédibilité judiciaire par des sanctions visibles et utiles"
    },
    {
      id: 3,
      title: "Prévention dès le collège",
      objective: "Intervenir avant que le lien se brise",
      details: [
        "Binôme éducatif-médiateur dans chaque établissement (1 binôme pour 500 élèves)",
        "Stages de responsabilisation dès la 5e",
        "Activités éducatives obligatoires (soirées, week-ends)",
        "Soutien parental ou responsabilisation encadrée en cas de démission éducative",
        "",
        "**Chiffrage :**",
        "• ~7 000 collèges en France",
        "• 1 binôme par établissement moyen = 7 000 binômes",
        "• Coût par binôme : ~80 000€/an (salaires + formation)",
        "• Total : 560 millions €/an"
      ],
      impact: "Présence active et intervention précoce pour éviter les dérives",
      cost: "560 millions €/an",
      financing: "Budget Éducation nationale (40%) + Budget Intérieur/Prévention (40%) + Collectivités (20%)"
    },
    {
      id: 4,
      title: "Sanctions éducatives pour les mineurs",
      objective: "Sortir les jeunes de la spirale sanction–exclusion–récidive",
      details: [
        "Mission de contribution locale (aide sociale, rénovation, accompagnement de personnes âgées)",
        "Encadrement par référent éducatif",
        "Délivrance d'un certificat de réparation citoyenne"
      ],
      impact: "Opportunité de réparation et de réinsertion plutôt que simple punition"
    },
    {
      id: 5,
      title: "Pacte civique local",
      objective: "Faire de chaque jeune un acteur de la stabilité locale",
      details: [
        "Signature en fin de collège entre élève, famille et collectivité",
        "Engagements citoyens clairs (respect, service local, implication)",
        "Suivi éducatif renforcé en cas de rupture"
      ],
      impact: "Transformation des jeunes en participants actifs à la République plutôt qu'en sujets passifs"
    },
    {
      id: 6,
      title: "Respect mutuel : police & citoyens",
      objective: "Garantir l'exemplarité réciproque",
      details: [
        "Caméras-piétons obligatoires dans les zones sensibles",
        "Code local de respect mutuel dans chaque commune",
        "Formation continue sur les discriminations, les tensions et l'éthique de l'intervention"
      ],
      impact: "Établissement d'un respect mutuel basé sur la responsabilité partagée"
    },
    {
      id: 7,
      title: "Justice de proximité : visible, rapide, humaine",
      objective: "Rendre la justice présente dans les territoires et dans le quotidien",
      details: [
        "Déploiement des Maisons de Justice de Proximité dans toutes les villes > 30 000 habitants",
        "Délits du quotidien jugés localement",
        "Priorité à la médiation, à la réparation, à la pédagogie"
      ],
      impact: "Justice crédible et accessible qui évite les vides institutionnels"
    }
  ],
  conclusion: "Proposer une sécurité présente sans brutalité, visible sans domination, ferme sans humiliation, et réparatrice plutôt que destructrice. Créer des sanctions utiles, des jeunes citoyens actifs, et une police respectée car respectable. Ne pas vouloir une sécurité spectacle, mais une sécurité qui répare la société sans jamais l'abîmer."
};
