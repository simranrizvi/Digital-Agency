'use client';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Introduction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });

  const text = `We are a tight-knit team with 20+ years of experience helping early-stage startups showcase how good their products really are. Whether you're a seasoned player in the digital landscape or just stepping into it, we have the expertise and strategies to propel your brand.`;
  const words = text.split(' ');

  // Animation values
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      className="max-w-6xl p-6 md:p-10 mx-auto py-20"
      style={{ opacity, y }}
    >
      {/* Animated Dots */}
      <motion.div 
        className="flex gap-2 items-center justify-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="w-7 h-7 bg-white rounded-full border-2 border-blue-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.span 
          className="w-7 h-7 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Who Are <span className="text-blue-500">We?</span>
      </motion.h2>

      {/* Animated Text */}
      <div className="text-lg md:text-2xl font-normal leading-relaxed text-center max-w-4xl mx-auto">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: i * 0.03
            }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mt-12 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/services">
          <motion.button 
            className="font-bold flex items-center gap-3 px-8 py-3 text-white rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Services</span>
            <FiArrowRight className="text-xl bg-white text-blue-600 rounded-full w-7 h-7 p-1" />
          </motion.button>
        </Link>

        <Link href="/about">
          <motion.button 
            className="font-bold flex items-center gap-3 px-8 py-3 text-black border border-gray-300 rounded-full hover:text-blue-500 hover:border-blue-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>About Us</span>
            <FiArrowRight className="text-xl bg-gray-100 text-black rounded-full w-7 h-7 p-1" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;