import React from 'react'

const Stats = () => {
  return (
     <div className="bg-gradient-to-t from-yellow-400 via-yellow-100 via-blue-300 to-blue-400 py-16 lg:px-15 md:px-10 sm:px-6 px-5">
        <div className="lg:max-w-6xl md:max-w-2xl sm:max-w-lg mx-auto grid grid-cols-2 md:grid-cols-4  gap-6 text-center text-white">
          {[
            { number: "50000+", label: "Successful Placements" },
            { number: "30+", label: "Tier-1 Clients" },
            { number: "8+", label: "Years of Excellence" },
            { number: "50+", label: "Expert Recruiters" },
          ].map((item, index) => (
            <div key={index} className="bg-black/30 p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-yellow-300">{item.number}</h3>
              <p className="mt-2 text-sm text-gray-100">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      
    
  )
}

export default Stats
