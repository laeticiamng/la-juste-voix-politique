import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, FileCheck, Users, Plane, GraduationCap, AlertCircle, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TaxCreditFAQ: React.FC = () => {
  return (
    <Card className="border-2 border-indigo-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl text-indigo-900">
          <HelpCircle className="h-8 w-8" />
          Questions Fréquentes - Cas Pratiques
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Réponses détaillées aux situations concrètes concernant les crédits d'impôt Bac+5+ et Bac+10
        </p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {/* Justification d'éligibilité */}
          <AccordionItem value="justification" className="border border-blue-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <FileCheck className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Comment justifier mon éligibilité au crédit d'impôt ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">📋 Documents requis pour Bac+5+ (15%) :</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Copie du diplôme (Master, diplôme d'ingénieur, grande école)</li>
                  <li>Attestation de l'établissement si diplôme étranger (avec équivalence)</li>
                  <li>Justificatif d'activité professionnelle en lien avec le diplôme</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-900 mb-2">🎓 Documents requis pour Bac+10 (20%) :</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Diplôme de docteur en médecine ou pharmacie</li>
                  <li>Inscription à l'Ordre (médecins/pharmaciens)</li>
                  <li>Thèse d'exercice validée</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">💡 Cas pratique :</p>
                <p className="text-sm">
                  <strong>Marie, ingénieure</strong> (Master Grande École, 45 000€/an) : fournit son diplôme + 
                  contrat de travail mentionnant "Ingénieur R&D" → éligible au crédit 15%
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Cumul avec autres dispositifs */}
          <AccordionItem value="cumul" className="border border-green-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold">Puis-je cumuler ce crédit avec d'autres avantages fiscaux ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Cumuls AUTORISÉS :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Réductions d'impôt classiques</strong> : dons aux associations, emploi à domicile, investissements Pinel/Malraux</li>
                  <li><strong>Crédits d'impôt standards</strong> : garde d'enfants, transition énergétique</li>
                  <li><strong>Quotient familial</strong> : parts fiscales (enfants, handicap)</li>
                  <li><strong>Abattements salariaux</strong> : frais professionnels, 10%</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-900 mb-2">❌ Cumuls INTERDITS :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Crédit Bac+5 ET Bac+10 simultanément</strong> (on prend le plus avantageux)</li>
                  <li><strong>Dispositifs sectoriels similaires</strong> ciblant la même finalité</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-semibold text-green-900 mb-2">💡 Cas pratique :</p>
                <p className="text-sm mb-2">
                  <strong>Dr. Thomas, chirurgien</strong> (150 000€/an, Bac+10, 2 enfants) :
                </p>
                <ul className="text-sm space-y-1 list-disc pl-6">
                  <li>Crédit Bac+10 : 20% → ~12 000€/an</li>
                  <li>+ Quotient familial (2 parts enfants)</li>
                  <li>+ Don 1000€ → réduction 66%</li>
                  <li><strong>Total : cumul autorisé de tous ces avantages</strong></li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Expatriés */}
          <AccordionItem value="expatries" className="border border-purple-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Plane className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Quelle est la situation des expatriés et résidents fiscaux étrangers ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">🌍 Règle générale :</h4>
                <p className="mb-3">
                  Le crédit d'impôt est réservé aux <strong>résidents fiscaux français</strong> 
                  (domicile fiscal en France selon critères art. 4B CGI).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-900 mb-2">✅ Cas d'éligibilité :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Résident fiscal français travaillant à l'étranger</strong> (foyer + centre intérêts en France)</li>
                  <li><strong>Détaché temporaire</strong> maintenant domicile fiscal français</li>
                  <li><strong>Frontaliers</strong> résidents en France (Suisse, Luxembourg, Belgique)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-900 mb-2">❌ Cas d'exclusion :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Expatrié fiscal</strong> : domicile hors France &gt;183 jours/an</li>
                  <li><strong>Imposition exclusive à l'étranger</strong> (conventions fiscales)</li>
                  <li><strong>Statut "impatrié"</strong> avec régime fiscal dérogatoire</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="font-semibold text-purple-900 mb-2">💡 Cas pratiques :</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-1">✅ Éligible</Badge>
                    <p>
                      <strong>Sophie, ingénieure</strong> : vit à Annecy, travaille à Genève (frontalière) 
                      → résidente fiscale France → crédit 15% applicable
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-red-100 text-red-800 mb-1">❌ Non éligible</Badge>
                    <p>
                      <strong>Marc, consultant</strong> : expatrié à Singapour depuis 2 ans, résident fiscal singapourien 
                      → pas d'IR en France → crédit non applicable
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Doubles diplômes */}
          <AccordionItem value="doubles-diplomes" className="border border-orange-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">Comment fonctionnent les doubles diplômes et cursus multiples ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">📚 Principe :</h4>
                <p className="mb-3">
                  On retient <strong>le niveau le plus élevé</strong> ET <strong>le crédit le plus avantageux</strong> 
                  entre Bac+5 (15%) et Bac+10 (20%).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-900 mb-2">🎯 Situations courantes :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Double Master (2 Bac+5)</strong> : crédit 15% (pas de cumul, un seul crédit)
                  </li>
                  <li>
                    <strong>Master + MBA</strong> : crédit 15% sur le plus élevé
                  </li>
                  <li>
                    <strong>Médecin + Master Sciences</strong> : crédit 20% Bac+10 (plus avantageux)
                  </li>
                  <li>
                    <strong>Ingénieur + Doctorat PhD</strong> : crédit 15% (PhD non médical = Bac+8, crédit Bac+5)
                  </li>
                  <li>
                    <strong>Pharmacien + MBA</strong> : crédit 20% Bac+10 (plus avantageux que 15%)
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="font-semibold text-orange-900 mb-2">💡 Cas pratiques :</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="mb-1">
                      <strong>Julie : Master Commerce + MBA INSEAD</strong> (85 000€/an)
                    </p>
                    <p>→ 2 diplômes Bac+5 : crédit unique de 15% → ~5 000€/an</p>
                  </div>
                  <div>
                    <p className="mb-1">
                      <strong>Dr. Pierre : Médecin + Master Santé Publique</strong> (120 000€/an)
                    </p>
                    <p>→ Bac+10 médecine &gt; Bac+5 master : crédit 20% → ~9 500€/an</p>
                  </div>
                  <div>
                    <p className="mb-1">
                      <strong>Léa : Ingénieure + Doctorat Physique (PhD)</strong> (55 000€/an)
                    </p>
                    <p>→ PhD non médical = crédit Bac+5 : 15% → ~3 200€/an</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Diplômes étrangers */}
          <AccordionItem value="diplomes-etrangers" className="border border-indigo-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold">Les diplômes étrangers sont-ils reconnus ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-indigo-900 mb-2">✅ Reconnaissance automatique :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Diplômes UE/EEE</strong> : reconnaissance mutuelle (directive 2005/36/CE)</li>
                  <li><strong>Accords bilatéraux</strong> : Suisse, Canada (Québec), certains pays</li>
                  <li><strong>Diplômes médicaux UE</strong> : automatique pour médecins/pharmaciens</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-indigo-900 mb-2">📋 Équivalence requise (hors UE) :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Attestation ENIC-NARIC France</strong> (centre officiel d'équivalences)</li>
                  <li><strong>Niveau requis</strong> : équivalence Master (niveau 7 RNCP) ou Bac+10 médical</li>
                  <li><strong>Délai</strong> : 2-4 mois pour obtenir l'attestation</li>
                </ul>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p className="font-semibold text-indigo-900 mb-2">💡 Cas pratiques :</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-1">✅ Reconnaissance automatique</Badge>
                    <p>
                      <strong>Anna, Master TU Munich (Allemagne)</strong> → diplôme UE reconnu automatiquement 
                      → crédit 15%
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-yellow-100 text-yellow-800 mb-1">⚠️ Équivalence nécessaire</Badge>
                    <p>
                      <strong>Chen, Master MIT (USA)</strong> → demande ENIC-NARIC → attestation niveau Master 
                      → crédit 15%
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-1">✅ Ordre professionnel</Badge>
                    <p>
                      <strong>Dr. Karim, médecin Tunisie</strong> → inscrit Ordre des Médecins France 
                      → crédit 20%
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Reconversion */}
          <AccordionItem value="reconversion" className="border border-teal-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-teal-600" />
                <span className="font-semibold">Reconversion professionnelle : puis-je garder mon crédit ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-teal-900 mb-2">🎯 Condition essentielle :</h4>
                <p className="mb-3">
                  Le crédit s'applique tant que vous <strong>exercez une activité en lien avec votre niveau de qualification</strong>, 
                  même si le métier change.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Reconversions éligibles :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ingénieur → Chef de projet</strong> : niveau cadre maintenu → crédit conservé</li>
                  <li><strong>Avocat → Directeur juridique</strong> : expertise valorisée → crédit conservé</li>
                  <li><strong>Médecin → Directeur médical industrie pharma</strong> : compétences médicales → crédit conservé</li>
                  <li><strong>Architecte → Consultant BIM</strong> : qualification technique → crédit conservé</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-900 mb-2">❌ Situations de perte du crédit :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Changement radical sans lien</strong> : ingénieur → boulanger (sauf si nouvelle formation Bac+5)</li>
                  <li><strong>Déqualification volontaire</strong> : architecte → ouvrier bâtiment non qualifié</li>
                  <li><strong>Inactivité professionnelle prolongée</strong> : sans activité valorisant le diplôme</li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <p className="font-semibold text-teal-900 mb-2">💡 Cas pratiques :</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-1">✅ Crédit maintenu</Badge>
                    <p>
                      <strong>Pauline, ex-avocate</strong> : devient DRH d'un groupe (compétences juridiques/RH Bac+5) 
                      → crédit 15% conservé
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-red-100 text-red-800 mb-1">❌ Crédit perdu</Badge>
                    <p>
                      <strong>David, ex-ingénieur</strong> : ouvre un food truck sans lien avec diplôme 
                      → crédit suspendu (sauf nouvelle formation reconnue)
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Temps partiel */}
          <AccordionItem value="temps-partiel" className="border border-pink-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-pink-600" />
                <span className="font-semibold">Temps partiel, congés sabbatiques : impact sur le crédit ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-pink-900 mb-2">⏱️ Temps partiel :</h4>
                <p className="mb-2">
                  Le crédit est <strong>calculé sur le revenu réel déclaré</strong>, quel que soit le temps de travail.
                </p>
                <p className="text-sm bg-blue-50 border border-blue-200 rounded p-3">
                  <strong>Exemple :</strong> Ingénieure à 50% (30 000€/an au lieu de 60 000€) 
                  → crédit 15% sur 30 000€ → ~1 750€/an (prorata)
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-pink-900 mb-2">🏖️ Congés sabbatiques / Parental :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Avec maintien de revenus</strong> : crédit applicable sur revenus perçus</li>
                  <li><strong>Sans revenus (congé non payé)</strong> : crédit = 0 pendant la période (pas d'IR à payer)</li>
                  <li><strong>Retour à l'emploi</strong> : crédit réactivé automatiquement</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-pink-900 mb-2">🤰 Congé maternité/paternité :</h4>
                <p className="mb-2">
                  Les <strong>indemnités journalières</strong> sont soumises à l'IR → crédit applicable au prorata.
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <p className="font-semibold text-pink-900 mb-2">💡 Cas pratique :</p>
                <p className="text-sm">
                  <strong>Claire, architecte</strong> : temps plein 8 mois (40k€) + congé parental 4 mois (8k€ indemnités) 
                  → revenu annuel 48k€ → crédit 15% sur 48k€ → ~2 800€/an
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Auto-entrepreneurs */}
          <AccordionItem value="auto-entrepreneurs" className="border border-amber-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-amber-600" />
                <span className="font-semibold">Auto-entrepreneurs et indépendants : comment ça marche ?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">💼 Principe :</h4>
                <p className="mb-3">
                  Le crédit s'applique sur le <strong>bénéfice imposable</strong> (BIC/BNC après abattement), 
                  pas sur le chiffre d'affaires.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-900 mb-2">📊 Calcul pour auto-entrepreneurs :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Services (BNC)</strong> : CA - abattement 34% = bénéfice imposable</li>
                  <li><strong>Activités libérales</strong> : CA - charges réelles si option comptabilité</li>
                  <li><strong>Crédit appliqué</strong> : 15% ou 20% du revenu imposable</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-amber-900 mb-2">✅ Professions libérales éligibles :</h4>
                <p className="mb-2">Toutes les professions Bac+5/Bac+10 en exercice libéral :</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Médecins, dentistes, pharmaciens (libéraux)</li>
                  <li>Avocats, notaires, experts-comptables</li>
                  <li>Architectes, ingénieurs-conseils</li>
                  <li>Consultants diplômés (IT, management, RH)</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-900 mb-2">💡 Cas pratiques :</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="mb-1">
                      <strong>Marc, consultant IT indépendant</strong> (Master)
                    </p>
                    <p>• CA : 80 000€</p>
                    <p>• Abattement 34% : revenu imposable = 52 800€</p>
                    <p>• Crédit 15% : <strong>~3 000€/an</strong></p>
                  </div>
                  <div>
                    <p className="mb-1">
                      <strong>Dr. Dupont, médecin libéral</strong> (Bac+10)
                    </p>
                    <p>• Bénéfice net : 110 000€</p>
                    <p>• Crédit 20% : <strong>~8 500€/an</strong></p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TaxCreditFAQ;