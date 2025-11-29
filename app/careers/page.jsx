"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";
import Swal from "sweetalert2";

export default function Careers() {
    const handleApply = (position) => {
        Swal.fire({
            title: "Apply for " + position,
            html: `<p>Send your CV and cover letter to:</p><h3>info@learningimpactfoundation.org</h3>`,
            icon: "info"
        });
    };

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
                        <p className="text-xl max-w-3xl mx-auto">Build your career while making a difference in education</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Coordinator</h3>
                            <p className="text-gray-600 mb-2"><i className="fa-solid fa-briefcase text-cyan-600 mr-2"></i>Full-time</p>
                            <p className="text-gray-600 mb-4"><i className="fa-solid fa-location-dot text-cyan-600 mr-2"></i>Lusaka, Zambia</p>
                            <p className="text-gray-700 mb-6">Lead program implementation and coordinate with schools and partners</p>
                            <button onClick={() => handleApply("Program Coordinator")} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg">Apply Now</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Specialist</h3>
                            <p className="text-gray-600 mb-2"><i className="fa-solid fa-briefcase text-cyan-600 mr-2"></i>Full-time</p>
                            <p className="text-gray-600 mb-4"><i className="fa-solid fa-location-dot text-cyan-600 mr-2"></i>Various Locations</p>
                            <p className="text-gray-700 mb-6">Develop curriculum materials and support teacher training initiatives</p>
                            <button onClick={() => handleApply("Education Specialist")} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg">Apply Now</button>
                        </div>
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <div>
                                <i className="fa-solid fa-heart text-5xl mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Meaningful Work</h3>
                                <p className="text-orange-100">Make a real impact on education</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-users text-5xl mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Great Team</h3>
                                <p className="text-orange-100">Work with passionate professionals</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-chart-line text-5xl mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Career Growth</h3>
                                <p className="text-orange-100">Develop your skills and advance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
