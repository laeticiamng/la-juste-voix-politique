// FONCTIONS DE CALCUL FISCAL - LA JUSTE VOIX
// Calculs automatiques pour garantir la cohérence

import { taxBrackets } from './tax-brackets';

/**
 * Fonction de contribution patrimoniale (non utilisée dans le programme actuel)
 * 
 * @deprecated Cette fonction retourne toujours 0 - Le programme est financé par l'IR ultra-hauts revenus
 * @returns 0
 */
export const calculateCNJP = (
  patrimoineM: number = 0,
  patrimoineProfessionnelM: number = 0,
  rendementAnnuelPct: number = 3
): number => {
  return 0; // Programme financé par IR ultra-hauts revenus
};

/**
 * Calcule l'impôt sur le revenu selon le barème La Juste Voix
 * 
 * @param revenuAnnuel Revenu annuel en euros
 * @param isHigherEducation Si le contribuable est diplômé Bac+5+ grandes écoles (crédit 15%)
 * @param isDoctorate Si le contribuable est titulaire d'un doctorat Bac+10 médecine/pharmacie (crédit 20%)
 * @param isSubjectToCNJP Paramètre conservé pour compatibilité (non utilisé)
 * @returns Montant IR en euros
 * 
 * BARÈME PROGRESSIF LA JUSTE VOIX :
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
 * Crédits d'impôt :
 * - 15% Bac+5+ grandes écoles (cadres qualifiés)
 * - 20% Bac+10 doctorats médecine/pharmacie appliqués (non cumulable avec 15%)
 */
export const calculateIncomeTax = (
  revenuAnnuel: number,
  isHigherEducation: boolean = false,
  isDoctorate: boolean = false,
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

  // Crédits d'impôt : 15% Bac+5+ OU 20% Bac+10 doctorats (non cumulables)
  let creditRate = 0;
  
  // Crédit 20% pour doctorats Bac+10 médecine/pharmacie (prioritaire si applicable)
  if (isDoctorate) {
    if (revenuAnnuel <= 1000000) {
      creditRate = 0.20;
    } else if (revenuAnnuel <= 1500000) {
      // Dégressivité progressive entre 1M€ et 1,5M€
      const degressivityFactor = (1500000 - revenuAnnuel) / 500000;
      creditRate = 0.20 * degressivityFactor;
    }
  }
  // Sinon, crédit 15% pour diplômés Bac+5+ grandes écoles
  else if (isHigherEducation) {
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
 * Calcule la contribution fiscale totale (IR uniquement)
 * 
 * @param revenuAnnuel Revenu annuel en euros
 * @param patrimoineM Patrimoine en M€ (conservé pour compatibilité)
 * @param isHigherEducation Si diplômé Bac+5+
 * @param isDoctorate Si titulaire doctorat Bac+10 médecine/pharmacie
 * @returns { ir: number, cnjp: 0, total: number, plafonne: false, paiementDiffere: false }
 */
export const calculateTotalContribution = (
  revenuAnnuel: number,
  patrimoineM: number = 0,
  isHigherEducation: boolean = false,
  isDoctorate: boolean = false
): { ir: number; cnjp: number; total: number; plafonne: boolean; paiementDiffere: boolean } => {
  const ir = calculateIncomeTax(revenuAnnuel, isHigherEducation, isDoctorate, false);
  
  return {
    ir,
    cnjp: 0,
    total: ir,
    plafonne: false,
    paiementDiffere: false
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
];

/**
 * Professions éligibles au crédit d'impôt de 20% pour doctorats Bac+10
 * Médecine, pharmacie et disciplines connexes appliquées
 */
export const DOCTORATE_MEDICAL_PROFESSIONS = [
  // Médecine
  'médecin spécialiste',
  'chirurgien',
  'cardiologue',
  'oncologue',
  'neurologue',
  'radiologue',
  'anesthésiste',
  'pédiatre',
  'gynécologue',
  'psychiatre',
  'médecin chercheur',
  'chef de service',
  'professeur médecine',
  // Pharmacie
  'pharmacien hospitalier',
  'pharmacien chercheur',
  'docteur en pharmacie',
  // Biologie et recherche médicale
  'docteur en biologie médicale',
  'chercheur clinique',
  'biologiste médical',
  // Vétérinaire
  'vétérinaire chercheur',
  'docteur vétérinaire'
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
 * Vérifie si une profession est éligible au crédit d'impôt 20% (Bac+10 doctorats)
 * @param metier Nom du métier
 * @returns true si éligible au crédit d'impôt doctorat
 */
export const isDoctorateMedialProfession = (metier: string): boolean => {
  const metierLower = metier.toLowerCase();
  return DOCTORATE_MEDICAL_PROFESSIONS.some(prof => metierLower.includes(prof));
};

/**
 * Calcule le coût annuel total du crédit d'impôt pour diplômés Bac+5+
 * 
 * Estimation basée sur ~1,95 millions de cadres supérieurs Bac+5+ en France
 * Exclusion des ultra-hauts revenus >1,2M€
 * @returns Coût estimé en milliards d'euros
 */
export const estimateHigherEducationTaxCreditCost = (): number => {
  const numberOfQualifiedWorkers = 2000000; // ~2M cadres Bac+5+
  const exclusionRate = 0.015; // 1,5% exclus (revenus >1,2M€)
  const eligibleWorkers = numberOfQualifiedWorkers * (1 - exclusionRate);
  const averageIncomeTax = 5500; // IR moyen annuel
  const creditRate = 0.15;
  const averageCredit = averageIncomeTax * creditRate;
  const totalCostMillions = (eligibleWorkers * averageCredit) / 1000000;
  const totalCostBillions = totalCostMillions / 1000;
  
  return Math.round(totalCostBillions * 100) / 100; // ~1.62 Md€
};

/**
 * Calcule le coût annuel total du crédit d'impôt pour doctorats Bac+10 médecine/pharmacie
 * 
 * Estimation basée sur ~50k médecins spécialistes et pharmaciens hospitaliers en France
 * Exclusion ultra-hauts revenus >1,5M€
 * @returns Coût estimé en millions d'euros
 */
export const estimateDoctorateMedialTaxCreditCost = (): number => {
  const numberOfDoctors = 50000; // ~50k médecins spé + pharmaciens hospitaliers
  const exclusionRate = 0.04; // 4% exclus (revenus >1,5M€)
  const eligibleDoctors = numberOfDoctors * (1 - exclusionRate);
  const averageIncomeTax = 7900; // IR moyen annuel (revenus plus élevés que Bac+5+)
  const creditRate = 0.20;
  const averageCredit = averageIncomeTax * creditRate;
  const totalCostMillions = (eligibleDoctors * averageCredit) / 1000000;
  
  return Math.round(totalCostMillions); // ~76 M€
};
