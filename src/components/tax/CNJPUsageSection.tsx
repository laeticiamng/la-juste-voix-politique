
import React from 'react';

interface UsageItem {
  description: string;
  amount: string;
  percentage: string;
}

const cnjpUsageData: UsageItem[] = [
  { description: "Revaloriser de +1 000 € nets/mois 1 million de soignants", amount: "12 milliards €", percentage: "12 %" },
  { description: "Revaloriser de +600 € nets/mois 900 000 enseignants", amount: "6,48 milliards €", percentage: "6,48 %" },
  { description: "Revaloriser de +500 € nets/mois 700 000 agents publics essentiels", amount: "4,2 milliards €", percentage: "4,20 %" },
  { description: "Rembourser 20 % de la dette des hôpitaux publics", amount: "10 milliards €", percentage: "10 %" },
  { description: "Financer 50 000 logements sociaux à loyers modérés", amount: "5 milliards €", percentage: "5 %" },
  { description: "Lancer un plan climat territorial (mobilité, énergie, rénovation)", amount: "15 milliards €", percentage: "15 %" },
  { description: "Plan santé mentale universel + prévention active", amount: "7 milliards €", percentage: "7 %" },
  { description: "Gratuité des repas scolaires pour 3 millions d'élèves", amount: "3 milliards €", percentage: "3 %" },
  { description: "Payer au SMIC tous les étudiants en stage ou externat", amount: "2,5 milliards €", percentage: "2,5 %" },
  { description: "Moderniser tous les hôpitaux de proximité", amount: "10 milliards €", percentage: "10 %" },
  { description: "Créer 100 000 emplois verts en territoire", amount: "5 milliards €", percentage: "5 %" },
];

const CNJPUsageSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">
        CE QUE PERMET LA CNJP POUR LA FRANCE (100 MILLIARDS €/AN)
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
              <td className="border p-3">TOTAL</td>
              <td className="border p-3 text-center">100 milliards €</td>
              <td className="border p-3 text-center">100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CNJPUsageSection;
