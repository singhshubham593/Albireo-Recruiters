import React from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative bg-white py-20 px-6 md:px-16 overflow-hidden text-center rounded-lg">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 blur-[140px] rounded-full transform translate-x-1/2 translate-y-1/2 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-8">
          Strengthen your Human Resource <br /> Strategy with{" "}
          <span className="text-blue-700">Alberio</span>
        </h2>

        <button className="inline-flex items-center gap-4 px-6 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-blue-600 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
          Get In Touch
          <span className="bg-black text-white rounded-full p-1 sm:p-2">
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
