"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between bg-white" role="navigation" aria-label="Main navigation">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/favicon-logo.png" alt="Learning Impact Zambia" width={40} height={10} className="logo-img" />
                    </Link>
                </div>

                <button
                    className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-controls="primary-navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    aria-label="Toggle navigation"
                >
                    <svg className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </button>

                <div id="primary-navigation" className={`window-view w-full xl:flex xl:items-center xl:w-auto`}>
                    <ul className="flex gap-6 text-sm items-center"> 
                        <li><Link href="/" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Home</Link></li>
                        <li><Link href="/about" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">About</Link></li>
                        <li><Link href="/programs" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Programs</Link></li>
                        <li><Link href="/impact" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Impact</Link></li>
                        <li><Link href="/donate" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Donate</Link></li>
                        <li><Link href="/volunteer" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Volunteer</Link></li>
                        <li><Link href="/contact-us" className="btn border border-gray-400 btn-md hover:text-white transition-all hover:bg-gray-900">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                    <h2 className="text-white font-bold text-xl">Menu</h2>
                    <button onClick={() => setOpen(false)} className="text-white hover:text-orange-400 transition-colors">
                        <i className="fa-solid fa-times text-2xl"></i>
                    </button>
                </div>
                <div className="mobile-view p-6">
                    <ul className="space-y-4"> 
                        <li><Link href="/" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-home mr-3"></i>Home</Link></li>
                        <li><Link href="/about" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-info-circle mr-3"></i>About</Link></li>
                        <li><Link href="/programs" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-book mr-3"></i>Programs</Link></li>
                        <li><Link href="/impact" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-chart-line mr-3"></i>Impact</Link></li>
                        <li><Link href="/donate" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-heart mr-3"></i>Donate</Link></li>
                        <li><Link href="/volunteer" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-hand-holding-heart mr-3"></i>Volunteer</Link></li>
                        <li><Link href="/news" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-newspaper mr-3"></i>News</Link></li>
                        <li><Link href="/contact-us" onClick={() => setOpen(false)} className="block py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all text-center"><i className="fa-solid fa-envelope mr-3"></i>Contact</Link></li>
                    </ul>
                </div>
            </div>
            
            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"></div>}
            
        </>
    );
}
