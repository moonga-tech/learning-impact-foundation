"use client"
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Mwansa",
            role: "Primary School Teacher",
            text: "The training and resources from Learning Impact Foundation have transformed my teaching. My students are more engaged and their reading skills have improved dramatically.",
            rating: 5
        },
        {
            name: "John Banda",
            role: "School Principal",
            text: "Working with LIF has been a game-changer for our school. The assessment tools help us identify learning gaps and the support materials are excellent.",
            rating: 5
        },
        {
            name: "Grace Phiri",
            role: "Parent",
            text: "My daughter received school supplies and support through LIF. She is now excelling in her studies and dreams of becoming a teacher herself.",
            rating: 5
        }
    ];

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Testimonials</h1>
                        <p className="text-xl max-w-3xl mx-auto">Hear from the people we serve</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                                <div className="border-t pt-4">
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
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
