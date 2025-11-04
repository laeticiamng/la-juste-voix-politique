import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Microscope, Pill, TrendingUp, HeartPulse } from 'lucide-react';

const DoctorateMedicalTaxCredit: React.FC = () => {
  return (
    <div className="my-12">
      <Card className="border-2 border-ljv-gold/30 bg-gradient-to-br from-teal-50/50 to-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="flex gap-2">
              <Microscope className="h-6 w-6 text-teal-600" />
              <Pill className="h-6 w-6 text-green-600" />
              <HeartPulse className="h-6 w-6 text-blue-600" />
            </div>
            Crédit d'Impôt Doctorats Bac+10 Médecine & Pharmacie Appliqués
          </CardTitle>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-300">
              20% de réduction
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              +100€ à +500€/mois
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              ~50k bénéficiaires
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/80 p-6 rounded-lg border border-ljv-gold/20">
            <h3 className="font-bold text-lg mb-3 text-ljv-navy">
              🎯 Objectif : Valoriser l'excellence scientifique et médicale
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reconnaissant la contribution exceptionnelle des docteurs en médecine et pharmacie 
              à la recherche appliquée, l'innovation thérapeutique et la santé publique, 
              <strong className="text-ljv-navy"> un crédit d'impôt de 20%</strong> est accordé 
              aux titulaires de doctorats Bac+10 dans ces disciplines appliquées (médecins 
              spécialistes, pharmaciens hospitaliers, chercheurs cliniques).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 p-5 rounded-lg border border-teal-200">
              <h4 className="font-bold mb-3 text-teal-800 flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Professions concernées
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>• Médecins spécialistes</strong> (chirurgiens, cardiologues, oncologues...)</li>
                <li><strong>• Médecins chercheurs</strong> (R&D clinique, essais thérapeutiques)</li>
                <li><strong>• Pharmaciens hospitaliers</strong> (spécialisation clinique)</li>
                <li><strong>• Pharmaciens chercheurs</strong> (développement médicaments, galénique)</li>
                <li><strong>• Docteurs en biologie médicale</strong> (recherche appliquée santé)</li>
                <li><strong>• Vétérinaires chercheurs</strong> (santé animale, zoonoses)</li>
              </ul>
            </div>

            <div className="bg-white/80 p-5 rounded-lg border border-green-200">
              <h4 className="font-bold mb-3 text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Impact concret par profil
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Médecin spécialiste débutant : <strong>+150€/mois</strong></li>
                <li>✅ Chirurgien confirmé : <strong>+280€/mois</strong></li>
                <li>✅ Pharmacien hospitalier : <strong>+200€/mois</strong></li>
                <li>✅ Chercheur clinique senior : <strong>+350€/mois</strong></li>
                <li>✅ Chef de service CHU : <strong>+420€/mois</strong></li>
                <li>✅ Professeur médecine : <strong>+500€/mois</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-ljv-navy/10 to-teal-100/50 p-5 rounded-lg border-l-4 border-ljv-navy">
            <h4 className="font-bold mb-2 text-ljv-navy">
              💡 Modalités d'application
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Le crédit d'impôt de 20% s'applique automatiquement sur l'impôt sur le revenu 
              des titulaires de doctorats Bac+10 en médecine, pharmacie et disciplines connexes appliquées. 
              Il vise à reconnaître la durée exceptionnelle des études et la contribution cruciale 
              de ces professions à l'innovation médicale et à la santé publique.
            </p>
            <div className="bg-white/80 rounded-lg p-3 text-sm mb-3">
              <p className="font-bold text-gray-900 mb-1">📊 Critères d'éligibilité:</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Doctorat d'État en médecine (Bac+10 minimum) avec spécialisation</li>
                <li>• Doctorat en pharmacie (Bac+10) avec internat ou spécialisation hospitalière</li>
                <li>• Doctorat en sciences appliquées à la santé (biologie médicale, vétérinaire...)</li>
                <li>• Activité professionnelle dans le secteur médical, pharmaceutique ou recherche clinique</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 text-sm border border-orange-300">
              <p className="font-bold text-orange-800 mb-2">⚠️ Règles de non-cumul et exclusions:</p>
              <ul className="text-orange-700 space-y-1">
                <li>
                  <strong>1. Cumul partiel avec crédit Bac+5:</strong> Les bénéficiaires du crédit 20% 
                  ne peuvent pas cumuler avec le crédit 15% Bac+5+. Seul le taux le plus avantageux (20%) s'applique.
                </li>
                <li>
                  <strong>2. Dégressivité progressive:</strong> Le crédit est dégressif pour les revenus entre 
                  1M€ et 1,5M€/an.
                </li>
                <li>
                  <strong>3. Exclusion des ultra-hauts revenus:</strong> Le crédit ne s'applique 
                  pas aux revenus supérieurs à 1 500 000 €/an.
                </li>
                <li className="text-xs italic mt-2">
                  Ces exclusions garantissent que le crédit bénéficie aux professionnels de santé 
                  et chercheurs, pas aux ultra-fortunés.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ljv-gold/10 to-ljv-gold/5 rounded-lg p-5 border border-ljv-gold/30">
            <h4 className="font-bold mb-3 text-ljv-navy">💰 Impact budgétaire</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-ljv-navy mb-1">~48k</div>
                <div className="text-sm text-gray-700">Bénéficiaires éligibles</div>
                <div className="text-xs text-gray-500 mt-1">(médecins spé. + pharma.)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ljv-navy mb-1">1 580€</div>
                <div className="text-sm text-gray-700">Crédit moyen/an</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ljv-navy mb-1">76 M€</div>
                <div className="text-sm text-gray-700">Coût total/an</div>
                <div className="text-xs text-teal-600 mt-1">(coût additionnel)</div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center italic">
              Coût après exclusion des ultra-hauts revenus (&gt;1,5M€/an)
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4 border border-teal-200">
            <h4 className="font-bold mb-2 text-ljv-navy flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-teal-600" />
              Justification : Investissement dans l'excellence médicale
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ce crédit reconnaît l'investissement personnel exceptionnel (10+ années d'études), 
              le niveau de responsabilité unique (soins, recherche appliquée), et la contribution 
              vitale de ces professions à l'innovation thérapeutique et à la santé de la nation. 
              Il complète la revalorisation salariale des médecins et pharmaciens hospitaliers 
              en valorisant spécifiquement la recherche et l'expertise de pointe.
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600 italic">
              Ce crédit d'impôt s'inscrit dans notre vision d'une fiscalité qui valorise 
              l'excellence scientifique, l'innovation médicale et la contribution exceptionnelle 
              à la santé publique.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorateMedicalTaxCredit;
