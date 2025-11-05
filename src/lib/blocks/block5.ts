
import { BlockData, DetailedMeasure } from '../types';

export const block5: BlockData = {
  id: 5,
  title: "Économie & Fiscalité juste",
  subtitle: "Un système économique au service de tous",
  description: "Refuser une fiscalité qui punit le travail mais épargne la rente. Proposer une fiscalité du mérite, de la création utile, de la contribution réelle. Ne pas vouloir \"faire payer les riches\", mais responsabiliser ceux qui accumulent sans agir, et soulager ceux qui construisent sans relâche.",
  measures: [
    "Nouvelle grille d'impôt sur le revenu : fiscalité du mérite (IR 55-65% ultra-hauts revenus)",
    "CER : Contribution Exceptionnelle de Rétablissement (étalée sur 10 ans)",
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
        "Manque à gagner net : -1 à -2 Md€/an (compensé par IR ultra-hauts revenus et lutte contre fraude fiscale)"
      ],
      impact: "Protection des talents productifs, éviter la fuite des cerveaux, renforcement de la progressivité sans effet de seuil absurde",
      cost: "Manque à gagner net : 1-2 Md€/an",
      financing: "Compensé par l'IR ultra-hauts revenus et le renforcement de la lutte contre la fraude fiscale (+3-5 Md€/an)"
    },
    {
      id: 2,
      title: "IR Ultra-Hauts Revenus : Impôt Renforcé 55-65%",
      objective: "Créer une fiscalité équitable sur les revenus exceptionnels",
      details: [
        "Nouveaux taux marginaux sur revenus > 1M€/an :",
        "• 1M€-2M€ : 55%",
        "• 2M€-5M€ : 60%",
        "• >5M€ : 65%",
        "",
        "**Recettes nettes : 24-37 Md€/an (après crédits d'impôt Bac+5 et Bac+10)**",
        "",
        "**Programme réduit et réaliste (30% des ambitions initiales) :**",
        "",
        "• **Priorité 1 - Revalorisation métiers publics : 8-10 Md€/an**",
        "  → +500€/mois pour enseignants, soignants, forces de l'ordre",
        "",
        "• **Priorité 2 - RSA réformé & insertion : 2,7-3,9 Md€/an**",
        "  → Accompagnement emploi, Pass mobilité, formation",
        "",
        "• **Priorité 3 - Logement social : 4-6 Md€/an**",
        "  → 200 000 logements à loyers maîtrisés/an (réduit de 500k)",
        "  → Plan Habiter & Travailler (zéro SDF Phase 1)",
        "",
        "• **Priorité 4 - Transition écologique ciblée : 3-5 Md€/an**",
        "  → Rénovation énergétique (priorité logements modestes)",
        "  → Mobilité douce et transports publics",
        "",
        "• **Priorité 5 - Éducation : 2-4 Md€/an**",
        "  → Référents Projet & Ambition : 0,8 Md€/an",
        "  → Pass formation libre : 1,2 Md€/an",
        "  → Module Ouverture & Tolérance : 0,3 Md€/an",
        "",
        "• **Priorité 6 - Santé mentale : 1,8 Md€/an**",
        "  → Crédit universel 10 séances/an remboursées",
        "",
        "• **Autres mesures prioritaires : 1,6-4,3 Md€/an**",
        "  → Immigration & Intégration, Sécurité & Prévention, Justice sociale",
        "",
        "**Total : 24-37 Md€/an → Budget équilibré avec surplus structurel**",
        "",
        "⚠️ **MESURES REPORTÉES à Phase 2** (croissance >3%/an nécessaire) :",
        "• Retraites à 60 ans : 18-26 Md€/an",
        "• Budget citoyen national : 2 Md€/an",
        "• Service civique universel valorisé : 1,4 Md€/an",
        "• Extension logement social (300k logements sup.) : 5-8 Md€/an"
      ],
      impact: "Environ 10 000 foyers fiscaux concernés (0,01% plus riches), financement viable et juridiquement solide",
      financing: "IR renforcé 55-65% sur ultra-hauts revenus + CER + Lutte fraude fiscale"
    },
    {
      id: 3,
      title: "CER : Contribution Exceptionnelle de Rétablissement",
      objective: "Contribution temporaire sur ultra-patrimoines pour compléter le financement",
      details: [
        "Taux : 10% du patrimoine net > 100M€",
        "Étalé sur 10 ans (donc 1% par an)",
        "Rendement : 5-6 Md€/an pendant 10 ans",
        "",
        "⚠️ **MESURE MAINTENUE** malgré l'abandon de la CNJP car :",
        "• Temporaire et limitée (10 ans maximum)",
        "• Taux modéré (1%/an) évitant la confiscation",
        "• Objectif légitime : équilibre budgétaire",
        "• Risque constitutionnel faible (vs CNJP à 60%)",
        "",
        "**Affectation :** Complète le budget IR ultra-hauts revenus",
        "**Clause de sortie :** Suspension si dette < 80% PIB ou si croissance > 3%/an pendant 3 ans"
      ],
      impact: "Complément temporaire au financement du programme (5-6 Md€/an)",
      financing: "Contribution exceptionnelle temporaire 10 ans"
    },
    {
      id: 4,
      title: "Anticipation et prévention des départs fiscaux - SÉCURISATION RENFORCÉE",
      objective: "Éviter toute évasion massive des grandes fortunes par un arsenal juridique et fiscal dissuasif",
      details: [
        "**Exit tax renforcée sur 15 ans** : taxation différée de 60% sur la plus-value latente au moment du départ",
        "**Imposition territoriale** : Tout patrimoine détenu en France (immobilier, entreprises, actifs financiers) reste taxable même après départ",
        "**Clause de retour fiscal** : Si retour en France dans les 10 ans, paiement rétroactif de l'IR avec intérêts",
        "**Gel des actifs** : Possibilité de bloquer les transferts massifs de capitaux (> 10M€) pendant 6 mois pour vérification fiscale",
        "**Coopération internationale obligatoire** : Accords bilatéraux avec Suisse, Luxembourg, Monaco, Belgique, UK pour partage automatique d'informations",
        "**Sanctions commerciales** : Interdiction d'accès aux marchés publics français et pénalités douanières pour les entreprises des exilés fiscaux",
        "**Publicité des départs** : Liste publique des exilés fiscaux (transparence et pression sociale)",
        "**Consolidation familiale** : Tout patrimoine détenu par le foyer fiscal + ascendants/descendants directs est consolidé",
        "**Clause anti-abus familiale** : Les donations < 5 ans avant l'entrée en vigueur sont réintégrées dans l'assiette",
        "**Cellule Tracfin dédiée** : 200 agents spécialisés dans le traçage des patrimoines complexes avec IA de détection"
      ],
      impact: "Réduction du risque de fuite fiscale de 60% grâce à un dispositif dissuasif multi-niveaux",
      cost: "900 millions €/an",
      financing: "Moyens de contrôle, coopération internationale, contentieux - financé par le budget général de l'État"
    },
    {
      id: 5,
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
      id: 6,
      title: "Retraites : retour à 60 ans avec système mixte",
      objective: "Rétablir l'âge de départ à la retraite à 60 ans avec un système durable et juste",
      details: [
        "Retour à 60 ans pour tous",
        "Système mixte : 50% répartition + 50% capitalisation sociale",
        "Pension garantie à 60% du salaire net de référence à vie",
        "Revalorisation annuelle indexée sur l'inflation",
        "Plafonnement équitable des très hautes pensions",
        "Compte retraite personnel garanti par l'État",
        "⚠️ MESURE REPORTÉE à Phase 2 (croissance >3%/an nécessaire)"
      ],
      impact: "Système des retraites juste et durable, reconnaissance de l'espérance de vie en bonne santé, sécurité pour tous",
      cost: "18-26 milliards €/an",
      financing: "⚠️ MESURE REPORTÉE - Budget actuel IR ultra-hauts revenus (24-37 Md€/an) insuffisant"
    }
  ],
  conclusion: "Proposer une économie qui protège les créateurs de valeur, qui ne punit pas l'innovation, qui responsabilise la rente silencieuse, et qui libère des ressources massives, sans austérité. Ne pas parler d'économie punitive. Parler d'économie équitable, ambitieuse et reconstruite."
};
