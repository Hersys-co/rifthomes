export interface Property {
  _id: string;
  title: string;
  description: string;
  category: 'buy' | 'rent' | 'airbnb';
  type: 'house' | 'apartment' | 'commercial' | 'land';
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  images: string[];
  videoUrl?: string;
  features: string[];
  createdAt: Date;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'admin' | 'agent';
}
