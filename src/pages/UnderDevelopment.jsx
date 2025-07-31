import React from "react";
import { motion } from "framer-motion";

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        {/* Animated Icon */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-32 h-32 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="text-yellow-400 w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-4m6 4v-4m-8 4h10a2 2 0 002-2v-4a2 2 0 00-2-2h-1l1.447-4.34A1 1 0 0017.553 4H6.447a1 1 0 00-.947 1.66L7 9H6a2 2 0 00-2 2v4a2 2 0 002 2z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          This Page is Under Development 🚧
        </motion.h1>

        {/* Apology and Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          We're working hard to bring you something amazing. Please check back
          soon. Sorry for the inconvenience!
        </motion.p>

        {/* Button or Link (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Go Back Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
