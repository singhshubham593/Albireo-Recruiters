import React from 'react'
import { ArrowRight } from "lucide-react";

const Button = ({type}) => {
  return (
    <button className="inline-flex items-center gap-4 px-6 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
          {type}
          <span className="bg-black text-white rounded-full p-1 sm:p-2">
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
  )
}

export default Button
