import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="mb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">{service.category}</span>
        <h3 className="text-2xl font-serif mt-2 mb-4">{service.name}</h3>
        <p className="text-black/60 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>
      </div>
      
      <div className="mt-auto pt-6 border-t border-black/5 flex justify-between items-center">
        <span className="text-xs uppercase tracking-widest text-black/40">{service.duration}</span>
        <Link 
          to="/book" 
          className="text-xs uppercase tracking-widest font-bold text-luxury-black hover:text-gold transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
