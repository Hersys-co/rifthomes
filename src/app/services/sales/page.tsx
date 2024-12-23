import { FaHome, FaCheckCircle } from 'react-icons/fa';

export default function PropertySalesService() {
    const benefits = [
        "Access to exclusive property listings",
        "Professional property valuation",
        "Market analysis and insights",
        "Negotiation support",
        "Transaction management",
        "Legal documentation assistance"
    ];

    const process = [
        {
            step: 1,
            title: "Initial Consultation",
            description: "Understand your requirements and preferences"
        },
        {
            step: 2,
            title: "Property Search",
            description: "Curate properties matching your criteria"
        },
        {
            step: 3,
            title: "Property Viewings",
            description: "Arrange and conduct property visits"
        },
        {
            step: 4,
            title: "Offer & Negotiation",
            description: "Handle price negotiations and terms"
        },
        {
            step: 5,
            title: "Transaction Support",
            description: "Guide through documentation and closing"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <FaHome className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold mb-6">Property Sales</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find your dream home with our premium property sales service. We guide you through every step of the buying process.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Choose Our Sales Service</h2>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                    <FaCheckCircle className="text-yellow-400 mr-3" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">Ready to Find Your Dream Home?</h3>
                        <p className="text-gray-600 mb-6">
                            Schedule a consultation with our property experts to start your journey.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                            Contact Us Now
                        </button>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {process.map((step) => (
                            <div key={step.step} className="text-center">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-black text-white rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Start Your Property Journey Today</h2>
                    <p className="mb-8 text-gray-300">
                        Let our experts help you find the perfect property
                    </p>
                    <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}
