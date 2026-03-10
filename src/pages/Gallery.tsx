import React from 'react';
import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <div>
      <PageHero 
        title="Gallery" 
        subtitle="A Visual Journey of Beauty"
        image="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Artistry in Every Detail</h2>
            <p className="text-black/60 leading-relaxed text-lg">
              Explore our collection of recent transformations, intricate nail art, and the serene atmosphere of our salon. Each image represents our commitment to precision, creativity, and the Lumière standard of luxury.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-beige/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-serif mb-6">Follow Our Journey</h3>
          <p className="text-black/60 mb-10 leading-relaxed">
            Get daily inspiration, behind-the-scenes looks, and stay updated on our latest offers by following us on Instagram.
          </p>
          <a 
            href="#" 
            className="inline-block bg-luxury-black text-white px-12 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gold transition-all"
          >
            @LumiereSalonAustin
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
