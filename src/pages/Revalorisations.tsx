
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { revalorisationsData, revalorisationsSummary } from '../lib/revalorisations-data';
import { beforeAfterData } from '../lib/before-after-data';
import BeforeAfterCard from '../components/BeforeAfterCard';
import { Book, Coins, Download, Heart, Shield, Users, GraduationCap, Gavel, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const getIcon = (iconName: string) => {
  const icons = {
    'heart': <Heart className="h-6 w-6" />,
    'book': <Book className="h-6 w-6" />,
    'users': <Users className="h-6 w-6" />,
    'shield': <Shield className="h-6 w-6" />,
    'graduation-cap': <GraduationCap className="h-6 w-6" />,
    'gavel': <Gavel className="h-6 w-6" />,
  };
  
  return icons[iconName as keyof typeof icons] || null;
};

const Revalorisations = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-ljv-navy to-ljv-gold bg-clip-text text-transparent">
              Qui va être revalorisé ?
            </span>
          </h1>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview" className="text-base font-semibold">
                <Coins className="h-4 w-4 mr-2" />
                Vue d'ensemble
              </TabsTrigger>
              <TabsTrigger value="comparison" className="text-base font-semibold">
                <Calculator className="h-4 w-4 mr-2" />
                Avant / Après réforme
              </TabsTrigger>
            </TabsList>

            {/* ONGLET 1: Vue d'ensemble (contenu existant) */}
            <TabsContent value="overview">

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-ljv-navy text-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center">
                <span className="inline-flex items-center justify-center bg-ljv-gold text-white rounded-full w-10 h-10 mr-3 flex-shrink-0">
                  🎯
                </span>
                Notre engagement
              </h2>
              <p className="text-xl leading-relaxed">
                Grâce à la Contribution Nationale de Justice Patrimoniale (CNJP), nous proposons une revalorisation immédiate et massive des métiers qui tiennent ce pays debout.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {revalorisationsData.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className={`px-6 py-4 flex items-center gap-3 ${category.color} border-b border-gray-200`}>
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      {getIcon(category.icon)}
                    </div>
                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-2/3 font-bold text-base">Métier</TableHead>
                          <TableHead className="w-1/3 text-right font-bold text-base">Revalorisation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.items.map((item, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</TableCell>
                            <TableCell className="font-bold text-right text-gray-900 dark:text-gray-100">{item.revalorisation}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-ljv-gold/20 to-ljv-navy/5 rounded-xl p-8 max-w-4xl mx-auto mb-12 shadow-md">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center flex items-center justify-center gap-2">
              <Coins className="inline-block text-ljv-gold" /> TOTAL REVALORISATIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 text-center shadow border border-gray-100">
                <p className="text-gray-900 dark:text-gray-100 mb-2 text-lg font-semibold">Bénéficiaires</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{revalorisationsSummary.beneficiaries}</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow border border-gray-100">
                <p className="text-gray-900 dark:text-gray-100 mb-2 text-lg font-semibold">Coût total estimé</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{revalorisationsSummary.cost}</p>
              </div>
            </div>
            <blockquote className="italic text-center text-xl font-serif border-l-4 pl-6 py-2 border-ljv-gold bg-white/80 rounded-r-lg shadow-sm text-gray-900 dark:text-gray-100 font-semibold">
              "{revalorisationsSummary.quote}"
            </blockquote>
          </div>

              <div className="text-center max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 dark:text-gray-100">Comprendre le financement</h3>
                <p className="mb-8 text-lg text-gray-900 dark:text-gray-100 font-semibold">
                  Pour savoir comment ces revalorisations seront financées par la Contribution Nationale de Justice Patrimoniale, consultez notre section dédiée.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-ljv-navy hover:bg-ljv-gold text-lg py-6" asChild>
                    <Link to="/manifeste">Lire le manifeste complet</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-ljv-navy text-ljv-navy hover:bg-ljv-navy hover:text-white text-lg py-6">
                    <Download className="mr-2 h-5 w-5" /> Télécharger en PDF
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* ONGLET 2: Avant/Après réforme */}
            <TabsContent value="comparison">
              <div className="max-w-6xl mx-auto mb-16">
                <div className="bg-ljv-navy text-white p-8 rounded-xl shadow-lg mb-12">
                  <h2 className="text-3xl font-serif font-bold mb-4 flex items-center">
                    <Calculator className="h-8 w-8 mr-3" />
                    Impact concret : Salaire net disponible après impôts
                  </h2>
                  <p className="text-xl leading-relaxed mb-4">
                    Découvrez métier par métier combien vous gagnerez réellement chaque mois après la réforme, impôts déduits.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>💡 Calculs réalistes :</strong> Salaires bruts actuels → nets après cotisations → nets après impôts. 
                      Comparaison avec la nouvelle fiscalité du mérite.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {beforeAfterData.map((data, index) => (
                    <BeforeAfterCard key={index} data={data} />
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-br from-ljv-gold/20 to-ljv-navy/5 rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
                    📊 Méthodologie de calcul
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 dark:text-gray-100">
                    <div>
                      <h4 className="font-bold mb-2">AVANT la réforme</h4>
                      <ul className="space-y-1 text-sm font-medium">
                        <li>• Salaires bruts actuels 2024</li>
                        <li>• Cotisations sociales (~23%)</li>
                        <li>• Impôt sur le revenu actuel (barème 2024)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">APRÈS la réforme</h4>
                      <ul className="space-y-1 text-sm font-medium">
                        <li>• Revalorisations salariales (programme LJV)</li>
                        <li>• Nouvelle fiscalité du mérite</li>
                        <li>• Impact réel sur le pouvoir d'achat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Revalorisations;
