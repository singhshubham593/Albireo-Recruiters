import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Albireo from "../../assets/AlbireoLogo.png"; // Replace with your actual image
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const images = [
    "/assets/Home1.png", // This image path should be relative to your public folder so put it in public/assets folder
    "/assets/Home2.png",
    "/assets/Home3.png",
    "/assets/Home4.png",
    "/assets/Home5.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 lg:mt-10 mb-5 px-6 md:px-20 py-12 bg-white">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2"
      >
         
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           Building careers. <br /> Building organisations.
        </h1> 
        <p className="text-lg text-gray-700 mb-8">
          Albireo Recruiters is a leading recruitment agency in India, specializing in hiring for Tier 1 companies across industries. We deliver fast, reliable, and domain-specific talent solutions with a focus on quality, speed, and long-term fit. Your trusted hiring partner, pan-India.
        </p>
        {/*
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-blue-600 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
            Get In Touch
            <span className="bg-black text-white rounded-full p-1 sm:p-2">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </span>
          </button>

          <div className="flex gap-4 ml-4">
            <a href="#">
              <img src={Albireo} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src={Albireo} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src={Albireo} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src={Albireo} alt="Glassdoor" className="w-6 h-6" />
            </a>
          </div>
        </div>
        */}
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2 flex flex-col items-center "
      >
        <div className="bg-gradient-to-br from-gray-100 via-blue-100 to-yellow-600 rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
          <img
          loading="lazy"
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="h-120 w-1200 sm:h-140 sm:w-140 md:h-100 md:w-140 lg:h-120 lg:w-160 object-cover rounded-lg transition-all duration-500 -translate-4"
          />
        </div>
        <div className="flex gap-2 mt-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentImage ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
