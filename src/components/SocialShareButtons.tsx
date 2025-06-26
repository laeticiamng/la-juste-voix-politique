
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Twitter, Facebook, Linkedin, Link2, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialShareButtonsProps {
  title: string;
  url?: string;
  description?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ 
  title, 
  url = window.location.href, 
  description = "Découvrez le programme La Juste Voix" 
}) => {
  const { toast } = useToast();

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Lien copié !",
        description: "Le lien a été copié dans votre presse-papiers.",
      });
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le lien.",
        variant: "destructive",
      });
    }
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1 text-sm text-gray-600 mr-2">
        <Share2 className="h-4 w-4" />
        <span>Partager :</span>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('twitter')}
        className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
      >
        <Twitter className="h-4 w-4 text-blue-500" />
        <span className="hidden sm:inline">Twitter</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('facebook')}
        className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
      >
        <Facebook className="h-4 w-4 text-blue-600" />
        <span className="hidden sm:inline">Facebook</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('linkedin')}
        className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200"
      >
        <Linkedin className="h-4 w-4 text-blue-700" />
        <span className="hidden sm:inline">LinkedIn</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShare('email')}
        className="flex items-center gap-2 hover:bg-gray-50 hover:border-gray-300"
      >
        <Mail className="h-4 w-4 text-gray-600" />
        <span className="hidden sm:inline">Email</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="flex items-center gap-2 hover:bg-ljv-gold/10 hover:border-ljv-gold"
      >
        <Link2 className="h-4 w-4 text-ljv-gold" />
        <span className="hidden sm:inline">Copier</span>
      </Button>
    </div>
  );
};

export default SocialShareButtons;
