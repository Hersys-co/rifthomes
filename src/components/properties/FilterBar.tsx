'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FilterBarProps {
    onFilterChange: (filters: any) => void;
    onSortChange: (sortOption: string) => void;
}

export default function FilterBar({ onFilterChange, onSortChange }) {
    const [filters, setFilters] = useState({
        priceRange: 'all',
        propertyType: 'all',
        bedrooms: 'all',
        location: 'all'
    });

    const handleFilterChange = (key: string, value: string) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Price Range Filter */}
                <select 
                    className="p-2 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                    <option value="all">Price Range</option>
                    <option value="0-5m">Under 5M KES</option>
                    <option value="5m-10m">5M - 10M KES</option>
                    <option value="10m-20m">10M - 20M KES</option>
                    <option value="20m+">Above 20M KES</option>
                </select>

                {/* Property Type Filter */}
                <select 
                    className="p-2 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                >
                    <option value="all">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="land">Land</option>
                </select>

                {/* Bedrooms Filter */}
                <select 
                    className="p-2 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                >
                    <option value="all">Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                </select>

                {/* Location Filter */}
                <select 
                    className="p-2 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                    <option value="all">Location</option>
                    <option value="karen">Milimani</option>
                    <option value="westlands">Section 58</option>
                    <option value="kilimani">Barnabas</option>
                    <option value="lavington">Whitehouse</option>
                    <option value="lavington">Other</option>
                </select>

                {/* Sort Options */}
                <select 
                    className="p-2 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="default">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                </select>
            </div>
        </motion.div>
    );
}
