
export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
  description: string;
}

// Nouveaux barèmes IR - Ultra-Hauts Revenus uniquement
export const taxBrackets: TaxBracket[] = [
  {
    min: 1,
    max: 5,
    rate: 55,
    description: "Ultra-hauts revenus (1-5 M€/an)"
  },
  {
    min: 5,
    max: 10,
    rate: 60,
    description: "Très ultra-hauts revenus (5-10 M€/an)"
  },
  {
    min: 10,
    max: null,
    rate: 65,
    description: "Revenus extrêmes (> 10 M€/an)"
  }
];

export const taxBracketsContent = {
  title: "Impôt sur le Revenu - Barème Ultra-Hauts Revenus",
  description: "Suite au pivot stratégique, la CNJP a été abandonnée au profit d'un renforcement de l'impôt sur le revenu pour les ultra-hauts revenus (> 1 M€/an). Ce barème progressif vise les 0,01% des contribuables les plus aisés avec des taux de 55%, 60% et 65%.",
  supplementaryInfo: `Ce nouveau système fiscal repose sur :
- Justice : taxation progressive uniquement sur les revenus exceptionnels
- Simplicité : plus d'évaluation complexe de patrimoine
- Sécurité juridique : 95% de probabilité de validation constitutionnelle
- Efficacité : génération de 24 à 37 Md€/an
- Maintien du crédit d'impôt Bac+5+ de 15% (pour revenus < 1,2 M€)

Les montants sont exprimés en millions d'euros (M€) de revenu annuel.`,
  notes: "Le taux s'applique uniquement sur la fraction du revenu comprise dans chaque tranche. Les barèmes standards (5%, 14%, 30%, 41%, 45%, 50%) continuent de s'appliquer pour les revenus inférieurs à 1 M€/an."
};

