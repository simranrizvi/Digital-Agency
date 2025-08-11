"use client";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-8 md:px-16 rounded-t-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16"
        >
          {/* Left Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/footer.png"
              alt="VIP Brand"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white mb-1 sm:mb-2"
              >
                Digital Agency
              </motion.h3>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4"
              >
                Transforming visions into digital reality
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-sm sm:text-base font-medium shadow-lg"
              >
                Get Started <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-base sm:text-lg font-extrabold text-blue-400 mb-4 sm:mb-6 tracking-wide uppercase flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Services
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {["Web Development", "Mobile Apps", "AI Solutions", "Cloud Systems", "UI/UX Design"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center cursor-pointer group text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-white/80 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-base sm:text-lg font-extrabold text-blue-400 mb-4 sm:mb-6 tracking-wide uppercase flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Projects
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "E-commerce Platforms",
                  "Enterprise Tools",
                  "Startup MVPs",
                  "Portfolio Websites",
                  "Custom Solutions",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center cursor-pointer group text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-white/80 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-base sm:text-lg font-extrabold text-blue-400 mb-4 sm:mb-6 tracking-wide uppercase flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Contact
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: <FiMail />, text: "info@yourbrand.com" },
                  { icon: <FiPhone />, text: "+1 234 567 890" },
                  { icon: <FiMapPin />, text: "New York, USA" },
                ].map((contact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 group text-sm sm:text-base"
                  >
                    <div className="p-2 bg-blue-600/20 rounded-full group-hover:bg-blue-600 transition-colors">
                      <span className="text-blue-400 text-lg">{contact.icon}</span>
                    </div>
                    <span className="text-white/80 group-hover:text-blue-400 transition-colors">
                      {contact.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Social & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex gap-4 sm:gap-6">
            {[
              { icon: <FaFacebookF />, color: "bg-blue-600" },
              { icon: <FaTwitter />, color: "bg-sky-500" },
              { icon: <FaInstagram />, color: "bg-gradient-to-tr from-purple-600 to-pink-600" },
              { icon: <FaLinkedinIn />, color: "bg-blue-700" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${social.color} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                href="#"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right text-xs sm:text-sm">
            <p className="text-white/70 italic mb-1">
              "We don't just build websites, we build digital experiences"
            </p>
            <p className="text-white/50">
              © {new Date().getFullYear()} VIP Digital Agency. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
