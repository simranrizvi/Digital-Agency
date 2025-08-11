"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const slideInVariants = {
  hiddenLeft: { x: -150, opacity: 0 },
  hiddenRight: { x: 150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 }
  }
};

const FloatingShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden -z-10"
    >
      <motion.div
        className="absolute top-1/4 left-1/4 w-56 h-56 rounded-full bg-blue-100 opacity-10 blur-3xl"
        style={{
          x: useTransform(springX, [0, 1200], [0, 80]),
          y: useTransform(springY, [0, 600], [0, 40])
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-blue-200 opacity-7 blur-3xl"
        style={{
          x: useTransform(springX, [0, 1200], [0, -120]),
          y: useTransform(springY, [0, 600], [0, -60])
        }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-blue-200 opacity-5`}
          style={{
            width: `${Math.floor(Math.random() * 30) + 15}px`,
            height: `${Math.floor(Math.random() * 30) + 15}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: useTransform(
              springX,
              [0, 1200],
              [0, (Math.random() - 0.5) * 30]
            ),
            y: useTransform(
              springY,
              [0, 600],
              [0, (Math.random() - 0.5) * 30]
            )
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 30],
            x: [0, (Math.random() - 0.5) * 30],
            opacity: [0.03, 0.1]
          }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

export default function ScrollImageSection() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const controls = useAnimation();

  const images = [
    { left: "/left1.png", right: "/right1.png", height: "h-64" },
    { left: "/left2.png", right: "/right2.png", height: "h-64" },
    { left: "/left3.png", right: "/right3.png", height: "h-64" },

  ];

  // Detect mobile or tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); 
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const itemWidth = isMobileOrTablet ? 240 : 300; 
  const gap = 16;
  const totalWidth = images.length * (itemWidth + gap);

  // Auto-slide on mobile/tablet
  useEffect(() => {
    if (isMobileOrTablet) {
      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  }, [isMobileOrTablet, controls, totalWidth]);

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-white px-6 py-8 overflow-hidden rounded-3xl shadow-none">
      <style jsx global>{`
        html {
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <FloatingShapes />

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 w-full max-w-7xl bg-white/90 backdrop-blur-sm rounded-3xl p-6 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {images.slice(0, 3).map((img, index) => (
            <motion.div
              key={`left-${index}`}
              ref={index === 0 ? ref1 : index === 1 ? ref2 : ref3}
              variants={slideInVariants}
              initial="hiddenLeft"
              animate={
                (index === 0 && inView1) ||
                (index === 1 && inView2) ||
                (index === 2 && inView3)
                  ? "visible"
                  : "hiddenLeft"
              }
              className={`w-full ${img.height} relative group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <Image
                src={img.left}
                alt={`left-${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <motion.div
            className="max-w-full mx-auto"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 leading-tight mb-3"
            >
              Our <span className="text-blue-500">Creative</span>
              <br />
              Portfolio
            </motion.h2>
            <motion.p
              className="mt-2 mb-6 text-gray-600 max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Each project reflects our passion for digital excellence.
            </motion.p>
            <Link href="/about">
              <button className="font-bold flex flex-row items-center gap-3 px-6 py-2 text-white border-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                <span>Explore More</span>
                <FiArrowRight className="text-xl bg-white text-blue-600 rounded-full w-7 h-7 p-1" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {images.slice(0, 3).map((img, index) => (
            <motion.div
              key={`right-${index}`}
              ref={index === 0 ? ref1 : index === 1 ? ref2 : ref3}
              variants={slideInVariants}
              initial="hiddenRight"
              animate={
                (index === 0 && inView1) ||
                (index === 1 && inView2) ||
                (index === 2 && inView3)
                  ? "visible"
                  : "hiddenRight"
              }
              className={`w-full ${img.height} relative group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <Image
                src={img.right}
                alt={`right-${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Layout with smooth infinite slide */}
      <div className="lg:hidden flex flex-col w-full max-w-4xl mx-auto">
        {/* Text on Top */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Our <span className="text-blue-500">Creative</span> Portfolio
          </h2>
          <p className="text-gray-600 text-sm max-w-sm mx-auto">
            Each project reflects our passion for digital excellence.
          </p>
        </div>

        {/* Auto Sliding Images */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={controls}
            style={{ x: 0 }}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-md"
                style={{ width: `${itemWidth}px`, height: "180px" }}
              >
                <Image
                  src={img.left}
                  alt=""
                  width={itemWidth}
                  height={180}
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
