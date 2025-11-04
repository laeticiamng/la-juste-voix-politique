
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, DollarSign, Info, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { calculateCNJP, calculateIncomeTax } from '@/lib/tax-calculations';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Profils prédéfinis
const PREDEFINED_PROFILES = [
  { name: 'SMIC', revenu: 21000, patrimoine: 0 },
  { name: 'Infirmier', revenu: 33000, patrimoine: 0 },
  { name: 'Professeur', revenu: 36000, patrimoine: 0 },
  { name: 'Ingénieur', revenu: 45000, patrimoine: 0, isTech: true },
  { name: 'Cadre', revenu: 70000, patrimoine: 1 },
  { name: 'Dirigeant PME', revenu: 120000, patrimoine: 5 },
  { name: 'Entrepreneur tech', revenu: 200000, patrimoine: 10, isTech: true },
  { name: 'Fortune 100M€', revenu: 500000, patrimoine: 100 },
  { name: 'Milliardaire', revenu: 2000000, patrimoine: 1000 },
];

const TaxSimulator: React.FC = () => {
  const [patrimoine, setPatrimoine] = useState([500]); // en millions
  const [revenuAnnuel, setRevenuAnnuel] = useState([50000]); // en euros
  const [isProfessionTechnique, setIsProfessionTechnique] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Utilisation des fonctions de calcul centralisées
  const cnjpAmount = calculateCNJP(patrimoine[0]);
  const incomeTaxAmount = calculateIncomeTax(revenuAnnuel[0], isProfessionTechnique);
  const incomeTaxWithoutCredit = calculateIncomeTax(revenuAnnuel[0], false);
  const creditAmount = incomeTaxWithoutCredit - incomeTaxAmount;
  const isSubjectToCNJP = patrimoine[0] >= 100;

  // Taux effectif d'imposition
  const effectiveTaxRate = revenuAnnuel[0] > 0 ? (incomeTaxAmount / revenuAnnuel[0]) * 100 : 0;

  // Appliquer un profil prédéfini
  const applyProfile = (profile: typeof PREDEFINED_PROFILES[0]) => {
    setRevenuAnnuel([profile.revenu]);
    setPatrimoine([profile.patrimoine]);
    setIsProfessionTechnique(profile.isTech || false);
  };

  return (
    <div className="max-w-6xl mx-auto my-16">
      <Card className="border-2 border-ljv-gold/20 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-ljv-navy via-ljv-navy to-ljv-gold/20 text-white">
          <CardTitle className="flex items-center gap-3 text-3xl">
            <Calculator className="h-8 w-8" />
            Simulateur Fiscal La Juste Voix
          </CardTitle>
          <p className="text-ljv-gold/90 text-lg">
            Découvrez l'impact de nos réformes fiscales sur votre situation
          </p>
        </CardHeader>
        <CardContent className="p-8">
          {/* Profils prédéfinis */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-ljv-gold" />
              <h3 className="text-lg font-bold">Profils types</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {PREDEFINED_PROFILES.map((profile) => (
                <Button
                  key={profile.name}
                  onClick={() => applyProfile(profile)}
                  variant="outline"
                  size="sm"
                  className="border-ljv-gold/30 hover:bg-ljv-gold/10"
                >
                  {profile.name}
                </Button>
              ))}
            </div>
          </div>

          <Separator className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold mb-6 text-ljv-navy">Vos paramètres</h3>
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

                {/* Profession technique */}
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-300">
                  <div className="flex-1">
                    <Label htmlFor="tech-profession" className="text-base font-bold cursor-pointer">
                      Profession technique / scientifique
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Crédit d'impôt de 15% (ingénieurs, développeurs, chercheurs...)
                    </p>
                  </div>
                  <Switch
                    id="tech-profession"
                    checked={isProfessionTechnique}
                    onCheckedChange={setIsProfessionTechnique}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-ljv-gold/10 to-ljv-gold/5 p-6 rounded-lg border-2 border-ljv-gold/30">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-ljv-gold" />
                  Votre situation fiscale
                </h3>
                
                <div className="space-y-4">
                  {/* Impôt sur le revenu */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-bold text-lg">Impôt sur le revenu</span>
                        <p className="text-xs text-gray-600">Taux effectif: {effectiveTaxRate.toFixed(1)}%</p>
                      </div>
                      <span className="text-2xl font-bold text-ljv-navy">
                        {Math.round(incomeTaxAmount).toLocaleString('fr-FR')} €
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Soit {Math.round(incomeTaxAmount / 12).toLocaleString('fr-FR')} €/mois
                    </div>
                    
                    {isProfessionTechnique && creditAmount > 0 && (
                      <Alert className="mt-3 bg-green-50 border-green-200">
                        <Sparkles className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-sm text-green-800">
                          <strong>Crédit d'impôt technique appliqué!</strong>
                          <br />Économie: {Math.round(creditAmount).toLocaleString('fr-FR')} €/an
                          ({Math.round(creditAmount / 12).toLocaleString('fr-FR')} €/mois)
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                  
                  {/* CNJP */}
                  <div className={`rounded-lg p-4 shadow-sm border ${
                    isSubjectToCNJP 
                      ? 'bg-orange-50 border-orange-300' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-lg">CNJP</span>
                        <p className="text-xs text-gray-600">
                          {isSubjectToCNJP 
                            ? `Patrimoine ${patrimoine[0]}M€ > 100M€` 
                            : 'Non concerné (< 100M€)'}
                        </p>
                      </div>
                      <span className={`text-2xl font-bold ${
                        isSubjectToCNJP ? 'text-orange-600' : 'text-gray-400'
                      }`}>
                        {isSubjectToCNJP 
                          ? `${Math.round(cnjpAmount * 1000000).toLocaleString('fr-FR')} €`
                          : '0 €'
                        }
                      </span>
                    </div>
                  </div>

                  {/* Total contributions */}
                  <Separator />
                  <div className="bg-ljv-navy text-white rounded-lg p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">TOTAL CONTRIBUTIONS</span>
                      <span className="text-3xl font-bold">
                        {(Math.round(incomeTaxAmount) + (isSubjectToCNJP ? Math.round(cnjpAmount * 1000000) : 0)).toLocaleString('fr-FR')} €
                      </span>
                    </div>
                    <div className="text-sm text-ljv-gold/90 mt-2">
                      Soit {Math.round((incomeTaxAmount + (isSubjectToCNJP ? cnjpAmount * 1000000 : 0)) / 12).toLocaleString('fr-FR')} €/mois
                    </div>
                  </div>

                  {/* Bouton détails */}
                  <Button
                    onClick={() => setShowDetails(!showDetails)}
                    variant="outline"
                    className="w-full border-ljv-navy text-ljv-navy hover:bg-ljv-navy/5"
                  >
                    {showDetails ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                    {showDetails ? 'Masquer' : 'Voir'} le détail des calculs
                  </Button>

                  {/* Détails des calculs */}
                  {showDetails && (
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 space-y-3">
                      <div className="flex items-center gap-2 text-blue-800 font-bold mb-2">
                        <Info className="h-4 w-4" />
                        Détail du calcul progressif
                      </div>
                      
                      <div className="text-sm space-y-2 text-gray-800">
                        {revenuAnnuel[0] > 12000 && (
                          <div className="flex justify-between">
                            <span>• 12k-27k€ à 5%</span>
                            <span className="font-mono">{Math.round(Math.min(revenuAnnuel[0] - 12000, 15000) * 0.05).toLocaleString('fr-FR')} €</span>
                          </div>
                        )}
                        {revenuAnnuel[0] > 27000 && (
                          <div className="flex justify-between">
                            <span>• 27k-78k€ à 14%</span>
                            <span className="font-mono">{Math.round(Math.min(revenuAnnuel[0] - 27000, 51000) * 0.14).toLocaleString('fr-FR')} €</span>
                          </div>
                        )}
                        {revenuAnnuel[0] > 78000 && (
                          <div className="flex justify-between">
                            <span>• 78k-168k€ à 30%</span>
                            <span className="font-mono">{Math.round(Math.min(revenuAnnuel[0] - 78000, 90000) * 0.30).toLocaleString('fr-FR')} €</span>
                          </div>
                        )}
                        {revenuAnnuel[0] > 168000 && (
                          <div className="flex justify-between">
                            <span>• 168k-400k€ à 41%</span>
                            <span className="font-mono">{Math.round(Math.min(revenuAnnuel[0] - 168000, 232000) * 0.41).toLocaleString('fr-FR')} €</span>
                          </div>
                        )}
                        {revenuAnnuel[0] > 400000 && (
                          <div className="flex justify-between">
                            <span>• {'>'} 400k€ à 50%</span>
                            <span className="font-mono">{Math.round((revenuAnnuel[0] - 400000) * 0.50).toLocaleString('fr-FR')} €</span>
                          </div>
                        )}
                        
                        {isProfessionTechnique && creditAmount > 0 && (
                          <>
                            <Separator />
                            <div className="flex justify-between text-green-700 font-bold">
                              <span>• Crédit 15% professions techniques</span>
                              <span className="font-mono">-{Math.round(creditAmount).toLocaleString('fr-FR')} €</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg border-2 border-green-300 shadow-md">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                  <DollarSign className="h-5 w-5" />
                  Ce que financent vos contributions
                </h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>25%</strong> Revalorisation des soignants, enseignants, policiers (+600€/mois)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>20%</strong> Retour retraite à 60 ans avec système mixte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>15%</strong> Remboursement dette publique (FSCRD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>11%</strong> Plan logement social + Zéro SDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>8%</strong> Transition écologique accélérée</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-green-300">
                  <p className="text-xs text-green-800 italic">
                    Chaque euro prélevé finance concrètement la reconstruction des services publics et la justice sociale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques globales */}
          <Separator className="my-8" />
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-ljv-navy to-ljv-gold/20 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">90-130 Md€</div>
              <div className="text-sm opacity-90">CNJP collectée/an</div>
              <div className="text-xs opacity-75 mt-1">Sur 1 500 ultra-riches uniquement</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-500 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">4M+</div>
              <div className="text-sm opacity-90">Travailleurs revalorisés</div>
              <div className="text-xs opacity-75 mt-1">Infirmiers, profs, policiers...</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-500 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">0,1%</div>
              <div className="text-sm opacity-90">Français concernés CNJP</div>
              <div className="text-xs opacity-75 mt-1">Patrimoine {'>'} 100M€ uniquement</div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              * Simulation basée sur les barèmes officiels du programme La Juste Voix
              {isProfessionTechnique && (
                <span className="block text-green-700 font-semibold mt-1">
                  Crédit d'impôt 15% professions techniques appliqué
                </span>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-ljv-navy hover:bg-ljv-gold">
                <a href="/fiscalite">📊 Voir tous les détails fiscaux</a>
              </Button>
              <Button asChild variant="outline" className="border-ljv-navy text-ljv-navy hover:bg-ljv-navy/5">
                <a href="/comparaison-systeme?tab=profiles">👥 Voir l'impact sur 95+ métiers</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxSimulator;
