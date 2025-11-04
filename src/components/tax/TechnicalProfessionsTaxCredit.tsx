import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Wrench, FlaskConical } from 'lucide-react';

const TechnicalProfessionsTaxCredit: React.FC = () => {
  return (
    <div className="my-12">
      <Card className="border-2 border-ljv-gold/30 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="flex gap-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <Wrench className="h-6 w-6 text-purple-600" />
              <FlaskConical className="h-6 w-6 text-teal-600" />
            </div>
            Crédit d'Impôt Professions Techniques & Scientifiques
          </CardTitle>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              15% de réduction
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              +30€ à +105€/mois
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/80 p-6 rounded-lg border border-ljv-gold/20">
            <h3 className="font-bold text-lg mb-3 text-ljv-navy">
              🎯 Objectif : Valoriser l'innovation et l'expertise technique
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reconnaissant le rôle crucial des professions techniques et scientifiques dans 
              la modernisation de l'économie, la transition écologique et l'innovation, 
              <strong className="text-ljv-navy"> un crédit d'impôt de 15%</strong> est accordé 
              aux professionnels de ces secteurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 p-5 rounded-lg border border-blue-200">
              <h4 className="font-bold mb-3 text-blue-800 flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                Professions concernées
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Ingénieurs (toutes spécialités)</li>
                <li>• Informaticiens & développeurs</li>
                <li>• Chercheurs scientifiques</li>
                <li>• Techniciens spécialisés</li>
                <li>• Experts R&D et innovation</li>
                <li>• Architectes et urbanistes</li>
              </ul>
            </div>

            <div className="bg-white/80 p-5 rounded-lg border border-green-200">
              <h4 className="font-bold mb-3 text-green-800 flex items-center gap-2">
                <FlaskConical className="h-5 w-5" />
                Impact concret
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Ingénieur débutant : <strong>+65€/mois</strong></li>
                <li>✅ Ingénieur confirmé : <strong>+100€/mois</strong></li>
                <li>✅ Ingénieur informatique : <strong>+105€/mois</strong></li>
                <li>✅ Ingénieur senior : <strong>+90€/mois</strong></li>
                <li>✅ Ingénieur expert : <strong>+45€/mois</strong></li>
                <li>✅ Manager R&D : <strong>+30€/mois</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-ljv-navy/10 to-purple-100/50 p-5 rounded-lg border-l-4 border-ljv-navy">
            <h4 className="font-bold mb-2 text-ljv-navy">
              💡 Modalités d'application
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Le crédit d'impôt de 15% s'applique automatiquement sur l'impôt sur le revenu 
              des professions techniques et scientifiques. Il est cumulable avec les autres 
              dispositifs fiscaux du programme La Juste Voix et vise à reconnaître la contribution 
              de ces métiers à l'intérêt général et au développement économique durable.
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600 italic">
              Ce crédit d'impôt s'inscrit dans notre vision d'une fiscalité qui valorise 
              le mérite, l'expertise et l'innovation au service de la société.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalProfessionsTaxCredit;