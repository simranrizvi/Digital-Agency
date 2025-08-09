'use client'

import { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link';

const ExpandingHeader = () => {
  const [hovered, setHovered] = useState(false);

  const fixedHeight = '100vh';
  const initialWidth = 500;
  const finalWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;

  const imageWidth = hovered
    ? `${finalWidth}px`
    : `${initialWidth}px`;

  const borderRadius = hovered ? '0%' : '50%';
  const textOpacity = hovered ? 1 : 0;

  return (
    <section
      className="relative mx-auto bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/Background-1.png')",
        width: imageWidth,
        height: fixedHeight,
        borderRadius,
        margin: '20px auto',
        transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'width, border-radius'
      }}
      aria-label="Expanding header section with call to action"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex flex-col justify-center items-center h-full text-center text-white px-4"
        style={{
          opacity: textOpacity,
          transition: 'opacity 0.6s ease',
          willChange: 'opacity'
        }}
      >
        <div className='flex flex-row gap-3 py-[15px]'>
          <span className="w-7 h-7 bg-white rounded-full border-2 border-blue-500" />
          <span className="w-7 h-7 bg-blue-500 rounded-full" />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Let's code a better
          <br />
          future together
        </h1>
        
        <p className='text-base md:text-lg pt-4 pb-5 font-normal text-center tracking-wider max-w-2xl'>
          We focus on creating impactful IT solutions that solve
          real-world challenges. Through innovative technology,
          we drive progress and build a brighter future.
        </p>
        
        <Link
          href="/about"
          className="font-bold flex flex-row gap-4 justify-center items-center px-6 py-1.5 text-white border border-white rounded-full bg-blue-500 transition hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span>About Us</span> 
          <FiArrowRight className="text-md bg-amber-50 text-black rounded-full w-8 h-8 p-1" />
        </Link>
      </div>
    </section>
  );
};

export default ExpandingHeader;
