import React from 'react';
import { TeamMember } from '../types';
import { motion } from 'motion/react';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-luxury-black"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-serif text-white mb-1">{member.name}</h3>
          <p className="text-gold text-xs uppercase tracking-widest mb-4">{member.role}</p>
          <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
