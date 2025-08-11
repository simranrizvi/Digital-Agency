"use client";
import Link from "next/link";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Navbar (md and above) */}
      <nav
        className={`hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 w-[93%] rounded-full z-50 mt-[15px] px-6 py-1.5 backdrop-blur-lg bg-white/8 border-b border-white/15 text-white justify-between items-center shadow-xl transition-transform duration-300 ease-in-out ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-black hover:text-white transition duration-300"
        >
          🛍️ Digital Agency
        </Link>
        <div className="flex gap-6 items-center text-base">
          <Link href="/Home" className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300">Home</Link>
          <Link href="/Services" className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300">Services</Link>
          <Link href="/AboutUs" className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300">About</Link>
          <Link href="/OurWork" className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300">Our Work</Link>
          <Link href="/contact">
            <button className="flex items-center justify-between font-bold bg-blue-600 text-white px-5 py-1 rounded-full hover:bg-blue-700 transition w-48">
              <span>Contact Us</span>
              <FiArrowRight className="text-lg bg-amber-50 text-black rounded-full px-2 w-9 h-9" />
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile & Tablet Navbar (< md) */}
     <nav className="md:hidden fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] mt-4 px-4 py-3 flex justify-between items-center bg-blue-600 text-white z-50 rounded-2xl">

        <Link href="/" className="text-lg font-bold tracking-wide">
          🛍️ Digital Agency
        </Link>
        <button
          className="text-2xl py-1 px-1 bg-white rounded-sm  text-blue-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-600 text-white flex flex-col items-center py-4 space-y-4 z-40 rounded-2xl shadow-lg">
          <Link href="/Home" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/Services" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/AboutUs" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/OurWork" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Our Work</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-white text-blue-600 px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
