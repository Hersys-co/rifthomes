'use client'; // This tells Next.js this is a client component that needs interactivity

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      {/* Container for centering content */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold">
            RiftHomes
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {/* Dropdown for Buy Category */}
            <div className="relative group">
              <button className="px-3 py-2">Buy</button>
              {/* Dropdown menu that appears on hover */}
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg">
                <Link href="/buy/houses" className="block px-4 py-2 hover:bg-gray-100">
                  Houses
                </Link>
                {/* More dropdown items */}
              </div>
            </div>
            {/* Other navigation items */}
          </div>
        </div>
      </div>
    </nav>
  );
}
