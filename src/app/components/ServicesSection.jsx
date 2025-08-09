"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const controls = useAnimation();

  const services = [
    { id: 1, name: "Web Development", image: "/imge1.png" },
    { id: 2, name: "Mobile Apps", image: "/mobile.jpg" },
    { id: 3, name: "UI/UX Design", image: "/UI.jpg" },
    { id: 4, name: "Cloud Solutions", image: "/calud.jpg" },
    { id: 5, name: "AI Integration", image: "/AI.jpg" },
  ];

  const totalItems = services.length;
  const itemWidth = 300; // width of one card in px
  const gap = 32; // gap between cards in px
  const totalWidth = totalItems * (itemWidth + gap); // width of all cards + gaps

  useEffect(() => {
    if (isHovered) {
      // Start infinite horizontal scrolling animation
      controls.start({
        x: [-0, -totalWidth], // move from 0 to -totalWidth px
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // adjust speed here
            ease: "linear",
          },
        },
      });
    } else {
      // Stop animation and reset position to 0
      controls.stop();
      controls.set({ x: 0 });
    }
  }, [isHovered, controls, totalWidth]);

  return (
    <section
      className="relative w-full h-screen mb-[25px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col justify-center bg-white px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-500">
            Digital solutions that make an impact
          </h3>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-8 w-max cursor-pointer"
            animate={controls}
            style={{ x: 0 }}
          >
            {/* Duplicate services array to create seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div
                key={index} // index used because of duplicates
                className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-xl flex-shrink-0"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h4 className="text-white text-2xl font-bold">{service.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
