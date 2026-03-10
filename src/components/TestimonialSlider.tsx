import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-gold/20">
        <Quote size={80} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center px-12"
        >
          <div className="flex justify-center mb-6">
            {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold mx-0.5" />
            ))}
          </div>
          
          <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
            "{TESTIMONIALS[currentIndex].text}"
          </p>
          
          <div>
            <h4 className="text-lg font-serif uppercase tracking-widest mb-1">{TESTIMONIALS[currentIndex].name}</h4>
            <span className="text-xs text-black/40 uppercase tracking-widest">{TESTIMONIALS[currentIndex].date}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex justify-center mt-12 space-x-6">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-luxury-black hover:text-white transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-luxury-black hover:text-white transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
