import React from 'react';
import PageHero from '../components/PageHero';
import { motion } from 'motion/react';
import { Award, Star, Users, Calendar, ShieldCheck, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Calendar className="w-8 h-8" />, value: '2017', label: 'Established' },
    { icon: <Star className="w-8 h-8" />, value: '4.9★', label: 'Google Rating' },
    { icon: <Users className="w-8 h-8" />, value: '850+', label: 'Reviews' },
    { icon: <Award className="w-8 h-8" />, value: '2x', label: 'Best Salon Award' },
  ];

  return (
    <div>
      <PageHero 
        title="Our Story" 
        subtitle="Crafting Beauty Since 2017"
        image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">The Vision Behind Lumière</h2>
            <div className="space-y-6 text-black/60 leading-relaxed text-lg">
              <p>
                Founded in 2017 by Isabella Vance, Lumière Salon & Spa was born from a simple yet powerful vision: to create a space where light, beauty, and wellness converge. Isabella believed that a salon visit should be more than just a service—it should be an elevating experience that restores both the hair and the spirit.
              </p>
              <p>
                Located in the vibrant Arts District of Austin, our salon reflects the creative energy of its surroundings while maintaining an atmosphere of tranquil luxury. We've meticulously curated every detail, from our custom styling stations to our serene treatment rooms, to ensure your comfort and satisfaction.
              </p>
              <p>
                Our team of master stylists and spa specialists are not just professionals; they are artists dedicated to their craft. We continuously invest in education and the latest techniques to bring you the very best in beauty artistry.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
              alt="Founder Isabella Vance"
              className="w-full rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-8 rounded-xl">
              <p className="font-serif italic text-xl">"Beauty is the light that shines from within."</p>
              <p className="text-xs uppercase tracking-widest mt-4">— Isabella Vance, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-gold mb-6 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-serif mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.3em] opacity-60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Sustainability */}
      <section className="section-padding bg-beige/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-black/5">
            <Award className="text-gold w-12 h-12 mb-8" />
            <h3 className="text-3xl font-serif mb-6">Awards & Recognition</h3>
            <ul className="space-y-4 text-black/60">
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Voted Austin Chronicle Best Salon 2022 & 2023</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Olaplex & Redken Certified Colorists</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Top 10 Luxury Spas in Texas — Vogue Magazine</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-sm border border-black/5">
            <Leaf className="text-gold w-12 h-12 mb-8" />
            <h3 className="text-3xl font-serif mb-6">Our Commitment</h3>
            <p className="text-black/60 mb-6 leading-relaxed">
              We believe luxury shouldn't come at the cost of our planet. Lumière is proud to be a sustainable salon, committed to minimizing our environmental footprint.
            </p>
            <ul className="space-y-4 text-black/60">
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>90% Sustainable & Cruelty-Free Products</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Water-Saving Technology at All Stations</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Carbon-Neutral Shipping for Retail</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
