
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { taxBrackets, taxBracketsContent } from '@/lib/tax-brackets';

const formatAmount = (amount: number | null): string => {
  if (amount === null) return '∞';
  
  if (amount >= 1000) {
    return `${amount / 1000} Md€`;
  }
  return `${amount} M€`;
};

const TaxBracketsTable: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-serif font-bold mb-4 text-center">
        {taxBracketsContent.title}
      </h2>
      
      <div className="prose prose-lg mx-auto mb-8 text-gray-700">
        <p>{taxBracketsContent.description}</p>
        <div className="whitespace-pre-line">{taxBracketsContent.supplementaryInfo}</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-8">
        <Table>
          <TableCaption>{taxBracketsContent.notes}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Patrimoine</TableHead>
              <TableHead className="w-1/6 text-center">Taux</TableHead>
              <TableHead>Niveau de richesse</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taxBrackets.map((bracket, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <TableCell className="font-medium">
                  {bracket.max 
                    ? `${formatAmount(bracket.min)} à ${formatAmount(bracket.max)}`
                    : `Plus de ${formatAmount(bracket.min)}`
                  }
                </TableCell>
                <TableCell className="font-bold text-center text-ljv-navy">{bracket.rate}%</TableCell>
                <TableCell>{bracket.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-ljv-navy text-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-serif font-bold mb-2">Pourquoi ce barème ?</h3>
        <p>
          Ce barème équilibré permet de générer les ressources nécessaires à la revitalisation de nos services publics
          sans pour autant décourager l'initiative ou la création de richesse.
          Il concentre l'effort sur ceux qui peuvent contribuer sans impact sur leur niveau de vie.
        </p>
      </div>
    </div>
  );
};

export default TaxBracketsTable;
