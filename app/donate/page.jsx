"use client"

import { useState } from "react";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Donate() {
    const [amount, setAmount] = useState("");
    const [customAmount, setCustomAmount] = useState("");

    const donationOptions = [
        { amount: 100, impact: "Provides textbooks for 5 students" },
        { amount: 250, impact: "Trains 1 teacher for a month" },
        { amount: 500, impact: "Supports a classroom for a term" },
        { amount: 1000, impact: "Equips a school library" }
    ];

    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Make a Difference</h1>
                        <p className="text-xl max-w-3xl mx-auto">Your donation helps transform education and change lives across Zambia</p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Donate?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">📚</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Quality Education</h3>
                                        <p className="text-gray-600">Provide essential learning materials and resources</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">👨🏫</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Teacher Support</h3>
                                        <p className="text-gray-600">Fund professional development programs</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">🏫</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Infrastructure</h3>
                                        <p className="text-gray-600">Improve learning environments in schools</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">📊</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Impact Tracking</h3>
                                        <p className="text-gray-600">Data-driven programs that deliver results</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white rounded-lg shadow-xl p-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Choose Your Impact</h2>
                            <div className="space-y-3 mb-6">
                                {donationOptions.map((option) => (
                                    <button
                                        key={option.amount}
                                        onClick={() => setAmount(option.amount)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                            amount === option.amount
                                                ? "border-orange-500 bg-orange-50"
                                                : "border-gray-200 hover:border-orange-300"
                                        }`}
                                    >
                                        <div className="font-bold text-lg text-gray-900">K{option.amount}</div>
                                        <div className="text-sm text-gray-600">{option.impact}</div>
                                    </button>
                                ))}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Custom Amount (ZMW)</label>
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setAmount("");
                                    }}
                                    placeholder="Enter amount"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                                Donate Now
                            </button>

                            <p className="text-sm text-gray-500 text-center mt-4">
                                All donations are tax-deductible
                            </p>
                        </div> */}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Other Ways to Give</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl mb-3">🏦</div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900">Bank Transfer</h3>
                                <h6 className="text-gray-600 text-sm">Contact us for bank details</h6>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">📱</div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900">Mobile Money</h3>
                                <h6 className="text-gray-600 text-sm">+260 97 884 7195</h6>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">🎁</div>
                                <h3 className="font-bold text-lg mb-2 text-gray-900">In-Kind Donations</h3>
                                <h6 className="text-gray-600 text-sm">Books, supplies, equipment</h6>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">Questions about donating?</p>
                        <a href="/contact-us" className="text-orange-500 font-semibold hover:text-orange-600">
                            Contact Us →
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
