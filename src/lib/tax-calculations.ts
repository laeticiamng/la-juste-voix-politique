// FONCTIONS DE CALCUL FISCAL - LA JUSTE VOIX
// Calculs automatiques pour garantir la cohérence

import { taxBrackets } from './tax-brackets';

/**
 * Calcule la CNJP selon le barème progressif officiel
 * @param patrimoineM Patrimoine en millions d'euros
 * @returns Montant CNJP en millions d'euros
 */
export const calculateCNJP = (patrimoineM: number): number => {
  if (patrimoineM < 100) return 0;

  let cnjp = 0;
  let previousMax = 100;

  for (const bracket of taxBrackets) {
    const bracketMin = bracket.min;
    const bracketMax = bracket.max || Infinity;

    if (patrimoineM > bracketMin) {
      const taxableInBracket = Math.min(patrimoineM, bracketMax) - Math.max(previousMax, bracketMin);
      if (taxableInBracket > 0) {
        cnjp += taxableInBracket * (bracket.rate / 100);
      }
      previousMax = bracketMax;
    }

    if (bracket.max === null || patrimoineM <= bracket.max) {
      break;
    }
  }

  return cnjp;
};

/**
 * Calcule l'impôt sur le revenu selon le barème La Juste Voix
 * @param revenuAnnuel Revenu annuel en euros
 * @param isHigherEducation Si le contribuable est diplômé Bac+5+ grandes écoles (crédit 15%)
 * @param isSubjectToCNJP Si le contribuable paie la CNJP (patrimoine >= 100M€)
 * @returns Montant IR en euros
 * 
 * RÈGLES DE NON-CUMUL DU CRÉDIT 15% :
 * 1. Non cumulable avec la CNJP (patrimoine >= 100M€)
 * 2. Non applicable aux très hauts revenus (> 1 000 000 €/an)
 * 3. Dégressivité progressive entre 800k€ et 1,2M€ (éviter seuil brutal)
 * Le crédit vise les cadres qualifiés, pas les ultra-fortunés.
 */
export const calculateIncomeTax = (
  revenuAnnuel: number,
  isHigherEducation: boolean = false,
  isSubjectToCNJP: boolean = false
): number => {
  let impot = 0;

  // Barème progressif La Juste Voix
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
  } else {
    impot = 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + 232000 * 0.41 + (revenuAnnuel - 400000) * 0.50;
  }

  // Crédit d'impôt de 15% pour diplômés Bac+5+ grandes écoles
  // RÈGLES D'EXCLUSION :
  // - Ultra-riches patrimoniaux : CNJP (>= 100M€)
  // - Ultra-hauts revenus : > 1M€ avec dégressivité
  let creditRate = 0;
  
  if (isHigherEducation && !isSubjectToCNJP) {
    if (revenuAnnuel <= 800000) {
      // Crédit plein 15%
      creditRate = 0.15;
    } else if (revenuAnnuel <= 1200000) {
      // Dégressivité progressive entre 800k€ et 1,2M€
      const degressivityFactor = (1200000 - revenuAnnuel) / 400000;
      creditRate = 0.15 * degressivityFactor;
    }
    // Au-delà de 1,2M€: pas de crédit
  }
  
  if (creditRate > 0 && impot > 0) {
    impot = impot * (1 - creditRate);
  }

  return Math.max(0, impot);
};

/**
 * Calcule la contribution totale avec plafonnement global à 75%
 * @param revenuAnnuel Revenu annuel en euros
 * @param patrimoineM Patrimoine en millions d'euros
 * @param isHigherEducation Si diplômé Bac+5+
 * @returns { ir: number, cnjp: number, total: number, plafonne: boolean }
 */
export const calculateTotalContribution = (
  revenuAnnuel: number,
  patrimoineM: number,
  isHigherEducation: boolean = false
): { ir: number; cnjp: number; total: number; plafonne: boolean } => {
  const isSubjectToCNJP = patrimoineM >= 100;
  const ir = calculateIncomeTax(revenuAnnuel, isHigherEducation, isSubjectToCNJP);
  const cnjp = isSubjectToCNJP ? calculateCNJP(patrimoineM) * 1000000 : 0;
  
  const totalBeforeCap = ir + cnjp;
  const cap75 = revenuAnnuel * 0.75; // Plafond à 75% du revenu
  
  if (totalBeforeCap > cap75 && revenuAnnuel > 0) {
    // Plafonnement appliqué
    return {
      ir: ir * (cap75 / totalBeforeCap), // Réduction proportionnelle
      cnjp: cnjp * (cap75 / totalBeforeCap),
      total: cap75,
      plafonne: true
    };
  }
  
  return {
    ir,
    cnjp,
    total: totalBeforeCap,
    plafonne: false
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
 * Estimation basée sur ~1,95 millions de cadres supérieurs Bac+5+ en France
 * APRÈS EXCLUSIONS : Ultra-riches CNJP (≥100M€) et ultra-hauts revenus (>1M€)
 * @returns Coût estimé en milliards d'euros
 */
export const estimateHigherEducationTaxCreditCost = (): number => {
  const numberOfQualifiedWorkers = 2000000; // ~2M cadres Bac+5+
  const exclusionRate = 0.025; // 2,5% exclus (CNJP + >1M€)
  const eligibleWorkers = numberOfQualifiedWorkers * (1 - exclusionRate);
  const averageIncomeTax = 5500; // IR moyen annuel plus élevé pour ces professions
  const creditRate = 0.15;
  const averageCredit = averageIncomeTax * creditRate;
  const totalCostMillions = (eligibleWorkers * averageCredit) / 1000000;
  const totalCostBillions = totalCostMillions / 1000;
  
  return Math.round(totalCostBillions * 100) / 100; // Arrondi à 2 décimales = 1.61 Md€
};
