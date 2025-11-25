
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { submitContactMessage } from '@/lib/api';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactMessage(formData);

      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue. Merci de réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-ljv-navy to-ljv-gold bg-clip-text text-transparent">
              Contactez-nous
            </span>
          </h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h2 className="font-serif text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Informations</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-ljv-gold mr-3 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-gray-100">Email</p>
                        <a href="mailto:contact@lajustevoix.fr" className="text-gray-800 dark:text-gray-200 hover:text-ljv-gold font-medium">
                          contact@lajustevoix.fr
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-ljv-gold mr-3 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-gray-100">Téléphone</p>
                        <a href="tel:+33123456789" className="text-gray-800 dark:text-gray-200 hover:text-ljv-gold font-medium">
                          01 23 45 67 89
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-ljv-gold mr-3 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-gray-100">Adresse</p>
                        <address className="text-gray-800 dark:text-gray-200 not-italic font-medium">
                          123 Avenue de la République<br />
                          75011 Paris, France
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-ljv-navy text-white p-6 rounded-lg">
                  <h2 className="font-serif text-xl font-bold mb-4">Heures d'ouverture</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>9h - 18h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi:</span>
                      <span>10h - 14h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h2 className="font-serif text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">Envoyez-nous un message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ljv-gold focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ljv-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ljv-gold focus:border-transparent"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="question">Question générale</option>
                        <option value="support">Soutenir le programme</option>
                        <option value="press">Presse et médias</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ljv-gold focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-ljv-navy hover:bg-ljv-gold text-white transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
