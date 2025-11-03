
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
        "Tranche > 1 000 000 € : 55%"
      ],
      impact: "Protection des talents productifs, éviter la fuite des cerveaux, renforcement de la progressivité sans effet de seuil absurde"
    },
    {
      id: 2,
      title: "CNJP : Contribution Nationale de Justice Patrimoniale",
      objective: "Créer un impôt progressif sur les patrimoines financiers dormants",
      details: [
        "Concerne uniquement patrimoines financiers nets > 100 millions €",
        "Exclut résidence principale, biens d'usage, immobilier actif",
        "Barème progressif allant de 3% (100-250M€) jusqu'à 42% (>50Md€)"
      ],
      impact: "Environ 1 500 foyers fiscaux concernés, 50 à 80 milliards €/an mobilisables selon le patrimoine net total",
      financing: "Financement intégral de la revalorisation des métiers publics, plan santé mentale, logement, écologie et remboursement de la dette via le FSCRD"
    },
    {
      id: 3,
      title: "CER : Contribution Exceptionnelle de Rétablissement",
      objective: "Prélever une contribution unique de solidarité sur les très grandes fortunes",
      details: [
        "Taux : 10% du patrimoine net > 100M€",
        "Étalé sur 10 ans",
        "Exonération possible jusqu'à 50% si réinvestissement dans la réindustrialisation, logements sociaux ou emplois de transition"
      ],
      impact: "Participation historique à un redressement collectif"
    },
    {
      id: 4,
      title: "FSCRD : Fonds Souverain Citoyen de Réduction de la Dette",
      objective: "Utiliser les recettes exceptionnelles pour rembourser durablement la dette publique",
      details: [
        "Financement : 20% CNJP + 100% CER",
        "Gouvernance : citoyens tirés au sort + experts + Cour des comptes",
        "Transparence : plateforme publique, rapport annuel"
      ],
      impact: "Rembourser 25 à 35 milliards €/an pour ramener la dette publique à < 80% du PIB d'ici 15 ans"
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
      objective: "Maintenir l'âge de départ à la retraite sans compromettre l'équilibre financier",
      details: [
        "Maintien à 64 ans",
        "Cumul emploi/retraite encouragé",
        "Intégration des indépendants précaires",
        "Cotisation des personnes régularisées ou en contrat de contribution",
        "Fonds de garantie financé à 15% par la CNJP"
      ]
    }
  ],
  conclusion: "Proposer une économie qui protège les créateurs de valeur, qui ne punit pas l'innovation, qui responsabilise la rente silencieuse, et qui libère des ressources massives, sans austérité. Ne pas parler d'économie punitive. Parler d'économie équitable, ambitieuse et reconstruite."
};
