"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Hero visible — hide navbar
          setShowNavbar(false);
        } else {
          // Hero not visible — show navbar
          setShowNavbar(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
  className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[93%] rounded-full z-50 mt-[15px] px-6 py-1.5 backdrop-blur-lg bg-white/8 border-b border-white/15 text-white flex justify-between items-center shadow-xl transition-transform duration-300 ease-in-out ${
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
        🛍️ Degital Agency
      </Link>
      <div className="flex gap-6 items-center text-base">
        <Link
          href="/Home"
          className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/Services"
          className="hover:text-white text-black p-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
        >
          Services
        </Link>
        <Link
          href="/AboutUs"
          className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
        >
          About
        </Link>
        <Link
          href="/OurWork"
          className="hover:text-white text-black py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
        >
          Our Work
        </Link>
        <Link href="/contact">
          <button className="flex items-center justify-between font-bold bg-blue-600 text-white px-5 py-1 rounded-full hover:bg-blue-700 transition w-48">
            <span>Contact Us</span>
            <FiArrowRight className="text-lg bg-amber-50 text-black rounded-full px-2 py-0 w-9 h-9" />
          </button>
        </Link>
      </div>
    </nav>
  );
}
