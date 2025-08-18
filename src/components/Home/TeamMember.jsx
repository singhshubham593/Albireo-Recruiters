 import React from "react";
import { motion } from "framer-motion";
import Siddharth from "../../assets/Siddharth.jpg";
import Honey from "../../assets/HoneySahani.jpg";
import AarohiSharma from "../../assets/ArohiSharma.jpg";
import Arnapurna from "../../assets/Arnapurna.jpg";
import Chiranjeev from "../../assets/Chiranjeev.jpg";
import Hansika from "../../assets/Hansika.jpg";
import JaganmohanSharma from "../../assets/JagmohanSharma.jpg";
import MonikaSharma from "../../assets/MonikaSharma.jpg";
import NancyChawla from "../../assets/NancyChawla.jpg";
import Rohits from "../../assets/Rohits.jpg";
import Sangmitra from "../../assets/Sangmitra.jpg";
import BhavnaTyagi from "../../assets/BhavnaTyagi.jpg";
import VandniTyagi from "../../assets/VandniTyagi.jpg";
import Divya from "../../assets/Divya.jpg";
import princyGupta from "../../assets/PrincyGupta.jpg";
import Shweta from "../../assets/Shweta.jpg";
import Leehans from "../../assets/Leehans.jpg";
import Sagar from "../../assets/Sagar.jpg";
import PalakKothari from "../../assets/PalakKothari.jpg";
import Dayabathi from "../../assets/Dayabathi.jpg";
import Abhishek from "../../assets/Abhishek.jpg";
import SwetaSinha from "../../assets/SwetaSinha.jpg";
 


const people = [
  {
    name: "Siddharth Suneja",
    role: "Founder & CEO",
    image: Siddharth,
  },
  {
    name: "Honey Sahani",
    role: "Assistant Manager(Tech)",
    image:  Honey,
  },
  {
    name: "Chiranjeev Singh",
    role: "Manager - HR Operations & Admin",
    image:  Chiranjeev,
  },
  {
    name: "Abhishek Awasthi",
    role: "Business Head(ITES)",
    image: Abhishek,
  },
  {
    name: "Sweta Sinha",
    role: "Assistant Manager(Operations and Finance)",
    image: SwetaSinha,
  },
  {
    name: "Monika Sharma",
    role: "Assistant Manager(Strategy and consulting)",
    image:  MonikaSharma,
  },
  {
    name: "Aarohi Sharma",
    role: "Lead Talent Acquisition",
    image:  AarohiSharma,
  },
  {
    name: "Vandni Tyagi",
    role: "Lead Talent Acquisition",
    image:  VandniTyagi,
  },
  {
    name: "Leehans Bisht",
    role: "Lead Talent Acquisition",
    image:   Leehans,
  },
  {
    name: "Arnapurna Patra",
    role: "Sr. Career Consultant",
    image:  Arnapurna,
  },
  {
    name: "Rohit yodav",
    role: "Sr. Career Consultant",
    image:  Rohits,
  },
  {
    name: "Jaganmohan Sharma",
    role: "Sr. Career Consultant",
    image:  JaganmohanSharma,
  },
  {
    name: "Nancy Chawla",
    role: "Sr. Career Consultant",
    image:  NancyChawla,
  },
  {
    name: "Bhavna Tyagi",
    role: "Sr. Career Consultant",
    image:  BhavnaTyagi,
  },
  {
    name: "Princy Gupta",
    role: "Sr. Career Consultant",
    image:  princyGupta,
  },
  {
    name: "Dayabathi Das",
    role: "Sr. Career Consultant",
    image:  Dayabathi,
  },
  {
    name: "Sagar Sanjay",
    role:  "Career Consultant",
    image: Sagar,
  },
  {
    name: "Shweta Singh",
    role:  "Career Consultant",
    image:  Shweta,
  },
  {
    name: "Palak Kothari",
    role:  "Career Consultant",
    image: PalakKothari ,
  },
  {
    name: "Divya Govind",
    role:  "Career Consultant",
    image:  Divya,
  },
  {
    name: "Sangmitra",
    role:  "Career Consultant",
    image:  Sangmitra,
  },
  {
    name: "Hansika",
    role:  "Career Consultant",
    image: Hansika ,
  },  

];

const duplicatedPeople = [...people, ...people]; // For infinite loop

export default function OurPeople() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Our People
      </h2>

      <div className="overflow-hidden relative ">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
        >
          {duplicatedPeople.map((person, index) => (
            <div
              key={index}
              className="relative w-64 h-80 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rounded-2x bg-white"
            >
              <img
                loading="lazy"
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
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
