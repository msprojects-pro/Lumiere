import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'nail' | 'spa' | 'package'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Artistry' },
    { id: 'nail', label: 'Nail Care' },
    { id: 'spa', label: 'Spa & Wellness' },
    { id: 'package', label: 'Luxury Packages' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div>
      <PageHero 
        title="Our Services" 
        subtitle="Exquisite Treatments for Body & Soul"
        image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`text-xs uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${
                  activeCategory === cat.id 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-black/40 hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-beige/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-serif mb-6">Not sure what you need?</h3>
          <p className="text-black/60 mb-10 leading-relaxed">
            Our specialists offer complimentary consultations to help you choose the perfect treatment for your unique needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:5558473291" className="bg-luxury-black text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gold transition-all">
              Call (555) 847-3291
            </a>
            <button className="border border-black/20 text-luxury-black px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-luxury-black hover:text-white transition-all">
              Email Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
