
import React from 'react';

interface UsageItem {
  description: string;
  amount: string;
  percentage: string;
}

const cnjpUsageData: UsageItem[] = [
  { description: "Revalorisation métiers publics (enseignants, soignants, policiers, pompiers, magistrats, agents territoriaux, etc.)", amount: "22,5-32,5 Md€/an", percentage: "25%" },
  { description: "Retraites - Retour à 60 ans avec système mixte (50% répartition + 50% capitalisation sociale)", amount: "18-26 Md€/an", percentage: "20%" },
  { description: "FSCRD - Remboursement de la dette publique", amount: "13,5-19,5 Md€/an", percentage: "15%" },
  { description: "Logement social et lutte contre le mal-logement (500 000 logements + Plan zéro SDF)", amount: "9,9-14,3 Md€/an", percentage: "11%" },
  { description: "Transition écologique (rénovation énergétique, mobilité propre, transports publics, 100 000 emplois verts)", amount: "7,2-10,4 Md€/an", percentage: "8%" },
  { description: "Éducation - Formation, orientation, classes à taille humaine (hors salaires enseignants)", amount: "4,5-6,5 Md€/an", percentage: "5%" },
  { description: "Santé mentale, prévention et santé mobile (crédit universel, santé de proximité)", amount: "3,6-5,2 Md€/an", percentage: "4%" },
  { description: "Démocratie participative (budget citoyen + service civique universel)", amount: "3,6-5,2 Md€/an", percentage: "4%" },
  { description: "RSA réformé - Accompagnement emploi, Pass mobilité, crèche", amount: "2,7-3,9 Md€/an", percentage: "3%" },
  { description: "Immigration & Intégration par la contribution", amount: "1,8-2,6 Md€/an", percentage: "2%" },
  { description: "Sécurité & Prévention (binômes collège, maisons justice)", amount: "1,8-2,6 Md€/an", percentage: "2%" },
  { description: "Justice sociale & Contrôle citoyen (observatoires, transparence)", amount: "0,9-1,3 Md€/an", percentage: "1%" },
];

const CNJPUsageSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">
        AFFECTATION COMPLÈTE DE LA CNJP (90-130 MILLIARDS €/AN)
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
              <td className="border p-3 text-center">90-130 Md€/an</td>
              <td className="border p-3 text-center">100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CNJPUsageSection;
