"use client"

import Nav from "@/components/navbar";
import Footer from "@/components/footer";
import Accordion from "@/components/accordion";

export default function FAQ() {
    const faqs = [
        { 
            title: "How can I donate to Learning Impact Foundation?", 
            content: "You can donate by contacting us at info@learningimpactfoundation.org or calling +260 97 884 7195. We accept various forms of donations including monetary contributions and in-kind donations." 
        },
        { 
            title: "Where does Learning Impact Foundation operate?", 
            content: "We operate across Zambia, with programs in over 500 schools in both urban and rural areas, focusing on underserved communities." 
        },
        { 
            title: "How can I volunteer with your organization?", 
            content: "Visit our Volunteer page to see current opportunities and submit your application. We welcome volunteers with diverse skills and backgrounds." 
        },
        { title: "Are donations tax-deductible?", content: "Yes, donations to Learning Impact Foundation are tax-deductible. We provide receipts for all contributions." },
        { title: "How do you measure program success?", content: "We use standardized learning assessments, teacher evaluations, and community feedback to measure the impact of our programs." }
    ];

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl max-w-3xl mx-auto">Find answers to common questions about our work</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16">
                    <Accordion items={faqs} />
                </div>
            </div>
            <Footer />
        </>
    );
}
