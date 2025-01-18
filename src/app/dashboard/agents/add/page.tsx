'use client';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaIdCard } from 'react-icons/fa';

export default function AddAgent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        idNumber: '',
        role: 'AGENT',
        specialization: 'RESIDENTIAL'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Add New Agent</h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Personal Information */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">First Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Last Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                            <div className="relative">
                                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="tel"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">ID Number</label>
                            <div className="relative">
                                <FaIdCard className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                    value={formData.idNumber}
                                    onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Specialization</label>
                            <select 
                                className="w-full px-4 py-2 border rounded-lg"
                                value={formData.specialization}
                                onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                            >
                                <option value="RESIDENTIAL">Residential Properties</option>
                                <option value="COMMERCIAL">Commercial Properties</option>
                                <option value="LAND">Land Properties</option>
                                <option value="AIRBNB">Airbnb Properties</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end space-x-4 pt-6 border-t">
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
                        Add Agent
                    </button>
                </div>
            </form>
        </div>
    );
}
