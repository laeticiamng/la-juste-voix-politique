import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export interface BeforeAfterData {
  metier: string;
  statut?: string;
  salaireActuelBrut: number;
  salaireActuelNet: number;
  impotActuel: number;
  salaireActuelPostImpot: number;
  salaireReformeNet: number;
  impotReforme: number;
  salaireReformePostImpot: number;
  description?: string;
}

interface BeforeAfterCardProps {
  data: BeforeAfterData;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ data }) => {
  const gainMensuel = data.salaireReformePostImpot - data.salaireActuelPostImpot;
  const gainAnnuel = gainMensuel * 12;
  const pourcentageGain = ((gainMensuel / data.salaireActuelPostImpot) * 100).toFixed(1);

  const formatEuro = (montant: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(montant);
  };

  return (
    <Card className="overflow-hidden border-2 hover:border-ljv-gold transition-all duration-300">
      <div className="bg-gradient-to-r from-ljv-navy to-ljv-navy/90 text-white p-4">
        <h3 className="text-xl font-bold">{data.metier}</h3>
        {data.statut && (
          <p className="text-sm text-white/80 font-medium">{data.statut}</p>
        )}
        {data.description && (
          <p className="text-sm text-white/90 mt-1">{data.description}</p>
        )}
      </div>
      
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* AVANT */}
          <div className="p-6 bg-red-50 border-r border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                AVANT
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 font-medium">Salaire brut mensuel</p>
                <p className="text-lg font-bold text-gray-900">{formatEuro(data.salaireActuelBrut)}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 font-medium">Salaire net (cotisations)</p>
                <p className="text-base font-semibold text-gray-800">{formatEuro(data.salaireActuelNet)}</p>
              </div>
              
              <div className="pt-2 border-t border-red-200">
                <p className="text-xs text-gray-600 font-medium">Impôt sur le revenu</p>
                <p className="text-base font-semibold text-red-700">- {formatEuro(data.impotActuel)}</p>
              </div>
              
              <div className="pt-2 border-t-2 border-red-400">
                <p className="text-xs text-gray-600 font-bold">Net disponible / mois</p>
                <p className="text-2xl font-bold text-red-700">{formatEuro(data.salaireActuelPostImpot)}</p>
              </div>
            </div>
          </div>

          {/* APRÈS */}
          <div className="p-6 bg-green-50">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                APRÈS RÉFORME
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 font-medium">Salaire brut mensuel</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatEuro(data.salaireActuelBrut + (data.salaireReformeNet - data.salaireActuelNet))}
                </p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 font-medium">Salaire net (cotisations)</p>
                <p className="text-base font-semibold text-gray-800">{formatEuro(data.salaireReformeNet)}</p>
              </div>
              
              <div className="pt-2 border-t border-green-200">
                <p className="text-xs text-gray-600 font-medium">Impôt sur le revenu</p>
                <p className="text-base font-semibold text-green-700">- {formatEuro(data.impotReforme)}</p>
              </div>
              
              <div className="pt-2 border-t-2 border-green-600">
                <p className="text-xs text-gray-600 font-bold">Net disponible / mois</p>
                <p className="text-2xl font-bold text-green-700">{formatEuro(data.salaireReformePostImpot)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* GAIN */}
        <div className="bg-gradient-to-r from-ljv-gold/20 to-ljv-gold/10 p-6 border-t-2 border-ljv-gold">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-ljv-gold" />
              <div>
                <p className="text-sm text-gray-700 font-medium">Gain mensuel net d'impôts</p>
                <p className="text-3xl font-bold text-ljv-gold">{formatEuro(gainMensuel)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-gray-600 font-medium">Gain annuel</p>
                <p className="text-xl font-bold text-gray-900">{formatEuro(gainAnnuel)}</p>
              </div>
              
              <div className="bg-ljv-gold text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">Augmentation</p>
                <p className="text-2xl font-bold">+{pourcentageGain}%</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterCard;
