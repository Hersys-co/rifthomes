// 'use client';

// import { useState } from 'react';

// export default function Hero() {
//     const [searchParams, setSearchParams] = useState({
//         propertyType: 'all',
//         location: '',
//         priceRange: 'all',
//         purpose: 'buy'
//     });

//     const handleSearch = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle search logic here
//         console.log('Search params:', searchParams);
//     };

//     return (
//         <div className="relative h-[80vh] bg-cover bg-center" 
//              style={{backgroundImage: "url('/images/hero-home.jpg')"}}>
//             <div className="absolute inset-0 bg-black/50">
//                 <div className="container mx-auto px-4 h-full flex flex-col justify-center">
//                     <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
//                         Find Your Dream Home in Kenya
//                     </h1>
//                     <p className="text-xl text-white mb-8">
//                         Discover luxury properties in prime locations
//                     </p>
                    
//                     {/* Enhanced Search Component */}
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl">
//                         <form onSubmit={handleSearch} className="space-y-4">
//                             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                                 {/* Property Type Select */}
//                                 <select 
//                                     className="w-full p-3 border rounded-md"
//                                     value={searchParams.propertyType}
//                                     onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
//                                 >
//                                     <option value="all">Property Type</option>
//                                     <option value="house">House</option>
//                                     <option value="apartment">Apartment</option>
//                                     <option value="commercial">Commercial</option>
//                                     <option value="land">Land</option>
//                                 </select>

//                                 {/* Location Input */}
//                                 <input 
//                                     type="text"
//                                     placeholder="Location"
//                                     className="w-full p-3 border rounded-md"
//                                     value={searchParams.location}
//                                     onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
//                                 />

//                                 {/* Price Range Select */}
//                                 <select 
//                                     className="w-full p-3 border rounded-md"
//                                     value={searchParams.priceRange}
//                                     onChange={(e) => setSearchParams({...searchParams, priceRange: e.target.value})}
//                                 >
//                                     <option value="all">Price Range</option>
//                                     <option value="0-5m">0 - 5M KES</option>
//                                     <option value="5m-10m">5M - 10M KES</option>
//                                     <option value="10m-20m">10M - 20M KES</option>
//                                     <option value="20m+">20M+ KES</option>
//                                 </select>

//                                 {/* Search Button */}
//                                 <button 
//                                     type="submit"
//                                     className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold p-3 rounded-md transition-colors"
//                                 >
//                                     Search
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
    const [searchParams, setSearchParams] = useState({
        propertyType: 'all',
        location: '',
        priceRange: 'all',
        purpose: 'buy'
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search params:', searchParams);
    };

    return (
        <div className="relative h-[90vh]">
            <Image
                src="/images/hero-home.jpg"
                alt="Luxury home in Kenya"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <motion.h1 
                            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            Find Your Dream Home in Nakuru
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Discover properties in all locations around Nakuru
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-2xl max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <form onSubmit={handleSearch} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <motion.select 
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full p-3 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                                    value={searchParams.propertyType}
                                    onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
                                >
                                    <option value="all">Property Type</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="land">Land</option>
                                </motion.select>

                                <motion.input 
                                    whileHover={{ scale: 1.02 }}
                                    type="text"
                                    placeholder="Location"
                                    className="w-full p-3 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                                    value={searchParams.location}
                                    onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                                />

                                <motion.select 
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full p-3 border rounded-md bg-gradient-to-r from-gray-50 to-white"
                                    value={searchParams.priceRange}
                                    onChange={(e) => setSearchParams({...searchParams, priceRange: e.target.value})}
                                >
                                    <option value="all">Price Range</option>
                                    <option value="0-5m">0 - 5M KES</option>
                                    <option value="5m-10m">5M - 10M KES</option>
                                    <option value="10m-20m">10M - 20M KES</option>
                                    <option value="20m+">20M+ KES</option>
                                </motion.select>

                                <motion.button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold p-3 rounded-md transition-all hover:shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Search
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                    <motion.div 
                      className="flex gap-4 mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                  >
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-black font-bold"
                      >
                          View Properties
                      </motion.button>
                      <motion.button 
                          whileHover={{ scale: 1.05 }}
                          className="px-8 py-3 border-2 border-white text-white rounded-full"
                      >
                          Learn More
                      </motion.button>
                  </motion.div>
                </div>
            </div>
        </div>
    );
}
