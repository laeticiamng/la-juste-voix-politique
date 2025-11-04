
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, DollarSign, Info, ChevronDown, ChevronUp, Sparkles, ArrowRight, Home, GraduationCap, Briefcase } from 'lucide-react';
import { calculateCNJP, calculateIncomeTax } from '@/lib/tax-calculations';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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
  const [activeTab, setActiveTab] = useState('simulator');

  // Calcul système actuel (approximation simplifiée)
  const calculateCurrentSystem = useMemo(() => {
    // IR actuel (barème 2024 simplifié)
    let currentIR = 0;
    const revenu = revenuAnnuel[0];
    
    if (revenu > 11294) currentIR += Math.min(revenu - 11294, 17555 - 11294) * 0.11;
    if (revenu > 17555) currentIR += Math.min(revenu - 17555, 78570 - 17555) * 0.30;
    if (revenu > 78570) currentIR += Math.min(revenu - 78570, 168994 - 78570) * 0.41;
    if (revenu > 168994) currentIR += (revenu - 168994) * 0.45;
    
    // IFI actuel (si patrimoine > 1,3M€)
    const patrimoineEuros = patrimoine[0] * 1000000;
    let currentIFI = 0;
    if (patrimoineEuros > 1300000) {
      if (patrimoineEuros <= 10000000) {
        currentIFI = (patrimoineEuros - 1300000) * 0.005;
      } else {
        currentIFI = (10000000 - 1300000) * 0.005 + (patrimoineEuros - 10000000) * 0.0125;
      }
    }
    
    return { ir: currentIR, ifi: currentIFI, total: currentIR + currentIFI };
  }, [revenuAnnuel, patrimoine]);

  // Utilisation des fonctions de calcul centralisées
  const cnjpAmount = calculateCNJP(patrimoine[0]);
  const isSubjectToCNJP = patrimoine[0] >= 100;
  const incomeTaxAmount = calculateIncomeTax(revenuAnnuel[0], isProfessionTechnique, isSubjectToCNJP);
  const incomeTaxWithoutCredit = calculateIncomeTax(revenuAnnuel[0], false, isSubjectToCNJP);
  const creditAmount = incomeTaxWithoutCredit - incomeTaxAmount;

  // Calculs additionnels
  const effectiveTaxRate = revenuAnnuel[0] > 0 ? (incomeTaxAmount / revenuAnnuel[0]) * 100 : 0;
  const newSystemTotal = incomeTaxAmount + (isSubjectToCNJP ? cnjpAmount * 1000000 : 0);
  const difference = newSystemTotal - calculateCurrentSystem.total;
  const revenuDisponible = revenuAnnuel[0] - incomeTaxAmount;
  
  // Données pour les graphiques
  const comparisonData = [
    {
      name: 'Système actuel',
      'Impôt sur le revenu': Math.round(calculateCurrentSystem.ir),
      'IFI/CNJP': Math.round(calculateCurrentSystem.ifi),
      total: Math.round(calculateCurrentSystem.total)
    },
    {
      name: 'La Juste Voix',
      'Impôt sur le revenu': Math.round(incomeTaxAmount),
      'IFI/CNJP': isSubjectToCNJP ? Math.round(cnjpAmount * 1000000) : 0,
      total: Math.round(newSystemTotal)
    }
  ];

  const budgetData = [
    { name: 'Revalorisations', value: 25, color: '#10b981' },
    { name: 'Retraites 60 ans', value: 20, color: '#3b82f6' },
    { name: 'Dette (FSCRD)', value: 15, color: '#f59e0b' },
    { name: 'Logement', value: 11, color: '#8b5cf6' },
    { name: 'Écologie', value: 8, color: '#22c55e' },
    { name: 'Éducation', value: 5, color: '#ec4899' },
    { name: 'Santé mentale', value: 4, color: '#06b6d4' },
    { name: 'Démocratie', value: 4, color: '#f97316' },
    { name: 'Autres', value: 8, color: '#94a3b8' },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#22c55e', '#ec4899', '#06b6d4', '#f97316', '#94a3b8'];

  // Appliquer un profil prédéfini
  const applyProfile = (profile: typeof PREDEFINED_PROFILES[0]) => {
    setRevenuAnnuel([profile.revenu]);
    setPatrimoine([profile.patrimoine]);
    setIsProfessionTechnique(profile.isTech || false);
  };

  return (
    <div className="max-w-7xl mx-auto my-16">
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="simulator" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Simulateur
              </TabsTrigger>
              <TabsTrigger value="comparison" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Comparaison
              </TabsTrigger>
              <TabsTrigger value="impact" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Impact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="simulator" className="mt-6">
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

                {/* Profession Bac+5+ grandes écoles */}
                <div className={`flex items-center justify-between p-4 rounded-lg border ${
                  isSubjectToCNJP ? 'bg-gray-100 border-gray-300 opacity-60' : 'bg-white border-blue-300'
                }`}>
                  <div className="flex-1">
                    <Label 
                      htmlFor="tech-profession" 
                      className={`text-base font-bold ${isSubjectToCNJP ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      Diplômé Bac+5+ grandes écoles
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      {isSubjectToCNJP 
                        ? '⚠️ Non cumulable avec la CNJP (ultra-riches exclus)'
                        : 'Crédit d\'impôt de 15% (ingénieurs, commerce, management, professions libérales...)'}
                    </p>
                  </div>
                  <Switch
                    id="tech-profession"
                    checked={isProfessionTechnique && !isSubjectToCNJP}
                    onCheckedChange={setIsProfessionTechnique}
                    disabled={isSubjectToCNJP}
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
                    
                    {isProfessionTechnique && !isSubjectToCNJP && creditAmount > 0 && (
                      <Alert className="mt-3 bg-green-50 border-green-200">
                        <Sparkles className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-sm text-green-800">
                          <strong>Crédit d'impôt Bac+5+ appliqué!</strong>
                          <br />Économie: {Math.round(creditAmount).toLocaleString('fr-FR')} €/an
                          ({Math.round(creditAmount / 12).toLocaleString('fr-FR')} €/mois)
                        </AlertDescription>
                      </Alert>
                    )}
                    {isProfessionTechnique && isSubjectToCNJP && (
                      <Alert className="mt-3 bg-orange-50 border-orange-200">
                        <Info className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-sm text-orange-800">
                          <strong>Crédit d'impôt non applicable</strong>
                          <br />Le crédit de 15% n'est pas cumulable avec la CNJP (patrimoine ≥ 100M€)
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
                              <span>• Crédit 15% diplômés Bac+5+</span>
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

          </TabsContent>

            <TabsContent value="comparison" className="mt-6">
              {/* Comparaison avant/après */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-2xl font-bold mb-6 text-ljv-navy flex items-center gap-2">
                    <ArrowRight className="h-6 w-6 text-ljv-gold" />
                    Système actuel vs La Juste Voix
                  </h3>

                  {/* Graphique comparatif */}
                  <div className="bg-white p-6 rounded-lg mb-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={comparisonData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value: number) => `${value.toLocaleString('fr-FR')} €`} />
                        <Legend />
                        <Bar dataKey="Impôt sur le revenu" fill="#3b82f6" />
                        <Bar dataKey="IFI/CNJP" fill="#f59e0b" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Cartes de comparaison */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-2 border-gray-300">
                      <CardHeader className="bg-gray-100">
                        <CardTitle className="text-lg">Système actuel</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Impôt sur le revenu</span>
                            <span className="font-bold">{Math.round(calculateCurrentSystem.ir).toLocaleString('fr-FR')} €</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">IFI</span>
                            <span className="font-bold">{Math.round(calculateCurrentSystem.ifi).toLocaleString('fr-FR')} €</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg">
                            <span className="font-bold">Total</span>
                            <span className="font-bold text-gray-700">{Math.round(calculateCurrentSystem.total).toLocaleString('fr-FR')} €</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-ljv-gold">
                      <CardHeader className="bg-ljv-gold/10">
                        <CardTitle className="text-lg text-ljv-navy">La Juste Voix</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Impôt sur le revenu</span>
                            <span className="font-bold">{Math.round(incomeTaxAmount).toLocaleString('fr-FR')} €</span>
                          </div>
                  {isProfessionTechnique && !isSubjectToCNJP && creditAmount > 0 && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <span>dont crédit Bac+5+</span>
                      <span className="font-bold">-{Math.round(creditAmount).toLocaleString('fr-FR')} €</span>
                    </div>
                  )}
                  {isProfessionTechnique && isSubjectToCNJP && (
                    <div className="flex justify-between text-orange-600 text-sm">
                      <span>crédit Bac+5+ non applicable</span>
                      <span className="font-bold text-xs">(non cumulable CNJP)</span>
                    </div>
                  )}
                          <div className="flex justify-between">
                            <span className="text-gray-600">CNJP</span>
                            <span className="font-bold">{isSubjectToCNJP ? Math.round(cnjpAmount * 1000000).toLocaleString('fr-FR') : '0'} €</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg">
                            <span className="font-bold">Total</span>
                            <span className="font-bold text-ljv-navy">{Math.round(newSystemTotal).toLocaleString('fr-FR')} €</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Différence */}
                  <Alert className={`mt-6 ${difference > 0 ? 'bg-orange-50 border-orange-300' : 'bg-green-50 border-green-300'}`}>
                    <AlertDescription className="text-center">
                      <div className="text-2xl font-bold mb-2">
                        {difference > 0 ? '+' : ''}{Math.round(difference).toLocaleString('fr-FR')} €/an
                      </div>
                      <div className={`text-sm ${difference > 0 ? 'text-orange-700' : 'text-green-700'}`}>
                        {difference > 0 
                          ? 'Contribution légèrement supérieure avec La Juste Voix' 
                          : 'Économie avec La Juste Voix'}
                      </div>
                      {Math.abs(difference) > 0 && (
                        <div className="text-xs mt-2 text-gray-600">
                          Soit {difference > 0 ? '+' : ''}{Math.round(difference / 12).toLocaleString('fr-FR')} €/mois
                        </div>
                      )}
                    </AlertDescription>
                  </Alert>

                  {/* Impact social */}
                  {isSubjectToCNJP && (
                    <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-300">
                      <h4 className="font-bold text-green-800 mb-2">💚 Votre contribution finance concrètement :</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• {Math.round(cnjpAmount * 1000000 * 0.25).toLocaleString('fr-FR')} € pour les revalorisations (infirmiers, profs...)</li>
                        <li>• {Math.round(cnjpAmount * 1000000 * 0.20).toLocaleString('fr-FR')} € pour les retraites à 60 ans</li>
                        <li>• {Math.round(cnjpAmount * 1000000 * 0.15).toLocaleString('fr-FR')} € pour rembourser la dette</li>
                        <li>• {Math.round(cnjpAmount * 1000000 * 0.11).toLocaleString('fr-FR')} € pour le logement social</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="mt-6">
              {/* Impact et affectation du budget */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-lg border border-green-300">
                  <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
                    <Home className="h-6 w-6" />
                    Votre situation financière
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-gray-600">Revenu brut annuel</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-ljv-navy">
                          {revenuAnnuel[0].toLocaleString('fr-FR')} €
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {Math.round(revenuAnnuel[0] / 12).toLocaleString('fr-FR')} €/mois
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-gray-600">Impôts payés</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-orange-600">
                          -{Math.round(newSystemTotal).toLocaleString('fr-FR')} €
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {effectiveTaxRate.toFixed(1)}% du revenu
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-green-700">Revenu disponible</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-700">
                          {Math.round(revenuDisponible).toLocaleString('fr-FR')} €
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          {Math.round(revenuDisponible / 12).toLocaleString('fr-FR')} €/mois
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Graphique affectation du budget CNJP */}
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-gray-800">
                      Affectation de la CNJP collectée (90-130 Md€/an)
                    </h4>
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie
                          data={budgetData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {budgetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Bénéfices concrets */}
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <Card className="border-green-300">
                      <CardHeader className="bg-green-50">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Vous bénéficiez de
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Services publics revalorisés (santé, éducation)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Retraite à 60 ans garantie</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Dette réduite pour générations futures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Transition écologique accélérée</span>
                          </li>
                          {isProfessionTechnique && (
                            <li className="flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span className="font-bold">Crédit d'impôt 15% Bac+5+</span>
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-300">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Garanties
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Transparence totale des dépenses (audit citoyen)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Budget participatif (10% décidé par citoyens)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Lutte contre l'évasion fiscale renforcée</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600">✓</span>
                            <span>Clause de révision annuelle</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center space-y-4 mt-8">
            <p className="text-sm text-gray-600">
              * Simulation basée sur les barèmes officiels du programme La Juste Voix
              {isProfessionTechnique && (
                <span className="block text-green-700 font-semibold mt-1">
                  Crédit d'impôt 15% diplômés Bac+5+ grandes écoles appliqué
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
