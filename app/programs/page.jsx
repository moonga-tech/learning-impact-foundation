"use client"

import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Programs() {
    const programs = [
        {
            icon: "📊",
            title: "Learning Assessment",
            description: "Comprehensive standardized assessments to measure student learning outcomes and identify areas for improvement across literacy and numeracy.",
            features: ["Baseline & endline testing", "Data-driven insights", "Progress tracking"]
        },
        {
            icon: "📚",
            title: "Educational Resources",
            description: "Providing schools with quality teaching and learning materials including textbooks, workbooks, and digital resources.",
            features: ["Curriculum-aligned materials", "Teacher guides", "Student workbooks"]
        },
        {
            icon: "👨‍🏫",
            title: "Teacher Training",
            description: "Professional development programs to enhance teaching methodologies and classroom management skills.",
            features: ["Workshops & seminars", "Mentorship programs", "Continuous support"]
        },
        {
            icon: "💻",
            title: "Digital Learning",
            description: "Integrating technology into classrooms to enhance learning experiences and prepare students for the digital age.",
            features: ["Computer literacy", "E-learning platforms", "Digital content"]
        },
        {
            icon: "🏫",
            title: "School Infrastructure",
            description: "Supporting schools with infrastructure improvements to create conducive learning environments.",
            features: ["Classroom renovations", "Library setup", "Learning spaces"]
        },
        {
            icon: "👥",
            title: "Community Engagement",
            description: "Working with parents and communities to create supportive environments for children's education.",
            features: ["Parent workshops", "Community meetings", "Local partnerships"]
        }
    ];

    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
                        <p className="text-xl max-w-3xl mx-auto">Comprehensive initiatives designed to transform education and improve learning outcomes</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-4">{program.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
                                <p className="text-gray-600 mb-6">{program.description}</p>
                                <ul className="space-y-2">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="text-orange-500 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-orange-50 rounded-lg p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Get Involved</h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                            Support our programs and help us reach more schools and students across Zambia
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/donate" className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                Donate Now
                            </a>
                            <a href="/volunteer" className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all">
                                Volunteer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
