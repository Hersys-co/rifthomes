'use client';

import { motion } from 'framer-motion';
import { FaHome, FaHandshake, FaStar, FaChartLine } from 'react-icons/fa';

export default function WhyChooseUs() {
    const features = [
        {
            icon: <FaHome className="w-12 h-12" />,
            title: "Premium Properties",
            description: "Access to exclusive luxury properties in prime locations across Kenya"
        },
        {
            icon: <FaHandshake className="w-12 h-12" />,
            title: "Expert Guidance",
            description: "Professional real estate agents with deep market knowledge"
        },
        {
            icon: <FaStar className="w-12 h-12" />,
            title: "5-Star Service",
            description: "Personalized attention and support throughout your property journey"
        },
        {
            icon: <FaChartLine className="w-12 h-12" />,
            title: "Market Leaders",
            description: "Track record of successful property transactions and satisfied clients"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black skew-y-2 transform origin-top-right" />
            
            <div className="relative container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Why Choose RiftHomes
                    </h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Your trusted partner in finding the perfect property in Nakuru
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-yellow-400 transition-all duration-500 h-full">
                                <div className="text-yellow-400 group-hover:text-black transition-colors mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-black">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 group-hover:text-black/80">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    {[
                        { number: "500+", label: "Properties Sold" },
                        { number: "1000+", label: "Happy Clients" },
                        { number: "10+", label: "Years Experience" },
                        { number: "50+", label: "Expert Agents" }
                    ].map((stat, index) => (
                        <div 
                            key={index}
                            className="text-center bg-yellow-400 rounded-xl p-6 transform hover:scale-105 transition-transform"
                        >
                            <h4 className="text-4xl font-bold text-black mb-2">
                                {stat.number}
                            </h4>
                            <p className="text-black/80 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
