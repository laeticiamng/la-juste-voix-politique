
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const TaxSimulator: React.FC = () => {
  const [patrimoine, setPatrimoine] = useState([500]); // en millions
  const [revenuAnnuel, setRevenuAnnuel] = useState([50000]); // en euros

  // Calcul CNJP
  const calculateCNJP = (patrimoineM: number) => {
    if (patrimoineM < 100) return 0;
    if (patrimoineM <= 500) return patrimoineM * 0.01; // 1%
    if (patrimoineM <= 1000) return 100 * 0.01 + (patrimoineM - 100) * 0.015; // 1.5%
    if (patrimoineM <= 5000) return 100 * 0.01 + 400 * 0.015 + (patrimoineM - 500) * 0.02; // 2%
    return 100 * 0.01 + 400 * 0.015 + 4500 * 0.02 + (patrimoineM - 5000) * 0.025; // 2.5%
  };

  // Calcul Impôt sur le revenu (barème La Juste Voix)
  const calculateIncomeTax = (revenu: number) => {
    if (revenu <= 12000) return 0;
    if (revenu <= 27000) return (revenu - 12000) * 0.05;
    if (revenu <= 78000) return 15000 * 0.05 + (revenu - 27000) * 0.14;
    if (revenu <= 168000) return 15000 * 0.05 + 51000 * 0.14 + (revenu - 78000) * 0.30;
    if (revenu <= 400000) return 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + (revenu - 168000) * 0.41;
    return 15000 * 0.05 + 51000 * 0.14 + 90000 * 0.30 + 232000 * 0.41 + (revenu - 400000) * 0.50;
  };

  const cnjpAmount = calculateCNJP(patrimoine[0]);
  const incomeTaxAmount = calculateIncomeTax(revenuAnnuel[0]);
  const isSubjectToCNJP = patrimoine[0] >= 100;

  return (
    <div className="max-w-4xl mx-auto my-16">
      <Card className="border-2 border-ljv-gold/20">
        <CardHeader className="bg-gradient-to-r from-ljv-navy to-ljv-navy/90 text-white">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Calculator className="h-6 w-6" />
            Simulateur Fiscal La Juste Voix
          </CardTitle>
          <p className="text-ljv-gold/90">
            Découvrez l'impact de nos réformes fiscales sur votre situation
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-medium mb-4">
                  Patrimoine financier net
                  <Badge variant="outline" className="ml-2 text-xs">
                    {patrimoine[0]} M€
                  </Badge>
                </label>
                <Slider
                  value={patrimoine}
                  onValueChange={setPatrimoine}
                  max={2000}
                  min={0}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0 M€</span>
                  <span>2 000 M€</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium mb-4">
                  Revenu annuel
                  <Badge variant="outline" className="ml-2 text-xs">
                    {revenuAnnuel[0].toLocaleString('fr-FR')} €
                  </Badge>
                </label>
                <Slider
                  value={revenuAnnuel}
                  onValueChange={setRevenuAnnuel}
                  max={1000000}
                  min={20000}
                  step={5000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>20 000 €</span>
                  <span>1 000 000 €</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-ljv-gold/10 to-ljv-gold/5 p-6 rounded-lg border border-ljv-gold/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-ljv-gold" />
                  Votre situation fiscale
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">Impôt sur le revenu</span>
                    <span className="text-lg font-bold text-ljv-navy">
                      {Math.round(incomeTaxAmount).toLocaleString('fr-FR')} €
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium">CNJP (si applicable)</span>
                    <span className="text-lg font-bold text-ljv-navy">
                      {isSubjectToCNJP 
                        ? `${Math.round(cnjpAmount * 1000000).toLocaleString('fr-FR')} €`
                        : 'Non applicable'
                      }
                    </span>
                  </div>

                  {isSubjectToCNJP && (
                    <div className="p-4 bg-ljv-navy/5 rounded border-l-4 border-ljv-navy">
                      <p className="text-sm text-ljv-navy font-medium">
                        💡 Vous contribuez à la CNJP car votre patrimoine dépasse 100 M€
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Cette contribution finance les revalorisations et investissements publics
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Ce que permettent vos contributions
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Revalorisation des soignants et enseignants</li>
                  <li>• Transition écologique accélérée</li>
                  <li>• Modernisation des services publics</li>
                  <li>• Réduction des inégalités</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              * Simulation basée sur les barèmes du programme La Juste Voix
            </p>
            <Button asChild className="bg-ljv-navy hover:bg-ljv-gold">
              <a href="/fiscalite">Voir tous les détails fiscaux</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxSimulator;
