
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { revalorisationsData, revalorisationsSummary } from '../lib/revalorisations-data';
import { Book, Coins, Download, Heart, Shield, Users, GraduationCap, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center title-gradient">
            Qui va être revalorisé ?
          </h1>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-ljv-navy bg-opacity-5 p-6 rounded-xl border border-ljv-navy border-opacity-10 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4 text-ljv-navy">
                <span className="inline-block bg-ljv-gold text-white rounded-full w-10 h-10 text-center leading-10 mr-3">
                  🎯
                </span>
                Notre engagement
              </h2>
              <p className="text-lg">
                Grâce à la Contribution Nationale de Justice Patrimoniale (CNJP), nous proposons une revalorisation immédiate et massive des métiers qui tiennent ce pays debout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {revalorisationsData.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className={`px-6 py-4 flex items-center gap-3 ${category.color}`}>
                    <div className="rounded-full bg-white bg-opacity-50 p-2">
                      {getIcon(category.icon)}
                    </div>
                    <h3 className="text-lg font-bold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <table className="w-full">
                      <tbody>
                        {category.items.map((item, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-4 border-b border-gray-100">{item.title}</td>
                            <td className="py-3 px-4 border-b border-gray-100 font-bold text-right">{item.revalorisation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ljv-gold bg-opacity-10 rounded-xl p-8 max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">
              <Coins className="inline-block mr-2 mb-1" /> TOTAL REVALORISATIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-5 text-center shadow-sm">
                <p className="text-gray-600 mb-2">Bénéficiaires</p>
                <p className="text-xl font-bold">{revalorisationsSummary.beneficiaries}</p>
              </div>
              <div className="bg-white rounded-lg p-5 text-center shadow-sm">
                <p className="text-gray-600 mb-2">Coût total estimé</p>
                <p className="text-xl font-bold">{revalorisationsSummary.cost}</p>
              </div>
            </div>
            <blockquote className="italic text-center text-lg border-l-4 pl-4 border-ljv-gold">
              "{revalorisationsSummary.quote}"
            </blockquote>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">Comprendre le financement</h3>
            <p className="mb-6 text-gray-700">
              Pour savoir comment ces revalorisations seront financées par la Contribution Nationale de Justice Patrimoniale, consultez notre section dédiée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-ljv-navy hover:bg-ljv-gold" asChild>
                <Link to="/manifeste">Lire le manifeste complet</Link>
              </Button>
              <Button variant="outline" className="border-ljv-navy text-ljv-navy hover:bg-ljv-navy hover:text-white">
                <Download className="mr-2 h-4 w-4" /> Télécharger en PDF
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Revalorisations;
