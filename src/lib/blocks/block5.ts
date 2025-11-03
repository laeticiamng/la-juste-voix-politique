
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
        "Barème progressif allant de 3% (100-250M€) jusqu'à 60% (>50Md€)",
        "",
        "**Affectation COMPLÈTE et HONNÊTE des recettes (90-130 Md€/an = 100%) :**",
        "",
        "• 25% → Revalorisation métiers publics (22,5-32,5 Md€/an)",
        "  → dont Enseignants +20% : 3 Md€/an",
        "  → dont Soignants hospitaliers +15% : 4-5 Md€/an",
        "  → dont Forces de l'ordre +10% : 1,5 Md€/an",
        "  → dont Autres métiers publics : 14-23 Md€/an (pompiers, juges, agents, travailleurs sociaux, etc.)",
        "",
        "• 20% → Retraites - Retour à 60 ans (18-26 Md€/an)",
        "  → Système mixte 50% répartition + 50% capitalisation sociale",
        "  → Pension garantie 60% du salaire net à vie",
        "",
        "• 15% → FSCRD - Remboursement dette (13,5-19,5 Md€/an CNJP + 5-6 Md€/an CER = 18,5-25,5 Md€/an)",
        "",
        "• 11% → Logement + Plan zéro SDF (9,9-14,3 Md€/an)",
        "  → 500 000 logements à loyers maîtrisés : 3,6-4,8 Md€/an",
        "  → Plan Habiter & Travailler (zéro SDF) : 4,5-6 Md€/an",
        "  → Autres mesures logement : 1,8-3,5 Md€/an",
        "",
        "• 8% → Transition écologique (7,2-10,4 Md€/an)",
        "  → Rénovation 2,5 Md€ + Mobilité 1,5 Md€ + Transports 1,2 Md€ + Emplois verts 1,5 Md€ + Divers 0,5 Md€",
        "",
        "• 5% → Éducation hors salaires (4,5-6,5 Md€/an)",
        "  → Référents Projet & Ambition : 0,8 Md€",
        "  → Pass formation libre : 1,2 Md€",
        "  → Module Ouverture & Tolérance : 0,3 Md€",
        "  → Classes à taille humaine : 2,2 Md€",
        "",
        "• 4% → Santé mentale + santé mobile (3,6-5,2 Md€/an)",
        "  → Crédit santé mentale universel : 1,8 Md€",
        "  → Prévention active : 0,5 Md€",
        "  → Santé mobile & numérique : 1,3-3,0 Md€",
        "",
        "• 4% → Démocratie participative (3,6-5,2 Md€/an)",
        "  → Budget citoyen national : 2 Md€",
        "  → Service civique universel valorisé : 1,4 Md€",
        "  → Référendum citoyen renforcé : 0,2 Md€",
        "",
        "• 3% → RSA réformé - Accompagnement emploi (2,7-3,9 Md€/an)",
        "  → Pass mobilité, crèche, formation inclus",
        "  → Référents Ambition emploi : 0,4 Md€",
        "",
        "• 2% → Immigration & Intégration (1,8-2,6 Md€/an)",
        "  → Contrat d'intégration par contribution",
        "  → Statut Contributeur Résident",
        "",
        "• 2% → Sécurité & Prévention (1,8-2,6 Md€/an)",
        "  → Binômes éducatif-médiateur collèges : 0,56 Md€",
        "  → Maisons de Justice de proximité : 0,8 Md€",
        "  → Formations police, caméras : 0,44-1,24 Md€",
        "",
        "• 1% → Justice sociale & Contrôle citoyen (0,9-1,3 Md€/an)",
        "  → Observatoire Justice Sociale : 0,02 Md€",
        "  → Portail Ma Justice + audits équité : 0,88-1,28 Md€"
      ],
      impact: "Environ 1 500 foyers fiscaux concernés, 90 à 130 milliards €/an mobilisables selon le patrimoine net total (taux max 60%)",
      financing: "Financement INTÉGRAL de TOUTES les réformes via cette contribution des très grandes fortunes"
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
        "Financement : 15% CNJP (13,5-19,5 Md€/an) + 100% CER (5-6 Md€/an)",
        "Total : 18,5 à 25,5 Md€/an affectés au remboursement de la dette",
        "Gouvernance : citoyens tirés au sort + experts + Cour des comptes",
        "Transparence : plateforme publique, rapport annuel"
      ],
      impact: "Rembourser 18,5 à 25,5 milliards €/an pour ramener la dette publique de ~110% à < 80% du PIB d'ici 15-20 ans"
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
        "Financement : 20% de la CNJP (18-26 Md€/an)"
      ],
      impact: "Système des retraites juste et durable, reconnaissance de l'espérance de vie en bonne santé, sécurité pour tous",
      cost: "18-26 milliards €/an",
      financing: "20% de la CNJP (90-130 Md€/an)"
    }
  ],
  conclusion: "Proposer une économie qui protège les créateurs de valeur, qui ne punit pas l'innovation, qui responsabilise la rente silencieuse, et qui libère des ressources massives, sans austérité. Ne pas parler d'économie punitive. Parler d'économie équitable, ambitieuse et reconstruite."
};
