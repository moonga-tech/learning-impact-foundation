"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Blog() {
    const posts = [
        {
            category: "Education",
            title: "The Future of Primary Education in Zambia",
            date: "March 20, 2025",
            excerpt: "Exploring innovative approaches to improve learning outcomes and transform education across Zambian schools.",
            author: "Dr. Sarah Mwansa"
        },
        {
            category: "Impact",
            title: "How Data-Driven Assessments Transform Learning",
            date: "March 15, 2025",
            excerpt: "Discover how our assessment programs help identify learning gaps and drive targeted interventions.",
            author: "John Banda"
        },
        {
            category: "Teachers",
            title: "Empowering Teachers Through Professional Development",
            date: "March 10, 2025",
            excerpt: "Stories from teachers who have transformed their classrooms through our training programs.",
            author: "Grace Phiri"
        },
        {
            category: "Community",
            title: "Building Partnerships for Educational Success",
            date: "March 5, 2025",
            excerpt: "How community engagement and parental involvement drive better learning outcomes for students.",
            author: "Peter Zulu"
        },
        {
            category: "Technology",
            title: "Digital Learning in Rural Schools",
            date: "February 28, 2025",
            excerpt: "Bringing technology to underserved communities and bridging the digital divide in education.",
            author: "Mary Tembo"
        },
        {
            category: "Success Stories",
            title: "From Struggling to Thriving: Student Success Stories",
            date: "February 20, 2025",
            excerpt: "Inspiring stories of students who have overcome challenges and achieved academic excellence.",
            author: "David Mulenga"
        }
    ];

    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
                        <p className="text-xl max-w-3xl mx-auto">Insights, stories, and updates from the field</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="p-6">
                                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">{post.category}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{post.title}</h3>
                                    <p className="text-gray-500 text-sm mb-3">{post.date} • {post.author}</p>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <button className="text-orange-500 font-semibold hover:text-orange-600">Read More →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
