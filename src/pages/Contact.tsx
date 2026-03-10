import React from 'react';
import PageHero from '../components/PageHero';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div>
      <PageHero 
        title="Contact Us" 
        subtitle="Get in Touch with Lumière"
        image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-12">Visit Our Sanctuary</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2 uppercase tracking-widest">Address</h4>
                    <p className="text-black/60 leading-relaxed">
                      892 Willowbrook Avenue<br />
                      Arts District<br />
                      Austin, TX 78702
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2 uppercase tracking-widest">Phone</h4>
                    <p className="text-black/60 leading-relaxed">(555) 847-3291</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2 uppercase tracking-widest">Email</h4>
                    <div className="space-y-1 text-black/60">
                      <p>General: hello@lumieresalon.com</p>
                      <p>Booking: book@lumieresalon.com</p>
                      <p>Careers: careers@lumieresalon.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2 uppercase tracking-widest">Hours</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-black/60 text-sm">
                      <span>Monday</span> <span className="text-gold">Closed</span>
                      <span>Tue – Fri</span> <span>9:00 AM – 8:00 PM</span>
                      <span>Saturday</span> <span>8:00 AM – 6:00 PM</span>
                      <span>Sunday</span> <span>10:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-black/5">
                <h4 className="text-xs uppercase tracking-[0.3em] text-black/40 mb-6">Follow Us</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gold transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-black hover:text-gold transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="text-black hover:text-gold transition-colors"><Twitter size={24} /></a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-beige/20 p-10 md:p-16 rounded-3xl border border-gold/10"
            >
              <h3 className="text-3xl font-serif mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Name</label>
                  <input type="text" className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Email</label>
                  <input type="email" className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Subject</label>
                  <select className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Feedback</option>
                    <option>Career Opportunity</option>
                    <option>Media Request</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors resize-none" />
                </div>
                <button className="w-full bg-luxury-black text-white py-4 uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.710777322987!2d-97.7289896234382!3d30.26100597481357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a331488b%3A0x84257b7151f465d6!2sEast%20Austin%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
