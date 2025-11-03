// SYNTHÈSE BUDGÉTAIRE GLOBALE DU PROGRAMME LA JUSTE VOIX

export const budgetSynthesis = {
  title: "Synthèse budgétaire complète du programme",
  
  recettes: {
    title: "RECETTES TOTALES",
    items: [
      {
        source: "CNJP (Contribution Nationale Justice Patrimoniale)",
        montant: "50-80 Md€/an",
        description: "Impôt progressif sur patrimoines financiers > 100M€"
      },
      {
        source: "CER (Contribution Exceptionnelle Rétablissement)",
        montant: "5-6 Md€/an",
        description: "10% patrimoine > 100M€ étalé sur 10 ans"
      },
      {
        source: "Lutte contre la fraude fiscale renforcée",
        montant: "+3-5 Md€/an",
        description: "Renforcement des contrôles et moyens"
      },
      {
        source: "Nouvelle grille IR (impact net)",
        montant: "-1 à -2 Md€/an",
        description: "Allègement classes moyennes, hausse hauts revenus"
      }
    ],
    total: "57-89 Md€/an de recettes nouvelles nettes"
  },

  depenses: {
    title: "DÉPENSES TOTALES",
    
    viaCNJP: {
      titre: "Affectations via CNJP (49-84,8 Md€/an)",
      details: [
        {
          poste: "Revalorisation métiers publics",
          pourcentage: "30%",
          montant: "15-24 Md€/an",
          detail: "Enseignants 3Md€ + Soignants 4-5Md€ + Police 1,5Md€ + Autres 6,5-14,5Md€"
        },
        {
          poste: "FSCRD - Remboursement dette",
          pourcentage: "25-30%",
          montant: "12,5-24 Md€/an",
          detail: "Inclut CER 5-6 Md€/an"
        },
        {
          poste: "Fonds garantie retraites",
          pourcentage: "15%",
          montant: "7,5-12 Md€/an"
        },
        {
          poste: "Logement social",
          pourcentage: "12-15%",
          montant: "6-12 Md€/an",
          detail: "500k logements + Plan Habiter & Travailler"
        },
        {
          poste: "Santé mentale",
          pourcentage: "3%",
          montant: "1,5-2,4 Md€/an"
        },
        {
          poste: "Transition écologique",
          pourcentage: "12-13%",
          montant: "6-10,4 Md€/an",
          detail: "Rénovation 2Md€ + Mobilité 1Md€ + Emplois verts 3,8Md€ + Divers 1,6Md€"
        }
      ],
      sousTotal: "49-84,8 Md€/an"
    },

    horsCNJP: {
      titre: "Dépenses hors CNJP (financées autrement)",
      details: [
        {
          bloc: "Bloc 1 - Travail",
          mesures: [
            { nom: "PPI - Prime Progression Individuelle", montant: "1,35 Md€/an", financement: "Réaffectation chômage LD + FSE+" },
            { nom: "SCA - Statut Contributeur Actif", montant: "2-3 Md€/an", financement: "Fusion aides + Fonds UE" },
            { nom: "Référents Ambition emploi", montant: "0,4 Md€/an", financement: "Pôle Emploi + FSE+" },
            { nom: "Cap Contribution (plateforme)", montant: "0,08 Md€ (création) + 0,03 Md€/an", financement: "Budget État" }
          ],
          sousTotal: "3,78-4,78 Md€/an + 80M€ initial"
        },
        {
          bloc: "Bloc 2 - Justice",
          mesures: [
            { nom: "Observatoire Citoyen Justice", montant: "0,02 Md€/an", financement: "Budget Justice" },
            { nom: "Portail Ma Justice", montant: "0,1 Md€ (une fois)", financement: "Budget Justice" }
          ],
          sousTotal: "0,02 Md€/an + 100M€ initial"
        },
        {
          bloc: "Bloc 4 - Éducation",
          mesures: [
            { nom: "Double cursus professionnel", montant: "0,5 Md€ initial sur 5 ans", financement: "Budget Éducation + Régions" }
          ],
          sousTotal: "0,1 Md€/an sur 5 ans"
        },
        {
          bloc: "Bloc 10 - Démocratie",
          mesures: [
            { nom: "Budget citoyen national", montant: "2 Md€/an", financement: "Redéploiement subventions État" },
            { nom: "Service civique valorisé", montant: "1,42 Md€/an", financement: "Budget État + FSE+ + Collectivités" }
          ],
          sousTotal: "3,42 Md€/an"
        },
        {
          bloc: "Bloc 14 - Culture",
          mesures: [
            { nom: "Pass Culture étendu + Pass Solidaire", montant: "0,3 Md€/an", financement: "Budget Culture + CNJP indirect" }
          ],
          sousTotal: "0,3 Md€/an"
        }
      ],
      sousTotal: "7,62-8,62 Md€/an + 280M€ investissements initiaux"
    },

    totalGeneral: "56,6-93,4 Md€/an nécessaires"
  },

  equilibre: {
    recettes: "57-89 Md€/an",
    depenses: "56,6-93,4 Md€/an",
    solde: {
      optimiste: "+0,4 Md€/an (si CNJP 57Md€ et dépenses 56,6Md€)",
      median: "±0 Md€/an (équilibre)",
      pessimiste: "-4,4 Md€/an (si CNJP 89Md€ mais dépenses 93,4Md€)"
    },
    note: "Dans le scénario médian (CNJP 65-70 Md€/an), le programme est à l'équilibre. Le léger déficit du scénario pessimiste est largement compensé par les économies réalisées (baisse chômage, meilleure santé, moins d'exclusion) estimées à 5-8 Md€/an non comptabilisées ici."
  },

  economiesIndirectes: {
    titre: "Économies et gains indirects (non comptabilisés dans le budget)",
    items: [
      {
        source: "Réduction chômage structurel",
        economie: "2-3 Md€/an",
        detail: "Retour emploi via RSA réformé, formation, PPI"
      },
      {
        source: "Prévention santé mentale",
        economie: "1-1,5 Md€/an",
        detail: "Réduction arrêts maladie, hospitalisations évitées"
      },
      {
        source: "Réduction criminalité/récidive",
        economie: "0,8-1 Md€/an",
        detail: "Peines réparatrices, prévention collège"
      },
      {
        source: "Efficacité administrative",
        economie: "0,5-1 Md€/an",
        detail: "Digitalisation, guichets uniques"
      },
      {
        source: "Réduction urgences SDF",
        economie: "0,3-0,5 Md€/an",
        detail: "Moins d'hospitalisations, interventions urgentes"
      },
      {
        source: "Hausse recettes fiscales (emploi, activité)",
        gain: "1-2 Md€/an",
        detail: "Plus de cotisants, moins d'aides versées"
      }
    ],
    total: "5,6-9 Md€/an d'économies/gains indirects"
  },

  conclusion: `Le programme La Juste Voix est financièrement viable et équilibré :

✅ Recettes : 57-89 Md€/an (CNJP + CER + lutte fraude)
✅ Dépenses : 56,6-93,4 Md€/an (investissements massifs)
✅ Solde : équilibre ou léger excédent dans le scénario médian
✅ Économies indirectes : 5,6-9 Md€/an supplémentaires

Le programme ne repose PAS sur un déficit mais sur une contribution juste des 0,1% les plus fortunés (1 500 foyers) pour financer la reconstruction des services publics et l'accompagnement de tous vers l'autonomie.

Chaque euro prélevé sur les patrimoines dormants sert concrètement à :
• Revaloriser ceux qui font fonctionner le pays (enseignants, soignants, policiers)
• Rembourser la dette pour les générations futures
• Loger dignement chaque Français
• Former et accompagner vers l'emploi
• Préparer la transition écologique

C'est un programme JUSTE, CHIFFRÉ, VIABLE et TRANSFORMATEUR.`
};
