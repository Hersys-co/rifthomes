'use client';

import { useState } from 'react';
import PropertyCard from './PropertyCard';
import FilterBar from './FilterBar';

const DUMMY_PROPERTIES = [
    {
        id: '1',
        title: 'Modern Villa in Milimani',
        location: 'Milimani, Nakuru',
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        imageUrl: '/images/property-1.jpg',
        type: 'For Sale'
    },
    {
        id: '2',
        title: 'Modern Villa in Milimani',
        location: 'Milimani, Nakuru',
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        imageUrl: '/images/property-1.jpg',
        type: 'For Sale'
    },
    {
        id: '3',
        title: 'Modern Villa in Milimani',
        location: 'Milimani, Nakuru',
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        imageUrl: '/images/property-1.jpg',
        type: 'For Sale'
    },
    {
        id: '4',
        title: 'Modern Villa in Milimani',
        location: 'Milimani, Nakuru',
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        imageUrl: '/images/property-1.jpg',
        type: 'For Sale'
    },
    {
        id: '5',
        title: 'Modern Villa in Milimani',
        location: 'Milimani, Nakuru',
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        imageUrl: '/images/property-1.jpg',
        type: 'For Sale'
    },
    {
        id: '6',
        title: 'Modern Villa in Milimani',
        location: 'Milimani, Nakuru',
        price: 45000000,
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        imageUrl: '/images/property-1.jpg',
        type: 'For Sale'
    },
    // to-do: Add more dummy properties here
];

export default function PropertyGrid() {
    const [filteredProperties, setFilteredProperties] = useState(DUMMY_PROPERTIES);
    const [sortOption, setSortOption] = useState('default');

    const handleFilterChange = (filters: any) => {
        let results = DUMMY_PROPERTIES;

        // Apply filters
        if (filters.priceRange !== 'all') {
            // Add price range filtering logic
        }
        if (filters.propertyType !== 'all') {
            results = results.filter(property => property.type === filters.propertyType);
        }
        if (filters.bedrooms !== 'all') {
            // Add bedroom filtering logic
        }
        if (filters.location !== 'all') {
            results = results.filter(property => property.location === filters.location);
        }

        // Apply current sort
        sortProperties(results, sortOption);
    };

    const handleSortChange = (option: string) => {
        setSortOption(option);
        sortProperties(filteredProperties, option);
    };

    const sortProperties = (properties: any[], option: string) => {
        let sorted = [...properties];
        switch (option) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                sorted.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
                break;
            default:
                break;
        }
        setFilteredProperties(sorted);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <FilterBar 
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>
        </div>
    );
}
