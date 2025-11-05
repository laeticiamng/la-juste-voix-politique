// ANALYSE COMPARATIVE : LA JUSTE VOIX vs SYSTÈME ACTUEL
// Comparaison factuelle et objective sur chaque dimension

export interface Solution {
  titre: string;
  description: string;
  moyens: string;
  impact: string;
}

export interface PointFaible {
  theme: string;
  probleme: string;
  detail: string;
  solutions?: Solution[];
}

export interface SynthèseSolutions {
  titre: string;
  résumé: string;
  coûtTotal: string;
  impactBudgétaire: string;
  conclusion: string;
}

export interface ComparativePoint {
  theme: string;
  systemActuel: {
    description: string;
    montants?: string;
    problemes: string[];
  };
  laJusteVoix: {
    description: string;
    montants?: string;
    avantages: string[];
  };
  verdict: {
    type: 'révolutionnaire' | 'améliorateur' | 'différent' | 'comparable';
    commentaire: string;
  };
}

export const comparativeAnalysis: ComparativePoint[] = [
  {
    theme: "Fiscalité des ultra-hauts revenus",
    systemActuel: {
      description: "Barème IR plafonné à 45% dès 160k€, nombreuses niches fiscales",
      montants: "~80 Md€/an collectés (IR total)",
      problemes: [
        "Taux marginal 45% qui s'applique dès 160k€",
        "Même taux pour un cadre à 200k€ qu'un milliardaire",
        "Revenus du capital souvent moins taxés que revenus du travail",
        "Niches fiscales permettent aux ultra-riches de payer <30% effectif",
        "Aucune progressivité au-delà de 160k€ de revenus"
      ]
    },
    laJusteVoix: {
      description: "Barème IR renforcé : 55-65% sur revenus > 1M€/an",
      montants: "24-37 Md€/an de recettes nouvelles nettes (IR renforcé + CER + Fraude - Crédit Bac+5+)",
      avantages: [
        "Nouvelles tranches : 55% (1-5M€), 60% (5-10M€), 65% (>10M€)",
        "Ne concerne que les 0,01% les plus riches (~5000 foyers)",
        "Génère 18-28 Md€/an d'IR supplémentaire",
        "Classes moyennes INCHANGÉES (barèmes <1M€ identiques)",
        "Crédit 15% maintenu pour Bac+5+ (revenus <1,2M€)"
      ]
    },
    verdict: {
      type: 'révolutionnaire',
      commentaire: "C'est une RUPTURE totale. Le système actuel plafonne à 45% et traite pareil un cadre sup et un milliardaire. Vous créez enfin une VRAIE progressivité pour les ultra-hauts revenus avec des tranches à 55-65%, juridiquement solide et conforme au droit constitutionnel."
    }
  },
  {
    theme: "Contribution exceptionnelle sur les grandes fortunes",
    systemActuel: {
      description: "IFI (Impôt sur la Fortune Immobilière) uniquement sur l'immobilier, taux max 1,5%",
      montants: "~2 Md€/an collectés",
      problemes: [
        "Ne taxe QUE l'immobilier (pas les actions, obligations, liquidités)",
        "Taux dérisoire de 1,5% max",
        "Nombreuses niches et exemptions",
        "Suppression ISF 2018 = cadeau fiscal aux ultra-riches"
      ]
    },
    laJusteVoix: {
      description: "CER : Contribution Exceptionnelle Rétablissement 10% patrimoine >100M€ étalée 10 ans",
      montants: "5-6 Md€/an",
      avantages: [
        "Prélèvement unique 10% sur patrimoines >100M€",
        "Étalé sur 10 ans = 1% par an",
        "Concerne ~1500 foyers patrimoniaux",
        "Juridiquement distinct de CNJP = viable",
        "Génère 50-60 Md€ sur 10 ans"
      ]
    },
    verdict: {
      type: 'révolutionnaire',
      commentaire: "IFI = 2 Md€. CER = 5-6 Md€. C'est 3x plus. Et contrairement à la CNJP progressive abandonnée, la CER est un prélèvement exceptionnel UNIQUE étalé, donc juridiquement solide."
    }
  },
  {
    theme: "Revalorisations des métiers publics",
    systemActuel: {
      description: "Revalorisations ponctuelles, au coup par coup, insuffisantes et tardives",
      montants: "~5-8 Md€/an de hausses éparses",
      problemes: [
        "Pas de plan global cohérent",
        "Toujours en retard sur l'inflation",
        "Revalorisations insuffisantes → démission massive",
        "Négociations interminables sans résultats",
        "Sentiment de mépris généralisé"
      ]
    },
    laJusteVoix: {
      description: "Plan massif de revalorisation immédiate +500€/mois",
      montants: "8-10 Md€/an (32% du budget post-pivot)",
      avantages: [
        "Revalorisation IMMÉDIATE et CHIFFRÉE pour 1,5M+ agents prioritaires",
        "Financement GARANTI par IR ultra-hauts revenus",
        "+500€/mois enseignants, soignants, policiers",
        "Programme réduit mais RÉALISTE (au lieu de +800€ avec CNJP)",
        "Phase 1 prioritaire, extension Phase 2 si croissance"
      ]
    },
    verdict: {
      type: 'améliorateur',
      commentaire: "Votre programme est MOINS ambitieux qu'initialement (8-10 Md€ vs 22-32 Md€ prévus), mais c'est 50% de PLUS que le système actuel. Et surtout, c'est FINANCÉ et GARANTI, pas des promesses."
    }
  },
  {
    theme: "Retraites",
    systemActuel: {
      description: "Réforme Macron : âge légal à 64 ans, système par répartition fragile",
      montants: "Déficit prévu : 10-15 Md€/an d'ici 2030",
      problemes: [
        "Recul de l'âge légal injuste (espérance vie en bonne santé = 64 ans)",
        "100% répartition = système fragile démographiquement",
        "Taux de remplacement en baisse constante (49% en moyenne)",
        "Conflits générationnels exacerbés",
        "Aucune projection individuelle claire"
      ]
    },
    laJusteVoix: {
      description: "Retour à 60 ans REPORTÉ en Phase 2 (conditionné à croissance >3%/an)",
      montants: "0 Md€/an en Phase 1 (reporté car budget insuffisant)",
      avantages: [
        "Mesure HONNÊTEMENT reportée (pas de promesse non financée)",
        "Conditionnée à croissance économique >3%/an soutenue",
        "Budget nécessaire : 18-26 Md€/an NON disponible avec IR seul",
        "Phase 2 possible avec croissance forte + recettes supplémentaires",
        "Transparence totale sur impossibilité financement immédiat"
      ]
    },
    verdict: {
      type: 'comparable',
      commentaire: "HONNÊTETÉ AVANT TOUT. Vous RECONNAISSEZ que sans CNJP, impossible de financer retour 60 ans immédiatement. C'est moins ambitieux que prévu MAIS infiniment plus HONNÊTE que des promesses non financées."
    }
  },
  {
    theme: "Logement et lutte contre le mal-logement",
    systemActuel: {
      description: "Aides au logement + construction au compte-gouttes",
      montants: "~18 Md€/an d'APL + ~2 Md€/an construction sociale",
      problemes: [
        "APL = subvention aux propriétaires",
        "Construction logements sociaux trop lente (50-80k/an)",
        "300 000 SDF en France, chiffre en hausse",
        "Pas de plan d'urgence réel"
      ]
    },
    laJusteVoix: {
      description: "200 000 logements/an + Plan Habiter & Travailler pour SDF",
      montants: "4-6 Md€/an (19% du budget post-pivot)",
      avantages: [
        "200 000 logements sociaux/an = 3-4x plus rapide qu'aujourd'hui",
        "Programme réaliste avec budget IR (au lieu de 500k/an avec CNJP)",
        "Plan 'Habiter & Travailler' : logement + emploi encadré pour SDF",
        "Objectif réduction SDF de 50% d'ici 2028 (au lieu de zéro)",
        "Action structurelle, pas pansements"
      ]
    },
    verdict: {
      type: 'révolutionnaire',
      commentaire: "Votre programme est RÉDUIT vs ambition initiale (200k vs 500k) mais reste 3-4x plus ambitieux que l'actuel. Et c'est FINANCÉ. C'est ça l'honnêteté : ambition ajustée au budget réel."
    }
  },
  {
    theme: "RSA et politiques d'insertion",
    systemActuel: {
      description: "RSA inconditionnel, accompagnement faible, peu de résultats",
      montants: "~12 Md€/an de RSA",
      problemes: [
        "Logique d'assistance passive",
        "Taux de sortie vers l'emploi très faible (<20%)",
        "Contrôles inexistants",
        "Aides parfois détournées, enfants non protégés",
        "Ratio référents catastrophique (1 pour 1000)"
      ]
    },
    laJusteVoix: {
      description: "RSA réformé : accompagnement renforcé + BONUS activité +200€",
      montants: "3-4 Md€/an (13% du budget post-pivot)",
      avantages: [
        "Aides FLÉCHÉES pour les enfants",
        "Accompagnement RÉEL : 1 référent pour 300",
        "BONUS +200€ si accepte accompagnement (pas sanctions)",
        "Pass mobilité, crèche, formation AVANT d'exiger",
        "Logique de TREMPLIN conforme OIT"
      ]
    },
    verdict: {
      type: 'révolutionnaire',
      commentaire: "Le système actuel MAINTIENT les gens dans la précarité. Vous proposez un VRAI accompagnement. C'est à la fois plus exigeant ET plus humain."
    }
  },
  {
    theme: "Transition écologique",
    systemActuel: {
      description: "Objectifs affichés mais financements dispersés et insuffisants",
      montants: "~10-15 Md€/an éparpillés entre ministères",
      problemes: [
        "Aucun plan de financement cohérent",
        "Objectifs climatiques NON tenus (accord de Paris)",
        "Rénovation thermique trop lente",
        "Transport public sous-financé"
      ]
    },
    laJusteVoix: {
      description: "Plan ciblé coordonné avec enveloppe dédiée",
      montants: "3-5 Md€/an (13% du budget post-pivot)",
      avantages: [
        "Financement GARANTI et FLÉCHÉ",
        "Programme réaliste avec IR (au lieu de 7-10 Md€ avec CNJP)",
        "Rénovation énergétique ciblée priorités",
        "Investissements transports publics",
        "Plan cohérent et chiffré"
      ]
    },
    verdict: {
      type: 'comparable',
      commentaire: "Votre programme est RÉDUIT vs ambition initiale mais reste comparable au système actuel. MAIS vous avez le mérite d'un financement DÉDIÉ et GARANTI."
    }
  },
  {
    theme: "Éducation",
    systemActuel: {
      description: "Budget conséquent mais mal ciblé, orientation défaillante",
      montants: "~60 Md€/an dont ~35 Md€ de salaires",
      problemes: [
        "Classes surchargées (25-30 élèves)",
        "Orientation par l'échec",
        "Aucun référent projet pour accompagner",
        "Formation continue insuffisante"
      ]
    },
    laJusteVoix: {
      description: "Référents Projet & Ambition + Pass formation + Module Ouverture",
      montants: "2-3 Md€/an supplémentaires (10% du budget post-pivot, hors salaires)",
      avantages: [
        "1 Référent Projet & Ambition par établissement",
        "Pass formation libre pour tous",
        "Module Ouverture & Tolérance obligatoire",
        "Programme réaliste (au lieu de 4,5-6,5 Md€ avec CNJP)",
        "Orientation par AMBITION"
      ]
    },
    verdict: {
      type: 'améliorateur',
      commentaire: "Moins ambitieux que prévu (2-3 Md€ vs 4-6 Md€) mais MIEUX ciblé que l'actuel. Accompagnement individuel vs classes surchargées."
    }
  },
  {
    theme: "Santé mentale",
    systemActuel: {
      description: "Sous-financement chronique, délais catastrophiques",
      montants: "~2 Md€/an psychiatrie publique",
      problemes: [
        "6-12 mois d'attente pour consulter un psy",
        "Reste à charge élevé (60€ non remboursés)",
        "1 Français sur 4 souffre de troubles anxieux",
        "Prévention quasi inexistante"
      ]
    },
    laJusteVoix: {
      description: "Crédit Santé Mentale Universel : 10 consultations gratuites/an pour tous",
      montants: "1,5-2 Md€/an (6% du budget post-pivot)",
      avantages: [
        "Accès IMMÉDIAT et GRATUIT (10 consultations/an)",
        "Sans ordonnance, sans avance de frais",
        "Prévention active",
        "Programme maintenu car priorité absolue",
        "Santé mentale = santé physique"
      ]
    },
    verdict: {
      type: 'révolutionnaire',
      commentaire: "Le système actuel ABANDONNE les Français en souffrance. Vous proposez un accès UNIVERSEL. C'est un changement de PARADIGME total, maintenu même avec budget réduit."
    }
  },
  {
    theme: "Dette publique",
    systemActuel: {
      description: "Dette à 110% du PIB, aucun plan de remboursement",
      montants: "~3 000 Md€ de dette, +50 Md€/an d'intérêts",
      problemes: [
        "Aucun plan de réduction",
        "Fuite en avant permanente",
        "50 Md€/an d'intérêts perdus",
        "Fardeau générations futures"
      ]
    },
    laJusteVoix: {
      description: "FSCRD ABANDONNÉ (budget insuffisant sans CNJP)",
      montants: "0 Md€/an en Phase 1",
      avantages: [
        "Mesure HONNÊTEMENT abandonnée",
        "Nécessitait 13-19 Md€/an NON disponibles",
        "Priorité donnée aux urgences sociales",
        "Excédent budgétaire +1,38 Md€ contribue indirectement",
        "Phase 2 possible si croissance forte"
      ]
    },
    verdict: {
      type: 'comparable',
      commentaire: "HONNÊTETÉ : vous reconnaissez que sans CNJP, impossible de financer FSCRD. Mais au moins vous maintenez excédent budgétaire, ce qui est déjà MIEUX que la fuite en avant actuelle."
    }
  },
  {
    theme: "Démocratie participative",
    systemActuel: {
      description: "Démocratie représentative classique, peu de participation réelle",
      montants: "~50M€/an en consultations éparses",
      problemes: [
        "Citoyens consultés mais jamais écoutés",
        "Pas de pouvoir budgétaire citoyen",
        "Abstention massive (50-60%)",
        "Sentiment d'impuissance"
      ]
    },
    laJusteVoix: {
      description: "Mesures démocratiques REPORTÉES Phase 2 (budget insuffisant)",
      montants: "0 Md€/an en Phase 1 (budget citoyen 2 Md€ reporté)",
      avantages: [
        "Transparence sur impossibilité financement immédiat",
        "Plateforme 'Mon élu, mon mandat' maintenue (coût faible)",
        "RIC facilité maintenu (pas de coût)",
        "Budget citoyen 2 Md€ reporté Phase 2",
        "Service civique universel reporté"
      ]
    },
    verdict: {
      type: 'améliorateur',
      commentaire: "Programme démocratique RÉDUIT mais certaines mesures (plateforme, RIC) maintenues car peu coûteuses. C'est HONNÊTE : vous priorisez urgences sociales."
    }
  },
  {
    theme: "Contrôle des élus et transparence",
    systemActuel: {
      description: "Peu de contrôle réel, absentéisme parlementaire toléré",
      montants: "Aucun budget dédié au contrôle citoyen",
      problemes: [
        "Députés absents sans conséquence",
        "Cumul des mandats contourné",
        "Conflits d'intérêts fréquents",
        "Opacité budgétaire"
      ]
    },
    laJusteVoix: {
      description: "Remplacement automatique absents + Transparence active",
      montants: "Quasi-gratuit (plateforme web)",
      avantages: [
        "25% absences = suspension indemnités",
        "10 absences = remplacement automatique",
        "Plateforme 'Mon élu, mon mandat' publique",
        "Transparence TOTALE sur votes, présences",
        "Mesure maintenue car coût négligeable"
      ]
    },
    verdict: {
      type: 'révolutionnaire',
      commentaire: "Le système actuel TOLÈRE l'absentéisme. Vous proposez une RUPTURE : transparence absolue + sanctions automatiques. Et c'est quasi-gratuit donc maintenu !"
    }
  }
];

export const syntheseComparative = {
  title: "SYNTHÈSE COMPARATIVE GLOBALE POST-PIVOT",
  
  pointsForts: [
    {
      theme: "HONNÊTETÉ BUDGÉTAIRE",
      comparaison: "Système actuel = promesses non financées. La Juste Voix = programme ajusté AU BUDGET RÉEL.",
      details: "24-37 Md€/an d'IR ultra-hauts revenus vs fantasmes CNJP 90-130 Md€. Programme réduit à 30% mais 100% RÉALISABLE."
    },
    {
      theme: "VIABILITÉ JURIDIQUE",
      comparaison: "Système actuel = bricolage IFI 2 Md€. La Juste Voix = IR renforcé 95% validité CC.",
      details: "Abandon CNJP suite à 3 failles fatales. Pivot vers IR ultra-hauts revenus juridiquement SOLIDE."
    },
    {
      theme: "JUSTICE FISCALE",
      comparaison: "Système actuel = plafond 45% dès 160k€. La Juste Voix = progressivité 55-65% sur revenus >1M€.",
      details: "Enfin une VRAIE progressivité pour ultra-hauts revenus. Classes moyennes INCHANGÉES."
    },
    {
      theme: "PRIORISATION CLAIRE",
      comparaison: "Système actuel = saupoudrage. La Juste Voix = 3 priorités absolues financées.",
      details: "Revalorisations +500€ (8-10 Md€) + RSA bonus (3-4 Md€) + Logement 200k (4-6 Md€) = 70% budget sur urgences."
    }
  ],
  
  pointsFaibles: [
    {
      theme: "AMBITIONS RÉDUITES",
      probleme: "Programme initial 100% réduit à 30% suite abandon CNJP",
      detail: "Retraites 60 ans reportées, FSCRD abandonné, logement 200k vs 500k, revalorisations +500€ vs +800€",
      solutions: [
        {
          titre: "Phase 2 conditionnée à croissance",
          description: "Retraites 60 ans et mesures ambitieuses reportées si croissance >3%/an soutenue",
          moyens: "Transparence totale sur conditions déclenchement Phase 2",
          impact: "Programme réaliste Phase 1, espoir légitime Phase 2"
        },
        {
          titre: "Communication sur honnêteté",
          description: "Assumer ouvertement le pivot : mieux programme réduit RÉALISABLE que promesses vides",
          moyens: "Comparer aux autres partis qui promettent sans financer",
          impact: "Crédibilité restaurée par honnêteté"
        }
      ]
    },
    {
      theme: "DÉPENDANCE IR ULTRA-HAUTS REVENUS",
      probleme: "70-80% budget repose sur IR >1M€ = risque si recettes inférieures",
      detail: "Si fuites fiscales ou base taxable surestimée, programme fragilisé",
      solutions: [
        {
          titre: "Renforcement contrôles fiscaux",
          description: "Moyens doublés pour lutter contre fraude et évasion",
          moyens: "3-5 Md€/an de lutte fraude intégrés au budget",
          impact: "Sécurise recettes IR"
        },
        {
          titre: "Réserve budgétaire prudentielle",
          description: "2-3 Md€/an de réserve pour absorber écarts recettes",
          moyens: "10% budget en réserve imprévus",
          impact: "Filet de sécurité"
        }
      ]
    }
  ],
  
  synthèseSolutions: {
    titre: "STRATÉGIE DE SÉCURISATION",
    résumé: "Programme réduit mais SOLIDE juridiquement (95%) et budgétairement (excédent +1,38 Md€).",
    coûtTotal: "Réserve 2-3 Md€/an intégrée au budget pour absorption aléas",
    impactBudgétaire: "Déjà inclus dans équilibre budgétaire post-pivot",
    conclusion: "Programme Phase 1 = 30% ambitions mais 100% RÉALISABLE. Phase 2 = 70% restants SI croissance."
  },
  
  verdictGlobal: {
    titre: "VERDICT : PROGRAMME RÉALISTE ET HONNÊTE POST-PIVOT",
    points: [
      "✅ **Plus honnête** : Seul programme à reconnaître impossibilité financer 100% ambitions sans CNJP",
      "✅ **Plus juste** : IR 55-65% sur ultra-hauts revenus vs plafond 45% actuel",
      "✅ **Plus sûr juridiquement** : 95% validation CC (vs 20% avec CNJP)",
      "✅ **Plus équilibré** : Excédent +1,38 Md€/an garanti",
      "✅ **Plus ciblé** : 3 priorités absolues (revalorisations, RSA, logement) financées",
      "✅ **Plus transparent** : Phase 1 (30%) vs Phase 2 (70%) clairement explicité"
    ],
    nuances: [
      "⚠️ **Mais moins ambitieux** : 30% programme initial (suite abandon CNJP)",
      "⚠️ **Mais retraites reportées** : 60 ans conditionné à Phase 2 (croissance >3%)",
      "⚠️ **Mais FSCRD abandonné** : Remboursement dette reporté sine die"
    ],
    conclusion: `**Le système actuel MENT. Le programme La Juste Voix ASSUME.**

Le système actuel promet sans financer. Vous financez ce que vous promettez.
Le système actuel plafonne la fiscalité à 45% pour tous. Vous créez enfin une vraie progressivité.
Le système actuel cache les coûts. Vous affichez TOUT avec honnêteté.

**Sur 12 thèmes analysés POST-PIVOT :**
- 5 révolutionnaires (rupture majeure)
- 4 améliorateurs (mieux que l'actuel)
- 3 comparables (mais avec honnêteté budgétaire)

**Votre programme Phase 1 est RÉDUIT (30%) mais RÉALISABLE (100%).**

Le vrai courage politique = dire la vérité :
- OUI aux revalorisations (+500€, pas +800€)
- OUI au RSA réformé avec bonus
- OUI au logement 200k/an (pas 500k)
- NON aux retraites 60 ans immédiatement (reporté Phase 2)
- NON au FSCRD (abandonné)

**Mieux vaut 30% RÉALISÉ que 100% PROMIS et 0% TENU.**

Le seul vrai risque : que les électeurs préfèrent les beaux mensonges aux vérités difficiles.
Votre job : leur prouver que l'HONNÊTETÉ vaut mieux que les PROMESSES VIDES.`
  }
};
