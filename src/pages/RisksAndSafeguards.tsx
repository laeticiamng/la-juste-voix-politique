import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { programRisks, securisationSummary, recommendedPath } from '../lib/program-risks-analysis';
import { AlertTriangle, Shield, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SEOHead from '../components/SEOHead';

const RisksAndSafeguards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'Tous les risques' },
    { id: 'économique', label: 'Économiques' },
    { id: 'juridique', label: 'Juridiques' },
    { id: 'mise-en-oeuvre', label: 'Mise en œuvre' },
    { id: 'social', label: 'Sociaux' },
    { id: 'politique', label: 'Politiques' },
  ];
  
  const filteredRisks = selectedCategory === 'all' 
    ? programRisks 
    : programRisks.filter(r => r.category === selectedCategory);
  
  const getProbabilityColor = (prob: string) => {
    switch(prob) {
      case 'élevée': return 'bg-red-500';
      case 'moyenne': return 'bg-orange-500';
      case 'faible': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'critique': return 'bg-red-600';
      case 'modéré': return 'bg-orange-400';
      case 'faible': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Risques et Sécurisations"
        description="Analyse complète des risques du programme La Juste Voix et mesures de sécurisation pour garantir sa viabilité économique et politique."
        keywords="risques programme politique, sécurisation fiscale, fuite capitaux, censure constitutionnelle, viabilité économique"
      />
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-5xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              <span className="title-gradient">Risques & Sécurisations</span>
            </h1>
            <p className="text-xl text-center text-gray-900 dark:text-gray-100 mb-8 font-semibold">
              Une analyse honnête des risques réels du programme et des mesures concrètes pour les anticiper.
            </p>
            
            <Alert className="border-ljv-gold bg-ljv-gold/10">
              <AlertCircle className="h-5 w-5 text-ljv-gold" />
              <AlertTitle className="text-lg font-bold">Notre engagement : l'honnêteté totale</AlertTitle>
              <AlertDescription className="text-base">
                Plutôt que de cacher les risques, nous les identifions, les chiffrons et proposons des sécurisations concrètes. 
                C'est ainsi qu'on construit un programme viable, pas en faisant semblant que tout est simple.
              </AlertDescription>
            </Alert>
          </div>

          {/* Category filters */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-ljv-navy text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat.label}
                  <Badge variant="secondary" className="ml-2">
                    {cat.id === 'all' 
                      ? programRisks.length 
                      : programRisks.filter(r => r.category === cat.id).length}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          {/* Risks list */}
          <div className="max-w-5xl mx-auto space-y-6 mb-16">
            {filteredRisks.map((risk) => (
              <Card key={risk.id} className="border-2 hover:border-ljv-gold transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="h-6 w-6 text-orange-500" />
                        <CardTitle className="text-xl">{risk.title}</CardTitle>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {risk.category}
                        </Badge>
                        <Badge className={`${getProbabilityColor(risk.probabilité)} text-white text-xs`}>
                          Probabilité: {risk.probabilité}
                        </Badge>
                        <Badge className={`${getImpactColor(risk.impact)} text-white text-xs`}>
                          Impact: {risk.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-900 dark:text-gray-100 mb-3 font-medium">{risk.description}</p>
                  <Alert className="bg-gray-50">
                    <AlertTitle className="text-sm font-bold text-gray-900 dark:text-gray-100">État actuel</AlertTitle>
                    <AlertDescription className="text-sm text-gray-900 dark:text-gray-100 font-medium">{risk.currentStatus}</AlertDescription>
                  </Alert>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <h4 className="font-bold text-lg">Mesures de sécurisation proposées</h4>
                    </div>
                    <ul className="space-y-2">
                      {risk.securisations.map((sec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm" dangerouslySetInnerHTML={{ __html: sec }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {risk.coûtSecurisation && (
                    <div className="bg-ljv-navy/5 rounded-lg p-3 mt-4">
                      <p className="text-sm font-bold">
                        💰 Coût de sécurisation : <span className="text-ljv-navy">{risk.coûtSecurisation}</span>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cost summary */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-ljv-gold">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-ljv-gold" />
                  Impact budgétaire des sécurisations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-ljv-navy text-center mb-4">
                    {securisationSummary.totalAdditionalCost}
                  </p>
                  <div className="space-y-2">
                    {securisationSummary.breakdown.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-bold text-ljv-navy">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Alert className="bg-red-50 border-red-300">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <AlertTitle className="text-red-800 font-bold">Conséquence budgétaire</AlertTitle>
                  <AlertDescription className="text-red-700 whitespace-pre-line text-sm">
                    {securisationSummary.impact}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Solutions */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Solutions pour maintenir la viabilité
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {securisationSummary.solutions.map((solution, idx) => (
                <Card key={idx} className="hover:border-ljv-gold transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{solution.option}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">{solution.detail}</p>
                    <Alert className="bg-orange-50 border-orange-300">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <AlertDescription className="text-xs text-orange-700">
                        <strong>Risque :</strong> {solution.risque}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recommended path */}
          <div className="max-w-5xl mx-auto">
            <Card className="border-4 border-green-500 bg-green-50">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  {recommendedPath.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: recommendedPath.strategie.replace(/\*\*/g, '<strong>').replace(/→/g, '→') }} />
                  
                  <div className="bg-white rounded-lg p-6 border-2 border-green-500">
                    <div className="whitespace-pre-line text-gray-800" dangerouslySetInnerHTML={{ __html: recommendedPath.newBalance.replace(/\*\*/g, '<strong>') }} />
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

export default RisksAndSafeguards;
