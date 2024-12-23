import { FaBed, FaCheckCircle } from 'react-icons/fa';

export default function AirbnbManagementService() {
    const services = [
        "Professional listing optimization",
        "Dynamic pricing strategy",
        "Guest screening and communication",
        "24/7 guest support",
        "Professional cleaning services",
        "Property maintenance"
    ];

    const features = [
        {
            title: "Listing Management",
            description: "Professional photos, compelling descriptions, and optimized pricing on airbnb and social channels"
        },
        {
            title: "Guest Experience",
            description: "Seamless check-in, concierge services, and responsive support"
        },
        {
            title: "Property Care",
            description: "Regular cleaning, maintenance, and inventory management"
        },
        {
            title: "Revenue Optimization",
            description: "Market analysis and dynamic pricing adjustments"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <FaBed className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold mb-6">Airbnb Management</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Maximize your short-term rental income with our comprehensive Airbnb management services.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Full-Service Management</h2>
                        <ul className="space-y-4">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center">
                                    <FaCheckCircle className="text-yellow-400 mr-3" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Rental Income?</h3>
                        <p className="text-gray-600 mb-6">
                            Let us handle your Airbnb property while you enjoy passive income.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Management Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-black text-white rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Transform Your Property into a Profitable Airbnb</h2>
                    <p className="mb-8 text-gray-300">
                        Join our network of successful Airbnb properties
                    </p>
                    <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                        Contact Us Now
                    </button>
                </div>
            </div>
        </div>
    );
}
