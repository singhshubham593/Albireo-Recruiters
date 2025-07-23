import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  // Replace these URLs with real image paths or imported assets
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/women/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
  "https://randomuser.me/api/portraits/men/16.jpg",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TeamSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Our People
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
      >
        The Executive Search industry's most seasoned consultants, bringing an
        agile mindset, an empathetic perspective and an entrepreneurial spirit
        to every client engagement.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-6xl mx-auto rounded-2xl overflow-hidden"
      >
        {teamMembers.map((src, index) => (
          <motion.div
            key={index}
            variants={item}
            className="w-full aspect-square"
          >
            <img
              src={src}
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamSection;
