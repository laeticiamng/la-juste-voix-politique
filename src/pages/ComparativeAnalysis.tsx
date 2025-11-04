import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { comparativeAnalysis, syntheseComparative } from '../lib/comparative-analysis';
import { Scale, TrendingUp, AlertTriangle, CheckCircle, XCircle, FileText, BarChart3, Award, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEOHead from '../components/SEOHead';
import BeforeAfterCard from '../components/BeforeAfterCard';
import { beforeAfterData } from '../lib/before-after-data';

const ComparativeAnalysis = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<string>(tabParam || "overview");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);
  
  const getVerdictColor = (type: string) => {
    switch(type) {
      case 'révolutionnaire': return 'bg-green-600 text-white';
      case 'améliorateur': return 'bg-blue-600 text-white';
      case 'différent': return 'bg-orange-500 text-white';
      case 'comparable': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getVerdictIcon = (type: string) => {
    switch(type) {
      case 'révolutionnaire': return <TrendingUp className="h-5 w-5" />;
      case 'améliorateur': return <CheckCircle className="h-5 w-5" />;
      case 'différent': return <Scale className="h-5 w-5" />;
      case 'comparable': return <Scale className="h-5 w-5" />;
      default: return <Scale className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Analyse Comparative : La Juste Voix vs Système Actuel"
        description="Comparaison factuelle et objective entre le programme La Juste Voix et le système politique et économique actuel français sur 12 dimensions clés."
        keywords="comparaison programme politique, analyse système actuel, réforme fiscale france, politique comparative"
      />
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-5xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              <span className="title-gradient">Analyse Comparative</span>
            </h1>
            <p className="text-xl text-center text-gray-900 dark:text-gray-100 mb-8 font-semibold">
              Comparaison factuelle et objective entre La Juste Voix et le système actuel sur 12 dimensions clés
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview" className="text-base font-semibold">
                <BarChart3 className="h-4 w-4 mr-2" />
                Vue d'ensemble
              </TabsTrigger>
              <TabsTrigger value="comparison" className="text-base font-semibold">
                <Scale className="h-4 w-4 mr-2" />
                Comparaisons
              </TabsTrigger>
              <TabsTrigger value="profiles" className="text-base font-semibold">
                <Users className="h-4 w-4 mr-2" />
                Profils métiers
              </TabsTrigger>
              <TabsTrigger value="synthesis" className="text-base font-semibold">
                <Award className="h-4 w-4 mr-2" />
                Synthèse
              </TabsTrigger>
            </TabsList>

            {/* ONGLET 1: Vue d'ensemble */}
            <TabsContent value="overview">
              <Alert className="border-ljv-navy bg-ljv-navy/5 mb-8">
                <Scale className="h-5 w-5 text-ljv-navy" />
                <AlertTitle className="text-lg font-bold">Analyse objective</AlertTitle>
                <AlertDescription className="text-base">
                  Cette comparaison s'appuie sur des données chiffrées et des faits vérifiables. 
                  Elle ne cache ni les forces du système actuel, ni les défis du programme La Juste Voix.
                </AlertDescription>
              </Alert>

              {/* Stats rapides */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="border-green-500">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">8/12</div>
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-semibold">Points révolutionnaires</div>
                  </CardContent>
                </Card>
                <Card className="border-blue-500">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3/12</div>
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-semibold">Points améliorateurs</div>
                  </CardContent>
                </Card>
                <Card className="border-ljv-gold">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-ljv-gold mb-2">90-130 Md€</div>
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-semibold">CNJP vs 2 Md€ IFI</div>
                  </CardContent>
                </Card>
                <Card className="border-ljv-navy">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">100%</div>
                    <div className="text-sm text-gray-900 dark:text-gray-100 font-semibold">Chiffré & financé</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-ljv-navy/5 to-ljv-gold/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
                  📊 Résumé de l'analyse comparative
                </h2>
                <p className="text-lg text-gray-900 dark:text-gray-100 font-medium text-center leading-relaxed">
                  Le programme La Juste Voix propose <strong>8 mesures révolutionnaires</strong> et <strong>3 améliorations significatives</strong> par rapport au système actuel. 
                  Avec un financement garanti de <strong>90-130 milliards d'euros par an</strong> via la CNJP, 
                  ce programme est <strong>100% chiffré et financé</strong>, contrairement aux promesses habituelles.
                </p>
              </div>
            </TabsContent>

            {/* ONGLET 2: Comparaisons détaillées */}
            <TabsContent value="comparison">
              <div className="space-y-8">
                {comparativeAnalysis.map((point, idx) => (
                  <Card key={idx} className="border-2 hover:border-ljv-gold transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Scale className="h-6 w-6 text-ljv-navy" />
                          {point.theme}
                        </CardTitle>
                        <Badge className={getVerdictColor(point.verdict.type)}>
                          <span className="flex items-center gap-2">
                            {getVerdictIcon(point.verdict.type)}
                            {point.verdict.type.toUpperCase()}
                          </span>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Système actuel */}
                        <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                          <div className="flex items-center gap-2 mb-3">
                            <XCircle className="h-5 w-5 text-red-600" />
                            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">Système actuel</h4>
                          </div>
                          <p className="text-sm mb-3 text-gray-900 dark:text-gray-100 font-medium">{point.systemActuel.description}</p>
                          {point.systemActuel.montants && (
                            <p className="text-sm font-bold mb-3 text-red-700">💰 {point.systemActuel.montants}</p>
                          )}
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-red-700">Problèmes :</p>
                            {point.systemActuel.problemes.map((pb, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-red-500 text-xs mt-0.5">❌</span>
                                <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">{pb}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* La Juste Voix */}
                        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">La Juste Voix</h4>
                          </div>
                          <p className="text-sm mb-3 text-gray-900 dark:text-gray-100 font-medium">{point.laJusteVoix.description}</p>
                          {point.laJusteVoix.montants && (
                            <p className="text-sm font-bold mb-3 text-green-700">💰 {point.laJusteVoix.montants}</p>
                          )}
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-green-700">Avantages :</p>
                            {point.laJusteVoix.avantages.map((av, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-green-500 text-xs mt-0.5">✅</span>
                                <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">{av}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Verdict */}
                      <Alert className="bg-ljv-navy/5 border-ljv-navy">
                        <AlertTitle className="font-bold text-lg">Verdict</AlertTitle>
                        <AlertDescription className="text-base mt-2">
                          {point.verdict.commentaire}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ONGLET 3: Profils métiers */}
            <TabsContent value="profiles">
              <Alert className="border-ljv-navy bg-ljv-navy/5 mb-8">
                <Users className="h-5 w-5 text-ljv-navy" />
                <AlertTitle className="text-lg font-bold">20 Profils métiers détaillés</AlertTitle>
                <AlertDescription className="text-base">
                  Comparaison concrète du pouvoir d'achat avant et après réforme pour 20 métiers représentatifs 
                  dans les secteurs de la santé, l'éducation, la sécurité, le social et l'agriculture.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {beforeAfterData.map((data, index) => (
                  <BeforeAfterCard key={index} data={data} />
                ))}
              </div>

              <Card className="border-2 border-ljv-gold bg-ljv-gold/5">
                <CardHeader>
                  <CardTitle className="text-xl">📊 Méthodologie de calcul</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Calculs actuels :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-900 dark:text-gray-100 font-medium">
                      <li>Salaire net = Salaire brut - cotisations sociales (~23%)</li>
                      <li>Impôt sur le revenu calculé selon le barème progressif actuel</li>
                      <li>Net après impôt = Salaire net - Impôt sur le revenu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Calculs avec la réforme :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-900 dark:text-gray-100 font-medium">
                      <li>Revalorisation salariale selon le secteur (+400€ à +1000€ brut)</li>
                      <li>Nouveau barème d'imposition progressif simplifié</li>
                      <li>Financement garanti par la CNJP (90-130 Md€/an)</li>
                    </ul>
                  </div>
                  <Alert>
                    <AlertDescription className="text-sm">
                      <strong>Note :</strong> Ces calculs sont des estimations réalistes basées sur le programme La Juste Voix. 
                      Les montants exacts peuvent varier selon la situation individuelle (charges de famille, crédits d'impôt, etc.).
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ONGLET 4: Synthèse et verdict */}
            <TabsContent value="synthesis">
              <Card className="border-4 border-ljv-gold">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">{syntheseComparative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Points forts */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      Points forts du programme
                    </h3>
                    <div className="space-y-4">
                      {syntheseComparative.pointsForts.map((pf, idx) => (
                        <div key={idx} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                          <h4 className="font-bold text-lg mb-2">{pf.theme}</h4>
                          <p className="text-sm mb-2 font-medium text-green-800">{pf.comparaison}</p>
                          <p className="text-sm text-gray-700">{pf.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Points faibles */}
                  <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                    Défis et points de vigilance
                  </h3>
                  <div className="space-y-4">
                    {syntheseComparative.pointsFaibles.map((pf, idx) => (
                      <div key={idx} className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                        <h4 className="font-bold text-lg mb-2">{pf.theme}</h4>
                        <p className="text-sm mb-2 font-medium text-orange-800">{pf.probleme}</p>
                        <p className="text-sm text-gray-700">{pf.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions aux défis */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Solutions concrètes pour chaque défi
                  </h3>
                  <div className="space-y-6">
                    {syntheseComparative.pointsFaibles.map((pf, idx) => (
                      <div key={idx} className="border-2 border-green-500 rounded-lg overflow-hidden">
                        <div className="bg-green-100 p-4 border-b-2 border-green-500">
                          <h4 className="font-bold text-lg text-green-900">
                            Défi {idx + 1} : {pf.theme}
                          </h4>
                        </div>
                        <div className="bg-white p-4 space-y-4">
                          {pf.solutions?.map((sol, solIdx) => (
                            <div key={solIdx} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
                              <div className="flex items-start gap-2 mb-2">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <h5 className="font-bold text-base">{sol.titre}</h5>
                              </div>
                              <p className="text-sm mb-2 text-gray-800 ml-7">{sol.description}</p>
                              <div className="ml-7 space-y-1">
                                <p className="text-xs font-medium text-green-700">
                                  <span className="font-bold">Moyens :</span> {sol.moyens}
                                </p>
                                <p className="text-xs font-medium text-green-800">
                                  <span className="font-bold">Impact :</span> {sol.impact}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Synthèse des solutions */}
                {syntheseComparative.synthèseSolutions && (
                  <Alert className="mb-8 bg-green-50 border-green-500">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertTitle className="text-lg font-bold text-green-900">
                      {syntheseComparative.synthèseSolutions.titre}
                    </AlertTitle>
                    <AlertDescription className="text-base mt-2 space-y-2">
                      <p className="text-gray-800">{syntheseComparative.synthèseSolutions.résumé}</p>
                      <p className="font-bold text-green-800">
                        💰 Coût total : {syntheseComparative.synthèseSolutions.coûtTotal}
                      </p>
                      <p className="text-sm text-gray-700">
                        📊 {syntheseComparative.synthèseSolutions.impactBudgétaire}
                      </p>
                      <p className="text-base font-medium text-green-900 mt-3">
                        ✅ {syntheseComparative.synthèseSolutions.conclusion}
                      </p>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Verdict global */}
                <div className="bg-gradient-to-br from-ljv-navy to-ljv-gold/20 rounded-xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6 text-center">
                    {syntheseComparative.verdictGlobal.titre}
                  </h3>
                  
                  <div className="mb-6">
                    {syntheseComparative.verdictGlobal.points.map((point, idx) => (
                      <p key={idx} className="text-lg mb-2">{point}</p>
                    ))}
                  </div>

                  <div className="border-t border-white/30 pt-6 mb-6">
                    <h4 className="font-bold text-xl mb-3">Nuances importantes :</h4>
                    {syntheseComparative.verdictGlobal.nuances.map((nuance, idx) => (
                      <p key={idx} className="text-base mb-2 text-white/90">{nuance}</p>
                    ))}
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <p className="whitespace-pre-line text-base leading-relaxed">
                      {syntheseComparative.verdictGlobal.conclusion}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComparativeAnalysis;
