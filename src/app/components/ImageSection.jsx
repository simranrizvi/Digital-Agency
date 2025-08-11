"use client";

import React from "react";
import { motion } from "framer-motion";

const TextSection = () => {
  return (
    <section className="w-full bg-white relative flex flex-col items-center justify-center px-4 py-10 sm:py-14 md:py-20 lg:py-24">
      {/* Animated Dots */}
      <motion.div
        className="flex gap-2 items-center justify-center mb-6 sm:mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-white rounded-full border-2 border-blue-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto px-2"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          We Develop Tech
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4 sm:mb-6 md:mb-8">
          solutions that matter
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed sm:leading-7 md:leading-8 lg:leading-9 px-1 sm:px-4">
          We focus on creating impactful IT solutions that solve real-world challenges.
          Through innovative technology, we drive progress and build a brighter future.
          Our mission is to create a lasting difference by shaping tomorrow with today's solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default TextSection;
