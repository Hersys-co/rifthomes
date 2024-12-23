'use client';

import PropertyCard from './PropertyCard';

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
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DUMMY_PROPERTIES.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>
        </div>
    );
}
