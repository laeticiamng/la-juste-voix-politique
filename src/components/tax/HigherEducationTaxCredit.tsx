import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const HigherEducationTaxCredit: React.FC = () => {
  return (
    <div className="my-12">
      <Card className="border-2 border-ljv-gold/30 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="flex gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <Briefcase className="h-6 w-6 text-purple-600" />
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            Crédit d'Impôt Diplômés Bac+5+ Grandes Écoles
          </CardTitle>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              15% de réduction
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              +50€ à +200€/mois
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
              ~2M bénéficiaires
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/80 p-6 rounded-lg border border-ljv-gold/20">
            <h3 className="font-bold text-lg mb-3 text-ljv-navy">
              🎯 Objectif : Valoriser les compétences et l'excellence académique
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reconnaissant la contribution des cadres hautement qualifiés à l'innovation, 
              la compétitivité et la création de valeur, <strong className="text-ljv-navy">un crédit 
              d'impôt de 15%</strong> est accordé aux diplômés Bac+5+ des grandes écoles 
              (commerce, ingénieurs, management) et professions libérales qualifiées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 p-5 rounded-lg border border-blue-200">
              <h4 className="font-bold mb-3 text-blue-800 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Professions concernées
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>• Ingénieurs</strong> (toutes spécialités, managers R&D)</li>
                <li><strong>• Commerce</strong> (cadres commerciaux, marketing, business dev)</li>
                <li><strong>• Management</strong> (directeurs, responsables, chefs de projet)</li>
                <li><strong>• Finance</strong> (contrôleurs, directeurs financiers, analystes)</li>
                <li><strong>• Conseil</strong> (consultants, experts, chefs de produit)</li>
                <li><strong>• Professions libérales</strong> (avocats, experts-comptables, notaires, pharmaciens, vétérinaires)</li>
              </ul>
            </div>

            <div className="bg-white/80 p-5 rounded-lg border border-green-200">
              <h4 className="font-bold mb-3 text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Impact concret par profil
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Ingénieur débutant : <strong>+50€/mois</strong></li>
                <li>✅ Cadre commercial : <strong>+85€/mois</strong></li>
                <li>✅ Responsable marketing : <strong>+95€/mois</strong></li>
                <li>✅ Directeur (PME) : <strong>+140€/mois</strong></li>
                <li>✅ Consultant senior : <strong>+160€/mois</strong></li>
                <li>✅ Directeur financier : <strong>+200€/mois</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-ljv-navy/10 to-purple-100/50 p-5 rounded-lg border-l-4 border-ljv-navy">
            <h4 className="font-bold mb-2 text-ljv-navy">
              💡 Modalités d'application
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Le crédit d'impôt de 15% s'applique automatiquement sur l'impôt sur le revenu 
              des diplômés Bac+5+ des grandes écoles et professions libérales qualifiées. 
              Il vise à reconnaître la contribution de ces métiers à l'innovation et à la compétitivité.
            </p>
            <div className="bg-white/80 rounded-lg p-3 text-sm mb-3">
              <p className="font-bold text-gray-900 mb-1">📊 Critères d'éligibilité:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Diplôme Bac+5 minimum d'une grande école (ingénieurs, commerce, management)</li>
                <li>• Profession libérale réglementée (avocat, expert-comptable, notaire, pharmacien...)</li>
                <li>• Cadre supérieur avec fonctions de direction ou expertise avérée</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 text-sm border border-orange-300">
              <p className="font-bold text-orange-800 mb-2">⚠️ Règles de non-cumul importantes:</p>
              <ul className="text-orange-700 space-y-1">
                <li>
                  <strong>1. Dégressivité progressive:</strong> Le crédit est dégressif pour les revenus entre 800k€ et 1,2M€/an.
                </li>
                <li>
                  <strong>2. Exclusion des ultra-hauts revenus:</strong> Le crédit ne s'applique 
                  pas aux revenus supérieurs à 1 200 000 €/an.
                </li>
                <li className="text-xs italic mt-2">
                  Ces exclusions garantissent que le crédit bénéficie aux cadres qualifiés, 
                  pas aux ultra-fortunés, conformément au principe de justice fiscale.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ljv-gold/10 to-ljv-gold/5 rounded-lg p-5 border border-ljv-gold/30">
            <h4 className="font-bold mb-3 text-ljv-navy">💰 Impact budgétaire</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-ljv-navy mb-1">~1,95M</div>
                <div className="text-sm text-gray-700">Bénéficiaires éligibles</div>
                <div className="text-xs text-gray-500 mt-1">(97,5% des Bac+5+)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ljv-navy mb-1">826€</div>
                <div className="text-sm text-gray-700">Crédit moyen/an</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ljv-navy mb-1">1,61 Md€</div>
                <div className="text-sm text-gray-700">Coût total/an</div>
                <div className="text-xs text-orange-600 mt-1">(-40M€ vs initial)</div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center italic">
              Coût après exclusion des ultra-hauts revenus (&gt;1,2M€/an)
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600 italic">
              Ce crédit d'impôt s'inscrit dans notre vision d'une fiscalité qui valorise 
              le mérite, l'excellence académique et la création de valeur au service de la société.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HigherEducationTaxCredit;