import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { submitNewsletterSubscription } from '@/lib/api';

const emailSchema = z.object({
  email: z.string().email('Veuillez entrer une adresse email valide').min(1, 'Email requis'),
  prenom: z.string().min(1, 'Prénom requis').max(100, 'Prénom trop long'),
});

const NewsletterSignup = ({ className = '' }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailSchema.parse({ email, prenom });
      setIsLoading(true);

      await submitNewsletterSubscription(email, prenom);

      setIsSuccess(true);
      setEmail('');
      setPrenom('');

      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez nos dernières actualités par email.",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-ljv-navy to-ljv-navy/90 text-white p-8 rounded-lg ${className}`}>
      <div className="text-center mb-6">
        <Mail className="mx-auto mb-3 text-ljv-gold" size={32} />
        <h3 className="text-xl font-serif font-bold mb-2">Restez informé</h3>
        <p className="text-gray-200">
          Recevez nos dernières actualités et analyses politiques
        </p>
      </div>
      
      {isSuccess ? (
        <div className="text-center">
          <CheckCircle className="mx-auto mb-3 text-green-400" size={48} />
          <p className="font-medium">Merci pour votre inscription !</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder="Votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-ljv-gold"
              disabled={isLoading}
              required
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-ljv-gold"
              disabled={isLoading}
              required
            />
            <Button
              type="submit"
              disabled={isLoading || !email.trim() || !prenom.trim()}
              className="bg-ljv-gold hover:bg-ljv-gold/90 text-ljv-navy font-medium"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-ljv-navy/30 border-t-ljv-navy rounded-full animate-spin" />
                  Inscription...
                </div>
              ) : (
                'S\'inscrire'
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-300 text-center">
            En vous inscrivant, vous acceptez de recevoir nos emails. Désabonnement possible à tout moment.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
