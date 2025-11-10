import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, AlertTriangle, CheckCircle2, XCircle, TrendingDown } from 'lucide-react';

const TaxCreditInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-ljv-gold/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-ljv-navy">
            <Info className="h-6 w-6" />
            Modalités d'Application & Exclusions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Objectif */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border-l-4 border-ljv-navy">
            <h3 className="font-bold text-lg mb-2 text-ljv-navy">
              🎯 Objectif des crédits d'impôt
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Valoriser l'excellence académique et reconnaître la contribution des professionnels hautement 
              qualifiés à l'innovation, la compétitivité et le développement économique et social du pays. 
              Ces crédits s'inscrivent dans une vision de justice fiscale qui récompense le mérite, 
              l'investissement dans la formation et la création de valeur.
            </p>
          </div>

          {/* Application automatique */}
          <div className="bg-green-50 p-5 rounded-lg border border-green-300">
            <div className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-green-900 mb-2">
                  Application automatique et simplifiée
                </h4>
                <p className="text-sm text-green-800 leading-relaxed">
                  Les crédits d'impôt s'appliquent automatiquement sur votre impôt sur le revenu. 
                  Vous n'avez qu'à déclarer votre éligibilité (diplôme ou profession) lors de votre 
                  déclaration annuelle. Le crédit est calculé et appliqué directement par l'administration fiscale.
                </p>
              </div>
            </div>
          </div>

          {/* Règles de dégressivité */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-ljv-navy flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Dégressivité Progressive pour les Hauts Revenus
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Bac+5+ */}
              <div className="bg-blue-50 rounded-lg border border-blue-300 p-4">
                <h4 className="font-bold text-blue-900 mb-3">Crédit Bac+5+ (15%)</h4>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-600" />
                    <span>
                      <strong>≤ 800 000 €/an :</strong> Crédit intégral de 15%
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="h-4 w-4 flex-shrink-0 mt-0.5 text-orange-600" />
                    <span>
                      <strong>800k€ à 1,2M€/an :</strong> Dégressivité linéaire progressive
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-600" />
                    <span>
                      <strong>&gt; 1 200 000 €/an :</strong> Crédit nul (exclusion)
                    </span>
                  </div>
                </div>
              </div>

              {/* Bac+10 */}
              <div className="bg-teal-50 rounded-lg border border-teal-300 p-4">
                <h4 className="font-bold text-teal-900 mb-3">Crédit Bac+10 (20%)</h4>
                <div className="space-y-2 text-sm text-teal-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-600" />
                    <span>
                      <strong>≤ 1 000 000 €/an :</strong> Crédit intégral de 20%
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="h-4 w-4 flex-shrink-0 mt-0.5 text-orange-600" />
                    <span>
                      <strong>1M€ à 1,5M€/an :</strong> Dégressivité linéaire progressive
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-600" />
                    <span>
                      <strong>&gt; 1 500 000 €/an :</strong> Crédit nul (exclusion)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Règles de non-cumul */}
          <Alert className="bg-orange-50 border-orange-300">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <AlertDescription className="text-orange-900">
              <h4 className="font-bold mb-2">⚠️ Règles de Non-Cumul</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <strong>1. Entre Bac+5+ et Bac+10 :</strong> Les deux crédits ne sont pas cumulables. 
                  Si vous êtes éligible aux deux, c'est automatiquement le plus avantageux (20% Bac+10) qui s'applique.
                </li>
                <li>
                  <strong>2. Exclusion ultra-hauts revenus :</strong> Les crédits ne bénéficient pas aux 
                  ultra-fortunés (revenus &gt;1,2M€ pour Bac+5+, &gt;1,5M€ pour Bac+10), conformément 
                  au principe de justice fiscale.
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          {/* Justification des exclusions */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-300">
            <h4 className="font-bold text-gray-900 mb-2">
              💡 Pourquoi ces exclusions pour les ultra-hauts revenus ?
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ces seuils garantissent que les crédits d'impôt bénéficient aux cadres qualifiés, 
              professionnels de santé et chercheurs qui créent de la valeur au quotidien, et non aux 
              ultra-fortunés qui n'en ont pas besoin. Cette approche progressive permet de valoriser 
              le mérite tout en préservant la justice fiscale et l'équilibre budgétaire.
            </p>
          </div>

          {/* Impact budgétaire */}
          <div className="bg-gradient-to-br from-ljv-gold/10 to-ljv-gold/5 rounded-lg p-5 border border-ljv-gold/30">
            <h4 className="font-bold mb-3 text-ljv-navy">💰 Impact Budgétaire Global</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Crédit Bac+5+</p>
                  <p className="text-3xl font-bold text-blue-800">1,61 Md€</p>
                  <p className="text-xs text-gray-500 mt-1">~1,95M bénéficiaires</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Crédit Bac+10</p>
                  <p className="text-3xl font-bold text-teal-800">76 M€</p>
                  <p className="text-xs text-gray-500 mt-1">~48k bénéficiaires</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center bg-white rounded-lg p-3 border-2 border-ljv-gold">
              <p className="text-sm text-gray-600 mb-1">Coût total annuel</p>
              <p className="text-4xl font-bold text-ljv-navy">1,69 Md€</p>
              <p className="text-xs text-gray-500 mt-1">
                Financé par l'IR ultra-hauts revenus (24-37 Md€/an)
              </p>
            </div>
          </div>

          {/* ROI estimé */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg border-l-4 border-green-600">
            <h4 className="font-bold text-green-900 mb-2">
              📈 Retour sur Investissement Estimé
            </h4>
            <p className="text-sm text-green-800 leading-relaxed">
              Le ROI estimé est de <strong>9:1</strong> grâce à la rétention des talents qualifiés, 
              l'attractivité économique renforcée, la stimulation de l'innovation et la réduction de 
              la fuite des cerveaux. Chaque euro investi dans ces crédits génère environ 9€ de valeur 
              économique et sociale.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxCreditInfo;
