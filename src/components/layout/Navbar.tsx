'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      {/* Container for centering content */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            RiftHomes
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 z-50">
            {/* Dropdown for Buy Category */}
            <div className="relative group">
                <button className="px-4 py-2 hover:text-yellow-400 transition-colors">
                    Buy
                </button>
              {/* Dropdown menu that appears on hover */}
                <div className="absolute left-0 hidden group-hover:block w-48 bg-white text-black shadow-lg rounded-md mt-1">
                    <Link href="/buy/houses" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Houses</Link>
                    <Link href="/buy/apartments" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Apartments</Link>
                    <Link href="/buy/commercial" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Commercial</Link>
                    <Link href="/buy/land" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Land</Link>
                </div>
            </div>
            {/* Rent Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 hover:text-yellow-400 transition-colors">
                Rent
              </button>
              <div className="absolute left-0 hidden group-hover:block w-48 bg-white text-black shadow-lg rounded-md mt-1">
                <Link href="/rent/houses" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Houses</Link>
                <Link href="/rent/apartments" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Apartments</Link>
                <Link href="/rent/commercial" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Commercial</Link>
              </div>
            </div>

            {/* Airbnb Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 hover:text-yellow-400 transition-colors">
                Airbnbs
              </button>
              <div className="absolute left-0 hidden group-hover:block w-48 bg-white text-black shadow-lg rounded-md mt-1">
                <Link href="/airbnbs/houses" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Houses</Link>
                <Link href="/airbnbs/apartments" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Apartments</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 hover:text-yellow-400 transition-colors">
                Services
              </button>
              <div className="absolute left-0 hidden group-hover:block w-48 bg-white text-black shadow-lg rounded-md mt-1">
                <Link href="/services/property-management" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Property Management</Link>
                <Link href="/services/moving" className="block px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600">Moving Services</Link>
              </div>
            </div>

            <Link 
              href="/about" 
              className="px-4 py-2 hover:text-yellow-400 transition-colors"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="px-4 py-2 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4"
               role = "navigation"
               aria-label = "mobile-menu"
          >
            <Link href="/buy" className="block py-3 px-4 hover:bg-yellow-400 hover:text-black">Buy</Link>
            <Link href="/rent" className="block py-3 px-4 hover:bg-yellow-400 hover:text-black">Rent</Link>
            <Link href="/airbnbs" className="block py-3 px-4 hover:bg-yellow-400 hover:text-black">Airbnbs</Link>
            <Link href="/services" className="block py-3 px-4 hover:bg-yellow-400 hover:text-black">Services</Link>
            <Link href="/about" className="block py-3 px-4 hover:bg-yellow-400 hover:text-black">About</Link>
            <Link href="/contact" className="block py-3 px-4 hover:bg-yellow-400 hover:text-black">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 
