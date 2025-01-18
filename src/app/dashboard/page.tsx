'use client';
import { FaHome, FaUsers, FaBed, FaPlane, FaMapMarkedAlt } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';

export default function Dashboard() {
    return (
        <div>
            {/* Main Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatsCard 
                    icon={<FaHome />}
                    title="Total Properties"
                    value="156"
                    trend="+12%"
                />
                <StatsCard 
                    icon={<FaUsers />}
                    title="Active Agents"
                    value="24"
                    trend="+5%"
                />
                <StatsCard 
                    icon={<BsHouseDoor />}
                    title="Total Views"
                    value="2,345"
                    trend="+25%"
                />
            </div>

            {/* Category Statistics */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h2 className="text-xl font-bold mb-6">Listings by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CategoryStats 
                        icon={<FaBed className="text-yellow-400" />}
                        title="Rental Properties"
                        total={85}
                        breakdown={{
                            'Apartments': 45,
                            'Houses': 40
                        }}
                    />
                    <CategoryStats 
                        icon={<FaMapMarkedAlt className="text-yellow-400" />}
                        title="Properties for Sale"
                        total={56}
                        breakdown={{
                            'Apartments': 20,
                            'Houses': 26,
                            'Land': 10
                        }}
                    />
                    <CategoryStats 
                        icon={<FaPlane className="text-yellow-400" />}
                        title="Airbnb Listings"
                        total={15}
                        breakdown={{
                            'Apartments': 10,
                            'Houses': 5
                        }}
                    />
                </div>
            </div>

            {/* Recent Activities and Properties */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RecentActivities />
                <RecentProperties />
            </div>
        </div>
    );
}

function StatsCard({ icon, title, value, trend }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400 text-2xl">{icon}</div>
                <span className="text-green-500 text-sm">{trend}</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
}

function CategoryStats({ icon, title, total, breakdown }) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{icon}</div>
                <h3 className="font-bold">{title}</h3>
            </div>
            <div className="text-3xl font-bold mb-4">{total}</div>
            <div className="space-y-2">
                {Object.entries(breakdown).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RecentActivities() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
            <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <div>
                            <p className="text-sm">New property listed by Agent Sarah</p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RecentProperties() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Properties</h2>
            <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3"></div>
                            <div>
                                <p className="font-medium">Luxury Apartment</p>
                                <p className="text-sm text-gray-500">Nakuru CBD</p>
                            </div>
                        </div>
                        <p className="font-bold">KSH 12M</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
