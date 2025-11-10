import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, Microscope, Briefcase, Code, DollarSign, Scale } from 'lucide-react';
import { HIGHER_EDUCATION_PROFESSIONS, DOCTORATE_MEDICAL_PROFESSIONS } from '@/lib/tax-calculations';

const TaxCreditProfessions: React.FC = () => {
  const [searchBac5, setSearchBac5] = useState('');
  const [searchBac10, setSearchBac10] = useState('');

  // Organiser les professions Bac+5+ par catégories
  const bac5Categories = {
    'Ingénieurs & Techniques': [
      'ingénieur',
      'informaticien',
      'développeur',
      'chercheur',
      'technicien supérieur',
      'architecte',
      'data scientist',
      'expert r&d',
      'manager r&d',
    ],
    'Commerce & Marketing': [
      'cadre commercial',
      'directeur commercial',
      'responsable marketing',
      'chef de produit',
      'business developer',
    ],
    'Finance & Gestion': [
      'analyste financier',
      'contrôleur de gestion',
      'directeur financier',
      'consultant',
    ],
    'Management': [
      'cadre supérieur',
      'directeur',
      'manager',
      'responsable',
      'chef de projet',
      'chef de service',
    ],
    'Professions Libérales': [
      'expert-comptable',
      'avocat',
      'notaire',
    ],
  };

  // Organiser les professions Bac+10 par catégories
  const bac10Categories = {
    'Médecine Spécialisée': [
      'médecin spécialiste',
      'chirurgien',
      'cardiologue',
      'oncologue',
      'neurologue',
      'radiologue',
      'anesthésiste',
      'pédiatre',
      'gynécologue',
      'psychiatre',
    ],
    'Médecine Académique': [
      'médecin chercheur',
      'chef de service',
      'professeur médecine',
    ],
    'Pharmacie': [
      'pharmacien hospitalier',
      'pharmacien chercheur',
      'docteur en pharmacie',
    ],
    'Biologie & Recherche': [
      'docteur en biologie médicale',
      'chercheur clinique',
      'biologiste médical',
    ],
    'Vétérinaire': [
      'vétérinaire chercheur',
      'docteur vétérinaire',
    ],
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Ingénieur')) return <Code className="h-5 w-5" />;
    if (category.includes('Commerce')) return <Briefcase className="h-5 w-5" />;
    if (category.includes('Finance')) return <DollarSign className="h-5 w-5" />;
    if (category.includes('Libérale')) return <Scale className="h-5 w-5" />;
    if (category.includes('Médecine') || category.includes('Biologie')) return <Microscope className="h-5 w-5" />;
    return <GraduationCap className="h-5 w-5" />;
  };

  const filterProfessions = (professions: string[], search: string) => {
    if (!search) return professions;
    return professions.filter(p => 
      p.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Card className="border-2 border-ljv-gold/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl text-ljv-navy">
          <GraduationCap className="h-6 w-6" />
          Professions Éligibles aux Crédits d'Impôt
        </CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          Liste complète des métiers éligibles aux crédits d'impôt Bac+5+ (15%) et Bac+10 (20%)
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bac5" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="bac5" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <GraduationCap className="h-4 w-4 mr-2" />
              Bac+5+ (15%)
            </TabsTrigger>
            <TabsTrigger value="bac10" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Microscope className="h-4 w-4 mr-2" />
              Bac+10 (20%)
            </TabsTrigger>
          </TabsList>

          {/* Bac+5+ Tab */}
          <TabsContent value="bac5" className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher une profession..."
                value={searchBac5}
                onChange={(e) => setSearchBac5(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
              <p className="text-sm text-blue-900">
                <strong>📊 ~2 millions de bénéficiaires</strong> - Crédit moyen : 826€/an (+69€/mois)
              </p>
            </div>

            <div className="space-y-6">
              {Object.entries(bac5Categories).map(([category, professions]) => {
                const filtered = filterProfessions(professions, searchBac5);
                if (filtered.length === 0) return null;

                return (
                  <div key={category} className="bg-white rounded-lg border border-gray-200 p-5">
                    <h3 className="font-bold text-lg mb-3 text-blue-800 flex items-center gap-2">
                      {getCategoryIcon(category)}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {filtered.map((profession) => (
                        <Badge 
                          key={profession}
                          variant="outline"
                          className="bg-blue-50 text-blue-900 border-blue-300 capitalize text-sm py-1.5 px-3"
                        >
                          {profession}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>💡 Critères d'éligibilité :</strong> Diplôme Bac+5+ d'une grande école 
                (commerce, ingénieurs, management) ou profession libérale réglementée, ou cadre 
                supérieur avec fonctions de direction/expertise.
              </p>
            </div>
          </TabsContent>

          {/* Bac+10 Tab */}
          <TabsContent value="bac10" className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher une profession..."
                value={searchBac10}
                onChange={(e) => setSearchBac10(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mb-4">
              <p className="text-sm text-teal-900">
                <strong>📊 ~50 000 bénéficiaires</strong> - Crédit moyen : 1 580€/an (+132€/mois)
              </p>
            </div>

            <div className="space-y-6">
              {Object.entries(bac10Categories).map(([category, professions]) => {
                const filtered = filterProfessions(professions, searchBac10);
                if (filtered.length === 0) return null;

                return (
                  <div key={category} className="bg-white rounded-lg border border-gray-200 p-5">
                    <h3 className="font-bold text-lg mb-3 text-teal-800 flex items-center gap-2">
                      {getCategoryIcon(category)}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {filtered.map((profession) => (
                        <Badge 
                          key={profession}
                          variant="outline"
                          className="bg-teal-50 text-teal-900 border-teal-300 capitalize text-sm py-1.5 px-3"
                        >
                          {profession}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>💡 Critères d'éligibilité :</strong> Doctorat d'État en médecine (Bac+10+) 
                avec spécialisation, doctorat en pharmacie avec internat, ou doctorat en sciences 
                appliquées à la santé (biologie médicale, vétérinaire).
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Non-cumul note */}
        <div className="mt-6 bg-orange-50 p-4 rounded-lg border border-orange-300">
          <p className="text-sm text-orange-900">
            <strong>⚠️ Non-cumul :</strong> Les crédits Bac+5+ et Bac+10 ne sont pas cumulables. 
            Si vous êtes éligible aux deux, c'est le crédit le plus avantageux (20% Bac+10) qui s'applique automatiquement.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCreditProfessions;
