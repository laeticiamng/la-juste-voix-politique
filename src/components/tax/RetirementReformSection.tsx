
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface ComparisonItem {
  current: string;
  proposed: string;
}

const comparisons: ComparisonItem[] = [
  { current: "100 % répartition", proposed: "50 % répartition + 50 % capitalisation" },
  { current: "Départ à 64 ans ou plus", proposed: "Départ garanti à 60 ans" },
  { current: "Taux moyen de remplacement : 49 %", proposed: "Taux garanti à 60 %" },
  { current: "Incertitude, complexité, instabilité", proposed: "Lisibilité, transparence, sécurité" }
];

const RetirementReformSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">
        RÉFORME DES RETRAITES — LA JUSTE VOIX
      </h2>
      
      <div className="prose prose-lg mx-auto text-gray-700">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Le constat actuel :</h3>
          <p className="mb-2">
            Aujourd'hui, le système de retraite en France repose à 100 % sur la répartition. Cela signifie que :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Les actifs cotisent chaque mois pour payer les pensions des retraités actuels</li>
            <li>Il n'existe aucun compte personnel, ni épargne publique encadrée par l'État</li>
            <li>Le système dépend exclusivement de l'équilibre démographique, qui se dégrade</li>
          </ul>
          <p className="font-bold">➡️ Résultat : le système est fragile, stressant, et source de conflits générationnels.</p>
        </div>
        
        <div className="border-t border-gray-200 my-8"></div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            <span className="inline-flex items-center mr-2">🎯</span> 
            Ce que je propose : Un système mixte, responsable et durable
          </h3>
          <p className="mb-4">
            Grâce aux recettes du programme La Juste Voix (IR ultra-hauts revenus + CER), nous proposons à moyen terme un nouveau modèle de retraite, plus juste, plus stable, et plus lisible :
          </p>
          
          <Alert className="mb-6 bg-orange-50 border-orange-300">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>⚠️ MESURE REPORTÉE</strong> : Le retour à la retraite à 60 ans est reporté à Phase 2, conditionné à une croissance économique soutenue ({'>'}3%/an). Le budget actuel de 24-37 Md€/an (IR ultra-hauts revenus) ne permet pas de financer cette réforme (coût estimé : 18-26 Md€/an).
            </AlertDescription>
          </Alert>
          
          <div className="bg-ljv-navy/5 p-5 rounded-lg mb-6">
            <h4 className="font-bold mb-2">1. L'âge légal de départ à la retraite est rétabli à 60 ans pour tous</h4>
            <p className="mb-2">Pourquoi 60 ans ?</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>L'espérance de vie en bonne santé plafonne à 64 ans</li>
              <li>De nombreux Français arrivent à la retraite épuisés, cassés, malades</li>
              <li>Les années après 60 ans sont médicalement appelées années gagnées — pas années à travailler</li>
            </ul>
            
            <blockquote className="italic border-l-4 border-ljv-gold pl-4 py-2 my-4">
              "On ne vit pas plus longtemps pour travailler plus longtemps. On vit plus longtemps pour vivre mieux."
            </blockquote>
          </div>

          <div className="bg-ljv-navy/5 p-5 rounded-lg mb-6">
            <h4 className="font-bold mb-2">2. Une pension garantie à 60 % du salaire net de référence à vie</h4>
            <ul className="list-disc pl-6">
              <li>Quel que soit le statut ou le métier</li>
              <li>Avec une revalorisation annuelle indexée sur l'inflation</li>
            </ul>
          </div>

          <div className="bg-ljv-navy/5 p-5 rounded-lg mb-6">
            <h4 className="font-bold mb-2">3. Un système mixte : 50 % répartition / 50 % capitalisation sociale</h4>
            <ul className="list-disc pl-6">
              <li>Répartition (50 %) : comme aujourd'hui, on finance collectivement les pensions en cours</li>
              <li>Capitalisation sociale (50 %) : chaque actif cotise aussi pour lui-même, dans un compte retraite personnel garanti par l'État</li>
              <li>Pas une retraite par points, mais un droit réel, transparent et traçable</li>
            </ul>
          </div>

          <div className="bg-ljv-navy/5 p-5 rounded-lg mb-6">
            <h4 className="font-bold mb-2">4. Un plafonnement équitable des très hautes pensions</h4>
            <ul className="list-disc pl-6">
              <li>Pour éviter les abus</li>
              <li>Pour maintenir la solidarité et l'équilibre global</li>
              <li>Basé sur : la durée de cotisation, le salaire moyen de carrière, et un plafond national équitable</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 my-8"></div>

        <div>
          <h3 className="text-xl font-bold mb-4">Les avantages de ce système :</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-ljv-navy text-white">
                  <th className="border p-3 text-center">Avant — système actuel</th>
                  <th className="border p-3 text-center">Après — système La Juste Voix</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border p-3">{item.current}</td>
                    <td className="border p-3 font-medium text-ljv-navy">{item.proposed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <ul className="mb-6">
            <li className="flex items-start gap-2 mb-2">
              <span className="text-green-600 font-bold flex-shrink-0">✅</span> 
              <span>Ce système protège la solidarité nationale tout en redonnant du pouvoir de projection à chacun.</span>
            </li>
            <li className="flex items-start gap-2 mb-2">
              <span className="text-orange-600 font-bold flex-shrink-0">⚠️</span> 
              <span>Financement prévu : <strong>18-26 Md€/an nécessaires</strong> — actuellement reporté à Phase 2 (budget actuel 24-37 Md€/an alloué aux priorités immédiates).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold flex-shrink-0">✅</span> 
              <span>Il respecte les corps, les carrières longues, et les réalités humaines.</span>
            </li>
          </ul>
          
          <blockquote className="italic border-l-4 border-ljv-gold pl-4 py-2 mt-8 bg-ljv-gold/10">
            <p className="mb-0">
              <span className="text-lg mr-2">💬</span>
              "La retraite, ce n'est pas une faveur. C'est une reconnaissance. Et à partir de 60 ans, elle redevient un droit universel, solide, et humainement soutenable."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default RetirementReformSection;
