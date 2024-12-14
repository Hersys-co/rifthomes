import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['buy', 'rent', 'airbnb'], 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['house', 'apartment', 'commercial', 'land'], 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  bedrooms: Number,
  bathrooms: Number,
  images: [String],
  videoUrl: String,
  features: [String],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
