'use client';

import { motion } from 'framer-motion';
import { FaHome, FaKey, FaBed, FaTruck, FaCamera } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import Link from 'next/link';

export default function ServicesOverview() {
    const services = [
        {
            icon: <FaHome className="w-10 h-10" />,
            title: "Property Sales",
            description: "Find your dream home from our exclusive collection of premium properties",
            link: "/services/sales"
        },
        {
            icon: <FaKey className="w-10 h-10" />,
            title: "Rental Properties",
            description: "Discover high-end rental properties in prime locations",
            link: "/services/rentals"
        },
        {
            icon: <FaBuildingUser className="w-10 h-10" />,
            title: "Property Management",
            description: "Professional management services for your investment properties",
            link: "/services/property-management"
        },
        {
            icon: <FaBed className="w-10 h-10" />,
            title: "Airbnb Management",
            description: "End-to-end management of your short-term rental property",
            link: "/services/airbnb-management"
        },
        {
            icon: <FaTruck className="w-10 h-10" />,
            title: "Moving Services",
            description: "Seamless relocation services to help you settle into your new home",
            link: "/services/moving"
        },
        {
            icon: <FaCamera className="w-10 h-10" />,
            title: "Property Marketing",
            description: "Professional photography, videography, and virtual tours to showcase your property",
            link: "/services/marketing"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-yellow-500 font-semibold mb-4 block">WHAT WE OFFER</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
                    <div className="w-20 h-1.5 bg-yellow-400 mx-auto mb-8" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Comprehensive real estate solutions tailored to your needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={service.link}>
                                <div className="group h-full bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="bg-yellow-400 p-4 rounded-xl inline-block text-white mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    <div className="text-yellow-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn More →
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link href="/services">
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                            View All Services
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
