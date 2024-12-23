'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

interface PropertyCardProps {
    id: string;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
    type: string;
}

export default function PropertyCard({
    id,
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    area,
    imageUrl,
    type
}: PropertyCardProps) {
    return (
        <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="relative h-64">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {type}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{location}</p>
                
                <div className="flex justify-between items-center mb-4">
                    <p className="text-2xl font-bold text-yellow-500">
                        KES {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </p>
                    <div className="flex gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                            <FaBed />
                            <span>{bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaBath />
                            <span>{bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaRuler />
                            <span>{area}m²</span>
                        </div>
                    </div>
                </div>
                <Link href={`/properties/${id}`}>
                    <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 rounded-md hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Details
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
