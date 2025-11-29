"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";
import Swal from "sweetalert2";

export default function Volunteer() {
    const handleApply = (role) => {
        Swal.fire({
            title: "Apply for " + role,
            html: `<p>Thank you for your interest! Please send your application to:</p><h3>info@learningimpactfoundation.org</h3>`,
            icon: "info"
        });
    };

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Volunteer With Us</h1>
                        <p className="text-xl max-w-3xl mx-auto">Share your skills and passion to make a lasting impact on education in Zambia</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Volunteer?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-heart text-2xl text-teal-600"></i>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Make a Difference</h3>
                                <p className="text-gray-600">Directly impact children lives and futures</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-users text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Build Connections</h3>
                                <p className="text-gray-600">Join a community of passionate changemakers</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-chart-line text-2xl text-orange-600"></i>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Grow Professionally</h3>
                                <p className="text-gray-600">Gain valuable experience and skills</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Opportunities</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Volunteer</h3>
                            <p className="text-gray-700 mb-4">Work directly with students and teachers to improve learning outcomes</p>
                            <button onClick={() => handleApply("Education Volunteer")} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg">Apply Now</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Assistant</h3>
                            <p className="text-gray-700 mb-4">Support program implementation and monitoring activities</p>
                            <button onClick={() => handleApply("Program Assistant")} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
