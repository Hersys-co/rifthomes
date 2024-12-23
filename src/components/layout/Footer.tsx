'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-6">RiftHomes</h3>
                        <p className="text-gray-300 mb-4">
                            Your trusted partner in finding the perfect property in Kenya. Follow us on our socials for more.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaTwitter size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaInstagram size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400"><FaYoutube size={24} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/buy" className="text-gray-300 hover:text-yellow-400">Buy Property</Link></li>
                            <li><Link href="/rent" className="text-gray-300 hover:text-yellow-400">Rent Property</Link></li>
                            <li><Link href="/airbnbs" className="text-gray-300 hover:text-yellow-400">Airbnbs</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-yellow-400">Our Services</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-yellow-400">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/sales" className="text-gray-300 hover:text-yellow-400">Property Sales</Link></li>
                            <li><Link href="/services/rentals" className="text-gray-300 hover:text-yellow-400">Rental Properties</Link></li>
                            <li><Link href="/services/property-management" className="text-gray-300 hover:text-yellow-400">Property Management</Link></li>
                            <li><Link href="/services/airbnb-management" className="text-gray-300 hover:text-yellow-400">Airbnb Management</Link></li>
                            <li><Link href="/services/moving" className="text-gray-300 hover:text-yellow-400">Moving Services</Link></li>
                            <li><Link href="/services/marketing" className="text-gray-300 hover:text-yellow-400">Property Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <FaPhone className="text-yellow-400 mr-3" />
                                <a href="tel:+254700000000" className="text-gray-300 hover:text-yellow-400">+254 700 000 000</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-yellow-400 mr-3" />
                                <a href="mailto:info@rifthomes.com" className="text-gray-300 hover:text-yellow-400">info@rifthomes.com</a>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-yellow-400 mr-3 mt-1" />
                                <span className="text-gray-300">
                                    Kiamunyi Business Center<br />
                                    Nakuru, Kenya
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} RiftHomes. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
