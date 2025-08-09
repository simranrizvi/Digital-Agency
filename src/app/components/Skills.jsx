'use client'
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaPaintBrush, FaMobileAlt, FaSearch, FaHeadset, FaClock, FaCogs } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  const [isOn, setIsOn] = useState(true); // Initially ON
  const [isHovered, setIsHovered] = useState(false);

  // ON Cards (Creative Skills)
  const creativeCards = [
    {
      icon: <FaPaintBrush className="text-black" size={28} />,
      title: "Creative Skills",
      desc: "Unique designs crafted for your brand, engaging users with cutting-edge visuals.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaMobileAlt className="text-black" size={28} />,
      title: "Responsive Designs",
      desc: "Delivering flawless experiences on every device, boosting user engagement and satisfaction.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaSearch className="text-black" size={28} />,
      title: "SEO Optimization",
      desc: "Enhancing your online visibility with strategies that improve search engine rankings.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaHeadset className="text-black" size={28} />,
      title: "Exceptional Support",
      desc: "Offering committed support throughout and after project completion to guarantee client satisfaction.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaClock className="text-black" size={28} />,
      title: "Quick Turnaround",
      desc: "Consistently meeting deadlines without sacrificing quality or efficiency.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaCogs className="text-black" size={28} />,
      title: "Custom Solutions",
      desc: "Designing custom websites tailored to your needs, improving functionality and user experience.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    }
  ];

  // OFF Cards (Generic Problems)
  const genericCards = [
    {
      icon: <FaPaintBrush className="text-black" size={28} />,
      title: "Generic Designs",
      desc: "Using the same old uninspired design that doesn't set your brand apart.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaMobileAlt className="text-black" size={28} />,
      title: "Poor User Experience",
      desc: "Teams struggling to collaborate effectively, hindering goal achievement.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaSearch className="text-black" size={28} />,
      title: "Low Visibility",
      desc: "Low visibility limits reach. We improve SEO to boost traffic.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaCogs className="text-black" size={28} />,
      title: "Limited Functionality",
      desc: "Limited functionality can hinder projects. We offer flexible solutions.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaClock className="text-black" size={28} />,
      title: "Missed Deadlines",
      desc: "Poor processes waste time and money with inefficiency.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      icon: <FaHeadset className="text-black" size={28} />,
      title: "Inadequate Support",
      desc: "Frequent conflicts disrupt teamwork and hinder productivity.",
      bg: "bg-gradient-to-br from-gray-50 to-white"
    }
  ];

  const cardsToShow = isOn ? creativeCards : genericCards;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Toggle Title */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-black"
        >
          When people
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-blue-500">
              {isOn ? "do" : "don't"}
            </span>
            <motion.button
              onClick={() => setIsOn(!isOn)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-500 flex items-center px-1 bg-gray-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-500`}
                animate={{
                  x: isOn ? 32 : 0,
                }}
              />
            </motion.button>
            <span className="text-black">work with us.</span>
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          See the difference between working with professionals and going it alone
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {cardsToShow.map((card, index) => (
            <motion.div
              key={`${isOn ? "on" : "off"}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${card.bg} rounded-2xl shadow-xl p-8 flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 border border-opacity-10 border-gray-200`}
              whileHover={{ y: -5 }}
            >
              <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center bg-gray-100`}>
                {card.icon}
              </div>
              <h3 className={`text-xl font-bold text-black`}>{card.title}</h3>
              <p className="text-md text-gray-700">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Glowing CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
       <div className="flex justify-center">
  <button className="cursor-pointer  relative px-8 py-4 bg-blue-500 flex flex-row justify-center items-center gap-3 text-white font-bold rounded-full text-lg overflow-hidden group">
    <span className="relative z-10">Let's Create Something Amazing</span>
    <FiArrowRight className="text-md bg-amber-50 text-black rounded-full px- py-0 w-8 h-8" />
  </button>
</div>
      </motion.div>
    </section>
  );
};