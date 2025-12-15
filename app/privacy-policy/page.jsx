"use client"

import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-xl max-w-3xl mx-auto">Your privacy is important to us</p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 py-16">
                    <div className="bg-gray-50 rounded-lg p-8 mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Last Updated:</strong> January 2025
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Learning Impact Foundation is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Personal identification information (name, email address, phone number)</li>
                                <li>Donation and payment information</li>
                                <li>Volunteer application details</li>
                                <li>Website usage data and analytics</li>
                                <li>Communication preferences</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">We use collected information to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Process donations and issue receipts</li>
                                <li>Communicate about our programs and impact</li>
                                <li>Respond to inquiries and provide support</li>
                                <li>Process volunteer applications</li>
                                <li>Improve our website and services</li>
                                <li>Send newsletters and updates (with your consent)</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Information Sharing</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information. We may share information with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Payment processors for donation transactions</li>
                                <li>Service providers who assist our operations</li>
                                <li>Legal authorities when required by law</li>
                                <li>Partners with your explicit consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Cookies and Tracking</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Access your personal information</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website is not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Third-Party Links</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Data Retention</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Continued use of our website constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For questions about this Privacy Policy or to exercise your rights, contact us:
                            </p>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <p className="text-gray-700 mb-2"><strong>Learning Impact Foundation</strong></p>
                                <p className="text-gray-700 mb-2">Lusaka, Zambia</p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@learningimpactfoundation.org" className="text-orange-500 hover:text-orange-600">info@learningimpactfoundation.org</a></p>
                                <p className="text-gray-700 mb-2">Phone: +260 97 884 7195 | +260 97 889 8985</p>
                            </div>
                        </section>

                        <section className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-500">
                            <p className="text-gray-700 leading-relaxed">
                                By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
