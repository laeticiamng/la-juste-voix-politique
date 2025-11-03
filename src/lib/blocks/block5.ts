
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
        "Barème progressif allant de 3% (100-250M€) jusqu'à 50% (>50Md€)",
        "",
        "**Affectation des recettes (70-100 Md€/an) :**",
        "• 30% → Revalorisation métiers publics - enseignants, soignants, forces de l'ordre (21-30 Md€/an)",
        "  → dont Enseignants +20% : 3 Md€/an (inclus)",
        "  → dont Soignants hospitaliers +15% : 4-5 Md€/an (inclus)",
        "  → dont Forces de l'ordre +10% : 1,5 Md€/an (inclus)",
        "  → dont Autres métiers publics essentiels : 12,5-20,5 Md€/an (pompiers, juges, agents territoriaux, travailleurs sociaux, etc.)",
        "  → Détail complet des revalorisations par métier disponible sur la page Revalorisations",
        "• 25% → Retraites - Retour à 60 ans (17,5-25 Md€/an)",
        "  → Inclut : financement 4 années supplémentaires + pension garantie 60% + système mixte répartition/capitalisation",
        "• 20% → FSCRD - Remboursement de la dette (14-20 Md€/an) + CER (5-6 Md€/an) = 19-26 Md€/an",
        "• 14% → Logement social et lutte contre le mal-logement (9,8-14 Md€/an)",
        "  → Inclut : 500 000 logements à loyers maîtrisés + Plan Habiter & Travailler (zéro SDF)",
        "• 8% → Transition écologique (5,6-8 Md€/an)",
        "  → Détail : Rénovation 2Md€ + Mobilité 1Md€ + Transports publics 0,8Md€ + Emplois verts 1,5Md€ + Divers 0,3Md€",
        "• 3% → Santé mentale et prévention (2,1-3 Md€/an)"
      ],
      impact: "Environ 1 500 foyers fiscaux concernés, 70 à 100 milliards €/an mobilisables selon le patrimoine net total",
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
        "Financement : 20% CNJP (14-20 Md€/an) + 100% CER (5-6 Md€/an)",
        "Total : 19 à 26 Md€/an affectés au remboursement de la dette",
        "Gouvernance : citoyens tirés au sort + experts + Cour des comptes",
        "Transparence : plateforme publique, rapport annuel"
      ],
      impact: "Rembourser 19 à 26 milliards €/an pour ramener la dette publique de ~110% à < 80% du PIB d'ici 15-20 ans"
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
      title: "Retraites : retour à 60 ans avec système mixte",
      objective: "Rétablir l'âge de départ à la retraite à 60 ans avec un système durable et juste",
      details: [
        "Retour à 60 ans pour tous",
        "Système mixte : 50% répartition + 50% capitalisation sociale",
        "Pension garantie à 60% du salaire net de référence à vie",
        "Revalorisation annuelle indexée sur l'inflation",
        "Plafonnement équitable des très hautes pensions",
        "Compte retraite personnel garanti par l'État",
        "Financement : 25% de la CNJP (17,5-25 Md€/an)"
      ],
      impact: "Système des retraites juste et durable, reconnaissance de l'espérance de vie en bonne santé, sécurité pour tous",
      cost: "17,5-25 milliards €/an",
      financing: "25% de la CNJP (70-100 Md€/an)"
    }
  ],
  conclusion: "Proposer une économie qui protège les créateurs de valeur, qui ne punit pas l'innovation, qui responsabilise la rente silencieuse, et qui libère des ressources massives, sans austérité. Ne pas parler d'économie punitive. Parler d'économie équitable, ambitieuse et reconstruite."
};
