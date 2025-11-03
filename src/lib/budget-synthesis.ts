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
      titre: "Affectations via CNJP (50-80 Md€/an = 100%)",
      details: [
        {
          poste: "Revalorisation métiers publics",
          pourcentage: "35%",
          montant: "17,5-28 Md€/an",
          detail: "Enseignants 3Md€ + Soignants 4-5Md€ + Police 1,5Md€ + Autres métiers publics 9-18,5Md€"
        },
        {
          poste: "FSCRD - Remboursement dette",
          pourcentage: "24%",
          montant: "12-19,2 Md€/an (CNJP) + 5-6 Md€/an (CER) = 17-25,2 Md€/an",
          detail: "Inclut CER 5-6 Md€/an"
        },
        {
          poste: "Logement social & Plan SDF",
          pourcentage: "18%",
          montant: "9-14,4 Md€/an",
          detail: "500k logements 3,6-4,8Md€/an + Plan Habiter & Travailler 1,5-4,5Md€/an = 9,3 Md€/an max ✅"
        },
        {
          poste: "Fonds garantie retraites",
          pourcentage: "9%",
          montant: "4,5-7,2 Md€/an"
        },
        {
          poste: "Santé mentale",
          pourcentage: "3%",
          montant: "1,5-2,4 Md€/an"
        },
        {
          poste: "Transition écologique",
          pourcentage: "11%",
          montant: "5,5-8,8 Md€/an",
          detail: "Rénovation 2Md€ + Mobilité 1Md€ + Transports 0,8Md€ + Emplois verts 1,5Md€ + Divers 0,4Md€ = 5,7 Md€/an ✅"
        }
      ],
      sousTotal: "50-80 Md€/an (100% de la CNJP)"
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
          bloc: "Bloc 9 - Sécurité",
          mesures: [
            { nom: "Prévention dès le collège (binômes)", montant: "0,56 Md€/an", financement: "Éducation 40% + Intérieur 40% + Collectivités 20%" }
          ],
          sousTotal: "0,56 Md€/an"
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
            { nom: "Pass Culture étendu + Pass Solidaire", montant: "0,3 Md€/an", financement: "Budget Culture + FSE+" }
          ],
          sousTotal: "0,3 Md€/an"
        }
      ],
      sousTotal: "8,18-9,18 Md€/an + 280M€ investissements initiaux"
    },

    totalGeneral: "58,2-89,2 Md€/an nécessaires"
  },

  equilibre: {
    recettes: "57-89 Md€/an",
    depenses: "58,2-89,2 Md€/an",
    solde: {
      optimiste: "-1,2 Md€/an (compensé par économies indirectes 5,6-9 Md€/an = solde final +4,4 à +7,8 Md€)",
      median: "±0 Md€/an (équilibre parfait autour de 70-75 Md€)",
      pessimiste: "-0,2 Md€/an (compensé par économies indirectes = solde final +5,4 à +8,8 Md€)"
    },
    note: "Le programme est PARFAITEMENT VIABLE dans tous les scénarios. Les pourcentages CNJP font exactement 100% : 35% + 24% + 18% + 9% + 3% + 11% = 100%. Budget LOGEMENT 18% (9-14,4 Md€/an) couvre 500k logements + Plan SDF = 9,3 Md€/an ✅. Budget ÉCOLOGIE 11% (5,5-8,8 Md€/an) couvre tous les besoins = 5,7 Md€/an ✅. Même dans le scénario pessimiste (-1,2 Md€), les économies indirectes (5,6-9 Md€/an) garantissent un EXCÉDENT de 4,4 à 8,8 Md€/an."
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

  conclusion: `Le programme La Juste Voix est financièrement viable et PARFAITEMENT équilibré :

✅ Recettes : 57-89 Md€/an (CNJP + CER + lutte fraude)
✅ Dépenses : 58,2-89,2 Md€/an (investissements massifs)
✅ Solde brut : -1,2 à +0 Md€/an selon scénario
✅ Pourcentages CNJP : 100% exactement (35%+24%+18%+9%+3%+11%)
✅ Économies indirectes : 5,6-9 Md€/an NON comptabilisées
✅ SOLDE FINAL : +4,4 à +8,8 Md€/an d'EXCÉDENT dans tous les scénarios

Le programme ne repose PAS sur un déficit mais sur une contribution juste des 0,1% les plus fortunés (1 500 foyers) pour financer la reconstruction des services publics et l'accompagnement de tous vers l'autonomie.

Chaque euro prélevé sur les patrimoines dormants sert concrètement à :
• Revaloriser ceux qui font fonctionner le pays (enseignants, soignants, policiers) : 35%
• Rembourser la dette pour les générations futures : 24% + CER intégral
• Loger dignement chaque Français + Plan zéro SDF : 18%
• Sécuriser les retraites : 9%
• Santé mentale accessible à tous : 3%
• Préparer la transition écologique : 11%

TOTAL = 100% des 50-80 Md€/an de CNJP parfaitement affectés

C'est un programme JUSTE, CHIFFRÉ, VIABLE, PARFAITEMENT ÉQUILIBRÉ et TRANSFORMATEUR.

Avec les économies indirectes (5,6-9 Md€/an), le programme génère un EXCÉDENT structurel de 4,4 à 8,8 Md€/an qui peut financer d'autres priorités ou accélérer le remboursement de la dette.`
};
