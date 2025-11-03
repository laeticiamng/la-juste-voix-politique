
import { BlockData, DetailedMeasure } from '../types';

export const block5: BlockData = {
  id: 5,
  title: "Économie & Fiscalité juste",
  subtitle: "Un système économique au service de tous",
  description: "Refuser une fiscalité qui punit le travail mais épargne la rente. Proposer une fiscalité du mérite, de la création utile, de la contribution réelle. Ne pas vouloir \"faire payer les riches\", mais responsabiliser ceux qui accumulent sans agir, et soulager ceux qui construisent sans relâche.",
  measures: [
    "Nouvelle grille d'impôt sur le revenu : fiscalité du mérite",
    "CNJP : Contribution Nationale de Justice Patrimoniale",
    "CER : Contribution Exceptionnelle de Rétablissement",
    "FSCRD : Fonds Souverain Citoyen de Réduction de la Dette",
    "Anticipation des départs fiscaux",
    "Soutien aux PME et à l'emploi des seniors",
    "Retraites : sauvegarde par élargissement de la base contributive"
  ],
  quotes: [
    "Reconnaître l'effort, valoriser la création, responsabiliser les grandes fortunes.",
    "La dette ne doit pas être un prétexte pour bloquer l'action. Elle doit devenir un levier maîtrisé, citoyen, transparent.",
    "Ceux qui quittent la France pour ne pas contribuer à sa reconstruction n'ont rien à y faire. Je préfère garder un médecin qu'un milliardaire planqué."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "Nouvelle grille d'impôt sur le revenu : fiscalité du mérite",
      objective: "Alléger la charge sur les classes moyennes supérieures qui produisent leur revenu",
      details: [
        "Tranche jusqu'à 15 000 € : 0%",
        "Tranche 15 001 - 30 000 € : 10%",
        "Tranche 30 001 - 40 000 € : 17%",
        "Tranche 40 001 - 50 000 € : 22%",
        "Tranche 50 001 - 85 000 € : 30%",
        "Tranche 85 001 - 150 000 € : 34%",
        "Tranche 150 001 - 200 000 € : 38%",
        "Tranche 200 001 - 250 000 € : 41%",
        "Tranche 250 001 - 500 000 € : 45%",
        "Tranche 500 001 - 1 000 000 € : 50%",
        "Tranche > 1 000 000 € : 55%",
        "",
        "**Impact budgétaire :**",
        "Baisse d'impôt pour classes moyennes/moyennes-sup : -3 à -5 Md€/an",
        "Hausse sur hauts revenus (>200k€) : +2 à +3 Md€/an",
        "Manque à gagner net : -1 à -2 Md€/an (compensé par CNJP et lutte contre fraude fiscale)"
      ],
      impact: "Protection des talents productifs, éviter la fuite des cerveaux, renforcement de la progressivité sans effet de seuil absurde",
      cost: "Manque à gagner net : 1-2 Md€/an",
      financing: "Compensé par la CNJP et le renforcement de la lutte contre la fraude fiscale (+3-5 Md€/an)"
    },
    {
      id: 2,
      title: "CNJP : Contribution Nationale de Justice Patrimoniale",
      objective: "Créer un impôt progressif sur les patrimoines financiers dormants",
      details: [
        "Concerne uniquement patrimoines financiers nets > 100 millions €",
        "Exclut résidence principale, biens d'usage, immobilier actif",
        "Barème progressif allant de 3% (100-250M€) jusqu'à 42% (>50Md€)",
        "",
        "**Affectation des recettes (50-80 Md€/an) :**",
        "• 35% → Revalorisation métiers publics - enseignants, soignants, forces de l'ordre (17,5-28 Md€/an)",
        "  → dont Enseignants +20% : 3 Md€/an (inclus)",
        "  → dont Soignants hospitaliers +15% : 4-5 Md€/an (inclus)",
        "  → dont Forces de l'ordre +10% : 1,5 Md€/an (inclus)",
        "  → dont Autres métiers publics essentiels : 9-18,5 Md€/an (pompiers, juges, agents territoriaux, travailleurs sociaux, etc.)",
        "  → Détail complet des revalorisations par métier disponible sur la page Revalorisations",
        "• 25% → FSCRD - Remboursement de la dette (12,5-20 Md€/an) + CER (5-6 Md€/an) = 17,5-26 Md€/an",
        "• 15% → Fonds de garantie des retraites (7,5-12 Md€/an)",
        "• 13% → Logement social et lutte contre le mal-logement (6,5-10,4 Md€/an)",
        "• 3% → Santé mentale et prévention (1,5-2,4 Md€/an)",
        "• 9% → Transition écologique (4,5-7,2 Md€/an)",
        "  → Détail : Rénovation 2Md€ + Mobilité 0,8Md€ + Emplois verts 1,5Md€ + Contrats territoriaux 0,3Md€ + Écopass 0,1Md€"
      ],
      impact: "Environ 1 500 foyers fiscaux concernés, 50 à 80 milliards €/an mobilisables selon le patrimoine net total",
      financing: "Financement intégral via cette contribution des très grandes fortunes"
    },
    {
      id: 3,
      title: "CER : Contribution Exceptionnelle de Rétablissement",
      objective: "Prélever une contribution unique de solidarité sur les très grandes fortunes",
      details: [
        "Taux : 10% du patrimoine net > 100M€",
        "Étalé sur 10 ans (donc 1% par an)",
        "Exonération possible jusqu'à 50% si réinvestissement dans la réindustrialisation, logements sociaux ou emplois de transition",
        "",
        "**Estimation :**",
        "• ~1 500 foyers concernés",
        "• Patrimoine moyen estimé : 500M€ par foyer",
        "• Total base taxable : ~750 Md€",
        "• Recette théorique : 75 Md€ étalés sur 10 ans",
        "• Soit ~7,5 Md€/an après déductions et exonérations partielles : ~5-6 Md€/an effectifs"
      ],
      impact: "Participation historique à un redressement collectif, 100% affecté au FSCRD",
      financing: "Contribution exceptionnelle sur 10 ans"
    },
    {
      id: 4,
      title: "FSCRD : Fonds Souverain Citoyen de Réduction de la Dette",
      objective: "Utiliser les recettes exceptionnelles pour rembourser durablement la dette publique",
      details: [
        "Financement : 25% CNJP (12,5-20 Md€/an) + 100% CER (5-6 Md€/an)",
        "Total : 17,5 à 26 Md€/an affectés au remboursement de la dette",
        "Gouvernance : citoyens tirés au sort + experts + Cour des comptes",
        "Transparence : plateforme publique, rapport annuel"
      ],
      impact: "Rembourser 17,5 à 26 milliards €/an pour ramener la dette publique de ~110% à < 80% du PIB d'ici 15-20 ans"
    },
    {
      id: 5,
      title: "Anticipation des départs fiscaux",
      objective: "Éviter toute évasion massive des grandes fortunes",
      details: [
        "Exit tax renforcée",
        "Imposition sur les capitaux détenus en France même en cas de départ",
        "Coopération avec la Suisse, le Luxembourg, Monaco",
        "Suspension d'accès aux marchés publics pour les exilés fiscaux"
      ]
    },
    {
      id: 6,
      title: "Soutien aux PME et à l'emploi des seniors",
      objective: "Soutenir les petites et moyennes entreprises et l'emploi des seniors",
      details: [
        "Taux d'IS maintenu à 25% pour les entreprises < 50M€ de CA",
        "Exonération sur les 100 000 premiers € de bénéfices réinvestis",
        "Contrat Senior Progressif à mi-temps sécurisé",
        "Exonération de charges patronales la première année",
        "Crédit d'impôt si transmission ou mentorat"
      ]
    },
    {
      id: 7,
      title: "Retraites : sauvegarde par élargissement de la base contributive",
      objective: "Maintenir l'âge de départ à la retraite à 64 ans (statu quo actuel) sans compromettre l'équilibre financier",
      details: [
        "Maintien à 64 ans (réforme Macron conservée)",
        "Cumul emploi/retraite encouragé pour ceux qui le souhaitent",
        "Intégration des indépendants précaires dans le système",
        "Cotisation des personnes régularisées ou en contrat de contribution",
        "Fonds de garantie financé à 15% par la CNJP (7,5-12 Md€/an)"
      ],
      impact: "Système des retraites sécurisé sans nouvel allongement de l'âge légal"
    }
  ],
  conclusion: "Proposer une économie qui protège les créateurs de valeur, qui ne punit pas l'innovation, qui responsabilise la rente silencieuse, et qui libère des ressources massives, sans austérité. Ne pas parler d'économie punitive. Parler d'économie équitable, ambitieuse et reconstruite."
};
