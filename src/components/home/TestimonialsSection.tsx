
import React from 'react';
import { Quote, Heart, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Infirmière en service de réanimation",
      avatar: "👩‍⚕️",
      quote: "Enfin un programme qui reconnaît la valeur de notre travail ! Après 15 ans à soigner sans reconnaissance, La Juste Voix nous redonne espoir.",
      icon: Heart,
      category: "Soignant"
    },
    {
      name: "Pierre Martin", 
      role: "Professeur des écoles",
      avatar: "👨‍🏫",
      quote: "La revalorisation de l'éducation n'est pas qu'une question d'argent, c'est reconnaître que nous façonnons l'avenir. Merci de nous voir enfin.",
      icon: Users,
      category: "Enseignant"
    },
    {
      name: "Sarah Leclerc",
      role: "Éducatrice spécialisée",
      avatar: "👩‍💼",
      quote: "Travailler avec les plus fragiles nécessite des compétences et une dévotion immenses. Ce programme comprend enfin notre utilité sociale.",
      icon: Briefcase,
      category: "Travail social"
    },
    {
      name: "Jean-Luc Moreau",
      role: "Aide-soignant en EHPAD",
      avatar: "👨‍⚕️",
      quote: "Accompagner nos aînés dans la dignité, c'est un métier noble qui mérite mieux que le SMIC. La Juste Voix nous redonne de la fierté.",
      icon: Heart,
      category: "Soignant"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-ljv-navy/5 to-ljv-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="title-gradient">Ils soutiennent La Juste Voix</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de celles et ceux qui œuvrent chaque jour pour notre société
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <testimonial.icon className="h-4 w-4 text-ljv-gold" />
                      <span className="text-xs font-medium text-ljv-navy bg-ljv-gold/20 px-2 py-1 rounded-full">
                        {testimonial.category}
                      </span>
                    </div>
                    <Quote className="h-6 w-6 text-ljv-gold mb-3" />
                    <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-ljv-navy">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-ljv-navy/10 px-6 py-3 rounded-full">
            <Users className="h-5 w-5 text-ljv-navy" />
            <span className="text-ljv-navy font-medium">
              Plus de 50 000 citoyens nous font déjà confiance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
