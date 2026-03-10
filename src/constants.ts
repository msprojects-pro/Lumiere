import { Service, TeamMember, Testimonial, GalleryImage } from './types';

export const SERVICES: Service[] = [
  // Hair Services
  { id: 'h1', name: 'Signature Haircut', description: 'Precision cutting tailored to your face shape and lifestyle.', duration: '60 min', category: 'hair' },
  { id: 'h2', name: 'Luxury Color', description: 'Full color service using premium Redken products.', duration: '120 min', category: 'hair' },
  { id: 'h3', name: 'Balayage Artistry', description: 'Hand-painted highlights for a natural, sun-kissed look.', duration: '180 min', category: 'hair' },
  { id: 'h4', name: 'Hair Extensions', description: 'Premium quality extensions for length and volume.', duration: '240 min', category: 'hair' },
  { id: 'h5', name: 'Olaplex Treatment', description: 'Bond-building treatment to restore hair health.', duration: '45 min', category: 'hair' },
  { id: 'h6', name: 'Bridal Styling', description: 'Elegant updos and styling for your special day.', duration: '90 min', category: 'hair' },
  
  // Nail Services
  { id: 'n1', name: 'Luxury Manicure', description: 'Complete nail care with hand massage and premium polish.', duration: '45 min', category: 'nail' },
  { id: 'n2', name: 'Spa Pedicure', description: 'Relaxing foot soak, exfoliation, and nail grooming.', duration: '60 min', category: 'nail' },
  { id: 'n3', name: 'Gel Nails', description: 'Long-lasting gel polish with a high-shine finish.', duration: '60 min', category: 'nail' },
  { id: 'n4', name: 'Custom Nail Art', description: 'Intricate designs hand-painted by our specialists.', duration: '30 min', category: 'nail' },
  
  // Spa Services
  { id: 's1', name: 'Lumière Facial', description: 'Our signature deep-cleansing and hydrating facial.', duration: '75 min', category: 'spa' },
  { id: 's2', name: 'Microdermabrasion', description: 'Advanced exfoliation for smoother, brighter skin.', duration: '60 min', category: 'spa' },
  { id: 's3', name: 'Swedish Massage', description: 'Full-body relaxation massage to melt away stress.', duration: '60 min', category: 'spa' },
  { id: 's4', name: 'Lash Extensions', description: 'Classic or volume lashes for a stunning gaze.', duration: '120 min', category: 'spa' },
  
  // Packages
  { id: 'p1', name: 'The Royal Bridal', description: 'Hair, makeup, and nails for the perfect bride.', duration: '300 min', category: 'package' },
  { id: 'p2', name: 'Date Night Ready', description: 'Blowout, makeup touch-up, and express mani.', duration: '120 min', category: 'package' },
  { id: 'p3', name: 'Self-Care Sunday', description: 'Massage, facial, and luxury pedicure.', duration: '210 min', category: 'package' },
];

export const TEAM: TeamMember[] = [
  { id: 't1', name: 'Isabella Vance', role: 'Creative Director', description: 'With 15 years of experience, Isabella leads our creative vision.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  { id: 't2', name: 'Marcus Chen', role: 'Senior Stylist', description: 'Master of precision cuts and modern transformations.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { id: 't3', name: 'Zoe Park', role: 'Color Specialist', description: 'Expert in balayage and vibrant color corrections.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
  { id: 't4', name: 'Olivia Grant', role: 'Spa Manager', description: 'Dedicated to providing the ultimate relaxation experience.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
  { id: 't5', name: 'Sofia Reyes', role: 'Nail Artist', description: 'Specializing in intricate nail art and luxury care.', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 'r1', name: 'Emma Thompson', rating: 5, text: 'The best salon experience I have ever had. The attention to detail is unmatched.', date: '2 weeks ago' },
  { id: 'r2', name: 'James Wilson', rating: 5, text: 'Marcus is a wizard with scissors. I always leave feeling like a new man.', date: '1 month ago' },
  { id: 'r3', name: 'Sarah Miller', rating: 5, text: 'Lumière is my go-to for facials. My skin has never looked better.', date: '3 weeks ago' },
  { id: 'r4', name: 'Elena Rodriguez', rating: 5, text: 'The bridal package was perfect. They made me feel so special on my big day.', date: '2 months ago' },
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', category: 'hair', alt: 'Hair styling' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800', category: 'nail', alt: 'Nail art' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800', category: 'spa', alt: 'Spa treatment' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', category: 'interior', alt: 'Salon interior' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', category: 'hair', alt: 'Hair coloring' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800', category: 'interior', alt: 'Styling station' },
  { id: 'g7', url: 'https://picsum.photos/seed/luxury-nails/800/800', category: 'nail', alt: 'Luxury nail art' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800', category: 'nail', alt: 'Minimalist nails' },
  { id: 'g9', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800', category: 'interior', alt: 'Modern styling station' },
  { id: 'g10', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800', category: 'interior', alt: 'Reception area' },
];
