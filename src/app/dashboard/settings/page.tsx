'use client';
import { useState } from 'react';
import { FaUser, FaLock, FaBell, FaGlobe, FaCog } from 'react-icons/fa';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Settings Navigation */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <nav className="space-y-2">
                        <button
                            className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                                activeTab === 'profile' ? 'bg-yellow-50 text-yellow-400' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <FaUser className="mr-3" />
                            Profile Settings
                        </button>
                        <button
                            className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                                activeTab === 'security' ? 'bg-yellow-50 text-yellow-400' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveTab('security')}
                        >
                            <FaLock className="mr-3" />
                            Security
                        </button>
                        <button
                            className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                                activeTab === 'notifications' ? 'bg-yellow-50 text-yellow-400' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveTab('notifications')}
                        >
                            <FaBell className="mr-3" />
                            Notifications
                        </button>
                        <button
                            className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                                activeTab === 'website' ? 'bg-yellow-50 text-yellow-400' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveTab('website')}
                        >
                            <FaGlobe className="mr-3" />
                            Website Settings
                        </button>
                        <button
                            className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                                activeTab === 'system' ? 'bg-yellow-50 text-yellow-400' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveTab('system')}
                        >
                            <FaCog className="mr-3" />
                            System Settings
                        </button>
                    </nav>
                </div>

                {/* Settings Content */}
                <div className="md:col-span-3">
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'security' && <SecuritySettings />}
                    {activeTab === 'notifications' && <NotificationSettings />}
                    {activeTab === 'website' && <WebsiteSettings />}
                    {activeTab === 'system' && <SystemSettings />}
                </div>
            </div>
        </div>
    );
}

function ProfileSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" defaultValue="RiftHomes" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Contact Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg" defaultValue="info@rifthomes.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Contact Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border rounded-lg" defaultValue="+254 700 000000" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Business Address</label>
                    <textarea className="w-full px-4 py-2 border rounded-lg" rows={3} defaultValue="Nakuru, Kenya" />
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
                    Save Changes
                </button>
            </div>
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Security Settings</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input type="password" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input type="password" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <input type="password" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="2fa" className="mr-2" />
                    <label htmlFor="2fa">Enable Two-Factor Authentication</label>
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
                    Update Security Settings
                </button>
            </div>
        </div>
    );
}

function NotificationSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">New Property Listings</h3>
                        <p className="text-sm text-gray-500">Get notified when new properties are listed</p>
                    </div>
                    <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">Agent Activities</h3>
                        <p className="text-sm text-gray-500">Notifications about agent actions</p>
                    </div>
                    <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">Property Updates</h3>
                        <p className="text-sm text-gray-500">Changes to existing properties</p>
                    </div>
                    <input type="checkbox" defaultChecked />
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 mt-6">
                    Save Preferences
                </button>
            </div>
        </div>
    );
}

function WebsiteSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Website Settings</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Website Title</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" defaultValue="RiftHomes - Premier Real Estate" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Meta Description</label>
                    <textarea className="w-full px-4 py-2 border rounded-lg" rows={3} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Social Media Links</label>
                    <div className="space-y-3">
                        <input type="url" placeholder="Facebook" className="w-full px-4 py-2 border rounded-lg" />
                        <input type="url" placeholder="Twitter" className="w-full px-4 py-2 border rounded-lg" />
                        <input type="url" placeholder="Instagram" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
                    Update Website Settings
                </button>
            </div>
        </div>
    );
}

function SystemSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">System Settings</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Default Currency</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                        <option>KSH (Kenyan Shilling)</option>
                        <option>USD (US Dollar)</option>
                        <option>EUR (Euro)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Date Format</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                        <option>DD/MM/YYYY</option>
                        <option>MM/DD/YYYY</option>
                        <option>YYYY-MM-DD</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Timezone</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                        <option>East Africa Time (EAT)</option>
                        <option>UTC</option>
                    </select>
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
                    Save System Settings
                </button>
            </div>
        </div>
    );
}

