import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <Scissors className={`w-8 h-8 transition-colors ${scrolled ? 'text-gold' : 'text-white'}`} />
          <span className={`text-2xl font-serif tracking-widest uppercase transition-colors ${scrolled ? 'text-luxury-black' : 'text-white'}`}>
            Lumière
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] lg:text-sm uppercase tracking-widest hover:text-gold transition-colors ${
                location.pathname === link.path 
                  ? 'text-gold' 
                  : scrolled ? 'text-luxury-black' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-gold hover:bg-gold-light text-white px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-sm uppercase tracking-widest transition-all transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-luxury-black' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-luxury-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 py-8 px-6 flex flex-col space-y-6 items-center shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg uppercase tracking-widest ${
                  location.pathname === link.path ? 'text-gold' : 'text-luxury-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-gold text-white px-10 py-3 rounded-full text-sm uppercase tracking-widest w-full text-center"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
