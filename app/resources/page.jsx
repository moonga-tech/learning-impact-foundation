"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Resources() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Educational Resources</h1>
                        <p className="text-xl max-w-3xl mx-auto">Free materials for teachers, students, and parents</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <i className="fa-solid fa-book text-4xl text-emerald-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Teaching Guides</h3>
                            <p className="text-gray-700 mb-4">Comprehensive lesson plans and teaching materials for primary education</p>
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg">Download</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <i className="fa-solid fa-file-pdf text-4xl text-red-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment Tools</h3>
                            <p className="text-gray-700 mb-4">Standardized tests and evaluation frameworks for literacy and numeracy</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">Download</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <i className="fa-solid fa-chart-bar text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Reports</h3>
                            <p className="text-gray-700 mb-4">Annual learning outcome reports and educational research findings</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">Download</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <i className="fa-solid fa-video text-4xl text-purple-600 mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Videos</h3>
                            <p className="text-gray-700 mb-4">Professional development videos for teachers and educators</p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
