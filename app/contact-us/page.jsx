"use client"

import { useState } from "react";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl max-w-3xl mx-auto">Get in touch with us. We'd love to hear from you</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
                            <a href="tel:+260978847195" className="text-orange-500 hover:text-orange-600">+260 97 884 7195</a>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">✉️</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
                            <a href="mailto:info@learningimpactfoundation.org" className="text-orange-500 hover:text-orange-600">info@learningimpactfoundation.org</a>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">📍</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Address</h3>
                            <p className="text-gray-600">Lusaka, Zambia</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="6"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 