
import React from 'react';
import { Euro } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const IncomeTaxTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-ljv-gold p-6 mb-8">
      <h3 className="text-2xl font-serif font-bold mb-4 text-center flex items-center justify-center gap-2">
        <Euro className="text-ljv-navy" size={28} />
        Grille Fiscale du Revenu
      </h3>
      
      <p className="text-center mb-6 text-gray-700">
        Cette grille vise à soulager les classes moyennes et les talents intermédiaires, 
        maintenir une contribution forte des ultra-riches et introduire davantage de progressivité pour plus de justice.
      </p>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Revenu imposable annuel</TableHead>
              <TableHead className="w-1/2 text-center">Taux marginal optimisé</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-gray-50">
              <TableCell>Jusqu'à 15 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">0 %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>15 001 € – 30 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">10 %</TableCell>
            </TableRow>
            <TableRow className="bg-gray-50">
              <TableCell>30 001 € – 40 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">17 %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>40 001 € – 50 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">22 %</TableCell>
            </TableRow>
            <TableRow className="bg-gray-50">
              <TableCell>50 001 € – 85 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">30 %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>85 001 € – 150 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">34 %</TableCell>
            </TableRow>
            <TableRow className="bg-gray-50">
              <TableCell>150 001 € – 200 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">38 %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>200 001 € – 250 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">41 %</TableCell>
            </TableRow>
            <TableRow className="bg-gray-50">
              <TableCell>250 001 € – 500 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">45 %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>500 001 € – 1 000 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">50 %</TableCell>
            </TableRow>
            <TableRow className="bg-gray-50">
              <TableCell>1 000 001 € – 5 000 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">55 %</TableCell>
            </TableRow>
            <TableRow className="bg-ljv-gold/10">
              <TableCell>5 000 001 € – 10 000 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">60 %</TableCell>
            </TableRow>
            <TableRow className="bg-orange-50">
              <TableCell>Plus de 10 000 000 €</TableCell>
              <TableCell className="font-bold text-center text-ljv-navy">65 %</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <blockquote className="italic text-gray-700 text-lg">
          "Quand tu gagnes 45 000 € par an, tu ne devrais pas être taxé comme si tu étais riche. 
          Mais quand tu gagnes plus de 10 millions d'euros par an, contribuer à 65 %, ce n'est pas du vol.
          C'est du respect pour ceux qui font vivre la République au quotidien."
        </blockquote>
      </div>
      
      <div className="mt-4 p-4 bg-ljv-navy/5 rounded-lg border border-ljv-navy/20">
        <p className="text-sm text-gray-700">
          <strong>Note importante :</strong> Ces nouveaux barèmes ultra-hauts revenus (55%, 60%, 65%) 
          ne concernent que 0,01% des contribuables français (revenus {'>'} 1 M€/an) 
          et garantissent un financement viable et juridiquement solide du programme 
          à hauteur de 24-37 Md€/an.
        </p>
      </div>
    </div>
  );
};

export default IncomeTaxTable;
