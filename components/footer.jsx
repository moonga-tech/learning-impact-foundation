import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-600">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1 text-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/images/favicon-logo.png" alt="LIF Logo" width={50} height={50} className="rounded-lg" />
                            <h2 className="text-2xl font-bold text-white">LIF</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Transforming education across Zambia through evidence-based interventions and community partnerships.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://web.facebook.com/profile.php?id=61579829489995" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>About Us</Link></li>
                            <li><Link href="/programs" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Programs</Link></li>
                            <li><Link href="/impact" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Impact</Link></li>
                            <li><Link href="/volunteer" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Volunteer</Link></li>
                            <li><Link href="/careers" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Careers</Link></li>
                            <li><Link href="/faq" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Resources
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="/news" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>News & Updates</Link></li>
                            <li><Link href="/blog" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Blog</Link></li>
                            <li><Link href="/events" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Events</Link></li>
                            <li><Link href="/gallery" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Gallery</Link></li>
                            <li><Link href="/resources" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Downloads</Link></li>
                            <li><Link href="/testimonials" className="hover:text-orange-400 transition-colors flex items-center group"><i className="fa-solid fa-chevron-right text-orange-500 mr-2 text-xs group-hover:translate-x-1 transition-transform"></i>Testimonials</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Contact Info
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fa-solid fa-location-dot text-orange-500 mt-1 mr-3"></i>
                                <span>Lusaka, Zambia</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-phone text-orange-500 mt-1 mr-3"></i>
                                <div>
                                    <a href="tel:+260978847195" className="hover:text-orange-400 transition-colors block">+260 97 884 7195</a>
                                    <a href="tel:+260978898985" className="hover:text-orange-400 transition-colors block">+260 97 889 8985</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-envelope text-orange-500 mt-1 mr-3"></i>
                                <a href="mailto:info@learningimpactfoundation.org" className="hover:text-orange-400 transition-colors break-all">info@learningimpactfoundation.org</a>
                            </li>
                        </ul>
                        <Link href="/donate" className="mt-6 inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            <i className="fa-solid fa-heart mr-2"></i>Donate Now
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-gray-600">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 Learning Impact Foundation. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</Link>
                            <Link href="/contact-us" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</Link>
                        </div>
                        <p className="text-gray-500 text-xs">
                            Designed by <a href="https://web.facebook.com/profile.php?id=61571456295967" target="_blank" className="text-orange-400 font-semibold">Manongo Tech</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
