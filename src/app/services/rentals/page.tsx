import { FaKey, FaCheckCircle } from 'react-icons/fa';

export default function RentalPropertiesService() {
    const benefits = [
        "Extensive rental property portfolio",
        "Flexible lease terms",
        "Property viewing arrangements",
        "Tenant screening services",
        "Lease agreement preparation",
        "Move-in coordination"
    ];

    const process = [
        {
            step: 1,
            title: "Requirements Discussion",
            description: "Define your ideal rental property"
        },
        {
            step: 2,
            title: "Property Matching",
            description: "Find properties that meet your criteria"
        },
        {
            step: 3,
            title: "Viewings",
            description: "Tour selected properties"
        },
        {
            step: 4,
            title: "Application",
            description: "Complete rental application process"
        },
        {
            step: 5,
            title: "Move In",
            description: "Sign lease and receive keys"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <FaKey className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold mb-6">Rental Properties</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover your perfect rental home with our premium property selection and seamless rental process.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Benefits of Renting With Us</h2>
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
                        <h3 className="text-2xl font-bold mb-4">Looking for Your Next Home?</h3>
                        <p className="text-gray-600 mb-6">
                            Let us help you find the perfect rental property that matches your lifestyle.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                            Browse Properties
                        </button>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Rental Process</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Find Your Next Rental Home</h2>
                    <p className="mb-8 text-gray-300">
                        Start your rental journey with RiftHomes today
                    </p>
                    <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                        Contact Us Now
                    </button>
                </div>
            </div>
        </div>
    );
}
