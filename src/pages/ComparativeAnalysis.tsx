import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { comparativeAnalysis, syntheseComparative } from '../lib/comparative-analysis';
import { Scale, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SEOHead from '../components/SEOHead';

const ComparativeAnalysis = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  
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
          <div className="max-w-5xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              <span className="title-gradient">Analyse Comparative</span>
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
              Comparaison factuelle et objective entre La Juste Voix et le système actuel sur 12 dimensions clés
            </p>
            
            <Alert className="border-ljv-navy bg-ljv-navy/5">
              <Scale className="h-5 w-5 text-ljv-navy" />
              <AlertTitle className="text-lg font-bold">Analyse objective</AlertTitle>
              <AlertDescription className="text-base">
                Cette comparaison s'appuie sur des données chiffrées et des faits vérifiables. 
                Elle ne cache ni les forces du système actuel, ni les défis du programme La Juste Voix.
              </AlertDescription>
            </Alert>
          </div>

          {/* Stats rapides */}
          <div className="max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-green-500">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8/12</div>
                <div className="text-sm text-gray-600">Points révolutionnaires</div>
              </CardContent>
            </Card>
            <Card className="border-blue-500">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3/12</div>
                <div className="text-sm text-gray-600">Points améliorateurs</div>
              </CardContent>
            </Card>
            <Card className="border-ljv-gold">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-ljv-gold mb-2">90-130 Md€</div>
                <div className="text-sm text-gray-600">CNJP vs 2 Md€ IFI</div>
              </CardContent>
            </Card>
            <Card className="border-ljv-navy">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-ljv-navy mb-2">100%</div>
                <div className="text-sm text-gray-600">Chiffré & financé</div>
              </CardContent>
            </Card>
          </div>

          {/* Comparaisons détaillées */}
          <div className="max-w-6xl mx-auto space-y-8 mb-16">
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
                        <h4 className="font-bold text-lg">Système actuel</h4>
                      </div>
                      <p className="text-sm mb-3 text-gray-800">{point.systemActuel.description}</p>
                      {point.systemActuel.montants && (
                        <p className="text-sm font-bold mb-3 text-red-700">💰 {point.systemActuel.montants}</p>
                      )}
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-red-700">Problèmes :</p>
                        {point.systemActuel.problemes.map((pb, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-red-500 text-xs mt-0.5">❌</span>
                            <p className="text-xs text-gray-700">{pb}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* La Juste Voix */}
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-bold text-lg">La Juste Voix</h4>
                      </div>
                      <p className="text-sm mb-3 text-gray-800">{point.laJusteVoix.description}</p>
                      {point.laJusteVoix.montants && (
                        <p className="text-sm font-bold mb-3 text-green-700">💰 {point.laJusteVoix.montants}</p>
                      )}
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-green-700">Avantages :</p>
                        {point.laJusteVoix.avantages.map((av, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-green-500 text-xs mt-0.5">✅</span>
                            <p className="text-xs text-gray-700">{av}</p>
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

          {/* Synthèse globale */}
          <div className="max-w-5xl mx-auto mb-12">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComparativeAnalysis;
