// ANALYSE COMPLÈTE DES RISQUES DU PROGRAMME LA JUSTE VOIX
// ET MESURES DE SÉCURISATION

export interface Risk {
  id: string;
  category: 'économique' | 'juridique' | 'mise-en-oeuvre' | 'social' | 'politique';
  title: string;
  description: string;
  probabilité: 'faible' | 'moyenne' | 'élevée';
  impact: 'faible' | 'modéré' | 'critique';
  currentStatus: string;
  securisations: string[];
  coûtSecurisation?: string;
}

export const programRisks: Risk[] = [
  {
    id: 'R1',
    category: 'économique',
    title: "Fuite massive des capitaux et départs fiscaux",
    description: "Les ultra-riches pourraient quitter la France pour échapper à la CNJP, réduisant drastiquement les recettes attendues.",
    probabilité: 'élevée',
    impact: 'critique',
    currentStatus: 'PARTIELLEMENT PROTÉGÉ (exit tax basique existante)',
    securisations: [
      "**Exit tax renforcée sur 15 ans** : taxation différée de 60% sur la plus-value latente au moment du départ",
      "**Imposition territoriale** : tout patrimoine détenu en France (immobilier, entreprises, actifs financiers) reste taxable même après départ",
      "**Clause de retour fiscal** : Si la personne revient en France dans les 10 ans, elle paie rétroactivement la CNJP avec intérêts",
      "**Gel des actifs** : possibilité de bloquer les transferts massifs de capitaux (> 10M€) pendant 6 mois pour vérification fiscale",
      "**Coopération internationale obligatoire** : Accords bilatéraux avec Suisse, Luxembourg, Monaco, Belgique, UK pour partage automatique d'informations",
      "**Sanctions commerciales** : Interdiction d'accès aux marchés publics français et pénalités douanières pour les entreprises des exilés fiscaux",
      "**Publicité des départs** : Liste publique des exilés fiscaux (transparence)",
      "**Évaluation indépendante annuelle** : Observatoire des flux de capitaux avec audit citoyen"
    ],
    coûtSecurisation: "500M€/an (moyens de contrôle, coopération internationale, contentieux)"
  },
  {
    id: 'R2',
    category: 'économique',
    title: "Sous-estimation de la base taxable CNJP",
    description: "Le nombre de foyers > 100M€ ou leur patrimoine réel pourraient être surestimés, réduisant les recettes de 20-30%.",
    probabilité: 'moyenne',
    impact: 'critique',
    currentStatus: 'RISQUE NON SÉCURISÉ',
    securisations: [
      "**Étude indépendante immédiate** : Audit par l'INSEE, Banque de France et cabinets spécialisés AVANT mise en œuvre",
      "**Fourchette prudente** : Scénario bas à 70 Md€/an (au lieu de 90) avec mécanisme d'ajustement automatique",
      "**Clause de sauvegarde budgétaire** : Si recettes < 80 Md€/an la 1ère année, déclenchement automatique d'un audit et ajustement des dépenses non prioritaires",
      "**Transparence patrimoniale obligatoire** : Déclaration détaillée de TOUS les actifs détenus directement ou indirectement (y compris via sociétés)",
      "**Pénalités dissuasives** : 100% du montant dissimulé + prison ferme pour fraude > 10M€",
      "**Réserve budgétaire de précaution** : 5 Md€/an non affectés les 2 premières années pour absorber les écarts"
    ],
    coûtSecurisation: "5 Md€/an en réserve budgétaire + 200M€/an pour audits"
  },
  {
    id: 'R3',
    category: 'juridique',
    title: "Censure du Conseil constitutionnel",
    description: "La CNJP pourrait être jugée confiscatoire, violant le droit de propriété ou créant une rupture d'égalité devant l'impôt.",
    probabilité: 'moyenne',
    impact: 'critique',
    currentStatus: 'RISQUE ÉLEVÉ NON TRAITÉ',
    securisations: [
      "**Révision constitutionnelle préalable** : Inscrire dans l'article 13 de la Constitution le principe de 'contribution patrimoniale progressive au-delà de 100M€'",
      "**Validation par 3 constitutionnalistes reconnus** AVANT dépôt du projet de loi",
      "**Jurisprudence internationale** : S'appuyer sur les modèles norvégien, suisse (certains cantons), argentin",
      "**Clause d'utilité publique** : Justification par l'intérêt général supérieur (santé, éducation, dette)",
      "**Progressivité encadrée** : Plafonner le taux effectif global (IR + CNJP + taxes locales) à 75% pour éviter l'effet confiscatoire",
      "**Version alternative prête** : Si censure, basculer immédiatement sur CNJP à taux max 45% (recettes 60-80 Md€/an)"
    ],
    coûtSecurisation: "50M€ pour expertise juridique + coût politique de révision constitutionnelle"
  },
  {
    id: 'R4',
    category: 'juridique',
    title: "Contentieux de masse et recours juridiques",
    description: "Les contribuables CNJP pourraient attaquer en masse, bloquant le recouvrement pendant des années.",
    probabilité: 'élevée',
    impact: 'modéré',
    currentStatus: 'NON ANTICIPÉ',
    securisations: [
      "**Paiement provisionnel obligatoire** : 50% de la CNJP due payable immédiatement même en cas de recours",
      "**Juridictions spécialisées** : Création de chambres fiscales dédiées CNJP au Conseil d'État",
      "**Délais accélérés** : Jugement en 6 mois maximum (procédure d'urgence)",
      "**Fonds de garantie contentieux** : 3 Md€/an provisionnés pour rembourser en cas de requalification",
      "**Transparence des recours** : Publication des entreprises/personnes qui attaquent l'impôt (pression sociale)"
    ],
    coûtSecurisation: "3 Md€/an en provisions + 200M€/an pour renforcement judiciaire"
  },
  {
    id: 'R5',
    category: 'économique',
    title: "Montages d'évitement légaux (fragmentation, donations, trusts)",
    description: "Les ultra-riches fragmentent leur patrimoine en holdings multiples pour rester sous le seuil de 100M€.",
    probabilité: 'élevée',
    impact: 'critique',
    currentStatus: 'PARTIELLEMENT TRAITÉ (clause transparence)',
    securisations: [
      "**Consolidation automatique** : Tout patrimoine détenu par le foyer fiscal + ascendants/descendants directs est consolidé",
      "**Clause anti-abus familiale** : Les donations < 5 ans avant l'entrée en vigueur sont réintégrées dans l'assiette",
      "**Tracabilité internationale des trusts** : Obligation de déclaration sous peine de présomption de détention (inversion de la charge de la preuve)",
      "**Taxation des 'bénéficiaires économiques réels'** : Même si le patrimoine est au nom d'une fondation/trust, si vous en profitez, vous payez",
      "**Intelligence artificielle de détection** : Système automatisé de détection des schémas d'évitement (croisement de données)",
      "**Cellule Tracfin dédiée** : 200 agents spécialisés dans le traçage des patrimoines complexes"
    ],
    coûtSecurisation: "400M€/an (personnel, IA, coopération internationale)"
  },
  {
    id: 'R6',
    category: 'mise-en-oeuvre',
    title: "Coûts de recouvrement et de contrôle sous-estimés",
    description: "Recouvrer la CNJP sur 1500 foyers ultra-complexes coûte très cher (contentieux, contrôles, évaluations).",
    probabilité: 'élevée',
    impact: 'modéré',
    currentStatus: 'NON CHIFFRÉ',
    securisations: [
      "**Budget réaliste de recouvrement** : 2% des recettes CNJP = 1,8-2,6 Md€/an dédiés au contrôle fiscal renforcé",
      "**Recrutement massif** : +1000 inspecteurs des finances publiques spécialisés patrimoine",
      "**Formation de haut niveau** : Partenariat HEC/Sciences Po pour former les contrôleurs",
      "**Logiciels d'évaluation automatique** : IA pour estimer la valeur des actifs complexes (participation non cotées, œuvres d'art, etc.)",
      "**Prestataires privés sous contrôle** : Externalisation partielle de l'évaluation à des cabinets d'audit (avec audit public derrière)"
    ],
    coûtSecurisation: "1,8-2,6 Md€/an (déjà inclus dans le coût de fonctionnement)"
  },
  {
    id: 'R7',
    category: 'social',
    title: "Effets pervers du RSA réformé (travail forcé, stigmatisation)",
    description: "Le RSA conditionné peut être perçu comme du travail forcé ou stigmatiser les bénéficiaires.",
    probabilité: 'moyenne',
    impact: 'modéré',
    currentStatus: 'PARTIELLEMENT ANTICIPÉ',
    securisations: [
      "**Clause d'exemption médicale/sociale** : Dispense automatique pour handicap, maladie, charge d'enfant < 3 ans, formation longue",
      "**Accompagnement renforcé AVANT exigence** : 6 mois d'accompagnement intensif avant toute sanction",
      "**Référents humains** : 1 référent pour 300 bénéficiaires (au lieu de 1 pour 1000 actuellement)",
      "**Revenu minimum garanti** : Même en cas de sanction, plancher à 70% du RSA (pour éviter la misère absolue)",
      "**Observatoire indépendant** : Suivi des effets sociaux par une commission citoyenne + Défenseur des droits",
      "**Droit de recours rapide** : Contestation devant un juge des libertés dans les 15 jours"
    ],
    coûtSecurisation: "Inclus dans le budget RSA réformé (2,7-3,9 Md€/an)"
  },
  {
    id: 'R8',
    category: 'économique',
    title: "Inflation importée si injection massive trop rapide",
    description: "Injecter 90-130 Md€/an brutalement peut créer de l'inflation, annulant les revalorisations.",
    probabilité: 'moyenne',
    impact: 'modéré',
    currentStatus: 'NON TRAITÉ',
    securisations: [
      "**Montée en charge progressive** : Année 1 à 50% des mesures, Année 2 à 75%, Année 3 à 100%",
      "**Priorité aux investissements productifs** : Privilégier logement, éducation, transition écologique (offre) plutôt que seulement hausses salariales (demande)",
      "**Accord de modération salariale** : En contrepartie des revalorisations publiques, gel des hausses dans le privé > 5%/an pendant 2 ans",
      "**Suivi inflation mensuel** : Si inflation > 3%, pause automatique des revalorisations suivantes",
      "**Coordination BCE** : Négociation préalable avec la Banque Centrale Européenne"
    ],
    coûtSecurisation: "Aucun coût direct mais risque de ralentissement de la mise en œuvre"
  },
  {
    id: 'R9',
    category: 'politique',
    title: "Opposition de l'Union Européenne (aide d'État, concurrence)",
    description: "Bruxelles pourrait bloquer certaines mesures (aides aux PME, protectionnisme, fiscalité).",
    probabilité: 'moyenne',
    impact: 'modéré',
    currentStatus: 'NON ANTICIPÉ',
    securisations: [
      "**Conformité juridique préalable** : Validation par avocats spécialisés droit UE AVANT annonce",
      "**Coalition européenne** : Alliance avec Espagne, Portugal, Grèce pour porter une réforme fiscale UE",
      "**Clause d'intérêt national** : Invoquer l'article permettant des mesures exceptionnelles temporaires",
      "**Négociation diplomatique** : Envoi d'émissaires à Bruxelles 6 mois avant vote de la loi",
      "**Scénario alternatif** : Version du programme compatible UE prête (même si moins ambitieuse)"
    ],
    coûtSecurisation: "50M€/an (lobbying, expertise juridique UE)"
  },
  {
    id: 'R10',
    category: 'mise-en-oeuvre',
    title: "Complexité administrative : inertie et retards",
    description: "L'État n'a pas la capacité administrative pour déployer tout ça en 5 ans.",
    probabilité: 'élevée',
    impact: 'modéré',
    currentStatus: 'NON TRAITÉ',
    securisations: [
      "**Task force dédiée** : Création d'une Agence de Transformation La Juste Voix avec 500 agents",
      "**Recrutement anticipé** : +10 000 fonctionnaires dès l'élection (agents CNJP, référents RSA, contrôleurs)",
      "**Digitalisation prioritaire** : Plateformes numériques prêtes avant lancement (Cap Contribution, Mon élu)",
      "**Calendrier réaliste** : Plan sur 5 ans avec jalons vérifiables tous les 6 mois",
      "**Pilotes territoriaux** : Test dans 5 régions avant généralisation nationale",
      "**Benchmarking international** : Missions d'étude en Norvège, Suisse, Allemagne pour copier les bonnes pratiques"
    ],
    coûtSecurisation: "800M€/an (agence, recrutement, formation, digital)"
  }
];

export const securisationSummary = {
  totalAdditionalCost: "15,45-19,05 Md€/an de coûts de sécurisation",
  breakdown: [
    { item: "Réserve budgétaire de précaution", cost: "5 Md€/an" },
    { item: "Provisions contentieux", cost: "3 Md€/an" },
    { item: "Renforcement contrôle fiscal", cost: "2-2,6 Md€/an" },
    { item: "Crédit d'impôt Bac+5+ grandes écoles", cost: "1,65 Md€/an" },
    { item: "Moyens anti-évasion internationaux", cost: "0,9 Md€/an" },
    { item: "Agence de transformation", cost: "0,8 Md€/an" },
    { item: "Cellule Tracfin + IA détection", cost: "0,4 Md€/an" },
    { item: "Expertise juridique", cost: "0,3 Md€/an" },
    { item: "Coopération UE", cost: "0,05 Md€/an" },
    { item: "Audits indépendants", cost: "0,2 Md€/an" },
    { item: "Renforcement judiciaire", cost: "0,2 Md€/an" },
    { item: "Formation + benchmarking", cost: "0,1 Md€/an" }
  ],
  
  impact: `AVEC ces sécurisations :
  
  Recettes attendues : 95-130 Md€/an (CNJP) + 5-6 Md€/an (CER) + 3-5 Md€/an (fraude) - 1,65 Md€/an (crédit Bac+5+)
  = 101,35-139,35 Md€/an
  
  Dépenses totales : 93,8-134,8 Md€/an (programme) + 13,8-17,4 Md€/an (sécurisations)
  = 107,6-152,2 Md€/an
  
  NOUVEAU SOLDE (CNJP ajustée à 113 Md€ médian) :
  • Scénario optimiste : 101,35 - 107,6 = -6,25 Md€/an (DÉFICIT LÉGER)
  • Scénario médian : 122,35 - 130 = -7,65 Md€/an (DÉFICIT LÉGER)
  • Scénario pessimiste : 139,35 - 152,2 = -12,85 Md€/an (DÉFICIT)
  
  ⚠️ Avec CNJP à 113 Md€ (médian), le déficit est réduit à -7,65 Md€/an, acceptable dans le cadre d'une montée en charge progressive.`,
  
  solutions: [
    {
      option: "A - Augmenter la CNJP à 110-160 Md€/an",
      detail: "Taux max 65% au lieu de 60% → +20 Md€/an → Excédent de +9 à +10 Md€/an",
      risque: "Risque accru de départs fiscaux"
    },
    {
      option: "B - Réduire certaines ambitions",
      detail: "Retraites à 62 ans au lieu de 60 → -8 Md€/an → Équilibre quasi atteint",
      risque: "Trahison de la promesse phare"
    },
    {
      option: "C - Montée en charge sur 7 ans au lieu de 5",
      detail: "Étaler les dépenses → Équilibre chaque année mais objectifs décalés",
      risque: "Perte d'impact politique et social"
    },
    {
      option: "D - Assumer un déficit maîtrisé de 10 Md€/an",
      detail: "Représente 0,4% du PIB → Acceptable si dette en baisse via FSCRD",
      risque: "Critique de 'programme non financé'"
    }
  ]
};

export const recommendedPath = {
  title: "RECOMMANDATION FINALE - PROGRAMME VIABLE ET SÉCURISÉ",
  strategie: `**OPTION HYBRIDE : A + C + D**
  
  1. **Augmenter modérément la CNJP** : De 90-130 Md€ à **100-145 Md€/an**
     → Taux max 62% au lieu de 60%
     → +10-15 Md€/an de recettes supplémentaires
  
  2. **Montée en charge progressive sur 6 ans**
     → Année 1-2 : 60% du programme
     → Année 3-4 : 80% du programme
     → Année 5-6 : 100% du programme
     → Permet d'absorber les coûts de sécurisation progressivement
  
  3. **Assumer un micro-déficit transitoire**
     → -3 à -5 Md€/an les 3 premières années
     → Compensé par économies indirectes (chômage, santé) dès année 4-5
     → Retour à l'équilibre en année 6
  
  4. **Clause de révision annuelle obligatoire**
     → Si recettes CNJP < prévisions : ajustement automatique des dépenses non prioritaires
     → Si contentieux > 5% : activation du fonds de garantie
     → Transparence totale avec publication trimestrielle
  `,
  
  newBalance: `NOUVEAU BILAN SÉCURISÉ :
  
  Recettes : 100-145 Md€/an (CNJP à 62%) + 5-6 Md€/an (CER) + 3-5 Md€/an (fraude) - 1,65 Md€/an (crédit Bac+5+)
  = **106,35-154,35 Md€/an**
  
  Dépenses : 93,8-134,8 Md€/an (programme) + 15,45-19,05 Md€/an (sécurisations incluant crédit Bac+5+)
  = **109,25-153,85 Md€/an**
  
  SOLDE FINAL :
  • Année 1-3 : -3 à -5 Md€/an (déficit transitoire maîtrisé)
  • Année 4-6 : 0 à +0,5 Md€/an (équilibre atteint)
  
  ✅ Programme VIABLE, SÉCURISÉ, HONNÊTE avec tous les risques anticipés (incluant crédit Bac+5+ de 1,65 Md€/an)`
};
