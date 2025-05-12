
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { taxBrackets, taxBracketsContent } from '@/lib/tax-brackets';
import { formatAmount } from './FormatAmount';

const ContributionTable: React.FC = () => {
  return (
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
  );
};

export default ContributionTable;
