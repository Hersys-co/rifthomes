'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBed, FaBath, FaRuler, FaCar, FaSwimmingPool, FaWifi, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import PropertyCard from '@/components/properties/PropertyCard';

export default function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const [activeImage, setActiveImage] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);

    const property = {
        id: resolvedParams.id,
        title: 'Luxury Villa in Milimani',
        location: 'Milimani, Nairobi',
        price: 45000000,
        description: 'An exceptional 5-bedroom villa featuring modern architecture and premium finishes. This property offers panoramic views of Lake Nakuru.',
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        parking: 3,
        amenities: ['Swimming Pool', 'Garden', 'Security', 'Backup Generator', 'Staff Quarters'],
        imageUrl: '/images/property-1.jpg',
        images: [
            '/images/property-1.jpg',
            '/images/property-2.jpg',
            '/images/property-3.jpg',
        ],
        features: [
            'Modern Kitchen',
            'Master Ensuite',
            'Walk-in Closet',
            'Home Office',
            'Entertainment Room'
        ],
        agent: {
            name: 'Jane Doe',
            phone: '+254 700 000 000',
            email: 'janedoe@rifthomes.com',
            // image: '/images/agent.jpg'
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Image Gallery */}
            <div className="relative h-[70vh] bg-black">
                <div 
                    className="relative h-[70vh] bg-black cursor-pointer" 
                    onClick={() => setShowLightbox(true)}
                >
                    <Image
                        src={property.images[activeImage]}
                        alt={property.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {property.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`w-3 h-3 rounded-full ${
                                activeImage === index ? 'bg-yellow-400' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Property Details */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow-lg p-6 mb-8"
                        >
                            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                            <p className="text-gray-600 mb-4">{property.location}</p>
                            <div className="flex gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <FaBed className="text-yellow-400" />
                                    <span>{property.bedrooms} Beds</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaBath className="text-yellow-400" />
                                    <span>{property.bathrooms} Baths</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaRuler className="text-yellow-400" />
                                    <span>{property.area}m²</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCar className="text-yellow-400" />
                                    <span>{property.parking} Parking</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">{property.description}</p>
                            
                            {/* Features */}
                            <h2 className="text-2xl font-bold mb-4">Features</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Amenities */}
                            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {property.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-lg shadow-lg p-6 sticky top-4"
                        >
                            <div className="text-3xl font-bold text-yellow-400 mb-6">
                                KES {property.price.toLocaleString()}
                            </div>

                            {/* Agent Information */}
                            <div className="border-t pt-6">
                                <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    {/* <Image
                                        src={property.agent.image}
                                        alt={property.agent.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    /> */}
                                    <div>
                                        <p className="font-bold">{property.agent.name}</p>
                                        <p className="text-gray-600">{property.agent.phone}</p>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 border rounded-md"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 border rounded-md"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full p-3 border rounded-md"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-500 transition-colors"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showLightbox && (
                    <motion.div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close button */}
                        <button 
                            onClick={() => setShowLightbox(false)}
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                        >
                            <FaTimes size={24} />
                        </button>
            
                        {/* Navigation arrows */}
                        <button 
                            onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : property.images.length - 1))}
                            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
                        >
                            <FaArrowLeft size={24} />
                        </button>
            
                        <button 
                            onClick={() => setActiveImage((prev) => (prev < property.images.length - 1 ? prev + 1 : 0))}
                            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
                        >
                            <FaArrowRight size={24} />
                        </button>
            
                        {/* Main image */}
                        <div className="relative w-full max-w-5xl aspect-video">
                            <Image
                                src={property.images[activeImage]}
                                alt={`Property image ${activeImage + 1}`}
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </div>
            
                        {/* Image counter */}
                        <div className="absolute bottom-4 text-white">
                            {activeImage + 1} / {property.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Add 3 PropertyCard components here */}
                    <PropertyCard type={''} key={property.id} {...property} />
                    
                    
                </div>
            </div>
        </div>
        
    );
}

