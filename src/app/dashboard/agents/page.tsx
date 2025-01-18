'use client';
import { FaPlus, FaSearch, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function Agents() {
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Agents Management</h1>
                <Link 
                    href="/dashboard/agents/add"
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-900"
                >
                    <FaPlus className="mr-2" />
                    Add Agent
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatsCard
                    title="Total Agents"
                    value="24"
                    trend="+3 this month"
                />
                <StatsCard
                    title="Active Listings"
                    value="156"
                    trend="12 new this week"
                />
                <StatsCard
                    title="Successful Deals"
                    value="89"
                    trend="+15% this month"
                />
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-xl mb-6">
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        <input 
                            type="text"
                            placeholder="Search agents..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg"
                        />
                    </div>
                    <select className="border rounded-lg px-4 py-2">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <select className="border rounded-lg px-4 py-2">
                        <option>Sort By</option>
                        <option>Listings Count</option>
                        <option>Deals Closed</option>
                        <option>Join Date</option>
                    </select>
                </div>
            </div>

            {/* Agents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <AgentCard key={index} />
                ))}
            </div>
        </div>
    );
}

function StatsCard({ title, value, trend }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
            <p className="text-2xl font-bold mb-2">{value}</p>
            <p className="text-sm text-green-500">{trend}</p>
        </div>
    );
}

function AgentCard() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
                <FaUserCircle className="w-16 h-16 text-yellow-400 mr-4" />
                <div>
                    <h3 className="font-bold text-lg">Sarah Kamau</h3>
                    <p className="text-gray-500">Senior Property Agent</p>
                </div>
            </div>
            
            <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Active Listings</span>
                    <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deals Closed</span>
                    <span className="font-medium">45</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Success Rate</span>
                    <span className="font-medium">92%</span>
                </div>
            </div>

            <div className="flex justify-between pt-4 border-t">
                <button className="text-blue-600 hover:text-blue-900">View Profile</button>
                <div>
                    <button className="text-yellow-500 hover:text-yellow-600 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Deactivate</button>
                </div>
            </div>
        </div>
    );
}
