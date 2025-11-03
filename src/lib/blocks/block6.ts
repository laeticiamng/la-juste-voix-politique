
import { BlockData } from '../types';

export const block6: BlockData = {
  id: 6,
  title: "Logement & Dignité de vie",
  subtitle: "Un toit, ce n'est pas un privilège. C'est une base.",
  description: "Refuser que le logement soit vu comme une simple marchandise. Le considérer comme un socle de stabilité mentale, professionnelle et sociale. Réconcilier locataires et propriétaires, revaloriser l'investissement utile et sortir des logiques d'exclusion ou de spéculation incontrôlée.",
  measures: [
    "Construire 500 000 logements à loyers maîtrisés (sur 5 ans)",
    "Établir un encadrement équitable des loyers et un statut du propriétaire engagé",
    "Mettre en place un plan 'Ma Première Clé' pour l'accès à la propriété",
    "Créer un système de logement contre contribution locale",
    "Assurer la transparence et fluidité du logement social",
    "Ouvrir à l'investissement locatif populaire"
  ],
  quotes: [
    "Un toit, ce n'est pas un privilège. C'est une base.",
    "Les propriétaires ne sont pas le problème. Mais ils peuvent devenir la solution.",
    "Acheter ne doit pas être un luxe réservé aux héritiers.",
    "Tu habites ici ? Tu contribues ici.",
    "Un droit ne vaut rien s'il est inaccessible."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "Construction de 500 000 logements à loyers maîtrisés",
      objective: "Répondre à l'urgence du mal-logement sans créer de bulle spéculative",
      details: [
        "Un grand plan national piloté par l'État",
        "Partenariats publics/privés/associatifs",
        "Logements en location-pont (2 à 5 ans)",
        "Loyer plafonné à 25% du revenu médian local",
        "Zones prioritaires: grandes métropoles, villes moyennes et zones rurales sous-dotées",
        "",
        "**Financement détaillé (40 Md€ sur 5 ans) :**",
        "• CNJP (part logement 14%) : 24,5-35 Md€ sur 5 ans",
        "  → dont 500k logements : 18-24 Md€ sur 5 ans (3,6-4,8 Md€/an)",
        "  → dont Plan Habiter & Travailler (zéro SDF) : 4,5 Md€/an en phase 2",
        "• Collectivités territoriales : 7 Md€ sur 5 ans",
        "• Fonds européens FEDER : 8-10 Md€ sur 5 ans",
        "• Secteur privé (défiscalisation) : 2,5-4 Md€ sur 5 ans",
        "",
        "⚠️ Note : Le budget CNJP Logement (14% = 9,8-14 Md€/an) finance :",
        "• Construction 500k logements : 3,6-4,8 Md€/an (part CNJP)",
        "• Plan SDF Phase 1 (2026-2027) : 1,5 Md€/an",
        "• Plan SDF Phase 2 (2028+) : 4,5 Md€/an en régime de croisière",
        "• Total Phase 2 : 9,3 Md€/an (dans l'enveloppe 9,8-14 Md€/an) ✅"
      ],
      impact: "Diminution significative de la crise du logement dans les zones tendues et revitalisation des territoires délaissés",
      cost: "40 milliards € sur 5 ans (8 Md€/an)",
      financing: "CNJP 61-88% (14% de la CNJP) + Collectivités 18% + UE 20-25% + Privé 6-10%"
    },
    {
      id: 2,
      title: "Encadrement équitable des loyers & statut du propriétaire engagé",
      objective: "Sortir du faux débat 'proprio contre locataire'",
      details: [
        "Encadrement des loyers dans les 50 villes les plus tendues",
        "Barème modulé selon qualité réelle du bien",
        "Création du statut de 'propriétaire engagé'",
        "Abattement fiscal renforcé pour les propriétaires engagés",
        "Fonds de garantie contre les impayés",
        "Aide à la rénovation thermique"
      ],
      impact: "Apaisement des tensions locatives et amélioration du parc immobilier par incitation plutôt que contrainte"
    },
    {
      id: 3,
      title: "Plan 'Ma Première Clé'",
      objective: "Permettre aux jeunes actifs et classes moyennes d'acheter sans héritage ni fortune",
      details: [
        "Garantie d'État pour les primo-accédants",
        "Taux zéro sur 100 000 € jusqu'à 250 000 € d'achat",
        "Réduction des frais de notaire pour les moins de 35 ans",
        "Priorité aux zones rurales et villes moyennes"
      ],
      impact: "Démocratisation de l'accès à la propriété et rééquilibrage territorial"
    },
    {
      id: 4,
      title: "Logement contre contribution locale",
      objective: "Créer des logements solidaires avec utilité locale, notamment dans les communes sous tension de main-d'œuvre",
      details: [
        "Logement subventionné",
        "En échange: service citoyen de 5 à 15h/semaine",
        "Coordination: collectivités, bailleurs sociaux, structures d'insertion",
        "Public ciblé: jeunes, étudiants, parents isolés, personnes en reconversion"
      ],
      impact: "Création de lien social et réponse aux besoins locaux en services de proximité"
    },
    {
      id: 5,
      title: "Transparence et fluidité du logement social",
      objective: "Mettre fin à l'opacité et à la lenteur des démarches",
      details: [
        "Dossier unique national, suivi en temps réel via application publique",
        "Délais affichés par ville",
        "Audit annuel des attributions en open data",
        "Priorité: travailleurs précaires, familles monoparentales, jeunes en sortie d'étude ou institution"
      ],
      impact: "Réduction des délais d'attente et meilleure adéquation entre offre et demande"
    },
    {
      id: 6,
      title: "Ouverture à l'investissement locatif populaire",
      objective: "Permettre à chacun de devenir propriétaire engagé, même avec peu de moyens",
      details: [
        "Prêt à taux zéro pour achat locatif social (petites surfaces en zone tendue)",
        "Création d'un label 'investisseur responsable'",
        "Avantage fiscal pour les loyers modérés (20% sous le marché)"
      ],
      impact: "Démocratisation de l'investissement locatif et augmentation du parc privé à loyers modérés"
    }
  ],
  conclusion: "Proposer un système du logement qui protège sans punir, qui stabilise sans bloquer, qui valorise l'engagement, la responsabilité et la solidarité. Vouloir un pays où personne ne dort dehors, où l'achat n'est pas réservé aux héritiers, où les propriétaires sont partenaires, pas cibles ou profiteurs. Le logement n'est pas le problème, c'est la solution qui attend d'être déclenchée."
};
