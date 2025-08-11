"use client";

import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const ExpandingHeader = () => {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);
    }
  }, []);

  const fixedHeight = isDesktop ? "100vh" : "70vh";
  const initialWidth = isDesktop ? 500 : "100%";
  const finalWidth = isDesktop ? (typeof window !== "undefined" ? window.innerWidth : 1920) : "100%";

  const imageWidth = hovered && isDesktop ? `${finalWidth}px` : `${initialWidth}px`;
  const borderRadius = hovered && isDesktop ? "0%" : isDesktop ? "50%" : "1.5rem";
  const textOpacity = hovered || !isDesktop ? 1 : 0;

  return (
    <section
      className="relative mx-auto bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-1000"
      style={{
        backgroundImage: "url('/Background-1.png')",
        width: imageWidth,
        height: fixedHeight,
        borderRadius,
        margin: "20px auto",
      }}
      aria-label="Expanding header section with call to action"
      onMouseEnter={() => isDesktop && setHovered(true)}
      onMouseLeave={() => isDesktop && setHovered(false)}
    >
      <div
        className="flex flex-col justify-center items-center h-full text-center text-white px-4"
        style={{
          opacity: textOpacity,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* Dots */}
        <div className="flex flex-row gap-3 py-4">
          <span className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full border-2 border-blue-500" />
          <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Let's code a better
          <br />
          future together
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg pt-4 pb-5 font-normal text-center tracking-wider max-w-2xl">
          We focus on creating impactful IT solutions that solve real-world challenges.
          Through innovative technology, we drive progress and build a brighter future.
        </p>

        {/* Button */}
        <Link
          href="/about"
          className="font-bold flex flex-row gap-4 justify-center items-center px-5 py-1.5 text-white border border-white rounded-full bg-blue-500 transition hover:bg-blue-600 hover:scale-105"
        >
          <span>About Us</span>
          <FiArrowRight className="text-md bg-amber-50 text-black rounded-full w-8 h-8 p-1" />
        </Link>
      </div>
    </section>
  );
};

export default ExpandingHeader;
