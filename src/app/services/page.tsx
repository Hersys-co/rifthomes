import { FaHome, FaKey, FaBed, FaTruck, FaCamera } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';

export default function ServicesPage() {
    const services = [
        {
            icon: <FaHome className="w-16 h-16" />,
            title: "Property Sales",
            description: "Find your dream home from our exclusive collection of premium properties",
            link: "/services/sales",
            features: ["Property Valuation", "Market Analysis", "Buyer Matching", "Transaction Support"]
        },
        {
            icon: <FaKey className="w-16 h-16" />,
            title: "Rental Properties",
            description: "Discover high-end rental properties in prime locations",
            link: "/services/rentals",
            features: ["Property Listings", "Tenant Screening", "Lease Agreements", "Move-in Support"]
        },
        {
            icon: <FaBuildingUser className="w-16 h-16" />,
            title: "Property Management",
            description: "Professional management services for your investment properties",
            link: "/services/property-management",
            features: ["Rent Collection", "Maintenance", "Tenant Relations", "Financial Reporting"]
        },
        {
            icon: <FaBed className="w-16 h-16" />,
            title: "Airbnb Management",
            description: "End-to-end management of your short-term rental property",
            link: "/services/airbnb-management",
            features: ["Listing Optimization", "Airbnb Marketing", "Guest Communication", "Cleaning Services", "Revenue Management"]
        },
        {
            icon: <FaTruck className="w-16 h-16" />,
            title: "Moving Services",
            description: "Seamless relocation services to help you settle into your new home",
            link: "/services/moving",
            features: ["Packing Services", "Transportation", "Furniture Assembly", "Storage Solutions"]
        },
        {
            icon: <FaCamera className="w-16 h-16" />,
            title: "Property Marketing",
            description: "Professional photography, videography, and virtual tours",
            link: "/services/marketing",
            features: ["Professional Photography", "Drone Footage", "Virtual Tours", "Social Media Marketing"]
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive real estate solutions tailored to meet your property needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div className="text-yellow-400 mb-6">{service.icon}</div>
                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href={service.link} 
                                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
