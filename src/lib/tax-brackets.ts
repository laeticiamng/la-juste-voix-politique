
export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
  description: string;
}

export const taxBrackets: TaxBracket[] = [
  {
    min: 100,
    max: 250,
    rate: 3,
    description: "Première tranche de contribution"
  },
  {
    min: 250,
    max: 500,
    rate: 5,
    description: "Patrimoine important"
  },
  {
    min: 500,
    max: 1000,
    rate: 10,
    description: "Grande fortune"
  },
  {
    min: 1000,
    max: 2000,
    rate: 15,
    description: "Très grande fortune"
  },
  {
    min: 2000,
    max: 5000,
    rate: 20,
    description: "Fortune exceptionnelle"
  },
  {
    min: 5000,
    max: 10000,
    rate: 25,
    description: "Patrimoine stratosphérique"
  },
  {
    min: 10000,
    max: 20000,
    rate: 30,
    description: "Hyper-fortune"
  },
  {
    min: 20000,
    max: 35000,
    rate: 35,
    description: "Méga-fortune"
  },
  {
    min: 35000,
    max: 50000,
    rate: 38,
    description: "Ultra-fortune"
  },
  {
    min: 50000,
    max: null,
    rate: 60,
    description: "Fortune extrême (seuil maximum pour financement complet du programme)"
  }
];

export const taxBracketsContent = {
  title: "Barème Progressif de la Contribution Nationale pour la Justice et le Progrès (CNJP)",
  description: "La Contribution Nationale pour la Justice et le Progrès (CNJP) repose sur un principe simple : plus votre patrimoine est élevé, plus votre taux de contribution augmente. Ce barème équilibré commence à 3% et atteint 60% pour les patrimoines extrêmes (> 50 Md€), permettant de financer INTÉGRALEMENT toutes les réformes du programme.",
  supplementaryInfo: `La CNJP ne concerne que les 0,1% des Français les plus fortunés - ceux dont le patrimoine net dépasse 100 millions d'euros.

Ce barème est conçu pour être:
- Juste : en demandant plus à ceux qui ont plus
- Efficace : en générant 90-130 Md€/an pour financer TOUTES les réformes
- Honnête : TOUS les coûts sont intégrés, aucune économie hypothétique
- Équilibré : en préservant l'initiative et la création de richesse
- Ambitieux : le taux de 60% permet de financer le programme COMPLET sans dette

Les montants sont exprimés en millions d'euros (M€) et milliards d'euros (Md€).`,
  notes: "Le taux s'applique uniquement sur la fraction du patrimoine comprise dans chaque tranche."
};

