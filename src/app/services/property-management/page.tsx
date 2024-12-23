import { FaBuildingUser} from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

export default function PropertyManagementService() {
    const services = [
        "Rent collection and financial reporting",
        "Property maintenance and repairs",
        "Tenant screening and placement",
        "Regular property inspections",
        "24/7 emergency response",
        "Legal compliance management"
    ];

    const features = [
        {
            title: "Financial Management",
            description: "Comprehensive rent collection, accounting, and reporting services"
        },
        {
            title: "Maintenance",
            description: "Proactive maintenance and swift repair coordination"
        },
        {
            title: "Tenant Relations",
            description: "Professional tenant communication and issue resolution"
        },
        {
            title: "Compliance",
            description: "Ensuring property meets all legal requirements"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <FaBuildingUser className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold mb-6">Property Management</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Professional property management services to maximize your investment returns and minimize your stress.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Management Services</h2>
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
                        <h3 className="text-2xl font-bold mb-4">Ready to Simplify Your Property Management?</h3>
                        <p className="text-gray-600 mb-6">
                            Let us handle the day-to-day management while you focus on your investment growth.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Maximize Your Property's Potential</h2>
                    <p className="mb-8 text-gray-300">
                        Join our portfolio of successfully managed properties
                    </p>
                    <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}
