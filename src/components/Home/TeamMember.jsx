 import React from "react";
import { motion } from "framer-motion";

const people = [
  {
    name: "Amit Sharma",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Raj Malhotra",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const duplicatedPeople = [...people, ...people]; // For infinite loop

export default function OurPeople() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Our People
      </h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {duplicatedPeople.map((person, index) => (
            <div
              key={index}
              className="relative w-64 h-80 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-5 py-4 text-white">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-sm opacity-90">{person.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
