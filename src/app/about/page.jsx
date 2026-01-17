"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div 
      className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 text-center"
      initial={mounted ? { opacity: 0 } : false}
      animate={mounted ? { opacity: 1 } : false}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <title>About & Contact</title>

      <motion.div 
        className="max-w-5xl mx-auto px-6"
        initial={mounted ? { opacity: 0, y: 20 } : false}
        animate={mounted ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-10 mb-16 border border-slate-200 dark:border-slate-700">
          <h1 className="text-4xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
            About Us
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              Welcome to{" "}
              <span className="font-semibold">EliteTime</span> — your
              trusted destination for premium luxury watches. We combine
              elegance, durability, and modern design to ensure you get the finest
              timepieces.
            </p>

            <p className="font-semibold text-slate-900 dark:text-slate-100">
              Our mission is to provide:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>High-quality, authentic products</li>
              <li>Premium customer support</li>
              <li>Honest & transparent pricing</li>
              <li>Fast and secure shopping experience</li>
            </ul>

            <p>
              Every watch tells a story — of personality, style, and confidence.
              Thank you for choosing us to be a part of your journey!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto px-6"
        initial={mounted ? { opacity: 0, y: 20 } : false}
        animate={mounted ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-10 border border-slate-200 dark:border-slate-700">
          <h1 className="text-4xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
            Contact Us
          </h1>

          <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 text-center max-w-2xl mx-auto">
            Have questions? Feel free to reach out — we're here to help!
          </p>

          <div className="grid md:grid-cols-2 gap-6 bg-slate-100 dark:bg-slate-700 p-6 rounded-xl mb-10 border border-slate-200 dark:border-slate-600">
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-slate-100">📧 Email:</span>{" "}
              support@elitetime.com
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-slate-100">📞 Phone:</span> +880
              1234-567890
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-slate-100">📍 Address:</span>{" "}
              Dhaka, Bangladesh
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-slate-100">⏱ Support Hours:</span>{" "}
              10 AM – 10 PM
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800 text-white py-3 rounded-lg font-semibold hover:scale-105 cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page;
