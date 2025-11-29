"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Gallery() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
                        <p className="text-xl max-w-3xl mx-auto">Capturing moments of transformation and hope</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 flex items-center justify-center">
                                <i className="fa-solid fa-image text-white text-6xl"></i>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900 mb-2">Classroom Activities</h3>
                                <p className="text-gray-600 text-sm">Students engaged in interactive learning</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-gradient-to-br from-green-400 to-green-600 h-64 flex items-center justify-center">
                                <i className="fa-solid fa-image text-white text-6xl"></i>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900 mb-2">Teacher Training</h3>
                                <p className="text-gray-600 text-sm">Professional development workshops</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-64 flex items-center justify-center">
                                <i className="fa-solid fa-image text-white text-6xl"></i>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900 mb-2">Community Events</h3>
                                <p className="text-gray-600 text-sm">Engaging with local communities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
