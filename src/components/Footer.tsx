import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="text-gold w-8 h-8" />
            <span className="text-2xl font-serif tracking-widest uppercase">Lumière</span>
          </Link>
          <p className="text-white/60 leading-relaxed">
            Where Light Meets Beauty. Experience the ultimate in luxury hair, nail, and spa treatments in the heart of Austin.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif mb-6 uppercase tracking-widest text-gold">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-serif mb-6 uppercase tracking-widest text-gold">Contact Us</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0 mt-1" />
              <span>892 Willowbrook Avenue, Austin, TX 78702</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>(555) 847-3291</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>hello@lumieresalon.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-serif mb-6 uppercase tracking-widest text-gold">Hours</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li className="flex justify-between"><span>Monday</span> <span className="text-gold">Closed</span></li>
            <li className="flex justify-between"><span>Tue – Fri</span> <span>9:00 AM – 8:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>8:00 AM – 6:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>10:00 AM – 4:00 PM</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-white/10 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumière Salon & Spa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
