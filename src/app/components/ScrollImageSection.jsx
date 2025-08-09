"use client";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
      {/* Floating circles with reduced opacity for subtle effect */}
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
      {/* Floating bubbles */}
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
          transition={{ duration: 15 + Math.random() * 25, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
    </div>
  );
};

export default function ScrollImageSection() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const images = [
    { left: "/left1.png", right: "/right1.png", height: "h-64" },
    { left: "/left2.png", right: "/right2.png", height: "h-64" },
    { left: "/left3.png", right: "/right3.png", height: "h-64" }
  ];

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-white px-6 py-8 overflow-hidden rounded-3xl shadow-none">
      {/* Hide scrollbar for the entire page */}
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

      {/* Animated background */}
      <FloatingShapes />

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl bg-white/90 backdrop-blur-sm rounded-3xl p-6 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {images.map((img, index) => (
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
            <div className="flex gap-2 items-center justify-center mb-4">
              <motion.span 
                className="w-8 h-8 bg-white rounded-full border-2 border-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.span 
                className="w-8 h-8 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3"
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

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/about">
                <button className="font-bold flex flex-row items-center gap-3 px-6 py-2 text-white border-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                  <span>Explore More</span>
                  <FiArrowRight className="text-xl bg-white text-blue-600 rounded-full w-7 h-7 p-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {images.map((img, index) => (
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
    </section>
  );
}
