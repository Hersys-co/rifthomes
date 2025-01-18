'use client';
import { FaHome, FaUsers, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

const sidebarLinks = [
    { icon: <FaHome />, label: 'Overview', href: '/dashboard' },
    { icon: <FaClipboardList />, label: 'Properties', href: '/dashboard/properties' },
    { icon: <FaUsers />, label: 'Agents', href: '/dashboard/agents' },
    { icon: <FaCog />, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-black text-white">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-yellow-400">RiftHomes</h1>
                </div>
                <nav className="mt-6">
                    {sidebarLinks.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.href}
                            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-900 hover:text-yellow-400"
                        >
                            <span className="mr-3">{link.icon}</span>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Top Navigation */}
                <header className="bg-white shadow-sm">
                    <div className="flex justify-between items-center px-8 py-4">
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                        <button className="flex items-center text-gray-600 hover:text-black">
                            <FaSignOutAlt className="mr-2" />
                            Logout
                        </button>
                    </div>
                </header>
                
                {/* Page Content */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
