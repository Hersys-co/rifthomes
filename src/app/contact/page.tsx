'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "Phone",
            details: ["+254 700 000 000", "+254 711 111 111"],
            action: "tel:+254700000000"
        },
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email",
            details: ["info@rifthomes.com", "support@rifthomes.com"],
            action: "mailto:info@rifthomes.com"
        },
        {
            icon: <FaWhatsapp className="w-6 h-6" />,
            title: "WhatsApp",
            details: ["+254 700 000 000"],
            action: "https://wa.me/254700000000"
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "Office Location",
            details: ["Kiamunyi Business Center", "Nakuru, Kenya"],
            action: "https://maps.google.com"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get in touch with our team for any inquiries about our services
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.action}
                            target={info.title === "Office Location" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-yellow-400 mb-4">{info.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                        </a>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-black text-white p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Subject</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="rounded-2xl overflow-hidden h-[600px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
