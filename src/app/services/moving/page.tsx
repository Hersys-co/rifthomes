import { FaTruck, FaCheckCircle, FaBox, FaTools, FaWarehouse } from 'react-icons/fa';

export default function MovingService() {
    const services = [
        "Professional packing and unpacking",
        "Secure transportation",
        "Furniture assembly and disassembly",
        "Storage solutions",
        "Special item handling",
        "Insurance coverage"
    ];

    const features = [
        {
            icon: <FaBox className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Packing Services",
            description: "Expert packing with quality materials"
        },
        {
            icon: <FaTruck className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Transportation",
            description: "Safe and timely delivery"
        },
        {
            icon: <FaTools className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Assembly",
            description: "Professional furniture handling"
        },
        {
            icon: <FaWarehouse className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Storage",
            description: "Secure storage facilities"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <FaTruck className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold mb-6">Moving Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Professional moving services to make your relocation smooth and stress-free.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Comprehensive Moving Solutions</h2>
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
                        <h3 className="text-2xl font-bold mb-4">Planning Your Move?</h3>
                        <p className="text-gray-600 mb-6">
                            Get a customized moving plan tailored to your needs.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                            Request Quote
                        </button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Moving Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                                <div className="flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-black text-white rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready for a Smooth Move?</h2>
                    <p className="mb-8 text-gray-300">
                        Let our experts handle your relocation
                    </p>
                    <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                        Schedule Moving Service
                    </button>
                </div>
            </div>
        </div>
    );
}
