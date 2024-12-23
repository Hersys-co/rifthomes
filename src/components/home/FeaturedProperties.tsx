'use client';

import { motion } from 'framer-motion';
import PropertyCard from '../properties/PropertyCard';

export default function FeaturedProperties() {
    const featuredProperties = [
        {
            id: '1',
            title: 'Luxury Villa in Milimani',
            location: 'Milimani, Nakuru',
            price: 45000000,
            bedrooms: 5,
            bathrooms: 4,
            area: 450,
            imageUrl: '/images/property-3.jpg',
            type: 'Premium'
        },
        {
            id: '2',
            title: 'Modern Apartment in Naka',
            location: 'Naka, Nakuru',
            price: 25000000,
            bedrooms: 3,
            bathrooms: 2,
            area: 200,
            imageUrl: '/images/property-1.jpg',
            type: 'Featured'
        },
        {
            id: '3',
            title: 'Penthouse in Westlands',
            location: 'Section 58, Nakuru',
            price: 35000000,
            bedrooms: 4,
            bathrooms: 3,
            area: 300,
            imageUrl: '/images/property-2.jpg',
            type: 'Premium'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium properties in prime locations
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-12"
                    whileHover={{ scale: 1.05 }}
                >
                    <button className="bg-yellow-400 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors">
                        View All Properties
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
