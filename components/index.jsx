"use client"

import Image from "next/image"
import Link from "next/link"
import { TypingAnimation } from "@/components/ui/typing-animation";
import Swal from "sweetalert2"
import Accordion from "./accordion";
import Icon from "./icon";

/* images */
import MissionImage from "../public/images/mission.jpg"
import VisionImage from "../public/images/vision.jpg"
import Elijah from "../public/images/executives/elijah.jpeg"
import Siame from "../public/images/executives/siame.jpg"
import Moonga from "../public/images/executives/moonga.jpg"

export default function Index() {
const joinUs = () => {
Swal.fire({
title: "Contact the Administration!",
html: `<h2>+260 97 884 7195 | +260 97 889 8985</h2>
<h1>info@learningimpactfoundation.org</h1><b>Join Us Now!</b>`,
icon: "success"
});
}

const stats = [
{ number: "500+", label: "Schools Reached", icon: "fa-solid fa-school" },
{ number: "50K+", label: "Students Impacted", icon: "fa-solid fa-user-graduate" },
{ number: "2K+", label: "Teachers Trained", icon: "fa-solid fa-chalkboard-user" },
{ number: "85%", label: "Improvement Rate", icon: "fa-solid fa-chart-line" }
];

const coreValues = [
{ title: 'Integrity', content: 'We uphold honesty and transparency in all our operations and partnerships.' },
{ title: 'Excellence', content: 'We strive for the highest quality in everything we do, from teaching materials to program delivery.' },
{ title: 'Inclusivity', content: 'We promote diversity and inclusion in our programs and program delivery' },
{ title: 'Collaboration', content: 'We work respectfully with communities, schools, and partners to achieve shared goals.' },
{ title: 'Impact-Driven', content: 'We focus on measurable improvements and evidence-based interventions.' },
{ title: 'Empowerment', content: 'We build capacity for teachers and learners to create sustainable change.' },
{ title: 'Equity', content: 'We prioritize the most vulnerable and underserved communities in our programs.' },
{ title: 'Innovation', content: 'We embrace creative, evidence-based solutions to educational challenges.' },
{ title: 'Sustainability', content: 'We promote lasting change that continues beyond external support.' }
];

const executiveMembers = [
    { name: "Elijah Mwelwa", title: "President", image: Elijah },
    { name: "Andy Siame", title: "Executive Director", image: Siame },
    { name: "Moonga Manongo", title: "Software Engineer", image: Moonga }
];

return (
<>
    <div className="banner relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white drop-shadow-lg">Welcome to Learning Impact Foundation</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-orange-400 mb-8">
                <TypingAnimation duration={80} words={["Empowered Today", "Lead Tomorrow"
                    , "Transforming Futures" ]} loop />
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/donate"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <i className="fa-solid fa-heart mr-2"></i>Donate Now
                </Link>
                <Link href="/about"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 transition-all duration-300">
                <i className="fa-solid fa-arrow-right mr-2"></i>Learn More
                </Link>
            </div>
        </div>
    </div>

    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                <div key={index}
                    className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-orange-500">
                    <i className={`${stat.icon} text-5xl text-orange-500 mb-4`}></i>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
                ))}
            </div>

            <div id="about-us" className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    <i className="fa-solid fa-circle-info text-orange-500 mr-3"></i>
                    About Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Learning Impact Foundation (LIF) is a Zambian-based non-profit organization advancing inclusive
                    development through education, innovation, advocacy, and community empowerment. We work to equip
                    young people, women, and communities with the skills, protection, and opportunities they need to
                    thrive in a rapidly evolving digital and green economy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our integrated approach combines digital education and STEM, youth and women’s empowerment,
                    entrepreneurship, health and nutrition, climate-smart agriculture, and community innovation, while
                    actively advocating against gender-based violence, early marriage, and hunger, and promoting safe
                    learning environments and equitable access to quality education.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                    Through strong partnerships with schools, communities, government, and the private sector, LIF
                    designs and scales people-centered, data-informed solutions that strengthen education systems,
                    protect vulnerable groups, create jobs, improve wellbeing, and support sustainable development in
                    Zambia and across the region.
                </p>
            </div>
        </div>
    </section>

    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 mb-16" id="our-mission">
                <div className="flex flex-col justify-center order-2 md:order-1">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="bg-orange-500 p-3 rounded-lg">
                            <i className="fa-solid fa-bullseye text-2xl"></i>
                        </div>
                        <h2 className="text-4xl font-bold">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Our mission is to transform education and empower communities by advancing inclusive, innovative, and sustainable solutions that equip young people and women with the skills, protection, and opportunities to thrive.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <Image src={MissionImage} alt="Learning Impact Mission"
                        className="rounded-2xl shadow-2xl w-full h-auto" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16" id="our-vision">
                <div>
                    <Image src={VisionImage} alt="Learning Impact Vision"
                        className="rounded-2xl shadow-2xl w-full h-auto" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="bg-orange-500 p-3 rounded-lg">
                            <i className="fa-solid fa-eye text-2xl"></i>
                        </div>
                        <h2 className="text-4xl font-bold">Our Vision</h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        A just, educated, and resilient society where every young person and woman is safe, empowered, and able to reach their full potential in a digital, green, and inclusive economy.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div
                className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fa-solid fa-lightbulb text-4xl text-white"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Exist</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
                <p>
                    Too many young people and women face barriers that prevent them from learning, staying safe, and building sustainable livelihoods. Inequality in education, gender-based violence, early marriage, hunger, limited digital access, and unemployment continue to hold back individuals, families, and communities.
                </p>

                <p>
                    Learning Impact Foundation exists to break these cycles. We exist to ensure that education leads to opportunity, that innovation serves people, and that communities have the voice, skills, and systems needed to thrive. Through combining education, advocacy, technology, and community-driven solutions, we address root causes—not just symptoms—and create pathways toward safety, dignity, and lasting economic and social impact.
                </p>
            </div>
        </div>
    </section>

    <section id="our-core-values" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600">The principles that guide our work and define our commitment</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
                <Accordion items={coreValues} />
            </div>
        </div>
    </section>

    <section id="executive-team" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Leadership</h2>
                <h2 className="text-base sm:text-lg text-gray-600 text-center">Meet the dedicated team leading our mission</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {executiveMembers.map((member, index) => (
                <div key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-gray-200">
                        <Image src={member.image} alt={member.name} fill className="object-cover w-full h-full" />
                    </div>
                    <div className="p-4 sm:p-6 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <h3 className="text-orange-500 font-semibold text-sm sm:text-base text-center">{member.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>

    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-10 text-orange-100">
                Join us in transforming education across Zambia. Whether you are a donor, partner, teacher, or community
                member, your support makes a real difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://chat.whatsapp.com/Gm3Vqy4wK1VCmgQeQ5Pf8O" target="_blank">
                    <button
                        className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <i className="fa-solid fa-users mr-2"></i>Join Us
                    </button>
                </a>

                <Link href="/volunteer"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-10 rounded-lg border-2 border-white/30 transition-all duration-300">
                <i className="fa-solid fa-hand-holding-heart mr-2"></i>Volunteer
                </Link>
            </div>
        </div>
    </section>
</>
)
}
