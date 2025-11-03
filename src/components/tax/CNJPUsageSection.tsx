
import React from 'react';

interface UsageItem {
  description: string;
  amount: string;
  percentage: string;
}

const cnjpUsageData: UsageItem[] = [
  { description: "Revalorisation métiers publics (enseignants, soignants, policiers, pompiers, magistrats, agents territoriaux, etc.)", amount: "17,5-28 Md€/an", percentage: "35%" },
  { description: "FSCRD - Remboursement de la dette publique", amount: "12-19,2 Md€/an", percentage: "24%" },
  { description: "Logement social et lutte contre le mal-logement (500 000 logements + Plan zéro SDF)", amount: "9-14,4 Md€/an", percentage: "18%" },
  { description: "Transition écologique (rénovation énergétique, mobilité propre, transports publics, 100 000 emplois verts)", amount: "5,5-8,8 Md€/an", percentage: "11%" },
  { description: "Fonds de garantie des retraites (maintien à 64 ans avec élargissement base contributive)", amount: "4,5-7,2 Md€/an", percentage: "9%" },
  { description: "Santé mentale et prévention (crédit santé mentale universel, prévention active)", amount: "1,5-2,4 Md€/an", percentage: "3%" },
];

const CNJPUsageSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">
        AFFECTATION COMPLÈTE DE LA CNJP (50-80 MILLIARDS €/AN)
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ljv-navy text-white">
              <th className="border p-3 text-left">Utilisation proposée</th>
              <th className="border p-3 text-center">Montant estimé</th>
              <th className="border p-3 text-center">Part sur CNJP (%)</th>
            </tr>
          </thead>
          <tbody>
            {cnjpUsageData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border p-3">{item.description}</td>
                <td className="border p-3 text-center font-medium">{item.amount}</td>
                <td className="border p-3 text-center">{item.percentage}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-ljv-gold/10 font-bold">
              <td className="border p-3">TOTAL CNJP</td>
              <td className="border p-3 text-center">50-80 Md€/an</td>
              <td className="border p-3 text-center">100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CNJPUsageSection;
