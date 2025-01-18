'use client';
import { FaPlus, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

type PropertyCategory = 'RENTAL' | 'SALE' | 'AIRBNB';
type PropertyType = 'APARTMENT' | 'HOUSE' | 'LAND';

export default function Properties() {
    const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('RENTAL');
    const [selectedType, setSelectedType] = useState<PropertyType>('APARTMENT');

    const categories = [
        { id: 'RENTAL', label: 'Rentals' },
        { id: 'SALE', label: 'For Sale' },
        { id: 'AIRBNB', label: 'Airbnb' }
    ];

    const getPropertyTypes = (category: PropertyCategory) => {
        const types = [
            { id: 'APARTMENT', label: 'Apartments' },
            { id: 'HOUSE', label: 'Houses' }
        ];
        
        if (category === 'SALE') {
            types.push({ id: 'LAND', label: 'Land' });
        }
        
        return types;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Properties</h1>
                <Link 
                    href="/dashboard/properties/add"
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-900"
                >
                    <FaPlus className="mr-2" />
                    Add Property
                </Link>
            </div>

            {/* Category Tabs */}
            <div className="mb-6">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                                    selectedCategory === category.id
                                        ? 'border-yellow-400 text-yellow-400'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                                onClick={() => setSelectedCategory(category.id as PropertyCategory)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-xl mb-6">
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        <input 
                            type="text"
                            placeholder="Search properties..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg"
                        />
                    </div>
                    <select 
                        className="border rounded-lg px-4 py-2"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value as PropertyType)}
                    >
                        {getPropertyTypes(selectedCategory).map((type) => (
                            <option key={type.id} value={type.id}>{type.label}</option>
                        ))}
                    </select>
                    <select className="border rounded-lg px-4 py-2">
                        <option>All Status</option>
                        <option>Available</option>
                        <option>Occupied</option>
                        <option>Under Maintenance</option>
                    </select>
                </div>
            </div>

            {/* Properties Table */}
            <div className="bg-white rounded-xl shadow-sm">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                {selectedCategory === 'RENTAL' ? 'Rent/Month' : 
                                 selectedCategory === 'AIRBNB' ? 'Rate/Night' : 'Price'}
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-200 rounded-lg mr-3"></div>
                                        <div>
                                            <p className="font-medium">
                                                {selectedType === 'APARTMENT' ? 'Modern Apartment' :
                                                 selectedType === 'HOUSE' ? 'Family Home' : 'Commercial Plot'}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {selectedType === 'LAND' ? '1 Acre' : '3 BHK'}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">Nakuru West</td>
                                <td className="px-6 py-4">
                                    {selectedCategory === 'RENTAL' ? 'KSH 45,000/mo' :
                                     selectedCategory === 'AIRBNB' ? 'KSH 5,000/night' : 'KSH 15M'}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                        Available
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
