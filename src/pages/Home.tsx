import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scissors, Star, ArrowRight, Award, ShieldCheck, Leaf } from 'lucide-react';
import { SERVICES, TESTIMONIALS, GALLERY } from '../constants';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Salon"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold uppercase tracking-[0.5em] text-sm mb-6 block"
          >
            Established 2017
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif mb-8 tracking-tight"
          >
            Where Light Meets <span className="italic">Beauty</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light tracking-widest uppercase mb-12 opacity-80"
          >
            Austin's Premier Luxury Salon & Spa Experience
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/book" 
              className="bg-gold hover:bg-gold-light text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-all transform hover:scale-105"
            >
              Book Appointment
            </Link>
            <Link 
              to="/services" 
              className="border border-white/30 hover:bg-white hover:text-luxury-black text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm transition-all"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Sanctuary for the Modern Soul
            </h2>
            <p className="text-black/60 leading-relaxed mb-8 text-lg">
              At Lumière, we believe that true beauty radiates from within. Our boutique salon and spa in the heart of Austin's Arts District is designed to be your personal sanctuary—a place where expert artistry meets unparalleled relaxation.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <Award className="text-gold shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1">Award Winning</h4>
                  <p className="text-xs text-black/40 uppercase tracking-widest">Best Salon 2022 & 2023</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Leaf className="text-gold shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1">Eco-Friendly</h4>
                  <p className="text-xs text-black/40 uppercase tracking-widest">90% Sustainable Products</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="group flex items-center space-x-2 text-luxury-black font-bold uppercase tracking-widest text-sm">
              <span>Learn Our Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
                alt="Salon Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-luxury-black text-white p-10 rounded-2xl hidden md:block">
              <div className="text-4xl font-serif text-gold mb-2">4.9★</div>
              <p className="text-xs uppercase tracking-widest opacity-60">Google Rating</p>
              <p className="text-xs uppercase tracking-widest opacity-60">850+ Reviews</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-beige/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Exquisite Treatments</span>
              <h2 className="text-4xl md:text-5xl font-serif">Signature Services</h2>
            </div>
            <Link to="/services" className="text-gold uppercase tracking-widest font-bold border-b border-gold pb-1 hover:text-luxury-black hover:border-luxury-black transition-all">
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Client Love</span>
            <h2 className="text-4xl md:text-5xl font-serif">Kind Words from Guests</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Quick Gallery Preview */}
      <section className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {GALLERY.slice(0, 4).map((img) => (
            <div key={img.id} className="aspect-square overflow-hidden relative group">
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to="/gallery" className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs hover:bg-white hover:text-luxury-black transition-all">
                  View Gallery
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-luxury-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
            alt="CTA Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to Radiate?</h2>
          <p className="text-white/60 mb-12 text-lg tracking-wide">
            Book your appointment today and experience the Lumière difference. Our specialists are ready to transform your look.
          </p>
          <Link 
            to="/book" 
            className="inline-block bg-gold hover:bg-gold-light text-white px-12 py-5 rounded-full uppercase tracking-widest text-sm transition-all transform hover:scale-105"
          >
            Reserve Your Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
