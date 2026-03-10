import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'hair' | 'nail' | 'spa' | 'interior'>('all');

  const filteredGallery = filter === 'all' ? GALLERY : GALLERY.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'hair', label: 'Hair' },
    { id: 'nail', label: 'Nail Art' },
    { id: 'spa', label: 'Spa' },
    { id: 'interior', label: 'Studio' },
  ];

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`text-xs uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${
              filter === cat.id ? 'border-gold text-gold' : 'border-transparent text-black/40 hover:text-black'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer rounded-2xl"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
