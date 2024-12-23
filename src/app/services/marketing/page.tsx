import { FaCamera, FaCheckCircle, FaVideo, FaVrCardboard, FaInstagram } from 'react-icons/fa';

export default function PropertyMarketingService() {
    const services = [
        "Professional photography",
        "Aerial drone footage",
        "Virtual property tours",
        "Social media marketing",
        "Property listing optimization",
        "Marketing strategy development"
    ];

    const features = [
        {
            icon: <FaCamera className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Photography",
            description: "High-quality photos that showcase your property's best features"
        },
        {
            icon: <FaVideo className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Videography",
            description: "Cinematic property videos and aerial footage"
        },
        {
            icon: <FaVrCardboard className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Virtual Tours",
            description: "Interactive 3D property walkthroughs"
        },
        {
            icon: <FaInstagram className="w-8 h-8 text-yellow-400 mb-4" />,
            title: "Social Media",
            description: "Strategic content distribution"
        }
    ];

    const featuredVideos = [
        {
            title: "Luxury Villa in Karen",
            videoId: "YOUR_YOUTUBE_VIDEO_ID_1",
            thumbnail: "/images/video-thumb-1.jpg"
        },
        {
            title: "Modern Apartment in Westlands",
            videoId: "YOUR_YOUTUBE_VIDEO_ID_2",
            thumbnail: "/images/video-thumb-2.jpg"
        },
        {
            title: "Penthouse in Kilimani",
            videoId: "YOUR_YOUTUBE_VIDEO_ID_3",
            thumbnail: "/images/video-thumb-3.jpg"
        },
        {
            title: "Family Home in Lavington",
            videoId: "YOUR_YOUTUBE_VIDEO_ID_4",
            thumbnail: "/images/video-thumb-4.jpg"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <FaCamera className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold mb-6">Property Marketing</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Showcase your property with stunning visuals and strategic marketing solutions.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Marketing Solutions</h2>
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
                        <h3 className="text-2xl font-bold mb-4">Ready to Showcase Your Property?</h3>
                        <p className="text-gray-600 mb-6">
                            Let us create stunning visual content that sells.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Marketing Features</h2>
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

                {/* Portfolio Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">Our Video Portfolio</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Check out our collection of property videos on our YouTube channel. Subscribe to see more of our latest property showcases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredVideos.map((video, index) => (
                            <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a 
                            href="https://www.youtube.com/@YourChannel" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                        >
                            <FaVideo className="w-5 h-5" />
                            Visit Our YouTube Channel
                        </a>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-black text-white rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Elevate Your Property's Presence</h2>
                    <p className="mb-8 text-gray-300">
                        Stand out in the market with professional marketing
                    </p>
                    <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
                        Book Marketing Service
                    </button>
                </div>
            </div>

        </div>
    );
}
