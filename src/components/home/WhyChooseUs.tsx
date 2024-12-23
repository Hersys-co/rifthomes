// 'use client';

// import { motion } from 'framer-motion';
// import { FaHome, FaHandshake, FaStar, FaChartLine } from 'react-icons/fa';

// export default function WhyChooseUs() {
//     const features = [
//         {
//             icon: <FaHome className="w-8 h-8 text-yellow-400" />,
//             title: "Premium Properties",
//             description: "Access to exclusive luxury properties in prime locations across Nakuru county"
//         },
//         {
//             icon: <FaHandshake className="w-8 h-8 text-yellow-400" />,
//             title: "Expert Guidance",
//             description: "Professional real estate agents with deep market knowledge"
//         },
//         {
//             icon: <FaStar className="w-8 h-8 text-yellow-400" />,
//             title: "5-Star Service",
//             description: "Personalized attention and support throughout your property journey"
//         },
//         {
//             icon: <FaChartLine className="w-8 h-8 text-yellow-400" />,
//             title: "Market Leaders",
//             description: "Track record of successful property transactions and satisfied clients"
//         }
//     ];

//     return (
//         <section className="py-16 bg-white">
//             <div className="container mx-auto px-4">
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center mb-12"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RiftHomes</h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Your trusted partner in finding the perfect property in Kenya
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {features.map((feature, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.2 }}
//                             className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
//                         >
//                             <div className="mb-4">{feature.icon}</div>
//                             <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                             <p className="text-gray-600">{feature.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <motion.div 
//                     className="text-center mt-12"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.8 }}
//                 >
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div className="text-center">
//                             <h4 className="text-3xl font-bold text-yellow-400">500+</h4>
//                             <p className="text-gray-600">Properties Sold</p>
//                         </div>
//                         <div className="text-center">
//                             <h4 className="text-3xl font-bold text-yellow-400">1000+</h4>
//                             <p className="text-gray-600">Happy Clients</p>
//                         </div>
//                         <div className="text-center">
//                             <h4 className="text-3xl font-bold text-yellow-400">10+</h4>
//                             <p className="text-gray-600">Years Experience</p>
//                         </div>
//                         <div className="text-center">
//                             <h4 className="text-3xl font-bold text-yellow-400">50+</h4>
//                             <p className="text-gray-600">Expert Agents</p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

'use client';

import { motion } from 'framer-motion';
import { FaHome, FaHandshake, FaStar, FaChartLine } from 'react-icons/fa';

export default function WhyChooseUs() {
    const features = [
        {
            icon: <FaHome className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
            title: "Premium Properties",
            description: "Access to exclusive luxury properties in prime locations across Kenya"
        },
        {
            icon: <FaHandshake className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
            title: "Expert Guidance",
            description: "Professional real estate agents with deep market knowledge"
        },
        {
            icon: <FaStar className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
            title: "5-Star Service",
            description: "Personalized attention and support throughout your property journey"
        },
        {
            icon: <FaChartLine className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
            title: "Market Leaders",
            description: "Track record of successful property transactions and satisfied clients"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Why Choose RiftHomes
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Your trusted partner in finding the perfect property in Nakuru
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="mb-6 flex justify-center">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-20 bg-black rounded-3xl p-12 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="text-center transform hover:scale-105 transition-transform">
                            <h4 className="text-4xl font-bold text-yellow-400 mb-2">100+</h4>
                            <p className="text-gray-300 text-lg">Properties Sold</p>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform">
                            <h4 className="text-4xl font-bold text-yellow-400 mb-2">100+</h4>
                            <p className="text-gray-300 text-lg">Happy Clients</p>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform">
                            <h4 className="text-4xl font-bold text-yellow-400 mb-2">5+</h4>
                            <p className="text-gray-300 text-lg">Years Experience</p>
                        </div>
                        <div className="text-center transform hover:scale-105 transition-transform">
                            <h4 className="text-4xl font-bold text-yellow-400 mb-2">10+</h4>
                            <p className="text-gray-300 text-lg">Expert Agents</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

