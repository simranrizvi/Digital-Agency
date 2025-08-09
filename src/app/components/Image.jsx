'use client'

import { useRef, useEffect, useState, useCallback } from 'react';
import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link';

const ExpandingHeader = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollDelta = useRef(0);
  const isIntersecting = useRef(false);

  const easeInOutCubic = useCallback((t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }, []);

  const animateProgress = useCallback((target) => {
    setProgress(prev => {
      const diff = target - prev;
      const newProgress = prev + diff * 0.015; // slower transition speed
      
      if (Math.abs(diff) > 0.001 && isIntersecting.current) {
        animationFrameRef.current = requestAnimationFrame(() => animateProgress(target));
      } else {
        animationFrameRef.current = null;
      }
      return newProgress;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.current = entry.isIntersecting;
        
        if (entry.isIntersecting) {
          const currentScrollY = window.scrollY;
          scrollDelta.current += Math.abs(currentScrollY - lastScrollY.current);
          lastScrollY.current = currentScrollY;

          // Slow down expansion — need more scroll to reach 100%
          const scrollFactor = Math.min(scrollDelta.current / 1500, 1);
          const targetProgress = easeInOutCubic(entry.intersectionRatio * scrollFactor);

          if (!animationFrameRef.current) {
            animateProgress(targetProgress);
          }
        } else if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      },
      {
        threshold: Array.from({ length: 81 }, (_, i) => (i + 20) * 0.01), // thresholds from 0.2 to 1.0
        rootMargin: '0px',
        root: null
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateProgress, easeInOutCubic]);

  // Calculate dynamic values
  const fixedHeight = '100vh';
  const initialWidth = 500; // bigger start circle
  const finalWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const imageWidth = `calc(${initialWidth}px + (${finalWidth}px - ${initialWidth}px) * ${progress})`;
  const borderRadius = `${50 - (50 * progress)}%`;
  const textOpacity = Math.max(0, (progress - 0.3) / 0.7); // clamp to 0-1 range

  return (
    <section
      ref={sectionRef}
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