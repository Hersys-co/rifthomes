'use client';
import { useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaDollarSign, FaBed, FaBath, FaRuler, FaImage } from 'react-icons/fa';

type PropertyCategory = 'RENTAL' | 'SALE' | 'AIRBNB';
type PropertyType = 'APARTMENT' | 'HOUSE' | 'COMMERCIAL' | 'LAND';

export default function AddProperty() {
    const [category, setCategory] = useState<PropertyCategory>('RENTAL');
    const [propertyType, setPropertyType] = useState<PropertyType>('APARTMENT');
    const [images, setImages] = useState<FileList | null>(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        squareFeet: '',
        features: [] as string[],
        amenities: [] as string[]
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ category, propertyType, ...formData });
    };

    const getPropertyTypes = (category: PropertyCategory) => {
        const types = [
            { id: 'APARTMENT', label: 'Apartments' },
            { id: 'HOUSE', label: 'Houses' },
            { id: 'COMMERCIAL', label: 'Commercial' }
        ];
        
        if (category === 'SALE') {
            types.push({ id: 'LAND', label: 'Land' });
        }
        
        return types;
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Add New Property</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Property Category Selection */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Property Category</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {['RENTAL', 'SALE', 'AIRBNB'].map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={`p-4 rounded-lg border-2 ${
                                    category === cat 
                                        ? 'border-yellow-400 bg-yellow-50' 
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => setCategory(cat as PropertyCategory)}
                            >
                                {cat.charAt(0) + cat.slice(1).toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Basic Information */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Property Type</label>
                            <select 
                                className="w-full px-4 py-2 border rounded-lg"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                            >
                                {getPropertyTypes(category).map((type) => (
                                    <option key={type.id} value={type.id}>{type.label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Title</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg"
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-lg h-48"
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                                placeholder="Enter property description"
                            />
                        </div>
                    </div>
                </div>

                {/* Location and Price */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Location & Price</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.location}
                                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {category === 'RENTAL' ? 'Monthly Rent' : 
                                 category === 'AIRBNB' ? 'Nightly Rate' : 'Price'}
                            </label>
                            <div className="relative">
                                <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="number"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.price}
                                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                {propertyType !== 'LAND' && (
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">Property Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Bedrooms</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={formData.bedrooms}
                                    onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Bathrooms</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={formData.bathrooms}
                                    onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Square Feet <span className="text-gray-400 text-xs">(Optional)</span>
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={formData.squareFeet}
                                    onChange={(e) => setFormData({...formData, squareFeet: e.target.value})}
                                    placeholder="Enter square feet"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Images Upload */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Property Images</h2>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="hidden"
                            id="images"
                            onChange={(e) => setImages(e.target.files)}
                        />
                        <label htmlFor="images" className="cursor-pointer">
                            <FaImage className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-sm text-gray-600">
                                Drop your images here, or click to select
                            </p>
                        </label>
                    </div>
                    {images && (
                        <div className="mt-4 grid grid-cols-4 gap-4">
                            {Array.from(images).map((image, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
                    >
                        Add Property
                    </button>
                </div>
            </form>
        </div>
    );
}
