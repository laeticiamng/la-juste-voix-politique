// FONCTIONS DE CALCUL FISCAL - LA JUSTE VOIX
// Calculs automatiques pour garantir la cohérence

import { taxBrackets } from './tax-brackets';

/**
 * CNJP ABANDONNÉE - Programme pivoté vers IR hauts revenus uniquement
 * La CNJP comportait trop de failles juridiques fatales :
 * - Atteinte propriété CEDH (extinction progressive patrimoine)
 * - Évaluation patrimoine impossible (startups, art, crypto)
 * - Exode Monaco inévitable et légal
 * 
 * @deprecated Cette fonction est conservée pour compatibilité mais retourne toujours 0
 * @returns 0 (CNJP supprimée du programme)
 */
export const calculateCNJP = (
  patrimoineM: number = 0,
  patrimoineProfessionnelM: number = 0,
  rendementAnnuelPct: number = 3
): number => {
  // CNJP ABANDONNÉE suite à analyse des failles juridiques
  // Voir: SYNTHESE_FINALE_TOUTES_FAILLES.md
  return 0;
};

/**
 * Calcule l'impôt sur le revenu selon le NOUVEAU barème La Juste Voix (post-pivot)
 * 
 * CHANGEMENT MAJEUR : CNJP abandonnée → Nouvelles tranches IR très hauts revenus
 * 
 * @param revenuAnnuel Revenu annuel en euros
 * @param isHigherEducation Si le contribuable est diplômé Bac+5+ grandes écoles (crédit 15%)
 * @param isSubjectToCNJP Paramètre conservé pour compatibilité mais non utilisé (CNJP supprimée)
 * @returns Montant IR en euros
 * 
 * NOUVEAU BARÈME POST-PIVOT (juridiquement solide) :
 * - 0-12k€: 0%
 * - 12-27k€: 5%
 * - 27-78k€: 14%
 * - 78-168k€: 30%
 * - 168-400k€: 41%
 * - 400k-1M€: 50%
 * - 1-5M€: 55% ⬆️ NOUVEAU
 * - 5-10M€: 60% ⬆️ NOUVEAU
 * - >10M€: 65% ⬆️ NOUVEAU
 * 
 * Le crédit 15% Bac+5+ est maintenu pour encourager les compétences rares.
 */
export const calculateIncomeTax = (
  revenuAnnuel: number,
  isHigherEducation: boolean = false,
  isSubjectToCNJP: boolean = false // Paramètre conservé mais ignoré
): number => {
  let impot = 0;

  // Nouveau barème progressif La Juste Voix (post-pivot)
  if (revenuAnnuel <= 12000) {
    impot = 0;
  } else if (revenuAnnuel <= 27000) {
    impot = (revenuAnnuel - 12000) * 0.05;
  } else if (revenuAnnuel <= 78000) {
    impot = 15000 * 0.05 + (revenuAnnuel - 27000) * 0.14;
  } else if (revenuAnnuel <= 168000) {
    impot = 15000 * 0.05 + 51000 * 0.14 + (revenuAnnuel - 78000) * 0.30;
  } else if (revenuAnnuel <= 400000) {
    impot = 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + (revenuAnnuel - 168000) * 0.41;
  } else if (revenuAnnuel <= 1000000) {
    impot = 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + 232000 * 0.41 + (revenuAnnuel - 400000) * 0.50;
  } else if (revenuAnnuel <= 5000000) {
    // NOUVELLE TRANCHE 1-5M€ : 55%
    impot = 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + 232000 * 0.41 + 600000 * 0.50 + (revenuAnnuel - 1000000) * 0.55;
  } else if (revenuAnnuel <= 10000000) {
    // NOUVELLE TRANCHE 5-10M€ : 60%
    impot = 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + 232000 * 0.41 + 600000 * 0.50 + 4000000 * 0.55 + (revenuAnnuel - 5000000) * 0.60;
  } else {
    // NOUVELLE TRANCHE >10M€ : 65%
    impot = 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + 232000 * 0.41 + 600000 * 0.50 + 4000000 * 0.55 + 5000000 * 0.60 + (revenuAnnuel - 10000000) * 0.65;
  }

  // Crédit d'impôt de 15% pour diplômés Bac+5+ grandes écoles MAINTENU
  // Exclusion uniquement ultra-hauts revenus >1,2M€
  let creditRate = 0;
  
  if (isHigherEducation) {
    if (revenuAnnuel <= 800000) {
      creditRate = 0.15;
    } else if (revenuAnnuel <= 1200000) {
      // Dégressivité progressive entre 800k€ et 1,2M€
      const degressivityFactor = (1200000 - revenuAnnuel) / 400000;
      creditRate = 0.15 * degressivityFactor;
    }
  }
  
  if (creditRate > 0 && impot > 0) {
    impot = impot * (1 - creditRate);
  }

  return Math.max(0, impot);
};

/**
 * Calcule la contribution fiscale totale (IR uniquement, CNJP supprimée)
 * 
 * CHANGEMENT POST-PIVOT : CNJP abandonnée, seul l'IR subsiste
 * Plus besoin de plafonnement global car IR seul ne peut pas être confiscatoire
 * 
 * @param revenuAnnuel Revenu annuel en euros
 * @param patrimoineM Patrimoine en M€ (conservé pour compatibilité mais non utilisé)
 * @param isHigherEducation Si diplômé Bac+5+
 * @returns { ir: number, cnjp: number (toujours 0), total: number, plafonne: boolean (toujours false) }
 */
export const calculateTotalContribution = (
  revenuAnnuel: number,
  patrimoineM: number = 0,
  isHigherEducation: boolean = false
): { ir: number; cnjp: number; total: number; plafonne: boolean; paiementDiffere: boolean } => {
  const ir = calculateIncomeTax(revenuAnnuel, isHigherEducation, false);
  const cnjp = 0; // CNJP supprimée du programme
  
  return {
    ir,
    cnjp: 0,
    total: ir,
    plafonne: false, // Plus de plafonnement nécessaire (IR seul)
    paiementDiffere: false // Plus de paiement différé (pas de CNJP)
  };
};

/**
 * Calcule le salaire net à partir du brut
 * @param salaireBrut Salaire brut mensuel en euros
 * @param tauxCotisation Taux de cotisation (défaut 23%)
 * @returns Salaire net mensuel en euros
 */
export const calculateNetSalary = (
  salaireBrut: number,
  tauxCotisation: number = 0.23
): number => {
  return salaireBrut * (1 - tauxCotisation);
};

/**
 * Calcule l'impôt mensuel à partir de l'impôt annuel
 * @param impotAnnuel Impôt annuel en euros
 * @returns Impôt mensuel en euros
 */
export const calculateMonthlyTax = (impotAnnuel: number): number => {
  return impotAnnuel / 12;
};

/**
 * Calcule le salaire disponible après impôts
 * @param salaireNet Salaire net mensuel
 * @param impotMensuel Impôt mensuel
 * @returns Salaire disponible mensuel
 */
export const calculateDisposableIncome = (
  salaireNet: number,
  impotMensuel: number
): number => {
  return salaireNet - impotMensuel;
};

/**
 * Professions éligibles au crédit d'impôt de 15% pour diplômés Bac+5+
 * Grandes écoles de commerce, d'ingénieurs, et cadres supérieurs qualifiés
 */
export const HIGHER_EDUCATION_PROFESSIONS = [
  // Ingénieurs et techniques
  'ingénieur',
  'informaticien',
  'développeur',
  'chercheur',
  'technicien supérieur',
  'architecte',
  'data scientist',
  'expert r&d',
  'manager r&d',
  // Commerce et gestion
  'cadre commercial',
  'directeur commercial',
  'responsable marketing',
  'consultant',
  'analyste financier',
  'contrôleur de gestion',
  'directeur financier',
  'chef de produit',
  'business developer',
  // Management
  'cadre supérieur',
  'directeur',
  'manager',
  'responsable',
  'chef de projet',
  'chef de service',
  // Professions libérales qualifiées
  'expert-comptable',
  'avocat',
  'notaire',
  'pharmacien',
  'vétérinaire'
];

/**
 * Vérifie si une profession est éligible au crédit d'impôt 15% (Bac+5+)
 * @param metier Nom du métier
 * @returns true si éligible au crédit d'impôt
 */
export const isHigherEducationProfession = (metier: string): boolean => {
  const metierLower = metier.toLowerCase();
  return HIGHER_EDUCATION_PROFESSIONS.some(prof => metierLower.includes(prof));
};

/**
 * Calcule le coût annuel total du crédit d'impôt pour diplômés Bac+5+
 * POST-PIVOT : Crédit maintenu car juridiquement solide et encourageant
 * 
 * Estimation basée sur ~1,95 millions de cadres supérieurs Bac+5+ en France
 * Exclusion uniquement ultra-hauts revenus >1,2M€ (plus de CNJP)
 * @returns Coût estimé en milliards d'euros
 */
export const estimateHigherEducationTaxCreditCost = (): number => {
  const numberOfQualifiedWorkers = 2000000; // ~2M cadres Bac+5+
  const exclusionRate = 0.015; // 1,5% exclus (revenus >1,2M€ uniquement, plus de CNJP)
  const eligibleWorkers = numberOfQualifiedWorkers * (1 - exclusionRate);
  const averageIncomeTax = 5500; // IR moyen annuel
  const creditRate = 0.15;
  const averageCredit = averageIncomeTax * creditRate;
  const totalCostMillions = (eligibleWorkers * averageCredit) / 1000000;
  const totalCostBillions = totalCostMillions / 1000;
  
  return Math.round(totalCostBillions * 100) / 100; // ~1.62 Md€
};
