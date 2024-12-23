'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaHome, FaStar, FaUsers, FaUserCircle } from 'react-icons/fa';

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }; 

    const values = [
        {
            icon: <FaHandshake className="w-8 h-8" />,
            title: "Trust",
            description: "Building lasting relationships through transparency and integrity"
        },
        {
            icon: <FaStar className="w-8 h-8" />,
            title: "Excellence",
            description: "Delivering exceptional service and premium properties"
        },
        {
            icon: <FaHome className="w-8 h-8" />,
            title: "Innovation",
            description: "Embracing modern solutions in real estate"
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Client Focus",
            description: "Putting your needs first in every interaction"
        }
    ];

    const testimonials = [
        {
            name: "David Kimani",
            role: "Property Investor",
            image: "/images/testimonials/david.jpg",
            quote: "RiftHomes helped me acquire prime properties in Nakuru CBD. Their market knowledge is exceptional.",
            project: "3 Commercial Properties Acquisition"
        },
        {
            name: "Sarah Ochieng",
            role: "Homeowner",
            image: "/images/testimonials/sarah.jpg",
            quote: "Found my dream home through RiftHomes. The team's dedication made the process smooth.",
            project: "Barnabas Family Home Purchase"
        },
        {
            name: "James Mwangi",
            role: "Property Developer",
            image: "/images/testimonials/james.jpg",
            quote: "Their property management services have maximized our returns significantly.",
            project: "20-Unit Apartment Complex"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl font-bold mb-6">About RiftHomes</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your trusted partner in the Kenyan real estate market, delivering exceptional property solutions since 2015.
                    </p>
                </motion.div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <p className="text-gray-600">
                            Founded in 2015, RiftHomes emerged from a vision to transform the Nakuru real estate landscape. We identified a gap in the market for a comprehensive property solutions provider that combines local expertise with international standards.
                        </p>
                        <p className="text-gray-600">
                            Today, we're proud to be one of Nakuru's leading real estate companies, serving hundreds of satisfied clients and managing a premium portfolio of properties across the county.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-black text-white p-8 rounded-2xl"
                    >
                        <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-yellow-400">50+</h3>
                                <p>Properties Managed</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-yellow-400">8+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-yellow-400 mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                  {/* Value Proposition Section */}
                  <motion.div className="mb-20 bg-gray-50 rounded-2xl p-12">
                      <h2 className="text-3xl font-bold text-center mb-8">Why RiftHomes?</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div>
                              <p className="text-lg text-gray-600 mb-6">
                                  At RiftHomes, we deliver more than just property solutions. We create seamless real estate experiences through:
                              </p>
                              <ul className="space-y-4">
                                  <li className="flex items-center">
                                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                      Comprehensive property services under one roof
                                  </li>
                                  <li className="flex items-center">
                                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                      Local market expertise with international standards
                                  </li>
                                  <li className="flex items-center">
                                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                      Innovative technology-driven solutions
                                  </li>
                              </ul>
                          </div>
                          <div className="space-y-6">
                              <Link 
                                  href="/services"
                                  className="block bg-black text-white p-6 rounded-xl hover:bg-gray-900 transition-colors"
                              >
                                  <h3 className="text-xl font-bold mb-2">Explore Our Services</h3>
                                  <p className="text-gray-300">View our comprehensive service portfolio →</p>
                              </Link>

                              {/* Testimonials Section
                              <motion.div className="mb-20">
                                    <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                                <FaUserCircle className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                                                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                                                <h4 className="font-bold">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                                                <p className="text-yellow-400 font-semibold text-sm">{testimonial.project}</p>
                                            </div>
                                        ))}
                                    </div>
                             </motion.div> */}
                          </div>
                      </div>
                  </motion.div>
            </div>

            {/* Mobile Carousel (visible on mobile, hidden on desktop) */}
            <div className="md:hidden relative">
                <div className="overflow-hidden">
                <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                    <div 
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0 p-4">
                                <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <FaUserCircle className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full mb-4">
                                        {testimonial.category}
                                    </span>
                                    <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                                    <p className="text-yellow-400 font-semibold text-sm">{testimonial.project}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r"
                >
                    ←
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l"
                >
                    →
                </button>
            </div>

            {/* Desktop Grid (hidden on mobile, visible on desktop) */}
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="hidden md:grid grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <FaUserCircle className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full mb-4">
                            {testimonial.category}
                        </span>
                        <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                        <p className="text-yellow-400 font-semibold text-sm">{testimonial.project}</p>
                    </div>
                ))}
            </div>
        </div>    
    );
}
