"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function News() {
    const articles = [
        {
            date: "March 15, 2025",
            title: "500 Schools Join Learning Impact Program",
            excerpt: "We are thrilled to announce that 500 schools across Zambia have now joined our comprehensive education improvement program.",
            category: "Milestone"
        },
        {
            date: "March 10, 2025",
            title: "New Teacher Training Initiative Launched",
            excerpt: "Our latest professional development program aims to train 2,000 teachers in modern pedagogical methods.",
            category: "Programs"
        },
        {
            date: "March 5, 2025",
            title: "Partnership with Ministry of Education",
            excerpt: "Learning Impact Foundation signs MOU with the Ministry of Education to expand literacy programs nationwide.",
            category: "Partnership"
        }
    ];

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
                        <p className="text-xl max-w-3xl mx-auto">Stay informed about our latest initiatives and achievements</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="space-y-8">
                        {articles.map((article, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-semibold">{article.category}</span>
                                    <span className="text-gray-500 text-sm">{article.date}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">{article.excerpt}</p>
                                <button className="text-pink-600 font-semibold hover:text-pink-700">Read More →</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
