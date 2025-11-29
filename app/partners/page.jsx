"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Partners() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-white">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
                        <p className="text-xl max-w-3xl mx-auto">Collaborating with organizations to amplify our impact</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Categories</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                            <i className="fa-solid fa-building text-5xl text-blue-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Partners</h3>
                            <p className="text-gray-700">Businesses supporting our mission through funding and resources</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
                            <i className="fa-solid fa-handshake text-5xl text-green-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">NGO Partners</h3>
                            <p className="text-gray-700">Organizations collaborating on educational initiatives</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
                            <i className="fa-solid fa-landmark text-5xl text-orange-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Government</h3>
                            <p className="text-gray-700">Working with ministries to strengthen education systems</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join us in transforming education across Zambia through strategic partnerships</p>
                        <a href="/contact-us" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg">Partner With Us</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
