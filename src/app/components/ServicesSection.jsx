"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const controls = useAnimation();
  const sliderRef = useRef(null);

  const services = [
    { id: 1, name: "Web Development", image: "/imge1.png" },
    { id: 2, name: "Mobile Apps", image: "/mobile.jpg" },
    { id: 3, name: "UI/UX Design", image: "/UI.jpg" },
    { id: 4, name: "Cloud Solutions", image: "/calud.jpg" },
    { id: 5, name: "AI Integration", image: "/AI.jpg" },
  ];

  // Detect mobile or tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // lg breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const totalItems = services.length;
  const itemWidth = isMobileOrTablet ? 220 : 300; // smaller cards on mobile/tablet
  const gap = 20; // gap between cards
  const totalWidth = totalItems * (itemWidth + gap);

  // Handle auto-sliding
  useEffect(() => {
    if (isMobileOrTablet || isHovered) {
      controls.start({
        x: [-0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: isMobileOrTablet ? 15 : 20, // faster on mobile/tablet
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  }, [isHovered, isMobileOrTablet, controls, totalWidth]);

  return (
    <section
      className="relative w-full h-screen mb-[25px]"
      onMouseEnter={() => !isMobileOrTablet && setIsHovered(true)}
      onMouseLeave={() => !isMobileOrTablet && setIsHovered(false)}
    >
      <div className="h-full flex flex-col justify-center bg-white px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
            Digital solutions that make an impact
          </h3>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-5 w-max cursor-pointer"
            animate={controls}
            style={{ x: 0 }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-xl flex-shrink-0`}
                style={{
                  width: `${itemWidth}px`,
                  height: isMobileOrTablet ? "300px" : "400px",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h4 className="text-white text-xl md:text-2xl font-bold">
                    {service.name}
                  </h4>
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
