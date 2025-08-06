 import React from "react";
import { motion } from "framer-motion";
import Siddharth from "../../assets/Siddharth.jpg";
import Honey from "../../assets/HoneySahani.jpg";
import AarohiSharma from "../../assets/AarohiSharma.jpg";
import Arnapurna from "../../assets/Arnapurna.jpg";
import Chiranjeev from "../../assets/Chiranjeev.jpg";
import Hansika from "../../assets/Hansika.jpg";
import JaganmohanSharma from "../../assets/JagmohanSharma.jpg";
import MonikaSharma from "../../assets/MonikaSharma.jpg";
import NancyChawla from "../../assets/NancyChawla.jpg";
import Rohit from "../../assets/Rohit.jpg";
import Sangmitra from "../../assets/Sangmitra.jpg";
import BhavnaTyagi from "../../assets/BhavnaTyagi.jpg";
import VandniTyagi from "../../assets/VandniTyagi.jpg";
import Divya from "../../assets/Divya.jpg";
import princyGupta from "../../assets/PrincyGupta.jpg";
import Swati from "../../assets/Swati.jpg";


const people = [
  {
    name: "Siddharth Suneja",
    role: "Founder & CEO",
    image: Siddharth,
  },
  {
    name: "Honey Sahani",
    role: "Chief Technology Officer",
    image:  Honey,
  },
  {
    name: "Chiranjeev Singh",
    role: "Lead Designer",
    image:  Chiranjeev,
  },
  {
    name: "Aarohi Sharma",
    role: "Product Manager",
    image:  AarohiSharma,
  },
  {
    name: "Arnapurna Patra",
    role: "Marketing Head",
    image:  Arnapurna,
  },
  {
    name: "Hansika",
    role: "Marketing Head",
    image: Hansika ,
  },
  {
    name: "Jaganmohan Sharma",
    role: "Marketing Head",
    image:  JaganmohanSharma,
  },
  {
    name: "Monika Sharma",
    role: "Marketing Head",
    image:  MonikaSharma,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  NancyChawla,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  Rohit,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  Sangmitra,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  BhavnaTyagi,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  VandniTyagi,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  princyGupta,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  Swati,
  },
  {
    name: "Vikram Mehra",
    role: "Marketing Head",
    image:  Divya,
  }    

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
