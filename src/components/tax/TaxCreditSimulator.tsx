import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, AlertCircle } from 'lucide-react';
import { calculateIncomeTax } from '@/lib/tax-calculations';
import { formatAmount } from './FormatAmount';

const TaxCreditSimulator: React.FC = () => {
  const [income, setIncome] = useState<string>('60000');
  const [creditType, setCreditType] = useState<'none' | 'bac5' | 'bac10'>('none');
  const [showResults, setShowResults] = useState(false);

  const calculateResults = () => {
    const annualIncome = parseFloat(income) || 0;
    
    const taxWithoutCredit = calculateIncomeTax(annualIncome, false, false);
    const taxWithBac5 = calculateIncomeTax(annualIncome, true, false);
    const taxWithBac10 = calculateIncomeTax(annualIncome, false, true);

    const savingsBac5 = taxWithoutCredit - taxWithBac5;
    const savingsBac10 = taxWithoutCredit - taxWithBac10;

    return {
      taxWithoutCredit,
      taxWithBac5,
      taxWithBac10,
      savingsBac5,
      savingsBac10,
      monthlySavingsBac5: savingsBac5 / 12,
      monthlySavingsBac10: savingsBac10 / 12,
    };
  };

  const results = showResults ? calculateResults() : null;

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <Card className="border-2 border-ljv-gold/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl text-ljv-navy">
          <Calculator className="h-6 w-6" />
          Simulateur de Crédit d'Impôt
        </CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          Calculez l'impact des crédits d'impôt Bac+5+ et Bac+10 sur votre fiscalité
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div>
            <Label htmlFor="income" className="text-base font-semibold">
              Votre revenu annuel imposable (€)
            </Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => {
                setIncome(e.target.value);
                setShowResults(false);
              }}
              placeholder="Ex: 60000"
              className="mt-2 text-lg"
              min="0"
              step="1000"
            />
            <p className="text-xs text-gray-500 mt-1">
              Entrez votre revenu annuel net imposable (après déductions sociales)
            </p>
          </div>

          <Button 
            onClick={handleCalculate}
            className="w-full bg-ljv-navy hover:bg-ljv-navy/90 text-white"
            size="lg"
          >
            <Calculator className="h-5 w-5 mr-2" />
            Calculer mon crédit d'impôt
          </Button>
        </div>

        {/* Results Section */}
        {showResults && results && (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            {/* Without Credit */}
            <div className="bg-gray-100 p-5 rounded-lg border-2 border-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sans crédit d'impôt</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {formatAmount(results.taxWithoutCredit)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">par mois</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {formatAmount(results.taxWithoutCredit / 12)}
                  </p>
                </div>
              </div>
            </div>

            {/* With Bac+5 Credit */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg border-2 border-blue-300">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-blue-600 text-white">Crédit Bac+5+ (15%)</Badge>
                {results.savingsBac5 <= 0 && (
                  <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                    Non applicable
                  </Badge>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700 mb-1">Impôt après crédit</p>
                    <p className="text-2xl font-bold text-blue-800">
                      {formatAmount(results.taxWithBac5)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">par mois</p>
                    <p className="text-lg font-semibold text-blue-700">
                      {formatAmount(results.taxWithBac5 / 12)}
                    </p>
                  </div>
                </div>
                {results.savingsBac5 > 0 && (
                  <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-800 font-medium flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          Économie annuelle
                        </p>
                        <p className="text-xl font-bold text-green-900">
                          {formatAmount(results.savingsBac5)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-800 font-medium">par mois</p>
                        <p className="text-lg font-bold text-green-900">
                          +{formatAmount(results.monthlySavingsBac5)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* With Bac+10 Credit */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-5 rounded-lg border-2 border-teal-300">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-teal-600 text-white">Crédit Bac+10 (20%)</Badge>
                {results.savingsBac10 <= 0 && (
                  <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                    Non applicable
                  </Badge>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700 mb-1">Impôt après crédit</p>
                    <p className="text-2xl font-bold text-teal-800">
                      {formatAmount(results.taxWithBac10)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">par mois</p>
                    <p className="text-lg font-semibold text-teal-700">
                      {formatAmount(results.taxWithBac10 / 12)}
                    </p>
                  </div>
                </div>
                {results.savingsBac10 > 0 && (
                  <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-800 font-medium flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          Économie annuelle
                        </p>
                        <p className="text-xl font-bold text-green-900">
                          {formatAmount(results.savingsBac10)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-800 font-medium">par mois</p>
                        <p className="text-lg font-bold text-green-900">
                          +{formatAmount(results.monthlySavingsBac10)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Warning for high incomes */}
            {parseFloat(income) > 800000 && (
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-300 flex gap-3">
                <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-orange-800">
                  <p className="font-semibold mb-1">Dégressivité progressive</p>
                  <p>
                    Les crédits d'impôt sont dégressifs pour les hauts revenus :
                    <br />• Bac+5+ : dégressif entre 800k€ et 1,2M€, nul au-delà
                    <br />• Bac+10 : dégressif entre 1M€ et 1,5M€, nul au-delà
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>💡 Bon à savoir :</strong> Les crédits d'impôt Bac+5+ et Bac+10 ne sont pas cumulables. 
            Si vous êtes éligible aux deux, c'est automatiquement le plus avantageux (20% Bac+10) qui s'applique.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCreditSimulator;
