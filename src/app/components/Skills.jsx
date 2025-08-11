'use client'
import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaPaintBrush, FaMobileAlt, FaSearch, FaHeadset, FaClock, FaCogs } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  const [isOn, setIsOn] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width only on client side
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const creativeCards = [
    { icon: <FaPaintBrush size={24} className="text-black" />, title: "Creative Skills", desc: "Unique designs crafted for your brand, engaging users with cutting-edge visuals." },
    { icon: <FaMobileAlt size={24} className="text-black" />, title: "Responsive Designs", desc: "Delivering flawless experiences on every device, boosting user engagement and satisfaction." },
    { icon: <FaSearch size={24} className="text-black" />, title: "SEO Optimization", desc: "Enhancing your online visibility with strategies that improve search engine rankings." },
    { icon: <FaHeadset size={24} className="text-black" />, title: "Exceptional Support", desc: "Offering committed support throughout and after project completion to guarantee client satisfaction." },
    { icon: <FaClock size={24} className="text-black" />, title: "Quick Turnaround", desc: "Consistently meeting deadlines without sacrificing quality or efficiency." },
    { icon: <FaCogs size={24} className="text-black" />, title: "Custom Solutions", desc: "Designing custom websites tailored to your needs, improving functionality and user experience." }
  ];

  const genericCards = [
    { icon: <FaPaintBrush size={24} className="text-black" />, title: "Generic Designs", desc: "Using the same old uninspired design that doesn't set your brand apart." },
    { icon: <FaMobileAlt size={24} className="text-black" />, title: "Poor User Experience", desc: "Teams struggling to collaborate effectively, hindering goal achievement." },
    { icon: <FaSearch size={24} className="text-black" />, title: "Low Visibility", desc: "Low visibility limits reach. We improve SEO to boost traffic." },
    { icon: <FaCogs size={24} className="text-black" />, title: "Limited Functionality", desc: "Limited functionality can hinder projects. We offer flexible solutions." },
    { icon: <FaClock size={24} className="text-black" />, title: "Missed Deadlines", desc: "Poor processes waste time and money with inefficiency." },
    { icon: <FaHeadset size={24} className="text-black" />, title: "Inadequate Support", desc: "Frequent conflicts disrupt teamwork and hinder productivity." }
  ];

  const cardsToShow = isOn ? creativeCards : genericCards;

  // Calculate toggle position safely
  const toggleX = isOn
    ? windowWidth < 640
      ? 20
      : windowWidth < 768
      ? 26
      : 32
    : 0;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-bold mb-6 text-black"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            When people
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 flex-wrap">
            <span className="text-blue-500 text-lg sm:text-xl md:text-2xl font-semibold">{isOn ? "do" : "don't"}</span>
            <motion.button
              onClick={() => setIsOn(!isOn)}
              className="relative w-12 sm:w-14 md:w-16 h-6 sm:h-7 md:h-8 rounded-full bg-gray-300 flex items-center px-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle switch"
            >
              <motion.span
                className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-white rounded-full shadow-lg"
                animate={{ x: toggleX }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              />
            </motion.button>
            <span className="text-black text-lg sm:text-xl md:text-2xl font-semibold">work with us.</span>
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-2"
        >
          See the difference between working with professionals and going it alone
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="wait">
          {cardsToShow.map((card, index) => (
            <motion.div
              key={`${isOn ? "on" : "off"}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 border-opacity-10"
              whileHover={{ y: -4 }}
            >
              <div className="p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black">{card.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{card.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 text-center"
      >
        <div className="flex justify-center">
          <button className="cursor-pointer px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-blue-500 flex items-center gap-2 sm:gap-3 text-white font-bold rounded-full text-sm sm:text-base md:text-lg group hover:scale-105 transition">
            <span>Let's Create Something Amazing</span>
            <FiArrowRight className="text-xs sm:text-sm md:text-md bg-amber-50 text-black rounded-full w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 p-1" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
