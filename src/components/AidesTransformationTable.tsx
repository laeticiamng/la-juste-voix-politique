import React from 'react';
import { Card } from './ui/card';

interface AideTransformation {
  id: string;
  name: string;
  before: string;
  after: string;
  impact: string;
}

interface AidesTransformationTableProps {
  transformations: AideTransformation[];
}

const AidesTransformationTable: React.FC<AidesTransformationTableProps> = ({ transformations }) => {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="text-left p-4 font-bold text-lg bg-primary/5">Aide sociale</th>
              <th className="text-left p-4 font-bold text-lg bg-primary/5">Avant</th>
              <th className="text-left p-4 font-bold text-lg bg-primary/5">Après</th>
              <th className="text-left p-4 font-bold text-lg bg-primary/5">Impact</th>
            </tr>
          </thead>
          <tbody>
            {transformations.map((aide, index) => (
              <tr 
                key={aide.id} 
                className={`border-b border-border hover:bg-muted/50 transition-colors ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                }`}
              >
                <td className="p-4 font-semibold align-top min-w-[180px]">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">{aide.id}</span>
                    <span>{aide.name}</span>
                  </div>
                </td>
                <td className="p-4 align-top text-sm text-muted-foreground">
                  {aide.before}
                </td>
                <td className="p-4 align-top text-sm">
                  {aide.after}
                </td>
                <td className="p-4 align-top text-sm font-medium text-primary">
                  {aide.impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-xl font-bold mb-3 text-primary">🎯 L'esprit général de la réforme</h3>
        <div className="space-y-2 text-base">
          <p className="font-medium">La solidarité continue d'exister, mais elle devient juste.</p>
          <p>Elle n'est plus une récompense pour l'inactivité, mais un accompagnement vers l'autonomie.</p>
          <p className="font-semibold text-primary">Elle ne remplace plus le travail, elle construit l'accès au travail.</p>
        </div>
      </Card>
    </div>
  );
};

export default AidesTransformationTable;
