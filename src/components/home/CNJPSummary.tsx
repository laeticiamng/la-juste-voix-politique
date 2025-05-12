
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CNJPSummary: React.FC = () => {
  // Sélection de quelques utilisations principales de la CNJP pour le résumé
  const keyUsages = [
    { description: "Revaloriser de +1 000 € nets/mois 1 million de soignants", amount: "12 milliards €", percentage: "12 %" },
    { description: "Revaloriser de +600 € nets/mois 900 000 enseignants", amount: "6,48 milliards €", percentage: "6,48 %" },
    { description: "Plan climat territorial (mobilité, énergie, rénovation)", amount: "15 milliards €", percentage: "15 %" },
    { description: "Moderniser tous les hôpitaux de proximité", amount: "10 milliards €", percentage: "10 %" },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-sm border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center">
          CNJP – CONTRIBUTION NATIONALE DE JUSTICE PATRIMONIALE
        </h2>
        
        <div className="prose prose-lg mx-auto mb-8 text-gray-700">
          <p className="mb-6 text-center">
            <strong>Objectif :</strong> Faire contribuer les 0,1 % les plus riches au redressement national, 
            en proportion de leur patrimoine net financier réel.
          </p>
          
          <div className="my-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              CE QUE PERMET LA CNJP POUR LA FRANCE (EXEMPLES CLÉS)
            </h3>
            
            <Table>
              <TableHeader>
                <TableRow className="bg-ljv-navy text-white">
                  <TableHead className="text-white">Utilisation proposée</TableHead>
                  <TableHead className="text-white text-center">Montant estimé</TableHead>
                  <TableHead className="text-white text-center">Part sur CNJP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keyUsages.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-center font-medium">{item.amount}</TableCell>
                    <TableCell className="text-center">{item.percentage}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-ljv-gold/10 font-bold">
                  <TableCell colSpan={3} className="text-center py-3">
                    Total CNJP : 100 milliards € / an
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="my-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              RÉFORME DES RETRAITES — LA JUSTE VOIX
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 justify-between mb-4">
              <div className="flex-1 bg-ljv-navy/5 rounded-lg p-4">
                <h4 className="font-bold mb-2">Âge légal rétabli à 60 ans</h4>
                <p>Pour respecter l'espérance de vie en bonne santé et garantir une retraite digne à tous.</p>
              </div>
              <div className="flex-1 bg-ljv-navy/5 rounded-lg p-4">
                <h4 className="font-bold mb-2">Pension garantie à 60%</h4>
                <p>Du salaire net de référence à vie, avec revalorisation annuelle indexée sur l'inflation.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/fiscalite">
              <Button className="bg-ljv-navy hover:bg-ljv-navy/90 text-white px-6 py-3">
                Voir tous les détails sur la fiscalité
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CNJPSummary;
