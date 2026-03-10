import React from 'react';
import PageHero from '../components/PageHero';
import BookingForm from '../components/BookingForm';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, CreditCard } from 'lucide-react';

const Book = () => {
  const policies = [
    { icon: <Clock className="text-gold" size={24} />, title: '24-Hour Notice', text: 'We require at least 24 hours notice for any cancellations or rescheduling.' },
    { icon: <ShieldCheck className="text-gold" size={24} />, title: 'Arrival Time', text: 'Please arrive 10 minutes prior to your scheduled appointment time.' },
    { icon: <CreditCard className="text-gold" size={24} />, title: 'Payment', text: 'We accept all major cards, Apple Pay, Venmo, and cash.' },
  ];

  return (
    <div>
      <PageHero 
        title="Book Appointment" 
        subtitle="Reserve Your Luxury Experience"
        image="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-serif mb-4">Secure Your Session</h2>
                <p className="text-black/60">Fill out the form below and our concierge will contact you to finalize your booking.</p>
              </div>
              <BookingForm />
            </div>

            {/* Info Column */}
            <div className="space-y-12">
              <div className="bg-beige/20 p-10 rounded-2xl border border-gold/10">
                <h3 className="text-2xl font-serif mb-8">Salon Policies</h3>
                <div className="space-y-8">
                  {policies.map((policy, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="shrink-0 mt-1">{policy.icon}</div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{policy.title}</h4>
                        <p className="text-sm text-black/60 leading-relaxed">{policy.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-luxury-black text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-serif mb-6 text-gold">Need Help?</h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">
                  If you have questions about our services or need assistance with a group booking, please call us directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock size={14} className="text-gold" />
                    </div>
                    <span className="text-sm">Tue – Fri: 9am – 8pm</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock size={14} className="text-gold" />
                    </div>
                    <span className="text-sm">Sat: 8am – 6pm</span>
                  </div>
                </div>
                <a 
                  href="tel:5558473291" 
                  className="mt-8 block w-full text-center bg-gold py-3 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-gold-light transition-all"
                >
                  Call (555) 847-3291
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
