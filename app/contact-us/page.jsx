import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() 
{
    return (
        <>
            <Nav />
            <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-6">We would love to hear from you! Please reach out to us using the contact information below.</p>
                
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Contact Information */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-2">Phone: <a href="tel:+260978847195" className="text-blue-600 hover:underline">+260 97 884 7195 | +260 97 889 8985</a></p> 
                        <p className="text-gray-600 mb-4">Email: <a href="mailto:info@learninglmpactfoundation.org" className="text-blue-600 hover:underline">info@learninglmpactfoundation.org</a></p>
                        <p className="text-gray-600">Address: Plot 24 Robert Watyakeni Street, Nyumba, Lusaka, Zambia</p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" required />
                            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" required />
                            <textarea placeholder="Your Message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Hours</h2>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Weekends: Closed</p>
                </div>
            </div>
            <Footer />
        </>
    )
} 