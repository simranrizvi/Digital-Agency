"use client";

import { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate API call delay
      await new Promise((r) => setTimeout(r, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Top full-width Image section */}
      <section
        className="w-full h-64 sm:h-[550px] relative bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg text-white"
          >
            Get <span className="text-blue-500">In</span> Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-white/90 text-base sm:text-lg md:text-xl drop-shadow-md"
          >
            Have a project or question? We'd love to hear from you. Reach out to us anytime!
          </motion.p>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 max-w-7xl">
        {/* Contact Form */}
        <div
          className="
            bg-white border-2 border-gray-300 rounded-3xl p-8 sm:p-10
            shadow-[0_10px_30px_rgba(0,0,0,0.15),0_20px_60px_rgba(0,0,0,0.1)]
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Form</h2>

          {isSubmitted && (
            <div className="bg-blue-500 bg-opacity-90 p-3 rounded-md mb-6 text-center font-semibold shadow-lg text-white">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6 text-black">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`w-full bg-white border-2 rounded-md px-4 py-3 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.name ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`w-full bg-white border-2 rounded-md px-4 py-3 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full bg-white border-2 rounded-md px-4 py-3 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.message ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 transition rounded-md py-3 font-semibold text-white shadow-md disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FiSend />
            </button>
          </form>
        </div>

        {/* Map & Info */}
        <div className="rounded-3xl overflow-hidden shadow-xl flex flex-col">
          {/* Embedded Google Map */}
          <iframe
            title="Digital Agency Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9790607916784!2d67.07389711494549!3d24.894903153926347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e4eb72f7487%3A0x74aebbc646a972a8!2sClifton%2C%20Karachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691757000000!5m2!1sen!2s"
            className="w-full h-64 sm:h-80 md:h-[28rem] rounded-t-3xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Contact Info Box */}
          <div className="bg-white p-8 rounded-b-3xl text-black space-y-6 flex-1 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Information</h2>

            <div className="flex items-center gap-4 text-gray-700">
              <FiMapPin className="text-blue-500 text-2xl flex-shrink-0" />
              <p className="text-base sm:text-lg">123 Digital St, Clifton, Karachi, Pakistan</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FiPhone className="text-blue-500 text-2xl flex-shrink-0" />
              <p className="text-base sm:text-lg">+92 300 1234567</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FiMail className="text-blue-500 text-2xl flex-shrink-0" />
              <p className="text-base sm:text-lg">contact@digitalagency.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
