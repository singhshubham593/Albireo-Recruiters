import React from 'react'
import { ArrowRight } from "lucide-react";

const JobButton = ({type}) => {
  return (
    <button className="inline-flex items-center gap-2 px-3 py-2 sm:px-3 sm:py-3 md:px-3 md:py-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
          {type}
          <span className="bg-black text-white rounded-full p-1 sm:p-">
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
  )
}

export default JobButton;
