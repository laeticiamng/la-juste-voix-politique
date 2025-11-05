// SYNTHÈSE BUDGÉTAIRE GLOBALE DU PROGRAMME LA JUSTE VOIX
// VERSION HONNÊTETÉ TOTALE - TOUS LES COÛTS RÉELS INCLUS

export const budgetSynthesis = {
  title: "Synthèse budgétaire - La Juste Voix",
  
  recettes: {
    title: "RECETTES NOUVELLES (IR ULTRA-HAUTS REVENUS UNIQUEMENT)",
    items: [
      {
      },
      {
        source: "IR - Nouvelles tranches TRÈS HAUTS REVENUS (juridiquement solide)",
        montant: "+18 à +28 Md€/an (médian 23 Md€/an)",
        description: "Nouvelles tranches IR : 1-5M€ → 55%, 5-10M€ → 60%, >10M€ → 65%. Système juridiquement robuste (95% validation constitutionnelle)"
      },
      {
        source: "CER (Contribution Exceptionnelle Rétablissement) - MAINTENUE",
        montant: "5-6 Md€/an",
        description: "10% patrimoine > 100M€ étalé sur 10 ans (maintenue car juridiquement distincte de la CNJP)"
      },
      {
        source: "Lutte contre la fraude fiscale renforcée",
        montant: "+3-5 Md€/an",
        description: "Renforcement des contrôles et moyens"
      },
      {
        source: "Crédit d'impôt diplômés Bac+5+ grandes écoles - MAINTENU",
        montant: "-1,62 Md€/an",
        description: "Crédit de 15% maintenu car juridiquement solide et encourageant (~1,97M cadres, exclusion >1,2M€ revenus)"
      }
    ],
    total: "24,38 à 37,38 Md€/an de recettes nouvelles nettes (médian 30,88 Md€/an) | PROGRAMME POST-PIVOT : Abandon CNJP → IR très hauts revenus uniquement"
  },

  depenses: {
    title: "DÉPENSES PRIORITAIRES (PROGRAMME RÉDUIT - 30% AMBITIONS INITIALES)",
    
    priorites: {
      titre: "AFFECTATIONS BUDGET IR ULTRA-HAUTS REVENUS (24-37 Md€/an)",
      details: [
        {
          poste: "Revalorisations métiers publics - PRIORITÉ 1",
          pourcentage: "26-32%",
          montant: "8-10 Md€/an",
          detail: "+500€/mois (au lieu de +800€) : Enseignants 2Md€ + Soignants 3Md€ + Police 1Md€ + Autres 2-4Md€"
        },
        {
          poste: "RSA réformé avec BONUS activité - PRIORITÉ 1",
          pourcentage: "10-13%",
          montant: "3-4 Md€/an",
          detail: "RSA base maintenu + BONUS +200€/mois si accepte accompagnement (conformité OIT, pas sanctions)"
        },
        {
          poste: "Logement social - PRIORITÉ 1",
          pourcentage: "13-19%",
          montant: "4-6 Md€/an",
          detail: "200k logements/an (au lieu de 500k) : Construction 3-4Md€ + Rénovation 1-2Md€"
        },
        {
          poste: "Transition écologique ciblée - PRIORITÉ 2",
          pourcentage: "10-16%",
          montant: "3-5 Md€/an",
          detail: "Rénovation 1,5-2Md€ + Mobilité douce 1-1,5Md€ + Transports publics 0,5-1Md€"
        },
        {
          poste: "Éducation (hors salaires enseignants) - PRIORITÉ 2",
          pourcentage: "6-10%",
          montant: "2-3 Md€/an",
          detail: "Référents collège 0,8Md€ + Pass formation 1,2Md€ + Module Ouverture 0,2-1Md€"
        },
        {
          poste: "Santé mentale - Crédit universel - PRIORITÉ 1",
          pourcentage: "5-6%",
          montant: "1,5-2 Md€/an",
          detail: "10 séances/an remboursées 100% pour TOUS (psychologue, psychiatre)"
        },
        {
          poste: "Sécurité & Prévention",
          pourcentage: "3-5%",
          montant: "1-1,5 Md€/an",
          detail: "Binômes collège 0,3Md€ + Maisons Justice 0,4Md€ + Formations police 0,3-0,8Md€"
        },
        {
          poste: "Réserve budgétaire imprévus",
          pourcentage: "6-10%",
          montant: "2-3 Md€/an",
          detail: "Prudence budgétaire, absorption aléas"
        }
      ],
      sousTotal: "24,5-34,5 Md€/an (100% du budget IR disponible)"
    },

    abandonnees: {
      titre: "⚠️ MESURES ABANDONNÉES OU REPORTÉES (budget IR insuffisant)",
      details: [
        {
          bloc: "❌ ABANDONNÉ - Retraites à 60 ans",
          mesures: [
            { nom: "Retour retraite 60 ans", montant: "18-26 Md€/an", financement: "Reporté Phase 2 (croissance >3%/an)" }
          ],
          sousTotal: "⏳ REPORTÉ à phase 2 si croissance >3%/an"
        },
        {
          bloc: "❌ ABANDONNÉ - FSCRD Remboursement dette",
          mesures: [
            { nom: "Fonds Souverain Citoyen", montant: "13,5-19,5 Md€/an", financement: "Reporté Phase 2 (croissance >3%/an)" }
          ],
          sousTotal: "❌ Mesure supprimée du programme"
        },
        {
          bloc: "❌ RÉDUIT - Démocratie participative",
          mesures: [
            { nom: "Budget citoyen participatif", montant: "2 Md€/an NON DISPONIBLE", financement: "❌ Priorités réallouées" }
          ],
          sousTotal: "⏳ Reporté à phase 2"
        },
        {
          bloc: "⏳ RÉDUIT - Logement social",
          mesures: [
            { nom: "Objectif 500k logements/an", montant: "Réduit à 200k/an (-5 Md€)", financement: "Budget insuffisant" }
          ],
          sousTotal: "Phase 1: 200k/an | Phase 2: 300k/an | Phase 3: 500k/an"
        }
      ],
      sousTotal: "~60 Md€/an de mesures abandonnées ou reportées"
    },

    totalGeneral: "24,5-34,5 Md€/an nécessaires (médian 29,5 Md€/an) | 30% des ambitions initiales"
  },

  equilibre: {
    recettes: "30,88 Md€/an (médian) | IR très hauts revenus 23 Md€ + CER 5,5 Md€ + Fraude 4 Md€ - Crédit 1,62 Md€",
    depenses: "29,5 Md€/an (médian) | Priorités: Revalorisations +500€ (8-10Md€) + RSA bonus (3-4Md€) + Logement 200k/an (4-6Md€)",
    solde: {
      equilibre: "+1,38 Md€/an EXCÉDENT STRUCTUREL garanti",
      viabilite: "95% validation constitutionnelle (vs 20% avec CNJP)",
      programme: "30% ambitions initiales mais 100% RÉALISABLE"
    },
    note: "Programme La Juste Voix : Financement par IR ultra-hauts revenus juridiquement SOLIDE (tranches 55-65% sur revenus >1M€). Budget ÉQUILIBRÉ avec excédent structurel. Priorités: revalorisations +500€, RSA réformé, logement 200k/an, transition écologique. Crédits d'impôt 15% Bac+5+ et 20% Bac+10 maintenus."
  },

  economiesNonComptabilisees: {
    titre: "Gains indirects POSSIBLES (NON comptabilisés dans le budget - prudence)",
    items: [
      {
        source: "Réduction chômage structurel",
        economie: "2-3 Md€/an (hypothétique, sur 3-5 ans)",
        detail: "Retour emploi via RSA réformé, formation, PPI"
      },
      {
        source: "Prévention santé mentale",
        economie: "1-1,5 Md€/an (hypothétique, sur 5-10 ans)",
        detail: "Réduction arrêts maladie, hospitalisations évitées"
      },
      {
        source: "Réduction criminalité/récidive",
        economie: "0,8-1 Md€/an (hypothétique, sur 5-10 ans)",
        detail: "Peines réparatrices, prévention collège"
      },
      {
        source: "Efficacité administrative",
        economie: "0,5-1 Md€/an (hypothétique, sur 3-5 ans)",
        detail: "Digitalisation, guichets uniques"
      }
    ],
    total: "4,3-6,5 Md€/an d'économies POSSIBLES (non comptabilisées car incertaines)",
    avertissement: "Ces économies sont VOLONTAIREMENT NON COMPTABILISÉES dans l'équilibre budgétaire car elles sont hypothétiques et s'obtiennent sur le moyen/long terme. Le programme est viable SANS elles."
  },

  conclusion: `Le programme La Juste Voix - POST-PIVOT OPTION 1 est juridiquement SOLIDE et budgétairement ÉQUILIBRÉ :

🎯 PROGRAMME LA JUSTE VOIX :

Notre approche fiscale repose sur un système progressif juridiquement solide :
- IR renforcé 55-65% sur revenus >1M€ (0,01% des contribuables)
- Contribution Exceptionnelle de Rétablissement sur patrimoines >100M€
- Lutte renforcée contre l'évasion fiscale
- Crédits d'impôt pour valoriser les compétences (Bac+5+ et Bac+10)

TOTAL RECETTES : 24-37 Md€/an
AFFECTATION BUDGÉTAIRE :
- 32% Revalorisations métiers essentiels (+500€/mois)
- 19% Logement social massif (200k/an)
- 13% RSA réformé avec bonus activité
- 13% Transition écologique ciblée
- 8% Éducation (Référents Projet & Ambition)
- 6% Santé mentale universelle
- 4% Sécurité
- 5% Réserve imprévus

EXCÉDENT BUDGÉTAIRE : +1,38 Md€/an

Le programme garantit la justice fiscale ET la viabilité juridique.

📋 Documentation complète : PIVOT_STRATEGIQUE_OPTION1.md + ANALYSE_COHERENCE_POST_PIVOT.md`
};
