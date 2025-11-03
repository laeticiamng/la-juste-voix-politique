
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
  // Affectations RÉELLES de la CNJP selon le programme
  const keyUsages = [
    { description: "Revalorisation métiers publics (enseignants, soignants, policiers, etc.)", amount: "21-30 Md€/an", percentage: "30%" },
    { description: "Retraites - Retour à 60 ans (système mixte, pension 60%)", amount: "17,5-25 Md€/an", percentage: "25%" },
    { description: "FSCRD - Remboursement de la dette", amount: "14-20 Md€/an", percentage: "20%" },
    { description: "Logement social + Plan zéro SDF", amount: "9,8-14 Md€/an", percentage: "14%" },
    { description: "Transition écologique (rénovation, mobilité, emplois verts)", amount: "5,6-8 Md€/an", percentage: "8%" },
    { description: "Santé mentale et prévention", amount: "2,1-3 Md€/an", percentage: "3%" },
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
                    Total CNJP : 70-100 milliards € / an (100% affecté)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="my-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              RETRAITES — LA JUSTE VOIX
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 justify-between mb-4">
              <div className="flex-1 bg-ljv-navy/5 rounded-lg p-4">
                <h4 className="font-bold mb-2">Âge légal rétabli à 60 ans</h4>
                <p>Pour respecter l'espérance de vie en bonne santé et garantir une retraite digne à tous.</p>
              </div>
              <div className="flex-1 bg-ljv-navy/5 rounded-lg p-4">
                <h4 className="font-bold mb-2">Pension garantie à 60%</h4>
                <p>Du salaire net de référence à vie, avec système mixte 50% répartition + 50% capitalisation sociale.</p>
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
