"use client"

import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Impact() {
    const stats = [
        { number: "500+", label: "Schools Reached", icon: "🏫" },
        { number: "50,000+", label: "Students Impacted", icon: "👨‍🎓" },
        { number: "2,000+", label: "Teachers Trained", icon: "👨🏫" },
        { number: "15+", label: "Districts Covered", icon: "📍" }
    ];

    const outcomes = [
        {
            title: "Improved Literacy Rates",
            percentage: "35%",
            description: "Increase in reading proficiency among Grade 3 students in program schools"
        },
        {
            title: "Better Numeracy Skills",
            percentage: "42%",
            description: "Improvement in mathematics performance across participating schools"
        },
        {
            title: "Teacher Effectiveness",
            percentage: "78%",
            description: "Of trained teachers report improved classroom management and teaching methods"
        },
        {
            title: "Student Attendance",
            percentage: "25%",
            description: "Increase in daily attendance rates in schools with our programs"
        }
    ];

    const stories = [
        {
            name: "Chanda's Story",
            role: "Grade 4 Student",
            quote: "I used to struggle with reading, but now I can read storybooks on my own. I want to become a teacher when I grow up.",
            location: "Lusaka"
        },
        {
            name: "Mr. Mwansa",
            role: "Primary School Teacher",
            quote: "The training programs have transformed how I teach. My students are more engaged and their performance has improved significantly.",
            location: "Ndola"
        },
        {
            name: "Mrs. Banda",
            role: "School Principal",
            quote: "The learning materials and teacher support have made a real difference in our school. We're seeing better results every term.",
            location: "Kitwe"
        }
    ];

    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Our Impact</h1>
                        <p className="text-xl max-w-3xl mx-auto">Measuring success through real results and transformed lives</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="text-5xl mb-4">{stat.icon}</div>
                                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                                <div className="text-gray-700 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Learning Outcomes</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {outcomes.map((outcome, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8">
                                    <div className="text-5xl font-bold text-orange-500 mb-4">{outcome.percentage}</div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{outcome.title}</h3>
                                    <p className="text-gray-700">{outcome.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Success Stories</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {stories.map((story, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                                    <div className="text-4xl mb-4">💬</div>
                                    <p className="text-gray-600 italic mb-6">"{story.quote}"</p>
                                    <div className="border-t pt-4">
                                        <div className="font-bold text-gray-900">{story.name}</div>
                                        <div className="text-sm text-gray-600">{story.role}</div>
                                        <div className="text-sm text-orange-500 mt-1">📍 {story.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Be Part of Our Impact</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Join us in transforming education and creating lasting change in communities across Zambia
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/donate" className="px-8 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Donate Now
                            </a>
                            <a href="/volunteer" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all">
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
