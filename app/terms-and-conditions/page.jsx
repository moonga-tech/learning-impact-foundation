"use client"

import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
    return (
        <>
            <Nav />
            <div className="pt-16">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Terms and Conditions</h1>
                        <p className="text-xl max-w-3xl mx-auto">Please read these terms carefully before using our services</p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 py-16">
                    <div className="bg-gray-50 rounded-lg p-8 mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Last Updated:</strong> January 2025
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Welcome to Learning Impact Foundation. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Use of Website</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You may use our website for lawful purposes only. You agree not to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Use the website in any way that violates applicable laws or regulations</li>
                                <li>Attempt to gain unauthorized access to any portion of the website</li>
                                <li>Interfere with or disrupt the website or servers</li>
                                <li>Transmit any harmful code, viruses, or malicious software</li>
                                <li>Collect or harvest any information from the website without permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                                All content on this website, including text, graphics, logos, images, and software, is the property of Learning Impact Foundation or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Donations and Payments</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                All donations made to Learning Impact Foundation are:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>Voluntary and non-refundable unless required by law</li>
                                <li>Used to support our educational programs and initiatives in Zambia</li>
                                <li>Processed securely through our payment partners</li>
                                <li>Acknowledged with a receipt for tax purposes where applicable</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Privacy and Data Protection</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We are committed to protecting your privacy. Any personal information collected through our website is handled in accordance with our Privacy Policy. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Third-Party Links</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Accessing third-party links is at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Disclaimer of Warranties</h2>
                            <p className="text-gray-700 leading-relaxed">
                                This website and its content are provided "as is" without warranties of any kind, either express or implied. Learning Impact Foundation does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To the fullest extent permitted by law, Learning Impact Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Volunteer and Partnership Agreements</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Volunteers and partners working with Learning Impact Foundation may be subject to additional terms and agreements. These will be provided separately and must be agreed to before participation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Modifications to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Zambia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zambia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about these Terms and Conditions, please contact us:
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
                                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
