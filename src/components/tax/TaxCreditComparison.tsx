import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, ArrowRight, Users, GraduationCap, Microscope } from 'lucide-react';
import { calculateIncomeTax } from '@/lib/tax-calculations';
import { formatAmount } from './FormatAmount';

interface Profile {
  name: string;
  level: 'junior' | 'confirmé' | 'senior';
  annualIncome: number;
  creditType: 'bac5' | 'bac10' | 'none';
  category: string;
}

const TaxCreditComparison: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bac5' | 'bac10'>('all');

  const profiles: Profile[] = [
    // Bac+5+ Profiles
    { name: 'Ingénieur débutant', level: 'junior', annualIncome: 40000, creditType: 'bac5', category: 'Ingénierie' },
    { name: 'Ingénieur confirmé', level: 'confirmé', annualIncome: 55000, creditType: 'bac5', category: 'Ingénierie' },
    { name: 'Ingénieur senior / Manager R&D', level: 'senior', annualIncome: 75000, creditType: 'bac5', category: 'Ingénierie' },
    
    { name: 'Cadre commercial junior', level: 'junior', annualIncome: 45000, creditType: 'bac5', category: 'Commerce' },
    { name: 'Responsable commercial', level: 'confirmé', annualIncome: 65000, creditType: 'bac5', category: 'Commerce' },
    { name: 'Directeur commercial', level: 'senior', annualIncome: 95000, creditType: 'bac5', category: 'Commerce' },
    
    { name: 'Consultant junior', level: 'junior', annualIncome: 42000, creditType: 'bac5', category: 'Conseil' },
    { name: 'Consultant senior', level: 'confirmé', annualIncome: 70000, creditType: 'bac5', category: 'Conseil' },
    { name: 'Directeur / Associé', level: 'senior', annualIncome: 110000, creditType: 'bac5', category: 'Conseil' },
    
    { name: 'Contrôleur de gestion', level: 'confirmé', annualIncome: 58000, creditType: 'bac5', category: 'Finance' },
    { name: 'Directeur financier PME', level: 'senior', annualIncome: 85000, creditType: 'bac5', category: 'Finance' },
    { name: 'Directeur financier Groupe', level: 'senior', annualIncome: 130000, creditType: 'bac5', category: 'Finance' },
    
    // Bac+10 Profiles
    { name: 'Médecin spécialiste débutant', level: 'junior', annualIncome: 65000, creditType: 'bac10', category: 'Médecine' },
    { name: 'Médecin spécialiste confirmé', level: 'confirmé', annualIncome: 90000, creditType: 'bac10', category: 'Médecine' },
    { name: 'Chirurgien / Chef de service', level: 'senior', annualIncome: 140000, creditType: 'bac10', category: 'Médecine' },
    
    { name: 'Pharmacien hospitalier', level: 'confirmé', annualIncome: 70000, creditType: 'bac10', category: 'Pharmacie' },
    { name: 'Pharmacien chercheur', level: 'senior', annualIncome: 95000, creditType: 'bac10', category: 'Pharmacie' },
    
    { name: 'Chercheur clinique', level: 'confirmé', annualIncome: 75000, creditType: 'bac10', category: 'Recherche' },
  ];

  const calculateProfileData = (profile: Profile) => {
    const isBac5 = profile.creditType === 'bac5';
    const isBac10 = profile.creditType === 'bac10';
    
    const taxBefore = calculateIncomeTax(profile.annualIncome, false, false);
    const taxAfter = calculateIncomeTax(profile.annualIncome, isBac5, isBac10);
    const annualSavings = taxBefore - taxAfter;
    const monthlySavings = annualSavings / 12;
    const savingsPercentage = taxBefore > 0 ? (annualSavings / taxBefore) * 100 : 0;

    return {
      ...profile,
      taxBefore,
      taxAfter,
      annualSavings,
      monthlySavings,
      savingsPercentage,
    };
  };

  const filteredProfiles = profiles
    .filter(p => {
      if (selectedCategory === 'all') return true;
      return p.creditType === selectedCategory;
    })
    .map(calculateProfileData);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'junior': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'confirmé': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'senior': return 'bg-orange-100 text-orange-800 border-orange-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCreditColor = (creditType: string) => {
    switch (creditType) {
      case 'bac5': return 'bg-blue-600 text-white';
      case 'bac10': return 'bg-teal-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  // Prepare chart data
  const chartData = filteredProfiles.map(p => ({
    name: p.name.length > 20 ? p.name.substring(0, 20) + '...' : p.name,
    fullName: p.name,
    'Avant crédit': Math.round(p.taxBefore / 12),
    'Après crédit': Math.round(p.taxAfter / 12),
    'Économie': Math.round(p.monthlySavings),
    creditType: p.creditType,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-ljv-gold/30">
          <p className="font-bold text-ljv-navy mb-2">{payload[0]?.payload?.fullName}</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700">
              <strong>Avant crédit:</strong> {formatAmount(payload[0]?.value * 12)}/an ({formatAmount(payload[0]?.value)}/mois)
            </p>
            <p className="text-gray-700">
              <strong>Après crédit:</strong> {formatAmount(payload[1]?.value * 12)}/an ({formatAmount(payload[1]?.value)}/mois)
            </p>
            <p className="text-green-700 font-bold">
              <strong>Économie:</strong> {formatAmount(payload[2]?.value * 12)}/an ({formatAmount(payload[2]?.value)}/mois)
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-2 border-ljv-gold/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl text-ljv-navy">
          <TrendingUp className="h-6 w-6" />
          Comparatif Avant/Après : Impact Concret par Profil
        </CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          Découvrez l'économie d'impôt réalisée grâce aux crédits Bac+5+ et Bac+10 pour différents niveaux d'expérience
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              selectedCategory === 'all'
                ? 'bg-ljv-navy text-white border-ljv-navy'
                : 'bg-white text-gray-700 border-gray-300 hover:border-ljv-navy'
            }`}
          >
            <Users className="h-4 w-4 inline mr-2" />
            Tous les profils
          </button>
          <button
            onClick={() => setSelectedCategory('bac5')}
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              selectedCategory === 'bac5'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
            }`}
          >
            <GraduationCap className="h-4 w-4 inline mr-2" />
            Bac+5+ (15%)
          </button>
          <button
            onClick={() => setSelectedCategory('bac10')}
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              selectedCategory === 'bac10'
                ? 'bg-teal-600 text-white border-teal-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-teal-600'
            }`}
          >
            <Microscope className="h-4 w-4 inline mr-2" />
            Bac+10 (20%)
          </button>
        </div>

        {/* Visual Chart */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-ljv-navy">
            📊 Visualisation : Impôt mensuel avant/après crédit
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={120}
                interval={0}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                label={{ value: 'Impôt mensuel (€)', angle: -90, position: 'insideLeft' }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Avant crédit" fill="#94a3b8" />
              <Bar dataKey="Après crédit" fill="#3b82f6" />
              <Bar dataKey="Économie" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-ljv-navy/5">
                <TableHead className="font-bold">Profil professionnel</TableHead>
                <TableHead className="font-bold text-center">Niveau</TableHead>
                <TableHead className="font-bold text-center">Crédit</TableHead>
                <TableHead className="font-bold text-right">Revenu annuel</TableHead>
                <TableHead className="font-bold text-right">IR avant</TableHead>
                <TableHead className="font-bold text-center">
                  <ArrowRight className="h-4 w-4 inline" />
                </TableHead>
                <TableHead className="font-bold text-right">IR après</TableHead>
                <TableHead className="font-bold text-right bg-green-50">Économie/mois</TableHead>
                <TableHead className="font-bold text-right bg-green-50">Économie/an</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProfiles.map((profile, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    <div>
                      <div className="text-gray-900">{profile.name}</div>
                      <div className="text-xs text-gray-500">{profile.category}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={getLevelColor(profile.level)}>
                      {profile.level}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getCreditColor(profile.creditType)}>
                      {profile.creditType === 'bac5' ? '15%' : '20%'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-gray-700">
                    {formatAmount(profile.annualIncome)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="text-gray-900 font-semibold">{formatAmount(profile.taxBefore)}</div>
                    <div className="text-xs text-gray-500">{formatAmount(profile.taxBefore / 12)}/mois</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ArrowRight className="h-4 w-4 text-ljv-gold inline" />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="text-blue-900 font-semibold">{formatAmount(profile.taxAfter)}</div>
                    <div className="text-xs text-blue-600">{formatAmount(profile.taxAfter / 12)}/mois</div>
                  </TableCell>
                  <TableCell className="text-right bg-green-50">
                    <div className="text-green-900 font-bold text-lg">
                      +{formatAmount(profile.monthlySavings)}
                    </div>
                  </TableCell>
                  <TableCell className="text-right bg-green-50">
                    <div className="text-green-900 font-bold">
                      +{formatAmount(profile.annualSavings)}
                    </div>
                    <div className="text-xs text-green-700">
                      (-{profile.savingsPercentage.toFixed(0)}%)
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border-2 border-blue-300">
            <div className="text-sm text-blue-800 mb-1">Économie moyenne Bac+5+</div>
            <div className="text-3xl font-bold text-blue-900">
              +{formatAmount(
                filteredProfiles
                  .filter(p => p.creditType === 'bac5')
                  .reduce((sum, p) => sum + p.monthlySavings, 0) /
                  filteredProfiles.filter(p => p.creditType === 'bac5').length || 0
              )}
            </div>
            <div className="text-xs text-blue-700 mt-1">par mois</div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-lg border-2 border-teal-300">
            <div className="text-sm text-teal-800 mb-1">Économie moyenne Bac+10</div>
            <div className="text-3xl font-bold text-teal-900">
              +{formatAmount(
                filteredProfiles
                  .filter(p => p.creditType === 'bac10')
                  .reduce((sum, p) => sum + p.monthlySavings, 0) /
                  filteredProfiles.filter(p => p.creditType === 'bac10').length || 0
              )}
            </div>
            <div className="text-xs text-teal-700 mt-1">par mois</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border-2 border-green-300">
            <div className="text-sm text-green-800 mb-1">Économie totale moyenne</div>
            <div className="text-3xl font-bold text-green-900">
              +{formatAmount(
                filteredProfiles.reduce((sum, p) => sum + p.monthlySavings, 0) /
                  filteredProfiles.length || 0
              )}
            </div>
            <div className="text-xs text-green-700 mt-1">par mois</div>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>💡 Lecture du tableau :</strong> Les montants affichés sont calculés selon le barème 
            progressif La Juste Voix. L'économie représente la différence d'impôt avant et après application 
            du crédit d'impôt (15% pour Bac+5+, 20% pour Bac+10). Plus le niveau de qualification et de 
            responsabilité augmente, plus l'impact du crédit est significatif en valeur absolue.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCreditComparison;
