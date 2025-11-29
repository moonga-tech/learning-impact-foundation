"use client"
import Nav from "../components/navbar";
import Footer from "../components/footer";

export default function Blog() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
                        <p className="text-xl max-w-3xl mx-auto">Insights and stories from the field</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Education</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">The Future of Primary Education in Zambia</h3>
                            <p className="text-gray-600 text-sm mb-4">March 20, 2025</p>
                            <p className="text-gray-700">Exploring innovative approaches to improve learning outcomes...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
