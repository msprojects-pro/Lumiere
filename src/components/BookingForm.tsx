import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES, TEAM } from '../constants';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    stylist: '',
    date: '',
    time: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 bg-beige/30 rounded-2xl border border-gold/20"
      >
        <h3 className="text-3xl font-serif mb-4">Thank You, {formData.name}!</h3>
        <p className="text-black/60 mb-8 max-w-md mx-auto">
          Your booking request has been received. We will contact you shortly at {formData.phone} to confirm your appointment.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-gold uppercase tracking-widest font-bold border-b border-gold pb-1 hover:text-luxury-black hover:border-luxury-black transition-all"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Full Name</label>
        <input 
          required
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Phone Number</label>
        <input 
          required
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Email Address</label>
        <input 
          required
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Service Category</label>
        <select 
          required
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
        >
          <option value="">Select Category</option>
          <option value="hair">Hair Services</option>
          <option value="nail">Nail Services</option>
          <option value="spa">Spa Services</option>
          <option value="package">Packages</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Preferred Stylist</label>
        <select 
          name="stylist"
          value={formData.stylist}
          onChange={handleChange}
          className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
        >
          <option value="">No Preference</option>
          {TEAM.map(member => (
            <option key={member.id} value={member.name}>{member.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Date</label>
          <input 
            required
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Time</label>
          <input 
            required
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors"
          />
        </div>
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="text-xs uppercase tracking-widest font-semibold text-black/60">Additional Notes</label>
        <textarea 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your hair type or any special requests..."
          className="w-full bg-white border border-black/10 px-4 py-3 focus:border-gold outline-none transition-colors resize-none"
        />
      </div>

      <div className="md:col-span-2 pt-4">
        <button 
          type="submit"
          className="w-full bg-luxury-black text-white py-4 uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500"
        >
          Confirm Appointment Request
        </button>
        <p className="text-[10px] text-center mt-4 text-black/40 uppercase tracking-widest">
          * 24-hour cancellation notice required
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
