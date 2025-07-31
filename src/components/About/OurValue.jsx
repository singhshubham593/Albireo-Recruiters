import React from 'react'

const OurValue = () => {
  return (
     <div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="text-blue-600">What Sets Us Apart</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Industry Focused Hiring",
              desc: "We understand niche industries and deliver candidates that match precise domain requirements.",
            },
            {
              title: "Agile & Transparent Process",
              desc: "We ensure timely communication and maintain transparency from sourcing to onboarding.",
            },
            {
              title: "Human-Centric Approach",
              desc: "We value long-term relationships with both clients and candidates based on trust and mutual respect.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default OurValue
