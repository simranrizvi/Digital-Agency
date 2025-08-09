"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative mt-[20px] h-screen w-[95%] rounded-4xl mx-auto bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Hero navbar jo aapne hero section me fixed lagaya hua hai */}
<div
  className="absolute left-1/2 transform -translate-x-1/2 top-5 w-[93%] rounded-full z-50 px-6 py-1  text-white flex justify-between items-center shadow-sm"
>
          <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-blue hover:text-white transition duration-300"
        >
          🛍️ Degital Agency
        </Link>
        <div className="flex gap-6 items-center text-base">
          <Link
            href="/Home"
            className="hover:text-white text-white py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="hover:text-white text-white p-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/AboutUs"
            className="hover:text-white text-white py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
          >
            About
          </Link>
          <Link
            href="/OurWork"
            className="hover:text-white text-white py-1 px-5 hover:bg-blue-500 rounded-full font-bold transition duration-300"
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
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 bg-black/40 rounded-4xl z-0"></div>
      <div className="relative z-10 grid grid-cols-3 gap-4 w-full h-full">
        <div className="rounded flex flex-col justify-end h-full pb-[40px] pl-[30px]">
          <h2 className="font-bold text-[80px] text-white leading-none ">
            We Build
            <br />
            Together
          </h2>
          <div className="flex gap-4 mt-[20px] pl-[20px]">
            <Link href="/services">
              <button className="font-bold flex flex-row gap-4 justify-center items-center px-6 py-1.5 text-white border border-white rounded-full bg-blue-500 hover:bg-transparent  transition">
                <span>Services</span>{" "}
                <FiArrowRight className="text-md bg-amber-50 text-black rounded-full px- py-0 w-8 h-8" />
              </button>
            </Link>

            <Link href="/about">
              <button className="font-bold flex flex-row gap-4 justify-center items-center px-6 py-1.5 text-white border border-white rounded-full hover:bg-blue-500 transition">
                <span>About Us</span>{" "}
                <FiArrowRight className="text-3xl bg-amber-50 text-black rounded-full px- py-0 w-8 h-8" />
              </button>
            </Link>
          </div>
        </div>
        <div className="p-4 rounded">2</div>
        <div className="p-4 rounded">3</div>
      </div>
    </section>
  );
}
