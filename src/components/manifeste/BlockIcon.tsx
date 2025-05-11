
import React from 'react';
import { Gavel, Heart, GraduationCap, Coins, Home, Earth, Users, Shield } from 'lucide-react';

interface BlockIconProps {
  id: number;
}

const BlockIcon: React.FC<BlockIconProps> = ({ id }) => {
  const icons = {
    1: <Gavel className="h-5 w-5 text-ljv-gold" />,
    2: <Shield className="h-5 w-5 text-ljv-gold" />,
    3: <Heart className="h-5 w-5 text-ljv-gold" />,
    4: <GraduationCap className="h-5 w-5 text-ljv-gold" />,
    5: <Coins className="h-5 w-5 text-ljv-gold" />,
    6: <Home className="h-5 w-5 text-ljv-gold" />,
    7: <Earth className="h-5 w-5 text-ljv-gold" />,
    8: <Users className="h-5 w-5 text-ljv-gold" />
    // Add more icons for other blocks as needed
  };
  
  return icons[id as keyof typeof icons] || <Gavel className="h-5 w-5 text-ljv-gold" />;
};

export default BlockIcon;
