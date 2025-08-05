import React from 'react'
import { ArrowRight } from "lucide-react";

const Button = ({type}) => {
  return (
    <button className="inline-flex items-center gap-4 px-4 py-3 sm:px-4 sm:py-2 md:px-8 md:py-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
          {type}
           
        </button>
  )
}

export default Button
