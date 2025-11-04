import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CNJPArchived: React.FC = () => {
  return (
    <div className="mt-16 bg-gray-50 rounded-xl shadow-sm border-2 border-orange-300 p-6">
      <Alert className="mb-6 bg-orange-50 border-orange-300">
        <AlertTriangle className="h-5 w-5 text-orange-600" />
        <AlertDescription className="text-orange-800 font-medium">
          <strong>MESURE ABANDONNÉE - PIVOT STRATÉGIQUE</strong>
          <br />
          La CNJP (Contribution Nationale de Justice Patrimoniale) a été abandonnée en raison de failles juridiques majeures. 
          Elle a été remplacée par un renforcement de l'Impôt sur le Revenu pour les ultra-hauts revenus.
        </AlertDescription>
      </Alert>

      <h2 className="text-3xl font-serif font-bold mb-4 text-center text-gray-600">
        CNJP – CONTRIBUTION NATIONALE DE JUSTICE PATRIMONIALE
        <br />
        <span className="text-xl text-orange-600">(Archivée - Non applicable)</span>
      </h2>
      
      <div className="prose prose-lg mx-auto mb-8 text-gray-600 opacity-75">
        <div className="flex items-start gap-4 mb-6">
          <span className="flex-shrink-0 text-2xl">⚠️</span>
          <p><strong>Raisons de l'abandon :</strong></p>
        </div>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Violation CEDH</strong> : Taxation progressive du patrimoine conduisant à son extinction</li>
          <li><strong>Impossibilité d'évaluation</strong> : Actifs non liquides (startups, crypto, art) impossibles à valoriser de manière fiable (-40 Md€/an de pertes estimées)</li>
          <li><strong>Exode fiscal inévitable</strong> : Fuite massive vers Monaco et l'étranger (-40 Md€/an de pertes estimées)</li>
          <li><strong>Complexité administrative</strong> : Coûts de gestion prohibitifs et contentieux massifs</li>
        </ul>

        <div className="bg-ljv-navy text-white p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 text-2xl">📋</span>
            <h3 className="font-bold text-xl">Nouvelle approche - IR Ultra-Hauts Revenus</h3>
          </div>
          
          <p className="mb-4">
            Le programme La Juste Voix se concentre désormais sur l'impôt sur le revenu 
            avec des taux progressifs pour les revenus exceptionnels :
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>55% pour revenus de 1 à 5 M€/an</li>
            <li>60% pour revenus de 5 à 10 M€/an</li>
            <li>65% pour revenus supérieurs à 10 M€/an</li>
          </ul>
          
          <p className="mt-4 text-ljv-gold font-medium">
            Recettes estimées : 24 à 37 Md€/an (au lieu de 90-130 Md€ avec CNJP)
          </p>
        </div>
        
        <div className="flex items-start gap-4 mb-4">
          <span className="flex-shrink-0 text-2xl">✅</span>
          <h3 className="font-bold text-xl text-green-700">Avantages du pivot stratégique :</h3>
        </div>
        
        <ul className="list-none space-y-2 mb-4">
          <li>➡️ Viabilité juridique : 95% vs 20% pour CNJP</li>
          <li>➡️ Simplicité administrative : pas d'évaluation de patrimoine</li>
          <li>➡️ Pas d'exode fiscal : pas de taxation confiscatoire</li>
          <li>➡️ Budget équilibré garanti : surplus structurel</li>
        </ul>
      </div>
    </div>
  );
};

export default CNJPArchived;
