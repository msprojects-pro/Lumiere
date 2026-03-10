import React from 'react';
import PageHero from '../components/PageHero';
import TestimonialSlider from '../components/TestimonialSlider';
import { TESTIMONIALS } from '../constants';
import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const Reviews = () => {
  return (
    <div>
      <PageHero 
        title="Guest Reviews" 
        subtitle="What Our Clients Say"
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Summary Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-24">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-serif mb-4">4.9</h2>
              <div className="flex justify-center lg:justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-gold fill-gold mx-0.5" />
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">Based on 850+ Google Reviews</p>
            </div>
            
            <div className="lg:col-span-2 bg-beige/30 p-10 rounded-2xl border border-gold/10">
              <p className="text-xl font-serif italic leading-relaxed text-black/80">
                "Our mission is to ensure every guest leaves feeling more confident and radiant than when they arrived. We are deeply grateful for the trust our community places in us."
              </p>
              <p className="text-xs uppercase tracking-widest mt-6 font-bold">— The Lumière Team</p>
            </div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="section-padding bg-beige/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-sm border border-black/5"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-serif mb-1">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold mx-0.5" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-black/30">{review.date}</span>
                </div>
                <p className="text-black/60 leading-relaxed italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-luxury-black text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gold transition-all"
            >
              <MessageSquare size={18} />
              <span>Write a Review on Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
