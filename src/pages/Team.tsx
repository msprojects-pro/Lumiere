import React from 'react';
import PageHero from '../components/PageHero';
import TeamCard from '../components/TeamCard';
import { TEAM } from '../constants';
import { motion } from 'motion/react';

const Team = () => {
  return (
    <div>
      <PageHero 
        title="Our Experts" 
        subtitle="The Artists Behind the Magic"
        image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Meet the Visionaries</h2>
            <p className="text-black/60 leading-relaxed text-lg">
              Our team is comprised of industry-leading specialists who are passionate about their craft. Each member brings a unique perspective and a commitment to excellence, ensuring that every guest receives a personalized and transformative experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="section-padding bg-luxury-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif mb-6">Join Our Creative Family</h3>
          <p className="text-white/60 mb-10 leading-relaxed">
            Are you a passionate beauty professional looking for a luxury environment to grow your career? We are always looking for talented individuals to join our award-winning team.
          </p>
          <a 
            href="mailto:careers@lumieresalon.com" 
            className="inline-block border border-gold text-gold px-12 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-all"
          >
            Send Your Portfolio
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
