import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CNJPSummaryArchived: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <Alert className="mb-8 bg-orange-50 border-orange-300">
        <AlertTriangle className="h-5 w-5 text-orange-600" />
        <AlertDescription className="text-orange-800 font-medium text-lg">
          <strong>⚠️ PROGRAMME PIVOTÉ - CNJP ABANDONNÉE</strong>
          <br />
          La CNJP a été abandonnée en raison de 3 failles juridiques fatales. Le programme est désormais financé par l'IR ultra-hauts revenus (24-37 Md€/an).
        </AlertDescription>
      </Alert>

      <div className="bg-gray-100 rounded-xl shadow-lg p-8 opacity-60">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center text-gray-600">
          CNJP – CONTRIBUTION NATIONALE DE JUSTICE PATRIMONIALE
          <br />
          <span className="text-xl text-orange-600">(Archivée - Non applicable)</span>
        </h2>
        
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600 font-medium mb-4">
            Anciennement prévue pour générer 90-130 Md€/an, la CNJP a été remplacée par :
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-ljv-navy mb-4">Nouveau système de financement</h3>
            <ul className="text-left space-y-2 text-gray-800">
              <li>✓ <strong>IR ultra-hauts revenus</strong> : 55-65% sur revenus {'>'} 1M€/an → 18-28 Md€/an</li>
              <li>✓ <strong>CER (10% patrimoine {'>'} 100M€)</strong> : Étalée sur 10 ans → 5-6 Md€/an</li>
              <li>✓ <strong>Lutte fraude fiscale</strong> : Renforcée → 3-5 Md€/an</li>
              <li>✗ <strong>Crédit Bac+5+</strong> : -1,62 Md€/an</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-2xl font-bold text-ljv-navy">TOTAL NET : 24,38 à 37,38 Md€/an</p>
              <p className="text-sm text-gray-600 mt-2">Programme réduit à 30% des ambitions initiales mais juridiquement solide (95% viabilité)</p>
            </div>
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-6 border border-gray-300">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-700">
            Affectation budgétaire révisée (Version archivée)
          </h3>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-300">
                <TableHead className="text-gray-700">Utilisation (ancienne CNJP)</TableHead>
                <TableHead className="text-center text-gray-700">Montant prévu (obsolète)</TableHead>
                <TableHead className="text-center text-gray-700">Statut actuel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Revalorisations métiers publics</TableCell>
                <TableCell className="text-center font-medium">22,5-32,5 Md€/an</TableCell>
                <TableCell className="text-center text-orange-600 font-bold">Réduit à 8-10 Md€</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell>Retraites 60 ans</TableCell>
                <TableCell className="text-center font-medium">18-26 Md€/an</TableCell>
                <TableCell className="text-center text-red-600 font-bold">Reporté Phase 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>FSCRD Remboursement dette</TableCell>
                <TableCell className="text-center font-medium">13,5-19,5 Md€/an</TableCell>
                <TableCell className="text-center text-red-600 font-bold">Abandonné</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell>Logement social</TableCell>
                <TableCell className="text-center font-medium">9,9-14,3 Md€/an</TableCell>
                <TableCell className="text-center text-orange-600 font-bold">Réduit à 4-6 Md€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Transition écologique</TableCell>
                <TableCell className="text-center font-medium">7,2-10,4 Md€/an</TableCell>
                <TableCell className="text-center text-orange-600 font-bold">Réduit à 3-5 Md€</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="mt-6 p-4 bg-ljv-navy/10 rounded-lg">
            <p className="text-center text-sm font-bold text-gray-800">
              📋 Voir le détail du pivot : PIVOT_STRATEGIQUE_OPTION1.md + ANALYSE_COHERENCE_POST_PIVOT.md
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNJPSummaryArchived;
