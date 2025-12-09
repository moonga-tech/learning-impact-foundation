"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-white shadow-md px-4 py-3 xl:px-8" role="navigation" aria-label="Main navigation">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/favicon-logo.png" alt="Learning Impact Zambia" width={40} height={40} className="logo-img" />
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

                <div id="primary-navigation" className="hidden xl:flex xl:items-center">
                    <ul className="flex gap-6 text-sm items-center"> 
                        <li><Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link></li>
                        <li><Link href="/programs" className="text-gray-700 hover:text-orange-500 transition-colors">Programs</Link></li>
                        <li><Link href="/impact" className="text-gray-700 hover:text-orange-500 transition-colors">Impact</Link></li>
                        <li><Link href="/donate" className="text-gray-700 hover:text-orange-500 transition-colors">Donate</Link></li>
                        <li><Link href="/volunteer" className="text-gray-700 hover:text-orange-500 transition-colors">Volunteer</Link></li>
                        <li><Link href="/contact-us" className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h2 className="text-white font-bold text-lg">Menu</h2>
                    <button onClick={() => setOpen(false)} className="text-white hover:text-orange-400 transition-colors p-2" aria-label="Close menu">
                        <i className="fa-solid fa-times text-xl"></i>
                    </button>
                </div>
                <div className="p-4">
                    <ul className="space-y-2"> 
                        <li><Link href="/" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-home w-5"></i><span className="ml-3">Home</span></Link></li>
                        <li><Link href="/about" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-info-circle w-5"></i><span className="ml-3">About</span></Link></li>
                        <li><Link href="/programs" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-book w-5"></i><span className="ml-3">Programs</span></Link></li>
                        <li><Link href="/impact" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-chart-line w-5"></i><span className="ml-3">Impact</span></Link></li>
                        <li><Link href="/donate" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-heart w-5"></i><span className="ml-3">Donate</span></Link></li>
                        <li><Link href="/volunteer" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-hand-holding-heart w-5"></i><span className="ml-3">Volunteer</span></Link></li>
                        <li><Link href="/news" onClick={() => setOpen(false)} className="flex items-center py-3 px-4 text-gray-300 hover:text-white hover:bg-orange-500 rounded-lg transition-all"><i className="fa-solid fa-newspaper w-5"></i><span className="ml-3">News</span></Link></li>
                        <li><Link href="/contact-us" onClick={() => setOpen(false)} className="flex items-center justify-center py-3 px-4 mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"><i className="fa-solid fa-envelope w-5"></i><span className="ml-3">Contact</span></Link></li>
                    </ul>
                </div>
            </div>
            
            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"></div>}
            
        </>
    );
}
