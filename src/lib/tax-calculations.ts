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
 * @param isProfessionTechnique Si le contribuable exerce une profession technique (crédit 15%)
 * @returns Montant IR en euros
 */
export const calculateIncomeTax = (
  revenuAnnuel: number,
  isProfessionTechnique: boolean = false
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

  // Crédit d'impôt de 15% pour professions techniques et scientifiques
  if (isProfessionTechnique && impot > 0) {
    impot = impot * 0.85; // Réduction de 15%
  }

  return Math.max(0, impot);
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
 * Professions éligibles au crédit d'impôt technique (15%)
 */
export const TECHNICAL_PROFESSIONS = [
  'ingénieur',
  'informaticien',
  'développeur',
  'chercheur',
  'technicien',
  'architecte',
  'data scientist',
  'expert r&d',
  'manager r&d'
];

/**
 * Vérifie si une profession est éligible au crédit d'impôt technique
 * @param metier Nom du métier
 * @returns true si éligible au crédit d'impôt
 */
export const isTechnicalProfession = (metier: string): boolean => {
  const metierLower = metier.toLowerCase();
  return TECHNICAL_PROFESSIONS.some(prof => metierLower.includes(prof));
};

/**
 * Calcule le coût annuel total du crédit d'impôt technique
 * Estimation basée sur ~500 000 ingénieurs/professions techniques en France
 * @returns Coût estimé en milliards d'euros
 */
export const estimateTechnicalTaxCreditCost = (): number => {
  const numberOfTechnicalWorkers = 500000; // Estimation
  const averageIncomeTax = 3300; // IR moyen annuel pour ces professions
  const creditRate = 0.15;
  const averageCredit = averageIncomeTax * creditRate;
  const totalCostMillions = (numberOfTechnicalWorkers * averageCredit) / 1000000;
  const totalCostBillions = totalCostMillions / 1000;
  
  return Math.round(totalCostBillions * 100) / 100; // Arrondi à 2 décimales
};
