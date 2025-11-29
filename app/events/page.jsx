"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Events() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
                        <p className="text-xl max-w-3xl mx-auto">Join us at our events and workshops</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-red-100 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-red-600">25</div>
                                    <div className="text-sm text-red-600">APR</div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Annual Education Summit</h3>
                                    <p className="text-gray-600"><i className="fa-solid fa-location-dot mr-2"></i>Lusaka Convention Center</p>
                                </div>
                            </div>
                            <p className="text-gray-700">Join educators and stakeholders for discussions on improving education outcomes</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
