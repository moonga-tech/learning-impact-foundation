"use client"

import Nav from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">About Us</h1>
                        <p className="text-xl max-w-3xl mx-auto">Transforming education across Zambia through assessment, resources, and teacher support</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Learning Impact Foundation is dedicated to improving primary education outcomes across Zambia by providing comprehensive learning assessments, quality educational resources, and ongoing teacher professional development.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We believe every child deserves access to quality education that empowers them to reach their full potential and contribute meaningfully to their communities.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                            <Image src="/images/mission.jpg" alt="Our Mission" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                            <Image src="/images/vision.jpg" alt="Our Vision" fill className="object-cover" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                We envision a Zambia where every child has access to quality education that equips them with the knowledge, skills, and confidence to succeed in life.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Through data-driven interventions and community partnerships, we aim to create lasting change in the education sector and improve learning outcomes nationwide.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-12 mb-20">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Impact</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
                                <p className="text-xl text-gray-700">Schools Reached</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-orange-500 mb-2">50,000+</div>
                                <p className="text-xl text-gray-700">Students Impacted</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-orange-500 mb-2">2,000+</div>
                                <p className="text-xl text-gray-700">Teachers Trained</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
                                <p className="text-gray-600">Committed to the highest standards in education</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Collaboration</h3>
                                <p className="text-gray-600">Working together with communities and partners</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-4xl mb-4">💡</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
                                <p className="text-gray-600">Using data and technology to drive change</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-4xl mb-4">❤️</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Integrity</h3>
                                <p className="text-gray-600">Transparent and accountable in all we do</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
