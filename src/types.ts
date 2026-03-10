export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price?: string;
  category: 'hair' | 'nail' | 'spa' | 'package';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'hair' | 'nail' | 'spa' | 'interior';
  alt: string;
}
